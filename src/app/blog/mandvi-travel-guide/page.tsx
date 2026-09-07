// src/app/blog/mandvi-travel-guide/page.tsx
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
  title: "Mandvi Travel Guide: Beach, Shipbuilding Yards & Vijay Vilas Palace",
  description:
    "The complete Mandvi travel guide. Wooden shipbuilding yards, Mandvi Beach, Vijay Vilas Palace, where to stay, best time to visit, and a full itinerary through Kutch's historic port town.",
  keywords:
    "Mandvi travel guide, Mandvi shipbuilding yard, Mandvi Beach, Vijay Vilas Palace, best time to visit Mandvi, how to reach Mandvi, Kutch Gujarat travel, Mandvi Kutch itinerary",
  openGraph: {
    title: "Mandvi Travel Guide: Beach, Shipbuilding Yards & Vijay Vilas Palace",
    description: "A Kutch coastal town where wooden cargo ships are still built by hand on the beach, beside a Rajasthani-style seaside palace — the complete guide to Mandvi.",
    url: "https://club.kudozz.in/blog/mandvi-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/goa/beach.jpg", width: 1200, height: 630, alt: "Coastal beach scenery representative of Mandvi, Gujarat" }],
  },
  twitter: { card: "summary_large_image", title: "Mandvi Travel Guide: Beach, Shipbuilding Yards & Vijay Vilas Palace", description: "Wooden shipbuilding yards and a seaside Rajasthani palace — the complete guide to Mandvi.", images: ["/images/destinations/goa/beach.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/mandvi-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Mandvi Travel Guide: Beach, Shipbuilding Yards & Vijay Vilas Palace",
      description: "The complete Mandvi travel guide.",
      image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/mandvi-travel-guide" },
      about: { "@type": "Place", name: "Mandvi", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Mandvi Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Mandvi?", a: "One to two days covers the shipbuilding yards, beach, and Vijay Vilas Palace comfortably. Most travelers combine it with a broader Kutch trip covering Bhuj, the Rann of Kutch, and Dholavira." },
  { q: "What is the best time to visit Mandvi?", a: "October to March offers the most comfortable weather. Summers get very hot, and the coastal humidity can be uncomfortable outside the cooler months." },
  { q: "How do I reach Mandvi?", a: "The nearest airport is Bhuj, about 60km away. There's no direct rail connection to Mandvi — road access from Bhuj is the standard route." },
  { q: "Can I watch ships actually being built at the shipbuilding yards?", a: "Yes — the yards are working sites, not a museum display, and visitors can watch craftsmen build large wooden cargo vessels using traditional techniques. Morning visits generally show the most active work." },
  { q: "Is Vijay Vilas Palace open to visitors?", a: "Yes, it's generally open for visitors with an entry ticket, and parts of its grounds have been used as filming locations for several Bollywood productions — verify current opening hours before visiting." },
  { q: "What is the budget for a trip to Mandvi?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,800 a day. A 2-day trip totals roughly ₹3,000 on a budget and ₹7,600 mid-range." },
  { q: "Should I combine Mandvi with other Kutch destinations?", a: "Yes — Mandvi works best as part of a larger Kutch loop including Bhuj, the Rann of Kutch, and Dholavira, since it's a relatively compact stop on its own." },
];

function FAQSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    })}} />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Mandvi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mandvi", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MANDVI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the beach, palace, and shipyards", emoji: "⛵",
  items: [
    { name: "Sun Hat & Sunglasses", description: "Coastal Kutch sun is intense, especially around the exposed beach and shipyard areas.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "There's little shade around the shipyards and beach, and afternoons get intense." },
    { name: "Reef-Safe Sunscreen", description: "Strong sun protection for beach time and outdoor sightseeing.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-sky-100 text-sky-700", why: "Sunburn is a common regret for travelers underestimating Kutch coastal sun." },
    { name: "Comfortable Walking Shoes", description: "For exploring the shipyards, palace grounds, and beach walks.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "A full day covering the shipyards and palace grounds adds up in walking distance." },
    { name: "Camera", description: "The shipbuilding yards and Vijay Vilas Palace are both genuinely photogenic.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "Few places in India let you photograph a working traditional shipyard up close." },
  ],
}];

export default function MandviGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/goa/beach.jpg" alt="Coastal beach scenery representative of Mandvi, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Mandvi", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mandvi", "Kutch Coast", "Beaches", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Mandvi Travel Guide: Beach, Shipbuilding Yards & Vijay Vilas Palace
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A Kutch coastal town where wooden cargo ships are still built by hand on the beach, beside a Rajasthani-style seaside palace.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Mandvi, Gujarat" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={m.d} /></svg>{m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0"><div className="sticky top-24"><TableOfContents items={tableOfContents} /></div></div>
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Mandvi?</h2>
                  <p>
                    <strong>Mandvi</strong> is a historic port town on the Kutch coast, and its most distinctive draw is a genuinely rare living craft: at the town's <strong>shipbuilding yards</strong>, artisans still build large wooden cargo ships (dhows) by hand, using techniques passed down through generations — a working industry you can watch from the shore, not a staged demonstration.
                  </p>
                  <p>
                    Just outside town, <strong>Vijay Vilas Palace</strong> — a Rajasthani-style seaside palace built for the Kutch royal family in the early 20th century — adds a second, very different kind of attraction, while Mandvi's clean, relatively uncrowded beach rounds out a quiet, easygoing stop on a broader Kutch itinerary.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>⛵</span> Mandvi at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "⛵", label: "Known For", value: "Traditional wooden shipbuilding" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bhuj (~60km)" },
                        { icon: "🏰", label: "Landmark", value: "Vijay Vilas Palace" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Mandvi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for beach time, the shipyards, and general sightseeing." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Coastal heat and humidity build significantly, making midday sightseeing tiring." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Rain and humidity make this the least comfortable window for a coastal visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February for the most comfortable combination of beach weather and sightseeing conditions.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mandvi</h2>
                  <ul>
                    <li><strong>By Air:</strong> Bhuj is the nearest airport, about 60km away.</li>
                    <li><strong>By Road:</strong> The standard and only practical approach — road access from Bhuj is straightforward.</li>
                    <li><strong>By Train:</strong> No direct rail connection to Mandvi itself; Bhuj is the nearest railhead.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Mandvi with Bhuj, the Rann of Kutch, and Dholavira as part of a single Kutch loop rather than a standalone trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Mandvi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/goa/beach.jpg" alt="Coastal scenery around Mandvi" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Shipbuilding yards:</strong> Watch traditional wooden cargo ships being built by hand — a genuinely rare, living craft tradition, best seen in the morning when work is most active.</li>
                    <li><strong>Mandvi Beach:</strong> A relatively clean, uncrowded stretch of Kutch coastline, good for a relaxed visit.</li>
                    <li><strong>Vijay Vilas Palace:</strong> A Rajasthani-style seaside palace with notable architecture, used as a filming location for several Bollywood productions.</li>
                    <li><strong>Old port town walks:</strong> Mandvi's historic role in maritime trade with East Africa and the Arabian Gulf is still visible in its old town layout.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Mandvi</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in Mandvi town", "Basic beach-adjacent stays"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Beach resorts near Mandvi", "Heritage-style mid-range hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium beachfront resorts", "Palace-adjacent luxury stays"] },
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
                  <h2>What to Eat in Mandvi</h2>
                  <ul>
                    <li><strong>Gujarati thalis:</strong> Sweet-savory-spiced vegetarian thalis widely available across Kutch.</li>
                    <li><strong>Kutchi dabeli and snacks:</strong> Regional street food specialties worth trying in the old town.</li>
                    <li><strong>Fresh seafood:</strong> Given Mandvi's coastal, port-town character, seafood options are available alongside the region's vegetarian staples.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Mandvi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Shipyards & Beach", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: shipbuilding yards", "Afternoon/evening: Mandvi Beach"] },
                      { day: "Day 2", title: "Vijay Vilas Palace & Departure", color: "bg-forest-600", activities: ["Morning: Vijay Vilas Palace", "Late morning: old town walk", "Afternoon: departure or onward to Bhuj"] },
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
                          ["Accommodation/night", "₹900", "₹2,800", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport per day", "₹250", "₹600", "₹1,500"],
                          ["Daily total", "₹1,500", "₹3,800", "₹10,000"],
                          ["2-Day trip total", "₹3,000", "₹7,600", "₹20,000"],
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
                  <h2>Essential Travel Tips for Mandvi</h2>
                  <ul>
                    <li><strong>Visit the shipyards in the morning:</strong> Work is generally most active earlier in the day.</li>
                    <li><strong>Combine with a broader Kutch trip:</strong> Mandvi is compact enough to pair well with Bhuj, the Rann of Kutch, and Dholavira.</li>
                    <li><strong>Check Vijay Vilas Palace opening hours:</strong> Verify current timings before your visit.</li>
                    <li><strong>Carry sun protection:</strong> Coastal Kutch sun is intense with little shade around the shipyards.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the shipyards in the morning for active work", "Combine with a broader Kutch itinerary", "Check current Vijay Vilas Palace hours", "Carry sun protection for the beach and shipyards", "Try local Kutchi and Gujarati food"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the shipyards expecting a staged demonstration — this is a working industry", "Skip sun protection given the exposed coastal terrain", "Treat Mandvi as a standalone multi-day destination — it's compact", "Assume direct rail access — road from Bhuj is the only route", "Visit in peak monsoon expecting comfortable weather"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Mandvi", "Kutch Coast", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MANDVI_GEAR} destination="Mandvi" />
              <RelatedPostsGrid currentSlug="mandvi-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="mandvi-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
