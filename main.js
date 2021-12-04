const hamburger = document.querySelector("#hamburger");
const header = document.querySelector("ul");
const display = document.querySelector("li");

// event listener hamburger
hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
});

// scroll sticky navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("navbar");

  nav.classList.toggle("stiky", window.scrollY) > 0;
});
