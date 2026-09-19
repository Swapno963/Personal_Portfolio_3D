import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profile } from "../constants";
import { capture, once } from "../lib/analytics";
import ResumeLinks from "./analytics/ResumeLinks";
import TrackedAnchor from "./analytics/TrackedAnchor";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [showGlobe, setShowGlobe] = useState(false);

  const emailConfigured = Boolean(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  );

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () => setShowGlobe(desktop.matches && motionOk.matches);
    update();
    desktop.addEventListener("change", update);
    motionOk.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      motionOk.removeEventListener("change", update);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    capture("contact_submit", { method: emailConfigured ? "emailjs" : "mailto" });
    capture("contact_click", { method: "form" });

    if (!emailConfigured) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio from ${form.name || "Hiring"}`
      )}&body=${encodeURIComponent(`${form.message}\n\n${form.email}`)}`;
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Sent. I will reply as soon as I can.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus(`Could not send via the form. Email me at ${profile.email}.`);
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-6 flex flex-col gap-2 text-secondary text-[16px]">
          <TrackedAnchor
            href={`mailto:${profile.email}`}
            source="contact"
            className="hover:text-white"
          >
            {profile.email}
          </TrackedAnchor>
          <TrackedAnchor
            href={profile.linkedin}
            source="contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </TrackedAnchor>
          <TrackedAnchor
            href={profile.github}
            source="contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </TrackedAnchor>
          <ResumeLinks
            source="contact"
            viewClassName="hover:text-white"
          />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onFocus={() => once("contact_start", () => capture("contact_start"))}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ph-mask"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Work email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nina.v@example.com"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ph-mask"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What should we talk about?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ph-mask"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : emailConfigured ? "Send" : "Open email"}
          </button>
          {status && <p className="text-secondary">{status}</p>}
        </form>
      </motion.div>

      {showGlobe && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
