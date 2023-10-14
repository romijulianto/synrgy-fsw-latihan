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
  const productName = event.target.getAttribute('data-name');
  const productPrice = parseFloat(event.target.getAttribute('data-price'));
  cartItems.push({ name: productName, price: productPrice });
  displayCart();
}

function displayCart() {
  cart.innerHTML = '';

  let total = 0;
  cartItems.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
    cart.appendChild(cartItem);
    total += item.price;
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

inputPromoCode.addEventListener('input', applyPromoCode);

function applyPromoCode() {
  const code = inputPromoCode.value.toUpperCase();
  const promoItem = promo.find((item) => item.label === code);

  if (promoItem) {
    const discountedTotal = cartItems.reduce((acc, item) => acc + item.price, 0) * (1 - promoItem.value);
    cartTotal.textContent = `$${discountedTotal.toFixed(2)}`;
  }
}
displayCart();

function subTotalCart() {
  // jumlah total price dari data price product
}

function totalCart() {
  // total harga setelah discount
}