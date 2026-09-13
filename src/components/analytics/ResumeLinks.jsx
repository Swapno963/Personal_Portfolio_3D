import { profile } from "../../constants";
import TrackedAnchor from "./TrackedAnchor";

const RESUME_DOWNLOAD_NAME = "Swapno-Mondol-Backend-DevOps.pdf";

const ResumeLinks = ({
  source,
  viewClassName,
  downloadClassName,
  viewLabel = "Resume",
  downloadLabel = "Download",
}) => {
  return (
    <>
      <TrackedAnchor
        href={profile.resume}
        source={source}
        target="_blank"
        rel="noopener noreferrer"
        className={viewClassName}
      >
        {viewLabel}
      </TrackedAnchor>
      <TrackedAnchor
        href={profile.resume}
        source={source}
        download={RESUME_DOWNLOAD_NAME}
        className={downloadClassName}
      >
        {downloadLabel}
      </TrackedAnchor>
    </>
  );
};

export default ResumeLinks;
