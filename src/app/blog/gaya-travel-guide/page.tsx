// src/app/blog/gaya-travel-guide/page.tsx
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

export const metadata: Metadata = {
  title: "Gaya Travel Guide: Vishnupad Temple & Pitru Paksha Pilgrimage",
  description:
    "The complete Gaya travel guide. Vishnupad Temple, Pind Daan ancestral rites, Pitru Paksha pilgrimage season, Brahmayoni Hill, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Gaya travel guide, Vishnupad Temple, Pitru Paksha Gaya, Pind Daan, Gaya Bihar, best time to visit Gaya, how to reach Gaya, Gaya Bodh Gaya distance, Brahmayoni Hill",
  openGraph: {
    title: "Gaya Travel Guide: Vishnupad Temple & Pitru Paksha Pilgrimage",
    description:
      "A temple town where Hindus perform ancestral rites believed to liberate departed souls, drawing pilgrims from across India every Pitru Paksha — the complete guide to Gaya.",
    url: "https://club.kudozz.in/blog/gaya-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Historic temple architecture evoking Vishnupad Temple in Gaya, Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaya Travel Guide: Vishnupad Temple & Pitru Paksha Pilgrimage",
    description: "Vishnupad Temple and the Pitru Paksha ancestral pilgrimage — the complete guide to Gaya.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gaya-travel-guide",
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
          headline: "Gaya Travel Guide: Vishnupad Temple & Pitru Paksha Pilgrimage",
          description: "The complete Gaya travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/gaya-travel-guide" },
          about: {
            "@type": "Place",
            name: "Gaya",
            address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Gaya Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "What is Pind Daan and why do people go to Gaya for it?",
    a: "Pind Daan is a Hindu ancestral offering ritual performed to honor and liberate the souls of departed family members. Gaya, centered on Vishnupad Temple, is considered one of the most significant places in India to perform these rites — a genuinely distinct ritual purpose compared to most pilgrimage temples.",
  },
  {
    q: "When is Pitru Paksha?",
    a: "It's a roughly two-week period in the Hindu lunar calendar, typically falling around September, when Gaya sees a major influx of pilgrims performing ancestral rites. Exact dates shift year to year with the lunar calendar — verify current-year dates before planning around it.",
  },
  {
    q: "How is Gaya different from Bodh Gaya?",
    a: "Gaya is the older Hindu pilgrimage town centered on Vishnupad Temple and ancestral rites, while Bodh Gaya — about 13km away — is the Buddhist site marking the Buddha's enlightenment. They're distinct destinations that many travelers combine given the short distance between them.",
  },
  {
    q: "How do I reach Gaya?",
    a: "Gaya Airport (GAY) has domestic and some international connections, Gaya Junction is a major railway station, and it's well connected by road. It's about 13km from Bodh Gaya.",
  },
  {
    q: "Do I need to be Hindu to visit Vishnupad Temple?",
    a: "The temple is an active Hindu place of worship — non-Hindu visitors should check current entry policies locally, as access to the inner sanctum can be restricted at active pilgrimage temples.",
  },
  {
    q: "How many days do I need in Gaya?",
    a: "A single day covers Vishnupad Temple and Brahmayoni Hill comfortably. Most travelers combine it with a Bodh Gaya visit for a fuller 2-day trip.",
  },
  {
    q: "What is the best time to visit Gaya?",
    a: "October to March for comfortable weather. Pitru Paksha (verify current dates) is worth timing a visit around if the ritual pilgrimage experience interests you specifically, though it's also the most crowded period.",
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
  { id: "introduction", title: "Why Gaya?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gaya", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GAYA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple visits and the Brahmayoni Hill climb",
    emoji: "🛕",
    items: [
      {
        name: "Modest, Breathable Clothing",
        description: "Vishnupad Temple is an active place of worship — covered shoulders and knees are expected.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.6k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"),
        tag: "Respectful travel",
        tagColor: "bg-amber-100 text-amber-700",
        why: "This is a living pilgrimage site, not a monument — dress accordingly.",
      },
      {
        name: "Comfortable Walking Shoes",
        description: "Easy slip-on footwear helps for Brahmayoni Hill's steps and temple courtyard walking.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Shoes come off at the temple entrance, so slip-ons save hassle at each stop.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Useful across a full day of temple visits and the Brahmayoni Hill steps in Bihar's dry heat.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Crowds during pilgrimage season can make quick access to bottled water harder.",
      },
      {
        name: "Small Bag for Shoes/Valuables",
        description: "A compact bag to carry shoes and valuables while inside temple grounds.",
        price: "₹299",
        rating: 4.3,
        reviews: "2.9k",
        image: "👝",
        affiliateUrl: amazonSearchUrl("small+travel+pouch+bag"),
        tag: "Temple essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Shoe storage at busy pilgrimage temples can be crowded or unreliable during peak season.",
      },
    ],
  },
];

