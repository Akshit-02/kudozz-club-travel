// src/app/blog/yanam-district-guide/page.tsx
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
  title: "Yanam District Travel Guide: Godavari Delta & French Heritage",
  description:
    "The complete Yanam District travel guide — St. Ann's Church, Yanam Ferry Road, the Godavari River, Yanam Tower, Rajiv Gandhi Beach and Yanam's French colonial heritage, plus the quiet Godavari delta villages of Mettakur, Kolanka, and Kanakalapeta.",
  keywords:
    "Yanam district travel guide, Yanam Andhra Pradesh, St. Ann's Church Yanam, Yanam ferry road, Godavari river Yanam, Yanam tower, Rajiv Gandhi beach Yanam, Mettakur, Kolanka, Kanakalapeta, French colonial India, Puducherry union territory",
  openGraph: {
    title: "Yanam District Travel Guide: Godavari Delta & French Heritage",
    description:
      "A French colonial enclave on the Godavari River delta — Yanam's riverfront, church, and tower, and the quiet delta villages around it.",
    url: "https://club.kudozz.in/blog/yanam-district-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Calm river with palm-lined banks, evoking Yanam's setting on the Godavari River delta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanam District Travel Guide: Godavari Delta & French Heritage",
    description:
      "St. Ann's Church, the Yanam Ferry Road, and the quiet Godavari delta villages of Mettakur, Kolanka, and Kanakalapeta.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/yanam-district-guide",
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
            "Yanam District Travel Guide: Godavari Delta & French Heritage",
          description:
            "The complete Yanam District travel guide, covering Yanam town, Mettakur, Kolanka, and Kanakalapeta.",
          image:
            "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/yanam-district-guide",
          },
          about: {
            "@type": "Place",
            name: "Yanam District",
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
                name: "Yanam District Travel Guide",
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
  { id: "introduction", title: "Why Yanam District?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "yanam-town", title: "Yanam Town", level: 2 },
  {
    id: "delta-villages",
    title: "Mettakur, Kolanka & Kanakalapeta",
    level: 2,
  },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Yanam District gear ──────────────────────────────────────────────────────
const YANAM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for riverfront walks along the Ferry Road, church visits, and the quiet Godavari delta villages around Mettakur, Kolanka, and Kanakalapeta",
    emoji: "🌊",
    items: [
      {
        name: "Comfortable Walking Sandals",
        description:
          "Ideal for the Yanam Ferry Road promenade and short strolls around St. Ann's Church and Yanam Tower.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "8.2k",
        image: "👡",
        affiliateUrl: amazonSearchUrl("comfortable+walking+sandals+travel"),
        tag: "All-day essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Yanam's town centre is compact and best covered slowly on foot along the riverfront rather than by vehicle.",
      },
      {
        name: "Modest Clothing for Church Visits",
        description:
          "Covered shoulders for St. Ann's Church, one of the town's most significant landmarks.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("travel+modest+clothing+scarf"),
        tag: "Church essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "St. Ann's is an active place of worship, not just a colonial-era monument — modest dress is expected.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "For open stretches at Rajiv Gandhi Beach and the shadeless walk along the Ferry Road beside the Godavari River.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Riverfront essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "The Godavari delta sun is strong and near-constant, with little shade along the open riverfront stretches.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Useful for the drive out to Mettakur, Kolanka, and Kanakalapeta, where shops are far sparser than in Yanam town.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Once you're past Yanam town's limits, reliable shops and water points thin out quickly across the delta villages.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Worth having near the Godavari's waterways and the delta landscapes around Kolanka and Kanakalapeta.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Delta essential",
        tagColor: "bg-red-100 text-red-700",
        why: "The Godavari delta's waterlogged, river-fed terrain makes mosquitoes a genuine factor, especially at dawn and dusk.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for a day covering Mettakur, Kolanka, and Kanakalapeta, where charging points are limited outside Yanam town.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Yanam is a compact district, but reliable charging infrastructure is concentrated almost entirely in the town centre.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function YanamDistrictGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Calm river with palm-lined banks, evoking Yanam's setting on the Godavari River delta"
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
                { label: "Yanam", href: "/blog?category=yanam" },
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
                "Yanam District",
                "Godavari Delta",
                "Andhra Pradesh",
                "French Heritage",
                "Riverfront",
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
              Yanam District Travel Guide: Godavari Delta & French Heritage
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A tiny French-era enclave on the Godavari River's delta,
              surrounded by Andhra Pradesh — a riverfront church, a working
              ferry road, and quiet delta villages almost no outside visitor
              sees.
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
                  text: "Yanam District, Godavari Delta",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>Why Yanam District?</h2>
                  <p>
                    Sitting on the banks of the Godavari River's delta,
                    surrounded entirely by Andhra Pradesh's coastal
                    districts, <strong>Yanam</strong> is the least-visited of
                    Puducherry Union Territory's four districts — a former
                    French trading enclave that most travellers have never
                    heard of, let alone visited.
                  </p>
                  <p>
                    That obscurity is exactly what makes it worth a stop.
                    Yanam's compact town centre still carries a genuine
                    French colonial layer — a riverfront church, a working
                    ferry road, and a small-town rhythm built entirely around
                    the Godavari's waterways. Beyond the town, the
                    surrounding villages of Mettakur, Kolanka, and
                    Kanakalapeta are pure Godavari delta countryside —
                    waterways, paddy fields, and rural landscapes that see
                    essentially no outside tourism at all.
                  </p>
                  <p>
                    Yanam isn't a standalone multi-day trip — it's a genuinely
                    interesting half-day-to-two-day detour if you're already
                    travelling through the Godavari delta or the Kakinada
                    coast of Andhra Pradesh.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛴️</span> Yanam District at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Yanam (Puducherry UT)",
                        },
                        {
                          icon: "🌊",
                          label: "Location",
                          value: "Godavari River delta, Andhra Pradesh enclave",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🚗",
                          label: "From Kakinada",
                          value: "~25 km, 45 min",
                        },
                        {
                          icon: "⛪",
                          label: "Known For",
                          value: "St. Ann's Church, Ferry Road",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹900 – ₹4,000",
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
                  <h2>Best Time to Visit Yanam District</h2>
                  <p>
                    Yanam shares the Godavari delta's coastal climate — warm
                    and humid most of the year, with a monsoon window that
                    fills the river and its distributaries.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (20–30°C) — ideal for walks along the Ferry Road, Rajiv Gandhi Beach, and drives out to the delta villages.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and humid",
                        text: "Temperatures regularly cross 35°C with high humidity off the delta — manageable with early starts, but not the district's best window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon",
                        text: "The Godavari runs high through this stretch, feeding the delta's waterways — scenic, but outdoor plans need real flexibility.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌦️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Transitional — river at its fullest",
                        text: "Rain tapers off while the Godavari and its distributaries still run full — a good window to see the river at its most dramatic without full monsoon disruption.",
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
                    comfortable weather for the Ferry Road walk and the
                    village drives, with calm conditions at Rajiv Gandhi
                    Beach.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Yanam District</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Rajahmundry Airport, roughly
                      55 km away, and Kakinada's Sarpavaram airstrip are the
                      nearest options, with Vishakhapatnam's larger airport
                      a longer but better-connected alternative.
                    </li>
                    <li>
                      <strong>By Train:</strong> Samalkot Junction, about 20
                      km from Yanam, is the nearest well-connected railway
                      station on the main Howrah–Chennai line.
                    </li>
                    <li>
                      <strong>By Road:</strong> Yanam sits roughly 25 km from
                      Kakinada, connected by a straightforward local road —
                      an easy stop if you're already exploring the Godavari
                      delta or East Godavari coast.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Kakinada or
                    Rajahmundry and treat Yanam as a half-day or full-day
                    excursion — dedicated stay options inside Yanam itself
                    are limited.
                  </div>
                </section>

                {/* ── Yanam Town ────────────────────────────────────────── */}
                <section id="yanam-town">
                  <h2>Yanam Town</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Sandy beach along calm water, evoking Yanam's Rajiv Gandhi Beach on the Godavari delta coast"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Yanam's compact town centre is built almost entirely
                    around the Godavari River and the French-era institutions
                    left behind after nearly two centuries of colonial rule.
                  </p>
                  <ul>
                    <li>
                      <strong>Yanam Church (St. Ann's Church):</strong> A
                      prominent French-era Catholic church and one of the
                      town's most recognisable landmarks.
                    </li>
                    <li>
                      <strong>Yanam Ferry Road:</strong> The riverside road
                      and ferry point along the Godavari, functioning as the
                      town's closest equivalent to a promenade.
                    </li>
                    <li>
                      <strong>Godavari River:</strong> The river that defines
                      the town's geography and its French colonial history as
                      a trading post.
                    </li>
                    <li>
                      <strong>Yanam Tower:</strong> A local landmark
                      structure in town, worth a stop as part of a short
                      walking loop through the centre.
                    </li>
                    <li>
                      <strong>Rajiv Gandhi Beach:</strong> A riverside beach
                      stretch near the town, considerably quieter than the
                      major Andhra Pradesh coastal beaches nearby.
                    </li>
                    <li>
                      <strong>French colonial heritage:</strong> Yanam's
                      streets and older public buildings still carry visible
                      French influence, a smaller-scale echo of Puducherry
                      town's French Quarter.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Time your visit to St. Ann's
                    Church and the Ferry Road for late afternoon, when the
                    light along the river is at its best and the day's heat
                    has eased.
                  </div>
                </section>

                {/* ── Delta Villages ────────────────────────────────────── */}
                <section id="delta-villages">
                  <h2>Mettakur, Kolanka & Kanakalapeta</h2>
                  <p>
                    Beyond Yanam town, the district settles into genuine
                    Godavari delta countryside — three quiet villages worth a
                    slow drive rather than a checklist of sights.
                  </p>
                  <ul>
                    <li>
                      <strong>Mettakur:</strong> Set along the Godavari
                      River's surroundings, with local temples and a
                      village landscape typical of the delta's interior.
                    </li>
                    <li>
                      <strong>Kolanka:</strong> Deeper into the Godavari
                      Delta, defined by its waterways and rural
                      surroundings — a genuine look at delta life away from
                      any tourist circuit.
                    </li>
                    <li>
                      <strong>Kanakalapeta:</strong> A quiet stretch of
                      river-and-countryside landscape, rounding out the
                      district's rural side.
                    </li>
                  </ul>
                  <p>
                    None of the three has a single standout monument — their
                    value is in the drive itself, through paddy fields and
                    waterways fed directly by the Godavari.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation inside Yanam is limited — most visitors
                    base themselves in Kakinada or Rajahmundry instead and
                    treat Yanam as a day trip.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹500–₹1,400/night",
                        picks: [
                          "Guesthouses, Yanam town centre",
                          "Budget lodges, Kakinada (25 km away)",
                          "Basic rooms near the riverfront",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,200/night",
                        picks: [
                          "Business hotels, Kakinada",
                          "Mid-range hotels, Rajahmundry",
                          "A handful of hotels in Yanam town",
                        ],
                      },
                      {
                        tier: "Upscale",
                        icon: "🏛️",
                        range: "₹3,200–₹6,000+/night",
                        picks: [
                          "Premium hotels, Rajahmundry",
                          "Better-appointed business hotels, Kakinada",
                          "Heritage-style stays (very limited in Yanam)",
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
                    Given Yanam's small size, most visitors are better served
                    staying in Kakinada or Rajahmundry and treating the
                    district as a half-day-to-two-day detour on a longer
                    Godavari delta trip.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Yanam District</h2>
                  <ul>
                    <li>
                      <strong>Andhra classics:</strong> Fiery Andhra-style
                      curries, pickles, and rice-based meals are the norm
                      across Yanam and the surrounding delta villages.
                    </li>
                    <li>
                      <strong>Fresh river and coastal fish:</strong> Yanam's
                      Godavari-delta location makes fish and prawn dishes a
                      genuine local strength.
                    </li>
                    <li>
                      <strong>Godavari delta rice dishes:</strong> As one of
                      India's major rice-growing deltas, rice in various
                      forms anchors most everyday meals here.
                    </li>
                    <li>
                      <strong>French-influenced traces:</strong> Small hints
                      of Yanam's colonial past occasionally surface in local
                      bakeries and older eateries, echoing Puducherry town's
                      French culinary heritage on a much smaller scale.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Yanam District Itinerary</h2>
                  <p>
                    Yanam's small size means two days is enough to cover the
                    whole district comfortably, especially if slotted into a
                    longer Godavari delta or Andhra coast trip.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Yanam Town",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in (Kakinada or Yanam town)",
                          "St. Ann's Church, a walk past Yanam Tower",
                          "Afternoon: Yanam Ferry Road along the Godavari",
                          "Evening: Rajiv Gandhi Beach",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Mettakur, Kolanka & Kanakalapeta",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Mettakur's riverside temples",
                          "Drive through Kolanka's delta waterways",
                          "Afternoon: Kanakalapeta's countryside",
                          "Departure toward Kakinada or Rajahmundry",
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
                            "₹600",
                            "₹2,000",
                            "₹4,500",
                          ],
                          ["Food/day", "₹350", "₹800", "₹1,600"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹600",
                            "₹1,200",
                          ],
                          ["Sightseeing/misc", "₹150", "₹300", "₹500"],
                          ["Daily total", "₹1,400", "₹3,700", "₹7,800"],
                          [
                            "2-Day trip total",
                            "₹2,800",
                            "₹7,400",
                            "₹15,600",
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
                    * Excludes travel to Kakinada/Rajahmundry. Costs assume a
                    base in Kakinada rather than pricier Rajahmundry city
                    stays.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Yanam District</h2>
                  <ul>
                    <li>
                      <strong>Treat Yanam as a detour, not a base:</strong>{" "}
                      Given its small size and limited stay options, most
                      visitors are better off basing in Kakinada or
                      Rajahmundry and visiting Yanam as a day trip.
                    </li>
                    <li>
                      <strong>Hire a car or auto for the delta villages:</strong>{" "}
                      Public transport to Mettakur, Kolanka, and Kanakalapeta
                      is limited — a private vehicle makes covering all
                      three realistic in a single day.
                    </li>
                    <li>
                      <strong>Dress modestly at St. Ann's Church:</strong> An
                      active place of worship, not just a colonial-era
                      monument — covered shoulders are expected.
                    </li>
                    <li>
                      <strong>Carry cash outside Yanam town:</strong> Card
                      and digital payment acceptance drops off quickly in
                      the surrounding delta villages.
                    </li>
                    <li>
                      <strong>Combine with a Godavari delta or Kakinada trip:</strong>{" "}
                      Yanam works best as a stop on a broader East Godavari
                      coast itinerary rather than a dedicated trip on its
                      own.
                    </li>
                    <li>
                      <strong>Check monsoon and river conditions:</strong>{" "}
                      July to September brings heavy rain and a full-running
                      Godavari — plan riverfront and village visits outside
                      this window if possible.
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
                          "Walk the Yanam Ferry Road in late afternoon light",
                          "Base in Kakinada or Rajahmundry and day-trip into Yanam",
                          "Hire a car or auto for Mettakur, Kolanka, and Kanakalapeta",
                          "Dress modestly at St. Ann's Church",
                          "Try fresh Godavari fish and prawn dishes",
                          "Combine Yanam with a broader Godavari delta itinerary",
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
                          "Expect a wide range of accommodation inside Yanam town",
                          "Rely on public transport for the delta village stretches",
                          "Skip modest dress at St. Ann's Church",
                          "Rely on cards outside Yanam town",
                          "Plan a village drive during peak monsoon without checking river levels",
                          "Treat Yanam as a multi-day standalone destination",
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
                  "Yanam District",
                  "Yanam",
                  "Godavari Delta",
                  "Andhra Pradesh",
                  "French Heritage",
                  "Puducherry",
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
                sections={YANAM_GEAR}
                destination="Yanam District"
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
