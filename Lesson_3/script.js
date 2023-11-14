// Що таке масив
// const array = ["Hello world", null, true, 15];
// console.log(array);

// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray({name: "hello"})); // false

// const array = ["Hello world", null, true, 15];

// Перший та останій елемент масиву
// const firstEl = array[0];
// console.log(firstEl);
// console.log(array.length);
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];
// console.log(lastEl);

// Перебір масиву
// const array = ["Hello world", null, true, 15];

// Цикл for
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i];
//     console.log(typeof item);
// }

// Цикл for of
// for(const item of array){
//     console.log(item);
// }

// Присвоєння за посиланням та за значенням

// Примітивні типи даних - за значенням

// const a = "Hello";
// const b = a;

// console.log(a === b);
// console.log(a === "Hello");
// console.log(b === "Hello");

// Складні типи даних - за посиланням

// const c = [1, 2, 3];
// const d = c;

// console.log(c === d);
// console.log(c === [1, 2, 3]);
// console.log(d === [1, 2, 3]);

// Методи для роботи з масивом

// const numbers = [1, 2, 3, 4];

// push pop
// numbers.push(7, 6, 5);
// console.log(numbers);

// numbers.pop()
// numbers.pop()
// const copy = [...numbers]
// numbers.pop()
// console.log(copy);
// console.log(numbers);

// unshift shift

// numbers.unshift(5,6,7)

// numbers.shift()
// numbers.shift()
// console.log(numbers);

// reverse
// numbers.reverse()
// console.log(numbers);

//slice
// const result = numbers.slice(1, 3);
// console.log(result);
// console.log(numbers);

// splice
// const numbers = [1, 2, 3, 4];
// numbers.splice(1, 0, 'a', 'b');
// console.log(numbers);

//includes
// const numbers = [1, 2, 3, 4];
// console.log(numbers.includes(33));

// function customIncludes(searchValue) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] === searchValue){
//         return true
//     }
//   }

//   return false
// }
// customIncludes(33);

//indexOf
// function customIndexOf(searchValue) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       if(numbers[i] === searchValue){
//           return i;
//       }
//     }

//     return -1;
//   }
//   customIndexOf(33);

// concat

// const numbers = [1, 2, 3, 4];
// const copy = numbers;

// numbers.pop()
// copy.shift()

// console.log("numbers", numbers);
// console.log("copy", copy);

// const numbers = [1, 2, 3, 4];
//  numbers.slice();
//  numbers.concat()
//  [...numbers];
// const copy = Array.from(numbers);

// numbers.pop()
// copy.shift()

// console.log("numbers", numbers);
// console.log("copy", copy);

// const result = numbers.concat([8,9], [5,6,7])
// console.log(result);

// console.log(numbers);

// const result = [1, 2, 3] + [4, 5, 6];
// console.log(typeof result);

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, "Hello", null, 42, false];

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(typeof arr[i]);
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }
// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   console.log(arr[i]);
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//   }
// }

// console.log(arr);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i];
//     if (arr.includes(item, i + 1) && !result.includes(item)) {
//       // indexOf
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([1, 2, 1, 3, 2, 1, , 2, 17, 1, 2, 19])); // [1, 2]

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function getWomen(users, men) {
//   const women = [];

//   for (const user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }

//   return women;
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';

// Example 1
// const arr = string.split('');
// const reverse = arr.reverse()
// const str = reverse.join('')

// Example 2
// const result = string.split('').reverse().join('');
// console.log(result);

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi
// const numbers = [9, 2, 3, 1, 5, 6, 7, 8, 9];
// const numbers = [1, 2, 3, 4, 5];

// for (let i = 1; i < numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   const prevEl = numbers[i - 1];
//   if (prevEl >= currentEl) {
//     numbers[i] = prevEl + 1;
//   }
// }
// const numbers = [9, 5, 6, 1, 2];

// for (let i = 0; i < numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   if (currentEl > 1 && !i) {
//     numbers[i] = 1;
//   } else if (numbers[i - 1] >= currentEl) {
//     numbers[i] = numbers[i - 1] + 1;
//   }
// }

// console.log(numbers);

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функція має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//   let message = "";

//   switch (arr.length) {
//     case 0:
//       message = "no one likes this";
//       break;
//     case 1:
//       message = `${arr[0]} likes this`;
//       break;
//     case 2:
//       message = `${arr[0]} and ${arr[1]} likes this`;
//       break;
//     case 3:
//       message = `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`;
//       break;
//     default:
//       message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   }

//   return message;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// if(!arr.length){

// }else if (arr.length === 1){

// }else if(arr.length === 2){

// }else if(arr.length === 3){

// }else{}

// console.log([1, 2, 3]);

const objA = {
  name: "User",
  skills: [{ html: true, css: false }],
};

const objB = JSON.parse(JSON.stringify(objA));
const objC = { ...objA };

console.log(objA === objB);
console.log(objA);
console.log(objB);
console.log(objA.skills === objB.skills);
console.log(objC.skills === objA.skills);
