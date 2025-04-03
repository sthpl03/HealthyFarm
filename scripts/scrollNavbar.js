const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    navbar.style.boxShadow = "0px 5px 5px rgb(0, 0, 0, 0.2)";
  } else {
    navbar.style.boxShadow = "";
  }
});