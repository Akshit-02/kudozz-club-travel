// src/app/blog/mangaluru-travel-guide/page.tsx
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
  title: "Mangaluru Travel Guide: Beaches, Temples & Coastal Cuisine",
  description:
    "The complete Mangaluru travel guide. Panambur Beach, Kadri Manjunath Temple, St. Aloysius Chapel, Mangalorean seafood, where to stay, best time to visit, and a full itinerary through Karnataka's main port city.",
  keywords:
    "Mangaluru travel guide, Mangalore, Panambur Beach, Kadri Manjunath Temple, St Aloysius Chapel, Mangalorean cuisine, best time to visit Mangaluru, how to reach Mangaluru, Karnataka coast",
  openGraph: {
    title: "Mangaluru Travel Guide: Beaches, Temples & Coastal Cuisine",
    description: "A port city where fiery Mangalorean seafood curries meet centuries-old temples and Arabian Sea beaches — the complete guide to Mangaluru.",
    url: "https://club.kudozz.in/blog/mangaluru-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/goa/hero.jpg", width: 1200, height: 630, alt: "Arabian Sea coastline representative of Mangaluru, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mangaluru Travel Guide: Beaches, Temples & Coastal Cuisine",
    description: "Fiery Mangalorean seafood curries, centuries-old temples, and Arabian Sea beaches — the complete guide to Mangaluru.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/mangaluru-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Mangaluru Travel Guide: Beaches, Temples & Coastal Cuisine",
          description: "The complete Mangaluru travel guide.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/mangaluru-travel-guide" },
          about: { "@type": "Place", name: "Mangaluru", address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Mangaluru Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Mangaluru?", a: "Two days covers the main temples, beaches, and a proper sampling of the local cuisine. Add a day if you want to combine it with a short trip to Udupi." },
  { q: "What is the best time to visit Mangaluru?", a: "October to March is driest and most comfortable. The monsoon (June–September) is heavy along this stretch of coast and less suited to a beach-focused trip." },
  { q: "How do I reach Mangaluru?", a: "Mangaluru International Airport (IXE) has good domestic connectivity. The city is also a major stop on the Konkan Railway line and well connected by road via NH66." },
  { q: "What makes Mangalorean food distinct?", a: "It's a coastal cuisine shaped by Konkani, Tulu, and Malabar influences — expect fiery fish curries, neer dosa (thin rice crepes), and kori rotti (chicken curry with crisp rice wafers), genuinely different from cuisine further up or down the coast." },
  { q: "Is Mangaluru good for a beach holiday?", a: "It has decent city beaches like Panambur and Tannirbhavi, but it's better thought of as a city trip with good beach time rather than a dedicated beach resort destination like Goa or Gokarna." },
  { q: "What is the budget for a trip to Mangaluru?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,800 a day. A 2-day trip totals roughly ₹3,000 on a budget and ₹7,600 mid-range, excluding transport to the region." },
  { q: "Can I combine Mangaluru with Udupi or Chikmagalur?", a: "Yes — Udupi is a short drive north (~60km) and makes an easy add-on, while Chikmagalur's coffee hills are a natural inland extension for a longer Karnataka coastal-and-hills trip." },
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
  { id: "introduction", title: "Why Mangaluru?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mangaluru", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MANGALURU_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for beach days, temple visits, and coastal humidity",
    emoji: "🌊",
    items: [
      { name: "Light, Breathable Clothing", description: "Coastal Karnataka's humidity is intense year-round — loose cotton clothing beats synthetics by a wide margin.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("breathable+cotton+travel+clothing"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Mangaluru's coastal humidity makes lightweight, breathable fabric a genuine comfort upgrade." },
      { name: "Reef-Safe Sunscreen", description: "For beach time at Panambur and Tannirbhavi.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "Coastal sun exposure adds up quickly across a full beach day." },
      { name: "Modest Clothing for Temples", description: "Kadri Manjunath and Mangaladevi temples expect covered shoulders and knees.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "🙏", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Several of the city's key sights are active places of worship with expected dress standards." },
      { name: "Comfortable Walking Shoes", description: "For exploring the temple district, St. Aloysius Chapel, and the beachfront promenades.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "A day covering temples, beaches, and the old town adds up to a fair amount of walking." },
    ],
  },
];

export default function MangaluruGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/goa/hero.jpg" alt="Arabian Sea coastline representative of Mangaluru, Karnataka" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Mangaluru", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mangaluru", "Coastal Cuisine", "Beaches", "Karnataka"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Mangaluru Travel Guide: Beaches, Temples & Coastal Cuisine
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A port city where fiery Mangalorean seafood curries meet centuries-old temples and Arabian Sea beaches — everything you need to plan a trip to Mangaluru.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Mangaluru, Karnataka" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Mangaluru?</h2>
                  <p>
                    <strong>Mangaluru</strong> (Mangalore) is Karnataka's main port city, a historic trade hub on the Arabian Sea with a cuisine, culture, and religious landscape shaped by centuries of coastal exchange. It's often overshadowed by Goa and Gokarna further north, but it holds its own — genuinely distinct Mangalorean food, ancient temples, colonial-era churches, and a workaday coastal-city energy that feels different from a purpose-built beach town.
                  </p>
                  <p>
                    It also functions as a natural gateway: north to Udupi's coast, and inland to the coffee hills of Chikmagalur and Coorg — making it a practical base for a longer Karnataka trip as much as a destination in its own right.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌊</span> Mangaluru at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🍽️", label: "Known For", value: "Mangalorean coastal cuisine" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Mangaluru (IXE)" },
                        { icon: "🏖️", label: "Main Beach", value: "Panambur Beach" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Mangaluru</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, comfortable weather, ideal for beaches, temples, and city walking." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot and humid", text: "Coastal humidity climbs — still workable but noticeably less comfortable for extended outdoor time." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Heavy monsoon", text: "This stretch of coast sees genuinely heavy rain — not the season for a beach-focused trip." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — dry, comfortable, and the best window for both the beaches and city sightseeing.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mangaluru</h2>
                  <ul>
                    <li><strong>By Air:</strong> Mangaluru International Airport (IXE) has good domestic connectivity.</li>
                    <li><strong>By Train:</strong> Mangaluru is a major stop on the Konkan Railway line, well connected to Goa, Mumbai, and Kerala.</li>
                    <li><strong>By Road:</strong> Well connected via NH66, the main coastal highway.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Mangaluru's Konkan Railway connection makes it an easy add-on to a Goa or Gokarna trip further up the coast.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Mangaluru</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/goa/hero.jpg" alt="Coastal scenery representative of Mangaluru" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Panambur Beach:</strong> Mangaluru's most popular city beach, good for a sunset walk.</li>
                    <li><strong>Tannirbhavi Beach:</strong> A quieter alternative beach across the estuary.</li>
                    <li><strong>Kadri Manjunath Temple:</strong> An ancient Shiva temple with a notable bronze Lokeshvara statue.</li>
                    <li><strong>Mangaladevi Temple:</strong> The temple after which the city is named.</li>
                    <li><strong>St. Aloysius Chapel:</strong> Known for elaborate ceiling and wall frescoes painted by an Italian Jesuit artist.</li>
                    <li><strong>Sultan Battery:</strong> A small coastal watchtower built during Tipu Sultan's era.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Mangaluru</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,000/night", picks: ["Budget hotels near the city centre", "Guesthouses near Panambur"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Mid-range business hotels", "Beach-adjacent hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,500–₹12,000+/night", picks: ["Premium city hotels", "Upscale resort-style stays"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Mangaluru</h2>
                  <ul>
                    <li><strong>Mangalorean fish curry:</strong> A fiery, coconut-based curry that defines the city's cuisine.</li>
                    <li><strong>Neer dosa:</strong> Thin, delicate rice crepes, a coastal Karnataka staple.</li>
                    <li><strong>Kori rotti:</strong> Chicken curry served with crisp rice wafers, a genuine local specialty.</li>
                    <li><strong>Mangalorean buns and filter coffee:</strong> A classic breakfast pairing found across the city's udupi-style eateries.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Mangaluru Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Temples & Old Town", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Kadri Manjunath Temple, Mangaladevi Temple", "Afternoon: St. Aloysius Chapel, old town walk", "Evening: dinner featuring Mangalorean seafood"] },
                      { day: "Day 2", title: "Beaches & Coast", color: "bg-forest-600", activities: ["Morning: Panambur Beach", "Afternoon: Tannirbhavi Beach or Sultan Battery", "Evening: departure or onward to Udupi"] },
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
                          ["Accommodation/night", "₹900", "₹3,000", "₹8,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹200", "₹500", "₹1,200"],
                          ["Daily total", "₹1,500", "₹3,800", "₹10,500"],
                          ["2-Day trip total", "₹3,000", "₹7,600", "₹21,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Mangaluru</h2>
                  <ul>
                    <li><strong>Don't skip the food:</strong> Mangalorean cuisine is genuinely one of India's most distinct coastal cuisines — seek it out beyond hotel restaurants.</li>
                    <li><strong>Combine with Udupi:</strong> A short drive north for temple and beach add-ons.</li>
                    <li><strong>Check sea conditions before swimming:</strong> As with most of the Karnataka coast, currents can be stronger than they look.</li>
                    <li><strong>Dress modestly at temples:</strong> Covered shoulders and knees expected.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Seek out genuine Mangalorean seafood", "Visit Kadri Manjunath and Mangaladevi temples", "Combine with Udupi for a coastal loop", "Check sea safety before swimming", "Dress modestly at temples"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a Goa-style beach resort experience", "Skip trying kori rotti or neer dosa", "Swim past the shallows without checking currents", "Visit expecting calm seas during peak monsoon", "Wear beachwear into temple premises"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Mangaluru", "Coastal Cuisine", "Beaches", "Karnataka", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MANGALURU_GEAR} destination="Mangaluru" />
              <RelatedPostsGrid currentSlug="mangaluru-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="mangaluru-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
