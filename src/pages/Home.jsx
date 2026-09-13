import { useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Production,
  Tech,
  Works,
  StarsCanvas,
} from "../components";

const Home = () => {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;

    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    const timer = window.setTimeout(scrollToHash, 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Works />
      <Experience />
      <Tech />
      <Production />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;
