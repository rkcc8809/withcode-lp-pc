"use strict";

$('.slider').slick({
  autoplaySpeed: 10000, // 自動再生の速度
  speed: 1200, // スライド自体の速度
  autoplay: true, // 自動再生の設定
  infinite: true, // 永続化
  slidesToShow: 3, // スライド数
  slidesToScroll: 3, // スライドのスクロール数
  prevArrow: '<div class="slick-prev"></div>', // 矢印部分のHTML変更
  nextArrow: '<div class="slick-next"></div>', // 矢印部分のHTML変更
  dots: true, // 下部ドットナビゲーションの表示
  responsive: [
    {
      breakpoint: 1025, // モニターの横幅が769px以下の場合
      settings: {
        slidesToShow: 2, // スライド画面に2つ表示
        slidesToScroll: 2, // 1回のスクロールで2つの画像を表示
      }
    },
    {
      breakpoint: 481, // モニターの横幅が426px以下の場合
      settings: {
        slidesToShow: 1, // スライド画面に1つ表示
        slidesToScroll: 1, // 1回のスクロールで1つの画像を表示
      }
    }
  ]
});

$('.case-wrap__con__scroll__list').slick({
  autoplay: true, //自動スクロール
    autoplaySpeed: 0, //自動再生時のスライド切り替えの時間
    speed: 5000, //スライドが流れるスピード
    arrows: false, //左右の矢印を非表示
    swipe: false, //スワイプ禁止
    slidesToShow: 2, //表示するスライドの数
    cssEase: 'linear', //画像切り替えのアニメーション"linearは等速"
    pauseOnFocus: true, //フォーカスしたら止める
    pauseOnHover: true, //マウスホバーしたら止める
  infinite: true, // 無限ループ
  responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
});