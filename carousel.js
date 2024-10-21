const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const slide4 = document.querySelector(".slide4");

const slides = [slide1, slide2, slide3, slide4];

let slideIndex = 0;

forward.addEventListener("click", () => {
  if (slideIndex + 1 < slides.length) {
    slides[slideIndex].classList.add("hidden");
    slideIndex += 1;
    slides[slideIndex].classList.remove("hidden");
  }
});

backward.addEventListener("click", () => {
  if (slideIndex != 0) {
    slides[slideIndex].classList.add("hidden");
    slideIndex -= 1;
    slides[slideIndex].classList.remove("hidden");
  }
});
