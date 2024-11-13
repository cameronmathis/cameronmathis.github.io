import React, { useRef, useState } from 'react';

import { useOnClickOutside } from '../services/Hooks';
import { Menu } from './Menu';
import { MenuButton } from './MenuButton';

import * as styles from './css/Header.module.css';

export function Header() {
    const [open, setOpen] = useState(false);
    const headerRef = useRef<HTMLInputElement>(null);

    useOnClickOutside(headerRef, () => setOpen(false));

    return (
        <header className={styles.header} id='header' data-testid='header'>
            <div ref={headerRef}>
                <MenuButton open={open} setOpen={setOpen} />
                <Menu
                    className={styles.menu}
                    open={open}
                    setOpen={setOpen}
                    id='menu'
                />
            </div>
        </header>
    );
}
