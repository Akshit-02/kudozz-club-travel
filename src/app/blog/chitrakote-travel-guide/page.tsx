// src/app/blog/chitrakote-travel-guide/page.tsx
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
  title: "Chitrakote Falls Travel Guide: India's Widest Waterfall",
  description:
    "The complete Chitrakote Falls travel guide. Horseshoe-shaped falls on the Indravati River, viewpoints, boat rides, where to stay, best time to visit, and a full itinerary through Bastar's signature waterfall.",
  keywords:
    "Chitrakote Falls travel guide, Chitrakote waterfall, Indravati River falls, Niagara of India, best time to visit Chitrakote, how to reach Chitrakote Falls, Bastar waterfalls",
  openGraph: {
    title: "Chitrakote Falls Travel Guide: India's Widest Waterfall",
    description: "A horseshoe-shaped waterfall nearly a kilometre wide on the Indravati River, wide enough to earn the nickname 'Niagara of India' — the complete guide to Chitrakote.",
    url: "https://club.kudozz.in/blog/chitrakote-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/abbey-falls.jpg", width: 1200, height: 630, alt: "Wide horseshoe waterfall representative of Chitrakote Falls, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Chitrakote Falls Travel Guide: India's Widest Waterfall", description: "India's widest waterfall on the Indravati River — the complete guide to Chitrakote.", images: ["/images/destinations/coorg/abbey-falls.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/chitrakote-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Chitrakote Falls Travel Guide: India's Widest Waterfall",
      description: "The complete Chitrakote Falls travel guide.",
      image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/chitrakote-travel-guide" },
      about: { "@type": "Place", name: "Chitrakote Falls", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Chitrakote Falls Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Why is Chitrakote called the 'Niagara of India'?", a: "The nickname is a popular comparison based on width — Chitrakote's horseshoe-shaped crest spans close to 300 metres, genuinely comparable in breadth to Niagara Falls, though not in height. It's a widely used descriptor, not a literal claim." },
  { q: "What is the best time to visit Chitrakote Falls?", a: "July to October (monsoon and post-monsoon) brings maximum, most dramatic flow, though the water is muddier. November to February offers clearer water with continued strong flow and easier access." },
  { q: "How do I reach Chitrakote Falls?", a: "The nearest airport and railway station are both in Jagdalpur, about 38km away, from where it's a short scenic drive." },
  { q: "Can I combine Chitrakote with other Bastar attractions in one day?", a: "Yes — Chitrakote, Tirathgarh Falls, and Kanger Valley National Park are close enough to combine into a single-day circuit from Jagdalpur." },
  { q: "Are boat rides available at Chitrakote Falls?", a: "Boat rides to the base are offered in some seasons, but availability and safety conditions vary — verify current status before planning around this specifically." },
  { q: "What is the budget for a visit to Chitrakote Falls?", a: "This is a low-cost day-trip destination — expect to spend mainly on transport from Jagdalpur plus a modest entry fee, roughly ₹500-1,000 per person for a day trip including transport." },
  { q: "Is Chitrakote worth visiting outside monsoon season?", a: "Yes — while monsoon offers the most dramatic flow, the falls maintain a strong, clearer flow through winter (Nov-Feb), making that a comfortable and rewarding alternative." },
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
  { id: "introduction", title: "Why Chitrakote?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chitrakote", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const CHITRAKOTE_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for wet viewpoints and monsoon visits", emoji: "💦",
  items: [
    { name: "Grippy Sandals", description: "Viewpoint areas near the falls get wet and slippery, especially close to the edge.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🥾", affiliateUrl: amazonSearchUrl("grip+sandals+outdoor+wet"), tag: "Viewpoint essential", tagColor: "bg-amber-100 text-amber-700", why: "Wet rock near waterfall viewpoints is where most minor slips happen." },
    { name: "Rain Layer", description: "Essential if visiting during peak monsoon when the falls are at their most dramatic.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Monsoon essential", tagColor: "bg-sky-100 text-sky-700", why: "The best flow season is also the wettest — plan accordingly." },
    { name: "Waterproof Phone Pouch", description: "Useful for boat rides near the base and general spray exposure near the falls.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "Boat-ride essential", tagColor: "bg-purple-100 text-purple-700", why: "Spray from the falls and any boat ride both carry a real risk of a soaked phone." },
    { name: "Camera", description: "For capturing the horseshoe-shaped crest from the various bank viewpoints.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "Chitrakote's width is best appreciated across multiple vantage points." },
  ],
}];

export default function ChitrakoteGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Wide horseshoe waterfall representative of Chitrakote Falls, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Chitrakote Falls", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Chitrakote Falls", "Bastar", "Off-beat", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Chitrakote Falls Travel Guide: India's Widest Waterfall
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A horseshoe-shaped waterfall nearly a kilometre wide on the Indravati River, wide enough to earn the nickname "Niagara of India."
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Chitrakote Falls, Chhattisgarh" },
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
                  <h2>Why Chitrakote?</h2>
                  <p>
                    <strong>Chitrakote Falls</strong>, on the Indravati River in Bastar district, is widely cited as India's widest waterfall — a horseshoe-shaped crest spanning close to 300 metres, wide enough that comparisons to Niagara Falls have stuck as a popular (if not literal) nickname.
                  </p>
                  <p>
                    The falls transform dramatically with the seasons: a thundering, muddy-brown torrent at full monsoon flow, and a gentler, clearer cascade through the drier months — both genuinely worth seeing, for different reasons.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>💦</span> Chitrakote at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "💦", label: "Known For", value: "India's widest waterfall" },
                        { icon: "🌡️", label: "Best Time", value: "Jul – Feb" },
                        { icon: "✈️", label: "Nearest Hub", value: "Jagdalpur (~38km)" },
                        { icon: "🌊", label: "River", value: "Indravati River" },
                        { icon: "💰", label: "Budget", value: "₹500 – ₹1,000/day trip" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Chitrakote</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Jul – Oct", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Maximum flow", text: "The falls are at their most dramatic and thunderous, though water is muddier and boat access may be restricted for safety." },
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Clearer water, continued strong flow, and easier, more comfortable access." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Low flow, hot", text: "Flow drops noticeably and heat makes a visit less comfortable — not the ideal window." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — strong flow, clear water, and comfortable conditions for viewpoint visits.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Chitrakote</h2>
                  <ul>
                    <li><strong>By Air/Train:</strong> Jagdalpur (~38km away) has the nearest airport and railway station.</li>
                    <li><strong>By Road:</strong> A short, scenic drive from Jagdalpur.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Chitrakote with Tirathgarh Falls and Kanger Valley National Park in a single day given their proximity to each other.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Chitrakote</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Chitrakote Falls viewpoint scenery" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bank viewpoints:</strong> Different vantage angles on both sides of the river offer distinct perspectives on the horseshoe crest.</li>
                    <li><strong>Boat rides:</strong> Available at the base in some seasons for a closer view — verify current availability.</li>
                    <li><strong>Sunset viewing:</strong> The falls are especially photogenic in late-afternoon light.</li>
                    <li><strong>Combine with Tirathgarh and Kanger Valley:</strong> Both are close enough for a single-day Bastar waterfall circuit.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Chitrakote</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,500/night", picks: ["Guesthouses in Jagdalpur town", "MP/CG tourism board rest houses near the falls (verify availability)"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed Jagdalpur hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Very limited — most visitors base in Jagdalpur and day-trip to Chitrakote"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most travelers base in Jagdalpur (cross-reference that guide) and visit Chitrakote as a day trip.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Chitrakote</h2>
                  <ul>
                    <li><strong>Local Chhattisgarhi snacks:</strong> Simple, affordable food options near the falls' visitor area.</li>
                    <li><strong>Jagdalpur dining:</strong> A wider range of options available back in town for lunch/dinner.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Chitrakote Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Depart & Arrive", color: "bg-amber-700", activities: ["Depart Jagdalpur early", "Arrive at Chitrakote, explore bank viewpoints"] },
                      { day: "Afternoon", title: "Falls & Onward", color: "bg-forest-600", activities: ["Boat ride if available", "Continue to Tirathgarh Falls and Kanger Valley National Park", "Return to Jagdalpur by evening"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Per Person"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Entry fee", "₹50–100"],
                          ["Boat ride (if available)", "₹100–300"],
                          ["Transport from Jagdalpur (shared)", "₹300–500"],
                          ["Day-trip total", "₹500–1,000"],
                        ].map(([exp, v], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Jagdalpur/the Bastar region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Chitrakote</h2>
                  <ul>
                    <li><strong>Visit at sunset:</strong> The best light and photography conditions.</li>
                    <li><strong>Combine with Tirathgarh and Kanger Valley:</strong> All three fit into a single day given their proximity.</li>
                    <li><strong>Check current boat-ride availability:</strong> If that's part of your plan specifically.</li>
                    <li><strong>Wear grippy footwear:</strong> Viewpoint areas near the falls get wet and slippery.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit at sunset for the best light", "Combine with Tirathgarh Falls and Kanger Valley", "Wear grippy footwear near wet viewpoints", "Check current boat-ride status", "Base in Jagdalpur for the fullest Bastar itinerary"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Get too close to the crest edge on wet rock", "Expect boat rides to be guaranteed year-round", "Visit expecting strong flow in peak summer (Mar-Jun)", "Skip Tirathgarh and Kanger Valley if you have the time", "Underestimate the muddy conditions in peak monsoon"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Chitrakote Falls", "Bastar", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={CHITRAKOTE_GEAR} destination="Chitrakote Falls" />
              <RelatedPostsGrid currentSlug="chitrakote-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="chitrakote-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
