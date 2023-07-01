"use client";

import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useCallback, useMemo } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./style.module.scss";

export default function Home() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  // onSelectTab
  const onSelectTab = useCallback(
    (index) => {
      setSelectedTabIndex(index);
    },
    [setSelectedTabIndex]
  );

  const { newsListItems, othersNewsListItems } = useMemo(() => {
    const NewsItem = ({ index, imageSrc, time, text }) => {
      return (
        <li className={styles.newsListItem} key={index}>
          <div className={styles.newsListItemImageWrapper}>
            <Image
              src={imageSrc}
              className={styles.newsListItemImage}
              alt=""
              fill
              sizes="30vw"
            />
          </div>
          <div className={styles.newsListItemTextWrapper}>
            <time className={styles.newsListItemTime}>{time}</time>
            <p className={styles.newsListItemText}>{text}</p>
          </div>
        </li>
      );
    };

    const newsList = [
      {
        index: 0,
        imagePath: "/image/news01.png",
        time: "2020.12.24",
        content: "年末最後の営業日は27日になります。",
      },
      {
        index: 1,
        imagePath: "/image/news02.png",
        time: "2020.12.24",
        content: "年末最後の営業日のお知らせ",
      },
      {
        index: 2,
        imagePath: "/image/news02.png",
        time: "2020.12.11",
        content:
          "12.21は臨時休業とさせていただきますので、よろしくお願いします。",
      },
      {
        index: 3,
        imagePath: "/image/news01.png",
        time: "2020.12.24",
        content: "年末最後の営業日のお知らせ",
      },
      {
        index: 4,
        imagePath: "/image/news01.png",
        time: "2020.12.01",
        content: "和室の改装を行いますため、12.10はお休みさせていただきます。",
      },
      {
        index: 5,
        imagePath: "/image/news02.png",
        time: "2020.12.24",
        content: "年末最後の営業日のお知らせ",
      },
    ];

    const otherNewsList = [
      {
        index: 0,
        imagePath: "/image/food_hiyashi_chuka_hajimemashita.png",
        time: "2020.07.01",
        content: "冷やし中華はじめました！",
      },
      {
        index: 1,
        imagePath: "/image/kinshi_mark_tabako_kinen.png",
        time: "2020.04.01",
        content: "2020年4月1日より全客室禁煙とさせて頂きます。",
      },
      {
        index: 2,
        imagePath: "/image/point_shock_man.png",
        time: "2020.01.01",
        content: "ポイント付与サービス停止",
      },
    ];

    const newsListItems = newsList.map((news) => (
      <NewsItem
        key={news.index}
        imageSrc={news.imagePath}
        time={news.time}
        text={news.content}
      />
    ));

    const othersNewsListItems = otherNewsList.map((news) => (
      <NewsItem
        key={news.index}
        imageSrc={news.imagePath}
        time={news.time}
        text={news.content}
      />
    ));

    return { newsListItems, othersNewsListItems };
  }, []);

  return (
    <main>
      <div className={styles.fv}>
        <ul>
          <li className={styles.fvImageListItem}>
            <Image
              src="/image/mainbg01.jpg"
              className={styles.fvImageListItemImage}
              alt=""
              fill
            />
          </li>
          <li className={styles.fvImageListItem}>
            <Image
              src="/image/mainbg02.jpg"
              className={styles.fvImageListItemImage}
              alt=""
              fill
            />
          </li>
          <li className={styles.fvImageListItem}>
            <Image
              src="/image/mainbg03.jpg"
              className={styles.fvImageListItemImage}
              alt=""
              fill
            />
          </li>
        </ul>
        <div className={styles.fvInner}>
          <p className={styles.fvTitle}>
            頑張る人の
            <br />
            頑張らない時間
          </p>
        </div>
      </div>

      <section className={`${styles.sectionWrapper} ${styles.sectionAbout}`}>
        <div
          className={styles.contentWrapper}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <p className={styles.aboutTitle}>
            <span>
              温海温泉の
              <br />
            </span>
            美しさに癒やされて
          </p>
          <p className={styles.aboutText}>
            東北の奥座敷である温海温泉郷
            <br />
            開湯は約1300年前とされ、
            <br />
            役小角が発見したと伝えられます
          </p>
          <p className={styles.aboutText}>
            石井花壇は江戸より続く由緒ある旅館で
            <br />
            クラシックな作りの中に大正ロマンあふれる
            <br />
            内装を残しております
          </p>
          <p className={styles.aboutText}>
            圧倒的癒やしの空間で
            <br />
            頑張る現代人に
            <br />
            頑張らない圧倒的な非日常をご提供します
          </p>
          <p className={styles.aboutName}>石井花壇</p>
        </div>
      </section>

      <section className={`${styles.sectionWrapper} ${styles.sectionFeature}`}>
        <div className={styles.contentWrapper}>
          <ul>
            <li className={styles.featureListItem}>
              <figure
                className={styles.featureListItemImageWrapper}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <Image
                  src="/image/oheya-top.png"
                  className={styles.featureListItemImage}
                  alt=""
                  fill
                  sizes="70vw"
                />
              </figure>
              <div
                className={styles.featureListItemTextWrapper}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <p className={styles.featureListItemTitle}>
                  喧騒から離れた空間
                  <br />
                  心落ち着く至極のひととき
                </p>
                <p className={styles.featureListItemText}>
                  まるで時が止まったかのような、
                  <br className={styles.brLgShow} />
                  圧倒的な静寂のなかで、
                  <br />
                  ひたすらにゆったりと…。
                  <br />
                  最高級の「何もしない時間」をお過ごしください。
                </p>
                <a href="./room/" className={styles.featureListItemLink}>
                  お部屋について
                </a>
              </div>
            </li>
            <li className={styles.featureListItem}>
              <figure
                className={styles.featureListItemImageWrapper}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <Image
                  src="/image/menu-top.png"
                  className={styles.featureListItemImage}
                  alt=""
                  fill
                  sizes="70vw"
                />
              </figure>
              <div
                className={styles.featureListItemTextWrapper}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <p className={styles.featureListItemTitle}>
                  出迎えるのは
                  <br />
                  極上の温海料理
                </p>
                <p className={styles.featureListItemText}>
                  最も旬の食材を愉しむ、最高の贅沢を
                  <br />
                  最高級A5ランクの米沢牛と共に頂く。
                  <br />
                  あなたの人生史に残る「極上の感動」を
                  <br />
                  お約束します。
                </p>
                <a href="./meal/" className={styles.featureListItemLink}>
                  料理について
                </a>
              </div>
            </li>
            <li className={styles.featureListItem}>
              <figure
                className={styles.featureListItemImageWrapper}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <Image
                  src="/image/onsen-top.png"
                  className={styles.featureListItemImage}
                  alt=""
                  fill
                  sizes="70vw"
                />
              </figure>
              <div
                className={styles.featureListItemTextWrapper}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <p className={styles.featureListItemTitle}>
                  疲れ切った身体にやすらぎを
                  <br />
                  温海の源泉に癒やされて
                  <br />
                </p>
                <p className={styles.featureListItemText}>
                  古くは弘法大師の病をも治療したと言われる
                  <br className={styles.brLgShow} />
                  熱海の泉質。
                  <br />
                  現代人の疲弊しきった身体を修復する
                  <br className={styles.brLgShow} />
                  最高級の湯治場として
                  <br className={styles.brLgHide} />
                  ご活用ください。
                </p>
                <a href="./spa/" className={styles.featureListItemLink}>
                  温泉について
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className={`${styles.sectionWrapper} ${styles.sectionPlan}`}>
        <div className={styles.contentWrapper}>
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
          <h2
            className={styles.sectionTitle}
            data-aos="fade-up"
            data-aos-once="true"
          >
            おすすめご宿泊プラン
          </h2>
          <ul
            className={styles.planList}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <li className={styles.planListItem}>
              <div className={styles.planListItemImageWrapper}>
                <Image
                  src="/image/recommended01.png"
                  className={styles.planListItemImage}
                  alt=""
                  fill
                  sizes="33vw"
                />
              </div>
              <div className={styles.planListItemTextWrapper}>
                <p className={styles.planListItemTitle}>
                  朝食付きプラン、日本近海で取れたのどぐろを朝食として…
                </p>
                <p className={styles.planListItemText}>
                  最高級と称されるのどぐろ、正式には「アカムツ」と呼ばれる魚、味は独特の上品な味わいで、焼いても煮ても美味
                </p>
              </div>
            </li>
            <li className={styles.planListItem}>
              <div className={styles.planListItemImageWrapper}>
                <Image
                  src="/image/recommended02.png"
                  className={styles.planListItemImage}
                  alt=""
                  fill
                  sizes="33vw"
                />
              </div>
              <div className={styles.planListItemTextWrapper}>
                <p className={styles.planListItemTitle}>
                  【期間限定】熱海蟹をたっぷりと愉しむプラン。
                </p>
                <p className={styles.planListItemText}>
                  温海で水揚げされた蟹は「温海蟹」として知られ、嗜好品として愛されてきました。この宿泊プランでは存分に
                </p>
              </div>
            </li>
            <li className={styles.planListItem}>
              <div className={styles.planListItemImageWrapper}>
                <Image
                  src="/image/recommended03.png"
                  className={styles.planListItemImage}
                  alt=""
                  fill
                  sizes="33vw"
                />
              </div>
              <div className={styles.planListItemTextWrapper}>
                <p className={styles.planListItemTitle}>
                  【平日限定】贅沢美味懐石プラン。海辺の四季旬彩プラン。
                </p>
                <p className={styles.planListItemText}>
                  熱海近海で取れた魚を鮮度そのままに舟盛りにしてご提供。生きた味をお楽しみください。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className={`${styles.sectionWrapper} ${styles.sectionNews}`}>
        <div className={styles.contentWrapper}>
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
          <h2
            className={styles.sectionTitle}
            data-aos="fade-up"
            data-aos-once="true"
          >
            お知らせ
          </h2>

          <Tabs
            className={styles.reactTabs}
            onSelect={onSelectTab}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <TabList>
              <Tab
                className={
                  selectedTabIndex === 0
                    ? `${styles.reactTab} ${styles.tabActive}`
                    : styles.reactTab
                }
              >
                営業情報
              </Tab>
              <Tab
                className={
                  selectedTabIndex === 1
                    ? `${styles.reactTab} ${styles.tabActive}`
                    : styles.reactTab
                }
              >
                その他
              </Tab>
            </TabList>

            <TabPanel>
              <ul className={styles.newsList}>{newsListItems}</ul>
            </TabPanel>
            <TabPanel>
              <ul className={styles.newsList}>{othersNewsListItems}</ul>
            </TabPanel>
          </Tabs>
        </div>
      </section>

      <section className={`${styles.sectionWrapper} ${styles.sectionAccess}`}>
        <div className={styles.contentWrapper}>
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
          <h2
            className={styles.sectionTitle}
            data-aos="fade-up"
            data-aos-once="true"
          >
            アクセス
          </h2>

          <div
            className={styles.accessInfo}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className={styles.accessInfoImageWrapper}>
              <Image
                src="/image/acess.png"
                className={styles.accessInfoImage}
                alt=""
                fill
                sizes="70vw"
              />
            </div>
            <div className={styles.accessInfoTextWrapper}>
              <dl>
                <dl className={styles.accessInfoItemTitle}>住所</dl>
                <dd className={styles.accessInfoItemText}>
                  〒000-0000
                  <br />
                  山形県鶴岡市xxxxxxxxxx
                </dd>
                <dl className={styles.accessInfoItemTitle}>TEL/FAX</dl>
                <dd className={styles.accessInfoItemText}>
                  000-0000-0000/00-0000-0000
                </dd>
                <dl className={styles.accessInfoItemTitle}>営業時間</dl>
                <dd className={styles.accessInfoItemText}>14:00-23:00</dd>
                <dd className={styles.accessInfoItemText}>
                  ＊4名以上のご予約の場合は、最寄り駅の「鶴岡駅」より送迎が可能ですので、ご連絡ください。
                </dd>
              </dl>
            </div>
          </div>

          <div
            className={styles.accessMapWrapper}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24933.857963577273!2d139.59856044999998!3d38.63204035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8c6dbd6c03ae15%3A0x10bc5da99bc816ef!2z44CSOTk5LTcyMDUg5bGx5b2i55yM6ba05bKh5biC5rip5rW3!5e0!3m2!1sja!2sjp!4v1656947209981!5m2!1sja!2sjp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
