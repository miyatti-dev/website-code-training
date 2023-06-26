"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";

const getScrollPosition = () => {
  // ブラウザによってとり方が違うようなので全部もってきてMaxをとる
  return Math.max(
    window.screenY,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};

export default function Header() {
  const [openMenuFlag, setOpenMenuFlag] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(
    getScrollPosition() === 0 ? true : false
  );

  useEffect(() => {
    const onResizeHandler = () => {
      // リサイズ時はメニュー閉じる
      setOpenMenuFlag(false);
    };
    window.addEventListener("resize", onResizeHandler);
    return () => window.removeEventListener("resize", onResizeHandler);
  }, []);

  useEffect(() => {
    const onScrollHandler = () => {
      const scrollPosition = getScrollPosition();
      if (scrollPosition === 0) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
    };

    document.addEventListener("scroll", onScrollHandler);
    return () => document.removeEventListener("scroll", onScrollHandler);
  }, []);

  const onClickBurgerButton = useCallback(() => {
    setOpenMenuFlag((prevState) => !prevState);
  }, [setOpenMenuFlag]);

  return (
    <React.Fragment>
      <header
        className={`${styles.header} ${
          isScrollTop ? undefined : styles.headerBgColorWhite
        }`}
      >
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitleWrapper}>
            <a href="./" className={styles.headerTitleWrapperLink}>
              <Image
                src={
                  isScrollTop
                    ? "/image/top-header-logo.png"
                    : "/image/sub-header-logo.png"
                }
                className={styles.headerTitleWrapperLogo}
                alt=""
                fill
              />
            </a>
          </h1>
          <nav
            id="js-global-menu"
            className={`${styles.headerNav} ${
              isScrollTop ? undefined : styles.headerNavBgColorWhite
            }`}
            aria-hidden={!openMenuFlag}
          >
            <ul className={styles.headerNavList}>
              <li
                className={`${styles.headerNavListItem} ${
                  isScrollTop ? undefined : styles.headerNavListItemColorBlack
                }`}
              >
                <Link href="./room/">お部屋</Link>
              </li>
              <li
                className={`${styles.headerNavListItem} ${
                  isScrollTop ? undefined : styles.headerNavListItemColorBlack
                }`}
              >
                <Link href="./meal/">お料理</Link>
              </li>
              <li
                className={`${styles.headerNavListItem} ${
                  isScrollTop ? undefined : styles.headerNavListItemColorBlack
                }`}
              >
                <Link href="./spa/">温泉</Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            id="js-open-reserve-modal"
            className={styles.headerReserveButton}
          >
            宿泊予約
          </button>
          <button
            type="button"
            id="js-burger"
            className={styles.burgerButton}
            aria-controls="js-glabal-menu"
            aria-expanded={openMenuFlag}
            area-label="メニューを開閉する"
            onClick={onClickBurgerButton}
          >
            <span
              className={`${styles.burgerButtonBar} ${styles.barTop} ${
                isScrollTop ? undefined : styles.burgerButtonBarBgColorBlack
              }`}
            ></span>
            <span
              className={`${styles.burgerButtonBar} ${styles.barMiddle} ${
                isScrollTop ? undefined : styles.burgerButtonBarBgColorBlack
              }`}
            ></span>
            <span
              className={`${styles.burgerButtonBar} ${styles.barBottom} ${
                isScrollTop ? undefined : styles.burgerButtonBarBgColorBlack
              }`}
            ></span>
          </button>
        </div>
      </header>
    </React.Fragment>
  );
}
