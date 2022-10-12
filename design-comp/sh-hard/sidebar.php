<aside class="sidebar">

  <!-- related-article -->
  <div class="related-article">
    <?php
    $category_ids = [];
    $post_id = get_the_ID(); // 記事IDを取得
    $terms = get_the_terms($post_id, 'category');
    foreach ($terms as $term) :
      array_push($category_ids, $term->term_id); // 用意した空配列にカテゴリーIDを格納
    endforeach;
    $args = [
      'post_type' => 'post',
      'posts_per_page' => 3,
      'category__in' => $category_ids,
      'post__not_in' => [$post_id]
    ];
    $the_query = new WP_Query($args);
    ?>
    <?php if ($the_query->have_posts()) : ?>
      <p class="related-article-title">関連記事</p>
      <ul class="post-list">
        <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
          <li class="post-list-item">
            <a class="post-list-item__link" href="<?php the_permalink(); ?>">
              <div class="post-list-item__image-wrapper">
                <?php if (has_post_thumbnail()) : ?>
                  <img src="<?php the_post_thumbnail_url('blog'); ?>" alt="" class="post-list-item__image">
                <?php else : ?>
                  <img src="<?php echo esc_url(get_theme_file_uri('image/no-image.png')); ?>" alt="" class="post-list-item__image">
                <?php endif; ?>
              </div>
              <div class="post-list-item__text-wrapper">
                <p class="post-list-item__title">
                  <?php echo wp_trim_words(get_the_title(), 35, '...'); ?>
                </p>
              </div>
            </a>
          </li>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
      </ul>
    <?php else : ?>
      <!-- 投稿が無い場合の内容 -->
    <?php endif; ?>
  </div>
  <!-- //related-article -->

  <!-- category-wrapper -->
  <div class="category-wrapper">
    <p class="category-title">カテゴリー</p>
    <ul class="category-list">
      <?php
      $args = [
        'taxonomy' => 'category'
      ];
      $categories = get_terms($args);
      foreach ($categories as $category) {
        echo '<li class="category-list-item"><a href="' . get_category_link($category->term_id) . '">';
        echo '・' . $category->name;
        echo '</a></li>';
      }
      ?>
    </ul>
  </div>
  <!-- // category-wrapper -->

</aside>