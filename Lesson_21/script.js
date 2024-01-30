// ******************** CRUD ******************** \\

// Create - POST
// Read   - GET
// Update - PUT PATCH
// DELETE - DELETE

// ******************** GET - READ ******************** \\

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// ******************** POST - CREATE ******************** \\

// const post = {
//     title: 'Group 2',
//     body: 'First post',
//     userId: 99
// }

// const options = {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//         "Content-type": "application/json"
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
// .then(resp => {
//     if(!resp.ok){
//         throw new Error(resp.statusText)
//     }

//     return resp.json()
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))

// ******************** PATCH - UPDATE ******************** \\

// const updatePost = {
//   title: "Update post title",
//   userId: 99
// };
// const options = {
//   method: "PATCH",
//   body: JSON.stringify(updatePost),
//   headers: {
//     "Content-type": "application/json",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ******************** PUT - UPDATE ******************** \\

// const updatePost = {
//     title: "Update post title",
//   };
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(updatePost),
// headers: {
//   "Content-type": "application/json",
// },
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// ******************** DELETE ******************** \\

// const options = {
//     method: "DELETE"
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1',options)
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// ПЕРЕРВА ДО 20.40

// ******************** Практика ******************** \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами

const elements = {
  form: document.querySelector(".js-question"),
};

elements.form.addEventListener("submit", handlerFormQuestion);

function handlerFormQuestion(evt) {
  evt.preventDefault();

  //   const { userName, phone, email, question } = evt.currentTarget.elements;

  //   const data = {
  //     name: userName.value,
  //     phone: phone.value,
  //     email: email.value,
  //     comment: question.value,
  //   };

  const data = {};

  const formData = new FormData(evt.currentTarget);

  formData.forEach((value, key) => (data[key] = value));
  serviceQuestion(data)
  .then(() => alert('Question submitted'))
  .catch(err => console.error(err))

  evt.currentTarget.reset()
}

function serviceQuestion(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch("http://127.0.0.1:3000/api/question", options).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json;
  });
}
