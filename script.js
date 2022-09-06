const burgerIcon = document.querySelector('.burger__menu');
const navigationMenu = document.querySelector('.navigation__list');

if (burgerIcon) {
  burgerIcon.addEventListener('click', () => {
    open();
  });
}

function open() {
  navigationMenu.classList.toggle('show');
  burgerIcon.classList.toggle('active');
}
