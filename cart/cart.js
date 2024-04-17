// Get product buttons and cart items list
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');

// Get checkout and order confirmation sections
const checkoutSection = document.querySelector('.checkout-section');
const orderConfirmation = document.querySelector('.order-confirmation');

// Get checkout and place order buttons
const checkoutBtn = document.querySelector('.checkout-btn');
const placeOrderBtn = document.querySelector('.place-order');

// Cart array to store added items
let cart = [];

// Add to cart functionality
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    addToCart(product);
    updateCartUI();
  });
});

// Add item to cart
function addToCart(product) {
  if (!cart.includes(product)) {
    cart.push(product);
  }
}

// Update cart UI
function updateCartUI() {
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItemsList.appendChild(li);
  });
}

// Checkout functionality
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 4) {
    checkoutSection.style.display = 'block';
  } else {
    alert('Please add all 4 products to the cart before proceeding to checkout.');
  }
});

// Place order functionality
placeOrderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const addressInput = document.getElementById('address');

  if (nameInput.value && addressInput.value && cart.length === 4) {
    checkoutSection.style.display = 'none';
    orderConfirmation.style.display = 'block';
    cart = [];
    updateCartUI();
  } else {
    alert('Please fill in all the required fields and add all 4 products to the cart.');
  }
});