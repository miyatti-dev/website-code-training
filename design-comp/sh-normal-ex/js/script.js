// aos
AOS.init({
  duration: 1000,
});

// ready
$(function () {
  //////////////////////////////////////////////////
  // ハンバーガーメニュー
  //////////////////////////////////////////////////

  function showNavMenu(resize) {
    const $burgerButton = $('.burger-button');
    const $headerNav = $('.header-nav');
    if ($burgerButton.attr('aria-expanded') == 'false') {
      // burgerButton
      if (resize != true) {
        $burgerButton.addClass('open');
      }
      $burgerButton.attr('aria-expanded', true);

      // headerNav
      $headerNav.slideDown(300);
      $headerNav.attr('area-hidden', 'false');
    }
  }

  function hideNavMenu(resize) {
    const $burgerButton = $('.burger-button');
    const $headerNav = $('.header-nav');
    if ($burgerButton.attr('aria-expanded') == 'true') {
      // burgerButton
      $burgerButton.removeClass('open');
      $burgerButton.attr('aria-expanded', false);

      // headerNav
      if (resize == true) {
        // リサイズ時はすぐ閉じる
        $headerNav.slideUp(0);
      } else {
        $headerNav.slideUp(300);
      }
      $headerNav.attr('area-hidden', 'true');
    }
  }

  function resize() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      // メニュー非表示(sp/tablet)
      hideNavMenu(true);
    } else {
      // メニュー表示(pc、tablet)
      showNavMenu(true);
    }
  }

  // 読み込み時の初回設定
  resize();

  $(window).scroll(function () {
    // windowがスクロールされた時に実行する処理
    var scrollValue = $(this).scrollTop();
    if (scrollValue == 0) {
      $('.header').fadeOut(500);
    }else{
      $('.header').fadeIn(500);
    }
  });

  const $burgerButton = $('.burger-button');
  const $headerNav = $('.header-nav');
  $burgerButton.on('click', function () {
    if ($(this).attr('aria-expanded') == 'true') {
      // メニュー非表示
      hideNavMenu();
    } else {
      // メニュー表示
      showNavMenu();
    }
  });

  // メニュー選択時
  $('.header-nav-list-item__link').on('click', function () {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      // sp/tablet
      hideNavMenu();
    }
  })

  // リサイズ
  $(window).resize(function () {
    resize();
  });

  //////////////////////////////////////////////////
  // news tab
  //////////////////////////////////////////////////
  $('.js-news-tab-trigger').click(function () {
    // 全てactiveを外す
    $('.js-news-tab-trigger').removeClass('is-active');
    $('.js-news-tab-target').removeClass('is-active');

    // activeにする
    $(this).addClass('is-active');

    let id = $(this).data("id");
    //data属性値=idが等しいものにclass付与
    $('#' + id).addClass('is-active')
  })

  //////////////////////////////////////////////////
  // スムーススクロール(ページ内リンクのイベント)
  //////////////////////////////////////////////////
  const headerHeight = $('.header').outerHeight(); // headerの高さ
  $('a[href^="#"]').click(function () {
    // リンクを取得
    const href = $(this).attr("href");
    // ジャンプ先のid名をセット
    const target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    const position = target.offset().top - headerHeight;
    // animateでスムーススクロールを行う
    $("html, body").animate({
      scrollTop: position
    }, 500);
    return false;
  });
})