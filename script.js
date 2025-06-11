// Store products when "Add to Cart" is clicked
function addToCart(productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

// Display cart items on cart.html
function displayCart() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;
  cartList.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: ₹${total}`;
}

// Clear cart after order
function confirmOrder() {
  localStorage.removeItem('cart');
}
