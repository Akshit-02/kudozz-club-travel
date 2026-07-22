// src/app/blog/haryana-travel-guide/page.tsx
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
  title: "Haryana Travel Guide: Kurukshetra, Surajkund & Panchkula",
  description:
    "The honest Haryana travel guide — Kurukshetra's Mahabharata sites and Brahma Sarovar, the International Surajkund Crafts Mela, Pinjore Gardens, Sultanpur bird sanctuary, Morni Hills, where to stay and eat, and a realistic short-trip itinerary through India's NCR-adjacent state.",
  keywords:
    "Haryana travel guide, Kurukshetra, Jyotisar Bhagavad Gita, Surajkund Crafts Mela, Pinjore Gardens, Sultanpur National Park, Panchkula, Morni Hills, Haryana itinerary, weekend trip from Delhi",
  openGraph: {
    title: "Haryana Travel Guide: Kurukshetra, Surajkund & Panchkula",
    description:
      "The site of the Bhagavad Gita, one of the world's largest craft fairs, and a practical weekend escape from Delhi-NCR — the honest guide to Haryana.",
    url: "https://club.kudozz.in/blog/haryana-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "City skyline near the Shivalik foothills, evoking Haryana's Panchkula region",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haryana Travel Guide: Kurukshetra, Surajkund & Panchkula",
    description:
      "Mahabharata mythology, a legendary crafts fair, and easy weekend trips from Delhi — the honest guide to Haryana.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/haryana-travel-guide",
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
          headline: "Haryana Travel Guide: Kurukshetra, Surajkund & Panchkula",
          description: "The complete Haryana travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/haryana-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Haryana",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Haryana",
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
                name: "Haryana Travel Guide",
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
  { id: "introduction", title: "Why Haryana?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "kurukshetra", title: "Kurukshetra: Mahabharata's Battlefield", level: 2 },
  { id: "surajkund", title: "Surajkund & Faridabad", level: 2 },
  { id: "other-sights", title: "Pinjore, Sultanpur & Morni Hills", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Haryana-specific gear ───────────────────────────────────────────
const HARYANA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Practical gear for temple visits, highway drives, and the plains heat of Haryana",
    emoji: "🛕",
    items: [
      {
        name: "Sunscreen (SPF 50)",
        description:
          "Haryana's plains get genuinely hot for most of the year — sun protection matters at Brahma Sarovar, Surajkund, and anywhere else you're outdoors.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Open sacred tanks and craft-fair grounds offer little shade — a good SPF makes midday sightseeing far more comfortable.",
      },
      {
        name: "Comfortable Walking Shoes",
        description:
          "Kurukshetra's temple circuits and the Surajkund Mela grounds both involve a fair amount of walking on stone and packed earth.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Between the Kurukshetra Panorama Centre, Brahma Sarovar's ghats, and the sprawling Mela grounds, this is a walking trip more than it looks.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Useful across long highway drives and while walking the open grounds at Kurukshetra and Surajkund.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Haryana's plains climate means dehydration risk is real, especially April through June — refill instead of relying on bottled water at every stop.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Handy for highway road trips along NH-44 and days spent moving between Kurukshetra, Panchkula, and Faridabad.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Road-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Most of a Haryana trip happens in a car or cab between towns — a power bank keeps navigation and photos running through long drives.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Sensible for any road trip through smaller towns and highway stretches where the nearest pharmacy may be a while away.",
        price: "₹499",
        rating: 4.3,
        reviews: "6.1k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("compact+first+aid+kit+travel"),
        tag: "Road-trip essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "A short but road-heavy trip through Haryana benefits from basic first aid on hand, especially with kids or elderly travelers along.",
      },
      {
        name: "Light Cotton Clothing",
        description:
          "Loose, breathable cotton copes far better with Haryana's dry plains heat than synthetic fabrics, especially March through September.",
        price: "₹899",
        rating: 4.3,
        reviews: "5.5k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("light+cotton+travel+clothing"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Outside the brief winter window, Haryana's climate is hot and dry — cotton is simply more comfortable for a day of sightseeing.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HaryanaGuidePage() {
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
              alt="City skyline near the Shivalik foothills, evoking Haryana's Panchkula region"
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
                  label: "Haryana",
                  href: "/blog?category=haryana",
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
                "Haryana",
                "Kurukshetra",
                "Surajkund",
                "Panchkula",
                "Weekend Trip",
                "Mythology",
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
              Haryana Travel Guide: Kurukshetra, Surajkund & Panchkula
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Haryana won't compete with Rajasthan or Kerala for postcard
              scenery, and it doesn't pretend to — but the ground where the
              Bhagavad Gita is said to have been spoken, one of the world's
              largest crafts fairs, and dead-easy access from Delhi-NCR make
              it a genuinely worthwhile short trip.
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
                  text: "Haryana, North India",
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
                  <h2>Why Haryana?</h2>
                  <p>
                    Let's be upfront about this one: <strong>Haryana</strong>{" "}
                    isn't a conventional tourist state. It doesn't have
                    Rajasthan's palaces, Kerala's backwaters, or Himachal's
                    mountains. What it does have is a wrap-around geography
                    that surrounds Delhi on three sides, an agricultural
                    heartland that quietly feeds much of North India, and
                    some genuinely significant history and mythology that
                    tends to get overlooked in the rush to bigger-name
                    destinations.
                  </p>
                  <p>
                    The single biggest draw is <strong>Kurukshetra</strong> —
                    the site traditionally identified as the battlefield of
                    the Mahabharata, and where Lord Krishna is said to have
                    delivered the Bhagavad Gita to Arjuna. For anyone with
                    an interest in Indian mythology or religious history,
                    it's a place worth the detour on its own merits, not as
                    a footnote to somewhere else.
                  </p>
                  <p>
                    Beyond Kurukshetra, Haryana's real strength is
                    practicality: it's one of the easiest short trips
                    available to anyone based in Delhi-NCR. Surajkund hosts
                    one of the world's largest handicrafts fairs every
                    February, Pinjore Gardens and Morni Hills sit right
                    beside Chandigarh, and Sultanpur's wetlands draw
                    migratory birds within an hour of Gurugram. None of it
                    needs a week off — most of it fits into a long weekend.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Haryana at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Haryana",
                        },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Delhi IGI Airport",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Kurukshetra, Surajkund Mela",
                        },
                        {
                          icon: "🦩",
                          label: "Wildlife",
                          value: "Sultanpur Bird Sanctuary",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹6,500",
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
                  <h2>Best Time to Visit Haryana</h2>
                  <p>
                    Haryana sits on the North Indian plains, which means
                    genuinely extreme summers and short, sharp winters — the
                    weather window for comfortable sightseeing is narrower
                    than most states on this site.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "❄️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool and dry (7–25°C) — comfortable for temple visits, the Surajkund Mela, and outdoor sightseeing without the plains heat.",
                      },
                      {
                        season: "Feb",
                        emoji: "🎨",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Surajkund Crafts Mela",
                        text: "The International Surajkund Crafts Mela runs for about two weeks every February — a genuinely major event worth timing a trip around.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Avoid if possible",
                        text: "Peak plains heat, regularly crossing 40°C. Sightseeing is uncomfortable outside early morning and evening hours.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid",
                        text: "Rain brings relief from the heat but adds humidity; Sultanpur's wetlands are lush but migratory birds haven't arrived yet.",
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
                    <strong>Our pick:</strong> Time your trip to February if
                    the Surajkund Crafts Mela interests you at all — it's
                    genuinely one of the best reasons to visit Haryana
                    specifically. Otherwise, any weekend between November
                    and February works well.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Haryana</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Most of Haryana's major towns
                      have no airport of their own — Delhi's Indira Gandhi
                      International Airport (IGI) is effectively the gateway
                      for the entire state, and it's the reason a Haryana
                      trip is so easy to bolt onto a Delhi visit.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Kurukshetra, Panipat,
                      Ambala, Faridabad, and Gurugram all sit on major rail
                      lines out of Delhi, with frequent daily trains.
                    </li>
                    <li>
                      <strong>By Road:</strong> This is genuinely a
                      road-trip state — NH-44 and NH-48 cut straight through
                      it, and most destinations are 1–3 hours from Delhi by
                      car or bus.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> A self-drive or hired car
                    from Delhi is often the most efficient way to see
                    Haryana — distances are short enough that public
                    transport connections between smaller towns can eat up
                    more time than the sightseeing itself.
                  </div>
                </section>

                {/* ── Kurukshetra ─────────────────────────────────────────── */}
                <section id="kurukshetra">
                  <h2>Kurukshetra: Mahabharata's Battlefield</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Ancient carved stone temple architecture with pillared halls, evoking the temple sites around Kurukshetra"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Kurukshetra</strong> is traditionally identified
                    as the site of the great Mahabharata war, and — more
                    significantly for most visitors — the place where Lord
                    Krishna is believed to have delivered the Bhagavad Gita
                    to Arjuna. It's one of the most religiously and
                    mythologically significant sites in North India, and one
                    the state has built its tourism identity around.
                  </p>
                  <ul>
                    <li>
                      <strong>Brahma Sarovar:</strong> A vast sacred tank at
                      the heart of Kurukshetra, ringed by ghats and temples —
                      the spiritual center of the town and a striking sight
                      at sunrise or during evening aarti.
                    </li>
                    <li>
                      <strong>Jyotisar:</strong> The spot traditionally
                      believed to be where Krishna delivered the Bhagavad
                      Gita to Arjuna, marked by an ancient banyan tree and a
                      small temple — quieter and more contemplative than
                      Brahma Sarovar.
                    </li>
                    <li>
                      <strong>Kurukshetra Panorama & Science Centre:</strong>{" "}
                      A museum built around large panoramic paintings
                      depicting scenes from the Mahabharata — a useful
                      primer if you're not deeply familiar with the epic
                      before visiting.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit Brahma Sarovar in the
                    early morning or around evening aarti — midday sun on
                    the open ghats gets uncomfortable fast, especially
                    outside winter.
                  </div>
                </section>

                {/* ── Surajkund ────────────────────────────────────────── */}
                <section id="surajkund">
                  <h2>Surajkund & Faridabad</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="Sandstone fort ramparts and bastions, evoking the historic stone architecture around Surajkund's ancient reservoir"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Just across the Delhi border in <strong>Faridabad</strong>,{" "}
                    <strong>Surajkund</strong> is best known today for one
                    thing: a crafts fair that draws artisans and visitors
                    from across the country and beyond.
                  </p>
                  <ul>
                    <li>
                      <strong>International Surajkund Crafts Mela:</strong>{" "}
                      Held every February, this is one of the world's
                      largest handicrafts fairs — hundreds of stalls of
                      textiles, pottery, woodwork, and folk performances
                      from across India and partner countries.
                    </li>
                    <li>
                      <strong>Surajkund itself:</strong> An ancient stepped
                      reservoir dating back over a thousand years, built in
                      a distinctive semi-circular amphitheater shape — worth
                      a look even outside the Mela dates.
                    </li>
                    <li>
                      <strong>Badkhal Lake:</strong> A quieter spot nearby,
                      popular for a short evening drive out of Faridabad
                      rather than as a standalone destination.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your trip doesn't line
                    up with the February Mela, Surajkund itself is a
                    modest half-hour stop — don't build an entire day
                    around it outside fair season.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Pinjore, Sultanpur & Morni Hills</h2>
                  <ul>
                    <li>
                      <strong>Pinjore Gardens:</strong> A Mughal-era
                      terraced garden near Panchkula, close to Chandigarh,
                      laid out with fountains, pavilions, and manicured
                      lawns — one of the more visually rewarding stops in
                      the state.
                    </li>
                    <li>
                      <strong>Sultanpur National Park:</strong> A migratory
                      bird sanctuary near Gurugram, drawing flamingos,
                      herons, and dozens of other species between roughly
                      October and March — a solid half-day trip for anyone
                      interested in birdwatching.
                    </li>
                    <li>
                      <strong>Panchkula & Morni Hills:</strong> Haryana's
                      only real hill area, bordering Chandigarh — modest by
                      Himalayan standards, but a genuine change of scenery
                      with a small lake and pine-covered slopes.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Haryana's better hotels cluster around{" "}
                    <strong>Gurugram</strong> and <strong>Faridabad</strong>,
                    given their proximity to Delhi and corporate travel
                    demand. Elsewhere — Kurukshetra, Panchkula — options
                    are simpler, and highway dhaba-style stays fill in the
                    gaps along NH-44 and other major routes.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses, Kurukshetra",
                          "Highway dhaba-style stays, NH-44",
                          "Budget hotels, Panchkula",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹5,000/night",
                        picks: [
                          "Business hotels, Gurugram/Faridabad",
                          "Mid-range hotels, Kurukshetra",
                          "Resort-style hotels, Panchkula",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏙️",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "International chains, Gurugram",
                          "Business hotels, Faridabad",
                          "Premium stays near Chandigarh/Panchkula",
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
                    Gurugram's international-chain hotels are Haryana's
                    genuine luxury tier — Kurukshetra and Panchkula's
                    "luxury" options are more accurately upper-mid-range.
                    Set expectations accordingly.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Haryana</h2>
                  <ul>
                    <li>
                      <strong>Bajra Khichdi:</strong> A hearty pearl-millet
                      khichdi, often served with a generous dollop of
                      white butter — a staple of rural Haryanvi households.
                    </li>
                    <li>
                      <strong>Kadhi:</strong> Haryana's version of the
                      yogurt-and-gram-flour curry, typically thicker and
                      more rustic than its Gujarati or Rajasthani cousins.
                    </li>
                    <li>
                      <strong>Singri ki Sabzi:</strong> A dry vegetable dish
                      made from sangri beans, often paired with bajra
                      roti — a distinctly regional specialty.
                    </li>
                    <li>
                      <strong>Lassi:</strong> Thick, generously served, and
                      taken seriously here — Haryana's dairy-heavy
                      agricultural economy shows up clearly in its food.
                    </li>
                    <li>
                      <strong>Dhaba culture:</strong> NH-44 and the other
                      highways cutting through the state are lined with
                      genuinely excellent roadside dhabas — some of the
                      best, most unpretentious food in Haryana is eaten at
                      a highway stop, not a restaurant.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>4-Day Haryana Itinerary</h2>
                  <p>
                    Haryana is more of a short-trip state than most others
                    on this site — four days is enough to cover Kurukshetra,
                    Panchkula/Pinjore, and Surajkund/Faridabad without
                    feeling rushed, and it slots naturally onto either end
                    of a Delhi trip.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Delhi to Kurukshetra",
                        color: "bg-amber-700",
                        activities: [
                          "Drive/train from Delhi (~3 hrs)",
                          "Brahma Sarovar and evening aarti",
                          "Check in, Kurukshetra",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Kurukshetra Sightseeing",
                        color: "bg-forest-600",
                        activities: [
                          "Jyotisar and the Bhagavad Gita site",
                          "Kurukshetra Panorama & Science Centre",
                          "Travel to Panchkula (~2 hrs)",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Panchkula & Pinjore",
                        color: "bg-sky-600",
                        activities: [
                          "Pinjore Gardens",
                          "Morni Hills, if time allows",
                          "Travel toward Gurugram/Faridabad",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Surajkund, Faridabad & Departure",
                        color: "bg-purple-700",
                        activities: [
                          "Surajkund (or the Mela, if in season)",
                          "Sultanpur National Park (seasonal detour)",
                          "Return to Delhi, departure",
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
                            "₹1,000",
                            "₹3,200",
                            "₹8,500",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,200"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,800",
                          ],
                          [
                            "Entry fees & extras/day",
                            "₹300",
                            "₹700",
                            "₹1,500",
                          ],
                          ["Daily total", "₹2,200", "₹6,000", "₹15,000"],
                          [
                            "4-Day trip total",
                            "₹8,800",
                            "₹24,000",
                            "₹60,000",
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
                    * Excludes flights into Delhi. A self-drive or hired car
                    is usually the single biggest cost lever for a Haryana
                    trip — sharing one across a group brings per-person
                    costs down considerably.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Haryana</h2>
                  <ul>
                    <li>
                      <strong>Time it around the Surajkund Mela if you
                      can:</strong> The February crafts fair is genuinely
                      one of the best reasons to visit Haryana specifically
                      — check exact dates in advance, as it moves slightly
                      year to year.
                    </li>
                    <li>
                      <strong>Avoid April–June if possible:</strong> Plains
                      heat in Haryana is intense and not softened by hill
                      stations or coastline the way it is elsewhere.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> This
                      isn't a state with dramatic scenery — it rewards
                      travelers interested in mythology, history, and
                      practical short trips more than visual spectacle.
                    </li>
                    <li>
                      <strong>Hire a car for flexibility:</strong> Public
                      transport between smaller towns can be slow and
                      indirect — a private car makes far better use of a
                      short trip.
                    </li>
                    <li>
                      <strong>Don't skip the dhabas:</strong> Some of
                      Haryana's best food is at unglamorous highway stops
                      along NH-44, not sit-down restaurants in town.
                    </li>
                    <li>
                      <strong>Combine with Delhi or Chandigarh:</strong>{" "}
                      Haryana works best as an add-on rather than a
                      standalone destination — it slots naturally onto
                      either end of a Delhi or Chandigarh trip.
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
                          "Time a visit to the February Surajkund Mela if possible",
                          "Visit Brahma Sarovar early morning or at evening aarti",
                          "Hire a car for flexibility between towns",
                          "Stop at highway dhabas along NH-44",
                          "Treat Haryana as an add-on to a Delhi or Chandigarh trip",
                          "Carry sun protection year-round outside winter",
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
                          "Expect Rajasthan-level tourist infrastructure",
                          "Travel April–June if it can be avoided",
                          "Rely heavily on public transport between smaller towns",
                          "Build a full day around Surajkund outside Mela season",
                          "Skip the roadside dhabas for chain restaurants",
                          "Underestimate midday heat on open ghats and fairgrounds",
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
                  "Haryana",
                  "Kurukshetra",
                  "Surajkund",
                  "Panchkula",
                  "Pinjore Gardens",
                  "Sultanpur",
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
                sections={HARYANA_GEAR}
                destination="Haryana"
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
