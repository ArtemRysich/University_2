// ***************** Конструкція async await ***************** \\

// function serviceCountry() {
//   return fetch("https://restcountries.com/v3.1/name/Ukraine")
//   .then((resp) =>
//     resp.json()
//   );
// }

// serviceCountry()
// .then((data) => console.log(data));

// async function serviceCountry(){
//     const response = await fetch("https://restcountries.com/v3.1/name/Ukraine")

//     if(!response.ok) {
//         throw new Error(response.statusText)
//     }

//     const data = await response.json();
//     console.log(data);
// }
// serviceCountry()

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

// async function fn(){

// }
// console.log(fn());
// fn().then()

// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

// ****** Arrow function ****** \\

// async function serviceCountry(){
//     const response = await fetch("https://restcountries.com/v3.1/name/Ukraine")

//     if(!response.ok) {
//         throw new Error(response.statusText)
//     }

//     const data = await response.json();
//     console.log(data);
// }
// serviceCountry()

// const serviceCountry = async () => {
//   const response = await fetch("https://restcountries.com/v3.1/name/Ukraine");

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   const data = await response.json();
//   console.log(data);
// };
// serviceCountry()
// ****** Function expression ****** \\

// const serviceCountry = async function () {
//   const response = await fetch("https://restcountries.com/v3.1/name/Ukraine");

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   const data = await response.json();
//   console.log(data);
// };
// serviceCountry()

// ****** Object method ****** \\

// const service = {
//   countryName: "Ukraine",
//   async serviceCountry() {
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${this.countryName}`
//     );

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const data = await response.json();
//     console.log(data);
//   },
// };

// service.serviceCountry()

// ****** ES6 Class ****** \\

// class Service {
//   constructor(name) {
//     this.countryName = name;
//   }

//   async getCountry() {
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${this.countryName}`
//     );

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const data = await response.json();
//     console.log(data);
//   }
// }

// const instance = new Service('Ukraine');

// instance.getCountry()

// ************ Обробка за допомогою then та catch ************ \\

async function getCountry() {
  const response = await fetch(`https://restcountries.com/v3.1/name/Ukraine`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

// getCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ************ Обробка за допомогою try та catch ************ \\

// async function getCountry() {
//   const BASE_URL = "https://restcountries.com/v3.9/name";
//   const countryName = "Ukraine";
//   try {
//     const response = await fetch(`${BASE_URL}/${countryName}`);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const data = await response.json();

//   } catch (err) {
//     console.log(err);
//   }
// }

// getCountry()

// // ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\

async function serviceCountries() {
  // console.log('Start 1');
  // const resp1 = await fetch('https://restcountries.com/v3.1/name/Ukraine')
  // console.log('Start 2');
  // const resp2 = await fetch('https://restcountries.com/v3.1/name/Poland')
  // console.log('Start 3');
  // const resp3 = await fetch('https://restcountries.com/v3.1/name/France')
}

// serviceCountries()

// *********** Паралельні *********** \\
// async function serviceCountries() {
//   const countries = ["Ukraine", "Poland", "France"];

//   const responses = countries.map(async (country) => {
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${country}`
//     );

//     return response.json();
//   });
// }

// serviceCountries();

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!

// Приклад роботи https://ibb.co/6g3YYs8

const elements = {
  form: document.querySelector(".js-search"),
  formContainer: document.querySelector(".js-form-container"),
  addField: document.querySelector(".js-add"),
  list: document.querySelector(".js-list"),
};

elements.addField.addEventListener("click", handlerAddField);
elements.form.addEventListener("submit", handlerSearchCountry);

async function handlerSearchCountry(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);

  const countries = formData
    .getAll("country")
    .map((country) => country.trim())
    .filter((country) => !!country);

  //   const result = countries.filter(
  //     (country, idx, arr) => arr.indexOf(country) === idx
  //   );
  //   const result = new Set(countries);
  //   console.log([...result]);
  try {
    const capitals = await serviceCountries(countries);
    const forecast = await serviceWeather(capitals);

    elements.list.innerHTML = createMarkup(forecast);
  } catch (e) {
    console.log(e);
  } finally {
    elements.formContainer.innerHTML = '<input type="text" name="country" />';
  }
}

async function serviceWeather(capitals) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const END_POINT = "current.json";
  const API_KEY = "14c56bddeab14583a6e164909231107";

  const responses = capitals.map(async (capital) => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: capital,
      lang: "uk",
    });

    const response = await fetch(`${BASE_URL}/${END_POINT}?${params}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);
}

async function serviceCountries(countries) {
  const BASE_URL = "https://restcountries.com/v3.1/name";
  const responses = await countries.map(async (country) => {
    const resp = await fetch(`${BASE_URL}/${country}`);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0].capital[0]);
}

function handlerAddField() {
  elements.formContainer.insertAdjacentHTML(
    "beforeend",
    '<input type="text" name="country" />'
  );
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        current: {
          temp_c,
          condition: { icon, text },
        },
        location: { country, name },
      }) => `
      <li>
        <img src="${icon}" alt="${text}">
        <h2>${country}</h2>
        <h2>${name}</h2>
        <p>${text}</p>
        <p class="temp">${temp_c} °C</p>
      </li>`
    )
    .join("");
}
