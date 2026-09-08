// src/app/blog/guwahati-travel-guide/page.tsx
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
  title: "Guwahati Travel Guide: Brahmaputra Sunset Cruises & City Guide",
  description:
    "The complete Guwahati travel guide. Brahmaputra sunset cruises, Umananda Temple, Assam State Museum, day trips to Kamakhya and Hajo, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Guwahati travel guide, Brahmaputra sunset cruise, Umananda Temple, Assam State Museum, best time to visit Guwahati, how to reach Guwahati, Guwahati itinerary, Northeast India gateway city",
  openGraph: {
    title: "Guwahati Travel Guide: Brahmaputra Sunset Cruises & City Guide",
    description: "The gateway to Northeast India, where sunset river cruises on the Brahmaputra meet a hilltop temple older than most of the country's recorded history — the complete guide to Guwahati.",
    url: "https://club.kudozz.in/blog/guwahati-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Brahmaputra river scenery representative of Guwahati, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Guwahati Travel Guide: Brahmaputra Sunset Cruises & City Guide", description: "Sunset river cruises and a hilltop temple — the complete guide to Guwahati, gateway to Northeast India.", images: ["/images/destinations/meghalaya/dawki-river.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/guwahati-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Guwahati Travel Guide: Brahmaputra Sunset Cruises & City Guide",
      description: "The complete Guwahati travel guide.",
      image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/guwahati-travel-guide" },
      about: { "@type": "Place", name: "Guwahati", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Guwahati Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Guwahati?", a: "Two days covers the city's own sights comfortably. Add extra days if you're using Guwahati as a base for day trips to Kamakhya, Hajo, and Pobitora, or as a launchpad for the wider Northeast." },
  { q: "What is the best time to visit Guwahati?", a: "October to March is driest and most comfortable. Monsoon (June–September) brings heavy rain and occasional flooding — check advisories if traveling then." },
  { q: "How do I reach Guwahati?", a: "Lokpriya Gopinath Bordoloi International Airport (GAU) is the main gateway to Northeast India, with a major railway junction and strong road connectivity across the region." },
  { q: "Is Guwahati a good base for exploring Assam?", a: "Yes — it's the practical hub for day trips to Kamakhya Temple, Hajo, and Pobitora Wildlife Sanctuary, and the main departure point for onward travel to Kaziranga, Majuli, and the rest of Northeast India." },
  { q: "Is Kamakhya Temple in Guwahati itself?", a: "Yes, on Nilachal Hill within the city — see our dedicated Kamakhya Temple guide for full details on visiting." },
  { q: "What is the budget for a trip to Guwahati?", a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,500 a day. A 2-day trip totals roughly ₹3,600 on a budget and ₹9,000 mid-range." },
  { q: "Is Guwahati safe for solo travelers?", a: "Yes, generally — as a major regional hub it has well-established tourist infrastructure. Standard city-travel precautions apply, especially around monsoon flooding and river safety on cruises." },
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
  { id: "introduction", title: "Why Guwahati?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Guwahati", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GUWAHATI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for river cruises and city exploring", emoji: "🌅",
  items: [
    { name: "Light Rain Layer", description: "Assam sees significantly higher rainfall than most of India — useful across most months, not just peak monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Guwahati's rainfall is genuinely higher and less predictable than most Indian cities." },
    { name: "Comfortable Walking Shoes", description: "For exploring markets, the museum, and temple hill climbs.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "A day covering Umananda Temple, the museum, and markets adds up in distance." },
    { name: "Modest Clothing", description: "For temple visits including Kamakhya and Umananda, both active places of worship.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Guwahati's major temples are active pilgrimage sites, not just monuments." },
    { name: "Insect Repellent", description: "Riverside evenings and the humid climate bring mosquitoes.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Evening essential", tagColor: "bg-forest-100 text-forest-700", why: "Brahmaputus riverside evenings, especially during a sunset cruise, are prime mosquito hours." },
  ],
}];

export default function GuwahatiGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Brahmaputra river scenery representative of Guwahati, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Guwahati", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Guwahati", "Brahmaputra River", "Destination Guide", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Guwahati Travel Guide: Brahmaputra Sunset Cruises & City Guide
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The gateway to Northeast India, where sunset river cruises on the Brahmaputra meet a hilltop temple older than most of the country's recorded history.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Guwahati, Assam" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
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
                  <h2>Why Guwahati?</h2>
                  <p>
                    <strong>Guwahati</strong> is the largest city in Northeast India and the practical gateway almost every traveler to the region passes through — but it's worth more than a transit stop. The Brahmaputra River anchors the city, wide and slow-moving here, and a sunset cruise on it is one of Guwahati's genuine highlights.
                  </p>
                  <p>
                    On a hill above the city sits Kamakhya Temple, one of Hinduism's most significant Shakti Peethas (see our dedicated guide), and the city itself makes an efficient base for day trips to Hajo's multi-faith shrines and Pobitora's rhino sanctuary — both a short drive away.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌅</span> Guwahati at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🌊", label: "Key Feature", value: "Brahmaputra River" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Guwahati (GAU)" },
                        { icon: "🛕", label: "Nearby", value: "Kamakhya, Hajo, Pobitora" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Guwahati</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, comfortable, and the most reliable window for river cruises and day trips." },
                      { season: "Apr – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warm, pre-monsoon", text: "Increasingly humid, still workable but afternoon heat builds." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — heavy rain", text: "Assam sees significantly higher rainfall than most of India — occasional flooding is a genuine seasonal risk. Check advisories before traveling." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — dry conditions for river cruises and easy day trips to Kamakhya, Hajo, and Pobitora.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Guwahati</h2>
                  <ul>
                    <li><strong>By Air:</strong> Lokpriya Gopinath Bordoloi International Airport (GAU) — the primary air gateway to Northeast India.</li>
                    <li><strong>By Train:</strong> Guwahati is a major railway junction with strong connections across India.</li>
                    <li><strong>By Road:</strong> Well connected by NH27 and other major routes as the region's transport hub.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check monsoon flood advisories before a June–September trip — the Brahmaputra's seasonal flooding can occasionally affect local roads and river activities.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Guwahati</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Riverside scenery in Guwahati" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Brahmaputra sunset cruise:</strong> A classic Guwahati evening activity, boats departing from various ghats along the river.</li>
                    <li><strong>Umananda Temple:</strong> A Shiva temple on Peacock Island in the middle of the Brahmaputra, reachable by short ferry — notable as one of the world's smallest inhabited river islands.</li>
                    <li><strong>Kamakhya Temple:</strong> A major Shakti Peetha on Nilachal Hill — see our dedicated guide for full details.</li>
                    <li><strong>Assam State Museum:</strong> Archaeological and cultural artifacts spanning the state's history.</li>
                    <li><strong>Fancy Bazaar and city markets:</strong> Guwahati's lively commercial core.</li>
                    <li><strong>Day trips:</strong> Hajo and Pobitora Wildlife Sanctuary are both easy day trips from the city — see our dedicated guides.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Guwahati</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near Paltan Bazaar", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Riverside mid-range hotels", "Business hotels near GS Road"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹15,000+/night", picks: ["Premium riverfront properties", "International chain hotels"] },
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
                  <h2>What to Eat in Guwahati</h2>
                  <ul>
                    <li><strong>Khar:</strong> A distinctive Assamese dish made with raw papaya and an alkaline filtrate — a genuinely unique regional flavor.</li>
                    <li><strong>Tenga:</strong> A tangy, light fish or meat curry, a staple of Assamese home cooking.</li>
                    <li><strong>Pitha:</strong> Traditional rice cakes, especially popular during festivals.</li>
                    <li><strong>Assam tea:</strong> The region's namesake tea, widely available and worth seeking out at local tea stalls.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Guwahati Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "City & River", color: "bg-amber-700", activities: ["Morning: Assam State Museum", "Afternoon: Umananda Temple ferry trip", "Evening: Brahmaputra sunset cruise"] },
                      { day: "Day 2", title: "Kamakhya & Markets", color: "bg-forest-600", activities: ["Morning: Kamakhya Temple visit", "Afternoon: Fancy Bazaar and city markets", "Evening: departure or day-trip prep"] },
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
                          ["Accommodation/night", "₹1,200", "₹3,500", "₹10,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          ["Local transport per day", "₹200", "₹700", "₹1,500"],
                          ["Daily total", "₹1,800", "₹4,500", "₹12,000"],
                          ["2-Day trip total", "₹3,600", "₹9,000", "₹24,000"],
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
                  <h2>Essential Travel Tips for Guwahati</h2>
                  <ul>
                    <li><strong>Take a sunset cruise:</strong> One of the best, most low-effort ways to experience the Brahmaputra.</li>
                    <li><strong>Use Guwahati as a base:</strong> Kamakhya, Hajo, and Pobitora are all comfortable day trips.</li>
                    <li><strong>Check monsoon advisories:</strong> Heavy rain and flooding are genuine seasonal risks Jun-Sep.</li>
                    <li><strong>Dress modestly at temples:</strong> Both Kamakhya and Umananda are active worship sites.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Take a Brahmaputra sunset cruise", "Use the city as a base for Kamakhya, Hajo, Pobitora", "Try khar and tenga at a local restaurant", "Check monsoon flood advisories before a Jun-Sep trip", "Dress modestly at temples"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Skip checking flood advisories in monsoon season", "Wear beachwear-style clothing at temples", "Rush through without a river cruise", "Underestimate travel time to day-trip destinations", "Ignore local guidance on river safety during cruises"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Guwahati", "Brahmaputra River", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={GUWAHATI_GEAR} destination="Guwahati" />
              <RelatedPostsGrid currentSlug="guwahati-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="guwahati-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
