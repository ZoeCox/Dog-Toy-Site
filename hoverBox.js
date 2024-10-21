const hoverText = document.querySelector(".hover-text");
const introBlock = document.querySelector(".intro-block");

introBlock.addEventListener("mouseover", () => {
  hoverText.classList.remove("hidden");
});

introBlock.addEventListener("mouseup", () => {
  hoverText.classList.add("hidden");
});
