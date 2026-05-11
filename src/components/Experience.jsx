import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useLocation } from "react-router-dom";
import { styles } from "../styles";

const Experience = () => {
            const { search } = useLocation();
        const query = new URLSearchParams(search);
        const mode =query.get("mode") || "backend";  
        
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
        <p className={styles.sectionHeadText}>Experience</p>
      {/* {mode && technologies[mode].map((technology) => (
        <div className='w-28 h-28' key={technology.name}  >
          <BallCanvas icon={technology.icon} name={technology.name}/>
        </div>
      ))} */}
    </div>
  );
};

export default SectionWrapper(Experience, "");
