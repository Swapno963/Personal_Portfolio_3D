import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackPageView } from "../../lib/analytics";

let lastPage;

const PageTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lastPage === pathname) return;
    lastPage = pathname;
    trackPageView(pathname);
  }, [pathname]);

  return null;
};

export default PageTracker;
