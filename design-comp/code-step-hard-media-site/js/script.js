$(function () {
    // ハンバーガーメニュー
    $('.burger-button').on('click', function () {
        var value = $(window).scrollTop();

        $(this).toggleClass('open');
        $('.header-nav').toggleClass('open');
        $('.header-nav-bg').fadeToggle(300);
        $('body').toggleClass('no-scroll');
    })

    // メニュー選択時
    $('.header-nav-list-item__link').on('click', function () {
        $('.burger-button').removeClass('open');
        $('.header-nav').toggleClass('open');
        $('.header-nav-bg').fadeOut(300);
        $('body').removeClass('no-scroll');
    })

    $('.feature-list-item__text-wrapper').one('inview', function (event, isInView) {
        if (isInView) {
            $(this).prev('.feature-list-item__image-wrapper').stop().addClass('slide-in');
        }
    });

    // スライダー
    $('.pick-up-slider').slick({
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        centerPadding: '140px',
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                centerPadding: '50px',
            }
        }]
    });

    // ページ内リンクのイベント
    $('a[href^="#"]').click(function () {
        // リンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う
        // 600はスクロール速度で単位はミリ秒
        $("html, body").animate({
            scrollTop: position
        }, 600, "swing");
        return false;
    });
})