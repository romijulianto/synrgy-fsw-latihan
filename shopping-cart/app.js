const productButtons = document.querySelectorAll('.add-to-cart');
const cart = document.getElementById('cart');
const cartTotal = document.getElementById('cart-total');
const inputPromoCode = document.getElementById('promo-code');
const cartItems = [];

// promo
const promo = [
  {
    label: 'DISC10',
    value: 0.1,
  },
  {
    label: 'DISC50',
    value: 0.5,
  },
  {
    label: 'DISC75',
    value: 0.75,
  },
];

productButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  displayCart();
}

function displayCart() {}
