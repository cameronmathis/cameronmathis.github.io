import React from "react";
import { useTranslation } from "react-i18next";

import { aboutConstants as ABOUT_CONSTANTS } from "../constants/AboutConstants";
import * as styles from "./css/About.module.css";

function About() {
  const { t } = useTranslation('about');

  return (
    <section className={styles.about} id="about" data-testid="about">
      <h2 className={styles.name}>{t('name')}</h2>
      <p className={styles.job__title} data-testid="job__title">
        {t('jobTitle')}
      </p>
      <div className={styles.about__body}>
        <p
          className={styles.about__body__paragraph}
          data-testid="paragraph__one"
        >
          {t('paragraphs.paragraph1')}
        </p>
        <p
          className={styles.about__body__paragraph}
          data-testid="paragraph__two"
        >
          {t('paragraphs.paragraph2')}
        </p>
        <p
          className={styles.about__body__paragraph}
          data-testid="paragraph__three"
        >
          {t('paragraphs.paragraph3')}
        </p>
      </div>
      <img src={ABOUT_CONSTANTS.IMAGE} alt="" className={styles.about__image} />
    </section>
  );
}

export default About;
