<?php

/*--------------------------------------------*/
/* scriptとcssを読み込む
/*--------------------------------------------*/
function my_theme_scripts() {
	// reset css
	wp_enqueue_style('reset', get_theme_file_uri('/css/destyles.css'));

	// google fonts
	wp_enqueue_style('google-webfont', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

	// fontawesome
	wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v6.2.0/css/all.css');

	// base css（バージョンに時刻を入れてキャッシュ対策をする）
	wp_enqueue_style('base', get_theme_file_uri('/css/styles.css'), ['reset'], date("YmdHis"));

	if (is_front_page()) {
		// top
		wp_enqueue_style('top', get_theme_file_uri('/css/top.css'), ['base'], date("YmdHis"));
	} else if (is_page('price')) {
		// price
		wp_enqueue_style('price', get_theme_file_uri('/css/price.css'), ['base'], date("YmdHis"));
	} else if (is_home() || is_category() || is_tag()) {
		// blog list (一覧ページ)
		wp_enqueue_style('blog-list', get_theme_file_uri('/css/blog-list.css'), ['base'], date("YmdHis"));
	} else if (is_post_type_archive('news')) {
		// news list (一覧ページ)
		wp_enqueue_style('news-list', get_theme_file_uri('/css/news-list.css'), ['base'], date("YmdHis"));
	} else if (is_singular('post')) {
		// blog (投稿ページ)
		wp_enqueue_style('blog', get_theme_file_uri('/css/blog.css'), ['base'], date("YmdHis"));

		wp_enqueue_script('facebook', 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v15.0', [], date("YmdHis"), true);
		wp_enqueue_script('twitter', 'https://platform.twitter.com/widgets.js', [], date("YmdHis"), true);
	}

	// 標準jquery削除
	wp_deregister_script('jquery');

	// jquery
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', [], '', true);

	// js
	wp_enqueue_script('js-script', get_theme_file_uri('/js/script.js'), ['jquery'], date("YmdHis"), true);
}
add_action('wp_enqueue_scripts', 'my_theme_scripts');

/*--------------------------------------------*/
/* script読み込み時のタグ編集
/*--------------------------------------------*/
function add_defer($tag, $handle) {

	if ($handle === 'facebook') {
		return str_replace('src=', 'nonce="MOGLwflV" defer src=', $tag);
	} else if ($handle == 'twitter') {
		return str_replace('src=', 'defer src=', $tag);
	}
	return $tag;
}

add_filter('script_loader_tag', 'add_defer', 10, 2);

/*--------------------------------------------*/
/* 「投稿」メニューを「ブログ」に変更
/*--------------------------------------------*/
function aktk_post_type_labels_post($labels) {
	foreach ($labels as $key => $value) {
		$labels->$key = str_replace('投稿', 'ブログ', $value);
	}

	return $labels;
}

add_filter('post_type_labels_post', 'aktk_post_type_labels_post');

/*--------------------------------------------*/
/* 成功事例の「新規投稿」サブメニューを非表示
/*--------------------------------------------*/
function remove_sub_menus() {
	remove_submenu_page('edit.php?post_type=success-story', 'post-new.php?post_type=success-story');
}
add_action('admin_menu', 'remove_sub_menus');

/*--------------------------------------------*/
/* 成功事例の「新規投稿」項目を非表示
/*--------------------------------------------*/
function delete_new_post_item($hook) {
	if ($hook == 'edit.php' || $hook == 'post.php') {

		$postType = get_post_type();
		if ($postType == 'success-story') {
			echo '<style>.wrap .wp-heading-inline + .page-title-action{display: none;}</style>';
		}
	}
}
add_action('admin_enqueue_scripts', 'delete_new_post_item');

/*--------------------------------------------*/
/* 成功事例の「ゴミ箱」項目を非表示
/*--------------------------------------------*/
function custom_action_row($actions, $post) {

	$postType = get_post_type();
	if ($postType == 'success-story') {
		unset($actions['trash']); //ゴミ箱
	}

	return $actions;
}
add_filter('post_row_actions', 'custom_action_row', 10, 2);

/*--------------------------------------------*/
/* 成功事例の編集画面の「ゴミ箱へ移動」項目を非表示
/*--------------------------------------------*/
function admin_preview_css_custom() {
	$current_screen = get_current_screen();
	if (
		isset($current_screen) && ($current_screen->post_type === 'success-story')
	) {
		$style = '<style>#preview-action {display: none;}</style>';
		$style .= '<style>#delete-action{display: none;}</style>';
		echo $style;
	}
}
add_action('admin_print_styles', 'admin_preview_css_custom');

/*--------------------------------------------*/
/* アイキャッチ画像を有効化
/*--------------------------------------------*/
function setup_post_thumbnails() {
	add_theme_support('post-thumbnails', ['post', 'blog', 'news']);
}
add_action('after_setup_theme', 'setup_post_thumbnails');

/*--------------------------------------------*/
/* アーカイブページの表示件数を10件にする
/*--------------------------------------------*/
function change_set_blog($query) {
	if (is_admin() || !$query->is_main_query()) {
		return;
	}
	if (is_home() || $query->is_post_type_archive('post') || $query->is_post_type_archive('news') || is_tax(['blog_category', 'blog_tag']) || is_search()) {
		$query->set('posts_per_page', '10');
		return;
	}
}
add_action('pre_get_posts', 'change_set_blog');

/*--------------------------------------------*/
/* アーカイブページ抜粋文の長さ変更
/*--------------------------------------------*/
function change_excerpt_length() {
	$length = 80;
	if (is_home() || is_post_type_archive('post') || is_tax(['post', 'blog_tag'])) {
		return 75; //リターンした時点で処理は終了する
	}
	return $length; // デフォルト110文字
}
add_filter('excerpt_length', 'change_excerpt_length', 999);

/*--------------------------------------------*/
/* 省略記号を変更
/*--------------------------------------------*/
function custom_excerpt_more($more) {
	return '...';
}
add_filter('excerpt_more', 'custom_excerpt_more');

/*




// カスタム投稿タイプ【コース】
function cpt_register_course() {
	$args = [
		'label' => 'コース',
		'labels' => [
			'singular_name' => 'コース',
			// 'edit_item' => 'コースを編集',
			// 'add_new_item' => '新規コースを追加'
		],
		'public' => true, //カスタム投稿タイプを一般に公開するかどうか
		'show_in_rest' => true, //REST APIにカスタム投稿タイプを含めるかどうか → カスタム投稿タイプでブロックエディタを使うならtrue
		'has_archive' => true, //アーカイブページを持つかどうか
		'delete_with_user' => false, //ユーザーを削除した後、コンテンツも削除するかどうか
		'exclude_from_search' => false, //検索から除外するかどうか
		'hierarchical' => false, //階層化するかどうか
		'query_var' => true, //クエリパラメーターを使えるようにする → プレビュー画面を使うためにはtrue
		'menu_position' => 5, //管理画面に表示するメニューの位置
		'supports' => [
			'title', 'editor', 'thumbnail', 'custom-fields'
		], //カスタム投稿タイプがサポートする機能
	];
	register_post_type('course', $args);
}
add_action('init', 'cpt_register_course');


function tax_register_school_year() {
	$args = [
		'label' => '学年',
		'labels' => [
			'singular_name' => '学年',
			'edit_item' => '学年を編集',
			'add_new_item' => '新規学年を追加'
		],
		'hierarchical' => true, //階層化するかどうか（カテゴリー的に使うならtrue、タグ的に使うならfalse）
		'query_var' => true, //クエリパラメーターを使えるようにする
		'show_in_rest' => true //REST APIにカスタムタクソノミーを含めるかどうか、グーテンベルクのブロックエディターで分類を使用するにはtrue
	];
	register_taxonomy('school-year', 'course', $args);
}
add_action('init', 'tax_register_school_year');


function tax_register_period() {
	$args = [
		'label' => '期間',
		'labels' => [
			'singular_name' => '期間',
			'edit_item' => '期間を編集',
			'add_new_item' => '新規期間を追加'
		],
		'hierarchical' => true,
		'query_var' => true,
		'show_in_rest' => true
	];
	register_taxonomy('period', 'course', $args);
}
add_action('init', 'tax_register_period');


// カスタム投稿タイプ【コース】：アーカイブページにて全件表示する
function change_set_course($query) {
	if (is_admin() || !$query->is_main_query()) {
		return;
	}
	if ($query->is_post_type_archive('course')) {
		$query->set('posts_per_page', '-1');
		return;
	}
}
add_action('pre_get_posts', 'change_set_course');
*/


/* -------------------------------------------- *
アイキャッチ画像を有効化
* -------------------------------------------- */
/*
function setup_post_thumbnails() {
	add_theme_support('post-thumbnails', ['blog', 'course']);
	add_image_size('blog', 270, 200, true);
	add_image_size('blog2', 540, 400, true); // 高解像度用の物
}
add_action('after_setup_theme', 'setup_post_thumbnails');


function img_uncompressed() {
	return 100;
}
add_filter('jpeg_quality', 'img_uncompressed');


//　検索フォームのHTML5仕様
function setup_html5_form() {
	add_theme_support('html5', ['search-form']);
}
add_action('after_setup_theme', 'setup_html5_form');


// 管理画面にメニュー編集機能を追加する
function register_my_menus() {
	$args = [
		'header_menu' => 'ヘッダー',
		'footer_menu' => 'フッター'
	];
	register_nav_menus($args);
}
add_action('after_setup_theme', 'register_my_menus');



// 管理画面にウィジェットを追加する
function my_widgets_register() {
	$args = [
		'name' => 'サイドバーウィジェット',
		'id' => 'sidebar-widgets',
		'before_widget' => '',
		'after_widget' => '',
		'description' => 'サイドバーに表示されます'
	];
	register_sidebar($args);
	$args = [
		'name' => 'フッターウィジェット',
		'id' => 'footer-widgets',
		'before_widget' => '',
		'after_widget' => '',
		'description' => 'フッターに表示されます'
	];
	register_sidebar($args);
}
add_action('widgets_init', 'my_widgets_register');
*/