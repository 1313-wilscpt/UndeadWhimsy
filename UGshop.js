const gnawbertButton = document.getElementById("Gnawbert");

gnawbertButton.addEventListener("click", () => {
    let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

    cauldron.push({
        name: "Gnawbert",
        price: 29.00,
        image: "Gnawbert.png"
    });

    localStorage.setItem("cauldron", JSON.stringify(cauldron));

    alert("Gnawbert has been added to the Cauldron!");
});
document.getElementById("Mossy-Mort").addEventListener("click", function () {

    let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

    cauldron.push({
        name: "Mossy Mort",
        price: 29.00,
         image: "MossyMort.png"
    });

    localStorage.setItem("cauldron", JSON.stringify(cauldron));

    alert("Mossy Mort added to the Cauldron!");
});
function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}