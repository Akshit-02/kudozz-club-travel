// src/app/blog/tirthan-valley-travel-guide/page.tsx
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
  title: "Tirthan Valley Travel Guide: Trout Fishing & GHNP Gateway",
  description:
    "The complete Tirthan Valley travel guide. Great Himalayan National Park, trout fishing, riverside homestays, Chhoie Waterfall, Jalori Pass, where to stay, best time to visit, and a full 2-day itinerary.",
  keywords:
    "Tirthan Valley travel guide, Great Himalayan National Park, trout fishing Tirthan, Gushaini, Chhoie Waterfall, Jalori Pass, best time to visit Tirthan Valley, how to reach Tirthan Valley, Himachal homestays",
  openGraph: {
    title: "Tirthan Valley Travel Guide: Trout Fishing & GHNP Gateway",
    description: "A river valley still mostly free of Himachal's tourist crush, and the main gateway to the Great Himalayan National Park — the complete guide to Tirthan Valley.",
    url: "https://club.kudozz.in/blog/tirthan-valley-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kasol/kasol.jpg", width: 1200, height: 630, alt: "River valley and pine forest representative of Tirthan Valley, Himachal Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirthan Valley Travel Guide: Trout Fishing & GHNP Gateway",
    description: "The main gateway to the Great Himalayan National Park — the complete guide to Tirthan Valley.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/tirthan-valley-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Tirthan Valley Travel Guide: Trout Fishing & GHNP Gateway",
          description: "The complete Tirthan Valley travel guide.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/tirthan-valley-travel-guide" },
          about: { "@type": "Place", name: "Tirthan Valley", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Tirthan Valley Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Tirthan Valley?", a: "Two days covers a riverside stay, Chhoie Waterfall, and a short GHNP-edge walk comfortably. Add a day or two if you plan to trek into the Great Himalayan National Park core zone." },
  { q: "What is the best time to visit Tirthan Valley?", a: "March to June and September to November are best — clear weather and a manageable river. Monsoon (July–August) brings the Tirthan River to a full, sometimes dangerous flow." },
  { q: "How do I reach Tirthan Valley?", a: "The nearest airport is Bhuntar/Kullu, about 55km away. Road access is via Aut on the Kullu-Manali highway; there's no practical direct rail option." },
  { q: "Do I need a permit to enter the Great Himalayan National Park?", a: "Yes — entry into the GHNP core zone requires a permit from the Forest Department. Requirements and booking processes can change, so verify the current process before planning a trek into the park." },
  { q: "Can I really see snow leopards or rare wildlife here?", a: "GHNP is home to snow leopards, Himalayan tahr, and rich biodiversity, but sightings of these rare species are genuinely uncommon. Visit for the landscape, birdwatching, and the trek itself rather than expecting a guaranteed sighting." },
  { q: "Is trout fishing available in Tirthan Valley?", a: "Yes — licensed trout angling on the Tirthan River is a well-known local activity, typically arranged through local operators or your homestay." },
  { q: "What is the budget for a trip to Tirthan Valley?", a: "A budget traveler can manage on roughly ₹1,500 a day at a riverside homestay, a mid-range trip closer to ₹3,500 a day. A 2-day trip totals roughly ₹3,000 on a budget and ₹7,000 mid-range, excluding transport to the region." },
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
  { id: "introduction", title: "Why Tirthan Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tirthan Valley", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TIRTHAN_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for riverside stays and GHNP-edge walks",
    emoji: "🎣",
    items: [
      { name: "Trekking Shoes", description: "Riverside trails and the walk to Chhoie Waterfall cross uneven, sometimes wet terrain.", price: "₹3,299", rating: 4.5, reviews: "6.8k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+men+women"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Wet rocks along the Tirthan River are a common source of slips for underprepared visitors." },
      { name: "Insect Repellent", description: "Riverside forest terrain brings a real mosquito presence, especially at dusk.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Homestay evenings by the river are prime mosquito hours." },
      { name: "Rain Jacket", description: "Weather shifts quickly in this valley, even outside peak monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Sudden showers are common given the valley's elevation and forest cover." },
      { name: "Binoculars", description: "Useful for birdwatching along the GHNP buffer zone, where sightings are more reliable than rare-mammal spotting.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+wildlife+birdwatching"), tag: "Wildlife essential", tagColor: "bg-purple-100 text-purple-700", why: "Birdlife is genuinely rich here even when larger mammals stay hidden." },
    ],
  },
];

