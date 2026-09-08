// src/app/blog/horsley-hills-travel-guide/page.tsx
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
  title: "Horsley Hills Travel Guide: A Quiet Hill Station in Rayalaseema",
  description:
    "The complete Horsley Hills travel guide. Kalyani Dam, Gali Banda viewpoint, Mallamma Temple, where to stay, best time to visit, and a full itinerary through this low-key Rayalaseema hill station.",
  keywords:
    "Horsley Hills travel guide, Kalyani Dam, Gali Banda viewpoint, Mallamma Temple, best time to visit Horsley Hills, how to reach Horsley Hills, Rayalaseema hill station, Andhra Pradesh hill station",
  openGraph: {
    title: "Horsley Hills Travel Guide: A Quiet Hill Station in Rayalaseema",
    description: "A cool, forested hill station between Tirupati and Bangalore that's stayed genuinely low-key despite its convenient location — the complete guide to Horsley Hills.",
    url: "https://club.kudozz.in/blog/horsley-hills-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/hero.jpg", width: 1200, height: 630, alt: "Forested hill station scenery representative of Horsley Hills, Andhra Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Horsley Hills Travel Guide: A Quiet Hill Station in Rayalaseema", description: "A cool, forested hill station between Tirupati and Bangalore — the complete guide to Horsley Hills.", images: ["/images/destinations/manali/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/horsley-hills-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Horsley Hills Travel Guide: A Quiet Hill Station in Rayalaseema",
      description: "The complete Horsley Hills travel guide.",
      image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/horsley-hills-travel-guide" },
      about: { "@type": "Place", name: "Horsley Hills", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Horsley Hills Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Horsley Hills?", a: "One to two days covers the main viewpoints and Kalyani Dam comfortably — this is a compact hill station best used as a relaxed overnight break." },
  { q: "What is the best time to visit Horsley Hills?", a: "October to March is most comfortable, though the elevation keeps Horsley Hills cooler than the surrounding plains year-round, making it a viable escape even in warmer months." },
  { q: "How do I reach Horsley Hills?", a: "The nearest airports are Tirupati (~85km) and Bangalore (~140km), both a straightforward drive. There's no direct railway to Horsley Hills itself." },
  { q: "Is Horsley Hills a big hill station like Ooty or Munnar?", a: "No — it's genuinely modest in scale. Set expectations accordingly; this suits travelers wanting a quiet overnight break rather than a full hill-station holiday." },
  { q: "Can I combine Horsley Hills with a Tirupati or Bangalore trip?", a: "Yes — its location roughly between the two makes it a convenient stopover if you're already road-tripping between Tirupati/Chennai and Bangalore." },
  { q: "What is the budget for a trip to Horsley Hills?", a: "A budget traveler can manage on roughly ₹1,300 a day, a mid-range trip closer to ₹3,200 a day." },
  { q: "Is Horsley Hills good for a family trip?", a: "Yes — the gentle viewpoints, Kalyani Dam, and the small biological park make it manageable and pleasant for most ages." },
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
  { id: "introduction", title: "Why Horsley Hills?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Horsley Hills", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const HORSLEY_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for a relaxed hill-station break", emoji: "⛰️",
  items: [
    { name: "Light Warm Layers", description: "Evenings at this elevation are noticeably cooler than the surrounding plains.", price: "₹1,499", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("light+warm+jacket+travel"), tag: "Evening essential", tagColor: "bg-sky-100 text-sky-700", why: "The temperature drop after sunset surprises many first-time visitors." },
    { name: "Comfortable Walking Shoes", description: "For the short walks to Gali Banda viewpoint and around Kalyani Dam.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "The viewpoint paths are gentle but uneven in places." },
    { name: "Camera", description: "For the panoramic Gali Banda viewpoint and Kalyani Dam scenery.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "The viewpoints here are genuinely photogenic for a lesser-known hill station." },
    { name: "Reusable Water Bottle", description: "Useful for the walking sections between sights.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-purple-100 text-purple-700", why: "Facilities are modest given the hill station's small scale." },
  ],
}];

export default function HorsleyHillsGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/hero.jpg" alt="Forested hill station scenery representative of Horsley Hills, Andhra Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Horsley Hills", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Horsley Hills", "Rayalaseema", "Off-beat", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Horsley Hills Travel Guide: A Quiet Hill Station in Rayalaseema
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A cool, forested hill station between Tirupati and Bangalore that's stayed genuinely low-key despite its convenient location.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Horsley Hills, Andhra Pradesh" },
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
                  <h2>Why Horsley Hills?</h2>
                  <p>
                    <strong>Horsley Hills</strong> is a modest hill station in Andhra Pradesh's Rayalaseema region, named after a British collector who developed it as a colonial-era retreat. What makes it genuinely worth a stop is its location — sitting roughly between Tirupati and Bangalore, it's a convenient break for anyone road-tripping this route, yet it has stayed comparatively low-key and undercrowded despite that easy access.
                  </p>
                  <p>
                    Don't expect a large-scale hill-station holiday — Horsley Hills is quiet and small by design, better suited to a relaxed overnight break than a multi-day destination in itself.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>⛰️</span> Horsley Hills at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🌄", label: "Key Site", value: "Gali Banda Viewpoint" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Tirupati (~85km)" },
                        { icon: "🚗", label: "Character", value: "Convenient stopover" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹3,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Horsley Hills</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "The most comfortable temperatures for walking the viewpoints and enjoying the hill air." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warmer but still cool", text: "The elevation keeps it noticeably milder than the plains below even in the warmer months." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Green and atmospheric, though occasional rain can limit outdoor time." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February for the clearest, coolest conditions.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Horsley Hills</h2>
                  <ul>
                    <li><strong>By Air:</strong> Tirupati Airport (~85km) or Bangalore (~140km), both requiring an onward drive.</li>
                    <li><strong>By Train:</strong> No direct railway — the nearest useful stations connect via Tirupati or Bangalore.</li>
                    <li><strong>By Road:</strong> Straightforward given the location roughly between two major hubs.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> This makes an easy overnight break if you're already driving between Tirupati/Chennai and Bangalore — don't add a separate dedicated trip just for Horsley Hills.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Horsley Hills</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/hero.jpg" alt="Hill station scenery around Horsley Hills" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Kalyani Dam:</strong> A small reservoir with scenic surroundings, good for a relaxed walk.</li>
                    <li><strong>Gali Banda Viewpoint:</strong> A rock formation offering panoramic views over the surrounding plains.</li>
                    <li><strong>Mallamma Temple:</strong> A local temple tied to a hill legend, worth a quick visit.</li>
                    <li><strong>Horsley Hills Biological Park:</strong> A small zoo/park within the hill station.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Horsley Hills</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Government guesthouses", "Basic private lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Hill-view resort-style stays"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed cottages — this is a small hill station with modest options overall"] },
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
                  <h2>What to Eat in Horsley Hills</h2>
                  <ul>
                    <li><strong>Andhra thalis:</strong> Simple, spicy South Indian meals at local eateries.</li>
                    <li><strong>Resort-served meals:</strong> Most stays serve straightforward vegetarian and non-vegetarian set menus.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Horsley Hills Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Viewpoints", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Gali Banda Viewpoint", "Evening: relax at your stay"] },
                      { day: "Day 2", title: "Kalyani Dam & Departure", color: "bg-forest-600", activities: ["Morning: Kalyani Dam walk", "Late morning: Mallamma Temple and Biological Park", "Afternoon: departure"] },
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
                          ["Local transport per day", "₹250", "₹600"],
                          ["Daily total", "₹1,300", "₹3,200"],
                          ["2-Day trip total", "₹2,600", "₹6,400"],
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
                  <h2>Essential Travel Tips for Horsley Hills</h2>
                  <ul>
                    <li><strong>Treat it as a stopover, not a destination trip:</strong> Its real value is convenience on a Tirupati-Bangalore route.</li>
                    <li><strong>Set modest expectations:</strong> This is a small, quiet hill station, not a major resort town.</li>
                    <li><strong>Carry a light warm layer:</strong> Evenings are noticeably cooler than the plains.</li>
                    <li><strong>Book ahead on weekends:</strong> Limited stays fill up given the convenient location.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Use it as a relaxed stopover on a Tirupati-Bangalore drive", "Visit Gali Banda Viewpoint for sunset", "Walk Kalyani Dam at a leisurely pace", "Carry a light warm layer for evenings", "Book stays ahead on weekends"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a large-scale hill-station experience", "Plan a dedicated multi-day trip around it alone", "Skip booking ahead on weekends", "Expect extensive nightlife or dining variety", "Arrive without a light jacket for the evening chill"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Horsley Hills", "Rayalaseema", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={HORSLEY_GEAR} destination="Horsley Hills" />
              <RelatedPostsGrid currentSlug="horsley-hills-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="horsley-hills-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
