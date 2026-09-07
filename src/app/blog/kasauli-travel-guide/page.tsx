// src/app/blog/kasauli-travel-guide/page.tsx
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
  title: "Kasauli Travel Guide: Quiet Cantonment Hill Town Near Chandigarh",
  description:
    "The complete Kasauli travel guide. Monkey Point, Christ Church, Sunset Point, Sanawar, where to stay, best time to visit, and a full itinerary for this quiet colonial-era cantonment town.",
  keywords:
    "Kasauli travel guide, Monkey Point Kasauli, Christ Church Kasauli, Sunset Point, Kasauli Brewery, best time to visit Kasauli, how to reach Kasauli, Kasauli from Chandigarh",
  openGraph: {
    title: "Kasauli Travel Guide: Quiet Cantonment Hill Town Near Chandigarh",
    description: "A small colonial cantonment hill town that's stayed genuinely quiet, an easy two-hour drive from Chandigarh — the complete guide to Kasauli.",
    url: "https://club.kudozz.in/blog/kasauli-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/chandigarh/hero.jpg", width: 1200, height: 630, alt: "Quiet hill-town scenery representative of Kasauli, Himachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Kasauli Travel Guide: Quiet Cantonment Hill Town Near Chandigarh", description: "A small, quiet colonial cantonment town — the complete guide to Kasauli.", images: ["/images/destinations/chandigarh/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/kasauli-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Kasauli Travel Guide: Quiet Cantonment Hill Town Near Chandigarh",
      description: "The complete Kasauli travel guide.",
      image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kasauli-travel-guide" },
      about: { "@type": "Place", name: "Kasauli", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Kasauli Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Kasauli?", a: "One to two days is enough — Kasauli is a small town best enjoyed at a slow pace rather than covered as a checklist of sights." },
  { q: "What is the best time to visit Kasauli?", a: "March–June and September–November offer the clearest weather. Monsoon (July–August) brings fog and rain; December–February can be cold with occasional light snow." },
  { q: "How do I reach Kasauli?", a: "Chandigarh (~65km) is the nearest airport and practical hub. Kalka (~40km) is the nearest railway station, also the starting point of the Kalka-Shimla toy train." },
  { q: "Why is Kasauli quieter than other Himachal hill stations?", a: "It's still home to an active military cantonment, which has historically limited commercial over-development — a genuine part of why it's stayed small and calm." },
  { q: "Can I visit the Kasauli Brewery?", a: "It's one of India's oldest breweries and a point of historical interest, but it isn't typically open for public tours — verify current visitor access before planning around it." },
  { q: "Is Kasauli a good day trip from Chandigarh?", a: "Yes — at roughly two hours by road, it's a popular and easy day trip or weekend escape from Chandigarh and even Delhi-NCR." },
  { q: "What is the budget for a trip to Kasauli?", a: "A budget traveler can manage on roughly ₹1,300 a day, a mid-range trip closer to ₹3,500 a day. A 2-day trip totals roughly ₹2,600 on a budget and ₹7,000 mid-range." },
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
  { id: "introduction", title: "Why Kasauli?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kasauli", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KASAULI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for gentle walks and quiet mornings", emoji: "🌲",
  items: [
    { name: "Comfortable Walking Shoes", description: "For the walk to Monkey Point/Gilbert Trail and the town's gently sloped lanes.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "Kasauli's viewpoints are reached by short walks on sloped paths." },
    { name: "Light Warm Layer", description: "Evenings are cool given Kasauli's elevation, even outside winter.", price: "₹1,499", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("light+warm+jacket+travel"), tag: "Evening essential", tagColor: "bg-sky-100 text-sky-700", why: "Temperature drops noticeably after sunset here." },
    { name: "Rain Layer", description: "Useful for sudden showers and monsoon fog if visiting Jul–Aug.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-purple-100 text-purple-700", why: "Kasauli's monsoon months bring persistent fog and rain." },
    { name: "Camera", description: "For colonial-era architecture and the views from Monkey Point and Sunset Point.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "On clear days, distant Himalayan peaks are visible from Monkey Point." },
  ],
}];

export default function KasauliGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/chandigarh/hero.jpg" alt="Quiet hill-town scenery representative of Kasauli, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kasauli", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kasauli", "Cantonment Town", "Off-beat", "Himachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kasauli Travel Guide: Quiet Cantonment Hill Town Near Chandigarh
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A small colonial cantonment hill town that's stayed genuinely quiet, an easy two-hour drive from Chandigarh.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kasauli, Himachal Pradesh" },
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
                  <h2>Why Kasauli?</h2>
                  <p>
                    <strong>Kasauli</strong> is a small British-era cantonment hill town that has stayed genuinely quiet — still home to an active military presence, which has historically limited the kind of commercial over-development seen in bigger Himachal hill stations. Narrow lanes, colonial-era churches, and unhurried viewpoints make it a place best explored slowly rather than checked off a list.
                  </p>
                  <p>
                    At roughly two hours from Chandigarh, it's become a favourite quick escape for Chandigarh and Delhi-NCR travelers wanting something calmer than Shimla.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌲</span> Kasauli at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "🌲", label: "Character", value: "Quiet cantonment hill town" },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        { icon: "✈️", label: "Nearest Airport", value: "Chandigarh (~65km)" },
                        { icon: "🚆", label: "Nearest Rail", value: "Kalka (~40km)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kasauli</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Pleasant and clear", text: "Comfortable temperatures before monsoon fog sets in." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Best overall — our pick", text: "Clear skies and crisp air, good visibility toward distant peaks from Monkey Point." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — fog and rain", text: "Persistent fog can reduce visibility significantly during these months." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Cold, occasional snow", text: "A quieter, colder season with occasional light snow." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to November — clear skies and the best chance of distant Himalayan views from Monkey Point.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kasauli</h2>
                  <ul>
                    <li><strong>By Air:</strong> Chandigarh Airport, about 65km away.</li>
                    <li><strong>By Train:</strong> Kalka railway station (~40km), also the starting point of the Kalka-Shimla toy train.</li>
                    <li><strong>By Road:</strong> A straightforward drive via Chandigarh or Kalka, roughly two hours.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book ahead for weekends — Kasauli's popularity as a quick Chandigarh/Delhi escape means its limited stays fill up fast.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kasauli</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/chandigarh/hero.jpg" alt="Hill-town scenery around Kasauli" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Monkey Point / Gilbert Trail:</strong> A short walk offering views toward the plains and, on clear days, distant Himalayan peaks.</li>
                    <li><strong>Christ Church:</strong> A colonial-era church, one of Kasauli's oldest surviving structures.</li>
                    <li><strong>Sunset Point:</strong> A reliable, low-effort evening viewpoint.</li>
                    <li><strong>Sanawar:</strong> A nearby area home to The Lawrence School, a historic institution worth a passing look.</li>
                    <li><strong>Kasauli Brewery:</strong> One of India's oldest breweries — a point of historical interest, though not typically open for public tours (verify current access).</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kasauli</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,600/night", picks: ["Guesthouses in the main bazaar area", "Basic hotels near the mall"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Colonial-style mid-range hotels", "Hillside cottage stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Boutique heritage properties", "Premium forest-view resorts"] },
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
                  <h2>What to Eat in Kasauli</h2>
                  <ul>
                    <li><strong>North Indian cafe fare:</strong> The standard mix at most small hill-town restaurants.</li>
                    <li><strong>Himachali thalis:</strong> Simple regional vegetarian meals at local eateries.</li>
                    <li><strong>Bakery treats:</strong> A colonial-town holdover — a few long-running bakeries serve baked goods worth trying.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kasauli Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Town & Church", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Christ Church and the mall lanes", "Evening: Sunset Point"] },
                      { day: "Day 2", title: "Monkey Point & Sanawar", color: "bg-forest-600", activities: ["Morning: Monkey Point / Gilbert Trail walk", "Late morning: drive past Sanawar", "Afternoon: departure"] },
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
                          ["Food/day", "₹300", "₹700", "₹1,600"],
                          ["Local transport per day", "₹200", "₹500", "₹1,000"],
                          ["Daily total", "₹1,300", "₹3,500", "₹10,000"],
                          ["2-Day trip total", "₹2,600", "₹7,000", "₹20,000"],
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
                  <h2>Essential Travel Tips for Kasauli</h2>
                  <ul>
                    <li><strong>Book ahead on weekends:</strong> Its popularity as a Chandigarh/Delhi escape fills up limited accommodation fast.</li>
                    <li><strong>Respect cantonment boundaries:</strong> Some areas near the military presence have restricted access — follow posted signage.</li>
                    <li><strong>Take it slow:</strong> Kasauli is small and best enjoyed unhurried rather than rushed.</li>
                    <li><strong>Verify Kasauli Brewery access:</strong> Public tours aren't standard — check before planning around a visit.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book weekend stays ahead of time", "Walk Monkey Point for the best views", "Respect posted cantonment-area boundaries", "Enjoy the slow pace rather than rushing", "Try local bakery treats"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Enter restricted cantonment areas without checking signage", "Expect Shimla-level nightlife or infrastructure", "Show up on a weekend without a booking", "Plan a Kasauli Brewery visit without verifying access first", "Rush through in a few hours"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kasauli", "Cantonment Town", "Himachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KASAULI_GEAR} destination="Kasauli" />
              <RelatedPostsGrid currentSlug="kasauli-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="kasauli-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
