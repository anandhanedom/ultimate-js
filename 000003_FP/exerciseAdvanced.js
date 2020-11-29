const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
  history: [],
};

// Implement  a cart feature:
//     1. Add items to cart.
//     2. Add 3% tax to item in cart
//     3. Buy item : cart --> purchases
//     4. Empty cart

// Bonus:
//  1. Accept refunds
//  2. Track user history

//Compose
const compose = (f, g) => (...args) => f(g(...args));

//Call
console.log(
  purchaseItem(
    emptyCart,
    buyItem,
    applyTax,
    addItemToCart
  )(user, { name: 'Laptop', price: 200 })
);

//Functions
function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  const updatedCart = [...user.cart, item];

  return { ...user, cart: updatedCart };
}

function applyTax(user) {
  return user;
}

function buyItem(user) {
  return user;
}

function emptyCart() {}
