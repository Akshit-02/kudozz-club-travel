// src/app/blog/palolem-travel-guide/page.tsx
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
  title: "Palolem Beach Travel Guide: South Goa's Postcard Crescent",
  description:
    "The complete Palolem travel guide. The crescent bay, Butterfly and Honeymoon Beach, dolphin-spotting boat trips, Cotigao Wildlife Sanctuary, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Palolem travel guide, Palolem beach Goa, Butterfly Beach Goa, Honeymoon Beach Palolem, Cotigao Wildlife Sanctuary, best time to visit Palolem, how to reach Palolem, South Goa beaches",
  openGraph: {
    title: "Palolem Beach Travel Guide: South Goa's Postcard Crescent",
    description: "A curved, palm-backed South Goa beach that's kept its laid-back character far better than the North Goa strip — the complete guide to Palolem.",
    url: "https://club.kudozz.in/blog/palolem-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/alleppey.jpg", width: 1200, height: 630, alt: "Palm-lined crescent beach cove representative of Palolem, Goa" }],
  },
  twitter: { card: "summary_large_image", title: "Palolem Beach Travel Guide: South Goa's Postcard Crescent", description: "A curved, laid-back South Goa beach — the complete guide to Palolem.", images: ["/images/destinations/kerala/alleppey.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/palolem-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Palolem Beach Travel Guide: South Goa's Postcard Crescent",
      description: "The complete Palolem travel guide.",
      image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/palolem-travel-guide" },
      about: { "@type": "Place", name: "Palolem", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Palolem Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Palolem?", a: "Two days covers the main beach, a boat trip to Butterfly or Honeymoon Beach, and dolphin-spotting comfortably. Extend if you want to explore the quieter South Goa beach cluster nearby." },
  { q: "Is Palolem quieter than North Goa's beaches?", a: "Yes — Palolem has a noticeably calmer, more laid-back atmosphere than the North Goa party belt, though it does have its own beach-shack scene and mild nightlife." },
  { q: "How do I reach Butterfly Beach and Honeymoon Beach?", a: "Both are reachable by a short boat ride from Palolem, or via a coastal walk for Honeymoon Beach. Boat operators run regular trips from the main beach." },
  { q: "What is the best time to visit Palolem?", a: "November to February offers the driest, most comfortable weather. Monsoon (June–September) closes most beach infrastructure and brings rough seas." },
  { q: "How do I reach Palolem?", a: "Dabolim Airport is the nearest at roughly 40km — closer than to most North Goa beaches. Canacona is the nearest railway station, and road access is straightforward." },
  { q: "Is dolphin-spotting at Palolem worth it?", a: "Morning boat trips have a reasonably good chance of dolphin sightings, though as with any wildlife activity, it's not guaranteed. It's a pleasant outing regardless." },
  { q: "Can I combine Palolem with Agonda?", a: "Yes — Agonda is a short drive away and offers an even quieter beach experience, a natural pairing for a South Goa trip." },
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
  { id: "introduction", title: "Why Palolem?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Palolem", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PALOLEM_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the beach and boat trips", emoji: "🏖️",
  items: [
    { name: "Reef-Safe Sunscreen (SPF 50)", description: "Extended beach time and boat trips both call for strong sun protection.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "Boat trips to Butterfly Beach mean extended sun exposure with reflected glare off the water." },
    { name: "Waterproof Phone Pouch", description: "For boat trips to Butterfly and Honeymoon Beach without risking a dropped phone.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"), tag: "Boat-trip essential", tagColor: "bg-sky-100 text-sky-700", why: "Small boats and choppy water make this a real risk without protection." },
    { name: "Quick-Dry Beach Towel", description: "For a long day moving between the main beach and boat-trip coves.", price: "₹499", rating: 4.4, reviews: "3.6k", image: "🧺", affiliateUrl: amazonSearchUrl("quick+dry+beach+towel"), tag: "Beach essential", tagColor: "bg-forest-100 text-forest-700", why: "A compact quick-dry towel is far more practical than a bulky cotton one for a full beach-hopping day." },
    { name: "Binoculars", description: "Useful for dolphin-spotting trips and general coastal wildlife viewing.", price: "₹1,499", rating: 4.4, reviews: "3.1k", image: "🔭", affiliateUrl: amazonSearchUrl("compact+binoculars+travel"), tag: "Wildlife essential", tagColor: "bg-purple-100 text-purple-700", why: "Dolphin sightings are often at a distance — binoculars make a real difference." },
  ],
}];

export default function PalolemGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/alleppey.jpg" alt="Palm-lined crescent beach cove representative of Palolem, Goa" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Palolem", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Palolem", "Beaches", "South Goa", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Palolem Beach Travel Guide: South Goa's Postcard Crescent
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A curved, palm-backed South Goa beach that's kept its laid-back character far better than the North Goa strip.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Palolem, Goa" },
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
                  <h2>Why Palolem?</h2>
                  <p>
                    <strong>Palolem</strong> is widely regarded as one of Goa's most photogenic beaches — a
                    genuinely picturesque crescent-shaped bay lined with palm trees, curving gently between
                    two headlands. It carries a noticeably calmer, more laid-back atmosphere than the North
                    Goa party belt, drawing a mix of long-stay travelers and families rather than the dense
                    club scene further north.
                  </p>
                  <p>
                    That doesn't mean it's silent — Palolem has its own beach-shack and mild nightlife scene —
                    but the pace here is unmistakably gentler, and the surrounding coves and forest add real
                    variety beyond just the main stretch of sand.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏖️</span> Palolem at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🏖️", label: "Character", value: "South Goa crescent beach" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim (~40km)" },
                        { icon: "🐬", label: "Popular Activity", value: "Dolphin-spotting" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Palolem</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, warm weather with the full beach-shack season and calm seas for boat trips." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot, thinning crowds", text: "Increasingly hot with fewer travelers around as the season winds down." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — mostly shut", text: "Most beach infrastructure closes and seas turn rough, halting boat trips." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February for the best combination of weather, calm seas, and full beach-shack season.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Palolem</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dabolim Airport, roughly 40km away — notably closer than to most North Goa beaches.</li>
                    <li><strong>By Train:</strong> Canacona railway station is the nearest (cross-reference that guide, since Palolem sits within Canacona taluka), just a short drive away.</li>
                    <li><strong>By Road:</strong> Well connected along the South Goa coastal route, roughly 1-1.5 hours from Panjim.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book a morning dolphin-spotting and Butterfly Beach boat combo — it's more efficient than booking them separately and the seas are calmest early in the day.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Palolem</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/alleppey.jpg" alt="Crescent bay and palm trees at Palolem Beach" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Palolem's main crescent beach:</strong> The signature curved bay, best enjoyed at sunrise or sunset when it's quietest.</li>
                    <li><strong>Butterfly Beach:</strong> A smaller, secluded cove reachable by a short boat ride, well worth the detour.</li>
                    <li><strong>Honeymoon Beach:</strong> Another nearby cove, reachable by boat or a coastal walk.</li>
                    <li><strong>Dolphin-spotting boat trips:</strong> Morning trips from Palolem with a reasonable chance of sightings.</li>
                    <li><strong>Cotigao Wildlife Sanctuary:</strong> A forested sanctuary a short drive inland, offering a nature-focused day-trip alternative to the beach.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Palolem</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Beach huts", "Backpacker guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,600–₹3,800/night", picks: ["Cottage-style beach resorts", "Boutique guesthouses"] },
                      { tier: "Luxury", icon: "✨", range: "₹5,500–₹12,000+/night", picks: ["Premium beachfront villas"] },
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
                  <h2>What to Eat in Palolem</h2>
                  <ul>
                    <li><strong>Goan fish curry rice:</strong> The regional staple, widely available at beach shacks.</li>
                    <li><strong>Fresh seafood grills:</strong> Kingfish, prawns, and squid, often grilled to order right on the beach.</li>
                    <li><strong>International cafe menus:</strong> A reflection of Palolem's long-stay international traveler crowd.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Palolem Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Main Beach", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: relax on Palolem's main beach", "Evening: sunset and dinner at a beach shack"] },
                      { day: "Day 2", title: "Coves & Wildlife", color: "bg-forest-600", activities: ["Morning: dolphin-spotting and Butterfly Beach boat trip", "Afternoon: Cotigao Wildlife Sanctuary or Honeymoon Beach walk", "Evening: departure or onward to Agonda"] },
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
                          ["Accommodation/night", "₹700", "₹2,200", "₹8,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Boat trips/activities", "₹300", "₹800", "₹1,500"],
                          ["Daily total", "₹1,400", "₹3,900", "₹11,500"],
                          ["2-Day trip total", "₹2,800", "₹7,800", "₹23,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights/trains to Goa.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Palolem</h2>
                  <ul>
                    <li><strong>Book boat trips in the morning:</strong> Seas are calmest early, and dolphin sightings are more likely.</li>
                    <li><strong>Explore beyond the main beach:</strong> Butterfly Beach and Honeymoon Beach are genuinely worth the short boat ride.</li>
                    <li><strong>Combine with Agonda:</strong> A short drive away, for an even quieter South Goa experience.</li>
                    <li><strong>Book ahead in peak season:</strong> December-January fills up fast given Palolem's popularity.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Take a morning boat trip to Butterfly Beach", "Try dolphin-spotting before the seas get choppy", "Visit Cotigao Wildlife Sanctuary for a change of pace", "Combine with Agonda for a fuller South Goa trip", "Book accommodation early for December-January"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect North Goa-level nightlife or crowds", "Book boat trips for the afternoon expecting calm seas", "Skip the nearby coves for the main beach only", "Visit expecting open shacks during peak monsoon", "Assume dolphin sightings are guaranteed"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Palolem", "Beaches", "South Goa", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PALOLEM_GEAR} destination="Palolem" />
              <RelatedPostsGrid currentSlug="palolem-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="palolem-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
