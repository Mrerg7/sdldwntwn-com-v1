export const SITE = {
  domain: "sdldwntwn.com",
  brand: "SDL Domains",
  url: "https://sdldwntwn.com",
  email: "sales@desertrich.com",
  price: 55000,
  minPrice: 35000,
  currency: "USD",
  locale: "en_US",
  ogImage:
    "https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/b1b5bf62-d36b-41b4-3934-2c498f2cf300/public",
  googleVerification: "HZClkGF7jrRXyNejeTzzlbBwp_cvZkzqyJjNdWtlp3g",
  escrowUrl: "https://www.escrow.com",
  portfolioHub: "https://sdl.contact",
} as const;

export const INQUIRY_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  `${SITE.domain} Domain Acquisition Inquiry`,
)}&body=${encodeURIComponent(
  `Hello,\n\nI am interested in acquiring ${SITE.domain}.\n\nIntended use:\nBudget range:\n\nThank you.`,
)}`;

export function buyNowMailto(price = SITE.price) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    `${SITE.domain} — Buy Now at ${formatSubjectPrice(price)}`,
  )}&body=${encodeURIComponent(
    `Hello,\n\nI would like to purchase ${SITE.domain} at the listed price of ${formatSubjectPrice(price)} via escrow.\n\nPreferred escrow: Escrow.com\nClosing timeline:\n\nThank you.`,
  )}`;
}

function formatSubjectPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const META = {
  title: `${SITE.domain} | Premium Domain for Sale | ${SITE.brand}`,
  description: `${SITE.domain} is available for $${SITE.price.toLocaleString()} — the short, memorable .com for Downtown Scottsdale & Old Town. Secure escrow transfer. Inquire or buy now.`,
  keywords: [
    "buy .com domains",
    "domain marketplace",
    "sdldwntwn.com for sale",
    "premium domain names",
    "investment domains",
    "Downtown Scottsdale domain",
    "Old Town Scottsdale domain",
    "geo domain for sale",
    "Scottsdale real estate domain",
  ],
};
