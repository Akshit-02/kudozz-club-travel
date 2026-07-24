// src/app/blog/karnataka-travel-guide/page.tsx
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
  title: "Karnataka Travel Guide: Bangalore, Mysore & Hampi",
  description:
    "The complete Karnataka travel guide — Bangalore's tech-city energy, Mysore's royal palaces, the Vijayanagara ruins of Hampi, Coorg's coffee hills, Gokarna's beaches, coastal Mangalore, Hoysala temples at Belur & Halebidu, where to stay and eat, and a full 8-9 day itinerary across the state.",
  keywords:
    "Karnataka travel guide, Bangalore travel, Mysore Palace, Hampi Karnataka, Coorg Karnataka, Gokarna beaches, Mangalore coastal Karnataka, Chikmagalur coffee, Belur Halebidu Hoysala temples, Karnataka itinerary, South India travel",
  openGraph: {
    title: "Karnataka Travel Guide: Bangalore, Mysore & Hampi",
    description:
      "India's IT capital, ancient Vijayanagara ruins, misty Western Ghats coffee country, and a long coastline — the complete guide to Karnataka.",
    url: "https://club.kudozz.in/blog/karnataka-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "The ancient Vijayanagara ruins of Hampi, Karnataka, scattered across a boulder-strewn landscape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karnataka Travel Guide: Bangalore, Mysore & Hampi",
    description:
      "Tech capital, royal palaces, ancient ruins, coffee hills and beaches — the complete guide to Karnataka.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/karnataka-travel-guide",
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
          headline: "Karnataka Travel Guide: Bangalore, Mysore & Hampi",
          description: "The complete Karnataka travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-07-22",
          dateModified: "2026-07-22",
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
            "@id": "https://club.kudozz.in/blog/karnataka-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Karnataka",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Karnataka",
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
                name: "Karnataka Travel Guide",
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
  { id: "introduction", title: "Why Karnataka?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "bangalore", title: "Bangalore: India's Silicon Valley", level: 2 },
  { id: "mysore", title: "Mysore: The Royal City", level: 2 },
  { id: "hampi-coorg-gokarna", title: "Hampi, Coorg & Gokarna", level: 2 },
  { id: "other-sights", title: "Coastal Karnataka, Chikmagalur & Hoysala Temples", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "9-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Karnataka-specific gear ─────────────────────────────────────────────────
const KARNATAKA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for Hampi's ruins, Bangalore's cafes, and the Western Ghats' unpredictable weather",
    emoji: "🛺",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Hampi's boulder-strewn ruins and Mysore Palace's sprawling grounds both involve hours of walking on uneven stone.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Hampi's ruins are spread across a huge boulder landscape — proper shoes make a real difference over a full day of exploring.",
      },
      {
        name: "Lightweight Rain Jacket",
        description:
          "Coorg and the Western Ghats stay lush and rainy well beyond the main monsoon months — worth carrying even outside peak monsoon.",
        price: "₹1,299",
        rating: 4.3,
        reviews: "4.6k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("lightweight+rain+jacket+travel"),
        tag: "Western Ghats essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Coorg and Chikmagalur see sudden showers even outside monsoon proper — a packable rain jacket earns its space.",
      },
      {
        name: "Sunscreen (SPF 50)",
        description:
          "Hampi's open, shade-less terrain and coastal Karnataka's beaches both call for serious sun protection.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Hampi has almost no shade across its ruins, and Gokarna's beaches mean plenty of direct sun — this is non-negotiable.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long inter-city travel days between Bangalore, Mysore, Hampi, and the coast.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Travel-day essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Karnataka's distances are large — long train and road journeys between regions drain phones faster than a typical day out.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across Hampi's hot, dry ruins and Bangalore's cafe-hopping alike.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Hampi's Deccan heat and long sightseeing days both mean staying hydrated is worth planning for, not an afterthought.",
      },
      {
        name: "Compact First-Aid Kit",
        description:
          "A basic kit is worth having for trekking near Chikmagalur, boulder-hopping in Hampi, and general road-trip contingencies.",
        price: "₹499",
        rating: 4.4,
        reviews: "3.1k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("compact+travel+first+aid+kit"),
        tag: "Safety essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Multi-region road trips through hills, ruins, and coastline benefit from carrying basic supplies rather than hunting for a pharmacy.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KarnatakaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/hampi/hero.jpg"
              alt="The ancient Vijayanagara ruins of Hampi, Karnataka, scattered across a boulder-strewn landscape"
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
                {
                  label: "Karnataka",
                  href: "/blog?category=karnataka",
                },
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
                "Karnataka",
                "Bangalore",
                "Mysore",
                "Hampi",
                "Coorg",
                "South India",
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
              Karnataka Travel Guide: Bangalore, Mysore & Hampi
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              From the glass towers and craft-beer bars of India's tech
              capital to the crumbling stone chariots of a five-century-old
              empire, misty coffee hills, and a long, laid-back coastline —
              Karnataka packs more range into one state than almost anywhere
              else in India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "19 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Karnataka, South India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,700 words",
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
                  <h2>Why Karnataka?</h2>
                  <p>
                    Few Indian states cover as much ground, literally and
                    figuratively, as <strong>Karnataka</strong>. It's home to{" "}
                    <strong>Bangalore</strong>, India's IT capital and one of
                    its most cosmopolitan cities; the crumbling stone
                    monuments of <strong>Hampi</strong>, once the capital of
                    the mighty Vijayanagara Empire; the misty coffee estates
                    of the <strong>Western Ghats</strong> in Coorg and
                    Chikmagalur; and a long stretch of{" "}
                    <strong>coastal Karnataka</strong> running from Gokarna's
                    beaches down to Mangalore's seafood towns.
                  </p>
                  <p>
                    The terrain shifts constantly — the flat Deccan plateau
                    around Bangalore and Mysore gives way to the boulder
                    landscapes of the north, then to dense, rain-fed Western
                    Ghats forest, and finally to the Arabian Sea coastline.
                    Few states let you go from a rooftop microbrewery to a
                    5th-century temple to a coffee plantation to a beach
                    shack in the space of a week.
                  </p>
                  <p>
                    This guide covers the state at a broad level — Bangalore,
                    Mysore, and the wider region — while keeping the deep
                    dives on Hampi, Coorg, and Gokarna to their own dedicated
                    guides elsewhere on the site, since each of those
                    deserves more space than a single section here can give.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛺</span> Karnataka at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Karnataka",
                        },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Bangalore (BLR)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Bangalore, Hampi, Mysore Palace",
                        },
                        {
                          icon: "☕",
                          label: "Coffee Country",
                          value: "Coorg, Chikmagalur",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹9,000",
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
                  <h2>Best Time to Visit Karnataka</h2>
                  <p>
                    Karnataka's size means its climate varies quite a bit
                    region to region — the Deccan plateau, the Western Ghats,
                    and the coast don't always agree on when's best.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant across Bangalore, Mysore, and Hampi (15–30°C) — the easiest window for a multi-region trip.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but tougher",
                        text: "Coorg and the Western Ghats turn a spectacular deep green in monsoon, but waterfalls, landslides, and leeches make travel harder going.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — coast especially",
                        text: "Coastal Karnataka (Mangalore, Gokarna) gets genuinely hot and humid pre-monsoon; Bangalore stays comparatively mild given its elevation.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Mysore Dasara",
                        text: "Mysore's ten-day Dasara festival lights up the palace and city with parades and illuminations — a spectacular, if crowded, time to visit.",
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
                    <strong>Our pick:</strong> October to February for a
                    comfortable trip across Bangalore, Mysore, Hampi, and
                    Coorg alike — it's the one window where every region
                    plays nicely at once.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Karnataka</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Kempegowda International
                      Airport (BLR) in Bangalore is Karnataka's main
                      gateway, with extensive domestic and international
                      connections. Mangalore International Airport is the
                      best option for reaching coastal Karnataka directly.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Bangalore, Mysore, Hubballi,
                      and Hospet (the closest station to Hampi) all sit on
                      well-connected lines linking Karnataka to the rest of
                      the country.
                    </li>
                    <li>
                      <strong>By Road:</strong> A solid highway network
                      connects Bangalore to Mysore (~3 hrs), Coorg (~5–6
                      hrs), and Hampi (~6–7 hrs) — though the state's
                      overall spread makes flying or overnight trains worth
                      considering for the longer hops.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Overnight trains or buses
                    between Bangalore and Hospet (for Hampi) save you a
                    travel day compared to driving down and back in
                    daylight.
                  </div>
                </section>

                {/* ── Bangalore ─────────────────────────────────────────── */}
                <section id="bangalore">
                  <h2>Bangalore: India's Silicon Valley</h2>
                  <p>
                    <strong>Bangalore</strong> (officially Bengaluru) is
                    India's tech capital, and most Karnataka trips start
                    here — a city that mixes leafy old-Bangalore
                    neighborhoods with glass office towers, a serious
                    café-and-craft-beer culture, and pleasant year-round
                    weather thanks to its elevation.
                  </p>
                  <ul>
                    <li>
                      <strong>Lalbagh Botanical Garden & Cubbon Park:</strong>{" "}
                      Two of the city's green lungs — Lalbagh for its glass
                      house and century-old tree collection, Cubbon Park for
                      an easy morning walk near the city center.
                    </li>
                    <li>
                      <strong>Bangalore Palace:</strong> A Tudor-style
                      palace built in the late 19th century, with wood
                      carvings and stained glass that feel distinctly
                      different from Karnataka's other royal architecture.
                    </li>
                    <li>
                      <strong>Café & pub culture:</strong> Indiranagar,
                      Koramangala, and MG Road form the backbone of
                      Bangalore's famous café and microbrewery scene — one
                      of India's best cities for an evening out.
                    </li>
                    <li>
                      <strong>Nandi Hills:</strong> A popular sunrise day
                      trip roughly an hour outside the city, with cool hill
                      air and sweeping views over the surrounding plains.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Budget extra time for
                    Bangalore's traffic — cross-city journeys that look
                    short on a map can easily take an hour during peak
                    hours.
                  </div>
                </section>

                {/* ── Mysore ────────────────────────────────────────────── */}
                <section id="mysore">
                  <h2>Mysore: The Royal City</h2>
                  <p>
                    A comfortable 3-hour drive from Bangalore,{" "}
                    <strong>Mysore</strong> (Mysuru) was the seat of the
                    Wadiyar dynasty and remains one of South India's most
                    elegant cities — unhurried, palace-studded, and a
                    natural second stop on any Karnataka trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Mysore Palace:</strong> One of India's most
                      visited monuments, this Indo-Saracenic palace is
                      spectacular by day and even more so on Sunday
                      evenings, when it's lit with roughly 100,000 bulbs.
                    </li>
                    <li>
                      <strong>Mysore Dasara:</strong> The city's marquee
                      festival, a ten-day celebration culminating in a
                      grand procession — one of India's most famous Dasara
                      celebrations.
                    </li>
                    <li>
                      <strong>Chamundi Hills:</strong> A hilltop temple
                      dedicated to Goddess Chamundeshwari, reachable by road
                      or a long flight of steps, with views over the whole
                      city.
                    </li>
                    <li>
                      <strong>Devaraja Market:</strong> A century-old market
                      piled high with flowers, spices, and the pigment
                      powders Mysore is known for — great for photos and a
                      feel of everyday city life.
                    </li>
                  </ul>
                </section>

                {/* ── Hampi, Coorg & Gokarna ────────────────────────────── */}
                <section id="hampi-coorg-gokarna">
                  <h2>Hampi, Coorg & Gokarna</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Misty coffee plantation in the Western Ghats hills of Coorg, Karnataka"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    These three destinations are big enough, and different
                    enough from the rest of Karnataka, that each has its own
                    dedicated guide on this site — so here's the short
                    version of what makes each worth the detour.
                  </p>
                  <ul>
                    <li>
                      <strong>Hampi:</strong> The ruined capital of the
                      Vijayanagara Empire, scattered across a surreal
                      boulder landscape — the Virupaksha Temple, the stone
                      chariot at Vittala Temple, and quiet Anegundi across
                      the river are the highlights of a UNESCO World
                      Heritage site unlike anywhere else in India.
                    </li>
                    <li>
                      <strong>Coorg (Kodagu):</strong> Karnataka's coffee
                      capital, tucked into the Western Ghats — misty
                      plantations, waterfalls like Abbey Falls, and Kodava
                      hospitality make it the state's most popular hill
                      getaway.
                    </li>
                    <li>
                      <strong>Gokarna:</strong> A quieter, more laid-back
                      alternative to Goa on Karnataka's coast, known for a
                      string of beaches reachable by a coastal trek and a
                      lower-key beach-town atmosphere.
                    </li>
                  </ul>
                  <p>
                    For the full depth on any of these — multi-day
                    itineraries, specific viewpoints, trek routes, and
                    homestay picks — see the dedicated Hampi, Coorg, and
                    Gokarna guides elsewhere on the site.
                  </p>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Coastal Karnataka, Chikmagalur & Hoysala Temples</h2>
                  <ul>
                    <li>
                      <strong>Mangalore & coastal Karnataka:</strong> A
                      string of beach towns and fishing harbors south of
                      Gokarna, known for some of South India's best
                      seafood and a distinct Mangalorean cuisine built
                      around coconut, kokum, and fresh catch.
                    </li>
                    <li>
                      <strong>Chikmagalur:</strong> Karnataka's other
                      major coffee region, home to Mullayanagiri, the
                      state's highest peak, and a quieter, less-visited
                      alternative to Coorg for plantation stays and short
                      treks.
                    </li>
                    <li>
                      <strong>Belur & Halebidu:</strong> Twin temple towns
                      showcasing intricate Hoysala-era stone carving —
                      the Chennakeshava Temple at Belur and Hoysaleswara
                      Temple at Halebidu rank among India's finest
                      examples of medieval temple architecture.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Given Karnataka's spread, plan to base yourself in
                    several hubs — Bangalore, Mysore, and either
                    Hampi/Hospet or Coorg — rather than trying to day-trip
                    the whole state from one city. Note that Bangalore
                    accommodation runs noticeably higher than smaller
                    towns across the state.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Hostels & guesthouses, Bangalore",
                          "Budget lodges near Hampi Bazaar",
                          "Homestays, Coorg/Chikmagalur",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹7,000/night",
                        picks: [
                          "Business hotels, Bangalore/Mysore",
                          "Resort hotels, Hampi/Hospet",
                          "Plantation stays, Coorg",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹8,000–₹22,000+/night",
                        picks: [
                          "5-star hotels, Bangalore",
                          "Heritage palace stays, Mysore",
                          "Luxury coffee estate resorts, Coorg",
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
                    Bangalore's mid-range and luxury hotel rates run
                    30–50% higher than equivalent stays in Mysore, Hampi,
                    or Coorg — factor this in if Bangalore is only meant to
                    be a short stopover.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Karnataka</h2>
                  <ul>
                    <li>
                      <strong>Karnataka thali/meals:</strong> A traditional
                      Kannadiga meal served on a banana leaf or platter —
                      rice, sambar, rasam, an array of vegetable dishes,
                      and a sweet, all in one sitting.
                    </li>
                    <li>
                      <strong>Bisi Bele Bath:</strong> A spiced, tangy rice
                      and lentil dish cooked together with vegetables — one
                      of the state's true comfort foods.
                    </li>
                    <li>
                      <strong>Mysore Pak:</strong> A dense, ghee-rich sweet
                      that originated in the Mysore royal kitchens and
                      remains the city's signature dessert.
                    </li>
                    <li>
                      <strong>Mangalorean seafood & neer dosa:</strong>{" "}
                      Coastal Karnataka's cuisine leans on coconut, kokum,
                      and fresh catch, paired with neer dosa — a thin,
                      delicate rice crepe unique to the region.
                    </li>
                    <li>
                      <strong>Filter coffee:</strong> South Indian filter
                      coffee culture runs deep here, unsurprising given
                      that Coorg and Chikmagalur supply much of India's
                      coffee — worth seeking out a proper darshini or
                      coffee house in Bangalore or Mysore.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>9-Day Karnataka Itinerary</h2>
                  <p>
                    Nine days is a realistic minimum to combine Bangalore,
                    Mysore, and one of Hampi or Coorg without excessive
                    rushing — this route leans toward Hampi and Coorg
                    together, since Karnataka's size makes covering
                    everything in one trip a stretch.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Bangalore",
                        color: "bg-stone-600",
                        activities: [
                          "Arrive, Lalbagh & Cubbon Park",
                          "Bangalore Palace",
                          "Evening in Indiranagar's café/pub scene",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Mysore",
                        color: "bg-amber-700",
                        activities: [
                          "Travel to Mysore (~3 hrs)",
                          "Mysore Palace (illuminated on Sundays)",
                          "Devaraja Market",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Mysore & Chamundi Hills",
                        color: "bg-purple-700",
                        activities: [
                          "Chamundi Hills temple",
                          "Optional day trip to Srirangapatna",
                          "Travel toward Coorg (~2.5 hrs)",
                        ],
                      },
                      {
                        day: "Day 5–6",
                        title: "Coorg",
                        color: "bg-forest-600",
                        activities: [
                          "Coffee plantation walk",
                          "Abbey Falls",
                          "Madikeri Fort & viewpoints",
                        ],
                      },
                      {
                        day: "Day 7",
                        title: "Travel to Hampi",
                        color: "bg-sky-600",
                        activities: [
                          "Long transfer via Bangalore or Hubballi",
                          "Rest day for the journey",
                          "Arrive Hospet/Hampi in the evening",
                        ],
                      },
                      {
                        day: "Day 8–9",
                        title: "Hampi & Departure",
                        color: "bg-red-700",
                        activities: [
                          "Virupaksha Temple & Hampi Bazaar",
                          "Vittala Temple & the stone chariot",
                          "Departure via Hubballi or Bangalore",
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
                    Prefer the coast instead of Hampi? Swap Days 7–9 for a
                    transfer to Mangalore or Gokarna — either makes a
                    scenic, beach-focused close to the trip.
                  </blockquote>
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
                            "₹12,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          [
                            "Local transport/day",
                            "₹600",
                            "₹1,500",
                            "₹3,500",
                          ],
                          [
                            "Sightseeing & entry fees/day",
                            "₹500",
                            "₹1,200",
                            "₹2,500",
                          ],
                          ["Daily total", "₹3,100", "₹8,400", "₹21,000"],
                          [
                            "9-Day trip total",
                            "₹27,900",
                            "₹75,600",
                            "₹189,000",
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
                    * Excludes flights. Bangalore stays and food push
                    daily costs up noticeably — Hampi, Mysore, and Coorg
                    run cheaper on the same tier.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Karnataka</h2>
                  <ul>
                    <li>
                      <strong>Build in real transit time:</strong>{" "}
                      Karnataka's regions are far apart — Bangalore to
                      Hampi alone is a 6–7 hour drive, so don't over-pack
                      the itinerary.
                    </li>
                    <li>
                      <strong>Book Bangalore–Hospet transport ahead:</strong>{" "}
                      Overnight trains and buses to Hampi fill up quickly in
                      peak season (Oct–Feb).
                    </li>
                    <li>
                      <strong>Time Mysore Palace for a Sunday evening:</strong>{" "}
                      The illumination is one of the city's genuine
                      highlights and worth planning around.
                    </li>
                    <li>
                      <strong>Carry cash outside major cities:</strong> Card
                      and UPI acceptance is excellent in Bangalore and
                      Mysore but drops off in smaller towns near Hampi and
                      Coorg.
                    </li>
                    <li>
                      <strong>Check monsoon travel conditions for Coorg:</strong>{" "}
                      Roads and waterfalls can be affected by landslides
                      during heavy monsoon months (Jun–Sep) — check current
                      conditions before a monsoon trip.
                    </li>
                    <li>
                      <strong>Pace Bangalore's traffic into your plans:</strong>{" "}
                      Factor real buffer time for city travel — short
                      map distances can take much longer than expected.
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
                          "Book Hampi-bound overnight transport in advance",
                          "Visit Mysore Palace on a Sunday evening",
                          "Carry cash for smaller towns and homestays",
                          "Build buffer time for Bangalore's traffic",
                          "Check road conditions before a monsoon Coorg trip",
                          "Split the trip into distinct regional hubs",
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
                          "Underestimate distances between regions",
                          "Rely on cards outside major cities",
                          "Rush Hampi's ruins in under a full day",
                          "Plan a tight Bangalore schedule without traffic buffer",
                          "Skip checking Coorg road conditions in monsoon",
                          "Try to cover the whole state in under a week",
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
                  "Karnataka",
                  "Bangalore",
                  "Mysore",
                  "Hampi",
                  "Coorg",
                  "Gokarna",
                  "South India",
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
                sections={KARNATAKA_GEAR}
                destination="Karnataka"
              />

              <RelatedPostsGrid currentSlug="karnataka-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="karnataka-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
