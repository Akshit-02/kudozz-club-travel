// src/app/blog/nashik-travel-guide/page.tsx
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
  title: "Nashik Travel Guide: Vineyards, Temples & Godavari Ghats",
  description:
    "The complete Nashik travel guide — Sula Vineyards and wine tours, Panchavati and the Godavari ghats, Trimbakeshwar Jyotirlinga temple, Pandavleni Caves, where to stay, what to eat, a 2-day itinerary, and budget breakdown.",
  keywords:
    "Nashik travel guide, Sula Vineyards, Nashik wineries, Trimbakeshwar Temple, Panchavati Nashik, Godavari ghats, Nashik Kumbh Mela, Pandavleni Caves, Nashik itinerary, best time to visit Nashik, how to reach Nashik, Nashik wine tour, Nashik weekend getaway from Mumbai, Nashik weekend getaway from Pune",
  openGraph: {
    title: "Nashik Travel Guide: Vineyards, Temples & Godavari Ghats",
    description:
      "India's wine capital, a riverside pilgrimage town on the Godavari, and the vineyards drawing weekend crowds from Mumbai and Pune — the complete guide to Nashik.",
    url: "https://club.kudozz.in/blog/nashik-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Riverside ghats and green countryside near Nashik, Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashik Travel Guide: Vineyards, Temples & Godavari Ghats",
    description:
      "Sula Vineyards, the Godavari ghats, and the Trimbakeshwar Jyotirlinga — the complete guide to Nashik.",
    images: ["/images/destinations/kerala/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nashik-travel-guide",
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
          headline: "Nashik Travel Guide: Vineyards, Temples & Godavari Ghats",
          description: "The complete Nashik travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/nashik-travel-guide" },
          about: {
            "@type": "Place",
            name: "Nashik",
            address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Nashik Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Nashik?",
    a: "Two days works well — one for the temples and Godavari ghats around Panchavati and Trimbakeshwar, and a second for a relaxed vineyard-hopping day at Sula and the other wineries.",
  },
  {
    q: "What is the best time to visit Nashik?",
    a: "October to February is best — pleasant temperatures for walking the ghats and touring vineyards. January–February also coincides with the grape harvest, a good window for winery visits.",
  },
  {
    q: "How do I reach Nashik from Mumbai or Pune?",
    a: "Nashik is about 170 km from Mumbai (roughly 3.5 hours by road via the Mumbai-Agra highway/NH160) and about 210 km from Pune. Nashik Airport (Ozar/ISK) has limited flights, and the city is well connected by rail from both cities.",
  },
  {
    q: "Is Nashik worth visiting just for the wineries?",
    a: "Yes — Sula Vineyards alone draws a steady weekend crowd from Mumbai and Pune purely for tours and tastings, and it pairs naturally with a half-day covering Panchavati's temples and ghats if you want to see both sides of the city.",
  },
  {
    q: "What is Nashik's connection to the Kumbh Mela?",
    a: "Nashik is one of the four sites (alongside Prayagraj, Haridwar, and Ujjain) that host the Kumbh Mela, held here once every 12 years on the banks of the Godavari at Ramkund. Kumbh years bring enormous crowds to the city.",
  },
  {
    q: "What is the budget for a trip to Nashik?",
    a: "A budget traveller can manage on roughly ₹1,800 a day (stay, food, local transport), a mid-range trip runs closer to ₹4,500 a day including a couple of vineyard tastings, excluding travel to the region.",
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
  { id: "introduction", title: "Why Nashik?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nashik", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const NASHIK_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple mornings and vineyard afternoons",
    emoji: "🍇",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "For the Godavari ghats, Panchavati's temple lanes, and walking between winery tasting rooms and vine rows.",
        price: "₹1,499", rating: 4.4, reviews: "6.8k", image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700",
        why: "A full day covering both temples and vineyards involves more walking than it looks like on paper.",
      },
      {
        name: "Sunglasses (UV Protection)",
        description: "Vineyard tours are largely outdoors under open sky with little shade between rows.",
        price: "₹599", rating: 4.3, reviews: "4.1k", image: "🕶️",
        affiliateUrl: amazonSearchUrl("UV+protection+sunglasses"),
        tag: "Vineyard essential", tagColor: "bg-sky-100 text-sky-700",
        why: "Winery visits run through the brightest part of the day, especially in the Oct–Feb high season.",
      },
      {
        name: "Light Layered Jacket",
        description: "Nashik mornings, especially near the vineyards, can be noticeably cooler than the afternoon — useful for early starts to Trimbakeshwar or Sula.",
        price: "₹1,299", rating: 4.4, reviews: "3.2k", image: "🧥",
        affiliateUrl: amazonSearchUrl("light+layered+jacket+travel"),
        tag: "Morning essential", tagColor: "bg-stone-100 text-stone-700",
        why: "Winter mornings in Nashik's vineyard belt can dip into single digits, a surprise for visitors expecting Maharashtra heat.",
      },
      {
        name: "Modest Cotton Wrap",
        description: "Trimbakeshwar and the Panchavati temples expect covered shoulders and knees.",
        price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+wrap+travel+modest"),
        tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700",
        why: "Both are active pilgrimage sites with real dress-code expectations, unlike the vineyard side of a Nashik trip.",
      },
      {
        name: "Reusable Water Bottle",
        description: "For the ghats, the Panchavati walk, and long vineyard tour afternoons.",
        price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700",
        why: "Wine tastings pair better with steady hydration through the day, and temple-town food stalls don't always sell chilled water.",
      },
    ],
  },
];

