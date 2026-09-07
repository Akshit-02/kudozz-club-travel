// src/app/blog/narnaul-travel-guide/page.tsx
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
  title: "Narnaul Travel Guide: Mughal Tombs & Sher Shah Suri Connections",
  description:
    "The complete Narnaul travel guide. Ibrahim Khan Sur's Tomb, Jal Mahal, Chor Gumbad, where to stay, best time to visit, and a full day itinerary through an underrated Mughal-era monument town.",
  keywords:
    "Narnaul travel guide, Ibrahim Khan Sur tomb, Jal Mahal Narnaul, Chor Gumbad, Sher Shah Suri Narnaul, best time to visit Narnaul, how to reach Narnaul, Haryana Mughal architecture",
  openGraph: {
    title: "Narnaul Travel Guide: Mughal Tombs & Sher Shah Suri Connections",
    description: "A cluster of well-preserved Mughal-era tombs and gardens in a town most travelers drive straight past — the complete guide to Narnaul.",
    url: "https://club.kudozz.in/blog/narnaul-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/spiti-valley/spiti-valley.jpg", width: 1200, height: 630, alt: "Historic monument architecture representative of Narnaul, Haryana" }],
  },
  twitter: { card: "summary_large_image", title: "Narnaul Travel Guide: Mughal Tombs & Sher Shah Suri Connections", description: "Well-preserved Mughal-era tombs and gardens — the complete guide to Narnaul.", images: ["/images/destinations/spiti-valley/spiti-valley.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/narnaul-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Narnaul Travel Guide: Mughal Tombs & Sher Shah Suri Connections",
      description: "The complete Narnaul travel guide.",
      image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/narnaul-travel-guide" },
      about: { "@type": "Place", name: "Narnaul", address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Narnaul Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Narnaul?", a: "One day is enough for the main monument circuit — Ibrahim Khan Sur's Tomb, Jal Mahal, and Chor Gumbad can all be covered in a single focused visit." },
  { q: "What is the best time to visit Narnaul?", a: "October to March offers the most comfortable weather for a full day of monument-hopping." },
  { q: "How do I reach Narnaul?", a: "Delhi is the nearest major airport, about 120km away. Narnaul has its own railway station, and road access is via NH48." },
  { q: "What is Narnaul known for?", a: "A cluster of well-preserved Mughal and pre-Mughal era monuments, most notably Ibrahim Khan Sur's Tomb, linked to the Sur dynasty era associated with Sher Shah Suri's family lineage." },
  { q: "Is a guide recommended in Narnaul?", a: "Yes — on-site interpretation can be limited at these monuments, so a guide or some background reading beforehand adds significantly to the visit." },
  { q: "What is the budget for a trip to Narnaul?", a: "A day trip typically runs ₹1,000-2,500 covering transport and food, excluding transport to the region." },
  { q: "Why is Narnaul considered underrated?", a: "It has a genuine cluster of monument-quality Mughal-era architecture that receives far fewer visitors than comparable sites elsewhere in North India — appealing specifically to heritage-focused travelers willing to go slightly off the main circuit." },
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
  { id: "introduction", title: "Why Narnaul?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Narnaul", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const NARNAUL_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a monument-hopping heritage day", emoji: "🕌",
  items: [
    { name: "Comfortable Walking Shoes", description: "For covering the town's monument cluster on foot across a full day.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "Narnaul's monuments are spread across town, requiring a fair amount of walking." },
    { name: "Sun Hat", description: "For a comfortable day outdoors at open-air tomb and garden sites.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Most sites offer limited shade around the monument grounds." },
    { name: "Camera", description: "The tombs' architectural detail rewards close photography.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Photography essential", tagColor: "bg-forest-100 text-forest-700", why: "Narnaul's Mughal-era architecture is genuinely underrated and photogenic." },
    { name: "Background Reading / Offline Guide", description: "On-site interpretation can be limited — a bit of pre-trip reading adds real context.", price: "₹—", rating: 4.5, reviews: "—", image: "📖", affiliateUrl: amazonSearchUrl("north+india+heritage+travel+guide+book"), tag: "Context essential", tagColor: "bg-purple-100 text-purple-700", why: "Without context, the monuments' historical significance can be easy to miss." },
  ],
}];

export default function NarnaulGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Historic monument architecture representative of Narnaul, Haryana" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Narnaul", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Narnaul", "Mughal Architecture", "Heritage", "Haryana"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Narnaul Travel Guide: Mughal Tombs & Sher Shah Suri Connections
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A cluster of well-preserved Mughal-era tombs and gardens in a town most travelers drive straight past.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Narnaul, Haryana" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Narnaul?</h2>
                  <p>
                    <strong>Narnaul</strong> holds a cluster of well-preserved Mughal and pre-Mughal era monuments that most North India itineraries skip entirely. <strong>Ibrahim Khan Sur's Tomb</strong> is the standout — a striking, well-preserved structure linked to the Sur dynasty era, associated with the broader family and administrative lineage of Sher Shah Suri, who was born in this general region.
                  </p>
                  <p>
                    Alongside it sit <strong>Jal Mahal</strong> (a small water palace set amid a tank) and <strong>Chor Gumbad</strong> (an unusually named and designed tomb structure) — genuinely monument-quality architecture that receives a fraction of the visitors comparable sites elsewhere in North India draw.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🕌</span> Narnaul at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🕌", label: "Key Site", value: "Ibrahim Khan Sur's Tomb" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Delhi (~120km)" },
                        { icon: "🏛️", label: "Era", value: "Sur/Mughal-era architecture" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹2,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Narnaul</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for a full day of monument-hopping across town." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Plains heat makes extended outdoor walking around open monument sites less pleasant." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Occasional heavy rain can interrupt a day of sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable weather for the full monument circuit.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Narnaul</h2>
                  <ul>
                    <li><strong>By Air:</strong> Delhi, about 120km away, is the nearest major airport.</li>
                    <li><strong>By Train:</strong> Narnaul has its own railway station.</li>
                    <li><strong>By Road:</strong> Accessible via NH48, a straightforward drive from Delhi or Gurugram.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Narnaul with a broader South Haryana route including Rewari — the two towns pair naturally for a heritage-focused day trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Narnaul</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Historic monument scenery around Narnaul" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Ibrahim Khan Sur's Tomb:</strong> The town's standout monument, linked to the Sur dynasty era and Sher Shah Suri's broader lineage.</li>
                    <li><strong>Jal Mahal:</strong> A small water palace/pavilion set amid a tank, an atmospheric and lesser-known structure.</li>
                    <li><strong>Chor Gumbad:</strong> An unusual tomb structure with a distinctive name and design, worth a stop for its architectural quirks.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Narnaul</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,600/night", picks: ["Basic hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Mid-range hotels in town"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Better options available in Delhi/Gurugram if needed"] },
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
                  <h2>What to Eat in Narnaul</h2>
                  <ul>
                    <li><strong>Haryanvi thalis:</strong> Simple, hearty regional meals at local restaurants.</li>
                    <li><strong>Local sweets:</strong> Regional specialties like gajak and revdi, common across South Haryana.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Narnaul Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Ibrahim Khan Sur's Tomb", color: "bg-amber-700", activities: ["Arrive, visit the tomb complex", "Take in the architectural detail"] },
                      { day: "Afternoon", title: "Jal Mahal & Chor Gumbad", color: "bg-forest-600", activities: ["Visit Jal Mahal", "Stop at Chor Gumbad", "Depart"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Cost"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Local transport", "₹300–₹800"],
                          ["Food", "₹300–₹700"],
                          ["Guide (optional)", "₹500–₹1,000"],
                          ["1-Day total", "₹600–₹2,500"],
                        ].map(([exp, c], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Narnaul</h2>
                  <ul>
                    <li><strong>Bring background reading or hire a guide:</strong> On-site interpretation can be limited.</li>
                    <li><strong>Combine with Rewari:</strong> The two towns pair naturally for a South Haryana heritage day.</li>
                    <li><strong>Go with a heritage-focused mindset:</strong> This is a monument circuit for travelers genuinely interested in Mughal-era architecture, not a resort-town stop.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Ibrahim Khan Sur's Tomb as the highlight", "Bring background reading or a local guide", "Combine with Rewari for a fuller day", "Go with realistic expectations of a quiet, heritage-focused stop", "Photograph the architectural detail closely"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect extensive on-site interpretation or signage", "Plan a multi-day trip around Narnaul alone", "Skip Rewari if you're already in South Haryana", "Visit in peak summer heat without sun protection"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Narnaul", "Mughal Architecture", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={NARNAUL_GEAR} destination="Narnaul" />
              <RelatedPostsGrid currentSlug="narnaul-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="narnaul-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
