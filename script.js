const langSwitcher = document.getElementById("language-switcher");

const translations = {
  bn: {
    logo: "দারুল ঈমান নূরানী একাডেমী",
    home: "হোম",
    admission: "ভর্তি",
    features: "বৈশিষ্ট্য",
    results: "রেজাল্ট",
    contact: "যোগাযোগ",
    about: "সম্পর্কে",
    "home-heading": "দারুল ঈমান নূরানী একাডেমিতে আপনাকে স্বাগতম।",
    "admission-heading": "ভর্তি বিজ্ঞপ্তি",
    "admission-text": "এক এপ্রিল থেকে ৩০ এপ্রিল পর্যন্ত ভর্তি চলবে।",
    "features-heading": "আমাদের বৈশিষ্ট্য",
    "features-text": "দারুল ঈমান নূরানী একাডেমী একটি খালেস দ্বীনি প্রতিষ্ঠান...",
    "results-heading": "রেজাল্ট",
    "results-text": "অতি শীঘ্রই রেজাল্ট প্রকাশিত হবে।",
    "contact-heading": "যোগাযোগ",
    "about-heading": "আমাদের সম্পর্কে",
    "about-text": "দারুল ঈমান নূরানী একাডেমী একটি খালেস দ্বীনি শিক্ষা প্রতিষ্ঠান..."
  },
  en: {
    logo: "Darul Imaan Noorani Academy",
    home: "Home",
    admission: "Admission",
    features: "Features",
    results: "Results",
    contact: "Contact",
    about: "About",
    "home-heading": "Welcome to Darul Iman Noorani Academy.",
    "admission-heading": "Admission Notice",
    "admission-text": "Admissions will continue from April 1 to April 30.",
    "features-heading": "Our Features",
    "features-text": "Darul Iman Noorani Academy is a purely religious institution...",
    "results-heading": "Results",
    "results-text": "The results will be published very soon.",
    "contact-heading": "Contact",
    "about-heading": "About Us",
    "about-text": "Darul Iman Noorani Academy is a purely religious educational institution..."
  }
};

langSwitcher.addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
});
