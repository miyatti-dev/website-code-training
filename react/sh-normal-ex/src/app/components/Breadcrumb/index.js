"use client";

import React, { useMemo } from "react";
import styles from "./style.module.scss";

export default function Breadcrumb({ pathList }) {
  const breadcrumbListItems = useMemo(() => {
    if (!pathList || pathList.length === 0) {
      return undefined;
    }

    const listItems = [];

    const pathListCount = pathList.length;
    for (let i = 0; i < pathListCount; i++) {
      listItems.push(
        <li
          className={styles.breadcrumbListItem}
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <a
            className={styles.breadcrumbListItemLink}
            itemprop="item"
            href={pathList[i].path}
          >
            <span itemprop="name">{pathList[i].content}</span>
          </a>
          <meta itemprop="position" content={i + 1} />
        </li>
      );
    }

    return listItems;
  }, [pathList]);

  if (!breadcrumbListItems) {
    return null;
  }
  return (
    <ul
      className={styles.breadcrumbList}
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
    >
      {breadcrumbListItems}
    </ul>
  );
}
