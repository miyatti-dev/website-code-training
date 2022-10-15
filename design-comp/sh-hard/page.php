<?php get_header(); ?>

<!-- main -->
<main>
  <section class="section-wrapper">
    <?php if (is_page('contact')) : ?>
      <!-- contact -->
      <div class="contact-content-wrapper">
        <?php if (have_posts()) : ?>
          <?php while (have_posts()) : the_post(); ?>
            <div class="article">
              <?php the_content(); ?>
            </div>
          <?php endwhile; ?>
        <?php endif; ?>
      </div>

    <?php else : ?>
      <div class="content-wrapper">
        <?php if (have_posts()) : ?>
          <h2 class="page_head"><?php the_title(); ?></h2>
          <?php while (have_posts()) : the_post(); ?>
            <div class="article">
              <?php the_content(); ?>
            </div>
          <?php endwhile; ?>
        <?php endif; ?>
      </div>
    <?php endif; ?>

  </section>
</main>
<!-- //main -->

<?php get_footer(); ?>