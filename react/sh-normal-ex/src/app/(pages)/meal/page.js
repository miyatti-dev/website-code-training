import React, { useMemo } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ChildPageInfoListItem from "@/components/ChildPageInfoListItem";
import styles from "./style.module.scss";

export default function MealPage() {
  const pathList = useMemo(() => {
    return [
      { path: "/", content: "トップ" },
      { path: "/meal", content: "お料理" },
    ];
  }, []);

  return (
    <main>
      <div className={styles.fv}>
        <p className={styles.fvTitle}>お料理</p>
      </div>

      <Breadcrumb pathList={pathList} />

      <section className={`${styles.sectionWrapper} ${styles.sectionMeal}`}>
        <div className={styles.contentWrapper}>
          <p
            className={styles.mealTitle}
            data-aos="fade-up"
            data-aos-once="true"
          >
            地元熱海の市場で仕入れた
            <br className={styles.brSmShow} />
            食材のみを使った食材をふんだんに使い、
            <br />
            大将の技が光る「熱海料理」
            <br />
            四季ごと、日ごとに変化する味わいを、
            <br className={styles.brSmShow} />
            どうぞご堪能ください。
          </p>
          <ul className={styles.childPageInfoList}>
            <ChildPageInfoListItem
              imageSrc="/image/menu01.png"
              title={"地元食材にこだわった会席料理"}
              textComp={
                <>
                  みずみずしくほのかに甘い野菜、新鮮で味に深みがある魚介類、肉類。
                  <br />
                  旬の素材をそのままに生かす、経験に裏打ちされた確かな技。
                  <br />
                  四季ごと、日ごとに変化する味わいを、どうぞご堪能ください。
                </>
              }
            />
            <ChildPageInfoListItem
              imageSrc="/image/menu02.png"
              title={"熱海の漁港で目利きの品を"}
              textComp={
                <>
                  石井花壇でお出しする料理はすべて料理長である大将の目利きで、
                  <br />
                  熱海の魚市場でその日のうちに仕入れたものを使用しております。
                  <br />
                  日本海の宝玉を十分にお楽しみください。
                </>
              }
            />
            <ChildPageInfoListItem
              imageSrc="/image/menu03.png"
              title={"食材が一流、職人も一流"}
              textComp={
                <>
                  石井花壇の料理人は料亭で20年経験を積んだものばかり。
                  <br />
                  その時の最も旬な食材を、最高の調理でお届けします。
                  <br />
                  また、お料理への細かいご要望にもお答えできますので、
                  <br />
                  お気軽にお申し付けください。
                </>
              }
            />
          </ul>
        </div>
      </section>
    </main>
  );
}
