document.addEventListener("DOMContentLoaded", () => {
    const lanternLenBtn = document.getElementById("lantern-len-btn");

    lanternLenBtn.addEventListener("click", () => {
        let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

        cauldron.push({
            name: "Lantern Len",
            price: 29.00,
            image: "LanternLen.png"
        });

        localStorage.setItem("cauldron", JSON.stringify(cauldron));

        alert("Lantern Len added to the Cauldron!");
    });

    const rottyRueBtn = document.getElementById("rotty-rue-btn");

    rottyRueBtn.addEventListener("click", () => {
        let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

        cauldron.push({
            name: "Rotty Rue",
            price: 29.00,
            image: "RottyRue.png"
        });

        localStorage.setItem("cauldron", JSON.stringify(cauldron));

        alert("Rotty Rue added to the Cauldron!");
    });
    const stitchPupBtn = document.getElementById("stitch-pup-btn");

stitchPupBtn.addEventListener("click", () => {
    let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

    cauldron.push({
        name: "Stitch",
        price: 19.00,
        image: "stitch.png"
    });

    localStorage.setItem("cauldron", JSON.stringify(cauldron));

    alert("Stitch Pup added to the Cauldron!");
});
const ghoulKittyBtn = document.getElementById("ghoul-kitty-btn");

ghoulKittyBtn.addEventListener("click", () => {
    let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

    cauldron.push({
        name: "Ghoul Kitty",
        price: 19.00,
        image: "GhoulKitty.png"
    });

    localStorage.setItem("cauldron", JSON.stringify(cauldron));

    alert("Ghoul Kitty added to the Cauldron!");
});
});
function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}