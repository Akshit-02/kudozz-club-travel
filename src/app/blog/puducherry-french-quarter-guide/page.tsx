// src/app/blog/puducherry-french-quarter-guide/page.tsx
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
  title: "Puducherry Travel Guide: French Quarter, Auroville & Beaches",
  description:
    "The complete Puducherry travel guide. French Quarter walking routes, Auroville and the Matrimandir, Promenade Beach, Ousteri Lake, where to stay, what to eat, and a full 3-day itinerary through India's most European town.",
  keywords:
    "Puducherry travel guide, Pondicherry French Quarter, Auroville Matrimandir, Promenade Beach Pondicherry, Ousteri Lake, Pondicherry itinerary, Puducherry cafes, Tamil Nadu weekend trip",
  openGraph: {
    title: "Puducherry Travel Guide: French Quarter, Auroville & Beaches",
    description:
      "Mustard-yellow colonial villas, a rock-hewn seafront promenade, and the golden Matrimandir at Auroville — the complete guide to Puducherry.",
    url: "https://club.kudozz.in/blog/puducherry-french-quarter-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/puducherry/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mustard-yellow colonial buildings on a tree-lined street in Puducherry's French Quarter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puducherry Travel Guide: French Quarter, Auroville & Beaches",
    description:
      "French Quarter villas, the Matrimandir at Auroville, and a seafront promenade with no traffic — the complete guide to Puducherry.",
    images: ["/images/destinations/puducherry/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/puducherry-french-quarter-guide",
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
            "Puducherry Travel Guide: French Quarter, Auroville & Beaches",
          description: "The complete Puducherry travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/puducherry/hero.jpg",
          datePublished: "2026-07-16",
          dateModified: "2026-07-16",
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
            "@id":
              "https://club.kudozz.in/blog/puducherry-french-quarter-guide",
          },
          about: {
            "@type": "Place",
            name: "Puducherry",
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
                name: "Puducherry Travel Guide",
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
  { id: "introduction", title: "Why Puducherry?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Puducherry", level: 2 },
  { id: "french-quarter", title: "The French Quarter", level: 2 },
  { id: "auroville", title: "Auroville & the Matrimandir", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Puducherry-specific gear ───────────────────────────────────────────────────
const PUDUCHERRY_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for cycling the French Quarter, beach evenings, and Auroville's red-earth paths",
    emoji: "🚲",
    items: [
      {
        name: "Comfortable Walking Sandals",
        description:
          "The French Quarter is best explored slowly on foot over cobbled and uneven streets — cushioned, breathable sandals hold up far better than sneakers in the coastal humidity.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "8.2k",
        image: "👡",
        affiliateUrl: amazonSearchUrl("comfortable+walking+sandals+travel"),
        tag: "Quarter-walk essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Most of the French Quarter's charm is in the details — door knockers, bougainvillea, faded signage — that you only notice walking slowly, which means hours on your feet.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Puducherry's sun is strong and near-constant year-round, whether you're cycling the Promenade or wandering Auroville's open pathways.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Daily essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "There's very little shade along the seafront Promenade or around the Matrimandir gardens — sunburn is the most common complaint from first-time visitors.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "A packable, breathable hat that earns its keep on café-hopping mornings and the shadeless stretch of Goubert Avenue along the coast.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.4k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Beach essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Puducherry's charm is best enjoyed at a slow pace outdoors — a good hat means you can linger without cutting the day short.",
      },
      {
        name: "Rented Bicycle Lock (Bring Your Own)",
        description:
          "Cycling is the classic way to see the French Quarter, and rentals are everywhere — carrying your own compact lock means you're never stuck deciding where's 'safe enough' to leave it.",
        price: "₹499",
        rating: 4.2,
        reviews: "2.6k",
        image: "🔒",
        affiliateUrl: amazonSearchUrl("portable+bicycle+lock"),
        tag: "Cycling essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Bicycles are the best way to cover both the French and Tamil Quarters in a single unhurried morning without the parking hassles of a scooter.",
      },
      {
        name: "Insulated Water Bottle",
        description:
          "The coastal humidity makes hydration more important than the temperature alone suggests — an insulated bottle keeps water cool through a long day of walking or cycling.",
        price: "₹699",
        rating: 4.6,
        reviews: "9.8k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "All-day essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Cafés in the French Quarter are plentiful, but the stretches between them along the Promenade and out to Auroville are not — carry your own water.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Between navigating quiet, similarly-named French Quarter lanes and the sprawling Auroville township, phone battery drains fast on maps and photos alike.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Navigation essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Auroville in particular is spread over a large, forested area with patchy signage — a dead phone there is a genuinely inconvenient problem.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PuducherryGuidePage() {
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
              alt="Mustard-yellow colonial buildings on a tree-lined street in Puducherry's French Quarter"
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
                "Puducherry",
                "Tamil Nadu",
                "French Quarter",
                "Auroville",
                "Beaches",
                "Weekend Trip",
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
              Puducherry Travel Guide: French Quarter, Auroville & Beaches
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Mustard-yellow colonial villas, a seafront promenade with no
              traffic, and the golden Matrimandir a short ride away — this is
              India's most unexpectedly European town.
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
                  text: "Puducherry, Tamil Nadu",
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
                  <h2>Why Puducherry?</h2>
                  <p>
                    A former French colony on the Tamil Nadu coast,{" "}
                    <strong>Puducherry</strong> (still widely called
                    Pondicherry) is the rare Indian town where the colonial past
                    isn't a single preserved monument but an entire
                    neighbourhood you can still walk through. The{" "}
                    <strong>French Quarter</strong>, or "White Town," is a grid
                    of mustard-yellow and bougainvillea-draped villas behind
                    high walls, with street signs still bilingual in French and
                    Tamil — a genuinely different texture from anywhere else on
                    India's east coast.
                  </p>
                  <p>
                    Just outside town, <strong>Auroville</strong> adds a
                    completely different layer: an experimental international
                    township built around the golden, geodesic{" "}
                    <strong>Matrimandir</strong>, set in forest that volunteers
                    spent decades regreening from barren red earth. Between the
                    two — plus a walkable seafront Promenade closed to traffic
                    every evening, and some of the best café culture in South
                    India — Puducherry earns its reputation as an easy,
                    rewarding weekend from Chennai or Bangalore.
                  </p>
                  <p>
                    It's compact enough to see properly in three days, calm
                    enough to actually slow down in, and different enough from
                    the rest of Tamil Nadu that it rarely feels like a "second
                    stop" on a longer trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🇫🇷</span> Puducherry at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Union Territory",
                          value: "Puducherry",
                        },
                        {
                          icon: "🏖️",
                          label: "Coastline",
                          value: "Bay of Bengal",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🚗",
                          label: "From Chennai",
                          value: "~170 km, 3.5 hrs",
                        },
                        {
                          icon: "🕯️",
                          label: "Auroville",
                          value: "~10 km from town",
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
                  <h2>Best Time to Visit Puducherry</h2>
                  <p>
                    Puducherry is a coastal town with heavy humidity for much of
                    the year — timing your trip around the weather matters more
                    here than the calendar of festivals.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (18–28°C), ideal for long walks in the French Quarter and cycling out to Auroville. December's Puducherry Beach Festival adds an extra reason to visit.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and humid",
                        text: "Temperatures regularly cross 35°C with high coastal humidity — manageable if you plan around early mornings and shaded café hours, but not the town's best face.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon — lighter",
                        text: "Puducherry sees less rain than Kerala or coastal Karnataka in this window, but showers are frequent enough to disrupt beach and Promenade plans.",
                      },
                      {
                        season: "Oct – Dec (Northeast monsoon)",
                        emoji: "⛈️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Can bring heavy rain",
                        text: "Tamil Nadu's main monsoon season overlaps the start of the cool period — check forecasts, as October–November can bring intense short spells of rain.",
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
                    <strong>Our pick:</strong> December, if you can time it
                    around the Beach Festival — cool weather, lively town, and
                    comfortable cycling and walking conditions throughout the
                    French Quarter.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Puducherry</h2>
                  <p>
                    Puducherry's biggest advantage is how easy it is to reach —
                    a genuine weekend-trip distance from two major South Indian
                    cities.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Puducherry Airport has limited
                      connectivity — most travellers fly into Chennai (~170 km,
                      ~3.5 hrs by road) instead, which has far more flight
                      options.
                    </li>
                    <li>
                      <strong>By Train:</strong> Puducherry Junction is well
                      connected to Chennai, Bangalore, and Villupuram (the
                      nearest major junction), with several daily trains.
                    </li>
                    <li>
                      <strong>By Road:</strong> The East Coast Road (ECR) from
                      Chennai is one of South India's best coastal drives — a
                      relaxed 3.5–4 hour trip with several worthwhile stops
                      (Mahabalipuram, in particular) along the way.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If driving from Chennai, leave
                    in the morning and break the journey at Mahabalipuram for a
                    couple of hours — it adds barely any detour and pairs UNESCO
                    rock-cut temples with the coastal drive.
                  </div>
                </section>

                {/* ── French Quarter ────────────────────────────────────── */}
                <section id="french-quarter">
                  <h2>The French Quarter</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/puducherry/french.jpg"
                      alt="Colonial villa with bougainvillea in Puducherry's French Quarter"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Known locally as <strong>"White Town,"</strong> the French
                    Quarter is a grid of quiet, tree-lined streets between the
                    Promenade and the Grand Canal — Puducherry's most
                    photographed and most rewarding-to-walk part of town.
                  </p>
                  <ul>
                    <li>
                      <strong>Rue Romain Rolland & Rue Suffren:</strong> The two
                      streets most worth an unhurried walk — colonial villas in
                      ochre, mustard, and white, many now boutique hotels,
                      cafés, or private residences.
                    </li>
                    <li>
                      <strong>Promenade Beach (Goubert Avenue):</strong> A rocky
                      seafront stretch closed to vehicle traffic every evening —
                      the town's default gathering spot for sunset walks, with
                      the Gandhi Statue and Old Lighthouse as landmarks.
                    </li>
                    <li>
                      <strong>Basilica of the Sacred Heart of Jesus:</strong>A
                      Gothic-style church with striking stained glass, distinct
                      from the colonial villas around it.
                    </li>
                    <li>
                      <strong>French War Memorial:</strong> A small obelisk on
                      the Promenade honouring Indian soldiers who fought for
                      France in World War I — a quiet reminder of the town's
                      colonial history.
                    </li>
                    <li>
                      <strong>Bharathi Park & Raj Nivas:</strong> A leafy formal
                      garden at the heart of White Town, opposite the Lieutenant
                      Governor's residence.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Rent a bicycle for a morning —
                    the French Quarter's streets are flat, largely low-traffic,
                    and small enough that cycling (rather than an auto) is
                    genuinely the best way to see it.
                  </div>
                </section>

                {/* ── Auroville ──────────────────────────────────────────── */}
                <section id="auroville">
                  <h2>Auroville & the Matrimandir</h2>
                  <p>
                    Founded in 1968 as an experimental "universal town,"{" "}
                    <strong>Auroville</strong> sits about 10 km north of
                    Puducherry and is home to residents from dozens of countries
                    living around its centrepiece: the golden, geodesic{" "}
                    <strong>Matrimandir</strong>.
                  </p>
                  <ul>
                    <li>
                      <strong>Matrimandir viewing:</strong> Free viewing-point
                      access requires a same-day pass from the Visitor Centre;
                      entry inside the meditation chamber itself needs advance
                      booking and a short orientation video.
                    </li>
                    <li>
                      <strong>Visitor Centre:</strong> The starting point for
                      any Auroville visit — exhibits on the township's history,
                      plus cafés and boutiques selling Auroville-made products
                      (handmade paper, incense, textiles).
                    </li>
                    <li>
                      <strong>Auroville Botanical Gardens:</strong> A
                      lesser-visited but worthwhile stop showcasing the
                      reforestation work that turned barren red-earth plateau
                      into forest over five decades.
                    </li>
                    <li>
                      <strong>Etiquette:</strong> Auroville is a residential
                      community, not a theme park — photography inside the
                      Matrimandir chamber is prohibited, and quiet, respectful
                      behaviour is expected throughout.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrive at the Visitor Centre by
                    mid-morning to get a same-day Matrimandir viewing pass —
                    slots run out by early afternoon, especially on weekends.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Puducherry</h2>
                  <ul>
                    <li>
                      <strong>Cycle the French Quarter at sunrise:</strong>
                      Quiet streets, soft light on the colonial facades, and
                      almost no traffic — the best hour to photograph White
                      Town.
                    </li>
                    <li>
                      <strong>Sunset at Promenade Beach:</strong> The seafront
                      closes to vehicles each evening and fills with locals and
                      visitors alike — a genuine town ritual, not just a tourist
                      stop.
                    </li>
                    <li>
                      <strong>Sri Aurobindo Ashram:</strong> A serene meditation
                      and prayer space in the heart of town, founded in 1926 —
                      open to visitors observing quiet decorum.
                    </li>
                    <li>
                      <strong>Ousteri Lake (Ouduyar Kulam):</strong> A wetland
                      bird sanctuary about 8 km from town, good for an early
                      morning visit during migratory bird season (Nov–Feb).
                    </li>
                    <li>
                      <strong>Paradise Beach (Plage Paradiso):</strong> A
                      quieter beach reachable only by a short boat ride from
                      Chunnambar, popular for a half-day escape from town.
                    </li>
                    <li>
                      <strong>Browse French Quarter boutiques:</strong>
                      Casablanca, Kalki, and the many small design stores along
                      Rue Suffren sell homeware, textiles, and jewellery
                      distinct from typical Indian tourist shopping.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Puducherry</h2>
                  <p>
                    Staying inside or near the French Quarter is worth the
                    slight premium — it puts the Promenade, cafés, and heritage
                    streets within easy walking distance.
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
                    A boutique heritage stay inside the French Quarter — even
                    for one night — is worth budgeting for. Waking up inside a
                    restored colonial villa is a different experience from
                    viewing them as a day visitor.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Puducherry</h2>
                  <p>
                    Puducherry's food scene is a genuine Franco-Tamil hybrid —
                    expect both South Indian classics and some of the best café
                    and bakery culture anywhere in India.
                  </p>
                  <ul>
                    <li>
                      <strong>French bakeries and cafés:</strong> Baker Street,
                      Zuka Chocolaterie, and Café des Arts all serve genuine
                      French pastries and coffee — a rare find outside
                      Puducherry in South India.
                    </li>
                    <li>
                      <strong>Franco-Tamil fusion:</strong> Restaurants like Le
                      Club and Villa Shanti blend French technique with local
                      Tamil ingredients — worth at least one dedicated dinner.
                    </li>
                    <li>
                      <strong>South Indian classics:</strong> Idli, dosa, and
                      filter coffee from Tamil Quarter eateries like Surguru
                      remain excellent and inexpensive.
                    </li>
                    <li>
                      <strong>Ashram food:</strong> The Sri Aurobindo Ashram
                      dining hall serves simple, wholesome vegetarian thalis
                      open to visitors — an inexpensive, calm alternative to
                      restaurants.
                    </li>
                    <li>
                      <strong>Seafood:</strong> Fresh catch from the Bay of
                      Bengal features at several French Quarter restaurants —
                      particularly good at beachfront spots near the Promenade.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Puducherry Itinerary</h2>
                  <p>
                    Three days is a comfortable length for Puducherry — one for
                    the French Quarter, one for Auroville, and one for the coast
                    and lake.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "French Quarter & Promenade",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Cycle through White Town — Rue Romain Rolland, Rue Suffren",
                          "Midday: Sri Aurobindo Ashram, Bharathi Park",
                          "Afternoon: Café-hopping — Baker Street, Café des Arts",
                          "Evening: Sunset walk on Promenade Beach",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Auroville & the Matrimandir",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Visitor Centre, collect Matrimandir viewing pass",
                          "Late morning: Matrimandir viewing point",
                          "Afternoon: Auroville Botanical Gardens, local boutiques",
                          "Evening: Return to town for dinner at Villa Shanti or Le Club",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Ousteri Lake, Paradise Beach & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning: Ousteri Lake bird sanctuary (Nov–Feb best)",
                          "Late morning: Boat ride to Paradise Beach, Chunnambar",
                          "Afternoon: Final French Quarter walk, shopping",
                          "Evening: Depart toward Chennai via ECR",
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
                          ["Local transport per day", "₹300", "₹700", "₹1,200"],
                          ["Auroville / sightseeing", "₹300", "₹500", "₹500"],
                          ["Daily total", "₹2,300", "₹6,400", "₹16,200"],
                          ["3-Day trip total", "₹6,900", "₹19,200", "₹48,600"],
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
                    * Excludes travel to Chennai/Puducherry. Boutique-tier
                    French Quarter heritage stays can run considerably higher
                    during peak December weekends.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Puducherry</h2>
                  <ul>
                    <li>
                      <strong>Book Matrimandir passes early in the day:</strong>
                      Same-day viewing slots at Auroville's Visitor Centre run
                      out by early afternoon, especially on weekends.
                    </li>
                    <li>
                      <strong>Rent a bicycle for the French Quarter:</strong>
                      Flat, walkable streets make cycling the most enjoyable way
                      to see White Town — far better than an auto for short
                      hops.
                    </li>
                    <li>
                      <strong>
                        Dress modestly at the Ashram and Matrimandir:
                      </strong>
                      Both are active spiritual spaces, not tourist sites —
                      covered shoulders and knees are expected.
                    </li>
                    <li>
                      <strong>Carry cash for the Tamil Quarter:</strong>
                      Card acceptance is common in the French Quarter's cafés
                      and boutiques but patchier in local eateries and small
                      shops elsewhere.
                    </li>
                    <li>
                      <strong>Avoid weekends if possible:</strong> Puducherry
                      draws heavy weekend crowds from Chennai and Bangalore —
                      weekday visits are noticeably calmer, especially in the
                      French Quarter.
                    </li>
                    <li>
                      <strong>No photography inside the Matrimandir:</strong>
                      Respected strictly — keep your camera for the viewing
                      point and gardens instead.
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
                          "Cycle the French Quarter early morning or sunset",
                          "Book a same-day Matrimandir pass first thing at Auroville",
                          "Try at least one Franco-Tamil fusion dinner",
                          "Walk the Promenade after it closes to traffic in the evening",
                          "Dress modestly at the Ashram and Matrimandir",
                          "Visit on weekdays for a calmer French Quarter",
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
                          "Show up to Auroville without a same-day pass plan",
                          "Photograph inside the Matrimandir chamber",
                          "Rely on cards outside the French Quarter",
                          "Rush the French Quarter — it rewards slow walking, not a checklist",
                          "Skip the Promenade at sunset",
                          "Expect nightlife on par with Goa — Puducherry is quieter by design",
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
                  "Puducherry",
                  "Pondicherry",
                  "Tamil Nadu",
                  "French Quarter",
                  "Auroville",
                  "Beaches",
                  "Weekend Trip",
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
                sections={PUDUCHERRY_GEAR}
                destination="Puducherry"
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
