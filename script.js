"use strict";
/* 
Є блок із текстом на сторінці та кнопку.
При натисканні на кнопку текст змінює колір.
При повторному натисканні – повертається попередній колір
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const buttonElement = document.querySelector('body button');

buttonElement.addEventListener('click', () => {
  const divTextElement = document.querySelector('body div');

  if (document.querySelector('.new_color')) {
    divTextElement.className = '';
  } else {
    divTextElement.className = 'new_color';
  }
})
