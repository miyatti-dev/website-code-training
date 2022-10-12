<?php get_header(); ?>

<div class="blog-main-sidebar-wrapper content-wrapper">
  <!-- main -->
  <main>

    <!-- article -->
    <article class="article">
      <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
          <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

            <h1 class="post-title"><?php the_title(); ?></h1>

            <p class="post-date"><?php the_date('Y-m-d') ?></p>

            <div class="post-container">
              <?php the_content(); ?>
            </div>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
    </article>
    <!-- //article -->

  </main>
  <!-- //main -->

</div>

<?php get_footer(); ?>