"use client";

import { useMemo } from "react";
import Link from "next/link";
import styles from "./style.module.scss";

export default function NavMenu({ navId, openMenuFlag, isScrollTop }) {
  const listItems = useMemo(() => {
    const navMenuItemList = [
      { path: "./room", content: "お部屋" },
      { path: "./meal", content: "お料理" },
      { path: "./spa", content: "温泉" },
    ];

    const listItems = navMenuItemList.map((navMenuItem) => (
      <li
        className={`${styles.headerNavListItem} ${
          isScrollTop ? undefined : styles.headerNavListItemColorBlack
        }`}
      >
        <Link href={navMenuItem.path}>{navMenuItem.content}</Link>
      </li>
    ));

    return listItems;
  }, [isScrollTop, openMenuFlag]);

  return (
    <nav
      id={navId}
      className={`${styles.headerNav} ${
        isScrollTop ? undefined : styles.headerNavBgColorWhite
      }`}
      aria-hidden={!openMenuFlag}
    >
      <ul className={styles.headerNavList}>{listItems}</ul>
    </nav>
  );
}