export default function NashikGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kerala/hero.jpg"
              alt="Riverside ghats and green countryside near Nashik, Maharashtra"
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
                { label: "Nashik", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
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
              {["Nashik", "Sula Vineyards", "Godavari", "Temples", "Maharashtra"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Nashik Travel Guide: Vineyards, Temples & Godavari Ghats
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              India's wine capital, a riverside pilgrimage town on the
              Godavari, and the vineyards drawing weekend crowds from
              Mumbai and Pune — the complete guide to Nashik.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Nashik, Maharashtra" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,200 words" },
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
                  <h2>Why Nashik?</h2>
                  <p>
                    Nashik pulls off a genuinely unusual combination — it's
                    one of Hinduism's most sacred pilgrimage towns, hosting
                    the <strong>Kumbh Mela</strong> once every 12 years on
                    the banks of the Godavari, and simultaneously
                    India's undisputed <strong>wine capital</strong>, home
                    to Sula Vineyards and a growing cluster of wineries that
                    draw weekend crowds from Mumbai and Pune purely for
                    tastings and vineyard views.
                  </p>
                  <p>
                    The two sides of the city rarely overlap on a typical
                    itinerary, which is exactly what makes Nashik worth two
                    full days rather than a rushed day trip — a morning at
                    the Godavari ghats and Trimbakeshwar Temple feels like
                    a completely different destination from an afternoon
                    walking Sula's vine rows with a glass of Chenin Blanc.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🍇</span> Nashik at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🛕", label: "Key Site", value: "Trimbakeshwar Jyotirlinga" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Nashik (Ozar/ISK)" },
                        { icon: "🍷", label: "Known For", value: "India's Wine Capital" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Nashik</h2>
                  <p>
                    Weather and the grape harvest calendar both point the
                    same direction.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Pleasant, dry weather for both the ghats and vineyard walks. January–February overlaps with the grape harvest, a good window for winery visits." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — plan around it", text: "Temperatures climb well past 35°C. Still doable with early starts, but far less comfortable for a full day outdoors." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — green vineyards", text: "The vineyard countryside turns vividly green, but the ghats can flood and some outdoor winery activities pause during heavy rain." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> January. Cool, dry days, the
                    grape harvest in full swing at the vineyards, and none
                    of the Kumbh-year crowd surges that hit occasionally.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Nashik</h2>
                  <ul>
                    <li><strong>By Air:</strong> Nashik Airport (Ozar/ISK) has limited direct flights — many travellers fly into Mumbai or Pune instead and drive in.</li>
                    <li><strong>By Road:</strong> About 170 km from Mumbai (~3.5 hrs via the Mumbai-Agra highway/NH160) and roughly 210 km from Pune — both comfortable weekend-drive distances.</li>
                    <li><strong>By Train:</strong> Nashik Road station is well connected to Mumbai, Pune, and other major cities.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book vineyard tour and tasting slots in advance for weekend visits — Sula in particular fills up fast with the Mumbai-Pune weekend crowd.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/hero.jpg" alt="Vineyard countryside near Nashik" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Sula Vineyards:</strong> The pioneer of Indian wine tourism — vineyard tours, tastings, and a restaurant overlooking the vines. Book ahead on weekends.</li>
                    <li><strong>Other wineries:</strong> York, Soma, and Vallonné round out Nashik's wine belt, each with their own tasting rooms and views.</li>
                    <li><strong>Panchavati & Ramkund:</strong> The mythologically significant riverside area linked to the Ramayana, including Sita Gufa and Kalaram Temple, and Ramkund — the ghat where Kumbh Mela rituals are held.</li>
                    <li><strong>Trimbakeshwar Temple:</strong> One of the 12 Jyotirlingas, about 28 km from the city at Brahmagiri hill, traditionally regarded as the source of the Godavari River.</li>
                    <li><strong>Pandavleni Caves:</strong> A set of 2nd-century-BCE Buddhist rock-cut caves on the city's outskirts, quieter and less crowded than the temple circuit.</li>
                    <li><strong>Anjneri Hill:</strong> Believed locally to be Hanuman's birthplace, and a popular short trekking spot near Trimbakeshwar.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Nashik</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹900–₹2,200/night", picks: ["Hotels near Nashik Road station", "Budget stays around College Road", "Dharamshala-style options near Panchavati"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹2,500–₹6,000/night", picks: ["Business hotels near Gangapur Road", "Boutique stays near the vineyard belt", "Chain hotels close to the airport"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹15,000+/night", picks: ["Vineyard-view resorts near Sula", "Premium hotels on Mumbai-Agra Road", "Wellness resorts on the city outskirts"] },
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
                  <blockquote>
                    Staying near Gangapur Road puts you closest to the
                    vineyard belt without straying too far from the city's
                    temple and ghat side.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Nashik</h2>
                  <ul>
                    <li><strong>Misal Pav:</strong> A spicy sprouted-lentil curry topped with farsan and served with pav — a Maharashtra staple done particularly well in Nashik's local eateries.</li>
                    <li><strong>Vineyard restaurant menus:</strong> Sula's in-house restaurant and similar winery cafes serve continental and fusion food designed to pair with their wines.</li>
                    <li><strong>Prasad meals near Panchavati:</strong> Simple vegetarian thalis served near the temple complex, popular with pilgrims.</li>
                    <li><strong>Grapes, straight from the source:</strong> Nashik is one of India's largest grape-growing regions — roadside stalls near the vineyard belt sell fresh table grapes in season.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Nashik Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Temples & Godavari Ghats", color: "bg-amber-700", activities: ["Morning: Panchavati, Sita Gufa, Kalaram Temple", "Ramkund and the Godavari ghats", "Drive to Trimbakeshwar Temple (~28 km)", "Evening: return to the city for dinner"] },
                      { day: "Day 2", title: "Vineyards & Wine Tour", color: "bg-forest-600", activities: ["Morning: Sula Vineyards tour and tasting", "Lunch at a vineyard restaurant", "Afternoon: visit a second winery (York or Soma)", "Optional: short walk at Pandavleni Caves before departure"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div>
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
                          ["Accommodation/night", "₹1,000", "₹3,500", "₹9,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Local transport/day", "₹500", "₹1,500", "₹3,000"],
                          ["Vineyard tour & tasting", "₹800", "₹1,800", "₹4,000"],
                          ["Daily total", "₹1,800", "₹4,500", "₹9,500"],
                          ["2-Day trip total", "₹3,600", "₹9,000", "₹19,000"],
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
                    * Excludes travel to Nashik. Tasting fees vary by
                    winery and package — confirm current rates before you go.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Nashik</h2>
                  <ul>
                    <li><strong>Book vineyard slots ahead on weekends:</strong> Sula especially fills up fast with the Mumbai-Pune day-trip crowd.</li>
                    <li><strong>Dress modestly at temples:</strong> Trimbakeshwar and the Panchavati temples expect covered shoulders and knees.</li>
                    <li><strong>Watch for Kumbh Mela years:</strong> The city sees enormous crowds and traffic disruption during the Kumbh — plan around it or embrace it deliberately.</li>
                    <li><strong>Arrange a driver for the vineyard day:</strong> Tastings and driving obviously don't mix — hire a car with a driver for the winery circuit.</li>
                    <li><strong>Carry cash for local eateries:</strong> Card acceptance is inconsistent at smaller stalls near the ghats.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book Sula tastings ahead for weekends", "Visit both the temple side and the vineyard side", "Dress modestly at Trimbakeshwar and Panchavati", "Hire a driver for the winery-hopping day", "Time your trip for the Jan–Feb harvest season", "Try Misal Pav at a local eatery"].map((item) => (
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
                        {["Show up at Sula on a weekend without a booking", "Wear beachwear-casual clothing into the temples", "Plan a trip during Kumbh Mela without expecting crowds", "Try to self-drive between wineries after tastings", "Skip Panchavati thinking Nashik is only about wine"].map((item) => (
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
                {["Nashik", "Sula Vineyards", "Trimbakeshwar", "Maharashtra", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={NASHIK_GEAR} destination="Nashik" />

              <RelatedPostsGrid currentSlug="nashik-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nashik-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
