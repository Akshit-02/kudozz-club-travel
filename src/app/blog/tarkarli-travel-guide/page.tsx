// src/app/blog/tarkarli-travel-guide/page.tsx
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
  title: "Tarkarli Travel Guide: Scuba Diving, Beaches & Malvan",
  description:
    "The complete Tarkarli travel guide. Scuba diving over live coral, Sindhudurg Fort, Devbagh Sangam, Malvani seafood, where to stay, and a full itinerary for the Konkan coast's clearest water.",
  keywords:
    "Tarkarli travel guide, Tarkarli scuba diving, Sindhudurg Fort, Malvan, Devbagh beach, Tarkarli itinerary, best time to visit Tarkarli, how to reach Tarkarli, Malvani food, Konkan coast beaches, Tarkarli water sports",
  openGraph: {
    title: "Tarkarli Travel Guide: Scuba Diving, Beaches & Malvan",
    description: "Clear turquoise water rare on India's west coast, scuba diving over live coral, and Malvani seafood straight off the boat — the complete guide to Tarkarli.",
    url: "https://club.kudozz.in/blog/tarkarli-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/andaman/hero.jpg", width: 1200, height: 630, alt: "Clear turquoise coastal water representative of Tarkarli, Maharashtra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarkarli Travel Guide: Scuba Diving, Beaches & Malvan",
    description: "Scuba diving, Sindhudurg Fort, and Malvani seafood — the complete guide to Tarkarli.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/tarkarli-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Tarkarli Travel Guide: Scuba Diving, Beaches & Malvan",
          description: "The complete Tarkarli travel guide.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/tarkarli-travel-guide" },
          about: { "@type": "Place", name: "Tarkarli", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Tarkarli Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Is Tarkarli good for scuba diving beginners?", a: "Yes — most operators run beginner-friendly introductory dives with an instructor, no certification required, focused on shallow reef patches near Malvan. Certified divers can go deeper on multi-tank trips." },
  { q: "What is the best time to visit Tarkarli for diving?", a: "October to May, when the sea is calm and visibility is best. Diving and water sports are typically suspended during the monsoon (June–September) when the Arabian Sea turns rough here." },
  { q: "How do I reach Tarkarli?", a: "The nearest airport is Sindhudurg (Chipi) Airport, about 25–40 km away; Goa's Dabolim airport is roughly 130 km. Kudal, on the Konkan Railway, is the nearest major railway station (~45 km), and NH66 connects Tarkarli by road to both Goa and Mumbai." },
  { q: "How many days do I need in Tarkarli?", a: "Two to three days works well — one for diving/water sports, one for Sindhudurg Fort and Devbagh Sangam, and a spare day as a buffer for weather-dependent activities." },
  { q: "Is Tarkarli water actually clear?", a: "Yes, relative to most of India's west coast — Tarkarli is known for unusually clear water in calm-season months, which is exactly why it became Maharashtra's main scuba diving hub." },
  { q: "What is the budget for a trip to Tarkarli?", a: "A budget traveller can manage roughly ₹1,700 a day (guesthouses, thalis, local transport), a mid-range trip runs closer to ₹4,000 a day, and a beach-resort stay can run ₹9,000+ a day. A 3-day trip totals roughly ₹5,100 on a budget and ₹12,000 mid-range, excluding travel to the region." },
  { q: "Can I visit Sindhudurg Fort from Tarkarli?", a: "Yes — boats to the island fort leave from Malvan jetty, a short drive from Tarkarli, and the round trip with time at the fort typically takes 2–3 hours." },
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
  { id: "introduction", title: "Why Tarkarli?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tarkarli", level: 2 },
  { id: "top-attractions", title: "Diving, Beaches & Sindhudurg Fort", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TARKARLI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for diving, snorkelling, and the beaches",
    emoji: "🤿",
    items: [
      { name: "Rash Guard / Swim Shirt", description: "Protects against sun and reef contact during snorkelling and diving sessions off Malvan — most operators recommend one.", price: "₹899", rating: 4.4, reviews: "4.8k", image: "🏊", affiliateUrl: amazonSearchUrl("rash+guard+swim+shirt"), tag: "Diving essential", tagColor: "bg-sky-100 text-sky-700", why: "Long boat rides and time in the water add up to serious sun exposure that a rash guard prevents far better than sunscreen alone." },
      { name: "Waterproof Phone Pouch", description: "Useful for the boat rides to Sindhudurg Fort and Devbagh Sangam without risking a dropped or splashed phone.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"), tag: "Boat-ride essential", tagColor: "bg-purple-100 text-purple-700", why: "Open boat rides to the fort and backwater sangam both carry real risk of a soaked phone without one." },
      { name: "Reef-Safe Sunscreen (SPF 50)", description: "Protects skin and the coral patches near Tarkarli's dive sites — regular sunscreen chemicals can harm reef ecosystems.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Diving essential", tagColor: "bg-amber-100 text-amber-700", why: "Tarkarli's live coral patches are part of what makes the diving here worthwhile — reef-safe sunscreen helps keep it that way." },
      { name: "Quick-Dry Beach Towel", description: "Compact and fast-drying for multiple water sessions across a diving-focused trip.", price: "₹499", rating: 4.4, reviews: "4.2k", image: "🩴", affiliateUrl: amazonSearchUrl("quick+dry+beach+towel"), tag: "Beach essential", tagColor: "bg-forest-100 text-forest-700", why: "Between diving, snorkelling, and beach time, a slow-drying towel becomes a genuine hassle by day two." },
      { name: "Waterproof Action Camera", description: "For capturing the underwater scuba experience — most dive operators can also provide GoPro footage for a fee, but your own gives more control.", price: "₹3,499", rating: 4.3, reviews: "5.6k", image: "🎥", affiliateUrl: amazonSearchUrl("waterproof+action+camera"), tag: "Diving essential", tagColor: "bg-red-100 text-red-700", why: "This is one of India's few true scuba destinations outside the islands — worth capturing properly rather than relying only on the operator's photos." },
      { name: "Dry Bag Backpack (20L)", description: "Keeps a change of clothes and electronics dry across boat rides, beach visits, and the diving day.", price: "₹899", rating: 4.4, reviews: "3.9k", image: "🎒", affiliateUrl: amazonSearchUrl("waterproof+dry+bag+backpack+20L"), tag: "Trip essential", tagColor: "bg-sky-100 text-sky-700", why: "A day that moves between boats, beaches, and diving centres needs one dry bag that handles all of it." },
    ],
  },
];

