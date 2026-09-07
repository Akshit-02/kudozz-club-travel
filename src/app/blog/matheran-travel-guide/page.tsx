// src/app/blog/matheran-travel-guide/page.tsx
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
  title: "Matheran Travel Guide: India's Only Vehicle-Free Hill Station",
  description:
    "The complete Matheran travel guide. The Matheran toy train, Charlotte Lake, Echo Point, Panorama Point, where to stay, what to eat, and a 2-day itinerary for India's only motor-vehicle-free hill station.",
  keywords:
    "Matheran travel guide, Matheran toy train, Neral to Matheran, Charlotte Lake, Echo Point Matheran, Panorama Point, Matheran itinerary, best time to visit Matheran, how to reach Matheran, Matheran horse riding, vehicle free hill station India, Matheran vs Lonavala",
  openGraph: {
    title: "Matheran Travel Guide: India's Only Vehicle-Free Hill Station",
    description:
      "No cars, no bikes, not even bicycles allowed — just red mud trails, a century-old toy train, and panoramic points over the Sahyadris. The complete guide to Matheran.",
    url: "https://club.kudozz.in/blog/matheran-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/ziro/hero.jpg", width: 1200, height: 630, alt: "Green forested hills near Matheran, Maharashtra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheran Travel Guide: India's Only Vehicle-Free Hill Station",
    description: "The toy train, red mud trails, and panoramic points — the complete guide to Matheran.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/matheran-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Matheran Travel Guide: India's Only Vehicle-Free Hill Station",
          description: "The complete Matheran travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/matheran-travel-guide" },
          about: { "@type": "Place", name: "Matheran", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Matheran Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "Why are vehicles banned in Matheran?", a: "Matheran has prohibited motor vehicles since the British colonial era to preserve its forest cover and quiet character — it remains one of very few automobile-free hill stations in Asia. Movement within town is on foot, by horse, or by hand-pulled rickshaw." },
  { q: "How many days do I need in Matheran?", a: "Two days is ideal — enough to walk the main viewpoints at an unhurried pace and enjoy the car-free atmosphere without feeling rushed. A day trip is possible but feels tight given the walk in from Dasturi." },
  { q: "What is the best time to visit Matheran?", a: "October to May is the best window, with winter (Nov–Feb) being the most comfortable for walking. Monsoon (Jun–Sep) turns the town lush green but the red mud trails become very slippery." },
  { q: "How do I reach Matheran?", a: "The nearest railhead is Neral, on the Mumbai-Pune line. From Neral, take the narrow-gauge Matheran Hill Railway toy train (when running) or a shared taxi to Dasturi car park, the point where all vehicles must stop — from there it's about a 2.5 km walk, horse ride, or hand-pulled rickshaw into town." },
  { q: "Is the Matheran toy train currently running?", a: "The heritage narrow-gauge toy train has faced periodic suspensions over the years for track repairs and monsoon damage — check current status before your trip, since the shared-taxi-to-Dasturi route is always a reliable backup." },
  { q: "What is the budget for a trip to Matheran?", a: "A budget traveller can manage on roughly ₹1,200 a day, a mid-range trip runs closer to ₹3,000 a day, and a heritage resort stay can run ₹7,000+ a day, excluding transport to Neral." },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Matheran?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Matheran", level: 2 },
  { id: "top-attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MATHERAN_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for red mud trails and a car-free hill town",
    emoji: "🐎",
    items: [
      { name: "Sturdy Walking Shoes", description: "Matheran's red laterite trails are soft, dusty, and can turn slick — Matheran is best explored entirely on foot, so grip and comfort both matter.", price: "₹1,499", rating: 4.5, reviews: "6.7k", image: "👟", affiliateUrl: amazonSearchUrl("sturdy+walking+shoes+trail"), tag: "Essential", tagColor: "bg-red-100 text-red-700", why: "With no vehicles allowed, every attraction in Matheran is reached on foot — the wrong shoes make the whole trip harder." },
      { name: "Wide-Brim Sun Hat", description: "The open viewpoints along Matheran's ridge offer little shade during midday walks.", price: "₹349", rating: 4.3, reviews: "3.8k", image: "👒", affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"), tag: "Sun protection", tagColor: "bg-amber-100 text-amber-700", why: "Panorama Point and the other ridge viewpoints are fully exposed with no shade cover." },
      { name: "Reusable Water Bottle", description: "With no vehicles to hop into for a break, staying hydrated across a day of walking between viewpoints matters more here.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Everyday essential", tagColor: "bg-sky-100 text-sky-700", why: "Matheran's viewpoint circuit covers several kilometres with no vehicle option if you underestimate water needs." },
      { name: "Small Daypack", description: "Useful for carrying snacks, water, and cash on the walk from Dasturi car park, since porters and horses are optional extras rather than default.", price: "₹899", rating: 4.4, reviews: "4.6k", image: "🎒", affiliateUrl: amazonSearchUrl("small+daypack+travel"), tag: "Everyday essential", tagColor: "bg-forest-100 text-forest-700", why: "The 2.5 km walk from Dasturi into town is easier with essentials in a light, hands-free bag." },
    ],
  },
];

