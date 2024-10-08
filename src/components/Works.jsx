/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { github, liveSite } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  features,
  tags,
  image,
  frontend_code_link,
  backend_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 850,
        }}
        className="bg-tertiary p-5 rounded-2xl h-[630px] sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className=" w-10 h-10 rounded-full flex-col justify-center items-center cursor-pointer">
              {/* <a href={source_code_link}> */}
              <img
                onClick={() => window.open(live_site_link, "_blank")}
                src={liveSite}
                alt="source code"
                className="w-full h-full object-contain"
              />
              {frontend_code_link && (
                <img
                  onClick={() => window.open(frontend_code_link, "_blank")}
                  src={github}
                  alt="source code"
                  className=" w-full h-full mr-4 object-contain"
                />
              )}
              {backend_code_link && (
                <img
                  onClick={() => window.open(backend_code_link, "_blank")}
                  src={github}
                  alt="source code"
                  className=" w-full h-full mr-4 object-contain"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-200 text-[14px] pb-3">{description}</p>
        </div>

        <div>
          <ol className="list-decimal list-inside space-y-2">
            {features?.map((feature) => (
              <li key={feature?.id} className="py-1 px-4 rounded-lg shadow-md">
                {feature?.text}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
