// Add product to cart
function addToCart(productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

function displayCart() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    totalDisplay.textContent = "Total: ₹0";
    return;
  }

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: ₹${total}`;
}

// Confirm order (clear cart)
function confirmOrder() {
  localStorage.removeItem('cart');
}

// Navigation functions
function goBack() {
  window.history.back();
}

function goToCart() {
  window.location.href = "cart.html";
}

function goToOrder() {
  window.location.href = "order.html";
}
