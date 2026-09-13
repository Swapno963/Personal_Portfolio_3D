import React from "react";
import ReactDOM from "react-dom/client";
import { PostHogProvider } from "@posthog/react";
import posthog from "posthog-js";

import App from "./App";
import { POSTHOG_KEY, posthogOptions } from "./lib/analytics";
import "./index.css";

if (POSTHOG_KEY) {
  posthog.init(POSTHOG_KEY, posthogOptions);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {POSTHOG_KEY ? (
      <PostHogProvider client={posthog}>
        <App />
      </PostHogProvider>
    ) : (
      <App />
    )}
  </React.StrictMode>
);
