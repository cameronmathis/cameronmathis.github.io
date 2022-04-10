import React from "react";

import AltImage from "../images/projects/AltImage.jpg";

import "./css/Project.css";

const Project = (props) => {
  return (
    <a
      class="project__item"
      data-testid="project__item"
      aria-label="Project"
      href={props.link}
    >
      <img src={props.image} alt={AltImage} class="project__image" />
    </a>
  );
};

export default Project;
