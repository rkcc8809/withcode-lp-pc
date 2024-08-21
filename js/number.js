"use strict";

// ページが読み込まれたときにランダムな数字を表示
document.addEventListener("DOMContentLoaded", function() {
  // 1から30の間のランダムな数値を生成
  var min = 1;
  var max = 30;
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // すべてのクラスremaining-slotsを持つ要素を取得
  var slotsElements = document.querySelectorAll(".remaining-slots");

  // すべての要素に同じランダムな数字を設定
  slotsElements.forEach(function(element) {
    element.textContent = randomNumber;
  });
});
