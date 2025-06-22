// ScrollReveal
ScrollReveal().reveal('.reveal', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: true
});

// Dark mode
const darkBtn = document.getElementById('darkModeBtn');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

//botton menu
const toggleBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Language switch
const lang = {
  en: {
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    headline: "Stay Hydrated, Stay Healthy",
    subheadline: "The smart bottle that tracks your hydration",
    buyNow: "Buy Now",
    feature1: "Bluetooth Tracking",
    aboutTitle: "About AquaTrack",
    mission: "Our Mission",
    missionText: "AquaTrack helps people stay hydrated with the power of smart technology. We aim to build healthier habits through data and daily support.",
    tech: "Smart Technology",
    techText: "Using integrated sensors and mobile syncing, AquaTrack tracks water intake, reminds you when to drink, and helps you reach your goals.",
    feature2: "App Connected",
    feature3: "Glow Reminder",
    feature4: "24h Cold Water",
    faqTitle: "Frequently Asked Questions",
    faq1q: "How does the hydration reminder work?",
    faq1a: "The bottle glows gently based on your hydration goals and time of day.",
    faq2q: "Can I wash it?",
    faq2a: "Yes, the bottle is water-resistant and the electronic base is detachable.",
    faq3q: "Does it work without the app?",
    faq3a: "Basic glow reminders work offline. Full tracking needs the app.",
    timelineTitle: "Our Journey",
    t2022: "Conceptualization and prototyping phase.",
    t2023: "Beta testing with 1000+ users.",
    t2024: "Official launch and global shipping.",
    t2025: "App version 2.0 and AI hydration coach.",
    blogTitle: "Latest News",
    blog1t: "Hydration & Productivity",
    blog1c: "Discover how staying hydrated can boost your concentration and energy at work.",
    blog2t: "Top 5 Smart Bottles in 2025",
    blog2c: "AquaTrack is ranked among the best smart bottles by tech reviewers.",
    proDetails: "App, tracking, customization",
    basicDetails: "Essential features only",
    addToCart: "Add to Cart",
    submit: "Submit"
  },
  fr: {
    features: "Fonctionnalités",
    pricing: "Prix",
    contact: "Contact",
    headline: "Restez Hydraté, Restez en Santé",
    subheadline: "La bouteille intelligente qui suit votre hydratation",
    buyNow: "Acheter",
    aboutTitle: "À propos de AquaTrack",
    mission: "Notre Mission",
    missionText: "AquaTrack aide les gens à rester hydratés grâce à la technologie intelligente. Notre objectif est d’encourager des habitudes saines à l’aide de données et d’un suivi quotidien.",
    tech: "Technologie Intelligente",
    techText: "Grâce à des capteurs intégrés et une synchronisation mobile, AquaTrack suit votre consommation d’eau, vous rappelle de boire, et vous aide à atteindre vos objectifs.",
    feature1: "Suivi Bluetooth",
    feature2: "Application Mobile",
    feature3: "Rappel lumineux",
    feature4: "Eau fraîche 24h",
    faqTitle: "Questions Fréquentes",
    faq1q: "Comment fonctionne le rappel d’hydratation ?",
    faq1a: "La bouteille s’allume doucement en fonction de vos objectifs et de l’heure de la journée.",
    faq2q: "Puis-je la laver ?",
    faq2a: "Oui, elle est résistante à l’eau et la base électronique est détachable.",
    faq3q: "Fonctionne-t-elle sans l’application ?",
    faq3a: "Les rappels de base fonctionnent sans connexion. Le suivi complet nécessite l’application.",
    timelineTitle: "Notre Histoire",
    t2022: "Phase de conception et prototypes.",
    t2023: "Tests beta avec plus de 1000 utilisateurs.",
    t2024: "Lancement officiel et livraison mondiale.",
    t2025: "Version 2.0 de l'app et coach IA d'hydratation.",
    blogTitle: "Dernières Nouvelles",
    blog1t: "Hydratation & Productivité",
    blog1c: "Découvrez comment rester hydraté peut améliorer votre concentration et énergie.",
    blog2t: "Top 5 des bouteilles intelligentes en 2025",
    blog2c: "AquaTrack fait partie des meilleures bouteilles selon les experts tech.",
    proDetails: "Application, suivi, personnalisation",
    basicDetails: "Fonctionnalités essentielles",
    addToCart: "Ajouter au panier",
    submit: "Envoyer"
  }
};

document.getElementById("langSelect").addEventListener("change", (e) => {
  const selected = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = lang[selected][key];
  });
});
