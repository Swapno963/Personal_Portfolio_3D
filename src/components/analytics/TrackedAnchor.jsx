import { handleOutboundClick } from "../../lib/analytics";

const TrackedAnchor = ({
  source,
  project,
  demo = false,
  resumeVersion,
  onClick,
  children,
  ...props
}) => {
  return (
    <a
      {...props}
      onClick={(event) => {
        handleOutboundClick({
          href: props.href,
          source,
          project,
          download: Boolean(props.download),
          demo,
          resumeVersion,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
};

export default TrackedAnchor;
