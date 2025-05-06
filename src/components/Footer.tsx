import React, { ReactElement } from 'react';

import { FOOTER_OPTIONS } from '../constants/FooterConstants';
import { FooterOption } from './FooterOption';

import * as styles from './css/Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer} data-testid='footer'>
            {FOOTER_OPTIONS.map(
                (option: { link: string; icon: ReactElement }, i) => (
                    <FooterOption
                        key={i}
                        link={option.link}
                        icon={option.icon}
                    />
                )
            )}
        </footer>
    );
}
