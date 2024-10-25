const addBasketBtns = document.querySelectorAll(".add-basket");
let basketTotal = document.querySelector(".basket-total");

const boneElement = document.querySelector(".toy1");
const monkeyElement = document.querySelector(".toy2");
const reindeerElement = document.querySelector(".toy3");
const ballElement = document.querySelector(".toy4");

const toys = {
  bone: "Bone Toy",
  monkey: "Monkey Toy",
  reindeer: "Reindeer Toy",
  ball: "Ball Toy",
};

let basketedToys = [];

// const buttonsArr = Array.from(addBasketBtns);
// console.log(buttonsArr, typeof buttonsArr);

function buttonHandling() {
  let basketValue = Number(basketTotal.innerHTML);
  basketValue++;
  console.log(basketedToys);
  if (basketValue > 20 || basketedToys.length > 20) {
    alert("Your basket has reached its limit.");
    return;
  }
  console.log(basketValue, typeof basketValue);
  basketTotal.innerHTML = basketValue;
}

for (let i = 0; i < addBasketBtns.length; i++) {
  addBasketBtns[i].addEventListener("click", function () {
    buttonHandling();
    if (i === 0) {
      basketedToys.push(toys.bone);
    }
    if (i === 1) {
      basketedToys.push(toys.monkey);
    }
    if (i === 2) {
      basketedToys.push(toys.reindeer);
    }
    if (i === 3) {
      basketedToys.push(toys.ball);
    }
    console.log(basketedToys);
  });
}
