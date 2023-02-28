const menuEmail = document.querySelector('.nav-bar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.nav-bar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

//lista de productos
const productList =[];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649361530216-82XYXK0EY7301TMSEAS5/Sklar+Bikes+Super+Something+Steel+Gravel+Bike780.jpg?format=1500w',
})
productList.push({
  name: 'Pantalla',
  price: 400,
  image: 'https://m.media-amazon.com/images/I/61nwkFpUBLL._AC_SS450_.jpg',
})
productList.push({
  name: 'Computadora',
  price: 1000,
  image: 'https://sistemasyprogramas.com/8379-medium_default/computador-intel-dual-core-160ghz-4gb-ddr3-1tb-hdd-16-led.jpg',
})


function renderProducts(arr) {
  for (product of arr){
    const productCard = document.createElement ('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    //product = {name, price, image} -> product.image.
  
    const productInfo = document.createElement ('div');
    productInfo.classList.add('info-product');
  
    const productInfoDiv = document.createElement ('div');
  
    const productInfoPrice = document.createElement ('p');
    productInfoPrice.innerText = '$' + product.price;
    const productInfoName = document.createElement ('p');
    productInfoName.innerText = product.name;
  
    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoName);
  
    const productInfoFigure = document.createElement ('figure');
    const productInfoImgCart = document.createElement ('img');
    productInfoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productInfoImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  
    console.log(productImg);
  }
}

renderProducts(productList);


console.log('JS funcionando');//debugg