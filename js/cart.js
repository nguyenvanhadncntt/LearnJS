window.onload = main;
var cart = (localStorage.getItem('list-product') === null) ? [] : JSON.parse(localStorage.getItem('list-product'));

function main() {
  showCartToview();
  addEventToListButton();
  gotoViewCart();
  gotoHome();
}

function showCartToview() {
  var tbodyTag = document.getElementById('tbody-listProduct');
  var html = '';
  cart.forEach(function (element, index) {
    html = html + '<tr>' +
      '<td>' +
      '<img src="' + element.image + '" alt="' + element.name + '"/>' +
      '</td>' +
      '<td><p>' + element.name + '</p></td>' +
      '<td>' + element.price + '</td>' +
      '<td><div><p>1</p></div></td>' +
      '<td><button class="btnRemove" cakeId="' + element.id + '">Remove</button></td></tr>';
  });
  tbodyTag.innerHTML = html;
}

function addEventToListButton() {
  var removeButtonList = document.getElementsByClassName('btnRemove');
  for (var i = 0; i < removeButtonList.length; i++) {
    var cakeId = removeButtonList[i].getAttribute('cakeId');
    removeButtonList[i].addEventListener('click', removeProductFromCart(cakeId));
  }
}

function removeProductFromCart(cakeId) {
  return function () {
    console.log(cakeId);
    var index = getIndexOfProductInCart(cakeId);
    console.log(index);
    cart.splice(index, 1);
    localStorage.setItem('list-product', JSON.stringify(cart));
    showCartToview();
    addEventToListButton();
  }
}

function getIndexOfProductInCart(cakeId) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === cakeId) {
      return i;
    }
  }
  return -1;
}
