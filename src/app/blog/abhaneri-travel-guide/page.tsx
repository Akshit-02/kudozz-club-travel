// src/app/blog/abhaneri-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Abhaneri Guide: Chand Baori Stepwell & Tips",
  description:
    "Complete Abhaneri guide — Chand Baori, one of the world's largest and deepest stepwells, Harshat Mata Temple, how to reach from Jaipur, and how to fit it into a wider Rajasthan route.",
  keywords:
    "Abhaneri travel guide, Chand Baori stepwell, Harshat Mata Temple, Abhaneri Rajasthan, deepest stepwell in the world, how to reach Abhaneri, Jaipur to Ranthambore stop, Rajasthan stepwells",
  openGraph: {
    title: "Abhaneri Guide: Chand Baori Stepwell & Tips",
    description:
      "A dizzying geometric descent thirteen stories into the earth — the complete guide to Abhaneri's Chand Baori stepwell.",
    url: "https://club.kudozz.in/blog/abhaneri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Dramatic geometric stone architecture, evoking the zigzagging steps of Abhaneri's Chand Baori stepwell in Rajasthan",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhaneri Guide: Chand Baori Stepwell & Tips",
    description:
      "One of the world's largest and deepest stepwells, a geometric marvel from the 8th-9th century — the complete Abhaneri guide.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/abhaneri-travel-guide",
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
          headline: "Abhaneri Guide: Chand Baori Stepwell & Tips",
          description:
            "Complete Abhaneri guide — Chand Baori, one of the world's largest and deepest stepwells, Harshat Mata Temple, how to reach from Jaipur, and how to fit it into a wider Rajasthan route.",
          image: "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
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
            "@id": "https://club.kudozz.in/blog/abhaneri-travel-guide",
          },
          keywords:
            "Abhaneri, Chand Baori, Rajasthan, stepwell, Harshat Mata Temple, heritage",
          about: {
            "@type": "Place",
            name: "Abhaneri",
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
                name: "Abhaneri",
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
    q: "How deep is Chand Baori?",
    a: "Chand Baori descends roughly 13 stories, about 30 metres, into the ground via a dramatic symmetrical arrangement of zigzagging steps on three sides, with a multi-story pavilion on the fourth — making it one of the largest and deepest stepwells in the world.",
  },
  {
    q: "How far is Abhaneri from Jaipur?",
    a: "Roughly 90 minutes to 2 hours by road, making it an easy stop on the way to Ranthambore or Agra/Fatehpur Sikri rather than requiring a dedicated round trip.",
  },
  {
    q: "Is Abhaneri worth an overnight stay?",
    a: "No — Abhaneri is a small village best treated as a day-trip stop or an en-route break on a longer journey, not a standalone overnight destination. An hour or two is enough to properly see the stepwell and adjoining temple.",
  },
  {
    q: "Can Abhaneri be combined with Ranthambore or Agra?",
    a: "Yes — it sits conveniently between Jaipur and both Ranthambore and Agra/Fatehpur Sikri, making it a natural stop to break up either journey rather than a separate trip.",
  },
  {
    q: "Is it safe and accessible to walk down into the stepwell?",
    a: "Visitors typically view Chand Baori from designated viewing areas and walkways rather than descending the full historic steps, which are steep and were built for utilitarian access rather than tourist safety — follow posted access points rather than improvising a route down.",
  },
  {
    q: "What else is there to see besides the stepwell?",
    a: "Harshat Mata Temple stands directly adjacent to Chand Baori, adding a religious dimension worth a short visit alongside the stepwell itself.",
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
  { id: "introduction", title: "A Geometric Marvel in the Desert", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Abhaneri", level: 2 },
  { id: "things-to-do", title: "Chand Baori & Harshat Mata Temple", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AbhaneriGuidePage() {
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
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Dramatic geometric stone architecture, evoking the zigzagging steps of Abhaneri's Chand Baori stepwell in Rajasthan"
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
                { label: "Abhaneri", href: null },
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
              {["Abhaneri", "Chand Baori", "Stepwell", "Rajasthan"].map(
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
              Abhaneri: Chand Baori Stepwell Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Thirteen stories of symmetrical zigzagging steps descend into
              the earth at Chand Baori — one of the world's largest and
              deepest stepwells, hiding in a small Rajasthan village.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Dausa district, Rajasthan",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>A Geometric Marvel in the Desert</h2>
                  <p>
                    <strong>Abhaneri</strong> is a small village whose name
                    is inseparable from one structure: <strong>Chand
                    Baori</strong>, one of the largest and deepest stepwells
                    in the world, built roughly in the 8th-9th century CE.
                  </p>
                  <p>
                    Its defining feature is a dramatic geometric arrangement
                    of symmetrical zigzagging steps descending some 13
                    stories — roughly 30 metres — into the earth on three
                    sides, while the fourth side holds a multi-story
                    pavilion. It's an extraordinarily photogenic and
                    visually mesmerizing structure, drawing photographers
                    and heritage travellers from well beyond Rajasthan.
                  </p>
                  <p>
                    <strong>Harshat Mata Temple</strong> stands directly
                    adjacent to the stepwell, adding a religious dimension
                    to the site — but beyond these two landmarks, Abhaneri
                    itself remains a small, rural village, typically visited
                    as a stop on a longer journey rather than a standalone
                    destination.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Abhaneri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Dausa, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "From Jaipur",
                          value: "~90 min – 2 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Chand Baori Stepwell",
                        },
                        {
                          icon: "⏱️",
                          label: "Visit Length",
                          value: "1–2 hours",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Jaipur–Ranthambore route",
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
                  <h2>Best Time to Visit Abhaneri</h2>
                  <p>
                    Weather aside, Chand Baori photographs well at almost
                    any time of day given how the light plays across its
                    stepped geometry.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions make the stop comfortable, especially if you're on a longer driving day.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — quick stop advised",
                        text: "The stepwell offers some shade lower down, but the surrounding area gets genuinely hot for lingering.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — occasional rain",
                        text: "Manageable for a short stop, though the stepwell's base may hold some water after heavy rain.",
                      },
                      {
                        season: "Morning",
                        emoji: "📸",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best light for photos",
                        text: "Soft morning light brings out the strongest shadow patterns across the zigzagging steps.",
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
                    <strong>Our pick:</strong> Any time October through
                    March works well — build Abhaneri into your route
                    between Jaipur and Ranthambore or Agra rather than
                    planning around a specific season.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Abhaneri</h2>
                  <ul>
                    <li>
                      <strong>From Jaipur:</strong> Roughly 90 minutes to 2
                      hours by road — the most common approach.
                    </li>
                    <li>
                      <strong>En route to Ranthambore:</strong> Abhaneri sits
                      conveniently on the way, making it an easy stop
                      without a detour.
                    </li>
                    <li>
                      <strong>En route to Agra/Fatehpur Sikri:</strong>{" "}
                      Similarly positioned as a natural break on this
                      longer eastward journey.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build Abhaneri into your
                    route between Jaipur and Ranthambore (
                    <Link href="/blog/ranthambore-travel-guide">
                      see our Ranthambore guide
                    </Link>
                    ) or Agra rather than planning a dedicated round trip
                    from Jaipur.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Chand Baori & Harshat Mata Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Geometric stepped architecture evoking Abhaneri's Chand Baori stepwell"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Chand Baori</h3>
                  <p>
                    The stepwell was originally built for practical
                    purposes — water storage and a cool community gathering
                    space in the desert heat — but it's the sheer geometric
                    drama of the design that draws visitors today. Walk the
                    designated viewing areas slowly; the pattern of shadows
                    shifts noticeably as the sun moves.
                  </p>
                  <h3>Harshat Mata Temple</h3>
                  <p>
                    Set directly beside the stepwell, this temple adds a
                    quieter, devotional counterpoint to Chand Baori's
                    architectural spectacle — worth ten to fifteen minutes
                    after you've explored the stepwell itself.
                  </p>
                  <h3>The Reality of Abhaneri as a Stop</h3>
                  <p>
                    Beyond these two sites, there isn't much else to see in
                    the village — treat Abhaneri honestly as a focused,
                    high-impact stop rather than a place to linger for a
                    full day.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Abhaneri doesn't need accommodation — it's a day-trip
                    or en-route stop, not an overnight destination. Base
                    yourself in Jaipur before or after, or continue on to
                    your next stop the same day.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏙️",
                        range: "₹1,000–₹2,000/night",
                        picks: [
                          "Budget hotels in Jaipur",
                          "Guesthouses near Jaipur bus stand",
                          "Simple stays en route to Ranthambore",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Business hotels in Jaipur",
                          "Boutique stays in the Pink City",
                          "Mid-range Ranthambore resorts",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Heritage hotels in Jaipur",
                          "Premium resorts near Ranthambore",
                          "Palace-style properties",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Stop 1",
                        title: "Chand Baori",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Jaipur (~90 min – 2 hrs)",
                          "Explore the stepwell's viewing areas",
                          "Photograph the geometric step patterns",
                        ],
                      },
                      {
                        day: "Stop 2",
                        title: "Harshat Mata Temple & Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Brief visit to the adjoining temple",
                          "Grab a quick snack or tea nearby",
                          "Continue toward Ranthambore or Agra",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Best treated as a 1–2 hour stop within a longer
                    Jaipur–Ranthambore or Jaipur–Agra journey, not a
                    standalone day.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Roadside dhabas:</strong> A handful of simple
                      eateries near the stepwell entrance for tea and light
                      snacks.
                    </li>
                    <li>
                      <strong>Eat before or after in Jaipur:</strong> Given
                      Abhaneri's limited food options, plan proper meals at
                      either end of your journey.
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
                          {["Expense", "Approx. Cost"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Entry fee (Chand Baori)", "₹25–200 depending on nationality"],
                          ["Snacks/tea nearby", "₹100–200"],
                          ["Shared transport add-on (Jaipur route)", "₹500–1,500"],
                        ].map(([exp, c], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {c}
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
                    * A genuinely low-cost stop — the main expense is the
                    transport you're already paying for on your wider route.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Abhaneri</h2>
                  <ul>
                    <li>
                      <strong>Build it into a longer route:</strong> Don't
                      plan a dedicated Jaipur round trip — combine it with
                      Ranthambore or Agra travel.
                    </li>
                    <li>
                      <strong>Allow enough time for angles:</strong> The
                      geometric patterns look different from each viewing
                      point — don't rush the photography.
                    </li>
                    <li>
                      <strong>Respect temple photography norms:</strong>{" "}
                      Check for any restrictions near Harshat Mata Temple
                      before photographing.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Food options
                      right at the site are minimal.
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
                          "Combine Abhaneri with a Jaipur–Ranthambore or Jaipur–Agra route",
                          "Visit Harshat Mata Temple alongside the stepwell",
                          "Take time to view the steps from multiple angles",
                          "Carry water and a snack for the stop",
                          "Visit in cooler months for a more comfortable walk",
                          "Respect designated viewing areas at the stepwell",
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
                          "Plan a dedicated overnight stay in Abhaneri",
                          "Expect a wide choice of restaurants at the site",
                          "Improvise a route down the historic steps",
                          "Rush the stop without appreciating the geometry",
                          "Visit at peak midday heat in summer if avoidable",
                          "Skip Harshat Mata Temple next door",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Abhaneri
                    with{" "}
                    <Link href="/blog/ranthambore-travel-guide">
                      Ranthambore
                    </Link>{" "}
                    for wildlife, or continue toward Agra. See our full{" "}
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
                {["Abhaneri", "Chand Baori", "Rajasthan", "Stepwell"].map(
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

              <RelatedPostsGrid currentSlug="abhaneri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="abhaneri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
