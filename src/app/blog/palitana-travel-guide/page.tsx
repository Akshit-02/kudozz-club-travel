// src/app/blog/palitana-travel-guide/page.tsx
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
  title: "Palitana Travel Guide: 3,500 Steps to the World's Largest Jain Temple Complex",
  description:
    "The complete Palitana travel guide. The Shatrunjaya Hill climb, over 900 Jain marble temples, palanquin services, where to stay, best time to visit, and essential pilgrimage tips.",
  keywords:
    "Palitana travel guide, Shatrunjaya Hill, Palitana Jain temples, Palitana steps climb, best time to visit Palitana, how to reach Palitana, Palitana vegetarian town, Jain pilgrimage Gujarat",
  openGraph: {
    title: "Palitana Travel Guide: 3,500 Steps to the World's Largest Jain Temple Complex",
    description: "Over 900 marble temples clustered on a single hilltop, reached by a climb of more than 3,500 steps — the complete guide to Palitana.",
    url: "https://club.kudozz.in/blog/palitana-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/hero.jpg", width: 1200, height: 630, alt: "Hilltop temple pilgrimage scenery representative of Palitana, Gujarat" }],
  },
  twitter: { card: "summary_large_image", title: "Palitana Travel Guide: 3,500 Steps to the World's Largest Jain Temple Complex", description: "Over 900 marble temples on a single hilltop — the complete guide to Palitana.", images: ["/images/destinations/manali/hero.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/palitana-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Palitana Travel Guide: 3,500 Steps to the World's Largest Jain Temple Complex",
      description: "The complete Palitana travel guide.",
      image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
      datePublished: "2026-09-07", dateModified: "2026-09-07",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/palitana-travel-guide" },
      about: { "@type": "Place", name: "Palitana", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Palitana Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How long does the Palitana climb take?", a: "Typically 2-3+ hours one-way at a steady pace, covering roughly 3,500-4,000 stone steps. Many pilgrims start before dawn to allow enough time for the climb, temple visits, and descent before the hill closes for the evening." },
  { q: "Is the Palitana climb difficult?", a: "Yes, genuinely — it's a long, sustained ascent that tests fitness even for regular walkers. Reasonable physical preparation and a steady pace matter more than speed." },
  { q: "Can I hire a palanquin (doli) if I can't climb?", a: "Yes — doli services carried by porters are available for those unable to complete the climb on foot, at an additional cost that varies by weight and distance." },
  { q: "Can I stay overnight on Shatrunjaya Hill?", a: "No — the hill and temples must be vacated by a set closing time each evening, and overnight stays on the hill itself are not permitted, reflecting the site's sanctity. Verify current closing time before you go." },
  { q: "Why is Palitana a vegetarian-only town?", a: "Given the town's deep Jain religious character and the sanctity of the pilgrimage site, Palitana has an officially recognized vegetarian-only status — one of very few towns in India with this designation. Plan your meals accordingly." },
  { q: "What is the best time to visit Palitana?", a: "October to March, when cooler temperatures make the long climb significantly more manageable. Summer heat makes the ascent genuinely difficult." },
  { q: "How do I reach Palitana?", a: "The nearest airport is Bhavnagar, about 50km away. Palitana has its own railway station, and road access is available via state highway." },
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
  { id: "introduction", title: "Why Palitana?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Palitana", level: 2 },
  { id: "top-attractions", title: "The Climb & Temple Complex", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Pilgrimage Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PALITANA_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the 3,500-step pilgrimage climb", emoji: "🛕",
  items: [
    { name: "Sturdy Trekking Shoes", description: "Essential for over 3,500 stone steps — proper footwear makes a real difference on both the climb and the long descent.", price: "₹2,999", rating: 4.5, reviews: "6.2k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+long+distance"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "This is a genuinely long, sustained climb — worn-out sandals or unsuitable shoes make it far harder than it needs to be." },
    { name: "Trekking Poles", description: "Useful for reducing strain on the knees during the long descent from the hilltop.", price: "₹1,299", rating: 4.4, reviews: "3.1k", image: "🥢", affiliateUrl: amazonSearchUrl("trekking+poles+pair"), tag: "Descent essential", tagColor: "bg-amber-100 text-amber-700", why: "Many climbers find the descent harder on the knees than the ascent — poles genuinely help." },
    { name: "Reusable Water Bottle (1L+)", description: "Facilities are limited along the climb — carrying enough water is essential.", price: "₹449", rating: 4.5, reviews: "7.9k", image: "💧", affiliateUrl: amazonSearchUrl("1l+reusable+water+bottle+steel"), tag: "Climb essential", tagColor: "bg-sky-100 text-sky-700", why: "There are limited water points on the long climb, especially before dawn." },
    { name: "Sun Hat", description: "The upper stretches of the climb offer little shade once the sun is up.", price: "₹499", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Climb essential", tagColor: "bg-purple-100 text-purple-700", why: "Starting before dawn helps, but the climb often extends into direct sun by the later stretches." },
  ],
}];

export default function PalitanaGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/hero.jpg" alt="Hilltop temple pilgrimage scenery representative of Palitana, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Palitana", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Palitana", "Jain Temples", "Trekking", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Palitana Travel Guide: 3,500 Steps to the World's Largest Jain Temple Complex
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Over 900 marble temples clustered on a single hilltop, reached by a climb of more than 3,500 steps.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Palitana, Gujarat" },
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
                  <h2>Why Palitana?</h2>
                  <p>
                    <strong>Palitana</strong>'s Shatrunjaya Hill is home to what's widely cited as the world's largest cluster of Jain temples — over 900 intricately carved marble shrines, built across many centuries and grouped into interconnected walled enclosures called <em>tuks</em>. It's one of Jainism's most sacred pilgrimage sites, associated with the first Tirthankara, Adinath (Rishabhanatha).
                  </p>
                  <p>
                    Reaching the temples means climbing roughly 3,500 to 4,000 stone steps — a genuinely demanding ascent that many pilgrims undertake as an act of devotion, often starting before dawn. Palitana town itself is dedicated to this sanctity: it holds official vegetarian-only status, one of very few places in India with this designation.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Palitana at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🛕", label: "Key Site", value: "Shatrunjaya Hill Temples" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🪜", label: "Climb", value: "~3,500-4,000 steps" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bhavnagar (~50km)" },
                        { icon: "🥗", label: "Town Custom", value: "Vegetarian-only" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Palitana</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable temperatures make the long climb significantly more manageable." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — genuinely difficult", text: "Heat makes the 3,500+ step climb considerably harder — plan an even earlier start if visiting during this window." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Wet stone steps add slip risk on an already demanding climb." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February — the coolest, most manageable window for the climb.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Palitana</h2>
                  <ul>
                    <li><strong>By Air:</strong> Bhavnagar Airport, about 50km away, or Diu as an alternative.</li>
                    <li><strong>By Train:</strong> Palitana has its own railway station.</li>
                    <li><strong>By Road:</strong> Well connected via state highway from Bhavnagar and other Gujarat towns.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Verify the current closing time for Shatrunjaya Hill before you start your climb — the temples must be vacated by evening and there's no overnight stay permitted on the hill.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>The Climb & Temple Complex</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/hero.jpg" alt="Hilltop pilgrimage temple scenery around Palitana" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Shatrunjaya Hill:</strong> Home to over 900 marble Jain temples spread across walled enclosures (tuks), built over many centuries.</li>
                    <li><strong>The step climb:</strong> Roughly 3,500-4,000 stone steps, typically taking 2-3+ hours one-way at a steady pace.</li>
                    <li><strong>Palanquin (doli) service:</strong> Available for those unable to climb on foot, carried by porters at an additional cost.</li>
                    <li><strong>Adinath Temple:</strong> The principal shrine at the summit, dedicated to the first Tirthankara.</li>
                    <li><strong>Evening closure:</strong> The hill and temples close by a set time each evening — no overnight stay is permitted on the hill itself, reflecting the site's sanctity.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Palitana</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹400–₹1,000/night", picks: ["Dharamshala-style pilgrim accommodation", "Basic guesthouses near the town centre"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,200–₹3,000/night", picks: ["Private mid-range hotels", "Trust-run guest accommodations"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — luxury options here are genuinely limited given the town's pilgrimage character"] },
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
                  <h2>What to Eat in Palitana</h2>
                  <p>Palitana is officially a vegetarian-only town, reflecting its deep Jain religious character — plan your meals with this in mind.</p>
                  <ul>
                    <li><strong>Gujarati thalis:</strong> Widely available vegetarian thalis at local restaurants and dharamshalas.</li>
                    <li><strong>Trust-run canteens:</strong> Simple, wholesome vegetarian meals near the base of the climb.</li>
                    <li><strong>Light snacks for the climb:</strong> Many pilgrims carry simple snacks and water rather than eating a heavy meal before the ascent.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Palitana Pilgrimage Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Pre-Dawn", title: "Start the Climb", color: "bg-amber-700", activities: ["Begin the ascent before or at dawn", "Steady pace up the ~3,500-4,000 steps", "Reach the temple complex by mid-morning"] },
                      { day: "Midday", title: "Temple Complex", color: "bg-forest-600", activities: ["Explore the tuks and Adinath Temple", "Rest and take in the views", "Begin the descent with enough buffer before evening closure"] },
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
                          ["Accommodation/night", "₹600", "₹2,000"],
                          ["Food/day", "₹250", "₹600"],
                          ["Doli/palanquin (optional)", "₹1,500", "₹3,000"],
                          ["1-Day trip total (no doli)", "₹850", "₹2,600"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Doli/palanquin cost varies by weight and distance carried.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Palitana</h2>
                  <ul>
                    <li><strong>Start before dawn:</strong> Gives enough time for the climb, temple visits, and descent before the hill's evening closure.</li>
                    <li><strong>Verify current closing time:</strong> This changes and matters given no overnight stay is permitted on the hill.</li>
                    <li><strong>Dress and behave modestly:</strong> This is a deeply sacred pilgrimage site, not a tourist attraction.</li>
                    <li><strong>Respect the vegetarian-only town custom:</strong> Plan meals accordingly.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Start the climb before or at dawn", "Carry sufficient water for the ascent", "Verify current hill closing time before you begin", "Dress and behave respectfully throughout", "Consider a doli if you can't complete the full climb"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Start the climb late in the day", "Underestimate how demanding the ascent is", "Expect to stay overnight on the hill", "Bring or expect non-vegetarian food in town", "Rush the descent without trekking poles or care for your knees"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Palitana", "Jain Temples", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PALITANA_GEAR} destination="Palitana" />
              <RelatedPostsGrid currentSlug="palitana-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="palitana-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
