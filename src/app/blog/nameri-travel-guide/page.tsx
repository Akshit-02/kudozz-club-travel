// src/app/blog/nameri-travel-guide/page.tsx
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
  title: "Nameri National Park Travel Guide: Rafting & Birdwatching",
  description:
    "The complete Nameri National Park travel guide. Jia Bhoroli river rafting, white-winged wood duck birdwatching, guided nature walks, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Nameri National Park travel guide, Jia Bhoroli rafting, Nameri birdwatching, white-winged wood duck, best time to visit Nameri, how to reach Nameri, Assam river rafting, Tezpur national park",
  openGraph: {
    title: "Nameri National Park Travel Guide: Rafting & Birdwatching",
    description: "A forest park on the Jia Bhoroli River known for river rafting and some of Northeast India's best birdwatching — the complete guide to Nameri.",
    url: "https://club.kudozz.in/blog/nameri-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "River and forest landscape representative of Nameri National Park, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Nameri National Park Travel Guide: Rafting & Birdwatching", description: "River rafting and premier birdwatching on the Jia Bhoroli — the complete guide to Nameri.", images: ["/images/destinations/meghalaya/dawki-river.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/nameri-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Nameri National Park Travel Guide: Rafting & Birdwatching",
      description: "The complete Nameri National Park travel guide.",
      image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/nameri-travel-guide" },
      about: { "@type": "Place", name: "Nameri National Park", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Nameri National Park Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Nameri?", a: "One to two days covers a rafting trip on the Jia Bhoroli and a guided birdwatching walk comfortably. Combine with a Tezpur stay for a fuller regional trip." },
  { q: "What is the best time to visit Nameri?", a: "November to April is the dry season for both rafting and general park access. The park is typically closed or restricted during monsoon, roughly May to October, for safety and regeneration — verify current dates before planning a visit." },
  { q: "How do I reach Nameri?", a: "The nearest airport is Tezpur, about 35km away. Guwahati's airport is a further option at roughly 215km. Road access is via NH15." },
  { q: "Is the rafting at Nameri suitable for beginners?", a: "Yes — most sections of the Jia Bhoroli run gentle, family-friendly rapids, making it accessible for first-time rafters, unlike some of the more technical whitewater stretches elsewhere in India." },
  { q: "Can I do a jeep safari at Nameri?", a: "Nameri is unusual among Indian parks for offering guided walking nature trails on foot rather than a standard jeep-safari format — verify current access rules with the park office before your visit." },
  { q: "What makes Nameri significant for birdwatching?", a: "It's considered one of Northeast India's premier birding destinations, notably as a habitat for the white-winged wood duck — one of the rarest and most range-restricted duck species in the world." },
  { q: "What is the budget for a trip to Nameri?", a: "A budget traveler can manage on roughly ₹2,000 a day including a rafting trip, a mid-range trip closer to ₹4,500 a day at an eco-camp with full-board meals." },
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
  { id: "introduction", title: "Why Nameri?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nameri", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const NAMERI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for rafting and birdwatching on the Jia Bhoroli", emoji: "🚣",
  items: [
    { name: "Quick-Dry Clothing", description: "For the rafting trip — synthetic quick-dry fabrics handle the river spray far better than cotton.", price: "₹899", rating: 4.4, reviews: "4.1k", image: "👕", affiliateUrl: amazonSearchUrl("quick+dry+clothing+rafting"), tag: "Rafting essential", tagColor: "bg-sky-100 text-sky-700", why: "Cotton stays wet for hours after a rafting trip — quick-dry fabric dries in minutes." },
    { name: "Binoculars", description: "Essential for Nameri's genuine birding significance, especially spotting the rare white-winged wood duck.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+birdwatching"), tag: "Birding essential", tagColor: "bg-amber-100 text-amber-700", why: "Nameri's forest canopy means birds are often spotted at a distance or partially obscured — binoculars make the difference." },
    { name: "Water Shoes / Grip Sandals", description: "For wading in and out of the raft at put-in and take-out points along rocky riverbanks.", price: "₹699", rating: 4.3, reviews: "3.8k", image: "👟", affiliateUrl: amazonSearchUrl("water+shoes+river+rafting"), tag: "Rafting essential", tagColor: "bg-forest-100 text-forest-700", why: "Riverbank rocks can be slippery and sharp — proper water shoes prevent cuts and slips." },
    { name: "Dry Bag", description: "Keeps your phone, camera, and valuables safe and dry throughout the rafting trip.", price: "₹599", rating: 4.4, reviews: "5.2k", image: "🎒", affiliateUrl: amazonSearchUrl("waterproof+dry+bag+rafting"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "A dry bag is the only reliable way to keep electronics safe on a rafting trip." },
  ],
}];

export default function NameriGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="River and forest landscape representative of Nameri National Park, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Nameri National Park", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Nameri National Park", "River Rafting", "Adventure", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Nameri National Park Travel Guide: Rafting & Birdwatching
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A forest park on the Jia Bhoroli River known for river rafting and some of Northeast India's best birdwatching.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Nameri, Assam" },
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
                  <h2>Why Nameri?</h2>
                  <p>
                    <strong>Nameri National Park</strong> sits on the Jia Bhoroli River near the Arunachal Pradesh border, and stands out from most Indian parks for offering two distinct activities rather than a standard jeep safari: gentle white-water rafting on the Jia Bhoroli, and genuinely serious birdwatching — Nameri is considered one of Northeast India's premier birding destinations, notably as a habitat for the rare white-winged wood duck, one of the most range-restricted duck species on Earth.
                  </p>
                  <p>
                    Unlike most Indian tiger reserves, Nameri also permits guided walking nature trails on foot — a distinctive feature worth verifying current access for before you go.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🚣</span> Nameri at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🚣", label: "Signature Activity", value: "Jia Bhoroli rafting" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        { icon: "✈️", label: "Nearest Airport", value: "Tezpur (~35km)" },
                        { icon: "🦆", label: "Known For", value: "White-winged wood duck" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Nameri</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and the most comfortable window for both rafting and birdwatching." },
                      { season: "Mar – Apr", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Also good", text: "Warmer but still within the open safari/rafting season." },
                      { season: "May – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — closed/restricted", text: "The park is typically closed or restricted during this period for safety and regeneration — verify current dates." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most reliable window for both rafting conditions and bird activity.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Nameri</h2>
                  <ul>
                    <li><strong>By Air:</strong> Tezpur is the nearest airport, about 35km away.</li>
                    <li><strong>Alternative:</strong> Guwahati's airport is a further option at roughly 215km.</li>
                    <li><strong>By Road:</strong> Access is via NH15, straightforward from Tezpur.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book your rafting trip through an established eco-camp operator near the park — they handle permits and safety gear as part of the package.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Nameri</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Jia Bhoroli river scenery at Nameri" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Jia Bhoroli river rafting:</strong> Gentle, family-friendly rapids in most sections, run through eco-camps near the park.</li>
                    <li><strong>Birdwatching:</strong> A genuinely significant birding destination, notably for the rare white-winged wood duck.</li>
                    <li><strong>Guided nature walks:</strong> Walking trails on foot within the park, a distinctive feature among Indian parks — verify current access rules.</li>
                    <li><strong>Wildlife beyond birds:</strong> Elephants, occasional tigers, and various deer species inhabit the forest, though large-mammal sightings are not guaranteed.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Nameri</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Basic eco-camp huts", "Simple guesthouses near the park"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["River-view eco-camps with full board", "Mid-range Tezpur hotels (day-trip base)"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed riverside camps — luxury remains limited this far into the forest"] },
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
                  <h2>What to Eat Near Nameri</h2>
                  <ul>
                    <li><strong>Eco-camp thalis:</strong> Most stays serve simple, home-style Assamese and North Indian meals as part of the package.</li>
                    <li><strong>Khar and tenga:</strong> Classic Assamese dishes worth seeking out — an alkaline vegetable preparation and a light sour fish curry respectively.</li>
                    <li><strong>Pitha:</strong> Traditional Assamese rice cakes, a good local snack.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Nameri Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Rafting", color: "bg-amber-700", activities: ["Travel from Tezpur, check in at an eco-camp", "Afternoon: Jia Bhoroli rafting trip", "Evening: relax by the river"] },
                      { day: "Day 2", title: "Birdwatching & Departure", color: "bg-forest-600", activities: ["Early morning guided birdwatching walk", "Late morning: pack up and depart", "Return to Tezpur"] },
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
                          ["Accommodation/night", "₹1,200", "₹3,000"],
                          ["Food/day", "₹500", "₹1,200"],
                          ["Rafting + park entry", "₹1,500", "₹2,500"],
                          ["Daily total", "₹2,000", "₹4,500"],
                          ["2-Day trip total", "₹4,000", "₹9,000"],
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
                  <h2>Essential Travel Tips for Nameri</h2>
                  <ul>
                    <li><strong>Book rafting through an established eco-camp:</strong> They handle permits and safety gear as part of the package.</li>
                    <li><strong>Bring binoculars for the birding:</strong> Nameri's genuine ornithological significance rewards proper equipment.</li>
                    <li><strong>Verify current park access rules:</strong> Especially for walking nature trails, which are unusual among Indian parks.</li>
                    <li><strong>Combine with Tezpur:</strong> A natural 2-day pairing given the short distance.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book rafting through an established eco-camp operator", "Bring binoculars for the birdwatching", "Verify current walking-trail access rules", "Combine with a Tezpur stay", "Carry a dry bag for the rafting trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt rafting with an unverified/informal operator", "Expect a standard jeep-safari format", "Visit during monsoon closure without checking current status", "Skip binoculars if birding interests you", "Wear cotton clothing on the rafting trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Nameri National Park", "River Rafting", "Birdwatching", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={NAMERI_GEAR} destination="Nameri" />
              <RelatedPostsGrid currentSlug="nameri-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="nameri-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
