// Скалярні типи

// let isOpen: boolean = true;
// isOpen = false;

// let value: number = 10;
// value = 2;

// let message: string;

// message = "Hello world";
// console.log(message);

// let empty: null = null;
// let missing: undefined = undefined;

// ******** any

// let some: any = 4;
// console.log(some);
// some = "hello";

// console.log(some);
// some = true;
// console.log(some);

// unknow

// let age: unknown = 20;

// console.log(age);

// age = "twenty";

// console.log(age);

// let value: number;

// value = some;

// console.log(value);

//*** Tuple*/

// const arr: string[] = ["a", "b", "c"];

// console.log(arr);

// let arr: [number, string];

// arr = [12, "a"];
// arr.push(15)

// console.log(arr);

// let arr: [number, ...string[], number];

// arr = [12, "a", "b", "c", "d", 15];

// enum

// enum DayOfWeek {
//   Monday = "monday",
//   Tuesday = "tuesday",
//   Wednesday = "wednesday",
// }
// console.log(DayOfWeek.Monday);

// const enum Discount {
//     Gold = 10,
//     Silver = 7,
//     Bronze = 5
// }

// console.log(Discount.Bronze);

// Union Type

// let customValue: string | number | boolean = 10;
// customValue = "hello";
// customValue = true;

// let message: "resolve" | "reject";

// message = "reject";
// message = "resolve";
// message = "hello world";

// Custom Types

type ExpirationDate = {
  day: number;
  month: number;
  year: number;
};

type Fruit = {
  id: number;
  name: string;
  price?: number;
  expirationDate: ExpirationDate;
};

let apple: Fruit = {
  id: 1,
  name: "Apple",
  expirationDate: {
    day: 22,
    month: 10,
    year: 2023,
  },
};

// Практика
// TASK -1
// Створіть перечислення Colors для основних кольорів (червоний, зелений, синій). Напишіть функцію getColorHex, яка приймає значення з перечислення і повертає відповідний шестнадцятковий код кольору.
// enum Colors {
//   Red = "#FF0000",
//   Green = "#00FF00",
//   Blue = "#0000FF",
// }

// function getColorHex(color: keyof typeof Colors): string {
//   return Colors[color];
// }

// console.log(getColorHex("Green"));

// Task - 2
// Створи функції яка приймає ім'я та вік, а потім повертає кортеж, де перший елемент має тип string (ім'я), а другий елемент має тип number (вік).

// function createPerson(name: string, age: number): [string, number] {
//     return [name, age]
// }

// console.log(createPerson("Alice", 20));

// Task-3
// створіть функцію, яка приймає об'єкт студента та обчислює його середній бал.

// type Student = {
//   name?: string;
//   grades: number[];
// };

// const alice = {
//   name: "Alice",
//   grades: [11, 12, 6],
// };

// function calculateAverage(student: Student): number {
//   return student.grades.reduce(
//     (acc: number, item: number, idx: number, arr: number[]): number => {
//       acc += item;

//       return arr.length - 1 === idx ? acc / arr.length : acc;
//     },
//     0
//   );
// }
// console.log(calculateAverage(alice));

// Task-4
// Створіть користувацький тип для представлення інформації про замовлення в інтернет-магазині. Кожен замовлення має номер (рядок), список товарів (масив об'єктів з назвою та ціною) та статус (рядок: "в обробці", "відправлено", "доставлено" тощо). Створіть функції для обчислення сумарної вартості замовлення та виведення інформації про статус замовлення.

enum StatusDelivery {
  PROCESS = "In process",
  SENT = "Sent",
  DELIVERED = "Delivered",
}

type OrderItem = {
  id: string;
  name: string;
  price: number;
};

type Order = {
  number: string;
  items: OrderItem[];
  status: StatusDelivery;
};

const exampleOrder: Order = {
  number: "12345",
  items: [
    { id: "1", name: "Laptop", price: 800 },
    { id: "2", name: "Mouse", price: 30 },
    { id: "3", name: "Keyboard", price: 50 },
  ],
  status: StatusDelivery.PROCESS,
};

function calculateTotal(items: OrderItem[]): number {
  return items.reduce(
    (acc: number, { price }: OrderItem): number => acc + price,
    0
  );
}

function printStatus({ number, status, items }: Order): void {
  console.log(
    `Order - ${number}, status - ${status}, total price ${calculateTotal(
      items
    )}`
  );
}

printStatus(exampleOrder);
