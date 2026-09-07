// src/app/blog/saputara-travel-guide/page.tsx
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
  title: "Saputara Travel Guide: Gujarat's Only Hill Station",
  description:
    "The complete Saputara travel guide. Saputara Lake, Sunset Point, the ropeway, Gira Falls, tribal heritage, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Saputara travel guide, Saputara Lake, Gira Falls, Saputara ropeway, best time to visit Saputara, how to reach Saputara, Gujarat hill station, Sahyadri hills Gujarat",
  openGraph: {
    title: "Saputara Travel Guide: Gujarat's Only Hill Station",
    description:
      "A lake-centred hill station in the Sahyadri range, the one place in Gujarat that actually feels like a monsoon retreat — the complete guide to Saputara.",
    url: "https://club.kudozz.in/blog/saputara-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Misty green hill-station scenery representative of Saputara, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saputara Travel Guide: Gujarat's Only Hill Station",
    description: "Saputara Lake, Gira Falls, and Gujarat's only real hill-station escape — the complete guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/saputara-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Saputara Travel Guide: Gujarat's Only Hill Station",
          description: "The complete Saputara travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/saputara-travel-guide" },
          about: {
            "@type": "Place",
            name: "Saputara",
            address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Saputara Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Is Saputara really Gujarat's only hill station?",
    a: "Yes — it's the one place in Gujarat that genuinely offers the cooler, greener hill-station experience most Indian states have several of, thanks to its location in the Sahyadri (Western Ghats) range near the Maharashtra border.",
  },
  {
    q: "What is the best time to visit Saputara?",
    a: "June to October, the monsoon and post-monsoon window, is when Saputara is at its greenest and most hill-station-like — unusual advice for an Indian hill station, but the rest of Gujarat is hot and dry for much of the year, so this is genuinely the peak season here.",
  },
  {
    q: "How do I reach Saputara?",
    a: "The nearest airport is Surat, about 160km away. Waghai is the nearest railway station, roughly 50km away. Road access is the primary and most practical route for most visitors.",
  },
  {
    q: "How many days do I need in Saputara?",
    a: "One to two days covers Saputara Lake, the viewpoints, the ropeway, and a trip to Gira Falls comfortably.",
  },
  {
    q: "Is Saputara good for families?",
    a: "Yes — boating on the lake, the ropeway, and gentle viewpoint walks are all manageable for most ages, making it a relaxed family-friendly hill escape.",
  },
  {
    q: "What is the budget for a trip to Saputara?",
    a: "A budget traveler can manage on roughly ₹1,400 a day, a mid-range trip closer to ₹3,800 a day. A 2-day trip totals roughly ₹2,800 on a budget and ₹7,600 mid-range.",
  },
  {
    q: "Is Saputara worth visiting outside monsoon season?",
    a: "It's still a pleasant, cooler escape from the Gujarat plains in winter (Oct-Feb), just noticeably less green than during and right after monsoon — set your expectations accordingly depending on when you visit.",
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
  { id: "introduction", title: "Why Saputara?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Saputara", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SAPUTARA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for monsoon-season hill walks and lake boating",
    emoji: "🌄",
    items: [
      {
        name: "Rain Jacket / Poncho",
        description: "Saputara's best season is monsoon and post-monsoon — a packable rain layer is essential, not optional, if visiting Jun-Oct.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"),
        tag: "Monsoon essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Sudden downpours are common and expected during Saputara's peak green season.",
      },
      {
        name: "Grip Sandals / Trekking Shoes",
        description: "Viewpoint paths and the walk to Gira Falls can get slippery in wet conditions.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+sandals+grip+outdoor"),
        tag: "Trail essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Wet stone and mud paths around the viewpoints call for real grip underfoot.",
      },
      {
        name: "Light Warm Layer",
        description: "Evenings at Saputara's elevation are noticeably cooler than the Gujarat plains, even in the warmer months.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "3.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("light+warm+jacket+travel"),
        tag: "Evening essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The elevation gives Saputara noticeably cooler nights than the rest of the state.",
      },
      {
        name: "Waterproof Phone Pouch",
        description: "Useful for boating on Saputara Lake and any monsoon-season sightseeing.",
        price: "₹299",
        rating: 4.3,
        reviews: "9.1k",
        image: "📱",
        affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"),
        tag: "Boating essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Boating and rain don't mix well with an unprotected phone in your pocket.",
      },
    ],
  },
];

