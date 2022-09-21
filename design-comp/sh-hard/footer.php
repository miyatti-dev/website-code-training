</main>

<footer>

  <!--
  <?php
  $args = [
    'theme_location' => 'footer_menu'
  ];
  wp_nav_menu($args);
  ?>
  -->



  <div class="cr">
    &copy;
    <?php echo wp_date('Y') ?> <?php bloginfo('name'); ?>
  </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>