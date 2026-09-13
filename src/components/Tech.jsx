import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { skillGroups } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I actually use</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Honest ratings. Strong means I have shipped it in production or in a
        system I operate. Familiar means I have touched it and will not put it
        on a screening call as a core skill.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            className="bg-tertiary rounded-2xl p-6 border border-white/5"
          >
            <p className="text-[#915EFF] text-[13px] uppercase tracking-wider">
              {group.level}
            </p>
            <h3 className="text-white text-[22px] font-bold mt-1">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-secondary text-[15px]">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
