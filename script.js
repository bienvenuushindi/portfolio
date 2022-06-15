const closeMenuIcon = document.querySelector('.close');
const openMenuIcon = document.querySelector('.bars');
const menu = document.querySelector('#mobile-menu');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.mobile-menu .list-item');
const projectDetailsButtons = document.querySelectorAll('.project-btn');
const modalBox = document.querySelector('.modal');
const projects = document.querySelectorAll('card');
const card1 = {
  name: '',
  lenguage: '',
  image: '',
  live: '',
  source: '',
};

const card2 = {
  name: '',
  lenguage: '',
  image: '',
  live: '',
  source: '',
};

const card3 = {
  name: '',
  lenguage: '',
  image: '',
  live: '',
  source: '',
};

const card4 = {
  name: '',
  lenguage: '',
  image: '',
  live: '',
  source: '',
};

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
projectDetailsButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('clicked');
    modalBox.classList.remove('d-none');
  });
});

modalBox.forEach((modal) => {
  modal.addEventListener('click', () => {
    modalBox.classList.add('active');
  });
});

modalBox.forEach((modal) => {
  modal.addEventListener('click', () => {
    modalBox.classList.remove('active');
  });
});