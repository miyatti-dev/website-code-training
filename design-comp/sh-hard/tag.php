<?php get_header(); ?>
<div id="container" class="container_archive_news w_inner">
  <main class="container_article_list">
    <h1 class="page_head">お知らせ</h1>

    <div class="selected_category"><?php single_cat_title('タグ：'); ?></div>
    <div class="news_list_wrap">
      <?php if (have_posts()) : ?>
        <ul>
          <?php while (have_posts()) : the_post(); ?>
            <li>
              <a href="<?php the_permalink(); ?>">
                <div class="date"><?php echo get_the_date('Y.m.d'); ?></div>
                <div class="ttl">
                  <div class="cat">
                    <?php
                    $terms = get_the_terms($post->ID, 'category');
                    foreach ($terms as $term) {
                      echo '<span>' . $term->name . '</span>';
                    }
                    ?>
                  </div>
                  <?php the_title(); ?>
                </div>
              </a>
            </li>
          <?php endwhile; ?>
        </ul>
      <?php endif; ?>


      <!-- ============= ページング ============= -->
      <?php
      $args = array(
        'mid_size' => 2,
        'prev_text' => '前',
        'next_text' => '後',
        'screen_reader_text' => 'ページャー'
      );
      the_posts_pagination($args);
      ?>
    </div>
  </main>
  <?php get_sidebar(); ?>
</div>
<?php get_footer(); ?>