// スティッキーヘッダー
$(function () {
    var $win = $(window);
    var $fv = $('.fv');
    var $header = $('.header-wrapper');
    var fvHeight = $fv.outerHeight();
    var fixedClass = 'fixed';

    $win.on('load scroll', function () {
        var value = $(this).scrollTop();
        if (value > fvHeight) {
            $header.addClass(fixedClass);
        } else {
            $header.removeClass(fixedClass);
        }
    })

    // ハンバーガーメニュー
    $('.burger-button').on('click', function () {
        $(this).toggleClass('open');
        $('.header-nav').fadeToggle(300);
        $('body').toggleClass('no-scroll');
    });

    if ($(window).width() < 768) { //デバイスの幅が768以下のとき
        $('.header-nav-list-item__link').on('click', function () {
            $('.burger-button').removeClass('open');
            $('.header-nav').fadeToggle(300);
            $('body').removeClass('no-scroll');
        });
    }
})

// スライダー
$('.fv-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
});