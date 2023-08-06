const products =[]; 

let Strawberry ={
  name: "Strawberries",
  price: 10,
  quantity: 0,
  productId: 1,
  image: src = "images/strawberry.jpg"
};
let Cherry=	{
  name: "Cherries",
  price: 6,
  quantity: 0,
  productId: 2,
  image: src = "images/cherry.jpg"
};
let Orange= {
  name: "Oranges",
  price: 10,
  quantity: 0,
  productId: 3,
  image: src = "images/orange.jpg"
};

products.push(Strawberry, Cherry, Orange);

const cart =[];

function addProductToCart(productId) {
    let product = products.find(product => product.productId === productId);
    product.quantity += 1;
  
    if (!cart.includes(product)) {
      cart.push(product)
    }
  }

function increaseQuantity(productId){
 for (let i = 0; i < cart.length; i++) {
  if (cart[i].productId === productId) {
    cart[i].quantity++;
   }
 }
 }

function decreaseQuantity(productId){
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      if(cart[i].quantity===1){
        removeProductFromCart(productId)
      }else {
        cart[i].quantity--;
      }
     }
   }}

function removeProductFromCart(productId){
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity =0;
      cart.splice(i,1);
     }
}}

function cartTotal() {
	let total = 0;
	for (const product of cart) {
    total += product.quantity * product.price;
	}
	return total;
}

function emptyCart() {
  for(i=0 ;i<=cart.length-1;i++){
    cart[i].quantity=0;
    cart.pop(cart[i]);
}}

let totalPaid =0;
function pay(amount){
   totalPaid+=amount;
    return  totalPaid - cartTotal();
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}