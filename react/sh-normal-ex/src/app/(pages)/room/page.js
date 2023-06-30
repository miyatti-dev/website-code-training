import React, { useMemo } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ChildPageInfoListItem from "@/components/ChildPageInfoListItem";
import styles from "./style.module.scss";

export default function RoomPage() {
  const pathList = useMemo(() => {
    return [
      { path: "/", content: "トップ" },
      { path: "/room", content: "お部屋" },
    ];
  }, []);

  return (
    <main>
      <div className={styles.fv}>
        <p className={styles.fvTitle}>お部屋</p>
      </div>

      <Breadcrumb pathList={pathList} />

      <section className={`${styles.sectionWrapper} ${styles.sectionRoom}`}>
        <div className={styles.contentWrapper}>
          <p
            className={styles.roomTitle}
            data-aos="fade-up"
            data-aos-once="true"
          >
            創業より受け継がれてきた石井花壇の和の造り
            <br />
            温海の雄大な絶景を堪能していただけるように設計された客室
            <br />
            ゆるやかに流れ行く時間に身を委ねて
          </p>
          <ul className={styles.childPageInfoList}>
            <ChildPageInfoListItem
              imageSrc="/image/oheya01.png"
              title={"温泉付き客室"}
              textComp={
                <>
                  温海の源泉かけ流し露天風呂付き客室になります。
                  <br />
                  あなただけの上質な安らぎのひとときを。
                </>
              }
              cautionComp={
                <>
                  ＊部屋数に限りがございます。
                  <br />
                  ＊洗い場はないため、お体を先に大浴場でお流しになって頂く必要があります。
                </>
              }
            />
            <ChildPageInfoListItem
              imageSrc="/image/oheya02.png"
              title={"庭園付き客室"}
              textComp={
                <>
                  庭園付きの客室になります。
                  <br />
                  お庭を見ながら、ほっとするひとときをお過ごしください。
                </>
              }
              cautionComp={
                <>
                  ＊お庭は複数のお客様と囲む形になります。
                  <br />
                  ＊部屋数に限りがあります。
                  <br />
                  ＊ご希望の方は「お抹茶/500円」をルームサービスさせていただきます。
                </>
              }
            />
            <ChildPageInfoListItem
              imageSrc="/image/oheya03.png"
              title={"一般客室"}
              textComp={
                <>
                  最もベーシックな客室になります。伝統の中にモダンさを取り入れた
                  内装となっており、とても過ごしやすくしていただけます。
                </>
              }
              cautionComp={<>＊全室お部屋より日本海を望むことができます。</>}
            />
          </ul>
        </div>
      </section>
    </main>
  );
}
