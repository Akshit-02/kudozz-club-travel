// src/app/blog/laknavaram-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Laknavaram Lake Guide: Bridge, Boating & Tips",
  description:
    "Complete Laknavaram Lake guide — the horseshoe-shaped lake and its cantilever hanging bridge, boating, how to combine it with Ramappa Temple and Bogatha Waterfall, and a full visit plan.",
  keywords:
    "Laknavaram Lake, Laknavaram cantilever bridge, Mulugu district tourism, Laknavaram boating, Warangal day trip, Bogatha Waterfall, Ramappa Temple, Telangana lakes, how to reach Laknavaram",
  openGraph: {
    title: "Laknavaram Lake Guide: Bridge, Boating & Tips",
    description:
      "A horseshoe-shaped lake scattered with forested islands and a cantilever bridge walking you out over the water — the complete Laknavaram guide.",
    url: "https://club.kudozz.in/blog/laknavaram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake framed by hills, evoking Laknavaram Lake's horseshoe shape and forested islands",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Laknavaram Lake Guide: Bridge, Boating & Tips",
    description:
      "A horseshoe lake, a cantilever hanging bridge, and forested islands — the complete Laknavaram guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/laknavaram-travel-guide",
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
          headline: "Laknavaram Lake Guide: Bridge, Boating & Tips",
          description:
            "Complete Laknavaram Lake guide — the horseshoe-shaped lake and its cantilever hanging bridge, boating, how to combine it with Ramappa Temple and Bogatha Waterfall, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/laknavaram-travel-guide",
          },
          keywords:
            "Laknavaram Lake, Mulugu district, cantilever bridge, boating, Telangana, off-beat",
          about: {
            "@type": "Place",
            name: "Laknavaram Lake",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog/telangana-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Laknavaram Lake",
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
    q: "How far is Laknavaram Lake from Warangal and Hyderabad?",
    a: "Laknavaram Lake is roughly 70 km from Warangal, making Warangal by far the more practical base — it's a manageable half-day trip from there. From Hyderabad, it's a much longer haul at roughly 200 km, so most Hyderabad-based visitors combine it with an overnight stop in Warangal.",
  },
  {
    q: "Is the cantilever bridge at Laknavaram safe?",
    a: "The bridge is generally safe and a well-established part of the visitor experience, but it can sway more noticeably in strong wind or when the lake is at a high monsoon level. Follow posted capacity limits and staff guidance, and avoid the bridge in stormy weather.",
  },
  {
    q: "Can Laknavaram be combined with Ramappa Temple?",
    a: "Yes — Ramappa Temple, Laknavaram Lake, and Bogatha Waterfall all sit within the same Mulugu-district tourist circuit and are commonly visited together as a day or two-day trip from Warangal.",
  },
  {
    q: "What is the best time to visit Laknavaram Lake?",
    a: "October to February is ideal, with clear weather and comfortable conditions for boating and the bridge walk. The monsoon fills the lake dramatically and can look spectacular, but boating and bridge access may be restricted for safety during heavy rain or high water.",
  },
  {
    q: "Is boating always available at Laknavaram?",
    a: "Boating typically runs through the cooler, drier months but can be suspended during heavy monsoon rain or unsafe water conditions — it's worth checking locally on arrival rather than assuming it will be running, especially outside the Oct-Feb window.",
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
  { id: "introduction", title: "A Horseshoe Lake with a Hanging Bridge", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Laknavaram", level: 2 },
  { id: "things-to-do", title: "The Bridge, Boating & Islands", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LaknavaramGuidePage() {
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
              alt="Calm lake framed by hills, evoking Laknavaram Lake's horseshoe shape and forested islands"
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
                { label: "Telangana", href: "/blog/telangana-travel-guide" },
                { label: "Laknavaram Lake", href: null },
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
                "Laknavaram Lake",
                "Mulugu District",
                "Cantilever Bridge",
                "Boating",
                "Off-beat",
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
              Laknavaram Lake: Cantilever Bridge & Boating Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A horseshoe-shaped lake dotted with forested islands, and a
              cantilever bridge that walks you straight out over the water —
              Mulugu district's most photographed stop.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mulugu district, Telangana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>A Horseshoe Lake with a Hanging Bridge</h2>
                  <p>
                    <strong>Laknavaram Lake</strong> sits in Govindaraopet
                    mandal, Mulugu district, roughly 200 km from Hyderabad —
                    but a far more manageable ~70 km from{" "}
                    <Link href="/blog/warangal-travel-guide">Warangal</Link>,
                    which is by far the more practical base for most
                    visitors. The lake is shaped like a broad horseshoe, its
                    surface scattered with small forested islands that give
                    it a scale and stillness that feel unexpected this deep
                    into inland Telangana.
                  </p>
                  <p>
                    The signature experience here is the{" "}
                    <strong>cantilever hanging bridge</strong>, which lets
                    visitors walk out over the water to one of the lake's
                    islands — a simple structure, but one that delivers
                    genuinely wide, uninterrupted views back across the lake
                    that you can't get from the shore. Boating on the
                    horseshoe itself is the other main draw, a slower way to
                    take in the islands and the forested hills ringing the
                    water.
                  </p>
                  <p>
                    Laknavaram sits within the same Mulugu-district circuit as
                    the UNESCO-listed Ramappa Temple and{" "}
                    <Link href="/blog/bogatha-waterfall-travel-guide">
                      Bogatha Waterfall
                    </Link>
                    , and most visitors combine two or all three in a single
                    trip out of Warangal rather than visiting Laknavaram in
                    isolation.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌉</span> Laknavaram Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Mulugu district, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Warangal",
                          value: "~70 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🌉",
                          label: "Known For",
                          value: "Cantilever Bridge, Boating",
                        },
                        {
                          icon: "🏝️",
                          label: "Setting",
                          value: "Horseshoe lake, forested islands",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Ramappa Temple, Bogatha Falls",
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
                  <h2>Best Time to Visit Laknavaram Lake</h2>
                  <p>
                    Water levels, weather, and boating/bridge availability
                    all shift with the season here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies and comfortable temperatures make this the most reliable window for boating and a relaxed bridge walk.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, still visitable",
                        text: "Heat builds steadily, but an early-morning visit still works well before the midday sun gets uncomfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — dramatic but restricted",
                        text: "The lake fills impressively and looks its most dramatic, but boating and bridge access can be suspended in heavy rain or high water for safety.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌫️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best light",
                        text: "Cool, hazy winter mornings give the softest light for photographs from the bridge and the boats.",
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
                    <strong>Our pick:</strong> October to February — clear
                    weather, comfortable temperatures, and boating and the
                    cantilever bridge both reliably open.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Laknavaram Lake</h2>
                  <p>
                    Warangal is the practical gateway — most visitors reach
                    Laknavaram via Warangal rather than driving the full
                    distance from Hyderabad in one stretch.
                  </p>
                  <ul>
                    <li>
                      <strong>Via Warangal:</strong> Roughly 70 km, about a
                      90-minute to 2-hour drive on reasonable roads — by far
                      the easiest approach, and the one most day-trippers use.
                    </li>
                    <li>
                      <strong>Direct from Hyderabad:</strong> Roughly 200 km,
                      a 4-hour-plus drive — feasible as a very long single day
                      trip, but far more comfortable split across two days
                      with a Warangal stopover.
                    </li>
                    <li>
                      <strong>By rail:</strong> Warangal railway station is
                      the nearest major railhead with good connectivity to
                      Hyderabad and beyond; onward travel to the lake is by
                      road only.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Warangal for
                    a night and cover Laknavaram, Ramappa Temple, and Bogatha
                    Waterfall together — trying to do all three from
                    Hyderabad in a single day is a stretch.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Bridge, Boating & Islands</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Lake and hills at Laknavaram, Mulugu district"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Cantilever Bridge</h3>
                  <p>
                    A simple engineered bridge that projects out from the
                    shore toward one of Laknavaram's islands, giving walkers
                    an open, uninterrupted view across the horseshoe lake.
                    It's the single most photographed spot here, and easily
                    the highlight for most first-time visitors.
                  </p>
                  <h3>Boating on the Horseshoe</h3>
                  <p>
                    Local boat operators run rides across the lake, weaving
                    between the small forested islands — a slower, quieter
                    way to see Laknavaram's scale than the bridge alone.
                  </p>
                  <h3>Island Views & Forest Edges</h3>
                  <p>
                    The islands themselves are largely undeveloped, thickly
                    wooded, and best appreciated from the water or the
                    bridge — there's no real island-hopping infrastructure,
                    so treat this as a scenic stop rather than a full outdoor
                    activity day.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Laknavaram Lake</h2>
                  <p>
                    Accommodation right at the lake is minimal — Warangal is
                    the realistic base for a comfortable overnight stay.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,600/night",
                        picks: [
                          "Budget lodges, Warangal town",
                          "Basic guesthouses, Mulugu",
                          "Simple stays near Hanamkonda",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,800/night",
                        picks: [
                          "Business hotels, Warangal",
                          "Hanamkonda hotel chains",
                          "Highway hotels near NH163",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,000–₹7,500+/night",
                        picks: [
                          "Premium hotels, Warangal city",
                          "Full-service business hotels",
                          "Serviced apartments, Hanamkonda",
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
                  <h2>Suggested Visit Plan (2 Days from Warangal)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Warangal Heritage & Ramappa Temple",
                        color: "bg-amber-700",
                        activities: [
                          "Warangal Fort and Thousand Pillar Temple",
                          "Drive to Ramappa Temple, Mulugu district",
                          "Overnight in Warangal or Mulugu",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Laknavaram & Bogatha Waterfall",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at Laknavaram Lake — bridge and boating",
                          "Drive onward to Bogatha Waterfall (season permitting)",
                          "Return to Warangal or Hyderabad by evening",
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
                    * See our full{" "}
                    <Link href="/blog/warangal-travel-guide">
                      Warangal travel guide
                    </Link>{" "}
                    for the wider Kakatiya heritage circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Laknavaram</h2>
                  <ul>
                    <li>
                      <strong>Local stalls near the lake:</strong> Simple tea
                      and snack stalls cluster near the parking and bridge
                      entrance — fine for a quick bite between boating and
                      the bridge walk.
                    </li>
                    <li>
                      <strong>Warangal restaurants:</strong> A far wider
                      spread of proper Telugu and multi-cuisine restaurants —
                      plan your main meals around a Warangal stop.
                    </li>
                    <li>
                      <strong>Carry your own snacks and water:</strong>{" "}
                      Sensible given the limited standalone food scene right
                      at the lake itself.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹5,500"],
                          ["Car hire from Warangal (round trip)", "₹1,800", "₹2,800", "₹4,000"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Boating (per session)", "₹150", "₹300", "₹600"],
                          ["Bridge entry fee", "₹30", "₹30", "₹30"],
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
                    * Figures are per person, per day (except car hire, a
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Laknavaram</h2>
                  <ul>
                    <li>
                      <strong>Base yourself in Warangal:</strong> It's a far
                      more practical gateway than attempting the full
                      round trip from Hyderabad in one day.
                    </li>
                    <li>
                      <strong>Check bridge and boating status first:</strong>{" "}
                      Both can be suspended in heavy monsoon rain or high
                      water — confirm locally before planning your day
                      around them.
                    </li>
                    <li>
                      <strong>Combine with Ramappa Temple and Bogatha
                      Waterfall:</strong> All three sit within the same
                      Mulugu-district circuit, so plan one efficient loop
                      rather than three separate trips.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance thins out
                      quickly once you're off the main Warangal-Mulugu road.
                    </li>
                    <li>
                      <strong>Go early for photography:</strong> Soft
                      morning light on the water and fewer crowds on the
                      bridge make an early start worthwhile.
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
                          "Base yourself in Warangal for the wider circuit",
                          "Check bridge/boating status before you set off",
                          "Combine with Ramappa Temple and Bogatha Waterfall",
                          "Go early morning for the best light and fewer crowds",
                          "Carry cash for local boat operators and stalls",
                          "Follow posted capacity limits on the bridge",
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
                          "Attempt a same-day Hyderabad round trip lightly",
                          "Assume boating runs during heavy monsoon rain",
                          "Cross the bridge in stormy or high-wind conditions",
                          "Expect a large restaurant scene right at the lake",
                          "Rely on cards away from the main road",
                          "Skip Ramappa Temple if you're already this far out",
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
                    <strong>🗺️ Extend the trip:</strong> Laknavaram pairs
                    naturally with{" "}
                    <Link href="/blog/bogatha-waterfall-travel-guide">
                      Bogatha Waterfall
                    </Link>{" "}
                    and Warangal's Kakatiya heritage sites. See our full{" "}
                    <Link href="/blog/warangal-travel-guide">
                      Warangal travel guide
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
                {[
                  "Laknavaram Lake",
                  "Mulugu District",
                  "Telangana",
                  "Off-beat",
                  "Boating",
                  "Cantilever Bridge",
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

              <RelatedPostsGrid currentSlug="laknavaram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="laknavaram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
