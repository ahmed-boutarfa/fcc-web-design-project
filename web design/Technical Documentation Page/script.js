const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const openBtn = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");
const navbar = document.getElementById("navbar");

openBtn.addEventListener("click", () => {
  navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
});