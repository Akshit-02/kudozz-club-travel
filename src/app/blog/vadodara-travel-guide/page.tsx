// src/app/blog/vadodara-travel-guide/page.tsx
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
  title: "Vadodara Travel Guide: Laxmi Vilas Palace & Baroda's Heritage",
  description:
    "The complete Vadodara travel guide. Laxmi Vilas Palace, Baroda Museum, Sayaji Baug, Champaner-Pavagadh day trip, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Vadodara travel guide, Laxmi Vilas Palace, Baroda Museum, Sayaji Baug, Champaner Pavagadh, best time to visit Vadodara, how to reach Vadodara, Gaekwad Baroda heritage",
  openGraph: {
    title: "Vadodara Travel Guide: Laxmi Vilas Palace & Baroda's Heritage",
    description: "A palace four times the size of Buckingham Palace, still home to the Gaekwad royal family — the complete guide to Vadodara.",
    url: "https://club.kudozz.in/blog/vadodara-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/udaipur/saheliyon.jpg", width: 1200, height: 630, alt: "Ornate garden and palace architecture representative of Vadodara, Gujarat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vadodara Travel Guide: Laxmi Vilas Palace & Baroda's Heritage",
    description: "The Gaekwad royal family's palace and Baroda's layered heritage — the complete guide to Vadodara.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/vadodara-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Vadodara Travel Guide: Laxmi Vilas Palace & Baroda's Heritage",
          description: "The complete Vadodara travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/vadodara-travel-guide" },
          about: { "@type": "Place", name: "Vadodara", address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Vadodara Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Vadodara?", a: "Two days covers Laxmi Vilas Palace, the Baroda Museum, and Sayaji Baug comfortably, with a third day if you add a Champaner-Pavagadh day trip." },
  { q: "Is Laxmi Vilas Palace open to the public?", a: "Portions of the palace are open for visitors, but it remains a private royal residence — check current visiting hours and which sections are accessible before you go, as this can change." },
  { q: "What is the best time to visit Vadodara?", a: "October to March offers the most comfortable temperatures for walking the palace grounds and Sayaji Baug. Summers get hot, and monsoon brings humidity." },
  { q: "How do I reach Vadodara?", a: "Vadodara Airport has decent domestic connectivity, and the city sits on a major railway junction along the Delhi-Mumbai line, making rail a genuinely convenient option." },
  { q: "Is Laxmi Vilas Palace really bigger than Buckingham Palace?", a: "Yes — it's widely cited as roughly four times the size of Buckingham Palace, an Indo-Saracenic landmark built by the Gaekwad royal family in the 19th century." },
  { q: "What is Champaner-Pavagadh and is it worth a day trip?", a: "A UNESCO World Heritage Site roughly 45km from Vadodara combining hilltop fort ruins, temples, and a historic mosque complex — worth the trip if you have an extra day." },
  { q: "What is the budget for a trip to Vadodara?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹4,000 a day. A 2-day trip totals roughly ₹3,000 on a budget and ₹8,000 mid-range." },
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
  { id: "introduction", title: "Why Vadodara?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vadodara", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const VADODARA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for palace grounds and city park walks",
    emoji: "🏰",
    items: [
      { name: "Comfortable Walking Shoes", description: "For the extensive Laxmi Vilas Palace grounds and Sayaji Baug's large park area.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Both major sights involve significant ground to cover on foot." },
      { name: "Camera", description: "For the palace's Indo-Saracenic architecture and the Baroda Museum's eclectic collection.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "Vadodara's heritage architecture is genuinely photogenic, inside and out where permitted." },
      { name: "Light Layers", description: "Comfortable for both indoor museum visits and outdoor park walking across a full day.", price: "₹799", rating: 4.4, reviews: "3.5k", image: "👕", affiliateUrl: amazonSearchUrl("light+layers+travel+clothing"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "Air-conditioned museum interiors contrast with warm outdoor palace grounds." },
      { name: "Sun Hat", description: "Sayaji Baug's open lawns and the Champaner-Pavagadh hilltop offer limited shade at midday.", price: "₹399", rating: 4.4, reviews: "4.1k", image: "👒", affiliateUrl: amazonSearchUrl("sun+hat+travel"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "Useful for both the city park and any Champaner-Pavagadh day trip." },
    ],
  },
];

export default function VadodaraGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/udaipur/saheliyon.jpg" alt="Ornate garden and palace architecture representative of Vadodara, Gujarat" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Vadodara", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Vadodara", "Laxmi Vilas Palace", "Destination Guide", "Gujarat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Vadodara Travel Guide: Laxmi Vilas Palace & Baroda's Heritage
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A palace four times the size of Buckingham Palace, still home to the Gaekwad royal family.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Vadodara, Gujarat" },
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
                  <h2>Why Vadodara?</h2>
                  <p>
                    <strong>Vadodara</strong>, historically known as Baroda, was the capital of a princely state ruled by the Gaekwad dynasty, and that royal heritage still defines the city's character. <strong>Laxmi Vilas Palace</strong> — widely cited as roughly four times the size of Buckingham Palace — remains partly home to the Gaekwad family today, an Indo-Saracenic landmark that's genuinely one of India's most impressive private residences open, in part, to visitors.
                  </p>
                  <p>
                    Beyond the palace, Vadodara carries a distinct heritage identity relative to Gujarat's more commercially-driven cities — a legacy of royal patronage visible in its museums, university, and public gardens.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏰</span> Vadodara at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🏰", label: "Key Site", value: "Laxmi Vilas Palace" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Vadodara Airport" },
                        { icon: "🚆", label: "Rail", value: "Major Delhi-Mumbai junction" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Vadodara</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for walking the palace grounds and Sayaji Baug." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Rising heat makes outdoor sightseeing tiring by midday." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Humid with periodic heavy rain — indoor museum visits work better than outdoor sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable window for both palace grounds and a Champaner-Pavagadh day trip.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Vadodara</h2>
                  <ul>
                    <li><strong>By Air:</strong> Vadodara Airport has reasonable domestic connectivity.</li>
                    <li><strong>By Train:</strong> A major railway junction on the Delhi-Mumbai line — a genuinely convenient rail option.</li>
                    <li><strong>By Road:</strong> Well connected via national highways to Ahmedabad, Surat, and Mumbai.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Given the rail junction status, Vadodara works well as a stopover between Ahmedabad/Rajasthan and Mumbai without a dedicated flight.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Vadodara</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/udaipur/saheliyon.jpg" alt="Palace and garden architecture around Vadodara" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Laxmi Vilas Palace:</strong> The Gaekwad family's historic residence, an Indo-Saracenic landmark — check current visiting hours and open sections.</li>
                    <li><strong>Baroda Museum & Picture Gallery:</strong> An eclectic collection including European art alongside Indian artifacts.</li>
                    <li><strong>Sayaji Baug:</strong> A large public park with a zoo, planetarium, and museum — a genuine city-wide leisure hub.</li>
                    <li><strong>Champaner-Pavagadh Archaeological Park:</strong> A UNESCO World Heritage Site ~45km away, combining hilltop fort ruins, temples, and a historic mosque complex.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Vadodara</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near the railway station", "Budget hotels in the city centre"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Business hotels near Sayaji Baug", "Comfortable mid-range city hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium heritage-adjacent properties", "Top-tier business hotels"] },
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
                  <h2>What to Eat in Vadodara</h2>
                  <ul>
                    <li><strong>Gujarati thali:</strong> A full vegetarian spread, widely available across the city.</li>
                    <li><strong>Sev usal and locha:</strong> Local Baroda-style street food specialties worth seeking out.</li>
                    <li><strong>Street food around Sayaji Baug:</strong> A popular evening food stop for locals and visitors alike.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Vadodara Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Palace & Museums", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Laxmi Vilas Palace", "Afternoon: Baroda Museum & Picture Gallery", "Evening: Sayaji Baug"] },
                      { day: "Day 2", title: "Champaner-Pavagadh Day Trip", color: "bg-forest-600", activities: ["Full day trip to Champaner-Pavagadh Archaeological Park", "Explore fort ruins, temples, and the mosque complex", "Return to Vadodara, departure"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹9,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹200", "₹600", "₹1,500"],
                          ["Daily total", "₹1,500", "₹4,000", "₹11,500"],
                          ["2-Day trip total", "₹3,000", "₹8,000", "₹23,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Add Champaner-Pavagadh entry and transport costs for that day trip.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Vadodara</h2>
                  <ul>
                    <li><strong>Check Laxmi Vilas Palace's current access policy:</strong> Sections open to visitors and hours can change since it's a private residence.</li>
                    <li><strong>Combine with a Champaner-Pavagadh day trip:</strong> A UNESCO site worth the extra day if time allows.</li>
                    <li><strong>Use Vadodara as a rail stopover:</strong> Its major junction status makes it convenient between other Gujarat/Mumbai destinations.</li>
                    <li><strong>Visit Sayaji Baug in the evening:</strong> A pleasant, cooler time for the park and street food.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check current Laxmi Vilas Palace visiting hours/sections", "Combine with a Champaner-Pavagadh day trip", "Visit Sayaji Baug in the evening", "Use Vadodara as a convenient rail stopover", "Try local Baroda-style street food"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume the entire palace is open without checking first", "Skip Champaner-Pavagadh if you have an extra day", "Visit outdoor sights during peak monsoon downpours", "Expect alcohol availability given Gujarat's prohibition", "Rush through Sayaji Baug — it rewards a slower evening visit"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Vadodara", "Laxmi Vilas Palace", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={VADODARA_GEAR} destination="Vadodara" />
              <RelatedPostsGrid currentSlug="vadodara-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="vadodara-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
