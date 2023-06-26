"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={`${styles.contentWrapper} ${styles.footerBg}`}>
        <ul
          class={styles.footerNavList}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <li class={styles.footerNavListItem}>
            <Link href="./room/">お部屋</Link>
          </li>
          <li class={styles.footerNavListItem}>
            <Link href="./meal/">お料理</Link>
          </li>
          <li class={styles.footerNavListItem}>
            <Link href="./spa/">温泉</Link>
          </li>
        </ul>
        <div
          class={styles.logoIconWrapper}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Image
            src="/image/logo02.png"
            class={styles.logoIcon}
            alt=""
            width={40}
            height={40}
          />
        </div>
        <h2 class={styles.sectionTitle} data-aos="fade-up" data-aos-once="true">
          石井花壇
        </h2>
        <div
          class={styles.footerAccessInfo}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div class={styles.footerAccessInfoAddressWrapper}>
            <p class={styles.footerAccessInfoPostCode}>〒000-0000</p>
            <p class={styles.footerAccessInfoAddress}>
              山形県鶴岡市xxxxxxxxxxx
            </p>
          </div>
          <div class={styles.footerAccessInfoTelFaxWrapper}>
            <p class={styles.footerAccessInfoTel}>TEL.000-0000-0000</p>
            <p class={styles.footerAccessInfoFax}>FAX.00-0000-0000</p>
          </div>
        </div>
      </div>
      <small class={styles.footerCopyRight}>
        Copyright &copy; 石井花壇 All Rights Reserved.
      </small>
    </footer>
  );
}
