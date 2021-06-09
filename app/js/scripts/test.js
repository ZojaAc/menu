// // открыть/закрыть меню на планшете и меньше шириной, при нажатии на бургер
// const burger = document.querySelector('.burger');
// const headerNav = document.querySelector('.nav');
// const shadow = document.querySelector('.shadow');
// burger.addEventListener('click', () => {
//   headerNav.classList.toggle('nav--burger-open');
//   shadow.classList.toggle('shadow--visible');
//   if(headerNav.classList.contains('nav')) {
//     navWrapSec.classList.remove('nav__list-wrap--second--open');
//     navDrop.classList.remove('nav__drop--rotate');
//   }
//   if(navWrapSec.classList.contains('nav__list-wrap--second')) {
//     navWrapThird.classList.remove('nav__list-wrap--third--open');
//     navDropT.classList.remove('nav__drop--rotate');
//   }
// });

// // открыть/закрыть второй уровень меню
// const jsOne = document.querySelector('.nav__js-open-second');
// const navWrapSec = document.querySelector('.nav__list-wrap--second');
// const navDrop = document.querySelector('.nav__drop');
// jsOne.addEventListener('click', () => {
//   navWrapSec.classList.toggle('nav__list-wrap--second--open');
//   navDrop.classList.toggle('nav__drop--rotate');
//   if(navWrapSec.classList.contains('nav__list-wrap--second')) {
//     navWrapThird.classList.remove('nav__list-wrap--third--open');
//     navDropT.classList.remove('nav__drop--rotate');
//   }
// });

// // открыть/закрыть третий уровень меню
// const jsTwo = document.querySelector('.nav__js-open-third');
// const navWrapThird = document.querySelector('.nav__list-wrap--third');
// const navDropT = document.querySelector('.nav__drop-third');
// jsTwo.addEventListener('click', () => {
//   navWrapThird.classList.toggle('nav__list-wrap--third--open');
//   navDropT.classList.toggle('nav__drop--rotate');
// });
