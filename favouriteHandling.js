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
  currentFaveToys: [],
  boneFaveBtnPressed: false,
  monkeyFaveBtnPressed: false,
  reindeerFaveBtnPressed: false,
  ballFaveBtnPressed: false,
  ...storedFavouriteToys,
};

// const faveBtnPressedCheck = () => {
//   if (favouriteButtons.boneFaveBtnPressed) {
//     boneFaveBtn.innerHTML = "❤️";
//   }
// };

const faveQtyFunc = () => {
  if (
    favouriteToys.currentFaveToys === undefined ||
    favouriteToys.currentFaveToys.length === 0
  ) {
    emptyFavourites.classList.add("hidden");
  }
  if (favouriteToys.currentFaveToys.length === 0) {
    faveText.innerHTML = "You don't currently have any favourites";
  } else {
    faveText.innerHTML = storedFavouriteToys.currentFaveToys.join(", ");
  }
};

if (storedFavouriteToys?.boneFaveBtnPressed && boneFaveBtn != null) {
  boneFaveBtn.innerHTML = "❤️";
}
if (storedFavouriteToys?.monkeyFaveBtnPressed && monkeyFaveBtn != null) {
  monkeyFaveBtn.innerHTML = "❤️";
}
if (storedFavouriteToys?.reindeerFaveBtnPressed && reindeerFaveBtn != null) {
  reindeerFaveBtn.innerHTML = "❤️";
}
if (storedFavouriteToys?.ballFaveBtnPressed && ballFaveBtn != null) {
  ballFaveBtn.innerHTML = "❤️";
}

const faveMap = {
  [boneFaveBtn?.className]: "Bone",
  [monkeyFaveBtn?.className]: "Monkey",
  [reindeerFaveBtn?.className]: "Reindeer",
  [ballFaveBtn?.className]: "Ball",
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
      favouriteToys.currentFaveToys.push("Bone");
      favouriteToys.boneFaveBtnPressed = true;
    }
    if (favouriteButtons[i] === monkeyFaveBtn) {
      favouriteToys.currentFaveToys.push("Monkey");
      favouriteToys.monkeyFaveBtnPressed = true;
    }
    if (favouriteButtons[i] === reindeerFaveBtn) {
      favouriteToys.currentFaveToys.push("Reindeer");
      favouriteToys.reindeerFaveBtnPressed = true;
    }
    if (favouriteButtons[i] === ballFaveBtn) {
      favouriteToys.currentFaveToys.push("Ball");
      favouriteToys.ballFaveBtnPressed = true;
    }
    //adding item to favourites
    faveText.innerHTML = favouriteToys.currentFaveToys.join(", ");
    localStorage.setItem("favouriteToys", JSON.stringify(favouriteToys));
    if (
      favouriteToys.currentFaveToys.length >= 1 &&
      favouriteToys.currentFaveToys.length < 2
    ) {
      location.reload();
      emptyFavourites.classList.remove("hidden");
    }
  });
  faveQtyFunc();
}
// faveBtnPressedCheck();

emptyFavourites.addEventListener("click", () => {
  localStorage.removeItem("favouriteToys");
  location.reload();
});

console.log(favouriteToys, favouriteToys.currentFaveToys);
