const elements = {
  list: document.querySelector(".js-list"),
  cost: document.querySelector(".js-cost"),
  clear: document.querySelector(".js-clear"),
};

const LS_KEY = "checkout";
const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

let totalCost = 0;

elements.list.insertAdjacentHTML("afterbegin", createMarkup(products));
elements.clear.addEventListener("click", handlerClear);

if (products.length) {
  elements.clear.hidden = false;
  totalCost = products.reduce((acc, { qty, price }) => acc + qty * price, 0);
}

elements.cost.textContent = totalCost
  ? `Total cost ${totalCost}`
  : "Your basket is empty";

function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, qty, price }) => `
  <li class="cart-item">
    <img src="${img}" alt="${name}" width="300">
    <h2>${name}</h2>
    <p>Quantity: ${qty}</p>
    <p>Total price: ${qty * price}</p>
  </li>`
    )
    .join("");
}

function handlerClear() {
  localStorage.removeItem(LS_KEY);
  location.href = "./index.html";
}
