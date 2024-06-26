const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("mouseup", () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth",});
});


const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

