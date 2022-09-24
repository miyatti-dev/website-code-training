
// ready
$(function () {
  // 読み込み時の初回設定
  windowResizeEvent();
  windowScrollEvent();

  // window scroll event
  $(window).scroll(windowScrollEvent);

  // window resize event
  $(window).resize(windowResizeEvent);

  // reserve modal
  reserveModalSetup();

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
  // faq アコーディオン
  //////////////////////////////////////////////////
  $('.faq-list-item__term').click(function () {
    console.log('faq-list-item__term click');
    $(this).toggleClass('open');
    $(this).next().toggleClass('active');
  });
  $('.faq-list-item__description').click(function () {
    console.log('item__description click');
    $(this).prev().toggleClass('open');
    $(this).toggleClass('active');
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
})

//////////////////////////////////////////////////
// reserve modal
//////////////////////////////////////////////////
function reserveModalSetup() {
  var $openModalButton = $('#js-open-reserve-modal');
  var $closeModalButton = $('#js-close-reserve-modal');
  var $modal = $('#js-reserve-modal');
  var $modalBg = $('#js-reserve-modal-bg');

  // modal表示
  $openModalButton.click(function () {
    $modal.addClass('reserve-modal-show');
  });

  // modal非表示
  $closeModalButton.click(function () {
    $modal.removeClass('reserve-modal-show');
  });
  $modalBg.click(function () {
    $modal.removeClass('reserve-modal-show');
  });
}

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