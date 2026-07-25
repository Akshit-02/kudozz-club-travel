"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import {
  categories,
  featuredPost,
  posts,
  popularTags,
  readingListItems,
} from "@/lib/blog-posts";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryColor: string;
  tags: string[];
  readTime: string;
};

const PAGE_SIZE = 9;

function matchesQuery(post: Post, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    post.title.toLowerCase().includes(q) ||
    post.excerpt.toLowerCase().includes(q) ||
    post.category.toLowerCase().includes(q) ||
    post.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

function ResultCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-forest-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden bg-stone-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${post.categoryColor}`}
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {post.category}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-bold text-stone-900 mb-2 leading-snug group-hover:text-forest-700 transition-colors line-clamp-2 flex-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {post.title}
        </h3>
        <p
          className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-stone-400 font-medium"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-stone-100 pt-3">
          <span
            className="flex items-center gap-1.5 text-xs text-stone-400"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {post.readTime} read
          </span>
          <span
            className="text-xs font-semibold text-forest-600 flex items-center gap-1 group-hover:gap-1.5 transition-all"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Read guide
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPageClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const allPosts: Post[] = useMemo(() => [featuredPost, ...posts], []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allPosts.length };
    for (const post of allPosts) {
      counts[post.category] = (counts[post.category] ?? 0) + 1;
    }
    return counts;
  }, [allPosts]);

  const hasFilters = query.trim() !== "" || category !== "all";

  const filtered = useMemo(() => {
    if (!hasFilters) return null;
    return allPosts.filter(
      (post) =>
        (category === "all" || post.category === category) &&
        matchesQuery(post, query),
    );
  }, [query, category, hasFilters, allPosts]);

  // Reset pagination whenever the active filters change.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, category]);

  function selectTag(tag: string) {
    setCategory("all");
    setQuery(tag);
  }

  function clearFilters() {
    setQuery("");
    setCategory("all");
  }

  const activeCategoryLabel = categories.find((c) => c.id === category)?.label;

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative bg-stone-950 pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(61,134,64,0.1)_0%,_transparent_60%)]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white/[0.03] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-forest-400" />
                <span
                  className="text-forest-300 text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  The Kudozz Club Blog
                </span>
              </div>
              <h1
                className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Stories from
                <br />
                <span className="text-forest-300">the road.</span>
              </h1>
              <p
                className="text-white/65 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-source-serif)" }}
              >
                Honest destination guides, practical itineraries, and travel
                stories written by people who've actually been there — not
                aggregated from the internet.
              </p>
            </div>

            {/* Search */}
            <div className="mt-8 max-w-lg">
              <div className="flex items-center bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-2 focus-within:border-white/30 focus-within:bg-white/12 transition-all">
                <svg
                  className="w-5 h-5 text-white/40 ml-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search destinations, guides, tips..."
                  className="flex-1 bg-transparent px-4 py-2.5 text-white placeholder:text-white/35 text-sm focus:outline-none"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="px-4 py-2 text-white/60 hover:text-white text-xs font-semibold transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Clear
                  </button>
                )}
              </div>
              <p
                className="text-white/40 text-xs mt-3"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {allPosts.length} guides and counting
              </p>
            </div>
          </div>
        </section>

        {/* ── Category Filter ───────────────────────────────────────────── */}
        <section className="bg-stone-950 border-b border-stone-800 sticky top-[65px] z-30">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = category === cat.id;
                const count = categoryCounts[cat.id] ?? 0;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    aria-pressed={isActive}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                      isActive
                        ? "gradient-forest text-white"
                        : "bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {cat.label}
                    <span
                      className={isActive ? "text-white/70" : "text-stone-600"}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Main Content ──────────────────────────────────────────────── */}
        <section className="bg-stone-50 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* LEFT — Posts */}
              <div className="flex-1 min-w-0">
                {filtered !== null ? (
                  /* ── Filtered results (search and/or category) ────────── */
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-forest-500" />
                        <span
                          className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {filtered.length}{" "}
                          {filtered.length === 1 ? "guide" : "guides"}
                          {query.trim() && <> for &quot;{query}&quot;</>}
                          {category !== "all" && <> in {activeCategoryLabel}</>}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="text-xs font-semibold text-stone-400 hover:text-forest-600 transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        Clear filters ✕
                      </button>
                    </div>

                    {filtered.length > 0 ? (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {filtered.slice(0, visibleCount).map((post) => (
                            <ResultCard key={post.slug} post={post} />
                          ))}
                        </div>
                        {visibleCount < filtered.length && (
                          <div className="flex flex-col items-center mt-10 gap-3">
                            <p
                              className="text-stone-400 text-xs"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              Showing {Math.min(visibleCount, filtered.length)}{" "}
                              of {filtered.length}
                            </p>
                            <button
                              type="button"
                              onClick={() =>
                                setVisibleCount((c) => c + PAGE_SIZE)
                              }
                              className="px-6 py-3 text-sm font-semibold text-forest-700 bg-white border border-stone-200 rounded-full hover:border-forest-300 hover:shadow-sm transition-all"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              Load more guides
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center">
                        <p
                          className="text-stone-500 text-sm mb-4"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          No guides match
                          {query.trim() && <> &quot;{query}&quot;</>}
                          {category !== "all" && <> in {activeCategoryLabel}</>}
                          . Try a destination name like &quot;Manali&quot; or
                          clear your filters.
                        </p>
                        <button
                          type="button"
                          onClick={clearFilters}
                          className="text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Clear filters
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Featured post */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-forest-500" />
                        <span
                          className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Featured
                        </span>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="group flex flex-col sm:flex-row gap-6 bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-forest-200 hover:shadow-xl transition-all duration-300 p-6"
                      >
                        <div className="relative sm:w-72 h-52 sm:h-auto rounded-2xl overflow-hidden flex-shrink-0 bg-stone-100">
                          <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            sizes="(min-width: 640px) 288px, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${featuredPost.categoryColor}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {featuredPost.category}
                            </span>
                            {featuredPost.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] text-stone-400 font-medium"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <h2
                            className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug group-hover:text-forest-700 transition-colors"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {featuredPost.title}
                          </h2>
                          <p
                            className="text-stone-500 text-sm leading-relaxed mb-4"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span
                              className="flex items-center gap-1.5 text-xs text-stone-400"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {featuredPost.readTime} read
                            </span>
                            <span
                              className="text-sm font-semibold text-forest-600 flex items-center gap-1 group-hover:gap-2 transition-all"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              Read guide
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Post grid */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-forest-500" />
                        <span
                          className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Latest guides
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {posts.slice(0, visibleCount).map((post) => (
                          <ResultCard key={post.slug} post={post} />
                        ))}
                      </div>
                      {visibleCount < posts.length && (
                        <div className="flex flex-col items-center mt-10 gap-3">
                          <p
                            className="text-stone-400 text-xs"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            Showing {Math.min(visibleCount, posts.length)} of{" "}
                            {posts.length}
                          </p>
                          <button
                            type="button"
                            onClick={() =>
                              setVisibleCount((c) => c + PAGE_SIZE)
                            }
                            className="px-6 py-3 text-sm font-semibold text-forest-700 bg-white border border-stone-200 rounded-full hover:border-forest-300 hover:shadow-sm transition-all"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            Load more guides
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* RIGHT — Sidebar */}
              <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-8">
                {/* Reading list */}
                <div className="bg-stone-900 rounded-2xl overflow-hidden">
                  <div className="px-5 py-4 border-b border-stone-800">
                    <h3
                      className="text-white font-bold text-sm flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      📚 Reading List
                    </h3>
                    <p
                      className="text-stone-500 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Our most complete guides
                    </p>
                  </div>
                  <div className="divide-y divide-stone-800">
                    {readingListItems.map((item, i) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="flex items-center gap-4 px-5 py-3.5 hover:bg-stone-800/60 transition-colors group"
                      >
                        <span
                          className="text-forest-500 font-bold text-sm w-5 flex-shrink-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-stone-300 text-xs font-medium leading-snug group-hover:text-white transition-colors line-clamp-2"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {item.title}
                          </p>
                          <span
                            className="text-stone-600 text-[10px]"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {item.readTime} read
                          </span>
                        </div>
                        <svg
                          className="w-3.5 h-3.5 text-stone-600 group-hover:text-forest-400 transition-colors flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular tags */}
                <div className="bg-white rounded-2xl border border-stone-200 p-5">
                  <h3
                    className="font-bold text-stone-900 text-sm mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => {
                      const isActive =
                        query.trim().toLowerCase() === tag.toLowerCase();
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() =>
                            isActive ? clearFilters() : selectTag(tag)
                          }
                          aria-pressed={isActive}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                            isActive
                              ? "bg-forest-600 text-white"
                              : "bg-stone-100 text-stone-600 hover:bg-forest-100 hover:text-forest-700"
                          }`}
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-forest-900 to-stone-900 rounded-2xl p-5 border border-forest-800/40">
                  <div className="text-2xl mb-3">✉️</div>
                  <h3
                    className="font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Get guides first
                  </h3>
                  <p
                    className="text-stone-400 text-xs leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Every new guide goes to our newsletter subscribers 48 hours
                    before it's public.
                  </p>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 bg-white/8 border border-white/15 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 transition-all mb-2.5"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                  <Link
                    href="/newsletter"
                    className="block w-full py-2.5 text-center text-sm font-semibold gradient-forest text-white rounded-xl hover:opacity-90 transition-opacity"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Join Free →
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "350+", label: "Guides" },
                    { value: "15K+", label: "Members" },
                    { value: "120+", label: "Destinations" },
                    { value: "4.9★", label: "Rating" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white border border-stone-200 rounded-2xl p-4 text-center"
                    >
                      <div
                        className="text-xl font-bold text-stone-900"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-stone-400 text-xs uppercase tracking-wide mt-0.5"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
