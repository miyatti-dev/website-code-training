"use client";

import React, { useCallback } from "react";
import styles from "./style.module.scss";

import "flatpickr/dist/flatpickr.min.css";
import { Japanese } from "flatpickr/dist/l10n/ja.js";
import Flatpickr from "react-flatpickr";

export default function ReserveModal({ hideReserveModal }) {
  const onHideReserveModal = useCallback(() => {
    hideReserveModal?.();
  }, [onClickNavMenu]);

  return (
    <section className={styles.reserveModal}>
      <div className={styles.reserveModalBg} onClick={onHideReserveModal}></div>
      <div className={styles.reserveModalWrapper}>
        <div className={styles.reserveModalContent}>
          <h2 className={styles.reserveModalTitle}>宿泊予約</h2>
          <form action="">
            <ul className={styles.reserveFormList}>
              <li className={styles.reserveFormListItem}>
                <label
                  htmlFor="form-name"
                  className={styles.reserveFormListItemLabel}
                >
                  お名前
                </label>
                <input
                  id="form-name"
                  type="text"
                  className={styles.reserveFormListItemInput}
                  required
                  placeholder="例：石井正悟"
                />
              </li>
              <li className={styles.reserveFormListItem}>
                <label
                  htmlFor="form-mail-address"
                  className={styles.reserveFormListItemLabel}
                >
                  メールアドレス
                </label>
                <input
                  id="form-mail-address"
                  type="text"
                  className={styles.reserveFormListItemInput}
                  required
                  placeholder="例：Example@example.com"
                />
              </li>
              <li className={styles.reserveFormListItem}>
                <label className={styles.reserveFormListItemLabel}>
                  ご希望プラン（空いているプランのみ表示されます）
                </label>
                <select
                  required
                  name="plan"
                  className={styles.reserveFormListItemPlanList}
                >
                  <option value="">プランを選択してください</option>
                  <option value="1">
                    ①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン
                  </option>
                  <option value="2">②平日に優雅に楽しむ、特別宿泊プラン</option>
                  <option value="3">
                    ③絶景貸切露天と個室会席を満喫できるファミリープラン
                  </option>
                </select>
              </li>
              <li className={styles.reserveFormListItem}>
                <label
                  htmlFor="flatpickr"
                  className={styles.reserveFormListItemLabel}
                >
                  日時選択
                </label>
                <Flatpickr
                  required
                  id="flatpickr"
                  defaultValue={"日時を選択してください"}
                  options={{
                    locale: Japanese,
                    dateFormat: "Y.m.d（D）H:i",
                    minDate: "today",
                    enableTime: true,
                    mode: "range",
                    allowInput: true,
                  }}
                  className={styles.reserveFormListItemInput}
                />
              </li>
            </ul>
            <div className={styles.formSubmitButtonWrapper}>
              <input
                type="submit"
                className={styles.formSubmitButton}
                value="送信する"
              />
            </div>
          </form>
        </div>
        <div
          id="js-close-reserve-modal"
          className={styles.closeReserveModal}
          onClick={onHideReserveModal}
        >
          <span
            className={`${styles.closeReserveModalBar} ${styles.closeModalBarTop}`}
          ></span>
          <span
            className={`${styles.closeReserveModalBar} ${styles.closeModalBarBottom}`}
          ></span>
        </div>
      </div>
    </section>
  );
}
