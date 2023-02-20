const menuEmail = document.querySelector('.nav-bar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}