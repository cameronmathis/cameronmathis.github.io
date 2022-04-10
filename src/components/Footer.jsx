import * as styles from "./css/Footer.module.css";
import React from "react";

import { FOOTER_OPTIONS } from "../constants/FooterConstants";
import FooterOption from "./FooterOption";

function Footer() {
  return (
    <footer className={styles.footer} data-testid="footer">
      {FOOTER_OPTIONS.map((option) => (
        <FooterOption link={option.link} icon={option.icon} />
      ))}
    </footer>
  );
}

export default Footer;
