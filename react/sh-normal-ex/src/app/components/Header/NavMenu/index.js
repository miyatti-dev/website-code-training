"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import styles from "./style.module.scss";

const LinkButton = React.forwardRef(({ onClickNavMenu, content }, ref) => {
  return (
    <a onClick={onClickNavMenu} ref={ref}>
      {content}
    </a>
  );
});

export default function NavMenu({
  navId,
  openMenuFlag,
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
        <Link href={navMenuItem.path}>
          <LinkButton onClickNavMenu content={navMenuItem.content} />
        </Link>
      </li>
    ));

    return listItems;
  }, [isTopPage, isScrollTop, openMenuFlag]);

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
