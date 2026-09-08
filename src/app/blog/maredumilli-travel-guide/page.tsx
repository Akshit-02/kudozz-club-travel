// src/app/blog/maredumilli-travel-guide/page.tsx
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
  title: "Maredumilli Travel Guide: Rainforest Eco-Tourism in the Eastern Ghats",
  description:
    "The complete Maredumilli travel guide. Forest Department eco-camps, waterfalls, hot springs, tribal community-based tourism, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Maredumilli travel guide, Maredumilli eco tourism, Maredumilli waterfalls, Maredumilli hot springs, best time to visit Maredumilli, how to reach Maredumilli, Andhra Pradesh Eastern Ghats forest",
  openGraph: {
    title: "Maredumilli Travel Guide: Rainforest Eco-Tourism in the Eastern Ghats",
    description: "A genuinely dense rainforest pocket of the Eastern Ghats, with waterfalls, hot springs, and tribal eco-tourism camps largely undiscovered by mainstream travelers — the complete guide to Maredumilli.",
    url: "https://club.kudozz.in/blog/maredumilli-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/meghalaya/dawki-river.jpg", width: 1200, height: 630, alt: "Dense rainforest and river scenery representative of Maredumilli, Andhra Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Maredumilli Travel Guide: Rainforest Eco-Tourism in the Eastern Ghats", description: "Forest eco-tourism, waterfalls, and hot springs — the complete guide to Maredumilli.", images: ["/images/destinations/meghalaya/dawki-river.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/maredumilli-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Maredumilli Travel Guide: Rainforest Eco-Tourism in the Eastern Ghats",
      description: "The complete Maredumilli travel guide.",
      image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/maredumilli-travel-guide" },
      about: { "@type": "Place", name: "Maredumilli", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Maredumilli Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Maredumilli?", a: "One to two days covers the main waterfalls, hot springs, and a forest trekking trail comfortably." },
  { q: "What is the best time to visit Maredumilli?", a: "October to February offers the most comfortable trekking weather. Monsoon (June–September) brings the fullest waterfalls but muddier trails." },
  { q: "How do I reach Maredumilli?", a: "The nearest airport and railway station is Rajahmundry (~85km), the practical regional base. Road access via Rampachodavaram is the standard route." },
  { q: "Is Maredumilli good for a family trip?", a: "It suits families comfortable with basic eco-camp accommodation and outdoor activity — this isn't a resort destination, so set expectations for genuinely rustic, forest-based facilities." },
  { q: "Do I need to book accommodation in advance?", a: "Yes — Forest Department eco-camps and cottages are the primary accommodation option and have limited capacity, so book ahead, especially on weekends." },
  { q: "What is the budget for a trip to Maredumilli?", a: "A budget traveler can manage on roughly ₹1,500 a day using Forest Department eco-camps, which are genuinely affordable given the basic facilities." },
  { q: "Can I combine Maredumilli with other Andhra Pradesh destinations?", a: "Yes — it's most naturally combined with Rajahmundry and the Papi Hills boat cruise (cross-reference both guides) for a fuller Godavari-region trip." },
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
  { id: "introduction", title: "Why Maredumilli?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Maredumilli", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MAREDUMILLI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for forest trekking and waterfall/hot spring visits", emoji: "🌳",
  items: [
    { name: "Sturdy Trekking Shoes", description: "For the Forest Department's marked trails through bamboo and teak forest.", price: "₹2,999", rating: 4.5, reviews: "6.2k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+forest+trail"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Forest trails here are genuinely uneven and can be slippery near water features." },
    { name: "Insect Repellent", description: "Dense forest cover means a real mosquito and insect presence, especially near water.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "This is genuinely dense rainforest terrain, not a manicured park." },
    { name: "Rain Layer", description: "Useful across most of the year given the area's forest microclimate, especially in monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Waterfalls are fullest exactly when rain is most likely." },
    { name: "Swimwear", description: "For the natural pools at the base of waterfalls and the hot springs.", price: "₹—", rating: 4.4, reviews: "—", image: "🩱", affiliateUrl: amazonSearchUrl("quick+dry+swimwear+travel"), tag: "Water-feature essential", tagColor: "bg-purple-100 text-purple-700", why: "Both the waterfalls and hot springs are genuine swim/soak spots." },
  ],
}];

export default function MaredumilliGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Dense rainforest and river scenery representative of Maredumilli, Andhra Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Maredumilli", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Maredumilli", "Eastern Ghats", "Off-beat", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Maredumilli Travel Guide: Rainforest Eco-Tourism in the Eastern Ghats
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A genuinely dense rainforest pocket of the Eastern Ghats, with waterfalls, hot springs, and tribal eco-tourism camps largely undiscovered by mainstream travelers.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Maredumilli, Andhra Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Maredumilli?</h2>
                  <p>
                    <strong>Maredumilli</strong> is a genuinely dense, biodiverse pocket of the Eastern Ghats, run in significant part through Andhra Pradesh Forest Department eco-tourism initiatives that involve local tribal communities directly — a real community-based tourism model, not just a marketing label.
                  </p>
                  <p>
                    Minimal tourist infrastructure here is by design. This isn't a resort destination — it's forest trekking trails, waterfalls, and natural hot springs, appealing to travelers who want genuine forest immersion over polished amenities.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌳</span> Maredumilli at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🌲", label: "Character", value: "Eastern Ghats rainforest" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "✈️", label: "Nearest Access", value: "Rajahmundry (~85km)" },
                        { icon: "💧", label: "Known For", value: "Waterfalls & hot springs" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500+ (eco-camp)" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Maredumilli</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable trekking weather with good, though not peak, waterfall flow." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — fullest waterfalls", text: "Waterfalls are at their most dramatic, but trails get muddy and slippery." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Warmer, with reduced waterfall flow — the hot springs remain a draw regardless." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February for the most comfortable trekking, or June-September specifically if you want the waterfalls at maximum flow and don't mind muddy trails.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Maredumilli</h2>
                  <ul>
                    <li><strong>By Air/Rail:</strong> Rajahmundry (~85km, cross-reference that guide) is the nearest airport and railway station, and the practical regional base.</li>
                    <li><strong>By Road:</strong> Via Rampachodavaram, the standard route into Maredumilli.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book Forest Department eco-tourism accommodation and permits in advance — capacity is genuinely limited.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Maredumilli</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/meghalaya/dawki-river.jpg" alt="Forest and waterfall scenery around Maredumilli" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Jalatarangini and Kottapalli Jalapatham:</strong> Smaller, less crowded waterfalls than Andhra's headline falls, but genuinely scenic.</li>
                    <li><strong>Natural hot springs:</strong> Locally believed to have therapeutic properties, a genuine local tradition.</li>
                    <li><strong>Forest Department trekking trails:</strong> Marked routes through bamboo and teak forest.</li>
                    <li><strong>Tribal eco-tourism camps:</strong> A genuine community-based tourism model involving local communities directly.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Maredumilli</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Forest Department eco-camps", "Basic community-run cottages"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed Forest Department cottages"] },
                      { tier: "Luxury", icon: "✨", range: "Very limited", picks: ["Genuinely minimal — this is an eco-tourism destination by design"] },
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
                  <h2>What to Eat in Maredumilli</h2>
                  <ul>
                    <li><strong>Eco-camp meals:</strong> Simple, home-style local cooking served at Forest Department stays.</li>
                    <li><strong>Tribal-community cuisine:</strong> Basic local dishes reflecting the region's tribal food traditions.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Maredumilli Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Waterfalls & Trekking", color: "bg-amber-700", activities: ["Arrive, check in at an eco-camp", "Afternoon: forest trekking trail", "Visit Jalatarangini or Kottapalli Jalapatham"] },
                      { day: "Day 2", title: "Hot Springs & Departure", color: "bg-forest-600", activities: ["Morning: natural hot springs", "Late morning: departure or onward to Rajahmundry"] },
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
                          ["Eco-camp accommodation/night", "₹1,000", "₹2,800"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport/permits", "₹200", "₹500"],
                          ["Daily total", "₹1,500", "₹4,000"],
                          ["2-Day trip total", "₹3,000", "₹8,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Rajahmundry. Genuinely low-cost given the Forest Department's affordable eco-camp model.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Maredumilli</h2>
                  <ul>
                    <li><strong>Book eco-tourism permits/stays in advance:</strong> Capacity is genuinely limited.</li>
                    <li><strong>Set expectations for basic facilities:</strong> This is an eco-tourism destination, not a resort.</li>
                    <li><strong>Combine with Rajahmundry and Papi Hills:</strong> A natural regional trip pairing.</li>
                    <li><strong>Respect local tribal communities:</strong> This is a genuine community-based tourism model, not a staged attraction.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book Forest Department eco-camps and permits ahead", "Try the trekking trails through bamboo and teak forest", "Respect local tribal communities and their tourism model", "Carry insect repellent and a rain layer", "Combine with Rajahmundry and Papi Hills"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect resort-level amenities", "Show up without booking eco-camp accommodation", "Skip insect repellent given the dense forest setting", "Attempt trails in heavy monsoon without caution", "Treat local tribal communities as a photo-op rather than genuine hosts"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Maredumilli", "Eastern Ghats", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MAREDUMILLI_GEAR} destination="Maredumilli" />
              <RelatedPostsGrid currentSlug="maredumilli-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="maredumilli-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
