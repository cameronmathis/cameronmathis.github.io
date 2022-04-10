import React from "react";
// import components
import Project from "../components/Project";
// import constants
import { PROJECTS } from "../constants/ProjectConstants";
// import css
import "./css/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects" data-testid="projects">
      {PROJECTS.map((project) => (
        <Project link={project.link} image={project.image} />
      ))}
    </section>
  );
}

export default Projects;
