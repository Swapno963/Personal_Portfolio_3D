import posthog from "posthog-js";

import { profile } from "../constants";

export const PORTFOLIO_VERSION = "v1";

const rawPosthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
export const POSTHOG_KEY =
  rawPosthogKey && rawPosthogKey !== "phc_..." ? rawPosthogKey : undefined;

export const POSTHOG_HOST =
  import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

export const posthogOptions = {
  api_host: POSTHOG_HOST,
  defaults: "2026-05-30",
  autocapture: false,
  capture_pageview: false,
  person_profiles: "identified_only",
  disable_session_recording: false,
  session_recording: {
    maskAllInputs: true,
    maskTextSelector: "input, textarea",
  },
  loaded: (client) => {
    client.register({ portfolio_version: PORTFOLIO_VERSION });
  },
};

const onceKeys = new Set();

export function once(key, fn) {
  if (onceKeys.has(key)) return;

  try {
    const storageKey = `ph_once:${key}`;
    if (sessionStorage.getItem(storageKey)) {
      onceKeys.add(key);
      return;
    }
    sessionStorage.setItem(storageKey, "1");
  } catch {
    // Private mode / blocked storage: fall through to in-memory only.
  }

  onceKeys.add(key);
  fn();
}

export function capture(event, props = {}) {
  if (import.meta.env.DEV && typeof window !== "undefined") {
    window.__phEvents = window.__phEvents || [];
    window.__phEvents.push({ event, props });
  }
  if (!POSTHOG_KEY) return;
  posthog.capture(event, props);
}

export function trackPageView(page) {
  capture("page_view", { page });
}

export function trackResume(kind) {
  capture(kind === "download" ? "resume_download" : "resume_view", {
    resume_version: profile.resume_version,
  });
}

export function trackProject(event, { project, project_category, ...rest }) {
  capture(event, {
    project,
    ...(project_category ? { project_category } : {}),
    ...rest,
  });
}

export function trackOutbound(event, props = {}) {
  capture(event, props);
}

function safeUrl(href) {
  try {
    return new URL(href, window.location.origin);
  } catch {
    return null;
  }
}

function isResumeHref(href) {
  const url = safeUrl(href);
  const resume = safeUrl(profile.resume);
  if (!url || !resume) return href === profile.resume;
  return url.pathname === resume.pathname;
}

function isMailto(href) {
  return Boolean(href) && href.trim().toLowerCase().startsWith("mailto:");
}

function isLinkedIn(href) {
  const url = safeUrl(href);
  return Boolean(url?.hostname?.includes("linkedin.com"));
}

function isProfileGithub(href) {
  const url = safeUrl(href);
  const github = safeUrl(profile.github);
  if (!url || !github) return href === profile.github;
  return (
    url.origin === github.origin &&
    url.pathname.replace(/\/$/, "") === github.pathname.replace(/\/$/, "")
  );
}

function isExternalHttp(href) {
  const url = safeUrl(href);
  if (!url) return false;
  return (
    url.origin !== window.location.origin &&
    (url.protocol === "http:" || url.protocol === "https:")
  );
}

function withSource(props, source) {
  return source ? { ...props, source } : props;
}

export function handleOutboundClick({
  href,
  source,
  project,
  download = false,
  demo = false,
}) {
  const fromContact = source === "contact";

  if (demo && project) {
    trackProject("project_demo_click", { project });
    return;
  }

  if (isResumeHref(href)) {
    trackResume(download ? "download" : "view");
    if (fromContact) capture("contact_click", { method: "resume" });
    return;
  }

  if (isMailto(href)) {
    trackOutbound("email_click", withSource({}, source));
    if (fromContact) capture("contact_click", { method: "email" });
    return;
  }

  if (isLinkedIn(href)) {
    trackOutbound("linkedin_click", withSource({}, source));
    if (fromContact) capture("contact_click", { method: "linkedin" });
    return;
  }

  if (project) {
    trackProject("project_github_click", { project });
    return;
  }

  if (isProfileGithub(href)) {
    trackOutbound("github_click", withSource({}, source));
    if (fromContact) capture("contact_click", { method: "github" });
    return;
  }

  if (isExternalHttp(href)) {
    trackOutbound("external_link_click", {
      destination: safeUrl(href).host,
    });
  }
}
