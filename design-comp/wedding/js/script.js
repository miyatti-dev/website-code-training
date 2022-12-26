// aos
AOS.init({
  duration: 1000,
});

// lightbox
lightbox.option({
  'disableScrolling': true
})

// flatpickr
flatpickr('#js-datepicker', {
  locale: 'ja',
  dateFormat: 'Y.m.d（D）H:i', // [2021.05.24（月）08:00]の形式で表示
  minDate: "today",
  enableTime: true,
  mode: "range",
  allowInput: true
});

// ready
$(function () {
  var elements = document.querySelectorAll( '.fullscreen-image' );
  Intense( elements );

  // 読み込み時の初回設定
  windowResizeEvent();
  windowScrollEvent();

  // window scroll event
  $(window).scroll(windowScrollEvent);

  // window resize event
  $(window).resize(windowResizeEvent);

  // burger button click
  $('.burger-button').on('click', function () {
    if ($(this).attr('aria-expanded') === 'true') {
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
    // メニュー非表示(sp/tablet)
    if (windowWidth <= 768) {
      hideNavMenu();
    }
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


//////////////////////////////////////////////////
// ハンバーガーメニュー
//////////////////////////////////////////////////
function showNavMenu(resize) {
  const $burgerButton = $('.burger-button');
  const $headerNav = $('.header-nav');
  if ($burgerButton.attr('aria-expanded') === 'false') {
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
  if ($burgerButton.attr('aria-expanded') === 'true') {
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

//////////////////////////////////////////////////
// window resize event
//////////////////////////////////////////////////
function windowResizeEvent() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    // メニュー非表示(sp/tablet)
    hideNavMenu(true);
  } else {
    // メニュー表示(pc、tablet)
    showNavMenu(true);
  }
}

//////////////////////////////////////////////////
// window scroll event
//////////////////////////////////////////////////
function windowScrollEvent() {
  // パスの取得
  var path = location.pathname;
  path = path.trim();

  if (path.match(/\/room|meal|spa\/.*/)) {
    // topページ以外は何もしない
    return;
  }

  var scrollValue = $(this).scrollTop();
  if (scrollValue === 0) {
    // header bg color
    $('.header').removeClass('header-bg-color-white');

    // header logo
    $('.header-title-wrapper__logo').attr('src', './image/top-header-logo.png');

    // header nav
    $('.header-nav').removeClass('header-nav-bg-color-white');

    // header nav-list-item
    $('.header-nav-list-item').removeClass('header-nav-list-item-color-black');

    // burger-button
    $('.burger-button__bar').removeClass('burger-button__bar-bg-color-black');

    // リサイズを読んでメニュー表示/非表示設定
    windowResizeEvent();
  } else if ($('.header').hasClass('header-bg-color-white') === false) {
    // header bg color
    $('.header').addClass('header-bg-color-white');

    // header logo
    $('.header-title-wrapper__logo').attr('src', './image/sub-header-logo.png');

    // header nav
    $('.header-nav').addClass('header-nav-bg-color-white');

    // header nav-list-item
    $('.header-nav-list-item').addClass('header-nav-list-item-color-black');

    // burger-button
    $('.burger-button__bar').addClass('burger-button__bar-bg-color-black');
  }
}