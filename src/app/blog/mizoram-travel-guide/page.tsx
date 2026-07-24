// src/app/blog/mizoram-travel-guide/page.tsx
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
  title: "Mizoram Travel Guide: Aizawl, Reiek & Vantawng Falls",
  description:
    "The complete Mizoram travel guide — Aizawl's hillside markets, Reiek's viewpoint and tribal heritage village, Vantawng Falls, Mizo culture, where to stay and eat, and a full itinerary through one of India's cleanest and most orderly Northeastern states.",
  keywords:
    "Mizoram travel guide, Aizawl travel guide, Reiek Tlang, Vantawng Falls, Mizo culture, Champhai Mizoram, Mizoram itinerary, Northeast India travel, Chapchar Kut festival",
  openGraph: {
    title: "Mizoram Travel Guide: Aizawl, Reiek & Vantawng Falls",
    description:
      "A hillside capital with no traffic jams, a waterfall dropping through pine-covered gorges, and a state that's arguably India's most literate — the complete guide to Mizoram.",
    url: "https://club.kudozz.in/blog/mizoram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Green misty hills in Northeast India, evoking Mizoram's forested mountain terrain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mizoram Travel Guide: Aizawl, Reiek & Vantawng Falls",
    description:
      "Hillside markets, waterfalls, and Mizo culture — the complete guide to Mizoram.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mizoram-travel-guide",
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
          headline: "Mizoram Travel Guide: Aizawl, Reiek & Vantawng Falls",
          description: "The complete Mizoram travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/mizoram-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Mizoram",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Mizoram",
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
                name: "Mizoram Travel Guide",
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
  { id: "introduction", title: "Why Mizoram?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mizoram", level: 2 },
  { id: "aizawl", title: "Aizawl: Markets & City Sights", level: 2 },
  { id: "reiek", title: "Reiek: Viewpoint & Heritage Village", level: 2 },
  { id: "vantawng-falls", title: "Vantawng Falls", level: 2 },
  { id: "other-sights", title: "Champhai, Murlen & Tam Dil Lake", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Mizoram-specific gear ─────────────────────────────────────────────────
const MIZORAM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for hillside walking, waterfall viewpoints, and rainy forested terrain",
    emoji: "🌿",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Aizawl's steep streets and the trail to Vantawng Falls' viewpoint both involve a lot of uphill and downhill walking.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Aizawl is built entirely on ridges and slopes — good grip and support make city walking far more comfortable.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "Mizoram receives some of the heaviest rainfall in Northeast India, with showers possible in almost any month.",
        price: "₹599",
        rating: 4.3,
        reviews: "4.6k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("rain+jacket+poncho+travel"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Sudden downpours are common, especially around Reiek and Vantawng Falls — worth carrying even outside peak monsoon.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Useful for forested sites like Murlen National Park and the trail around Vantawng Falls.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Mizoram's dense forest cover means mosquito presence is a genuine factor at dawn and dusk outside Aizawl.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for day trips to Champhai, Reiek, and Vantawng Falls, where charging infrastructure is sparse.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Outside Aizawl, charging points thin out quickly — a backup battery avoids being stranded on longer day trips.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long days visiting Aizawl's markets, Reiek, and the drive out to Champhai.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Standalone shops thin out on the longer drives between towns — carrying your own water is the practical choice.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Worth having given the state's modest medical infrastructure outside Aizawl.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Small-town essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical facilities are concentrated in Aizawl — basic self-sufficiency is worth having if traveling to Champhai or Murlen.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MizoramGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Green misty hills in Northeast India, evoking Mizoram's forested mountain terrain"
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
                { label: "Mizoram", href: "/blog?category=mizoram" },
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
                "Mizoram",
                "Aizawl",
                "Reiek",
                "Vantawng Falls",
                "Mizo Culture",
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
              Mizoram Travel Guide: Aizawl, Reiek & Vantawng Falls
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A hillside capital with no traffic jams, a waterfall dropping
              through pine-covered gorges, and one of India's cleanest,
              most literate states — Mizoram is Northeast India at its most
              understated.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mizoram, Northeast India",
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
                  <h2>Why Mizoram?</h2>
                  <p>
                    Tucked into India's far southeastern corner, bordering
                    Myanmar and Bangladesh, <strong>Mizoram</strong> is one
                    of the country's smallest and most orderly states —
                    consistently ranked among the cleanest and most literate
                    in India, with the Mizo people's strong Christian and
                    community traditions shaping a genuinely distinct culture.
                  </p>
                  <p>
                    The capital, <strong>Aizawl</strong>, is built entirely
                    across a series of ridges, with no flat ground to speak
                    of — a city unlike anywhere else in India. Beyond it,
                    Mizoram offers Reiek's panoramic viewpoint and heritage
                    village, the dramatic Vantawng Falls, and Champhai's
                    terraced valleys near the Myanmar border.
                  </p>
                  <p>
                    Mizoram sees far fewer tourists than Meghalaya or even
                    Nagaland, which means near-empty viewpoints and genuine
                    hospitality, but also thinner tourist infrastructure —
                    plan with some flexibility.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Mizoram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Mizoram" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Aizawl (AJL)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🏔️",
                          label: "Known For",
                          value: "Reiek, Vantawng Falls, Mizo Culture",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "Mizo Tribal Heritage",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,300 – ₹5,500",
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
                  <h2>Best Time to Visit Mizoram</h2>
                  <p>
                    Mizoram's hilly terrain keeps temperatures moderate
                    year-round, but its heavy monsoon and festival calendar
                    still make timing worth planning around.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and clear (11–24°C) — the most comfortable window for Aizawl, Reiek, and the drive out to Champhai.",
                      },
                      {
                        season: "Mar",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Chapchar Kut festival",
                        text: "Mizoram's biggest spring festival, marked by traditional Cheraw (bamboo) dance and community celebrations across the state.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity rising",
                        text: "Temperatures and humidity climb ahead of the monsoon, though sightseeing is still manageable with an early start.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Mizoram receives some of Northeast India's heaviest rain; landslides can affect road travel to Champhai and Reiek.",
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
                    <strong>Our pick:</strong> November to February — dry,
                    cool conditions that make both Reiek's viewpoint hike and
                    the long drive to Champhai genuinely pleasant, with March
                    a strong alternative if you want to catch Chapchar Kut.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mizoram</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Lengpui Airport (AJL), about
                      35 km from Aizawl, has regular flights from Kolkata,
                      Guwahati, and Imphal — by far the fastest way in.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Mizoram has no railway
                      station of its own — the nearest major link is
                      Silchar (Assam), roughly 180 km from Aizawl.
                    </li>
                    <li>
                      <strong>By Road:</strong> Aizawl is connected to
                      Silchar and Guwahati by road, though drive times are
                      long given the hilly, winding terrain.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Flying into Aizawl via
                    Lengpui is by far the most practical option — road
                    journeys from Guwahati or Silchar take the better part
                    of a day given Mizoram's terrain.
                  </div>
                </section>

                {/* ── Aizawl ────────────────────────────────────────────── */}
                <section id="aizawl">
                  <h2>Aizawl: Markets & City Sights</h2>
                  <p>
                    Built entirely along a ridge at over 1,100m, Mizoram's
                    capital has a genuinely unusual layout — most visitors
                    base themselves here for the whole trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Bara Bazaar:</strong> Aizawl's main market,
                      largely run by women vendors, selling everything from
                      local produce to handwoven Mizo textiles.
                    </li>
                    <li>
                      <strong>Mizoram State Museum:</strong> Exhibits on Mizo
                      history, tribal artifacts, traditional dress, and
                      musical instruments.
                    </li>
                    <li>
                      <strong>Solomon's Temple:</strong> A striking modern
                      church structure and one of Aizawl's most visible
                      landmarks, with sweeping views over the city.
                    </li>
                  </ul>
                </section>

                {/* ── Reiek ─────────────────────────────────────────────── */}
                <section id="reiek">
                  <h2>Reiek: Viewpoint & Heritage Village</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Green hills and forest landscape, evoking Reiek's viewpoint near Aizawl in Mizoram"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Roughly 30 km from Aizawl, <strong>Reiek</strong> is
                    Mizoram's most popular day trip, centered on a hilltop
                    that offers panoramic views stretching into Myanmar on a
                    clear day.
                  </p>
                  <ul>
                    <li>
                      <strong>Reiek Tlang viewpoint:</strong> A short trek to
                      the peak rewards visitors with sweeping views over
                      layered hills and, on clear days, the Bangladesh and
                      Myanmar borders.
                    </li>
                    <li>
                      <strong>Reiek Heritage Village:</strong> A recreated
                      traditional Mizo village at the base, with thatched
                      huts showcasing pre-modern Mizo lifestyle.
                    </li>
                    <li>
                      <strong>Camping:</strong> Reiek has a designated
                      camping area, making it a good option for a night
                      under the stars away from Aizawl.
                    </li>
                  </ul>
                </section>

                {/* ── Vantawng Falls ────────────────────────────────────── */}
                <section id="vantawng-falls">
                  <h2>Vantawng Falls</h2>
                  <p>
                    Mizoram's highest waterfall, <strong>Vantawng
                    Falls</strong> drops roughly 750 feet through a
                    forested gorge near Thenzawl, about 137 km from Aizawl.
                  </p>
                  <ul>
                    <li>
                      <strong>Viewing platform:</strong> A well-built
                      platform offers a clear view of the multi-tiered
                      falls without requiring a difficult trek.
                    </li>
                    <li>
                      <strong>Best season:</strong> Water volume peaks
                      during and just after monsoon (July–October), though
                      road access can be trickier in heavy rain.
                    </li>
                    <li>
                      <strong>Thenzawl handloom village:</strong> Nearby
                      Thenzawl is known for handloom weaving — worth a stop
                      on the way to or from the falls.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Vantawng Falls is a long day
                    trip from Aizawl — consider combining it with an
                    overnight stay in Thenzawl to explore both without
                    rushing.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Champhai, Murlen & Tam Dil Lake</h2>
                  <ul>
                    <li>
                      <strong>Champhai:</strong> Known as Mizoram's "rice
                      bowl," a scenic border town roughly 195 km from
                      Aizawl with terraced valleys and views into Myanmar —
                      also a key gateway for Indo-Myanmar trade.
                    </li>
                    <li>
                      <strong>Murlen National Park:</strong> Near Champhai,
                      a biodiverse forest reserve home to rare species
                      including the Mrs. Hume's pheasant, Mizoram's state
                      bird.
                    </li>
                    <li>
                      <strong>Tam Dil Lake:</strong> A natural lake about 85
                      km from Aizawl, popular for boating and picnics, with
                      Mizo folklore woven into its origin story.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is concentrated in Aizawl — outside the
                    capital, options thin out significantly, so plan day
                    trips accordingly.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses, central Aizawl",
                          "Tourist lodges (Mizoram Tourism)",
                          "Basic stays, Champhai",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Aizawl",
                          "Hotel Regency",
                          "Boutique stays, central Aizawl",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Premium hotels, Aizawl",
                          "Business hotel chains, Aizawl",
                          "Heritage-style stays (limited)",
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
                    Base yourself in Aizawl for the whole trip and take day
                    trips to Reiek, Vantawng Falls, and Tam Dil Lake —
                    dedicated tourist accommodation elsewhere in the state
                    is genuinely limited.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Mizoram</h2>
                  <ul>
                    <li>
                      <strong>Bai:</strong> A boiled mixed-vegetable dish
                      seasoned with local herbs and fermented pork fat —
                      Mizoram's most iconic everyday dish.
                    </li>
                    <li>
                      <strong>Sawhchiar:</strong> A rice-and-meat porridge,
                      often made with pork or chicken, popular as a hearty
                      one-pot meal.
                    </li>
                    <li>
                      <strong>Bekang:</strong> A fermented soybean
                      preparation with a strong, distinctive flavor —
                      central to Mizo cooking much like axone in Nagaland.
                    </li>
                    <li>
                      <strong>Zu (rice beer) and local teas:</strong> Rice
                      beer holds cultural significance in Mizo tradition,
                      though Mizoram has strong prohibition laws — check
                      current regulations before assuming availability.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Mizoram Itinerary</h2>
                  <p>
                    Five days is a reasonable minimum to cover Aizawl,
                    Reiek, and Vantawng Falls without excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Aizawl",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Bara Bazaar and Mizoram State Museum",
                          "Evening: Solomon's Temple viewpoint",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Reiek Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Reiek (~1 hr)",
                          "Reiek Tlang viewpoint hike",
                          "Reiek Heritage Village, return to Aizawl",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Vantawng Falls & Thenzawl",
                        color: "bg-forest-600",
                        activities: [
                          "Early departure to Thenzawl (~3.5 hrs)",
                          "Vantawng Falls viewing platform",
                          "Overnight in Thenzawl (recommended)",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Tam Dil Lake & Return",
                        color: "bg-stone-600",
                        activities: [
                          "Return to Aizawl via Tam Dil Lake",
                          "Boating and a lakeside break",
                          "Evening in Aizawl",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Aizawl & Departure",
                        color: "bg-purple-700",
                        activities: [
                          "Last-minute shopping at Bara Bazaar",
                          "Local café or restaurant",
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
                            "₹3,000",
                            "₹7,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹450",
                            "₹1,100",
                            "₹2,600",
                          ],
                          ["Activities/day", "₹250", "₹550", "₹1,200"],
                          ["Daily total", "₹2,100", "₹5,550", "₹12,800"],
                          [
                            "5-Day trip total",
                            "₹10,500",
                            "₹27,750",
                            "₹64,000",
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
                    * Excludes flights to Aizawl. Local transport costs are
                    higher than average given the long distances to Champhai
                    and Vantawng Falls.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Mizoram</h2>
                  <ul>
                    <li>
                      <strong>Hire a car with driver for day trips:</strong>{" "}
                      Public transport to Reiek, Vantawng Falls, and
                      Champhai is limited and slow — a private vehicle is
                      far more practical.
                    </li>
                    <li>
                      <strong>Note Mizoram's prohibition laws:</strong>{" "}
                      Alcohol sale and consumption are restricted under
                      state law — check current regulations before
                      assuming availability.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is inconsistent outside Aizawl's main
                      commercial areas.
                    </li>
                    <li>
                      <strong>Book flights well ahead in peak season:</strong>{" "}
                      Aizawl has limited flight frequency compared to
                      larger Northeastern hubs like Guwahati.
                    </li>
                    <li>
                      <strong>Respect Sunday observance:</strong> Many shops
                      and businesses in Aizawl close on Sundays, reflecting
                      Mizoram's strong Christian traditions — plan
                      sightseeing accordingly.
                    </li>
                    <li>
                      <strong>Check border-area travel advisories:</strong>{" "}
                      Given Mizoram's proximity to Myanmar and Bangladesh,
                      confirm current guidance before visiting areas near
                      Champhai and the border.
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
                          "Hire a car with driver for Reiek, Falls and Champhai",
                          "Book Aizawl flights well ahead in peak season",
                          "Try Mizo dishes like bai and sawhchiar",
                          "Carry cash for areas outside Aizawl",
                          "Plan around Sunday closures in Aizawl",
                          "Check current alcohol regulations before travel",
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
                          "Rely on public transport for Reiek or the Falls",
                          "Plan sightseeing around a Sunday in Aizawl",
                          "Expect Goa- or Meghalaya-level tourist infrastructure",
                          "Rely on cards outside Aizawl's main areas",
                          "Travel to border areas without checking current advisories",
                          "Assume alcohol will be readily available",
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
                  "Mizoram",
                  "Aizawl",
                  "Reiek",
                  "Vantawng Falls",
                  "Champhai",
                  "Mizo Culture",
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
                sections={MIZORAM_GEAR}
                destination="Mizoram"
              />

              <RelatedPostsGrid currentSlug="mizoram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mizoram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
