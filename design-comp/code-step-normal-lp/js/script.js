$(function () {
    // ハンバーガーメニュー
    $('.burger-button').on('click', function () {
        var value = $(window).scrollTop();

        $(this).toggleClass('open');
        $('.header-nav').fadeToggle(300);
        $('body').toggleClass('no-scroll');
    })

    // メニュー選択時
    $('.header-nav-list-item__link').on('click', function () {
        $('.burger-button').removeClass('open');
        $('.header-nav').fadeOut(300);
        $('body').removeClass('no-scroll');
    })

    $('.bbb-about-list-item:nth-child(2n + 1)').one('inview', function(event, isInView) {
        if (isInView) {
            $(this).stop().addClass('slide-in-from-left');
        }
    });

    $('.bbb-about-list-item:nth-child(2n').one('inview', function(event, isInView) {
        if (isInView) {
            $(this).stop().addClass('slide-in-from-right');
        }
    });

    $('.review-list-item').one('inview', function(event, isInView) {
        if (isInView) {
            $(this).stop().addClass('fade-in');
        }
    });

    
})