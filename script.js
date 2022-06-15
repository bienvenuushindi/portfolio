const closeMenuIcon = document.querySelector('.close');
const openMenuIcon = document.querySelector('.bars');
const menu = document.querySelector('#mobile-menu');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.mobile-menu .list-item');

function init() {
  body.classList.remove('overflow-y');
  document.querySelector('#headline').classList.toggle('blur');
  document.querySelector('#toolbar').classList.toggle('blur');
  menu.classList.toggle('d-block');
  menu.classList.toggle('d-none');
}

function openMenu() {
  init();
  body.classList.toggle('overflow-y');
}

function closeMenu() {
  init();
}

closeMenuIcon.addEventListener('click', () => {
  closeMenu();
});

openMenuIcon.addEventListener('click', () => {
  openMenu();
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});

