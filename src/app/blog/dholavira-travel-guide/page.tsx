// src/app/blog/dholavira-travel-guide/page.tsx
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
  title: "Dholavira Travel Guide: Harappan City & UNESCO World Heritage Site",
  description:
    "The complete Dholavira travel guide. The Indus Valley Civilization's water conservation system, the citadel layout, the inscribed signboard, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Dholavira travel guide, Harappan civilization site, Indus Valley Civilization Gujarat, Dholavira UNESCO, best time to visit Dholavira, how to reach Dholavira, Rann of Kutch archaeology",
  openGraph: {
    title: "Dholavira Travel Guide: Harappan City & UNESCO World Heritage Site",
    description: "A 5,000-year-old Indus Valley Civilization city with a water conservation system centuries ahead of its time, on a remote island in the Rann of Kutch — the complete guide to Dholavira.",
    url: "https://club.kudozz.in/blog/dholavira-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/spiti-valley/spiti-valley.jpg", width: 1200, height: 630, alt: "Arid excavated landscape representative of Dholavira, Gujarat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dholavira Travel Guide: Harappan City & UNESCO World Heritage Site",
    description: "A 5,000-year-old Indus Valley city on a remote island in the Rann of Kutch — the complete guide to Dholavira.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/dholavira-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Dholavira Travel Guide: Harappan City & UNESCO World Heritage Site",
          description: "The complete Dholavira travel guide.",
          image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dholavira-travel-guide" },
          about: { "@type": "Place", name: "Dholavira", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Dholavira Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need for Dholavira?", a: "A full day at the site itself, plus a day of travel each way given its remoteness — most travelers plan 1-2 nights near Bhuj or the site to avoid a rushed visit." },
  { q: "What is the best time to visit Dholavira?", a: "October to March. This is an exposed, largely shadeless archaeological site, and summer heat makes a proper visit genuinely difficult." },
  { q: "How do I reach Dholavira?", a: "The nearest airport is Bhuj, roughly 250km away — a long drive given the site's remote position on Khadir Island within the Rann of Kutch. Road is the only practical route." },
  { q: "What makes Dholavira historically significant?", a: "It's one of the largest and best-preserved Indus Valley Civilization sites, notable for a sophisticated water conservation system of stepped tanks and channels, a distinctive tripartite walled city layout, and one of the earliest known examples of Indus script displayed on-site." },
  { q: "Is there a museum at Dholavira?", a: "Yes — an on-site museum displays pottery, seals, jewelry, and other artifacts excavated from the site, providing useful context before or after walking the ruins." },
  { q: "Can Dholavira be combined with the Rann of Kutch/Rann Utsav?", a: "Yes, though the logistics require planning given the distances involved within the Kutch region — many travelers base in Bhuj and treat Dholavira as a dedicated day trip from there." },
  { q: "What is the budget for a trip to Dholavira?", a: "A budget traveler can manage on roughly ₹1,500 a day, though accommodation options near the site itself are limited — many stay in Bhuj and factor in the longer travel day." },
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
  { id: "introduction", title: "Why Dholavira?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dholavira", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DHOLAVIRA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for an exposed archaeological site in remote Kutch",
    emoji: "🏺",
    items: [
      { name: "Wide-Brim Sun Hat", description: "Dholavira's excavated site offers essentially no shade — real sun protection matters here.", price: "₹399", rating: 4.4, reviews: "4.1k", image: "👒", affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"), tag: "Site essential", tagColor: "bg-amber-100 text-amber-700", why: "This is one of the most exposed heritage sites on the site's Gujarat coverage — shade is essentially nonexistent." },
      { name: "High-SPF Sunscreen", description: "Extended walking across the exposed excavated grounds under direct Kutch sun.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("high+spf+sunscreen+travel"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Sunburn is a real, common regret for visitors who underestimate this site's exposure." },
      { name: "2L Hydration Bottle", description: "Facilities near the remote site are minimal — carrying enough water is essential.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"), tag: "Remote-site essential", tagColor: "bg-sky-100 text-sky-700", why: "Given the distance from any town, running out of water here is a genuine problem, not just an inconvenience." },
      { name: "Comfortable Walking Shoes", description: "For navigating the uneven excavated terrain of the citadel, middle town, and lower town.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+outdoor"), tag: "Site essential", tagColor: "bg-forest-100 text-forest-700", why: "The excavated grounds are uneven stone and packed earth, not paved paths." },
    ],
  },
];

