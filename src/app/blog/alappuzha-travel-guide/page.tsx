// src/app/blog/alappuzha-travel-guide/page.tsx
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
  title: "Alappuzha (Alleppey) Travel Guide: Houseboats & Backwaters",
  description:
    "The complete Alappuzha travel guide. Houseboat stays on the Kerala backwaters, Kuttanad's below-sea-level paddy fields, the Nehru Trophy Snake Boat Race, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Alappuzha travel guide, Alleppey backwaters, Alleppey houseboat, Kuttanad, Nehru Trophy Snake Boat Race, best time to visit Alleppey, how to reach Alappuzha, Kerala backwaters itinerary",
  openGraph: {
    title: "Alappuzha (Alleppey) Travel Guide: Houseboats & Backwaters",
    description: "The 'Venice of the East' — a maze of palm-lined backwater canals best explored overnight on a converted rice barge — the complete guide to Alappuzha.",
    url: "https://club.kudozz.in/blog/alappuzha-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/alleppey.jpg", width: 1200, height: 630, alt: "Kerala backwater canal lined with palms near Alappuzha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alappuzha (Alleppey) Travel Guide: Houseboats & Backwaters",
    description: "A maze of palm-lined backwater canals best explored overnight on a converted rice barge — the complete guide to Alappuzha.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/alappuzha-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Alappuzha (Alleppey) Travel Guide: Houseboats & Backwaters",
          description: "The complete Alappuzha travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/alappuzha-travel-guide" },
          about: { "@type": "Place", name: "Alappuzha", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Alappuzha Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Alappuzha?", a: "A standard one-night houseboat stay plus a day for the town and beach covers the essentials — two days total is a comfortable minimum, three if you want to add a canal canoe tour or slow down the pace." },
  { q: "What is the best time to visit Alappuzha?", a: "November to February is driest and most comfortable for houseboat stays. The monsoon (June–September) brings lush green paddy fields but choppier water and less predictable weather." },
  { q: "How do I reach Alappuzha?", a: "The nearest airport is Kochi (COK), about 55km away. Alappuzha has its own railway station, and it's well connected by road from Kochi in roughly 1.5 hours." },
  { q: "Is a houseboat stay worth the cost?", a: "For most travelers, yes — it's a genuinely distinctive experience and the standard one-night package includes meals, a private crew, and a slow cruise through the backwaters. Budget-conscious travelers can opt for a day canoe tour instead for a fraction of the cost." },
  { q: "Do houseboats operate for multiple nights?", a: "The standard package is a single overnight stay, not a multi-night cruise — most operators are set up around this format rather than longer trips." },
  { q: "What is the budget for a trip to Alappuzha?", a: "Houseboat cost is the major line item and varies hugely by boat class — a shared or budget boat can run ₹6,000-10,000 for one night, while premium boats run considerably more. Add roughly ₹1,000-2,000/day for food and local transport outside the houseboat package." },
  { q: "Is Alappuzha safe for solo travelers?", a: "Yes, generally — Alappuzha is a well-established part of Kerala's tourist circuit. Book houseboats through reputable operators, and treat the backwaters with the same water-safety caution as any boating trip." },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Alappuzha?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Alappuzha", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const ALAPPUZHA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for houseboat stays and canal-side exploring",
    emoji: "🛶",
    items: [
      { name: "Insect Repellent", description: "Backwater evenings bring mosquitoes — essential for a comfortable night aboard a houseboat.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Houseboat essential", tagColor: "bg-forest-100 text-forest-700", why: "Still water and paddy fields make the backwaters a mosquito-friendly environment, especially at dusk." },
      { name: "Light, Breathable Clothing", description: "Kerala's coastal humidity is high year-round — loose cotton clothing is far more comfortable than synthetic fabrics on a houseboat.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("breathable+cotton+travel+clothing"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Humidity on the backwaters can be intense, especially in the afternoon." },
      { name: "Sun Hat & Sunglasses", description: "Houseboat decks offer little shade for hours at a stretch — sun protection matters on a slow cruise.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Day-cruise essential", tagColor: "bg-amber-100 text-amber-700", why: "Most of a houseboat day is spent on an open deck with direct sun exposure." },
      { name: "Waterproof Phone Pouch", description: "Useful for canal canoe tours and any boat transfers where a dropped phone is a real risk.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "Boat-ride essential", tagColor: "bg-purple-100 text-purple-700", why: "Narrow canoe tours in particular carry a real risk of a phone ending up in the water." },
    ],
  },
];

