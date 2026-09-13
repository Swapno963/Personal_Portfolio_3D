import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { productionProofs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Production = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>How I ship</p>
        <h2 className={styles.sectionHeadText}>Production.</h2>
      </motion.div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Not badges. These are habits tied to the projects above.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {productionProofs.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            className="bg-black-100 rounded-2xl p-6"
          >
            <h3 className="text-white text-[18px] font-bold">{item.title}</h3>
            <p className="mt-3 text-secondary text-[15px] leading-[26px]">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Production, "production");
