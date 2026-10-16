const conjurationItems = document.getElementById("conjurationItems");
const totalAmount = document.getElementById("totalAmount");

conjurationItems.classList.add("shop-container");

const cart = JSON.parse(localStorage.getItem("cauldron")) || [];

let total = 0;

cart.forEach(item => {
    total += Number(item.price);

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.classList.add("product");

    itemDiv.innerHTML = `
        ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
        <h3>${item.name}</h3>
        <p>Price: $${Number(item.price).toFixed(2)}</p>
    `;

    conjurationItems.appendChild(itemDiv);
});

totalAmount.textContent = `$${total.toFixed(2)}`;

document.getElementById("confirmConjuration").addEventListener("click", () => {

  const orderData = {
    name: document.getElementById("shipName").value,
    address: document.getElementById("shipAddress").value,
    city: document.getElementById("shipCity").value,
    state: document.getElementById("shipState").value,
    zip: document.getElementById("shipZip").value,
    email: document.getElementById("shipEmail").value,

    cardName: document.getElementById("cardName").value,
    cardNumber: document.getElementById("cardNumber").value,
    expDate: document.getElementById("expDate").value,
    cvv: document.getElementById("cvv").value
};

const customerName = document.getElementById("shipName").value;
const address = document.getElementById("shipAddress").value;
const city = document.getElementById("shipCity").value;
const state = document.getElementById("shipState").value;
const zip = document.getElementById("shipZip").value;
const email = document.getElementById("shipEmail").value;

if (!customerName || !address || !city || !state || !zip || !email) {
    alert("Please complete all shipping information.");
    return;
}
orderData.items = cart;
console.log("Sending order:", orderData);

    fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        console.log("Response status:", response.status);

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        return response.json();
    })
.then(data => {
    console.log("Order saved:", data);

    if (data.orderId) {
        localStorage.setItem("orderNumber", data.orderId);
    }

    localStorage.removeItem("cauldron");

    window.location.href = "confirmation.html";
})
.catch(error => {
    console.error("Order error:", error);
    alert("Failed to save order. Check the browser console for details.");
});
});