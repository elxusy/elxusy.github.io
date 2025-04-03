function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = cart.length > 0 ? cart.map(p => `<p>${p.name} - ${p.price} руб.</p>`).join("") : "<p>Корзина пуста</p>";
}

function checkout() {
    localStorage.removeItem("cart");
    alert("Заказ оформлен!");
    loadCart();
}

if (document.getElementById("cart")) {
    loadCart();
}
