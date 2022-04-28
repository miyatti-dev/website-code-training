$(function () {
    var $win = $(window);
    var fvHeight = $('.fv').outerHeight(); // fvの高さ
    var imgHeight = $('.fv-image-title-wrapper').outerHeight(); // fv部分のimageの高さ

    var $headerTitleImage = $('.header-title-image');
    var $burgerButton = $('.burger-button');
    var $burgerButtonBar = $('.burger-button__bar');

    var headerTitleImageBlackClass = 'header-title-image-black';
    var burgerButtonBlackClass = 'burger-button-black';
    var burgerButtonBarBlackClass = 'burger-button-black__bar';

    // メニューの色切り替え
    $win.on('load scroll', function () {
        var value = $(this).scrollTop();
        // 左上のTitleImageの色切り替え
        if (value > imgHeight - 40) {
            $headerTitleImage.addClass(headerTitleImageBlackClass);
        } else {
            $headerTitleImage.removeClass(headerTitleImageBlackClass);
        }

        // 右上のMenuButtonの色切り替え
        if (value > fvHeight - 40) {
            $burgerButton.addClass(burgerButtonBlackClass);
            $burgerButtonBar.addClass(burgerButtonBarBlackClass);
        } else {
            $burgerButton.removeClass(burgerButtonBlackClass);
            $burgerButtonBar.removeClass(burgerButtonBarBlackClass);
        }

        if ($('.burger-button').hasClass('open')) {
            $burgerButton.removeClass(burgerButtonBlackClass);
            $burgerButtonBar.removeClass(burgerButtonBarBlackClass);
        }
    })

    // ハンバーガーメニュー
    $('.burger-button').on('click', function () {
        var value = $(window).scrollTop();
        if (value > fvHeight - 40) {
            $burgerButton.toggleClass(burgerButtonBlackClass);
            $burgerButtonBar.toggleClass(burgerButtonBarBlackClass);
        }

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

    $('.faq-list-item__term').click(function () {
        $(this).toggleClass('open');
        $(this).next().toggleClass('active');
    });
})