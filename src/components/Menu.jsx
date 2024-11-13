import { bool } from "prop-types";
import React from "react";
import { useTranslation } from 'react-i18next';
import * as styles from "./css/Menu.module.css";

function Menu({ open, setOpen, ...props }) {
  const { t } = useTranslation('header');

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const openStyle = {
    menu: { transform: "translateX(0)" },
    words: { display: "flex" },
  };
  const closedStyle = {
    menu: { transform: "translateX(100%)" },
    words: { display: "none" },
  };

  function handleClick() {
    setOpen(false);
  }

  return (
    <nav
      data-testid="menu"
      style={isHidden ? openStyle.menu : closedStyle.menu}
      open={isHidden}
      aria-hidden={!isHidden}
      {...props}
    >
      <a
        className={styles.menu__option}
        href={t('menu.menuItems.item1.href')}
        tabIndex={tabIndex}
        style={isHidden ? openStyle.words : closedStyle.words}
        onClick={handleClick}
      >
        {t('menu.menuItems.item1.text')}
      </a>
      <a
        className={styles.menu__option}
        href={t('menu.menuItems.item2.href')}
        tabIndex={tabIndex}
        style={isHidden ? openStyle.words : closedStyle.words}
        onClick={handleClick}
      >
        {t('menu.menuItems.item2.text')}
      </a>
      <a
        className={styles.menu__option}
        href={t('menu.menuItems.item3.href')}
        tabIndex={tabIndex}
        style={isHidden ? openStyle.words : closedStyle.words}
        onClick={handleClick}
      >
        {t('menu.menuItems.item3.text')}
      </a>
    </nav>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
