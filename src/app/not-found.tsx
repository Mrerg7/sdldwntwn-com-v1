import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl text-[var(--accent-ink)]">404</p>
      <h1 className="mt-4 font-display text-3xl tracking-tight">Page not found</h1>
      <p className="mt-3 text-[var(--muted-fg)]">
        That URL is not part of the sdldwntwn.com domain marketplace.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-[var(--ink)] px-6 text-sm font-semibold text-white dark:bg-[var(--accent)] dark:text-[var(--ink)]"
      >
        Return home
      </Link>
    </div>
  );
}
