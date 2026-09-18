import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a backend-focused engineer with about two years of professional
        work. I spend most of my time on APIs, data models, and the path from
        a git push to a machine that stays up: Docker, GitHub Actions, Terraform,
        and AWS.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        At Meraki Innovation I own production systems — a configurable
        multi-database dashboard, RBAC, document versioning, and deploys to
        on-prem Windows Server and AWS. Before that I shipped Django in
        production at Cooking Station, including schema changes under live
        requirements.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Day to day I work in Python (Django/DRF, FastAPI) and Go (Gin), with
        PostgreSQL and Redis. QueryMind is the system I use to talk about
        AI in production: LangGraph, allow-lists, and a policy layer so the
        model cannot authorize writes. I can ship React/Next when a product
        needs a UI. I am not positioning myself as a frontend or Three.js
        specialist, and I do not list Kubernetes as a core skill.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
