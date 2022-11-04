<?php get_header(); ?>

<!-- main -->
<main>

  <section class="section-wrapper section-blog">
    <div class="content-wrapper">
      <h2 class="child-page-section-title">
        新着一覧
      </h2>

      <?php if (have_posts()) : ?>
        <ul class="post-list">
          <?php while (have_posts()) : the_post(); ?>
            <li class="post-list-item">
              <a class="post-list-item__link" href="<?php the_permalink(); ?>">
                <div class="post-list-item__image-wrapper">
                  <?php if (is_sticky() && !is_paged()) : ?>
                    <p class="post-list-item__pinned">
                      固定された記事
                    </p>
                  <?php endif; ?>

                  <p class="post-list-item__category">
                    <?php
                    $terms = get_the_terms($post->ID, 'category');
                    $count = count($terms);
                    if ($count > 0) {
                      echo $terms[0]->name;
                    } else {
                      echo '未分類';
                    }
                    ?>
                  </p>

                  <?php if (has_post_thumbnail()) : ?>
                    <img src="<?php the_post_thumbnail_url('blog'); ?>" alt="" class="post-list-item__image">
                  <?php else : ?>
                    <img src="<?php echo esc_url(get_theme_file_uri('image/no-image.png')); ?>" alt="" class="post-list-item__image">
                  <?php endif; ?>
                </div>

                <div class="post-list-item__text-wrapper">
                  <p class="post-list-item__date"><?php echo get_the_date('Y-m-d'); ?></p>
                  <p class="post-list-item__title">
                    <!--
                  <?php
                  // 表示タイトルを40文字以内に丸める
                  $title = mb_strimwidth($post->post_title, 0, 48, '...', 'UTF-8');
                  echo $title;
                  ?>
                  -->
                    <!-- 表示タイトルを40文字に丸める -->
                    <?php echo wp_trim_words(get_the_title(), 40, '...'); ?>
                  </p>
                  <p class="post-list-item__content"><?php echo get_the_excerpt(); ?></p>
                </div>
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