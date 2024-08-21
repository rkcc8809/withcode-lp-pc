"use strict";

// 線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime() {
  $('.cv-wrap__guide__block').each(function() {
    var elemPos = $(this).offset().top; // 上からの高さ取得
    var scroll = $(window).scrollTop(); // スクロール値取得
    var windowHeight = $(window).height(); // windowの高さ取得
    var startPoint = windowHeight * 0.4; // 線をスタートさせる位置を指定 (画面の40%上部)

    if (scroll >= elemPos - windowHeight + startPoint) { 
      var H = $(this).outerHeight(true); // liの余白と高さを含めた数値を取得
      var scrollDistance = scroll + startPoint - elemPos;
      var percent = (scrollDistance / H) * 100; // 高さに基づいたパーセントを計算

      // 100% を超えたらずっと100%を入れ続ける
      if (percent > 100) {
        percent = 100;
      }

      // ボーダーの長さをセット
      $(this).find('.cv-wrap__guide__block__body__con__line').css({
        height: percent + "%", // CSSでパーセント指定
      });
    } 
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function() {
  ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function() {
  ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});
