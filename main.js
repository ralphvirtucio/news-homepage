const hamburgerButton = document.querySelector('#hamburger_btn');
const hambugerCloseButton = document.querySelector('#hamburger_btn--close');
const mobileMenu = document.querySelector('.nav');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu-inactive');
});

hambugerCloseButton.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu-inactive');
});
