// Тестовий масив для теоретичного блоку

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// ********map******** \\

// const names = users.map((user, idx, arr) => {
// return user.name;
// })

// const names = users.map(({name}) => name);

// console.log(names);

// ********flatMap******** \\

// const result = users.map(({skills}) => skills)

// console.log(result);

// const result = users.flatMap(({ skills }) => skills);
// console.log(result);

// const arr = [0, 1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// const result = arr.flatMap((item) => item);

// console.log(result);

// ********flat******** \\

// const result = arr.flat()
// console.log(result);

// const result = users.flat(2)
// console.log(result);

// ********filter******** \\

// const result = users.filter((user, idx, arr) => {
//   ////
//   if (user.age >= 30) {
//     return true;
//   }
// });
// console.log(result);

// ********find******** \\

// const result = users.find((user, idx, arr) => user.age >= 30);
// console.log(result);

// ********findIndex********\\

// const idx = users.findIndex((user, index, arr) => user.id === 99);
// console.log(idx);

// ********some********\\

// const result = users.some(({ skills }) => skills.includes("Python"));
// console.log(result);

// ********every ********\\

// const result = users.every(({ age }) => age > 22 && age <= 40);
// console.log(result);

// ********sort********\\

// const result = [...users].sort((a, b) =>  b.age - a.age );
// console.log(result);
// console.log(users);

// const result = users.sort((a, b) => b.name.localeCompare(a.name));
// console.log(result);

// const arr = [7, 12, 9, 1, 5, 3, 6];
// arr.sort()
// console.log(arr);

// arr.sort((a, b) => a - b);
// console.log(arr);

// ********reduce********\\

const users = [
  { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
  { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
  { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
  { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
  { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
];

// const result = users.reduce((acc, user) => {
//   acc += user.age;

//   return acc;
// }, 0);

// const result = users.reduce((acc, { age }) => acc + age, 0);
// console.log(result);

// const result = users.reduce((acc, { name }) => {
//   acc.push(name);
//   return acc;
// }, []);
// console.log(result);

// const result = users.reduce((acc, { name }) => acc.push(name), []);
// console.log(result);

// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, item) => acc + item, 0);
//     return {
//       name,
//       average: Math.round(total / grades.length),
//     };
//   });
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//     { name: 'John', age: 20, gpa: 3.8 },
//     { name: 'Alice', age: 21, gpa: 3.2 },
//     { name: 'Bob', age: 19, gpa: 3.5 },
//     { name: 'Emily', age: 22, gpa: 3.9 },
//     { name: 'David', age: 20, gpa: 3.7 }
// ];

// function getAdult(arr) {
// return arr.filter(({age})=> age > 20)
// }
// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   const book = arr.find(
//     ({ title: bookTitle }) => bookTitle.toLowerCase() === title.toLowerCase()
//   );

//   return book || 'Not found'
// }

// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software"
//   )
// );
// console.log(getBook(books, "qwerty"));

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];

// function getTotal(arr) {
//   //   const total = arr.reduce((acc, product) => {
//   //     acc += product.price * product.quantity;
//   //     return acc;
//   //   }, 0);

//   //   return total

//   return arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
// }
// console.log(getTotal(products));

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function sortDesc(arr) {
//   return [...arr].sort(({ year: a }, { year: b }) => b - a);
// }
// console.log(sortDesc(books));

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// function getProducts(arr) {
//   //   return arr
//   //   .filter(({ price }) => price < 2)
//   //   .map(({ name }) => name)
//   //   .sort((a, b) => a.localeCompare(b))

//   return arr
//     .reduce((acc, { name, price }) => {
//       if (price < 2) {
//         acc.push(name);
//       }
//       return acc;
//     }, [])
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getProducts(products));

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

// const str = "absdabsrgbadgtdswwbetflg";
// const result = str.split("").reduce((acc, item) => {
//   //{} // a // false
//   //{a : 1} // b // false
//  //{a : 1, b : 1} // s // false
//  //{a : 1, b : 1, s : 1, d: 1} // a // true
//  //{a : 2, b : 1, s : 1, d: 1}
//   if (item in acc) {
//     acc[item] += 1;
//   } else {
//     acc[item] = 1;
//   }

//   return acc;
// }, {});

// console.log(result);
