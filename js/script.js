/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// "use strict";
// window.addEventListener("DOMContentLoaded", () => {
//   const movieDB = {
//     movies: [
//       "Логан",
//       "Лига справедливости",
//       "Ла-ла лэнд",
//       "Одержимость",
//       "Скотт Пилигрим против...",
//     ],
//   };

//   const adv = document.querySelectorAll(".promo__adv img"),
//     genre = document.querySelector(".promo__genre"),
//     promoBg = document.querySelector(".promo__bg"),
//     numberLi = document.querySelector(".promo__interactive-list");

//   adv.forEach((item) => {
//     item.remove();
//   });

//   genre.innerHTML = "драма";

//   promoBg.style = `background: url('../img/bg.jpg');`;

//   numberLi.innerHTML = "";

//   movieDB.movies.sort();

//   movieDB.movies.forEach((film, i) => {
//     numberLi.innerHTML += ` 
//     <li class="promo__interactive-item">${i + 1} ${film}
//         <div class="delete"></div>
//     </li>`;
//   });
// });

//? Задания на урок:
//? Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
//? новый фильм добавляется в список. Страница не должна перезагружатся.
//? новый фильм должен добавляется в movieDB.movies.
//? Для получения доступа к значению input - обращаемся к нему как input.value;
//? P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

//? Если названия фильма больше, чем 21 символ - обрезать его и добавлять три точки

//? При клике на мусорную корзину - элемент будет удалятся из списка (сложно)

//? Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение :
//? "Добавляем любимый фильм"

//? Фильмы должны быть отсортированы по алфавиту 

"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    promoBg = document.querySelector(".promo__bg"),
    numberLi = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("from.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newFilm = addInput.value;
    const favorite = checkbox.checked;

    movieDB.movies.push(newFilm);
    movieDB.movies.sort();

  })

  adv.forEach((item) => {
    item.remove();
  });
  movieDB.movies.sort();

  genre.innerHTML = "драма";

  promoBg.style = `background: url('../img/bg.jpg');`;

  
  function createMovieList(films, parent) {
    parent.innerHTML = "";
    
    films.forEach((film, i) => {
      parent.innerHTML += ` 
      <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
      </li>`;
    });
  }

  createMovieList(movieDB.movies, numberLi);

});
