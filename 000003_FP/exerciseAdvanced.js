// Implement  a cart feature:
//     1. Add items to cart.
//     2. Add 3% tax to item in cart
//     3. Buy item : cart --> purchases
//     4. Empty cart

// Bonus:
//  1. Accept refunds
//  2. Track user history

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
};

const history = [];

const compose = (f, g) => (...args) => f(g(...args));
const pipe = (f, g) => (...args) => g(f(...args));

const purchaseItem = (...fns) => fns.reduce(compose);
const purchaseItem2 = (...fns) => fns.reduce(pipe);

// purchaseItem2(
//   addItemToCart,
//   applyTaxToItems,
//   buyItem,
//   emptyUserCart
// )(user, { name: 'laptop', price: 60 });

console.log(
  purchaseItem(
    emptyUserCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
  )(user, { name: 'laptop', price: 50 })
);

function addItemToCart(user, item) {
  history.push(user);
  const updatedCart = [...user.cart, item];
  // return Object.assign({}, user, { cart: updatedCart });
  return { ...user, cart: updatedCart };
}

function applyTaxToItems(user) {
  history.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  // return Object.assign({}, user, { cart: updatedCart });
  return { ...user, cart: updatedCart };
}

function buyItem(user) {
  history.push(user);
  const itemsInCart = user.cart;
  // return Object.assign({}, user, { purchases: itemsInCart });
  return { ...user, purchases: itemsInCart };
}

function emptyUserCart(user) {
  history.push(user);
  // return Object.assign({}, user, { cart: [] });
  return { ...user, cart: [] };
}

console.log(history);

function refundItem() {}

function getUserState() {}

function goBack() {}

function goForward() {}

//RAMBDA or LODASH
