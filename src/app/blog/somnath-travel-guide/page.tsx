// src/app/blog/somnath-travel-guide/page.tsx
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
  title: "Somnath Temple Travel Guide: History, Timings & Light Show",
  description:
    "The complete Somnath travel guide. Temple history, the evening light-and-sound show, Triveni Sangam, Bhalka Tirth, where to stay, best time to visit, and a full itinerary through Gujarat's most storied pilgrimage town.",
  keywords:
    "Somnath travel guide, Somnath temple history, Somnath light and sound show, Jyotirlinga Somnath, best time to visit Somnath, how to reach Somnath, Somnath Dwarka itinerary, Gujarat pilgrimage",
  openGraph: {
    title: "Somnath Temple Travel Guide: History, Timings & Light Show",
    description: "The first of the 12 Jyotirlingas, destroyed and rebuilt multiple times over a thousand years, standing today rebuilt in Chalukya style facing the Arabian Sea — the complete guide to Somnath.",
    url: "https://club.kudozz.in/blog/somnath-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/fort.jpg", width: 1200, height: 630, alt: "Sandstone temple architecture representative of Somnath, Gujarat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somnath Temple Travel Guide: History, Timings & Light Show",
    description: "One of the 12 Jyotirlingas, rebuilt to face the Arabian Sea — the complete guide to Somnath.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/somnath-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Somnath Temple Travel Guide: History, Timings & Light Show",
          description: "The complete Somnath travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/somnath-travel-guide" },
          about: { "@type": "Place", name: "Somnath", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Somnath Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Somnath?", a: "One full day is enough for the temple, museum, and evening light-and-sound show. Most travelers combine Somnath with Dwarka and Junagadh/Girnar as part of a longer Saurashtra circuit." },
  { q: "What is the best time to visit Somnath?", a: "October to March offers the most comfortable temperatures for temple visits and walking the seafront. Summers are hot, and the coastal humidity picks up before monsoon." },
  { q: "How do I reach Somnath?", a: "The nearest airport is Diu, about 85km away; Rajkot's airport is a farther alternative at roughly 200km. Somnath has its own railway station, and road access is via SH25." },
  { q: "What time is the light and sound show at Somnath?", a: "A daily evening show narrating the temple's history runs at the temple complex — exact timing shifts seasonally, so check the current schedule locally or with your accommodation on arrival." },
  { q: "Is there a dress code at Somnath Temple?", a: "Yes — modest dress covering shoulders and legs is expected, as at any active Hindu pilgrimage site. Leather items may face restrictions in some areas; check current guidance at the entrance." },
  { q: "Can Somnath and Dwarka be visited together?", a: "Yes — this is the standard pairing for most pilgrims and travelers, and the two are commonly combined with Junagadh/Girnar into a single Saurashtra temple-and-heritage loop." },
  { q: "What is the budget for a trip to Somnath?", a: "A budget traveler can manage on roughly ₹1,200 a day, a mid-range trip closer to ₹3,000 a day, largely driven by accommodation choice since the temple visit itself is free." },
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
  { id: "introduction", title: "Why Somnath?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Somnath", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SOMNATH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple visits and the seafront evening show",
    emoji: "🛕",
    items: [
      { name: "Modest Cotton Clothing", description: "Somnath is an active pilgrimage site expecting covered shoulders and legs throughout the temple complex.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Somnath is a genuinely active worship site, not a sightseeing-only monument." },
      { name: "Comfortable Walking Shoes", description: "For the temple grounds, museum, and a walk along the seafront promenade.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Stone temple grounds and the seafront walk add up over a full day." },
      { name: "Light Shawl / Stole", description: "Useful as an extra layer of modesty inside the temple and for cooler evening sea breezes during the light show.", price: "₹399", rating: 4.4, reviews: "3.2k", image: "🧣", affiliateUrl: amazonSearchUrl("light+shawl+travel+stole"), tag: "Temple essential", tagColor: "bg-sky-100 text-sky-700", why: "Sea breeze in the evening can be cooler than the daytime heat suggests." },
      { name: "Reusable Water Bottle", description: "For a full day covering the temple, museum, Triveni Sangam, and Bhalka Tirth.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "Coastal Gujarat heat makes hydration important even in cooler months." },
    ],
  },
];

export default function SomnathGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Sandstone temple architecture representative of Somnath, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Somnath", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Somnath", "Jyotirlinga", "Heritage", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Somnath Temple Travel Guide: History, Timings & Light Show
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The first of the 12 Jyotirlingas, destroyed and rebuilt multiple times over a thousand years, standing today in Chalukya style facing the Arabian Sea.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Somnath, Gujarat" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Somnath?</h2>
                  <p>
                    <strong>Somnath Temple</strong> is considered the first among the twelve Jyotirlingas dedicated to Shiva, and its history is as dramatic as its setting — the temple has been destroyed and rebuilt multiple times across centuries, including a well-documented 11th-century raid by Mahmud of Ghazni. The structure standing today was rebuilt in the mid-20th century in Chalukya architectural style, an initiative led by Sardar Vallabhbhai Patel shortly after Indian independence, making the reconstruction itself a genuinely significant piece of modern history.
                  </p>
                  <p>
                    The temple sits directly on the Arabian Sea coast, and locals often point out that the ocean stretch in front of it runs uninterrupted all the way to Antarctica — a well-known local claim worth mentioning as folklore rather than fact, but part of what makes the setting so striking.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Somnath at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🛕", label: "Significance", value: "First of 12 Jyotirlingas" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Diu (~85km)" },
                        { icon: "🌊", label: "Setting", value: "Arabian Sea coast" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Somnath</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for temple visits and the seafront evening show, without coastal summer humidity." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Rising temperatures make midday sightseeing tiring — plan around early morning and evening." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Coastal rain and humidity, though the temple remains fully functional year-round for pilgrims." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable window for both daytime temple visits and the evening light-and-sound show on the seafront.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Somnath</h2>
                  <ul>
                    <li><strong>By Air:</strong> Diu Airport, about 85km away, is the nearest; Rajkot's airport is a farther alternative at roughly 200km.</li>
                    <li><strong>By Train:</strong> Somnath has its own railway station with reasonable connectivity.</li>
                    <li><strong>By Road:</strong> Well connected via SH25, commonly combined with Dwarka and Junagadh/Girnar as part of a Saurashtra loop.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Somnath with Dwarka and Gir National Park into a single Saurashtra trip — the region's sites cluster naturally along the same coastal-and-inland route.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Somnath</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Temple architecture representative of Somnath" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Somnath Temple:</strong> The main shrine, rebuilt in Chalukya style, with its distinctive seafront setting on the Arabian Sea.</li>
                    <li><strong>Evening Light & Sound Show:</strong> A daily program narrating the temple's history — check current timing locally.</li>
                    <li><strong>Somnath Museum (Prabhas Patan Museum):</strong> Older temple artifacts and sculptures from earlier reconstructions.</li>
                    <li><strong>Triveni Sangam:</strong> Where three rivers are believed to converge, an important bathing spot for pilgrims.</li>
                    <li><strong>Bhalka Tirth:</strong> A short distance away, associated with the legend of Krishna's death.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Somnath</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹600–₹1,500/night", picks: ["Dharamshala-style pilgrim stays", "Basic guesthouses near the temple"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Seafront mid-range hotels", "Trust-run comfortable accommodation"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium coastal resort properties nearby"] },
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
                  <h2>What to Eat in Somnath</h2>
                  <p>Gujarat's state-wide alcohol prohibition applies here — food centres firmly on vegetarian thalis and local sweets.</p>
                  <ul>
                    <li><strong>Gujarati thali:</strong> A full spread of dal, sabzi, roti, rice, and sweets, widely available at local eateries.</li>
                    <li><strong>Fafda-jalebi:</strong> A classic Gujarati breakfast combination, worth seeking out.</li>
                    <li><strong>Coastal Saurashtra snacks:</strong> Simple, home-style vegetarian fare reflecting the region's pilgrim-town character.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Somnath Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Temple & Museum", color: "bg-amber-700", activities: ["Darshan at Somnath Temple", "Visit the Somnath Museum", "Walk the seafront promenade"] },
                      { day: "Afternoon", title: "Triveni Sangam & Bhalka Tirth", color: "bg-forest-600", activities: ["Visit Triveni Sangam", "Short trip to Bhalka Tirth", "Rest before evening"] },
                      { day: "Evening", title: "Light & Sound Show", color: "bg-purple-600", activities: ["Catch the evening light-and-sound show", "Dinner near the temple area"] },
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
                          ["Accommodation/night", "₹800", "₹2,800", "₹8,000"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Local transport per day", "₹200", "₹500", "₹1,200"],
                          ["Daily total", "₹1,200", "₹3,000", "₹9,700"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Temple entry itself is free.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Somnath</h2>
                  <ul>
                    <li><strong>Dress modestly:</strong> Covered shoulders and legs are expected throughout the temple complex.</li>
                    <li><strong>Check light show timing locally:</strong> The evening schedule shifts seasonally.</li>
                    <li><strong>Combine with Dwarka and Junagadh/Girnar:</strong> The natural Saurashtra pilgrimage circuit.</li>
                    <li><strong>Carry cash:</strong> Small local eateries and stalls near the temple may not accept cards.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Catch the evening light-and-sound show", "Dress modestly throughout the complex", "Combine with Dwarka and Junagadh/Girnar", "Visit the museum for historical context", "Carry sufficient cash"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Wear beachwear-style clothing near the temple", "Skip checking the light show's current timing", "Expect alcohol availability anywhere in Gujarat", "Rush through without visiting Triveni Sangam", "Rely solely on cards for small local purchases"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Somnath", "Jyotirlinga", "Heritage", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SOMNATH_GEAR} destination="Somnath" />
              <RelatedPostsGrid currentSlug="somnath-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="somnath-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
