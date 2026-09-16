import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { capture, once } from "../lib/analytics";
import TrackedAnchor from "./analytics/TrackedAnchor";

const ProjectCard = ({
  index,
  id,
  project_category,
  name,
  description,
  problem,
  tags,
  image,
  source_code_link,
  live_link,
  sourceStatus,
  hasCaseStudy,
  slug,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || !id) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        once(`project_view:${id}`, () => {
          capture("project_view", { project: id, project_category });
        });
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id, project_category]);

  return (
    <motion.div ref={cardRef} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name} architecture`}
            className="w-full h-full object-contain rounded-2xl bg-[#0b0a1a]"
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <TrackedAnchor
                href={source_code_link}
                project={id}
                target="_blank"
                rel="noopener noreferrer"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                aria-label={`${name} source`}
              >
                <img src={github} alt="" className="w-1/2 h-1/2 object-contain" />
              </TrackedAnchor>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[22px]">
            {problem}
          </p>
          <p className="mt-3 text-white-100 text-[14px] leading-[22px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-[14px]">
          {hasCaseStudy && (
            <Link
              to={`/projects/${slug}`}
              className="text-[#915EFF] font-semibold"
              onClick={() => {
                once(`project_expand:${id}`, () => {
                  capture("project_expand", { project: id });
                });
              }}
            >
              Case study →
            </Link>
          )}
          {source_code_link && (
            <TrackedAnchor
              href={source_code_link}
              project={id}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white"
            >
              {sourceStatus === "writeup" ? "Write-up" : "GitHub"}
            </TrackedAnchor>
          )}
          {live_link && (
            <TrackedAnchor
              href={live_link}
              project={id}
              demo
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white"
            >
              Live demo
            </TrackedAnchor>
          )}
          {sourceStatus === "request" && (
            <span className="text-secondary">Source on request</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Selected work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Systems I designed and operated. Each card is a real problem, a stack
          I actually used, and a link to source or a write-up. There are no
          placeholder apps and no fake live demos.
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
