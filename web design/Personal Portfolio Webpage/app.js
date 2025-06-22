//Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

// Charger le mode depuis localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

//Language Switching
const langSelect = document.getElementById("langSelect");
const translations = {
  en: {
    title: "My Portfolio",
    about: "About",
    projects: "Projects",
    contact: "Contact Us",
    hello: "Hey I am Ahmed Boutarfa",
    role: "a web developer",
    projectTitle: "These are some of my projects",
    showAll: "Show All >",
    faqTitle: "FAQ",
    faq1q: "What tech do you use?",
    faq1r: "I use HTML, CSS, JS, PHP, and SQL.",
    faq2q: "Do you work freelance?",
    faq2r: "Yes, I'm available for freelance projects.",
    timelineTitle: "Timeline",
    blogTitle: "Blog",
    blog1t: "Why I love building UI",
    blog1p: "Designing interactive experiences gives me joy and creativity.",
    blog2t: "Learning every day",
    blog2p: "Every line of code is a step toward mastery.",
  },
  fr: {
    title: "Mon Portfolio",
    about: "À propos",
    projects: "Projets",
    contact: "Contactez-nous",
    hello: "Salut je suis Ahmed Boutarfa",
    role: "développeur web",
    projectTitle: "Voici quelques projets",
    showAll: "Voir tout >",
    faqTitle: "FAQ",
    faq1q: "Quelles technologies utilisez-vous ?",
    faq1r: "J'utilise HTML, CSS, JS, PHP et SQL.",
    faq2q: "Travaillez-vous en freelance ?",
    faq2r: "Oui, je suis disponible pour des projets freelance.",
    timelineTitle: "Historique",
    blogTitle: "Blog",
    blog1t: "Pourquoi j'aime construire des interfaces",
    blog1p: "Créer des expériences interactives me rend heureux.",
    blog2t: "Apprendre chaque jour",
    blog2p: "Chaque ligne de code est un pas vers la maîtrise.",
  }
};

function translate(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Initial load
translate(langSelect.value);

langSelect.addEventListener("change", () => {
  translate(langSelect.value);
});

//Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

//Scroll Reveal Animations
const sections = document.querySelectorAll("section");

const revealOptions = {
  threshold: 0.15
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

sections.forEach(section => {
  section.classList.add("hidden");
  revealOnScroll.observe(section);
});
