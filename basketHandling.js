const addBasketBtns = document.querySelectorAll(".add-basket");
const basketTotal = document.querySelector(".basket-total");

const boneElement = document.querySelector(".toy1");
const monkeyElement = document.querySelector(".toy2");
const reindeerElement = document.querySelector(".toy3");
const ballElement = document.querySelector(".toy4");

const storedBasket = JSON.parse(localStorage.getItem("basket"));

const basket = {
  bone: 0,
  monkey: 0,
  reindeer: 0,
  ball: 0,
  ...storedBasket,
};
console.log(basket);

let summedTotal = 0;
basketTotal.innerHTML = summedTotal;
let basketCondensed = Object.values(basket);
let basketedToys = [];

function buttonHandling() {
  basketValue = Number(basketTotal.innerHTML);
  basketValue++;
  if (basketValue > 20 || basketedToys.length > 20) {
    alert("Your basket has reached its limit.");
    return;
  }
  for (let i = 0; i < basketCondensed.length; i++) {
    if (typeof i === "number") {
      summedTotal = summedTotal + basketCondensed[i];
      console.log(summedTotal);
    } else {
      continue;
    }
  }
  return summedTotal;
}

for (let i = 0; i < addBasketBtns.length; i++) {
  addBasketBtns[i].addEventListener("click", function () {
    buttonHandling();
    if (i === 0) {
      basket.bone++;
      basketedToys.push(basket.bone);
    }
    if (i === 1) {
      basket.monkey++;
      basketedToys.push(basket.monkey);
    }
    if (i === 2) {
      basket.reindeer++;
      basketedToys.push(basket.reindeer);
    }
    if (i === 3) {
      basket.ball++;
      basketedToys.push(basket.ball);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  });
}

// let summedBasket = basketCondensed.reduce;
// console.log(summedBasket);
// basketTotal.innerHTML = summedBasket;

// (basketTotal.innerHTML = console.log(storedBasket.monkey));
