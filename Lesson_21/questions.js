const elements = {
  list: document.querySelector(".js-list"),
};

function serviceGetQuestion() {
  return fetch("http://127.0.0.1:3000/api/getall").then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
serviceGetQuestion()
.then((data) =>
  elements.list.insertAdjacentHTML("afterbegin", createMarkup(data))
);

function createMarkup(arr) {
  return arr
    .map(
      ({_id, name, email, phone, comment}) => `<li class="card" data-id="${_id}">
  <div class="card-content">
    <h2 class="card-name">${name}</h2>
    <p class="card-phone">${phone}</p>
    <p class="card-email">${email}</p>
    <p class="card-comment">${comment}</p>
  </div>
</li>`
    )
    .join("");
}
