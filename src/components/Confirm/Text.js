const Text = ({
  children,
  color = "text-gray-500",
  center = false,
  bold = false,
}) => {
  const classes = `text-base ${color} ${center ? "text-center" : ""} ${
    bold ? "font-semibold" : "font-light"
  }`;
  return <p className={classes}>{children}</p>;
};

export default Text;