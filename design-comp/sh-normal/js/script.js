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
})