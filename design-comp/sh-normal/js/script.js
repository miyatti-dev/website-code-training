// swiper
const swiper = new Swiper(".works-list", {
  loop: true, //ループ可能（ループモードを有効に）
  slidesPerView: 3.8, //スライドを3.8個分表示
  centeredSlides: true, //アクティブなスライドを中央に表示
  spaceBetween: 56,
  autoplay: {
    delay: 5000,
  },
});

// aos
AOS.init({
  duration: 500,
});

// ready
$(function () {
  // ハンバーガーメニュー
  $('.burger-button').on('click', function () {
    $(this).toggleClass('open');
    $('.header-nav').fadeToggle(300);
    $('body').toggleClass('no-scroll');
  })

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
  let headerHeight = $('.header').outerHeight(); // headerの高さ
  $('a[href^="#"]').click(function () {
    // リンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top - headerHeight;
    // animateでスムーススクロールを行う
    $("html, body").animate({
      scrollTop: position
    }, 500);
    return false;
  });

  //////////////////////////////////////////////////
  // contact submit button
  //////////////////////////////////////////////////
  const $submitButton = $('.form-submit-button')
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
    var formData = $form.serialize();
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