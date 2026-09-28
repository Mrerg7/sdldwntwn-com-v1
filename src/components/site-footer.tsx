import Link from "next/link";
import { Button } from "@/components/ui/button";
import { INQUIRY_MAILTO, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-[var(--ink)] px-6 py-10 text-white sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Domain available for acquisition
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight sm:text-4xl">
            {SITE.domain} — Downtown Scottsdale&apos;s definitive address
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">
            Serious buyers may inquire for pricing confirmation, escrow options,
            and transfer logistics. Confidential response within 24–48 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <a href={INQUIRY_MAILTO}>Inquire About Acquisition</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm text-[var(--muted-fg)]">
              Part of the {SITE.brand} family of premium Scottsdale & Phoenix domains
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={SITE.portfolioHub}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent-ink)] hover:underline"
              >
                sdl.contact
              </a>
              <a
                href="https://sdl.hair"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent-ink)] hover:underline"
              >
                sdl.hair
              </a>
              <a
                href="https://phx.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent-ink)] hover:underline"
              >
                phx.beauty
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-[var(--muted-fg)]">
            <Link href="/portfolio" className="hover:text-[var(--foreground)]">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-[var(--foreground)]">
              Insights
            </Link>
            <Link href="/#acquire" className="hover:text-[var(--foreground)]">
              Contact
            </Link>
            <a href="/sitemap.xml" className="hover:text-[var(--foreground)]">
              Sitemap
            </a>
          </nav>
        </div>

        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-[var(--muted-fg)]">
          This website is for demonstration and informational purposes. Statistics and
          market references are based on publicly available information and are subject
          to change. Domain transfer subject to escrow agreement and registrar policies.
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-fg)] sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {SITE.brand}. Scottsdale, Arizona.</span>
          <span>Premium geo domains · Escrow-secured transfers</span>
        </div>
      </div>
    </footer>
  );
}
