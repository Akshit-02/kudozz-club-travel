// src/app/blog/yelagiri-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yelagiri Travel Guide: Lake, Hills & Best Time",
  description:
    "Complete Yelagiri guide — Punganur Lake, Swamimalai Hill, paragliding, the rose garden, how to reach from Chennai and Bangalore, and a full weekend visit plan.",
  keywords:
    "Yelagiri travel guide, Yelagiri hills, Punganur Lake, Swamimalai Hill, Yelagiri paragliding, Tirupattur district hill station, how to reach Yelagiri, weekend getaway Chennai Bangalore",
  openGraph: {
    title: "Yelagiri Travel Guide: Lake, Hills & Best Time",
    description:
      "A small, quiet hill station with a lake, orchards, and one of Tamil Nadu's best paragliding spots — an easy weekend escape from Chennai or Bangalore.",
    url: "https://club.kudozz.in/blog/yelagiri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake surrounded by hills, evoking Yelagiri's Punganur Lake and surrounding orchard countryside",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yelagiri Travel Guide: Lake, Hills & Best Time",
    description:
      "A lake, a rose garden, and paragliding over the hills — the complete guide to Yelagiri, Tamil Nadu's easiest weekend hill escape.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/yelagiri-travel-guide",
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
          headline: "Yelagiri Travel Guide: Lake, Hills & Best Time",
          description:
            "Complete Yelagiri guide — Punganur Lake, Swamimalai Hill, paragliding, the rose garden, how to reach from Chennai and Bangalore, and a full weekend visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/yelagiri-travel-guide",
          },
          keywords:
            "Yelagiri, Tirupattur, Tamil Nadu, Punganur Lake, paragliding, weekend getaway",
          about: {
            "@type": "Place",
            name: "Yelagiri",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
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
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Yelagiri",
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
    q: "How far is Yelagiri from Chennai or Bangalore?",
    a: "Roughly 220 km from Chennai and 180 km from Bangalore, both around a 4-hour drive, making Yelagiri a genuinely accessible weekend trip from either city.",
  },
  {
    q: "Is paragliding available and how do I book it?",
    a: "Yes — Yelagiri is one of Tamil Nadu's more established paragliding spots. Operators run sessions from a designated take-off point; booking a slot on arrival is usually possible, though weekends can fill up, so arriving early or booking ahead is safer.",
  },
  {
    q: "What is the best time to visit Yelagiri?",
    a: "October through June is broadly comfortable given the modest altitude. Heavy monsoon months (roughly July-September) are best avoided for outdoor activities like paragliding.",
  },
  {
    q: "Is Yelagiri good for a quick weekend trip?",
    a: "Yes — its small size and easy accessibility from both Chennai and Bangalore make it one of the most convenient short hill getaways in the region.",
  },
  {
    q: "How does Yelagiri compare to Yercaud or Kolli Hills?",
    a: "Yelagiri is smaller and even more accessible than Yercaud, with the added draw of paragliding. Kolli Hills, by comparison, is quieter and less developed than either.",
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
  { id: "introduction", title: "A Quick Hill Escape", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Yelagiri", level: 2 },
  { id: "things-to-do", title: "Lake, Hill & Paragliding", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function YelagiriGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Calm lake surrounded by hills, evoking Yelagiri's Punganur Lake and surrounding orchard countryside"
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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Yelagiri", href: null },
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
              {[
                "Yelagiri",
                "Tirupattur",
                "Paragliding",
                "Tamil Nadu",
                "Weekend Getaway",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Yelagiri: A Lake, a Hill & a Weekend Off
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A small, easy-to-reach hill station with a boating lake, quiet
              orchards, and one of Tamil Nadu's best-known paragliding
              spots.
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
                  text: "Tirupattur District, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>A Quick Hill Escape</h2>
                  <p>
                    <strong>Yelagiri</strong> is a hill station in Tirupattur
                    district (formerly part of Vellore district), notably
                    smaller and quieter than{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu&apos;s
                    </Link>{" "}
                    bigger hill stations like Ooty or Kodaikanal. That
                    modest scale is exactly its appeal — Yelagiri makes a
                    genuinely easy weekend getaway, especially from Chennai
                    or Bangalore, given its relatively accessible distance
                    from both.
                  </p>
                  <p>
                    At the centre of it all is <strong>Punganur Lake</strong>,
                    a boating spot and the main gathering point for
                    visitors, surrounded by orchards and a well-maintained
                    rose garden. What sets Yelagiri apart from quieter hill
                    towns is <strong>paragliding</strong> — it's one of the
                    more established paragliding spots in Tamil Nadu,
                    drawing adventure-sport visitors alongside typical
                    hill-station tourists.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🪂</span> Yelagiri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Tirupattur district, Tamil Nadu",
                        },
                        {
                          icon: "🚗",
                          label: "From Chennai",
                          value: "~220 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Jun" },
                        {
                          icon: "🚣",
                          label: "Known For",
                          value: "Punganur Lake",
                        },
                        {
                          icon: "🪂",
                          label: "Distinctive Activity",
                          value: "Paragliding",
                        },
                        {
                          icon: "🎯",
                          label: "Best For",
                          value: "Quick weekend trips",
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
                  <h2>Best Time to Visit Yelagiri</h2>
                  <p>
                    Yelagiri's modest altitude means it stays comfortable
                    across a wider window than higher hill stations, though
                    monsoon still affects outdoor activities.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, clear, and comfortable — ideal for the lake, the rose garden, and reliable paragliding conditions.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm but still visitable",
                        text: "Warmer than winter, but the hill elevation keeps it noticeably cooler than the plains — still a comfortable weekend trip.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid for paragliding",
                        text: "Rain disrupts outdoor activities, especially paragliding, which needs clear, stable conditions to run.",
                      },
                      {
                        season: "Weekday Trips",
                        emoji: "🚗",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Quieter, easier paragliding slots",
                        text: "Weekends bring the biggest crowds and the busiest paragliding queues — a weekday visit is noticeably calmer.",
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
                    <strong>Our pick:</strong> October to February for the
                    most reliable weather — and the most consistent
                    paragliding conditions.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Yelagiri</h2>
                  <ul>
                    <li>
                      <strong>By road from Chennai:</strong> Roughly 220 km,
                      about a 4-hour drive via Vellore.
                    </li>
                    <li>
                      <strong>By road from Bangalore:</strong> Roughly 180
                      km, a comparable drive time, making Yelagiri equally
                      accessible from either city.
                    </li>
                    <li>
                      <strong>The final ghat approach:</strong> A relatively
                      short, easy climb compared to bigger hill stations —
                      part of what makes Yelagiri so accessible for a
                      spontaneous weekend trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine the drive with a stop
                    in Vellore en route if you have extra time — it sits
                    conveniently along the way from both Chennai and
                    Bangalore.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Lake, Hill & Paragliding</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Lake and hills at Yelagiri, Tamil Nadu"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Punganur Lake</h3>
                  <p>
                    The centre of Yelagiri's tourist activity, with boating
                    and a pleasant lakeside walk — the natural gathering
                    point for most visits.
                  </p>
                  <h3>Swamimalai Hill</h3>
                  <p>
                    A viewpoint reached by a walk offering views over the
                    surrounding plains and orchards — a good short trek for
                    a morning or evening outing.
                  </p>
                  <h3>Paragliding</h3>
                  <p>
                    Yelagiri is one of Tamil Nadu's more established
                    paragliding spots, with operators running tandem flights
                    from a designated take-off point — a genuinely
                    distinctive draw that sets it apart from quieter hill
                    towns.
                  </p>
                  <h3>Rose Garden & Orchards</h3>
                  <p>
                    A well-maintained rose garden and the surrounding
                    orchard countryside add a gentle, pastoral character to
                    a Yelagiri visit.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Yelagiri</h2>
                  <p>
                    A reasonable range of options exists given the town's
                    popularity as a weekend destination.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹1,800/night",
                        picks: [
                          "Government tourist lodges",
                          "Basic guesthouses near the lake",
                          "Simple hillside cottages",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹4,000/night",
                        picks: [
                          "Lake-view cottages",
                          "Small hill resorts",
                          "Family-run hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium hillside resorts",
                          "Full-board weekend packages",
                          "Private orchard-view cottages",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Lake & Hill",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Boating at Punganur Lake",
                          "Evening walk at Swamimalai Hill",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Paragliding & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning paragliding session",
                          "Visit the rose garden and orchards",
                          "Departure by early afternoon",
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
                    * Yelagiri's small size means a single day is enough for
                    the essentials — a second day just lets you slow down
                    and add paragliding without rushing.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Yelagiri</h2>
                  <ul>
                    <li>
                      <strong>Lakeside eateries:</strong> Simple South Indian
                      meals and snacks near Punganur Lake, convenient
                      between boating and sightseeing.
                    </li>
                    <li>
                      <strong>Hotel/resort restaurants:</strong> Most
                      accommodation serves meals to guests, a reliable
                      option given the town's small size.
                    </li>
                    <li>
                      <strong>Fresh local fruit:</strong> The surrounding
                      orchards make seasonal fruit an easy, pleasant snack
                      while exploring.
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹6,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Boating", "₹100", "₹200", "₹400"],
                          ["Paragliding (per flight)", "₹1,500", "₹2,000", "₹2,500"],
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
                    * Figures are per person, per day. Paragliding pricing
                    varies by operator and flight duration.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Yelagiri</h2>
                  <ul>
                    <li>
                      <strong>Book paragliding slots early:</strong>{" "}
                      Especially on weekends, when queues build up quickly.
                    </li>
                    <li>
                      <strong>Go easy on planning:</strong> Yelagiri's small
                      size means a spontaneous short trip works well — no
                      need for elaborate advance planning beyond
                      accommodation and paragliding.
                    </li>
                    <li>
                      <strong>Combine with Vellore:</strong> A convenient
                      stop en route from either Chennai or Bangalore.
                    </li>
                    <li>
                      <strong>Avoid heavy monsoon months:</strong> Rain
                      grounds paragliding and dampens the outdoor
                      experience generally.
                    </li>
                    <li>
                      <strong>Carry a light jacket:</strong> Evenings can be
                      noticeably cooler than the plains below.
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
                          "Book paragliding early, especially on weekends",
                          "Combine the trip with a Vellore stop",
                          "Carry a light jacket for cool evenings",
                          "Try boating at Punganur Lake",
                          "Visit the rose garden in the morning light",
                          "Keep the trip simple — it's an easy weekend plan",
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
                          "Expect paragliding to run in wet or windy weather",
                          "Arrive on a busy weekend without a booking",
                          "Skip a jacket assuming plains-level warmth",
                          "Plan a long multi-day trip — Yelagiri suits short visits",
                          "Rely only on cards in smaller local shops",
                          "Rush through without trying the lake or the hill walk",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for more hill and heritage destinations across the
                    state.
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
                {[
                  "Yelagiri",
                  "Tirupattur District",
                  "Tamil Nadu",
                  "Weekend Getaway",
                  "Paragliding",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="yelagiri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="yelagiri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
