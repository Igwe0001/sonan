

const hamburger = document.querySelector(".hamburger__container");
const hamburgerItem = document.querySelectorAll(".hamburger__item");
const navUl = document.querySelector("ul");


// Navigation
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target)) {
        hamburgerItem.forEach((e) => {
          e.classList.remove("active");
        });
        navUl.classList.remove("active");
  } else {
        hamburgerItem.forEach((e) => {
          e.classList.toggle("active");
        });
        navUl.classList.toggle("active");
  }
});