# Changelog

## [FEAT]: Optimization improvements — 2026-09-28

### Technical foundation
- Rebuilt on Next.js App Router with image optimization (AVIF/WebP) and security headers (HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy).
- Added Schema.org `@graph` for WebSite, Organization, Product (with Offer), WebPage, and Place.
- Implemented `/sitemap.xml` and `/robots.txt` with canonical host `https://sdldwntwn.com`.
- Canonical tags and OG/Twitter metadata on all primary routes.

### SEO
- Title format: `[Domain] | Premium Domain for Sale | [Brand]`.
- Meta description includes price, availability, and CTA.
- H1 = domain name; H2s for benefits, market, acquisition, insights.
- Internal links across home ↔ portfolio ↔ blog posts.
- Blog content targeting valuation, geo-domain premiums, escrow, and case studies.

### CRO
- Above-the-fold price + Buy Now / Make Offer / Contact Agent.
- Trust row: Escrow.com, SSL, transfer guarantee, limited inventory.
- Viewing counter, testimonials, recent sales.
- Acquisition form modes by intent; exit-intent email capture.
- CTA `data-cta` attributes for analytics wiring.

### Mobile & UX
- Viewport meta via Next.js Viewport export.
- Collapsible mobile nav; min 48px tap targets; 16px base font.
- Lazy reveal animations; hero priority image; theme toggle (light default).

### Portfolio & design
- Filterable portfolio (keyword, category, TLD, price, length).
- Refined ink / cool-stone / gold accent system (light + dark).
- Display typography: Fraunces; UI: Manrope.

### Validation notes
- Forms post to `/api/lead` (mock success path for local/staging).
- Analytics pixels activate when env IDs are set.
- Submit updated sitemap to Google Search Console after production deploy: `https://sdldwntwn.com/sitemap.xml`.
