// ******************************Lazy Loading****************************** \\

// Тестовий масив для lazy-loading
const cats = [
  "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
  "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
  "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
  "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
  "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
  "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
  "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
  "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
  "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
  "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
  "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
  "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
];

// const container = document.querySelector(".js-cats");

// const markup = cats.map((link) => `<li>
// <img src="${link}" alt="cat" width="300" loading="lazy"/>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
// Quo dolorum atque repudiandae cum, asperiores, aliquam fuga pariatur illo,
// qui illum ea exercitationem eaque voluptatibus recusandae. Voluptas est illo laborum eos.
// Earum magnam veritatis dolorum incidunt nisi illum minus, labore obcaecati debitis
// facere sapiente ea libero odio, quas nemo voluptatem eaque mollitia ullam nobis maiores
// harum voluptate consequatur, laboriosam eligendi? Quod.
// ulpa incidunt iusto ab?
// </p>
// </li>`).join('');
// console.log(markup);

// container.insertAdjacentHTML('afterbegin', markup)

// *****************************Throttle & Debounce***************************** \\

// const search = document.querySelector('.js-search');
// search.addEventListener('input', _.throttle(handlerInput, 1700, {
//     leading: true,
//     trailing: false,
// }));

// function handlerInput(evt){
//     console.log(evt.target.value);
// }

// const search = document.querySelector(".js-search");
// search.addEventListener(
//   "input",
//   _.debounce(handlerInput, 700, {
//     leading: false,
//     trailing: true,
//     maxWait: 500,
//   })
// );

// function handlerInput(evt) {
//   console.log(evt.target.value);
// }

// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скрипт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скрипт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const combination = [
  [1, 2, 3], //[ 1, 7, 2, 5]
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

const content = document.querySelector(".js-content");
const historyX = [];
const historyO = [];
let player = "X";

content.insertAdjacentHTML("afterbegin", createMarkup());
content.addEventListener("click", handlerClick);

function handlerClick({ target }) {
  if (!target.classList.contains("js-item") || target.textContent) {
    return;
  }

  const id = Number(target.dataset.id);
  let isWinner = false;

  if (player === "X") {
    historyX.push(id);
    isWinner = historyX.length >= 3 && checkWinner(historyX);
  } else {
    historyO.push(id);
    isWinner = historyO.length >= 3 && checkWinner(historyO);
  }

  target.textContent = player;

  if (isWinner) {
    showWinner(player);
    resetGame();
    return;
  }

  player = player === "X" ? "O" : "X";
}

function resetGame(){
    content.innerHTML = createMarkup();
    historyX.splice(0, historyX.length);
    historyO.splice(0, historyO.length);
    player = "X";
}

function checkWinner(history) {
  return combination.some((item) => item.every((id) => history.includes(id)));
}

function createMarkup() {
  let markup = "";

  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }

  return markup;
}

function showWinner(player) {
  const instance = basicLightbox.create(
    `
<div class="box">
    <h1>Player - ${player} is winner</h1>
</div>
`,
    {
      handler: null,
      onShow(instance) {
        console.log(this);
        this.handler = onEscape.bind(instance);
        document.addEventListener("keydown", this.handler);
      },
      onClose() {
        document.removeEventListener("keydown", this.handler);
      },
    }
  );

  instance.show();
}

function onEscape({ code }) {
  if (code === "Escape") {
    console.log(this);
    this.close();
  }
}
