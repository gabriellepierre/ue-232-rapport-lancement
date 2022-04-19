import { Link as ReactLink } from "react-router-dom";

function scrollTop() {
  document.documentElement.scrollTo(0, 0);
}

export const Link = (props) => {
  return <ReactLink onClick={() => scrollTop()} {...props} />;
};
