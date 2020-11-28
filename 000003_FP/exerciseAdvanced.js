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

purchaseItem(emptyCart, buyItem, applyTax, addItemToCart);

function purchaseItem(user, item) {
  return { ...user, purchases: item };
}

function addItemToCart() {}

function applyTax() {}

function buyItem() {}

function emptyCart() {}
