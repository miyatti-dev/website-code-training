<?php get_header(); ?>

<!-- main -->
<main>

  <section class="section-wrapper section-fee-structure">
    <div class="content-wrapper">
      <h2 class="child-page-section-title">
        料金体系
      </h2>
      <div class="fee-structure-wrapper">
        <p class="admission-fee">
          入会金 39,800円
        </p>
        <p class="monthly-fee">
          月額費用
        </p>
      </div>
      <p class="supplementary-text">
        Engressのカリキュラムは完全オーダーメイドのため、カリキュラム内のサポート内容によって料金が変動します。おすすめのスタンダードプランでは、進学先に合わせたサポートまで包括的に行います。
      </p>
    </div>
  </section>

  <section class="section-wrapper section-price-list">
    <div class="content-wrapper">
      <h2 class="child-page-section-title">
        料金表
      </h2>
      <ul class="price-list js-scrollable">
        <?php
        $page = get_page_by_path('price');
        $id = $page->ID;
        ?>
        <li class="price-list-item">
          <p class="price-list-item__plan-name">
            基礎プラン
          </p>
          <p class="price-list-item__price">
            <?php echo number_format(get_field('basic-plan', $id)); ?>円~
          </p>
          <p class="price-list-item__tax">
            *月額（税抜価格）
          </p>
          <ul class="plan-feature-list">
            <li class="plan-feature-list-item">
              カリキュラム作成
            </li>
            <li class="plan-feature-list-item">
              TOEFL学習サポート
            </li>
            <li class="plan-feature-list-item">
              週一回のビデオMTG
            </li>
          </ul>
        </li>

        <li class="price-list-item">
          <p class="price-list-item__plan-name">
            演習プラン
          </p>
          <p class="price-list-item__price">
            <?php echo number_format(get_field('practice-plan', $id)); ?>円~
          </p>
          <p class="price-list-item__tax">
            *月額（税抜価格）
          </p>
          <ul class="plan-feature-list">
            <li class="plan-feature-list-item">
              カリキュラム作成
            </li>
            <li class="plan-feature-list-item">
              TOEFL学習サポート
            </li>
            <li class="plan-feature-list-item">
              週一回のビデオMTG
            </li>
            <li class="plan-feature-list-item">
              月二回の模試（解説付き）
            </li>
          </ul>
        </li>

        <li class="price-list-item recommend">
          <p class="price-list-item__plan-name">
            志望校対策プラン
          </p>
          <p class="price-list-item__price">
            <?php echo number_format(get_field('test-preparation-plan', $id)); ?>円~
          </p>
          <p class="price-list-item__tax">
            *月額（税抜価格）
          </p>
          <ul class="plan-feature-list">
            <li class="plan-feature-list-item">
              カリキュラム作成
            </li>
            <li class="plan-feature-list-item">
              TOEFL学習サポート
            </li>
            <li class="plan-feature-list-item">
              週一回のビデオMTG
            </li>
            <li class="plan-feature-list-item">
              月二回の模試（解説付き）
            </li>
            <li class="plan-feature-list-item">
              週一の英語面接対策
            </li>
          </ul>
        </li>

        <li class="price-list-item">
          <p class="price-list-item__plan-name">
            フレックスプラン
          </p>
          <p class="price-list-item__price">
            <?php echo number_format(get_field('flex-plan', $id)); ?>円~
          </p>
          <p class="price-list-item__tax">
            *月額（税抜価格）
          </p>
          <p class="price-list-item__supplementary-text">
            ＊別途ご相談ください
          </p>
        </li>
      </ul>
    </div>
  </section>

</main>
<!-- //main -->

<?php get_footer(); ?>