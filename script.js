function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("sakura");
  petal.innerHTML = "&#10047;"; // Fleur stylisée

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 4 + Math.random() * 6 + "s";
  petal.style.fontSize = 12 + Math.random() * 16 + "px";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

// Générer un nouveau pétale toutes les 300 ms
setInterval(createPetal, 300);

// Bouton scroll vers le haut
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  burger.classList.toggle("open");
});

// Fermer le menu après clic
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    burger.classList.remove("open");
  });
});

// Scroll fluide vers les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