export default function MatheranGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/ziro/hero.jpg" alt="Green forested hills near Matheran, Maharashtra" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Maharashtra", href: "/blog/maharashtra-travel-guide" }, { label: "Matheran", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Matheran", "Maharashtra", "Hill Station", "Toy Train", "Off-beat"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Matheran Travel Guide: India's Only Vehicle-Free Hill Station
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              No cars, no bikes, not even bicycles allowed — just red mud trails, a century-old toy train, and panoramic points over the Sahyadris. The complete guide to Matheran.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" }, { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Matheran, Maharashtra" }, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,000 words" }].map((m) => (
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
                  <h2>Why Matheran?</h2>
                  <p>
                    <strong>Matheran</strong> is India's only hill station
                    where motor vehicles have been banned since the British
                    era — no cars, no motorbikes, not even bicycles are
                    allowed within town limits. Everything moves on foot, on
                    horseback, or by hand-pulled rickshaw, which keeps the
                    forest cover intact and the air genuinely quiet — a rare
                    thing this close to Mumbai.
                  </p>
                  <p>
                    Perched at around 800 metres in the Sahyadri range, the
                    town is criss-crossed by red laterite mud trails leading
                    to more than 30 named viewpoints, most reachable within a
                    short walk of each other. The narrow-gauge Matheran Hill
                    Railway, a heritage toy train from the nearby town of
                    Neral, adds to the old-world feel when it's running.
                  </p>
                  <p>
                    It's a slow, car-free kind of hill station — best suited
                    to travellers happy to walk everywhere and enjoy the
                    novelty rather than pack in a long list of sights.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🚫🚗</span> Matheran at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[{ icon: "📍", label: "State", value: "Maharashtra, India" }, { icon: "🚫", label: "Rule", value: "No motor vehicles" }, { icon: "🌡️", label: "Best Time", value: "Oct – May" }, { icon: "🚂", label: "Gateway", value: "Neral railway station" }, { icon: "🥾", label: "Getting Around", value: "Walk, horse, or rickshaw" }, { icon: "💰", label: "Budget/Day", value: "₹800 – ₹3,500" }].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Matheran</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather (12–28°C) and firm trails make this the most comfortable window for walking Matheran's viewpoint circuit." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warmer but manageable", text: "Temperatures climb into the low 30s, but the forest cover keeps Matheran noticeably cooler than the plains below." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — lush but muddy", text: "Heavy rain turns the red mud trails slick and slippery, though the forest is at its greenest — better for short walks than long viewpoint circuits." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> December to February, when the trails are firm and the weather is genuinely pleasant for a full day of walking.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Matheran</h2>
                  <ul>
                    <li><strong>By Train:</strong> Neral, on the Mumbai-Pune main line, is the gateway railhead — around 110 km from Mumbai and 120 km from Pune, well-connected by regular trains.</li>
                    <li><strong>Toy Train:</strong> The narrow-gauge Matheran Hill Railway runs from Neral up to Matheran when operational — a scenic, slow ride through forest and switchbacks.</li>
                    <li><strong>Shared Taxi + Walk:</strong> When the toy train isn't running, shared taxis cover the Neral-to-Dasturi road journey. All vehicles stop at Dasturi car park; from there it's roughly a 2.5 km walk, horse ride, or hand-pulled rickshaw into town.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check the current toy train status before you travel — service is periodically suspended for track repairs, and the Neral-to-Dasturi shared taxi is always a reliable fallback.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/ziro/hero.jpg" alt="Forested viewpoint trail in Matheran" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Charlotte Lake:</strong> Matheran's main water source and a quiet, forested spot for a peaceful walk, especially scenic just after monsoon.</li>
                    <li><strong>Echo Point:</strong> A popular viewpoint known for its clear echo across the valley — a favourite with families and first-time visitors.</li>
                    <li><strong>Panorama Point:</strong> One of the best sunrise and sunset spots in Matheran, offering a sweeping view across the surrounding Sahyadri ranges.</li>
                    <li><strong>One Tree Hill Point & Louisa Point:</strong> Adjacent viewpoints reached via connected trails, both offering dramatic valley drops.</li>
                    <li><strong>Porcupine Point (Sunset Point):</strong> Widely regarded as Matheran's best sunset viewpoint, with layered ridgelines fading into the haze at dusk.</li>
                    <li><strong>The Matheran Hill Railway:</strong> Even a short ride on the heritage toy train (when running) is worth doing for its own sake — narrow-gauge tracks winding through dense forest.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,800/night", picks: ["Simple lodges, Main Market", "Guesthouses near Dasturi"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Heritage-style hotels", "Family resorts with meal plans"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹15,000+/night", picks: ["Colonial-era heritage bungalows", "Premium forest-view resorts"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Most Matheran hotels include meals in the room rate, since options outside the property are limited — check this before booking.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <ul>
                    <li><strong>Chikki and honey:</strong> Local shops along Main Market Road sell jaggery-nut chikki and forest honey — popular souvenirs.</li>
                    <li><strong>Resort meal plans:</strong> Most stays include breakfast, lunch, and dinner, since Matheran's food options outside hotels are limited.</li>
                    <li><strong>Roadside snacks:</strong> Bhutta (roasted corn) and vada pav stalls appear near the market and main viewpoints.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Matheran Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Central Viewpoints", color: "bg-amber-700", activities: ["Toy train or shared taxi to Dasturi, walk/horse ride into town", "Check in, explore Main Market", "Afternoon: Echo Point and Charlotte Lake", "Evening: sunset at Porcupine Point"] },
                      { day: "Day 2", title: "Further Viewpoints & Departure", color: "bg-forest-600", activities: ["Morning: Panorama Point for sunrise", "One Tree Hill Point and Louisa Point", "Afternoon: walk back to Dasturi, depart via Neral"] },
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
                        {[["Accommodation/night (often incl. meals)", "₹700", "₹2,800", "₹8,000"], ["Entry toll (non-residents)", "₹50", "₹50", "₹50"], ["Horse/rickshaw hire (optional)", "₹300", "₹500", "₹800"], ["Toy train ticket", "₹50", "₹50", "₹50"], ["Daily total", "₹1,100", "₹3,400", "₹8,900"], ["2-Day trip total", "₹2,200", "₹6,800", "₹17,800"]].map(([exp, b, m, l], i) => (
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to Neral. A local entry toll applies for non-resident visitors — check the current rate locally.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Carry cash:</strong> ATMs are scarce in Matheran and many small vendors don't accept cards.</li>
                    <li><strong>Wear proper shoes:</strong> Every attraction is reached on foot — flip-flops aren't ideal for the red mud trails.</li>
                    <li><strong>Check the toy train schedule ahead:</strong> Service can be suspended for repairs, so confirm before planning your journey around it.</li>
                    <li><strong>Be firm but fair with horse/rickshaw operators:</strong> Agree on rates before starting a ride to avoid confusion later.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Ride the toy train at least one direction if it's running", "Walk the full viewpoint circuit rather than rushing", "Carry enough cash for your whole stay", "Catch sunset at Porcupine Point", "Book a stay with meals included"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Wear flip-flops for the viewpoint circuit walks", "Expect motor vehicles anywhere inside town limits", "Assume the toy train is running without checking first", "Rely on card payments at small local shops", "Attempt the mud trails in heavy monsoon without caution"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Matheran", "Maharashtra", "Hill Station", "Toy Train", "Off-beat", "India"].map((tag) => <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>)}
              </div>

              <TrekGearRecommendations sections={MATHERAN_GEAR} destination="Matheran" />
              <RelatedPostsGrid currentSlug="matheran-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="matheran-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
