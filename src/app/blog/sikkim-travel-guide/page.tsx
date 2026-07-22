// src/app/blog/sikkim-travel-guide/page.tsx
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
  title: "Sikkim Travel Guide: Gangtok, Yumthang Valley & Nathula Pass",
  description:
    "The complete Sikkim travel guide — Gangtok, Tsomgo Lake and Nathula Pass, Yumthang Valley's flower fields, Pelling's Kanchenjunga views, permits explained, where to stay and eat, and a full itinerary through India's cleanest, most organised Himalayan state.",
  keywords:
    "Sikkim travel guide, Gangtok travel guide, Tsomgo Lake, Nathula Pass, Yumthang Valley, Pelling, Kanchenjunga view, Rumtek Monastery, Gurudongmar Lake, Sikkim permit, Sikkim itinerary",
  openGraph: {
    title: "Sikkim Travel Guide: Gangtok, Yumthang Valley & Nathula Pass",
    description:
      "Alpine lakes at 12,000 feet, a valley of rhododendrons, and views of the world's third-highest peak — the complete guide to Sikkim.",
    url: "https://club.kudozz.in/blog/sikkim-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Snow-capped Himalayan peaks, evoking Sikkim's Kanchenjunga views and high-altitude terrain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikkim Travel Guide: Gangtok, Yumthang Valley & Nathula Pass",
    description:
      "Alpine lakes, rhododendron valleys, and Kanchenjunga views — the complete guide to Sikkim.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sikkim-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Sikkim Travel Guide: Gangtok, Yumthang Valley & Nathula Pass",
          description: "The complete Sikkim travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hero.jpg",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
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
            "@id": "https://club.kudozz.in/blog/sikkim-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Sikkim",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Sikkim",
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
                name: "Sikkim Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Sikkim?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sikkim", level: 2 },
  { id: "permits", title: "Permits Explained", level: 2 },
  { id: "gangtok", title: "Gangtok: Capital & Base", level: 2 },
  { id: "east-sikkim", title: "Tsomgo Lake & Nathula Pass", level: 2 },
  { id: "north-sikkim", title: "Yumthang Valley & Lachung", level: 2 },
  { id: "west-sikkim", title: "Pelling & Kanchenjunga Views", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "6-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Sikkim-specific gear ─────────────────────────────────────────────────
const SIKKIM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for high-altitude lake visits, alpine valleys, and restricted-area travel days",
    emoji: "🏔️",
    items: [
      {
        name: "Heavy-Duty Winter Jacket",
        description:
          "Tsomgo Lake (3,753m) and Nathula Pass (4,310m) get bitterly cold year-round, and Yumthang Valley isn't far behind — far colder than Gangtok itself.",
        price: "₹2,999",
        rating: 4.5,
        reviews: "8.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("heavy+winter+jacket+himalayan+trekking"),
        tag: "High-altitude essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Temperatures at Nathula Pass can drop well below freezing even in summer months — under-packing is the most common mistake on the East Sikkim circuit.",
      },
      {
        name: "Sturdy Trekking Shoes",
        description:
          "Snow, ice, and uneven terrain are common at Tsomgo Lake, Nathula, and Yumthang Valley, even outside the harshest winter months.",
        price: "₹2,999",
        rating: 4.5,
        reviews: "9.1k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+waterproof+himalayan"),
        tag: "Terrain essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Regular shoes handle Sikkim's high-altitude stops poorly — snow and slush around Tsomgo Lake are common even in the shoulder season.",
      },
      {
        name: "Gloves & Woollen Cap",
        description:
          "Essential for the exposed viewpoints at Nathula Pass and Gurudongmar Lake, where wind chill makes the cold feel far more severe.",
        price: "₹599",
        rating: 4.4,
        reviews: "6.2k",
        image: "🧤",
        affiliateUrl: amazonSearchUrl("winter+gloves+woollen+cap+set"),
        tag: "High-pass essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Wind chill at 4,000m+ passes makes exposed skin genuinely uncomfortable within minutes — small items make a big difference here.",
      },
      {
        name: "Basic Altitude Sickness Kit",
        description:
          "Nathula Pass and Gurudongmar Lake both sit above 4,000m — mild altitude symptoms are common, especially without acclimatisation.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.2k",
        image: "💊",
        affiliateUrl: amazonSearchUrl("altitude+sickness+medicine+diamox"),
        tag: "High-altitude essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Many day trips to Nathula start straight from Gangtok's much lower altitude — consult a doctor and don't rush the ascent if you're prone to altitude symptoms.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long mountain drives to North Sikkim, where charging points are sparse beyond Lachung and Lachen.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Mountain essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "North Sikkim's permit-controlled circuit involves long shared-jeep days with limited charging infrastructure along the way.",
      },
      {
        name: "Passport-Size Photos & ID Copies",
        description:
          "Required in physical form for the Protected/Restricted Area Permits needed for Nathula, Tsomgo, and North Sikkim.",
        price: "N/A",
        rating: 4.5,
        reviews: "N/A",
        image: "🪪",
        affiliateUrl: amazonSearchUrl("passport+photo+printer+travel"),
        tag: "Permit essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Sikkim's permit system is strictly enforced — arriving without physical photos and ID copies can delay or block access to Nathula and North Sikkim.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SikkimGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/hero.jpg"
              alt="Snow-capped Himalayan peaks, evoking Sikkim's Kanchenjunga views and high-altitude terrain"
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
                { label: "Sikkim", href: "/blog?category=sikkim" },
                { label: "Travel Guide", href: null },
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
                "Gangtok",
                "Yumthang Valley",
                "Nathula Pass",
                "Kanchenjunga",
                "Permit Required",
                "State Guide",
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
              Sikkim Travel Guide: Gangtok, Yumthang Valley & Nathula Pass
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Alpine lakes above 12,000 feet, a valley that turns into a
              carpet of rhododendrons every spring, and unobstructed views
              of Kanchenjunga, the world's third-highest peak — Sikkim is
              India's cleanest, best-organised Himalayan state.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "16 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sikkim, Eastern Himalayas",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
                  <h2>Why Sikkim?</h2>
                  <p>
                    Wedged between Nepal, Tibet, and Bhutan, <strong>Sikkim</strong>{" "}
                    is a small state that punches well above its size —
                    India's first fully organic state, its cleanest by most
                    measures, and home to some of the most accessible
                    high-altitude scenery in the entire Himalayas.
                  </p>
                  <p>
                    Within a single trip, Sikkim delivers alpine lakes at
                    nearly 4,000 metres, a genuine international border
                    crossing point at Nathula Pass, a valley (Yumthang) that
                    turns into a sea of blooming rhododendrons every spring,
                    and — from Pelling — some of the closest, most
                    unobstructed views anywhere of Kanchenjunga, the world's
                    third-highest mountain.
                  </p>
                  <p>
                    It's also one of the more logistically structured
                    Himalayan states to visit — several key areas require
                    permits and shared-jeep travel with a registered agent,
                    which keeps things orderly but does mean less spontaneity
                    than a typical road trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Sikkim at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Sikkim" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Bagdogra (IXB) / Pakyong (PYG)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Oct–Dec" },
                        {
                          icon: "⛰️",
                          label: "Known For",
                          value: "Alpine Lakes, Kanchenjunga, Monasteries",
                        },
                        {
                          icon: "📄",
                          label: "Permits",
                          value: "Required for Nathula, North Sikkim",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹7,500",
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
                  <h2>Best Time to Visit Sikkim</h2>
                  <p>
                    Sikkim's spring bloom and clear autumn skies make for
                    two distinct — and equally strong — travel windows.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Rhododendron season",
                        text: "Yumthang Valley bursts into bloom, and temperatures across Gangtok, Pelling and the valleys are comfortable — a strong window for both flowers and mountain views.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clearest mountain views",
                        text: "Post-monsoon skies are at their clearest, giving the best odds for unobstructed Kanchenjunga views from Pelling and Gangtok.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — landslide risk",
                        text: "Heavy rain brings real landslide danger on mountain roads, and views are frequently obscured by cloud cover.",
                      },
                      {
                        season: "Jan – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, occasional snow",
                        text: "Higher areas like Yumthang and Nathula can see snowfall and temporary road closures — check conditions before planning a winter trip.",
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
                    <strong>Our pick:</strong> April to May for the
                    rhododendron bloom at Yumthang Valley, or October to
                    November for the clearest possible Kanchenjunga views
                    from Pelling.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sikkim</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Pakyong Airport (PYG), near
                      Gangtok, has limited direct flights; Bagdogra Airport
                      (IXB) in West Bengal is the more reliable option, with
                      a scenic 4-5 hour drive on to Gangtok.
                    </li>
                    <li>
                      <strong>By Rail:</strong> New Jalpaiguri (NJP) is the
                      nearest railhead, connected to major Indian cities,
                      followed by the same road transfer as from Bagdogra.
                    </li>
                    <li>
                      <strong>By Road:</strong> Gangtok is reached from
                      Siliguri (~120 km, ~4.5 hrs) via a winding mountain
                      road — shared jeeps and private taxis both run this
                      route regularly.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book through a registered
                    Sikkim travel agent for the North Sikkim and Nathula legs
                    — these routes require permits and are only accessible
                    via approved shared-jeep operators, not independent
                    self-drive.
                  </div>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits Explained</h2>
                  <p>
                    Sikkim's border-adjacent geography means several key
                    areas require permits — this is the single biggest piece
                    of planning the state requires.
                  </p>
                  <ul>
                    <li>
                      <strong>Protected Area Permit (PAP):</strong> Required
                      for foreign nationals to visit Sikkim beyond Gangtok
                      and Pelling — typically arranged through a registered
                      travel agent alongside your itinerary.
                    </li>
                    <li>
                      <strong>Restricted Area Permit (RAP):</strong> Required
                      for both Indian and foreign visitors to Tsomgo Lake,
                      Nathula Pass, and North Sikkim (Yumthang, Lachung,
                      Lachen, Gurudongmar) — arranged through registered
                      agents, usually same-day to a few days' processing.
                    </li>
                    <li>
                      <strong>ID requirements:</strong> Carry original ID and
                      several passport photos — most permits require physical
                      copies submitted in advance.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> A single well-reviewed
                    Gangtok-based travel agent can usually handle Nathula,
                    Tsomgo, and North Sikkim permits together as part of a
                    bundled package — far simpler than arranging each
                    separately.
                  </div>
                </section>

                {/* ── Gangtok ───────────────────────────────────────────── */}
                <section id="gangtok">
                  <h2>Gangtok: Capital & Base</h2>
                  <p>
                    Sikkim's capital sits on a ridge at around 1,650m and
                    functions as the natural base for the whole state —
                    most permits and shared jeeps to other regions originate
                    here.
                  </p>
                  <ul>
                    <li>
                      <strong>MG Marg:</strong> A clean, pedestrian-only
                      main street lined with cafés and shops — Gangtok's
                      social centre, especially in the evening.
                    </li>
                    <li>
                      <strong>Rumtek Monastery:</strong> One of the most
                      significant Buddhist monasteries in Sikkim, seat of
                      the Karmapa lineage, roughly 24 km from Gangtok.
                    </li>
                    <li>
                      <strong>Enchey Monastery:</strong> A smaller, more
                      centrally located monastery within Gangtok itself.
                    </li>
                    <li>
                      <strong>Ganesh Tok & Hanuman Tok:</strong> Hilltop
                      viewpoints with panoramic views over Gangtok and, on
                      clear days, Kanchenjunga.
                    </li>
                    <li>
                      <strong>Ropeway:</strong> A short cable car ride
                      offering aerial views across the city — a quick,
                      easy activity if time is limited.
                    </li>
                  </ul>
                </section>

                {/* ── East Sikkim ───────────────────────────────────────── */}
                <section id="east-sikkim">
                  <h2>Tsomgo Lake & Nathula Pass</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="High-altitude mountain pass landscape, evoking Sikkim's Nathula Pass at over 4,000 metres"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    A single-day permit trip from Gangtok covers both of
                    these — a glacial lake and one of the few open land
                    border crossings between India and China.
                  </p>
                  <ul>
                    <li>
                      <strong>Tsomgo (Changu) Lake:</strong> A glacial lake
                      at 3,753m, often partially frozen in winter — yak
                      rides are available around the lake.
                    </li>
                    <li>
                      <strong>Nathula Pass:</strong> At 4,310m, one of the
                      few official trading border points between India and
                      China (Tibet) — closed on Mondays and Tuesdays, and
                      requires a separate permit beyond the Tsomgo one.
                    </li>
                    <li>
                      <strong>Baba Mandir:</strong> A shrine dedicated to an
                      Indian Army soldier, near Nathula, considered
                      spiritually significant by both civilians and military
                      personnel.
                    </li>
                  </ul>
                </section>

                {/* ── North Sikkim ──────────────────────────────────────── */}
                <section id="north-sikkim">
                  <h2>Yumthang Valley & Lachung</h2>
                  <p>
                    North Sikkim's permit-controlled circuit is where the
                    state's high-altitude scenery is at its most dramatic —
                    typically covered as a 2-3 day shared-jeep package from
                    Gangtok.
                  </p>
                  <ul>
                    <li>
                      <strong>Yumthang Valley ("Valley of Flowers"):</strong>{" "}
                      A wide alpine valley that turns into a spectacular
                      rhododendron and primula bloom in spring, with hot
                      springs nearby.
                    </li>
                    <li>
                      <strong>Lachung:</strong> A small mountain village
                      that serves as the base for Yumthang, with dramatic
                      valley views and a notable monastery.
                    </li>
                    <li>
                      <strong>Zero Point (Yumesamdong):</strong> The furthest
                      accessible point by road, at around 4,600m — often
                      snow-covered even outside peak winter.
                    </li>
                    <li>
                      <strong>Gurudongmar Lake:</strong> One of the highest
                      lakes in the world (5,430m), accessed via Lachen —
                      requires a separate permit and is only feasible for
                      well-acclimatised travellers given the extreme
                      altitude.
                    </li>
                  </ul>
                </section>

                {/* ── West Sikkim ───────────────────────────────────────── */}
                <section id="west-sikkim">
                  <h2>Pelling & Kanchenjunga Views</h2>
                  <p>
                    West Sikkim offers some of the state's best mountain
                    views without the permit complexity of the north and
                    east.
                  </p>
                  <ul>
                    <li>
                      <strong>Pelling:</strong> A small hill town with
                      arguably the best unobstructed Kanchenjunga sunrise
                      views in Sikkim, especially from the Pelling Skywalk
                      area.
                    </li>
                    <li>
                      <strong>Pemayangtse Monastery:</strong> One of Sikkim's
                      oldest and most important monasteries, with excellent
                      valley views.
                    </li>
                    <li>
                      <strong>Khecheopalri Lake:</strong> A sacred lake
                      believed to grant wishes, considered one of the
                      holiest sites in Sikkim by both Buddhists and Hindus.
                    </li>
                    <li>
                      <strong>Rabdentse Ruins:</strong> The ruins of
                      Sikkim's second capital, reached via a short forest
                      walk with good mountain views.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Gangtok has the widest range of accommodation; North
                    Sikkim stays are far more basic given the remote,
                    permit-controlled nature of the region.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses near MG Marg, Gangtok",
                          "Homestays, Pelling",
                          "Basic lodges, Lachung",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Hotel Sonam Delek, Gangtok",
                          "Mountain-view hotels, Pelling",
                          "Standard tour-package lodges, Lachung",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "Mayfair Spa Resort, Gangtok",
                          "The Elgin Mount Pandim, Pelling",
                          "Premium boutique stays, Gangtok",
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
                    North Sikkim accommodation is usually bundled directly
                    into your permit tour package — don't expect to book it
                    separately, and confirm what's included before departing
                    Gangtok.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Sikkim</h2>
                  <ul>
                    <li>
                      <strong>Momos:</strong> Sikkim's most iconic food —
                      steamed or fried dumplings filled with meat or
                      vegetables, sold everywhere from street stalls to
                      restaurants.
                    </li>
                    <li>
                      <strong>Thukpa:</strong> A warming Tibetan-style
                      noodle soup, especially welcome at Sikkim's higher,
                      colder elevations.
                    </li>
                    <li>
                      <strong>Gundruk:</strong> A fermented leafy green
                      dish, a distinctive Nepali-influenced Sikkimese
                      specialty.
                    </li>
                    <li>
                      <strong>Sikkim organic produce:</strong> As India's
                      first fully organic state, Sikkim's vegetables and
                      local produce are genuinely worth seeking out at
                      Gangtok's markets.
                    </li>
                    <li>
                      <strong>Local millet-based drinks (Chhaang):</strong>{" "}
                      A fermented millet beverage, traditionally served warm
                      in a bamboo container — a distinctive regional
                      experience.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>6-Day Sikkim Itinerary</h2>
                  <p>
                    Six days is a comfortable minimum to cover Gangtok, East
                    Sikkim, and either North or West Sikkim without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival in Gangtok",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive via Bagdogra, transfer to Gangtok",
                          "Evening: MG Marg walk",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tsomgo Lake & Nathula Pass",
                        color: "bg-sky-600",
                        activities: [
                          "Permit day trip to Tsomgo Lake",
                          "Nathula Pass (if open — closed Mon/Tue)",
                          "Baba Mandir",
                        ],
                      },
                      {
                        day: "Day 3–4",
                        title: "North Sikkim: Lachung & Yumthang",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to Lachung (~5-6 hrs)",
                          "Yumthang Valley, Zero Point",
                          "Return to Gangtok",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Travel to Pelling",
                        color: "bg-purple-600",
                        activities: [
                          "Drive to Pelling (~5 hrs)",
                          "Pemayangtse Monastery, Rabdentse Ruins",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Pelling & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Sunrise Kanchenjunga view",
                          "Khecheopalri Lake",
                          "Return to Bagdogra for departure",
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
                            "₹1,200",
                            "₹4,000",
                            "₹12,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,800"],
                          [
                            "Permits & shared jeeps/day",
                            "₹800",
                            "₹1,500",
                            "₹3,000",
                          ],
                          ["Local transport/day", "₹300", "₹700", "₹1,800"],
                          ["Daily total", "₹2,800", "₹7,400", "₹19,600"],
                          [
                            "6-Day trip total",
                            "₹16,800",
                            "₹44,400",
                            "₹1,17,600",
                          ],
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
                    * Excludes travel to Bagdogra/NJP. North Sikkim and
                    Nathula permit packages are typically quoted as bundled
                    per-person rates covering transport, permits, and
                    basic accommodation.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Sikkim</h2>
                  <ul>
                    <li>
                      <strong>Arrange permits through a registered agent:</strong>{" "}
                      Independent travel to Nathula, Tsomgo, and North Sikkim
                      isn't possible — book through a Gangtok-based operator.
                    </li>
                    <li>
                      <strong>Nathula Pass is closed Mon/Tue:</strong> Plan
                      your East Sikkim day trip around this if Nathula
                      itself is a priority.
                    </li>
                    <li>
                      <strong>Carry warm layers regardless of season:</strong>{" "}
                      Even in summer, Nathula and Yumthang can be genuinely
                      cold — Gangtok's mild climate is not representative of
                      the high-altitude stops.
                    </li>
                    <li>
                      <strong>Build in buffer days for weather:</strong>{" "}
                      Mountain roads to North Sikkim can close temporarily
                      due to landslides or snow — don't schedule tight
                      onward connections.
                    </li>
                    <li>
                      <strong>Acclimatise before Gurudongmar Lake:</strong>{" "}
                      At 5,430m, this is a genuinely high-altitude excursion
                      — don't attempt it as a rushed add-on.
                    </li>
                    <li>
                      <strong>Carry cash outside Gangtok:</strong> Card and
                      UPI acceptance drops sharply in smaller towns like
                      Lachung and Pelling.
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
                          "Book Nathula/North Sikkim permits through a registered agent",
                          "Carry warm layers even in summer for high passes",
                          "Build buffer days into your North Sikkim itinerary",
                          "Try momos and thukpa at local eateries",
                          "Time your Pelling stop for a Kanchenjunga sunrise",
                          "Carry passport photos and ID copies for permits",
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
                          "Plan Nathula Pass for a Monday or Tuesday",
                          "Rush Gurudongmar Lake without acclimatisation",
                          "Attempt independent travel into permit-controlled zones",
                          "Underestimate cold at Tsomgo, Nathula and Yumthang",
                          "Rely on cards outside Gangtok",
                          "Book tight onward travel right after North Sikkim",
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
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Sikkim",
                  "Gangtok",
                  "Yumthang Valley",
                  "Nathula Pass",
                  "Kanchenjunga",
                  "Pelling",
                  "State Guide",
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
                sections={SIKKIM_GEAR}
                destination="Sikkim"
              />

              <RelatedPostsGrid />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
