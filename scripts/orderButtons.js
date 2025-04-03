const openButtons = document.getElementsByClassName("order-btn");
const closeButtons = document.getElementsByClassName("close-btn");
const orderContent = document.getElementById("order-content");

function performButton(display = "") {
  orderContent.style.display = display;
}

Array.from(openButtons).forEach((btn) =>
  btn.addEventListener("click", () => performButton("flex"))
);
Array.from(closeButtons).forEach((btn) =>
  btn.addEventListener("click", () => performButton("none"))
);