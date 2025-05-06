import React from 'react';

import resume from '../images/Resume.jpg';

import * as styles from './css/Resume.module.css';

export function Resume() {
    return (
        <section className={styles.resume} id='resume' data-testid='resume'>
            <img src={resume} alt='' className={styles.resume__image} />
        </section>
    );
}
