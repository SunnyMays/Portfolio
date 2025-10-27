// Navbar Hide on Scroll
let prevScroll = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (prevScroll < currentScroll && currentScroll > 100) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  prevScroll = currentScroll;
});

// Scroll to top
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});
scrollBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// Dark / Light Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "Light"
    : "Dark";
});

// Fade-in Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll(".fade-in, .slide-up").forEach((el) => observer.observe(el));

// Fade Slideshow (4 รูป)
const slides = document.querySelectorAll(".fade-img");
let index = 0;
setInterval(() => {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  index = (index + 1) % slides.length;
}, 3000);
