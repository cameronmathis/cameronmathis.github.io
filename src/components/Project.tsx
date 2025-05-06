import React from 'react';

import AltImage from '../images/projects/AltImage.jpg';

import * as styles from './css/Project.module.css';

export interface ProjectProps {
    link: string;
    image: string;
}

export function Project({ link, image }: ProjectProps) {
    return (
        <a
            className={styles.project__item}
            data-testid='project__item'
            aria-label='Project'
            href={link}>
            <img src={image} alt={AltImage} className={styles.project__image} />
        </a>
    );
}
