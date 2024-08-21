"use strict";

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry); // ここでentryが正しく取得されているか確認
    if (entry.isIntersecting) {
      console.log("セクションがビューポートに入りました");
      if (entry.target.getAttribute("data-loaded") === "false") {
        entry.target.insertAdjacentHTML("beforeend", "<p>ここに本来のコンテンツがロードされます。</p>");
        entry.target.setAttribute("data-loaded", "true");
        observer.unobserve(entry.target);
      }
    }
  });
});
