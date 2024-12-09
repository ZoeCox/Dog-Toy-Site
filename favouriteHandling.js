const boneFaveBtn = document.querySelector(".bone-fave-button");
const monkeyFaveBtn = document.querySelector(".monkey-fave-button");
const reindeerFaveBtn = document.querySelector(".reindeer-fave-button");
const ballFaveBtn = document.querySelector(".ball-fave-button");
const faveText = document.querySelector(".favourite-text");
const emptyFavourites = document.querySelector(".empty-favourites");

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
  currentFaveToys: [],
  ...storedFavouriteToys,
};

if (
  favouriteToys.currentFaveToys === undefined ||
  favouriteToys.currentFaveToys.length === 0
) {
  emptyFavourites.classList.add("hidden");
} else {
  emptyFavourites.classList.remove("hidden");
}

if (favouriteToys.currentFaveToys.length === 0) {
  faveText.innerHTML = "You don't currently have any favourites";
} else {
  faveText.innerHTML = storedFavouriteToys.currentFaveToys.join(", ");
}

const faveMap = {
  [boneFaveBtn.className]: "Bone",
  [monkeyFaveBtn.className]: "Monkey",
  [reindeerFaveBtn.className]: "Reindeer",
  [ballFaveBtn.className]: "Ball",
};

for (let i = 0; i < favouriteButtons.length; i++) {
  favouriteButtons[i]?.addEventListener("click", () => {
    favouriteButtons[i].innerHTML = "❤️";
    if (
      favouriteToys.currentFaveToys.includes(
        faveMap[favouriteButtons[i].className]
      )
    ) {
      alert(
        `You already have ${faveMap[
          favouriteButtons[i].className
        ].toLowerCase()} in your favourites`
      );
      return;
    }
    if (favouriteToys.currentFaveToys.length >= 4) {
      alert("You have reached your maximum of four favourites");
      //add a modal pop up here instead
      return;
    }
    //checking if item is in favourites
    if (favouriteButtons[i] === boneFaveBtn) {
      favouriteToys.boneToy = true;
      favouriteToys.currentFaveToys.push("Bone");
    }
    if (favouriteButtons[i] === monkeyFaveBtn) {
      favouriteToys.monkeyToy = true;
      favouriteToys.currentFaveToys.push("Monkey");
    }
    if (favouriteButtons[i] === reindeerFaveBtn) {
      favouriteToys.reindeerToy = true;
      favouriteToys.currentFaveToys.push("Reindeer");
    }
    if (favouriteButtons[i] === ballFaveBtn) {
      favouriteToys.ballToy = true;
      favouriteToys.currentFaveToys.push("Ball");
    }
    //adding item to favourites
    faveText.innerHTML = favouriteToys.currentFaveToys.join(", ");
    localStorage.setItem("favouriteToys", JSON.stringify(favouriteToys));
    // location.reload();
  });
}

emptyFavourites.addEventListener("click", () => {
  localStorage.removeItem("favouriteToys");
  location.reload();
});

console.log(favouriteToys, favouriteToys.currentFaveToys);
