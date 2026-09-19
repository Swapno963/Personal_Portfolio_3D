import { profile } from "../../constants";
import TrackedAnchor from "./TrackedAnchor";

const ResumeLinks = ({
  source,
  viewClassName,
  downloadClassName,
  compact = false,
}) => {
  const resumes = profile.resumes || [
    {
      id: "default",
      label: "Resume",
      href: profile.resume,
      version: profile.resume_version,
      downloadName: "Swapno-Mondol-Backend-Engineer.pdf",
    },
  ];

  return (
    <>
      {resumes.map((resume) => (
        <TrackedAnchor
          key={resume.id}
          href={resume.href}
          source={source}
          resumeVersion={resume.version}
          target="_blank"
          rel="noopener noreferrer"
          className={viewClassName || downloadClassName}
        >
          {compact ? resume.label : `${resume.label} resume`}
        </TrackedAnchor>
      ))}
    </>
  );
};

export default ResumeLinks;
