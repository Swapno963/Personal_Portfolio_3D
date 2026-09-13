# Portfolio analytics (PostHog)

Anonymous product analytics for this site: which projects, resume actions, and campaigns convert. No recruiter names, emails, form contents, or raw IPs are sent as event properties. `identify()` is never called.

PostHog Cloud region: **US** (`https://us.i.posthog.com`).

## Local and Vercel env

Copy `.env.example` to `.env` and set a real project token. Leave `VITE_PUBLIC_POSTHOG_KEY` empty to disable analytics.

```
VITE_PUBLIC_POSTHOG_KEY=phc_...
VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

The token is a **public** frontend key. Still keep a filled `.env` out of git.

On Vercel, add the same two variables to the project (Production + Preview). After the first production deploy, confirm one UTM visit lands in Live events.

Init is privacy-safe:

- Autocapture off; `page_view` is sent only from our tracker
- `person_profiles: identified_only` (we never identify, so no person profiles)
- Session replay on with `maskAllInputs: true` and `maskTextSelector: input, textarea`
- Contact fields also have the `ph-mask` class
- Super property on every event: `portfolio_version: "v1"`

## Event taxonomy

| Event | When | Properties |
| --- | --- | --- |
| `page_view` | Route change (`/` or `/projects/:slug`) | `page` |
| `resume_view` | Open PDF in a new tab | `resume_version` |
| `resume_download` | Explicit download click | `resume_version` |
| `project_view` | Card ~50% visible **or** case-study page mount | `project`, `project_category` |
| `project_expand` | Click “Case study” / land on case-study route | `project` |
| `project_github_click` | GitHub or public write-up from a project | `project` |
| `project_demo_click` | Live demo link (wired; none exist yet) | `project` |
| `project_architecture_click` | Click a case-study diagram | `project` |
| `experience_view` | `#experience` enters viewport (once/session) | `section: "experience"` |
| `skills_view` | `#skills` enters viewport (once/session) | `section: "skills"` |
| `github_click` | Profile GitHub (hero / contact / case study) | `source` |
| `linkedin_click` | LinkedIn | `source` |
| `email_click` | `mailto:` | `source` |
| `contact_click` | Contact section CTA | `method` (`email` / `form` / `linkedin` / `github` / `resume`) |
| `contact_start` | First focus on the contact form (once/session) | — |
| `contact_submit` | Form submit (mailto or EmailJS) | `method` |
| `scroll_depth` | 25 / 50 / 75 / 90, once each per page | `page`, `depth` |
| `external_link_click` | Any other outbound URL | `destination` (host only) |

Stable project IDs: `education_saas` (backend), `querymind` (ai), `shopverse` (backend), `restaurant_qr` (saas). Resume file today is `resume_version: "backend_v1"`.

Do **not** send names, emails, message bodies, or full URLs with query strings.

## UTM cookbook (ready to paste)

`posthog-js` copies `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` onto events when the landing URL has them. No extra client code.

Replace `https://YOUR_DOMAIN` with the production host. Never put a company or person name in UTM values.

**LinkedIn social**

```
https://YOUR_DOMAIN/?utm_source=linkedin&utm_medium=social&utm_campaign=backend
```

**USA backend applications (resume v1)**

```
https://YOUR_DOMAIN/?utm_source=application&utm_medium=job_application&utm_campaign=usa_backend&utm_content=resume_v1
```

**Europe backend applications**

```
https://YOUR_DOMAIN/?utm_source=application&utm_medium=job_application&utm_campaign=europe_backend
```

**GitHub profile README**

```
https://YOUR_DOMAIN/?utm_source=github&utm_medium=profile&utm_campaign=github_readme
```

Local smoke test (after a key is in `.env`):

```
http://localhost:5173/?utm_source=application&utm_medium=job_application&utm_campaign=usa_backend
```

Then filter Live events by `$utm_campaign = usa_backend`. Production localhost noise is `$host` `localhost` or `127.0.0.1` — exclude that host in insights.

## Country / source / device (PostHog UI)

No custom geo code. After events flow:

1. Project settings → enable **GeoIP enrichment**.
2. Turn on **discard IP after generating geo** so `$geoip_country_code` / `$geoip_country_name` remain and the raw IP is not stored.
3. Use breakdowns: `$geoip_country_name`, `$referring_domain`, `$utm_source`, `$utm_campaign`, `$device_type`.

## Funnels (PostHog UI)

Code cannot create these without a personal API key. Build them under Product analytics → Funnels.

### 1. Recruiter intent

Ordered steps, unique users, last 30 days:

1. `page_view` where `page` = `/`
2. `experience_view`
3. `project_view`
4. `resume_view`
5. `resume_download`
6. `linkedin_click` **OR** `email_click`

Breakdown suggestions: `$utm_campaign`, `$geoip_country_name`, `$device_type`.

### 2. Engagement

1. `page_view`
2. `project_view`
3. `project_github_click`
4. `resume_view`
5. `contact_submit`

Breakdown suggestions: `project`, `$utm_source`.

## Dashboards (five)

Create empty dashboards first, then drop the insights below onto each.

### 1. Overview

- Unique visitors (`page_view` uniques)
- Countries (`$geoip_country_name`)
- Sources (`$referring_domain`, `$utm_source`)
- Pages (`page_view` by `page`)
- Device (`$device_type`)
- Scroll (`scroll_depth` by `depth`)

### 2. Projects

- `project_view` vs `project_github_click` vs `project_demo_click` vs `project_expand`
- Breakdown by `project` (and `project_category` on views)

### 3. Resume

- `resume_view` vs `resume_download`
- Breakdown by `resume_version`, `$utm_source`, `$geoip_country_name`

### 4. Recruitment funnel

- The recruiter-intent funnel from above
- Optional: the engagement funnel beside it

### 5. Experiments

- Empty placeholder for P2 (hero copy, project order, resume version). Leave a text card: “Flags and experiments land here.”

## Verify

1. Put a real `VITE_PUBLIC_POSTHOG_KEY` in `.env` and run `npm run dev`.
2. Click Resume (new tab), Download, GitHub, a case study, and a project GitHub link.
3. Confirm those events in PostHog **Activity → Live**. Without a key, `npm run dev` still records the same payloads on `window.__phEvents` (dev only).
4. Fill the contact form with dummy text and submit (or focus it). In **Session replay**, name / email / message must appear masked, not as typed text.
5. Filter `$host` is not production so localhost sessions do not pollute hiring dashboards.
6. After deploy: open `/?utm_campaign=usa_backend` once and confirm `$utm_campaign` on the `page_view`.
