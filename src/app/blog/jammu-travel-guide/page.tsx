// src/app/blog/jammu-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jammu Travel Guide: Temples, Forts & Winter Capital",
  description:
    "Jammu travel guide: the City of Temples and winter capital of J&K. Raghunath Temple, Bahu Fort, Mubarak Mandi, Dogra food, how to reach, itinerary & tips.",
  keywords:
    "Jammu travel guide, Jammu city of temples, Raghunath Temple, Bahu Fort, Jammu tourist places, best time to visit Jammu, Jammu Tawi, Mubarak Mandi Palace, Dogra cuisine Jammu",
  openGraph: {
    title: "Jammu Travel Guide: Temples, Forts & Winter Capital",
    description:
      "Golden temple spires, a fort above the Tawi River, and Dogra hospitality — the complete guide to Jammu, the City of Temples and winter capital of J&K.",
    url: "https://club.kudozz.in/blog/jammu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bahu Fort overlooking the Tawi River in Jammu city",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jammu Travel Guide: Temples, Forts & Winter Capital",
    description:
      "Golden temple spires, a riverside fort, and Dogra hospitality — the complete guide to Jammu, the City of Temples.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jammu-travel-guide",
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Jammu Travel Guide: Temples, Forts & Winter Capital",
          description:
            "The complete Jammu travel guide — temples, forts, Dogra cuisine, and practical tips for the City of Temples and winter capital of Jammu & Kashmir.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/jammu-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Jammu",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jammu",
              addressRegion: "Jammu and Kashmir",
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
                name: "Jammu & Kashmir",
                item: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Jammu Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

// ── JSON-LD: FAQ ───────────────────────────────────────────────────────────────
function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How many days are enough to visit Jammu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "One full day covers Jammu's core sights comfortably — Raghunath Temple, Bahu Fort, and Mubarak Mandi. Two days lets you add Amar Mahal, the Peer Kho cave shrine, and unhurried time in the old-city markets. Most travellers treat Jammu as a 1-2 night stop before continuing to Katra or Srinagar.",
              },
            },
            {
              "@type": "Question",
              name: "What is Jammu famous for?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Jammu is best known as the 'City of Temples' for its hundreds of shrines, most famously the gold-topped Raghunath Temple complex. It also serves as the winter capital of the Jammu & Kashmir Union Territory, a major railhead at Jammu Tawi, and the principal gateway city for pilgrims heading to Vaishno Devi in nearby Katra.",
              },
            },
            {
              "@type": "Question",
              name: "Is Jammu safe for tourists?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Jammu city sees heavy pilgrim and tourist traffic year-round and has a well-established, secure tourism infrastructure. Standard travel precautions apply — keep valuables secure in crowded temple areas and markets — but Jammu itself is considered one of the calmer, more settled cities in the region.",
              },
            },
            {
              "@type": "Question",
              name: "What is the distance between Jammu and Katra?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Katra, the base town for the Vaishno Devi shrine, is roughly 45-50 km from Jammu city — about a 1.5 to 2-hour drive along NH44. Shared taxis, buses, and trains all run frequently between the two, making Jammu a convenient overnight base before or after the yatra.",
              },
            },
            {
              "@type": "Question",
              name: "Is Jammu worth visiting apart from Vaishno Devi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Beyond being a pilgrimage gateway, Jammu has genuine heritage appeal in its own right — the Raghunath and Ranbireshwar temples, Bahu Fort's riverside gardens, the crumbling grandeur of Mubarak Mandi Palace, and a distinct Dogra food culture that's easy to miss if you treat the city as a mere stopover.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best time to visit Jammu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "October to March is the best window, with pleasant to mildly cold days ideal for sightseeing and temple visits. Summers (April-June) turn hot and humid in the plains around Jammu, often exceeding 40°C, while the winter months bring genuinely cold mornings befitting the city's status as J&K's winter capital.",
              },
            },
            {
              "@type": "Question",
              name: "Can Jammu be combined with a Kashmir valley trip?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and it's the most common way travellers experience both. Jammu connects to Srinagar by road via NH44 (about 8-9 hours) or by air, and many itineraries pair a day or two in Jammu with Patnitop en route, before continuing north into the Kashmir valley.",
              },
            },
          ],
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Jammu?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jammu", level: 2 },
  { id: "temples-heritage", title: "Top Temples & Heritage Sites", level: 2 },
  { id: "mubarak-mandi", title: "Mubarak Mandi Palace Complex", level: 2 },
  { id: "tawi-river", title: "Tawi River & Gummat Area", level: 2 },
  { id: "gateway-city", title: "Gateway to Katra & Patnitop", level: 2 },
  { id: "markets-cuisine", title: "Local Markets & Dogra Cuisine", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-2 Day Jammu Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JammuGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Bahu Fort overlooking the Tawi River in Jammu city"
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
                  label: "Jammu & Kashmir",
                  href: "/blog/jammu-kashmir-travel-guide",
                },
                { label: "Jammu", href: null },
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
                "Jammu",
                "Jammu and Kashmir",
                "City of Temples",
                "Bahu Fort",
                "Raghunath Temple",
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
              Jammu Travel Guide: Temples, Forts & the Winter Capital of J&K
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Gold-topped shrines, a fort above the Tawi River, and a city
              that has quietly earned its name as the "City of Temples" — this
              is the complete guide to Jammu.
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
                  text: "Jammu, Jammu & Kashmir, India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~3,100 words",
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
                  <h2>Why Visit Jammu?</h2>
                  <p>
                    Sitting on the banks of the <strong>Tawi River</strong> at
                    roughly 305 metres elevation, <strong>Jammu</strong> has
                    earned the nickname "City of Temples" for good reason —
                    the skyline is punctuated by hundreds of shrines, their
                    gold and white spires visible from almost every part of
                    the old city. It's also the{" "}
                    <strong>winter capital of the Jammu & Kashmir Union
                    Territory</strong> (Srinagar takes over as summer capital
                    once the snow closes in up north), which gives Jammu a
                    settled, year-round civic identity that's easy to
                    underestimate if you only think of it as a stopover.
                  </p>
                  <p>
                    For most travellers, that's exactly what Jammu becomes —
                    a stopover. It's the last major city before{" "}
                    <strong>Katra</strong> and the Vaishno Devi shrine, and
                    the gateway through which most road and rail traffic into
                    the Kashmir valley passes. If you're planning the wider{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir circuit
                    </Link>{" "}
                    — Srinagar's Dal Lake, Gulmarg's slopes, Pahalgam's pine
                    forests — Jammu is very likely where your trip begins or
                    ends. Treating it as a one-night layover misses a city
                    with genuine heritage weight: a 300-year-old temple
                    complex, a fort with panoramic river views, a crumbling
                    palace that once housed the Dogra royal family, and a
                    distinct regional cuisine that rarely gets mentioned
                    alongside Kashmiri Wazwan.
                  </p>
                  <p>
                    Give Jammu even a single unhurried day and it earns its
                    place on the itinerary in its own right — not just as the
                    place you change transport on the way to somewhere else.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Jammu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Jammu & Kashmir (UT)",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~305 m",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "🚉",
                          label: "Rail Hub",
                          value: "Jammu Tawi",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Temples, Bahu Fort, Dogra culture",
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
                  <h2>Best Time to Visit Jammu</h2>
                  <p>
                    Jammu sits in the plains at the foot of the Shivalik
                    hills, so unlike Srinagar or Gulmarg, its climate is much
                    closer to North Indian plains weather — hot summers, a
                    monsoon, and genuinely cold winter mornings.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "🍂",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant days (15–25°C) and cool nights make this the ideal window for temple visits, fort walks, and exploring the old city on foot.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Winter capital season",
                        text: "Jammu takes over as J&K's official seat of government through winter — cold mornings (sometimes near freezing) but clear, sunny midday weather.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Temperatures regularly climb past 38–40°C in the plains around Jammu — outdoor sightseeing becomes uncomfortable except early morning or evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Monsoon",
                        text: "Humid with periodic heavy showers; temples and indoor sights remain accessible, but this is also peak Amarnath Yatra and Vaishno Devi crowd season via Jammu.",
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
                    <strong>Our pick:</strong> October through March. Temple
                    visits and old-city walking are far more comfortable in
                    cool weather, and this window also lines up with the
                    calmer months for onward travel to Katra or Patnitop.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jammu</h2>
                  <p>
                    Jammu is one of the best-connected cities in the region —
                    it's the primary road, rail, and air gateway for the
                    entire Jammu & Kashmir Union Territory.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jammu Airport (IXJ) has direct
                      flights from Delhi, Mumbai, Chandigarh, and several
                      other major cities. It's a compact, efficient airport
                      roughly 8 km from the city centre.
                    </li>
                    <li>
                      <strong>By Train:</strong>{" "}
                      <strong>Jammu Tawi railway station</strong> is one of
                      North India's major railheads, with direct trains from
                      Delhi, Mumbai, Kolkata, Bangalore, and Ahmedabad. It's
                      also the terminus most pilgrims use before continuing to
                      Katra by road or the Vande Bharat / connecting train
                      services.
                    </li>
                    <li>
                      <strong>By Road:</strong> Jammu sits directly on{" "}
                      <strong>NH44</strong>, the national highway that runs
                      from Delhi all the way north to Srinagar. Delhi to
                      Jammu by road is roughly 580 km (10-12 hours); Jammu to
                      Srinagar continues another ~270 km (7-8 hours) via
                      Patnitop and the Jawahar Tunnel.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If Vaishno Devi is part of
                    your trip, book Jammu Tawi as your arrival point rather
                    than flying into Katra directly — trains and shared cabs
                    to Katra run constantly through the day, and it keeps
                    flight options far more flexible.
                  </div>
                </section>

                {/* ── Temples & Heritage ──────────────────────────────────── */}
                <section id="temples-heritage">
                  <h2>Top Temples & Heritage Sites in Jammu</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Golden temple spires of the Raghunath Temple complex in Jammu"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    This is where Jammu's "City of Temples" reputation
                    actually plays out — a cluster of shrines, caves, and one
                    genuinely dramatic riverside fort, most of them walkable
                    from each other in the old city.
                  </p>
                  <ul>
                    <li>
                      <strong>Raghunath Temple Complex:</strong> Built in the
                      mid-19th century under Maharaja Ranbir Singh, this is
                      Jammu's most important temple — a complex of seven
                      interconnected shrines dedicated to Lord Rama, with
                      interiors covered in gold leaf. It sits right in the
                      heart of the city and anchors the surrounding market
                      area.
                    </li>
                    <li>
                      <strong>Ranbireshwar Temple:</strong> One of the largest
                      Shiva temples in North India, known for its twelve
                      crystal lingams and a massive central lingam over 7 feet
                      tall — a quieter, less crowded counterpart to Raghunath.
                    </li>
                    <li>
                      <strong>Peer Kho Cave Temple:</strong> A natural cave
                      shrine on the banks of the Tawi River, dedicated to
                      Jamboo Lochan, the sage believed to have founded the
                      city. The setting — descending into a cool cave beside
                      flowing water — is as memorable as the shrine itself.
                    </li>
                    <li>
                      <strong>Bahu Fort & Mahamaya Temple:</strong> Perched on
                      a rocky cliff above the Tawi, Bahu Fort is believed to
                      be Jammu's oldest structure, with origins dating back
                      over 3,000 years (though the current form is much
                      later). Inside its walls sits the Bahu Mahamaya Temple,
                      one of the region's most-visited Kali shrines, and the
                      terraced Bagh-e-Bahu gardens outside offer some of the
                      best sunset views over the river and city.
                    </li>
                    <li>
                      <strong>Amar Mahal Palace & Museum:</strong> A
                      French-château-style palace built in red sandstone in
                      the late 19th century, once home to the Dogra royal
                      family. It now houses a museum with a solid-gold throne,
                      royal portraits, and a research library — worth an hour
                      even if palaces aren't usually your thing.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Time your Bahu Fort visit for
                    an hour before sunset — the gardens fill with locals in
                    the evening, and the light over the Tawi River from the
                    fort ramparts is the single best photo opportunity in
                    Jammu.
                  </div>
                </section>

                {/* ── Mubarak Mandi ──────────────────────────────────────── */}
                <section id="mubarak-mandi">
                  <h2>Mubarak Mandi Palace Complex</h2>
                  <p>
                    Once the seat of the Dogra dynasty and the administrative
                    heart of the princely state of Jammu & Kashmir,{" "}
                    <strong>Mubarak Mandi Palace</strong> is a sprawling
                    complex blending Rajasthani, Mughal, and European
                    architectural styles built up over more than a century.
                    Much of it fell into disrepair after the royal family
                    relocated and a 1971 fire damaged parts of the structure,
                    but restoration work has steadily brought sections back —
                    the Pink Hall and Sheesh Mahal (Hall of Mirrors) in
                    particular are worth seeking out.
                  </p>
                  <p>
                    Walking through Mubarak Mandi today is as much about the
                    faded grandeur as the restored parts — cracked
                    sandstone facades next to freshly plastered courtyards,
                    with the old city's narrow lanes pressing right up against
                    the palace walls. It's a short walk from Raghunath Temple,
                    making the two an easy pairing for a morning in the old
                    city.
                  </p>
                </section>

                {/* ── Tawi River ──────────────────────────────────────────── */}
                <section id="tawi-river">
                  <h2>Tawi River & Gummat Area</h2>
                  <p>
                    The <strong>Tawi River</strong> is Jammu's defining
                    geography — the old city sits on its northern bank, with
                    Bahu Fort and the newer residential areas across on the
                    southern side. Several bridges connect the two halves,
                    and the riverfront itself has been developed with
                    walking promenades in recent years.
                  </p>
                  <ul>
                    <li>
                      <strong>Gummat area:</strong> A central old-city
                      neighbourhood near the clock tower, useful as an
                      orientation point and lined with some of Jammu's
                      oldest shops and eateries.
                    </li>
                    <li>
                      <strong>Tawi riverfront:</strong> Best experienced at
                      dawn or dusk, when the ghats along the water fill with
                      locals for evening walks, and the temple spires of the
                      old city catch the light across the river.
                    </li>
                    <li>
                      <strong>Panjtirthi:</strong> A cluster of small shrines
                      and bathing ghats along the Tawi, less visited by
                      tourists but a good spot to see local ritual life up
                      close.
                    </li>
                  </ul>
                </section>

                {/* ── Gateway City ──────────────────────────────────────── */}
                <section id="gateway-city">
                  <h2>Jammu as the Gateway to Katra & Patnitop</h2>
                  <p>
                    Jammu's role as a transit hub is inseparable from its
                    identity as a destination, and most visitors will end up
                    passing through it on the way somewhere else.
                  </p>
                  <ul>
                    <li>
                      <strong>Katra & Vaishno Devi:</strong> Roughly 45-50 km
                      and a 1.5-2 hour drive from Jammu, Katra is the base
                      town for the Vaishno Devi shrine — one of India's
                      most-visited pilgrimage sites. Many travellers base
                      themselves in Jammu the night before or after the
                      yatra; read the full{" "}
                      <Link href="/blog/katra-travel-guide">
                        Katra travel guide
                      </Link>{" "}
                      for registration, trek options, and where to stay.
                    </li>
                    <li>
                      <strong>Patnitop:</strong> A hill station roughly 110 km
                      north of Jammu on NH44, popular for its pine forests,
                      cooler climate, and as a stopover en route to Srinagar.
                      See the{" "}
                      <Link href="/blog/patnitop-travel-guide">
                        Patnitop travel guide
                      </Link>{" "}
                      if you're breaking up the Jammu-Srinagar drive.
                    </li>
                    <li>
                      <strong>Srinagar & the Kashmir valley:</strong> The full
                      NH44 drive from Jammu to Srinagar takes 7-8 hours
                      through the Jawahar Tunnel — see the{" "}
                      <Link href="/blog/srinagar-travel-guide">
                        Srinagar travel guide
                      </Link>{" "}
                      for what awaits at the other end, from Dal Lake
                      houseboats to the Mughal Gardens.
                    </li>
                  </ul>
                </section>

                {/* ── Markets & Cuisine ──────────────────────────────────── */}
                <section id="markets-cuisine">
                  <h2>Local Markets & Dogra Cuisine</h2>
                  <p>
                    Jammu's markets sit shoulder-to-shoulder with its temples
                    in the old city, and the food culture here — rooted in{" "}
                    <strong>Dogra</strong> tradition — is distinct from both
                    Kashmiri Wazwan to the north and Punjabi cuisine to the
                    south.
                  </p>
                  <ul>
                    <li>
                      <strong>Raghunath Bazaar:</strong> The main market
                      surrounding the temple complex — good for local
                      handicrafts, dry fruits, and basmati rice, a Jammu
                      region specialty.
                    </li>
                    <li>
                      <strong>Bahu Plaza:</strong> A newer commercial hub with
                      more modern shopping alongside street food stalls,
                      popular with locals in the evening.
                    </li>
                    <li>
                      <strong>Old city lanes near Gummat:</strong> Narrow
                      streets packed with sweet shops, tea stalls, and small
                      eateries serving Dogra staples at low prices — the best
                      place to try the local food rather than restaurant
                      versions of it.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jammu</h2>
                  <p>
                    As a major transit and pilgrim city, Jammu has
                    accommodation options across every price band,
                    concentrated mainly around the railway station and the
                    Gandhi Nagar / Trikuta Nagar areas.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Hotels near Jammu Tawi station",
                          "Dharamshalas & pilgrim rest houses",
                          "Budget guesthouses, Gandhi Nagar",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Hotel K C Residency",
                          "Fortune Inn Riviera",
                          "Hotels along Residency Road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Radisson Jammu",
                          "Hotel Highland Park",
                          "Lemon Tree Hotel, Jammu",
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
                    If you're catching an early train to Katra or a flight
                    from IXJ, book a hotel within walking distance of the
                    station or airport rather than deep in the old city — it
                    saves real time on early departures.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Jammu — Dogra Cuisine</h2>
                  <p>
                    <strong>Dogra cuisine</strong> is built around simple,
                    mildly spiced vegetarian and dairy-based dishes — a
                    noticeable contrast to the richer, meat-forward Wazwan of
                    the Kashmir valley further north.
                  </p>
                  <ul>
                    <li>
                      <strong>Kalari:</strong> A semi-hard, fried Dogra
                      cheese often called the "Kashmiri mozzarella" — served
                      as a snack or stuffed into a kulcha (kalari kulcha is a
                      Jammu breakfast staple).
                    </li>
                    <li>
                      <strong>Rajma Chawal:</strong> Jammu's red kidney
                      beans, grown in the region's hill terraces, are
                      considered some of the best in North India — the local
                      rajma-chawal is a genuinely different experience from
                      the standard version elsewhere.
                    </li>
                    <li>
                      <strong>Ambal:</strong> A traditional Dogra pumpkin
                      curry cooked with tamarind and jaggery for a
                      sweet-and-sour flavour, usually served at festive
                      meals and weddings.
                    </li>
                    <li>
                      <strong>Khatta Meat:</strong> A tangy, tomato and
                      pomegranate-seasoned mutton curry — one of the few
                      well-known non-vegetarian Dogra dishes.
                    </li>
                    <li>
                      <strong>Patisa & other sweets:</strong> Jammu's old
                      city sweet shops are known for patisa, a flaky sugar
                      confection, alongside more common North Indian sweets.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested 1-2 Day Jammu Itinerary</h2>
                  <p>
                    Jammu's core sights are compact enough to cover in a
                    single focused day, with a second day allowing for a
                    slower pace and a side trip toward Katra or Patnitop.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Temples, Fort & Old City",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Raghunath Temple complex & Raghunath Bazaar",
                          "Late morning: Ranbireshwar Temple, Mubarak Mandi Palace",
                          "Afternoon: Peer Kho Cave Temple by the river",
                          "Evening: Bahu Fort & Mahamaya Temple for sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Amar Mahal, Markets & Onward Travel",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Amar Mahal Palace & Museum",
                          "Late morning: Tawi riverfront walk, Panjtirthi ghats",
                          "Afternoon: Bahu Plaza shopping and local food",
                          "Evening: Depart toward Katra or Patnitop",
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
                            "₹3,500",
                            "₹10,000",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          [
                            "Local transport / auto-rickshaws",
                            "₹300",
                            "₹800",
                            "₹1,800",
                          ],
                          [
                            "Temple donations & sightseeing",
                            "₹300",
                            "₹600",
                            "₹1,200",
                          ],
                          ["Daily total", "₹2,000", "₹5,900", "₹15,200"],
                          [
                            "2-Day trip total",
                            "₹4,000",
                            "₹11,800",
                            "₹30,400",
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
                    * Excludes flights/train to Jammu Tawi or IXJ. Most
                    temple visits are free, though hill-shrine helicopter or
                    pony services (not needed within Jammu city itself) can
                    add significant cost if bundled with a Vaishno Devi trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Jammu</h2>
                  <ul>
                    <li>
                      <strong>Start temple visits early:</strong> Raghunath
                      Temple and Bahu Fort both get busy with local visitors
                      by mid-morning — an early start means shorter queues
                      and cooler walking weather.
                    </li>
                    <li>
                      <strong>Dress modestly for temples:</strong> Shoulders
                      and knees covered is expected at all major shrines;
                      footwear is removed before entering most temple
                      complexes.
                    </li>
                    <li>
                      <strong>Use Jammu as a Katra base:</strong> Hotels in
                      Jammu are generally better value than Katra during peak
                      pilgrim season — the 1.5-2 hour transfer is easy by
                      shared cab or train.
                    </li>
                    <li>
                      <strong>Carry cash for the old city:</strong> Many
                      small shops and eateries around Raghunath Bazaar and
                      Gummat still operate cash-only.
                    </li>
                    <li>
                      <strong>Pack layers for winter visits:</strong> Jammu's
                      role as winter capital means genuinely cold mornings
                      from December to February, even though days warm up
                      considerably by afternoon.
                    </li>
                    <li>
                      <strong>Plan around summer heat:</strong> April-June
                      afternoons regularly cross 38-40°C — schedule outdoor
                      sightseeing for morning or evening if visiting in this
                      window.
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
                          "Visit Bahu Fort an hour before sunset",
                          "Try kalari kulcha and rajma-chawal from a local eatery",
                          "Base yourself in Jammu for a Vaishno Devi trip",
                          "Carry cash for old-city markets and small shrines",
                          "Dress modestly when visiting temple complexes",
                          "Start sightseeing early to beat both crowds and heat",
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
                          "Treat Jammu as only a Vaishno Devi layover",
                          "Visit outdoor sights during peak summer afternoons",
                          "Skip Mubarak Mandi assuming it's fully closed",
                          "Rely solely on cards outside major hotels",
                          "Rush Amar Mahal — the museum deserves a full hour",
                          "Forget warm layers on a winter visit",
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
                    {[
                      {
                        q: "How many days are enough to visit Jammu?",
                        a: "One full day covers Jammu's core sights comfortably — Raghunath Temple, Bahu Fort, and Mubarak Mandi. Two days lets you add Amar Mahal, the Peer Kho cave shrine, and unhurried time in the old-city markets. Most travellers treat Jammu as a 1-2 night stop before continuing to Katra or Srinagar.",
                      },
                      {
                        q: "What is Jammu famous for?",
                        a: "Jammu is best known as the 'City of Temples' for its hundreds of shrines, most famously the gold-topped Raghunath Temple complex. It also serves as the winter capital of the Jammu & Kashmir Union Territory, a major railhead at Jammu Tawi, and the principal gateway city for pilgrims heading to Vaishno Devi in nearby Katra.",
                      },
                      {
                        q: "Is Jammu safe for tourists?",
                        a: "Yes, Jammu city sees heavy pilgrim and tourist traffic year-round and has a well-established, secure tourism infrastructure. Standard travel precautions apply — keep valuables secure in crowded temple areas and markets — but Jammu itself is considered one of the calmer, more settled cities in the region.",
                      },
                      {
                        q: "What is the distance between Jammu and Katra?",
                        a: "Katra, the base town for the Vaishno Devi shrine, is roughly 45-50 km from Jammu city — about a 1.5 to 2-hour drive along NH44. Shared taxis, buses, and trains all run frequently between the two, making Jammu a convenient overnight base before or after the yatra.",
                      },
                      {
                        q: "Is Jammu worth visiting apart from Vaishno Devi?",
                        a: "Yes. Beyond being a pilgrimage gateway, Jammu has genuine heritage appeal in its own right — the Raghunath and Ranbireshwar temples, Bahu Fort's riverside gardens, the crumbling grandeur of Mubarak Mandi Palace, and a distinct Dogra food culture that's easy to miss if you treat the city as a mere stopover.",
                      },
                      {
                        q: "What is the best time to visit Jammu?",
                        a: "October to March is the best window, with pleasant to mildly cold days ideal for sightseeing and temple visits. Summers (April-June) turn hot and humid in the plains around Jammu, often exceeding 40°C, while the winter months bring genuinely cold mornings befitting the city's status as J&K's winter capital.",
                      },
                      {
                        q: "Can Jammu be combined with a Kashmir valley trip?",
                        a: "Yes, and it's the most common way travellers experience both. Jammu connects to Srinagar by road via NH44 (about 8-9 hours) or by air, and many itineraries pair a day or two in Jammu with Patnitop en route, before continuing north into the Kashmir valley.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {item.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Jammu",
                  "Jammu and Kashmir",
                  "Temples",
                  "Bahu Fort",
                  "Raghunath Temple",
                  "Dogra Cuisine",
                  "Winter Capital",
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
                sections={HIMALAYAN_GEAR}
                destination="Jammu"
              />

              <RelatedPostsGrid currentSlug="jammu-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jammu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
