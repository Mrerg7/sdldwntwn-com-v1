import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Domain Insights & Valuation Guides",
  description:
    "Weekly domain valuation guides, Scottsdale market trends, and acquisition success stories from SDL Domains.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-ink)]">
        Insights
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
        Domain valuation & market notes
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--muted-fg)]">
        Content for buyers evaluating premium geo domains, escrow workflows, and
        Downtown Scottsdale digital strategy.
      </p>

      <ul className="mt-12 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug} className="py-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
              {post.category} · {post.readTime}
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
              <Link href={`/blog/${post.slug}`} className="hover:text-[var(--accent-ink)]">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-3xl text-[var(--muted-fg)]">{post.description}</p>
            <p className="mt-3 text-xs text-[var(--muted-fg)]">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
