// src/app/blog/lambasingi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, { GearSection } from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Lambasingi Travel Guide: The Kashmir of Andhra Pradesh",
  description:
    "The complete Lambasingi travel guide. Winter frost, coffee hills, Araku Valley combo, where to stay, best time to visit, and everything you need to plan a trip to Andhra Pradesh's frost village.",
  keywords:
    "Lambasingi travel guide, Kashmir of Andhra Pradesh, Lambasingi frost, best time to visit Lambasingi, how to reach Lambasingi, Chintapalli, Eastern Ghats frost village",
  openGraph: {
    title: "Lambasingi Travel Guide: The Kashmir of Andhra Pradesh",
    description:
      "A high-altitude village that drops below freezing on winter mornings, earning it the nickname 'Kashmir of Andhra Pradesh' — the complete guide to Lambasingi.",
    url: "https://club.kudozz.in/blog/lambasingi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Misty highland hills representative of Lambasingi, Andhra Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lambasingi Travel Guide: The Kashmir of Andhra Pradesh",
    description:
      "A frost village in the Eastern Ghats where winter mornings drop close to freezing — the complete guide to Lambasingi.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lambasingi-travel-guide",
  },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Lambasingi Travel Guide: The Kashmir of Andhra Pradesh",
          description: "The complete Lambasingi travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/lambasingi-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Lambasingi",
            address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Lambasingi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Why is Lambasingi called the Kashmir of Andhra Pradesh?",
    a: "On winter mornings, typically in December and January, Lambasingi's high-altitude setting in the Eastern Ghats lets temperatures drop close to or occasionally below freezing, producing visible frost on grass and leaves — a genuine rarity anywhere in coastal Andhra Pradesh. It's a popular nickname, not a literal comparison to Kashmir's climate or landscape.",
  },
  {
    q: "When exactly should I visit for the frost?",
    a: "The frost effect is narrow and weather-dependent, generally appearing on the coldest December–January mornings just before and around dawn. It burns off quickly once the sun rises, so an early arrival matters more than the exact date.",
  },
  {
    q: "How do I reach Lambasingi?",
    a: "The nearest airport and railway station are in Visakhapatnam, roughly 100km away. From there, it's a scenic but genuinely remote drive via Chintapalli into the Eastern Ghats hills.",
  },
  {
    q: "Is there accommodation in Lambasingi itself?",
    a: "Options are limited — this is a small village with minimal built tourist infrastructure. Basic homestays and a few camping setups exist, but most visitors either stay overnight in very simple accommodation or base themselves in Chintapalli or further out and arrive very early for the frost." ,
  },
  {
    q: "Can I combine Lambasingi with Araku Valley?",
    a: "Yes — the two are on a similar Eastern Ghats hill route and are commonly combined into a single multi-day trip, giving you the frost phenomenon at Lambasingi and the coffee-growing valley scenery and train journey at Araku.",
  },
  {
    q: "What is the budget for a trip to Lambasingi?",
    a: "This is a low-cost destination given its minimal infrastructure — a budget traveler can manage on roughly ₹1,200–1,500 a day including a basic homestay, though luxury options are essentially nonexistent here.",
  },
  {
    q: "Is Lambasingi worth visiting outside the frost season?",
    a: "It's a pleasant, cool hill viewpoint with coffee and spice terrain year-round (best Oct–Feb generally), but the specific frost spectacle that makes it famous is a narrow winter-morning phenomenon — outside that window it's a quieter, more ordinary hill stop.",
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
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Lambasingi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lambasingi", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Suggested Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const LAMBASINGI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a pre-dawn frost trip into the Eastern Ghats",
    emoji: "❄️",
    items: [
      {
        name: "Warm Layered Jacket",
        description:
          "Genuinely necessary here — this is the one part of coastal Andhra Pradesh where near-freezing mornings are real.",
        price: "₹1,999",
        rating: 4.5,
        reviews: "4.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("warm+winter+jacket+travel"),
        tag: "Frost-morning essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Most visitors arrive from the coast underestimating how cold Lambasingi gets right before sunrise.",
      },
      {
        name: "Torch / Headlamp",
        description:
          "For navigating the pre-dawn arrival and short walks around viewpoints before daylight.",
        price: "₹399",
        rating: 4.4,
        reviews: "5.2k",
        image: "🔦",
        affiliateUrl: amazonSearchUrl("led+headlamp+torch+travel"),
        tag: "Pre-dawn essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Catching the frost means arriving before sunrise, when the area is genuinely dark and unlit.",
      },
      {
        name: "Comfortable Walking Shoes",
        description: "For frost-covered grass and uneven hillside paths around the village.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Trip essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Frosted ground can be slippery, and paths around the village are unpaved in places.",
      },
      {
        name: "Hot Flask",
        description: "For carrying hot tea or coffee to the viewpoint on a genuinely cold morning wait.",
        price: "₹699",
        rating: 4.4,
        reviews: "3.1k",
        image: "🍵",
        affiliateUrl: amazonSearchUrl("insulated+flask+hot+drinks"),
        tag: "Comfort essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Facilities are minimal here — bringing your own hot drink makes the pre-dawn wait far more bearable.",
      },
    ],
  },
];

