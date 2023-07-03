"use client";

import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import styles from "./style.module.scss";

const LinkButton = React.forwardRef(function LinkButton(
  { onClickNavMenu, href, content },
  ref
) {
  return (
    <a href={href} onClick={onClickNavMenu} ref={ref}>
      {content}
    </a>
  );
});

export default function NavMenu({
  navId,
  openMenuFlag,
  showBurgerMenuFlag,
  isTopPage,
  isScrollTop,
  onClickNavMenu,
}) {
  const listItems = useMemo(() => {
    const navMenuItemList = [
      { path: "./room", content: "お部屋" },
      { path: "./meal", content: "お料理" },
      { path: "./spa", content: "温泉" },
    ];

    const listItems = navMenuItemList.map((navMenuItem) => (
      <li
        key={navMenuItem.path}
        className={`${styles.headerNavListItem} ${
          isTopPage && isScrollTop
            ? undefined
            : styles.headerNavListItemColorBlack
        }`}
      >
        <Link href={navMenuItem.path} passHref legacyBehavior>
          <LinkButton
            onClickNavMenu={onClickNavMenu}
            content={navMenuItem.content}
          />
        </Link>
      </li>
    ));

    return listItems;
  }, [isTopPage, isScrollTop, onClickNavMenu]);

  if (showBurgerMenuFlag) {
    return (
      // motionあり
      <AnimatePresence>
        <motion.nav
          initial={openMenuFlag ? { y: "-200px" } : { y: "0px" }}
          animate={openMenuFlag ? { y: "0px" } : { y: "-200px" }}
          exit={openMenuFlag ? { y: "-200px" } : { y: "0px" }}
          transition={{ duration: 0.3 }}
          id={navId}
          className={`${styles.headerNav} ${
            isTopPage && isScrollTop ? undefined : styles.headerNavBgColorWhite
          }`}
          aria-hidden={!openMenuFlag}
          key={openMenuFlag}
        >
          <ul className={styles.headerNavList}>{listItems}</ul>
        </motion.nav>
      </AnimatePresence>
    );
  }

  // motionなし
  return (
    <nav
      id={navId}
      className={`${styles.headerNav} ${
        isTopPage && isScrollTop ? undefined : styles.headerNavBgColorWhite
      }`}
      aria-hidden={!openMenuFlag}
    >
      <ul className={styles.headerNavList}>{listItems}</ul>
    </nav>
  );
}
