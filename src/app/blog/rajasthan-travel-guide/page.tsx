// src/app/blog/rajasthan-travel-guide/page.tsx
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
  title: "Rajasthan Travel Guide: Jaipur, Jodhpur & Pushkar Circuit",
  description:
    "The complete Rajasthan travel guide — Jaipur's Amber Fort and City Palace, Jodhpur's Blue City and Mehrangarh Fort, Pushkar's sacred lake, plus Udaipur and Jaisalmer, where to stay and eat, and a full circuit itinerary through India's most royal state.",
  keywords:
    "Rajasthan travel guide, Jaipur travel guide, Jodhpur Blue City, Mehrangarh Fort, Pushkar travel guide, Amber Fort, Hawa Mahal, Rajasthan itinerary, Rajasthan forts and palaces, Golden Triangle Rajasthan",
  openGraph: {
    title: "Rajasthan Travel Guide: Jaipur, Jodhpur & Pushkar Circuit",
    description:
      "Pink-walled Jaipur, the Blue City of Jodhpur, and a sacred lake town at Pushkar — the complete guide to Rajasthan's classic royal circuit.",
    url: "https://club.kudozz.in/blog/rajasthan-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A grand Rajasthani sandstone fort at golden hour, evoking Rajasthan's royal architectural heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajasthan Travel Guide: Jaipur, Jodhpur & Pushkar Circuit",
    description:
      "Pink-walled Jaipur, the Blue City of Jodhpur, and royal forts across the desert — the complete guide to Rajasthan.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/rajasthan-travel-guide",
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
          headline: "Rajasthan Travel Guide: Jaipur, Jodhpur & Pushkar Circuit",
          description: "The complete Rajasthan travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/rajasthan-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Rajasthan",
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
                name: "Rajasthan Travel Guide",
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
  { id: "introduction", title: "Why Rajasthan?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "jaipur", title: "Jaipur: The Pink City", level: 2 },
  { id: "jodhpur", title: "Jodhpur: The Blue City", level: 2 },
  { id: "pushkar", title: "Pushkar: Sacred Lake & Camel Fair", level: 2 },
  { id: "udaipur-jaisalmer", title: "Udaipur & Jaisalmer", level: 2 },
  { id: "other-stops", title: "Ranthambore & Chittorgarh", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "8-Day Circuit Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Rajasthan-specific gear ─────────────────────────────────────────────────
const RAJASTHAN_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for fort climbs, desert heat, and long multi-city road journeys",
    emoji: "🏰",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Amber Fort, Mehrangarh Fort and Jaisalmer Fort all involve extended walking on uneven stone ramps and courtyards — good shoes matter across the whole circuit.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Fort essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "A single day at Amber or Mehrangarh Fort easily covers several kilometres on stone ramparts — sandals wear out visitors fast here.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Rajasthan's desert climate makes hydration a genuine priority, especially at exposed fort complexes with little shade.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Jaisalmer and Jodhpur regularly cross 40°C for much of the year — dehydration is the most common issue for first-time desert-circuit travellers.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "Useful across every fort and desert stop on the circuit, particularly a Sam Sand Dunes camel safari near Jaisalmer.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.6k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Rajasthan's forts and desert stops offer almost no shade — sun protection matters more here than in most parts of India.",
      },
      {
        name: "Lightweight Cotton Layers",
        description:
          "Breathable, modest clothing works better in Rajasthan's dry heat than synthetic fabrics, and covers most temple and palace dress expectations.",
        price: "₹799",
        rating: 4.3,
        reviews: "4.4k",
        image: "👗",
        affiliateUrl: amazonSearchUrl("lightweight+cotton+travel+clothing"),
        tag: "Desert essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Dry desert heat feels different from humid coastal heat — breathable cotton layers handle it far better than most 'travel' synthetic fabrics.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long inter-city road journeys between Jaipur, Jodhpur, Jaisalmer and Udaipur, which can each run 5-6 hours.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Road-trip essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The classic Rajasthan circuit involves genuinely long driving days between cities — a charged power bank keeps navigation and entertainment running.",
      },
      {
        name: "Dust Scarf / Bandana",
        description:
          "Handy for desert safaris and dusty fort courtyards, especially during a camel safari near Jaisalmer.",
        price: "₹299",
        rating: 4.2,
        reviews: "3.8k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("bandana+dust+scarf+travel"),
        tag: "Desert essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Dust and sand are a constant on desert safaris — a simple scarf makes the experience noticeably more comfortable.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RajasthanGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="A grand Rajasthani sandstone fort at golden hour, evoking Rajasthan's royal architectural heritage"
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
                { label: "Rajasthan", href: "/blog?category=rajasthan" },
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
                "Jaipur",
                "Jodhpur",
                "Pushkar",
                "Forts & Palaces",
                "Desert",
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
              Rajasthan Travel Guide: Jaipur, Jodhpur & Pushkar Circuit
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Pink-walled bazaars, a fort city painted entirely blue, and
              royal palaces still standing exactly where maharajas built
              them centuries ago — Rajasthan is India's most theatrical
              state, and its most rewarding road trip.
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
                  text: "Rajasthan, Northwest India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,500 words",
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
                  <h2>Why Rajasthan?</h2>
                  <p>
                    No other Indian state has turned its history into quite
                    as complete an experience as <strong>Rajasthan</strong> —
                    former Rajput kingdoms that built hilltop forts,
                    lake palaces, and walled cities so distinctive that each
                    major city has its own signature colour: Jaipur's pink,
                    Jodhpur's blue, Jaisalmer's gold.
                  </p>
                  <p>
                    The classic Rajasthan circuit strings these cities
                    together — Jaipur's Amber Fort and City Palace, Jodhpur's
                    Mehrangarh Fort towering over the Blue City, the sacred
                    lake town of Pushkar, and onward to the desert forts of
                    Jaisalmer and the lake palaces of Udaipur (both covered
                    in dedicated guides linked below).
                  </p>
                  <p>
                    It's a genuinely large state, and the classic circuit
                    involves real driving distances between cities — but few
                    trips in India deliver this much consistent visual and
                    historical payoff for the time invested.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Rajasthan at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Rajasthan" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Jaipur (JAI)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏯",
                          label: "Known For",
                          value: "Forts, Palaces, Desert",
                        },
                        {
                          icon: "🎨",
                          label: "City Colours",
                          value: "Pink (Jaipur), Blue (Jodhpur), Gold (Jaisalmer)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹8,000",
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
                  <h2>Best Time to Visit Rajasthan</h2>
                  <p>
                    Rajasthan's desert climate makes seasonal timing
                    genuinely important — summer is extreme, and the
                    difference between peak and off-season is significant.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days (10–28°C) make fort climbs and desert safaris genuinely comfortable — the peak tourist season across all major cities.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid if possible",
                        text: "Jaisalmer and Jodhpur regularly cross 42-45°C. Sightseeing is genuinely dangerous outside early morning and evening hours.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — brief but welcome",
                        text: "Rajasthan's monsoon is lighter than most of India's, but it does bring welcome relief from the heat, plus green landscapes rare for the desert region.",
                      },
                      {
                        season: "Nov",
                        emoji: "🐫",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Pushkar Camel Fair",
                        text: "One of India's most spectacular livestock fairs, drawing thousands of camels and traders to Pushkar — book accommodation many months ahead.",
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
                    <strong>Our pick:</strong> late October to February —
                    comfortable temperatures across the whole circuit, and
                    the only realistic window for a Sam Sand Dunes camel
                    safari.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Rajasthan</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jaipur International Airport
                      (JAI) is the main gateway, with regular domestic
                      flights from Delhi, Mumbai and other major cities.
                      Jodhpur and Udaipur also have their own airports.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Jaipur, Jodhpur, Jaisalmer
                      and Udaipur are all well connected by rail to Delhi
                      and other major cities — a popular option for the
                      inter-city legs of the circuit.
                    </li>
                    <li>
                      <strong>By Road:</strong> Jaipur is roughly 5-6 hours
                      from Delhi by road via NH48 — a common starting point
                      for a self-drive Rajasthan circuit.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hiring a car with driver for
                    the full circuit is genuinely worth the cost — inter-city
                    distances are long, and a driver familiar with the route
                    removes a lot of friction from a multi-city trip.
                  </div>
                </section>

                {/* ── Jaipur ────────────────────────────────────────────── */}
                <section id="jaipur">
                  <h2>Jaipur: The Pink City</h2>
                  <p>
                    Rajasthan's capital and most visited city, Jaipur earned
                    its nickname from the terracotta-pink buildings of its
                    walled old city, painted that colour in 1876 to welcome
                    the Prince of Wales.
                  </p>
                  <ul>
                    <li>
                      <strong>Amber Fort:</strong> A hilltop fort-palace
                      roughly 11 km from the city centre, with elephant
                      rides (or jeep) up to the entrance and one of
                      Rajasthan's most impressive interiors, including the
                      mirrored Sheesh Mahal.
                    </li>
                    <li>
                      <strong>City Palace:</strong> Still partly home to the
                      Jaipur royal family, with museum sections open to the
                      public showcasing royal artefacts and costumes.
                    </li>
                    <li>
                      <strong>Hawa Mahal:</strong> The iconic "Palace of
                      Winds," a five-storey pink sandstone facade with 953
                      small windows, originally built for royal women to
                      observe street life unseen.
                    </li>
                    <li>
                      <strong>Jantar Mantar:</strong> A UNESCO-listed
                      astronomical observatory with giant stone instruments,
                      still functional and remarkably accurate.
                    </li>
                    <li>
                      <strong>Jaipur bazaars:</strong> Johari Bazaar for
                      jewellery, Bapu Bazaar for textiles — some of India's
                      best traditional shopping.
                    </li>
                  </ul>
                </section>

                {/* ── Jodhpur ───────────────────────────────────────────── */}
                <section id="jodhpur">
                  <h2>Jodhpur: The Blue City</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="A massive hilltop sandstone fort, evoking Jodhpur's Mehrangarh Fort towering above the Blue City"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Named for the indigo-washed houses that cover its old
                    city, Jodhpur is dominated by one of India's most
                    imposing forts, visible from almost anywhere in town.
                  </p>
                  <ul>
                    <li>
                      <strong>Mehrangarh Fort:</strong> Rising 125m above
                      the city on a sheer rock face, this is one of India's
                      largest and best-preserved forts, with an excellent
                      audio guide and sweeping views over the Blue City.
                    </li>
                    <li>
                      <strong>The Blue City:</strong> The old town's
                      indigo-washed houses, originally colour-coded to
                      Brahmin residences, now cover most of the walled city
                      — best viewed from the fort ramparts.
                    </li>
                    <li>
                      <strong>Jaswant Thada:</strong> A white marble
                      memorial near the fort, built for Maharaja Jaswant
                      Singh II, with peaceful gardens.
                    </li>
                    <li>
                      <strong>Sardar Market & Clock Tower:</strong> The
                      city's bustling commercial heart, good for spices,
                      textiles and street food.
                    </li>
                  </ul>
                </section>

                {/* ── Pushkar ───────────────────────────────────────────── */}
                <section id="pushkar">
                  <h2>Pushkar: Sacred Lake & Camel Fair</h2>
                  <p>
                    A small, holy town built around Pushkar Lake, believed
                    to have been created by a lotus flower dropped by Lord
                    Brahma — one of the few Brahma temples in the world sits
                    here.
                  </p>
                  <ul>
                    <li>
                      <strong>Pushkar Lake:</strong> Ringed by 52 ghats,
                      considered one of Hinduism's holiest lakes — respectful
                      behaviour (no leather, modest dress) is expected at
                      the ghats.
                    </li>
                    <li>
                      <strong>Brahma Temple:</strong> One of very few
                      temples dedicated to Brahma anywhere in the world,
                      making Pushkar a significant pilgrimage site.
                    </li>
                    <li>
                      <strong>Pushkar Camel Fair:</strong> Held annually
                      around November (Kartik Purnima), this is one of the
                      world's largest camel and livestock fairs, with
                      thousands of animals, traders, and a genuine carnival
                      atmosphere.
                    </li>
                    <li>
                      <strong>Pushkar bazaar:</strong> A relaxed, hippie-
                      trail-adjacent market street, good for a slow evening
                      wander.
                    </li>
                  </ul>
                </section>

                {/* ── Udaipur & Jaisalmer ───────────────────────────────── */}
                <section id="udaipur-jaisalmer">
                  <h2>Udaipur & Jaisalmer</h2>
                  <p>
                    Both cities are essential stops on a full Rajasthan
                    circuit — each has enough depth for a dedicated guide,
                    linked below.
                  </p>
                  <ul>
                    <li>
                      <strong>Udaipur — the City of Lakes:</strong> Palaces
                      that appear to float on Lake Pichola, whitewashed
                      havelis, and the most romantic skyline in Rajasthan.
                      See our full{" "}
                      <Link href="/blog/udaipur-city-of-lakes">
                        Udaipur travel guide
                      </Link>{" "}
                      for details.
                    </li>
                    <li>
                      <strong>Jaisalmer — the Golden City:</strong> A living
                      medieval fort rising from the Thar Desert, with camel
                      safaris into the Sam Sand Dunes. See our full{" "}
                      <Link href="/blog/rajasthan-desert-guide">
                        Jaisalmer & Thar Desert guide
                      </Link>{" "}
                      for details.
                    </li>
                  </ul>
                </section>

                {/* ── Other Stops ───────────────────────────────────────── */}
                <section id="other-stops">
                  <h2>Ranthambore & Chittorgarh</h2>
                  <ul>
                    <li>
                      <strong>Ranthambore National Park:</strong> One of
                      India's best tiger reserves, roughly midway between
                      Jaipur and the rest of the circuit — a strong add-on
                      if wildlife safaris interest you.
                    </li>
                    <li>
                      <strong>Chittorgarh Fort:</strong> India's largest
                      fort complex and a UNESCO World Heritage Site, with a
                      history of dramatic sieges and legendary tales of
                      Rajput valour — worth a dedicated half-day.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Rajasthan offers some of India's finest heritage hotel
                    conversions — actual former palaces and havelis turned
                    into stays, alongside plenty of budget and mid-range
                    options.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses, Jaipur old city",
                          "Budget havelis, Jodhpur",
                          "Backpacker stays, Pushkar",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹7,000/night",
                        picks: [
                          "Boutique havelis, Jodhpur old city",
                          "Heritage hotels, Jaipur",
                          "Lake-view stays, Pushkar",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹15,000–₹60,000+/night",
                        picks: [
                          "Rambagh Palace, Jaipur",
                          "Umaid Bhawan Palace, Jodhpur",
                          "Taj Lake Palace, Udaipur",
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
                    A heritage haveli stay in Jodhpur's old city — even a
                    mid-range one — is worth prioritising; many offer rooftop
                    views directly onto Mehrangarh Fort and the Blue City.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Rajasthan</h2>
                  <ul>
                    <li>
                      <strong>Dal Baati Churma:</strong> Rajasthan's
                      signature dish — baked wheat balls served with lentils
                      and a sweet crumbled wheat dessert, found everywhere
                      across the state.
                    </li>
                    <li>
                      <strong>Laal Maas:</strong> A fiery, red-chilli mutton
                      curry, a Rajput hunting-tradition specialty — best
                      tried in Jodhpur or Udaipur.
                    </li>
                    <li>
                      <strong>Gatte ki Sabzi:</strong> Gram flour dumplings
                      in a spiced yoghurt gravy, a distinctive vegetarian
                      staple reflecting the desert's limited fresh produce
                      historically.
                    </li>
                    <li>
                      <strong>Pyaaz Kachori (Jodhpur):</strong> A crisp,
                      onion-stuffed fried pastry, best eaten fresh and hot
                      from Jodhpur's old city stalls.
                    </li>
                    <li>
                      <strong>Ghewar:</strong> A disc-shaped, honeycomb-
                      textured sweet, especially popular during festivals —
                      widely available in Jaipur's sweet shops.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>8-Day Rajasthan Circuit Itinerary</h2>
                  <p>
                    Eight days is a reasonable minimum to cover the classic
                    circuit — add more time if extending into Jaisalmer or
                    Udaipur in real depth (see the dedicated guides).
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Jaipur",
                        color: "bg-amber-700",
                        activities: [
                          "Amber Fort, City Palace",
                          "Hawa Mahal, Jantar Mantar",
                          "Bazaars: Johari, Bapu",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Pushkar",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Pushkar (~2.5 hrs)",
                          "Pushkar Lake, Brahma Temple",
                          "Evening market walk",
                        ],
                      },
                      {
                        day: "Day 4–5",
                        title: "Jodhpur",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to Jodhpur (~3.5 hrs)",
                          "Mehrangarh Fort, Blue City walk",
                          "Jaswant Thada, Sardar Market",
                        ],
                      },
                      {
                        day: "Day 6–7",
                        title: "Jaisalmer",
                        color: "bg-purple-600",
                        activities: [
                          "Drive to Jaisalmer (~5-6 hrs)",
                          "Jaisalmer Fort, havelis",
                          "Sam Sand Dunes camel safari",
                        ],
                      },
                      {
                        day: "Day 8",
                        title: "Udaipur (optional extension)",
                        color: "bg-stone-600",
                        activities: [
                          "Fly or drive to Udaipur",
                          "Lake Pichola boat ride, City Palace",
                          "See our dedicated Udaipur guide for a full 3-day extension",
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
                            "₹5,000",
                            "₹20,000",
                          ],
                          ["Food/day", "₹500", "₹1,500", "₹3,500"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹3,000",
                          ],
                          [
                            "Monument entry fees/day",
                            "₹500",
                            "₹500",
                            "₹500",
                          ],
                          ["Daily total", "₹2,700", "₹8,200", "₹27,000"],
                          [
                            "8-Day trip total",
                            "₹21,600",
                            "₹65,600",
                            "₹2,16,000",
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
                    * Excludes inter-city car hire, which is typically
                    quoted separately at ₹10-15/km for the full circuit if
                    self-arranged rather than through a tour package.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Rajasthan</h2>
                  <ul>
                    <li>
                      <strong>Hire a car with driver for the full circuit:</strong>{" "}
                      Long inter-city distances make this far more practical
                      than piecing together public transport.
                    </li>
                    <li>
                      <strong>Book Pushkar Camel Fair accommodation months
                      ahead:</strong> Rooms sell out well in advance for this
                      annual event.
                    </li>
                    <li>
                      <strong>Avoid the April–June heat if possible:</strong>{" "}
                      Fort visits and desert safaris are genuinely
                      uncomfortable and can be risky in peak summer.
                    </li>
                    <li>
                      <strong>Dress modestly and remove leather at
                      Pushkar's ghats:</strong> Local custom is strictly
                      observed here.
                    </li>
                    <li>
                      <strong>Negotiate fixed prices for camel safaris and
                      guides:</strong> Confirm the full itinerary and price
                      upfront, especially in Jaisalmer.
                    </li>
                    <li>
                      <strong>Carry cash for smaller towns:</strong> Card and
                      UPI acceptance drops off outside major hotels and
                      shops in Pushkar and rural stops.
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
                          "Hire a car with driver for the multi-city circuit",
                          "Book Pushkar Camel Fair stays months in advance",
                          "Visit forts early morning to beat heat and crowds",
                          "Try Dal Baati Churma and Laal Maas along the way",
                          "Negotiate fixed prices for safaris and guides upfront",
                          "Carry cash for smaller towns and rural stops",
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
                          "Travel the desert circuit during peak summer heat",
                          "Wear leather items at Pushkar's sacred ghats",
                          "Underestimate driving distances between cities",
                          "Skip fixing safari/guide prices before starting",
                          "Rush the circuit in under a week",
                          "Rely on cards outside major hotels and shops",
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
                  "Rajasthan",
                  "Jaipur",
                  "Jodhpur",
                  "Pushkar",
                  "Forts & Palaces",
                  "Desert",
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
                sections={RAJASTHAN_GEAR}
                destination="Rajasthan"
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
