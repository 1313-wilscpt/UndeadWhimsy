// ======================
// Modal Functions
// ======================

function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// ======================
// Cauldron Functions
// ======================

function addToCauldron(name, price, image) {
    let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

    cauldron.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("cauldron", JSON.stringify(cauldron));

    updateCovenCounter();

    alert(`${name} has been added to the Cauldron!`);
}

function updateCovenCounter() {
    const cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent = `Coven: ${cauldron.length} items`;
    }
}

// ======================
// Product Buttons
// ======================

document.getElementById("Gnawbert").addEventListener("click", () => {
    addToCauldron("Gnawbert", "29.00", "Gnawbert.png");
});

document.getElementById("Mossy-Mort").addEventListener("click", () => {
    addToCauldron("Mossy Mort", "29.00", "MossyMort.png");
});

document.getElementById("Chomper-Chuck").addEventListener("click", () => {
    addToCauldron("Chomper Chuck", "29.00", "ChomperChuck.png");
});

document.getElementById("Pocket").addEventListener("click", () => {
    addToCauldron("Pocket Poltergeist", "15.00", "PocketPoltergeist.png");
});

document.getElementById("Patches-btn").addEventListener("click", () => {
    addToCauldron("Patches", "29.00", "Patches.png");
});

document.getElementById("lantern-len-btn").addEventListener("click", () => {
    addToCauldron("Lantern Len", "29.00", "LanternLen.png");
});

document.getElementById("rotty-rue-btn").addEventListener("click", () => {
    addToCauldron("Rotty Rue", "29.00", "RottyRue.png");
});

// ======================
// Initialize
// ======================

updateCovenCounter();
