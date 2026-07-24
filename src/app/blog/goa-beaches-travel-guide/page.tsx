// src/app/blog/goa-beaches-travel-guide/page.tsx
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
  title: "Goa Travel Guide: Best Beaches, North vs South & Complete Itinerary",
  description:
    "The complete Goa travel guide. North Goa vs South Goa, the best beaches (Palolem, Anjuna, Vagator, Agonda), Portuguese heritage in Old Goa, beach shacks, nightlife, where to stay, what to eat, and a full 5-day itinerary.",
  keywords:
    "Goa travel guide, Goa beaches, Palolem Beach, Anjuna flea market, North Goa vs South Goa, Old Goa churches, Goa nightlife, Goa itinerary, Goa beach shacks, Dudhsagar Falls",
  openGraph: {
    title:
      "Goa Travel Guide: Best Beaches, North vs South & Complete Itinerary",
    description:
      "Portuguese-era churches, beach shacks, and a coastline that switches from party-loud to monastery-quiet within a few kilometres — the complete guide to Goa.",
    url: "https://club.kudozz.in/blog/goa-beaches-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Palm-lined Goa beach at sunset with fishing boats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Goa Travel Guide: Best Beaches, North vs South & Complete Itinerary",
    description:
      "Sun, sand, and susegad — the complete guide to Goa's beaches, heritage, and nightlife.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/goa-beaches-travel-guide",
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
            "Goa Travel Guide: Best Beaches, North vs South & Complete Itinerary",
          description: "The complete Goa travel guide.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-07-13",
          dateModified: "2026-07-13",
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
            "@id": "https://club.kudozz.in/blog/goa-beaches-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Goa",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Goa",
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
                name: "Goa Travel Guide",
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
  { id: "introduction", title: "Why Goa?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Goa", level: 2 },
  { id: "north-vs-south", title: "North Goa vs South Goa", level: 2 },
  { id: "best-beaches", title: "The Best Beaches", level: 2 },
  { id: "north-beaches", title: "→ North Goa Beaches", level: 3 },
  { id: "south-beaches", title: "→ South Goa Beaches", level: 3 },
  { id: "old-goa", title: "Old Goa — Churches & Heritage", level: 2 },
  { id: "markets-nightlife", title: "Markets & Nightlife", level: 2 },
  { id: "dudhsagar", title: "Dudhsagar Falls & Day Trips", level: 2 },
  { id: "watersports", title: "Watersports & Activities", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Goa-specific gear ───────────────────────────────────────────────────────────
const GOA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the beaches, the sun, and the shack-hopping",
    emoji: "🏖️",
    items: [
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Goa's sun is intense year-round, and reef-safe formulas avoid contributing to coral and marine damage around watersport zones like Grande Island.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"),
        tag: "Beach essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Full days on the sand without reapplying sunscreen is the single most common regret travellers report after a Goa trip.",
      },
      {
        name: "Quick-Dry Beach Towel",
        description:
          "A compact microfiber towel dries in a fraction of the time of cotton — useful when you're hopping between beaches, pools, and shacks across the day.",
        price: "₹499",
        rating: 4.4,
        reviews: "5.9k",
        image: "🏖️",
        affiliateUrl: amazonSearchUrl("quick+dry+microfiber+beach+towel"),
        tag: "Multi-beach days",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Standard hotel towels stay damp for hours in Goa's humidity — a quick-dry towel packs down small and doesn't smell by evening.",
      },
      {
        name: "Waterproof Phone Pouch",
        description:
          "Essential for watersports, boat rides to Grande Island, and simply not worrying about your phone near the surf — clear pouches still let you shoot photos.",
        price: "₹299",
        rating: 4.3,
        reviews: "9.1k",
        image: "📱",
        affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"),
        tag: "Watersports essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Parasailing, jet-skiing, and dolphin-watching boat trips all carry real risk of a dropped or soaked phone without one.",
      },
      {
        name: "Lightweight Cover-Up / Sarong",
        description:
          "Useful as beach-to-shack coverage, sun protection for the shoulders, and modest dress for the churches and temples inland.",
        price: "₹399",
        rating: 4.4,
        reviews: "4.2k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("beach+sarong+cover+up"),
        tag: "Beach-to-town essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Old Goa's churches expect covered shoulders — a sarong solves this instantly without needing a separate outfit change.",
      },
      {
        name: "Insect Repellent",
        description:
          "Mosquito activity picks up noticeably around dusk near Goa's beach shacks and backwaters, especially in the shoulder monsoon months.",
        price: "₹199",
        rating: 4.3,
        reviews: "6.8k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Evening essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Beach shack dinners run late into the evening — repellent makes those hours noticeably more comfortable.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Long beach days, boat trips, and night markets all drain a phone fast — a reliable power bank keeps you shooting and navigating all day.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "All-day essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Outlets are scarce at beach shacks — a power bank means you're never stuck choosing between photos and navigation.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GoaBeachesGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/goa/hero.jpg"
              alt="Palm-lined Goa beach at sunset with fishing boats"
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
                { label: "Goa", href: "/blog?category=goa" },
                { label: "Beaches Guide", href: null },
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
                "Goa",
                "Beaches",
                "Nightlife",
                "Heritage",
                "Watersports",
                "Susegad",
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
              Goa Travel Guide: Best Beaches, North vs South & Complete
              Itinerary
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Portuguese-era churches, beach shacks serving fresh catch on the
              sand, and a coastline that switches from party-loud to
              monastery-quiet within a few kilometres — Goa remains India's most
              complete beach destination.
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
                  text: "Goa, India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,700 words",
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
                  <h2>Why Goa?</h2>
                  <p>
                    No Indian destination has been written about, argued over,
                    and stereotyped as much as <strong>Goa</strong> — and yet it
                    remains genuinely difficult to replace. Roughly 100 km of
                    coastline packed into India's smallest state holds beach
                    shacks in Baga, whitewashed 16th-century churches in Old
                    Goa, silent fishing villages in the far south, and
                    everything from all-night trance parties to completely empty
                    stretches of sand — often within a 30-minute drive of each
                    other.
                  </p>
                  <p>
                    Four and a half centuries of Portuguese rule (1510–1961)
                    left Goa with an identity distinct from the rest of India —
                    baroque churches, a Latin-inflected local culture,
                    Konkani-Portuguese cuisine, and an architectural style
                    unlike anywhere else in the country. Layered onto this is
                    Goa's more recent identity as India's counter- culture beach
                    capital, built through decades of hippie trail travellers
                    and the trance-music scene that grew out of Anjuna and
                    Vagator in the 1960s–90s.
                  </p>
                  <p>
                    The trick to a good Goa trip is understanding that{" "}
                    <strong>
                      North and South Goa are almost different destinations
                    </strong>{" "}
                    wearing the same name — and picking (or combining) the right
                    one for what you actually want out of the trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Goa at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        {
                          icon: "🏛️",
                          label: "Portuguese Rule",
                          value: "1510 – 1961",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Goa (GOI / GOX)",
                        },
                        {
                          icon: "🏖️",
                          label: "Coastline",
                          value: "~100 km",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹6,000",
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
                  <h2>Best Time to Visit Goa</h2>
                  <p>
                    Goa's coastal climate makes seasonality a bigger factor here
                    than almost anywhere else in India — several beach shacks
                    and boat operators simply don't run outside the main season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Dry, sunny, 22–32°C, and every beach shack is open. December–January is peak season with the highest prices and crowds, especially around Christmas and New Year — book 4–6 weeks ahead if visiting then.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Shoulder season — hot but quieter",
                        text: "Temperatures climb to 33–36°C with rising humidity. Crowds and prices drop noticeably after February. Good value for those who don't mind heat and prefer emptier beaches.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — most shacks closed",
                        text: "Heavy monsoon rain shuts down most beach shacks and watersports; rough seas make swimming unsafe. Landscape turns lush green and waterfalls are at their fullest, but it's a different kind of trip entirely — more heritage and hills than beach.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌦️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transitional — hit or miss",
                        text: "Monsoon tapers off but rain can still appear; shacks reopen gradually through the month. By late October conditions are usually stable enough for a beach trip.",
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
                    <strong>Our pick:</strong> Mid-November to mid-December, or
                    January. You get the full open-shack, calm-sea season
                    without the peak Christmas-New Year crowds and pricing spike
                    — the best balance of good weather and reasonable rates.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Goa</h2>
                  <p>
                    Goa is among the best-connected leisure destinations in
                    India, with two airports and direct rail links from most
                    major cities.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Goa now has two airports —
                      Dabolim Airport (GOI) near Vasco da Gama, closer to South
                      Goa, and the newer Manohar International Airport (GOX) at
                      Mopa, closer to North Goa. Both have frequent direct
                      flights from Delhi, Mumbai, Bangalore, and most major
                      Indian cities. Check which airport your hotel is closer to
                      before booking — the transfer time between the two zones
                      can be over an hour.
                    </li>
                    <li>
                      <strong>By Train:</strong> Goa is on the Konkan Railway
                      line, with Madgaon (Margao) and Thivim as the main
                      stations, well connected to Mumbai (12 hrs), Bangalore (14
                      hrs), and Mangalore. The Konkan Railway route itself —
                      hugging the Western Ghats coastline — is scenic enough to
                      be worth the journey.
                    </li>
                    <li>
                      <strong>By Road:</strong> Goa connects to Mumbai (590 km,
                      ~10–12 hrs) and Pune (450 km, ~8–9 hrs) via national
                      highways. Overnight sleeper buses run regularly from both
                      cities, though flying is the more time-efficient option
                      given the distance.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Rent a scooter or car as soon
                    as you land — Goa's beaches and towns are spread out, and
                    public transport between them is limited. Self-driving is
                    genuinely the best way to experience the state, letting you
                    beach-hop on your own schedule.
                  </div>
                </section>

                {/* ── North vs South ────────────────────────────────────── */}
                <section id="north-vs-south">
                  <h2>North Goa vs South Goa</h2>
                  <p>
                    This is the single most important decision in planning a Goa
                    trip — the two halves of the state, split roughly by the
                    Zuari River, offer genuinely different experiences.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-white border border-stone-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-stone-900 mb-2 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>🎉</span> North Goa
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Busier, louder, and more built-up — Baga, Calangute, and
                        Anjuna are the heart of Goa's party and market scene,
                        with beach clubs, flea markets, and the highest
                        concentration of nightlife. Best for first- time
                        visitors, groups, and anyone who wants energy and
                        variety within walking distance.
                      </p>
                    </div>
                    <div className="bg-white border border-stone-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-stone-900 mb-2 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>🌴</span> South Goa
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Quieter, greener, and more upscale — Palolem, Agonda,
                        and Colva feel closer to a tropical retreat than a party
                        town, with wider beaches, fewer crowds, and a slower
                        pace. Best for couples, families, and travellers who
                        want to relax rather than go out.
                      </p>
                    </div>
                  </div>

                  <blockquote>
                    If you only have time for one, choose based on what you
                    want: North for energy, markets, and nightlife; South for
                    calm, wide beaches, and a slower pace. With 5+ days,
                    splitting your stay between both is the ideal way to see Goa
                    properly.
                  </blockquote>
                </section>

                {/* ── Best Beaches ──────────────────────────────────────── */}
                <section id="best-beaches">
                  <h2>The Best Beaches</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Turquoise water and a quiet palm-lined beach in Goa"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <section id="north-beaches">
                    <h3>North Goa Beaches</h3>
                    <ul>
                      <li>
                        <strong>Baga & Calangute:</strong> The most crowded and
                        commercial beaches in Goa — beach clubs, water sports,
                        and the famous Tito's Lane nightlife strip. Good for a
                        first taste of Goa's party reputation, not for peace and
                        quiet.
                      </li>
                      <li>
                        <strong>Anjuna:</strong> Known for its Wednesday flea
                        market (running since the hippie-trail 1960s) and
                        clifftop trance parties, particularly around Curlies and
                        the historic Anjuna beach clubs.
                      </li>
                      <li>
                        <strong>Vagator & Chapora:</strong> Dramatic red
                        laterite cliffs, quieter than Baga/Calangute, and home
                        to Chapora Fort — the fort made famous by the film{" "}
                        <em>Dil Chahta Hai</em>, with the best sunset view in
                        North Goa.
                      </li>
                      <li>
                        <strong>Morjim & Ashwem:</strong> Quieter, more upscale
                        North Goa beaches popular with Russian and European
                        long-stayers, known for beach yoga retreats and Olive
                        Ridley turtle nesting (Nov–Feb).
                      </li>
                    </ul>
                  </section>

                  <section id="south-beaches">
                    <h3>South Goa Beaches</h3>
                    <ul>
                      <li>
                        <strong>Palolem:</strong> South Goa's most famous beach
                        — a curved, calm bay lined with bamboo hut resorts and
                        low-key shacks, widely considered Goa's most classically
                        beautiful beach.
                      </li>
                      <li>
                        <strong>Agonda:</strong> Quieter still than Palolem,
                        with a strict no-nightlife policy and a protected
                        turtle-nesting stretch — the pick for travellers who
                        want genuine calm.
                      </li>
                      <li>
                        <strong>Colva & Benaulim:</strong> Wide, long beaches
                        with a more local, less backpacker-oriented feel — good
                        for families and those wanting Goan village life
                        alongside beach time.
                      </li>
                      <li>
                        <strong>Butterfly Beach & Cola Beach:</strong>
                        Boat-access-only coves near Palolem, genuinely secluded
                        and worth a half-day trip for anyone craving true
                        solitude.
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Old Goa ────────────────────────────────────────────── */}
                <section id="old-goa">
                  <h2>Old Goa — Churches & Heritage</h2>
                  <p>
                    <strong>Old Goa</strong>, the former capital of Portuguese
                    India, is a UNESCO World Heritage Site holding some of the
                    most significant colonial-era churches in Asia — a stark
                    contrast to the beach scene, and worth at least half a day.
                  </p>
                  <ul>
                    <li>
                      <strong>Basilica of Bom Jesus:</strong> Built in 1605,
                      this baroque church holds the mortal remains of St.
                      Francis Xavier in a silver casket — one of the most
                      important Christian pilgrimage sites in Asia.
                    </li>
                    <li>
                      <strong>Sé Cathedral:</strong> One of the largest churches
                      in Asia, built to commemorate the 1510 Portuguese conquest
                      of Goa, with a bell famously known as the "Golden Bell"
                      for its rich tone.
                    </li>
                    <li>
                      <strong>Church of St. Francis of Assisi:</strong>
                      Notable for its elaborately carved interior and attached
                      archaeological museum housing Hindu and Portuguese-era
                      artefacts.
                    </li>
                    <li>
                      <strong>Entry:</strong> Most churches are free; the
                      archaeological museum charges a small entry fee (~₹25)
                    </li>
                    <li>
                      <strong>Timings:</strong> 9 AM – 6:30 PM daily
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Old Goa with nearby
                    Panjim (Panaji) — the Fontainhas Latin Quarter's
                    pastel-coloured Portuguese houses and narrow lanes make for
                    one of the best walking neighbourhoods in India.
                  </div>
                </section>

                {/* ── Markets & Nightlife ────────────────────────────────── */}
                <section id="markets-nightlife">
                  <h2>Markets & Nightlife</h2>
                  <ul>
                    <li>
                      <strong>Anjuna Flea Market:</strong> Running every
                      Wednesday since the 1960s hippie trail era — clothes,
                      jewellery, souvenirs, and live music stalls spread across
                      a beachside field. Arrive by mid-morning to beat the heat
                      and crowds.
                    </li>
                    <li>
                      <strong>Arpora Night Market (Saturday):</strong> A more
                      curated, boutique-style night market with food stalls,
                      live bands, and crafts — a good alternative or complement
                      to Anjuna's daytime market.
                    </li>
                    <li>
                      <strong>Tito's Lane, Baga:</strong> The classic Goa
                      nightclub strip — Tito's, Mambo's, and neighbouring clubs
                      draw the biggest late-night crowds in the state.
                    </li>
                    <li>
                      <strong>Beach club culture:</strong> Curlies (Anjuna),
                      Thalassa (Vagator, famous for Greek food and sunset
                      views), and Sunset Point (Vagator) are among the
                      best-known sundowner spots.
                    </li>
                    <li>
                      <strong>Casinos:</strong> Goa is one of the few Indian
                      states with legal casinos, mostly floating on the Mandovi
                      River in Panjim — an unusual but popular Goa evening
                      activity.
                    </li>
                  </ul>
                </section>

                {/* ── Dudhsagar & Day Trips ─────────────────────────────── */}
                <section id="dudhsagar">
                  <h2>Dudhsagar Falls & Day Trips</h2>
                  <p>
                    <strong>Dudhsagar Falls</strong>, one of India's tallest
                    waterfalls at 310 metres, sits on the Goa-Karnataka border
                    inside Bhagwan Mahavir Wildlife Sanctuary — reachable only
                    by a jeep safari through the forest (regular cars aren't
                    permitted on the final stretch), making it a genuine
                    adventure rather than a simple photo stop.
                  </p>
                  <ul>
                    <li>
                      <strong>Distance:</strong> ~60 km from Panjim, ~2 hrs
                      drive plus jeep safari
                    </li>
                    <li>
                      <strong>Best time:</strong> Post-monsoon (Oct–Jan) when
                      the falls run full but the forest tracks are dry enough
                      for jeep access
                    </li>
                    <li>
                      <strong>Jeep safari cost:</strong> ₹500–₹600 per person
                      (shared jeep from Kulem or Collem)
                    </li>
                    <li>
                      <strong>Combine with:</strong> Spice plantation tours near
                      Ponda, which often pair well with a Dudhsagar day trip
                    </li>
                  </ul>
                </section>

                {/* ── Watersports & Activities ──────────────────────────── */}
                <section id="watersports">
                  <h2>Watersports & Activities</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Activity", "Where", "Price (approx.)"].map((h) => (
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
                          ["Parasailing", "Baga, Calangute", "₹1,200–₹1,800"],
                          ["Jet-skiing", "Baga, Candolim", "₹800–₹1,200"],
                          [
                            "Dolphin-spotting boat trip",
                            "Sinquerim, Baga, Palolem",
                            "₹400–₹600 per person",
                          ],
                          [
                            "Scuba diving (Grande Island)",
                            "Departs from Vasco/Baga",
                            "₹3,500–₹5,500",
                          ],
                          [
                            "Kayaking (backwaters)",
                            "Chapora, Sal River",
                            "₹700–₹1,000",
                          ],
                        ].map((row, i) => (
                          <tr
                            key={row[0]}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className={`p-3 border border-stone-200 text-stone-600 ${j === 0 ? "font-semibold text-stone-800" : ""}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Most watersports operate seasonally (Oct/Nov–May) and
                    cluster around Baga and Candolim in the north. Always book
                    through licensed operators with visible safety gear —
                    informal beach touts are common and not always reliable on
                    equipment condition.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Goa</h2>
                  <p>
                    Choose your base by the kind of trip you want — North Goa
                    for nightlife and energy, South Goa for quiet and space.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,800/night",
                        picks: [
                          "Zostel Goa (Anjuna)",
                          "Bamboo huts, Palolem/Agonda",
                          "Backpacker guesthouses, Arambol",
                          "Budget rooms, Calangute",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹7,000/night",
                        picks: [
                          "The Fern Kadamba (Panjim)",
                          "Boutique villas, Assagao",
                          "Beach resorts, Candolim",
                          "Palolem Beach Resort",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹10,000–₹40,000+/night",
                        picks: [
                          "Taj Exotica (Benaulim)",
                          "W Goa (Vagator)",
                          "Alila Diwa Goa",
                          "The Leela Goa (Cavelossim)",
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
                    Assagao and Siolim, just inland from Anjuna and Vagator,
                    have quietly become Goa's best mid-range base — boutique
                    stays in converted Portuguese villas, a short scooter ride
                    from the North Goa beaches, without the noise directly on
                    the sand.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Goa</h2>
                  <p>
                    Goan cuisine blends Konkani coastal cooking with Portuguese
                    influence — heavy use of coconut, kokum, and vinegar-based
                    marinades set it apart from the rest of India's coastal food
                    traditions.
                  </p>
                  <ul>
                    <li>
                      <strong>Fish Curry Rice:</strong> Goa's everyday staple —
                      a tangy, coconut-based curry (usually kingfish or pomfret)
                      with rice, found at every local eatery ("udipi" or
                      home-style restaurant) across the state.
                    </li>
                    <li>
                      <strong>Vindaloo & Xacuti:</strong> Two of Goa's signature
                      Portuguese-influenced curries — vindaloo (vinegar and
                      chilli-based, traditionally pork) and xacuti (roasted
                      spice and coconut based) — both worth seeking out at a
                      proper Goan restaurant rather than a tourist shack menu.
                    </li>
                    <li>
                      <strong>Bebinca:</strong> Goa's iconic layered dessert — a
                      Portuguese-Goan coconut and jaggery cake baked in up to 16
                      individual layers, traditionally served at Christmas but
                      available year-round.
                    </li>
                    <li>
                      <strong>Feni:</strong> Goa's traditional spirit, distilled
                      from cashew apples or coconut sap — worth trying at least
                      once, ideally at a licensed local distillery rather than a
                      random shack.
                    </li>
                    <li>
                      <strong>Best restaurants:</strong> Vinayak Family
                      Restaurant (Assagao, legendary fish thali), Gunpowder
                      (Assagao, South Indian-Goan fusion), and Fisherman's Wharf
                      (Cavelossim, riverside Goan-Portuguese fine dining).
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Goa Itinerary</h2>
                  <p>
                    Five days gives you time to properly experience both North
                    and South Goa without rushing — beaches, heritage, markets,
                    and a day trip, split across the two halves of the state.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & North Goa Beaches",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in around Calangute/Candolim",
                          "Afternoon: Baga and Calangute beach, watersports if interested",
                          "Evening: Sunset at Vagator's Chapora Fort",
                          "Dinner and nightlife on Tito's Lane, Baga",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Anjuna, Assagao & Heritage",
                        color: "bg-amber-600",
                        activities: [
                          "Morning: Anjuna flea market (if Wednesday) or Anjuna beach",
                          "Afternoon: Old Goa churches — Basilica of Bom Jesus, Sé Cathedral",
                          "Evening: Fontainhas Latin Quarter walk in Panjim",
                          "Dinner: Riverside Goan-Portuguese restaurant in Panjim",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Dudhsagar Falls Day Trip",
                        color: "bg-forest-600",
                        activities: [
                          "Full-day jeep safari to Dudhsagar Falls",
                          "Optional: combine with a spice plantation tour near Ponda",
                          "Return to North Goa base by evening",
                          "Relaxed dinner, early night after a long day",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Move to South Goa",
                        color: "bg-orange-600",
                        activities: [
                          "Morning: Drive south (1.5–2 hrs) to Palolem or Agonda",
                          "Afternoon: Settle in, relax on Palolem's calm bay",
                          "Evening: Sunset at Agonda or Colva beach",
                          "Dinner at a low-key South Goa beach shack",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "South Goa & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Boat trip to Butterfly Beach or Cola Beach",
                          "Late morning: Final relaxed beach time at Palolem",
                          "Afternoon: Depart via Dabolim Airport (closer to South Goa)",
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
                          ["Accommodation/night", "₹900", "₹3,500", "₹18,000"],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          [
                            "Scooter/car rental per day",
                            "₹400",
                            "₹1,500",
                            "₹3,500",
                          ],
                          [
                            "Watersports / activities",
                            "₹1,000",
                            "₹2,500",
                            "₹5,000",
                          ],
                          [
                            "Nightlife/entry per night",
                            "₹300",
                            "₹1,000",
                            "₹3,000",
                          ],
                          ["Daily total", "₹3,100", "₹9,700", "₹32,500"],
                          [
                            "5-Day trip total",
                            "₹15,500",
                            "₹48,500",
                            "₹1,62,500",
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
                    * Excludes flight/train to Goa. Prices spike 30–50% during
                    the Christmas–New Year peak window — the same trip booked in
                    early December or January costs noticeably less.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Goa</h2>
                  <ul>
                    <li>
                      <strong>Rent a scooter or car on arrival:</strong>
                      Goa's beaches and towns are spread out, and public
                      transport between them is limited — self-driving is by far
                      the most practical way to see the state.
                    </li>
                    <li>
                      <strong>
                        Check which airport your hotel is closer to:
                      </strong>
                      Dabolim (South-facing) and Manohar International at Mopa
                      (North-facing) can add over an hour to your transfer if
                      you land at the wrong one.
                    </li>
                    <li>
                      <strong>Book ahead for Christmas–New Year:</strong>
                      This is Goa's single busiest window — accommodation and
                      flights should be booked 4–6 weeks in advance if traveling
                      then.
                    </li>
                    <li>
                      <strong>Most beach shacks close outside Oct–May:</strong>
                      If visiting in the monsoon months, don't expect the
                      classic shack-and-watersports experience — plan around
                      heritage sites and waterfalls instead.
                    </li>
                    <li>
                      <strong>
                        Book watersports through licensed operators:
                      </strong>
                      Beach touts offering suspiciously cheap parasailing or
                      jet-ski rides often skip on safety gear — stick to
                      operators with visible licenses and proper equipment.
                    </li>
                    <li>
                      <strong>Dress modestly at churches and temples:</strong>
                      Old Goa's churches and inland temples expect covered
                      shoulders — carry a light sarong or scarf as backup.
                    </li>
                    <li>
                      <strong>Carry cash for beach shacks and markets:</strong>
                      Card acceptance is inconsistent at smaller shacks and
                      market stalls, particularly in South Goa.
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
                          "Rent a scooter or car for real flexibility",
                          "Split your stay between North and South Goa",
                          "Visit Old Goa's churches for a heritage counterpoint to the beaches",
                          "Book the Dudhsagar jeep safari through a licensed operator",
                          "Try Vindaloo and Xacuti at a proper Goan restaurant",
                          "Time your trip for Nov–Feb for the best weather and open shacks",
                          "Visit Anjuna flea market on a Wednesday morning",
                          "Watch sunset from Chapora Fort at least once",
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
                          "Book accommodation last-minute over Christmas–New Year",
                          "Assume North Goa beaches represent all of Goa",
                          "Expect open beach shacks during peak monsoon (Jun–Sep)",
                          "Skip checking which airport is closer to your hotel",
                          "Take unlicensed watersport operators on price alone",
                          "Wear beachwear into churches or temples",
                          "Rely on cards at small shacks and markets",
                          "Rush South Goa in a single day — it rewards slowing down",
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
                  "Goa",
                  "Beaches",
                  "Nightlife",
                  "Heritage",
                  "Portuguese",
                  "Watersports",
                  "India",
                  "Susegad",
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
              <TrekGearRecommendations sections={GOA_GEAR} destination="Goa" />

              <RelatedPostsGrid currentSlug="goa-beaches-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="goa-beaches-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
