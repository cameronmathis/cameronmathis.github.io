import React, { Dispatch, SetStateAction } from 'react';

import * as styles from './css/MenuButton.module.css';

export interface MenuButtonProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export function MenuButton({ open, setOpen, ...props }: MenuButtonProps) {
    const isExpanded = open ? true : false;

    const openStyle = {
        spanOne: { transform: 'rotate(45deg)', background: 'white' },
        spanTwo: {
            opacity: 0,
            transform: 'translateX(-20px)',
            background: 'white',
        },
        spanThree: { transform: 'rotate(-45deg)', background: 'white' },
    };

    const closedStyle = {
        spanOne: { transform: 'rotate(0)' },
        spanTwo: { opacity: 1, transform: 'translateX(0)' },
        spanThree: { transform: 'rotate(0)' },
    };

    return (
        <button
            className={styles.menu__button}
            data-testid='menu__button'
            aria-label='Toggle menu'
            aria-expanded={isExpanded}
            onClick={() => setOpen(!open)}
            {...props}>
            <span
                className={styles.menu__button__span}
                data-testid='span'
                style={open ? openStyle.spanOne : closedStyle.spanOne}
            />
            <span
                className={styles.menu__button__span}
                data-testid='span'
                style={open ? openStyle.spanTwo : closedStyle.spanTwo}
            />
            <span
                className={styles.menu__button__span}
                data-testid='span'
                style={open ? openStyle.spanThree : closedStyle.spanThree}
            />
        </button>
    );
}
