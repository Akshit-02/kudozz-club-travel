// src/app/blog/panjim-travel-guide/page.tsx
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
  title: "Panjim Travel Guide: Fontainhas, Latin Quarter & Goa's Capital",
  description:
    "The complete Panjim travel guide. Fontainhas Latin Quarter, the Mandovi riverfront, Church of Our Lady of the Immaculate Conception, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Panjim travel guide, Panaji, Fontainhas Latin Quarter, Mandovi river cruise, best time to visit Panjim, how to reach Panjim, Goa capital city guide",
  openGraph: {
    title: "Panjim Travel Guide: Fontainhas, Latin Quarter & Goa's Capital",
    description: "Pastel-colored Portuguese townhouses lining narrow lanes in Fontainhas, and a riverside capital that still moves at old-Goa pace — the complete guide to Panjim.",
    url: "https://club.kudozz.in/blog/panjim-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/goa/hero.jpg", width: 1200, height: 630, alt: "Coastal Goan scenery representative of Panjim" }],
  },
  twitter: { card: "summary_large_image", title: "Panjim Travel Guide: Fontainhas, Latin Quarter & Goa's Capital", description: "Portuguese-era lanes and a riverside capital — the complete guide to Panjim.", images: ["/images/destinations/goa/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/panjim-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Panjim Travel Guide: Fontainhas, Latin Quarter & Goa's Capital",
      description: "The complete Panjim travel guide.",
      image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/panjim-travel-guide" },
      about: { "@type": "Place", name: "Panjim", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Panjim Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Panjim?", a: "One to two days covers Fontainhas, the riverfront, and central Panjim comfortably. Most travelers use it as a short base or a day trip rather than a full multi-day stay." },
  { q: "What is the best time to visit Panjim?", a: "November to February is peak season — dry and comfortable for walking. October to March generally offers good weather." },
  { q: "How do I reach Panjim?", a: "Goa's Dabolim (GOI) and Manohar International (GOX) airports both serve the city. Karmali, on the Konkan Railway line, is the nearest railway station; Madgaon and Thivim are the region's main stations with wider connections. Panjim is well connected by road throughout Goa." },
  { q: "Is Panjim worth visiting if I'm mainly here for the beaches?", a: "Yes, for at least a half-day — Fontainhas is a genuinely distinctive heritage precinct unlike anything on the beach coast, and it's an easy add-on if you're staying anywhere in North Goa." },
  { q: "What is Fontainhas?", a: "The old Latin Quarter of Panjim — narrow lanes of pastel-colored Portuguese-era townhouses with wrought-iron balconies, one of Goa's best-preserved heritage precincts and a popular heritage-walk destination." },
  { q: "What is the budget for a trip to Panjim?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹4,000 a day. A 2-day trip totals roughly ₹3,000 on a budget and ₹8,000 mid-range." },
  { q: "Can I combine Panjim with Old Goa?", a: "Yes — Old Goa's UNESCO churches are a short drive away and are commonly combined with a Panjim visit as a single day out." },
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
  { id: "introduction", title: "Why Panjim?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Panjim", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PANJIM_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for heritage walks and riverfront evenings", emoji: "🏛️",
  items: [
    { name: "Comfortable Walking Shoes", description: "Fontainhas rewards slow wandering through narrow, sometimes uneven lanes.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Heritage-walk essential", tagColor: "bg-amber-100 text-amber-700", why: "Fontainhas's charm is in the details — comfortable footwear lets you actually slow down and look." },
    { name: "Light Breathable Clothing", description: "Goa's coastal humidity is high year-round — loose cotton is far more comfortable than synthetics.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("breathable+cotton+travel+clothing"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Panjim's streets offer little shade at midday." },
    { name: "Camera", description: "Fontainhas's pastel townhouses and wrought-iron balconies are genuinely photogenic.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Heritage-walk essential", tagColor: "bg-purple-100 text-purple-700", why: "This is one of Goa's most photogenic heritage precincts." },
    { name: "Sun Hat", description: "For daytime walks around the riverfront and old town.", price: "₹399", rating: 4.4, reviews: "4.2k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Daytime essential", tagColor: "bg-forest-100 text-forest-700", why: "Panjim's streets have limited shade during peak midday sun." },
  ],
}];

export default function PanjimGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/goa/hero.jpg" alt="Coastal Goan scenery representative of Panjim" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Panjim", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Panjim", "Fontainhas", "Destination Guide", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Panjim Travel Guide: Fontainhas, Latin Quarter & Goa's Capital
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Pastel-colored Portuguese townhouses lining narrow lanes in Fontainhas, and a riverside capital that still moves at old-Goa pace.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Panjim, Goa" },
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
                  <h2>Why Panjim?</h2>
                  <p>
                    <strong>Panjim</strong> (Panaji) is Goa's small, walkable state capital, sitting on the Mandovi River rather than directly on the coast. It has a genuinely different pace from the beach towns — narrow Portuguese-era lanes, quiet churches, and an unhurried riverfront that rewards wandering more than a checklist.
                  </p>
                  <p>
                    Its heart is <strong>Fontainhas</strong>, the old Latin Quarter — a well-preserved cluster of pastel-colored townhouses with wrought-iron balconies that's become one of Goa's most photographed heritage precincts.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏛️</span> Panjim at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🏘️", label: "Key Site", value: "Fontainhas Latin Quarter" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim (GOI) / Manohar Intl (GOX)" },
                        { icon: "🚆", label: "Nearest Rail", value: "Karmali" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Panjim</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, comfortable weather, ideal for walking Fontainhas and the riverfront." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot and humid", text: "Warmer, less crowded, still workable for a short visit with midday breaks." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain — atmospheric for the old town's architecture, but not ideal for extended walking." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable window for walking the old town at a relaxed pace.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Panjim</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dabolim Airport (GOI) near Vasco da Gama or the newer Manohar International Airport (GOX) at Mopa — both well connected to major Indian cities.</li>
                    <li><strong>By Train:</strong> Karmali, on the Konkan Railway, is the nearest station to Panjim; Madgaon and Thivim are Goa's main rail hubs with wider connections.</li>
                    <li><strong>By Road:</strong> Well connected throughout Goa, a short drive from most North Goa beach towns.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're staying at a North Goa beach, Panjim makes an easy half-day add-on rather than requiring its own dedicated trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Panjim</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/goa/hero.jpg" alt="Panjim riverfront and old-town scenery" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Fontainhas Latin Quarter:</strong> Narrow lanes of pastel Portuguese-era townhouses with wrought-iron balconies — a genuinely well-preserved heritage precinct, best explored slowly on foot.</li>
                    <li><strong>Church of Our Lady of the Immaculate Conception:</strong> A landmark whitewashed church with a distinctive stepped facade overlooking the main square.</li>
                    <li><strong>Mandovi Riverfront:</strong> Home to moored casino boats — an unusual Panjim feature — plus evening river cruises.</li>
                    <li><strong>Old Goa day trip:</strong> A short drive away, home to a cluster of UNESCO World Heritage churches (cross-reference that guide).</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Panjim</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in Fontainhas", "Budget hotels near the bus stand"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Heritage-style boutique hotels", "Riverfront mid-range hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹15,000+/night", picks: ["Premium riverside hotels", "Well-appointed heritage properties"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Fontainhas itself has a handful of atmospheric heritage-style stays — worth booking if you want to wake up already inside the old town.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Panjim</h2>
                  <ul>
                    <li><strong>Goan-Portuguese curries:</strong> Vindaloo and other vinegar-and-chili dishes reflecting Goa's Portuguese culinary legacy.</li>
                    <li><strong>Fish curry rice:</strong> The everyday Goan staple, widely available at local restaurants.</li>
                    <li><strong>Riverside dining:</strong> Several restaurants along the Mandovi offer evening river views alongside Goan-Portuguese menus.</li>
                    <li><strong>Feni:</strong> Goa's traditional cashew or coconut spirit, worth trying at a local bar.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Panjim Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Fontainhas & Old Town", color: "bg-amber-700", activities: ["Arrive, check in", "Morning/afternoon: walk Fontainhas Latin Quarter", "Visit Church of Our Lady of the Immaculate Conception", "Evening: Mandovi riverfront and river cruise"] },
                      { day: "Day 2", title: "Old Goa & Departure", color: "bg-forest-600", activities: ["Morning: day trip to Old Goa's UNESCO churches", "Afternoon: return to Panjim, final riverside meal", "Departure"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,500", "₹10,000"],
                          ["Food/day", "₹400", "₹900", "₹2,200"],
                          ["Local transport per day", "₹250", "₹700", "₹1,500"],
                          ["Daily total", "₹1,500", "₹4,000", "₹11,000"],
                          ["2-Day trip total", "₹3,000", "₹8,000", "₹22,000"],
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
                  <h2>Essential Travel Tips for Panjim</h2>
                  <ul>
                    <li><strong>Walk Fontainhas slowly:</strong> It rewards wandering more than a rushed checklist.</li>
                    <li><strong>Combine with Old Goa:</strong> A short drive away, easy to pair into a single day.</li>
                    <li><strong>Try an evening river cruise:</strong> A relaxed, low-key way to see the Mandovi riverfront.</li>
                    <li><strong>Use it as a quieter base:</strong> Compared to the busier North Goa beach towns.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Walk Fontainhas at a relaxed pace", "Combine with an Old Goa day trip", "Try an evening Mandovi river cruise", "Sample Goan-Portuguese food at a riverside restaurant", "Use Panjim as a quieter base than the beach towns"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Rush Fontainhas — it's not built for a checklist visit", "Expect beach-town nightlife in Panjim itself", "Skip Old Goa if you have a spare half-day", "Visit expecting Calangute-style beach infrastructure", "Overlook the riverfront in the evening"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Panjim", "Fontainhas", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PANJIM_GEAR} destination="Panjim" />
              <RelatedPostsGrid currentSlug="panjim-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="panjim-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
