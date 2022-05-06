// swiper
const swiper = new Swiper(".works-list", {
  loop: true, //ループ可能（ループモードを有効に）
  slidesPerView: 1.5, //スライドを1個分表示
  centeredSlides: true, //アクティブなスライドを中央に表示
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // 576px以上(tablet)
    576: {
      slidesPerView: 3, //スライドを3.8個分表示
      spaceBetween: 40,
    },
    // 768px以上(PC)
    768: {
      slidesPerView: 3.8, //スライドを3.8個分表示
      spaceBetween: 56,
    }
  },
});

// aos
AOS.init({
  duration: 500,
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
      $headerNav.fadeIn(300);
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
        $headerNav.fadeOut(0);
      } else {
        $headerNav.fadeOut(300);
      }
      $headerNav.attr('area-hidden', 'true');
    }
  }

  function resize() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 576) {
      // メニュー非表示(sp)
      hideNavMenu(true);
    } else {
      // メニュー表示(pc、tablet)
      showNavMenu(true);
    }
  }

  // 読み込み時の初回設定
  resize();

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
    if (windowWidth <= 576) {
      // sp
      hideNavMenu();
    }
  })

  // リサイズ
  $(window).resize(function () {
    resize();
  });

  //////////////////////////////////////////////////
  // faq アコーディオン
  //////////////////////////////////////////////////
  $('.faq-list-item__term').click(function () {
    $(this).toggleClass('open');
    $(this).next().toggleClass('active');
  });
  $('.faq-list-item__description').click(function () {
    $(this).prev().toggleClass('open');
    $(this).toggleClass('active');
  });

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

  //////////////////////////////////////////////////
  // contact submit button
  //////////////////////////////////////////////////
  const $submitButton = $('.form-submit-button');
  $('#form input,#form textarea').on('input', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form .privacy-policy__input').prop('checked') === true
    ) {
      $submitButton.prop('disabled', false);
    } else {
      $submitButton.prop('disabled', true);
    }
  });

  const $form = $('#form')
  $form.submit(function (event) {
    const formData = $form.serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScUHZZUhqYk7q4Cfytqu0Y02PibNbtnJyA0g-5NsJK7C6XQYQ/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $form.fadeOut(500, function () {
            $(".form-submit-success-message").slideDown();
          });
        },
        200: function () {
          $form.fadeOut(500, function () {
            $(".form-submit-fail-message").slideDown();
          });
        }
      }
    });
    event.preventDefault();
  });
})