// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Hero buttons
const getStartedBtn = document.querySelector(".primary");
const viewWorkBtn = document.querySelector(".secondary");

getStartedBtn.addEventListener("click", () => {
  alert("Contact us via WhatsApp or Email!");
});

viewWorkBtn.addEventListener("click", () => {
  alert("Portfolio coming soon!");
});

// Simple scroll animation for cards
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.5s ease";
  const getStartedBtn = document.querySelector(".primary");

getStartedBtn.addEventListener("click", () => {
  window.open("https://wa.me/919150610118", "_blank");
  document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});
});
});