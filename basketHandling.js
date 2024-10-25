const addBasketBtns = document.querySelectorAll(".add-basket");
const basketTotal = document.querySelector(".basket-total");

addBasketBtns.addEventListener("click", () => {
  for (let i = 0; i <= addBasketBtns.length; i++) {
    Number(basketTotal.innerHTML);
    basketTotal++;
  }
});
