// src/app/blog/dudhsagar-falls-travel-guide/page.tsx
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
  title: "Dudhsagar Falls Travel Guide: Jeep Safari & Best Time to Visit",
  description:
    "The complete Dudhsagar Falls travel guide. Jeep safari access from Kulem, the Braganza Ghat train view, swimming safety, best time to visit, and a full itinerary through Goa's tallest waterfall.",
  keywords:
    "Dudhsagar Falls travel guide, Dudhsagar jeep safari, Kulem Dudhsagar, Dudhsagar Falls Goa, best time to visit Dudhsagar Falls, how to reach Dudhsagar Falls, Goa waterfall trek",
  openGraph: {
    title: "Dudhsagar Falls Travel Guide: Jeep Safari & Best Time to Visit",
    description: "A four-tiered waterfall dropping 310 metres through the Western Ghats, reached by jeep safari through a tiger reserve — the complete guide to Dudhsagar Falls.",
    url: "https://club.kudozz.in/blog/dudhsagar-falls-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/abbey-falls.jpg", width: 1200, height: 630, alt: "Multi-tiered waterfall in dense forest representative of Dudhsagar Falls, Goa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dudhsagar Falls Travel Guide: Jeep Safari & Best Time to Visit",
    description: "A four-tiered waterfall reached by jeep safari through the Western Ghats — the complete guide to Dudhsagar Falls.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/dudhsagar-falls-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Dudhsagar Falls Travel Guide: Jeep Safari & Best Time to Visit",
          description: "The complete Dudhsagar Falls travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dudhsagar-falls-travel-guide" },
          about: { "@type": "Place", name: "Dudhsagar Falls", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Dudhsagar Falls Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How do I get to Dudhsagar Falls?", a: "Most visitors take a shared jeep safari from Kulem (Collem), the standard departure point, since private vehicles are generally restricted on the approach route through the forest. Book through a registered local jeep operator." },
  { q: "What is the best time to visit Dudhsagar Falls?", a: "June to September (monsoon) brings the falls to their most dramatic full flow, though access can be more difficult in the heaviest rain. October to February offers calmer, more reliably accessible conditions with still-solid flow." },
  { q: "Can I swim at Dudhsagar Falls?", a: "Swimming is sometimes permitted at the base pools, but this depends entirely on current water level and safety conditions — check locally before entering the water, especially in monsoon when currents can be dangerous." },
  { q: "Can I see Dudhsagar Falls from a train?", a: "Yes — the falls are visible from passing trains on the Braganza Ghat railway line, offering a scenic if brief alternate view for those not doing the jeep safari." },
  { q: "Is there a trek option instead of the jeep safari?", a: "Yes, a trekking route exists as an alternative for more adventurous visitors, though current trail access and any permit requirements should be verified locally before attempting it." },
  { q: "How far is Dudhsagar Falls from the Goa beaches?", a: "Roughly 65km from Dabolim Airport, and a similar distance from most North and South Goa beach towns — Kulem is the practical hub, reachable in about 1.5-2 hours by road from most of Goa." },
  { q: "Is Dudhsagar Falls part of a wildlife sanctuary?", a: "Yes — it sits within the Bhagwan Mahavir Wildlife Sanctuary and Mollem National Park, on the Goa-Karnataka border, which is why jeep access is regulated." },
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
  { id: "introduction", title: "Why Dudhsagar Falls?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dudhsagar Falls", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DUDHSAGAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the jeep safari and waterfall base pools",
    emoji: "💦",
    items: [
      { name: "Quick-Dry Clothing", description: "The jeep safari and any swimming at the base pools will get you wet — quick-dry fabrics are far more comfortable than cotton.", price: "₹799", rating: 4.4, reviews: "4.6k", image: "👕", affiliateUrl: amazonSearchUrl("quick+dry+travel+clothing"), tag: "Waterfall essential", tagColor: "bg-sky-100 text-sky-700", why: "A soaked cotton outfit for the bumpy jeep ride back is a common regret among first-time visitors." },
      { name: "Water Shoes / Grip Sandals", description: "For the wet, rocky terrain around the base pools and the jeep-safari embarkation point.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🥾", affiliateUrl: amazonSearchUrl("water+shoes+grip+sandals"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Slippery rocks near the falls are where most minor injuries happen at Dudhsagar." },
      { name: "Dry Bag", description: "For keeping phones, wallets, and other valuables safe during the jeep ride and any time near the water.", price: "₹599", rating: 4.4, reviews: "3.5k", image: "🎒", affiliateUrl: amazonSearchUrl("waterproof+dry+bag+small"), tag: "Waterfall essential", tagColor: "bg-purple-100 text-purple-700", why: "The jeep safari route crosses water and the base pools carry a real risk of a dropped, soaked phone." },
      { name: "Rain Layer", description: "Useful if visiting during monsoon, when the falls are at their most dramatic but the weather is genuinely wet.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Monsoon essential", tagColor: "bg-forest-100 text-forest-700", why: "Monsoon is when Dudhsagar looks its best — and when you're most likely to need a rain layer." },
    ],
  },
];

export default function DudhsagarFallsGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Multi-tiered waterfall in dense forest representative of Dudhsagar Falls, Goa" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dudhsagar Falls", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dudhsagar Falls", "Western Ghats", "Off-beat", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dudhsagar Falls Travel Guide: Jeep Safari & Best Time to Visit
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A four-tiered waterfall dropping 310 metres through the Western Ghats, reached by jeep safari through a tiger reserve.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dudhsagar Falls, Goa" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
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
                  <h2>Why Dudhsagar Falls?</h2>
                  <p>
                    <strong>Dudhsagar Falls</strong> — "Sea of Milk," named for its frothy white cascade — is one of India's tallest waterfalls at roughly 310 metres, dropping in four dramatic tiers on the Mandovi River right at the Goa-Karnataka border. It sits inside the Bhagwan Mahavir Wildlife Sanctuary and Mollem National Park, which is exactly why getting there isn't a simple drive-up: access runs through a regulated shared jeep safari rather than private vehicles.
                  </p>
                  <p>
                    That regulation is part of what keeps the forest around it genuinely wild, and the jeep ride itself — bumping through dense Western Ghats forest before the falls suddenly open up ahead — is half the experience.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>💦</span> Dudhsagar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "💦", label: "Height", value: "~310m, four tiers" },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Sep (peak flow)" },
                        { icon: "🚙", label: "Access", value: "Jeep safari from Kulem" },
                        { icon: "🌲", label: "Setting", value: "Bhagwan Mahavir Sanctuary" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dudhsagar Falls</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Peak flow — most dramatic", text: "The falls are at their fullest and most spectacular, though monsoon rain can make the jeep route rougher and occasionally restrict access." },
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Calmer, more reliably accessible conditions with still-solid flow and comfortable weather for the jeep ride." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Lean flow", text: "Water levels drop noticeably by summer — still visitable, but a less dramatic sight than during or right after monsoon." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late September to November — the falls still carry strong post-monsoon flow, and the jeep route is far more reliable than at peak monsoon.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dudhsagar Falls</h2>
                  <ul>
                    <li><strong>By Jeep Safari:</strong> The standard route — shared jeeps depart from Kulem (Collem), booked through registered local operators, since private vehicles are generally restricted on the approach.</li>
                    <li><strong>By Train:</strong> The falls are visible from passing trains on the scenic Braganza Ghat line — a brief but genuinely striking alternate view.</li>
                    <li><strong>By Air:</strong> Dabolim Airport is the nearest, about 65km from Kulem.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Arrive at Kulem early morning — jeep queues build up quickly as the day goes on, especially on weekends and in peak season.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Dudhsagar Falls</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Waterfall and forest scenery at Dudhsagar Falls" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Jeep safari to the falls:</strong> The core experience — a bumpy, scenic forest drive ending at the base of the falls.</li>
                    <li><strong>Base pool swimming (conditions permitting):</strong> Check current safety conditions locally before entering the water.</li>
                    <li><strong>Braganza Ghat train viewing:</strong> A scenic, brief alternate way to see the falls without the jeep safari.</li>
                    <li><strong>Trekking route:</strong> An alternative for more adventurous visitors — verify current trail access before attempting it.</li>
                    <li><strong>Mollem National Park:</strong> The surrounding forest, worth combining as a separate stop (cross-reference the Mollem guide).</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Dudhsagar Falls</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic guesthouses in Kulem", "Forest-department rest houses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Eco-resorts near Mollem", "Mid-range hotels in Ponda or Margao"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Most travellers day-trip from Goa's beach towns rather than staying overnight near the falls"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most visitors treat Dudhsagar as a day trip from their Goa beach base rather than an overnight destination.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Dudhsagar Falls</h2>
                  <ul>
                    <li><strong>Kulem's small local eateries:</strong> Simple Goan and North Indian fare near the jeep departure point.</li>
                    <li><strong>Packed snacks:</strong> Most visitors carry their own food and water, since options near the falls themselves are minimal.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Day-Trip Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Kulem & Jeep Safari", color: "bg-amber-700", activities: ["Arrive at Kulem early", "Board a shared jeep safari", "Reach the base of Dudhsagar Falls"] },
                      { day: "Midday", title: "At the Falls", color: "bg-forest-600", activities: ["Explore the base pools (conditions permitting)", "Photography and a packed lunch", "Return jeep ride"] },
                      { day: "Afternoon", title: "Return", color: "bg-orange-600", activities: ["Drive back to your Goa base", "Optional stop at Mollem National Park en route"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Per Person (approx.)"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Jeep safari (shared)", "₹500–₹700"],
                          ["Food/snacks", "₹300–₹500"],
                          ["Local transport to Kulem", "₹500–₹1,000"],
                          ["Day-trip total", "₹1,300–₹2,200"],
                        ].map(([exp, cost], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Jeep safari cost is typically shared among a group and varies by operator and season.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Dudhsagar Falls</h2>
                  <ul>
                    <li><strong>Book through registered jeep operators only:</strong> This is standard practice and avoids access issues on the regulated route.</li>
                    <li><strong>Check swimming safety before entering the base pools:</strong> Conditions vary with rainfall and season.</li>
                    <li><strong>Arrive early:</strong> Jeep queues build up through the day, especially on weekends.</li>
                    <li><strong>Verify trekking-route access if considering that option:</strong> Rules and conditions can change.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book through a registered jeep operator at Kulem", "Arrive early to beat the queues", "Check base-pool swimming safety before entering", "Carry quick-dry clothing and a dry bag", "Combine with a Mollem National Park stop"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt to drive a private vehicle on the restricted route", "Swim without checking current safety conditions", "Arrive late expecting short jeep queues", "Skip a dry bag and risk soaking your valuables", "Visit expecting swimming to always be permitted"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dudhsagar Falls", "Western Ghats", "Off-beat", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DUDHSAGAR_GEAR} destination="Dudhsagar Falls" />
              <RelatedPostsGrid currentSlug="dudhsagar-falls-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="dudhsagar-falls-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
