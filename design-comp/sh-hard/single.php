<?php get_header(); ?>

<div class="blog-main-sidebar-wrapper content-wrapper">
  <!-- main -->
  <main>

    <!-- article -->
    <article class="article">
      <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
          <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <p class="post-category">
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
            <h1 class="post-title"><?php the_title(); ?></h1>

            <div class="sns-date-wrapper">
              <!-- facebook -->
              <div class="fb-like" data-href="<?php the_permalink(); ?>" data-width="0" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>

              <!-- twitter -->
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>

              <!-- date -->
              <p class="post-date"><?php the_date('Y-m-d') ?></p>
            </div>

            <div class="post-image-wrapper">
              <?php if (has_post_thumbnail()) : ?>
                <img src="<?php the_post_thumbnail_url('blog'); ?>" alt="" class="post-image">
              <?php endif; ?>
            </div>

            <div class="post-container">
              <?php the_content(); ?>
            </div>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
    </article>
    <!-- //article -->

    <!-- recommend articles -->
    <section class="section-wrapper section-recommend-articles">
      <?php
      $post_id = get_the_ID(); // 記事IDを取得
      $args = [
        'post_type' => 'post',
        'tax_query' => [
          [
            'taxonomy' => 'post_tag',
            'field' => 'slug',
            'terms' => 'pickup'
          ],
        ],
        'post__not_in' => [$post_id],
        'posts_per_page' => 3
      ];
      $the_query = new WP_Query($args);
      ?>
      <?php if ($the_query->have_posts()) : ?>
        <p class="recommend-articles-title">
          おすすめの記事
        </p>
        <ul class="recommend-post-list">
          <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
            <li class="recommend-post-list-item">
              <a class="recommend-post-list-item__link" href="<?php the_permalink(); ?>">
                <p class="recommend-post-list-item__category">
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
                <div class="recommend-post-list-item__image-wrapper">
                  <?php if (has_post_thumbnail()) : ?>
                    <img src="<?php the_post_thumbnail_url('blog'); ?>" alt="" class="recommend-post-list-item__image">
                  <?php else : ?>
                    <img src="<?php echo esc_url(get_theme_file_uri('image/no-image.png')); ?>" alt="" class="recommend-post-list-item__image">
                  <?php endif; ?>
                </div>
                <div class="recommend-post-list-item__text-wrapper">
                  <p class="recommend-post-list-item__date"><?php echo get_the_date('Y-m-d'); ?></p>

                  <p class="recommend-post-list-item__title">
                    <?php echo wp_trim_words(get_the_title(), 40, '...'); ?>
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

    </section>
    <!-- //recommend articles -->

  </main>
  <!-- //main -->

  <?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>