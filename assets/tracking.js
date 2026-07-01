window.GUBOT_GA4_ID = window.GUBOT_GA4_ID || "";
window.GUBOT_GTM_ID = window.GUBOT_GTM_ID || "";

(function () {
  const ga4Id = window.GUBOT_GA4_ID;
  const gtmId = window.GUBOT_GTM_ID;

  const loadScript = (src) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  };

  if (/^G-[A-Z0-9]+$/.test(ga4Id)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", ga4Id);
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`);
  }

  if (/^GTM-[A-Z0-9]+$/.test(gtmId)) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
  }

  window.gubotTrackEvent = function (eventName, eventParams) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        transport_type: "beacon",
        ...eventParams,
      });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  };

  const bindTracking = () => {
    document.querySelectorAll("form[data-track-form='lead']").forEach((form) => {
      form.addEventListener("submit", () => {
        const source = form.querySelector("[name='form_source']")?.value || "Quote form";
        window.gubotTrackEvent("generate_lead", {
          lead_source: source,
          page_location: window.location.href,
        });
      });
    });

    document.querySelectorAll("a[href*='api.whatsapp.com/send']").forEach((link) => {
      link.addEventListener("click", () => {
        window.gubotTrackEvent("whatsapp_click", {
          page_location: window.location.href,
        });
      });
    });

    document.querySelectorAll("a[href^='mailto:']").forEach((link) => {
      link.addEventListener("click", () => {
        window.gubotTrackEvent("email_click", {
          page_location: window.location.href,
        });
      });
    });

    if (window.location.pathname.endsWith("/thank-you.html")) {
      window.gubotTrackEvent("generate_lead", {
        lead_source: "Thank you page",
        page_location: window.location.href,
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindTracking);
  } else {
    bindTracking();
  }
})();
