const pointers = Array.from(document.getElementsByClassName("refined"));

const activate = function () {
  if (!location.hash) return;
  const id = location.hash.split("#")[1];
  pointers.forEach((a) => {
    const container = a.parentElement.parentElement;
    if (container.id == id) {
      a.classList.add("active");
      const rect = a.getBoundingClientRect();
      window.scrollTo(0, rect.top + window.scrollY - navbar.clientHeight - 25);
    } else {
      a.classList.remove("active");
    }
  });
};

window.onhashchange = activate;
window.onload = activate;