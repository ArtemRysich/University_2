/***** Інструкція if та її варіації *****/
// const value = 8;

// if (value) {
//   // true
//   console.log("in if");
// }

// if (value === 10) {
//   console.log('Condition is true');
// } else {
//     console.log('Condition is false');
// }

// if (value > 7) {
//   console.log("Value 10");
// } else if (value > 8) {
//   console.log("Value 9");
// } else if (value > 9) {
//   console.log("Value 8");
// } else {
//   console.log("another value");
// }

/***** Інструкція switch *****/
// const value = 1;
// console.time("switch");
// switch (value) {
//   case 10:
//     console.log("value - 10");
//     break;
//   case 9:
//     console.log("value - 9");
//     break;
//   case 8:
//     console.log("value - 8");
//     break;
//   case 7:
//     console.log("value - 7");
//     break;
//   case 6:
//     console.log("value - 6");
//     break;
//   case 5:
//     console.log("value - 5");
//     break;
//   case 4:
//     console.log("value - 4");
//     break;
//   case 3:
//     console.log("value - 3");
//     break;
//   case 2:
//     console.log("value - 2");
//     break;
//   case 1:
//     console.log("value - 1");
//     break;
//   default:
//     console.log("another value");
// }
// console.timeEnd("switch");

// ДУЖЕ ПОГАНИЙ ПРИКЛАД 😥
// console.time('switch true');
// switch (true) {
//   case 10 > 11: // false === true
//     console.log("value - 10");
//     break;
//   case 10 > 11: //
//     console.log("value - 9");
//     break;
//   case 10 > 11:
//     console.log("value - 10");
//     break;
//   case 10 > 11: // false === true
//     console.log("value - 10");
//     break;
//   case 10 > 11: //
//     console.log("value - 9");
//     break;
//   case 10 > 11:
//     console.log("value - 10");
//     break;
//   case 10 > 11: // false === true
//     console.log("value - 10");
//     break;
//   case 10 > 11: //
//     console.log("value - 9");
//     break;
//   case 10 > 11:
//     console.log("value - 8");
//     break;
//   case 10 < 11:
//     console.log("value - true");
//     break;
//   default:
//     console.log("another value");
// }
// console.timeEnd('switch true');

/***** Тернарний оператор *****/

// condition ? true : false

// const value = 10;

// value > 11 ? console.log("yes") : console.log("no");

/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let
// const value = 15;
// if (true) {
//   const value = 10;
//   console.log("1 if", value);
//   if (true) {
//     console.log("2 if", value);
//   }
// }
// console.log(value);

// let number = 10;

// if (true) {
//     number = 22;
// }
// console.log(number);

// let number = 10;

// if (true) {
//     if (true) {
//         number = 35;
//     }
//     number = 22;
// }
// console.log(number);

// let number = 10;

// if (true) {
//     let number = 22;
//     if (true) {
//         number = 35;
//     }
// }
// console.log(number);

// let number = 10;

// if (true) {
//     if (true) {
//         number = 35;
//     }
// let number = 22;
// }
// console.log(number);
//

//  Глобальна та функціональна
// var

// if (true) {
//   var value = 10;
// }
// console.log(value);

// function say() {
//   var value = 10;
// }
// console.log(value);

/***** Цикл for *****/

// for (initialization; condition; post-expression) {
//   // statements
// }

// const str = "hello world";

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// //   console.log(i);
// }

/***** Цикл while *****/

// const str = "hello world";

// let i = 0;

// while (i < str.length) {
//   // (statement)
//   console.log(str[i]);
//   i += 1;
// }

/***** Цикл do while *****/

// let i = 1;
// do {
//   // statement
//   console.log("hello world");
// } while (i < 0); // false

// let i = 1;
// do {
//   // statement
//   console.log("hello world");
//   i+=1
// } while (i < 10); // false

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt("color ?");
// let action;

// if (message) {
//   // null => false
//   message = message.toLowerCase().trim();
// }

// switch (message) {
//   case "red":
//     action = "stop";
//     break;
//   case "yellow":
//     action = "ready";
//     break;
//   case "green":
//     action = "go";
//     break;
//   default:
//     action = "be careful";
// }

// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//   let message = prompt(text);

//   if (message) {
//     message = message.toLowerCase().trim();
//   }

//   return message === answer; // true | false
// }

// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(depth) {
//   const daySpeed = 7;
//   const nightSpeed = 2;

//   let total = 0;
//   let days = 0;

//   while (total < depth) {
//     total += daySpeed;
//     days += 1;

//     if (total < depth) {
//       total -= nightSpeed;
//     }
//   }

//   console.log(days);
// }
// getDays(42); // 8
// getDays(17); // 3
// getDays(18); // 4

// console.log(Math.round(42 / (+7 - 2)));

// Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//   const vowels = "aeiou";
//   let counter = 0;

//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i += 1) {
//     // console.log(str[i],i);
//     if (vowels.includes(str[i])) {
//       counter += 1;
//     }
//   }

//   return counter;
// }
// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")); // 8
