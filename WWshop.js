const PocketPoltergeistButton = document.getElementById("Pocket");

PocketPoltergeistButton.addEventListener("click", () => {
    let cauldron = JSON.parse(localStorage.getItem("cauldron")) || [];

    cauldron.push({
        name: "Pocket Poltergeist",
        price: 15.00,
        image: "PocketPoltergeist.png"
    });

    localStorage.setItem("cauldron", JSON.stringify(cauldron));

    alert("Pocket Poltergeist has been added to the Cauldron!");
});

function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}