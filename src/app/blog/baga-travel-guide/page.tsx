// src/app/blog/baga-travel-guide/page.tsx
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
  title: "Baga Beach Travel Guide: Nightlife, Water Sports & Tito's Lane",
  description:
    "The complete Baga travel guide. Tito's Lane nightlife, water sports, dolphin-spotting boat trips, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Baga travel guide, Baga Beach, Tito's Lane, Baga nightlife, Baga water sports, best time to visit Baga, how to reach Baga, North Goa nightlife",
  openGraph: {
    title: "Baga Beach Travel Guide: Nightlife, Water Sports & Tito's Lane",
    description: "Goa's most concentrated nightlife strip, packed with beach shacks, clubs, and every water sport on the coast — the complete guide to Baga.",
    url: "https://club.kudozz.in/blog/baga-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/andaman/hero.jpg", width: 1200, height: 630, alt: "Coastal beach scenery representative of Baga, Goa" }],
  },
  twitter: { card: "summary_large_image", title: "Baga Beach Travel Guide: Nightlife, Water Sports & Tito's Lane", description: "Goa's most concentrated nightlife strip — the complete guide to Baga.", images: ["/images/destinations/andaman/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/baga-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Baga Beach Travel Guide: Nightlife, Water Sports & Tito's Lane",
      description: "The complete Baga travel guide.",
      image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/baga-travel-guide" },
      about: { "@type": "Place", name: "Baga", address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Baga Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "What is Tito's Lane?", a: "A strip of long-running clubs and bars in Baga that's become genuinely iconic to Goa's party reputation — the centre of the area's nightlife scene." },
  { q: "How many days do I need in Baga?", a: "One to two days covers the beach, water sports, and a night out on Tito's Lane. Most travelers combine Baga with neighboring Calangute given how close the two are." },
  { q: "What is the best time to visit Baga?", a: "November to February is peak nightlife season with everything open. March to May is quieter and less crowded." },
  { q: "How do I reach Baga?", a: "Goa's Dabolim (GOI) or Manohar International (GOX) airports serve the region, with straightforward road access to Baga from either." },
  { q: "Can I go dolphin-watching from Baga?", a: "Yes — boat trips depart from Baga River for dolphin-spotting, typically in the morning before crowds build." },
  { q: "What is the budget for a trip to Baga?", a: "A budget traveler can manage on roughly ₹1,700 a day, a mid-range trip closer to ₹4,500 a day, factoring in nightlife costs." },
  { q: "Is Baga safe at night?", a: "Baga is a well-established, busy tourist area with plenty of foot traffic even late at night. As anywhere, keep an eye on drinks, watch belongings in crowds, and use registered taxis or pre-arranged transport rather than wandering unfamiliar side streets alone." },
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
  { id: "introduction", title: "Why Baga?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Baga", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BAGA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for beach days and nights out on Tito's Lane", emoji: "🎉",
  items: [
    { name: "Reef-Safe Sunscreen (SPF 50)", description: "Extended beach time before the nightlife starts calls for strong sun protection.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "A day at Baga beach precedes most nightlife plans — sunburn undermines the evening." },
    { name: "Comfortable Going-Out Footwear", description: "For a night navigating Tito's Lane's clubs, bars, and crowded lanes.", price: "₹1,299", rating: 4.4, reviews: "4.1k", image: "👞", affiliateUrl: amazonSearchUrl("comfortable+going+out+shoes"), tag: "Nightlife essential", tagColor: "bg-purple-100 text-purple-700", why: "Tito's Lane involves a lot of standing and walking between venues." },
    { name: "Waterproof Phone Pouch", description: "For the beach, water sports, and dolphin-watching boat trips.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"), tag: "Water essential", tagColor: "bg-sky-100 text-sky-700", why: "Between water sports and boat trips, protecting your phone matters at Baga." },
    { name: "Small Cross-Body Bag", description: "For keeping essentials secure through crowded nightlife venues.", price: "₹799", rating: 4.4, reviews: "3.2k", image: "🎒", affiliateUrl: amazonSearchUrl("cross+body+travel+bag"), tag: "Nightlife essential", tagColor: "bg-forest-100 text-forest-700", why: "Crowded clubs and bars are where pickpocketing risk is highest." },
  ],
}];

export default function BagaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/andaman/hero.jpg" alt="Coastal beach scenery representative of Baga, Goa" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Baga", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Baga", "Nightlife", "Beaches", "Goa"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Baga Beach Travel Guide: Nightlife, Water Sports & Tito's Lane
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Goa's most concentrated nightlife strip, packed with beach shacks, clubs, and every water sport on the coast.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Baga, Goa" },
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
                  <h2>Why Baga?</h2>
                  <p>
                    <strong>Baga Beach</strong> is the centre of Goa's most concentrated nightlife scene, anchored by <strong>Tito's Lane</strong> — a strip of long-running clubs and bars that's become genuinely iconic to Goa's party reputation. By day it's a busy beach with water sports operators lining the sand; by night it's where Goa's party crowd converges.
                  </p>
                  <p>
                    Baga sits immediately next to Calangute, and many travelers treat the two as one continuous stretch — walking between them along the beach or a short scooter ride inland.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🎉</span> Baga at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🎊", label: "Known For", value: "Tito's Lane nightlife" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim (GOI) / Manohar Intl (GOX)" },
                        { icon: "🐬", label: "Bonus", value: "Dolphin-watching boat trips" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,700 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Baga</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "🎉", color: "bg-amber-50 border-amber-200", mood: "Peak nightlife season", text: "Every club and shack open, biggest crowds, liveliest atmosphere on Tito's Lane." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Quieter", text: "Hotter weather, fewer crowds, still a workable window for beach time and nightlife." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — shacks close", text: "Most beach shacks and water sports operators shut for the season." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to January for the full nightlife experience, or late February for good weather with slightly thinner crowds.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Baga</h2>
                  <ul>
                    <li><strong>By Air:</strong> Dabolim (GOI) or Manohar International (GOX) airports, with straightforward road access.</li>
                    <li><strong>By Road:</strong> A short drive or scooter ride from Calangute and other North Goa beach towns.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book a dolphin-watching boat trip in the morning before the beach crowds build — Baga River departures get busy later in the day.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Baga</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/andaman/hero.jpg" alt="Beach and coastal scenery at Baga" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Tito's Lane:</strong> Goa's most iconic nightlife strip — long-running clubs and bars.</li>
                    <li><strong>Water sports:</strong> Parasailing, jet-skiing, and banana boat rides along the beach.</li>
                    <li><strong>Dolphin-watching boat trips:</strong> Depart from Baga River, typically in the morning.</li>
                    <li><strong>Calangute walk:</strong> Baga connects seamlessly with neighboring Calangute along the beach.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Baga</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near Tito's Lane", "Budget hotels a short walk from the beach"] },
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
                  <h2>What to Eat in Baga</h2>
                  <ul>
                    <li><strong>Beach shack seafood:</strong> Fresh grilled and curried catch at shacks along the sand.</li>
                    <li><strong>Late-night eats:</strong> A dense cluster of restaurants and food stalls around Tito's Lane stay open late.</li>
                    <li><strong>Cocktails and feni:</strong> Goa's local cashew/coconut spirit, widely served at Baga's bars.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Baga Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Beach & Water Sports", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: dolphin-watching boat trip", "Afternoon: beach time and water sports", "Night: Tito's Lane"] },
                      { day: "Day 2", title: "Calangute Walk & Departure", color: "bg-forest-600", activities: ["Morning: recovery, walk toward Calangute", "Afternoon: shopping and beach time", "Departure"] },
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
                          ["Food/day", "₹450", "₹1,100", "₹2,500"],
                          ["Nightlife/activities", "₹800", "₹2,000", "₹5,000"],
                          ["Daily total", "₹1,700", "₹4,500", "₹13,000"],
                          ["2-Day trip total", "₹3,400", "₹9,000", "₹26,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Nightlife spending varies significantly by venue.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Baga</h2>
                  <ul>
                    <li><strong>Pace your nightlife:</strong> Tito's Lane is easy to overdo on night one.</li>
                    <li><strong>Book a morning dolphin trip:</strong> Before crowds build later in the day.</li>
                    <li><strong>Keep valuables secure:</strong> Crowded clubs and bars carry pickpocketing risk.</li>
                    <li><strong>Use registered transport at night:</strong> Rather than wandering unfamiliar side streets alone.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a morning dolphin-watching trip", "Pace nightlife across your stay", "Keep valuables secure in crowded venues", "Use registered taxis for night transport", "Combine with a Calangute beach walk"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Leave drinks unattended in crowded venues", "Overdo Tito's Lane on your first night", "Wander unfamiliar side streets alone late at night", "Expect a quiet beach experience", "Visit expecting open nightlife during monsoon"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Baga", "Nightlife", "Beaches", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BAGA_GEAR} destination="Baga" />
              <RelatedPostsGrid currentSlug="baga-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="baga-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
