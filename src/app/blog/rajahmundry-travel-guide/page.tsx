// src/app/blog/rajahmundry-travel-guide/page.tsx
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
  title: "Rajahmundry Travel Guide: Godavari Bridges & Papi Hills Gateway",
  description:
    "The complete Rajahmundry travel guide. Godavari Arch Bridge, Papi Hills boat cruise departures, Telugu literary heritage, where to stay, best time to visit, and a full itinerary along the Godavari.",
  keywords:
    "Rajahmundry travel guide, Godavari Arch Bridge, Papi Hills boat cruise, Godavari Pushkaralu, best time to visit Rajahmundry, how to reach Rajahmundry, Andhra Pradesh Godavari",
  openGraph: {
    title: "Rajahmundry Travel Guide: Godavari Bridges & Papi Hills Gateway",
    description: "A Godavari riverside city with one of Asia's longest road-cum-rail bridges, and the departure point for boat cruises into the Papi Hills gorge — the complete guide to Rajahmundry.",
    url: "https://club.kudozz.in/blog/rajahmundry-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/alleppey.jpg", width: 1200, height: 630, alt: "Riverside scenery representative of Rajahmundry, Andhra Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Rajahmundry Travel Guide: Godavari Bridges & Papi Hills Gateway", description: "Godavari bridges and the Papi Hills boat cruise gateway — the complete guide to Rajahmundry.", images: ["/images/destinations/kerala/alleppey.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/rajahmundry-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Rajahmundry Travel Guide: Godavari Bridges & Papi Hills Gateway",
      description: "The complete Rajahmundry travel guide.",
      image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/rajahmundry-travel-guide" },
      about: { "@type": "Place", name: "Rajahmundry", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Rajahmundry Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Rajahmundry?", a: "One to two days covers the city's bridges and riverside sights, plus a day for the Papi Hills boat cruise if you're doing it from here." },
  { q: "What is the best time to visit Rajahmundry?", a: "October to March offers the most comfortable weather for sightseeing and river cruises." },
  { q: "How do I reach Rajahmundry?", a: "Rajahmundry Airport (RJA) has decent connectivity, the city has a major railway station, and it's well connected by road." },
  { q: "Can I do the Papi Hills boat cruise from Rajahmundry?", a: "Yes — Rajahmundry is the primary departure point for the Papi Hills boat cruise (cross-reference that separate guide). Book in advance, especially on weekends." },
  { q: "What is the Godavari Pushkaralu?", a: "A major river festival held once every 12 years per Hindu tradition, drawing enormous pilgrim crowds to Rajahmundry and the wider Godavari region — verify current-year applicability as this is a rare, cyclical event." },
  { q: "What is the budget for a trip to Rajahmundry?", a: "A budget traveler can manage on roughly ₹1,400 a day, a mid-range trip closer to ₹3,800 a day, excluding the Papi Hills boat cruise cost." },
  { q: "Is Rajahmundry a good base for the wider Godavari region?", a: "Yes — it's the practical hub for exploring Papi Hills and Maredumilli (cross-reference both guides), with better transport connectivity than either destination itself." },
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
  { id: "introduction", title: "Why Rajahmundry?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rajahmundry", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const RAJAHMUNDRY_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for river cruises and city sightseeing", emoji: "🌊",
  items: [
    { name: "Sun Hat & Sunglasses", description: "For the exposed deck time on any Godavari boat trip.", price: "₹599", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Boat-trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Direct sun on the open river deck adds up over several hours." },
    { name: "Light Rain Layer", description: "Useful year-round given the river's humid climate, especially in shoulder monsoon months.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Riverside weather can shift quickly in this region." },
    { name: "Comfortable Walking Shoes", description: "For exploring the bridges and riverside areas of the city.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "City-walk essential", tagColor: "bg-forest-100 text-forest-700", why: "The bridge and riverside walk cover real distance." },
    { name: "Camera", description: "For the Godavari Arch Bridge and river scenery.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "The bridge and riverfront views are genuinely photogenic." },
  ],
}];

export default function RajahmundryGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/alleppey.jpg" alt="Riverside scenery representative of Rajahmundry, Andhra Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Rajahmundry", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Rajahmundry", "Godavari River", "Destination Guide", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Rajahmundry Travel Guide: Godavari Bridges & Papi Hills Gateway
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A Godavari riverside city with one of Asia's longest road-cum-rail bridges, and the departure point for boat cruises into the Papi Hills gorge.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Rajahmundry, Andhra Pradesh" },
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
                  <h2>Why Rajahmundry?</h2>
                  <p>
                    <strong>Rajahmundry</strong> sits on the banks of the Godavari River, spanned by the <strong>Godavari Arch Bridge</strong> and adjacent rail bridges — widely cited among the longer road-cum-rail bridge structures in Asia. The city carries real weight in Telugu literary history, often referenced as part of the language's cultural heartland.
                  </p>
                  <p>
                    Its practical role today is as the gateway city for the wider Godavari region — most travelers pass through Rajahmundry specifically to catch the <strong>Papi Hills boat cruise</strong> or head onward to Maredumilli's forests.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌊</span> Rajahmundry at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🌉", label: "Landmark", value: "Godavari Arch Bridge" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Rajahmundry (RJA)" },
                        { icon: "🚤", label: "Gateway For", value: "Papi Hills boat cruise" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Rajahmundry</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable weather for river cruises and city sightseeing." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Significant heat — plan boat trips for morning or late afternoon." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain and higher river flow — check boat cruise conditions before traveling." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable window for both the city and the Papi Hills cruise.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Rajahmundry</h2>
                  <ul>
                    <li><strong>By Air:</strong> Rajahmundry Airport (RJA), with decent domestic connectivity.</li>
                    <li><strong>By Train:</strong> A major railway station on the Chennai-Kolkata line.</li>
                    <li><strong>By Road:</strong> Well connected by road across the wider Godavari region.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book the Papi Hills boat cruise in advance if visiting on a weekend — departures fill up.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Rajahmundry</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/alleppey.jpg" alt="Godavari riverscape around Rajahmundry" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Godavari Arch Bridge:</strong> A landmark bridge spanning the Godavari River, widely cited among Asia's longer road-cum-rail structures.</li>
                    <li><strong>Papi Hills boat cruise:</strong> Departs from Rajahmundry, one of the region's major attractions.</li>
                    <li><strong>Kotilingeswara Swamy Temple:</strong> A riverside temple worth a visit.</li>
                    <li><strong>Godavari Pushkaralu (if timing coincides):</strong> A major river festival held once every 12 years — verify current applicability.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Rajahmundry</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near the railway station", "Budget hotels in the city centre"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Mid-range hotels near the riverfront", "Business hotels in the city"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium hotels with river views"] },
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
                  <h2>What to Eat in Rajahmundry</h2>
                  <ul>
                    <li><strong>Andhra thali:</strong> Widely available across the city.</li>
                    <li><strong>Godavari fish dishes:</strong> Fresh river fish preparations, a local specialty given the riverside setting.</li>
                    <li><strong>Pesarattu and other Andhra breakfast staples:</strong> A good regional breakfast option.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Rajahmundry Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "City & Bridge", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Godavari Arch Bridge and riverfront", "Evening: local temple visit"] },
                      { day: "Day 2", title: "Papi Hills Cruise", color: "bg-forest-600", activities: ["Full-day Papi Hills boat cruise", "Evening: departure or continue to Maredumilli"] },
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
                          ["Papi Hills boat cruise", "₹500", "₹1,200", "₹2,500"],
                          ["Daily total (excl. cruise)", "₹1,400", "₹3,800", "₹10,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Boat cruise cost varies by operator and package.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Rajahmundry</h2>
                  <ul>
                    <li><strong>Book the Papi Hills cruise ahead:</strong> Especially on weekends and holidays.</li>
                    <li><strong>Use Rajahmundry as your regional base:</strong> Better connectivity than Maredumilli or the Papi Hills area itself.</li>
                    <li><strong>Check Pushkaralu timing:</strong> This once-every-12-years festival dramatically changes crowd levels if it coincides with your visit.</li>
                    <li><strong>Carry a rain layer in shoulder monsoon season:</strong> Weather can shift quickly.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book the Papi Hills boat cruise in advance", "Use Rajahmundry as your Godavari-region base", "Try local river fish dishes", "Check Pushkaralu festival timing before traveling", "Combine with Maredumilli for a fuller regional trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Show up for the boat cruise without booking ahead on weekends", "Underestimate summer heat on the open boat deck", "Skip checking current river/monsoon conditions", "Rush through without allowing time for the full-day cruise", "Ignore Pushkaralu crowd impact if it coincides with your visit"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Rajahmundry", "Godavari River", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={RAJAHMUNDRY_GEAR} destination="Rajahmundry" />
              <RelatedPostsGrid currentSlug="rajahmundry-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="rajahmundry-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
