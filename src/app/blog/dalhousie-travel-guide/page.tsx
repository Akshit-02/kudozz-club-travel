// src/app/blog/dalhousie-travel-guide/page.tsx
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
  title: "Dalhousie Travel Guide: Colonial Charm & Khajjiar Gateway",
  description:
    "The complete Dalhousie travel guide. Colonial-era churches, Subhash Baoli, Dainkund Peak, the Khajjiar gateway, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Dalhousie travel guide, Dalhousie Khajjiar, Subhash Baoli, Dainkund Peak, best time to visit Dalhousie, how to reach Dalhousie, Himachal Pradesh colonial hill station",
  openGraph: {
    title: "Dalhousie Travel Guide: Colonial Charm & Khajjiar Gateway",
    description: "A quiet colonial-era hill town spread across five hills, and the gateway to a meadow nicknamed 'Mini Switzerland' — the complete guide to Dalhousie.",
    url: "https://club.kudozz.in/blog/dalhousie-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty hill-station scenery representative of Dalhousie, Himachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Dalhousie Travel Guide: Colonial Charm & Khajjiar Gateway", description: "A quiet colonial-era hill town and the gateway to Khajjiar — the complete guide to Dalhousie.", images: ["/images/destinations/coorg/coorg.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/dalhousie-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Dalhousie Travel Guide: Colonial Charm & Khajjiar Gateway",
      description: "The complete Dalhousie travel guide.",
      image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dalhousie-travel-guide" },
      about: { "@type": "Place", name: "Dalhousie", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Dalhousie Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Dalhousie?", a: "Two days covers Dalhousie's own sights (Subhash Baoli, the churches, Dainkund Peak) plus a day trip to Khajjiar comfortably." },
  { q: "What is the best time to visit Dalhousie?", a: "March–June and September–November offer the clearest weather and most pleasant temperatures. December–February brings snow, a popular draw for winter visitors." },
  { q: "How do I reach Dalhousie?", a: "Pathankot (~80km) is the most practical arrival point, with strong rail and road links from Delhi and Punjab. Kangra/Gaggal Airport is farther at roughly 130km." },
  { q: "Is Dalhousie less crowded than Shimla or Manali?", a: "Yes — Dalhousie has stayed noticeably quieter and less commercially developed than Himachal's bigger-name hill stations, which is a large part of its appeal." },
  { q: "How far is Khajjiar from Dalhousie?", a: "About 22km, roughly 45 minutes to an hour by road — an easy half-day trip that most visitors combine directly with a Dalhousie stay." },
  { q: "What is the budget for a trip to Dalhousie?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹4,000 a day. A 2-day trip totals roughly ₹3,200 on a budget and ₹8,000 mid-range." },
  { q: "Is Dalhousie good for a family trip?", a: "Yes — its gentle walking routes, colonial architecture, and quiet pace make it well suited to families and travelers wanting a relaxed hill-station experience." },
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
  { id: "introduction", title: "Why Dalhousie?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dalhousie", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DALHOUSIE_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for hill walks and cool evenings", emoji: "⛪",
  items: [
    { name: "Warm Layers", description: "Even summer evenings in Dalhousie are cool given its elevation — pack accordingly.", price: "₹1,999", rating: 4.4, reviews: "4.8k", image: "🧥", affiliateUrl: amazonSearchUrl("warm+jacket+hill+station+travel"), tag: "Evening essential", tagColor: "bg-sky-100 text-sky-700", why: "Temperature drops noticeably after sunset year-round here." },
    { name: "Comfortable Walking Shoes", description: "Dalhousie's five-hills layout means genuine uphill and downhill walking between sights.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "The town's hilly street layout adds up over a day of sightseeing." },
    { name: "Light Rain Layer", description: "Useful for sudden showers, especially in shoulder-monsoon months.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-purple-100 text-purple-700", why: "Weather can shift quickly in this hill region." },
    { name: "Camera", description: "For the colonial architecture, church interiors, and Dainkund Peak's panoramic views.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "Dalhousie's colonial-era buildings and viewpoints are genuinely photogenic." },
  ],
}];

export default function DalhousieGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Misty hill-station scenery representative of Dalhousie, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dalhousie", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dalhousie", "Khajjiar", "Destination Guide", "Himachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dalhousie Travel Guide: Colonial Charm & Khajjiar Gateway
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A quiet colonial-era hill town spread across five hills, and the gateway to a meadow nicknamed "Mini Switzerland."
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dalhousie, Himachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Dalhousie?</h2>
                  <p>
                    <strong>Dalhousie</strong>, named after a British Governor-General, is a colonial-era hill station spread across and named for five hills. It has kept a genuinely quieter, less commercial character than Shimla or Manali — narrow lanes lined with colonial-era churches and bungalows, and a slower pace that suits travelers who'd rather stroll than shop.
                  </p>
                  <p>
                    It's also the practical gateway to <strong>Khajjiar</strong>, a saucer-shaped meadow about 22km away — most visitors combine the two into a single trip.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>⛪</span> Dalhousie at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "⛪", label: "Character", value: "Colonial-era hill station" },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        { icon: "✈️", label: "Nearest Access", value: "Pathankot (~80km)" },
                        { icon: "🌄", label: "Nearby", value: "Khajjiar (~22km)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dalhousie</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Pleasant and clear", text: "Comfortable temperatures and good visibility before monsoon arrives." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Best overall — our pick", text: "Post-monsoon clarity and crisp air, ideal for walking and viewpoint visits." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain and reduced visibility — not the best window for sightseeing." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Snow season", text: "A popular draw for winter visitors, though roads can be affected by heavy snowfall." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to November — clear skies and comfortable temperatures for walking Dalhousie's hilly lanes.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dalhousie</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kangra/Gaggal Airport, about 130km away.</li>
                    <li><strong>By Train:</strong> Pathankot, roughly 80km away, is the nearest well-connected railway station.</li>
                    <li><strong>By Road:</strong> Pathankot is the standard arrival point for the onward drive to Dalhousie.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a car in Pathankot rather than relying on limited shared transport if you also want to visit Khajjiar and Chamba in the same trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Dalhousie</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Hill-station scenery around Dalhousie" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Subhash Baoli:</strong> A spring/viewpoint associated with Subhas Chandra Bose's convalescent stay here.</li>
                    <li><strong>St. John's and St. Francis Churches:</strong> Colonial-era churches and notable local landmarks.</li>
                    <li><strong>Dainkund Peak:</strong> Dalhousie's highest point, reachable via a short trek, with panoramic views.</li>
                    <li><strong>Panchpula:</strong> A small waterfall and memorial site, a pleasant short walk.</li>
                    <li><strong>Khajjiar day trip:</strong> The saucer-shaped meadow nicknamed "Mini Switzerland," ~22km away.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Dalhousie</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near Gandhi Chowk", "Budget hotels along the mall"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Colonial-style mid-range hotels", "Hillside cottage stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹15,000+/night", picks: ["Heritage colonial properties", "Premium mountain-view resorts"] },
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
                  <h2>What to Eat in Dalhousie</h2>
                  <ul>
                    <li><strong>Himachali dham:</strong> A traditional festive vegetarian thali, worth seeking out at local restaurants.</li>
                    <li><strong>Trout dishes:</strong> Freshwater trout, a regional specialty in Himachal's cooler valleys.</li>
                    <li><strong>North Indian and Tibetan menus:</strong> The standard mix at most hill-town restaurants.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Dalhousie Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Dalhousie Town", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Subhash Baoli and the colonial churches", "Evening: Panchpula walk"] },
                      { day: "Day 2", title: "Dainkund Peak & Khajjiar", color: "bg-forest-600", activities: ["Morning: Dainkund Peak trek/viewpoint", "Afternoon: day trip to Khajjiar", "Evening: return, departure prep"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹9,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹200", "₹700", "₹1,500"],
                          ["Daily total", "₹1,600", "₹4,000", "₹10,500"],
                          ["2-Day trip total", "₹3,200", "₹8,000", "₹21,000"],
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
                  <h2>Essential Travel Tips for Dalhousie</h2>
                  <ul>
                    <li><strong>Combine with Khajjiar:</strong> The two are a natural pairing given the short distance.</li>
                    <li><strong>Pack warm layers:</strong> Even summer evenings are cool given the elevation.</li>
                    <li><strong>Enjoy the slower pace:</strong> Dalhousie rewards unhurried walking over a packed checklist.</li>
                    <li><strong>Check winter road conditions:</strong> Heavy snow can affect access Dec–Feb.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Combine with a Khajjiar day trip", "Walk Dalhousie's colonial-era lanes at a relaxed pace", "Pack warm layers for cool evenings", "Visit Dainkund Peak for the best views", "Check winter road conditions before a Dec–Feb trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect Shimla/Manali-level infrastructure or nightlife", "Skip warm layers assuming a mild summer evening", "Visit in Dec–Feb without checking road/snow conditions", "Rush through in half a day — the town rewards a slower pace", "Skip Khajjiar if you have the extra half-day"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dalhousie", "Khajjiar", "Himachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DALHOUSIE_GEAR} destination="Dalhousie" />
              <RelatedPostsGrid currentSlug="dalhousie-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="dalhousie-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
