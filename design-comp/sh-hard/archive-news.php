<?php get_header(); ?>

<!-- main -->
<main>

  <section class="section-wrapper section-news">
    <div class="content-wrapper">
      <h2 class="child-page-section-title">
        お知らせ一覧
      </h2>

      <?php if (have_posts()) : ?>
        <ul class="news-list">
          <?php while (have_posts()) : the_post(); ?>
            <li class="news-list-item">
              <a class="news-list-item__link" href="<?php the_permalink(); ?>">
                <p class="news-list-item__date"><?php echo get_the_date('Y-m-d'); ?></p>
                <p class="news-list-item__title">
                  <?php echo wp_trim_words(get_the_title(), 45, '...'); ?>
                </p>
              </a>
            </li>
          <?php endwhile; ?>
        </ul>
      <?php endif; ?>

      <!-- ============= ページング ============= -->
      <?php
      $args = array(
        'mid_size' => 2, // 現在ページの左右に表示するページ番号の数
        'prev_next' => false, // 「前へ」「次へ」のリンクを非表示
        'screen_reader_text' => 'ページャー'
      );
      the_posts_pagination($args);
      ?>
    </div>
  </section>

</main>
<!-- //main -->

<?php get_footer(); ?>