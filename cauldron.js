document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");

    if (!cartItems) return;

    let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

    function renderCauldron() {
        cartItems.innerHTML = "";

        let total = 0;
        const groupedItems = {};

        cauldron.forEach(item => {
            const price = Number(String(item.price).replace("$", ""));

            total += price;

            if (!groupedItems[item.name]) {
                groupedItems[item.name] = {
                    ...item,
                    price: price,
                    quantity: 1
                };
            } else {
                groupedItems[item.name].quantity++;
            }
        });

        Object.values(groupedItems).forEach(item => {
            cartItems.innerHTML += `
                <div class="cart-item">
                    ${
                        item.image
                            ? `<img src="${item.image}" alt="${item.name}">`
                            : ""
                    }

                    <div class="details">
                        <h3>${item.name}</h3>
                        <span>$${item.price.toFixed(2)}</span>

                        <div class="quantity-controls">
                            <button class="minus-btn" data-name="${item.name}">−</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="plus-btn" data-name="${item.name}">+</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const totalElement = document.getElementById("total-price");
        if (totalElement) {
            totalElement.textContent = total.toFixed(2);
        }

        document.querySelectorAll(".plus-btn").forEach(button => {
            button.addEventListener("click", () => {
                const itemName = button.dataset.name;

                const groupedItem = Object.values(groupedItems).find(
                    item => item.name === itemName
                );

                if (groupedItem) {
                    cauldron.push({
                        name: groupedItem.name,
                        price: groupedItem.price,
                        image: groupedItem.image
                    });

                    localStorage.setItem(
                        "cauldron",
                        JSON.stringify(cauldron)
                    );

                    renderCauldron();
                }
            });
        });

        document.querySelectorAll(".minus-btn").forEach(button => {
            button.addEventListener("click", () => {
                const itemName = button.dataset.name;

                const index = cauldron.findIndex(
                    item => item.name === itemName
                );

                if (index !== -1) {
                    cauldron.splice(index, 1);

                    localStorage.setItem(
                        "cauldron",
                        JSON.stringify(cauldron)
                    );

                    renderCauldron();
                }
            });
        });
    }

    renderCauldron();

    const clearButton = document.getElementById("clear-cauldron-btn");

if (clearButton) {
    clearButton.addEventListener("click", () => {
        localStorage.removeItem("cauldron");
        cauldron = [];
        renderCauldron();
    });
}

const conjureBtn = document.getElementById("conjureBtn");

if (conjureBtn) {
    conjureBtn.addEventListener("click", () => {
        if (cauldron.length === 0) {
            alert("Your Cauldron is empty!");
            return;
        }


        window.location.href = "conjuration.html";
    });
}
});