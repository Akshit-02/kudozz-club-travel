// src/app/blog/araku-valley-travel-guide/page.tsx
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
  title: "Araku Valley Travel Guide: Coffee Hills & the Train Journey Through 58 Tunnels",
  description:
    "The complete Araku Valley travel guide. The scenic Visakhapatnam-Araku train, Araku coffee, tribal markets, Borra Caves, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Araku Valley travel guide, Araku train Visakhapatnam, Araku coffee, Eastern Ghats Andhra Pradesh, best time to visit Araku Valley, how to reach Araku Valley, Borra Caves Araku",
  openGraph: {
    title: "Araku Valley Travel Guide: Coffee Hills & the Train Journey Through 58 Tunnels",
    description: "A coffee-growing tribal valley in the Eastern Ghats, reached by a train ride through 58 tunnels and dozens of bridges — the complete guide to Araku Valley.",
    url: "https://club.kudozz.in/blog/araku-valley-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty coffee hills representative of Araku Valley, Andhra Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Araku Valley Travel Guide: Coffee Hills & the Train Journey Through 58 Tunnels", description: "A famous scenic train ride and coffee-growing tribal hills — the complete guide to Araku Valley.", images: ["/images/destinations/coorg/coorg.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/araku-valley-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Araku Valley Travel Guide: Coffee Hills & the Train Journey Through 58 Tunnels",
      description: "The complete Araku Valley travel guide.",
      image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/araku-valley-travel-guide" },
      about: { "@type": "Place", name: "Araku Valley", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Araku Valley Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Araku Valley?", a: "Two days combined with a Visakhapatnam base covers the train journey, Araku's main sights, and Borra Caves comfortably." },
  { q: "What is the best time to visit Araku Valley?", a: "October to March is coolest and most comfortable for the hill terrain. Monsoon (June–September) brings lush greenery but can carry landslide risk on the train route in some years — verify current conditions." },
  { q: "How do I book the Araku train from Visakhapatnam?", a: "Book well in advance through Indian Railways' official booking channels — this is one of India's most popular scenic train routes and seats sell out, especially on weekends and holidays." },
  { q: "Is the Araku train ride really that scenic?", a: "Yes — it passes through roughly 58 tunnels and numerous bridges/viaducts as it climbs into the Eastern Ghats, widely considered one of India's most scenic train journeys." },
  { q: "What is Araku coffee?", a: "Coffee grown in the surrounding hills, which has developed a genuine specialty-coffee reputation in recent years. A dedicated coffee museum/experience centre in Araku offers insight into local cultivation and processing." },
  { q: "Can I combine Araku Valley with Borra Caves?", a: "Yes — Borra Caves sit en route between Visakhapatnam and Araku, and most visitors combine both in a single trip." },
  { q: "What is the budget for a trip to Araku Valley?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹4,000 a day, plus the train fare as a separate line item." },
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
  { id: "introduction", title: "Why Araku Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Araku Valley", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const ARAKU_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the train journey and hill exploring", emoji: "☕",
  items: [
    { name: "Light Warm Layer", description: "Araku's hill elevation means cooler mornings than the coastal plains below.", price: "₹1,499", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("light+warm+layer+travel"), tag: "Hill essential", tagColor: "bg-sky-100 text-sky-700", why: "Temperature drops noticeably as the train climbs into the Eastern Ghats." },
    { name: "Camera", description: "The train journey through 58 tunnels and bridges is genuinely one of India's most photogenic rail routes.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Train-ride essential", tagColor: "bg-amber-100 text-amber-700", why: "This is a trip people specifically plan around the scenery — don't miss capturing it." },
    { name: "Comfortable Walking Shoes", description: "For exploring the coffee museum, tribal markets, and Padmapuram Gardens.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Araku's sights are spread across the valley, best covered on foot in stretches." },
    { name: "Insect Repellent", description: "Useful for the forested hill terrain around Araku and nearby waterfalls.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-purple-100 text-purple-700", why: "The valley's forest cover and waterfall spray zones support a real mosquito presence." },
  ],
}];

export default function ArakuValleyGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Misty coffee hills representative of Araku Valley, Andhra Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Araku Valley", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Araku Valley", "Eastern Ghats", "Off-beat", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Araku Valley Travel Guide: Coffee Hills & the Train Journey Through 58 Tunnels
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A coffee-growing tribal valley in the Eastern Ghats, reached by a train ride through 58 tunnels and dozens of bridges.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Araku Valley, Andhra Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Araku Valley?</h2>
                  <p>
                    <strong>Araku Valley</strong> sits in the Eastern Ghats above Visakhapatnam, and getting there is genuinely part of the experience: the train from Vizag climbs through roughly 58 tunnels and numerous bridges and viaducts, widely considered one of India's most scenic rail journeys.
                  </p>
                  <p>
                    The valley itself is coffee country — Araku coffee has built a real specialty-coffee reputation in recent years — and home to a substantial tribal population (Kondh, Bagata, and other communities) whose markets and crafts give the region a distinct cultural character alongside the scenery.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>☕</span> Araku Valley at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🚆", label: "Signature Experience", value: "Scenic train from Vizag" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "☕", label: "Known For", value: "Araku coffee" },
                        { icon: "🕳️", label: "Nearby", value: "Borra Caves" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Araku Valley</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather for the hill terrain and clear conditions for the train journey." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — lush but risky", text: "Beautifully green, but landslide risk on the train route has occurred in some years — verify current conditions." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March for the most reliable train service and comfortable hill weather.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Araku Valley</h2>
                  <ul>
                    <li><strong>By Train:</strong> The classic and recommended route — the scenic train from Visakhapatnam. Book well ahead given its popularity.</li>
                    <li><strong>By Road:</strong> Also accessible via NH from Vizag for those who'd rather drive or combine with other stops en route.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book train tickets to Araku well in advance — this route is popular enough to sell out, especially on weekends.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Araku Valley</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Coffee estate hills around Araku Valley" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The Vizag-Araku train journey:</strong> The signature experience — roughly 58 tunnels and numerous bridges through the Eastern Ghats.</li>
                    <li><strong>Araku Coffee Museum:</strong> A dedicated centre offering insight into local coffee cultivation and processing.</li>
                    <li><strong>Tribal markets:</strong> A genuine look at the region's Kondh, Bagata, and other community crafts and produce.</li>
                    <li><strong>Padmapuram Botanical Gardens:</strong> A landscaped garden area, good for a relaxed stop.</li>
                    <li><strong>Katiki Waterfalls:</strong> A scenic waterfall near Araku, worth a short detour.</li>
                    <li><strong>Borra Caves:</strong> Ancient limestone caves en route between Vizag and Araku — cross-reference that separate guide.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Araku Valley</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in Araku town", "Basic homestays"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Coffee-estate stays", "Mid-range hill resorts"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium hillside resorts"] },
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
                  <h2>What to Eat in Araku Valley</h2>
                  <ul>
                    <li><strong>Araku coffee:</strong> A genuine local specialty, worth trying fresh from the source.</li>
                    <li><strong>Tribal-influenced dishes:</strong> Bamboo-cooked rice and local forest-produce dishes at some estate stays.</li>
                    <li><strong>Andhra thalis:</strong> Standard regional vegetarian and non-vegetarian fare available in Araku town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Araku Valley Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "The Scenic Train & Arrival", color: "bg-amber-700", activities: ["Morning train from Visakhapatnam", "Arrive Araku, check in", "Afternoon: Coffee Museum and Padmapuram Gardens"] },
                      { day: "Day 2", title: "Borra Caves & Return", color: "bg-forest-600", activities: ["Morning: tribal market visit", "Stop at Borra Caves en route back", "Return to Visakhapatnam by road or train"] },
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
                          ["Food/day", "₹400", "₹900"],
                          ["Train fare (one-way)", "₹100–300", "₹400–800"],
                          ["Daily total", "₹1,600", "₹4,000"],
                          ["2-Day trip total", "₹3,200", "₹8,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Visakhapatnam. Train fare varies by class.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Araku Valley</h2>
                  <ul>
                    <li><strong>Book the train early:</strong> This is one of India's most popular scenic routes.</li>
                    <li><strong>Engage respectfully with tribal communities:</strong> At markets and villages you visit.</li>
                    <li><strong>Verify monsoon conditions:</strong> If traveling Jun-Sep, check current landslide/route status.</li>
                    <li><strong>Combine with Borra Caves:</strong> Both sit on the same route.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book the Araku train well in advance", "Visit the Coffee Museum for genuine local insight", "Combine with Borra Caves on the same trip", "Engage respectfully with tribal markets and communities", "Carry a light warm layer for cool hill mornings"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book the train last-minute expecting availability", "Travel during peak monsoon without checking route conditions", "Treat tribal markets as a photo-only spectacle", "Skip the Coffee Museum if coffee genuinely interests you", "Underestimate cooler hill-morning temperatures"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Araku Valley", "Eastern Ghats", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={ARAKU_GEAR} destination="Araku Valley" />
              <RelatedPostsGrid currentSlug="araku-valley-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="araku-valley-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
