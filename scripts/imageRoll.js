const orderBtn = document.getElementById("order-btn");
const rollingImages = document.getElementsByClassName("rolling-img");
let cooldown = false;

function rollImages(active) {
    const positions = ["-100px", "85vw"];
    const rotations = ["rotate(0deg)", "rotate(180deg)"];
    
  for (let index = 0; index < rollingImages.length; index++) {
    const img = rollingImages[index];
    let choosingIndex = index;
    if(active) choosingIndex = rollingImages.length - 1 - index;
    img.style.left = positions[choosingIndex];
    img.style.transform = rotations[choosingIndex];
  }
}

orderBtn.addEventListener("mouseover", () => rollImages(true));

orderBtn.addEventListener("mouseleave", () => rollImages(false));