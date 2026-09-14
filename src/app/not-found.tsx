// src/app/not-found.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { posts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse Kudozz Club's India travel guides by state, city, or destination instead.",
  robots: {
    index: false,
    follow: true,
  },
};

// A small, stable set of high-value entry points so a lost visitor (or a
// crawler that hit a dead link) lands back inside the content graph instead
// of a dead end.
const popularGuides = posts.filter((p) => p.featured).slice(0, 6);

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-24 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest text-forest-600 mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            404 — Page Not Found
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-stone-900 mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            This trail doesn&apos;t lead anywhere
          </h1>
          <p
            className="text-lg text-stone-600 mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-source-serif)" }}
          >
            The page you&apos;re looking for may have moved or no longer
            exists. Here are a few places to pick the trip back up.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-forest-600 text-white font-semibold hover:bg-forest-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 rounded-xl border border-stone-300 text-stone-700 font-semibold hover:bg-stone-100 transition-colors"
            >
              Browse All Guides
            </Link>
            <Link
              href="/destinations"
              className="px-6 py-3 rounded-xl border border-stone-300 text-stone-700 font-semibold hover:bg-stone-100 transition-colors"
            >
              Explore Destinations
            </Link>
          </div>

          <div className="text-left">
            <h2
              className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Popular guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {popularGuides.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="p-4 rounded-xl border border-stone-200 bg-white hover:border-forest-300 hover:shadow-sm transition-all"
                >
                  <span
                    className="text-xs text-forest-600 font-medium"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {p.category}
                  </span>
                  <h3
                    className="font-semibold text-stone-800 leading-snug"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
