import '../scss/styles.scss';
import { PROJECTS } from './project';
const menuElement = document.getElementById('menu');
const hamburgerElement = document.getElementById('hamburger');

const toggleMenu = () => {
  menuElement.classList.toggle('menu--active');

  const isMenuActive = menuElement.classList.contains('menu--active');
  hamburgerButton.src = isMenuActive ? './assets/images/hamburguer.svg' : './assets/images/hamburguer.svg';
};

const projectsElement = document.getElementById('project-container');

const fragment = document.createDocumentFragment();

const createRow = projetRow => {
  const newRow = document.createElement('div');
  const newRowClass = projetRow.reverse && 'project-row-reverse';
  newRow.classList.add('project-row', newRowClass);

  const newBox = document.createElement('a');
  newBox.classList.add('project__box', 'project__box-1');
  newBox.style.setProperty('--bg-image-mobile', projetRow.bgImageMobileBox1);
  newBox.href = projetRow.linkBox1;

  const newBoxTexts = document.createElement('div');
  newBoxTexts.classList.add('project__element');

  const newTitle = document.createElement('h2');
  newTitle.classList.add('project__title');
  newTitle.textContent = projetRow.titleBox1;

  const newLink = document.createElement('a');
  newLink.classList.add('project__box-text');

  const imgElement = document.createElement('img');
  imgElement.classList.add('project__box-img');
  imgElement.src = projetRow.imgButtonBox1;
  imgElement.alt = 'Button';

  const pElement = document.createElement('p');
  pElement.classList.add('project__subtitle');
  pElement.textContent = projetRow.subTitleBox1;

  newLink.append(imgElement);
  newBoxTexts.append(newTitle, newLink);
  newBox.append(newBoxTexts, pElement);

  const newBox2 = document.createElement('a');
  if (projetRow.titleBox2.includes('Endesa')) {
    newBox2.classList.add('project__box--dark');
  }
  newBox2.classList.add('project__box', 'project__box-2');
  newBox2.style.setProperty('--bg-image-mobile', projetRow.bgImageMobileBox2);
  newBox2.href = projetRow.linkBox2;

  const newBoxTexts2 = document.createElement('div');
  newBoxTexts2.classList.add('project__element');

  const newTitle2 = document.createElement('h2');

  if (projetRow.titleBox2.includes('Endesa')) {
    newTitle2.classList.add('project__title--dark');
  }

  newTitle2.classList.add('project__title');
  newTitle2.textContent = projetRow.titleBox2;

  const newLink2 = document.createElement('a');
  newLink2.classList.add('project__box-text');

  const imgElement2 = document.createElement('img');
  imgElement2.classList.add('project__box-img');
  imgElement2.src = projetRow.imgButtonBox2;
  imgElement2.alt = 'Button';

  const pElement2 = document.createElement('p');

  if (projetRow.titleBox2.includes('Endesa')) {
    pElement2.classList.add('project__subtitle--dark');
  }
  pElement2.classList.add('project__subtitle');
  pElement2.textContent = projetRow.subTitleBox2;

  newLink2.append(imgElement2);

  newBoxTexts2.append(newTitle2, newLink2);
  newBox2.append(newBoxTexts2, pElement2);

  newRow.append(newBox, newBox2);

  fragment.appendChild(newRow);
};

PROJECTS.forEach(element => {
  createRow(element);
});

projectsElement.insertBefore(fragment, projectsElement.firstChild);
