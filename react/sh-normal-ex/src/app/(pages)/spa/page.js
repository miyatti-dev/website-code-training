import React, { useMemo } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ChildPageInfoListItem from "@/components/ChildPageInfoListItem";
import styles from "./style.module.scss";

export default function SpaPage() {
  const pathList = useMemo(() => {
    return [
      { path: "/", content: "トップ" },
      { path: "/spa", content: "温泉" },
    ];
  }, []);

  return (
    <main>
      <div className={styles.fv}>
        <p className={styles.fvTitle}>温泉</p>
      </div>

      <Breadcrumb pathList={pathList} />

      <section className={`${styles.sectionWrapper} ${styles.sectionSpa}`}>
        <div className={styles.contentWrapper}>
          <p
            className={styles.SpaTitle}
            data-aos="fade-up"
            data-aos-once="true"
          >
            心も身体も癒やす汐の温泉。
            <br />
            湯あたりしにくく、赤ちゃんから年配の方までどなたでもゆっくりと安心して入っていただけます。
            <br />
            柔らかく優しい湯にじっくりと漬かれば、心身共にリラックスできます。
          </p>
          <ul className={styles.childPageInfoList}>
            <ChildPageInfoListItem
              imageSrc="/image/onsen01.png"
              title={"貸し切り露天風呂「雲居の湯」"}
              textComp={
                <>
                  弱酸性の湯質が優しく肌を包み込むような心地よさ
                  <br />
                  最上階の露天風呂「雲居の湯」では、湯冷めしにくい食塩泉を
                  <br />
                  熱海の町並みを遠方に望みながら・・・
                </>
              }
            />
            <ChildPageInfoListItem
              imageSrc="/image/onsen02.png"
              title={"  美肌を促す乳白色の硫黄泉を"}
              textComp={
                <>
                  まじりっけなしの白いにごり湯。
                  <br className={styles.brXlShow} />
                  鳥海山から引いた酸性の強い硫酸塩泉を、 <br />
                  たっぷりと掛け流しています。 <br />
                  四季の移り変わりを、天然温泉の湯に浸りながら味わってください。
                </>
              }
            />
          </ul>
        </div>
      </section>

      <section className={`${styles.sectionWrapper} ${styles.sectionEfficacy}`}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle} data-aos="fade-up" data-aos-once="true">
            温泉の効能
          </h2>
          <dl className={styles.efficacyList} data-aos="fade-up" data-aos-once="true">
            <dt className={styles.efficacyListItemTitle}>効能</dt>
            <dd className={styles.efficacyListItemDescription}>
              神経痛・慢性関節リューマチ・腰痛・冷え性・慢性婦人病・うちみなど
            </dd>
            <dt className={styles.efficacyListItemTitle}>泉質</dt>
            <dd className={styles.efficacyListItemDescription}>
              ナトリウム・カルシウム-塩化物泉
            </dd>
            <dt className={styles.efficacyListItemTitle}>飲用効果</dt>
            <dd className={styles.efficacyListItemDescription}>
              弱塩化物泉は肌にやわらかなため、高齢者や病後の回復期によく、飲用すれば慢性便秘や慢性消化
              器病に効果があります。
            </dd>
          </dl>
        </div>
      </section>
    </main>
  );
}
