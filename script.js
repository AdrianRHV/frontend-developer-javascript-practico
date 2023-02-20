const menuEmail = document.querySelector('.nav-bar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.nav-bar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoppingCartMenu);

function toggleDesktopMenu() {
  console.log('Click');//debugg
  const isAsideClosed = aside.classList.contains('inactive');
  if (!isAsideClosed) {
    aside.classList.add('inactive')
    } 

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  console.log('Click');//debugg
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive')
    } 
  mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCartMenu() {
  console.log('Click');//debugg

  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
    } 
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive')
  }
    aside.classList.toggle('inactive');
}



console.log('JS funcionando');//debugg