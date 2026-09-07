// src/app/blog/dwarka-travel-guide/page.tsx
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
  title: "Dwarka Travel Guide: Krishna's Ancient Kingdom & Char Dham Site",
  description:
    "The complete Dwarka travel guide. Dwarkadhish Temple, Bet Dwarka, Nageshwar Jyotirlinga, where to stay, best time to visit, and a full itinerary through one of Hinduism's four Char Dham sites.",
  keywords:
    "Dwarka travel guide, Dwarkadhish Temple, Bet Dwarka, Nageshwar Jyotirlinga, Char Dham Dwarka, best time to visit Dwarka, how to reach Dwarka, Krishna temple Gujarat",
  openGraph: {
    title: "Dwarka Travel Guide: Krishna's Ancient Kingdom & Char Dham Site",
    description: "One of Hinduism's four Char Dham pilgrimage sites, believed to be the ancient capital of Krishna's kingdom on the Arabian Sea coast — the complete guide to Dwarka.",
    url: "https://club.kudozz.in/blog/dwarka-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/goa/hero.jpg", width: 1200, height: 630, alt: "Coastal temple town representative of Dwarka, Gujarat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarka Travel Guide: Krishna's Ancient Kingdom & Char Dham Site",
    description: "Dwarkadhish Temple and one of Hinduism's four Char Dham sites — the complete guide to Dwarka.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/dwarka-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Dwarka Travel Guide: Krishna's Ancient Kingdom & Char Dham Site",
          description: "The complete Dwarka travel guide.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dwarka-travel-guide" },
          about: { "@type": "Place", name: "Dwarka", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Dwarka Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Dwarka?", a: "One to two days covers Dwarkadhish Temple, Bet Dwarka, and Nageshwar Jyotirlinga comfortably." },
  { q: "What is the best time to visit Dwarka?", a: "October to March offers comfortable coastal weather. Janmashtami (Krishna's birthday, per the lunar calendar) draws especially large crowds — verify current-year timing if you want to avoid or specifically attend it." },
  { q: "How do I reach Dwarka?", a: "Jamnagar is the nearest major airport, about 130km away. Dwarka has its own railway station on a direct line from Ahmedabad, and road access is via NH951/SH25." },
  { q: "Is Dwarka one of the Char Dham sites?", a: "Yes — Dwarka is one of Hinduism's four Char Dham pilgrimage sites, alongside Badrinath, Puri, and Rameswaram." },
  { q: "Was Dwarka really Krishna's ancient capital?", a: "This is a matter of religious belief and tradition rather than settled historical fact. Underwater archaeological exploration in the region has been cited by some as evidence of an ancient submerged settlement, and it remains an area of ongoing academic interest and religious significance." },
  { q: "Can I combine Dwarka with Somnath?", a: "Yes — the two are commonly combined as part of a broader Saurashtra pilgrimage circuit, though the distance between them (roughly 230km) means budgeting a full travel day." },
  { q: "What is the budget for a trip to Dwarka?", a: "A budget traveler can manage on roughly ₹1,400 a day using dharamshala-style pilgrim accommodation, a mid-range trip closer to ₹3,500 a day." },
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
  { id: "introduction", title: "Why Dwarka?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dwarka", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DWARKA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple visits and the Bet Dwarka boat trip",
    emoji: "🛕",
    items: [
      { name: "Modest Clothing", description: "Required for Dwarkadhish Temple and other active pilgrimage sites in and around Dwarka.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Dwarka is an active, high-devotion pilgrimage town, not a leisure destination." },
      { name: "Comfortable Walking Shoes", description: "For temple-hopping and the walk to/from the Bet Dwarka boat jetty.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Between Dwarkadhish, Bet Dwarka, and Nageshwar, there's real walking involved." },
      { name: "Small Bag for Shoes/Valuables", description: "Footwear must be removed before entering the temple complex.", price: "₹299", rating: 4.3, reviews: "3.1k", image: "🎒", affiliateUrl: amazonSearchUrl("small+travel+pouch+bag"), tag: "Temple essential", tagColor: "bg-sky-100 text-sky-700", why: "A dedicated bag makes managing shoes and valuables at the temple entrance much simpler." },
      { name: "Sun Hat", description: "For the coastal sun during the Bet Dwarka boat ride and outdoor temple areas.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel"), tag: "Sun essential", tagColor: "bg-forest-100 text-forest-700", why: "Coastal Gujarat sun is intense, especially on the open boat crossing to Bet Dwarka." },
    ],
  },
];

