//*********Приклад роботи синхронного та асинхронного JS**************\\

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve("C").then((value) => console.log(value));

// console.log("D");

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ******Мікро процеси***** \\
// Promise
// Observer
// EventListener

// ******Макро процеси****** \\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame

//*********Приклад роботи синхронного та асинхронного JS**************\\
// Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.reject("C")
// .then((value) => console.log(value))
// .catch(err => console.log(err));

// setTimeout(() => console.log("E"), 0);

// console.log("F");

//*************** Promise *******************\\

// ****Створення Promise**** \\

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve({ name: "Alice" });
//     } else {
//       reject("Error 😥");
//     }
//   }, 300);
// });

// ****Обробка Promise**** \\

// promise
//   .then(
//     (response) => {
//       console.log(response);
//       return response;
//     },
//     (error) => {
//       console.log(`Error in then => ${error}`);
//     }
//   )
//   .then((data) => {
//     console.log(data.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {});

// const promise = fetch("https://swapi.dev/api/people/1");
// console.log(promise);

// promise
//   .then((response) => response.json())
//   .then(data => console.log(data))
//   .catch((err) => console.log(err));

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по черзі має з'являтись смайлик з затримкою в 1 секунду ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами в якому кожен з них буде відповідати за своє віконце, після чого оброби даний масив за допомогою методу Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт автоматично визначав чи гравець переміг, чи ні. Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
// Виводить модальне вікно з повідомленням про статус гри ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game" поле має очищатись, а гра починатись з початку.

const elements = {
  startBtn: document.querySelector(".js-start"),
  container: document.querySelector(".js-container"),
};

elements.startBtn.addEventListener("click", handlerStartGame);

function handlerStartGame() {
  const promises = [...elements.container.children].map((_) => createPromise());

  Promise.allSettled(promises).then((items) => {
    items.forEach((item, i) => {
      elements.container.children[i].textContent = "";
      console.log(item);
      setTimeout(() => {
        elements.container.children[i].textContent = item.value ?? item.reason;

        // if (i === items.length - 1) {
        //   console.log(isWinner);
        // }
      }, 1000 * (i + 1));
    });

    setTimeout(() => {
      const instance = basicLightbox.create(`
   <h1>${isWinner ? "Winner" : "Loser"}</h1>`);
      instance.show();
    }, 1000 * items.length);

    const isWinner =
      items.every(({ status }) => status === "fulfilled") ||
      items.every(({ status }) => status === "rejected");
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();

    if (random > 0.5) {
      res("🤑");
    } else {
      rej("😈");
    }
  });
}
