# Gubot SEO Action Plan

Updated: 2026-07-19

## Confirmed commercial focus

- Priority markets: France, Spain, and the United Kingdom.
- Priority models:
  - `GBT-SB6900-E-ECO`
  - `GBT-SB6900-NG-ECO`
  - `GBT-SB6900-D-ECO`
- Verified against the specification tables in `product.html`:
  - `E`: electric infrared heating
  - `NG`: natural-gas heating
  - `D`: diesel heating
- Dimensions, construction, fan system, heating, lighting, filtration, ducting, and electrical configuration are available for all three models. Warranty, lead time, pricing, and market-specific compliance claims remain unpublished unless separately confirmed.

## Completed in this SEO pass

- Confirmed that `robots.txt` permits crawling and references the XML sitemap.
- Confirmed that the core pages use canonical URLs, unique titles, descriptions, and one visible H1.
- Added the first high-intent commercial landing page: `/car-paint-booth-for-sale.html`.
- Added independent, indexable product pages for `GBT-SB6900-E-ECO`, `GBT-SB6900-NG-ECO`, and `GBT-SB6900-D-ECO` using the verified specifications already published in `product.html`.
- Linked the three ECO model cards to their independent pages and added all three URLs to the XML sitemap.
- Added market landing pages for France (French), Spain (Spanish), and the United Kingdom (British English).
- Connected the three market pages and the global commercial page with reciprocal `hreflang` annotations and added the market URLs to the sitemap and home-page navigation links.
- Added Product, BreadcrumbList, and FAQ structured data matching visible page content.
- Added contextual internal links from Home, Products, and the automotive spray booth buying guide.
- Added the new landing page to `sitemap.xml` with its real modification date.
- Reused existing product models, specifications links, images, inquiry endpoint, and conversion tracking attributes.
- Validated the new JSON-LD, sitemap XML, local assets, and local HTTP responses.

## Priority findings

### P0 — measurement and indexing (site owner access required)

- Verify the domain property in Google Search Console.
- Submit `https://www.gubotspraybooth.com/sitemap.xml`.
- Inspect the home page, product page, and new commercial landing page, then request indexing.
- Confirm GA4/GTM receives `lead`, WhatsApp, email, catalog, and configurator events in production.

### P1 — pages to build next

1. `/products/gbt-sb6900-e-eco.html`
2. `/products/gbt-sb6900-ng-eco.html`
3. `/products/gbt-sb6900-d-eco.html`
4. `/spray-booth-heating-options.html` — compare electric, natural-gas, and diesel configurations
5. `/auto-body-shop-spray-booth.html`

Do not publish all pages at once. Publish one or two useful pages per week, connect them to relevant products and cases, and monitor Search Console queries.

### P1 — product architecture

The product models currently live under anchors in `product.html`. Category landing pages should receive their own indexable URLs when their content is sufficiently distinct. Model-detail URLs should only be created when each model has unique specifications, photos, use cases, and buyer guidance.

### P2 — content and trust improvements

- Turn the strongest country projects into individual case-study pages with verified project details.
- Add named technical review or company authorship to guides when a real reviewer can be identified.
- Link certificates only to claims that each certificate actually supports.
- Continue improving image file names and dimensions; avoid adding duplicated or AI-generated case evidence without clear review.

## Business information still needed

Provide these before expanding the next landing pages:

- Top three products to promote and their preferred model names.
- Priority countries for the next 90 days.
- Standard lead time and warranty terms, if they may be published.
- Supported voltage, phase, and frequency combinations.
- Heating options available by model.
- Which certificates apply to the company and which apply to specific products.
- Installation support included with export orders.
- Three strongest projects with country, model, configuration, installation method, and permission to publish.
- Whether CIF, FOB, or other quotation language should be used in calls to action.

The existing product page supplies the core technical data needed for the three model pages. Remaining commercial fields are packing size/weight, production lead time, warranty, installation scope, pricing basis, and any additional supported voltage/frequency configurations beyond the listed 380/220 V, 3 phase 4 wire, 50 Hz configuration.

For France, Spain, and the United Kingdom, confirm whether Gubot has a real installation project, distributor, service partner, localized manual, or market-specific compliance documentation that may be published.

## Market and language sequence

1. Build the three verified English model pages first so each product has a canonical source page.
2. Create professionally reviewed French pages for France and Spanish pages for Spain; do not use thin machine-translated country pages.
3. Keep UK pages in British English and address UK buyer requirements using only verified documentation.
4. When localized equivalents exist, connect them with reciprocal `hreflang` annotations (`en`, `en-GB`, `fr-FR`, `es-ES`, and `x-default` where appropriate).
5. Country landing pages must include real market-specific evidence such as voltage, delivery, installation, documentation, or a genuine local case. Do not create pages that only replace the country name.

## Weekly measurement

Record indexed pages, impressions, clicks, non-brand queries, average position, target countries, form leads, WhatsApp leads, and landing page for every qualified inquiry. Use Search Console data to choose the next page rather than publishing a fixed volume of generic articles.
