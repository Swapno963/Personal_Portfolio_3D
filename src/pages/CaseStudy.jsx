import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { styles } from "../styles";
import { getProjectBySlug, profile, projects } from "../constants";
import { capture, once } from "../lib/analytics";
import ResumeLinks from "../components/analytics/ResumeLinks";
import TrackedAnchor from "../components/analytics/TrackedAnchor";

const Section = ({ title, children }) => (
  <section className="mt-12">
    <h2 className="text-white text-[28px] font-bold">{title}</h2>
    <div className="mt-4 text-secondary text-[16px] leading-[28px] space-y-3">
      {children}
    </div>
  </section>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project?.id || !project.caseStudy) return;
    once(`project_view:${project.id}`, () => {
      capture("project_view", {
        project: project.id,
        project_category: project.project_category,
      });
    });
    once(`project_expand:${project.id}`, () => {
      capture("project_expand", { project: project.id });
    });
  }, [project]);

  if (!project || !project.caseStudy) {
    return (
      <main className="min-h-screen pt-32 pb-20 max-w-3xl mx-auto px-6">
        <h1 className="text-white text-3xl font-bold">Project not found</h1>
        <p className="mt-4 text-secondary">
          That case study does not exist. Featured work lives on the homepage.
        </p>
        <Link to="/#projects" className="inline-block mt-8 text-[#915EFF]">
          ← Back to projects
        </Link>
      </main>
    );
  }

  const { caseStudy } = project;
  const others = projects.filter(
    (item) => item.hasCaseStudy && item.slug !== project.slug
  );

  return (
    <main className="relative z-0 bg-primary min-h-screen pt-28 pb-24">
      <article className={`max-w-5xl mx-auto ${styles.paddingX}`}>
        <Link to="/#projects" className="text-[#915EFF] text-[15px]">
          ← Selected work
        </Link>

        <p className={`${styles.sectionSubText} mt-8`}>Case study</p>
        <h1 className="text-white font-black text-[36px] sm:text-[48px] leading-tight">
          {project.name}
        </h1>
        <p className="mt-4 text-white-100 text-[18px] max-w-3xl leading-[30px]">
          {caseStudy.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-tertiary px-3 py-1 text-[13px] text-white-100"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-[15px]">
          {project.source_code_link && (
            <TrackedAnchor
              href={project.source_code_link}
              project={project.id}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915EFF]"
            >
              {project.sourceStatus === "writeup"
                ? "Public write-up"
                : "GitHub"}
            </TrackedAnchor>
          )}
          {project.live_link && (
            <TrackedAnchor
              href={project.live_link}
              project={project.id}
              demo
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915EFF]"
            >
              Live demo
            </TrackedAnchor>
          )}
          <ResumeLinks
            source="case_study"
            viewClassName="hover:text-white"
            downloadClassName="hover:text-white"
          />
          <TrackedAnchor
            href={profile.github}
            source="case_study"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </TrackedAnchor>
        </div>

        {project.diagrams?.map((diagram) => (
          <button
            key={diagram.alt}
            type="button"
            className="mt-10 block w-full cursor-zoom-in"
            onClick={() => {
              capture("project_architecture_click", { project: project.id });
            }}
          >
            <img
              src={diagram.src}
              alt={diagram.alt}
              className="w-full rounded-2xl border border-white/10 bg-[#0b0a1a]"
            />
          </button>
        ))}

        <Section title="Problem">{caseStudy.problem}</Section>
        <Section title="Users">{caseStudy.users}</Section>
        <Section title="Constraints">{caseStudy.constraints}</Section>

        <Section title="Architecture">
          <ul className="list-disc ml-5 space-y-2">
            {caseStudy.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Key decisions">
          {caseStudy.decisions.map((decision) => (
            <div key={decision.title} className="mb-6">
              <h3 className="text-white text-[18px] font-semibold">
                {decision.title}
              </h3>
              <p className="mt-2">{decision.body}</p>
            </div>
          ))}
        </Section>

        <Section title="Implementation">
          <ul className="list-disc ml-5 space-y-2">
            {caseStudy.implementation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Challenges">
          <ul className="list-disc ml-5 space-y-2">
            {caseStudy.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Production / deploy">
          <ul className="list-disc ml-5 space-y-2">
            {caseStudy.deploy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        {project.screenshots?.length > 0 && (
          <Section title="Evidence">
            <div className="grid sm:grid-cols-2 gap-4">
              {project.screenshots.map((shot) => (
                <figure key={shot.alt} className="bg-tertiary rounded-2xl p-3">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full rounded-xl object-cover"
                  />
                  <figcaption className="mt-2 text-[13px] text-secondary">
                    {shot.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}

        <Section title="Results">
          <ul className="list-disc ml-5 space-y-2">
            {caseStudy.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Lessons">
          <ul className="list-disc ml-5 space-y-2">
            {caseStudy.lessons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-white text-[22px] font-bold">More work</h2>
          <div className="mt-4 flex flex-col gap-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={`/projects/${item.slug}`}
                className="text-[#915EFF]"
              >
                {item.name} →
              </Link>
            ))}
            <Link to="/#contact" className="text-secondary hover:text-white">
              Contact / resume
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default CaseStudy;
