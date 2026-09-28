# sdldwntwn.com — Premium Domain Sales Site

Optimized landing and marketplace experience for **sdldwntwn.com**, a premium Downtown Scottsdale / Old Town geo domain listed by SDL Domains.

## Features

- Above-the-fold domain + price + Buy Now / Make Offer / Contact Agent CTAs
- Schema.org JSON-LD (WebSite, Organization, Product, Place)
- `robots.txt` + XML sitemap (home, portfolio, blog)
- Canonical metadata, Open Graph, Twitter cards
- Escrow / SSL / transfer trust signals, viewing counter, testimonials
- Exit-intent email capture (mock API with local fallback)
- Portfolio search with price, TLD, length, and category filters
- Content hub for valuation guides and market notes
- Dark / light mode toggle
- Security headers (HSTS, frame options, nosniff, referrer policy)
- Mobile-first layout with ≥48px tap targets and 16px base type

## Stack

- Next.js (App Router) + TypeScript — static export
- Tailwind CSS v4
- Radix UI primitives (Dialog, Slot)
- `next-themes` for color mode
- Cloudflare Workers Static Assets (`wrangler.toml` → `./out`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

Production build & Cloudflare deploy:

```bash
npm run build
npm run deploy
```

Preview the static export locally:

```bash
npm run build && npm run start
```

## Environment (optional)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID for CTA conversion tracking |

Without these, leads are logged server-side via `/api/lead` and CTAs remain functional (mailto + form).

## Contact

Acquisition inquiries: **sales@desertrich.com**

Listed ask: **$55,000 USD** (negotiable from ~$35,000)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
