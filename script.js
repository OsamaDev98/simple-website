const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");

menu.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
close.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
