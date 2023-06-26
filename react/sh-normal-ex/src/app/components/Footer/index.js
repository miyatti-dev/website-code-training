"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.contentWrapper} ${styles.footerBg}`}>
        <ul
          className={styles.footerNavList}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <li className={styles.footerNavListItem}>
            <Link href="./room/">お部屋</Link>
          </li>
          <li className={styles.footerNavListItem}>
            <Link href="./meal/">お料理</Link>
          </li>
          <li className={styles.footerNavListItem}>
            <Link href="./spa/">温泉</Link>
          </li>
        </ul>
        <div
          className={styles.logoIconWrapper}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Image
            src="/image/logo02.png"
            className={styles.logoIcon}
            alt=""
            width={40}
            height={40}
          />
        </div>
        <h2 className={styles.sectionTitle} data-aos="fade-up" data-aos-once="true">
          石井花壇
        </h2>
        <div
          className={styles.footerAccessInfo}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className={styles.footerAccessInfoAddressWrapper}>
            <p className={styles.footerAccessInfoPostCode}>〒000-0000</p>
            <p className={styles.footerAccessInfoAddress}>
              山形県鶴岡市xxxxxxxxxxx
            </p>
          </div>
          <div className={styles.footerAccessInfoTelFaxWrapper}>
            <p className={styles.footerAccessInfoTel}>TEL.000-0000-0000</p>
            <p className={styles.footerAccessInfoFax}>FAX.00-0000-0000</p>
          </div>
        </div>
      </div>
      <small className={styles.footerCopyRight}>
        Copyright &copy; 石井花壇 All Rights Reserved.
      </small>
    </footer>
  );
}