export default function DwarkaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/goa/hero.jpg" alt="Coastal temple town representative of Dwarka, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dwarka", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dwarka", "Char Dham", "Heritage", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dwarka Travel Guide: Krishna's Ancient Kingdom & Char Dham Site
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of Hinduism's four Char Dham pilgrimage sites, believed to be the ancient capital of Krishna's kingdom on the Arabian Sea coast.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dwarka, Gujarat" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,900 words" },
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
                  <h2>Why Dwarka?</h2>
                  <p>
                    <strong>Dwarka</strong> is one of Hinduism's four <strong>Char Dham</strong> pilgrimage sites — alongside Badrinath, Puri, and Rameswaram — anchored by the <strong>Dwarkadhish Temple</strong>, dedicated to Krishna. Hindu tradition holds Dwarka to be the site of Krishna's legendary capital city; underwater archaeological exploration off the coast has been cited by some as evidence of an ancient submerged settlement, though this remains a matter of ongoing academic interest and religious belief rather than settled historical fact.
                  </p>
                  <p>
                    Whatever your interest — devotional, historical, or simply curious — Dwarka's genuine pilgrim-town energy, busy temple market, and coastal setting make it a distinctive stop on any Gujarat itinerary.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Dwarka at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🛕", label: "Key Site", value: "Dwarkadhish Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Jamnagar (~130km)" },
                        { icon: "🕉️", label: "Significance", value: "One of the 4 Char Dham sites" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dwarka</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable coastal weather for temple visits and the Bet Dwarka boat trip." },
                      { season: "Janmashtami", emoji: "🎊", color: "bg-orange-50 border-orange-200", mood: "Peak pilgrim crowds", text: "Krishna's birthday, per the lunar calendar, draws especially large crowds to Dwarkadhish Temple — verify current-year timing." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-red-50 border-red-200", mood: "Hot", text: "Coastal heat and humidity build significantly — less comfortable for extended sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March, avoiding Janmashtami unless you specifically want to experience the festival crowds.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dwarka</h2>
                  <ul>
                    <li><strong>By Air:</strong> Jamnagar is the nearest major airport, about 130km away.</li>
                    <li><strong>By Train:</strong> Dwarka has its own railway station on a direct line from Ahmedabad.</li>
                    <li><strong>By Road:</strong> Accessible via NH951/SH25.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Dwarka with Somnath (cross-reference that guide) as a broader Saurashtra pilgrimage circuit — budget a full travel day between the two.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Dwarka</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/goa/hero.jpg" alt="Coastal temple scenery around Dwarka" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Dwarkadhish Temple:</strong> The main temple dedicated to Krishna, and Dwarka's central pilgrimage draw.</li>
                    <li><strong>Bet Dwarka:</strong> A nearby island associated with Krishna's residence, reached by boat, with its own temple.</li>
                    <li><strong>Nageshwar Jyotirlinga:</strong> One of the 12 Jyotirlingas, located near Dwarka, often visited on the same trip.</li>
                    <li><strong>Rukmini Devi Temple:</strong> Dedicated to Krishna's consort, a short distance from the main temple.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Dwarka</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Dharamshala-style pilgrim accommodation", "Basic guesthouses near the temple"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Private mid-range hotels", "Sea-facing rooms in town"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["A handful of premium hotels — options remain fewer than in Gujarat's bigger cities"] },
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
                  <h2>What to Eat in Dwarka</h2>
                  <ul>
                    <li><strong>Gujarati thali:</strong> Widely available across Dwarka's pilgrim-town restaurants.</li>
                    <li><strong>Temple prasad:</strong> Offered at Dwarkadhish Temple as part of the pilgrimage experience.</li>
                    <li><strong>Simple vegetarian dhabas:</strong> The norm around the temple market area.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Dwarka Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Dwarkadhish Temple", color: "bg-amber-700", activities: ["Arrive, check in", "Morning/afternoon: Dwarkadhish Temple darshan", "Evening: Rukmini Devi Temple and market"] },
                      { day: "Day 2", title: "Bet Dwarka & Nageshwar", color: "bg-forest-600", activities: ["Morning: boat trip to Bet Dwarka", "Afternoon: Nageshwar Jyotirlinga", "Evening: departure"] },
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
                          ["Accommodation/night", "₹600", "₹2,800"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport per day", "₹250", "₹600"],
                          ["Daily total", "₹1,400", "₹3,500"],
                          ["2-Day trip total", "₹2,800", "₹7,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Costs rise notably during Janmashtami.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Dwarka</h2>
                  <ul>
                    <li><strong>Dress modestly:</strong> This is a devout pilgrimage town, not a leisure destination.</li>
                    <li><strong>Expect heavy crowds at Janmashtami:</strong> Plan around it or specifically for it, but not by surprise.</li>
                    <li><strong>Combine Bet Dwarka and Nageshwar in one trip:</strong> Both are naturally paired with the main temple.</li>
                    <li><strong>Carry cash:</strong> Card acceptance is limited around the temple market.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Dress modestly throughout your visit", "Combine with Bet Dwarka and Nageshwar Jyotirlinga", "Consider pairing with Somnath for a fuller circuit", "Carry sufficient cash", "Check current Janmashtami dates if timing matters"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Wear beachwear-style clothing near the temples", "Rely on cards for most local payments", "Visit during Janmashtami expecting a quiet trip", "Skip Bet Dwarka thinking it's not worth the boat ride", "Rush the temple visit — allow real time for darshan"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dwarka", "Char Dham", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DWARKA_GEAR} destination="Dwarka" />
              <RelatedPostsGrid currentSlug="dwarka-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="dwarka-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
