import React from "react";
import { resumeConstants as RESUME_CONSTANTS } from "../constants/ResumeConstants";
import * as styles from "./css/Resume.module.css";

function Resume() {
  return (
    <section className={styles.resume} id="resume" data-testid="resume">
      <img
        src={RESUME_CONSTANTS.RESUME}
        alt=""
        className={styles.resume__image}
      />
    </section>
  );
}

export default Resume;
