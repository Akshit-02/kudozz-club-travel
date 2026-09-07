// src/app/blog/panipat-travel-guide/page.tsx
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
  title: "Panipat Travel Guide: The Battlefield That Shaped Indian History",
  description:
    "The complete Panipat travel guide. The three Battles of Panipat, Kabuli Bagh Mosque, the Panipat War Memorial, the city's handloom weaving tradition, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Panipat travel guide, Battle of Panipat, Kabuli Bagh Mosque, Panipat War Memorial, Panipat handloom, best time to visit Panipat, how to reach Panipat, Panipat history",
  openGraph: {
    title: "Panipat Travel Guide: The Battlefield That Shaped Indian History",
    description: "A small city that hosted three of the subcontinent's most decisive battles, plus a still-thriving handloom weaving tradition — the complete guide to Panipat.",
    url: "https://club.kudozz.in/blog/panipat-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/hero.jpg", width: 1200, height: 630, alt: "Historic architecture representative of Panipat, Haryana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panipat Travel Guide: The Battlefield That Shaped Indian History",
    description: "Three decisive battles and a living weaving tradition — the complete guide to Panipat.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/panipat-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Panipat Travel Guide: The Battlefield That Shaped Indian History",
          description: "The complete Panipat travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/panipat-travel-guide" },
          about: {
            "@type": "Place",
            name: "Panipat",
            address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Panipat Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Why is Panipat historically significant?",
    a: "Panipat was the site of three major battles that reshaped Indian history: the First Battle of Panipat (1526), where Babur's victory established the Mughal Empire; the Second Battle (1556), which consolidated Akbar's rule; and the Third Battle (1761), a massive and consequential clash between the Maratha Empire and Ahmad Shah Durrani's forces.",
  },
  {
    q: "How many days do I need in Panipat?",
    a: "A single focused day is enough to cover the main historical sites — the war memorial, Kabuli Bagh Mosque, and the Devi Temple — comfortably. Most travelers treat it as a day trip rather than an overnight stay.",
  },
  {
    q: "What is the best time to visit Panipat?",
    a: "October to March offers the most comfortable weather for walking between the historic sites. Summers get very hot, typical of the North Indian plains.",
  },
  {
    q: "How do I reach Panipat?",
    a: "Panipat Junction is a major railway station on the Delhi-Ambala line with frequent connections. The nearest airport is Delhi (~90km), and road access via NH44 is straightforward from both Delhi and Chandigarh directions.",
  },
  {
    q: "Is Panipat worth visiting for its textile industry?",
    a: "Yes, if you're interested in shopping or crafts — Panipat is genuinely known as 'the City of Weavers,' a major hub for blankets, carpets, and recycled wool textiles, with a real local market worth browsing.",
  },
  {
    q: "Can I combine Panipat with other nearby destinations?",
    a: "Yes — Panipat sits on the same NH44 corridor as Murthal and is a reasonable distance from Kurukshetra, making it easy to combine into a broader Haryana history-and-food road trip.",
  },
  {
    q: "What is the budget for a trip to Panipat?",
    a: "A budget day trip can be managed on roughly ₹800-1,200 for food and local transport, since most visitors don't need overnight accommodation given the city's proximity to Delhi.",
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
  { id: "introduction", title: "Why Panipat?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Panipat", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PANIPAT_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a focused history-and-heritage day trip",
    emoji: "⚔️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "For covering the war memorial, Kabuli Bagh Mosque, and the old town's textile market in a single day.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Panipat's key sites are spread across the old town, requiring a fair amount of walking.",
      },
      {
        name: "Sun Hat",
        description: "North Indian plains sun is intense, especially outside the winter months.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.8k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Little shade is available around the open memorial grounds.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Useful for a full day of walking between historic sites in warm weather.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Staying hydrated matters on a warm-weather walking day.",
      },
      {
        name: "Small Daypack",
        description: "For carrying water, camera, and any textile purchases from the local market.",
        price: "₹799",
        rating: 4.4,
        reviews: "4.1k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("small+daypack+travel"),
        tag: "Shopping essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Panipat's textile market is a genuine shopping draw worth having room for.",
      },
    ],
  },
];

