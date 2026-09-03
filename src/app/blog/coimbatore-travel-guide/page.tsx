// src/app/blog/coimbatore-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Coimbatore Travel Guide: Gateway to the Nilgiris",
  description:
    "Complete Coimbatore guide — the Adiyogi statue at Isha Yoga Center, Marudamalai Temple, best time to visit, how to reach, and using the city as a base for Ooty and Valparai.",
  keywords:
    "Coimbatore travel guide, Adiyogi statue, Isha Yoga Center, Marudamalai Temple, Coimbatore to Ooty, Coimbatore to Valparai, best time to visit Coimbatore, how to reach Coimbatore, Manchester of South India",
  openGraph: {
    title: "Coimbatore Travel Guide: Gateway to the Nilgiris",
    description:
      "A textile city turned spiritual landmark and Nilgiris gateway — the complete guide to Coimbatore.",
    url: "https://club.kudozz.in/blog/coimbatore-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "City skyline landscape, evoking Coimbatore's role as a gateway city in western Tamil Nadu",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Coimbatore Travel Guide: Gateway to the Nilgiris",
    description:
      "A textile city turned spiritual landmark and Nilgiris gateway — the complete Coimbatore guide.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/coimbatore-travel-guide",
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
          headline: "Coimbatore Travel Guide: Gateway to the Nilgiris",
          description:
            "Complete Coimbatore guide — the Adiyogi statue at Isha Yoga Center, Marudamalai Temple, best time to visit, how to reach, and using the city as a base for Ooty and Valparai.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/coimbatore-travel-guide",
          },
          keywords: "Coimbatore, Tamil Nadu, Isha Yoga Center, Nilgiris gateway",
          about: {
            "@type": "Place",
            name: "Coimbatore",
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
                name: "Coimbatore",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is Coimbatore worth a dedicated visit, or just a gateway city?",
    a: "It works well both ways — the Adiyogi statue at Isha Yoga Center alone justifies a half-day stop, and the city's mild climate and food scene make a day or two worthwhile. Most travellers, though, use it primarily as the entry point to Ooty and Valparai.",
  },
  {
    q: "How far is Ooty or Valparai from Coimbatore?",
    a: "Ooty is roughly 85 km (about 3 hours by road), and Valparai is roughly 100 km (also around 3-3.5 hours given the ghat road with its many hairpin bends). Both are commonly reached via an early-morning start from Coimbatore.",
  },
  {
    q: "What is the Adiyogi statue?",
    a: "A 112-foot bust of Shiva at the Isha Yoga Center on the city's outskirts, among the largest bust sculptures in the world, created under the guidance of spiritual teacher Sadhguru. It draws both spiritual visitors and general tourists.",
  },
  {
    q: "What is the best time to visit Coimbatore?",
    a: "October to February is most comfortable, though Coimbatore's climate is milder year-round than much of the Tamil Nadu plains, given its proximity to the Western Ghats.",
  },
  {
    q: "Is Coimbatore a good base for the Nilgiris?",
    a: "Yes — with an airport, major rail junction, and good road connections, it's the most practical jumping-off point for both Ooty and Valparai, and a sensible place to spend the night before an early hill drive.",
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
  { id: "introduction", title: "Manchester of South India", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Coimbatore", level: 2 },
  { id: "things-to-do", title: "Adiyogi, Temples & Parks", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CoimbatoreGuidePage() {
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
              src="/images/destinations/chandigarh/hero.jpg"
              alt="City skyline landscape, evoking Coimbatore's role as a gateway city in western Tamil Nadu"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Coimbatore", href: null },
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
              {["Coimbatore", "Isha Yoga Center", "Adiyogi", "Nilgiris Gateway", "Tamil Nadu"].map(
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
              Coimbatore: Adiyogi, Temples & Nilgiris Gateway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A historic textile city turned home to one of the world's
              largest bust sculptures, and the most practical launchpad for
              Ooty and Valparai.
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
                  text: "Western Tamil Nadu",
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
                  <h2>Manchester of South India</h2>
                  <p>
                    <strong>Coimbatore</strong>, a major city in western{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu
                    </Link>
                    , earned the nickname "Manchester of South India" for
                    its long history as a textile-manufacturing hub. Today
                    it's just as well known for a very different kind of
                    landmark and for its practical role as the gateway to
                    the Nilgiris.
                  </p>
                  <p>
                    The city's most distinctive modern sight is the Adiyogi
                    statue at the Isha Yoga Center — a 112-foot bust of
                    Shiva, among the largest bust sculptures in the world.
                    Beyond that, Coimbatore is where most travellers pass
                    through en route to Ooty or Valparai, making its
                    airport, rail junction, and road links as important as
                    its sightseeing.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏙️</span> Coimbatore at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Region", value: "Western Tamil Nadu" },
                        { icon: "✈️", label: "Airport", value: "Coimbatore (CJB)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "🗿", label: "Known For", value: "Adiyogi Statue" },
                        { icon: "🚗", label: "Gateway To", value: "Ooty, Valparai" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200–₹5,500" },
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
                  <h2>Best Time to Visit Coimbatore</h2>
                  <p>
                    Coimbatore's climate is milder than much of the Tamil
                    Nadu plains year-round, given its proximity to the
                    Western Ghats, but the cooler months are still the most
                    comfortable.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable, mild temperatures — the most pleasant window for city sightseeing and for heading up into the hills.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm",
                        text: "Noticeably warmer than winter, though still milder than much of inland Tamil Nadu — manageable with an early start.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Periodic rain, generally lighter than the Western Ghats hill towns nearby — still a reasonable time to pass through.",
                      },
                      {
                        season: "Dec",
                        emoji: "🧘",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Isha events season",
                        text: "The Isha Yoga Center hosts larger gatherings and events around this time — worth checking the calendar if that interests you.",
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
                    <strong>Our pick:</strong> October to February —
                    comfortable temperatures for city sightseeing and the
                    easiest window for an onward hill drive.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Coimbatore</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Coimbatore International
                      Airport (CJB) has good domestic connectivity and some
                      international routes, making it the primary entry
                      point for Nilgiris-bound travellers.
                    </li>
                    <li>
                      <strong>By rail:</strong> A major junction on the
                      Southern Railway network, well connected to Chennai,
                      Bangalore, and Kerala.
                    </li>
                    <li>
                      <strong>By road:</strong> National highways connect
                      Coimbatore to Chennai, Bangalore, Kochi, and the hill
                      towns of Ooty and Valparai.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If heading onward to Ooty
                    or Valparai the same day, start early — the ghat roads
                    are best driven in daylight and before afternoon
                    traffic builds up.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Adiyogi, Temples & Parks</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="City landscape, evoking Coimbatore's blend of urban and Western Ghats scenery"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Adiyogi Statue & Isha Yoga Center</h3>
                  <p>
                    A 112-foot bust of Shiva on the city's outskirts,
                    created under the guidance of spiritual teacher
                    Sadhguru — among the largest bust sculptures in the
                    world, and a striking sight for spiritual visitors and
                    casual tourists alike.
                  </p>
                  <h3>Marudamalai Temple</h3>
                  <p>
                    A notable Murugan temple set on a hillock at the city's
                    edge, reachable by road or a flight of steps, with wide
                    views over Coimbatore from the top.
                  </p>
                  <h3>Perur Pateeswarar Temple</h3>
                  <p>
                    A historic Chola-era Shiva temple known for its
                    intricate stone carvings and mandapams.
                  </p>
                  <h3>VOC Park</h3>
                  <p>
                    A central city park with a small zoo and children's
                    train — an easy, relaxed stop for families.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Coimbatore</h2>
                  <p>
                    As a large city, Coimbatore has a wide range of
                    accommodation, concentrated around the airport, railway
                    station, and city centre.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,000/night",
                        picks: [
                          "Budget hotels near the railway station",
                          "Business lodges",
                          "Chain budget hotels",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "City-centre business hotels",
                          "Airport-area hotels",
                          "Mid-range chain properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,000–₹12,000+/night",
                        picks: [
                          "Premium business hotels",
                          "Upscale city properties",
                          "Full-service resorts on the outskirts",
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
                        day: "Day 1",
                        title: "City & Isha Yoga Center",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Adiyogi statue and Isha Yoga Center",
                          "Marudamalai Temple in the evening",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Onward to the Hills",
                        color: "bg-sky-600",
                        activities: [
                          "Early departure toward Ooty or Valparai",
                          "Perur Pateeswarar Temple if time allows before leaving",
                          "VOC Park for families with more time",
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
                    * Most travellers use Coimbatore as a one-night stop
                    before heading up to{" "}
                    <Link href="/blog/ooty-travel-guide">Ooty</Link> or{" "}
                    <Link href="/blog/valparai-travel-guide">Valparai</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Coimbatore</h2>
                  <ul>
                    <li>
                      <strong>Kongunadu cuisine:</strong> The local regional
                      style, featuring dishes like Kongu-style chicken
                      curry and distinctive millet preparations.
                    </li>
                    <li>
                      <strong>South Indian breakfast staples:</strong> Idli,
                      dosa, and filter coffee are widely available and
                      consistently good across the city.
                    </li>
                    <li>
                      <strong>Isha Yoga Center dining:</strong> Simple,
                      wholesome vegetarian meals are available for visitors
                      to the center.
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹7,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport/day", "₹350", "₹700", "₹1,500"],
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
                    * Figures are per person, per day, for the city stop
                    only.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Coimbatore</h2>
                  <ul>
                    <li>
                      <strong>Book Isha Yoga Center slots ahead:</strong> If
                      wanting a guided experience or specific programme,
                      check timings and book in advance.
                    </li>
                    <li>
                      <strong>Use it as a launch point:</strong> An early
                      start from Coimbatore makes the ghat drive to Ooty or
                      Valparai far more comfortable.
                    </li>
                    <li>
                      <strong>Dress modestly at temples:</strong> Standard
                      etiquette applies at Marudamalai and Perur
                      Pateeswarar.
                    </li>
                    <li>
                      <strong>Don't overplan the city itself:</strong> Most
                      visitors are efficient here — a day or two is
                      typically enough before moving on.
                    </li>
                  </ul>

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
                          "Visit the Adiyogi statue, even on a tight schedule",
                          "Start hill drives early in the day",
                          "Use Coimbatore as your Nilgiris base",
                          "Try Kongunadu regional dishes",
                          "Check Isha Yoga Center timings in advance",
                          "Keep the city stop efficient and short",
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
                          "Start a ghat-road drive late in the afternoon",
                          "Skip the Adiyogi statue thinking it's minor",
                          "Overbook the city itself beyond a day or two",
                          "Forget modest dress at temples",
                          "Assume the whole state has Coimbatore's mild climate",
                          "Rush through without checking onward road conditions",
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
                    <strong>🗺️ Extend the trip:</strong> Head up into the
                    hills at{" "}
                    <Link href="/blog/ooty-travel-guide">Ooty</Link> or{" "}
                    <Link href="/blog/valparai-travel-guide">Valparai</Link>,
                    or see our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for the wider state.
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
                {["Coimbatore", "Tamil Nadu", "Isha Yoga Center", "Nilgiris Gateway"].map(
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

              <RelatedPostsGrid currentSlug="coimbatore-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="coimbatore-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
