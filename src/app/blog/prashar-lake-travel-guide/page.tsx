// src/app/blog/prashar-lake-travel-guide/page.tsx
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
  title: "Prashar Lake Trek Guide: Floating Island & Best Time to Visit",
  description:
    "The complete Prashar Lake trek guide. The lake's floating island, Rishi Prashar Temple, the Baggi village trailhead, overnight camping, best time to visit, and a full itinerary.",
  keywords:
    "Prashar Lake trek, Prashar Lake Mandi, Rishi Prashar Temple, floating island lake Himachal, Baggi village trek, best time to visit Prashar Lake, how to reach Prashar Lake, easy Himachal treks",
  openGraph: {
    title: "Prashar Lake Trek Guide: Floating Island & Best Time to Visit",
    description:
      "A high-altitude lake famous for a small floating island of vegetation, reached by an easy overnight trek above the Kullu valley — the complete guide to Prashar Lake.",
    url: "https://club.kudozz.in/blog/prashar-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude lake representative of Prashar Lake, Himachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashar Lake Trek Guide: Floating Island & Best Time to Visit",
    description:
      "A floating island, a pagoda-style temple, and one of Himachal's easiest high-altitude treks — the complete guide to Prashar Lake.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/prashar-lake-travel-guide",
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
            "Prashar Lake Trek Guide: Floating Island & Best Time to Visit",
          description: "The complete Prashar Lake trek guide.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
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
            "@id": "https://club.kudozz.in/blog/prashar-lake-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Prashar Lake",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Himachal Pradesh",
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
                name: "Prashar Lake Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How difficult is the Prashar Lake trek?",
    a: "It's considered one of Himachal's more accessible high-altitude treks — moderate difficulty, no technical climbing required, doable as a single strenuous day or a relaxed overnight camp.",
  },
  {
    q: "How long does the trek take?",
    a: "Roughly half a day to a full day of walking depending on your starting point and pace, most commonly from Baggi village near Mandi. Many trekkers spread it over two days with an overnight camp at the lake.",
  },
  {
    q: "What is the best time to visit Prashar Lake?",
    a: "April–June and September–November offer the clearest trekking conditions. Monsoon (July–August) brings landslide and trail risk, and the lake can freeze or be snowbound December–March — verify current seasonal access before planning a winter trip.",
  },
  {
    q: "How do I reach the Prashar Lake trailhead?",
    a: "The nearest airport is Bhuntar/Kullu, about 65km away. The trek typically starts from Baggi village near Mandi, reached by road.",
  },
  {
    q: "Is the floating island real?",
    a: "Yes — a small island of vegetation on the lake's surface genuinely appears to float and shift position over time, a distinctive natural feature that's the lake's main draw alongside the pagoda-style temple.",
  },
  {
    q: "Do I need camping gear for an overnight stay?",
    a: "Most trekkers book a local operator who provides tents and sleeping bags for the overnight option. If going independently, bring your own gear and be prepared for genuinely cold nights even in summer.",
  },
  {
    q: "What is the budget for a trip to Prashar Lake?",
    a: "A camping/trekking package with a local operator typically runs a few thousand rupees per person including gear and guide — a budget traveler doing it more independently can manage on roughly ₹1,500 a day excluding any rented equipment.",
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
  { id: "introduction", title: "Why Prashar Lake?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Trailhead", level: 2 },
  { id: "top-attractions", title: "The Trek & What to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Trek Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Prashar Lake-specific gear ─────────────────────────────────────────────
const PRASHAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the trek and an overnight camp at altitude",
    emoji: "🏕️",
    items: [
      {
        name: "Trekking Shoes",
        description:
          "For the climb from Baggi village to the lake over forest and open mountain trail.",
        price: "₹2,999",
        rating: 4.5,
        reviews: "6.2k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+mountain"),
        tag: "Trek essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The trail gains real elevation over uneven terrain — proper footwear matters.",
      },
      {
        name: "Sleeping Bag",
        description:
          "For an overnight camp at the lake — nights get genuinely cold at this altitude even in summer.",
        price: "₹2,999",
        rating: 4.4,
        reviews: "2.9k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("sleeping+bag+trekking+camping"),
        tag: "Overnight essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Rental gear from operators can vary in quality — your own sleeping bag guarantees warmth.",
      },
      {
        name: "Headlamp / Torch",
        description:
          "Essential for moving around camp after dark and for an early-morning start if doing the trek in a single day.",
        price: "₹599",
        rating: 4.4,
        reviews: "4.5k",
        image: "🔦",
        affiliateUrl: amazonSearchUrl("headlamp+trekking+camping"),
        tag: "Camping essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "There's no lighting infrastructure at the lake — a headlamp is non-negotiable after sunset.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "The trail has limited water sources — carrying enough is essential for the full ascent.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Trek essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Facilities thin out quickly once you're past Baggi village and onto the trail proper.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PrasharLakeGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="High-altitude lake representative of Prashar Lake, Himachal Pradesh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Prashar Lake", href: null },
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
              {["Prashar Lake", "Trekking", "Camping", "Himachal Pradesh"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Prashar Lake Trek Guide: Floating Island & Best Time to Visit
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A high-altitude lake famous for a small floating island of
              vegetation, reached by an easy overnight trek above the Kullu
              valley — everything you need to plan the trip.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Prashar Lake, Himachal Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
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
                  <h2>Why Prashar Lake?</h2>
                  <p>
                    <strong>Prashar Lake</strong> sits at roughly 2,730m near
                    Mandi, and its main claim to fame is a genuinely unusual
                    natural feature: a small island of vegetation on the
                    lake's surface that appears to float and gradually shift
                    position over time. Beside it stands the{" "}
                    <strong>Rishi Prashar Temple</strong>, a pagoda-style
                    wooden shrine with a distinctive tiered roof, dedicated to
                    the sage Prashar.
                  </p>
                  <p>
                    What makes the lake especially appealing to first-time
                    trekkers is accessibility — the walk in from Baggi village
                    near Mandi is considered one of Himachal's easier
                    high-altitude treks, doable as a long day hike or, more
                    commonly, a relaxed overnight camp beside the water.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏕️</span> Prashar Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Himachal Pradesh, India",
                        },
                        { icon: "⛰️", label: "Altitude", value: "~2,730m" },
                        { icon: "🌡️", label: "Best Time", value: "Apr – Jun, Sep – Nov" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Bhuntar/Kullu (~65km)",
                        },
                        {
                          icon: "🥾",
                          label: "Trailhead",
                          value: "Baggi village, near Mandi",
                        },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500+" },
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
                  <h2>Best Time to Visit Prashar Lake</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear trekking conditions",
                        text: "Snow has cleared from most of the trail and temperatures are comfortable for the climb.",
                      },
                      {
                        season: "Sept – Nov",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Best overall — our pick",
                        text: "Post-monsoon clarity and dry trails make this the most reliable trekking window.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — landslide risk",
                        text: "Heavy rain brings genuine landslide and trail risk on the approach roads and path.",
                      },
                      {
                        season: "Dec – Mar",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Winter — verify access",
                        text: "The lake can freeze or be snowbound, and the trail may become impassable — check current seasonal access before planning a winter trip.",
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
                    <strong>Our pick:</strong> September to October — dry
                    trails, clear skies, and comfortable temperatures for an
                    overnight camp.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Trailhead</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airport is
                      Bhuntar/Kullu, about 65km away.
                    </li>
                    <li>
                      <strong>By Train:</strong> Joginder Nagar (narrow
                      gauge) or broader connections via Chandigarh, both
                      requiring a substantial onward road journey.
                    </li>
                    <li>
                      <strong>By Road:</strong> Drive to Baggi village near
                      Mandi, the most common trailhead for the ascent.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you don't have your own
                    camping gear, book a local trekking operator who
                    provides tents and sleeping bags — a much simpler option
                    than carrying everything in yourself.
                  </div>
                </section>

                {/* ── Trek & Attractions ──────────────────────────────── */}
                <section id="top-attractions">
                  <h2>The Trek & What to See</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="High-altitude lake scenery near Prashar Lake"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <ul>
                    <li>
                      <strong>The floating island:</strong> A small patch of
                      vegetation on the lake's surface that genuinely appears
                      to shift position over time — the lake's most
                      distinctive feature.
                    </li>
                    <li>
                      <strong>Rishi Prashar Temple:</strong> A pagoda-style
                      wooden temple with a tiered roof, dedicated to the sage
                      Prashar, right on the lakeshore.
                    </li>
                    <li>
                      <strong>The trek itself:</strong> A moderate climb from
                      Baggi village through forest and open mountain trail,
                      genuinely accessible for first-time high-altitude
                      trekkers.
                    </li>
                    <li>
                      <strong>Camping by the lake:</strong> An overnight stay
                      beside the water is the more relaxed, popular way to
                      experience the trek versus a rushed single-day round
                      trip.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation options are limited to camping at the lake
                    or basic stays in Mandi/Baggi before or after the trek —
                    this is not a destination with hotel infrastructure at
                    the lake itself.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Camping (Lake)",
                        icon: "⛺",
                        range: "₹1,500–₹3,500/person (package)",
                        picks: [
                          "Operator-run tented camps at the lake",
                          "Independent camping (own gear required)",
                        ],
                      },
                      {
                        tier: "Budget (Mandi/Baggi)",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Basic guesthouses in Mandi town",
                          "Simple homestays near Baggi",
                        ],
                      },
                      {
                        tier: "Mid-Range (Mandi)",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Standard hotels in Mandi town",
                          "Pre/post-trek comfort stays",
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

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li>
                      <strong>Camp-cooked meals:</strong> Most trekking
                      operators include simple hot meals as part of the
                      overnight camping package.
                    </li>
                    <li>
                      <strong>Mandi town dining:</strong> Standard North
                      Indian and Himachali food options before or after the
                      trek.
                    </li>
                    <li>
                      <strong>Carry your own snacks:</strong> Energy bars and
                      dried fruit are worth packing for the climb itself,
                      since there's nowhere to buy food on the trail.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Trek Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Ascent & Camp",
                        color: "bg-amber-700",
                        activities: [
                          "Drive to Baggi village trailhead",
                          "Trek up to Prashar Lake",
                          "Set up camp, evening at the lakeside temple",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sunrise & Descent",
                        color: "bg-forest-600",
                        activities: [
                          "Sunrise at the lake",
                          "Morning descent back to Baggi village",
                          "Return drive to Mandi or onward destination",
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
                          {["Expense", "With Operator", "Independent"].map(
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
                            "Camping package (tent, sleeping bag, guide, meals)",
                            "₹2,000–₹3,500/person",
                            "N/A",
                          ],
                          ["Transport to Baggi village", "Often included", "₹1,500–₹2,500"],
                          [
                            "Own gear (if independent)",
                            "N/A",
                            "₹500–₹1,000/day (rental)",
                          ],
                          ["Mandi accommodation (pre/post)", "₹1,000–₹2,500", "₹700–₹2,000"],
                        ].map(([exp, a, b], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {a}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {b}
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
                    * Excludes transport to the region. Going with a local
                    operator is the simpler, more common approach for most
                    first-time trekkers.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Prashar Lake</h2>
                  <ul>
                    <li>
                      <strong>Book a local trekking operator:</strong> The
                      simplest way to handle camping gear, guiding, and
                      transport to Baggi village.
                    </li>
                    <li>
                      <strong>Verify current seasonal access:</strong> The
                      lake can freeze or the trail become impassable in
                      winter — check before planning a Dec–Mar trip.
                    </li>
                    <li>
                      <strong>Pack for cold nights:</strong> Even summer
                      nights at this altitude get genuinely cold.
                    </li>
                    <li>
                      <strong>Respect the temple's religious significance:</strong>{" "}
                      This remains an active pilgrimage site alongside its
                      trekking appeal.
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
                          "Book a local operator for camping gear and guiding",
                          "Verify current seasonal trail access before a winter trip",
                          "Pack warm layers and a proper sleeping bag",
                          "Carry sufficient water and snacks for the climb",
                          "Respect the temple's active religious significance",
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
                          "Attempt the trek in winter without checking current access",
                          "Underestimate how cold it gets overnight at the lake",
                          "Go independently without camping experience and gear",
                          "Litter or disturb the floating island's fragile ecosystem",
                          "Rely on finding food/water along the trail itself",
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
                  "Prashar Lake",
                  "Trekking",
                  "Camping",
                  "Himachal Pradesh",
                  "India",
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
                sections={PRASHAR_GEAR}
                destination="Prashar Lake"
              />

              <RelatedPostsGrid currentSlug="prashar-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="prashar-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