export default function TarkarliGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/andaman/hero.jpg" alt="Clear turquoise coastal water representative of Tarkarli, Maharashtra" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Tarkarli", href: "/blog?category=tarkarli" }, { label: "Beaches Guide", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Tarkarli", "Scuba Diving", "Beaches", "Malvan", "Konkan Coast", "Maharashtra"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Tarkarli Travel Guide: Scuba Diving, Beaches & Malvan
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Clear turquoise water rare on India's west coast, scuba diving
              over live coral, and Malvani seafood straight off the boat —
              everything you need to plan a trip to Tarkarli.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Tarkarli, Maharashtra" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
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
                  <h2>Why Tarkarli?</h2>
                  <p>
                    Most of India's west coast has warm, silty water good for
                    swimming but poor for visibility. <strong>Tarkarli</strong>,
                    a small village in Maharashtra's Sindhudurg district, is
                    the exception — its water runs unusually clear for stretches
                    of the year, which is exactly why it became Maharashtra's
                    main scuba diving base rather than just another Konkan
                    beach stop.
                  </p>
                  <p>
                    Add a 17th-century island sea fort you reach by boat, a
                    backwater sangam where the Karli river meets the Arabian
                    Sea, and Malvani seafood that's some of the best on this
                    coast, and Tarkarli earns a dedicated trip rather than a
                    quick stopover.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🤿</span> Tarkarli at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🏰", label: "Key Site", value: "Sindhudurg Fort" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        { icon: "✈️", label: "Nearest Airport", value: "Sindhudurg (Chipi)" },
                        { icon: "🤿", label: "Activity", value: "Scuba diving" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,700 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Tarkarli</h2>
                  <p>Sea conditions dictate everything here — diving and water sports run on a strict calm-season window.</p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Calm seas, clear water, and every dive operator running full schedules. December–January is the peak season and books up fastest." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warm, still diveable", text: "Hot and humid but seas generally stay calm enough for diving — a good shoulder-season option with fewer crowds." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — diving suspended", text: "Rough seas and poor visibility shut down diving and most water sports entirely. Not a beach trip during these months." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late October to February for the clearest water and the fullest range of operating dive centres — book diving slots ahead for the December–January peak.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tarkarli</h2>
                  <ul>
                    <li><strong>By Air:</strong> Sindhudurg (Chipi) Airport is the nearest, roughly 25–40 km away with limited connections; Goa's Dabolim Airport (~130 km) and Kolhapur (~135 km) offer more flight options with a longer road transfer.</li>
                    <li><strong>By Train:</strong> Kudal, on the scenic Konkan Railway line, is the nearest major station (~45 km), well connected to Mumbai, Goa, and Mangalore.</li>
                    <li><strong>By Road:</strong> NH66, the Konkan coastal highway, connects Tarkarli directly to both Goa (south) and Mumbai (north) — a scenic but long drive from either.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book your scuba diving slot in advance for peak season (Dec–Jan) — the well-reviewed operators near Malvan jetty fill up fast on weekends.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Diving, Beaches & Sindhudurg Fort</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/andaman/hero.jpg" alt="Clear coastal water near Tarkarli" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Scuba Diving & Snorkelling:</strong> Multiple licensed operators run beginner and certified dives over coral patches near Malvan — book in advance during peak months.</li>
                    <li><strong>Tarkarli Beach:</strong> The main beach, known for its exceptionally clear water for the Konkan coast and calm, swimmable conditions in season.</li>
                    <li><strong>Sindhudurg Fort:</strong> A sea fort built in 1664 by Chhatrapati Shivaji Maharaj on an island off Malvan, reached by a short boat ride from Malvan jetty.</li>
                    <li><strong>Devbagh Sangam:</strong> The point where the Karli river meets the Arabian Sea, popular for backwater boating and occasional dolphin sightings.</li>
                    <li><strong>Chivla Beach:</strong> A quieter stretch near Malvan, good for an early-morning or sunset walk away from the main crowds.</li>
                    <li><strong>Malvan Town:</strong> The nearby market town, worth a stop for Malvani cuisine and as the jumping-off point for Sindhudurg Fort boats.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Tarkarli</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹2,000/night", picks: ["MTDC and private budget cottages", "Guesthouses in Tarkarli village", "Homestays near Devbagh"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Beach resorts along Tarkarli Beach", "Boutique cottages near Devbagh Sangam", "Dive-operator affiliated stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹15,000+/night", picks: ["Premium beachfront resorts", "Private pool villas near the coast"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Stay near Devbagh or Tarkarli Beach itself — it puts you within a short ride of both the dive operators and Malvan jetty for the Sindhudurg Fort boat.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Tarkarli</h2>
                  <ul>
                    <li><strong>Malvani Fish Curry:</strong> A spicy, coconut-based curry, usually made with pomfret, surmai, or bangda — the signature dish of this coast.</li>
                    <li><strong>Solkadhi:</strong> A tangy kokum-and-coconut milk drink, traditionally served to cool the palate after a spicy Malvani meal.</li>
                    <li><strong>Bombil Fry (Bombay Duck):</strong> A crispy fried local fish, a classic Konkan coast side dish.</li>
                    <li><strong>Sol Kadhi & Rice Thali:</strong> The full Malvani thali experience, widely available at family-run restaurants in Malvan town.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Tarkarli Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Beach Time", color: "bg-amber-700", activities: ["Arrive, check in near Tarkarli Beach", "Afternoon: Relax at Tarkarli Beach", "Evening: Sunset at Chivla Beach", "Dinner: Malvani thali in Malvan"] },
                      { day: "Day 2", title: "Scuba Diving & Sindhudurg Fort", color: "bg-forest-600", activities: ["Morning: Scuba diving/snorkelling session near Malvan", "Afternoon: Boat to Sindhudurg Fort", "Evening: Relax at the resort"] },
                      { day: "Day 3", title: "Devbagh Sangam & Departure", color: "bg-orange-600", activities: ["Morning: Devbagh Sangam backwater boat ride", "Late morning: Last swim/relax at the beach", "Afternoon: Depart via Kudal or Sindhudurg Airport"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">{d.activities.map((a) => <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>)}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>)}</tr></thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹3,500", "₹10,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,200"],
                          ["Scuba diving session", "₹1,500", "₹2,500", "₹4,000"],
                          ["Local transport/boat rides per day", "₹200", "₹600", "₹1,500"],
                          ["Daily total", "₹1,700", "₹4,000", "₹9,000+"],
                          ["3-Day trip total", "₹5,100", "₹12,000", "₹27,000+"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Diving cost varies by number of dives and certification level — quoted here as a single introductory session.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Tarkarli</h2>
                  <ul>
                    <li><strong>Book diving in advance:</strong> Reputable operators near Malvan jetty fill up on weekends during peak season.</li>
                    <li><strong>Check sea conditions before swimming:</strong> Currents can be stronger than they look outside the calmest months.</li>
                    <li><strong>Carry reef-safe sunscreen:</strong> Protects both you and the coral patches that make the diving worthwhile.</li>
                    <li><strong>Avoid the monsoon (Jun–Sep):</strong> Diving and most water sports shut down entirely during this period.</li>
                    <li><strong>Combine with Malvan town:</strong> The fort boat and best seafood restaurants are both based there, a short drive from Tarkarli.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book a scuba diving slot with a licensed operator in advance", "Visit Sindhudurg Fort by boat from Malvan jetty", "Try Malvani fish curry and solkadhi", "Time your trip for Oct–Feb for the calmest, clearest water", "Check tide and sea conditions before swimming"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a diving trip for the monsoon months", "Swim past marked safe zones without checking with locals", "Expect walk-in diving slots on peak weekends", "Skip reef-safe sunscreen near the dive sites", "Rely on cards at smaller Malvan eateries"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Tarkarli", "Scuba Diving", "Sindhudurg Fort", "Malvan", "Maharashtra", "Beaches", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TARKARLI_GEAR} destination="Tarkarli" />
              <RelatedPostsGrid currentSlug="tarkarli-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="tarkarli-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
