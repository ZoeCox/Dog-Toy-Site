const boneFaveBtn = document.querySelector(".bone-fave-button");
const monkeyFaveBtn = document.querySelector(".monkey-fave-button");
const reindeerFaveBtn = document.querySelector(".reindeer-fave-button");
const ballFaveBtn = document.querySelector(".ball-fave-button");
const faveText = document.querySelector(".favourite-text");

const favouriteButtons = [
  boneFaveBtn,
  monkeyFaveBtn,
  reindeerFaveBtn,
  ballFaveBtn,
];

const storedFavouriteToys = JSON.parse(localStorage.getItem("favouriteToys"));

const favouriteToys = {
  boneToy: false,
  monkeyToy: false,
  reindeerToy: false,
  ballToy: false,
  ...storedFavouriteToys,
};

const storedCurrentFaves = JSON.parse(localStorage.getItem("currentFaveToys"));

const currentFaveToys = [];

const faveToysString = "zoe";

faveText.innerHTML = storedCurrentFaves;

console.log(storedCurrentFaves);

for (let i = 0; i < favouriteButtons.length; i++) {
  favouriteButtons[i]?.addEventListener("click", () => {
    favouriteButtons[i].innerHTML = "❤️";
    if (favouriteButtons[i] === boneFaveBtn) {
      favouriteToys.boneToy = true;
      currentFaveToys.push("Bone");
    }
    if (favouriteButtons[i] === monkeyFaveBtn) {
      favouriteToys.monkeyToy = true;
      currentFaveToys.push("Monkey");
    }
    if (favouriteButtons[i] === reindeerFaveBtn) {
      favouriteToys.reindeerToy = true;
      currentFaveToys.push("Reindeer");
    }
    if (favouriteButtons[i] === ballFaveBtn) {
      favouriteToys.ballToy = true;
      currentFaveToys.push("Ball");
    }
    localStorage.setItem("currentFaveToys", JSON.stringify(currentFaveToys));
    localStorage.setItem("favouriteToys", JSON.stringify(favouriteToys));
    console.log(favouriteToys, currentFaveToys);
  });
}