export default function LambasingiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Misty highland hills representative of Lambasingi, Andhra Pradesh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol
              className="flex items-center gap-2 text-xs text-white/55"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Lambasingi", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Lambasingi", "Eastern Ghats", "Off-beat", "Andhra Pradesh"].map((tag) => (
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
              Lambasingi Travel Guide: The Kashmir of Andhra Pradesh
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A high-altitude village that drops close to freezing on winter mornings, earning it a nickname
              no other spot in coastal Andhra Pradesh can claim.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Lambasingi, Andhra Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
                },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Lambasingi?</h2>
                  <p>
                    <strong>Lambasingi</strong> is a small village in the Eastern Ghats, tucked into the
                    Chintapalli hills of Andhra Pradesh, that has become a domestic-tourism phenomenon for one
                    specific reason: on the coldest winter mornings, its elevation lets temperatures drop close
                    to — occasionally below — freezing, coating grass and leaves in a thin layer of visible
                    frost. That's a genuine rarity anywhere along the Andhra coast, and it's earned the village
                    its popular nickname, the "Kashmir of Andhra Pradesh" — a characterization of the frost, not
                    a literal comparison to Kashmir's landscape or climate.
                  </p>
                  <p>
                    Outside that narrow winter window, Lambasingi is a quiet, misty hill viewpoint over
                    coffee and spice-growing terrain, with essentially no built tourist infrastructure. It's a
                    phenomenon destination first, a developed hill station a distant second.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>❄️</span> Lambasingi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "❄️", label: "Known For", value: "Winter frost (Dec–Jan)" },
                        { icon: "🌡️", label: "Best Time", value: "Dec – Jan mornings" },
                        { icon: "✈️", label: "Nearest Airport", value: "Visakhapatnam (~100km)" },
                        { icon: "☕", label: "Setting", value: "Coffee & spice hill terrain" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹2,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Lambasingi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "The frost window — our pick",
                        text: "The coldest mornings of the year, when temperatures can drop close to or below freezing and produce visible frost. This is the singular reason most visitors come.",
                      },
                      {
                        season: "Oct – Nov & Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cool but no frost",
                        text: "Pleasant, cool hill weather without the specific frost spectacle — a quieter, less crowded alternative if the frost itself isn't the goal.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Warmer",
                        text: "Noticeably warmer, though still cooler than the coastal plains — a less compelling time to visit specifically.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Monsoon",
                        text: "Lush and green, but heavy rain makes the hill roads and viewpoint access more difficult.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
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
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> A December or January morning, arriving well before sunrise —
                    the frost is the whole point, and it's brief and weather-dependent.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Lambasingi</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Visakhapatnam Airport, roughly 100km away, is the nearest.
                    </li>
                    <li>
                      <strong>By Train:</strong> Visakhapatnam is also the nearest well-connected railway
                      station.
                    </li>
                    <li>
                      <strong>By Road:</strong> A genuinely remote hill drive via Chintapalli — this is the only
                      practical way to reach the village itself.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're driving up specifically for the frost, leave your base
                    town well before dawn — the effect is brief and burns off quickly once the sun is up.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Lambasingi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Highland viewpoint scenery near Lambasingi"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Frost-watching at dawn:</strong> The core Lambasingi experience — arrive before
                      sunrise on a cold December-January morning to see the ground genuinely frosted over.
                    </li>
                    <li>
                      <strong>Hillside coffee and spice plantations:</strong> The surrounding terrain grows
                      coffee, pepper, and other spices — a scenic backdrop for the misty mornings here.
                    </li>
                    <li>
                      <strong>Viewpoints over the Eastern Ghats:</strong> Sweeping views across forested hills,
                      especially atmospheric in the early-morning mist.
                    </li>
                    <li>
                      <strong>Combine with Araku Valley:</strong> The two sit on a similar hill route, and most
                      serious trips combine both for a fuller Eastern Ghats experience.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Lambasingi</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,200/night",
                        picks: ["Basic homestays in the village", "Simple guesthouses in Chintapalli"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: ["Better-appointed stays in Chintapalli or Araku", "Camping setups with amenities"],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "Very limited",
                        picks: ["Essentially no true luxury options exist right in Lambasingi itself"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
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
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    Many visitors base in Chintapalli or combine the trip with an Araku Valley stay rather than
                    overnighting right in Lambasingi, given how minimal accommodation is here.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Lambasingi</h2>
                  <ul>
                    <li>
                      <strong>Local homestay meals:</strong> Simple Andhra-style vegetarian and non-vegetarian
                      meals, often the only food option right in the village.
                    </li>
                    <li>
                      <strong>Hot chai and coffee:</strong> Genuinely welcome given the cold mornings — local
                      stalls sell hot drinks near the main viewpoint.
                    </li>
                    <li>
                      <strong>Andhra thalis in Chintapalli/Araku:</strong> A wider range of food options exist a
                      short drive away in the larger nearby towns.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Suggested Lambasingi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Night Before",
                        title: "Base Nearby",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive and stay overnight in Chintapalli or a basic Lambasingi homestay",
                          "Set an early alarm for a pre-dawn departure",
                        ],
                      },
                      {
                        day: "Frost Morning",
                        title: "Dawn at the Viewpoint",
                        color: "bg-sky-700",
                        activities: [
                          "Arrive well before sunrise for the frost",
                          "Walk the misty hillside viewpoints as the sun comes up",
                          "Warm up with hot chai at a local stall",
                        ],
                      },
                      {
                        day: "Onward",
                        title: "Continue to Araku Valley",
                        color: "bg-forest-600",
                        activities: [
                          "Drive onward to Araku Valley to continue the Eastern Ghats hill trip",
                          "Or return toward Visakhapatnam",
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
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹700", "₹2,200"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport per day", "₹200", "₹500"],
                          ["Daily total", "₹1,200", "₹3,400"],
                        ].map(([exp, b, m], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes transport to the region. Luxury-tier options are essentially unavailable in
                    Lambasingi itself.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Lambasingi</h2>
                  <ul>
                    <li>
                      <strong>Arrive before dawn:</strong> The frost effect is brief and burns off with the
                      sunrise — timing is everything.
                    </li>
                    <li>
                      <strong>Pack warm layers:</strong> This is the one part of coastal Andhra Pradesh where
                      you'll genuinely need them.
                    </li>
                    <li>
                      <strong>Book accommodation ahead in peak frost season:</strong> The limited homestays and
                      camping spots fill up fast on the coldest weekends.
                    </li>
                    <li>
                      <strong>Combine with Araku Valley:</strong> Makes for a more complete Eastern Ghats trip
                      given the shared route.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Time your visit for a December–January morning",
                          "Arrive well before sunrise",
                          "Pack genuinely warm layers",
                          "Combine with Araku Valley for a fuller trip",
                          "Book limited accommodation in advance during peak frost weekends",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
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
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Expect developed hill-station infrastructure",
                          "Visit outside Dec–Jan expecting frost",
                          "Arrive late morning expecting to still see frost",
                          "Skip warm layers assuming coastal Andhra weather",
                          "Assume luxury accommodation is available on-site",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
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

              <div className="mt-10 flex flex-wrap gap-2">
                {["Lambasingi", "Eastern Ghats", "Off-beat", "Andhra Pradesh", "India"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={LAMBASINGI_GEAR} destination="Lambasingi" />

              <RelatedPostsGrid currentSlug="lambasingi-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="lambasingi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
