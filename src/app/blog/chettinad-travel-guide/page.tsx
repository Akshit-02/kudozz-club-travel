// src/app/blog/chettinad-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chettinad Travel Guide: Mansions & Cuisine",
  description:
    "Complete Chettinad guide — the grand Nattukottai Chettiar mansions, Chettinad cuisine, Athangudi tile villages, how to reach Karaikudi, heritage-hotel stays, and a full visit plan.",
  keywords:
    "Chettinad travel guide, Chettinad mansions, Karaikudi, Chettinad cuisine, Athangudi tiles, Nattukottai Chettiar, how to reach Chettinad, heritage hotels Tamil Nadu, Chettinad food",
  openGraph: {
    title: "Chettinad Travel Guide: Mansions & Cuisine",
    description:
      "Grand merchant mansions built with imported marble and teak, and one of India's most distinctively spiced cuisines — the complete guide to Chettinad.",
    url: "https://club.kudozz.in/blog/chettinad-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ornate heritage architecture, evoking the grand merchant mansions of the Chettinad region",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chettinad Travel Guide: Mansions & Cuisine",
    description:
      "Grand Nattukottai Chettiar mansions, hand-made Athangudi tiles, and one of India's boldest regional cuisines — the complete Chettinad guide.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chettinad-travel-guide",
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
          headline: "Chettinad Travel Guide: Mansions & Cuisine",
          description:
            "Complete Chettinad guide — the grand Nattukottai Chettiar mansions, Chettinad cuisine, Athangudi tile villages, how to reach Karaikudi, heritage-hotel stays, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/chettinad-travel-guide",
          },
          keywords:
            "Chettinad, Karaikudi, Tamil Nadu, heritage mansions, Chettinad cuisine, Athangudi tiles",
          about: {
            "@type": "Place",
            name: "Chettinad",
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
                name: "Chettinad",
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
    q: "How far is Chettinad from Madurai?",
    a: "Karaikudi, the main base town for the Chettinad region, is roughly 90 km from Madurai — about a 2-hour drive, and a very manageable day trip or short overnight extension.",
  },
  {
    q: "Can you stay inside one of the Chettinad mansions?",
    a: "Yes — a number of the grand mansions have been converted into heritage hotels, letting you actually stay within the ornate architecture rather than just viewing it from outside. Booking ahead is worth it since these have limited rooms.",
  },
  {
    q: "What makes Chettinad cuisine distinctive?",
    a: "It's known for a bold, layered use of spices — including star anise and stone flower (kalpasi) — across an unusually wide range of meat, seafood, and vegetarian dishes, making it one of India's most distinctive regional cuisines.",
  },
  {
    q: "Is Chettinad a day trip or does it need an overnight stay?",
    a: "A rushed day trip from Madurai is possible, but the region is spread across several villages, and mansion visits plus a proper food and craft experience are much better with at least one overnight — ideally in a heritage mansion hotel.",
  },
  {
    q: "What is the best time to visit Chettinad?",
    a: "October to February is best — cooler temperatures make it far more comfortable to explore the spread-out villages and walk between mansions and craft workshops.",
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
  { id: "introduction", title: "Merchant Mansions & Bold Cuisine", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chettinad", level: 2 },
  { id: "things-to-do", title: "Mansions, Cuisine & Craft Villages", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Chettinad Cuisine Guide", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChettinadGuidePage() {
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
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Ornate heritage architecture, evoking the grand merchant mansions of the Chettinad region"
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
                { label: "Chettinad", href: null },
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
                "Chettinad",
                "Karaikudi",
                "Heritage Mansions",
                "Chettinad Cuisine",
                "Heritage",
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
              Chettinad: Merchant Mansions & Legendary Cuisine
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Grand mansions built with imported marble and Burma teak by a
              community of merchant-bankers, and a cuisine so distinctive it
              draws food lovers from across India.
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
                  text: "Sivaganga district, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Merchant Mansions & Bold Cuisine</h2>
                  <p>
                    <strong>Chettinad</strong> refers to a cluster of towns
                    and villages around <strong>Karaikudi</strong> in
                    Sivaganga district — historically home to the{" "}
                    <strong>Nattukottai Chettiar</strong> community, wealthy
                    merchant-bankers whose trading networks stretched across
                    Southeast Asia. Between the 18th and early 20th
                    centuries, they poured that wealth into building grand
                    ancestral mansions using imported materials — Burma
                    teak, Italian marble, Belgian glass — combined with
                    highly ornate local craftsmanship.
                  </p>
                  <p>
                    Many of these mansions still stand today, some
                    beautifully maintained and others quietly fading, but
                    all remarkable to see. A number have been converted into
                    heritage hotels, letting visitors actually stay inside
                    the architecture rather than just admire it from
                    outside.
                  </p>
                  <p>
                    Chettinad is equally famous beyond its buildings for its{" "}
                    <strong>cuisine</strong> — one of India's most
                    distinctively spiced regional food traditions — and for{" "}
                    <strong>Athangudi</strong>, a village known for
                    handmade cement floor tiles still produced using
                    traditional techniques.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Chettinad at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Base Town",
                          value: "Karaikudi, Sivaganga district",
                        },
                        {
                          icon: "🚗",
                          label: "From Madurai",
                          value: "~90 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Mansions, Cuisine, Tiles",
                        },
                        {
                          icon: "🍛",
                          label: "Must Try",
                          value: "Chettinad Chicken/Curry",
                        },
                        {
                          icon: "🎨",
                          label: "Craft Village",
                          value: "Athangudi Tiles",
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
                  <h2>Best Time to Visit Chettinad</h2>
                  <p>
                    Since the region is spread across several villages best
                    explored on foot or by short drives, cooler weather
                    makes a real difference.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable temperatures for walking between mansions, craft villages, and the wider Chettinad countryside.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Interior Tamil Nadu gets genuinely hot in these months, making extended outdoor mansion-hopping uncomfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, occasional rain",
                        text: "Less predictable weather, but generally manageable — not the peak season but not a poor choice either.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Wedding season atmosphere",
                        text: "Traditional Chettiar wedding season sometimes brings extra life to the mansions and villages, though it's not a fixed public event.",
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
                    <strong>Our pick:</strong> October to February — the
                    cooler weather makes walking between the spread-out
                    mansions and villages far more enjoyable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chettinad</h2>
                  <ul>
                    <li>
                      <strong>By road from Madurai:</strong> Roughly 90 km,
                      about a 2-hour drive — the most common approach for
                      most visitors.
                    </li>
                    <li>
                      <strong>By road/rail from Trichy:</strong> A similar
                      half-day journey, with Karaikudi having its own
                      railway station connected to the broader network.
                    </li>
                    <li>
                      <strong>Getting around within Chettinad:</strong> The
                      mansions and craft villages are spread across a fairly
                      wide area — a car or auto for the day is far more
                      practical than trying to walk between villages.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Many mansions are privately
                    owned and only viewable from outside, or by advance
                    arrangement — research or ask locally which specific
                    mansions are open to visitors before planning your
                    route.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Mansions, Cuisine & Craft Villages</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Ornate heritage mansion architecture in the Chettinad region"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Chettinad Mansions</h3>
                  <p>
                    Grand ancestral homes scattered across Karaikudi and
                    surrounding villages like Kanadukathan, built with
                    imported materials and elaborate craftsmanship. Some are
                    privately owned and viewable only from outside; others
                    welcome visitors, and a number have been converted into
                    heritage hotels.
                  </p>
                  <h3>Athangudi Tile Workshops</h3>
                  <p>
                    The village of Athangudi is known for handmade cement
                    floor tiles, still produced by hand using traditional
                    local techniques — small workshops let visitors watch
                    the process, worth a stop even if you're not shopping
                    for tiles.
                  </p>
                  <h3>Chettinad Cuisine</h3>
                  <p>
                    A defining part of any Chettinad visit — see the
                    dedicated food section below for what to try and where.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Chettinad</h2>
                  <p>
                    This is one of the genuine highlights of visiting
                    Chettinad — staying inside a converted heritage mansion
                    gives a far richer sense of the region than a standard
                    hotel.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Basic hotels in Karaikudi",
                          "Simple guesthouses",
                          "Budget lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Smaller heritage-style stays",
                          "Standard hotels in Karaikudi",
                          "Boutique guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹7,000–₹18,000+/night",
                        picks: [
                          "Converted heritage mansion hotels",
                          "Full-board Chettinad cuisine packages",
                          "Restored Chettiar palace stays",
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
                  <blockquote>
                    If you take away one recommendation from this guide:
                    book at least one night in a converted heritage mansion.
                    It's the single best way to experience Chettinad's
                    architecture rather than just look at it.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Mansions & Karaikudi",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check into a heritage stay",
                          "Visit mansions in Karaikudi and Kanadukathan",
                          "Evening Chettinad dinner",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Athangudi & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning visit to Athangudi tile workshops",
                          "Explore smaller Chettinad villages",
                          "Depart toward Madurai or onward destination",
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
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for combining Chettinad with a wider Madurai-region
                    circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Chettinad Cuisine Guide</h2>
                  <p>
                    Chettinad cuisine is one of India's most distinctive
                    regional food traditions, known for its bold, layered
                    use of spices across an unusually wide range of dishes.
                  </p>
                  <ul>
                    <li>
                      <strong>Chettinad Chicken/Mutton Curry:</strong> The
                      most famous dish associated with the region, built
                      around a roasted spice blend that typically includes
                      star anise and other warm spices.
                    </li>
                    <li>
                      <strong>Kalpasi (stone flower):</strong> A distinctive
                      lichen-based spice used in many Chettinad dishes,
                      giving them a smoky depth found in few other Indian
                      cuisines.
                    </li>
                    <li>
                      <strong>Seafood dishes:</strong> Given the community's
                      historical trading links, Chettinad cuisine has a
                      strong seafood tradition alongside its meat dishes.
                    </li>
                    <li>
                      <strong>Vegetarian specialities:</strong> Despite its
                      reputation for meat dishes, Chettinad also has a rich
                      vegetarian repertoire, worth exploring alongside the
                      non-vegetarian classics.
                    </li>
                    <li>
                      <strong>Where to eat it properly:</strong> Seek out a
                      local Chettinad restaurant or a heritage-hotel kitchen
                      rather than a generic South Indian restaurant
                      elsewhere claiming the name.
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
                          ["Accommodation/night", "₹1,500", "₹4,000", "₹12,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Local car hire/day", "₹1,500", "₹2,200", "₹3,000"],
                          ["Athangudi tile workshop visit", "Free–₹200", "Free–₹200", "Free–₹200"],
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
                    * Figures are per person, per day (except car hire, best
                    split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chettinad</h2>
                  <ul>
                    <li>
                      <strong>Check which mansions are open before
                      visiting:</strong> Many are privately owned homes,
                      only viewable from outside or by prior arrangement.
                    </li>
                    <li>
                      <strong>Hire a car for the day:</strong> The mansions
                      and craft villages are spread across a wide area, ill
                      suited to walking between them.
                    </li>
                    <li>
                      <strong>Eat at a genuine Chettinad kitchen:</strong>{" "}
                      Don't miss trying real Chettinad food at a local
                      establishment or heritage-hotel kitchen, not just a
                      generic restaurant using the name.
                    </li>
                    <li>
                      <strong>Book heritage stays ahead:</strong> The nicer
                      converted mansions have limited rooms and fill up,
                      especially on weekends.
                    </li>
                    <li>
                      <strong>Don't rush it:</strong> Chettinad rewards a
                      slower pace across two days rather than a single
                      hurried visit.
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
                          "Stay at least one night in a heritage mansion",
                          "Hire a car for getting between villages",
                          "Try authentic Chettinad food at a local kitchen",
                          "Visit an Athangudi tile workshop",
                          "Check mansion visiting hours/access in advance",
                          "Give yourself two unhurried days",
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
                          "Assume every mansion is open to visitors",
                          "Try to walk between villages without a vehicle",
                          "Judge Chettinad cuisine by a generic city restaurant",
                          "Arrive at a heritage stay without booking ahead",
                          "Rush the visit into a single day if you can avoid it",
                          "Skip Athangudi thinking it's only for shoppers",
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
                    <strong>🗺️ Extend the trip:</strong> Chettinad pairs
                    naturally with a wider Madurai-region trip. See our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for the region.
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
                  "Chettinad",
                  "Karaikudi",
                  "Tamil Nadu",
                  "Chettinad Cuisine",
                  "Heritage Mansions",
                  "Athangudi Tiles",
                  "Heritage",
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

              <RelatedPostsGrid currentSlug="chettinad-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chettinad-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
