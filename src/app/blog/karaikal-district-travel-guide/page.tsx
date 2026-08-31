// src/app/blog/karaikal-district-travel-guide/page.tsx
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
  title: "Karaikal District Travel Guide: Temples, Beach & Cauvery Delta",
  description:
    "The complete Karaikal District travel guide — Karaikal town's beach, lighthouse, port and Karaikal Ammaiyar Temple, Tirunallar's famous Saneeswaran Temple and Nala Theertham, and the coastal, rural stretches of Neravy, Kottucherry, and Nedungadu.",
  keywords:
    "Karaikal district travel guide, Karaikal beach, Tirunallar Saneeswaran temple, Sri Dharbaranyeswarar temple, Nala Theertham, Karaikal Ammaiyar Temple, Karaikal lighthouse, Karaikal port, Neravy, Kottucherry, Nedungadu, Puducherry union territory, best time to visit Karaikal, how to reach Karaikal from Puducherry, Karaikal 3 day itinerary, Karaikal budget trip, things to do in Karaikal district",
  openGraph: {
    title: "Karaikal District Travel Guide: Temples, Beach & Cauvery Delta",
    description:
      "A Shani pilgrimage temple with its own healing tank, a lighthouse-and-port beach town, and quiet Cauvery delta villages — the complete guide to Karaikal District.",
    url: "https://club.kudozz.in/blog/karaikal-district-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Tall Dravidian temple gopuram, evoking Karaikal district's Tirunallar and Karaikal Ammaiyar temples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karaikal District Travel Guide: Temples, Beach & Cauvery Delta",
    description:
      "Tirunallar's Saneeswaran Temple, Karaikal's lighthouse and beach, and the quiet Cauvery delta villages around them — the complete guide to Karaikal District.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/karaikal-district-travel-guide",
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
            "Karaikal District Travel Guide: Temples, Beach & Cauvery Delta",
          description:
            "The complete Karaikal District travel guide, covering Karaikal town, Tirunallar, Neravy, Kottucherry, and Nedungadu.",
          image:
            "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-07-24",
          dateModified: "2026-07-24",
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
            "@id": "https://club.kudozz.in/blog/karaikal-district-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Karaikal District",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Puducherry",
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
                name: "Karaikal District Travel Guide",
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
    q: "How many days do I need for Karaikal District?",
    a: "Three days covers the district comfortably — a day for Karaikal town, a day for Tirunallar's Saneeswaran Temple, and a day for a slow drive through Neravy, Kottucherry, and Nedungadu. It works especially well as an extension tacked onto a Puducherry town trip rather than a standalone visit.",
  },
  {
    q: "What is the best time to visit Karaikal District?",
    a: "November through February is the pick — cool, pleasant temperatures around 18–28°C for temple visits at Tirunallar and Karaikal town, and for exploring the delta villages, without the crowd spikes Tirunallar sees around major Shani-related festival dates.",
  },
  {
    q: "How do I reach Karaikal District?",
    a: "The nearest major airport is Tiruchirappalli (Trichy), roughly 130–140 km away, with Chennai (around 280 km) offering more flight options. Karaikal railway station connects to Chennai, Trichy, and other Tamil Nadu junctions, and by road it's about 150 km south of Puducherry town along the East Coast Road — a relaxed half-day drive if combined with a Puducherry trip.",
  },
  {
    q: "What is the Tirunallar Saneeswaran Temple famous for?",
    a: "Tirunallar's Sri Dharbaranyeswarar Temple, widely known as the Saneeswaran (Shani) Temple, is one of the most significant Navagraha-related shrines in the country, drawing devotees from across South India specifically to worship Shani. Its Nala Theertham tank is tied to the legend of King Nala, who local tradition says was relieved of Shani's affliction after bathing there — pilgrims still follow the ritual believing it eases Shani dosha.",
  },
  {
    q: "Should I visit Tirunallar on a Saturday?",
    a: "Only if the pilgrimage itself is the goal. Shani worship draws heavy devotee crowds specifically on Saturdays, so the temple gets genuinely crowded then — visiting on a weekday makes for a far calmer, more unhurried experience if you're mainly sightseeing.",
  },
  {
    q: "What is the budget for a trip to Karaikal District?",
    a: "A budget traveller can expect around ₹1,750 a day covering accommodation, food, local transport, and temple offerings, totalling roughly ₹5,250 for a 3-day trip. Mid-range travel runs about ₹4,300 a day (around ₹12,900 for three days), while an upscale trip can reach ₹8,700 a day. Costs run noticeably lower than Puducherry town, reflecting Karaikal's much lighter tourist footprint.",
  },
  {
    q: "Is Karaikal District worth visiting from Puducherry?",
    a: "Yes, especially as a two- or three-day extension after Puducherry town rather than a standalone trip. The coastal drive down is straightforward, and Karaikal offers a quieter alternative to the French Quarter circuit — a major Shani pilgrimage temple, a working port-and-lighthouse beach town, and genuine Cauvery delta countryside that sees almost no outside tourist traffic.",
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
  { id: "introduction", title: "Why Karaikal District?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "karaikal-town", title: "Karaikal Town", level: 2 },
  { id: "tirunallar", title: "Tirunallar: The Saneeswaran Temple", level: 2 },
  {
    id: "neravy-kottucherry-nedungadu",
    title: "Neravy, Kottucherry & Nedungadu",
    level: 2,
  },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Karaikal District gear ───────────────────────────────────────────────────
const KARAIKAL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for temple visits at Tirunallar and Karaikal, beach time near the lighthouse, and the quiet coastal villages beyond town",
    emoji: "🛕",
    items: [
      {
        name: "Modest Temple-Appropriate Clothing",
        description:
          "Covered shoulders and knees for the Sri Dharbaranyeswarar (Saneeswaran) Temple at Tirunallar and the Karaikal Ammaiyar Temple in town.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("travel+modest+clothing+scarf"),
        tag: "Temple essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Tirunallar is one of South India's busiest pilgrimage temples on Saturdays — dress code is enforced, not optional, especially near the sanctum.",
      },
      {
        name: "Comfortable Walking Sandals",
        description:
          "Easy to slip off at temple entrances in Tirunallar and Karaikal town, and practical for walks along Karaikal Beach and the lighthouse promenade.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "8.2k",
        image: "👡",
        affiliateUrl: amazonSearchUrl("comfortable+walking+sandals+travel"),
        tag: "All-day essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Between temple courtyards and sandy beach stretches, footwear you can remove and re-wear quickly saves real time.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "For open stretches at Karaikal Beach and the shadeless walk out to the lighthouse and port viewpoints.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Coastal essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "Karaikal's coastline has little natural shade, and the sun here is as strong as anywhere else on the Tamil Nadu coast.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy for the drive out to Tirunallar and the rural stretches around Neravy, Kottucherry, and Nedungadu, where shops thin out between villages.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Once you're outside Karaikal town, reliable shops and water points are limited across the delta villages.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Worth carrying for the Cauvery delta's paddy fields and coastal village stretches around Neravy and Kottucherry.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Rural essential",
        tagColor: "bg-red-100 text-red-700",
        why: "The district's agricultural, waterlogged delta terrain makes mosquitoes a genuine factor at dawn and dusk.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for a day covering Tirunallar and the outlying villages, where charging points are limited outside Karaikal town.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Karaikal town aside, this is a quiet delta district — don't count on charging infrastructure once you're in the villages.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KaraikalDistrictGuidePage() {
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
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="Tall Dravidian temple gopuram, evoking Karaikal district's Tirunallar and Karaikal Ammaiyar temples"
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
                { label: "Karaikal", href: "/blog?category=karaikal" },
                { label: "District Guide", href: null },
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
                "Karaikal District",
                "Tirunallar",
                "Saneeswaran Temple",
                "Karaikal Beach",
                "Cauvery Delta",
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
              Karaikal District Travel Guide: Temples, Beach & Cauvery Delta
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Shani pilgrimage temple with a legend and a healing tank, a
              lighthouse-and-port beach town, and quiet Cauvery delta
              villages almost no outside visitor sees — this is the
              complete guide to Karaikal District.
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
                  text: "Karaikal District, Puducherry UT",
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
                  <h2>Why Karaikal District?</h2>
                  <p>
                    An enclave of the Puducherry Union Territory sitting
                    inside the Tamil Nadu coast near the Cauvery delta,{" "}
                    <strong>Karaikal District</strong> is best known for one
                    thing above all else: <strong>Tirunallar</strong>'s Sri
                    Dharbaranyeswarar Temple, more widely called the{" "}
                    <strong>Saneeswaran (Shani) Temple</strong> — among the
                    most important Saturn-worship pilgrimage sites in South
                    India.
                  </p>
                  <p>
                    Beyond the temple circuit, Karaikal town itself carries
                    the same French colonial layer as Puducherry town —
                    a lighthouse, a working port, and a French-era church
                    alongside its own historic Karaikal Ammaiyar Temple. And
                    past the town limits, the district settles into genuine
                    Cauvery delta countryside: the coastal and rural stretches
                    of Neravy, Kottucherry, and Nedungadu, none of which see
                    much outside tourist traffic at all.
                  </p>
                  <p>
                    Karaikal rewards visitors looking for something quieter
                    and more specific than the French Quarter circuit —
                    a pilgrimage detour, a delta drive, and a beach town that
                    still functions as a working port rather than a resort
                    strip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Karaikal District at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Karaikal (Puducherry UT)",
                        },
                        {
                          icon: "🌊",
                          label: "Location",
                          value: "Cauvery delta coast, Tamil Nadu enclave",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🚗",
                          label: "From Puducherry",
                          value: "~150 km, 3.5 hrs",
                        },
                        {
                          icon: "🪐",
                          label: "Known For",
                          value: "Tirunallar Saneeswaran Temple",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹4,500",
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
                  <h2>Best Time to Visit Karaikal District</h2>
                  <p>
                    Karaikal shares the Cauvery delta's coastal, humid
                    climate — timing matters both for comfort and for
                    catching Tirunallar at its calmer, less crowded moments.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool and pleasant (18–28°C) — the most comfortable window for temple visits at Tirunallar and Karaikal town, and for exploring the delta villages.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and humid",
                        text: "Regularly crosses 35°C with high coastal humidity — manageable with early starts, but not the district's most comfortable stretch.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon — lighter",
                        text: "Lighter rain than the west coast, but enough to disrupt beach time at Karaikal and outdoor stretches around Neravy and Kottucherry.",
                      },
                      {
                        season: "Oct – Dec (Northeast monsoon)",
                        emoji: "⛈️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Tamil Nadu's main monsoon",
                        text: "The Cauvery delta's primary rainy season — fields turn lush green, but check forecasts before any village drive and avoid flood-prone low roads.",
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
                    <strong>Our pick:</strong> November through February —
                    comfortable temperatures for temple visits and delta
                    drives alike, without the crowd spikes Tirunallar sees
                    around major Shani-related festival dates.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Karaikal District</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest major airport is
                      Tiruchirappalli (Trichy), roughly 130–140 km away;
                      Chennai, further at around 280 km, has more flight
                      options if driving in from the north.
                    </li>
                    <li>
                      <strong>By Train:</strong> Karaikal railway station
                      connects to Chennai, Tiruchirappalli, and other Tamil
                      Nadu junctions, though frequency is lower than the
                      major coastal lines.
                    </li>
                    <li>
                      <strong>By Road:</strong> Karaikal sits about 150 km
                      south of Puducherry town along the East Coast Road and
                      NH connections through Nagapattinam district — a
                      relaxed half-day drive if combined with a Puducherry
                      trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Karaikal is easiest to add on
                    as a two- or three-day extension after Puducherry town,
                    rather than a standalone trip — the drive down the coast
                    is straightforward and avoids backtracking.
                  </div>
                </section>

                {/* ── Karaikal Town ─────────────────────────────────────── */}
                <section id="karaikal-town">
                  <h2>Karaikal Town</h2>
                  <p>
                    Like Puducherry town, <strong>Karaikal</strong> carries
                    its own French colonial layer — a working port, a
                    lighthouse, and a historic church — alongside a
                    significant Hindu pilgrimage site of its own.
                  </p>
                  <ul>
                    <li>
                      <strong>Karaikal Beach:</strong> A working coastal
                      beach stretch, quieter and far less commercialised
                      than Puducherry's Promenade.
                    </li>
                    <li>
                      <strong>Karaikal Ammaiyar Temple:</strong> Dedicated to
                      Karaikal Ammaiyar, one of the most revered Shaivite
                      Nayanmar saints and among the earliest recorded Tamil
                      women poets — a significant devotional site distinct
                      from Tirunallar.
                    </li>
                    <li>
                      <strong>Our Lady of Angels Church:</strong> A
                      prominent French-era Catholic church in town, echoing
                      the colonial Christian heritage found across
                      Puducherry's other former French territories.
                    </li>
                    <li>
                      <strong>Karaikal Lighthouse:</strong> A working
                      lighthouse along the coast, worth the walk out for
                      sea views.
                    </li>
                    <li>
                      <strong>Karaikal Port:</strong> A modern deep-water
                      port serving the region's cargo trade — not a tourist
                      attraction in the conventional sense, but a reminder
                      that this coastline still works for a living.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit Karaikal Ammaiyar
                    Temple and Our Lady of Angels Church together in the
                    morning, then walk the beach and lighthouse stretch
                    toward evening once the heat has eased.
                  </div>
                </section>

                {/* ── Tirunallar ────────────────────────────────────────── */}
                <section id="tirunallar">
                  <h2>Tirunallar: The Saneeswaran Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Dravidian temple gopuram, evoking the Sri Dharbaranyeswarar Temple at Tirunallar"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    A short drive from Karaikal town, <strong>Tirunallar</strong>{" "}
                    is the district's single biggest draw — home to the{" "}
                    <strong>Sri Dharbaranyeswarar Temple</strong>, far better
                    known across South India as the{" "}
                    <strong>Saneeswaran (Shani) Temple</strong>.
                  </p>
                  <ul>
                    <li>
                      <strong>Sri Dharbaranyeswarar / Saneeswaran Temple:</strong>{" "}
                      One of the most significant Navagraha-related shrines
                      in the country, drawing devotees from across South
                      India specifically to worship Shani (Saturn) — busiest
                      on Saturdays and during Shani-related observances.
                    </li>
                    <li>
                      <strong>Temple Tank:</strong> The temple's tank forms
                      part of the pilgrimage circuit, alongside the main
                      sanctum and its surrounding shrines.
                    </li>
                    <li>
                      <strong>Nala Theertham:</strong> A holy tank tied to
                      the legend of King Nala, who — according to local
                      tradition — was relieved of Shani's affliction after
                      bathing here; pilgrims continue the ritual today
                      believing it eases Shani dosha.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're not visiting for
                    the pilgrimage itself, avoid Saturdays — the temple gets
                    genuinely crowded with devotees observing Shani-specific
                    rituals, and a weekday visit is far calmer.
                  </div>
                </section>

                {/* ── Neravy, Kottucherry & Nedungadu ───────────────────── */}
                <section id="neravy-kottucherry-nedungadu">
                  <h2>Neravy, Kottucherry & Nedungadu</h2>
                  <p>
                    The district's remaining three areas are its quietest —
                    coastal and rural stretches of the Cauvery delta that see
                    almost no organised tourism, worth a slow drive rather
                    than a checklist of sights.
                  </p>
                  <ul>
                    <li>
                      <strong>Neravy:</strong> A coastal area near Karaikal
                      town with its own local temples and churches — a
                      genuine look at village heritage and countryside life
                      along this stretch of coast.
                    </li>
                    <li>
                      <strong>Kottucherry:</strong> Coastal and rural
                      surroundings with local temples, typical of the
                      district's smaller communes away from the main
                      pilgrimage circuit.
                    </li>
                    <li>
                      <strong>Nedungadu:</strong> A village landscape of
                      local temples and open countryside, reflecting the
                      Cauvery delta's agricultural character.
                    </li>
                  </ul>
                  <p>
                    None of these three areas has a single standout monument
                    the way Tirunallar or Karaikal town do — their value is
                    in the drive itself, through paddy fields, fishing
                    hamlets, and village temples that rarely make it onto a
                    conventional itinerary.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is concentrated in Karaikal town — plan day
                    trips to Tirunallar and the surrounding villages
                    accordingly, since options elsewhere are minimal.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Guesthouses, Karaikal town centre",
                          "Pilgrim lodges near Tirunallar",
                          "Basic lodges close to the beach",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,600–₹3,500/night",
                        picks: [
                          "Business hotels, Karaikal town",
                          "Mid-range hotels near the bus stand",
                          "Coastal-facing rooms near the lighthouse",
                        ],
                      },
                      {
                        tier: "Upscale",
                        icon: "🏛️",
                        range: "₹3,500–₹6,500+/night",
                        picks: [
                          "Select premium hotels, Karaikal town",
                          "Better-appointed business hotels",
                          "Heritage-style stays (very limited)",
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
                    Base yourself in Karaikal town for the whole district —
                    Tirunallar is a short drive away, and dedicated tourist
                    accommodation in Neravy, Kottucherry, or Nedungadu is
                    essentially non-existent.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Karaikal District</h2>
                  <ul>
                    <li>
                      <strong>Tamil Nadu delta classics:</strong> Idli, dosa,
                      and filter coffee are the everyday standard across
                      Karaikal town and its surrounding villages.
                    </li>
                    <li>
                      <strong>Fresh seafood:</strong> Karaikal's working
                      coastline and port mean fresh catch is a genuine
                      strength — look for it at beachside and town eateries.
                    </li>
                    <li>
                      <strong>Temple prasadam, Tirunallar:</strong> Simple
                      offerings at the temple are worth trying as part of
                      the pilgrimage experience.
                    </li>
                    <li>
                      <strong>Rice-based delta staples:</strong> As with much
                      of the Cauvery delta, rice and simple vegetarian
                      thalis form the backbone of everyday meals in the
                      district's rural areas.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Karaikal District Itinerary</h2>
                  <p>
                    Three days covers the district comfortably, especially if
                    combined with an onward or preceding trip to Puducherry
                    town.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Karaikal Town",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Karaikal Ammaiyar Temple, Our Lady of Angels Church",
                          "Evening: Karaikal Beach and lighthouse walk",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tirunallar",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Sri Dharbaranyeswarar (Saneeswaran) Temple",
                          "Temple Tank and Nala Theertham",
                          "Return to Karaikal town by afternoon",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Neravy, Kottucherry & Nedungadu",
                        color: "bg-forest-600",
                        activities: [
                          "Slow drive through Neravy's coastal villages",
                          "Local temples in Kottucherry and Nedungadu",
                          "Departure",
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
                          {["Expense", "Budget", "Mid-Range", "Upscale"].map(
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
                            "₹800",
                            "₹2,300",
                            "₹4,800",
                          ],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          [
                            "Local transport/day",
                            "₹350",
                            "₹700",
                            "₹1,500",
                          ],
                          ["Temple offerings/misc", "₹200", "₹400", "₹600"],
                          ["Daily total", "₹1,750", "₹4,300", "₹8,700"],
                          [
                            "3-Day trip total",
                            "₹5,250",
                            "₹12,900",
                            "₹26,100",
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
                    * Excludes travel to Karaikal itself. Costs run
                    noticeably lower than Puducherry town, reflecting
                    Karaikal's much lighter tourist footprint.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Karaikal District</h2>
                  <ul>
                    <li>
                      <strong>Avoid Tirunallar on Saturdays if sightseeing:</strong>{" "}
                      Shani worship draws heavy devotee crowds specifically
                      on Saturdays — visit on a weekday for a calmer
                      experience, or embrace the crowd if the pilgrimage
                      itself is the point.
                    </li>
                    <li>
                      <strong>Hire a car with driver for the villages:</strong>{" "}
                      Public transport to Neravy, Kottucherry, and Nedungadu
                      is limited — a private vehicle is far more practical
                      for a single-day loop.
                    </li>
                    <li>
                      <strong>Dress modestly at both major temples:</strong>{" "}
                      Tirunallar's Saneeswaran Temple and Karaikal Ammaiyar
                      Temple are active pilgrimage sites, not monuments —
                      covered shoulders and knees are expected.
                    </li>
                    <li>
                      <strong>Carry cash outside Karaikal town:</strong> Card
                      and digital payment acceptance drops off quickly once
                      you're in the surrounding villages.
                    </li>
                    <li>
                      <strong>Combine with a Puducherry trip:</strong>{" "}
                      Karaikal works best as a two- or three-day extension
                      rather than a standalone destination, given the
                      straightforward coastal drive between the two.
                    </li>
                    <li>
                      <strong>Check monsoon timing for delta drives:</strong>{" "}
                      The Cauvery delta's roads around Neravy and Kottucherry
                      can be affected during the northeast monsoon —
                      confirm conditions before an October–December visit.
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
                          "Visit Tirunallar on a weekday for a calmer temple experience",
                          "Hire a car with driver for Neravy, Kottucherry, and Nedungadu",
                          "Dress modestly at Tirunallar and Karaikal Ammaiyar Temple",
                          "Try fresh seafood near Karaikal's working port",
                          "Carry cash for areas outside Karaikal town",
                          "Combine this trip with Puducherry town",
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
                          "Expect Puducherry-level tourist infrastructure",
                          "Rely on public transport for the village stretches",
                          "Show up to Tirunallar on a Saturday expecting a quiet visit",
                          "Skip modest dress at either major temple",
                          "Rely on cards outside Karaikal town",
                          "Ignore monsoon-season road conditions in the delta villages",
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
                  "Karaikal District",
                  "Tirunallar",
                  "Saneeswaran Temple",
                  "Karaikal Beach",
                  "Puducherry",
                  "Cauvery Delta",
                  "Off-beat",
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
                sections={KARAIKAL_GEAR}
                destination="Karaikal District"
              />

              <RelatedPostsGrid currentSlug="karaikal-district-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="karaikal-district-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
