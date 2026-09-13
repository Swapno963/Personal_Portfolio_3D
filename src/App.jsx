import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import PageTracker from "./components/analytics/PageTracker";
import ScrollDepthTracker from "./components/analytics/ScrollDepthTracker";
import SectionViewTracker from "./components/analytics/SectionViewTracker";
import CaseStudy from "./pages/CaseStudy";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <PageTracker />
      <ScrollDepthTracker />
      <SectionViewTracker />
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
