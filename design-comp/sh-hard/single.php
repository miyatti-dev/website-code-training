<?php get_header(); ?>

<!-- main -->
<main>

  <!--
<div id="container" class="container_single w_inner">
  <main>
    <article class="article">

      <?php if (in_category('important')) : ?>
        <p class="important_note">重要なお知らせの一覧です。</p>
      <?php endif; ?>


      <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
          <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="date"><?php the_date('Y.m.d') ?></div>
            <h1><?php the_title(); ?></h1>


            <?php if (is_singular('post')) : ?>
              <div class="post_category">カテゴリー：<?php the_category('、'); ?></div>
              <div class="post_tag"><?php the_tags('タグ：', '、'); ?></div>
            <?php elseif (is_singular('blog')) : ?>
              <div class="post_category">カテゴリー：
                <?php
                $terms = get_the_terms($post->ID, 'blog_category');
                foreach ($terms as $term) {
                  echo '<a href="' . get_term_link($term) . '">' . $term->name . '</a>';
                }
                ?>
              </div>
              <div class="post_category">タグ：
                <?php
                $terms = get_the_terms($post->ID, 'blog_tag');
                foreach ($terms as $term) {
                  echo '<a href="' . get_term_link($term) . '">' . $term->name . '</a>、';
                }
                ?>
              </div>
            <?php endif; ?>


            <div class="container">
              <?php the_content(); ?>
            </div>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
    </article>
  </main>
  <?php get_sidebar(); ?>
</div>
              -->
</main>
<!-- //main -->

<?php get_footer(); ?>