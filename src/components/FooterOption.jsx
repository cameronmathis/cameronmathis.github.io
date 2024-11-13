import * as styles from "./css/FooterOption.module.css";
import React from "react";

function FooterOption(props) {
  return (
    <a
      className={styles.footer__option}
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
