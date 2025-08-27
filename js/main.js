(() => {
  function updateNavbar() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return; // aman kalau belum ada elemen
    const scrolled = (window.scrollY || window.pageYOffset) > 50;
    navbar.classList.toggle("scrolled", scrolled);
  }

  // Set kondisi saat pertama load
  document.addEventListener("DOMContentLoaded", updateNavbar);
  window.addEventListener("load", updateNavbar);

  // Update saat discroll (passive + rAF buat performa)
  window.addEventListener("scroll", () => {
    if (window.requestAnimationFrame) {
      requestAnimationFrame(updateNavbar);
    } else {
      updateNavbar();
    }
  }, { passive: true });
})();

