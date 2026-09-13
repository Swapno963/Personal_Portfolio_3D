import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { capture, once } from "../../lib/analytics";

const SECTIONS = [
  { id: "experience", event: "experience_view" },
  { id: "skills", event: "skills_view" },
];

const SectionViewTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") return undefined;

    const observers = SECTIONS.map(({ id, event }) => {
      const marker = document.getElementById(id);
      const target = marker?.closest("section") ?? marker;
      if (!target) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          once(event, () => capture(event, { section: id }));
          observer.disconnect();
        },
        { threshold: 0.35 }
      );

      observer.observe(target);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [pathname]);

  return null;
};

export default SectionViewTracker;
