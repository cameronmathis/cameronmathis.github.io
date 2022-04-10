import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import React, { useState } from "react";

import "./css/BackToTopButton.css";

const BackToTopButton = () => {
  const [style, setStyle] = useState({ display: "flex" });

  window.onscroll = function () {
    if (window.pageYOffset === 0) {
      setStyle({ display: "none" });
    } else {
      setStyle({ display: "flex" });
    }
  };

  return (
    <a
      className="back__to__top__button"
      data-testid="back__to__top__button"
      aria-label="Back to top"
      href="#top"
      style={style}
    >
      <ArrowUpwardIcon fontSize="medium" />
    </a>
  );
};

export default BackToTopButton;
