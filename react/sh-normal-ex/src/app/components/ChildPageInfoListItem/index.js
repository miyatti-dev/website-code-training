"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

export default function ChildPageInfoListItem({
  index,
  imageSrc,
  title,
  textComp,
  cautionComp,
}) {
  return (
    <li
      key={index}
      className={styles.childPageInfoListItem}
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className={styles.childPageInfoListItemImageWrapper}>
        <Image
          src={imageSrc}
          className={styles.childPageInfoListItemImage}
          alt=""
          fill
          sizes="50vw"
        />
      </div>
      <div className={styles.childPageInfoListItemTextWrapper}>
        <p className={styles.childPageInfoListItemTitle}>{title}</p>
        <p className={styles.childPageInfoListItemText}>{textComp}</p>
        {cautionComp && (
          <p className={styles.childPageInfoListItemCaution}>{cautionComp}</p>
        )}
      </div>
    </li>
  );
}
