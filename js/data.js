var listProduct = [
  {
    id: 'cake01',
    image: 'images/cheese_cake.jpg',
    name: 'Chesse Cake',
    price: 25000,
  },
  {
    id: 'cake02',
    image: 'images/Caracpie.jpg',
    name: 'Carac Pie',
    price: 20000,
  },
  {
    id: 'cake03',
    image: 'images/BlackForest.jpg',
    name: 'Black Forest',
    price: 30000,
  },
  {
    id: 'cake04',
    image: 'images/Limburg_Pie.jpg',
    name: 'Limburg Pie',
    price: 15000,
  },
  {
    id: 'cake05',
    image: 'images/Mochi.jpg',
    name: 'Mochi',
    price: 10000,
  },
  {
    id: 'cake06',
    image: 'images/Pandan_cake.jpg',
    name: 'Pandan cake',
    price: 36000,
  },
  {
    id: 'cake07',
    image: 'images/Pavlova.jpg',
    name: 'Pavlova',
    price: 28000,
  },
  {
    id: 'cake08',
    image: 'images/Sachertorte.jpg',
    name: 'Sachertorte',
    price: 35000,
  },
  {
    id: 'cake09',
    image: 'images/SwedishPrincess.jpg',
    name: 'Swedish Princess',
    price: 15000,
  },
  {
    id: 'cake10',
    image: 'images/Tapioca.jpg',
    name: 'Tapioca',
    price: 20000,
  },
  {
    id: 'cake11',
    image: 'images/Tiramisu.jpg',
    name: 'Tiramisu',
    price: 32000,
  },
  {
    id: 'cake12',
    image: 'images/Twix-cake.jpg',
    name: 'Twix Cake',
    price: 45000,
  },
]

function gotoViewCart(){
  var shoppingCartLink = document.getElementById('shopping_cart');
  shoppingCartLink.addEventListener('click',function(){
    window.location = "cart.html";
  });
}

function gotoHome() {
  document.getElementById('page-logo').addEventListener('click',function(){
    window.location = "product.html";
  });
}
