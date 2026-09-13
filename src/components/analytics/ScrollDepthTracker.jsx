import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { capture, once } from "../../lib/analytics";

const DEPTHS = [25, 50, 75, 90];

const ScrollDepthTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const scrolled = window.scrollY + window.innerHeight;
      const height = Math.max(root.scrollHeight, 1);
      const percent = Math.round((scrolled / height) * 100);

      DEPTHS.forEach((depth) => {
        if (percent < depth) return;
        once(`scroll_depth:${pathname}:${depth}`, () => {
          capture("scroll_depth", { page: pathname, depth });
        });
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
};

export default ScrollDepthTracker;
