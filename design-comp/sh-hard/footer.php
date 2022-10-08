<section class="section-wrapper section-contact">
  <div class="contact-bg">
    <div class="content-wrapper">
      <p class="section-title">
        まずは無料で資料請求から
      </p>
      <a href="" class="document-request-button">
        資料請求
      </a>
      <a href="" class="contact-button">
        お問い合わせ
      </a>
    </div>
  </div>
  <div class="phone-number-wrapper">
    <p class="phone-number-text">
      お電話でのお問い合わせはこちら
    </p>
    <p class="phone-number">
      0123-456-7890
    </p>
    <p class="business-hours">
      平日 08:00~20:00
    </p>
  </div>
</section>

<footer>
  <!--
 <?php
  $args = [
    'theme_location' => 'footer_menu'
  ];
  wp_nav_menu($args);
  ?>
  -->
  <div class="footer-content-wrapper">
    <div class="content-wrapper">
      <ul class="footer-nav-list">
        <li class="footer-nav-list-item">
          <a class="footer-nav-list-item__link" href=".">ホーム</a>
        </li>
        <li class="footer-nav-list-item">
          <a class="footer-nav-list-item__link" href=".">お知らせ</a>
        </li>
        <li class="footer-nav-list-item">
          <a class="footer-nav-list-item__link" href=".">ブログ</a>
        </li>
        <li class="footer-nav-list-item">
          <a class="footer-nav-list-item__link" href="."> コース・料金</a>
        </li>
      </ul>

      <div class="footer-phone-number-wrapper">
        <div class="footer-logo-wrapper">
          <img src="<?php echo esc_url(get_theme_file_uri('/image/logo.png')); ?>" alt="logo" class="footer-logo">
        </div>
        <p class="footer-phone-number">
          0123-456-7890
        </p>
        <p class="footer-business-hours">
          平日 08:00~20:00
        </p>
      </div>
    </div>
  </div>

  <div class="footer-copyright">
    <div class="content-wrapper">
      &copy;
      <?php echo wp_date('Y') ?> <?php bloginfo('name'); ?>
    </div>
  </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>