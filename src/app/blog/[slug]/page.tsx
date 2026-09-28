import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/blog"
        className="text-sm font-medium text-[var(--accent-ink)] hover:underline min-h-12 inline-flex items-center"
      >
        ← All insights
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)]">
        {post.category} · {post.readTime}
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-[var(--muted-fg)]">{post.date}</p>
      <div className="mt-10 space-y-5 text-base leading-relaxed text-[var(--foreground)]">
        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <p className="font-display text-xl">Considering {SITE.domain}?</p>
        <p className="mt-2 text-sm text-[var(--muted-fg)]">
          See pricing, escrow options, and acquisition CTAs on the homepage.
        </p>
        <Link
          href="/#acquire"
          className="mt-4 inline-flex min-h-12 items-center font-semibold text-[var(--accent-ink)] hover:underline"
        >
          Go to acquisition →
        </Link>
      </div>
    </article>
  );
}