export default function TirthanValleyGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kasol/kasol.jpg" alt="River valley and pine forest representative of Tirthan Valley, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Tirthan Valley", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Tirthan Valley", "GHNP", "Off-beat", "Trout Fishing", "Himachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Tirthan Valley Travel Guide: Trout Fishing & GHNP Gateway
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A river valley still mostly free of Himachal's tourist crush, and the main gateway to the Great Himalayan National Park.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Tirthan Valley, Himachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Tirthan Valley?</h2>
                  <p>
                    <strong>Tirthan Valley</strong> sits a little apart from Himachal's well-worn Manali–Kasol circuit, and that's exactly its appeal. The valley follows the Tirthan River south of Kullu, and serves as the main gateway to the <strong>Great Himalayan National Park</strong> (GHNP), a UNESCO World Heritage Site home to snow leopards, Himalayan tahr, and genuinely rich biodiversity — though sightings of the rarer species are uncommon, and most visitors come for the landscape, the river, and the trekking rather than a guaranteed wildlife encounter.
                  </p>
                  <p>
                    Riverside homestays, not hotels, are the dominant style of accommodation here — a real point of difference from Manali's hotel-heavy scene, and part of what keeps Tirthan feeling unhurried.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🎣</span> Tirthan Valley at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "🏞️", label: "Key Site", value: "Great Himalayan National Park" },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sept–Nov" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bhuntar/Kullu (~55km)" },
                        { icon: "🎣", label: "Known For", value: "Trout fishing, homestays" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Tirthan Valley</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Best overall", text: "Clear skies, manageable river levels, and comfortable trekking conditions." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Equally good — our pick", text: "Post-monsoon clarity and cooler, crisp air; a strong alternative to spring." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — caution", text: "The Tirthan River runs full and can become genuinely dangerous — a season best avoided for river-adjacent activities." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Cold, quiet", text: "Snow at higher elevations and a much quieter valley, but limited access to some trails." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to November — reliably clear weather and a calmer river than spring runoff brings.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tirthan Valley</h2>
                  <ul>
                    <li><strong>By Air:</strong> Bhuntar/Kullu Airport is the nearest, about 55km away.</li>
                    <li><strong>By Train:</strong> Joginder Nagar (narrow gauge, limited practical use) or Chandigarh for broader rail connections, followed by road.</li>
                    <li><strong>By Road:</strong> Turn off the Kullu-Manali highway at Aut and follow the Tirthan road in — the standard route for nearly all visitors.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book GHNP entry permits in advance if you intend to trek into the park's core zone — current requirements and booking processes change, so verify directly with the Forest Department before you go.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Tirthan Valley</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kasol/kasol.jpg" alt="Tirthan River valley scenery" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Great Himalayan National Park:</strong> A UNESCO World Heritage Site and the valley's main draw — treks into the core zone require advance permits.</li>
                    <li><strong>Trout fishing:</strong> Licensed angling on the Tirthan River, typically arranged through local operators or your homestay.</li>
                    <li><strong>Chhoie Waterfall:</strong> A short, accessible walk from Gushaini village to a scenic waterfall.</li>
                    <li><strong>Jalori Pass:</strong> A mountain pass nearby connecting to the Jibhi/Shoja side of the valley.</li>
                    <li><strong>Riverside walks:</strong> Simple, unstructured walking along the Tirthan River is one of the valley's quiet pleasures.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Tirthan Valley</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic riverside homestays", "Gushaini village guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Well-appointed riverside homestays", "Small boutique cottages"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000+/night", picks: ["A handful of premium riverside lodges — luxury options remain limited"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Choose a riverside homestay over a hotel — it's genuinely the defining Tirthan experience.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Tirthan Valley</h2>
                  <ul>
                    <li><strong>Homestay-cooked meals:</strong> Most stays serve home-cooked Himachali food as part of the package.</li>
                    <li><strong>Fresh trout:</strong> If you've been fishing, several homestays will cook your catch.</li>
                    <li><strong>Simple local dhabas:</strong> Basic, filling North Indian fare available in Gushaini and nearby villages.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Tirthan Valley Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Chhoie Waterfall", color: "bg-amber-700", activities: ["Arrive, check in at a riverside homestay", "Afternoon: walk to Chhoie Waterfall", "Evening: riverside relaxation, home-cooked dinner"] },
                      { day: "Day 2", title: "GHNP Buffer & Fishing", color: "bg-forest-600", activities: ["Morning: short walk along the GHNP buffer zone or trout fishing session", "Afternoon: optional Jalori Pass detour", "Evening: departure"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹3,000"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport/activities per day", "₹200", "₹500"],
                          ["Daily total", "₹1,500", "₹3,500"],
                          ["2-Day trip total", "₹3,000", "₹7,000"],
                        ].map(([exp, b, m], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Tirthan Valley</h2>
                  <ul>
                    <li><strong>Book GHNP permits ahead:</strong> Verify current requirements before planning a trek into the park core.</li>
                    <li><strong>Avoid monsoon river activities:</strong> The Tirthan runs dangerously high in July–August.</li>
                    <li><strong>Choose a homestay over a hotel:</strong> It's the defining local experience.</li>
                    <li><strong>Set honest wildlife expectations:</strong> Rare species like snow leopards are seldom seen — come for the landscape and birdlife.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a riverside homestay", "Verify GHNP permit requirements ahead", "Try licensed trout fishing", "Walk to Chhoie Waterfall", "Carry rain gear even outside monsoon"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Go near the river during peak monsoon flow", "Expect a guaranteed rare-wildlife sighting", "Skip verifying current GHNP permit rules", "Expect Manali-level hotel infrastructure", "Fish without a proper license"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Tirthan Valley", "GHNP", "Off-beat", "Trout Fishing", "Himachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TIRTHAN_GEAR} destination="Tirthan Valley" />
              <RelatedPostsGrid currentSlug="tirthan-valley-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="tirthan-valley-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
