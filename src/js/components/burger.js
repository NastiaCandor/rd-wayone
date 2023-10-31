const hamburger = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.header__burger-menu');
const hamburgerClose = document.querySelector('.header__burger-close');

const catalogLink = document.querySelector('.burger-catalog-link');
const catalogBurgerMenu = document.querySelector('.header__burger-catalog');
const catalogBackBtn = document.querySelector('.burger-catalog__back');
const catalogCloseBtn = document.querySelector('.header__burger-catalog-close');

function closeBurgerMenu() {
  burgerMenu.classList.remove('active');
};

function openBurgerMenu() {
  burgerMenu.classList.add('active');
};

function closeCatalogBurgerMenu() {
  catalogBurgerMenu.classList.remove('active');
};

function openCatalogBurgerMenu () {
  catalogBurgerMenu.classList.add('active');
};

hamburger.addEventListener('click', openBurgerMenu);

hamburgerClose.addEventListener('click', closeBurgerMenu);

catalogLink.addEventListener('click', openCatalogBurgerMenu);

console.log(catalogBackBtn);
catalogBackBtn.addEventListener('click', () => {
  closeCatalogBurgerMenu();
});

catalogCloseBtn.addEventListener('click', () => {
  closeCatalogBurgerMenu();
  closeBurgerMenu();
});