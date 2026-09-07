// src/app/blog/ranchi-travel-guide/page.tsx
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
  title: "Ranchi Travel Guide: Waterfalls, Lakes & Jharkhand's Capital",
  description:
    "The complete Ranchi travel guide. Hundru Falls, Jonha Falls, Dassam Falls, Tagore Hill, Ranchi Lake, where to stay, best time to visit, and a full 2-day itinerary through Jharkhand's capital.",
  keywords:
    "Ranchi travel guide, Hundru Falls, Jonha Falls, Dassam Falls, Ranchi Lake, Tagore Hill, best time to visit Ranchi, how to reach Ranchi, Jharkhand capital, Ranchi itinerary, City of Waterfalls",
  openGraph: {
    title: "Ranchi Travel Guide: Waterfalls, Lakes & Jharkhand's Capital",
    description: "A capital city ringed by waterfalls close enough for an afternoon trip, and the gateway to Jharkhand's forested plateau country — the complete guide to Ranchi.",
    url: "https://club.kudozz.in/blog/ranchi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Forest waterfall and river landscape representative of Ranchi, Jharkhand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranchi Travel Guide: Waterfalls, Lakes & Jharkhand's Capital",
    description: "Hundru, Jonha, and Dassam Falls, plus Jharkhand's capital city — the complete guide to Ranchi.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/ranchi-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Ranchi Travel Guide: Waterfalls, Lakes & Jharkhand's Capital",
          description: "The complete Ranchi travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/ranchi-travel-guide" },
          about: { "@type": "Place", name: "Ranchi", address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Ranchi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Ranchi?", a: "Two full days cover the main waterfalls (Hundru, Jonha, Dassam) and the in-city sights like Tagore Hill and Rock Garden comfortably. Ranchi also works well as the first or last stop of a longer Jharkhand trip toward Netarhat and Betla." },
  { q: "What is the best time to visit Ranchi?", a: "October to March is most comfortable for sightseeing. If the waterfalls are your priority, late September to October — just after the monsoon eases — is when Hundru, Dassam, and Jonha Falls look their most dramatic while still being reasonably safe to approach." },
  { q: "How do I reach Ranchi?", a: "Birsa Munda Airport (IXR) has regular flights from Delhi, Mumbai, Kolkata, and Bengaluru. Ranchi is also a major railway junction with strong connections to Kolkata, Delhi, and Mumbai, and is linked by road to Kolkata (~430km) and Patna (~330km)." },
  { q: "Is it safe to swim at Ranchi's waterfalls?", a: "Exercise real caution. Drowning incidents have been documented at several of these falls, especially during and after monsoon when currents and slippery rocks are at their worst — check current local safety advisories and avoid swimming at the base unless conditions are clearly safe and other people are doing so." },
  { q: "Can I visit all three major waterfalls in one day?", a: "Yes — Hundru, Jonha, and Dassam Falls are all within a couple of hours of Ranchi and can be covered in a single long day with a hired car, though a more relaxed two-day pace lets you also see the in-city sights." },
  { q: "What is the budget for a trip to Ranchi?", a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,500 a day. A 2-day trip totals roughly ₹3,600 on a budget and ₹9,000 mid-range, excluding flights or trains to the region." },
  { q: "Is Ranchi a good base for exploring the rest of Jharkhand?", a: "Yes — Ranchi's airport and rail connections make it the natural starting point for trips onward to Netarhat, Betla National Park, and Patratu Valley." },
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
  { id: "introduction", title: "Why Ranchi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ranchi", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const RANCHI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for waterfall trails and a spread-out day-trip circuit",
    emoji: "💦",
    items: [
      { name: "Grip Sandals / Trekking Shoes", description: "The rocky, often wet approach paths to Hundru, Dassam, and Jonha Falls involve real uneven walking — proper grip matters far more than flip-flops.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+sandals+grip+outdoor"), tag: "Waterfall essential", tagColor: "bg-amber-100 text-amber-700", why: "Slippery rocks near the falls are the most common cause of minor injuries reported by visitors." },
      { name: "Rain Jacket / Poncho", description: "If visiting just after monsoon for the fullest waterfalls, a packable rain layer is genuinely useful.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Waterfall spray plus Jharkhand's genuinely wet monsoon make staying dry a real, recurring concern." },
      { name: "Reusable Water Bottle", description: "The waterfall circuit involves a full day of driving and walking between spread-out sites with limited shops along the way.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("1l+reusable+water+bottle+steel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Facilities thin out quickly once you're outside the city core." },
      { name: "Power Bank", description: "Useful for day trips beyond the city, where charging points thin out well before you reach the falls.", price: "₹899", rating: 4.4, reviews: "6.8k", image: "🔋", affiliateUrl: amazonSearchUrl("power+bank+10000mah+travel"), tag: "Travel essential", tagColor: "bg-purple-100 text-purple-700", why: "Charging infrastructure drops off fast outside Ranchi's city centre." },
    ],
  },
];

export default function RanchiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Forest waterfall and river landscape representative of Ranchi, Jharkhand" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Ranchi", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Ranchi", "Waterfalls", "Destination Guide", "Jharkhand"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Ranchi Travel Guide: Waterfalls, Lakes & Jharkhand's Capital
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A capital city ringed by waterfalls close enough for an afternoon trip, and the gateway to Jharkhand's forested plateau country.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Ranchi, Jharkhand" },
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
                  <h2>Why Ranchi?</h2>
                  <p>
                    <strong>Ranchi</strong> has been Jharkhand's capital since the state was carved from Bihar in 2000, but its real draw for visitors is the ring of waterfalls within easy reach of the city — enough of them, and dramatic enough, that Ranchi is often nicknamed the "City of Waterfalls." Hundru, Jonha, and Dassam Falls all sit within a couple of hours' drive, each with its own character, alongside quieter in-city spots like Tagore Hill and Ranchi Lake.
                  </p>
                  <p>
                    The city also works well as a practical base: it's the natural gateway for onward trips deeper into Jharkhand's Chotanagpur Plateau, toward Netarhat's hill viewpoints or Betla National Park's forest and forts.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>💦</span> Ranchi at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "💦", label: "Known For", value: "Hundru, Jonha & Dassam Falls" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Birsa Munda (IXR)" },
                        { icon: "🏛️", label: "Status", value: "Capital of Jharkhand" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Ranchi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather ideal for the waterfall circuit and city sightseeing." },
                      { season: "Late Sep – Oct", emoji: "💦", color: "bg-sky-50 border-sky-200", mood: "Best waterfall flow", text: "Falls look their most dramatic just after the monsoon eases, while conditions are still reasonably safe to approach." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Warm and increasingly humid — workable but less comfortable for extended outdoor sightseeing." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-purple-50 border-purple-200", mood: "Monsoon — fullest flow, highest risk", text: "Waterfalls are at their peak volume, but currents and slippery rocks bring real safety risk — exercise caution." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late September to October — the falls are close to their fullest without the peak-monsoon safety risk.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Ranchi</h2>
                  <ul>
                    <li><strong>By Air:</strong> Birsa Munda Airport (IXR) has regular flights from Delhi, Mumbai, Kolkata, and Bengaluru.</li>
                    <li><strong>By Train:</strong> Ranchi is a major railway junction with strong connections to Kolkata, Delhi, and Mumbai.</li>
                    <li><strong>By Road:</strong> Well connected to Kolkata (~430km) and Patna (~330km) by road.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a car and driver for the day to cover Hundru, Jonha, and Dassam Falls efficiently — they're spread across different directions from the city and public transport between them is limited.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Ranchi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Waterfall scenery near Ranchi" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Hundru Falls:</strong> One of the tallest and most popular falls near Ranchi, on the Subarnarekha River.</li>
                    <li><strong>Jonha Falls (Gautamdhara):</strong> A scenic falls with a small hilltop Buddhist shrine reached via a flight of steps.</li>
                    <li><strong>Dassam Falls:</strong> A wide, powerful cascade, another popular stop on the waterfall circuit.</li>
                    <li><strong>Tagore Hill:</strong> A small hill with a memorial linked to Rabindranath Tagore's family, good for a quiet evening walk.</li>
                    <li><strong>Ranchi Lake and Kanke Dam:</strong> In-city lake spots for a relaxed evening.</li>
                    <li><strong>Rock Garden and Jagannath Temple Ranchi:</strong> A landscaped garden and a smaller-scale replica of the Puri Jagannath Temple.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Ranchi</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Budget hotels near the railway station", "Guesthouses in the city centre"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Mid-range chain hotels", "Business hotels near Main Road"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium hotels in the city centre"] },
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
                  <h2>What to Eat in Ranchi</h2>
                  <ul>
                    <li><strong>Litti Chokha:</strong> Roasted wheat-flour balls stuffed with sattu, served with mashed spiced vegetables — a regional staple.</li>
                    <li><strong>Dhuska:</strong> A deep-fried rice-and-lentil snack, often served with chutney or chana curry.</li>
                    <li><strong>Rugra:</strong> A seasonal wild mushroom dish specific to the Chotanagpur region, worth trying if in season.</li>
                    <li><strong>Thekua:</strong> A dense, sweet wheat-flour snack popular across Jharkhand and Bihar.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Ranchi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Waterfall Circuit", color: "bg-amber-700", activities: ["Morning: Hundru Falls", "Midday: Jonha Falls (Gautamdhara)", "Afternoon: Dassam Falls", "Evening: return to city, rest"] },
                      { day: "Day 2", title: "City Sights", color: "bg-forest-600", activities: ["Morning: Tagore Hill and Rock Garden", "Midday: Jagannath Temple Ranchi", "Afternoon: Ranchi Lake / Kanke Dam", "Evening: departure or onward travel"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹8,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Car hire (waterfall circuit day)", "₹1,800", "₹2,500", "₹4,000"],
                          ["Daily total", "₹1,800", "₹4,500", "₹10,500"],
                          ["2-Day trip total", "₹3,600", "₹9,000", "₹21,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flight/train to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Ranchi</h2>
                  <ul>
                    <li><strong>Check waterfall safety advisories:</strong> Drowning incidents are a documented risk at several falls, especially in monsoon — avoid swimming at the base unless conditions are clearly safe.</li>
                    <li><strong>Hire a car for the day:</strong> The waterfall circuit is spread across different directions from the city.</li>
                    <li><strong>Wear grip footwear:</strong> Approach paths to the falls are often wet and rocky.</li>
                    <li><strong>Start early:</strong> Covering all three major falls in one day requires an early start.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check current safety advisories before swimming near falls", "Hire a car/driver for the waterfall circuit", "Visit in late Sept–Oct for the best waterfall flow", "Wear grip footwear on wet rocky paths", "Combine Ranchi with Netarhat or Betla for a longer trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Swim at the base of the falls without checking conditions", "Underestimate travel time between the spread-out waterfalls", "Visit during peak monsoon expecting safe swimming", "Wear flip-flops on the rocky approach paths", "Skip an early start if trying to see all three falls in a day"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Ranchi", "Waterfalls", "Jharkhand", "Destination Guide", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={RANCHI_GEAR} destination="Ranchi" />
              <RelatedPostsGrid currentSlug="ranchi-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="ranchi-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
