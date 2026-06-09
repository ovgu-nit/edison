(function () {
  "use strict";

  var STORAGE_KEY = "edisonPreferredLanguage";
  var EXPLICIT_SELECTION_KEY = "edisonLanguageExplicitSelection";

  function setGoogTransCookie(lang) {
    var value = "/en/" + lang;
    var cookieValue = "googtrans=" + value + ";path=/";
    document.cookie = cookieValue;
    // Some setups also check subdomain cookie.
    document.cookie = cookieValue + ";domain=" + window.location.hostname;
  }

  function getStoredLanguage() {
    var lang = localStorage.getItem(STORAGE_KEY);
    return lang === "de" || lang === "en" ? lang : null;
  }

  function hasExplicitSelection() {
    return localStorage.getItem(EXPLICIT_SELECTION_KEY) === "true";
  }

  function markActiveLanguage(lang) {
    var wrapper = document.querySelector("[data-lang-toggle-wrapper]");
    var toggle = document.querySelector("[data-lang-toggle]");
    var isGerman = lang === "de";

    if (wrapper) {
      wrapper.classList.toggle("is-de", isGerman);
    }

    if (toggle) {
      toggle.setAttribute("aria-pressed", isGerman ? "true" : "false");
      toggle.setAttribute("data-current-lang", lang);
    }
  }

  function applyLanguage(lang, shouldReload, isExplicitSelection) {
    if (isExplicitSelection) {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(EXPLICIT_SELECTION_KEY, "true");
    }

    setGoogTransCookie(lang);
    markActiveLanguage(lang);

    if (lang === "de") {
      loadGoogleTranslateScript();
    }

    if (shouldReload) {
      window.location.reload();
    }
  }

  function bindLanguageToggle() {
    var toggle = document.querySelector("[data-lang-toggle]");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      var currentLang = toggle.getAttribute("data-current-lang") || "en";
      var nextLang = currentLang === "de" ? "en" : "de";
      applyLanguage(nextLang, true, true);
    });
  }

  function initGoogleTranslateElement() {
    if (!window.google || !window.google.translate || !window.google.translate.TranslateElement) {
      return;
    }

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,de",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  }

  function loadGoogleTranslateScript() {
    if (document.getElementById("google-translate-script")) {
      return;
    }

    window.googleTranslateElementInit = initGoogleTranslateElement;

    var script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindLanguageToggle();

    var preferredLanguage = getStoredLanguage();
    var explicitSelection = hasExplicitSelection();

    if (explicitSelection && preferredLanguage === "de") {
      applyLanguage("de", false, false);
      return;
    }

    // English is the default until German is explicitly selected.
    setGoogTransCookie("en");
    markActiveLanguage("en");
  });
})();
