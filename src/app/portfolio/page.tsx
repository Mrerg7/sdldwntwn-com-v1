import type { Metadata } from "next";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Domain Portfolio",
  description:
    "Browse premium Scottsdale, Phoenix, and brandable domains. Filter by price, TLD, length, and category.",
  alternates: { canonical: `${SITE.url}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-ink)]">
        SDL portfolio
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
        Premium domains for sale
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--muted-fg)]">
        Search the marketplace for geo, brandable, business, crypto, and beauty domains.
        Featured listing: {SITE.domain}.
      </p>
      <div className="mt-10">
        <PortfolioFilter />
      </div>
    </div>
  );
}
