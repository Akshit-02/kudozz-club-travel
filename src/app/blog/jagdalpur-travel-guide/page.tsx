// src/app/blog/jagdalpur-travel-guide/page.tsx
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
  title: "Jagdalpur Travel Guide: Gateway to Bastar's Waterfalls & Tribal Culture",
  description:
    "The complete Jagdalpur travel guide. Bastar Palace, the Anthropological Museum, Dalpat Sagar, tribal haats, Bastar Dussehra, where to stay, best time to visit, and a full itinerary through Chhattisgarh's Bastar heartland.",
  keywords:
    "Jagdalpur travel guide, Bastar Palace, Anthropological Museum Jagdalpur, Bastar Dussehra, Dalpat Sagar, best time to visit Jagdalpur, how to reach Jagdalpur, Chhattisgarh tribal culture",
  openGraph: {
    title: "Jagdalpur Travel Guide: Gateway to Bastar's Waterfalls & Tribal Culture",
    description: "The district capital that opens onto Chhattisgarh's waterfall country and its deepest tribal heartland — the complete guide to Jagdalpur.",
    url: "https://club.kudozz.in/blog/jagdalpur-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Forest and river landscape representative of Jagdalpur, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Jagdalpur Travel Guide: Gateway to Bastar's Waterfalls & Tribal Culture", description: "The gateway to Chhattisgarh's waterfall country and tribal heartland — the complete guide to Jagdalpur.", images: ["/images/destinations/meghalaya/dawki-river.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/jagdalpur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Jagdalpur Travel Guide: Gateway to Bastar's Waterfalls & Tribal Culture",
      description: "The complete Jagdalpur travel guide.",
      image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/jagdalpur-travel-guide" },
      about: { "@type": "Place", name: "Jagdalpur", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Jagdalpur Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Jagdalpur?", a: "Two to three days lets you cover the town's own sights (Bastar Palace, the Anthropological Museum, Dalpat Sagar) plus day trips to Chitrakote Falls, Tirathgarh Falls, and Kanger Valley National Park." },
  { q: "What is the best time to visit Jagdalpur?", a: "October to March is coolest and driest, and coincides with the Bastar Dussehra festival season if you want to time a visit around it." },
  { q: "How do I reach Jagdalpur?", a: "Jagdalpur Airport has limited flights, mainly from Raipur and Hyderabad. Jagdalpur railway station connects to Vishakhapatnam and Kirandul. By road, it's about 300km from Raipur via NH30." },
  { q: "What is the Bastar Dussehra?", a: "A 75-day tribal festival, genuinely distinct from mainstream Hindu Dussehra celebrations elsewhere in India, centered on local deity worship traditions specific to Bastar's indigenous communities. Verify current-year dates before planning around it." },
  { q: "Is Jagdalpur a good base for exploring Bastar's waterfalls?", a: "Yes — it's the practical hub for Chitrakote Falls (~38km), Tirathgarh Falls (~35km), and Kanger Valley National Park (~27km), all reachable as day trips." },
  { q: "Is it respectful to visit tribal villages and haats around Jagdalpur?", a: "Yes, with the right approach — visit respectfully, ideally with a local guide, and consider the Anthropological Museum first for cultural context. Treat haats (markets) as places of genuine local commerce, not staged attractions." },
  { q: "What is the budget for a trip to Jagdalpur?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,500 a day. Luxury options are limited given the region's remoteness." },
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
  { id: "introduction", title: "Why Jagdalpur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jagdalpur", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const JAGDALPUR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for waterfall day trips and tribal-village visits", emoji: "🌊",
  items: [
    { name: "Comfortable Walking Shoes", description: "For the Anthropological Museum grounds, tribal haats, and general day-trip walking around Bastar's waterfalls and forest sites.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Between museum grounds, haats, and waterfall viewpoints, a full day covers real ground." },
    { name: "Modest Respectful Clothing", description: "For tribal village and haat visits — dressing modestly and respectfully matters here more than at typical tourist stops.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Cultural-visit essential", tagColor: "bg-purple-100 text-purple-700", why: "These are living communities, not staged attractions — respectful dress reflects that." },
    { name: "Insect Repellent", description: "Forest and lakeside areas around Jagdalpur bring a real mosquito presence, especially at dusk.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Dalpat Sagar and the forested day-trip routes are prime mosquito habitat." },
    { name: "Camera", description: "For the waterfalls, museum exhibits, and haat scenes — Bastar's landscapes and culture are genuinely photogenic.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-sky-100 text-sky-700", why: "This region offers some of Chhattisgarh's most distinctive photography opportunities." },
  ],
}];

export default function JagdalpurGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Forest and river landscape representative of Jagdalpur, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Jagdalpur", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Jagdalpur", "Bastar", "Destination Guide", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Jagdalpur Travel Guide: Gateway to Bastar's Waterfalls & Tribal Culture
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The district capital that opens onto Chhattisgarh's waterfall country and its deepest tribal heartland.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Jagdalpur, Chhattisgarh" },
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
                  <h2>Why Jagdalpur?</h2>
                  <p>
                    <strong>Jagdalpur</strong> is the headquarters of Bastar district, and the practical base town for exploring one of Central India's most distinctive regions — a landscape of thundering waterfalls, limestone caves, and dense sal forest, alongside some of the country's most culturally rich indigenous communities.
                  </p>
                  <p>
                    On its own, Jagdalpur has genuine sights worth a day: the Bastar Palace, an Anthropological Museum documenting the region's tribal cultures, and weekly haats where surrounding villages bring produce and crafts to trade. But its real value is as the hub from which Chitrakote Falls, Tirathgarh Falls, and Kanger Valley National Park are all easy day trips.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌊</span> Jagdalpur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🏛️", label: "Key Site", value: "Bastar Palace & Museum" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Jagdalpur (limited flights)" },
                        { icon: "🎭", label: "Signature Event", value: "Bastar Dussehra" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Jagdalpur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool and dry, comfortable for day trips to waterfalls and forest sites, and coincides with the Bastar Dussehra season." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Significant heat makes extended outdoor sightseeing tiring — plan around the cooler morning hours." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — waterfalls at full flow", text: "Chitrakote and Tirathgarh Falls are at their most dramatic, though muddier water and slippery paths are trade-offs." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most comfortable window, and the season when Bastar Dussehra typically falls if that interests you.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Jagdalpur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Jagdalpur Airport has limited flights, mainly from Raipur and Hyderabad.</li>
                    <li><strong>By Train:</strong> Jagdalpur railway station connects to Vishakhapatnam and Kirandul.</li>
                    <li><strong>By Road:</strong> Roughly 300km from Raipur via NH30.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check current flight schedules before relying on air travel — connectivity to Jagdalpur is limited and can change seasonally.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Jagdalpur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Forest and river scenery around Jagdalpur" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bastar Palace:</strong> The former residence of the Bastar royal family, now partly a museum.</li>
                    <li><strong>Anthropological Museum:</strong> A genuinely notable museum documenting the diverse tribal cultures of Bastar district — Gond, Muria, Maria, and other indigenous communities, worth visiting for cultural context before heading further into tribal areas.</li>
                    <li><strong>Dalpat Sagar:</strong> A large lake in the town centre, good for an evening walk.</li>
                    <li><strong>Tribal haats:</strong> Weekly markets where surrounding villages bring produce and crafts to trade — a genuine, unstaged glimpse of local commerce.</li>
                    <li><strong>Day trips:</strong> Chitrakote Falls, Tirathgarh Falls, and Kanger Valley National Park are all reachable as day trips from Jagdalpur.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Jagdalpur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in the town centre", "Basic hotels near the bus stand"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Better-appointed hotels in Jagdalpur town", "Resort-style stays near Dalpat Sagar"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A small number of premium hotels — luxury options remain limited in this remote region"] },
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
                  <h2>What to Eat in Jagdalpur</h2>
                  <ul>
                    <li><strong>Chila and faraa:</strong> Chhattisgarhi rice-based breakfast staples, widely available locally.</li>
                    <li><strong>Bafauri:</strong> A steamed lentil snack popular across Chhattisgarh.</li>
                    <li><strong>Tribal Bastar cuisine:</strong> Bamboo shoot dishes and other local specialties, worth seeking out at genuine local eateries.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Jagdalpur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Jagdalpur Town", color: "bg-amber-700", activities: ["Arrive, check in", "Bastar Palace and Anthropological Museum", "Evening: Dalpat Sagar walk"] },
                      { day: "Day 2", title: "Waterfall Circuit", color: "bg-forest-600", activities: ["Chitrakote Falls", "Tirathgarh Falls and Kanger Valley National Park", "Return to Jagdalpur"] },
                      { day: "Day 3", title: "Tribal Haat & Departure", color: "bg-orange-600", activities: ["Visit a local tribal haat (check current weekly schedule)", "Final shopping/sightseeing", "Departure"] },
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
                          ["Food/day", "₹350", "₹800"],
                          ["Local transport per day (day trips)", "₹500", "₹1,200"],
                          ["Daily total", "₹1,500", "₹3,500"],
                          ["3-Day trip total", "₹4,500", "₹10,500"],
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
                  <h2>Essential Travel Tips for Jagdalpur</h2>
                  <ul>
                    <li><strong>Visit the Anthropological Museum first:</strong> It provides helpful context before visiting tribal villages or haats.</li>
                    <li><strong>Check Bastar Dussehra dates:</strong> This 75-day festival follows its own calendar — verify current-year timing if it's part of your plan.</li>
                    <li><strong>Use Jagdalpur as your day-trip hub:</strong> Chitrakote, Tirathgarh, and Kanger Valley are all manageable as day trips from here.</li>
                    <li><strong>Dress and behave respectfully at haats and villages:</strong> These are genuine communities, not tourist performances.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the Anthropological Museum for cultural context", "Use Jagdalpur as your base for the waterfall circuit", "Check current Bastar Dussehra dates if relevant", "Dress modestly and respectfully at tribal haats", "Carry cash — card acceptance is limited outside larger hotels"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Treat tribal villages or haats as photo-op attractions", "Rely on flight connectivity without checking current schedules", "Expect luxury-tier accommodation in this remote region", "Skip the Anthropological Museum if heading into tribal areas", "Ignore local guidance around village visit etiquette"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Jagdalpur", "Bastar", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={JAGDALPUR_GEAR} destination="Jagdalpur" />
              <RelatedPostsGrid currentSlug="jagdalpur-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="jagdalpur-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
