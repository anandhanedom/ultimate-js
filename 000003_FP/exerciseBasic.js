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

function addItemToCart(item) {
  if (item) {
    user.cart.push(item);
  } else console.log('Please provide an item');
}

function mrp(arr) {
  arr.map((item) => (item.price = item.price + item.price * 0.03));
}

function buyItem() {
  user.purchases = [...user.cart];
}

function emptyCart() {
  user.cart = [];
}

// Bonus:
//  1. Accept refunds
//  2. Track user history
