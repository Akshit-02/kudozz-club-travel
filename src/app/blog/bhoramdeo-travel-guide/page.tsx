// src/app/blog/bhoramdeo-travel-guide/page.tsx
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
  title: "Bhoramdeo Temple Travel Guide: Chhattisgarh's Khajuraho",
  description:
    "The complete Bhoramdeo travel guide. The 11th-century Shiva temple complex, its intricately carved sculpture, Madwa Mahal, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Bhoramdeo travel guide, Bhoramdeo temple, Khajuraho of Chhattisgarh, Kawardha temple, Madwa Mahal, best time to visit Bhoramdeo, how to reach Bhoramdeo, Chhattisgarh temple architecture",
  openGraph: {
    title: "Bhoramdeo Temple Travel Guide: Chhattisgarh's Khajuraho",
    description: "An 11th-century temple complex carved with the same intricate, occasionally erotic sculpture style as Khajuraho, earning it the nickname 'Khajuraho of Chhattisgarh' — the complete guide to Bhoramdeo.",
    url: "https://club.kudozz.in/blog/bhoramdeo-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/virupaksha.jpg", width: 1200, height: 630, alt: "Intricately carved stone temple architecture representative of Bhoramdeo, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Bhoramdeo Temple Travel Guide: Chhattisgarh's Khajuraho", description: "An 11th-century carved temple complex — the complete guide to Bhoramdeo.", images: ["/images/destinations/hampi/virupaksha.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/bhoramdeo-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Bhoramdeo Temple Travel Guide: Chhattisgarh's Khajuraho",
      description: "The complete Bhoramdeo travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bhoramdeo-travel-guide" },
      about: { "@type": "Place", name: "Bhoramdeo", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Bhoramdeo Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need at Bhoramdeo?", a: "Half a day is enough for the temple complex itself. Most travelers combine it with a visit to nearby Kawardha for a fuller day out." },
  { q: "Why is Bhoramdeo called the 'Khajuraho of Chhattisgarh'?", a: "Its 11th-century sculpture is carved in a style and level of detail genuinely comparable to the famous Khajuraho temples in Madhya Pradesh, including similarly candid depictions of intimacy alongside deities, dancers, and mythological scenes." },
  { q: "Are the sculptures at Bhoramdeo explicit?", a: "Some panels depict intimacy, similar to Khajuraho, as one theme among many in a broader body of carving covering deities, celestial figures, and everyday life. It's a genuine part of the site's art-historical significance, not the whole of it." },
  { q: "What is the best time to visit Bhoramdeo?", a: "October to March, for comfortable temperatures while exploring the temple grounds." },
  { q: "How do I reach Bhoramdeo?", a: "The nearest airports are Raipur (~130km) or Bilaspur. Road access is via Kawardha, about 18km from the temple." },
  { q: "Is Bhoramdeo crowded?", a: "No — it sees far fewer visitors than Khajuraho, making for a quieter, more contemplative visit for travelers interested in similar temple art." },
  { q: "What is the budget for a trip to Bhoramdeo?", a: "A budget traveler can manage this as a low-cost half-day trip, roughly ₹1,000-1,500 including transport from Kawardha." },
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
  { id: "introduction", title: "Why Bhoramdeo?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bhoramdeo", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BHORAMDEO_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a temple-complex visit", emoji: "🛕",
  items: [
    { name: "Comfortable Walking Shoes", description: "For exploring the temple grounds and any nearby structures like Madwa Mahal.", price: "₹1,499", rating: 4.4, reviews: "6.8k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Temple-visit essential", tagColor: "bg-amber-100 text-amber-700", why: "Temple platforms and grounds involve some uneven stone surfaces." },
    { name: "Sun Hat", description: "The temple complex has limited shade across its open courtyards.", price: "₹399", rating: 4.3, reviews: "3.9k", image: "👒", affiliateUrl: amazonSearchUrl("sun+hat+travel"), tag: "Sun essential", tagColor: "bg-orange-100 text-orange-700", why: "Midday sun across the open temple grounds can be intense." },
    { name: "Compact Binoculars", description: "For appreciating the finer carving detail higher on the temple structure.", price: "₹899", rating: 4.3, reviews: "2.7k", image: "🔭", affiliateUrl: amazonSearchUrl("compact+binoculars+travel"), tag: "Detail essential", tagColor: "bg-purple-100 text-purple-700", why: "Much of the finest carving sits above easy eye-level viewing." },
    { name: "Camera", description: "For capturing the temple's sculptural detail and overall architecture.", price: "₹—", rating: 4.4, reviews: "3.1k", image: "📷", affiliateUrl: amazonSearchUrl("camera+travel"), tag: "Photography essential", tagColor: "bg-forest-100 text-forest-700", why: "A quiet site with genuinely photogenic carving worth capturing." },
  ],
}];

export default function BhoramdeoGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Intricately carved stone temple architecture representative of Bhoramdeo, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Bhoramdeo", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bhoramdeo", "Chhattisgarh", "Heritage", "Temples"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bhoramdeo Temple Travel Guide: Chhattisgarh's Khajuraho
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              An 11th-century temple complex carved with the same intricate, occasionally erotic sculpture style as Khajuraho.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kawardha, Chhattisgarh" },
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
                  <h2>Why Bhoramdeo?</h2>
                  <p>
                    <strong>Bhoramdeo Temple</strong> is an 11th-century Shiva temple complex built under the Nagvanshi and Kalachuri dynasties that once ruled this part of Chhattisgarh. It's widely nicknamed the "Khajuraho of Chhattisgarh" — a fair comparison, since the temple's sandstone carving reaches a level of detail and range genuinely comparable to the famous Madhya Pradesh site, including similarly candid depictions of intimacy set among the far more common carvings of deities, dancers, and mythological scenes.
                  </p>
                  <p>
                    What Bhoramdeo has that Khajuraho doesn't is quiet — this is a much smaller complex with a fraction of the visitors, making for a more contemplative visit for anyone drawn to this style of temple art without the crowds.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Bhoramdeo at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "🛕", label: "Built By", value: "Nagvanshi/Kalachuri Dynasties" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Raipur (~130km)" },
                        { icon: "📍", label: "Nearest Town", value: "Kawardha (~18km)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹1,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bhoramdeo</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather for a comfortable temple visit." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Temperatures climb sharply — plan an early morning visit if travelling in this window." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "The surrounding countryside turns green, but rain can interrupt an outdoor temple visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — comfortable temperatures for exploring the temple grounds at a relaxed pace.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bhoramdeo</h2>
                  <ul>
                    <li><strong>By Air:</strong> Raipur (~130km) or Bilaspur are the nearest airports.</li>
                    <li><strong>By Road:</strong> Access is via Kawardha, about 18km from the temple — cross-reference that separate Kawardha guide for the practical base town.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself in Kawardha and treat Bhoramdeo as a short, easy drive out — most travelers combine the two into a single day.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See at Bhoramdeo</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Carved temple detail at Bhoramdeo" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The main Bhoramdeo Temple:</strong> The complex's centrepiece, with intricately carved exterior sculpture spanning deities, dancers, mythological scenes, and intimate figures.</li>
                    <li><strong>Madwa Mahal:</strong> A smaller nearby temple structure, sometimes visited alongside the main complex.</li>
                    <li><strong>Temple courtyard and grounds:</strong> Worth a slow walk-through to appreciate the carving from multiple angles and light conditions.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Bhoramdeo</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹600–₹1,500/night (Kawardha)", picks: ["Basic guesthouses in Kawardha"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night (Kawardha)", picks: ["Mid-range hotels in Kawardha"] },
                      { tier: "Luxury", icon: "✨", range: "Limited — check Kawardha Palace status", picks: ["Kawardha Palace, if currently operating as a heritage stay — verify"] },
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
                  <h2>What to Eat Near Bhoramdeo</h2>
                  <ul>
                    <li><strong>Kawardha local thalis:</strong> Simple Chhattisgarhi vegetarian meals available in the town.</li>
                    <li><strong>Roadside dhabas:</strong> Basic North Indian fare along the route from Kawardha.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Bhoramdeo Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Temple Visit", color: "bg-amber-700", activities: ["Depart Kawardha early", "Explore the main Bhoramdeo Temple complex", "Visit Madwa Mahal nearby"] },
                      { day: "Midday", title: "Return", color: "bg-forest-600", activities: ["Return drive to Kawardha", "Continue onward or explore Kawardha town"] },
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
                          ["Local transport (from Kawardha)", "₹400", "₹800"],
                          ["Entry fees & guide", "₹200", "₹500"],
                          ["Half-day total", "₹600", "₹1,300"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes Kawardha accommodation and transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Bhoramdeo</h2>
                  <ul>
                    <li><strong>Hire a local guide:</strong> Genuinely helps with context on the carving's mythological and architectural themes.</li>
                    <li><strong>Combine with Kawardha:</strong> The two make a natural single-day pairing.</li>
                    <li><strong>Behave respectfully:</strong> This remains an active temple, not just a heritage monument.</li>
                    <li><strong>Go early:</strong> Best light for photography and the coolest part of the day.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Hire a local guide for carving context", "Combine with a Kawardha town visit", "Go early morning for the best light", "Behave respectfully as this is an active temple", "Take time to view the carving from multiple angles"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect Khajuraho-scale crowds or facilities", "Rush the visit — the carving rewards slow viewing", "Visit at midday in peak summer heat", "Assume the site is only about intimate sculpture — most carving depicts other themes", "Skip Kawardha entirely if you have the extra time"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Bhoramdeo", "Chhattisgarh", "Heritage", "Kawardha", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BHORAMDEO_GEAR} destination="Bhoramdeo" />
              <RelatedPostsGrid currentSlug="bhoramdeo-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="bhoramdeo-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
