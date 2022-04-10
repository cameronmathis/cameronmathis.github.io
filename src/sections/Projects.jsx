import React from "react";

import Project from "../components/Project";
import { PROJECTS } from "../constants/ProjectConstants";
import * as styles from "./css/Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects} id="projects" data-testid="projects">
      {PROJECTS.map((project) => (
        <Project link={project.link} image={project.image} />
      ))}
    </section>
  );
}

export default Projects;
