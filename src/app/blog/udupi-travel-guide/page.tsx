// src/app/blog/udupi-travel-guide/page.tsx
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
  title: "Udupi Travel Guide: Krishna Temple, Beaches & Udupi Cuisine",
  description:
    "The complete Udupi travel guide. Sri Krishna Matha, Malpe Beach, St. Mary's Island, Udupi's famous vegetarian cuisine, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Udupi travel guide, Sri Krishna Matha, Malpe Beach, St Mary's Island, Udupi cuisine, best time to visit Udupi, how to reach Udupi, Karnataka temple town",
  openGraph: {
    title: "Udupi Travel Guide: Krishna Temple, Beaches & Udupi Cuisine",
    description: "The temple town that gave India its vegetarian restaurant chain culture, plus a quiet stretch of Karnataka coast — the complete guide to Udupi.",
    url: "https://club.kudozz.in/blog/udupi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/kerala/hero.jpg", width: 1200, height: 630, alt: "Coastal temple town scenery representative of Udupi, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udupi Travel Guide: Krishna Temple, Beaches & Udupi Cuisine",
    description: "Sri Krishna Matha, Malpe Beach, and St. Mary's Island — the complete guide to Udupi.",
    images: ["/images/destinations/kerala/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/udupi-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Udupi Travel Guide: Krishna Temple, Beaches & Udupi Cuisine",
          description: "The complete Udupi travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/udupi-travel-guide" },
          about: { "@type": "Place", name: "Udupi", address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Udupi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Udupi?", a: "One full day covers Sri Krishna Matha and Malpe Beach; add a half-day for the St. Mary's Island boat trip if the sea is calm." },
  { q: "What is the best time to visit Udupi?", a: "October to March is driest and most comfortable, and also the most reliable window for the St. Mary's Island boat crossing." },
  { q: "How do I reach Udupi?", a: "The nearest airport is Mangaluru (IXE), about 60km away. Udupi has its own railway station on the Konkan Railway line, and it's well connected by road via NH66." },
  { q: "What is the darshan tradition at Sri Krishna Matha?", a: "Devotees traditionally view the deity through a carved silver window called the Kanakana Kindi rather than through a conventional direct entrance — a unique tradition linked to a well-known local legend about a devotee named Kanakadasa." },
  { q: "Why is Udupi associated with vegetarian restaurants across India?", a: "The simple, efficient vegetarian dining format now recognized nationally as an 'Udupi restaurant' genuinely traces its roots back to this town — a piece of food history that's easy to miss unless you visit." },
  { q: "Is the St. Mary's Island boat trip reliable?", a: "It depends on sea conditions — boats can be suspended in rough weather, especially outside the Oct–Mar window. Check locally on the day rather than assuming it will run." },
  { q: "What is the budget for a trip to Udupi?", a: "A budget traveler can manage on roughly ₹1,300 a day, a mid-range trip closer to ₹3,200 a day, excluding transport to the region." },
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
  { id: "introduction", title: "Why Udupi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Udupi", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-2 Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const UDUPI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple visits, the beach, and St. Mary's Island",
    emoji: "🛕",
    items: [
      { name: "Modest Temple Clothing", description: "Sri Krishna Matha expects modest, covered dress from visitors.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "🙏", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "This is an active, significant place of worship, not a monument-style tourist site." },
      { name: "Comfortable Sandals", description: "St. Mary's Island's basalt rock terrain and the temple's stone floors both call for practical, easily removable footwear.", price: "₹899", rating: 4.4, reviews: "4.8k", image: "👡", affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Between rocky island terrain and shoes-off temple visits, easy sandals are the practical choice." },
      { name: "Waterproof Phone Pouch", description: "For the boat crossing to St. Mary's Island.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "Boat-ride essential", tagColor: "bg-sky-100 text-sky-700", why: "A short open-water crossing carries some spray risk for electronics." },
      { name: "Reef-Safe Sunscreen", description: "Malpe Beach and the exposed rocky terrain of St. Mary's Island both mean real sun exposure.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "St. Mary's Island in particular has very little natural shade." },
    ],
  },
];

export default function UdupiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/hero.jpg" alt="Coastal temple town scenery representative of Udupi, Karnataka" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Udupi", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Udupi", "Krishna Temple", "Karnataka", "Heritage"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Udupi Travel Guide: Krishna Temple, Beaches & Udupi Cuisine
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The temple town that gave India its vegetarian restaurant chain culture, plus a quiet stretch of Karnataka coast — everything you need to plan a trip to Udupi.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Udupi, Karnataka" },
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
                  <h2>Why Udupi?</h2>
                  <p>
                    <strong>Udupi</strong> is best known for two things that turn out to be connected: <strong>Sri Krishna Matha</strong>, a temple founded by the 13th-century philosopher-saint Madhvacharya with a genuinely unusual darshan tradition, and the town's outsized, traceable influence on Indian vegetarian restaurant culture — the simple, efficient "Udupi restaurant" format now found across the country has real roots here.
                  </p>
                  <p>
                    Beyond the temple town, Udupi has a quiet coastline anchored by Malpe Beach and the short boat trip out to St. Mary's Island, known for its distinctive hexagonal basalt rock formations.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Udupi at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🛕", label: "Key Site", value: "Sri Krishna Matha" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Mangaluru (~60km)" },
                        { icon: "🏝️", label: "Nearby", value: "St. Mary's Island" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹3,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Udupi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry, comfortable, and the most reliable window for the St. Mary's Island boat crossing." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot and humid", text: "Workable but less comfortable; boat crossings usually still run." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain and rough seas often suspend the island boat trip entirely." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February — dry weather, calm seas, and the most reliable window for St. Mary's Island.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Udupi</h2>
                  <ul>
                    <li><strong>By Air:</strong> Mangaluru (IXE) is the nearest airport, about 60km away.</li>
                    <li><strong>By Train:</strong> Udupi has its own railway station on the Konkan Railway line.</li>
                    <li><strong>By Road:</strong> Well connected via NH66, and an easy short drive from Mangaluru.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Confirm St. Mary's Island boat departures on the day — service is weather-dependent and doesn't always run to a fixed schedule outside peak season.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Udupi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/hero.jpg" alt="Temple town and coastal scenery around Udupi" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Sri Krishna Matha:</strong> Udupi's central temple, famous for its unique Kanakana Kindi window darshan tradition.</li>
                    <li><strong>Malpe Beach:</strong> The town's main beach and the departure point for St. Mary's Island boats.</li>
                    <li><strong>St. Mary's Island:</strong> A small island known for distinctive hexagonal basalt rock formations, reached by a short boat ride.</li>
                    <li><strong>Old town temple district:</strong> A cluster of smaller shrines and traditional buildings around the main matha.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Udupi</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,600/night", picks: ["Pilgrim-style lodges near the temple", "Basic hotels in town"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Mid-range hotels near Malpe", "Comfortable town-centre stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹5,500–₹9,000+/night", picks: ["Premium coastal hotels", "Better-appointed beach-adjacent stays"] },
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
                  <h2>What to Eat in Udupi</h2>
                  <ul>
                    <li><strong>Udupi-style thali:</strong> A wide vegetarian repertoire, served in the very town where the format originated.</li>
                    <li><strong>Udupi sambar:</strong> A distinct regional sambar preparation worth seeking out at a local eatery.</li>
                    <li><strong>Filter coffee:</strong> A classic pairing with any Udupi-style breakfast.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-2 Day Udupi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Temple & Town", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Sri Krishna Matha darshan", "Afternoon: old town temple district walk", "Evening: Udupi-style thali dinner"] },
                      { day: "Day 2", title: "Beach & Island", color: "bg-forest-600", activities: ["Morning: Malpe Beach, boat to St. Mary's Island (weather permitting)", "Afternoon: return, departure"] },
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
                          ["Accommodation/night", "₹800", "₹2,800"],
                          ["Food/day", "₹300", "₹700"],
                          ["Boat trip + local transport", "₹200", "₹500"],
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
                  <h2>Essential Travel Tips for Udupi</h2>
                  <ul>
                    <li><strong>Try an authentic Udupi meal:</strong> This is the town the format originated in.</li>
                    <li><strong>Confirm boat departures for St. Mary's Island on the day:</strong> Service is weather-dependent.</li>
                    <li><strong>Dress modestly at the temple:</strong> Covered shoulders and knees expected.</li>
                    <li><strong>Combine with Mangaluru:</strong> An easy short drive south.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Try an authentic Udupi-style meal", "Confirm St. Mary's Island boat status before heading to Malpe", "Dress modestly at Sri Krishna Matha", "Combine with a Mangaluru add-on", "Visit the temple in the morning for a calmer experience"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume the island boat runs on a fixed schedule", "Wear beachwear into the temple premises", "Visit expecting reliable boat service during monsoon", "Skip trying the local Udupi-style thali", "Rush the temple visit — take time to appreciate the darshan tradition"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Udupi", "Krishna Temple", "Karnataka", "Heritage", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={UDUPI_GEAR} destination="Udupi" />
              <RelatedPostsGrid currentSlug="udupi-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="udupi-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
