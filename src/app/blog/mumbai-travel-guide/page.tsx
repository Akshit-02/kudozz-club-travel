// src/app/blog/mumbai-travel-guide/page.tsx
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
  title: "Mumbai Travel Guide: Gateway of India, Marine Drive & Bollywood",
  description:
    "The complete Mumbai travel guide. Gateway of India, Marine Drive, Elephanta Caves, Bandra, Mumbai street food, where to stay, best time to visit, and a full 3-day itinerary through India's biggest city.",
  keywords:
    "Mumbai travel guide, Gateway of India, Marine Drive, Elephanta Caves, Mumbai itinerary, best time to visit Mumbai, how to reach Mumbai, Mumbai street food, Mumbai local trains, Bandra Bandstand, Mumbai 3 day itinerary, CSMT",
  openGraph: {
    title: "Mumbai Travel Guide: Gateway of India, Marine Drive & Bollywood",
    description: "Colonial-era monuments beside the Arabian Sea, a promenade lit up every evening as the Queen's Necklace, and the beating heart of Indian cinema — the complete guide to Mumbai.",
    url: "https://club.kudozz.in/blog/mumbai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/blogs/maharashtra/mumbai/gateway-of-india-evening-mumbai.webp", width: 1600, height: 1067, alt: "The Gateway of India monument lit up at dusk beside Mumbai's harbour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai Travel Guide: Gateway of India, Marine Drive & Bollywood",
    description: "Gateway of India, Marine Drive, and the beating heart of Indian cinema — the complete guide to Mumbai.",
    images: ["/images/blogs/maharashtra/mumbai/gateway-of-india-evening-mumbai.webp"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/mumbai-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Mumbai Travel Guide: Gateway of India, Marine Drive & Bollywood",
          description: "The complete Mumbai travel guide.",
          image: "https://club.kudozz.in/images/blogs/maharashtra/mumbai/gateway-of-india-evening-mumbai.webp",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/mumbai-travel-guide" },
          about: { "@type": "Place", name: "Mumbai", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Mumbai Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Mumbai?", a: "Three days covers the essentials well — South Mumbai's heritage core, Bandra and the western suburbs, and a half-day for Elephanta Caves. Add extra days if you want to explore Bollywood studio tours or Sanjay Gandhi National Park in more depth." },
  { q: "What is the best time to visit Mumbai?", a: "November to February is best — warm but not oppressively humid, with almost no rain. March–May gets very hot and humid, and the monsoon (June–September) brings heavy, sometimes disruptive rain, though the city has its own monsoon charm for some travellers." },
  { q: "How do I get around Mumbai?", a: "Local trains are the fastest way to cover long distances but get extremely crowded during rush hour (roughly 8–11 AM and 5:30–8:30 PM) — avoid these windows if carrying luggage. Autos and cabs (including app-based ones) work well for shorter, cross-locality trips; the Metro is expanding and increasingly useful too." },
  { q: "Is Mumbai safe for travellers?", a: "Mumbai is generally considered one of India's safer big cities for travellers, including solo women, with a visible, constant flow of people even late at night in most central areas. As anywhere, stay alert in crowded spaces and during the monsoon when flooding can disrupt travel plans." },
  { q: "How do I reach Elephanta Caves?", a: "Ferries to Elephanta Island leave regularly from the Gateway of India, taking about an hour each way. The caves themselves are a short walk or toy-train ride up from the jetty, and the round trip including time at the caves typically takes half a day." },
  { q: "What is the budget for a trip to Mumbai?", a: "Mumbai is India's most expensive city — a budget traveller can manage roughly ₹2,200 a day (hostels, street food, trains), a mid-range trip runs closer to ₹5,500 a day, and a luxury stay can run ₹15,000+ a day. A 3-day trip totals roughly ₹6,600 on a budget and ₹16,500 mid-range, excluding flights or trains to the city." },
  { q: "Should I visit Mumbai during the monsoon?", a: "It's possible and the city has genuine monsoon charm — lush parks, dramatic skies over Marine Drive — but heavy rain can cause local flooding and disrupt trains and roads. If you go, build slack into your itinerary and check weather warnings daily." },
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
  { id: "introduction", title: "Why Mumbai?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mumbai", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MUMBAI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for local trains, long sightseeing days, and monsoon detours",
    emoji: "🌆",
    items: [
      { name: "Comfortable Walking Shoes", description: "South Mumbai's heritage core and Bandra's Bandstand promenade both mean a lot of walking on pavement — proper shoes beat sandals over a long day.", price: "₹1,499", rating: 4.4, reviews: "6.2k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+city+travel"), tag: "City essential", tagColor: "bg-sky-100 text-sky-700", why: "A single Mumbai sightseeing day often covers 8-10 km of walking between heritage sites and transit points." },
      { name: "Compact Packable Rain Jacket", description: "Even outside peak monsoon, Mumbai gets sudden showers — a packable jacket beats getting drenched between train stations and sights.", price: "₹799", rating: 4.3, reviews: "3.9k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Monsoon essential", tagColor: "bg-sky-100 text-sky-700", why: "Mumbai's rain arrives fast and heavy with little warning, especially June through September." },
      { name: "Power Bank (10,000mAh)", description: "Long days navigating local trains, maps, and photo-taking across a spread-out city drain a phone fast.", price: "₹999", rating: 4.4, reviews: "9.4k", image: "🔋", affiliateUrl: amazonSearchUrl("10000mah+power+bank+travel"), tag: "City essential", tagColor: "bg-purple-100 text-purple-700", why: "Between navigation and photos, a full sightseeing day easily drains a phone before evening." },
      { name: "Anti-Theft Crossbody Bag", description: "Useful for crowded local trains and markets like Colaba Causeway and Crawford Market, where pickpocketing risk is higher than average.", price: "₹1,199", rating: 4.3, reviews: "4.5k", image: "🎒", affiliateUrl: amazonSearchUrl("anti+theft+crossbody+travel+bag"), tag: "Local-train essential", tagColor: "bg-red-100 text-red-700", why: "Crowded rush-hour trains and busy markets are the two spots where petty theft risk is genuinely elevated in Mumbai." },
      { name: "Reusable Water Bottle (1L)", description: "Mumbai's humidity makes steady hydration important even on cooler-weather days.", price: "₹399", rating: 4.5, reviews: "8.1k", image: "💧", affiliateUrl: amazonSearchUrl("1l+reusable+water+bottle+travel"), tag: "City essential", tagColor: "bg-forest-100 text-forest-700", why: "Humidity here makes dehydration sneak up faster than the temperature alone suggests." },
      { name: "Waterproof Phone Pouch", description: "Handy for the Elephanta Caves ferry ride and any monsoon-season sightseeing near the sea-facing promenades.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"), tag: "Ferry essential", tagColor: "bg-purple-100 text-purple-700", why: "Sea spray on the Elephanta ferry and sudden rain on Marine Drive both put an unprotected phone at risk." },
    ],
  },
];

