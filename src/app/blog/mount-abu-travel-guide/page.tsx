// src/app/blog/mount-abu-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mount Abu Travel Guide: Dilwara Temples & Tips",
  description:
    "Complete Mount Abu guide — Rajasthan's only hill station, the intricately carved Dilwara Jain Temples, Nakki Lake, Guru Shikhar, how to reach from Udaipur, and a full visit plan.",
  keywords:
    "Mount Abu travel guide, Dilwara Jain Temples, Nakki Lake, Guru Shikhar, Mount Abu hill station, Rajasthan hill station, how to reach Mount Abu, best time Mount Abu, Mount Abu Wildlife Sanctuary",
  openGraph: {
    title: "Mount Abu Travel Guide: Dilwara Temples & Tips",
    description:
      "Rajasthan's only hill station, home to some of India's finest marble temple carving — the complete guide to Mount Abu.",
    url: "https://club.kudozz.in/blog/mount-abu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Green mountain valley town, evoking Mount Abu's character as Rajasthan's only hill station",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Abu Travel Guide: Dilwara Temples & Tips",
    description:
      "Rajasthan's only hill station, home to the extraordinary marble-carved Dilwara Jain Temples — the complete guide to Mount Abu.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mount-abu-travel-guide",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Mount Abu Travel Guide: Dilwara Temples & Tips",
          description:
            "Complete Mount Abu guide — Rajasthan's only hill station, the intricately carved Dilwara Jain Temples, Nakki Lake, Guru Shikhar, how to reach from Udaipur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/mount-abu-travel-guide",
          },
          keywords:
            "Mount Abu, Dilwara Temples, Rajasthan, hill station, Nakki Lake",
          about: {
            "@type": "Place",
            name: "Mount Abu",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://club.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://club.kudozz.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Rajasthan",
                item: "https://club.kudozz.in/blog/rajasthan-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mount Abu",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "Why is Mount Abu's climate different from the rest of Rajasthan?",
    a: "Mount Abu sits in the Aravalli range at roughly 1,220 m, making it Rajasthan's only hill station — a genuinely different climate and landscape from the desert plains that define most of the state. It stays noticeably cooler year-round, and is a popular escape from the heat elsewhere in Rajasthan.",
  },
  {
    q: "Can you photograph inside the Dilwara Temples?",
    a: "No — photography is strictly prohibited inside the Dilwara Jain Temples, a rule that's firmly enforced. This is worth knowing before you go so you're not caught off guard; the carvings are worth experiencing in person regardless.",
  },
  {
    q: "What is the best time to visit Mount Abu?",
    a: "March to June is the classic window, when Mount Abu offers a genuine cool-weather escape from the desert heat baking the rest of Rajasthan. September to November is also pleasant, with clearer air after the monsoon.",
  },
  {
    q: "How far is Mount Abu from Udaipur?",
    a: "Roughly 185 km by road, about a 4-5 hour drive. The nearest railhead is Abu Road, from where it's a further climb up to the hill station itself.",
  },
  {
    q: "Is Mount Abu a good weekend trip?",
    a: "Yes — it's a popular weekend and honeymoon destination, especially from Ahmedabad and Udaipur, so book accommodation ahead during peak season and weekends.",
  },
  {
    q: "What else is there to do besides the Dilwara Temples?",
    a: "Nakki Lake for boating, Guru Shikhar (the highest peak in the Aravalli range) for panoramic views, Sunset Point for evening gatherings, and the Mount Abu Wildlife Sanctuary surrounding much of the town for a cooler, forested walk.",
  },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Rajasthan's Only Hill Station", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mount Abu", level: 2 },
  { id: "things-to-do", title: "Dilwara Temples & More", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MountAbuGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kasol/kasol.jpg"
              alt="Green mountain valley town, evoking Mount Abu's character as Rajasthan's only hill station"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10"
            aria-label="Breadcrumb"
          >
            <ol
              className="flex items-center gap-2 text-xs text-white/55"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Rajasthan", href: "/blog/rajasthan-travel-guide" },
                { label: "Mount Abu", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mount Abu", "Dilwara Temples", "Rajasthan", "Hill Station"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mount Abu: Dilwara Temples & Hill Station Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Rajasthan&apos;s only hill station, and home to some of the
              most extraordinarily carved marble temples anywhere in India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Aravalli Range, Rajasthan",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
                },
              ].map((m) => (
                <span
                  key={m.text}
                  className="flex items-center gap-1.5 text-sm text-white/55"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Three-Column Layout ───────────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            {/* LEFT — TOC */}
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* CENTER — Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Rajasthan&apos;s Only Hill Station</h2>
                  <p>
                    <strong>Mount Abu</strong> sits in the Aravalli range at
                    roughly 1,220 m — Rajasthan&apos;s only hill station,
                    and a genuinely different climate and landscape from the
                    desert plains that define most of the state.
                  </p>
                  <p>
                    Its centrepiece is the <strong>Dilwara Jain Temples</strong>
                    , dating from the 11th-13th centuries and considered
                    among the finest examples of Jain temple architecture in
                    India — renowned especially for marble ceiling and
                    pillar carvings of extraordinary intricacy, worth
                    experiencing regardless of religious background.
                  </p>
                  <p>
                    Around the temples, Nakki Lake, Guru Shikhar, and a
                    surrounding wildlife sanctuary give Mount Abu a cool,
                    unhurried character that makes it a popular escape from
                    the heat elsewhere in Rajasthan.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Mount Abu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Aravalli Range, Rajasthan",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Abu Road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Dilwara Jain Temples",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~1,220 m",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Udaipur (~185 km)",
                        },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Mount Abu</h2>
                  <p>
                    Mount Abu&apos;s appeal is largely about escaping heat —
                    its seasonality runs opposite to much of Rajasthan.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "A genuine cool-weather escape from the desert heat baking the rest of Rajasthan during these months — Mount Abu's peak season.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pleasant, clearer air",
                        text: "Post-monsoon clarity makes for good views from Guru Shikhar and Sunset Point, with comfortable daytime temperatures.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but wet",
                        text: "The hills turn green and misty, though heavy rain can disrupt sightseeing plans.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🧥",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, carry warm layers",
                        text: "Genuinely cold at this altitude, occasionally near freezing at night — a light jacket alone won't be enough.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span
                            className="font-bold text-stone-800 text-sm"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> March to June — exactly when
                    the rest of Rajasthan is at its hottest, Mount Abu offers
                    a genuinely cool, comfortable escape.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mount Abu</h2>
                  <ul>
                    <li>
                      <strong>By road from Udaipur:</strong> Roughly 185 km,
                      about a 4-5 hour drive — see our{" "}
                      <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                        Udaipur travel guide
                      </Link>{" "}
                      for combining the two.
                    </li>
                    <li>
                      <strong>By road from Ahmedabad:</strong> Roughly 220
                      km, a popular weekend-trip distance from Gujarat.
                    </li>
                    <li>
                      <strong>By rail to Abu Road:</strong> The nearest
                      railhead, well connected to major cities, with a
                      further drive up the hill to the town itself.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book accommodation well ahead
                    if visiting on a weekend or during peak season — Mount
                    Abu is one of the most popular quick getaways from both
                    Rajasthan and Gujarat.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Dilwara Temples & More</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="Hill town scenery around Mount Abu, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Dilwara Jain Temples</h3>
                  <p>
                    Dating from the 11th-13th centuries, these are considered
                    among the finest examples of Jain temple architecture in
                    India, renowned especially for extraordinarily intricate
                    marble ceiling and pillar carvings. Photography is
                    strictly prohibited inside — a firmly enforced rule worth
                    knowing before you go.
                  </p>
                  <h3>Nakki Lake</h3>
                  <p>
                    At the town&apos;s centre, popular for boating, and tied
                    to a local legend that it was dug out by gods using their
                    nails (&quot;Nakki&quot; meaning nail).
                  </p>
                  <h3>Guru Shikhar & Sunset Point</h3>
                  <p>
                    Guru Shikhar, a short distance from town, is the highest
                    peak in the Aravalli range and in Rajasthan, offering
                    panoramic views. Sunset Point is a popular evening
                    gathering spot for the same reason.
                  </p>
                  <h3>Mount Abu Wildlife Sanctuary</h3>
                  <p>
                    Surrounding much of the town, the sanctuary adds a
                    forested, cooler character — good for a quiet walk away
                    from the more touristy sights.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mount Abu</h2>
                  <p>
                    Accommodation is plentiful given its popularity as a
                    weekend and honeymoon destination, from simple lodges to
                    lakeside luxury hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Budget guesthouses in town",
                          "Simple hotels near the bus stand",
                          "Dormitory/hostel-style stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Hotels near Nakki Lake",
                          "Boutique hill-view stays",
                          "Family-run resorts",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹8,000–₹20,000+/night",
                        picks: [
                          "Lakeside luxury hotels",
                          "Heritage-style resorts",
                          "Premium honeymoon suites",
                        ],
                      },
                    ].map((t) => (
                      <div
                        key={t.tier}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div
                          className="font-bold text-stone-900 mb-1"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {t.tier}
                        </div>
                        <div
                          className="text-xs text-forest-600 font-medium mb-3"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li
                              key={p}
                              className="text-xs text-stone-600"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Dilwara Temples & Nakki Lake",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Morning at the Dilwara Jain Temples",
                          "Evening boating and a walk around Nakki Lake",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Viewpoints & Nature",
                        color: "bg-sky-600",
                        activities: [
                          "Sunrise or morning visit to Guru Shikhar",
                          "Walk in the Mount Abu Wildlife Sanctuary",
                          "Evening at Sunset Point before departure",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4
                            className="font-bold text-stone-900 mb-3"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                                  ✓
                                </span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mount Abu</h2>
                  <ul>
                    <li>
                      <strong>Rajasthani thalis:</strong> Widely available
                      across town, a good introduction to the state&apos;s
                      cuisine.
                    </li>
                    <li>
                      <strong>Gujarati-influenced food:</strong> Given its
                      popularity with Gujarati travelers, several restaurants
                      lean toward Gujarati thalis and sweets.
                    </li>
                    <li>
                      <strong>Lakeside cafes:</strong> Around Nakki Lake, good
                      for a relaxed evening meal or snack.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map(
                            (h) => (
                              <th
                                key={h}
                                className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                              >
                                {h}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Accommodation/night",
                            "₹1,500",
                            "₹4,500",
                            "₹14,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹1,500",
                          ],
                          ["Boating (Nakki Lake)", "₹200", "₹200", "₹200"],
                        ].map(([exp, b, m, l], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {b}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {m}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {l}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Figures are per person, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mount Abu</h2>
                  <ul>
                    <li>
                      <strong>No photography inside Dilwara Temples:</strong>{" "}
                      A strictly enforced rule — leave cameras/phones put
                      away once inside.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Expected at all the
                      temple sites in and around town.
                    </li>
                    <li>
                      <strong>Book ahead for weekends:</strong> A very
                      popular honeymoon and weekend destination — rooms fill
                      quickly.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> Even in relatively
                      mild months, evenings at this altitude can turn cool.
                    </li>
                    <li>
                      <strong>Check Guru Shikhar/Sunset Point timing:</strong>{" "}
                      Both are best for clear views in the early morning or
                      just before dusk.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Visit Dilwara Temples early to avoid crowds",
                          "Book accommodation ahead for weekends",
                          "Carry a light jacket even in warmer months",
                          "Take in the view from Guru Shikhar",
                          "Try Gujarati-influenced thalis around town",
                          "Respect the no-photography rule at Dilwara",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don't
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Try to photograph inside Dilwara Temples",
                          "Arrive without a booking on a peak weekend",
                          "Underestimate how cool evenings can get",
                          "Skip modest dress at temple sites",
                          "Rush Guru Shikhar — the view rewards patience",
                          "Expect desert-Rajasthan weather here",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Mount Abu pairs
                    naturally with{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur
                    </Link>{" "}
                    to the north. See our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for the wider region.
                  </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div
                        key={f.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {f.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["Mount Abu", "Dilwara Temples", "Rajasthan", "Hill Station"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="mount-abu-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mount-abu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
