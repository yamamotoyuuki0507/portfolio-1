// html全体にイベントを追加し、htmlの内容を読み込んだら何らかの機能を実行する
document.addEventListener('DOMContentLoaded', function () {
    // IDで要素を取得
    document.getElementById("han").addEventListener("click", function () {
        // クリックしたものに対して、actuveというクラスを切り替える
        this.classList.toggle("active");
        document.getElementById("han-nav").classList.toggle("active");
        document.getElementById("mask").classList.toggle("active");
    });
});




