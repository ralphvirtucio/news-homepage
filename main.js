const hambugerBtn = document.querySelector('#hamburger_btn');
const hambugerCloseBtn = document.querySelector('#hamburger_btn--close');
const mobileMenu = document.querySelector('.mobile-menu');

hambugerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu-active');
});

hambugerCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu-active');
});
