// src/app/blog/bengaluru-travel-guide/page.tsx
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
  title: "Bengaluru Travel Guide: Gardens, Palaces & India's Tech Capital",
  description:
    "The complete Bengaluru travel guide. Cubbon Park, Lalbagh Botanical Garden, Bangalore Palace, Tipu Sultan's Summer Palace, the craft beer scene, where to stay, best time to visit, and a full 2-day itinerary through India's tech capital.",
  keywords:
    "Bengaluru travel guide, Bangalore travel guide, Cubbon Park, Lalbagh Botanical Garden, Bangalore Palace, Tipu Sultan Summer Palace, best time to visit Bengaluru, how to reach Bengaluru, Bengaluru itinerary, Bengaluru craft beer",
  openGraph: {
    title: "Bengaluru Travel Guide: Gardens, Palaces & India's Tech Capital",
    description: "Cubbon Park's green spread in the middle of a tech-boom skyline, a Tipu Sultan summer palace, and the country's best-known startup scene — the complete guide to Bengaluru.",
    url: "https://club.kudozz.in/blog/bengaluru-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/udaipur/saheliyon.jpg", width: 1200, height: 630, alt: "Green garden landscape representative of Bengaluru, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengaluru Travel Guide: Gardens, Palaces & India's Tech Capital",
    description: "Cubbon Park's green spread, a Tipu Sultan summer palace, and India's best-known startup scene — the complete guide to Bengaluru.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/bengaluru-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Bengaluru Travel Guide: Gardens, Palaces & India's Tech Capital",
          description: "The complete Bengaluru travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bengaluru-travel-guide" },
          about: { "@type": "Place", name: "Bengaluru", address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Bengaluru Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Bengaluru?", a: "Two days covers the main gardens, palaces, and a taste of the city's food and craft beer scene. Add a third day for a slower pace or a day trip to nearby Nandi Hills or Mysuru." },
  { q: "What is the best time to visit Bengaluru?", a: "October to February is most comfortable, though Bengaluru's elevation keeps it pleasant year-round compared to most Indian cities — even the warmer months rarely feel oppressive." },
  { q: "How do I reach Bengaluru?", a: "Kempegowda International Airport (BLR) is one of India's busiest, with extensive domestic and international connections. Bengaluru is also a major railway junction and road hub for South India." },
  { q: "Is Bengaluru good for a short weekend trip?", a: "Yes — it works both as a standalone city trip and as a base for weekend getaways to Nandi Hills, Mysuru, or Coorg, all within a few hours by road." },
  { q: "What is Bengaluru traffic like?", a: "Genuinely heavy, especially during morning and evening rush hours — build extra buffer time into any cross-city plans, and consider ride-hailing apps or the metro where routes align." },
  { q: "What is the budget for a trip to Bengaluru?", a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,500 a day, and a luxury stay can run ₹10,000+ a day. A 2-day trip totals roughly ₹3,600 on a budget and ₹9,000 mid-range, excluding flights or trains to the city." },
  { q: "Is Bengaluru known for anything besides tech?", a: "Yes — it has a strong garden-city heritage (Cubbon Park, Lalbagh), royal-era palaces, one of India's most developed microbrewery scenes, and a diverse food culture reflecting migrants from across the country." },
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
  { id: "introduction", title: "Why Bengaluru?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bengaluru", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BENGALURU_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for garden walks, palace visits, and city-hopping",
    emoji: "🌳",
    items: [
      { name: "Comfortable Walking Shoes", description: "Cubbon Park, Lalbagh, and the palace complexes all involve significant walking on foot.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "City-walk essential", tagColor: "bg-forest-100 text-forest-700", why: "Bengaluru's best sights reward walking rather than hopping between cabs for every stop." },
      { name: "Light Layers / Jacket", description: "Evenings can turn cool even in the warmer months, a rarity for an Indian metro at this latitude.", price: "₹1,299", rating: 4.4, reviews: "3.8k", image: "🧥", affiliateUrl: amazonSearchUrl("light+jacket+travel+layer"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Bengaluru's elevation gives it noticeably cooler evenings than most Indian cities." },
      { name: "Reusable Water Bottle", description: "For garden walks and a day of city sightseeing between attractions.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "A full day covering multiple parks and palaces adds up in walking distance." },
      { name: "Daypack (20L)", description: "For carrying essentials across a day that mixes gardens, museums, and shopping streets.", price: "₹899", rating: 4.4, reviews: "4.6k", image: "🎒", affiliateUrl: amazonSearchUrl("20l+daypack+travel"), tag: "City essential", tagColor: "bg-purple-100 text-purple-700", why: "Keeps hands free for photos and shopping across a packed city itinerary." },
    ],
  },
];

export default function BengaluruGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/udaipur/saheliyon.jpg" alt="Green garden landscape representative of Bengaluru, Karnataka" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Bengaluru", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bengaluru", "Cubbon Park", "Destination Guide", "Karnataka"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bengaluru Travel Guide: Gardens, Palaces & India's Tech Capital
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Cubbon Park's green spread in the middle of a tech-boom skyline, a Tipu Sultan summer palace, and the country's best-known startup scene — everything you need to plan a trip to Bengaluru.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bengaluru, Karnataka" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,300 words" },
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
                  <h2>Why Bengaluru?</h2>
                  <p>
                    <strong>Bengaluru</strong>, long known internationally as Bangalore, carries two identities that sit side by side more comfortably than you'd expect: it's India's "Garden City," with sprawling green spaces at its core, and it's also the country's tech capital, home to the campuses and startup culture that made it India's answer to Silicon Valley.
                  </p>
                  <p>
                    Beneath the tech-boom skyline are reminders of an older city — royal-era palaces, planned Victorian-style parks, and a genuinely pleasant climate that has drawn people here for generations, long before the IT industry arrived.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌳</span> Bengaluru at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🌳", label: "Key Site", value: "Cubbon Park & Lalbagh" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb (pleasant year-round)" },
                        { icon: "✈️", label: "Airport", value: "Kempegowda (BLR)" },
                        { icon: "💻", label: "Known For", value: "India's tech capital" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bengaluru</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for long walking days in the gardens and around the palaces." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warm but manageable", text: "Warmer than winter, but Bengaluru's elevation keeps it far more comfortable than most Indian cities in this window." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Regular rain showers, lush parks, and generally mild temperatures — still workable for city sightseeing with an umbrella handy." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February — though honestly, Bengaluru's climate is forgiving enough that almost any month works for a city trip.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bengaluru</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kempegowda International Airport (BLR) is one of India's busiest, with extensive domestic and international connections.</li>
                    <li><strong>By Train:</strong> Bengaluru is a major railway junction with strong connections across South India and beyond.</li>
                    <li><strong>By Road:</strong> A South India hub, well connected to Mysuru, Coorg, Chikmagalur, and other Karnataka destinations by highway.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Bengaluru's traffic is a genuine daily challenge — build in extra buffer time for any cross-city plans, especially during morning and evening rush hours.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Bengaluru</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/udaipur/saheliyon.jpg" alt="Garden landscape in Bengaluru" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Cubbon Park:</strong> A large green space in the city core, popular for morning walks and a quiet break from the surrounding traffic.</li>
                    <li><strong>Lalbagh Botanical Garden:</strong> Home to a Victorian-era glass house and Bengaluru's biggest annual flower shows.</li>
                    <li><strong>Bangalore Palace:</strong> A Tudor-style royal residence open for tours, distinct from Mysore Palace and worth visiting on its own terms.</li>
                    <li><strong>Tipu Sultan's Summer Palace:</strong> An 18th-century wooden Indo-Islamic palace, a reminder of the city's pre-colonial history.</li>
                    <li><strong>ISKCON Temple Bangalore:</strong> A large, active Krishna temple complex popular with both devotees and visitors.</li>
                    <li><strong>MG Road, Brigade Road & Commercial Street:</strong> The city's classic shopping and nightlife strips, including its well-known craft beer and microbrewery scene.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Bengaluru</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,000/night", picks: ["Budget hotels near MG Road", "Hostels in Indiranagar/Koramangala"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Business hotels near the city centre", "Boutique stays in Indiranagar"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["5-star hotels near MG Road/UB City", "Premium business-district properties"] },
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
                  <h2>What to Eat in Bengaluru</h2>
                  <ul>
                    <li><strong>Filter coffee:</strong> A South Indian staple, and Bengaluru's older darshinis (fast, no-frills eateries) serve some of the best.</li>
                    <li><strong>Bisi Bele Bath and Mysore Pak:</strong> Classic Karnataka dishes widely available across the city.</li>
                    <li><strong>Craft beer and microbreweries:</strong> Bengaluru has one of India's most developed craft beer scenes, concentrated around Indiranagar and Koramangala.</li>
                    <li><strong>Diverse city food scene:</strong> Decades of migration from across India have given Bengaluru a genuinely wide range of regional cuisines beyond Karnataka's own.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Bengaluru Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Gardens & Palaces", color: "bg-amber-700", activities: ["Morning: Cubbon Park walk", "Late morning: Bangalore Palace", "Afternoon: Lalbagh Botanical Garden", "Evening: MG Road/Brigade Road"] },
                      { day: "Day 2", title: "Heritage & City Life", color: "bg-forest-600", activities: ["Morning: Tipu Sultan's Summer Palace", "Afternoon: ISKCON Temple, Commercial Street shopping", "Evening: craft brewery dinner in Indiranagar"] },
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
                          ["Accommodation/night", "₹1,200", "₹4,000", "₹12,000"],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          ["Local transport per day", "₹300", "₹800", "₹2,000"],
                          ["Daily total", "₹1,800", "₹4,500", "₹10,500"],
                          ["2-Day trip total", "₹3,600", "₹9,000", "₹22,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flight/train to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Bengaluru</h2>
                  <ul>
                    <li><strong>Plan around traffic:</strong> Build in extra time for cross-city travel, especially during rush hours.</li>
                    <li><strong>Visit gardens early morning:</strong> Cubbon Park and Lalbagh are quietest and coolest before 9 AM.</li>
                    <li><strong>Use ride-hailing apps:</strong> Widely available and generally the easiest way to get around.</li>
                    <li><strong>Consider a day trip:</strong> Nandi Hills or Mysuru are both feasible additions if you have an extra day.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Cubbon Park and Lalbagh early morning", "Try the city's craft beer scene", "Build in extra time for traffic", "Use ride-hailing apps to get around", "Consider a Nandi Hills or Mysuru day trip"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Underestimate cross-city travel times", "Skip the palace complexes for tech-park sightseeing alone", "Plan tight back-to-back schedules without buffer", "Overlook the city's garden heritage", "Assume Bengaluru is only about the tech industry"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Bengaluru", "Cubbon Park", "Karnataka", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BENGALURU_GEAR} destination="Bengaluru" />
              <RelatedPostsGrid currentSlug="bengaluru-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="bengaluru-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
