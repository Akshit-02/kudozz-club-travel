// src/app/blog/calangute-travel-guide/page.tsx
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
  title: "Calangute Beach Travel Guide: Goa's Busiest Beach & Nightlife",
  description:
    "The complete Calangute travel guide. Water sports, beach shacks, the Saturday Night Market, where to stay, best time to visit, and a full itinerary through North Goa's busiest beach.",
  keywords:
    "Calangute travel guide, Calangute Beach, Calangute water sports, Saturday Night Market Goa, best time to visit Calangute, how to reach Calangute, North Goa beaches",
  openGraph: {
    title: "Calangute Beach Travel Guide: Goa's Busiest Beach & Nightlife",
    description: "Goa's original beach resort town, still the busiest stretch of sand on the North Goa coast — the complete guide to Calangute.",
    url: "https://club.kudozz.in/blog/calangute-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/goa/beach.jpg", width: 1200, height: 630, alt: "Busy Goan beach representative of Calangute" }],
  },
  twitter: { card: "summary_large_image", title: "Calangute Beach Travel Guide: Goa's Busiest Beach & Nightlife", description: "Goa's original, busiest beach resort town — the complete guide to Calangute.", images: ["/images/destinations/goa/beach.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/calangute-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Calangute Beach Travel Guide: Goa's Busiest Beach & Nightlife",
      description: "The complete Calangute travel guide.",
      image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/calangute-travel-guide" },
      about: { "@type": "Place", name: "Calangute", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Calangute Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Is Calangute good for a quiet beach holiday?", a: "No — Calangute is Goa's busiest, most commercial beach. If you want quiet, head to Agonda, Morjim, or Mandrem instead. Calangute suits travelers who want convenience, activity, and nightlife over solitude." },
  { q: "What is the best time to visit Calangute?", a: "November to February is peak season — dry weather and every shack, club, and water sports operator open. March to May is hotter but noticeably less crowded." },
  { q: "How do I reach Calangute?", a: "Goa's Dabolim (GOI) or Manohar International (GOX) airports serve the region, with straightforward road access to Calangute from either." },
  { q: "What water sports are available at Calangute?", a: "Parasailing, jet-skiing, and banana boat rides are widely available through beach-based operators. Negotiate prices before starting, as rates aren't always fixed." },
  { q: "Is the Saturday Night Market worth visiting?", a: "It's a well-known Goa institution for shopping and street food, held seasonally near Calangute/Arpora — verify current operating dates before planning a trip around it." },
  { q: "What is the budget for a trip to Calangute?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹4,200 a day. A 2-day trip totals roughly ₹3,200 on a budget and ₹8,400 mid-range." },
  { q: "Can I combine Calangute with Baga and Candolim?", a: "Yes — all three are within easy walking or short scooter distance of each other, and most travelers treat them as one continuous North Goa beach stretch." },
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
  { id: "introduction", title: "Why Calangute?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Calangute", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const CALANGUTE_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for beach days and water sports", emoji: "🏖️",
  items: [
    { name: "Reef-Safe Sunscreen (SPF 50)", description: "Extended beach time calls for strong, reef-safe sun protection.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "Sunburn is the top regret among travelers who underestimate a full beach day here." },
    { name: "Waterproof Phone Pouch", description: "Useful for parasailing, jet-skiing, and banana boat rides.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"), tag: "Water-sports essential", tagColor: "bg-sky-100 text-sky-700", why: "Water sports at Calangute carry a real risk of a dropped, soaked phone." },
    { name: "Comfortable Sandals", description: "For walking the busy beachfront and shack-lined promenade.", price: "₹899", rating: 4.4, reviews: "4.8k", image: "👡", affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Calangute's crowded beachfront means a lot of walking between shacks and vendors." },
    { name: "Dry Bag", description: "For keeping valuables safe during water sports activities.", price: "₹599", rating: 4.4, reviews: "3.6k", image: "🎒", affiliateUrl: amazonSearchUrl("dry+bag+water+sports"), tag: "Water-sports essential", tagColor: "bg-purple-100 text-purple-700", why: "A busy, crowded beach is not the place to leave valuables unattended." },
  ],
}];

export default function CalanguteGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/goa/beach.jpg" alt="Busy Goan beach representative of Calangute" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Calangute", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Calangute", "Beaches", "North Goa", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Calangute Beach Travel Guide: Goa's Busiest Beach & Nightlife
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Goa's original beach resort town, still the busiest stretch of sand on the North Goa coast.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Calangute, Goa" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,600 words" },
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
                  <h2>Why Calangute?</h2>
                  <p>
                    <strong>Calangute</strong> was Goa's original hippie-era beach destination, and it has since grown into the most developed and busiest beach on the North Goa coast — wall-to-wall shacks, water sports operators, and a lively, commercial atmosphere. This is the least "quiet Goa" beach on the coast, and worth saying plainly: if solitude is what you're after, this isn't it.
                  </p>
                  <p>
                    What Calangute does offer is convenience — a huge range of shacks, activities, and stays, plus a central location that makes it an easy base for exploring neighboring Baga and Candolim.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏖️</span> Calangute at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🏖️", label: "Character", value: "Goa's busiest beach" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim (GOI) / Manohar Intl (GOX)" },
                        { icon: "🏄", label: "Known For", value: "Water sports & nightlife" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Calangute</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Peak season — busiest", text: "Dry, comfortable weather with every shack and water sports operator open — also the most crowded window." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hotter, quieter", text: "Warmer and more humid, but noticeably fewer crowds and often better shack prices." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — shacks close", text: "Most shacks and water sports operators shut for the season; not a beach-focused window." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late November or early March — good weather without peak-season crowds at their worst.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Calangute</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dabolim (GOI) or Manohar International (GOX) airports, both with straightforward road access.</li>
                    <li><strong>By Road:</strong> Well connected throughout North Goa — a short drive from Panjim.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Rent a scooter to easily move between Calangute, Baga, and Candolim rather than relying on taxis for short hops.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Calangute</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/goa/beach.jpg" alt="Beach scene at Calangute" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Water sports:</strong> Parasailing, jet-skiing, and banana boat rides widely available through beach operators.</li>
                    <li><strong>Beach shacks:</strong> A dense strip of shacks offering seafood, cocktails, and beach loungers.</li>
                    <li><strong>Saturday Night Market:</strong> A well-known Goa shopping and street-food institution nearby — verify current seasonal operating dates.</li>
                    <li><strong>Base for Baga and Candolim:</strong> Both within easy walking or short scooter distance.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Calangute</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near the beach road", "Budget hotels a short walk from sand"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Beachfront mid-range hotels", "Resort-style stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹9,000–₹18,000+/night", picks: ["Premium beachfront resorts"] },
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
                  <h2>What to Eat in Calangute</h2>
                  <ul>
                    <li><strong>Beach shack seafood:</strong> Fresh grilled and curried catch at nearly every shack along the beach.</li>
                    <li><strong>Fish curry rice:</strong> The everyday Goan staple.</li>
                    <li><strong>Vindaloo and Goan-Portuguese dishes:</strong> Widely available at Calangute's dense restaurant scene.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Calangute Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Beach & Water Sports", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: beach time and water sports", "Evening: shack dinner and beachfront walk"] },
                      { day: "Day 2", title: "Baga & Candolim", color: "bg-forest-600", activities: ["Morning: scooter/walk to Baga for nightlife-area exploring", "Afternoon: Candolim beach and Fort Aguada nearby", "Evening: return, departure prep"] },
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
                          ["Accommodation/night", "₹1,200", "₹4,000", "₹13,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          ["Water sports/activities", "₹800", "₹1,500", "₹3,000"],
                          ["Daily total", "₹1,600", "₹4,200", "₹12,000"],
                          ["2-Day trip total", "₹3,200", "₹8,400", "₹24,000"],
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
                  <h2>Essential Travel Tips for Calangute</h2>
                  <ul>
                    <li><strong>Go elsewhere for quiet:</strong> If solitude matters to you, try Agonda, Morjim, or Mandrem instead.</li>
                    <li><strong>Negotiate water sports prices:</strong> Rates aren't always fixed — confirm before starting.</li>
                    <li><strong>Use it as a base:</strong> Central location makes exploring Baga/Candolim easy.</li>
                    <li><strong>Book ahead in peak season:</strong> December–January fills up fast.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Negotiate water sports prices before starting", "Use Calangute as a base for Baga/Candolim", "Book accommodation ahead in peak season", "Try beach shack seafood", "Rent a scooter for easy North Goa mobility"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a quiet, secluded beach experience", "Skip negotiating water sports prices", "Leave valuables unattended on the busy beach", "Visit expecting open shacks during monsoon", "Assume Calangute represents all of Goa's coastline"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Calangute", "Beaches", "North Goa", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={CALANGUTE_GEAR} destination="Calangute" />
              <RelatedPostsGrid currentSlug="calangute-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="calangute-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
