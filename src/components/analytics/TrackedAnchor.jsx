import { handleOutboundClick } from "../../lib/analytics";

const TrackedAnchor = ({
  source,
  project,
  demo = false,
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
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
};

export default TrackedAnchor;
