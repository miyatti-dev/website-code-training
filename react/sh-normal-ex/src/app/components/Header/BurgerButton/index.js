"use client";

import styles from "./style.module.scss";

export default function BurgerButton({
  navId,
  openMenuFlag,
  isTopPage,
  isScrollTop,
  onClick,
}) {
  return (
    <button
      type="button"
      className={styles.burgerButton}
      aria-controls={navId}
      aria-expanded={openMenuFlag}
      area-label="メニューを開閉する"
      onClick={onClick}
    >
      <span
        className={`${styles.burgerButtonBar} ${styles.barTop} ${
          isTopPage && isScrollTop
            ? undefined
            : styles.burgerButtonBarBgColorBlack
        }`}
      ></span>
      <span
        className={`${styles.burgerButtonBar} ${styles.barMiddle} ${
          isTopPage && isScrollTop
            ? undefined
            : styles.burgerButtonBarBgColorBlack
        }`}
      ></span>
      <span
        className={`${styles.burgerButtonBar} ${styles.barBottom} ${
          isTopPage && isScrollTop
            ? undefined
            : styles.burgerButtonBarBgColorBlack
        }`}
      ></span>
    </button>
  );
}
