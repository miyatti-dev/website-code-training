<?php get_header() ?>

<!-- about -->
<section class="section-wrapper section-about">
  <div class="content-wrapper">
    <h2 class="section-title">
      TOEFL学習でこんな悩みありませんか？
    </h2>
    <ul class="problem-list">
      <li class="problem-list-item">
        <p class="problem-list-item__text">
          勉強の習慣が<br>
          身についていない
        </p>
      </li>
      <li class="problem-list-item">
        <p class="problem-list-item__text">
          勉強しているはず<br>
          なのに点数が伸びない
        </p>
      </li>
      <li class="problem-list-item">
        <p class="problem-list-item__text">
          正しい勉強方法が<br>
          わからない
        </p>
      </li>
    </ul>
    <div class="engress-about">
      <div class="engress-about-inner">
        <p class="engress-about__title">
          Engressは<br>
          <span>TOEFLに特化したスクール</span>です
        </p>
        <p class="engress-about__text">
          完全オーダーメイドで、１人１人の悩みに合わせた最適な指導で<br>
          TOEFLの苦手分野を克服します。
        </p>
      </div>

    </div>
  </div>
</section>
<!-- //about -->

<!-- feature -->
<section class="section-wrapper section-feature">
  <div class="content-wrapper">
    <h2 class="section-title">
      TOEFL対策に特化したEngress3つの強み
    </h2>
    <ul class="feature-list">
      <li class="feature-list-item">
        <div class="feature-list-item__text-wrapper">
          <p class="feature-list-item__number">
            特長 １
          </p>
          <p class="feature-list-item__feature">
            TOEFLに最適化された<br>
            無駄のないカリキュラム
          </p>
          <p class="feature-list-item__detail">
            TOEFLではビジネス英語には登場しない数多くの学術的内容が出題されます。そのため、ベースとなる知識も必要になります。Engressでは過去1000題を分析し、最適なカリキュラムを組んでいます。
          </p>
        </div>
        <div class="feature-list-item__image-wrapper">
          <img src="<?php echo esc_url(get_theme_file_uri('/image/feature01.jpg')); ?>" alt="" class="feature-list-item__image">
        </div>
      </li>

      <li class="feature-list-item">
        <div class="feature-list-item__text-wrapper">
          <p class="feature-list-item__number">
            特長 ２
          </p>
          <p class="feature-list-item__feature">
            日本人指導歴10年以上の<br>
            経験豊富な講師陣
          </p>
          <p class="feature-list-item__detail">
            Engressの講師陣は、もともと日本人向けにTOEFLを教えていた人が大多数です。また全メンバーがTESOL(英語教授法)を取得しており、知識と経験を兼ね備えている教育のプロフェッショナルです。
          </p>
        </div>
        <div class="feature-list-item__image-wrapper">
          <img src="<?php echo esc_url(get_theme_file_uri('/image/feature02.jpg')); ?>" alt="" class="feature-list-item__image">
        </div>
      </li>

      <li class="feature-list-item">
        <div class="feature-list-item__text-wrapper">
          <p class="feature-list-item__number">
            特長 ３
          </p>
          <p class="feature-list-item__feature">
            平均3ヶ月でTOEFL iBT20点アップ
          </p>
          <p class="feature-list-item__detail">
            Engressは高校生からサラリーマンまで様々な年齢層の方々が通われていますが、完全オーダーメイドのカリキュラムで柔軟に対応しているため、平均3ヶ月でTOEFLスコアを20点アップさせています。
          </p>
        </div>
        <div class="feature-list-item__image-wrapper">
          <img src="<?php echo esc_url(get_theme_file_uri('/image/feature03.jpg')); ?>" alt="" class="feature-list-item__image">
        </div>
      </li>
    </ul>
  </div>
</section>
<!-- //feature -->

<!-- price -->
<section class="section-wrapper section-price">
  <div class="content-wrapper">
    <p class="price-text">
      Engressの料金プランはこちら
    </p>
    <a href="" class="price-link">料金を見てみる</a>
  </div>
</section>
<!-- //price -->

<!-- success-story -->
<section class="section-wrapper section-success-story">
  <div class="content-wrapper">
    <h2 class="section-title">
      TOEFL成功事例
    </h2>

    <?php
    $args = [
      'post_type' => 'success-story',
      'posts_per_page' => 3
    ];
    $the_query = new WP_Query($args);
    ?>
    <?php if ($the_query->have_posts()) : ?>
      <ul class="success-story-list">
        <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
          <li class="success-story-list-item">
            <p class="success-story-list-item__title">
              <?php echo nl2br(esc_html(get_field('headline'))); ?>
            </p>
            <div class="success-story-list-item__image-wrapper">
              <img src="<?php the_field('photo'); ?>" alt="" class="success-story-list-item__image">
            </div>
            <div class="success-story-list-item__personal-info-wrapper">
              <p class="success-story-list-item__profession">
                <?php echo nl2br(esc_html(get_field('profession'))); ?>
              </p>
              <p class="success-story-list-item__name">
                <?php echo nl2br(esc_html(get_field('name'))); ?>
              </p>
            </div>
            <p class="success-story-list-item__result">
              <?php echo nl2br(esc_html(get_field('result'))); ?>
            </p>
          </li>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
      </ul>
    <?php endif; ?>

  </div>