export default function MumbaiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/blogs/maharashtra/mumbai/gateway-of-india-evening-mumbai.webp" alt="The Gateway of India monument lit up at dusk beside Mumbai's harbour" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Mumbai", href: "/blog?category=mumbai" }, { label: "City Guide", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mumbai", "Maharashtra", "Gateway of India", "Marine Drive", "City Guide", "Bollywood"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Mumbai Travel Guide: Gateway of India, Marine Drive & Bollywood
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Colonial-era monuments beside the Arabian Sea, a promenade lit
              up every evening as the Queen's Necklace, and the beating heart
              of Indian cinema — everything you need to plan a trip to Mumbai.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "16 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Mumbai, Maharashtra" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,900 words" },
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
                  <h2>Why Mumbai?</h2>
                  <p>
                    <strong>Mumbai</strong> is India's financial capital and
                    its most-populous city, built on a set of reclaimed
                    islands on the Arabian Sea — a fact you can still feel in
                    the way the sea presses right up against South Mumbai's
                    grand colonial-era buildings. Between the Gateway of
                    India, Marine Drive, and the sprawl of Bollywood studios
                    further north, it's a city that manages to be both India's
                    most cosmopolitan metro and one of its most traditional
                    at the same time.
                  </p>
                  <p>
                    First-time visitors are often surprised by how walkable
                    South Mumbai is, how quickly the character shifts
                    neighborhood to neighborhood, and how central street food
                    is to daily life here — this guide covers the sights, the
                    food, and the practical realities of getting around a very
                    large, very busy city.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌆</span> Mumbai at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🏛️", label: "Key Site", value: "Gateway of India" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Airport", value: "Mumbai (BOM)" },
                        { icon: "🚆", label: "Getting Around", value: "Local trains, autos, Metro" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,200 – ₹5,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Mumbai</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Warm, dry, and relatively low humidity by Mumbai standards — ideal for long walking days and outdoor sightseeing." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot and humid", text: "Temperatures and humidity both climb, making midday sightseeing tiring — plan indoor activities and museum visits for the afternoons." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — heavy, atmospheric", text: "Dramatic skies and lush parks, but heavy rain can disrupt trains and roads. Build extra slack into any monsoon itinerary." },
                      { season: "Oct", emoji: "🌤️", color: "bg-purple-50 border-purple-200", mood: "Transitional", text: "Rains taper off, humidity is still noticeable, but the city is far less crowded with tourists than the peak winter months." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February — the most reliably pleasant stretch for walking South Mumbai and taking the Elephanta ferry without weather-related delays.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mumbai</h2>
                  <ul>
                    <li><strong>By Air:</strong> Chhatrapati Shivaji Maharaj International Airport (BOM) is one of India's busiest, with extensive domestic and international connections.</li>
                    <li><strong>By Train:</strong> Mumbai is a major national rail hub, with Chhatrapati Shivaji Maharaj Terminus (CSMT), Mumbai Central, and Bandra Terminus among its key stations for long-distance travel.</li>
                    <li><strong>By Road:</strong> Well connected via NH48 (to Pune/Bangalore) and NH66 (Konkan coastal route), though city traffic can add significant time to any road journey in or out.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Avoid local train travel with heavy luggage during rush hour (roughly 8–11 AM and 5:30–8:30 PM) — trains get extremely crowded and a cab is far more practical during these windows.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Mumbai</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="relative w-full rounded-xl h-56 overflow-hidden shadow-md">
                      <Image
                        src="/images/blogs/maharashtra/mumbai/marine-drive-night-mumbai.webp"
                        alt="Marine Drive's curved seafront skyline lit up at night, Mumbai's 'Queen's Necklace'"
                        fill
                        sizes="(min-width: 1024px) 384px, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-full rounded-xl h-56 overflow-hidden shadow-md">
                      <Image
                        src="/images/blogs/maharashtra/mumbai/chhatrapati-shivaji-terminus-mumbai.webp"
                        alt="The Victorian Gothic facade of Chhatrapati Shivaji Maharaj Terminus (CSMT), Mumbai"
                        fill
                        sizes="(min-width: 1024px) 384px, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <ul>
                    <li><strong>Gateway of India:</strong> Mumbai's most iconic monument, built to commemorate a royal visit in the early 20th century, now the departure point for Elephanta Caves ferries.</li>
                    <li><strong>Marine Drive:</strong> A sweeping seafront promenade nicknamed the "Queen's Necklace" for the way its streetlights curve along the bay after dark — best experienced at sunset.</li>
                    <li><strong>Chhatrapati Shivaji Maharaj Terminus (CSMT):</strong> A UNESCO World Heritage-listed Victorian Gothic railway station, still fully functional and one of the city's architectural highlights.</li>
                    <li><strong>Elephanta Caves:</strong> UNESCO-listed rock-cut cave temples on an island reached by a roughly hour-long ferry from the Gateway of India, dedicated primarily to Shiva.</li>
                    <li><strong>Bandra (Bandstand & Carter Road):</strong> A seafront promenade in the western suburbs popular for evening walks, celebrity-spotting near Bandra Bandstand, and a strong café scene.</li>
                    <li><strong>Haji Ali Dargah:</strong> A mosque and tomb built on an islet, connected to the mainland by a causeway that's submerged at high tide.</li>
                    <li><strong>Colaba Causeway & Kala Ghoda:</strong> Mumbai's classic shopping strip and its art-and-heritage precinct, both walkable from the Gateway of India.</li>
                    <li><strong>Film City / Bollywood studio tours:</strong> Various operators run tours through Mumbai's film production hub for a look at how Bollywood movies get made.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Mumbai</h2>
                  <p>South Mumbai (Colaba/Fort) suits first-timers focused on heritage sights; Bandra suits those who want a more contemporary, café-dense base.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,200–₹2,800/night", picks: ["Hostels in Colaba", "Budget hotels near CSMT", "Guesthouses in Bandra"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹3,500–₹8,000/night", picks: ["Business hotels, Fort/Colaba", "Boutique stays, Bandra", "Chain hotels near the airport"] },
                      { tier: "Luxury", icon: "✨", range: "₹15,000–₹40,000+/night", picks: ["Iconic sea-facing hotels near the Gateway", "5-star hotels, Bandra Kurla Complex", "Heritage luxury properties, Colaba"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>First-time visitors get the most value staying in Colaba — walkable to the Gateway of India, Marine Drive, and Kala Ghoda, with the Elephanta ferry right on your doorstep.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Mumbai</h2>
                  <ul>
                    <li><strong>Vada Pav:</strong> Mumbai's iconic street-food snack — a spiced potato fritter in a bun — sold everywhere from railway platforms to dedicated stalls.</li>
                    <li><strong>Pav Bhaji:</strong> A buttery mashed-vegetable curry served with soft bread rolls, a Mumbai street-food institution best had at a busy local stall.</li>
                    <li><strong>Bhel Puri & Sev Puri:</strong> Tangy, crunchy chaat classics, especially good at Chowpatty and Juhu Beach in the evenings.</li>
                    <li><strong>Bombay Sandwich:</strong> A layered, chutney-packed vegetable sandwich, a distinctly Mumbai street-food invention.</li>
                    <li><strong>Irani cafés:</strong> Century-old Parsi/Irani cafés serving bun-maska and chai — a genuinely atmospheric slice of old Mumbai, concentrated in South Mumbai.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Mumbai Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "South Mumbai Heritage", color: "bg-amber-700", activities: ["Morning: Gateway of India and Colaba", "Midday: Kala Ghoda and CSMT", "Afternoon: Crawford Market", "Evening: Marine Drive at sunset"] },
                      { day: "Day 2", title: "Elephanta Caves & Markets", color: "bg-forest-600", activities: ["Morning: Ferry to Elephanta Caves", "Afternoon: Return, explore Haji Ali Dargah", "Evening: Chowpatty Beach chaat"] },
                      { day: "Day 3", title: "Bandra & Suburbs", color: "bg-orange-600", activities: ["Morning: Bandra Bandstand and Mount Mary", "Midday: Carter Road cafés", "Afternoon: Optional Bollywood studio tour", "Evening: Juhu Beach"] },
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
                          ["Accommodation/night", "₹1,400", "₹4,500", "₹18,000"],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          ["Local transport per day", "₹150", "₹600", "₹2,000"],
                          ["Elephanta Caves ferry + entry", "₹250", "₹250", "₹500"],
                          ["Daily total", "₹2,200", "₹5,500", "₹15,000+"],
                          ["3-Day trip total", "₹6,600", "₹16,500", "₹40,000+"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights/trains to Mumbai. Mumbai is India's most expensive major city for accommodation.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Mumbai</h2>
                  <ul>
                    <li><strong>Avoid rush-hour local trains with luggage:</strong> They get genuinely packed between roughly 8–11 AM and 5:30–8:30 PM.</li>
                    <li><strong>Check monsoon weather warnings if visiting Jun–Sep:</strong> Heavy rain can flood low-lying areas and disrupt both trains and roads.</li>
                    <li><strong>Distances between areas are deceptively long:</strong> South Mumbai to Bandra/Juhu can take an hour or more in traffic — plan your day around geography, not just a wish list.</li>
                    <li><strong>Book the Elephanta ferry early in the day:</strong> The last return ferries leave in the late afternoon, and queues build up on weekends.</li>
                    <li><strong>Keep valuables secure in crowds:</strong> Petty theft risk rises in crowded trains and markets like Colaba Causeway.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Walk South Mumbai's heritage core — it's genuinely compact", "Take the Elephanta ferry early to avoid afternoon queues", "Try street food at busy, high-turnover stalls", "Watch sunset at Marine Drive at least once", "Plan cross-city trips around rush-hour timing"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Take crowded local trains with heavy luggage during rush hour", "Underestimate travel time between South Mumbai and the suburbs", "Ignore monsoon weather warnings if visiting in season", "Leave the Elephanta ferry visit for late afternoon", "Carry excessive valuables in crowded markets"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Mumbai", "Gateway of India", "Marine Drive", "Elephanta Caves", "Maharashtra", "City Guide", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MUMBAI_GEAR} destination="Mumbai" />
              <RelatedPostsGrid currentSlug="mumbai-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="mumbai-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
