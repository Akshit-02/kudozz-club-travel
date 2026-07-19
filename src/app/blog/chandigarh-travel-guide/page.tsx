// src/app/blog/chandigarh-travel-guide/page.tsx
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
  title: "Chandigarh Travel Guide: Rock Garden, Sukhna Lake & Itinerary",
  description:
    "The complete Chandigarh travel guide — Le Corbusier's Capitol Complex, the Rock Garden, Sukhna Lake, Sector 17 Plaza, Rose Garden, where to eat and stay, and a full 2-day itinerary for India's most planned city.",
  keywords:
    "Chandigarh travel guide, Rock Garden Chandigarh, Sukhna Lake, Capitol Complex, Sector 17 Chandigarh, Chandigarh itinerary, Rose Garden Chandigarh, Le Corbusier Chandigarh, Chandigarh weekend trip, Elante Mall",
  openGraph: {
    title: "Chandigarh Travel Guide: Rock Garden, Sukhna Lake & Itinerary",
    description:
      "India's first planned city — Le Corbusier's modernist architecture, a lake ringed by the Shivaliks, and a rock garden built entirely from industrial waste.",
    url: "https://club.kudozz.in/blog/chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/rishikesh/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "A calm lake ringed by hills, evoking Chandigarh's Sukhna Lake and the Shivalik foothills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandigarh Travel Guide: Rock Garden, Sukhna Lake & Itinerary",
    description:
      "Modernist architecture, a lake at the foothills, and a rock garden built from industrial waste — the complete guide to Chandigarh.",
    images: ["/images/destinations/rishikesh/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chandigarh-travel-guide",
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
            "Chandigarh Travel Guide: Rock Garden, Sukhna Lake & Itinerary",
          description: "The complete Chandigarh travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/rishikesh/rishikesh.jpg",
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
            "@id": "https://club.kudozz.in/blog/chandigarh-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Chandigarh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Chandigarh",
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
                name: "Chandigarh Travel Guide",
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
  { id: "introduction", title: "Why Chandigarh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chandigarh", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "day-trips", title: "Day Trips from Chandigarh", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Chandigarh-specific gear ─────────────────────────────────────────────────
const CHANDIGARH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for a walkable, sector-planned city with a lot of open-air sightseeing",
    emoji: "🏙️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "The Rock Garden's winding pathways, the Capitol Complex plaza, and Sector 17's open market all involve extended walking on hard, sun-exposed surfaces.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "City-walk essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Chandigarh's sights are spread across a large, sector-grid city — good shoes matter more here than in most compact old towns.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Sukhna Lake's promenade and the Rock Garden have long uncovered stretches with limited shaded rest points.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Summers in Chandigarh get genuinely hot, and open attractions like Sukhna Lake and the Rose Garden offer little shade at midday.",
      },
      {
        name: "Compact Umbrella / Cap",
        description:
          "Useful for both intense summer sun and Chandigarh's occasional sharp monsoon showers.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.6k",
        image: "☂️",
        affiliateUrl: amazonSearchUrl("compact+travel+umbrella"),
        tag: "Weather essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Chandigarh's weather swings from sharp summer heat to sudden monsoon downpours — one item covers both.",
      },
      {
        name: "Daypack",
        description:
          "Handy for carrying camera gear, water and layers across a full day covering the Rock Garden, Sukhna Lake, and Sector 17.",
        price: "₹1,199",
        rating: 4.4,
        reviews: "6.1k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("travel+daypack+backpack"),
        tag: "Sightseeing essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "A day covering Chandigarh's major sights easily runs 5–6 hours on foot or by auto — a light daypack beats carrying loose items.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for day trips to Kasauli or Morni Hills, where charging points are sparser than in the city.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "If you're combining Chandigarh with a hill day trip, charging infrastructure thins out quickly once you leave the city.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChandigarhGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/chandigarh/hero.jpg"
              alt="A calm lake ringed by hills, evoking Chandigarh's Sukhna Lake and the Shivalik foothills"
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
                { label: "Chandigarh", href: "/blog?category=chandigarh" },
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
                "Chandigarh",
                "Rock Garden",
                "Sukhna Lake",
                "Le Corbusier",
                "Weekend Trip",
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
              Chandigarh Travel Guide: Rock Garden, Sukhna Lake & Itinerary
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A modernist city designed by Le Corbusier, a rock garden built
              entirely from industrial waste, and a lake at the foot of the
              Shivaliks — India's most orderly city is also one of its most
              underrated weekend trips.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Chandigarh, Punjab & Haryana border",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Why Chandigarh?</h2>
                  <p>
                    Designed from scratch after Partition by the Swiss-French
                    architect <strong>Le Corbusier</strong>,{" "}
                    <strong>Chandigarh</strong> is India's first fully planned
                    city — a grid of numbered sectors, wide tree-lined avenues,
                    and a level of order that feels almost un-Indian, in the
                    best way.
                  </p>
                  <p>
                    It's not a destination built around a single monument.
                    Instead, Chandigarh's appeal is its overall design: the
                    brutalist Capitol Complex (a UNESCO World Heritage Site),
                    the surreal Rock Garden built entirely from industrial and
                    household waste, a lake ringed by the Shivalik foothills,
                    and a shopping-and-café culture in Sector 17 that's
                    genuinely relaxed compared to most Indian cities.
                  </p>
                  <p>
                    It also makes an excellent base — Kasauli, Morni Hills, and
                    even Shimla are all comfortable day trips or onward stops,
                    making Chandigarh a natural stopover between the plains and
                    the hills.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏙️</span> Chandigarh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Union Territory",
                          value: "Chandigarh",
                        },
                        {
                          icon: "🚗",
                          label: "From Delhi",
                          value: "~250 km, 4–5 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🪨",
                          label: "Known For",
                          value: "Rock Garden, Sukhna Lake, Architecture",
                        },
                        {
                          icon: "🏔️",
                          label: "Gateway To",
                          value: "Kasauli, Shimla, Morni Hills",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Chandigarh</h2>
                  <p>
                    North Indian plains climate applies here — sharp seasonal
                    swings that make timing genuinely matter for outdoor
                    sightseeing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant days (10–25°C) make walking the Rock Garden, Sukhna Lake promenade, and Sector 17 genuinely enjoyable.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around it",
                        text: "Temperatures regularly cross 40°C — stick to early morning or evening sightseeing and use the season mainly as a gateway to the nearby hills.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green but wet",
                        text: "Sukhna Lake fills up and the city turns lush, but sudden downpours can disrupt outdoor plans with little warning.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coldest, foggiest stretch",
                        text: "Crisp winter mornings and occasional fog — atmospheric for photography but check for early-morning flight or train delays.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    temperatures for the Rock Garden and Sukhna Lake, and the
                    best window if you're combining the trip with a hill
                    day-trip.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chandigarh</h2>
                  <p>
                    Chandigarh is one of North India's best-connected mid-size
                    cities, making it an easy add-on to a Delhi or Punjab
                    itinerary.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Chandigarh International Airport
                      has regular flights from Delhi, Mumbai, Bengaluru and
                      other major cities — roughly a 1-hour flight from Delhi.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Chandigarh Junction is well
                      connected to Delhi (~4 hrs), Amritsar, and other major
                      North Indian cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> A smooth 4–5 hour drive from
                      Delhi via NH44, making it a popular weekend self-drive
                      destination.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're planning to continue
                    on to Shimla or Kasauli, Chandigarh makes a far more
                    comfortable overnight stop than pushing straight through
                    from Delhi.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Chandigarh</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="A wide lake with hills in the background, evoking Chandigarh's Sukhna Lake"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Rock Garden:</strong> Nek Chand's sprawling
                      sculpture garden built entirely from broken ceramics,
                      industrial waste and discarded materials — genuinely one
                      of a kind and the city's signature attraction.
                    </li>
                    <li>
                      <strong>Sukhna Lake:</strong> A man-made lake at the foot
                      of the Shivalik hills, with a popular promenade for
                      walking, boating, and watching the sunset.
                    </li>
                    <li>
                      <strong>Capitol Complex:</strong> Le Corbusier's brutalist
                      government buildings — the High Court, Secretariat and
                      Assembly — recognised as a UNESCO World Heritage Site.
                      Visits require advance permission via the Chandigarh
                      Tourism office.
                    </li>
                    <li>
                      <strong>Rose Garden (Zakir Hussain Rose Garden):</strong>{" "}
                      Asia's largest rose garden, best visited in February–March
                      during the annual Rose Festival.
                    </li>
                    <li>
                      <strong>Sector 17 Plaza:</strong> The city's central
                      shopping and café district — pedestrian-friendly, with a
                      mix of local shops and chain stores.
                    </li>
                    <li>
                      <strong>Elante Mall:</strong> One of North India's largest
                      malls, useful for an evening indoors, especially in
                      extreme weather months.
                    </li>
                    <li>
                      <strong>International Dolls Museum:</strong> A quirky,
                      lesser-known collection of dolls from around the world — a
                      good option with kids.
                    </li>
                  </ul>
                </section>

                {/* ── Day Trips ─────────────────────────────────────────── */}
                <section id="day-trips">
                  <h2>Day Trips from Chandigarh</h2>
                  <p>
                    Chandigarh's location at the edge of the Shivalik foothills
                    makes it an excellent base for short hill escapes.
                  </p>
                  <ul>
                    <li>
                      <strong>Kasauli (~65 km, ~2 hrs):</strong> A small, quiet
                      colonial-era hill town with pine-lined walks and easy
                      day-trip logistics.
                    </li>
                    <li>
                      <strong>Morni Hills (~45 km, ~1.5 hrs):</strong> The only
                      hill station in Haryana, with two small lakes and a much
                      less crowded alternative to Kasauli.
                    </li>
                    <li>
                      <strong>Pinjore Gardens (~20 km, ~30 min):</strong> A
                      well-maintained Mughal-style garden, good for a quick
                      half-day trip.
                    </li>
                    <li>
                      <strong>Shimla (~115 km, ~3.5 hrs):</strong> Feasible as a
                      long day trip, but better as an onward overnight stop
                      given the drive time.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Chandigarh</h2>
                  <p>
                    Accommodation is plentiful and well organised by sector —
                    Sector 17, 22, and 35 are the most convenient for first-time
                    visitors.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Budget hotels, Sector 22",
                          "OYO/chain budget stays near ISBT-43",
                          "Guesthouses, Sector 35",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Hotel City Heart Premium (Sector 17)",
                          "Business hotels, Sector 35",
                          "Hotel Shivalikview",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "JW Marriott Chandigarh",
                          "Hyatt Regency Chandigarh",
                          "Taj Chandigarh",
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
                    Sector 17 and 22 offer the best balance of location and
                    price — both are within easy reach of Sukhna Lake, the Rock
                    Garden, and the main shopping district.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Chandigarh</h2>
                  <p>
                    Chandigarh's food scene blends North Indian and Punjabi
                    staples with a genuinely strong café culture, especially
                    around Sector 17 and Sector 26's Grain Market food street.
                  </p>
                  <ul>
                    <li>
                      <strong>Sector 26 Grain Market:</strong> The city's
                      best-known food street, especially for late-night Punjabi
                      non-vegetarian food — butter chicken, tikkas and kulchas.
                    </li>
                    <li>
                      <strong>Chole bhature and parathas:</strong> Widely
                      available across the city's dhabas and casual eateries.
                    </li>
                    <li>
                      <strong>Sector 17 cafés:</strong> A genuinely good café
                      scene for a city this size — a legacy of Chandigarh's
                      large student and government-employee population.
                    </li>
                    <li>
                      <strong>Sindhi and Punjabi thalis:</strong> Reflecting the
                      city's post-Partition demographic mix, found across
                      several long-standing family restaurants.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Chandigarh Itinerary</h2>
                  <p>
                    Chandigarh's sights are compact enough to cover well in two
                    focused days, leaving room for a day trip if you have more
                    time.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Rock Garden & Sukhna Lake",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Explore the Rock Garden in detail",
                          "Afternoon: Walk the Sukhna Lake promenade, boating",
                          "Evening: Sector 17 Plaza for dinner and a walk",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Architecture & Gardens",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Capitol Complex tour (book ahead)",
                          "Late morning: Rose Garden",
                          "Afternoon: Elante Mall or Sector 26 food street",
                          "Evening: Departure or day-trip prep for Kasauli",
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
                            "₹1,800",
                            "₹4,500",
                            "₹12,000",
                          ],
                          ["Food/day", "₹600", "₹1,500", "₹3,000"],
                          ["Local transport/day", "₹300", "₹700", "₹1,800"],
                          ["Activities/day", "₹200", "₹500", "₹1,000"],
                          ["Daily total", "₹2,900", "₹7,200", "₹17,800"],
                          ["2-Day trip total", "₹5,800", "₹14,400", "₹35,600"],
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
                    * Excludes travel to Chandigarh. Add roughly ₹1,500–3,000
                    per day trip if visiting Kasauli or Morni Hills.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Chandigarh</h2>
                  <ul>
                    <li>
                      <strong>Book the Capitol Complex tour ahead:</strong>{" "}
                      Access requires advance permission and ID verification —
                      arrange this through Chandigarh Tourism before you arrive.
                    </li>
                    <li>
                      <strong>Learn the sector system:</strong> Addresses are
                      given by sector number, not street name — most autos and
                      cabs navigate this easily, but it helps to understand the
                      grid.
                    </li>
                    <li>
                      <strong>Visit the Rose Garden in Feb–Mar:</strong> That's
                      when it's in full bloom and hosts the annual Rose
                      Festival.
                    </li>
                    <li>
                      <strong>Avoid midday sightseeing in summer:</strong>{" "}
                      Sukhna Lake and the Rock Garden have limited shade — plan
                      for early morning or evening visits April–June.
                    </li>
                    <li>
                      <strong>Use app-based cabs or autos:</strong> Widely
                      available and more convenient than trying to self-drive
                      through the sector grid as a first-time visitor.
                    </li>
                    <li>
                      <strong>Pair it with a hill day trip:</strong> Kasauli or
                      Morni Hills add real variety to a Chandigarh itinerary
                      without much extra travel time.
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
                          "Book the Capitol Complex tour in advance",
                          "Walk the Sukhna Lake promenade at sunset",
                          "Visit the Rose Garden in February–March if possible",
                          "Try the Sector 26 Grain Market food street",
                          "Pair the trip with a Kasauli or Morni Hills day trip",
                          "Use app-based cabs to navigate the sector grid",
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
                          "Show up at Capitol Complex without prior permission",
                          "Plan extensive walking during peak summer afternoons",
                          "Expect street-name-based navigation — it's all sectors",
                          "Skip Sukhna Lake thinking it's just a city park",
                          "Underestimate drive time to Shimla as a day trip",
                          "Ignore the Rock Garden as just another park — it's genuinely unique",
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
                  "Chandigarh",
                  "Rock Garden",
                  "Sukhna Lake",
                  "Le Corbusier",
                  "Capitol Complex",
                  "City Guide",
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
                sections={CHANDIGARH_GEAR}
                destination="Chandigarh"
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
