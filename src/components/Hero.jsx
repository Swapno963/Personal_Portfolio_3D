import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../constants";
import ResumeLinks from "./analytics/ResumeLinks";
import TrackedAnchor from "./analytics/TrackedAnchor";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)");

    const update = () => {
      setShowCanvas(desktop.matches && motionOk.matches);
    };

    update();
    desktop.addEventListener("change", update);
    motionOk.addEventListener("change", update);

    return () => {
      desktop.removeEventListener("change", update);
      motionOk.removeEventListener("change", update);
    };
  }, []);

  return (
    <section className="relative w-full mx-auto pt-28 pb-8 sm:pt-32">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1">
          <p className="text-[#915EFF] font-medium tracking-wide uppercase text-[13px] sm:text-[14px]">
            {profile.shortRole}
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {profile.name.split(" ")[0]}{" "}
            <span className="text-[#915EFF]">{profile.name.split(" ")[1]}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100 max-w-3xl`}>
            {profile.role}
          </p>
          <p className="mt-4 text-secondary text-[16px] sm:text-[18px] max-w-2xl leading-[28px]">
            {profile.pitch}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-tertiary px-3 py-1 text-[13px] text-white-100"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
            <a
              href="#projects"
              className="bg-[#915EFF] hover:bg-[#7c49e8] py-3 px-6 rounded-xl text-white font-semibold"
            >
              View work
            </a>
            <TrackedAnchor
              href={profile.github}
              source="hero"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white py-3 px-6 rounded-xl text-white font-semibold"
            >
              GitHub
            </TrackedAnchor>
            <ResumeLinks
              source="hero"
              viewClassName="border border-white/20 hover:border-white py-3 px-6 rounded-xl text-white font-semibold"
              downloadClassName="border border-white/20 hover:border-white py-3 px-6 rounded-xl text-white font-semibold"
            />
          </div>
        </div>
      </div>

      {showCanvas && (
        <div className="relative h-[380px] w-full max-w-7xl mx-auto mt-6 hidden lg:block">
          <ComputersCanvas />
        </div>
      )}

      <div className="mt-10 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
