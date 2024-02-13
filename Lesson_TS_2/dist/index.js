// *******************Generics**********************
// Основна ідея (Generics) полягає в тому, що вони дозволяють визначити тип, який потім може бути визначений для роботи з різними іншими типами.
const arr = [1, 2, 3];
const arr1 = ["hello", 1, 2, "hello"];
const arr2 = ["hello", 1, 2, "hello", true];
// В функціях
// До використання Generics
// function logSomeValue(data: number | string) : number | string{
//   console.log(data);
//   return data
// }
// logSomeValue(10)
// logSomeValue('10')
// З використанням Generics
// function logSomeValue<T>(data: T): T {
//   console.log(data);
//   return data;
// }
// logSomeValue<number>(10);
// logSomeValue<string>("10");
// ********Interface - це визначення кастомного типу даних, дуже подібне до Custom Types*************************.
// Custom Types
// type User = {
//   name: string;
//   age: number;
//   city: string;
// };
// const alice: User = {
//   name: "Alice",
//   age: 18,
//   city: "Lviv",
// };
// interface User {
//   name: string;
//   age: number;
//   city: string;
// }
// const alice: User = {
//   name: "Alice",
//   age: 18,
//   city: "Lviv",
// };
// console.log(alice);
// Якщо потрібно зробити костамний тип з простими типами (Union type) то тільки type
// interface User {
//   hobby: "JS" | "TS";
// }
// const user: User = {
//   hobby: "TS",
// };
// const hooby: User = "TS";
// type Hobby = "JS" | "TS";
// const hobby: Hobby = 'Hello'
// Додати значення до властивостей далі по коду (використовується коли працюємо з бібліотеками)
// interface User {
//   name: string;
//   age: number;
// }
// interface User {
//   city: string;
// }
// interface User {
//   hobby?: string
// }
// Result
// interface User {
//   name: string;
//   age: number;
//   city: string;
//   hobby?: string
// }
// const user: User = {
//   name: "Alice",
//   age: 18,
//   city: "Lviv",
//   // hobby: "football"
// };
// Тому маємо загальне правило (рекомендація) коли працюємо з об'єктами ми використавуємо interface, а з простими типами type
// Advanced Types
// typeof
// Перевірка типу даних
// let value: string | number = 'hello';
// value = 10
// console.log(typeof value);
// in
// Перевірка чи ключ входить в обєкт
// const user = {
//   name: "Alice",
// };
// console.log('name' in user);
// console.log('age' in user);
// instanceof
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Student {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const user = new User("Alice");
// console.log(user instanceof User);
// console.log(user instanceof Student);
// is
// оператор використовується в операціях визначення типів, наприклад, умовних виразах або областях, де необхідно вказати більш точний тип для подальших операцій.
// interface Bird {
//   fly(): void;
//   layEggs(): void;
// }
// interface Fish {
//   swim(): void;
//   layEggs(): void;
// }
// const bird: Bird = {
//   fly() {},
//   layEggs() {},
// };
// function isBird(animal: Bird | Fish): animal is Bird {
//   return "fly" in animal;
// }
// isBird(bird);
// as
// Він дозволяє сказати компілятору, що він впевнений у правильності типу об'єкта або виразу, навіть якщо це не можливо визначити автоматично.
// let someValue: any = "Hello, TypeScript!";
// let strLength: number = (someValue as string).length
// console.log(strLength);
// Практика
// Generics
// Створіть функцію reverseArray, яка приймає масив будь-якого типу та повертає його в оберненому порядку.
// Використовуйте Generics, щоб функція була гнучкою і працювала для різних типів масивів.
// const numbers = [1, 2, 3, 4, 5];
// const words: string[] = ["apple", "banana", "cherry"];
// function reverseArray<T>(arr: T[]): T[] {
//   return arr.reverse();
// }
// reverseArray<number>(numbers);
// reverseArray(words);
// TASK-2
//  створити функцію mergeObjects, яка об'єднує два об'єкти в один, при цьому зберігаючи типи об'єктів.
// interface Person {
//   name: string;
//   age: number;
// }
// interface Address {
//   city: string;
//   zipCode: string;
// }
// interface User {
//   name: string;
//   age: number;
// }
// interface Student {
//   city: string;
//   zipCode: string;
// }
// const person: User = { name: "John", age: 30 };
// const address: Address = { city: "New York", zipCode: "10001" };
// const address1: Student = { city: "Lviv", zipCode: "10002" };
// function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }
// console.log(mergeObjects(address, address1));
// ****************Class**************** \\
// class User {
//   private email: string;
//   protected city: string;
//   constructor(
//     public readonly name: string,
//     public age: number,
//     email: string,
//     city: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.city = city;
//   }
// }
// class Student extends User {
//   constructor(name: string, age: number, email: string, city: string) {
//     super(name, age, email, city);
//   }
//   // getUserInfo(): void {
//   //   console.log(
//   //     `Name - ${this.name}, age ${this.age}, email - ${this.email}, city - ${this.city}`
//   //   );
//   // }
//   get userName(): string {
//     return this.name;
//   }
//   set userName(newName: string) {
//     this.name = newName;
//   }
// }
// const alice = new Student("Alice", 18, "test@gmail.com", "Lviv");
// console.log(alice.userName);
// // alice.userName = "Kate";
// console.log(alice);
// interface UserInterface {
//   name: string;
//   age: number;
//   getUserInfo(): string;
// }
// abstract class Form implements UserInterface {
//   constructor(public name: string, public age: number) {}
//   getUserInfo(): string {
//     return `My name is ${this.name}, my age is ${this.age}`;
//   }
// }
// class User extends Form {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }
// const alice = new User("Alice", 18);
// console.log(alice);
// console.log(alice.getUserInfo());
// Можливо, я трохи "повільний", але я так і не зрозумів, чому Typescript дозволяє нам це робити.
// Частина конспекту про design patterns, а саме facade.
// Яким чином метод getUserProfile, який має повертати тип User (з властивостями лише id, name та number), по факту повертає нам додаткові властивості addresses та paymentData в цьому об'єкті, і TS на це не свариться?
// Я розумію, що ми можемо додати додаткові проперті за допомогою синтаксису квадратних дужок в такий об'єкт, але чому він не свариться на те, що ми повертаємо не ту структуру, яка зазначена в User?
//   getUserProfile(userId: number): User {
//     const user = this.userService.getUser(userId);
//     user['addresses'] = this.addressService.getAddresses(userId);
//     user['paymentData'] = this.paymentService.getPaymentData(userId);
//     return user;
//   }
// П.С. Повний код нижче
// Мені вже пояснювали, що TypeScript має концепцію структурного типу, яка дозволяє об‘єктам бути сумісними, якщо вони мають однакову структуру. Також, почув у поясненні, що система типізації TypeScript базується на структурних типах, і вони перевіряють лише структуру об‘єкта, а не назви властивостей. Але ж тип User має іншу структуру за ту, що повертає метод getUserProfile.
// Це ж не інтерфейс, структуру якого наслідує об'єкт, але так само він може і мати додаткові властивості та методи.
// Підсумовуючи: пояснення почув, але його не зрозумів, так як здалося, що пояснення ігнорує мої аргументи про те, шо структура ж не однакова.
// Повний код
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// const user: User = {
//   id: 1,
//   name: "ALice",
//   email: "srt",
// };
// function addProps(obj: User): User {
//   obj["city"] = "Lviv"
//   obj.test = 123;
//   return obj;
// }
// type Address = {
//   userId: number;
//   street: string;
//   city: string;
//   country: string;
// };
// type PaymentData = {
//   userId: number;
//   cardNumber: string;
//   expiryDate: string;
// };
// class UserService {
//   getUser(id: number): User {
//     // Тут буде реалізація методу отримання інформації про користувача.
//     console.log(`Fetching user data for userId: ${id}`);
//     return { id, name: 'John Doe', email: 'john.doe@example.com' };
//   }
//   updateUser(user: User): void {
//     // Тут буде реалізація методу оновлення інформації користувача.
//     console.log(`Updating user: ${JSON.stringify(user)}`);
//   }
// }
// class AddressService {
//   getAddresses(userId: number): Address[] {
//     // Тут буде реалізація методу отримання адрес користувача.
//     console.log(`Fetching addresses for userId: ${userId}`);
//     return [{ userId, street: '123 Street', city: 'City', country: 'Country' }];
//   }
//   updateAddress(userId: number, address: Address): void {
//     // Тут буде реалізація методу оновлення адреси користувача.
//     console.log(`Updating address for userId: ${userId}`);
//   }
// }
// class PaymentService {
//   getPaymentData(userId: number): PaymentData {
//     // Тут буде реалізація методу отримання платіжних даних користувача.
//     console.log(`Fetching payment data for userId: ${userId}`);
//     return { userId, cardNumber: '1234 5678 9012 3456', expiryDate: '01/25' }
//   }
//   updatePaymentData(userId: number, paymentData: PaymentData): void {
//     // Тут буде реалізація методу оновлення платіжних даних користувача.
//     console.log(`Updating payment data for userId: ${userId}`);
//   }
// }
// class UserProfileFacade {
//   constructor(
//     private userService: UserService,
//     private addressService: AddressService,
//     private paymentService: PaymentService
//   ) {}
//   getUserProfile(userId: number): User {
//     const user = this.userService.getUser(userId);
//     user['addresses'] = this.addressService.getAddresses(userId);
//     user['paymentData'] = this.paymentService.getPaymentData(userId);
//     return user;
//   }
//   updateUserProfile(
//     userId: number,
//     userData: User,
//     address: Address,
//     paymentData: PaymentData
//   ): void {
//     this.userService.updateUser(userData);
//     this.addressService.updateAddress(userId, address);
//     this.paymentService.updatePaymentData(userId, paymentData);
//   }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getEmail() {
        console.log(this.email);
    }
}
const inst = new User("Alice", "test@gmail.com");
console.log(inst);
inst.getEmail();
//# sourceMappingURL=index.js.map