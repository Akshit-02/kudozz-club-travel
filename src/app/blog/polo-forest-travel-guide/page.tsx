// src/app/blog/polo-forest-travel-guide/page.tsx
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
  title: "Polo Forest Travel Guide: Ruined Temples in the Aravalli Jungle",
  description:
    "The complete Polo Forest travel guide. 15th-century temple ruins, Harnav Dam, camping, where to stay, best time to visit, and a full itinerary through Gujarat's most off-the-radar forest destination.",
  keywords:
    "Polo Forest travel guide, Vijaynagar Gujarat, Polo Forest ruins, Harnav Dam, best time to visit Polo Forest, how to reach Polo Forest, Polo Forest camping, Sabarkantha forest Gujarat",
  openGraph: {
    title: "Polo Forest Travel Guide: Ruined Temples in the Aravalli Jungle",
    description: "15th-century temple ruins swallowed by dense Aravalli forest, one of Gujarat's most genuinely off-the-radar destinations — the complete guide to Polo Forest.",
    url: "https://club.kudozz.in/blog/polo-forest-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Dense forest and river scenery representative of Polo Forest, Gujarat" }],
  },
  twitter: { card: "summary_large_image", title: "Polo Forest Travel Guide: Ruined Temples in the Aravalli Jungle", description: "15th-century ruins swallowed by dense forest — the complete guide to Polo Forest.", images: ["/images/destinations/meghalaya/dawki-river.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/polo-forest-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Polo Forest Travel Guide: Ruined Temples in the Aravalli Jungle",
      description: "The complete Polo Forest travel guide.",
      image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/polo-forest-travel-guide" },
      about: { "@type": "Place", name: "Polo Forest", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Polo Forest Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need at Polo Forest?", a: "One to two days is enough — a day trip covers the main temple ruins and a walk along the Harnav River, while an overnight camping trip lets you experience the forest at a slower pace." },
  { q: "What is the best time to visit Polo Forest?", a: "October to February for the most comfortable weather. The monsoon (June–September) brings the lushest greenery but access roads can be affected by rain." },
  { q: "How do I reach Polo Forest?", a: "The nearest airport is Ahmedabad, about 150km away. Road is the only practical route to this genuinely remote destination — there's no rail access." },
  { q: "Can I camp at Polo Forest?", a: "Yes — camping is a popular option here given the limited formal accommodation and the forest's genuinely undeveloped character, a rarity in a largely dry state." },
  { q: "What ruins are at Polo Forest?", a: "A cluster of 15th-century Hindu and Jain temple ruins, largely overtaken by dense Aravalli forest vegetation over the centuries, giving the site an atmospheric, rediscovered-ruins character." },
  { q: "Is Polo Forest crowded?", a: "No — this is a genuinely off-the-radar destination with minimal infrastructure and visitor facilities, appealing specifically to travelers seeking a quiet nature-and-ruins experience." },
  { q: "What is the budget for a trip to Polo Forest?", a: "A budget traveler can manage on roughly ₹1,200 a day if camping, higher if opting for one of the limited guesthouse options nearby. This is a low-cost destination overall given its minimal infrastructure." },
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
  { id: "introduction", title: "Why Polo Forest?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Polo Forest", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const POLO_FOREST_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for forest walks and camping among the ruins", emoji: "🌲",
  items: [
    { name: "Sturdy Walking Shoes", description: "For navigating forest paths and uneven terrain around the scattered temple ruins.", price: "₹2,499", rating: 4.4, reviews: "5.6k", image: "🥾", affiliateUrl: amazonSearchUrl("sturdy+trekking+shoes+forest"), tag: "Trip essential", tagColor: "bg-amber-100 text-amber-700", why: "Paths through the forest and around the ruins are uneven and often overgrown." },
    { name: "Insect Repellent", description: "Dense forest and riverside settings make mosquitoes and insects a real presence, especially at dusk.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "This is genuinely dense forest terrain, unusual for Gujarat, and insects are more of a factor here than at most of the state's other destinations." },
    { name: "Camping Tent & Sleeping Bag", description: "For an overnight stay given the area's limited formal accommodation.", price: "₹3,499", rating: 4.4, reviews: "2.8k", image: "⛺", affiliateUrl: amazonSearchUrl("camping+tent+sleeping+bag+set"), tag: "Overnight essential", tagColor: "bg-sky-100 text-sky-700", why: "Camping is genuinely one of the best ways to experience Polo Forest given the minimal nearby lodging." },
    { name: "Reusable Water Bottle & Supplies", description: "Facilities are minimal — carry sufficient water and food for the duration of your visit.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Non-negotiable", tagColor: "bg-purple-100 text-purple-700", why: "This is a genuinely remote, low-infrastructure destination — self-sufficiency matters." },
  ],
}];

export default function PoloForestGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Dense forest and river scenery representative of Polo Forest, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Polo Forest", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Polo Forest", "Vijaynagar", "Off-beat", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Polo Forest Travel Guide: Ruined Temples in the Aravalli Jungle
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              15th-century temple ruins swallowed by dense Aravalli forest, one of Gujarat's most genuinely off-the-radar destinations.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Polo Forest, Gujarat" },
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
                  <h2>Why Polo Forest?</h2>
                  <p>
                    <strong>Polo Forest</strong>, near Vijaynagar in northern Gujarat's Sabarkantha district, is a genuinely off-the-radar destination — a cluster of 15th-century Hindu and Jain temple ruins scattered through dense Aravalli forest, largely overtaken by vegetation over the centuries. Unlike more polished heritage sites, these ruins feel genuinely rediscovered, half-swallowed by trees and roots.
                  </p>
                  <p>
                    The forest itself is part of the broader Harnav river valley ecosystem — a rare pocket of real, dense greenery in a largely dry state, making it a popular spot for camping and light forest walks as much as for the ruins themselves.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌲</span> Polo Forest at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🛕", label: "Known For", value: "15th-century forest temple ruins" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Ahmedabad (~150km)" },
                        { icon: "🏕️", label: "Best Suited For", value: "Camping, quiet nature walks" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200+" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Polo Forest</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for forest walks, camping, and exploring the ruins." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Heat builds significantly, making extended outdoor time less comfortable." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — lush but access-limited", text: "The forest is at its greenest, but access roads can be affected by rain." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February — the most comfortable window for forest walks and camping.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Polo Forest</h2>
                  <ul>
                    <li><strong>By Air:</strong> Ahmedabad Airport, about 150km away, is the nearest option.</li>
                    <li><strong>By Road:</strong> The only practical route — a genuinely remote destination requiring a dedicated drive.</li>
                    <li><strong>By Train:</strong> No direct rail access; road travel is essential.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Fill up on fuel and supplies before heading in — options thin out considerably once you're off the main highway toward Vijaynagar.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Polo Forest</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Forest and river scenery around Polo Forest" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>15th-century temple ruins:</strong> Hindu and Jain shrines scattered through the forest, half-swallowed by vegetation.</li>
                    <li><strong>Harnav Dam and River:</strong> Running through the forest, adding to its greenery and a good spot for a quiet walk.</li>
                    <li><strong>Camping:</strong> A genuinely rewarding way to experience the forest overnight, given limited formal lodging nearby.</li>
                    <li><strong>Light forest trekking:</strong> Undeveloped trails through genuinely dense Aravalli forest, a rarity in Gujarat.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Polo Forest</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Camping", icon: "⛺", range: "₹500–₹1,500/night", picks: ["Self-arranged camping within permitted areas", "Small operator-run camping setups"] },
                      { tier: "Budget Guesthouse", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic guesthouses in Vijaynagar", "Simple forest-department accommodation, where available"] },
                      { tier: "Mid-Range", icon: "🏨", range: "Limited options", picks: ["A small number of better-appointed stays nearby — options remain genuinely limited given the area's remoteness"] },
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
                  <h2>What to Eat Near Polo Forest</h2>
                  <p>Dining options are minimal — most visitors carry their own supplies.</p>
                  <ul>
                    <li><strong>Self-carried supplies:</strong> Given minimal facilities, most visitors bring their own food and water.</li>
                    <li><strong>Simple local eateries in Vijaynagar:</strong> Basic Gujarati meals available in the nearby town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Polo Forest Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Ruins", color: "bg-amber-700", activities: ["Arrive, set up camp or check in", "Afternoon: explore the temple ruins", "Evening: relax by the Harnav River"] },
                      { day: "Day 2", title: "Forest Walk & Departure", color: "bg-forest-600", activities: ["Morning: light forest trekking", "Late morning: pack up", "Afternoon: departure"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Camping", "Guesthouse"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹500", "₹1,300"],
                          ["Food/day (self-carried or local)", "₹300", "₹500"],
                          ["Local transport per day", "₹400", "₹400"],
                          ["Daily total", "₹1,200", "₹2,200"],
                          ["2-Day trip total", "₹2,400", "₹4,400"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Prices reflect the area's minimal, low-cost infrastructure.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Polo Forest</h2>
                  <ul>
                    <li><strong>Carry your own supplies:</strong> Facilities are genuinely minimal — bring food, water, and essentials.</li>
                    <li><strong>Fuel up before heading in:</strong> Options thin out considerably off the main highway.</li>
                    <li><strong>Consider camping:</strong> One of the best ways to experience the forest given limited lodging.</li>
                    <li><strong>Set expectations accordingly:</strong> This is a quiet, undeveloped destination, not a polished tourist stop.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Carry sufficient food, water, and supplies", "Consider camping for the fullest experience", "Fuel up and stock supplies before heading in", "Wear sturdy shoes for uneven forest terrain", "Set realistic, low-infrastructure expectations"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect polished tourist infrastructure", "Head in without carrying your own food and water", "Skip fueling up before the final stretch of drive", "Wander deep into unmarked forest areas alone", "Expect direct rail or reliable public transport access"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Polo Forest", "Vijaynagar", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={POLO_FOREST_GEAR} destination="Polo Forest" />
              <RelatedPostsGrid currentSlug="polo-forest-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="polo-forest-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
