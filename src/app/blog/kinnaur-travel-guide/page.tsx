// src/app/blog/kinnaur-travel-guide/page.tsx
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
  title: "Kinnaur Travel Guide: Apple Orchards, Kinner Kailash & Sangla Valley",
  description:
    "The complete Kinnaur travel guide. Sangla Valley, Kalpa, Kinner Kailash views, the old Hindustan-Tibet road, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Kinnaur travel guide, Sangla Valley, Kalpa Himachal, Kinner Kailash, Hindustan Tibet road, best time to visit Kinnaur, how to reach Kinnaur, Kinnaur Spiti circuit",
  openGraph: {
    title: "Kinnaur Travel Guide: Apple Orchards, Kinner Kailash & Sangla Valley",
    description: "A tribal Himalayan district of apple orchards and dramatic river gorges, on the old Hindustan-Tibet road toward Spiti — the complete guide to Kinnaur.",
    url: "https://club.kudozz.in/blog/kinnaur-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/leh-ladakh/leh-ladakh.jpg", width: 1200, height: 630, alt: "High-altitude Himalayan valley representative of Kinnaur, Himachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Kinnaur Travel Guide: Apple Orchards, Kinner Kailash & Sangla Valley", description: "Apple orchards, dramatic gorges, and the old Hindustan-Tibet road — the complete guide to Kinnaur.", images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/kinnaur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Kinnaur Travel Guide: Apple Orchards, Kinner Kailash & Sangla Valley",
      description: "The complete Kinnaur travel guide.",
      image: "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kinnaur-travel-guide" },
      about: { "@type": "Place", name: "Kinnaur", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Kinnaur Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Kinnaur?", a: "3-4 days given the distances involved — Shimla to Reckong Peo alone is a long, scenic drive. Most travelers combine Kinnaur with Spiti Valley as part of a longer Himachal loop." },
  { q: "What is the best time to visit Kinnaur?", a: "June to October, when roads are clear and weather is stable. Winter brings heavy snow and closures on higher sections." },
  { q: "How do I reach Kinnaur?", a: "The practical route is by road via Shimla-Rampur-Reckong Peo on NH5. The nearest airports (Shimla or Bhuntar/Kullu) still require a long onward drive." },
  { q: "Do I need a permit to visit Kinnaur?", a: "Requirements have varied over time for areas closer to the Tibet border — verify current Inner Line Permit or ID requirements before traveling, especially toward Chitkul and beyond." },
  { q: "Can I combine Kinnaur with Spiti Valley?", a: "Yes — this is the classic Kinnaur-Spiti circuit, and most serious Himachal road-trippers do both together given their shared route and proximity." },
  { q: "What is Kinner Kailash?", a: "A sacred peak revered in both Hindu and Buddhist tradition, associated with Lord Shiva, visible from several points in the valley and the object of a demanding parikrama trek for dedicated pilgrims." },
  { q: "What is the budget for a trip to Kinnaur?", a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,500 a day, factoring in the longer driving distances and more remote accommodation options." },
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
  { id: "introduction", title: "Why Kinnaur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kinnaur", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KINNAUR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a long high-altitude road trip", emoji: "🏔️",
  items: [
    { name: "Warm Layers", description: "Essential even in summer — Kinnaur's higher villages get genuinely cold, especially at night.", price: "₹2,499", rating: 4.5, reviews: "4.7k", image: "🧥", affiliateUrl: amazonSearchUrl("warm+trekking+jacket+layers"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Temperature swings between valley floor and higher villages can be dramatic." },
    { name: "Sturdy Footwear", description: "For walking around villages, viewpoints, and any short treks toward Kinner Kailash views.", price: "₹2,999", rating: 4.5, reviews: "6.2k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+mountain"), tag: "Trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Terrain around Kalpa and Sangla is uneven and hilly." },
    { name: "Sunscreen (High SPF)", description: "High-altitude sun exposure is significantly more intense than at sea level.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("high+spf+sunscreen+travel"), tag: "Altitude essential", tagColor: "bg-sky-100 text-sky-700", why: "Sunburn at altitude happens faster than most travelers expect." },
    { name: "Basic First-Aid Kit", description: "Sensible for the long, remote stretches of road between towns in Kinnaur.", price: "₹499", rating: 4.4, reviews: "3.9k", image: "🩹", affiliateUrl: amazonSearchUrl("travel+first+aid+kit"), tag: "Remote-travel essential", tagColor: "bg-purple-100 text-purple-700", why: "Medical facilities are sparse between the district's main towns." },
  ],
}];

export default function KinnaurGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/leh-ladakh/leh-ladakh.jpg" alt="High-altitude Himalayan valley representative of Kinnaur, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kinnaur", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kinnaur", "Sangla Valley", "Off-beat", "Himachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kinnaur Travel Guide: Apple Orchards, Kinner Kailash & Sangla Valley
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A tribal Himalayan district of apple orchards and dramatic river gorges, on the old Hindustan-Tibet road toward Spiti.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kinnaur, Himachal Pradesh" },
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
                  <h2>Why Kinnaur?</h2>
                  <p>
                    <strong>Kinnaur</strong> is a tribal Himalayan district strung along the old Hindustan-Tibet Road (NH5), where lush apple orchards give way abruptly to bare river gorges as the Sutlej cuts through the mountains. The district carries a genuinely distinctive blend of Hindu and Tibetan Buddhist culture, visible in local temples, monasteries, and village architecture that shifts noticeably as you travel deeper toward the Tibet border.
                  </p>
                  <p>
                    Most serious travelers pair Kinnaur with Spiti Valley as part of a single extended loop — the classic Kinnaur-Spiti circuit that ranks among Himachal's most rewarding, and most demanding, road trips.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏔️</span> Kinnaur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "🏔️", label: "Sacred Peak", value: "Kinner Kailash" },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Oct" },
                        { icon: "🚗", label: "Access", value: "Road via Shimla-Rampur" },
                        { icon: "🍎", label: "Known For", value: "Apple orchards" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kinnaur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Jun – Oct", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Roads are clear and weather is stable — the only realistic window for most travelers to explore the district fully." },
                      { season: "Sept", emoji: "🍎", color: "bg-orange-50 border-orange-200", mood: "Apple harvest season", text: "Orchards are at their most active and photogenic during the harvest." },
                      { season: "Nov – Apr", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Winter — heavy snow", text: "Higher sections see significant snowfall and road closures, restricting access to much of the district." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Check current road conditions before heading in, especially in shoulder months (May, October-November) when weather can turn quickly.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kinnaur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Shimla or Bhuntar/Kullu airports, both requiring a long onward drive.</li>
                    <li><strong>By Road:</strong> The practical and standard route — via Shimla, Rampur, and on to Reckong Peo (the district headquarters) on NH5.</li>
                    <li><strong>Onward travel:</strong> Reckong Peo is the main hub for permits and supplies before continuing to Sangla, Kalpa, and Chitkul.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> This is a long, scenic mountain drive rather than a quick trip — build in generous buffer time and don't try to rush the route.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kinnaur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/leh-ladakh/leh-ladakh.jpg" alt="Mountain landscape around Kinnaur" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Sangla Valley:</strong> A lush valley leading toward Chitkul, one of Kinnaur's most scenic stretches.</li>
                    <li><strong>Kalpa:</strong> A village with striking close-up views of the Kinner Kailash range, once the district's administrative centre.</li>
                    <li><strong>Kinner Kailash:</strong> A sacred peak revered by both Hindus and Buddhists, visible from multiple points in the valley.</li>
                    <li><strong>Nako village and lake:</strong> Further along toward Spiti, part of the broader Kinnaur-Spiti circuit.</li>
                    <li><strong>Reckong Peo:</strong> The district headquarters and practical hub for permits and supplies.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kinnaur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses in Reckong Peo", "Basic homestays in Sangla/Kalpa"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Orchard-view mid-range hotels", "Kalpa hillside guesthouses"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — luxury options remain limited this far into the mountains"] },
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
                  <h2>What to Eat in Kinnaur</h2>
                  <ul>
                    <li><strong>Local apples and apple products:</strong> Fresh from the district's famous orchards, especially in autumn.</li>
                    <li><strong>Himachali/Kinnauri thalis:</strong> Simple, hearty regional meals at guesthouses and small local eateries.</li>
                    <li><strong>Butter tea and Tibetan-influenced dishes:</strong> Reflecting Kinnaur's Buddhist cultural threads, especially closer to the Spiti border.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>4-Day Kinnaur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Shimla to Reckong Peo", color: "bg-amber-700", activities: ["Long scenic drive via Rampur", "Arrive Reckong Peo, check in"] },
                      { day: "Day 2", title: "Kalpa & Kinner Kailash Views", color: "bg-forest-600", activities: ["Morning: drive to Kalpa", "Views of Kinner Kailash range", "Evening: explore Kalpa village"] },
                      { day: "Day 3", title: "Sangla Valley", color: "bg-orange-600", activities: ["Drive to Sangla Valley", "Explore Kamru Fort and the valley", "Overnight in Sangla"] },
                      { day: "Day 4", title: "Onward or Return", color: "bg-purple-600", activities: ["Continue toward Chitkul (cross-reference that guide) or begin return journey", "Departure"] },
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
                          ["Accommodation/night", "₹900", "₹2,800"],
                          ["Food/day", "₹400", "₹900"],
                          ["Local transport per day", "₹500", "₹800"],
                          ["Daily total", "₹1,800", "₹4,500"],
                          ["4-Day trip total", "₹7,200", "₹18,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Costs rise if hiring a private vehicle for the full route.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kinnaur</h2>
                  <ul>
                    <li><strong>Check road conditions before travel:</strong> Especially important in shoulder season.</li>
                    <li><strong>Verify Inner Line Permit requirements:</strong> Rules for areas near the Tibet border have changed over time — confirm current status.</li>
                    <li><strong>Pair with Spiti Valley:</strong> The classic Kinnaur-Spiti circuit is the natural way to experience the full route.</li>
                    <li><strong>Carry warm layers regardless of season:</strong> Higher villages get cold even in summer.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check current road/weather conditions before departing", "Verify Inner Line Permit requirements if needed", "Combine with Spiti Valley for the full circuit", "Carry warm layers year-round", "Build in generous buffer time for the drive"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Rush the drive — road conditions demand caution", "Travel toward the Tibet border without checking permit rules", "Underestimate how cold higher villages get", "Attempt this route in heavy winter snow", "Skip carrying a basic first-aid kit"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kinnaur", "Sangla Valley", "Kinner Kailash", "Himachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KINNAUR_GEAR} destination="Kinnaur" />
              <RelatedPostsGrid currentSlug="kinnaur-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="kinnaur-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
