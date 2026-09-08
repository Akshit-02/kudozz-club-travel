// src/app/blog/kaziranga-travel-guide/page.tsx
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
  title: "Kaziranga National Park Travel Guide: One-Horned Rhino Safari",
  description:
    "The complete Kaziranga travel guide. Jeep and elephant safaris, rhino and tiger sighting odds, safari zones, where to stay, best time to visit, and a full itinerary through this UNESCO World Heritage wildlife park.",
  keywords:
    "Kaziranga National Park travel guide, one-horned rhino safari, Kaziranga jeep safari, Kaziranga elephant safari, best time to visit Kaziranga, how to reach Kaziranga, Kaziranga safari zones, Assam wildlife",
  openGraph: {
    title: "Kaziranga National Park Travel Guide: One-Horned Rhino Safari",
    description: "Home to two-thirds of the world's remaining one-horned rhinos, and one of India's most successful wildlife conservation stories — the complete guide to Kaziranga.",
    url: "https://club.kudozz.in/blog/kaziranga-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/ziro/hero.jpg", width: 1200, height: 630, alt: "Grassland and forest landscape representative of Kaziranga National Park, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Kaziranga National Park Travel Guide: One-Horned Rhino Safari", description: "Two-thirds of the world's one-horned rhinos live here — the complete safari guide to Kaziranga.", images: ["/images/destinations/ziro/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/kaziranga-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Kaziranga National Park Travel Guide: One-Horned Rhino Safari",
      description: "The complete Kaziranga travel guide.",
      image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kaziranga-travel-guide" },
      about: { "@type": "Place", name: "Kaziranga National Park", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Kaziranga Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Am I guaranteed to see a rhino at Kaziranga?", a: "Sighting odds here are genuinely among the best in the world for rhinos, given the park holds roughly two-thirds of the world's remaining population — most safaris see multiple rhinos, though nothing in wildlife viewing is ever 100% guaranteed." },
  { q: "What about tigers?", a: "Kaziranga has one of India's highest tiger densities, but sightings are far less reliable than rhino sightings — the dense grassland terrain makes tigers much harder to spot. Come for the rhinos; treat a tiger sighting as a bonus." },
  { q: "When is Kaziranga closed?", a: "The park closes completely, roughly May through October, for monsoon flooding and wildlife safety. This is a firm closure, not just a quieter period — verify current-year exact dates before planning a trip in this window." },
  { q: "Jeep safari or elephant safari — which is better?", a: "Both offer different experiences: jeep safaris cover more ground across zones, while elephant safaris (where available) let you get closer to grazing rhinos in tall grass a jeep can't access. Trying both on a multi-day trip is ideal if your schedule allows." },
  { q: "How do I reach Kaziranga?", a: "The nearest airport is Jorhat (~95km) or Guwahati (~217km), with Furkating as the nearest railway station. Road access is via NH37." },
  { q: "What is the budget for a Kaziranga safari trip?", a: "A budget traveler can manage on roughly ₹2,500 a day including one safari, a mid-range trip closer to ₹5,500 a day. Permit, gypsy hire, and guide fees are typically separate line items on top of accommodation." },
  { q: "Which safari zone should I choose?", a: "Central (Kohora) and Western (Bagori) ranges are generally the most popular for rhino sightings; Eastern (Agaratoli) and Burapahar offer a quieter, less-crowded alternative. Ask your lodge for current sighting trends by zone." },
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
  { id: "introduction", title: "Why Kaziranga?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kaziranga", level: 2 },
  { id: "safari-zones", title: "Safari Zones & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KAZIRANGA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for jeep and elephant-back safaris", emoji: "🦏",
  items: [
    { name: "Binoculars", description: "For spotting wildlife across Kaziranga's open grassland at distance.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"), tag: "Safari essential", tagColor: "bg-amber-100 text-amber-700", why: "Kaziranga's terrain is wide-open grassland — binoculars turn a distant shape into a genuine sighting." },
    { name: "Telephoto Camera/Lens", description: "For photographing rhinos, elephants, and birdlife at a safe, respectful distance.", price: "₹8,999+", rating: 4.4, reviews: "2.1k", image: "📷", affiliateUrl: amazonSearchUrl("telephoto+lens+wildlife+photography"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "Kaziranga's rhinos are often visible at a distance that rewards a longer lens." },
    { name: "Neutral/Khaki Clothing", description: "Standard safari practice for both jeep and elephant-back rides.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("khaki+safari+clothing+set"), tag: "Safari essential", tagColor: "bg-forest-100 text-forest-700", why: "Bright colors stand out against the park's grassland terrain." },
    { name: "Warm Layer", description: "Early-morning winter safaris in an open jeep or on elephant-back get genuinely cold.", price: "₹1,999", rating: 4.5, reviews: "4.7k", image: "🧣", affiliateUrl: amazonSearchUrl("warm+jacket+early+morning+safari"), tag: "Winter-safari essential", tagColor: "bg-sky-100 text-sky-700", why: "Dawn safaris in Dec-Jan are far colder than the daytime temperature suggests." },
  ],
}];

export default function KazirangaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/ziro/hero.jpg" alt="Grassland and forest landscape representative of Kaziranga National Park, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kaziranga", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kaziranga National Park", "One-Horned Rhino", "Adventure", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kaziranga National Park Travel Guide: One-Horned Rhino Safari
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Home to two-thirds of the world's remaining one-horned rhinos, and one of India's most successful wildlife conservation stories.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kaziranga, Assam" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,000 words" },
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
                  <h2>Why Kaziranga?</h2>
                  <p>
                    <strong>Kaziranga National Park</strong> is a UNESCO World Heritage Site and, in practical terms, the single best place on Earth to see a wild greater one-horned rhinoceros — the park is home to roughly two-thirds of the species' remaining global population, a genuine conservation success story after the animal was pushed to the brink of extinction in the early 20th century.
                  </p>
                  <p>
                    Beyond rhinos, Kaziranga's grassland-and-wetland ecosystem, shaped by the Brahmaputra's annual flooding, supports wild water buffalo, elephants, swamp deer, and one of India's highest tiger densities — though tigers here are far harder to spot than rhinos, given the dense terrain.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🦏</span> Kaziranga at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🦏", label: "Known For", value: "One-horned rhinoceros" },
                        { icon: "🌡️", label: "Safari Season", value: "Nov – Apr" },
                        { icon: "✈️", label: "Nearest Airport", value: "Jorhat (~95km)" },
                        { icon: "🐘", label: "Safari Types", value: "Jeep & elephant-back" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,500 – ₹5,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kaziranga</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather and strong sighting odds across all zones." },
                      { season: "Mar – Apr", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Late safari season", text: "Warmer, grasses begin thinning, often good for sightings before the season ends." },
                      { season: "May – Oct", emoji: "🚫", color: "bg-red-50 border-red-200", mood: "Park closed", text: "Kaziranga closes completely for monsoon flooding and wildlife safety — this is a firm closure, not just a quieter period. Verify current-year exact dates." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Important:</strong> Do not plan a trip during the May–October closure expecting any safari access — the park is genuinely shut, not just quiet.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kaziranga</h2>
                  <ul>
                    <li><strong>By Air:</strong> Jorhat Airport (~95km) or Guwahati (~217km) are the nearest options.</li>
                    <li><strong>By Train:</strong> Furkating is the nearest railway station.</li>
                    <li><strong>By Road:</strong> Road access via NH37, the standard route from both Jorhat and Guwahati.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book safaris well in advance for peak Dec-Feb season — permits and gypsies fill up fast during the best weather window.
                  </div>
                </section>

                <section id="safari-zones">
                  <h2>Safari Zones & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/ziro/hero.jpg" alt="Grassland safari terrain at Kaziranga" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Central/Kohora Range:</strong> The most popular and accessible zone, strong rhino sighting odds.</li>
                    <li><strong>Western/Bagori Range:</strong> Another consistently strong zone for rhino and elephant sightings.</li>
                    <li><strong>Eastern/Agaratoli Range:</strong> Quieter, less crowded, good for birdlife alongside larger mammals.</li>
                    <li><strong>Burapahar Range:</strong> The least-visited zone, a good option if you want fewer other jeeps around.</li>
                    <li><strong>Wildlife beyond rhinos:</strong> Wild water buffalo, elephants, swamp deer, and exceptional birdlife; tigers are present but genuinely hard to spot.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Kaziranga</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,200–₹2,500/night", picks: ["Basic lodges near Kohora gate", "Simple guesthouses in the park periphery"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹3,000–₹6,000/night", picks: ["Forest-view mid-range resorts", "Established safari-lodge properties"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["Premium wildlife-view resorts", "High-end safari lodges with guided experiences"] },
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
                  <h2>What to Eat Near Kaziranga</h2>
                  <ul>
                    <li><strong>Lodge-served Assamese thalis:</strong> Most stays serve khar, tenga, and rice-based Assamese meals.</li>
                    <li><strong>Assam tea:</strong> Widely available, given the region's tea-growing heritage.</li>
                    <li><strong>Simple local eateries:</strong> A handful of basic options near the main park gates.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kaziranga Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & First Safari", color: "bg-amber-700", activities: ["Arrive, check in near Kohora gate", "Afternoon jeep safari (Central or Western range)", "Evening rest at lodge"] },
                      { day: "Day 2", title: "Second Safari & Departure", color: "bg-forest-600", activities: ["Early morning safari (jeep or elephant-back, weather/season permitting)", "Late morning: departure prep", "Afternoon: travel onward"] },
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
                          ["Accommodation/night", "₹1,500", "₹4,000", "₹12,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Safari permit + gypsy + guide", "₹2,000", "₹2,500", "₹3,500"],
                          ["Daily total", "₹2,500", "₹5,500", "₹15,000"],
                          ["2-Day trip total", "₹5,000", "₹11,000", "₹30,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Permit, gypsy, and guide fees are separate from accommodation.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kaziranga</h2>
                  <ul>
                    <li><strong>Book safaris well ahead:</strong> Peak Dec-Feb season fills up fast.</li>
                    <li><strong>Try both jeep and elephant safaris:</strong> Each offers a genuinely different perspective if your schedule allows.</li>
                    <li><strong>Never plan around a May-Oct visit:</strong> The park is completely closed, not just quiet.</li>
                    <li><strong>Pack warm layers for dawn safaris:</strong> Winter mornings in an open jeep are colder than expected.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book safaris well in advance for peak season", "Try both jeep and elephant-back safaris", "Choose your zone based on recent sighting trends", "Pack warm layers for dawn safaris", "Verify current park closure dates before booking"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a trip during the May-Oct closure", "Expect tiger sightings on the level of rhino sightings", "Skip booking safaris in advance during peak season", "Underestimate the cold on early-morning safaris", "Wear bright colors on safari"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kaziranga National Park", "One-Horned Rhino", "Adventure", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KAZIRANGA_GEAR} destination="Kaziranga" />
              <RelatedPostsGrid currentSlug="kaziranga-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="kaziranga-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
