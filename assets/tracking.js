window.GUBOT_GA4_ID = window.GUBOT_GA4_ID || "G-H83P8KN0KK";
window.GUBOT_GTM_ID = window.GUBOT_GTM_ID || "GTM-K4MXJDVG";

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
    const payload = {
      event: eventName,
      page_location: window.location.href,
      page_path: window.location.pathname,
      ...eventParams,
    };

    if (typeof window.gtag === "function") {
      const { event, ...gtagPayload } = payload;
      window.gtag("event", eventName, {
        transport_type: "beacon",
        ...gtagPayload,
      });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }
  };

  const bindTracking = () => {
    document.querySelectorAll("form[data-track-form='lead']").forEach((form) => {
      form.addEventListener("submit", () => {
        const source = form.querySelector("[name='form_source']")?.value || "Quote form";
        window.gubotTrackEvent("form_submit", {
          lead_source: source,
          form_location: window.location.pathname,
        });
      });
    });

    document.querySelectorAll("a[href*='api.whatsapp.com/send']").forEach((link) => {
      link.addEventListener("click", () => {
        window.gubotTrackEvent("whatsapp_click", {
          link_url: link.href,
        });
      });
    });

    document.querySelectorAll("a[href^='mailto:']").forEach((link) => {
      link.addEventListener("click", () => {
        window.gubotTrackEvent("email_click", {
          link_url: link.href,
        });
      });
    });

    document.querySelectorAll("a[href*='.pdf']").forEach((link) => {
      link.addEventListener("click", () => {
        window.gubotTrackEvent("pdf_download", {
          file_name: link.href.split("/").pop()?.split("?")[0] || "",
          link_text: link.textContent.trim(),
          link_url: link.href,
        });
      });
    });

    if (window.location.pathname.endsWith("/thank-you.html")) {
      window.gubotTrackEvent("thank_you_view", {
        lead_source: "Thank you page",
        conversion_type: "quote_request",
      });
      window.gubotTrackEvent("generate_lead", {
        lead_source: "Thank you page",
        conversion_type: "quote_request",
      });
    }

    document.querySelectorAll("a").forEach((link) => {
      const linkText = (link.textContent || "").trim().toLowerCase();
      const isProductQuote =
        window.location.pathname.endsWith("/product.html") &&
        link.getAttribute("href")?.includes("contact.html") &&
        /request quote|request quotation/.test(linkText);

      if (!isProductQuote) {
        return;
      }

      link.addEventListener("click", () => {
        const card = link.closest(".catalog-card");
        window.gubotTrackEvent("product_request_quote_click", {
          product_model: card?.querySelector(".catalog-card__status")?.textContent?.trim() || "",
          product_name: card?.querySelector("h3")?.textContent?.trim() || "",
          link_text: link.textContent.trim(),
          link_url: link.href,
        });
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindTracking);
  } else {
    bindTracking();
  }
})();
