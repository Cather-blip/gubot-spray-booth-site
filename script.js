const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");

const languageOptions = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "ru", label: "Русский" },
  { code: "it", label: "Italiano" },
  { code: "zh-CN", label: "中文" },
];

const getTranslateLanguage = () => {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith("googtrans="));

  if (!cookie) {
    return "en";
  }

  const value = decodeURIComponent(cookie.split("=")[1] || "");
  const parts = value.split("/");
  return parts[2] || "en";
};

const setTranslateCookie = (languageCode) => {
  const expires = "Fri, 31 Dec 9999 23:59:59 GMT";
  const value = `/en/${languageCode}`;
  document.cookie = `googtrans=${value}; expires=${expires}; path=/`;

  if (window.location.hostname) {
    document.cookie = `googtrans=${value}; expires=${expires}; path=/; domain=${window.location.hostname}`;
  }
};

const clearTranslateCookie = () => {
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

  if (window.location.hostname) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
  }
};

const loadGoogleTranslate = () => {
  if (document.querySelector("script[data-google-translate]")) {
    return;
  }

  if (!document.getElementById("google_translate_element")) {
    const translateElement = document.createElement("div");
    translateElement.id = "google_translate_element";
    document.body.appendChild(translateElement);
  }

  window.googleTranslateElementInit = () => {
    if (!window.google || !window.google.translate) {
      return;
    }

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,es,de,fr,ru,it,zh-CN",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  const translateScript = document.createElement("script");
  translateScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  translateScript.async = true;
  translateScript.dataset.googleTranslate = "true";
  document.head.appendChild(translateScript);
};

const setupLanguageSwitcher = () => {
  const quickLinks = document.querySelector(".topbar__quick");

  if (!quickLinks || quickLinks.querySelector(".language-switcher")) {
    return;
  }

  const currentLanguage = getTranslateLanguage();
  const switcher = document.createElement("label");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", "Choose website language");
  switcher.innerHTML = '<i class="fa-solid fa-globe" aria-hidden="true"></i>';

  const select = document.createElement("select");
  select.setAttribute("aria-label", "Choose website language");

  languageOptions.forEach((language) => {
    const option = document.createElement("option");
    option.value = language.code;
    option.textContent = language.label;
    select.appendChild(option);
  });

  select.value = languageOptions.some((language) => language.code === currentLanguage)
    ? currentLanguage
    : "en";

  select.addEventListener("change", () => {
    if (select.value === "en") {
      clearTranslateCookie();
    } else {
      setTranslateCookie(select.value);
    }

    window.location.reload();
  });

  switcher.appendChild(select);
  quickLinks.insertBefore(switcher, quickLinks.firstChild);

  if (select.value !== "en") {
    loadGoogleTranslate();
  }
};

setupLanguageSwitcher();

const productModelSelect = document.querySelector("#productModelSelect");

if (productModelSelect) {
  productModelSelect.addEventListener("change", () => {
    const target = productModelSelect.value;
    if (target) {
      window.location.hash = target;
    }
  });

  const syncProductModelSelect = () => {
    if (!window.location.hash) {
      productModelSelect.value = "#product-catalog";
      return;
    }

    const matchingOption = Array.from(productModelSelect.options).find(
      (option) => option.value === window.location.hash
    );

    productModelSelect.value = matchingOption ? matchingOption.value : "#product-catalog";
  };

  syncProductModelSelect();
  window.addEventListener("hashchange", syncProductModelSelect);
}

const requestedModel = new URLSearchParams(window.location.search).get("model");
const quoteSolutionSelect = document.querySelector('select[name="solution"]');

if (requestedModel && quoteSolutionSelect) {
  const matchingModel = Array.from(quoteSolutionSelect.options).find(
    (option) => option.value === requestedModel || option.textContent.trim() === requestedModel
  );

  if (matchingModel) {
    quoteSolutionSelect.value = matchingModel.value;
  }
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const scrollToCurrentHash = () => {
  if (!window.location.hash) {
    return;
  }

  const target = document.querySelector(window.location.hash);
  if (target) {
    window.setTimeout(() => target.scrollIntoView({ block: "start" }), 80);
  }
};

window.addEventListener("load", scrollToCurrentHash);
window.addEventListener("hashchange", scrollToCurrentHash);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", scrollToCurrentHash);
} else {
  scrollToCurrentHash();
}

const preview = document.querySelector("#galleryPreview");
const previewCaption = document.querySelector("#galleryPreviewCaption");
const galleryButtons = document.querySelectorAll(".gallery__item");

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    galleryButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    if (preview) {
      preview.src = button.dataset.image;
      preview.alt = button.dataset.alt || preview.alt;
    }
    if (previewCaption && button.dataset.title) {
      previewCaption.textContent = button.dataset.title;
    }
  });
});

