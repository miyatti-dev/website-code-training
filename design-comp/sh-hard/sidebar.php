<aside class="container_side">

  <div class="container_side_item side_news">
    <div class="head">お知らせ</div>
    <div class="container_side_category">
      <div class="label">カテゴリー</div>
      <div class="category_list">
        <ul>
          <?php
          $args = [
            'taxonomy' => 'category'
          ];
          $categories = get_terms($args);
          foreach ($categories as $category) {
            echo '<li><a href="' . get_category_link($category->term_id) . '">';
            echo $category->name;
            echo '</a></li>';
          }
          ?>
        </ul>
      </div>
    </div>

    <div class="container_side_tag">
      <div class="label">タグ</div>
      <div class="tag_list">
        <ul>
          <?php
          $args = [
            'taxonomy' => 'post_tag'
          ];
          $tags = get_terms($args);
          foreach ($tags as $tag) {
            echo '<li><a href="' . get_tag_link($tag->term_id) . '">';
            echo $tag->name;
            echo '</a></li>';
          }
          ?>
        </ul>
      </div>
    </div>

    <!--
    <div class="container_side_item side_blog">
      <div class="head">ブログ</div>
      <div class="container_side_category">
        <div class="label">カテゴリー</div>
        <div class="category_list">
          <ul>
            <li>
              <a href="<?php echo esc_url(home_url('/blog')); ?>">すべて</a>
            </li>
            <?php
            $args = [
              'taxonomy' => 'blog_category'
            ];
            $terms = get_terms($args);
            foreach ($terms as $term) {
              echo '<li><a href="' . get_term_link($term) . '">' . $term->name . '</a></li>';
            }
            ?>
          </ul>
        </div>
      </div>
      <div class="side_item container_side_tag">
        <div class="label">タグ</div>
        <div class="tag_list">
          <ul>
            <?php
            $args = [
              'taxonomy' => 'blog_tag'
            ];
            $terms = get_terms($args);
            foreach ($terms as $term) {
              echo '<li><a href="' . get_term_link($term) . '">' . $term->name . '</a></li>';
            }
            ?>
          </ul>
        </div>
      </div>
    </div>
 -->

  </div>


  <?php get_search_form(); ?>

</aside>