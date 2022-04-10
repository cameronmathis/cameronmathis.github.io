import React from "react";
// import constants
import { aboutConstants as ABOUT_CONSTANTS } from "../constants/AboutConstants";
// import css
import "./css/About.css";

function About() {
  return (
    <section className="about" id="about" data-testid="about">
      <h2 className="name about__name">{ABOUT_CONSTANTS.NAME}</h2>
      <p className="job__title about__job__title" data-testid="job__title">
        {ABOUT_CONSTANTS.JOB_TITLE}
      </p>
      <div className="about__body">
        <p data-testid="paragraph__one">{ABOUT_CONSTANTS.PARAGRAPH_ONE}</p>
        <p data-testid="paragraph__two">{ABOUT_CONSTANTS.PARAGRAPH_TWO}</p>
        <p data-testid="paragraph__three">{ABOUT_CONSTANTS.PARAGRAPH_THREE}</p>
      </div>
      <img src={ABOUT_CONSTANTS.IMAGE} alt="" class="about__image" />
    </section>
  );
}

export default About;
