const ordersContainer = document.getElementById("ordersContainer");

fetch("http://localhost:3000/api/orders")
    .then(response => response.json())
    .then(orders => {

        ordersContainer.innerHTML = "";

        orders.forEach(order => {

            let itemsHtml = "";

            order.items.forEach(item => {
                itemsHtml += `
                    <div class="product">
                        ${item.image ? `<img src="${item.image}" class="product-image">` : ""}
                        <h4>${item.name}</h4>
                        <p>$${Number(item.price).toFixed(2)}</p>
                    </div>
                `;
            });

            ordersContainer.innerHTML += `
                <div class="admin-order">
                    <h2>Order #${order.id}</h2>

                    <p><strong>Name:</strong> ${order.name}</p>
                    <p><strong>Email:</strong> ${order.email}</p>
                    <p><strong>Address:</strong> ${order.address}</p>

                    <div class="shop-container">
                        ${itemsHtml}
                    </div>
                </div>
            `;
        });

    })
    .catch(error => {
        console.error(error);
        ordersContainer.innerHTML =
            "<p>Unable to load orders.</p>";
    });