</section>
<!-- //success-story -->

<!-- usage-flow -->
<section class="section-wrapper section-usage-flow">
  <div class="content-wrapper">
    <h2 class="section-title">
      ご利用の流れ
    </h2>

    <ul class="usage-list">
      <li class="usage-list-item">
        <p class="usage-list-item__number">
          01
        </p>
        <p class="usage-list-item__title">
          お問い合わせ
        </p>
        <p class="usage-list-item__detail">
          まずはフォームまたはお電話からお申し込みください。
        </p>
      </li>

      <li class="usage-list-item">
        <p class="usage-list-item__number">
          02
        </p>
        <p class="usage-list-item__title">
          ヒアリング
        </p>
        <p class="usage-list-item__detail">
          現在の学習状況やTOEFLスコア、目標のスコアをお聞きします。
        </p>
      </li>

      <li class="usage-list-item">
        <p class="usage-list-item__number">
          03
        </p>
        <p class="usage-list-item__title">
          学習プランのご提供
        </p>
        <p class="usage-list-item__detail">
          目標達成のために最適な学習プランをご提案致します。
        </p>
      </li>

      <li class="usage-list-item">
        <p class="usage-list-item__number">
          04
        </p>
        <p class="usage-list-item__title">
          ご入会
        </p>
        <p class="usage-list-item__detail">
          お申込み完了後、レッスンがスタートします。
        </p>
      </li>
    </ul>
  </div>
</section>
<!-- //usage-flow -->

<!-- faq -->
<section class="section-wrapper section-faq">
  <div class="content-wrapper">
    <h2 class="section-title">
      よくある質問
    </h2>
    <dl class="faq-list" data-aos="fade-up">
      <dt class="faq-list-item__term open">
        Engressはサラリーマンでも学習を続けられるでしょうか？
      </dt>
      <dd class="faq-list-item__description active">
        Engressは各個人に最適な学習プランをご提供しております。サラリーマンの方でも継続できます。
      </dd>
      <dt class="faq-list-item__term">
        教材はオリジナルのものを使用しているのでしょうか？
      </dt>
      <dd class="faq-list-item__description">
        学習に最適されたEngressオリジナルの教材を使用しています。
      </dd>
      <dt class="faq-list-item__term">
        講師に日本人はいますか？
      </dt>
      <dd class="faq-list-item__description">
        講師は日本人の方もいます。講師のご希望がある場合は、指名することも可能です。
      </dd>
      <dt class="faq-list-item__term">
        TOEFL以外の海外大学合格のサポートもしてもらえるのでしょうか？
      </dt>
      <dd class="faq-list-item__description">
        EngressはTOEFLに特化した学習プランを提供しておりますので、海外大学合格のサポートはしておりません。
      </dd>
    </dl>
  </div>
</section>
<!-- //faq -->

<!-- blog-and-news -->
<section class="section-wrapper section-blog-and-news">
  <div class="content-wrapper">

    <!-- blog -->
    <div class="blog-wrapper">
      <h2 class="section-title">
        ブログ
      </h2>

      <?php
      $args = [
        'post_type' => 'blog',
        'posts_per_page' => 3
      ];
      $the_query = new WP_Query($args);
      ?>
      <?php if ($the_query->have_posts()) : ?>
        <ul class="blog-list">
          <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
            <li class="blog-list-item">
              <a href="<?php the_permalink(); ?>" class="blog-list-item__link">
                <p class="blog-list-item__category">
                  カテゴリー
                </p>
                <div class="blog-list-item__image-wrapper">
                  <img src="<?php the_post_thumbnail_url('blog'); ?>" alt="" class="blog-list-item__image">
                </div>
                <div class="blog-list-item__text-wrapper">
                  <p class="blog-list-item__text">
                    <?php the_title(); ?>
                  </p>
                  <time class="blog-list-item__date">
                    <?php echo get_the_date('Y-m-d') ?>
                  </time>
                </div>
              </a>
            </li>
          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
        </ul>
      <?php endif; ?>

    </div>
    <!-- //blog -->

    <!-- news -->
    <div class="news-wrapper">
      <h2 class="section-title">
        お知らせ
      </h2>

      <?php
      $args = [
        'post_type' => 'news',
        'posts_per_page' => 3
      ];
      $the_query = new WP_Query($args);
      ?>
      <?php if ($the_query->have_posts()) : ?>
        <ul class="news-list">
          <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
            <li class="news-list-item">
              <a href="">
                <time class="news-list-item__date">
                  <?php echo get_the_date('Y-m-d') ?>
                </time>
                <p class="news-list-item__text">
                  <?php the_title(); ?>
                </p>
              </a>
            </li>
          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
        </ul>
      <?php endif; ?>
    </div>
    <!-- //news -->
  </div>
</section>
<!-- //blog-and-news -->


<?php get_footer() ?>