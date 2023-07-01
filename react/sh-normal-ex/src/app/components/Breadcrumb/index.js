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
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a
            className={styles.breadcrumbListItemLink}
            itemProp="item"
            href={pathList[i].path}
          >
            <span itemProp="name">{pathList[i].content}</span>
          </a>
          <meta itemProp="position" content={i + 1} />
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
      itemScope
      itemProp="https://schema.org/BreadcrumbList"
    >
      {breadcrumbListItems}
    </ul>
  );
}
