// Smooth scroll for hero buttons and nav links
function smoothScrollTo(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  const top = target.offsetTop - 70; // account for sticky header
  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const selector = btn.getAttribute("data-scroll");
    if (selector) smoothScrollTo(selector);
  });
});

document.querySelectorAll(".uw-nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  });
});

// Simple lore switching
const loreTextEl = document.getElementById("lore-text");

const loreMap = {
  garden: {
    title: "The Undead Garden",
    text:
      "Once a peaceful patch of gnomes and flowers, the garden changed when a cursed seed cracked under a crooked halo. Now zombie gnomes dig, lurk, and glow among the moss, waiting to be adopted into new homes.",
  },
  hearth: {
    title: "Haunted Hearth",
    text:
      "In the dim light of a forgotten fireplace, plush ghosts and stitched pumpkins gathered around cold embers. The hearth remembers warmth, but now it glows with spectral candles and cozy hauntings.",
  },
  critters: {
    title: "Crypt Critters",
    text:
      "Deep beneath the garden, tiny paws and claws stitched themselves back together. Crypt Critters are resurrected companions, each with a seam that tells how they found their way back.",
  },
  wares: {
    title: "Whimsy Wares",
    text:
      "Pins, stickers, and apparel carry the mark of Undead Whimsy. Every piece is a small charm of cozy horror, meant to travel with you and quietly haunt your everyday life.",
  },
};

function setLore(key) {
  const lore = loreMap[key];
  if (!lore || !loreTextEl) return;
  loreTextEl.innerHTML = `
    <h3>${lore.title}</h3>
    <p>${lore.text}</p>
  `;
}

document.querySelectorAll(".uw-lore-pick, .uw-view-lore").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-lore");
    if (key) setLore(key);
    smoothScrollTo("#lore");
  });
});

// Simple cart counter
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
const clearCartBtn = document.getElementById("clear-cart");

function updateCartText() {
  if (!cartCountEl) return;
  cartCountEl.textContent = `Coven: ${cartCount} item${cartCount === 1 ? "" : "s"}`;
}

document.querySelectorAll(".uw-add-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount += 1;
    updateCartText();
    btn.classList.add("uw-added");
    btn.textContent = "Added to Coven";
    setTimeout(() => {
      btn.classList.remove("uw-added");
      btn.textContent = "Add to Coven";
    }, 1200);
  });
});

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", () => {
    cartCount = 0;
    updateCartText();
  });
}

// Newsletter (demo only)
const newsletterForm = document.querySelector(".uw-newsletter");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector("input[type='email']");
    if (!emailInput || !emailInput.value.trim()) return;
    alert("Welcome to the Undead Whimsy Coven, " + emailInput.value + "!");
    emailInput.value = "";
  });
}

// Initialize
updateCartText();
