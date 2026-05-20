import Link from "next/link";

export interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

const RELATED_POSTS: RelatedPost[] = [
  {
    slug: "spiti-valley-travel-guide",
    title: "Spiti Valley: The Complete Travel Guide 2026",
    excerpt:
      "A remote high-altitude desert in Himachal Pradesh — monasteries, fossils, and jaw-dropping roads.",
    category: "Himachal Pradesh",
    readTime: "14 min",
    image: "/images/related/spiti-valley.jpg",
    date: "Apr 12, 2026",
  },
  {
    slug: "leh-ladakh-road-trip",
    title: "Leh Ladakh Road Trip: Everything You Need to Know",
    excerpt:
      "Moonscapes, Buddhist monasteries, and the world's highest motorable passes await on this epic road trip.",
    category: "Ladakh",
    readTime: "18 min",
    image: "/images/related/leh-ladakh.jpg",
    date: "Mar 28, 2026",
  },
  {
    slug: "kasol-kheerganga-trek",
    title: "Kasol & Kheerganga: Backpacker's Paradise",
    excerpt:
      "Follow the Parvati River trail to Kheerganga hot springs through pine forests and tiny Himalayan villages.",
    category: "Himachal Pradesh",
    readTime: "10 min",
    image: "/images/related/kasol.jpg",
    date: "Mar 10, 2026",
  },
  {
    slug: "rishikesh-adventure-guide",
    title: "Rishikesh Adventure Guide: Rafting, Yoga & More",
    excerpt:
      "The yoga capital of the world also happens to be India's adventure hub — white water rafting, bungee, and beyond.",
    category: "Uttarakhand",
    readTime: "12 min",
    image: "/images/related/rishikesh.jpg",
    date: "Feb 20, 2026",
  },
];

// ── Sidebar Widget ────────────────────────────────────────────────────────────
export function RelatedSidebar() {
  return (
    <aside className="w-full space-y-6">
      {/* Related Posts */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-100 bg-amber-50">
          <h2
            className="text-sm font-semibold uppercase tracking-widest text-amber-700 flex items-center gap-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Related Guides
          </h2>
        </div>
        <div className="divide-y divide-stone-100">
          {RELATED_POSTS.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex gap-3 p-4 hover:bg-stone-50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span
                  className="text-xs text-forest-600 font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {post.category}
                </span>
                <h3
                  className="text-sm font-semibold text-stone-800 leading-snug line-clamp-2 group-hover:text-forest-600 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {post.title}
                </h3>
                <span
                  className="text-xs text-stone-400"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {post.readTime} read
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Facts Widget */}
      <div className="bg-forest-900 text-white rounded-2xl overflow-hidden">
        <div className="p-5">
          <h3
            className="font-bold text-lg mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Manali Quick Facts
          </h3>
          <ul
            className="space-y-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {[
              {
                icon: "📍",
                label: "Location",
                value: "Himachal Pradesh, India",
              },
              { icon: "🏔️", label: "Altitude", value: "2,050 m (6,726 ft)" },
              { icon: "🌡️", label: "Best Time", value: "Oct–June" },
              {
                icon: "✈️",
                label: "Nearest Airport",
                value: "Bhuntar (50 km)",
              },
              { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹5,000" },
            ].map((f) => (
              <li key={f.label} className="flex items-start gap-3 text-sm">
                <span>{f.icon}</span>
                <div>
                  <span className="text-forest-300 block text-xs">
                    {f.label}
                  </span>
                  <span className="text-white font-medium">{f.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 pb-5">
          <Link
            href="/itineraries/manali-7-days"
            className="block w-full py-2.5 text-center text-sm font-semibold bg-forest-500 hover:bg-forest-400 rounded-xl transition-colors"
          >
            See 7-Day Itinerary →
          </Link>
        </div>
      </div>

      {/* Newsletter in sidebar */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <h3
          className="font-bold text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ✉️ Travel Insider
        </h3>
        <p
          className="text-sm text-stone-600 mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Weekly hidden gems & exclusive guides — free.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-3 py-2 text-sm rounded-lg border border-amber-300 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <button className="w-full py-2 text-sm font-semibold gradient-forest text-white rounded-lg hover:opacity-90 transition-opacity">
          Subscribe Free
        </button>
      </div>
    </aside>
  );
}

// ── Bottom Related Grid ───────────────────────────────────────────────────────
export function RelatedPostsGrid() {
  return (
    <section className="mt-16 pt-12 border-t border-stone-200">
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-2xl md:text-3xl font-bold text-stone-900"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Continue Exploring
        </h2>
        <Link
          href="/blog"
          className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center gap-1"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          View all guides
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {RELATED_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden border border-stone-200 card-hover"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span
                className="absolute top-3 left-3 tag-pill text-xs"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {post.category}
              </span>
            </div>
            <div className="p-5">
              <h3
                className="font-bold text-stone-900 mb-2 leading-snug group-hover:text-forest-600 transition-colors line-clamp-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {post.title}
              </h3>
              <p
                className="text-sm text-stone-500 line-clamp-2 mb-3"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {post.excerpt}
              </p>
              <div
                className="flex items-center justify-between text-xs text-stone-400"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