const exhibitionTabs = Array.from(document.querySelectorAll(".exhibition-tab"));
const exhibitionPanels = Array.from(document.querySelectorAll(".exhibition-panel"));

const activateExhibition = (tabButton) => {
  const targetId = tabButton.dataset.exhibitionTarget;

  exhibitionTabs.forEach((item) => item.classList.remove("is-active"));
  exhibitionPanels.forEach((panel) => panel.classList.remove("is-active"));
  tabButton.classList.add("is-active");

  const targetPanel = document.getElementById(targetId);
  if (targetPanel) {
    targetPanel.classList.add("is-active");
  }
};

let exhibitionAutoTimer;

const startExhibitionAutoSwitch = () => {
  if (exhibitionTabs.length < 2) {
    return;
  }

  window.clearInterval(exhibitionAutoTimer);
  exhibitionAutoTimer = window.setInterval(() => {
    const currentIndex = exhibitionTabs.findIndex((item) => item.classList.contains("is-active"));
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % exhibitionTabs.length : 0;
    activateExhibition(exhibitionTabs[nextIndex]);
  }, 5000);
};

exhibitionTabs.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    activateExhibition(tabButton);
    startExhibitionAutoSwitch();
  });
});

startExhibitionAutoSwitch();

const projectCaseTabs = Array.from(document.querySelectorAll(".project-case-tab"));
const projectCasePanels = Array.from(document.querySelectorAll(".project-case-panel"));

const activateProjectCase = (tabButton) => {
  const targetId = tabButton.dataset.projectTarget;

  projectCaseTabs.forEach((item) => item.classList.remove("is-active"));
  projectCasePanels.forEach((panel) => panel.classList.remove("is-active"));
  tabButton.classList.add("is-active");

  const targetPanel = document.getElementById(targetId);
  if (targetPanel) {
    targetPanel.classList.add("is-active");
  }
};

projectCaseTabs.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    activateProjectCase(tabButton);
    startProjectCaseAutoSwitch();
  });
});

let projectCaseAutoTimer;

const startProjectCaseAutoSwitch = () => {
  if (projectCaseTabs.length < 2) {
    return;
  }

  window.clearInterval(projectCaseAutoTimer);
  projectCaseAutoTimer = window.setInterval(() => {
    const currentIndex = projectCaseTabs.findIndex((item) => item.classList.contains("is-active"));
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % projectCaseTabs.length : 0;
    activateProjectCase(projectCaseTabs[nextIndex]);
  }, 3000);
};

startProjectCaseAutoSwitch();

const productCategoryButtons = Array.from(document.querySelectorAll("[data-category-filter]"));
const productCategoryCards = Array.from(document.querySelectorAll("[data-product-category]"));
const productCategoryHeading = document.querySelector("#product-category-heading");
const productCategoryNames = {
  electric: "Electric spray booth models",
  diesel: "Diesel spray booth models",
  "natural-gas": "Natural gas spray booth models",
  lifts: "Vehicle lifts",
  compressors: "Air compressors",
  accessories: "Other body shop accessories"
};

const activateProductCategory = (category, updateAddress = true) => {
  if (!productCategoryNames[category]) {
    return;
  }

  productCategoryButtons.forEach((button) => {
    const isActive = button.dataset.categoryFilter === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  productCategoryCards.forEach((card) => {
    card.hidden = card.dataset.productCategory !== category;
  });

  if (productCategoryHeading) {
    productCategoryHeading.textContent = productCategoryNames[category];
  }

  if (updateAddress && window.history?.replaceState) {
    window.history.replaceState(null, "", `#category-${category}`);
  }
};

if (productCategoryButtons.length && productCategoryCards.length) {
  productCategoryButtons.forEach((button) => {
    button.addEventListener("click", () => activateProductCategory(button.dataset.categoryFilter));
  });

  const requestedCategory = window.location.hash.startsWith("#category-")
    ? window.location.hash.replace("#category-", "")
    : "electric";
  activateProductCategory(productCategoryNames[requestedCategory] ? requestedCategory : "electric", false);
}
