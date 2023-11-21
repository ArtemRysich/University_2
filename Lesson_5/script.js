// "use strict";

// ****************Об'єкт**************** \\
// const user = {
//     "name": 'Alice',
//     skills: {
//         html: true,
//         css: true,
//         react: false
//     },
// }

// console.log(user);

// ****************Звернення до властивостей об'єкта**************** \\

// console.log(user.name);
// console.log('css', user.skills.css);
// console.log(user.age);

// user.age = 18
// console.log(user);

// const user = {
//     "2name": 'Alice',
//     _skills: {
//         html: true,
//         css: true,
//         react: false
//     },
// }
// console.log(user._skills);

// console.log(user['2name']);

// const user = {}
// const objectKey = 'name';
// user[objectKey] = 'Alice';
// console.log(user);

// const hotel = {

// }
// console.log(hotel.key);

// console.log(user[objectKey]);
// console.log(user['name']);

// ****************Зміна значення властивості**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);
// // console.log(user);

// user.city = 'Odessa';
// user['age'] = 38;
// console.log(user);
// console.log(user);

// ****************Object.freeze**************** \\
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// Object.freeze(user);
// user.name = 'Kate';
// user.city = 'Lviv';
// user['name'] = 'Lviv';
// console.log(user);
// Object.freeze(user.skills);

// user.skills.html = true;
// console.log(user);

// ****************Методи об'єкта**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     sayHello(city) {
//         // console.log(city);
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// console.log(user.sayHello);
// const user2 = {
//     name: 'Kate',
//     sayHello: user.sayHello
// }
// user.sayHello('Lviv')

// user2.sayHello()

// ****************Цикл for...in**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     }
// }

// const admin = Object.create(user)
// console.log(admin);
// console.log(admin.name);

// for(const key in admin){
//     console.log(key, admin.hasOwnProperty(key));
//     // console.log(key, user[key]);
// }

// ****************Метод Object.keys()**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const admin = Object.create(user)
// console.log('admin', Object.keys(admin));

// const keys = Object.keys(user);
// console.log(keys);
// for(const key of keys){
//     console.log(key,user[key]);
// }
// console.log(keys);

// ****************Метод Object.values()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// ****************Метод Object.entries()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// // const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
//   return {
//     product,
//     quantity,
//     price,
//     totalPrice: price * quantity
//   };
// }
// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("aplle", 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   const values = Object.values(obj);
//   let total = 0; // undefined + 60  // NaN

//   for (const value of values) {
//     total += value;
//   }

//   const average = total / values.length;

//   return `Count of players ${values.length}, average time ${average}`;

// --------------------------
//   let players = 0;
//   let total = 0;

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       players += 1;
//       total += obj[key];
//     }
//   }

//   return `Count of players ${players}, average time ${total / players}`;
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
  {
    name: "Oleksii",
    books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
    age: 26,
  },
];

// function getUsers(arr, bookName) {
//   let names = [];
//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       names.push(user.name);
//     }
//   }

//   return names.join(', ');
// }
// console.log(getUsers(friends, "Harry Potter"));

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const user of arr) {
//     // if (user.age) { // undefined => false
//     //   totalAge += user.age;
//     // }

//     // if ("age" in user) {
//     //   totalAge += user.age;
//     // }

//     if (user.hasOwnProperty("age")) {
//       totalAge += user.age;
//     }
//   }

//   return totalAge;
// }
// console.log(getTotalAge(friends));

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],

//   getUserList(faculty) {
//     if (!(faculty in this)) {
//       return "Faculty not found 😥";
//     }

//     const students = [];

//     for (const student of this[faculty]) {
//       students.push(student.name);
//     }

//     return students;
//   },
//   getTotalPoints(faculty) {
//     if (!this.hasOwnProperty(faculty)) {
//       return "Faculty not found";
//     }

//     let totalPoints = 0;

//     for (const student of this[faculty]) {
//       if (student.hasOwnProperty("points")) {
//         totalPoints += student.points;
//       }
//     }

//     return totalPoints;
//   },
// };

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList("slitherin"));
// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));

// ПРИКЛАД РЕКУРСІЇ
// function getTotal(arr) {
//   let total = 0;
//   for (const value of arr) {
//     if (Array.isArray(value)) {
//         total += getTotal(value)
//     } else {
//       total += value;
//     }
//   }
//   return total;
// }

// console.log(getTotal([1, 2, [3, 4, [5, 6, [7]]]]));

// let value = 1;
// console.log(value++);
// console.log(++value);
// console.log(value += 1);

// function foo(){
//     console.log(this);
// }

// foo()

// const str = "Hello world";

// String.prototype.slice = function () {
//     // console.log('Hello it`s custom function 😂');
//     return 'Hello it`s custom function 😂'
// };
// // str.customFunction();
// console.log(str.slice(0,5));

function fn() {
  const obj = {
    name: "Alice",
  };

  const result = Object.create(obj);
  return result;
}

const result = fn();
Object.setPrototypeOf(result, { age: 22 }, result.prototype);
console.log(result.name);
