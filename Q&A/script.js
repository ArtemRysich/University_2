// Поясніть логіку , на що буде посилатися this.MAX_PRICE , якщо строку  if(newPrice > Car.MAX_PRICE)....змінити на if(newPrice > this.MAX_PRICE) ( повний код прикріплений в коментарі на цю ячейку)

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     console.log('this',this.MAX_PRICE);
//     if (newPrice > this.MAX_PRICE) {
//       return;
//     }

//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// const obj = {
//   name: "Artem",
//   sayHello() {
//     console.log(`Hello I'm ${this.name}`);
//   },
// };

// const toJSON = JSON.stringify(obj);
// const copy = JSON.parse(toJSON)

// console.log(copy);

// condition ? true : false

// if (true) {
//   const value = 10;

//   console.log(value);
// } else {
// }

// if(){

// }

// if(){

// }else if(){

// }

// const isOnline = true;
// let message;

// if (isOnline) {
//   message = "Online";
// } else {
//   message = "OffLine";
// }
// console.log(message);

// message = isOnline ? "Online" : "OffLine";

// const response = 'Some message';

// const result = response || 'Default value';

// console.log(result);

// const isOnline = true;

// const result = isOnline && setStatus();

// function setStatus() {
//   return "I`m Online";
// }

// console.log(result);

// розкажіть чи можна використовувати такий запис (без if типу): variable && action() ? типу це не порушує бест практіс або якісь стандарти ?

// const arr = ["a", "b", "c"];

// const result = arr.reduce((acc, item) => acc + item);
// console.log(result);

// const arr = [{ value: "a" }, { value: "b" }, { value: "c" }];

// const result = arr.reduce((acc, { value }) => acc + value);
// console.log(result);
