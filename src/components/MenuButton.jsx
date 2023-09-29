import { bool, func } from "prop-types";
import React from "react";
import * as styles from "./css/MenuButton.module.css";

const MenuButton = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  const openStyle = {
    spanOne: { transform: "rotate(45deg)", background: "white" },
    spanTwo: {
      opacity: 0,
      transform: "translateX(-20px)",
      background: "white",
    },
    spanThree: { transform: "rotate(-45deg)", background: "white" },
  };

  const closedStyle = {
    spanOne: { transform: "rotate(0)" },
    spanTwo: { opacity: 1, transform: "translateX(0)" },
    spanThree: { transform: "rotate(0)" },
  };

  return (
    <button
      className={styles.menu__button}
      data-testid="menu__button"
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span
        className={styles.menu__button__span}
        data-testid="span"
        style={open ? openStyle.spanOne : closedStyle.spanOne}
      />
      <span
        className={styles.menu__button__span}
        data-testid="span"
        style={open ? openStyle.spanTwo : closedStyle.spanTwo}
      />
      <span
        className={styles.menu__button__span}
        data-testid="span"
        style={open ? openStyle.spanThree : closedStyle.spanThree}
      />
    </button>
  );
};

MenuButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MenuButton;
