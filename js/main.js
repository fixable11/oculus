'use strict'

// $(function(){
//
// });


const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabContent.forEach((el) => {
  el.addEventListener('click', open);
})

function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });

  tabContent.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active')
  });

  tabTarget.classList.add('tabs__btn-item--active');
  document.querySelector(`#${button}`).classList.add('tabs__btn-item--active');
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});
