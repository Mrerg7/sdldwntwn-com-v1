# sdldwntwn.com

Premium domain sales site for **sdldwntwn.com** — Downtown Scottsdale & Old Town Scottsdale.

## Stack

- [Astro](https://astro.build) static build (no adapter)
- TypeScript + Tailwind CSS + Content Collections
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) (assets-only deploy)
- [Cloudflare Images](https://developers.cloudflare.com/images/) CDN for hero imagery

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run deploy
```

Deploys `./dist` via `wrangler.toml` with no Worker script — pure static assets at the global edge.

## Acquisition

All inquiries route to **sales@desertrich.com**.
