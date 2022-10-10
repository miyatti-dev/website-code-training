<?php get_header(); ?>

<div class="blog-main-sidebar-wrapper content-wrapper">
  <!-- main -->
  <main>
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
  </main>
  <!-- //main -->

  <?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>