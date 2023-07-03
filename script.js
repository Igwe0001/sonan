const header = document.querySelector("header");
const heroSection = document.querySelector("#Hero");

const hamburger = document.querySelector(".hamburger__container");
const hamburgerItem = document.querySelectorAll(".hamburger__item");
const navUl = document.querySelector("ul");

const heroOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, heroOptions);

heroObserver.observe(heroSection);

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
