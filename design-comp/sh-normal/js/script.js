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

  // contactへのスクロール
  let headerHeight = $('.header').outerHeight(); // headerの高さ
  let sectionContactPosition = $('.section-contact').offset().top - headerHeight;
  console.log("## headerHeight = ", headerHeight);
  console.log("## sectionContactPosition = ", sectionContactPosition);
  $('.contact-button').click(function () {
    $('body,html').animate({
      scrollTop: sectionContactPosition
    }, 500);
  });
})