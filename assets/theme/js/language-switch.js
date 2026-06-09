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

  function markActiveButton(lang) {
    var buttons = document.querySelectorAll("[data-lang-switch]");
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang-switch") === lang;
      btn.classList.toggle("btn-secondary", isActive);
      btn.classList.toggle("btn-outline-secondary", !isActive);
    });
  }

  function applyLanguage(lang, shouldReload, isExplicitSelection) {
    if (isExplicitSelection) {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(EXPLICIT_SELECTION_KEY, "true");
    }

    setGoogTransCookie(lang);
    markActiveButton(lang);

    if (lang === "de") {
      loadGoogleTranslateScript();
    }

    if (shouldReload) {
      window.location.reload();
    }
  }

  function bindSwitchButtons() {
    var buttons = document.querySelectorAll("[data-lang-switch]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang-switch");
        applyLanguage(lang, true, true);
      });
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
    bindSwitchButtons();

    var preferredLanguage = getStoredLanguage();
    var explicitSelection = hasExplicitSelection();

    if (explicitSelection && preferredLanguage === "de") {
      applyLanguage("de", false, false);
      return;
    }

    // English is the default until German is explicitly selected.
    setGoogTransCookie("en");
    markActiveButton("en");
  });
})();