export default function AlappuzhaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/alleppey.jpg" alt="Kerala backwater canal lined with palms near Alappuzha" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Alappuzha", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Alappuzha", "Alleppey", "Backwaters", "Houseboats", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Alappuzha (Alleppey) Travel Guide: Houseboats & Backwaters
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The "Venice of the East" — a maze of palm-lined backwater canals best explored overnight on a converted rice barge — everything you need to plan a trip to Alappuzha.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Alappuzha, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,000 words" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={m.d} /></svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24"><TableOfContents items={tableOfContents} /></div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Alappuzha?</h2>
                  <p>
                    <strong>Alappuzha</strong>, still widely known by its British-era name Alleppey, sits at the heart of Kerala's backwater country — a network of lagoons, canals, and rivers running behind the coastline, earning it the old colonial-era nickname "Venice of the East" for its canal-and-warehouse layout from the town's days as a coir-trade port. Today the defining experience is the <strong>houseboat</strong>: a converted kettuvallam rice barge that carries travelers on a slow, overnight cruise through the water.
                  </p>
                  <p>
                    Just inland lies Kuttanad, a genuinely unusual stretch of paddy farmland that sits below sea level — one of the few places in the world where farming happens beneath the level of the surrounding water, held back by an intricate system of bunds and canals.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛶</span> Alappuzha at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🛶", label: "Key Experience", value: "Overnight houseboat cruise" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kochi (COK)" },
                        { icon: "🌾", label: "Nearby", value: "Kuttanad below-sea-level farms" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹5,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Alappuzha</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, comfortable, and the most reliable conditions for a smooth houseboat stay." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot and humid", text: "Warmer and more humid, but still workable for a houseboat trip with fewer crowds." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — lush but choppier", text: "Paddy fields turn vivid green and the backwaters swell, but weather is less predictable for cruising." },
                      { season: "Aug", emoji: "🚣", color: "bg-purple-50 border-purple-200", mood: "Snake Boat Race season", text: "The Nehru Trophy Snake Boat Race on Punnamada Lake typically falls around this time — a major spectacle if your dates align." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February — the driest, calmest window for a houseboat stay on the backwaters.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Alappuzha</h2>
                  <ul>
                    <li><strong>By Air:</strong> Cochin International Airport (COK) is the nearest, about 55km away.</li>
                    <li><strong>By Train:</strong> Alappuzha has its own railway station with good connections across Kerala.</li>
                    <li><strong>By Road:</strong> Well connected from Kochi (~1.5 hours) and other major Kerala towns.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book houseboats directly with reputable operators or verified aggregators — the backwater houseboat market has a wide quality range, and a bit of research pays off.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Alappuzha</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/alleppey.jpg" alt="Houseboat cruising the Alappuzha backwaters" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Houseboat cruise:</strong> The signature Alappuzha experience — an overnight stay on a converted kettuvallam rice barge, with meals cooked aboard by a private crew.</li>
                    <li><strong>Kuttanad:</strong> Below-sea-level paddy farming country, a rare and unusual agricultural landscape best seen from the water.</li>
                    <li><strong>Alappuzha Beach:</strong> A long town beach with an old pier, good for an evening walk.</li>
                    <li><strong>Punnamada Lake:</strong> Host to the Nehru Trophy Snake Boat Race, a major annual event typically held around August.</li>
                    <li><strong>Village canal canoe tours:</strong> A quieter, more intimate alternative to a big houseboat, passing directly through backwater villages.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Alappuzha</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🛶", range: "₹6,000–₹10,000/night (houseboat)", picks: ["Shared/standard houseboats", "Budget town guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹10,000–₹20,000/night (houseboat)", picks: ["Well-rated private houseboats", "Boutique backwater resorts"] },
                      { tier: "Luxury", icon: "✨", range: "₹25,000+/night (houseboat)", picks: ["Premium multi-room houseboats", "High-end backwater resort stays"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Houseboat pricing varies hugely by boat class and season — always confirm exactly what's included (meals, AC, crew) before booking.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Alappuzha</h2>
                  <ul>
                    <li><strong>Houseboat-cooked meals:</strong> Most packages include fresh Kerala meals cooked aboard — karimeen (pearl spot fish) curry is a local specialty worth requesting.</li>
                    <li><strong>Appam and stew:</strong> A Kerala breakfast staple, soft rice-and-coconut pancakes with a mild coconut-milk curry.</li>
                    <li><strong>Sadya:</strong> A traditional vegetarian banana-leaf feast, best sought out during festival season if your dates align.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Alappuzha Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Board & Cruise", color: "bg-amber-700", activities: ["Arrive, board houseboat by late morning", "Afternoon: slow cruise through Kuttanad backwaters", "Evening: sunset on deck, dinner aboard"] },
                      { day: "Day 2", title: "Disembark & Town", color: "bg-forest-600", activities: ["Morning: continue cruise, disembark by late morning", "Afternoon: Alappuzha Beach and town", "Evening: departure"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">{d.activities.map((a) => (<li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>))}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Houseboat (1 night, meals incl.)", "₹8,000", "₹15,000", "₹28,000"],
                          ["Local transport per day", "₹300", "₹800", "₹2,000"],
                          ["Extras (canoe tour, snacks)", "₹500", "₹1,200", "₹2,500"],
                          ["2-Day trip total (approx.)", "₹8,800", "₹17,000", "₹32,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Houseboat cost is the dominant line item and varies significantly by operator and boat class.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Alappuzha</h2>
                  <ul>
                    <li><strong>Book reputable houseboat operators:</strong> Check reviews and confirm inclusions (meals, AC, crew) before paying.</li>
                    <li><strong>Standard stays are one night:</strong> Multi-night houseboat cruises aren't the typical package — plan accordingly.</li>
                    <li><strong>Carry insect repellent:</strong> Evenings on the water bring mosquitoes.</li>
                    <li><strong>Try a canoe tour for a budget alternative:</strong> A cheaper, more intimate way to see the backwaters if a full houseboat isn't in budget.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a reputable houseboat operator with verified reviews", "Try karimeen curry on your houseboat menu", "Time a visit for the Snake Boat Race if dates align", "Consider a canoe tour as a budget alternative", "Carry insect repellent for evenings on the water"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book the cheapest unrated houseboat you find online", "Expect multi-night cruises as the standard package", "Skip confirming meal/AC inclusions before paying", "Visit expecting calm water during peak monsoon", "Ignore basic boating safety on canoe tours"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Alappuzha", "Alleppey", "Backwaters", "Houseboats", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={ALAPPUZHA_GEAR} destination="Alappuzha" />
              <RelatedPostsGrid currentSlug="alappuzha-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="alappuzha-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
