// src/app/blog/chikmagalur-travel-guide/page.tsx
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
  title: "Chikmagalur Travel Guide: Coffee Estates, Peaks & Waterfalls",
  description:
    "The complete Chikmagalur travel guide. Mullayanagiri, Kemmangundi, Hebbe Falls, coffee estate stays, where to stay, best time to visit, and a full 2-day itinerary through Karnataka's coffee country.",
  keywords:
    "Chikmagalur travel guide, Mullayanagiri, Kemmangundi, Hebbe Falls, Baba Budangiri, coffee estate stay Chikmagalur, best time to visit Chikmagalur, how to reach Chikmagalur, Chikmagalur vs Coorg",
  openGraph: {
    title: "Chikmagalur Travel Guide: Coffee Estates, Peaks & Waterfalls",
    description: "Karnataka's coffee country, ringed by the Western Ghats' highest peaks and waterfalls that turn into full-throated cascades every monsoon — the complete guide to Chikmagalur.",
    url: "https://club.kudozz.in/blog/chikmagalur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty coffee estate hills representative of Chikmagalur, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chikmagalur Travel Guide: Coffee Estates, Peaks & Waterfalls",
    description: "Karnataka's coffee country and the Western Ghats' highest peaks — the complete guide to Chikmagalur.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/chikmagalur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Chikmagalur Travel Guide: Coffee Estates, Peaks & Waterfalls",
          description: "The complete Chikmagalur travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/chikmagalur-travel-guide" },
          about: { "@type": "Place", name: "Chikmagalur", address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Chikmagalur Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Chikmagalur?", a: "Two days covers Mullayanagiri, Hebbe Falls, and a coffee estate visit comfortably. Add a third day for Kemmangundi or a slower plantation-stay pace." },
  { q: "What is the best time to visit Chikmagalur?", a: "October to March is best for trekking and clear Western Ghats views. The monsoon (June–September) brings the most dramatic waterfalls but muddier, more challenging trails." },
  { q: "How do I reach Chikmagalur?", a: "The nearest airports are Mangaluru (~135km) and Bengaluru (~245km). The nearest railway station is Kadur (~50km), and road access is the primary route for most travelers, especially those coming from Bengaluru for a weekend." },
  { q: "Is Chikmagalur the same as Coorg?", a: "No, though they're often compared — both are Karnataka coffee-growing hill regions in the Western Ghats, but distinct districts with different estates, terrain, and specific attractions. Chikmagalur is generally a bit further from Bengaluru than Coorg." },
  { q: "Do I need a permit for Mullayanagiri?", a: "No formal permit is typically required for the drive/short trek to the summit, but check current local access rules, especially during peak weekend crowds." },
  { q: "What is the budget for a trip to Chikmagalur?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹4,000 a day including a coffee estate stay. A 2-day trip totals roughly ₹3,200 on a budget and ₹8,000 mid-range, excluding transport to the region." },
  { q: "Is Chikmagalur good for a family trip?", a: "Yes — Mullayanagiri's drive-up access and most coffee estate tours are manageable for most ages, while Hebbe Falls and longer treks suit more active groups." },
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
  { id: "introduction", title: "Why Chikmagalur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chikmagalur", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const CHIKMAGALUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for coffee-estate walks, peak drives, and waterfall trails",
    emoji: "☕",
    items: [
      { name: "Trekking Shoes", description: "Mullayanagiri's short trek and Hebbe Falls' approach both cross uneven, sometimes slippery terrain.", price: "₹3,299", rating: 4.5, reviews: "6.8k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+men+women"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Both signature sights require real walking on natural terrain, not paved paths." },
      { name: "Rain Jacket / Poncho", description: "Chikmagalur's elevation brings frequent showers even outside peak monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Weather shifts fast in the Western Ghats, and Hebbe Falls is at its best exactly when rain is likely." },
      { name: "Light Warm Layer", description: "Mornings and evenings at elevation can be genuinely cool, even in a warm-climate state.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧣", affiliateUrl: amazonSearchUrl("light+fleece+jacket+travel"), tag: "Comfort essential", tagColor: "bg-forest-100 text-forest-700", why: "Coffee estate mornings can be noticeably chillier than expected for South India." },
      { name: "Reusable Water Bottle", description: "For the Mullayanagiri walk and a full day of estate touring.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-purple-100 text-purple-700", why: "Facilities thin out quickly once you're away from the main town." },
    ],
  },
];

export default function ChikmagalurGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Misty coffee estate hills representative of Chikmagalur, Karnataka" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Chikmagalur", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Chikmagalur", "Coffee", "Destination Guide", "Karnataka"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Chikmagalur Travel Guide: Coffee Estates, Peaks & Waterfalls
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Karnataka's coffee country, ringed by the Western Ghats' highest peaks and waterfalls that turn into full-throated cascades every monsoon.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Chikmagalur, Karnataka" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
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
                  <h2>Why Chikmagalur?</h2>
                  <p>
                    <strong>Chikmagalur</strong> is where coffee cultivation is said to have first taken root in India — local legend credits a Sufi saint, Baba Budan, with smuggling coffee beans out of Yemen centuries ago, and the hills bearing his name (Baba Budangiri) still grow coffee today. The district is often mentioned alongside Coorg as a Karnataka coffee-hill escape, but it's a genuinely distinct region with its own estates, terrain, and standout attraction: <strong>Mullayanagiri</strong>, Karnataka's highest peak.
                  </p>
                  <p>
                    Beyond the coffee, Chikmagalur offers waterfalls, viewpoints, and a wildlife sanctuary — enough variety for a solid two- to three-day trip, typically taken as a slightly longer weekend drive from Bengaluru than Coorg.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>☕</span> Chikmagalur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "⛰️", label: "Key Site", value: "Mullayanagiri (highest peak)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Mangaluru (~135km)" },
                        { icon: "☕", label: "Known For", value: "Coffee estates" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Chikmagalur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, clear weather ideal for Mullayanagiri views and comfortable trekking." },
                      { season: "Apr – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warm", text: "Warmer and drier — still workable but less comfortable for extended outdoor time." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — dramatic falls", text: "Hebbe Falls and other waterfalls are at their fullest, but trails get muddy and views can be obscured." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February — the clearest window for both Mullayanagiri's views and comfortable coffee-estate walks.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Chikmagalur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Mangaluru (~135km) or Bengaluru (~245km) are the nearest airports.</li>
                    <li><strong>By Train:</strong> Kadur, about 50km away, is the nearest railway station.</li>
                    <li><strong>By Road:</strong> The primary access route for most travelers, especially the popular Bengaluru weekend drive.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Mullayanagiri gets genuinely crowded on weekends given its status as Karnataka's highest peak — arrive early for a quieter summit.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Chikmagalur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Coffee estate landscape in Chikmagalur" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Mullayanagiri:</strong> Karnataka's highest peak, accessible by a drive plus a short trek, with sweeping Western Ghats views from the summit.</li>
                    <li><strong>Kemmangundi:</strong> A hill station viewpoint within the district, popular for gardens and rolling views.</li>
                    <li><strong>Hebbe Falls:</strong> A multi-tiered waterfall reached via a jeep ride and short trek through coffee and forest terrain.</li>
                    <li><strong>Baba Budangiri:</strong> The hills where India's coffee cultivation is said to have begun, with cave shrines and viewpoints.</li>
                    <li><strong>Coffee estate stays and tours:</strong> A defining Chikmagalur experience — walk through working plantations and learn about processing over a homestay stay.</li>
                    <li><strong>Bhadra Wildlife Sanctuary:</strong> A nearby forest reserve for those wanting a wildlife add-on.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Chikmagalur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,000–₹2,000/night", picks: ["Basic homestays in town", "Budget lodges near the market"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Coffee estate homestays", "Resort-style hill properties"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹15,000+/night", picks: ["Premium plantation resorts", "Boutique luxury coffee-estate stays"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>A coffee estate homestay is the most authentic way to experience Chikmagalur — worth prioritizing over a standard hotel.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Chikmagalur</h2>
                  <ul>
                    <li><strong>Estate-grown filter coffee:</strong> Freshly roasted, often served at the homestay you're staying at — a genuine highlight of visiting coffee country.</li>
                    <li><strong>Malnad-style thalis:</strong> Regional Karnataka cooking with local greens and preparations distinct from coastal or city cuisine.</li>
                    <li><strong>Homestay-cooked meals:</strong> Many estate stays serve home-cooked food as part of the package — a strong reason to choose a homestay over a hotel.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Chikmagalur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Mullayanagiri & Estate Walk", color: "bg-amber-700", activities: ["Arrive, check in at a coffee estate homestay", "Afternoon: Mullayanagiri drive and short trek", "Evening: guided coffee estate walk"] },
                      { day: "Day 2", title: "Hebbe Falls & Baba Budangiri", color: "bg-forest-600", activities: ["Morning: jeep ride and trek to Hebbe Falls", "Afternoon: Baba Budangiri viewpoint", "Evening: departure"] },
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
                          ["Accommodation/night", "₹1,200", "₹3,500", "₹9,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport (jeep/estate tour)", "₹500", "₹1,200", "₹2,500"],
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
                  <h2>Essential Travel Tips for Chikmagalur</h2>
                  <ul>
                    <li><strong>Go early for Mullayanagiri:</strong> Weekend crowds build up quickly given its status as the state's highest peak.</li>
                    <li><strong>Book a coffee estate homestay:</strong> The most authentic way to experience the region.</li>
                    <li><strong>Carry rain gear even outside monsoon:</strong> Elevation-driven showers are common.</li>
                    <li><strong>Hire a local jeep for Hebbe Falls:</strong> The last stretch typically requires one.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a coffee estate homestay", "Go to Mullayanagiri early to beat weekend crowds", "Try fresh estate-grown filter coffee", "Carry rain gear regardless of season", "Combine Hebbe Falls with a Baba Budangiri visit"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Confuse Chikmagalur estates with Coorg's — they're distinct regions", "Skip a jeep for the Hebbe Falls approach", "Visit Mullayanagiri at midday on a weekend expecting solitude", "Underestimate how cool mornings can get", "Rush the coffee estate tour — it rewards a slower pace"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Chikmagalur", "Coffee", "Karnataka", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={CHIKMAGALUR_GEAR} destination="Chikmagalur" />
              <RelatedPostsGrid currentSlug="chikmagalur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="chikmagalur-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
