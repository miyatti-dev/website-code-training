$(function () {
    //////////////////////////////////////////////////
    // ハンバーガーメニュー
    //////////////////////////////////////////////////
    $('.burger-button').on('click', function () {
        $(this).toggleClass('open');
        $('.header-nav').toggleClass('open');
    })
    // メニュー選択時
    $('.header-nav-list-item__link').on('click', function () {
        $('.burger-button').removeClass('open');
        $('.header-nav').removeClass('open');
    })

    //////////////////////////////////////////////////
    // スライドイン
    //////////////////////////////////////////////////
    // title
    $('.title').one('inview', function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass('slide-in');
        }
    });
    // section-information
    $('.section-information').one('inview', function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass('slide-in');
        }
    });
    // gallery
    $('.section-gallery > .section-title-wrapper').one('inview', function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass('slide-in');
        }
    });
    $('.gallery-list-item').one('inview', function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass('gallery-slide-in');
        }
    });

    //////////////////////////////////////////////////
    // access背景
    //////////////////////////////////////////////////
    $('.section-access > .section-title-wrapper').on('inview', function (event, isInView) {
        if (isInView) {
            $('.access-bg').fadeIn(500);
        } else {
            $('.access-bg').fadeOut(500);
        }
    });

    $('.section-contact').on('inview', function (event, isInView) {
        if (isInView) {
            $('.access-bg').fadeOut(500);
        }
    });

    //////////////////////////////////////////////////
    // スクロールイベント
    //////////////////////////////////////////////////
    $(window).scroll(function () {
        // スクロール位置を取得
        let scrollPosition = $(window).scrollTop();

        // ヘッダーメニュー表示・非表示
        showHideHeaderMenu(scrollPosition);

        // firstView拡大・縮小
        scaleFirstView(scrollPosition);

        // サイドメニュー表示・非表示
        showHideSideMenu(scrollPosition);
    });

    //////////////////////////////////////////////////
    // スムーススクロール(ページ内リンクのイベント)
    //////////////////////////////////////////////////
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

//////////////////////////////////////////////////
// ヘッダーメニュー表示・非表示
//////////////////////////////////////////////////
function showHideHeaderMenu(scrollPosition) {
    // スクロール位置が520pxを超えた場合
    if (scrollPosition > 520) {
        // ロゴとハンバーガ―メニュをfadeInで表示する
        $('.header-wrapper').fadeIn(500);
        // スクロール位置が520px未満の場合
    } else {
        // ロゴとハンバーガ―メニュをfadeOutで非表示にする
        $('.header-wrapper').fadeOut(500);
    }
}

//////////////////////////////////////////////////
// firstView拡大・縮小
//////////////////////////////////////////////////
function scaleFirstView(scrollPosition) {
    // window.innerWidthで画面幅を取得
    if (window.innerWidth > 900) {
        // メインビジュアルのCSS（width）を変更する
        // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
        $('.fv-image-wrapper').css({
            'width': 100 / 3 + scrollPosition / 10 + '%'
        });
        // スマホ表示の場合の処理（画面幅が900px以下の場合）
    } else {
        // メインビジュアルのCSS（width）を変更する
        // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
        $('.fv-image-wrapper').css({
            'width': 100 - scrollPosition / 10 + '%'
        });
    }
}

//////////////////////////////////////////////////
// サイドメニュー表示・非表示
//////////////////////////////////////////////////
function showHideSideMenu(scrollPosition) {
    // 画面下からgalleryまでの距離を取得
    let gallery_position = $('.section-gallery').offset().top - $(window).height();
    // 画面下からaccessまでの距離を取得
    let access_position = $('.section-access > .section-title-wrapper').offset().top - $(window).height();

    if (window.innerWidth > 900) {
        // galleryが表示された場合（スクロール位置が、画面下からgalleryまでの距離を超えた場合）
        if (scrollPosition > gallery_position) {
            // accessが表示されるまでの間は、side-menuを横からスライドさせて表示する
            if (scrollPosition < access_position) {
                $('.side-menu').css({
                    'transform': 'rotate(-90deg) translateY(0)'
                });
                // accessが表示されたら、side-menuをスライドさせて非表示にする
            } else {
                $('.side-menu').css({
                    'transform': 'rotate(-90deg) translateY(60px)'
                });
            }
            // galleryが表示される前は、side-menuをスライドさせて非表示にする
        } else {
            $('.side-menu').css({
                'transform': 'rotate(-90deg) translateY(60px)'
            });
        }
    }
}