export default function PanipatGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/hampi/hero.jpg"
              alt="Historic architecture representative of Panipat, Haryana"
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
                { label: "Panipat", href: null },
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
              {["Panipat", "Battle of Panipat", "Heritage", "Haryana"].map((tag) => (
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
              Panipat Travel Guide: The Battlefield That Shaped Indian History
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A small city that hosted three of the subcontinent's most decisive battles, plus a
              still-thriving handloom weaving tradition — everything you need to plan a trip to
              Panipat.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Panipat, Haryana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
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
                  <h2>Why Panipat?</h2>
                  <p>
                    <strong>Panipat</strong> holds an unusual place in Indian history: three separate,
                    genuinely turning-point battles were fought here across three centuries. The
                    First Battle of Panipat (1526) saw Babur defeat the Delhi Sultanate's forces and
                    establish the Mughal Empire. The Second (1556) consolidated Akbar's rule. And the
                    Third (1761) — one of the largest and most consequential battles of the 18th
                    century — pitted the Maratha Empire against Ahmad Shah Durrani's invading forces,
                    reshaping the subcontinent's balance of power.
                  </p>
                  <p>
                    Beyond the battlefields, modern Panipat has quietly built its own identity as{" "}
                    <strong>"the City of Weavers"</strong> — a genuinely significant handloom and
                    textile manufacturing hub, particularly known for blankets, carpets, and recycled
                    wool textiles.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⚔️</span> Panipat at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "⚔️", label: "Historical Significance", value: "3 major battles" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Panipat Junction" },
                        { icon: "🧵", label: "Known For", value: "Handloom weaving" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹2,500" },
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
                  <h2>Best Time to Visit Panipat</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Comfortable temperatures for walking between the war memorial, mosque, and old town sites.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Very hot",
                        text: "Typical North Indian plains heat — sightseeing is best limited to early morning or late afternoon.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Humid with periodic heavy rain, though generally manageable for a day-trip visit.",
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
                    <strong>Our pick:</strong> October to March — cool enough for a full day of
                    walking between the city's historic sites without the plains heat working
                    against you.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Panipat</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Delhi's airport is the nearest, about 90km away.
                    </li>
                    <li>
                      <strong>By Train:</strong> Panipat Junction is a major railway station on the
                      Delhi-Ambala line, with frequent connections.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected via NH44, the same highway corridor
                      that runs past Murthal — many travelers combine both stops.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Panipat with a Murthal food stop or a
                    Kurukshetra day trip — all three sit along a shared, easily driveable NH44
                    corridor.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Panipat</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Historic monuments in Panipat"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Panipat War Memorial &amp; Museum:</strong> Commemorates the three
                      historic battles fought here, with exhibits providing context on each.
                    </li>
                    <li>
                      <strong>Kabuli Bagh Mosque:</strong> Built by Babur to commemorate his 1526
                      victory — one of the city's oldest surviving Mughal-era structures.
                    </li>
                    <li>
                      <strong>Devi Temple:</strong> Associated with Mahabharata-era legend as one of
                      the five villages requested by the Pandavas.
                    </li>
                    <li>
                      <strong>Textile market:</strong> Panipat's handloom industry has real local
                      depth — worth a browse for blankets, carpets, and woven textiles.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Panipat</h2>
                  <p>
                    Given Panipat's proximity to Delhi, most travelers treat it as a day trip rather
                    than an overnight stay — but a handful of options exist if you want to base here.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹800–₹1,800/night", picks: ["Basic hotels near the railway station", "Highway-side budget lodges"] },
                      { tier: "Mid-Range", icon: "🏢", range: "₹2,000–₹4,000/night", picks: ["Business hotels in the city centre", "NH44-adjacent mid-range chains"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of better-appointed hotels — Panipat isn't a major overnight destination"] },
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
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Panipat</h2>
                  <ul>
                    <li>
                      <strong>Haryanvi thalis:</strong> Simple, hearty regional vegetarian meals at
                      local restaurants.
                    </li>
                    <li>
                      <strong>Roadside dhaba food:</strong> Given the NH44 location, expect solid
                      highway-dhaba fare across the city.
                    </li>
                    <li>
                      <strong>Murthal parathas nearby:</strong> If you're passing through, Murthal's
                      famous paratha dhabas are a short drive away (cross-reference that guide).
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Panipat Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "War Memorial & Kabuli Bagh",
                        color: "bg-amber-700",
                        activities: [
                          "Visit the Panipat War Memorial and Museum",
                          "Explore Kabuli Bagh Mosque",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Old Town & Textile Market",
                        color: "bg-forest-600",
                        activities: [
                          "Devi Temple visit",
                          "Browse the handloom and textile market",
                          "Lunch at a local Haryanvi restaurant",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Departure",
                        color: "bg-orange-600",
                        activities: ["Return to Delhi or continue onward via NH44"],
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
                              <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
                          ["Food/day", "₹350", "₹800"],
                          ["Local transport", "₹300", "₹700"],
                          ["Entry fees/shopping", "₹150", "₹1,000"],
                          ["Day total", "₹800", "₹2,500"],
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
                    * Excludes transport to the region. Most visitors don't need overnight
                    accommodation given the proximity to Delhi.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Panipat</h2>
                  <ul>
                    <li>
                      <strong>Treat it as a focused day trip:</strong> A single day comfortably
                      covers the main historical sites.
                    </li>
                    <li>
                      <strong>Combine with Murthal or Kurukshetra:</strong> All three sit along a
                      shared road corridor, making a combined trip efficient.
                    </li>
                    <li>
                      <strong>Browse the textile market if shopping interests you:</strong> Panipat's
                      handloom trade is genuinely significant, not a tourist gimmick.
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
                          "Visit the War Memorial for historical context",
                          "Combine with Murthal or Kurukshetra on the same trip",
                          "Browse the handloom textile market",
                          "Visit in cooler months for comfortable walking",
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
                          "Expect a multi-day sightseeing destination",
                          "Visit during peak summer heat without planning around it",
                          "Skip the textile market if you enjoy craft shopping",
                          "Book overnight accommodation unnecessarily given the proximity to Delhi",
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
                {["Panipat", "Battle of Panipat", "Heritage", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PANIPAT_GEAR} destination="Panipat" />

              <RelatedPostsGrid currentSlug="panipat-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="panipat-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
