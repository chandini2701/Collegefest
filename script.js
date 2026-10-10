// ==============================
// ANNIVERSARY COUNTDOWN TIMER
// ==============================

// Change this date according to your event
const eventDate = new Date("February 20, 2027 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();

  const distance = eventDate - now;

  if (distance <= 0) {
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    document.querySelector(".countdown h2").innerHTML =
      "🎉 Happy Anniversary 🎉";

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

// ==============================
// SMOOTH SCROLL
// ==============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ==============================
// GALLERY HOVER EFFECT
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-12px) scale(1.03)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// ==============================
// REGISTER BUTTON
// ==============================

const registerForm = document.querySelector(".register-form");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(
      "🎉 Registration Successful!\n\nThank you for registering for the Annual Anniversary Celebration.",
    );

    this.reset();
  });
}

// ==============================
// HEADER SHADOW
// ==============================

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// ==============================
// SCROLL ANIMATION
// ==============================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";

      entry.target.style.transform = "translateY(0)";
    }
  });
});

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.style.opacity = "0";

  section.style.transform = "translateY(50px)";

  section.style.transition = "1s";

  observer.observe(section);
});

// ==============================
// LIVE CLOCK
// ==============================

function liveClock() {
  const now = new Date();

  const time = now.toLocaleTimeString();

  document.title = "Anniversary 2026 | " + time;
}

setInterval(liveClock, 1000);
