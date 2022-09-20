</div>

<footer>
  <div id="go_top">
    <img src="<?php echo esc_url(get_theme_file_uri('/img/btn-gotop.png')); ?>" srcset="./img/btn-gotop@2x.png 2x" alt="ページトップに戻る">
  </div>
  <div class="footer_logo">
    <img src="<?php echo esc_url(get_theme_file_uri('/img/logo.svg')); ?>" alt="AZゼミ">
  </div>

  <?php
  if (is_active_sidebar('footer-widgets')) {
    dynamic_sidebar('footer-widgets');
  }
  ?>



  <?php
  $args = [
    'theme_location' => 'footer_menu'
  ];
  wp_nav_menu($args);
  ?>



  <div class="footer_nav">
    <ul>
      <li><a href="<?php echo esc_url(home_url('/')); ?>">トップ</a></li>
      <li><a href="<?php echo esc_url(home_url('/news')); ?>">お知らせ</a></li>
      <li><a href="<?php echo esc_url(home_url('/course')); ?>">コース紹介</a></li>
      <li><a href=".<?php echo esc_url(home_url('/school-bldg')); ?>">校舎案内</a></li>
      <li class="contact"><a href="<?php echo esc_url(home_url('/contact')); ?>">資料請求・お問合せ</a></li>
      <li class="contact"><a href="<?php echo esc_url(home_url('/privacy-policy')); ?>">個人情報保護方針</a></li>
    </ul>
  </div>
  <div class="cr">&copy;
    <?php echo wp_date('Y') ?> <?php bloginfo('name'); ?></div>
</footer>
<?php wp_footer(); ?>
</body>

</html>