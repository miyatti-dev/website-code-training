"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitleWrapper}>
            <a href="./" className={styles.headerTitleWrapperLink}>
              <Image
                src="/image/top-header-logo.png"
                className={styles.headerTitleWrapperLogo}
                alt=""
                fill
              />
            </a>
          </h1>
          <nav className={styles.headerNav} id="js-global-menu" area-hidden="false">
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavListItem}>
                <Link href="./room/">
                  お部屋
                </Link>
              </li>
              <li className={styles.headerNavListItem}>
                <Link href="./meal/">
                  お料理
                </Link>
              </li>
              <li className={styles.headerNavListItem}>
                <Link href="./spa/">
                  温泉
                </Link>
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
            aria-expanded="true"
            area-label="メニューを開閉する"
          >
            <span className={`${styles.burgerButtonBar} ${styles.barTop}`}></span>
            <span className={`${styles.burgerButtonBar} ${styles.barMiddle}`}></span>
            <span className={`${styles.burgerButtonBar} ${styles.barBottom}`}></span>
          </button>
        </div>
      </header>
    </React.Fragment>
  );
}
