// localStorage.clear();
const addBasketBtns = document.querySelectorAll(".add-basket");
const basketTotal = document.querySelector(".basket-total");

const boneBasketed = document.querySelector(".basket-bone");
const monkeyBasketed = document.querySelector(".basket-monkey");
const reindeerBasketed = document.querySelector(".basket-reindeer");
const ballBasketed = document.querySelector(".basket-ball");

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
console.log(basket, storedBasketValues);

let basketCondensed = Object.values(basket);
console.log(basketCondensed);

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

    console.log(typeof basketValues.summedTotal, basketValues.summedTotal);
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("basketValues", JSON.stringify(basketValues));
  });
}
basketTotal.innerHTML = basketValues.summedTotal;

if (basket.bone > 0) {
  boneBasketed.innerHTML = `Bone Toys: ${basket.bone}`;
  console.log(boneBasketed.innerHTML);
}
if (basket.monkey > 0) {
  monkeyBasketed.innerHTML = `Monkey Toys: ${basket.monkey}`;
  console.log(monkeyBasketed.innerHTML);
}
if (basket.reindeer > 0) {
  reindeerBasketed.innerHTML = `Reindeer Toys: ${basket.reindeer}`;
  console.log(reindeerBasketed.innerHTML);
}
if (basket.ball > 0) {
  ballBasketed.innerHTML = `Ball Toys: ${basket.ball}`;
  console.log(ballBasketed.innerHTML);
}
