<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>石井花壇 | 温海温泉旅館【公式サイト】</title>
  <meta name="description" content="日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。
    伝統的「和」の息づく空間で、至極のひとときをお過ごしください。" />
  <meta name="robots" content="noindex">
  <link rel="icon" href="<?php echo esc_url(get_theme_file_uri('/image/logo.png')); ?>">

  <title>
    <?php
    wp_title('|', true, 'right');
    bloginfo('name');
    ?>
  </title>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <!-- header -->
  <header class="header">
    <div class="header-wrapper">
      <h1 class="header-title-wrapper">
        <a href="./" class="header-title-wrapper__link">
          <img src="<?php echo esc_url(get_theme_file_uri('/image/logo.png')); ?>" alt="logo" class="header-title-wrapper__logo">
        </a>
      </h1>

      <!--
        管理画面からメニュー追加
      <?php
      $args = [
        'theme_location' => 'header_menu'
      ];
      wp_nav_menu($args);
      ?>
      -->

      <nav class="header-nav" id="js-global-menu" area-hidden="false">
        <ul class="header-nav-list">
          <li class="header-nav-list-item">
            <a class="header-nav-list-item__link" href="./room/">お部屋</a>
          </li>
          <li class="header-nav-list-item">
            <a class="header-nav-list-item__link" href="./meal/">お料理</a>
          </li>
          <li class="header-nav-list-item">
            <a class="header-nav-list-item__link" href="./spa/">温泉</a>
          </li>
        </ul>
      </nav>
      <button type="button" id="js-burger" class="burger-button" aria-controls="js-glabal-menu" aria-expanded="true" area-label="メニューを開閉する">
        <span class="burger-button__bar bar-top"></span>
        <span class="burger-button__bar bar-middle"></span>
        <span class="burger-button__bar bar-bottom"></span>
      </button>
    </div>
  </header>
  <!-- //header -->

  <!-- main -->
  <main>

    <!-- fv -->
    <?php if (is_front_page()) { ?>
      <!-- top -->
      <div class="fv">
        <div class="fv-image-wrapper">
          <img class="fv-image" src="<?php echo esc_url(get_theme_file_uri('/image/fv.jpg')); ?>" alt="">
        </div>
        <div class="fv-text-wrapper">
          <h2 class="fv-title">
            TOEFL対策はEngress
          </h2>
          <p class="fv-text">
            日本人へのTOEFL指導歴豊かな講師陣の<br>
            コーチング型TOEFLスクール
          </p>
          <a href="" class="document-request-button">
            資料請求
          </a>
          <a href="" class="contact-button">
            お問い合わせ
          </a>
        </div>
      </div>

    <?php } elseif (is_page('price')) { ?>
      <!-- price -->
      <div class="child-page-fv">
        <div class="child-page-fv-image-wrapper">
          <img class="child-page-fv-image" src="<?php echo esc_url(get_theme_file_uri('/image/plan.png')); ?>" alt="">
        </div>
        <div class="child-page-fv-text-wrapper">
          <h2 class="child-page-fv-title">
            コース・料金
          </h2>
        </div>
      </div>
    <?php } elseif (is_home() || is_single() || is_category()) { ?>
      <!-- price -->
      <div class="child-page-fv">
        <div class="child-page-fv-image-wrapper">
          <img class="child-page-fv-image" src="<?php echo esc_url(get_theme_file_uri('/image/blog.png')); ?>" alt="">
        </div>
        <div class="child-page-fv-text-wrapper">
          <h2 class="child-page-fv-title">
            ブログ
          </h2>
        </div>
      </div>

    <?php } elseif (is_post_type_archive('course') || is_tax(['school-year', 'period']) || is_singular('course')) { ?>
      <div class="subpage_key_visual header_course"></div>
    <?php } elseif (is_post_type_archive('blog') || is_tax(['blog_category', 'blog_tag']) || is_singular('blog')) { ?>
      <div class="subpage_key_visual header_blog"></div>
    <?php } elseif (is_page('school-bldg')) { ?>
      <div class="subpage_key_visual header_school_bldg"></div>

    <?php } else { ?>
      <div class="subpage_key_visual header_sub"></div>
    <?php } ?>
    <!-- //fv -->



    <?php if (!is_front_page()) { ?>
      <?php if (function_exists('bcn_display')) { ?>
        <div class="breadcrumb-wrapper">
          <div id="breadcrumb" class="content-wrapper breadcrumb" vocab="http://schema.org/" typeof="BreadcrumbList">
            <?php bcn_display(); ?>
          </div>
        </div>
      <?php } ?>
    <?php } ?>