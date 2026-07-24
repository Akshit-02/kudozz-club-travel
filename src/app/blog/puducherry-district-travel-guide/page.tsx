// src/app/blog/puducherry-district-travel-guide/page.tsx
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
  title: "Puducherry District Travel Guide: All 7 Towns & Attractions",
  description:
    "The complete Puducherry District travel guide, town by town — Puducherry town's French Quarter and temples, Auroville's Matrimandir, Villianur's ancient Shiva temple, Ariyankuppam's Chunnambar boat rides and Arikamedu ruins, Bahour's lake, Nettapakkam's rural landscapes, and Oulgaret's urban stretch.",
  keywords:
    "Puducherry district travel guide, Puducherry towns, Villianur temple, Ariyankuppam, Arikamedu, Chunnambar boat house, Bahour lake, Nettapakkam, Oulgaret, Auroville, Pondicherry travel guide",
  openGraph: {
    title: "Puducherry District Travel Guide: All 7 Towns & Attractions",
    description:
      "Beyond the French Quarter — a full town-by-town guide to Puducherry District, from Auroville's Matrimandir to Villianur's temple, Ariyankuppam's ancient port, and Bahour's lake.",
    url: "https://club.kudozz.in/blog/puducherry-district-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/puducherry/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mustard-yellow colonial buildings on a tree-lined street in Puducherry town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puducherry District Travel Guide: All 7 Towns & Attractions",
    description:
      "A full town-by-town guide to Puducherry District — French Quarter, Auroville, Villianur, Ariyankuppam, Bahour, Nettapakkam, and Oulgaret.",
    images: ["/images/destinations/puducherry/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/puducherry-district-travel-guide",
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
          headline: "Puducherry District Travel Guide: All 7 Towns & Attractions",
          description:
            "The complete Puducherry District travel guide, covering Puducherry town, Auroville, Villianur, Ariyankuppam, Bahour, Nettapakkam, and Oulgaret.",
          image: "https://club.kudozz.in/images/destinations/puducherry/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/puducherry-district-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Puducherry District",
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
                name: "Puducherry District Travel Guide",
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
  { id: "introduction", title: "Why Puducherry District?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "puducherry-town", title: "Puducherry Town", level: 2 },
  { id: "auroville", title: "Auroville", level: 2 },
  { id: "villianur", title: "Villianur", level: 2 },
  { id: "ariyankuppam", title: "Ariyankuppam", level: 2 },
  { id: "bahour", title: "Bahour", level: 2 },
  { id: "nettapakkam-oulgaret", title: "Nettapakkam & Oulgaret", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Puducherry District gear ───────────────────────────────────────────────
const PUDUCHERRY_DISTRICT_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for French Quarter cycling, temple visits in Villianur and Bahour, and boat rides and wetlands out toward Ariyankuppam and Bahour Lake",
    emoji: "🛶",
    items: [
      {
        name: "Comfortable Walking Sandals",
        description:
          "Useful across White Town's cobbled lanes, Villianur's temple courtyards, and the walk down to Chunnambar's boat point.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "8.2k",
        image: "👡",
        affiliateUrl: amazonSearchUrl("comfortable+walking+sandals+travel"),
        tag: "All-day essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Slip-on sandals make it easy to go barefoot at temple entrances in Villianur and Bahour without breaking stride.",
      },
      {
        name: "Modest Temple-Appropriate Clothing",
        description:
          "Covered shoulders and knees for visits to the Villianur Temple, Bahour's Sri Moolanathaswamy Temple, and Puducherry's Manakula Vinayagar Temple.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("travel+modest+clothing+scarf"),
        tag: "Temple essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Several of the district's most significant sites are active temples, not monuments — dress code is enforced at the entrance, not optional.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "For open stretches at Promenade Beach, Auroville Beach, Bahour Lake, and the boat ride out to Paradise Beach from Chunnambar.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Daily essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "Much of the district's charm is outdoors and shadeless — the boat rides in particular offer no cover at all.",
      },
      {
        name: "Compact Binoculars",
        description:
          "Worth having at Bahour Lake and the wetlands around it, and along the Chunnambar backwaters near Ariyankuppam.",
        price: "₹1,499",
        rating: 4.3,
        reviews: "2.8k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("compact+binoculars+birdwatching"),
        tag: "Wetland essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Bahour Lake and the Ariyankuppam backwaters draw a genuine variety of waterbirds, especially early morning.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Handy for the rural stretches around Nettapakkam and Bahour, and Auroville's forested paths near dusk.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Rural essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Away from the coast, the district's agricultural and wetland landscape means mosquitoes are a real factor at dawn and dusk.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful across a multi-town day covering Villianur, Bahour, and Ariyankuppam, where charging points are far more limited than in Puducherry town.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Navigating between the district's outlying communes relies heavily on maps, and charging infrastructure thins out fast outside the main town.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PuducherryDistrictGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/puducherry/hero.jpg"
              alt="Mustard-yellow colonial buildings on a tree-lined street in Puducherry town"
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
                { label: "Puducherry", href: "/blog?category=puducherry" },
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
                "Puducherry District",
                "Auroville",
                "Villianur",
                "Ariyankuppam",
                "Bahour",
                "Oulgaret",
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
              Puducherry District Travel Guide: All 7 Towns & Attractions
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Beyond the French Quarter and Auroville, Puducherry District is a
              patchwork of temple towns, wetlands, and an ancient port ruin —
              this is the complete, commune-by-commune guide to all seven.
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
                  text: "Puducherry District, Tamil Nadu coast",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,100 words",
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
                  <h2>Why Puducherry District?</h2>
                  <p>
                    Most visitors see <strong>Puducherry District</strong> as a
                    single day out — the French Quarter, a walk on the
                    Promenade, maybe a drive out to Auroville. But the district
                    itself is made up of seven distinct towns and communes,
                    each with its own character: colonial Puducherry town,
                    the experimental township of Auroville, the ancient
                    temple centre of Villianur, the archaeological port of
                    Ariyankuppam, the lake town of Bahour, and the quieter
                    rural and urban stretches of Nettapakkam and Oulgaret.
                  </p>
                  <p>
                    Seen together, they tell a fuller story of the region —
                    French colonial history in the town centre, a
                    two-thousand-year-old Indo-Roman trading port at
                    Arikamedu near Ariyankuppam, one of the district's oldest
                    and most significant Shiva temples at Villianur, and a
                    working agricultural landscape around Bahour and
                    Nettapakkam that most itineraries skip entirely.
                  </p>
                  <p>
                    This guide covers all seven, town by town, so you can
                    decide how much of the district beyond the French Quarter
                    is worth adding to your trip. For a deep dive into
                    Puducherry town itself — French Quarter walking routes,
                    café culture, and a dedicated itinerary — see our{" "}
                    <Link href="/blog/puducherry-french-quarter-travel-guide">
                      Puducherry Travel Guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🗺️</span> Puducherry District at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Puducherry (Puducherry UT)",
                        },
                        {
                          icon: "🏘️",
                          label: "Towns Covered",
                          value: "7 — see below",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🚗",
                          label: "From Chennai",
                          value: "~170 km, 3.5 hrs",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Temples, Auroville, Backwaters",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,000",
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
                  <h2>Best Time to Visit Puducherry District</h2>
                  <p>
                    The whole district shares Puducherry town's coastal,
                    humid climate — timing matters more here than any single
                    festival calendar, especially if wetland and lake stops
                    like Bahour are on your list.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (18–28°C) — ideal for temple visits in Villianur and Bahour, walks around Bahour Lake, and boat rides out of Chunnambar.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and humid",
                        text: "Regularly crosses 35°C with high humidity — manageable with early starts, but Bahour's lake and wetland areas lose much of their appeal.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon — lighter",
                        text: "Lighter rain than Kerala or coastal Karnataka, but frequent enough to disrupt Chunnambar boat rides and outdoor temple courtyards.",
                      },
                      {
                        season: "Oct – Dec (Northeast monsoon)",
                        emoji: "⛈️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Can bring heavy rain, fills the lake",
                        text: "Tamil Nadu's main monsoon overlaps the start of the cool season — Bahour Lake fills up beautifully, but check forecasts before day trips.",
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
                    <strong>Our pick:</strong> November through February gives
                    the most comfortable conditions across every part of the
                    district — coastal Puducherry town, the wetlands around
                    Bahour, and the open temple courtyards of Villianur alike.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Puducherry District</h2>
                  <p>
                    All seven towns are compact enough to be based out of
                    Puducherry town, with most sites reachable within a
                    30–40 minute drive.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Puducherry Airport has limited
                      connectivity — most travellers fly into Chennai (~170
                      km, ~3.5 hrs by road) instead.
                    </li>
                    <li>
                      <strong>By Train:</strong> Puducherry Junction connects
                      to Chennai, Bangalore, and Villupuram, the nearest major
                      railway junction.
                    </li>
                    <li>
                      <strong>By Road:</strong> The East Coast Road (ECR) from
                      Chennai is the most scenic approach. Once in the
                      district, Villianur, Ariyankuppam, Bahour, Nettapakkam,
                      and Oulgaret are all reachable by local bus, auto, or a
                      rented scooter from Puducherry town.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Rent a scooter in Puducherry
                    town for a day if you're covering Villianur, Bahour, and
                    Ariyankuppam together — public transport between the
                    outlying communes is infrequent, and a private vehicle
                    saves hours.
                  </div>
                </section>

                {/* ── Puducherry Town ───────────────────────────────────── */}
                <section id="puducherry-town">
                  <h2>Puducherry Town</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/puducherry/french.jpg"
                      alt="Colonial villa with bougainvillea in Puducherry town's French Quarter"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The district's namesake town is the obvious starting
                    point — a former French colonial capital with a walkable
                    seafront and a genuinely distinct grid of colonial streets
                    behind it.
                  </p>
                  <ul>
                    <li>
                      <strong>Promenade Beach:</strong> A rocky seafront
                      stretch (Goubert Avenue) closed to traffic each
                      evening, anchored by the Gandhi Statue and Old
                      Lighthouse.
                    </li>
                    <li>
                      <strong>White Town:</strong> The French Quarter's grid
                      of mustard-yellow colonial villas, bilingual street
                      signs, and quiet, tree-lined lanes.
                    </li>
                    <li>
                      <strong>Sri Aurobindo Ashram:</strong> A serene
                      meditation space in the heart of town, founded in 1926.
                    </li>
                    <li>
                      <strong>Manakula Vinayagar Temple:</strong> A busy,
                      centuries-old Ganesha temple right at the edge of White
                      Town — one of the town's most visited religious sites.
                    </li>
                    <li>
                      <strong>Basilica of the Sacred Heart of Jesus:</strong>{" "}
                      A Gothic-style church with striking stained glass.
                    </li>
                    <li>
                      <strong>Puducherry Museum, Bharathi Park & French War
                      Memorial:</strong> Colonial-era artefacts, a leafy formal
                      garden, and a small obelisk honouring Indian soldiers
                      who fought for France in World War I.
                    </li>
                    <li>
                      <strong>Botanical Garden:</strong> A 19th-century
                      garden near the New Bus Stand, popular with families and
                      an easy add-on to a town day.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> For café recommendations,
                    boutique streets, and a full French Quarter walking route,
                    our dedicated{" "}
                    <Link href="/blog/puducherry-french-quarter-travel-guide">
                      Puducherry Travel Guide
                    </Link>{" "}
                    covers the town in far more depth than this district
                    overview.
                  </div>
                </section>

                {/* ── Auroville ─────────────────────────────────────────── */}
                <section id="auroville">
                  <h2>Auroville</h2>
                  <p>
                    Founded in 1968 as an experimental "universal town,"{" "}
                    <strong>Auroville</strong> sits about 10 km north of
                    Puducherry town and is technically its own township,
                    though most visitors treat it as part of the same trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Matrimandir:</strong> The golden, geodesic
                      meditation chamber at Auroville's centre — a same-day
                      pass from the Visitors Centre gets you to the viewing
                      point, while entry inside needs advance booking.
                    </li>
                    <li>
                      <strong>Auroville Visitors Centre:</strong> The starting
                      point for any visit, with exhibits on the township's
                      history and shops selling Auroville-made handmade
                      paper, incense, and textiles.
                    </li>
                    <li>
                      <strong>Auroville Beach:</strong> A quieter, less
                      commercial stretch of coast than Promenade Beach, popular
                      with residents and longer-stay visitors.
                    </li>
                    <li>
                      <strong>Sadhana Forest:</strong> A volunteer-run
                      reforestation and permaculture community on Auroville's
                      outskirts, known for dry-land forest restoration and
                      short-term volunteer stays.
                    </li>
                    <li>
                      <strong>Auroville Bakery:</strong> A well-known organic
                      bakery, worth timing a visit around for fresh bread and
                      pastries.
                    </li>
                    <li>
                      <strong>Auroville's forests & community spaces:</strong>{" "}
                      Decades of reforestation turned barren red-earth
                      plateau into genuine forest — worth a slow walk beyond
                      the Matrimandir itself.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrive at the Visitors Centre
                    by mid-morning for a same-day Matrimandir viewing pass —
                    slots run out by early afternoon, especially on weekends.
                  </div>
                </section>

                {/* ── Villianur ─────────────────────────────────────────── */}
                <section id="villianur">
                  <h2>Villianur</h2>
                  <p>
                    A short drive west of Puducherry town, <strong>
                      Villianur
                    </strong>{" "}
                    is one of the district's oldest settlements and its most
                    significant temple town, worth a half-day even for
                    travellers who otherwise stay close to the coast.
                  </p>
                  <ul>
                    <li>
                      <strong>Villianur Temple (Sri Gokilambigai Vudanurai
                      Thirukameswarar Temple):</strong> An ancient Shiva
                      temple and one of the most important in the Puducherry
                      region, known for its large temple chariot and annual
                      car festival.
                    </li>
                    <li>
                      <strong>Gangaikondan Temple:</strong> A notable temple
                      within the Villianur area, adding to the town's
                      concentration of religious sites.
                    </li>
                    <li>
                      <strong>Villianur Church:</strong> A reminder that the
                      town's heritage, like much of the district, blends
                      Hindu and Christian traditions side by side.
                    </li>
                    <li>
                      <strong>Local heritage areas:</strong> Villianur's older
                      lanes around the temple complex reward an unhurried
                      walk, away from any organised tourist circuit.
                    </li>
                  </ul>
                </section>

                {/* ── Ariyankuppam ──────────────────────────────────────── */}
                <section id="ariyankuppam">
                  <h2>Ariyankuppam</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Boat on calm backwater, evoking the boat rides from Chunnambar in Ariyankuppam"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    South of Puducherry town, <strong>Ariyankuppam</strong> is
                    where the district's ancient history and its backwaters
                    meet — home to both a two-thousand-year-old trading port
                    and the boat point for one of the area's best beach
                    escapes.
                  </p>
                  <ul>
                    <li>
                      <strong>Arikamedu Archaeological Site:</strong> The
                      excavated remains of an ancient Indo-Roman trading
                      port, with evidence of trade with the Roman world dating
                      back roughly two thousand years — one of the most
                      historically significant sites in the district.
                    </li>
                    <li>
                      <strong>Chunnambar Boat House:</strong> The departure
                      point for backwater boat rides along the Chunnambar
                      river estuary.
                    </li>
                    <li>
                      <strong>Paradise Beach access:</strong> Paradise Beach
                      (Plage Paradiso) is reachable only by a short boat ride
                      from Chunnambar — a popular half-day escape from town.
                    </li>
                    <li>
                      <strong>Ariyankuppam River:</strong> The river running
                      through the commune, feeding into the backwaters and
                      estuary used for the boat rides.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Arikamedu with the
                    Chunnambar boat ride in a single half-day out — they're a
                    short drive apart and pair ancient history with the
                    district's best beach access.
                  </div>
                </section>

                {/* ── Bahour ────────────────────────────────────────────── */}
                <section id="bahour">
                  <h2>Bahour</h2>
                  <p>
                    <strong>Bahour</strong> is the district's lake town,
                    centred on one of the region's largest irrigation tanks
                    and surrounded by genuine working farmland — the most
                    rural stretch on this list.
                  </p>
                  <ul>
                    <li>
                      <strong>Bahour Lake:</strong> A large irrigation tank
                      that anchors the town, popular for a quiet morning walk
                      and birdwatching when the water level is high.
                    </li>
                    <li>
                      <strong>Sri Moolanathaswamy Temple:</strong> An ancient
                      Shiva temple in Bahour, another of the district's
                      significant, lesser-visited religious sites.
                    </li>
                    <li>
                      <strong>Bahour Wetland:</strong> The wetland areas
                      around the lake draw waterbirds, particularly in the
                      cooler months.
                    </li>
                    <li>
                      <strong>Agricultural landscapes:</strong> Paddy fields
                      and farmland surround the lake, offering a genuinely
                      different pace from the coast.
                    </li>
                  </ul>
                </section>

                {/* ── Nettapakkam & Oulgaret ────────────────────────────── */}
                <section id="nettapakkam-oulgaret">
                  <h2>Nettapakkam & Oulgaret</h2>
                  <p>
                    The district's remaining two communes bookend the spectrum
                    — <strong>Nettapakkam</strong> is quiet and rural,{" "}
                    <strong>Oulgaret</strong> is the district's most
                    urbanised stretch outside Puducherry town itself.
                  </p>
                  <ul>
                    <li>
                      <strong>Nettapakkam village surroundings:</strong>{" "}
                      Small, unhurried, and largely agricultural — a genuine
                      look at rural Puducherry life away from any tourist
                      circuit.
                    </li>
                    <li>
                      <strong>Local temples (Nettapakkam):</strong> Modest,
                      community-focused temples typical of the surrounding
                      villages.
                    </li>
                    <li>
                      <strong>Rural Puducherry landscapes:</strong> Paddy
                      fields and village lanes that make Nettapakkam worth a
                      short detour if you want to see the district beyond its
                      coastal and temple-town highlights.
                    </li>
                    <li>
                      <strong>Oulgaret urban area:</strong> Effectively an
                      extension of greater Puducherry town, with its own
                      residential and commercial stretches.
                    </li>
                    <li>
                      <strong>Nearby Botanical Garden, temples & churches:</strong>{" "}
                      Oulgaret sits close to several of the town's amenities,
                      making it easy to combine with a Puducherry town day.
                    </li>
                    <li>
                      <strong>Shopping and dining areas:</strong> Oulgaret's
                      commercial stretches serve the local population more
                      than tourists, making them a good spot for an
                      everyday-Puducherry meal away from French Quarter
                      prices.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation across the district is concentrated almost
                    entirely in Puducherry town — base yourself there and day
                    trip out to the other six towns.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Backpacker hostels, Mission Street",
                          "Budget guesthouses, Tamil Quarter",
                          "Ashram guesthouses (simple, central)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Le Pondy Beach Resort",
                          "Maison Perumal",
                          "The Promenade",
                        ],
                      },
                      {
                        tier: "Boutique Heritage",
                        icon: "🏛️",
                        range: "₹7,000–₹18,000/night",
                        picks: ["Palais de Mahe", "La Villa", "Villa Shanti"],
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
                    Auroville has its own limited guesthouse network for
                    longer stays, but for a district trip covering all seven
                    towns, Puducherry town remains the only practical base.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat Across the District</h2>
                  <ul>
                    <li>
                      <strong>French bakeries and cafés (Puducherry town):</strong>{" "}
                      Baker Street, Zuka Chocolaterie, and Café des Arts serve
                      genuine French pastries and coffee.
                    </li>
                    <li>
                      <strong>Auroville Bakery:</strong> Organic bread and
                      pastries, worth the trip out on its own.
                    </li>
                    <li>
                      <strong>South Indian classics:</strong> Idli, dosa, and
                      filter coffee from Tamil Quarter eateries remain
                      excellent and inexpensive, and are the norm once you're
                      out in Villianur, Bahour, or Nettapakkam.
                    </li>
                    <li>
                      <strong>Ashram food:</strong> The Sri Aurobindo Ashram
                      dining hall serves simple, wholesome vegetarian thalis
                      open to visitors.
                    </li>
                    <li>
                      <strong>Seafood:</strong> Fresh Bay of Bengal catch
                      features at several restaurants near the Promenade and
                      Chunnambar.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>4-Day Puducherry District Itinerary</h2>
                  <p>
                    Four days is a reasonable minimum to cover all seven
                    towns without excessive rushing, based out of Puducherry
                    town throughout.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Puducherry Town",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: White Town, Sri Aurobindo Ashram, Bharathi Park",
                          "Midday: Manakula Vinayagar Temple, Puducherry Museum",
                          "Afternoon: Botanical Garden, café-hopping",
                          "Evening: Sunset walk on Promenade Beach",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Auroville",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Visitors Centre, Matrimandir viewing pass and viewpoint",
                          "Late morning: Sadhana Forest, Auroville Bakery",
                          "Afternoon: Auroville Beach",
                          "Evening: Return to Puducherry town",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Villianur & Bahour",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Villianur Temple and Gangaikondan Temple",
                          "Midday: Drive to Bahour",
                          "Afternoon: Bahour Lake, Sri Moolanathaswamy Temple",
                          "Evening: Return to town",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Ariyankuppam, Nettapakkam & Oulgaret",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Arikamedu Archaeological Site",
                          "Late morning: Chunnambar Boat House, boat ride to Paradise Beach",
                          "Afternoon: Short detour through Nettapakkam's rural lanes",
                          "Evening: Oulgaret for a local dinner, then departure",
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
                          {["Expense", "Budget", "Mid-Range", "Boutique"].map(
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
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day (scooter or auto)",
                            "₹400",
                            "₹800",
                            "₹1,500",
                          ],
                          [
                            "Sightseeing & boat rides",
                            "₹400",
                            "₹700",
                            "₹700",
                          ],
                          ["Daily total", "₹2,500", "₹6,700", "₹16,700"],
                          [
                            "4-Day trip total",
                            "₹10,000",
                            "₹26,800",
                            "₹66,800",
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
                    * Excludes travel to Chennai/Puducherry. A rented scooter
                    is the most cost-effective way to cover Villianur,
                    Bahour, Ariyankuppam, Nettapakkam, and Oulgaret over the
                    same trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Puducherry District</h2>
                  <ul>
                    <li>
                      <strong>Base yourself in Puducherry town:</strong>{" "}
                      Accommodation elsewhere in the district is minimal to
                      non-existent — day trip out to the other six towns
                      instead.
                    </li>
                    <li>
                      <strong>Rent a scooter for the outlying communes:</strong>{" "}
                      Public transport to Villianur, Bahour, Nettapakkam, and
                      Ariyankuppam is infrequent — a private vehicle makes a
                      multi-town day realistic.
                    </li>
                    <li>
                      <strong>Book Matrimandir passes early in the day:</strong>{" "}
                      Same-day viewing slots at Auroville's Visitors Centre run
                      out by early afternoon, especially on weekends.
                    </li>
                    <li>
                      <strong>Dress modestly at active temples:</strong>{" "}
                      Villianur Temple, Bahour's Sri Moolanathaswamy Temple,
                      and Manakula Vinayagar Temple are working religious
                      sites, not monuments — covered shoulders and knees are
                      expected.
                    </li>
                    <li>
                      <strong>Time Chunnambar boat rides earlier in the day:</strong>{" "}
                      Water conditions and crowds are both more manageable
                      before midday.
                    </li>
                    <li>
                      <strong>Carry cash outside Puducherry town:</strong>{" "}
                      Card acceptance drops off sharply once you're in
                      Villianur, Bahour, or Nettapakkam.
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
                          "Rent a scooter to cover Villianur, Bahour, and Ariyankuppam in one trip",
                          "Book a same-day Matrimandir pass first thing at Auroville",
                          "Visit Arikamedu and the Chunnambar boat ride together",
                          "Dress modestly at Villianur, Bahour, and Manakula Vinayagar temples",
                          "Go early morning to Bahour Lake for birdwatching",
                          "Carry cash once outside Puducherry town",
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
                          "Expect accommodation outside Puducherry town",
                          "Rely on public transport for a multi-town day",
                          "Show up to Auroville without a same-day pass plan",
                          "Skip modest dress at Villianur or Bahour's temples",
                          "Rely on cards outside Puducherry town",
                          "Rush all seven towns into a single day",
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
                  "Puducherry District",
                  "Pondicherry",
                  "Auroville",
                  "Villianur",
                  "Ariyankuppam",
                  "Bahour",
                  "Oulgaret",
                  "Tamil Nadu",
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
                sections={PUDUCHERRY_DISTRICT_GEAR}
                destination="Puducherry District"
              />

              <RelatedPostsGrid currentSlug="puducherry-district-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="puducherry-district-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
