'use strict';

const button = document.querySelector('.btn_menu');
const nav = document.querySelector('.block_navigation');

button.addEventListener('click', () =>  {
  if (document.getElementsByClassName('active').length > 0) {
    button.classList.remove('active');
    nav.classList.remove('active');
  } else {
    button.classList.add('active');
    nav.classList.add('active');
  }
});

let scrollpos = window.scrollY;
const btn = document.querySelector('#button');

window.addEventListener('scroll', () => {
  scrollpos = window.scrollY;

  if (scrollpos < 500) {
    btn.classList.add('hidden');
  } else {
    btn.classList.remove('hidden');
  }
});

btn.addEventListener('click', () => {
  window.scrollTo(0, 0) 
});
