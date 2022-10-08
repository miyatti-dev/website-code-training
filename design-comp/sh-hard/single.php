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
            <p class="post-date"><?php the_date('Y.m.d') ?></p>

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