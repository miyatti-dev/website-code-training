"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import NavMenu from "./NavMenu";
import BurgerButton from "./BurgerButton";
import styles from "./style.module.scss";

export default function Header() {
  const [openMenuFlag, setOpenMenuFlag] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);

  // resize
  useEffect(() => {
    const onResizeHandler = () => {
      // リサイズ時はメニュー閉じる
      setOpenMenuFlag(false);
    };
    window.addEventListener("resize", onResizeHandler);
    return () => window.removeEventListener("resize", onResizeHandler);
  }, []);

  // scroll
  useEffect(() => {
    const isScrollTopPosition = () => {
      // ブラウザによってとり方が違うようなので全部もってきてMaxをとる
      const scrollPosition = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );

      return scrollPosition === 0;
    };

    const onScrollHandler = () => {
      setIsScrollTop(isScrollTopPosition());
    };

    setIsScrollTop(isScrollTopPosition());
    document.addEventListener("scroll", onScrollHandler);
    return () => document.removeEventListener("scroll", onScrollHandler);
  }, []);

  // onClick
  const onClickBurgerButton = useCallback(() => {
    setOpenMenuFlag((prevState) => !prevState);
  }, [setOpenMenuFlag]);

  const navId = "GlobalMenu";

  return (
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
        <NavMenu
          navId={navId}
          openMenuFlag={openMenuFlag}
          isScrollTop={isScrollTop}
        />
        <button
          type="button"
          id="js-open-reserve-modal"
          className={styles.headerReserveButton}
        >
          宿泊予約
        </button>
        <BurgerButton
          navId={navId}
          openMenuFlag={openMenuFlag}
          isScrollTop={isScrollTop}
          onClick={onClickBurgerButton}
        />
      </div>
    </header>
  );
}
