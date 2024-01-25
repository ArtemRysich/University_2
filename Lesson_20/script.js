// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// *********** Кнопка "Load More" **************** \\

// const selectors = {
//   container: document.querySelector(".js-movie-list"),
//   loadMore: document.querySelector(".js-load-more"),
// };
// let page = 1;

// selectors.loadMore.addEventListener("click", handlerLoadMore);

// function serviceMovie(page = 1) {
//   const BASE_URL = "https://api.themoviedb.org";
//   const END_POINT = "/3/trending/movie/week";
//   const API_KEY = "345007f9ab440e5b86cef51be6397df1";

//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     page: page,
//   });

//   return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });
// }
// serviceMovie()
//   .then((data) => {
//     selectors.container.insertAdjacentHTML(
//       "beforeend",
//       createMarkup(data.results)
//     );

//     if (data.page < data.total_pages) {
//       selectors.loadMore.classList.replace("load-more-hidden", "load-more");
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         poster_path,
//         release_date,
//         original_title,
//         vote_average,
//       }) => `<li class="movie-card">
//     <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
// <div class="movie-info">
//  <h2>${original_title}</h2>
//  <p>Release Date:  ${release_date}</p>
//  <P>Vote Average:  ${vote_average}</P>
// </div>
//   </li>`
//     )
//     .join("");
// }

// function handlerLoadMore() {
//   page += 1;
//   serviceMovie(page).then((data) => {
//     selectors.container.insertAdjacentHTML(
//       "beforeend",
//       createMarkup(data.results)
//     );

//     if (data.page >= 500) {
//       selectors.loadMore.classList.replace("load-more", "load-more-hidden");
//     }
//   });
// }

// ************** Infinity scroll ********************** \\
const selectors = {
  container: document.querySelector(".js-movie-list"),
  guard: document.querySelector(".js-guard"),
};

const options = {
  root: null,
  rootMargin: "300px",
  threshold: 0,
};

const observer = new IntersectionObserver(handlerLoadMore, options);

let page = 498;

serviceMovie()
  .then((data) => {
    selectors.container.insertAdjacentHTML(
      "beforeend",
      createMarkup(data.results)
    );

    if (data.page < data.total_pages) {
      observer.observe(selectors.guard);
    }
  })
  .catch((err) => {
    console.error(err);
  });

function serviceMovie(page = 1) {
  const BASE_URL = "https://api.themoviedb.org";
  const END_POINT = "/3/trending/movie/week";
  const API_KEY = "345007f9ab440e5b86cef51be6397df1";

  const params = new URLSearchParams({
    api_key: API_KEY,
    page: page,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        poster_path,
        release_date,
        original_title,
        vote_average,
      }) => `<li class="movie-card">
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
<div class="movie-info">
 <h2>${original_title}</h2>
 <p>Release Date:  ${release_date}</p>
 <P>Vote Average:  ${vote_average}</P>
</div>
  </li>`
    )
    .join("");
}

let observerCounter = 0;
function handlerLoadMore(entries, observer) {
  observerCounter += 1;
  console.log("observerCounter", observerCounter);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      page += 1;
      serviceMovie(page).then((data) => {
        selectors.container.insertAdjacentHTML(
          "beforeend",
          createMarkup(data.results)
        );

        if (data.page >= 500) {
          observer.unobserve(selectors.guard);
        }
      });
    }
  });
}

// document.addEventListener("scroll", handlerScroll);

// let scrollCounter = 0;
// function handlerScroll() {
//   scrollCounter += 1;
//   console.log("scrollCounter", scrollCounter);
// }
