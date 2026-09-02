// src/app/blog/gangotri-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Gangotri Travel Guide: Temple, Gaumukh Trek & Tips",
  description:
    "Complete Gangotri guide — the temple marking Ganga's descent, the Gaumukh glacier trek, Tapovan meadow, permits, how to reach via Uttarkashi, where to stay, and a full visit plan.",
  keywords:
    "Gangotri, Gangotri temple, Char Dham, Gaumukh trek, Ganga source, Bhagirathi river, Uttarkashi, Tapovan, how to reach Gangotri, Gangotri glacier, Uttarakhand pilgrimage",
  openGraph: {
    title: "Gangotri Travel Guide: Temple, Gaumukh Trek & Tips",
    description:
      "One of the Char Dham, marking the mythological descent of the Ganga at 3,100m — the temple, the Gaumukh glacier trek, and how to plan your visit.",
    url: "https://club.kudozz.in/blog/gangotri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Rugged high-Himalayan glacier-fed terrain near Gangotri, with the Bhagirathi peaks rising above the valley",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangotri Travel Guide: Temple, Gaumukh Trek & Tips",
    description:
      "The temple marking Ganga's descent, the Gaumukh glacier trek, and how to reach Gangotri via Uttarkashi.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gangotri-travel-guide",
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
          headline: "Gangotri Travel Guide: Temple, Gaumukh Trek & Tips",
          description:
            "Complete Gangotri guide — the temple marking Ganga's descent, the Gaumukh glacier trek, Tapovan meadow, permits, how to reach via Uttarkashi, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/gangotri-travel-guide",
          },
          keywords:
            "Gangotri, Char Dham, Gaumukh trek, Ganga source, Bhagirathi river, Uttarkashi, Tapovan",
          about: {
            "@type": "Place",
            name: "Gangotri",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand",
                item: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Gangotri",
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
    q: "Is Gangotri the actual source of the Ganga river?",
    a: "Gangotri is the mythological and spiritual source — the point where, in Hindu tradition, the goddess Ganga descended to earth. The physical glacial source of the river (called the Bhagirathi at this stage) is Gaumukh, the snout of the Gangotri Glacier, roughly 18-19km further up the valley by trek.",
  },
  {
    q: "Do I need a permit for the Gaumukh trek?",
    a: "Yes — the Gaumukh trek falls within the Gangotri National Park, and trekkers need a forest permit obtainable at the check post in Gangotri town, along with an ID. Group sizes and daily entries are sometimes regulated, and going with a registered local guide is strongly recommended, especially beyond Gaumukh toward Tapovan.",
  },
  {
    q: "How difficult is the trek from Gangotri to Gaumukh?",
    a: "It's a moderate trek of roughly 18-19km one way, mostly along a rocky glacial valley trail with a gradual but steady climb. Most trekkers cover it in 2 days with an overnight at Bhojwasa. Continuing beyond Gaumukh to Tapovan (at nearly 4,463m) is significantly harder, involving a steep, exposed climb and glacier-adjacent terrain best attempted only by experienced trekkers.",
  },
  {
    q: "When does Gangotri temple open and close?",
    a: "The temple typically opens around Akshaya Tritiya in late April or early May and closes around Diwali in late October or early November, when the deity's rituals move to Mukhba (Mukhimath) village for winter. Confirm exact dates for your travel year, as they shift slightly.",
  },
  {
    q: "How do I reach Gangotri — is there an airport or train station nearby?",
    a: "No — Gangotri has no airport or railway station. The nearest airport is Jolly Grant in Dehradun (~250km) and the nearest railheads are Rishikesh and Haridwar. From there it's a full road journey via Uttarkashi, the main base town for the region.",
  },
  {
    q: "Can Gangotri be combined with Yamunotri in one trip?",
    a: "Yes — Gangotri and Yamunotri are the traditional Char Dham pairing, often visited back-to-back since both lie in the western part of the pilgrimage circuit. They're not directly road-connected to each other, so most itineraries route through Uttarkashi or back via Rishikesh, adding a day or two of driving between them.",
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
  { id: "introduction", title: "Where the Ganga Meets the Mountains", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gangotri", level: 2 },
  { id: "attractions", title: "The Temple, Gaumukh & Tapovan", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GangotriGuidePage() {
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
              alt="Rugged high-Himalayan glacier-fed terrain near Gangotri, with the Bhagirathi peaks rising above the valley"
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
                { label: "Uttarakhand", href: "/blog/uttarakhand-travel-guide" },
                { label: "Gangotri", href: null },
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
                "Gangotri",
                "Char Dham",
                "Gaumukh Trek",
                "Ganga River",
                "Uttarakhand",
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
              Gangotri: Temple, Gaumukh Trek & Complete Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the Char Dham, marking the mythological descent of the
              Ganga at 3,100m on the Bhagirathi river — the temple, the
              Gaumukh glacier trek, and how to plan your visit.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Uttarkashi District, Uttarakhand",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,500 words",
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
                  <h2>Where the Ganga Meets the Mountains</h2>
                  <p>
                    <strong>Gangotri</strong> is one of the four Char Dham
                    sites in{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>
                    , and holds a place in Hindu tradition as the point
                    where the goddess Ganga is believed to have descended to
                    earth, tamed by Lord Shiva's matted locks before flowing
                    on as the river that sustains much of northern India.
                    The temple sits at roughly 3,100 metres on the banks of
                    the Bhagirathi river — the name the Ganga carries at this
                    stage of its journey — surrounded by dramatic granite
                    peaks.
                  </p>
                  <p>
                    Gangotri is also the gateway to one of the Himalaya's
                    most rewarding treks: the roughly 18-19km trail to{" "}
                    <strong>Gaumukh</strong>, the actual snout of the
                    Gangotri Glacier and the river's real physical source.
                    Experienced trekkers often extend the journey further to{" "}
                    <strong>Tapovan</strong>, a stunning high-altitude meadow
                    beneath Shivling peak at nearly 4,463 metres.
                  </p>
                  <p>
                    Most journeys to Gangotri route through{" "}
                    <strong>Uttarkashi</strong>, the district headquarters
                    and main base town of the region, roughly 100km before
                    Gangotri itself — a useful stop for supplies,
                    acclimatisation, and permits.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Gangotri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Uttarkashi District, Uttarakhand",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~3,100m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "May-Jun, Sep-Oct" },
                        {
                          icon: "🚪",
                          label: "Temple Open",
                          value: "Late Apr/May – Nov",
                        },
                        {
                          icon: "🚶",
                          label: "Gaumukh Trek",
                          value: "~18-19km, needs permit",
                        },
                        {
                          icon: "🏔️",
                          label: "Base Town",
                          value: "Uttarkashi (~100km before)",
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
                  <h2>Best Time to Visit Gangotri</h2>
                  <p>
                    Both the temple visit and the Gaumukh trek are best
                    planned around the same two windows, avoiding the
                    monsoon's landslide risk on the approach roads.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Excellent — our pick",
                        text: "Pleasant temperatures, stable trail conditions on the Gaumukh route, and the temple freshly reopened for the season.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-red-50 border-red-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain increases landslide risk on the Rishikesh-Uttarkashi-Gangotri road, and the Gaumukh trail can become slippery and less predictable.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Clear and crisp",
                        text: "Post-monsoon skies bring some of the sharpest mountain views of the year, with cooler but very trekkable conditions.",
                      },
                      {
                        season: "Nov – Apr",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Temple closed",
                        text: "Heavy snow closes the temple and the route beyond Uttarkashi is largely inaccessible; the deity's winter rituals move to Mukhba village.",
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
                    <strong>Our pick:</strong> May-June or September-October
                    — both give the Gaumukh trek its best trail conditions
                    while avoiding the monsoon's landslide risk on the
                    approach road.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gangotri</h2>
                  <p>
                    Gangotri has no airport or railway station — the journey
                    is entirely by road, with Uttarkashi as the key
                    staging point.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> The nearest airport is Jolly
                      Grant in Dehradun, roughly 250km away.
                    </li>
                    <li>
                      <strong>By train:</strong> The nearest railheads are
                      Rishikesh and Haridwar.{" "}
                      <Link href="/blog/rishikesh-adventure-travel-guide">
                        Rishikesh
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                      are the usual starting points for taxis and buses
                      heading up the Bhagirathi valley.
                    </li>
                    <li>
                      <strong>By road:</strong> From Rishikesh, it's roughly
                      8-9 hours to Uttarkashi, and a further 3-4 hours on to
                      Gangotri — the last stretch is a narrow mountain road,
                      often split with an overnight halt at Uttarkashi.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Sort out your Gaumukh trek
                    forest permit at the Uttarkashi or Gangotri check post
                    early in the day — processing can take time, and doing
                    it the evening before your trek start avoids a delayed
                    morning departure.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>The Temple, Gaumukh & Tapovan</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Glacial valley trail toward Gaumukh, the source of the Bhagirathi river near Gangotri"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Gangotri Temple</h3>
                  <p>
                    Built in a distinctive white, spire-topped style, the
                    temple sits directly on the Bhagirathi's banks. A
                    submerged rock nearby, visible only when water levels
                    drop in winter, is traditionally believed to be the spot
                    where Ganga first touched earth.
                  </p>
                  <h3>Gaumukh Glacier Trek</h3>
                  <p>
                    The roughly 18-19km trail to <strong>Gaumukh</strong>{" "}
                    ("cow's mouth," for the glacier snout's shape) follows
                    the Bhagirathi through the Gangotri National Park, past
                    dramatic granite walls, to the point where the glacier
                    literally gives birth to the river. Most trekkers cover
                    it over two days with an overnight at Bhojwasa, roughly
                    the halfway point. A forest permit, arranged at the
                    Gangotri check post, is required.
                  </p>
                  <h3>Tapovan Meadow</h3>
                  <p>
                    Beyond Gaumukh, a steep and considerably harder climb
                    leads to <strong>Tapovan</strong>, a high alpine meadow
                    at nearly 4,463 metres directly beneath the sheer granite
                    face of Shivling peak. This extension is for experienced,
                    well-acclimatised trekkers only — the terrain is
                    glacier-adjacent, exposed, and demands proper gear and
                    guidance.
                  </p>
                  <h3>Uttarkashi</h3>
                  <p>
                    The main town of the region and a common overnight stop
                    on the way to Gangotri, Uttarkashi has the Vishwanath
                    Temple, decent market facilities, and is also the base
                    for reaching the{" "}
                    <Link href="/blog/dayara-bugyal-travel-guide">
                      Dayara Bugyal
                    </Link>{" "}
                    meadows, a popular high-altitude trek in the same
                    district.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay near Gangotri</h2>
                  <p>
                    Gangotri town itself has modest, seasonal accommodation.
                    Uttarkashi, roughly 100km before it, offers a wider and
                    more comfortable range if you'd rather stage the trip
                    from there.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛖",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Ashram-run dormitories near the temple",
                          "GMVN budget rooms in Gangotri",
                          "Basic guesthouses in Uttarkashi",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "GMVN Tourist Rest House, Gangotri",
                          "Private hotels in Uttarkashi market",
                          "Riverside guesthouses along the route",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🛏️",
                        range: "₹4,500–₹8,000/night",
                        picks: [
                          "Better-appointed hotels in Uttarkashi",
                          "Well-reviewed private properties in Gangotri",
                          "Rooms with river or valley views",
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
                  <h2>Suggested Visit Plan (3-4 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Rishikesh/Haridwar to Uttarkashi",
                        color: "bg-amber-700",
                        activities: [
                          "Early start from Rishikesh or Haridwar",
                          "Drive via Tehri to Uttarkashi",
                          "Overnight at Uttarkashi, sort permits",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Uttarkashi to Gangotri, Temple Darshan",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Gangotri (~100km)",
                          "Temple darshan on the Bhagirathi's banks",
                          "Prepare for the Gaumukh trek start",
                        ],
                      },
                      {
                        day: "Day 3-4",
                        title: "Gaumukh Trek",
                        color: "bg-forest-600",
                        activities: [
                          "Trek to Bhojwasa, overnight",
                          "Onward to Gaumukh, return to Gangotri",
                          "(Extend a day for Tapovan if experienced)",
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
                    * Many pilgrims pair Gangotri with{" "}
                    <Link href="/blog/yamunotri-travel-guide">Yamunotri</Link>{" "}
                    as the traditional Char Dham combination — budget extra
                    driving days to connect the two.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Gangotri</h2>
                  <ul>
                    <li>
                      <strong>Dhabas near the temple and market:</strong>{" "}
                      Simple vegetarian thalis, parathas, and hot chai —
                      standard pilgrim fare.
                    </li>
                    <li>
                      <strong>Uttarkashi restaurants:</strong> A wider range
                      of North Indian vegetarian options if you're based
                      there before or after Gangotri.
                    </li>
                    <li>
                      <strong>Trailside tea stalls (seasonal):</strong> Basic
                      hot food along the Gaumukh trail, mainly around
                      Bhojwasa, though supplies thin out the higher you go —
                      carry some of your own.
                    </li>
                  </ul>
                  <p>
                    As with the other Char Dham towns, expect a strictly
                    vegetarian food culture throughout Gangotri and along the
                    trek route.
                  </p>
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
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Accommodation/night", "₹900", "₹3,000", "₹6,000"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          [
                            "Taxi (Rishikesh-Gangotri, round trip)",
                            "₹9,500",
                            "₹15,000",
                            "₹22,000",
                          ],
                          ["Gaumukh trek permit + guide/day", "₹500", "₹1,500", "₹3,000"],
                          ["Porter/mule hire (optional)", "₹1,000", "₹1,800", "₹2,500"],
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
                    * Figures are per person, per day, except the taxi fare,
                    which is a full round-trip estimate.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Gangotri</h2>
                  <ul>
                    <li>
                      <strong>Arrange your Gaumukh permit early:</strong>{" "}
                      Available at the Gangotri check post — go early in the
                      day, and carry ID.
                    </li>
                    <li>
                      <strong>Break the journey at Uttarkashi:</strong>{" "}
                      Helps with acclimatisation and avoids a single
                      punishing day of mountain driving.
                    </li>
                    <li>
                      <strong>Don't underestimate the Gaumukh trail:</strong>{" "}
                      It's rocky, glacier-fed terrain that can shift year to
                      year — a local guide is genuinely useful, not just a
                      formality.
                    </li>
                    <li>
                      <strong>Leave Tapovan to experienced trekkers:</strong>{" "}
                      The stretch beyond Gaumukh is steep, exposed, and
                      close to glacier ice — not a casual extension.
                    </li>
                    <li>
                      <strong>Watch the monsoon shoulder months:</strong>{" "}
                      Late July into August brings real landslide risk on
                      the approach road — build slack into your schedule.
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
                          "Get your Gaumukh forest permit early in the day",
                          "Break the drive with a night in Uttarkashi",
                          "Hire a local guide for the glacier trail",
                          "Carry warm layers even in summer months",
                          "Start the trek early to avoid afternoon weather",
                          "Carry enough cash — ATMs thin out past Uttarkashi",
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
                          "Attempt Tapovan without prior high-altitude experience",
                          "Skip the forest permit at the check post",
                          "Travel the route in peak monsoon (Jul-Aug)",
                          "Underestimate the cold, even in June",
                          "Rely on card payments beyond Uttarkashi",
                          "Trek beyond Gaumukh without a guide",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Gangotri with{" "}
                    <Link href="/blog/yamunotri-travel-guide">Yamunotri</Link>{" "}
                    for the traditional Char Dham combination, add on the{" "}
                    <Link href="/blog/dayara-bugyal-travel-guide">
                      Dayara Bugyal
                    </Link>{" "}
                    meadows near Uttarkashi, or start your journey from{" "}
                    <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                    — the traditional Char Dham gateway town.
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
                  "Gangotri",
                  "Char Dham",
                  "Uttarakhand",
                  "Gaumukh Trek",
                  "Ganga River",
                  "Uttarkashi",
                  "Pilgrimage",
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

              <RelatedPostsGrid currentSlug="gangotri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gangotri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
