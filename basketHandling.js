// localStorage.clear();
const addBasketBtns = document.querySelectorAll(".add-basket");
const basketTotal = document.querySelector(".basket-total");

const boneBasketed = document.querySelector(".basket-bone");
const monkeyBasketed = document.querySelector(".basket-monkey");
const reindeerBasketed = document.querySelector(".basket-reindeer");
const ballBasketed = document.querySelector(".basket-ball");

const boneMinus = document.querySelector(".bone-minus");
const monkeyMinus = document.querySelector(".monkey-minus");
const reindeerMinus = document.querySelector(".reindeer-minus");
const ballMinus = document.querySelector(".ball-minus");

const minusButtons = [boneMinus, monkeyMinus, reindeerMinus, ballMinus];

const bonePlus = document.querySelector(".bone-plus");
const monkeyPlus = document.querySelector(".monkey-plus");
const reindeerPlus = document.querySelector(".reindeer-plus");
const ballPlus = document.querySelector(".ball-plus");

const plusButtons = [bonePlus, monkeyPlus, reindeerPlus, ballPlus];

const boneStepper = document.querySelector(".bone-stepper");
const monkeyStepper = document.querySelector(".monkey-stepper");
const reindeerStepper = document.querySelector(".reindeer-stepper");
const ballStepper = document.querySelector(".ball-stepper");

const emptyBasket = document.querySelector(".empty-basket");

const storedBasket = JSON.parse(localStorage.getItem("basket"));

const basket = {
  bone: 0,
  monkey: 0,
  reindeer: 0,
  ball: 0,
  ...storedBasket,
};

const storedBasketValues = JSON.parse(localStorage.getItem("basketValues"));

const basketValues = {
  summedTotal: 0,
  ...storedBasketValues,
};

let basketCondensed = Object.values(basket);

for (let i = 0; i < addBasketBtns.length; i++) {
  addBasketBtns[i].addEventListener("click", function () {
    if (basketValues.summedTotal >= 20) {
      alert("You have reached your basket limit of 20 items");
      return;
    }
    if (i === 0) {
      basket.bone++;
      basketValues.summedTotal++;
      basketTotal.innerHTML = basketValues.summedTotal;
    }
    if (i === 1) {
      basket.monkey++;
      basketValues.summedTotal++;
      basketTotal.innerHTML = basketValues.summedTotal;
    }
    if (i === 2) {
      basket.reindeer++;
      basketValues.summedTotal++;
      basketTotal.innerHTML = basketValues.summedTotal;
    }
    if (i === 3) {
      basket.ball++;
      basketValues.summedTotal++;
      basketTotal.innerHTML = basketValues.summedTotal;
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("basketValues", JSON.stringify(basketValues));
  });
  basketTotal.innerHTML = basketValues.summedTotal;
}
//main page basket addition handling

for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", () => {
    if (i === 0 && basket.bone > 0) {
      basket.bone--;
      basketValues.summedTotal--;
      basketTotal.innerHTML = basketValues.summedTotal;
      boneBasketed.innerHTML = `🦴 Bone Toys: ${basket.bone}`;
    }
    if (i === 1 && basket.monkey > 0) {
      basket.monkey--;
      basketValues.summedTotal--;
      basketTotal.innerHTML = basketValues.summedTotal;
      monkeyBasketed.innerHTML = `🐒 Monkey Toys: ${basket.monkey}`;
    }
    if (i === 2 && basket.reindeer > 0) {
      basket.reindeer--;
      basketValues.summedTotal--;
      basketTotal.innerHTML = basketValues.summedTotal;
      reindeerBasketed.innerHTML = `🦌 Reindeer Toys: ${basket.reindeer}`;
    }
    if (i === 3 && basket.ball > 0) {
      basket.ball--;
      basketValues.summedTotal--;
      basketTotal.innerHTML = basketValues.summedTotal;
      ballBasketed.innerHTML = `⚽ Ball Toys: ${basket.ball}`;
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("basketValues", JSON.stringify(basketValues));
  });
}
//minus decrement handling

for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", () => {
    if (basketValues.summedTotal >= 20) {
      alert("You have reached your basket limit of 20 items");
      return;
    }
    if (i === 0 && basketValues.summedTotal < 20) {
      basket.bone++;
      basketValues.summedTotal++;
      basketTotal.innerHTML = basketValues.summedTotal;
      boneBasketed.innerHTML = `🦴 Bone Toys: ${basket.bone}`;
    }
    if (i === 1 && basketValues.summedTotal < 20) {
      basket.monkey++;
      basketValues.summedTotal++;
      basketTotal.innerHTML = basketValues.summedTotal;
      monkeyBasketed.innerHTML = `🐒 Monkey Toys: ${basket.monkey}`;
    }
    if (i === 2 && basketValues.summedTotal < 20) {
      basket.reindeer++;
      basketValues.summedTotal++;
      basketTotal.innerHTML = basketValues.summedTotal;
      reindeerBasketed.innerHTML = `🦌 Reindeer Toys: ${basket.reindeer}`;
    }
    if (i === 3 && basketValues.summedTotal < 20) {
      basket.ball++;
      basketValues.summedTotal++;
      basketTotal.innerHTML = basketValues.summedTotal;
      ballBasketed.innerHTML = `⚽ Ball Toys: ${basket.ball}`;
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("basketValues", JSON.stringify(basketValues));
  });
}
//plus increment handling

basketTotal.innerHTML = basketValues.summedTotal;

if (basket.bone > 0) {
  boneStepper.classList.remove("hidden");
  boneBasketed.innerHTML = `🦴 Bone Toys: ${basket.bone}`;
}
if (basket.monkey > 0) {
  monkeyStepper.classList.remove("hidden");
  monkeyBasketed.innerHTML = `🐒 Monkey Toys: ${basket.monkey}`;
}
if (basket.reindeer > 0) {
  reindeerStepper.classList.remove("hidden");
  reindeerBasketed.innerHTML = `🦌 Reindeer Toys: ${basket.reindeer}`;
}
if (basket.ball > 0) {
  ballStepper.classList.remove("hidden");
  ballBasketed.innerHTML = `⚽ Ball Toys: ${basket.ball}`;
}
if (
  basket.bone === 0 &&
  basket.monkey === 0 &&
  basket.reindeer === 0 &&
  basket.ball === 0
) {
  boneBasketed.innerHTML = "Your basket is empty";
}
//basket quantity display

emptyBasket.addEventListener("click", () => {
  localStorage.clear("storedBasket");
  localStorage.clear("storedBasketValues");
  location.reload();
});
//basket clearing
