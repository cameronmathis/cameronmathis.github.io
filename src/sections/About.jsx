import React from "react";

import { aboutConstants as ABOUT_CONSTANTS } from "../constants/AboutConstants";
import * as styles from "./css/About.module.css";

function About() {
  return (
    <section className={styles.about} id="about" data-testid="about">
      <h2 className={styles.name}>{ABOUT_CONSTANTS.NAME}</h2>
      <p className={styles.job__title} data-testid="job__title">
        {ABOUT_CONSTANTS.JOB_TITLE}
      </p>
      <div className={styles.about__body}>
        <p
          className={styles.about__body__paragraph}
          data-testid="paragraph__one"
        >
          {ABOUT_CONSTANTS.PARAGRAPH_ONE}
        </p>
        <p
          className={styles.about__body__paragraph}
          data-testid="paragraph__two"
        >
          {ABOUT_CONSTANTS.PARAGRAPH_TWO}
        </p>
        <p
          className={styles.about__body__paragraph}
          data-testid="paragraph__three"
        >
          {ABOUT_CONSTANTS.PARAGRAPH_THREE}
        </p>
      </div>
      <img src={ABOUT_CONSTANTS.IMAGE} alt="" className={styles.about__image} />
    </section>
  );
}

export default About;
