// src/app/blog/vijayawada-travel-guide/page.tsx
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
  title: "Vijayawada Travel Guide: Kanaka Durga Temple & Krishna River",
  description:
    "The complete Vijayawada travel guide. Kanaka Durga Temple, Prakasam Barrage, Undavalli Caves, Bhavani Island, where to stay, best time to visit, and a full itinerary along the Krishna River.",
  keywords:
    "Vijayawada travel guide, Kanaka Durga Temple, Prakasam Barrage, Undavalli Caves, Bhavani Island Vijayawada, best time to visit Vijayawada, how to reach Vijayawada, Andhra Pradesh Krishna River",
  openGraph: {
    title: "Vijayawada Travel Guide: Kanaka Durga Temple & Krishna River",
    description: "A hilltop Durga temple overlooking the Krishna River, and a business city that's become one of Andhra Pradesh's most important transit hubs — the complete guide to Vijayawada.",
    url: "https://club.kudozz.in/blog/vijayawada-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/fort.jpg", width: 1200, height: 630, alt: "Hilltop temple and riverside city representative of Vijayawada, Andhra Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Vijayawada Travel Guide: Kanaka Durga Temple & Krishna River", description: "Kanaka Durga Temple and the Krishna River — the complete guide to Vijayawada.", images: ["/images/destinations/jaisalmer/fort.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/vijayawada-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Vijayawada Travel Guide: Kanaka Durga Temple & Krishna River",
      description: "The complete Vijayawada travel guide.",
      image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/vijayawada-travel-guide" },
      about: { "@type": "Place", name: "Vijayawada", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Vijayawada Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Vijayawada?", a: "One to two days covers Kanaka Durga Temple, Prakasam Barrage, and Undavalli Caves comfortably. Add a half-day if combining with a trip to Amaravati." },
  { q: "What is the best time to visit Vijayawada?", a: "October to March offers the most comfortable weather. Summers (April–June) get very hot, and Navratri/Dasara (October, per the lunar calendar) brings the heaviest temple crowds." },
  { q: "How do I reach Vijayawada?", a: "Vijayawada Airport (VGA) has good domestic connectivity. Vijayawada Junction is a major railway hub on the Chennai-Kolkata line, and the city is well connected by road via NH16 and NH65." },
  { q: "Is Kanaka Durga Temple worth visiting?", a: "Yes — it's one of Andhra Pradesh's most significant Shakti temples, set on Indrakeeladri Hill with views over the Krishna River. Expect queues, especially on weekends and during Navratri." },
  { q: "Can I visit Amaravati from Vijayawada?", a: "Yes — Amaravati is about 35km away and easily combined as a half-day or full-day trip, covering the ancient Buddhist stupa site and the state's planned new capital area." },
  { q: "What is the budget for a trip to Vijayawada?", a: "A budget traveler can manage on roughly ₹1,400 a day, a mid-range trip closer to ₹3,800 a day. A 2-day trip totals roughly ₹2,800 on a budget and ₹7,600 mid-range." },
  { q: "Are the Undavalli Caves worth a visit?", a: "Yes — they house a notable large reclining Vishnu sculpture and date to roughly the 4th-5th century CE, making them a genuinely significant early cave-temple site and an easy add-on near the city." },
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
  { id: "introduction", title: "Why Vijayawada?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vijayawada", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const VIJAYAWADA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for temple visits and riverside walks", emoji: "🛕",
  items: [
    { name: "Modest Clothing", description: "Expected at Kanaka Durga Temple and other active religious sites around the city.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "This is a working pilgrimage site, not just a tourist stop." },
    { name: "Comfortable Walking Shoes", description: "For the hill climb to Kanaka Durga Temple and walks along Prakasam Barrage.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "The temple hill and barrage walkway both involve real walking distance." },
    { name: "Sun Hat & Sunscreen", description: "Vijayawada gets genuinely hot, especially outside the winter months.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Sun exposure is significant on the open hill and riverside walks." },
    { name: "Camera", description: "For the temple views over the Krishna River and the Undavalli Caves sculpture.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "The Indrakeeladri Hill viewpoint over the river is genuinely photogenic." },
  ],
}];

export default function VijayawadaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Hilltop temple and riverside city representative of Vijayawada, Andhra Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Vijayawada", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Vijayawada", "Krishna River", "Destination Guide", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Vijayawada Travel Guide: Kanaka Durga Temple & Krishna River
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A hilltop Durga temple overlooking the Krishna River, and a business city that's become one of Andhra Pradesh's most important transit hubs.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Vijayawada, Andhra Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Vijayawada?</h2>
                  <p>
                    <strong>Vijayawada</strong> sits on the banks of the Krishna River, anchored by <strong>Kanaka Durga Temple</strong> on Indrakeeladri Hill — one of Andhra Pradesh's most significant Shakti temples, with the river spread out below it. Beyond the temple, Vijayawada is genuinely a working commercial city: a major transit hub, a rail junction, and increasingly the gateway to Amaravati, the state's planned new capital just down the road.
                  </p>
                  <p>
                    It's not a headline tourist destination in the way Tirupati or Araku Valley are, but it rewards a day or two — a significant temple, a scenic barrage walk, and one of the region's most notable early cave-temple sites nearby.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Vijayawada at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Kanaka Durga Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Vijayawada (VGA)" },
                        { icon: "🌊", label: "River", value: "Krishna" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Vijayawada</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for temple visits and walking along Prakasam Barrage." },
                      { season: "Oct (Navratri)", emoji: "🎊", color: "bg-orange-50 border-orange-200", mood: "Peak festival crowds", text: "Kanaka Durga Temple sees especially heavy crowds during Navratri/Dasara — verify current-year dates." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-red-50 border-red-200", mood: "Hot", text: "Temperatures climb significantly — plan indoor activities and museum visits for midday." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Humid with periodic heavy rain, though the city remains functional and walkable between showers." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — comfortable weather without the heaviest festival-season crowds.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Vijayawada</h2>
                  <ul>
                    <li><strong>By Air:</strong> Vijayawada Airport (VGA) has good domestic connectivity.</li>
                    <li><strong>By Train:</strong> Vijayawada Junction is a major railway hub on the Chennai-Kolkata line.</li>
                    <li><strong>By Road:</strong> Well connected via NH16 and NH65.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If combining with Amaravati, base yourself in Vijayawada and treat Amaravati as a half-day side trip rather than an overnight stay.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Vijayawada</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Hilltop temple scenery around Vijayawada" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Kanaka Durga Temple:</strong> A major Durga temple on Indrakeeladri Hill overlooking the Krishna River, one of Andhra Pradesh's most significant Shakti temples.</li>
                    <li><strong>Prakasam Barrage:</strong> A dam across the Krishna River, a notable local landmark and a good evening walking spot.</li>
                    <li><strong>Undavalli Caves:</strong> Rock-cut cave temples with a notable large reclining Vishnu sculpture, dating to roughly the 4th-5th century CE.</li>
                    <li><strong>Bhavani Island:</strong> A river island with recreational facilities, reached by boat.</li>
                    <li><strong>Victoria Museum:</strong> A regional museum with historical and archaeological artifacts.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Vijayawada</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near the railway station", "Budget hotels in the city centre"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Mid-range business hotels", "Riverside-adjacent hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium business hotels", "Upscale city-centre properties"] },
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
                  <h2>What to Eat in Vijayawada</h2>
                  <ul>
                    <li><strong>Andhra thali:</strong> A fiery, generous multi-course meal typical of the region's cuisine.</li>
                    <li><strong>Gongura and pickles:</strong> Sharp, tangy regional specialties worth seeking out at local eateries.</li>
                    <li><strong>Biryani and kebabs:</strong> Widely available given the city's commercial, cosmopolitan character.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Vijayawada Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Temple & Riverfront", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Kanaka Durga Temple", "Afternoon: Prakasam Barrage walk", "Evening: Bhavani Island"] },
                      { day: "Day 2", title: "Caves & Amaravati", color: "bg-forest-600", activities: ["Morning: Undavalli Caves", "Afternoon: day trip to Amaravati", "Evening: departure"] },
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
                          ["Accommodation/night", "₹900", "₹2,800", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport per day", "₹150", "₹500", "₹1,200"],
                          ["Daily total", "₹1,400", "₹3,800", "₹10,500"],
                          ["2-Day trip total", "₹2,800", "₹7,600", "₹21,000"],
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
                  <h2>Essential Travel Tips for Vijayawada</h2>
                  <ul>
                    <li><strong>Dress modestly at Kanaka Durga Temple:</strong> This is an active, significant pilgrimage site.</li>
                    <li><strong>Expect heavy crowds during Navratri:</strong> Verify current-year dates and plan accordingly.</li>
                    <li><strong>Combine with Amaravati:</strong> A natural, easy half-day pairing given the short distance.</li>
                    <li><strong>Visit Undavalli Caves for genuine heritage interest:</strong> Don't skip it as a minor stop.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Kanaka Durga Temple respectfully", "Combine with Amaravati for a fuller trip", "See Undavalli Caves for early cave-temple art", "Walk Prakasam Barrage at sunset", "Book ahead during Navratri if visiting then"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit during Navratri without expecting heavy crowds", "Skip Undavalli Caves as a minor stop", "Underestimate summer heat", "Wear beachwear-style clothing at temples", "Rush the Amaravati day trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Vijayawada", "Krishna River", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={VIJAYAWADA_GEAR} destination="Vijayawada" />
              <RelatedPostsGrid currentSlug="vijayawada-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="vijayawada-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
