import PropTypes from "prop-types";
const Heading = ({ tag: Tag, children, className, ...props }) => {
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
};
Heading.defaultProps = {
  tag: "h1",
  children: "default",
  className: "heading",
};
Heading.propTypes = {
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Heading;
