document.addEventListener("DOMContentLoaded", () => {
const cartItems = document.getElementById("cart-items");

if (!cartItems) return;

const cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

cartItems.innerHTML = "";

    cauldron.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
               <img src="${item.image}" alt="${item.name}">
                <div class="details">
                    <h3>${item.name}</h3>
                    <span>$${item.price.toFixed(2)}</span>
                </div>
            </div>
        `;
    });
    const clearBtn = document.getElementById("clear-cauldron-btn");

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("cauldron");
    location.reload();
});
});