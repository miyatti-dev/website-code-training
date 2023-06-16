import Image from "next/image";
import "@/styles/page/top.scss";

export default function Home() {
  return (
    <main>
      <div className="fv">
        <ul className="fv-image-list">
          <li className="fv-image-list-item">
            <Image
              src="/image/mainbg01.jpg"
              className="fv-image-list-item__image"
              alt=""
              fill
            />
          </li>
          <li className="fv-image-list-item">
            <Image
              src="/image/mainbg02.jpg"
              className="fv-image-list-item__image"
              alt=""
              fill
            />
          </li>
          <li className="fv-image-list-item">
            <Image
              src="/image/mainbg03.jpg"
              className="fv-image-list-item__image"
              alt=""
              fill
            />
          </li>
        </ul>
        <div className="fv-inner">
          <p className="fv-title">
            頑張る人の
            <br />
            頑張らない時間
          </p>
        </div>
      </div>

      <section className="section-wrapper section-about">
        <div
          className="content-wrapper"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <p className="about-title">
            <span>
              温海温泉の
              <br />
            </span>
            美しさに癒やされて
          </p>
          <p className="about-text">
            東北の奥座敷である温海温泉郷
            <br />
            開湯は約1300年前とされ、
            <br />
            役小角が発見したと伝えられます
          </p>
          <p className="about-text">
            石井花壇は江戸より続く由緒ある旅館で
            <br />
            クラシックな作りの中に大正ロマンあふれる
            <br />
            内装を残しております
          </p>
          <p className="about-text">
            圧倒的癒やしの空間で
            <br />
            頑張る現代人に
            <br />
            頑張らない圧倒的な非日常をご提供します
          </p>
          <p className="about-name">石井花壇</p>
        </div>
      </section>

      <section className="section-wrapper section-feature">
        <div className="content-wrapper">
          <ul className="feature-list">
            <li className="feature-list-item">
              <figure
                className="feature-list-item__image-wrapper"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <Image
                  src="/image/oheya-top.png"
                  className="feature-list-item__image"
                  alt=""
                  fill
                />
              </figure>
              <div
                className="feature-list-item__text-wrapper"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <p className="feature-list-item__title">
                  喧騒から離れた空間
                  <br />
                  心落ち着く至極のひととき
                </p>
                <p className="feature-list-item__text">
                  まるで時が止まったかのような、
                  <br className="br-lg-show" />
                  圧倒的な静寂のなかで、
                  <br />
                  ひたすらにゆったりと…。
                  <br />
                  最高級の「何もしない時間」をお過ごしください。
                </p>
                <a
                  href="./room/"
                  className="feature-list-item__link button-link"
                >
                  お部屋について
                </a>
              </div>
            </li>
            <li className="feature-list-item">
              <figure
                className="feature-list-item__image-wrapper"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <Image
                  src="/image/menu-top.png"
                  className="feature-list-item__image"
                  alt=""
                  fill
                />
              </figure>
              <div
                className="feature-list-item__text-wrapper"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <p className="feature-list-item__title">
                  出迎えるのは
                  <br />
                  極上の温海料理
                </p>
                <p className="feature-list-item__text">
                  最も旬の食材を愉しむ、最高の贅沢を
                  <br />
                  最高級A5ランクの米沢牛と共に頂く。
                  <br />
                  あなたの人生史に残る「極上の感動」を
                  <br />
                  お約束します。
                </p>
                <a
                  href="./meal/"
                  className="feature-list-item__link button-link"
                >
                  料理について
                </a>
              </div>
            </li>
            <li className="feature-list-item">
              <figure
                className="feature-list-item__image-wrapper"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <Image
                  src="/image/onsen-top.png"
                  className="feature-list-item__image"
                  alt=""
                  fill
                />
              </figure>
              <div
                className="feature-list-item__text-wrapper"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <p className="feature-list-item__title">
                  疲れ切った身体にやすらぎを
                  <br />
                  温海の源泉に癒やされて
                  <br />
                </p>
                <p className="feature-list-item__text">
                  古くは弘法大師の病をも治療したと言われる
                  <br className="br-lg-show" />
                  熱海の泉質。
                  <br />
                  現代人の疲弊しきった身体を修復する
                  <br className="br-lg-show" />
                  最高級の湯治場として
                  <br className="br-lg-hide" />
                  ご活用ください。
                </p>
                <a
                  href="./spa/"
                  className="feature-list-item__link button-link"
                >
                  温泉について
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-wrapper section-plan">
        <div className="content-wrapper">
          <div
            className="logo-icon-wrapper"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <Image
              src="/image/logo02.png"
              alt=""
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="section-title" data-aos="fade-up" data-aos-once="true">
            おすすめご宿泊プラン
          </h2>
          <ul className="plan-list" data-aos="fade-up" data-aos-once="true">
            <li className="plan-list-item">
              <div className="plan-list-item__image-wrapper">
                <Image
                  src="/image/recommended01.png"
                  className="plan-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="plan-list-item__text-wrapper">
                <p className="plan-list-item__title">
                  朝食付きプラン、日本近海で取れたのどぐろを朝食として…
                </p>
                <p className="plan-list-item__text">
                  最高級と称されるのどぐろ、正式には「アカムツ」と呼ばれる魚、味は独特の上品な味わいで、焼いても煮ても美味
                </p>
              </div>
            </li>
            <li className="plan-list-item">
              <div className="plan-list-item__image-wrapper">
                <Image
                  src="/image/recommended02.png"
                  className="plan-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="plan-list-item__text-wrapper">
                <p className="plan-list-item__title">
                  【期間限定】熱海蟹をたっぷりと愉しむプラン。
                </p>
                <p className="plan-list-item__text">
                  温海で水揚げされた蟹は「温海蟹」として知られ、嗜好品として愛されてきました。この宿泊プランでは存分に
                </p>
              </div>
            </li>
            <li className="plan-list-item">
              <div className="plan-list-item__image-wrapper">
                <Image
                  src="/image/recommended03.png"
                  className="plan-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="plan-list-item__text-wrapper">
                <p className="plan-list-item__title">
                  【平日限定】贅沢美味懐石プラン。海辺の四季旬彩プラン。
                </p>
                <p className="plan-list-item__text">
                  熱海近海で取れた魚を鮮度そのままに舟盛りにしてご提供。生きた味をお楽しみください。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-wrapper section-news">
        <div className="content-wrapper">
          <div
            className="logo-icon-wrapper"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <Image
              src="/image/logo02.png"
              alt=""
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="section-title" data-aos="fade-up" data-aos-once="true">
            お知らせ
          </h2>

          <ul className="news-tab-list" data-aos="fade-up" data-aos-once="true">
            <li
              className="news-tab-list-item js-news-tab-trigger is-active"
              data-id="news-tab1"
            >
              {" "}
              営業情報
            </li>
            <li
              className="news-tab-list-item js-news-tab-trigger"
              data-id="news-tab2"
            >
              その他
            </li>
          </ul>

          <ul className="news-list js-news-tab-target is-active" id="news-tab1">
            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
                <Image
                  src="/image/news01.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.12.24</time>
                <p className="news-list-item__text">
                  年末最後の営業日は27日になります。
                </p>
              </div>
            </li>

            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
              <Image
                  src="/image/news02.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.12.24</time>
                <p className="news-list-item__text">
                  年末最後の営業日のお知らせ
                </p>
              </div>
            </li>

            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
              <Image
                  src="/image/news02.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.12.11</time>
                <p className="news-list-item__text">
                  12.21は臨時休業とさせていただきますので、よろしくお願いします。
                </p>
              </div>
            </li>

            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
              <Image
                  src="/image/news01.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.12.24</time>
                <p className="news-list-item__text">
                  年末最後の営業日のお知らせ
                </p>
              </div>
            </li>

            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
              <Image
                  src="/image/news01.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.12.01</time>
                <p className="news-list-item__text">
                  和室の改装を行いますため、12.10はお休みさせていただきます。
                </p>
              </div>
            </li>

            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
              <Image
                  src="/image/news02.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.12.24</time>
                <p className="news-list-item__text">
                  年末最後の営業日のお知らせ
                </p>
              </div>
            </li>
          </ul>

          <ul className="news-list js-news-tab-target" id="news-tab2">
            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
                <Image
                  src="/image/food_hiyashi_chuka_hajimemashita.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.07.01</time>
                <p className="news-list-item__text">冷やし中華はじめました！</p>
              </div>
            </li>

            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
                <Image
                  src="/image/kinshi_mark_tabako_kinen.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.04.01</time>
                <p className="news-list-item__text">
                  2020年4月1日より全客室禁煙とさせて頂きます。
                </p>
              </div>
            </li>

            <li
              className="news-list-item"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="news-list-item__image-wrapper">
                <Image
                  src="/image/point_shock_man.png"
                  className="news-list-item__image"
                  alt=""
                  fill
                />
              </div>
              <div className="news-list-item__text-wrapper">
                <time className="news-list-item__time">2020.01.01</time>
                <p className="news-list-item__text">ポイント付与サービス停止</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-wrapper section-access">
        <div className="content-wrapper">
          <div
            className="logo-icon-wrapper"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <Image
              src="/image/logo02.png"
              alt=""
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="section-title" data-aos="fade-up" data-aos-once="true">
            アクセス
          </h2>

          <div className="access-info" data-aos="fade-up" data-aos-once="true">
            <div className="access-info__image-wrapper">
              <Image
                  src="/image/acess.png"
                  className="access-info__image"
                  alt=""
                  fill
                />
            </div>
            <div className="access-info__text-wrapper">
              <dl className="access-info-list">
                <dl className="access-info-item__title">住所</dl>
                <dd className="access-info-item__text">
                  〒000-0000
                  <br />
                  山形県鶴岡市xxxxxxxxxx
                </dd>
                <dl className="access-info-item__title">TEL/FAX</dl>
                <dd className="access-info-item__text">
                  000-0000-0000/00-0000-0000
                </dd>
                <dl className="access-info-item__title">営業時間</dl>
                <dd className="access-info-item__text">14:00-23:00</dd>
                <dd className="access-info-item__text">
                  ＊4名以上のご予約の場合は、最寄り駅の「鶴岡駅」より送迎が可能ですので、ご連絡ください。
                </dd>
              </dl>
            </div>
          </div>

          <div
            className="access-map-wrapper"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24933.857963577273!2d139.59856044999998!3d38.63204035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8c6dbd6c03ae15%3A0x10bc5da99bc816ef!2z44CSOTk5LTcyMDUg5bGx5b2i55yM6ba05bKh5biC5rip5rW3!5e0!3m2!1sja!2sjp!4v1656947209981!5m2!1sja!2sjp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

