import Image from "next/image";
import { ShieldCheck, Lock, BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ViewingCounter } from "@/components/viewing-counter";
import { AcquisitionForm } from "@/components/acquisition-form";
import { Reveal } from "@/components/reveal";
import { buyNowMailto, INQUIRY_MAILTO, SITE } from "@/lib/site";
import { formatUsd } from "@/lib/utils";
import { TESTIMONIALS, RECENT_SALES } from "@/lib/testimonials";
import Link from "next/link";

const USE_CASES = [
  {
    title: "Luxury Real Estate & Development",
    body: "Flagship domain for downtown condos, historic homes, or mixed-use projects in Old Town.",
  },
  {
    title: "Events, Tourism & Experiences",
    body: "Ideal for calendars, visitor portals, and experiential brands around ArtWalk and festivals.",
  },
  {
    title: "Arts, Galleries & Culture",
    body: "Own the arts district narrative with a gallery guide or cultural platform.",
  },
  {
    title: "Dining, Nightlife & Local Directory",
    body: "Hyper-local discovery for restaurants, bars, lounges, and boutiques.",
  },
  {
    title: "Local News & Lifestyle Media",
    body: "Authoritative home for downtown news, development updates, and community stories.",
  },
  {
    title: "Hospitality & Destination Brand",
    body: "Boutique hotel, members club, or branded downtown experience.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src={SITE.ogImage}
          alt="Downtown Scottsdale and Old Town evening atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07141c]/92 via-[#07141c]/78 to-[#07141c]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07141c]/55 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
          <p className="font-display text-sm font-medium tracking-[0.18em] uppercase text-[var(--accent)] animate-fade-up">
            {SITE.brand}
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-tight text-white sm:text-6xl md:text-7xl animate-fade-up animate-delay-1">
            {SITE.domain}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl animate-fade-up animate-delay-2">
            The definitive digital address for Downtown Scottsdale &amp; Old Town.
          </p>

          <div className="mt-8 flex flex-wrap items-end gap-6 animate-fade-up animate-delay-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Listed price
              </p>
              <p className="font-display text-4xl text-white sm:text-5xl">
                {formatUsd(SITE.price)}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <a href={buyNowMailto()} data-cta="buy-now-hero">
                  Buy Now
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={INQUIRY_MAILTO} data-cta="make-offer-hero">
                  Make Offer
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#acquire" data-cta="contact-agent-hero">
                  Contact Agent
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <ViewingCounter />
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--muted-fg)] sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[var(--accent-ink)]" /> Escrow.com ready
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-[var(--accent-ink)]" /> SSL secured
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-[var(--accent-ink)]" /> Transfer guarantee
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[var(--accent-ink)]" /> Limited inventory
            </span>
          </div>
        </div>
      </div>

      <section id="why" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Own the go-to domain for Downtown Scottsdale
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-fg)] sm:text-lg">
            {SITE.domain} is short, instantly recognizable, and aligned with one of
            Scottsdale&apos;s most valuable districts—Old Town / Downtown. It delivers
            local authority for real estate, events, tourism, dining, arts, and lifestyle brands.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              kicker: "Brand power",
              title: "Instant recognition & trust",
              body: "“SDL Dwntwn” signals Scottsdale Downtown. Easy to spell, type, and remember—with .com credibility.",
            },
            {
              kicker: "Market fit",
              title: "Hyper-local downtown focus",
              body: "Old Town is the walkable historic core—galleries, restaurants, nightlife, events, and luxury living.",
            },
            {
              kicker: "SEO & branding",
              title: "Natural search authority",
              body: "Strong alignment with downtown Scottsdale and Old Town searches for destination or directory builds.",
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <article className="border-t border-[var(--border)] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)]">
                  {item.kicker}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-fg)]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--muted)]/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Built for leaders shaping Downtown Scottsdale
            </h2>
            <p className="mt-3 max-w-xl text-[var(--muted-fg)]">
              Ideal use cases across the industries that monetize local attention.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((item) => (
              <Reveal key={item.title}>
                <article className="h-full border-l-2 border-[var(--accent)] pl-5">
                  <h3 className="font-display text-xl tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-fg)]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="facts" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl tracking-tight sm:text-4xl">
            Downtown Scottsdale (Old Town) is the vibrant, walkable heart of the city
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted-fg)] leading-relaxed">
            Commonly known as Old Town Scottsdale, this historic district blends Old West
            heritage with modern luxury—and anchors a $3.7B visitor economy.
          </p>
        </Reveal>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["11M+", "Annual visitors to Scottsdale"],
            ["$3.7B", "Visitor economic impact"],
            ["9", "Walkable downtown districts"],
            ["36K+", "Jobs supported by tourism"],
          ].map(([stat, label]) => (
            <Reveal key={label}>
              <div>
                <dt className="font-display text-4xl text-[var(--accent-ink)]">{stat}</dt>
                <dd className="mt-2 text-sm text-[var(--muted-fg)]">{label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <p className="mt-8 text-xs text-[var(--muted-fg)]">
          Sources: City of Scottsdale, Experience Scottsdale, Old Town Scottsdale resources (2024–2025).
        </p>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                Social proof from serious buyers
              </h2>
              <div className="mt-8 space-y-8">
                {TESTIMONIALS.map((t) => (
                  <blockquote key={t.name} className="border-l-2 border-[var(--accent)] pl-5">
                    <p className="text-[var(--foreground)] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-3 text-sm text-[var(--muted-fg)]">
                      <strong className="text-[var(--foreground)]">{t.name}</strong> · {t.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                Recent placements
              </h2>
              <ul className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {RECENT_SALES.map((sale) => (
                  <li key={sale.domain} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <p className="font-semibold">{sale.domain}</p>
                      <p className="text-xs text-[var(--muted-fg)]">{sale.note}</p>
                    </div>
                    <p className="font-display text-lg text-[var(--accent-ink)]">{sale.price}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[var(--muted-fg)]">
                Browse related inventory on the{" "}
                <Link href="/portfolio" className="font-medium text-[var(--accent-ink)] underline">
                  portfolio page
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="acquire" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-ink)]">
              Serious inquiries only
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-5xl">
              Ready to own {SITE.domain}?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[var(--muted-fg)]">
              Premium geo domains tied to high-value districts rarely stay available.
              Choose Buy Now, Make Offer, or Contact Agent.
            </p>
          </div>
        </Reveal>
        <div className="mt-10">
          <AcquisitionForm />
        </div>
      </section>

      <section className="bg-[var(--muted)]/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                Domain valuation insights
              </h2>
              <p className="mt-2 text-sm text-[var(--muted-fg)]">
                Guides and market notes for buyers building local authority.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[var(--accent-ink)] hover:underline min-h-12 inline-flex items-center"
            >
              View all insights →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
