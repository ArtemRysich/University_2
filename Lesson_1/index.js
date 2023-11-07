/***** Оголошення змінних *****/
// const value = 10;

// let number;

// number = 15;
// console.log(number);

// number = 25;

// console.log(number);

/***** Примітивні типи даних ****/

// Number

// const value = 25.65;
// console.log(typeof value);
// const str = '25px';
// console.log(Number(str) === NaN);

// console.log(isNaN(str));
// Number(str) => перевірка

// console.log(Number.isNaN('qwerty'));
// перевірка

// console.log(1 === 1);
// console.log(NaN === NaN);

// String
// const str = 'Hello world';

// const userName = 'Artem';
// const str = "Hello world ${userName}";
// console.log(str);
// console.log(typeof str);

// const userName = 'Artem';
// const str = `Hello my name is ${25 + 25}`;
// console.log(str);

// Типи рядків '' "" ``

// Boolean (true, false)

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// "" (порожній рядок)
// console.log(Boolean(''));
// NaN
// console.log(Boolean(NaN));
// undefined
// console.log(Boolean(undefined));
// null
// console.log(Boolean(null));
// false
// console.log(Boolean(false));

// undefined

// null

// перевірка типу даних з яким працюємо метод typeof

// console.log(typeof 25); //number
// console.log(typeof 'Hello'); // string
// console.log(typeof true); // boolean
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

/***** Комунікація з користувачем та можливість відображення якогось результату *****/
// const name = 'Artem'
// console.log('Привіт вчи JS', 25, name);

// alert('Привіт вчи JS');

// console.log(window);

// const message = prompt("Введіть і'мя")
// console.log(message);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);

/***** Основні оператори *****/

// >
// console.log(25 > 25);

// <
// console.log(23 < 24);

// ==
// console.log('false' == 0);
// console.log(false == 0);
// console.log(Number(false));

// ===
// console.log('25' === 25); // false

// <=
// console.log(24 <= 25);
// console.log('25' <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= '26');

// !=
// console.log('1' != 1); // 1 != 1

// !==
// console.log('1' !== 1); // string  !== number // true

// console.log(null > 0);
// console.log(null < 0);
// console.log(null === 0);
// console.log(null == 0);

// console.log(null >= 0);
// console.log(null <= 0);

// console.log(Number(null));

// console.log(null == null);
// console.log(null == undefined);

// Приклади роботи
//
// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false); // 0 == 0

// console.log('0' === false);

// console.log('papAya' < 'pApaya');

// console.log('b' < 'aAbBc');

// console.log('Papaya' === 'papaya');

/***** Логічні оператори *****/

// ||
// console.log(2 || 0 || 1);
// console.log(5 > 4 || 4 < 5);
//          true
// console.log(4 > 4 || 4 < 5);
//          false    true

// ?? реагує лише на null та undefined

// console.log(0 ?? 1);
// console.log(null ?? 1);
// console.log(undefined ?? 10);

// &&
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 || true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);

/***** Методи для роботки з числами (тип даних Number) *****/

// const str = '25.7a32px';
// console.log(Number(str));

// Number.parseInt()
// console.log(Number.parseInt(str));

// Number.parseFloat()
// console.log(Number.parseFloat(str));

// Number.isNaN()  та метод isNaN()
// console.log(isNaN(num));

// const num = Number(str) // NaN
// console.log(Number.isNaN(num));

// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN

// Класс Math
// const value = 11.7
// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// Math.round()
// console.log(Math.round(value));

// console.log(Math.pow(5, 4));
// console.log(5 ** 4);

/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello World';

// console.log(str[1]);
// length
// console.log(str.length);

// toLowerCase()
// console.log(str.toLowerCase());

// toUpperCase()
// console.log(str.toUpperCase());

// indexOf()
// console.log(str.indexOf(' '));
// console.log(str.indexOf('h'));

// includes
// console.log(str.includes('Hello world'));

// endsWith()
// console.log(str.endsWith('d '));

// startsWith()
// console.log(str.startsWith('Hello world'));

// replace()
// const str = 'Hello world';
// console.log(str.replace('l', '🍕'));

// replaceAll()
// console.log(str.replaceAll('l','🍟'));
// const str = 'Hello World';
// // slice()
// console.log(str.slice(-5));
// console.log(str);

// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// const apple = '🍎';

// const appleQuantity = 8;

// const applePrice = 34;

// const totalPrice = applePrice * appleQuantity;

// const  appleMessage = `${apple} total cost ${totalPrice}`;
// console.log(appleMessage);

// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(typeof minutes.toString());

// const result = `${hours.toString().padStart(2, "0")} : ${minutes
//   .toString()
//   .padStart(2, "0")}`;
// console.log(result);

// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;
// console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

let incomingValue;
const defaultValue = 10;
const value = incomingValue ?? defaultValue;
console.log(value);
