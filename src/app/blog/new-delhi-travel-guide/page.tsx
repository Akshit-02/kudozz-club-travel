// src/app/blog/new-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "New Delhi Travel Guide: India Gate, Rajpath & More",
  description:
    "New Delhi travel guide: India Gate, Kartavya Path, Rashtrapati Bhavan, Parliament House, Jantar Mantar, itinerary, budget tips, and FAQs for Lutyens' Delhi.",
  keywords:
    "New Delhi travel guide, India Gate, Rajpath Kartavya Path, Rashtrapati Bhavan, things to do in New Delhi, Lutyens Delhi, Parliament House Delhi, Jantar Mantar Delhi, Sansad Bhavan, Mughal Gardens Amrit Udyan, National War Memorial Delhi",
  openGraph: {
    title: "New Delhi Travel Guide: India Gate, Rajpath & More",
    description:
      "India Gate, Kartavya Path, Rashtrapati Bhavan, Parliament House and Jantar Mantar — the complete guide to Lutyens' planned imperial capital.",
    url: "https://club.kudozz.in/blog/new-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Red sandstone fort walls at golden hour, evoking the sandstone facades of Lutyens' New Delhi government buildings",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "New Delhi Travel Guide: India Gate, Rajpath & More",
    description:
      "India Gate, Kartavya Path, Rashtrapati Bhavan, Parliament House and Jantar Mantar — the complete guide to Lutyens' planned imperial capital.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/new-delhi-travel-guide",
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
          headline: "New Delhi Travel Guide: India Gate, Rajpath & More",
          description:
            "New Delhi travel guide: India Gate, Kartavya Path, Rashtrapati Bhavan, Parliament House, Jantar Mantar, itinerary, budget tips, and FAQs for Lutyens' Delhi.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/new-delhi-travel-guide",
          },
          keywords:
            "New Delhi travel guide, India Gate, Rajpath Kartavya Path, Rashtrapati Bhavan, things to do in New Delhi, Lutyens Delhi, Parliament House Delhi, Jantar Mantar Delhi",
          about: {
            "@type": "Place",
            name: "New Delhi",
            address: {
              "@type": "PostalAddress",
              addressLocality: "New Delhi",
              addressRegion: "Delhi",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "New Delhi",
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
    q: "Is New Delhi different from Delhi?",
    a: "Yes. \"Delhi\" (officially the National Capital Territory of Delhi) is the entire metropolis of over 30 million people, made up of many districts and historic cities layered on top of one another. \"New Delhi\" is one specific, much smaller planned district within it — the administrative core built by the British between 1911 and 1931, home to Rashtrapati Bhavan, Parliament House, and the central government secretariats. New Delhi is also a distinct municipal area governed by the New Delhi Municipal Council (NDMC), separate from the wider Municipal Corporation of Delhi that governs most of the rest of the city.",
  },
  {
    q: "What is the difference between Old Delhi and New Delhi?",
    a: "Old Delhi refers to Shahjahanabad, the walled Mughal city built by Emperor Shah Jahan in the 1600s, centred on the Red Fort, Jama Masjid, and the dense lanes of Chandni Chowk. New Delhi is a completely different, much younger district — a planned imperial capital designed by British architects Edwin Lutyens and Herbert Baker roughly three centuries later, with wide tree-lined avenues, government buildings, and colonial-era bungalows rather than Mughal-era monuments and bazaars.",
  },
  {
    q: "Can tourists enter Rashtrapati Bhavan?",
    a: "Parts of it, yes, but with restrictions. The Rashtrapati Bhavan Museum Complex and the Amrit Udyan (formerly Mughal Gardens) are open to the public on specific days and require free online booking in advance, with security screening on arrival. A separate, more limited guided tour of select interior rooms is also periodically available by prior booking. Casual walk-in access to the main building or its working areas is not permitted — this remains the President of India's official residence and workplace.",
  },
  {
    q: "Is Parliament House open to the public?",
    a: "No, not for casual sightseeing. Sansad Bhavan (Parliament House) and the new Parliament building are secure government buildings, and interior visits are generally limited to those with an appointment, a Member of Parliament's pass, or accredited press during session. Most visitors view the circular colonnaded facade of the old Parliament House from Sansad Marg or the surrounding streets rather than entering.",
  },
  {
    q: "Is India Gate free to visit?",
    a: "Yes. There's no entry fee to walk around India Gate, the surrounding lawns, or the adjoining National War Memorial — it's open to the public at all times, though the lawns and pathways are best experienced in the early morning or evening when both the heat and the crowds are lower.",
  },
  {
    q: "How much time do I need for New Delhi sightseeing?",
    a: "A focused half-day (roughly 4 to 5 hours) covers the essentials on foot and by short cab or auto hops: India Gate, Kartavya Path, a drive-past of Rashtrapati Bhavan and Parliament House, and Jantar Mantar. A full day allows a more relaxed pace plus the National Museum and time for the Rashtrapati Bhavan Museum Complex or Amrit Udyan if your visit coincides with their open dates.",
  },
  {
    q: "Was Rajpath renamed?",
    a: "Yes. In September 2022, the Indian government renamed the ceremonial boulevard running from Rashtrapati Bhavan to India Gate from Rajpath (\"King's Way\") to Kartavya Path (\"Path of Duty\"), as part of a broader redevelopment of the Central Vista area. The road itself, and its role as the route of the annual Republic Day parade, is unchanged — only the name and some of the surrounding public spaces were updated.",
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
  { id: "introduction", title: "Why New Delhi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach & Get Around", level: 2 },
  { id: "india-gate", title: "India Gate & National War Memorial", level: 2 },
  { id: "kartavya-path", title: "Kartavya Path (Rajpath)", level: 2 },
  { id: "rashtrapati-bhavan", title: "Rashtrapati Bhavan & Amrit Udyan", level: 2 },
  { id: "parliament-house", title: "Parliament House (Sansad Bhavan)", level: 2 },
  { id: "jantar-mantar", title: "Jantar Mantar", level: 2 },
  { id: "national-museum", title: "National Museum", level: 2 },
  { id: "itinerary", title: "Suggested Itinerary", level: 2 },
  { id: "food-guide", title: "Where to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── New Delhi-specific gear ────────────────────────────────────────────────────
const NEW_DELHI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for wide, shade-poor boulevards, security screening, and long stretches of open lawn and stone",
    emoji: "🏛️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Kartavya Path alone is over 2 km of exposed walking between India Gate and the Vijay Chowk end near Rashtrapati Bhavan, with little shade along the way.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "A single loop of India Gate, Kartavya Path, and the government buildings covers several flat but shade-poor kilometres on foot.",
      },
      {
        name: "Wide-Brim Hat or Cap",
        description:
          "The lawns and avenues around India Gate and Kartavya Path are almost entirely open sky — there's very little tree cover directly on the boulevard.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.1k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("travel+sun+hat+cap"),
        tag: "Sun protection",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Unlike Old Delhi's narrow, shaded lanes, New Delhi's monumental avenues offer almost no shade cover during midday hours.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Vendors and cafés thin out considerably around the government core compared to markets elsewhere in the city — carrying your own water is genuinely useful.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Summer temperatures regularly cross 40°C on Kartavya Path's open stretches, with limited shops nearby to buy water on the spot.",
      },
      {
        name: "Clear/Transparent Small Bag",
        description:
          "Security checks are routine and strict near India Gate, Kartavya Path, Rashtrapati Bhavan, and especially Parliament House — a smaller, simple bag clears faster.",
        price: "₹899",
        rating: 4.2,
        reviews: "3.4k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("small+travel+daypack+clear"),
        tag: "Security-friendly",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Bags, backpacks and even large camera bags are frequently checked, and some items (drones, large tripods, certain electronics) may not be allowed near government buildings.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long stretches walking between Metro stations, monument gates, and booking counters where you'll rely heavily on your phone.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "City-day essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Between metro navigation, photos, and showing digital booking confirmations for Rashtrapati Bhavan or Amrit Udyan, phone battery drains fast on a full sightseeing day.",
      },
      {
        name: "Compact Umbrella or Light Rain Shell",
        description:
          "Worth carrying if visiting during the monsoon months, since much of the government core sits well away from covered shopping arcades.",
        price: "₹499",
        rating: 4.3,
        reviews: "4.2k",
        image: "☂️",
        affiliateUrl: amazonSearchUrl("compact+travel+umbrella"),
        tag: "Monsoon essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Sudden showers between July and September can catch you in the middle of an open, shade-free walk along Kartavya Path.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NewDelhiGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Red sandstone fort walls at golden hour, evoking the sandstone facades of Lutyens' New Delhi government buildings"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "New Delhi", href: null },
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
                "New Delhi",
                "India Gate",
                "Kartavya Path",
                "Rashtrapati Bhavan",
                "Lutyens' Delhi",
                "City Guide",
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
              New Delhi Travel Guide: India Gate, Rajpath & More
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Wide colonial avenues, a president's palace, and a parliament
              at the centre of the world's largest democracy — New Delhi is
              the planned imperial core at the heart of the sprawling
              capital.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "New Delhi, National Capital Territory",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,900 words",
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
                  <h2>Why New Delhi?</h2>
                  <p>
                    A lot of first-time visitors arrive expecting "New
                    Delhi" and "Delhi" to mean the same thing — they don't,
                    and understanding the difference makes the whole city
                    click into place. <strong>Delhi</strong>, formally the
                    National Capital Territory of Delhi, is the entire
                    sprawling metropolis of over 30 million people.{" "}
                    <strong>New Delhi</strong> is one specific district
                    within it: a compact, deliberately planned administrative
                    core built by the British between 1911 and 1931, home to
                    the President's residence, Parliament, and the central
                    government secretariats. For the full picture of the
                    wider city, including Old Delhi's Mughal monuments and
                    South Delhi's neighbourhoods, see our complete{" "}
                    <Link href="/blog/delhi-travel-guide">
                      Delhi travel guide
                    </Link>
                    .
                  </p>
                  <p>
                    New Delhi is also distinct from{" "}
                    <strong>Old Delhi</strong>, the walled Mughal city of
                    Shahjahanabad built by Emperor Shah Jahan roughly three
                    centuries earlier, centred on the Red Fort and Chandni
                    Chowk. Where Old Delhi is dense, narrow-laned, and
                    Mughal in character, New Delhi — often called{" "}
                    <strong>Lutyens' Delhi</strong> after its chief architect,
                    Edwin Lutyens — is defined by wide radial avenues,
                    roundabouts, government buildings in red and cream
                    sandstone, and generous green space. It was formally
                    inaugurated in 1931 as the new capital of British India,
                    replacing Calcutta, and has remained the seat of India's
                    government ever since independence in 1947.
                  </p>
                  <p>
                    This guide covers New Delhi's core sights specifically —
                    India Gate, Kartavya Path, Rashtrapati Bhavan, Parliament
                    House, Jantar Mantar, and the National Museum — along
                    with practical logistics for visiting them. Nearby
                    districts worth combining with a New Delhi day are
                    covered in our separate guides to{" "}
                    <Link href="/blog/connaught-place-delhi-travel-guide">
                      Connaught Place
                    </Link>
                    , the diplomatic enclave of{" "}
                    <Link href="/blog/chanakyapuri-delhi-travel-guide">
                      Chanakyapuri
                    </Link>
                    , and the green, ruin-dotted{" "}
                    <Link href="/blog/lodhi-garden-delhi-travel-guide">
                      Lodhi Garden
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> New Delhi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Central Delhi, NCT of Delhi",
                        },
                        {
                          icon: "🏗️",
                          label: "Built",
                          value: "1911–1931, by the British",
                        },
                        {
                          icon: "🏗️",
                          label: "Architects",
                          value: "Edwin Lutyens & Herbert Baker",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Central Secretariat, Udyog Bhawan",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹500 – ₹3,500",
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
                  <h2>Best Time to Visit New Delhi</h2>
                  <p>
                    Because so much of New Delhi's sightseeing happens
                    outdoors, on wide open avenues with little shade, the
                    season you visit in matters more here than almost
                    anywhere else in the city.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days (10–26°C) make long walks along Kartavya Path and around India Gate genuinely enjoyable — the peak season, including Republic Day in January.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — plan around it",
                        text: "Temperatures regularly cross 42–45°C on open, shade-free stretches — stick to early morning or after sunset, and carry water.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional showers",
                        text: "Heat breaks noticeably, but sudden downpours can catch you mid-walk with little cover nearby — carry a compact umbrella.",
                      },
                      {
                        season: "Late Jan",
                        emoji: "🎖️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Republic Day period",
                        text: "Kartavya Path hosts the Republic Day parade on 26 January — spectacular, but expect heavy security, road closures, and dense crowds for days around it.",
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
                    <strong>Our pick:</strong> October to March, ideally on a
                    weekday morning. The light on the sandstone government
                    buildings is best in the early morning and just before
                    sunset, and the wide avenues are far more pleasant to
                    walk when temperatures are cool.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach & Get Around New Delhi</h2>
                  <p>
                    New Delhi sits at the geographic and administrative
                    centre of the city, which makes it unusually easy to
                    reach compared to more far-flung neighbourhoods.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Indira Gandhi International
                      Airport (DEL) is around 16 km from India Gate — roughly
                      30–45 minutes by road, or a similar time via the
                      Airport Express Metro Line to New Delhi Railway
                      Station followed by a short cab or auto.
                    </li>
                    <li>
                      <strong>By Rail:</strong> New Delhi Railway Station is
                      only a few kilometres from India Gate and Kartavya
                      Path, making it the most convenient station to arrive
                      at if your sightseeing is focused on this district.
                    </li>
                    <li>
                      <strong>By Metro:</strong> The Yellow Line's{" "}
                      <strong>Central Secretariat</strong> station sits right
                      at the edge of the government core, close to
                      Rashtrapati Bhavan and Parliament House. The Blue Line's{" "}
                      <strong>Janpath</strong> station and Yellow Line's{" "}
                      <strong>Udyog Bhawan</strong> station are both within
                      easy walking distance of India Gate, Kartavya Path,
                      Jantar Mantar, and the National Museum.
                    </li>
                    <li>
                      <strong>On foot / by auto:</strong> Once inside the
                      district, distances between individual sights are
                      short enough to walk (roughly 1.5–2.5 km between most
                      points), though app-based autos are useful in peak
                      heat or if you're short on time.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Roads around Rashtrapati
                    Bhavan and Parliament House are subject to sudden
                    closures for VIP movement and security drills — build
                    some flexibility into your timing rather than planning
                    a tight schedule around this area.
                  </div>
                </section>

                {/* ── India Gate ────────────────────────────────────────── */}
                <section id="india-gate">
                  <h2>India Gate & the National War Memorial</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Sweeping sandstone architecture and open plazas, evocative of the monumental scale of India Gate and Kartavya Path"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>India Gate</strong> is a 42-metre sandstone and
                    granite triumphal arch designed by Edwin Lutyens,
                    completed in 1931 as a war memorial commemorating around
                    70,000 soldiers of the British Indian Army who died in
                    World War I and the Third Anglo-Afghan War. Their names
                    are inscribed on the arch itself, and the monument has
                    remained one of Delhi's most recognisable landmarks and
                    a favourite evening gathering spot, especially when it's
                    lit up after dark and the surrounding lawns fill with
                    families, food carts, and boat-ride vendors on the
                    adjacent canal.
                  </p>
                  <p>
                    Immediately behind India Gate sits the{" "}
                    <strong>National War Memorial</strong>, a separate and
                    more recent structure completed in 2019 to honour Indian
                    armed forces personnel who died in conflicts since
                    independence in 1947 — a distinction worth knowing, since
                    visitors sometimes assume the two memorials are the same
                    thing. The War Memorial's design, arranged in concentric
                    circles with an eternal flame, and its sombre Wall of
                    Honour make it a quieter, more reflective counterpart to
                    India Gate's livelier public-square atmosphere.
                  </p>
                  <ul>
                    <li>
                      <strong>Entry:</strong> Free, open to the public at all
                      times.
                    </li>
                    <li>
                      <strong>Best time to visit:</strong> Early morning for
                      photography and quiet, or evening (after 6 PM) for the
                      illuminated arch and the liveliest atmosphere.
                    </li>
                    <li>
                      <strong>Nearby:</strong> Boat rides on the canal, ice
                      cream and street food carts, and the start of Kartavya
                      Path heading toward Rashtrapati Bhavan.
                    </li>
                  </ul>
                </section>

                {/* ── Kartavya Path ─────────────────────────────────────── */}
                <section id="kartavya-path">
                  <h2>Kartavya Path (formerly Rajpath)</h2>
                  <p>
                    The ceremonial boulevard running roughly 3 km from
                    Rashtrapati Bhavan, past Parliament House and India Gate,
                    was known as <strong>Rajpath</strong> ("King's Way") for
                    most of its existence. In September 2022, as part of a
                    broader redevelopment of the Central Vista area, it was
                    officially renamed <strong>Kartavya Path</strong> ("Path
                    of Duty") — the road itself, its layout, and its role in
                    the city are unchanged, only the name and some of the
                    surrounding public realm (new lawns, walkways, and
                    lighting) were updated.
                  </p>
                  <p>
                    Kartavya Path is best known as the route of the{" "}
                    <strong>Republic Day parade</strong> held every 26
                    January, when it's lined with military processions,
                    state tableaux, and cultural performances marking the
                    anniversary of India's constitution coming into force in
                    1950. Outside of that one day, it functions as a wide,
                    largely pedestrian-friendly avenue — popular for evening
                    walks, cycling, and simply taking in the scale of the
                    surrounding government architecture from India Gate at
                    one end to Vijay Chowk, near Rashtrapati Bhavan, at the
                    other.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Walking the full stretch of
                    Kartavya Path is a genuinely satisfying way to take in
                    New Delhi's monumental scale, but do it in the early
                    morning or after sunset — there's almost no shade along
                    the way, and midday heat on the open pavement is
                    intense for most of the year.
                  </div>
                </section>

                {/* ── Rashtrapati Bhavan ────────────────────────────────── */}
                <section id="rashtrapati-bhavan">
                  <h2>Rashtrapati Bhavan & Amrit Udyan</h2>
                  <p>
                    Sitting at the western end of Kartavya Path on Raisina
                    Hill, <strong>Rashtrapati Bhavan</strong> is the official
                    residence of the President of India — a vast, 340-room
                    sandstone palace designed by Edwin Lutyens and completed
                    in 1929, originally built as the Viceroy's House for the
                    British Viceroy of India. Flanked by the twin
                    Secretariat buildings (North Block and South Block,
                    designed by Herbert Baker) and fronted by the ceremonial
                    Vijay Chowk, it remains one of the largest residences of
                    any head of state in the world.
                  </p>
                  <ul>
                    <li>
                      <strong>Exterior viewing:</strong> Free and unrestricted
                      — the sweeping view from Vijay Chowk down Kartavya Path
                      is one of New Delhi's signature sights, and the annual{" "}
                      <strong>Beating Retreat</strong> ceremony is held here
                      in late January.
                    </li>
                    <li>
                      <strong>Rashtrapati Bhavan Museum Complex:</strong>{" "}
                      Select galleries within the estate are open to the
                      public on specific days, requiring free advance
                      booking online along with a valid photo ID and
                      security screening.
                    </li>
                    <li>
                      <strong>Amrit Udyan (formerly Mughal Gardens):</strong>{" "}
                      A Mughal-influenced formal garden within the estate,
                      renamed in 2023, typically opened to the public for a
                      few weeks each year around February–March during the
                      annual "Udyan Utsav" — book a free online slot well
                      ahead, as demand is high during the short open window.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Opening dates and booking
                    windows for both the museum complex and Amrit Udyan
                    change year to year — always check the official
                    Rashtrapati Bhavan website shortly before your trip
                    rather than relying on last year's schedule.
                  </div>
                </section>

                {/* ── Parliament House ──────────────────────────────────── */}
                <section id="parliament-house">
                  <h2>Parliament House (Sansad Bhavan)</h2>
                  <p>
                    The original <strong>Parliament House</strong>, designed
                    by Herbert Baker and completed in 1927, is instantly
                    recognisable for its circular colonnaded design — 144
                    cream sandstone columns ringing a building roughly 170
                    metres in diameter. It served as the seat of India's
                    legislature from independence in 1947 until a new,
                    triangular <strong>Parliament building</strong> was
                    inaugurated nearby in 2023 as part of the Central Vista
                    redevelopment; the older circular building, now referred
                    to as Samvidhan Sadan ("Constitution House"), continues
                    to be used for ceremonial and constitutional functions.
                  </p>
                  <p>
                    Neither building is generally open to casual tourists.
                    Access is restricted to those with an official
                    appointment, a Member of Parliament's pass, or
                    accredited press during a sitting session, and security
                    around both structures is strict year-round. Most
                    visitors simply view the circular facade of the old
                    Parliament House from Sansad Marg or the streets
                    bordering the complex — still an impressive sight, even
                    from outside the gates.
                  </p>
                </section>

                {/* ── Jantar Mantar ─────────────────────────────────────── */}
                <section id="jantar-mantar">
                  <h2>Jantar Mantar</h2>
                  <p>
                    A short walk from Connaught Place and Parliament Street,{" "}
                    <strong>Jantar Mantar</strong> is an 18th-century
                    astronomical observatory built in 1724 by Maharaja Jai
                    Singh II of Jaipur, one of five such observatories he
                    constructed across northern India (the others are in
                    Jaipur, Ujjain, Varanasi, and Mathura). Its striking,
                    geometric masonry instruments — including the towering
                    Samrat Yantra sundial, capable of reading solar time to
                    within seconds — were used to track celestial positions,
                    predict eclipses, and maintain calendars well before
                    modern telescopes reached India.
                  </p>
                  <ul>
                    <li>
                      <strong>Entry:</strong> A modest ticketed fee applies,
                      with a separate (higher) rate for foreign nationals;
                      open daily during daylight hours.
                    </li>
                    <li>
                      <strong>Time needed:</strong> 30–45 minutes is enough
                      to see the main instruments and read the on-site
                      information boards.
                    </li>
                    <li>
                      <strong>Good to combine with:</strong> Connaught
                      Place's shops and restaurants sit just a short walk
                      away — see our{" "}
                      <Link href="/blog/connaught-place-delhi-travel-guide">
                        Connaught Place guide
                      </Link>{" "}
                      for a natural next stop.
                    </li>
                  </ul>
                </section>

                {/* ── National Museum ───────────────────────────────────── */}
                <section id="national-museum">
                  <h2>National Museum</h2>
                  <p>
                    On Janpath, close to India Gate, the{" "}
                    <strong>National Museum</strong> holds one of India's
                    largest collections of art and antiquities, spanning
                    Harappan-era artefacts, Buddhist sculpture, Mughal
                    miniature paintings, textiles, and arms and armour
                    across multiple floors. It's a useful, air-conditioned
                    counterpoint to a day spent largely outdoors, and a
                    genuinely worthwhile stop for anyone wanting context on
                    the civilisations and empires referenced throughout the
                    rest of Delhi's monuments.
                  </p>
                  <p>
                    Budget at least 1.5–2 hours for even a focused visit;
                    history enthusiasts can easily spend half a day. Check
                    current hours before visiting, as the museum is
                    typically closed one day a week (Mondays, at most
                    Indian national museums) and hours can shift seasonally.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested New Delhi Itinerary</h2>
                  <p>
                    New Delhi's core sights are compact enough to cover in
                    a single half-day, though a full day allows a more
                    unhurried pace with time for the National Museum.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Half-Day",
                        title: "The Essentials (~4–5 hrs)",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: India Gate & National War Memorial",
                          "Walk or short cab along Kartavya Path",
                          "Drive-past viewing of Rashtrapati Bhavan & Vijay Chowk",
                          "Exterior view of Parliament House from Sansad Marg",
                          "Late morning: Jantar Mantar",
                        ],
                      },
                      {
                        day: "Full Day",
                        title: "Add the National Museum & More",
                        color: "bg-sky-600",
                        activities: [
                          "Follow the half-day route above in the morning",
                          "Afternoon: National Museum (1.5–2 hrs)",
                          "If dates align: Amrit Udyan or the Rashtrapati Bhavan Museum Complex (book ahead)",
                          "Evening: Connaught Place for dinner and a change of pace",
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

                  <blockquote>
                    Bookend a New Delhi day with a wander through the ruins
                    and street art of{" "}
                    <Link href="/blog/lodhi-garden-delhi-travel-guide">
                      Lodhi Garden
                    </Link>{" "}
                    or an evening in the diplomatic enclave of{" "}
                    <Link href="/blog/chanakyapuri-delhi-travel-guide">
                      Chanakyapuri
                    </Link>{" "}
                    — both sit within easy reach and round out the picture
                    of Lutyens' Delhi beyond the government core.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Nearby</h2>
                  <p>
                    The government core itself has few restaurants, but
                    Connaught Place — a short metro ride or 15–20 minute
                    walk from India Gate — has by far the widest range of
                    options within easy reach.
                  </p>
                  <ul>
                    <li>
                      <strong>Street carts near India Gate:</strong> Ice
                      cream, roasted corn (bhutta), and light snacks from
                      the vendors along the canal — casual, cheap, and part
                      of the evening atmosphere.
                    </li>
                    <li>
                      <strong>Connaught Place restaurants and cafés:</strong>{" "}
                      Everything from long-running Indian institutions to
                      international chains and modern cafés — see our{" "}
                      <Link href="/blog/connaught-place-delhi-travel-guide">
                        Connaught Place guide
                      </Link>{" "}
                      for specific recommendations.
                    </li>
                    <li>
                      <strong>Khan Market:</strong> A short cab ride away,
                      popular for a more upscale dining scene spanning Indian
                      regional cuisine, Italian, and modern fusion.
                    </li>
                    <li>
                      <strong>Hotel restaurants near Janpath:</strong> Several
                      of Delhi's well-known heritage hotels sit within a
                      short distance of India Gate, useful for a sit-down
                      meal without straying far from the sightseeing route.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    New Delhi's core sights are largely free to view from
                    outside, which keeps a sightseeing day here relatively
                    inexpensive compared to monument-heavy days elsewhere in
                    the city.
                  </p>
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
                            "Local transport (metro/auto)/day",
                            "₹150",
                            "₹500",
                            "₹1,800",
                          ],
                          ["Food/day", "₹400", "₹1,200", "₹3,500"],
                          [
                            "Jantar Mantar entry",
                            "₹35 (Indian)",
                            "₹35 (Indian)",
                            "₹35 (Indian)",
                          ],
                          [
                            "National Museum entry",
                            "Modest fee",
                            "Modest fee",
                            "Modest fee",
                          ],
                          [
                            "India Gate, Kartavya Path, Rashtrapati Bhavan (exterior)",
                            "Free",
                            "Free",
                            "Free",
                          ],
                          ["Daily total (approx.)", "₹600", "₹1,900", "₹5,500"],
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
                    * Excludes accommodation, which is best budgeted as part
                    of your wider Delhi stay. Foreign nationals pay higher
                    entry fees at ticketed sites like Jantar Mantar and the
                    National Museum — always check current rates on-site or
                    online before visiting.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting New Delhi</h2>
                  <ul>
                    <li>
                      <strong>Book Rashtrapati Bhavan access in advance:
                      </strong>{" "}
                      The Museum Complex and Amrit Udyan both require free
                      online booking ahead of time — walk-in access isn't
                      available.
                    </li>
                    <li>
                      <strong>Don't expect to enter Parliament House:</strong>{" "}
                      Both the old and new buildings are restricted to those
                      with an appointment, MP's pass, or press
                      accreditation — plan on an exterior view only.
                    </li>
                    <li>
                      <strong>Carry a valid photo ID:</strong> Required for
                      any Rashtrapati Bhavan booking and useful generally,
                      given the level of security around this district.
                    </li>
                    <li>
                      <strong>Time your walk around the heat, not the
                      crowds:</strong> Kartavya Path and India Gate see
                      steady footfall throughout the day, but the bigger
                      factor is shade — plan the walking-heavy parts for
                      early morning or evening.
                    </li>
                    <li>
                      <strong>Expect closures around Republic Day:</strong>{" "}
                      If visiting in mid-to-late January, check for road
                      closures and rehearsal schedules around Kartavya Path
                      and India Gate well ahead of your visit.
                    </li>
                    <li>
                      <strong>Combine with a metro-connected neighbour:</strong>{" "}
                      Connaught Place, Lodhi Garden, and Chanakyapuri are all
                      close enough to fold into the same day without much
                      extra travel time.
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
                          "Book Amrit Udyan or the Museum Complex online ahead of time",
                          "Visit India Gate and Kartavya Path early morning or evening",
                          "Carry a valid photo ID for security checks",
                          "Use the Metro (Central Secretariat, Janpath, Udyog Bhawan)",
                          "Check road closures if visiting near Republic Day",
                          "Pair your visit with Connaught Place or Lodhi Garden",
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
                          "Expect walk-in entry to Rashtrapati Bhavan or Parliament House",
                          "Skip carrying water on the open stretch of Kartavya Path",
                          "Bring drones, large tripods, or restricted electronics",
                          "Assume Old Delhi and New Delhi are the same place",
                          "Plan a tight schedule right around the government core",
                          "Forget that entry fees are higher for foreign nationals",
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
                  "New Delhi",
                  "Delhi",
                  "India Gate",
                  "Kartavya Path",
                  "Rashtrapati Bhavan",
                  "Parliament House",
                  "Jantar Mantar",
                  "Lutyens' Delhi",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={NEW_DELHI_GEAR}
                destination="New Delhi"
              />

              <RelatedPostsGrid currentSlug="new-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="new-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
