import * as styles from "./css/Project.module.css";
import React from "react";

import AltImage from "../images/projects/AltImage.jpg";

function Project(props) {
  return (
    <a
      className={styles.project__item}
      data-testid="project__item"
      aria-label="Project"
      href={props.link}
    >
      <img src={props.image} alt={AltImage} className={styles.project__image} />
    </a>
  );
};

export default Project;