export default function GayaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Historic temple architecture evoking Vishnupad Temple in Gaya, Bihar"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Gaya", href: null },
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
              {["Gaya", "Bihar", "Vishnupad Temple", "Pitru Paksha"].map((tag) => (
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
              Gaya Travel Guide: Vishnupad Temple & Pitru Paksha Pilgrimage
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A temple town where Hindus perform ancestral rites believed to liberate departed souls, drawing pilgrims from across India every Pitru Paksha.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Gaya, Bihar",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,800 words",
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
                  <h2>Why Gaya?</h2>
                  <p>
                    <strong>Gaya</strong> centers on <strong>Vishnupad Temple</strong>, built around a
                    footprint believed to be that of Lord Vishnu imprinted in solid rock. What sets Gaya
                    apart from most Hindu pilgrimage towns is its role in <strong>Pind Daan</strong> —
                    ancestral offering rituals performed to honor and liberate the souls of departed
                    family members, a genuinely distinct ritual purpose that draws pilgrims from across
                    India, especially during <strong>Pitru Paksha</strong>.
                  </p>
                  <p>
                    Gaya is often confused with nearby <strong>Bodh Gaya</strong> — but they're distinct:
                    Gaya is the older Hindu pilgrimage town, while Bodh Gaya, about 13km away, is the
                    Buddhist site marking the Buddha's enlightenment. Many travelers combine both given the
                    short distance.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Gaya at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🛕", label: "Key Site", value: "Vishnupad Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Gaya (GAY)" },
                        { icon: "🕉️", label: "Known For", value: "Pind Daan, Pitru Paksha" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹4,000" },
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
                  <h2>Best Time to Visit Gaya</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather ideal for temple visits and the Brahmayoni Hill climb.",
                      },
                      {
                        season: "Pitru Paksha",
                        emoji: "🕉️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak pilgrimage season",
                        text: "A roughly two-week period around September (verify current-year dates) when Gaya sees its heaviest pilgrim traffic for ancestral rites.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat",
                        text: "Temperatures regularly cross 40°C, making extended temple and hill visits genuinely difficult.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
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
                    <strong>Our pick:</strong> October to February for a comfortable, less crowded visit —
                    or Pitru Paksha specifically if the ritual pilgrimage experience is what draws you.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Gaya</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Gaya Airport (GAY) has domestic connections and some direct
                      international flights, especially from Buddhist-majority countries via the Bodh Gaya
                      pilgrim route.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Gaya Junction is a major railway station with strong
                      connectivity to Delhi, Kolkata, and much of the country.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected by road, and only about 13km from Bodh Gaya.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Gaya with Bodh Gaya on the same trip — they're close
                    enough to cover comfortably in a single day if needed, though two days lets you slow down.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Gaya</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="Temple architecture at Vishnupad Temple, Gaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Vishnupad Temple:</strong> Built around a footprint believed to be that of
                      Lord Vishnu, and the central site for Pind Daan ancestral rites.
                    </li>
                    <li>
                      <strong>Brahmayoni Hill:</strong> A hilltop temple reached by a flight of steps,
                      offering views over Gaya town.
                    </li>
                    <li>
                      <strong>Falgu River:</strong> Runs through Gaya and holds its own religious
                      significance in local ritual practice.
                    </li>
                    <li>
                      <strong>Bodh Gaya day trip:</strong> Just 13km away — cross-reference that separate
                      guide since most travelers combine both.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Gaya</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: ["Dharamshala-style pilgrim stays", "Budget lodges near the temple"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: ["3-star hotels, central Gaya"],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹5,000+/night",
                        picks: ["Limited options — most luxury stays are in nearby Bodh Gaya"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
                    Many travelers base in Bodh Gaya's better-developed hotel scene and day-trip to Gaya
                    given the short distance.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Gaya</h2>
                  <ul>
                    <li>
                      <strong>Litti Chokha:</strong> Bihar's signature roasted wheat and gram flour dish,
                      widely available in Gaya's local eateries.
                    </li>
                    <li>
                      <strong>Prasad and temple offerings:</strong> Various sweets and offerings sold near
                      Vishnupad Temple.
                    </li>
                    <li>
                      <strong>Sattu-based snacks:</strong> Cheap, filling roasted gram flour dishes common
                      across Bihar.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Gaya Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Vishnupad Temple",
                        color: "bg-amber-700",
                        activities: [
                          "Early visit to Vishnupad Temple",
                          "Explore the temple precinct and Falgu River ghats",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Brahmayoni Hill & Onward",
                        color: "bg-forest-600",
                        activities: [
                          "Climb Brahmayoni Hill for views over the town",
                          "Depart for Bodh Gaya (~13km) or onward travel",
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
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹900", "₹2,800", "₹6,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
                          ["Daily total", "₹1,550", "₹4,300", "₹9,300"],
                        ].map(([exp, b, m, l], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{l}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes flights. Costs can rise during Pitru Paksha given increased demand.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Gaya</h2>
                  <ul>
                    <li>
                      <strong>Combine with Bodh Gaya:</strong> Given the short distance, most itineraries
                      cover both.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Vishnupad Temple is an active place of worship.
                    </li>
                    <li>
                      <strong>Expect heavy crowds during Pitru Paksha:</strong> Verify current-year dates
                      and plan accordingly if visiting during this period.
                    </li>
                    <li>
                      <strong>Check current entry policy:</strong> Non-Hindu visitors should verify access
                      to the temple's inner sanctum locally.
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
                          "Combine Gaya with Bodh Gaya given the short distance",
                          "Dress modestly for the temple",
                          "Visit Brahmayoni Hill for town views",
                          "Verify current-year Pitru Paksha dates if relevant",
                          "Check current temple entry policy if non-Hindu",
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
                          "Confuse Gaya with Bodh Gaya when planning logistics",
                          "Visit during peak summer heat (Apr–Jun)",
                          "Wear revealing clothing at the temple",
                          "Show up during Pitru Paksha expecting a quiet visit",
                          "Skip checking non-Hindu entry policy if relevant",
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
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                          {f.q}
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Gaya", "Bihar", "Vishnupad Temple", "Pitru Paksha", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={GAYA_GEAR} destination="Gaya" />

              <RelatedPostsGrid currentSlug="gaya-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gaya-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