export default function DholaviraGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Arid excavated landscape representative of Dholavira, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dholavira", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dholavira", "Indus Valley Civilization", "UNESCO", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dholavira Travel Guide: Harappan City & UNESCO World Heritage Site
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A 5,000-year-old Indus Valley Civilization city with a water conservation system centuries ahead of its time, on a remote island in the Rann of Kutch.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dholavira, Gujarat" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,000 words" },
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
                  <h2>Why Dholavira?</h2>
                  <p>
                    <strong>Dholavira</strong> is one of the largest and best-preserved cities of the Indus Valley (Harappan) Civilization, a UNESCO World Heritage Site sitting on Khadir Island within the Great Rann of Kutch. What sets it apart from other Harappan sites is a genuinely remarkable water conservation system — a network of stepped tanks and channels engineered to harvest and store scarce water in this arid region, roughly 5,000 years ago.
                  </p>
                  <p>
                    The site's distinctive tripartite layout — a walled citadel, middle town, and lower town — reflects a level of urban planning that's rare to see this clearly preserved. An on-site museum displays excavated pottery, seals, and jewelry, including a famous inscribed signboard among the earliest publicly displayed examples of Indus script.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏺</span> Dholavira at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🏛️", label: "Significance", value: "Indus Valley Civilization city" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Bhuj (~250km)" },
                        { icon: "🏆", label: "Status", value: "UNESCO World Heritage Site" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dholavira</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather makes extended walking across the exposed excavated site genuinely manageable." },
                      { season: "Mar", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warming up", text: "Still workable but noticeably hotter — go earlier in the day." },
                      { season: "Apr – Sep", emoji: "🥵", color: "bg-red-50 border-red-200", mood: "Avoid if possible", text: "Extreme heat across this arid region makes a proper visit to the shadeless site genuinely difficult." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the only genuinely comfortable window for walking this exposed, shadeless excavated site.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dholavira</h2>
                  <ul>
                    <li><strong>By Air:</strong> Bhuj Airport, roughly 250km away, is the nearest — expect a long onward drive.</li>
                    <li><strong>By Road:</strong> The only practical route to the site, given its remote position on Khadir Island within the Rann of Kutch.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Budget a full day just for travel each way — this requires more trip-planning commitment than most Gujarat heritage sites, and rushing it undermines the visit.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See at Dholavira</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Excavated ruins landscape at Dholavira" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The water conservation system:</strong> Stepped tanks and channels engineered to harvest scarce water — the site's standout feature.</li>
                    <li><strong>The tripartite city layout:</strong> A walled citadel, middle town, and lower town, offering a rare clear view of Harappan urban planning.</li>
                    <li><strong>The inscribed signboard:</strong> Among the earliest publicly displayed examples of Indus script.</li>
                    <li><strong>Dholavira Museum:</strong> On-site displays of excavated pottery, seals, and jewelry providing valuable context.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Dholavira</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Basic guesthouses near the site", "Simple stays in Bhuj (longer commute)"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Better-appointed Bhuj hotels", "Tent-stay options during peak season"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of higher-end Bhuj properties — luxury near the remote site itself is genuinely limited"] },
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
                  <h2>What to Eat Near Dholavira</h2>
                  <ul>
                    <li><strong>Kutchi thalis:</strong> Regional Gujarati fare with Kutch's distinctive local touches.</li>
                    <li><strong>Guesthouse-served meals:</strong> Most stays near the remote site serve set vegetarian meals.</li>
                    <li><strong>Bhuj's wider food scene:</strong> A larger range of options if basing there for the trip.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Dholavira Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Travel to Dholavira", color: "bg-amber-700", activities: ["Long drive from Bhuj to Dholavira", "Check in near the site", "Sunset views over the Rann landscape"] },
                      { day: "Day 2", title: "Excavated City & Museum", color: "bg-forest-600", activities: ["Morning: explore the citadel, middle town, and water system", "Visit the on-site museum", "Afternoon: return drive to Bhuj"] },
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
                          ["Accommodation/night", "₹900", "₹2,800"],
                          ["Food/day", "₹350", "₹800"],
                          ["Local transport per day", "₹500", "₹1,200"],
                          ["Daily total", "₹1,500", "₹3,500"],
                          ["2-Day trip total", "₹3,000", "₹7,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Local transport costs are higher here given the long distances involved.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Dholavira</h2>
                  <ul>
                    <li><strong>Build in a full travel day each way:</strong> This is one of Gujarat's more remote heritage destinations.</li>
                    <li><strong>Carry sufficient water and sun protection:</strong> The site is exposed with minimal shade.</li>
                    <li><strong>Hire a guide:</strong> Context on the water management system and urban layout significantly improves the visit.</li>
                    <li><strong>Combine with Bhuj/Kutch region logistics:</strong> Base yourself accordingly given the site's remoteness.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Build in a full travel day each way", "Carry sufficient water and sun protection", "Hire a guide for historical context", "Visit the on-site museum", "Plan around Oct-Feb for comfortable conditions"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Underestimate the travel distance and time", "Visit without sun protection or enough water", "Attempt a rushed day trip without a full travel plan", "Visit in peak summer heat", "Expect extensive facilities near the remote site"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dholavira", "Indus Valley Civilization", "UNESCO", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DHOLAVIRA_GEAR} destination="Dholavira" />
              <RelatedPostsGrid currentSlug="dholavira-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="dholavira-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
