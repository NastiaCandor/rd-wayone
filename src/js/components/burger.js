const hamburger = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.header__burger-menu');
const hamburgerClose = document.querySelector('.header__burger-close');

const closeBurgerMenu = () => {
  burgerMenu.classList.remove('active');
};

const openBurgerMenu = () => {
  burgerMenu.classList.add('active');
};

hamburger.addEventListener('click', ()=> {
  openBurgerMenu();
});

hamburgerClose.addEventListener('click', () => {
  closeBurgerMenu();
});