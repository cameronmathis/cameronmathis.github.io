import React, { ReactElement } from 'react';

import * as styles from './css/FooterOption.module.css';

export interface FooterOptionProps {
    link: string;
    icon: ReactElement;
}

export function FooterOption({ link, icon }: FooterOptionProps) {
    return (
        <a
            className={styles.footer__option}
            data-testid='footer__option'
            aria-label='Footer option'
            target='blank'
            href={link}>
            {icon}
        </a>
    );
}
