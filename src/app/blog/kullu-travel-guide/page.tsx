// src/app/blog/kullu-travel-guide/page.tsx
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
  title: "Kullu Travel Guide: Valley of Gods & International Dussehra",
  description:
    "The complete Kullu travel guide. Raghunath Temple, Bijli Mahadev, the International Kullu Dussehra, Kullu shawls, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Kullu travel guide, Kullu Dussehra, Raghunath Temple, Bijli Mahadev Temple, Kullu shawls, best time to visit Kullu, how to reach Kullu, Valley of Gods Himachal",
  openGraph: {
    title: "Kullu Travel Guide: Valley of Gods & International Dussehra",
    description: "The 'Valley of Gods', where a week-long Dussehra festival gathers hundreds of local deities in procession — the complete guide to Kullu.",
    url: "https://club.kudozz.in/blog/kullu-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/hadimba-temple.jpg", width: 1200, height: 630, alt: "Himalayan valley temple scenery representative of Kullu, Himachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Kullu Travel Guide: Valley of Gods & International Dussehra", description: "The Valley of Gods and its famous Dussehra festival — the complete guide to Kullu.", images: ["/images/destinations/manali/hadimba-temple.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/kullu-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Kullu Travel Guide: Valley of Gods & International Dussehra",
      description: "The complete Kullu travel guide.",
      image: "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kullu-travel-guide" },
      about: { "@type": "Place", name: "Kullu", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Kullu Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Kullu?", a: "One to two days covers Kullu town's main sights. Most travelers combine it with Manali (~40km away) rather than treating it as a standalone multi-day destination." },
  { q: "What is the best time to visit Kullu?", a: "March–June and September–November offer the most pleasant weather. October is worth timing specifically if the International Kullu Dussehra interests you — verify current-year dates." },
  { q: "How do I reach Kullu?", a: "Kullu-Manali Airport (Bhuntar, KUU) is the nearest airport. There's no direct broad-gauge rail — road via NH3/NH5 is the standard approach." },
  { q: "What is the Kullu Dussehra festival?", a: "A distinctive week-long festival, different from Dussehra celebrations elsewhere in India, where hundreds of local village deities are ceremonially carried in procession to Kullu town — a major cultural spectacle, though it draws very heavy crowds." },
  { q: "Is Bijli Mahadev worth the trek?", a: "Yes, for the views alone — it's a moderate trek or road-plus-short-walk to a hilltop temple with a distinctive tall staff believed to attract lightning, and panoramic valley views." },
  { q: "What is the budget for a trip to Kullu?", a: "A budget traveler can manage on roughly ₹1,400 a day, a mid-range trip closer to ₹3,800 a day. Costs rise significantly during Dussehra week given the crowds." },
  { q: "Should I stay in Kullu or Manali?", a: "Most travelers base themselves in Manali given its larger range of stays and activities, treating Kullu as a day trip or a brief stop en route — Kullu functions more as a practical hub and cultural stop than a standalone base." },
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
  { id: "introduction", title: "Why Kullu?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kullu", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KULLU_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for temple visits and the Bijli Mahadev walk", emoji: "🛕",
  items: [
    { name: "Comfortable Walking/Trekking Shoes", description: "For the walk/climb to Bijli Mahadev Temple and general valley exploring.", price: "₹2,499", rating: 4.4, reviews: "5.6k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+moderate+hike"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "The Bijli Mahadev approach involves genuine elevation gain on uneven paths." },
    { name: "Warm Layers", description: "Evenings in the valley cool down quickly, especially outside peak summer.", price: "₹1,999", rating: 4.4, reviews: "4.8k", image: "🧥", affiliateUrl: amazonSearchUrl("warm+jacket+hill+station"), tag: "Evening essential", tagColor: "bg-sky-100 text-sky-700", why: "Kullu Valley's elevation means noticeably cooler nights than the plains." },
    { name: "Modest Clothing", description: "For Raghunath Temple and other active religious sites in and around Kullu.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Kullu's temples are active worship sites, not just tourist stops." },
    { name: "Daypack", description: "For carrying water and layers across a day of temple-hopping and the Bijli Mahadev walk.", price: "₹899", rating: 4.4, reviews: "4.6k", image: "🎒", affiliateUrl: amazonSearchUrl("daypack+travel+trekking"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Useful for a full day covering temples plus the Bijli Mahadev trek." },
  ],
}];

export default function KulluGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/hadimba-temple.jpg" alt="Himalayan valley temple scenery representative of Kullu, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kullu", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kullu", "Dussehra", "Destination Guide", "Himachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kullu Travel Guide: Valley of Gods & International Dussehra
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The "Valley of Gods", where a week-long Dussehra festival gathers hundreds of local deities in procession.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kullu, Himachal Pradesh" },
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
                  <h2>Why Kullu?</h2>
                  <p>
                    <strong>Kullu Valley</strong> carries the nickname "Valley of Gods," and nowhere is that clearer than during the <strong>International Kullu Dussehra</strong> — a distinctive week-long festival where hundreds of local village deities are ceremonially carried in procession to Kullu town, a genuinely different celebration from Dussehra traditions elsewhere in India.
                  </p>
                  <p>
                    Beyond the festival, Kullu town functions as a practical hub — the district headquarters, home to Bijli Mahadev's dramatic hilltop temple, and a historic centre for woolen shawl weaving — more often visited as a day trip or stopover from nearby Manali than as a standalone base.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Kullu at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Raghunath Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bhuntar (KUU)" },
                        { icon: "🎊", label: "Signature Event", value: "International Kullu Dussehra" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kullu</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Pleasant weather", text: "Comfortable temperatures before summer heat and monsoon set in." },
                      { season: "Oct", emoji: "🎊", color: "bg-orange-50 border-orange-200", mood: "Dussehra season", text: "The International Kullu Dussehra typically falls in this window — expect very heavy crowds if timing your visit around it." },
                      { season: "Sept & Nov", emoji: "🍂", color: "bg-forest-50 border-forest-200", mood: "Best overall — our pick", text: "Clear skies and comfortable temperatures without the Dussehra crowds." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Cold, some snow", text: "Higher points see snow — a different, quieter kind of visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late September or November for pleasant weather without festival crowds, or October specifically if Dussehra is the draw — verify current-year dates.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kullu</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kullu-Manali Airport (Bhuntar, KUU) serves the valley directly.</li>
                    <li><strong>By Road:</strong> Well connected via NH3/NH5 — the standard approach given no direct broad-gauge rail access.</li>
                    <li><strong>From Manali:</strong> A short ~40km drive, making Kullu an easy add-on to a Manali trip.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If visiting during Dussehra, book accommodation well ahead — the town's limited stays fill up fast during festival week.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kullu</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/hadimba-temple.jpg" alt="Temple and valley scenery around Kullu" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Raghunath Temple:</strong> The valley's principal deity temple, central to the Dussehra festivities.</li>
                    <li><strong>Bijli Mahadev Temple:</strong> A hilltop temple across the valley, notable for a tall staff believed to attract lightning, reached via a moderate trek or road-plus-short-walk.</li>
                    <li><strong>International Kullu Dussehra:</strong> A major week-long procession of local deities, if your dates align.</li>
                    <li><strong>Kullu shawl shopping:</strong> The valley's historic woolen shawl and handicraft trade, worth a browse at established local shops.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kullu</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses in Kullu town", "Basic hotels near the bus stand"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["River-view mid-range hotels", "Valley resorts near Bhuntar"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium valley resorts (mostly toward Manali)"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most travelers base in Manali and treat Kullu as a day trip — a genuinely practical approach given Manali's larger range of stays.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Kullu</h2>
                  <ul>
                    <li><strong>Siddu:</strong> A traditional Himachali steamed bread, often served with ghee or lentils.</li>
                    <li><strong>Himachali dham:</strong> A festive vegetarian thali, especially common during Dussehra.</li>
                    <li><strong>Trout dishes:</strong> Freshwater trout from local rivers, a regional specialty.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kullu Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Town & Temples", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Raghunath Temple and old town", "Evening: shawl shopping"] },
                      { day: "Day 2", title: "Bijli Mahadev", color: "bg-forest-600", activities: ["Morning: drive/trek to Bijli Mahadev Temple", "Afternoon: valley views and return", "Departure or onward to Manali"] },
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
                          ["Accommodation/night", "₹800", "₹2,500", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport per day", "₹250", "₹500", "₹1,200"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Costs rise notably during Dussehra week.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kullu</h2>
                  <ul>
                    <li><strong>Book ahead for Dussehra:</strong> Verify current-year dates and expect heavy crowds and higher prices.</li>
                    <li><strong>Combine with Manali:</strong> Kullu works best as part of a broader valley trip.</li>
                    <li><strong>Wear proper footwear for Bijli Mahadev:</strong> The trail has real elevation gain.</li>
                    <li><strong>Buy shawls from established shops:</strong> For genuine Kullu-woven products.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Time your visit for Dussehra if the festival interests you", "Combine Kullu with a Manali stay", "Wear proper footwear for the Bijli Mahadev walk", "Buy shawls from established local shops", "Book accommodation early during festival week"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit during Dussehra without booking accommodation ahead", "Skip Manali entirely if you're already this close", "Underestimate the Bijli Mahadev trek", "Buy shawls from unverified roadside stalls expecting authenticity", "Expect Manali-level infrastructure in Kullu town itself"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kullu", "Dussehra", "Himachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KULLU_GEAR} destination="Kullu" />
              <RelatedPostsGrid currentSlug="kullu-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="kullu-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
