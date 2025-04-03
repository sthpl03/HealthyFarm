const menuButtons = Array.from(document.querySelectorAll(".menu-options button"));
const menuItems = Array.from(document.getElementsByClassName("menu-items"));

menuButtons.forEach((b) => {
  b.addEventListener("click", () => {
    const selectedOption = b.getAttribute("data-bs-target");
    b.classList.add("active");
    menuButtons
      .filter((btn) => btn != b)
      .forEach((btn) => {
        btn.classList.remove("active");
      });
    menuItems.forEach((i) => {
      if (i.id != selectedOption) {
        i.classList.add("inactive");
      } else {
        i.classList.remove("inactive");
      }
    });
  });
});