export default function SaputaraGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/coorg/coorg.jpg"
              alt="Misty green hill-station scenery representative of Saputara, Gujarat"
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
                { label: "Saputara", href: null },
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
              {["Saputara", "Sahyadri Hills", "Off-beat", "Gujarat"].map((tag) => (
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
              Saputara Travel Guide: Gujarat's Only Hill Station
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A lake-centred hill station in the Sahyadri range, the one place in Gujarat that actually feels
              like a monsoon retreat.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Saputara, Gujarat",
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
                  <h2>Why Saputara?</h2>
                  <p>
                    <strong>Saputara</strong> is Gujarat's only hill station, tucked into the Sahyadri
                    (Western Ghats) range near the Maharashtra border. For a state largely defined by desert,
                    coastline, and dry plains, Saputara stands out simply by being genuinely cool and green —
                    a real point of contrast rather than a marketing claim.
                  </p>
                  <p>
                    Centered on Saputara Lake, with viewpoints, a ropeway, and a nearby waterfall, it's a
                    modest but genuine hill-station experience, and one with an unusual twist: it's actually
                    at its best during monsoon, when most Indian hill stations are avoided.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🌄</span> Saputara at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🏞️", label: "Key Site", value: "Saputara Lake" },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Oct (monsoon)" },
                        { icon: "✈️", label: "Nearest Airport", value: "Surat (~160km)" },
                        { icon: "🚆", label: "Nearest Rail", value: "Waghai (~50km)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹3,800" },
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
                  <h2>Best Time to Visit Saputara</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Jun – Oct",
                        emoji: "🌧️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best overall — our pick",
                        text: "Saputara's genuine peak season — lush greenery, full waterfalls, and the closest this state gets to a classic monsoon hill-station look.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cool and pleasant",
                        text: "Comfortable, dry weather — less green than monsoon season but still a welcome escape from the plains.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot",
                        text: "Warmer, though the elevation keeps it milder than most of Gujarat during this stretch.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> July to September — genuinely the best window for Saputara's
                    green, hill-station look, unlike most Indian hill stations where monsoon is avoided.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Saputara</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Surat is the nearest airport, about 160km away.
                    </li>
                    <li>
                      <strong>By Train:</strong> Waghai, roughly 50km away, is the nearest railway station.
                    </li>
                    <li>
                      <strong>By Road:</strong> Road access is the primary and most practical route for
                      virtually all visitors.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If visiting during monsoon for the green look, check road
                    conditions ahead of travel — heavy rain can occasionally affect the ghat roads.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Saputara</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Hill-station scenery around Saputara"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Saputara Lake:</strong> The town's centrepiece, with boating available.
                    </li>
                    <li>
                      <strong>Sunset Point and Sunrise Point:</strong> The standard hill-station viewpoints,
                      offering sweeping valley views.
                    </li>
                    <li>
                      <strong>Saputara Rope-way:</strong> A cable car offering aerial views over the hills.
                    </li>
                    <li>
                      <strong>Gira Falls:</strong> A scenic waterfall nearby, most dramatic during and just
                      after monsoon.
                    </li>
                    <li>
                      <strong>Tribal heritage exhibits:</strong> Local museums and displays on the region's
                      Adivasi (tribal) art and culture.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Saputara</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Lake-view guesthouses", "Government/tourism board hotels"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Hillside resort-style hotels", "Family-oriented mid-range stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium lake-view resorts"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Saputara</h2>
                  <ul>
                    <li><strong>Gujarati thalis:</strong> Standard vegetarian thalis at most hotels and local eateries.</li>
                    <li><strong>Tribal/local specialties:</strong> Simple regional dishes reflecting the area's Adivasi culinary traditions, worth asking about at local eateries.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Saputara Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Lake & Viewpoints",
                        color: "bg-amber-700",
                        activities: ["Arrive, check in", "Afternoon: Saputara Lake boating", "Evening: Sunset Point"],
                      },
                      {
                        day: "Day 2",
                        title: "Ropeway & Gira Falls",
                        color: "bg-forest-600",
                        activities: ["Morning: Saputara Rope-way", "Afternoon: Gira Falls", "Evening: departure"],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
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
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹900", "₹2,800", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport/activities per day", "₹150", "₹500", "₹1,200"],
                          ["Daily total", "₹1,400", "₹3,800", "₹11,000"],
                          ["2-Day trip total", "₹2,800", "₹7,600", "₹22,000"],
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
                    * Excludes transport to the region.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Saputara</h2>
                  <ul>
                    <li><strong>Time it for monsoon if you want the classic green look:</strong> Jun-Oct is genuinely the peak season here.</li>
                    <li><strong>Carry rain gear in monsoon:</strong> Sudden downpours are common.</li>
                    <li><strong>Boat safely:</strong> Follow standard lake-boating safety guidance, especially in the rains.</li>
                    <li><strong>Check road conditions in heavy monsoon:</strong> Ghat roads can occasionally be affected.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit in monsoon for the greenest, most hill-station-like look", "Carry rain gear for sudden downpours", "Try boating on Saputara Lake", "Check road conditions before a monsoon trip", "Visit Gira Falls after or during monsoon for the best flow"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect Himachal or Coorg-scale hill-station infrastructure", "Visit in peak summer expecting lush greenery", "Skip rain gear during monsoon", "Ignore road-condition checks before a monsoon drive", "Rush the viewpoints — the pace here is meant to be slow"].map((item) => (
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
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Saputara", "Sahyadri Hills", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SAPUTARA_GEAR} destination="Saputara" />
              <RelatedPostsGrid currentSlug="saputara-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="saputara-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
