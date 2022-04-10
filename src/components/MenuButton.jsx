import * as styles from "./css/MenuButton.module.css";
import { bool, func } from "prop-types";
import React from "react";

import "./css/MenuButton.css";

const MenuButton = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  const openStyle = {
    spanOne: { transform: "rotate(45deg)" },
    spanTwo: { opacity: 0, transform: "translateX(-20px)" },
    spanThree: { transform: "rotate(-45deg)" },
  };
  const closedStyle = {
    spanOne: { transform: "rotate(0)" },
    spanTwo: { opacity: 1, transform: "translateX(0)" },
    spanThree: { transform: "rotate(0)" },
  };

  return (
    <button
      className="menu__button"
      data-testid="menu__button"
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span
        data-testid="span"
        style={open ? openStyle.spanOne : closedStyle.spanOne}
      />
      <span
        data-testid="span"
        style={open ? openStyle.spanTwo : closedStyle.spanTwo}
      />
      <span
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
