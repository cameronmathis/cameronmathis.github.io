import React from "react";
// import constants
import { resumeConstants as RESUME_CONSTANTS } from "../constants/ResumeConstants";
// import css
import "./css/Resume.css";

function Resume() {
  return (
    <section class="resume" id="resume" data-testid="resume">
      <img src={RESUME_CONSTANTS.RESUME} alt="" class="resume__image" />
    </section>
  );
}

export default Resume;
