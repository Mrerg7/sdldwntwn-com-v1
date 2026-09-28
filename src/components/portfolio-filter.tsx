"use client";

import { useMemo, useState } from "react";
import {
  CATEGORIES,
  PORTFOLIO,
  type DomainCategory,
} from "@/lib/portfolio";
import { formatUsd } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const TLDS = ["all", "com", "contact", "hair", "beauty"] as const;

export function PortfolioFilter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DomainCategory | "all">("all");
  const [tld, setTld] = useState<(typeof TLDS)[number]>("all");
  const [maxPrice, setMaxPrice] = useState(60000);
  const [maxLength, setMaxLength] = useState(14);

  const results = useMemo(() => {
    return PORTFOLIO.filter((d) => {
      if (category !== "all" && d.category !== category) return false;
      if (tld !== "all" && d.tld !== tld) return false;
      if (d.length > maxLength) return false;
      if (d.price !== null && d.price > maxPrice) return false;
      if (d.price === null && maxPrice < 60000 && d.status !== "sold") {
        // keep unpriced unless user dialed price very low? keep them
      }
      const hay = `${d.name} ${d.blurb} ${d.keywords.join(" ")}`.toLowerCase();
      if (query && !hay.includes(query.toLowerCase())) return false;
      return true;
    });
  }, [query, category, tld, maxPrice, maxLength]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search keywords, TLD, or brand ideas…"
          aria-label="Search domains"
        />
        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm text-[var(--muted-fg)]">
            Max price
            <input
              type="range"
              min={5000}
              max={60000}
              step={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--accent-ink)]"
            />
            <span className="mt-1 block text-xs">{formatUsd(maxPrice)}</span>
          </label>
          <label className="text-sm text-[var(--muted-fg)]">
            Max length
            <input
              type="range"
              min={3}
              max={14}
              value={maxLength}
              onChange={(e) => setMaxLength(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--accent-ink)]"
            />
            <span className="mt-1 block text-xs">{maxLength} characters</span>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            className={`min-h-12 rounded-xl px-4 text-sm font-semibold ${
              category === c.id
                ? "bg-[var(--ink)] text-white dark:bg-[var(--accent)] dark:text-[var(--ink)]"
                : "bg-[var(--muted)] text-[var(--muted-fg)]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {TLDS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTld(t)}
            className={`min-h-10 rounded-lg px-3 text-xs font-semibold uppercase tracking-wide ${
              tld === t
                ? "bg-[var(--accent)] text-[var(--ink)]"
                : "border border-[var(--border)] text-[var(--muted-fg)]"
            }`}
          >
            .{t === "all" ? "all" : t}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--muted-fg)]">
        Showing {results.length} domain{results.length === 1 ? "" : "s"}
      </p>

      <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {results.map((domain) => (
          <li
            key={domain.name}
            className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={domain.url === "#" ? `mailto:sales@desertrich.com?subject=${encodeURIComponent(domain.name + " inquiry")}` : domain.url}
                  className="font-display text-xl tracking-tight text-[var(--foreground)] hover:text-[var(--accent-ink)]"
                  {...(domain.url.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {domain.name}
                </a>
                <span className="rounded-md bg-[var(--muted)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-fg)]">
                  {domain.category}
                </span>
                {domain.status === "sold" && (
                  <span className="rounded-md bg-[var(--ink)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Sold
                  </span>
                )}
                {domain.status === "featured" && (
                  <span className="rounded-md bg-[var(--accent)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--ink)]">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-[var(--muted-fg)]">{domain.blurb}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-semibold text-[var(--foreground)]">
                {domain.status === "sold"
                  ? "Placed"
                  : domain.price
                    ? formatUsd(domain.price)
                    : "Inquire"}
              </p>
              <p className="text-xs text-[var(--muted-fg)]">
                .{domain.tld} · {domain.length} chars
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
