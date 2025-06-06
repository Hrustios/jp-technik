document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

function scrollToBlock(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

document.getElementById("drone-fest").addEventListener("click",function(){
    window.location.href = "https://redcliff-inc.co.jp/works/expo2025osakakansai/?lang=en";
})