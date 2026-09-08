// src/app/blog/tirathgarh-travel-guide/page.tsx
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
  title: "Tirathgarh Falls Travel Guide: Multi-Tiered Cascade in Kanger Valley",
  description:
    "The complete Tirathgarh Falls travel guide. Multi-tiered cascade, sal forest setting, swimming pools, where to stay, best time to visit, and a full itinerary through Kanger Valley National Park's signature waterfall.",
  keywords:
    "Tirathgarh Falls travel guide, Tirathgarh waterfall, Kanger Valley National Park falls, best time to visit Tirathgarh, how to reach Tirathgarh Falls, Bastar waterfalls, Chhattisgarh waterfalls",
  openGraph: {
    title: "Tirathgarh Falls Travel Guide: Multi-Tiered Cascade in Kanger Valley",
    description: "A waterfall that splits into multiple staggered tiers as it drops through dense sal forest inside Kanger Valley National Park — the complete guide to Tirathgarh.",
    url: "https://club.kudozz.in/blog/tirathgarh-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Forested multi-tiered waterfall representative of Tirathgarh Falls, Chhattisgarh" }],
  },
  twitter: { card: "summary_large_image", title: "Tirathgarh Falls Travel Guide: Multi-Tiered Cascade in Kanger Valley", description: "A multi-tiered cascade through sal forest inside Kanger Valley National Park — the complete guide to Tirathgarh.", images: ["/images/destinations/coorg/coorg.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/tirathgarh-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Tirathgarh Falls Travel Guide: Multi-Tiered Cascade in Kanger Valley",
      description: "The complete Tirathgarh Falls travel guide.",
      image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/tirathgarh-travel-guide" },
      about: { "@type": "Place", name: "Tirathgarh Falls", address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Tirathgarh Falls Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "What makes Tirathgarh Falls different from Chitrakote?", a: "Tirathgarh drops in multiple staggered tiers through dense sal forest rather than a single wide horseshoe crest — a genuinely different, more layered visual character than Chitrakote's breadth." },
  { q: "Do I need a park entry ticket to visit Tirathgarh?", a: "Yes — since the falls sit within Kanger Valley National Park, an entry fee/permit to the park is typically required. Verify the current entry process before visiting." },
  { q: "Can I swim at Tirathgarh Falls?", a: "Swimming is possible at some lower pools in drier months, but this depends on water level and safety conditions — check locally before entering the water." },
  { q: "What is the best time to visit Tirathgarh Falls?", a: "August to February offers a good balance of strong flow and accessible viewing. Peak monsoon can make approach paths slippery." },
  { q: "How do I reach Tirathgarh Falls?", a: "The nearest airport and railway station are both in Jagdalpur, about 35km away, via Kanger Valley National Park's entry route." },
  { q: "Can I visit Tirathgarh and Chitrakote in the same day?", a: "Yes — both, along with Kanger Valley National Park's caves, are close enough to combine into a single-day Bastar waterfall-and-cave circuit from Jagdalpur." },
  { q: "What is the budget for a visit to Tirathgarh Falls?", a: "A low-cost day-trip destination — expect to spend on the park entry fee plus shared transport from Jagdalpur, roughly ₹500-1,000 per person for a full circuit day." },
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
  { id: "introduction", title: "Why Tirathgarh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tirathgarh", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TIRATHGARH_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for wet rocks and forest paths", emoji: "🌿",
  items: [
    { name: "Sturdy Sandals with Grip", description: "For wet rock sections near the base and multi-tiered pools.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🥾", affiliateUrl: amazonSearchUrl("grip+sandals+outdoor+wet"), tag: "Base essential", tagColor: "bg-amber-100 text-amber-700", why: "The staggered tiers mean more wet-rock walking than a single-drop waterfall." },
    { name: "Swimwear", description: "For the lower pools when conditions allow — check locally before swimming.", price: "₹—", rating: 4.4, reviews: "—", image: "🩱", affiliateUrl: amazonSearchUrl("quick+dry+swimwear"), tag: "Optional", tagColor: "bg-sky-100 text-sky-700", why: "Some lower pools are swimmable in drier months, weather permitting." },
    { name: "Insect Repellent", description: "The surrounding sal forest is genuinely dense — mosquitoes and other insects are a real presence.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Dense forest cover keeps the area cool but also mosquito-friendly." },
    { name: "Camera", description: "The multi-tiered structure is genuinely distinctive and photogenic from several angles.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "The staggered tiers photograph very differently than a standard single-drop falls." },
  ],
}];

export default function TirathgarhGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Forested multi-tiered waterfall representative of Tirathgarh Falls, Chhattisgarh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Tirathgarh Falls", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Tirathgarh Falls", "Kanger Valley", "Off-beat", "Chhattisgarh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Tirathgarh Falls Travel Guide: Multi-Tiered Cascade in Kanger Valley
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A waterfall that splits into multiple staggered tiers as it drops through dense sal forest inside Kanger Valley National Park.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Tirathgarh Falls, Chhattisgarh" },
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
                  <h2>Why Tirathgarh?</h2>
                  <p>
                    <strong>Tirathgarh Falls</strong> sits inside Kanger Valley National Park, and stands apart from Bastar's other big-name waterfall (Chitrakote) through its structure: rather than a single wide drop, the water splits and cascades across several distinct, staggered tiers as it descends through dense sal forest — a genuinely layered, photogenic look.
                  </p>
                  <p>
                    The forest setting keeps the immediate area cool and shaded even in warmer months, and a small Shiva shrine near the base adds a modest local pilgrimage element to the site.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌿</span> Tirathgarh at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Chhattisgarh, India" },
                        { icon: "💦", label: "Known For", value: "Multi-tiered cascade" },
                        { icon: "🌡️", label: "Best Time", value: "Aug – Feb" },
                        { icon: "🌲", label: "Setting", value: "Kanger Valley National Park" },
                        { icon: "✈️", label: "Nearest Hub", value: "Jagdalpur (~35km)" },
                        { icon: "💰", label: "Budget", value: "₹500 – ₹1,000/day trip" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Tirathgarh</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Aug – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "A good balance of strong flow and accessible, non-slippery viewing conditions." },
                      { season: "Jun – Jul", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Peak monsoon", text: "Strongest flow but slippery approach paths — proceed with extra caution." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Low flow, hot", text: "Reduced water flow and less comfortable conditions for the forest approach." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to December — reliably strong flow with dry, safe approach paths.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tirathgarh</h2>
                  <ul>
                    <li><strong>By Air/Train:</strong> Jagdalpur (~35km away) has the nearest airport and railway station.</li>
                    <li><strong>By Road:</strong> Access via Kanger Valley National Park's entry route.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine with Chitrakote Falls and Kanger Valley's caves for a full single-day Bastar circuit.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Tirathgarh</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Multi-tiered forest waterfall scenery at Tirathgarh" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Multi-tiered viewpoints:</strong> Different levels offer distinct views of the staggered cascade.</li>
                    <li><strong>Shiva shrine:</strong> A small shrine near the base, a modest local pilgrimage element.</li>
                    <li><strong>Lower pools:</strong> Swimming possible in drier months, weather and safety permitting.</li>
                    <li><strong>Combine with Kanger Valley caves:</strong> Kutumsar and Kailash Caves are within the same park (cross-reference the Kanger Valley guide).</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Tirathgarh</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,500/night", picks: ["Guesthouses in Jagdalpur town"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,000/night", picks: ["Better-appointed Jagdalpur hotels"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Very limited — base in Jagdalpur and day-trip in"] },
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
                  <h2>What to Eat Near Tirathgarh</h2>
                  <ul>
                    <li><strong>Local snack stalls:</strong> Simple food options near the park entry area.</li>
                    <li><strong>Jagdalpur dining:</strong> A wider selection back in town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Tirathgarh Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Kanger Valley Entry & Caves", color: "bg-amber-700", activities: ["Enter Kanger Valley National Park", "Visit Kutumsar Cave (cross-reference the Kanger Valley guide)"] },
                      { day: "Afternoon", title: "Tirathgarh Falls", color: "bg-forest-600", activities: ["Explore the multi-tiered falls and viewpoints", "Swim at lower pools if conditions allow", "Return to Jagdalpur"] },
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
                          ["Park entry fee", "₹50–100"],
                          ["Cave visit fee (if applicable)", "₹50–150"],
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
                  <h2>Essential Travel Tips for Tirathgarh</h2>
                  <ul>
                    <li><strong>Verify current park entry process:</strong> Access to the falls typically requires a Kanger Valley National Park entry fee/permit.</li>
                    <li><strong>Wear grippy footwear:</strong> Wet rock sections near the base are a real slip risk.</li>
                    <li><strong>Combine with Chitrakote and the park's caves:</strong> A natural single-day circuit.</li>
                    <li><strong>Check swimming safety locally:</strong> Before entering any lower pools.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Verify current park entry process before arriving", "Wear grippy footwear for wet rock sections", "Combine with Chitrakote Falls and Kutumsar Cave", "Check swimming safety locally before entering pools", "Visit Oct–Dec for the best flow-to-safety balance"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Skip checking the park entry process", "Swim without checking local safety conditions first", "Wear flip-flops on wet rock sections", "Visit during peak summer expecting strong flow", "Rush through without visiting the park's caves too"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Tirathgarh Falls", "Kanger Valley", "Chhattisgarh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TIRATHGARH_GEAR} destination="Tirathgarh Falls" />
              <RelatedPostsGrid currentSlug="tirathgarh-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="tirathgarh-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
