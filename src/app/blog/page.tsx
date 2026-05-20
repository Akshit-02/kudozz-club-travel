// src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Travel Blog — Guides, Stories & Itineraries",
  description:
    "Browse all travel guides on Kudozz Club — destination deep-dives, honest itineraries, budget breakdowns and insider tips written by real travellers.",
  alternates: { canonical: "https://explore.kudozz.in/blog" },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const categories = [
  { id: "all", label: "All Posts" },
  { id: "destination-guides", label: "Destination Guides" },
  { id: "itineraries", label: "Itineraries" },
  { id: "adventure", label: "Adventure" },
  { id: "budget-travel", label: "Budget Travel" },
  { id: "trekking", label: "Trekking" },
  { id: "culture", label: "Culture" },
  { id: "tips", label: "Travel Tips" },
];

const featuredPost = {
  slug: "leh-ladakh-road-trip",
  title: "Leh Ladakh Road Trip Guide 2026: Routes, Permits, Passes & Tips",
  excerpt:
    "Moonscapes, Buddhist monasteries, and the world's highest motorable passes — the most complete Leh Ladakh road trip guide you'll find, written after 14 days on the ground.",
  image: "/images/related/leh-ladakh.jpg",
  category: "Road Trip",
  categoryColor: "bg-stone-100 text-stone-700",
  tags: ["Ladakh", "Road Trip", "High Altitude"],
  readTime: "26 min",
};

const posts = [
  {
    slug: "manali-travel-guide",
    title: "Manali Travel Guide 2026: Top Places, Itinerary & Insider Tips",
    excerpt:
      "The definitive guide to Manali — Rohtang Pass, Solang Valley, Old Manali cafes, and a 5-day itinerary that covers it all.",
    image: "/images/manali/hero.jpg",
    category: "Destination Guide",
    categoryColor: "bg-sky-100 text-sky-700",
    tags: ["Manali", "Himachal Pradesh"],
    readTime: "16 min",
    featured: true,
  },
  {
    slug: "spiti-valley-travel-guide",
    title: "Spiti Valley: The Complete Travel Guide 2026",
    excerpt:
      "A cold desert between Tibet and India — monasteries, fossils, and roads that will test your nerve and reward your soul.",
    image: "/images/related/spiti-valley.jpg",
    category: "Destination Guide",
    categoryColor: "bg-sky-100 text-sky-700",
    tags: ["Spiti Valley", "Off-beat"],
    readTime: "22 min",
    featured: true,
  },
  {
    slug: "rishikesh-adventure-guide",
    title: "Rishikesh Travel Guide 2026: Adventure, Yoga, Rafting & More",
    excerpt:
      "India's adventure capital where white-water rafting meets Ganga aarti — everything you need for the perfect Rishikesh trip.",
    image: "/images/related/rishikesh.jpg",
    category: "Adventure",
    categoryColor: "bg-amber-100 text-amber-700",
    tags: ["Rishikesh", "Rafting", "Yoga"],
    readTime: "18 min",
    featured: true,
  },
  {
    slug: "coorg-guide",
    title: "Coorg Travel Guide 2026: Coffee, Waterfalls, Trekking & More",
    excerpt:
      "Misty coffee hills, thundering waterfalls, Nagarhole wildlife and Kodava warmth — South India's most quietly magnificent escape.",
    image: "/images/related/coorg.jpg",
    category: "Destination Guide",
    categoryColor: "bg-forest-100 text-forest-700",
    tags: ["Coorg", "Karnataka", "Coffee"],
    readTime: "17 min",
    featured: false,
  },
  {
    slug: "leh-ladakh-road-trip",
    title: "Leh Ladakh Road Trip Guide 2026",
    excerpt:
      "Pangong Tso, Nubra Valley, Khardung La and 14 days on the most dramatic roads on earth.",
    image: "/images/related/leh-ladakh.jpg",
    category: "Road Trip",
    categoryColor: "bg-stone-100 text-stone-700",
    tags: ["Ladakh", "Road Trip"],
    readTime: "26 min",
    featured: false,
  },
  {
    slug: "kasol-kheerganga-trek",
    title: "Kasol & Kheerganga: The Backpacker's Himalayan Trail",
    excerpt:
      "Follow the Parvati River to natural hot springs through pine forests and tiny Himalayan villages.",
    image: "/images/related/kasol.jpg",
    category: "Trekking",
    categoryColor: "bg-green-100 text-green-700",
    tags: ["Kasol", "Trekking"],
    readTime: "12 min",
    featured: false,
  },
];

const popularTags = [
  "Himachal Pradesh",
  "Ladakh",
  "Uttarakhand",
  "Karnataka",
  "Road Trip",
  "Trekking",
  "Budget Travel",
  "Solo Travel",
  "Adventure",
  "Yoga",
  "Wildlife",
  "Beaches",
  "Heritage",
  "Off-beat",
];

const readingListItems = [
  {
    slug: "manali-travel-guide",
    title: "Manali Travel Guide 2026",
    readTime: "16 min",
  },
  {
    slug: "spiti-valley-travel-guide",
    title: "Spiti Valley Complete Guide",
    readTime: "22 min",
  },
  {
    slug: "rishikesh-adventure-guide",
    title: "Rishikesh Adventure Guide",
    readTime: "18 min",
  },
  { slug: "coorg-guide", title: "Coorg Travel Guide 2026", readTime: "17 min" },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BlogPage() {
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
                  placeholder="Search destinations, guides, tips..."
                  className="flex-1 bg-transparent px-4 py-2.5 text-white placeholder:text-white/35 text-sm focus:outline-none"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                />
                <Link
                  href="/search"
                  className="px-4 py-2 gradient-forest text-white text-xs font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Category Filter ───────────────────────────────────────────── */}
        <section className="bg-stone-950 border-b border-stone-800 sticky top-[65px] z-30">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat, i) => (
                <Link
                  key={cat.id}
                  href={`/blog${cat.id !== "all" ? `?category=${cat.id}` : ""}`}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                    i === 0
                      ? "gradient-forest text-white"
                      : "bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main Content ──────────────────────────────────────────────── */}
        <section className="bg-stone-50 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* LEFT — Posts */}
              <div className="flex-1 min-w-0">
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
                    <div className="sm:w-72 h-52 sm:h-auto rounded-2xl overflow-hidden flex-shrink-0 bg-stone-100">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    {posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-forest-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                      >
                        <div className="relative h-48 overflow-hidden bg-stone-100">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    ))}
                  </div>

                  {/* Load more */}
                  {/* <div className="text-center mt-12">
                    <p
                      className="text-stone-400 text-sm mb-5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Showing {posts.length} of 350+ guides
                    </p>
                    <button
                      className="px-8 py-3.5 border-2 border-stone-200 text-stone-600 font-semibold rounded-full hover:border-forest-400 hover:text-forest-700 hover:bg-forest-50 transition-all text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Load More Posts
                    </button>
                  </div> */}
                </div>
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
                    {popularTags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                        className="px-3 py-1.5 text-xs font-medium bg-stone-100 text-stone-600 rounded-full hover:bg-forest-100 hover:text-forest-700 transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {tag}
                      </Link>
                    ))}
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
                    { value: "12K+", label: "Members" },
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
