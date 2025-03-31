import React from 'react';

import { Project } from '../components/Project';
import { PROJECTS } from '../constants/ProjectConstants';

import * as styles from './css/Projects.module.css';

export function Projects() {
    return (
        <section
            className={styles.projects}
            id='projects'
            data-testid='projects'>
            {PROJECTS.map((project: { link: string; image: string }, i) => (
                <Project key={i} link={project.link} image={project.image} />
            ))}
        </section>
    );
}
