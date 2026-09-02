// src/app/blog/sandakphu-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sandakphu Trek Guide: Route, Permits & Best Time",
  description:
    "Complete Sandakphu trek guide — the Maney Bhanjang route, permits for Singalila National Park, trek duration, tea-house stays, and views of four of the world's five highest peaks.",
  keywords:
    "Sandakphu trek, Sandakphu Phalut trek, Singalila National Park permit, Maney Bhanjang, Sandakphu best time to visit, Sandakphu trek difficulty, Sandakphu Kanchenjunga view, Sandakphu trek route, West Bengal trekking, Darjeeling trek",
  openGraph: {
    title: "Sandakphu Trek Guide: Route, Permits & Best Time",
    description:
      "West Bengal's highest point, and the only place in India to see four of the world's five highest peaks from one spot — the complete Sandakphu trek guide.",
    url: "https://club.kudozz.in/blog/sandakphu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude Himalayan trail along the Sandakphu ridge, Singalila National Park",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandakphu Trek Guide: Route, Permits & Best Time",
    description:
      "Views of four of the world's five highest peaks from West Bengal's highest point — the complete Sandakphu trek guide.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sandakphu-travel-guide",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Sandakphu Trek Guide: Route, Permits & Best Time",
          description:
            "Complete Sandakphu trek guide — the Maney Bhanjang route, permits for Singalila National Park, trek duration, tea-house stays, and views of four of the world's five highest peaks.",
          image:
            "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/sandakphu-travel-guide",
          },
          keywords:
            "Sandakphu, Singalila National Park, Maney Bhanjang, Kanchenjunga, Sandakphu Phalut trek, Darjeeling trek",
          about: {
            "@type": "Place",
            name: "Sandakphu",
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Sandakphu",
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
    q: "How difficult is the Sandakphu trek?",
    a: "It's rated easy to moderate by Himalayan trekking standards — there's no technical climbing, and the trail follows a well-marked route used by both trekkers and Land Rover jeeps. The main challenges are altitude (up to 3,636 m) and sustained daily walking of 10-15 km, which make reasonable fitness necessary even though no prior mountaineering experience is required.",
  },
  {
    q: "Can I see Mount Everest from Sandakphu?",
    a: "Yes, on a clear day. Sandakphu is famous as one of very few places on earth where you can see four of the world's five highest peaks — Everest, Kanchenjunga, Lhotse, and Makalu — from a single viewpoint. Kanchenjunga dominates the view since it's closest, while Everest appears smaller and further in the distance; both are best seen at sunrise when the air is clearest.",
  },
  {
    q: "Do I need a permit for the Sandakphu trek?",
    a: "Yes. Since the route passes through Singalila National Park, you need a forest permit, arranged at the check-post in Maney Bhanjang (or via a registered trek operator) along with a valid photo ID. Guides are also compulsory for foreign nationals and strongly recommended for everyone, both for permit formalities and for navigation.",
  },
  {
    q: "How many days does the Sandakphu trek take?",
    a: "The classic Sandakphu-Phalut circuit typically takes 5-6 days round trip from Maney Bhanjang, including a rest/acclimatisation day. A shorter Sandakphu-only trek (without continuing to Phalut) can be done in about 4 days round trip. Non-trekkers can also reach Sandakphu by a bumpy but scenic Land Rover jeep safari in a single long day.",
  },
  {
    q: "Do I need to camp on the Sandakphu trek?",
    a: "No — this is tea-house trekking, meaning basic lodges and homestays along the route provide beds and meals each night, so you don't need to carry a tent or cook your own food. Facilities are simple (shared rooms, basic bathrooms, limited electricity), but it makes the trek considerably more accessible than a fully self-supported expedition.",
  },
  {
    q: "What is the best time for the Sandakphu trek?",
    a: "October to December offers the clearest mountain views, with crisp post-monsoon air and low humidity. April to May is the second-best window, when rhododendrons bloom along the trail in vivid reds and pinks, though peak views can be slightly hazier. The monsoon (June-September) should be avoided due to leeches, slippery trails, and near-constant cloud cover.",
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
  { id: "introduction", title: "West Bengal's Highest Point", level: 2 },
  { id: "best-time", title: "Best Time to Trek", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Trailhead", level: 2 },
  { id: "route-and-permits", title: "Route, Permits & Trek Style", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Trek Itinerary", level: 2 },
  { id: "food-guide", title: "Food on the Trail", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SandakphuGuidePage() {
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
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="High-altitude Himalayan trail along the Sandakphu ridge, Singalila National Park"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Sandakphu", href: null },
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
                "Sandakphu",
                "Singalila National Park",
                "Trekking",
                "Kanchenjunga View",
                "West Bengal",
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
              Sandakphu Trek: Route, Permits & Best Time Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              West Bengal's highest point, and one of the only places on
              earth to see four of the world's five highest peaks — Everest,
              Kanchenjunga, Lhotse, and Makalu — from a single ridge.
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
                  text: "Singalila National Park, West Bengal",
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
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
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
                  <h2>West Bengal's Highest Point</h2>
                  <p>
                    At 3,636 metres, <strong>Sandakphu</strong> is the
                    highest point in{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , sitting right on the ridge separating India from Nepal
                    inside Singalila National Park. It draws trekkers for one
                    reason above all: on a clear day, it's one of the very
                    few spots on the planet where four of the world's five
                    highest peaks — Everest, Kanchenjunga, Lhotse, and Makalu
                    — are visible from a single viewpoint at once.
                  </p>
                  <p>
                    The classic route begins at Maney Bhanjang, a small
                    border town about 26 km from{" "}
                    <Link href="/blog/darjeeling-travel-guide">
                      Darjeeling
                    </Link>
                    , and climbs gradually along the Nepal-India border
                    ridge through rhododendron and oak forest before opening
                    into high alpine grassland near the summit. Unlike many
                    Himalayan treks, Sandakphu is "tea-house trekking" — you
                    stay in basic lodges along the way rather than camping,
                    which makes it considerably more accessible for
                    first-time high-altitude trekkers.
                  </p>
                  <p>
                    Those who'd rather skip the walking altogether can still
                    reach Sandakphu by a bumpy but genuinely thrilling Land
                    Rover jeep safari along the same ridge road — a popular
                    alternative for travellers short on time or trekking
                    experience.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Sandakphu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Singalila National Park, WB",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "3,636 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct–Dec, Apr–May" },
                        {
                          icon: "🏔️",
                          label: "Known For",
                          value: "4 of 5 Highest Peaks",
                        },
                        {
                          icon: "🥾",
                          label: "Trek Duration",
                          value: "5–6 days (Sandakphu-Phalut)",
                        },
                        {
                          icon: "🚙",
                          label: "Trailhead",
                          value: "Maney Bhanjang (~26 km from Darjeeling)",
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
                  <h2>Best Time to Trek Sandakphu</h2>
                  <p>
                    Given that clear mountain views are the whole point,
                    timing matters more here than for almost any other
                    trek in the region.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Dec",
                        emoji: "🏔️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The clearest skies of the year, with crisp post-monsoon air giving the best odds of seeing Everest and Kanchenjunga together. Cold, especially at night, so pack accordingly.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌺",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Rhododendron season",
                        text: "The trail turns vivid red and pink as rhododendrons bloom along the route — spectacular scenery, though peak views can be slightly hazier than in autumn.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Leeches, slippery trails, and near-constant cloud cover make this the least rewarding and least safe window for the trek.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, sometimes snowy",
                        text: "Clear but bitterly cold, occasionally with snow on the higher stretches — doable with the right gear, but a serious step up in difficulty.",
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
                    <strong>Our pick:</strong> Late October to December —
                    the clearest, most reliable window to actually see
                    Everest and Kanchenjunga together from the summit.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Trailhead</h2>
                  <p>
                    The trek begins at Maney Bhanjang, a small border town
                    that's the standard starting point for the route.
                  </p>
                  <ul>
                    <li>
                      <strong>From Darjeeling:</strong> Maney Bhanjang is
                      about 26 km away, roughly an hour by shared jeep or
                      taxi — most trekkers base themselves in Darjeeling the
                      night before starting.
                    </li>
                    <li>
                      <strong>From Bagdogra/NJP:</strong> Both are the wider
                      gateway, roughly 3-4 hours by road via Darjeeling or
                      Mirik to reach Maney Bhanjang.
                    </li>
                    <li>
                      <strong>Registering at Maney Bhanjang:</strong> This is
                      also where you complete Singalila National Park permit
                      formalities and arrange a compulsory guide before
                      starting the trek.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrive at Maney Bhanjang
                    early in the morning to complete permit paperwork before
                    starting the first day's climb — afternoon starts leave
                    you racing daylight on the initial ascent.
                  </div>
                </section>

                {/* ── Route & Permits ────────────────────────────────────── */}
                <section id="route-and-permits">
                  <h2>Route, Permits & Trek Style</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="High-altitude ridge trail near Sandakphu, Singalila National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>The Classic Sandakphu-Phalut Route</h3>
                  <p>
                    The full circuit runs Maney Bhanjang → Tumling/Tonglu →
                    Kalapokhri → Sandakphu → Phalut → back down via
                    Gorkhey/Rammam, typically taking 5-6 days including one
                    acclimatisation day. Trekkers pressed for time often drop
                    the Phalut extension and do a shorter Sandakphu-only
                    out-and-back in around 4 days.
                  </p>

                  <h3>Singalila National Park Permits</h3>
                  <p>
                    Since the entire route lies within Singalila National
                    Park, a forest entry permit is mandatory, arranged at
                    the check-post in Maney Bhanjang along with a valid
                    photo ID. A registered local guide is compulsory for
                    foreign nationals and strongly advised for everyone —
                    both for the permit process and because the trail
                    network has several confusing junctions in poor
                    visibility.
                  </p>

                  <h3>Tea-House Trekking</h3>
                  <p>
                    Unlike expedition-style Himalayan treks, Sandakphu is
                    walked village to village, staying in basic lodges and
                    homestays each night. This means no tent or cooking
                    equipment to carry — just a daypack, warm layers, and
                    good boots — making it considerably more approachable
                    for trekkers without prior high-altitude camping
                    experience.
                  </p>

                  <h3>The Land Rover Jeep Safari Alternative</h3>
                  <p>
                    For those who want the views without the multi-day walk,
                    vintage Land Rover jeeps run the same ridge road from
                    Maney Bhanjang to Sandakphu, a bone-rattling but
                    genuinely memorable ride that can be done as a long day
                    trip or with an overnight stay at the top.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay on the Trek</h2>
                  <p>
                    Accommodation along the route is uniformly simple —
                    basic lodges and homestays rather than hotels — with
                    price mostly reflecting comfort level and meal quality
                    rather than luxury.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹900/night",
                        picks: [
                          "Basic village tea-house lodges",
                          "Shared-room homestays en route",
                          "Simple forest rest houses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,000–₹1,800/night",
                        picks: [
                          "Private-room trekker's lodges",
                          "Better-maintained village guesthouses",
                          "Lodges with attached bathrooms",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹2,500–₹4,500/night",
                        picks: [
                          "Best-in-village lodge rooms",
                          "Sandakphu summit-top stays with views",
                          "Guided package trek accommodation",
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
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Trek Itinerary (5-6 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Maney Bhanjang to Tumling",
                        color: "bg-amber-700",
                        activities: [
                          "Permit formalities and guide arrangement",
                          "Gradual climb through forest to Tumling/Tonglu",
                          "First mountain views if skies are clear",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tumling to Kalapokhri",
                        color: "bg-sky-600",
                        activities: [
                          "Ridge walk along the India-Nepal border",
                          "Pass through Gairibas and forest sections",
                          "Overnight near Kalapokhri's sacred black lake",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Kalapokhri to Sandakphu",
                        color: "bg-forest-600",
                        activities: [
                          "Final steep climb to the summit ridge",
                          "Sunset views over Kanchenjunga",
                          "Overnight at Sandakphu for sunrise the next morning",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Sandakphu Sunrise & On to Phalut",
                        color: "bg-purple-600",
                        activities: [
                          "Early sunrise viewing of Everest and Kanchenjunga",
                          "Ridge walk onward to Phalut",
                          "Wide grassland views along the way",
                        ],
                      },
                      {
                        day: "Days 5-6",
                        title: "Descent via Gorkhey/Rammam",
                        color: "bg-stone-600",
                        activities: [
                          "Descend through forested valleys",
                          "Overnight in Gorkhey or Rammam",
                          "Return road transfer to Maney Bhanjang or Darjeeling",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Rest at{" "}
                    <Link href="/blog/darjeeling-travel-guide">
                      Darjeeling
                    </Link>{" "}
                    the night before and after the trek — most trekkers use
                    it as their base for the whole trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food on the Trail</h2>
                  <ul>
                    <li>
                      <strong>Lodge-cooked meals:</strong> Nearly every stop
                      serves simple dal-rice-vegetable thalis, along with
                      noodles, eggs, and instant options for quick refuelling.
                    </li>
                    <li>
                      <strong>Tibetan staples:</strong> Momos and thukpa
                      appear at several tea-houses, a welcome hot meal after
                      a cold day's walk.
                    </li>
                    <li>
                      <strong>Tea and packaged snacks:</strong> Every lodge
                      serves hot tea throughout the day; carry your own
                      energy bars or dry snacks for the trail itself, since
                      options between villages are limited.
                    </li>
                  </ul>
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
                          ["Lodge stay/night", "₹700", "₹1,400", "₹3,500"],
                          ["Meals/day", "₹500", "₹800", "₹1,500"],
                          [
                            "Forest permit + guide/day",
                            "₹800",
                            "₹1,200",
                            "₹2,000",
                          ],
                          [
                            "Jeep transfer (round trip)",
                            "₹3,000",
                            "₹4,500",
                            "₹6,000",
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
                    * Guide and permit costs are typically shared across a
                    group, lowering the per-person figure on larger treks.
                    Jeep transfer figures are for the full Maney Bhanjang
                    round trip, not daily.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for the Sandakphu Trek</h2>
                  <ul>
                    <li>
                      <strong>Acclimatise properly:</strong> Even though the
                      trek is graded easy-to-moderate, 3,636 m is high enough
                      that a rest/acclimatisation day matters — don't skip
                      it to save time.
                    </li>
                    <li>
                      <strong>Pack for genuine cold:</strong> Temperatures
                      can drop well below freezing at night even outside
                      peak winter — proper insulated layers are essential,
                      not optional.
                    </li>
                    <li>
                      <strong>Book a guide in advance:</strong> Especially in
                      peak season (Oct-Dec), reliable local guides get
                      booked up — arrange one ahead through Darjeeling or
                      Maney Bhanjang contacts.
                    </li>
                    <li>
                      <strong>Start walking early each day:</strong> Cloud
                      cover typically builds by midday, so the clearest
                      mountain views come in the early morning hours.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> There are no ATMs along
                      the route — withdraw everything you need before
                      leaving Darjeeling or Maney Bhanjang.
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
                          "Complete permit formalities at Maney Bhanjang first",
                          "Book a registered guide ahead in peak season",
                          "Start each day's walk early for clearer views",
                          "Pack proper cold-weather layers",
                          "Carry all the cash you'll need before starting",
                          "Take the acclimatisation day seriously",
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
                          "Attempt the trek during monsoon (Jun-Sep)",
                          "Skip the forest permit or guide requirement",
                          "Underestimate the cold, even in April-May",
                          "Rely on finding ATMs along the route",
                          "Push through altitude symptoms without resting",
                          "Expect clear peak views by afternoon",
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

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Base yourself in{" "}
                    <Link href="/blog/darjeeling-travel-guide">
                      Darjeeling
                    </Link>{" "}
                    before and after the trek, and consider a relaxed couple
                    of days in{" "}
                    <Link href="/blog/kalimpong-travel-guide">
                      Kalimpong
                    </Link>{" "}
                    afterward to recover before heading back to the plains.
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
                  "Sandakphu",
                  "Singalila National Park",
                  "Trekking",
                  "West Bengal",
                  "Kanchenjunga View",
                  "Darjeeling",
                  "Himalayan Trek",
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

              <RelatedPostsGrid currentSlug="sandakphu-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sandakphu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
