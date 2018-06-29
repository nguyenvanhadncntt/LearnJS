window.onload = main;
var listButton = document.getElementsByClassName('btnAddToCart');
var cart = (localStorage.getItem('list-product') === null) ? [] : JSON.parse(localStorage.getItem('list-product'));
function main() {
  showListProductToView();
  addEventListButton();
  gotoViewCart();
  gotoHome();
}
function showListProductToView() {
  var listProductItem = '';
  listProduct.forEach(function (element, index) {
    listProductItem = listProductItem + '<li class="product-item">' +
      '<div class="product-content">' +
      '<img src="' + element.image + '" alt="' + element.name + '"/>' +
      '<h3>' + element.name + '</h3>' +
      '<p>Price: <strong>' + element.price + '</strong></p>' +
      '<button class="btnAddToCart text-uppercase" cakeId="' + element.id + '" >add to cart</button>' +
      '</di></li>';
  });
  document.getElementById('product-list').innerHTML = listProductItem;
}

function addEventListButton() {
  for (var i = 0; i < listButton.length; i++) {
    var cakeId = listButton[i].getAttribute('cakeId');
    var item = getProductById(cakeId);
    if (checkItemExistInCart(item)) {
      listButton[i].disabled = true;
    }
    else {
      addEventClickToButton(listButton[i], item);
    }
  }
}

function addEventClickToButton(btn, item) {
  btn.addEventListener('click', function () {
    cart.push(item);
    localStorage.setItem('list-product', JSON.stringify(cart));
    this.disabled = true;
  });
}

function getProductById(productId) {
  var item;
  listProduct.forEach(function (element, index) {
    if (element.id === productId) {
      item = element;
    }
  });
  return item;
}

function checkItemExistInCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id) {
      return true;
    }
  }
  return false;
}
