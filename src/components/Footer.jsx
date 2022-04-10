import React from "react";

import { FOOTER_OPTIONS } from "../constants/FooterConstants";
import FooterOption from "./FooterOption";

import "./css/Footer.css";

function Footer() {
  return (
    <footer class="footer" data-testid="footer">
      {FOOTER_OPTIONS.map((option) => (
        <FooterOption link={option.link} icon={option.icon} />
      ))}
    </footer>
  );
}

export default Footer;
