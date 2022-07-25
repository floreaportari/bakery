const menuBtn = document.querySelector("#menuBtn");
const navItems = document.querySelector("#navItems");

menuBtn.addEventListener("click", function () {
  navItems.classList.toggle("show");
});
