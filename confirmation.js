const orderNumber = localStorage.getItem("orderNumber");

document.getElementById("orderNumber").textContent =
    orderNumber || "Unknown";

const orderedItems = document.getElementById("orderedItems");

if (!orderNumber) {
    orderedItems.innerHTML = "<p>No order found.</p>";
} else {

    fetch(`http://localhost:3000/api/orders/${orderNumber}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Order not found");
            }
            return response.json();
        })
        .then(order => {

            let total = 0;

            orderedItems.innerHTML = order.items.map(item => {

                total += Number(item.price);

                return `
                    <div class="product">
                       ${item.image ? `<img src="${item.image}" alt="${item.name}" class="product-image">` : ""}
                        <h3>${item.name}</h3>
                        <p>$${Number(item.price).toFixed(2)}</p>
                    </div>
                `;
            }).join("");

            orderedItems.innerHTML += `
                <div class="grand-total">
                    Grand Total: $${total.toFixed(2)}
                </div>
            `;
        })
        .catch(error => {
            console.error(error);
            orderedItems.innerHTML =
                "<p>Unable to load order details.</p>";
        });

}