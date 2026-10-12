document.addEventListener("DOMContentLoaded", () => {
    const PatchesBtn = document.getElementById("Patches-btn");

    PatchesBtn.addEventListener("click", () => {
        let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

        cauldron.push({
            name: "Patches",
            price: 29.00,
            image: "Patches.png"
        });

        localStorage.setItem("cauldron", JSON.stringify(cauldron));

        alert("Patches added to the Cauldron!");
    });
});
function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}