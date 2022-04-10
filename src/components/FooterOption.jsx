import React from "react";

import "./css/FooterOption.css";

const FooterOption = (props) => {
  return (
    <a
      className="footer__option"
      data-testid="footer__option"
      aria-label="Footer option"
      target="blank"
      href={props.link}
    >
      {props.icon}
    </a>
  );
};

export default FooterOption;
