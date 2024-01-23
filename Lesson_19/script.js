// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/
// https://uk.wikipedia.org/wiki/SOAP

// Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

// *********Показати роботу з Postman********* \\
// https://www.postman.com/downloads/

// *********Fetch********* \\
// fetch(
//   `http://api.weatherapi.com/v1/forecast.json?key=6410346f89264d6e919165208231505&q=qwerty&days=7`
// )
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch(err => console.log(err))

// *********Обробка помилок та парсинг відповіді********* \\

// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// !!! ЗВЕРНИ УВАГУ ЩО API_KEY ПІСЛЯ РЕЄСТРАЦІЇ ВАЛІДНИЙ 21 ДЕНЬ !!!.

const elements = {
  form: document.querySelector(".js-search-form"),
  list: document.querySelector(".js-list"),
};

elements.form.addEventListener("submit", handlerSearchWeather);

function handlerSearchWeather(evt) {
  evt.preventDefault();

  const { city, days } = evt.currentTarget.elements;

  serviceWeather(city.value, days.value)
    .then((data) => {
      elements.list.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch(() => (location.href = "./errorPage.html"))
    .finally(() => elements.form.reset());
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `<li class="weather-card" >
        <img src="${icon}" alt="${text}" class="weather-icon">
        <h2 class="date">${date}</h2>
        <h3 class="weather-text">${text}</h3>
        <h3 class="temperature">${avgtemp_c} °C</h3>
      </li>`
    )
    .join("");
}

function serviceWeather(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "6410346f89264d6e919165208231505";

  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    lang: "uk",
    days,
  });

  return fetch(`${BASE_URL}/forecast.json?${params}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
