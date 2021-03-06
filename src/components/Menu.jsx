import { bool } from "prop-types";
import React from "react";
import * as styles from "./css/Menu.module.css";

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const openStyle = {
    menu: { transform: "translateX(0)" },
    words: { display: "flex" },
  };
  const closedStyle = {
    menu: { transform: "translateX(100%)" },
    words: { display: "none" },
  };

  function handleClick() {
    setOpen(false);
  }

  return (
    <nav
      data-testid="menu"
      style={isHidden ? openStyle.menu : closedStyle.menu}
      open={isHidden}
      aria-hidden={!isHidden}
      {...props}
    >
      <a
        className={styles.menu__option}
        href="#about"
        tabIndex={tabIndex}
        style={isHidden ? openStyle.words : closedStyle.words}
        onClick={handleClick}
      >
        About
      </a>
      <a
        className={styles.menu__option}
        href="#resume"
        tabIndex={tabIndex}
        style={isHidden ? openStyle.words : closedStyle.words}
        onClick={handleClick}
      >
        Resume
      </a>
      <a
        className={styles.menu__option}
        href="#projects"
        tabIndex={tabIndex}
        style={isHidden ? openStyle.words : closedStyle.words}
        onClick={handleClick}
      >
        Projects
      </a>
    </nav>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
