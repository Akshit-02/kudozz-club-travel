// src/app/blog/guruvayur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Guruvayur Temple Travel Guide: Darshan, Timings & How to Reach",
  description:
    "The complete Guruvayur travel guide. Sree Krishna Temple darshan, Punnathur Kotta elephant sanctuary, dress code, where to stay, best time to visit, and how to reach Kerala's most revered Krishna temple town.",
  keywords:
    "Guruvayur travel guide, Guruvayur temple darshan, Guruvayur timings, Punnathur Kotta elephant sanctuary, Guruvayur Ekadasi, how to reach Guruvayur, Kerala temple towns",
  openGraph: {
    title: "Guruvayur Temple Travel Guide: Darshan, Timings & How to Reach",
    description: "One of Kerala's most revered Krishna temples, home to a herd of temple elephants and a darshan queue that starts before sunrise — the complete guide to Guruvayur.",
    url: "https://club.kudozz.in/blog/guruvayur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Temple town atmosphere representative of Guruvayur, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guruvayur Temple Travel Guide: Darshan, Timings & How to Reach",
    description: "One of Kerala's most revered Krishna temples — the complete guide to Guruvayur.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/guruvayur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Guruvayur Temple Travel Guide: Darshan, Timings & How to Reach",
          description: "The complete Guruvayur travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/guruvayur-travel-guide" },
          about: { "@type": "Place", name: "Guruvayur", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Guruvayur Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Can non-Hindus enter Guruvayur Temple?", a: "Traditionally, non-Hindus are not permitted inside the inner temple premises, per long-standing temple custom. This policy is worth confirming directly before your visit, since access rules at Indian temples can be enforced strictly and vary by site." },
  { q: "What is the dress code at Guruvayur?", a: "Men are expected to wear a traditional mundu or dhoti, and women similarly modest attire — this is enforced strictly and there are generally no exceptions for visitors." },
  { q: "How do I reach Guruvayur?", a: "The nearest airports are Kochi (COK, ~90km) and Kozhikode (CCJ, ~85km). Guruvayur has its own railway station well connected to Thrissur, and it's about a 29km drive from Thrissur town." },
  { q: "When is the best time to visit Guruvayur?", a: "The temple operates year-round as an active pilgrimage site. October to March is generally more comfortable weather-wise, though festival periods like Guruvayur Ekadasi bring by far the largest crowds regardless of season." },
  { q: "How long does darshan typically take?", a: "This varies enormously by day and season — weekdays are noticeably faster than weekends, and festival days can mean queues of several hours. Weekday visits are the most reliable way to minimize wait time." },
  { q: "What is Punnathur Kotta?", a: "It's the Guruvayur Elephant Sanctuary, home to a large herd of temple elephants gifted or dedicated to the temple over generations — a distinct and worthwhile stop separate from the temple visit itself." },
  { q: "What is the budget for a trip to Guruvayur?", a: "A budget traveler can manage on roughly ₹1,000 a day using temple trust accommodation, a mid-range trip closer to ₹2,800 a day at a private hotel." },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Guruvayur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Guruvayur", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GURUVAYUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple queues and traditional dress requirements",
    emoji: "🛕",
    items: [
      { name: "Traditional Dhoti/Mundu Set", description: "The temple's dress code is strictly enforced — a proper mundu for men is non-negotiable for entry.", price: "₹499", rating: 4.4, reviews: "2.8k", image: "🥻", affiliateUrl: amazonSearchUrl("mens+mundu+dhoti+cotton"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "There are generally no exceptions to the dress code at Guruvayur — arriving prepared avoids a last-minute scramble." },
      { name: "Comfortable Slip-On Footwear", description: "Long queue standing and frequent footwear removal make slip-ons far more practical than laced shoes.", price: "₹599", rating: 4.3, reviews: "3.5k", image: "🩴", affiliateUrl: amazonSearchUrl("slip+on+sandals+travel"), tag: "Queue essential", tagColor: "bg-amber-100 text-amber-700", why: "Darshan queues at busy times can run long, and footwear comes off well before the sanctum." },
      { name: "Small Cross-Body Bag", description: "For keeping shoes, phone, and valuables secure while moving through crowded temple queues.", price: "₹399", rating: 4.3, reviews: "2.1k", image: "👝", affiliateUrl: amazonSearchUrl("small+crossbody+travel+bag"), tag: "Queue essential", tagColor: "bg-forest-100 text-forest-700", why: "Guruvayur can be genuinely crowded on weekends and festival days." },
      { name: "Light Cotton Shawl", description: "Useful as an extra modesty layer and for early-morning darshan queues before sunrise.", price: "₹299", rating: 4.3, reviews: "1.9k", image: "🧣", affiliateUrl: amazonSearchUrl("cotton+shawl+travel"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Pre-dawn queue waits can be cool, and a shawl doubles as extra coverage." },
    ],
  },
];

export default function GuruvayurGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Temple town atmosphere representative of Guruvayur, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Guruvayur", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Guruvayur", "Krishna Temple", "Heritage", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Guruvayur Temple Travel Guide: Darshan, Timings & How to Reach
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of Kerala's most revered Krishna temples, home to a herd of temple elephants and a darshan queue that starts well before sunrise.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Guruvayur, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,600 words" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={m.d} /></svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24"><TableOfContents items={tableOfContents} /></div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Guruvayur?</h2>
                  <p>
                    <strong>Guruvayur</strong> is home to one of India's most important Krishna temples, the Sree Krishna Temple, and one of Kerala's busiest pilgrimage sites. Devotees travel here from across South India and beyond, and the town's entire rhythm — from its markets to its accommodation — is built around the temple.
                  </p>
                  <p>
                    Per long-standing temple custom, non-Hindus are traditionally not permitted inside the inner premises. We mention this upfront because it's important practical information, not a judgment — anyone planning a visit should confirm current policy before travelling.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Guruvayur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🛕", label: "Key Site", value: "Sree Krishna Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Guruvayur Railway Station" },
                        { icon: "🐘", label: "Nearby", value: "Punnathur Kotta elephant sanctuary" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹2,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Guruvayur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Most comfortable weather", text: "Cooler and drier, generally the most pleasant window for the temple visit and queue standing." },
                      { season: "Year-round", emoji: "🛕", color: "bg-purple-50 border-purple-200", mood: "Always an active pilgrimage site", text: "The temple operates year-round regardless of season — weather comfort is the main variable, not access." },
                      { season: "Festival periods", emoji: "🎉", color: "bg-orange-50 border-orange-200", mood: "Largest crowds — Guruvayur Ekadasi and others", text: "Major festival days, following the Malayalam/lunar calendar, bring by far the biggest crowds of the year." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Visit on a weekday outside major festival dates for the shortest queues and most comfortable experience.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Guruvayur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kochi (COK, ~90km) and Kozhikode (CCJ, ~85km) are the nearest airports.</li>
                    <li><strong>By Train:</strong> Guruvayur has its own railway station, well connected to Thrissur and the wider Kerala rail network.</li>
                    <li><strong>By Road:</strong> A straightforward ~29km drive from Thrissur town.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Non-Hindu visitors should verify the temple's current entry policy directly before travelling — this is important practical information, not optional trivia.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Guruvayur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Temple town scenery around Guruvayur" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Sree Krishna Temple darshan:</strong> The central experience of a Guruvayur visit — plan for queue time, especially on weekends and festival days.</li>
                    <li><strong>Punnathur Kotta:</strong> The Guruvayur Elephant Sanctuary, home to a large herd of temple elephants — a distinct, worthwhile stop.</li>
                    <li><strong>Temple town markets:</strong> Small shops around the temple selling devotional items, prasad, and local goods.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Guruvayur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🛕", range: "₹500–₹1,200/night", picks: ["Temple trust accommodation", "Basic lodges near the temple"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Private mid-range hotels in town"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — options are limited in this pilgrimage town"] },
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
                  <h2>What to Eat in Guruvayur</h2>
                  <ul>
                    <li><strong>Temple prasadam:</strong> Simple, traditional offerings available at and around the temple.</li>
                    <li><strong>Local vegetarian eateries:</strong> Straightforward Kerala vegetarian thalis and meals near the temple area.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Guruvayur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Darshan", color: "bg-amber-700", activities: ["Early arrival for the queue", "Sree Krishna Temple darshan", "Time in the temple town"] },
                      { day: "Afternoon", title: "Punnathur Kotta & Departure", color: "bg-forest-600", activities: ["Visit Punnathur Kotta elephant sanctuary", "Browse the temple town markets", "Departure"] },
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
                          ["Local transport", "₹150", "₹200"],
                          ["Daily total", "₹1,000", "₹2,800"],
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
                  <h2>Essential Travel Tips for Guruvayur</h2>
                  <ul>
                    <li><strong>Follow the dress code strictly:</strong> Traditional attire is expected and there are generally no exceptions.</li>
                    <li><strong>Confirm entry policy in advance:</strong> Non-Hindu visitors should verify current temple entry rules before travelling.</li>
                    <li><strong>Visit on a weekday:</strong> Weekday darshan queues are noticeably shorter than weekends and festival days.</li>
                    <li><strong>Visit Punnathur Kotta separately:</strong> It's a worthwhile, distinct stop from the temple itself.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Wear traditional dress per the temple's dress code", "Visit on a weekday for shorter queues", "Verify entry policy in advance if non-Hindu", "Visit Punnathur Kotta as a separate stop", "Carry cash for the temple town's small shops"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume casual clothing will be accepted for entry", "Visit expecting quick darshan on a festival day", "Skip verifying entry policy if non-Hindu", "Rely heavily on cards for payments", "Rush the visit — build in real queue time"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Guruvayur", "Krishna Temple", "Heritage", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={GURUVAYUR_GEAR} destination="Guruvayur" />
              <RelatedPostsGrid currentSlug="guruvayur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="guruvayur-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
