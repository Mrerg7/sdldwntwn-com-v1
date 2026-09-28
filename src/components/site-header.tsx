"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { INQUIRY_MAILTO, SITE } from "@/lib/site";

const NAV = [
  { href: "/#why", label: "Why This Domain" },
  { href: "/#acquire", label: "Acquire" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Insights" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 min-h-12">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--ink)] text-sm font-bold tracking-tight text-white dark:bg-[var(--accent)] dark:text-[var(--ink)]">
            SDL
          </span>
          <span className="font-display text-lg tracking-tight text-[var(--foreground)]">
            {SITE.domain}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex" size="sm">
            <a href={INQUIRY_MAILTO}>Make Offer</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] min-h-12 flex items-center"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={INQUIRY_MAILTO}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--ink)] px-4 text-sm font-semibold text-white dark:bg-[var(--accent)] dark:text-[var(--ink)]"
              onClick={() => setOpen(false)}
            >
              Make Offer
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
