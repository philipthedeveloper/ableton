const toggler = document.querySelector(".toggler");
const navBar = document.querySelector(".links");

toggler.addEventListener("click", function () {
  navBar.classList.toggle("show");
  this.classList.toggle("invert");
});
