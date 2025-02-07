import '../scss/styles.scss';
import { ProyectElements } from './project';
const menuElement = document.getElementById('menu');
const hamburgerElement = document.getElementById('hamburger');

const toggleMenu = () => {
  menuElement.classList.toggle('menu--active');

  const isMenuActive = menuElement.classList.contains('menu--active');
  hamburgerButton.src = isMenuActive ? './assets/images/hamburguer.svg' : './assets/images/hamburguer.svg';
};

hamburgerElement.addEventListener('click', function (e) {
  e.preventDefault();
  this.classList.toggle('active-menu');
});
const proyectContainer = document.getElementById('proyect');
const fragment = document.createDocumentFragment();

ProyectElements.forEach(element => {
  const divElement = document.createElement('div');
  divElement.classList.add('project__box');

  const flexContainer = document.createElement('div');
  flexContainer.classList.add('project__elements');

  const textElement = document.createElement('h2');
  textElement.classList.add('project__text');
  textElement.textContent = element.text;
  flexContainer.appendChild(textElement);

  const buttonElement = document.createElement('a');
  buttonElement.href = '#';

  const buttonImage = document.createElement('img');
  buttonImage.src = element.imgButton;
  buttonImage.alt = 'Button';

  buttonElement.classList.add('project__button');

  buttonElement.appendChild(buttonImage);
  flexContainer.appendChild(buttonElement);
  divElement.appendChild(flexContainer);

  fragment.appendChild(divElement);
});

proyectContainer.insertBefore(fragment, proyectContainer.firstChild);
