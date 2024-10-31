const faveButton = document.querySelector(".favourite-button");

faveButton.addEventListener("click", () => {
  faveButton.innerHTML = "❤️";
});

const favouriteToys = {
  boneToy: false,
  monkeyToy: false,
  reindeerToy: false,
  ballToy: false,
};
