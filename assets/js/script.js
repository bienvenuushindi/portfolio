const closeMenuIcon = document.querySelector('.close');
const openMenuIcon = document.querySelector('.bars');
const menu = document.querySelector('#mobile-menu');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.mobile-menu .list-item');
const projectDetailsButtons = document.querySelectorAll('.project-btn');
const modalBox = document.querySelector('.modal');
const modalCloseIcon = document.querySelector('.modal-close');

const projects = {
  1: {
    name: 'Tonic',
    imageSrc: 'assets/images/desktop/projects/tonic.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
  2: {
    name: 'Multi-Post Stories ',
    imageSrc: 'assets/images/desktop/projects/multi-post.png',
    description: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  3: {
    name: 'Tonic',
    imageSrc: 'assets/images/desktop/projects/facebook-360.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  4: {
    name: 'Multi-Post Stories ',
    imageSrc: 'assets/images/desktop/projects/uber-navigation.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
};

function init() {
  body.classList.remove('overflow-y');
  document.querySelector('#headline').classList.toggle('blur');
  document.querySelector('#toolbar').classList.toggle('blur');
  menu.classList.toggle('d-block');
  menu.classList.toggle('d-none');
}

function initModal() {
  document.querySelectorAll('section').forEach((item) => item.classList.toggle('blur'));
  modalBox.classList.toggle('d-none');
  window.scrollTo(0, 0);
}

function openMenu() {
  init();
  body.classList.toggle('overflow-y');
}

function closeMenu() {
  init();
}

function closeModal() {
  initModal();
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

function setValue(target, value) {
  target.innerHTML = value;
}

function setTitle(target, value) {
  setValue(target, value);
}

function setImageSrc(target, src) {
  target.attributes.src.value = src.trimEnd();
}

function setLink(target, value) {
  target.attributes.href.value = ` #${value} `;
}

function setDescription(target, value) {
  setValue(target, value);
}

function setLanguages(target, value) {
  const list = value.map((item) => ` <li class="badge mr-2 mb-sm-1"> ${item} </li> `).join(' ');
  setValue(target, list);
}

modalCloseIcon.addEventListener('click', () => {
  closeModal();
});

function setPopupData(project) {
  const projectTitle = document.querySelector('.modal-title');
  const projectSnapshot = document.querySelector('.modal-image');
  const projectDescription = document.querySelector('.modal-description');
  const projectLanguages = document.querySelector('.modal-languages');
  setTitle(projectTitle, project.name);
  setImageSrc(projectSnapshot, project.imageSrc);
  setDescription(projectDescription, project.description);
  setLanguages(projectLanguages, project.languages);
}

projectDetailsButtons.forEach((btn) => {
  btn.addEventListener('click', (ev) => {
    const id = ev.target.attributes.id.value;
    setPopupData(projects[id]);
    initModal();
    setLink(modalCloseIcon, id);
  });
});
