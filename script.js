const toggler = document.querySelector(".toggler");
const navBar = document.querySelector(".links");
const headerBtmNav = document.querySelector("#bottom-nav");

toggler.addEventListener("click", function () {
  navBar.classList.toggle("show");
  this.classList.toggle("invert");
});

window.addEventListener("scroll", function (e) {
  const { top } = headerBtmNav.getBoundingClientRect();
  if (top < 10 && window.scrollY < 500 && window.scrollY > 0) {
    headerBtmNav.style.position = "fixed";
    headerBtmNav.style.top = 0;
  } else {
    headerBtmNav.style.position = "static";
    headerBtmNav.style.top = 0;
  }
});
