// src/app/blog/kovalam-travel-guide/page.tsx
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
  title: "Kovalam Travel Guide: Lighthouse Beach, Ayurveda & Itinerary",
  description:
    "The complete Kovalam travel guide. Lighthouse Beach, Hawah Beach, Samudra Beach, Ayurvedic wellness centres, where to stay, best time to visit, and a full itinerary through Kerala's original beach resort town.",
  keywords:
    "Kovalam travel guide, Lighthouse Beach Kovalam, Kovalam Ayurveda, Vizhinjam Lighthouse, best time to visit Kovalam, how to reach Kovalam, Trivandrum beaches, Kerala beach holiday",
  openGraph: {
    title: "Kovalam Travel Guide: Lighthouse Beach, Ayurveda & Itinerary",
    description: "Three crescent coves anchored by a working lighthouse, and one of South India's original beach destinations for Ayurvedic wellness — the complete guide to Kovalam.",
    url: "https://club.kudozz.in/blog/kovalam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/andaman/hero.jpg", width: 1200, height: 630, alt: "Turquoise coastline representative of Kovalam, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kovalam Travel Guide: Lighthouse Beach, Ayurveda & Itinerary",
    description: "Three crescent coves anchored by a working lighthouse — the complete guide to Kovalam.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/kovalam-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Kovalam Travel Guide: Lighthouse Beach, Ayurveda & Itinerary",
          description: "The complete Kovalam travel guide.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/kovalam-travel-guide" },
          about: { "@type": "Place", name: "Kovalam", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kovalam Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Kovalam?", a: "Two days covers the three beaches, the lighthouse, and an Ayurvedic treatment session comfortably. Add a day trip to Trivandrum city for temple and museum sightseeing if you have time." },
  { q: "What is the best time to visit Kovalam?", a: "December to January is peak season with the driest, coolest weather. November and February are also good, with fewer crowds than the peak weeks." },
  { q: "How do I reach Kovalam?", a: "Trivandrum International Airport (TRV) is only about 16km away, making Kovalam one of the most airport-accessible beach destinations in Kerala. Thiruvananthapuram Central railway station is also close by." },
  { q: "Is Kovalam good for Ayurvedic treatments?", a: "Yes — Kovalam has a long history as a wellness destination with numerous Ayurveda centres along the beachfront. Choose a centre with certified practitioners rather than a tourist-facing 'massage' shack for a genuine treatment." },
  { q: "Is it safe to swim at Kovalam?", a: "Check safety flags before swimming — currents near the lighthouse rocks can be strong. Hawah Beach and Samudra Beach are generally calmer than the area right around Lighthouse Beach's rocky sections." },
  { q: "What is the budget for a trip to Kovalam?", a: "A budget traveler can manage on roughly ₹1,600 a day, a mid-range trip closer to ₹4,500 a day including a spa treatment, and a luxury resort stay can run ₹12,000+ a day." },
  { q: "Can I combine Kovalam with Varkala?", a: "Yes, though they're roughly 55km apart (about 1.5 hours by road) — most travelers pick one as a base and visit the other as a day trip, or split a longer Kerala coastal trip between both." },
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
  { id: "introduction", title: "Why Kovalam?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kovalam", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KOVALAM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for beach days and Ayurvedic wellness stays",
    emoji: "🏖️",
    items: [
      { name: "Reef-Safe Sunscreen (SPF 50)", description: "Extended beach time at Kovalam's three coves calls for strong, reef-safe sun protection.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Beach essential", tagColor: "bg-amber-100 text-amber-700", why: "Sunburn is the most common regret among travelers who underestimate a full beach day here." },
      { name: "Light Cotton Robe/Wrap", description: "Useful both for the beach and for comfort before and after Ayurvedic treatments.", price: "₹599", rating: 4.4, reviews: "3.2k", image: "🧣", affiliateUrl: amazonSearchUrl("cotton+wrap+beach+spa"), tag: "Spa essential", tagColor: "bg-purple-100 text-purple-700", why: "A simple cotton wrap covers both beach modesty and comfort around Ayurveda centres." },
      { name: "Waterproof Phone Pouch", description: "For swimming at any of the three beaches without worrying about a dropped phone.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"), tag: "Beach essential", tagColor: "bg-sky-100 text-sky-700", why: "Kovalam's beaches get busy enough that keeping valuables secure while swimming matters." },
      { name: "Comfortable Sandals", description: "For walking the beachfront promenade, the lighthouse climb, and Trivandrum sightseeing day trips.", price: "₹899", rating: 4.4, reviews: "4.8k", image: "👡", affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Between the beach, lighthouse, and any Trivandrum add-on, comfortable footwear pays off." },
    ],
  },
];

export default function KovalamGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/andaman/hero.jpg" alt="Turquoise coastline representative of Kovalam, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Kovalam", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kovalam", "Ayurveda", "Beaches", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Kovalam Travel Guide: Lighthouse Beach, Ayurveda & Itinerary
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Three crescent coves anchored by a working lighthouse, and one of South India's original beach destinations for Ayurvedic wellness — everything you need to plan a trip to Kovalam.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kovalam, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
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
                  <h2>Why Kovalam?</h2>
                  <p>
                    <strong>Kovalam</strong> has been on the international traveler map since the 1970s, one of South India's earliest developed beach resorts and a mainstay of the old hippie trail. Three interlinked crescent beaches — Lighthouse Beach, Hawah Beach, and Samudra Beach — are anchored by a red-and-white working lighthouse that's the town's central landmark and one of its best viewpoints.
                  </p>
                  <p>
                    Kovalam is also one of the easiest beach destinations in India to reach, with Trivandrum's international airport only a short drive away, and it carries a long-standing reputation for Ayurvedic wellness, with treatment centres lining much of the beachfront.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏖️</span> Kovalam at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🗼", label: "Landmark", value: "Vizhinjam Lighthouse" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Trivandrum (TRV), ~16km" },
                        { icon: "🧘", label: "Known For", value: "Ayurvedic wellness" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,600 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Kovalam</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Dec – Jan", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Peak season", text: "Driest, coolest weather and the busiest crowds — book stays and treatments in advance." },
                      { season: "Nov & Feb", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Great alternative", text: "Very similar conditions to peak season with noticeably fewer crowds." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-purple-50 border-purple-200", mood: "Hot", text: "Warmer and more humid — still workable but less comfortable for extended beach time." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Rough seas and heavy rain make this the least suitable window for a beach-focused trip." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late November or February — near-identical weather to peak season with a noticeably calmer beachfront.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kovalam</h2>
                  <ul>
                    <li><strong>By Air:</strong> Trivandrum International Airport (TRV) is just ~16km away — one of the shortest airport-to-beach transfers in Kerala.</li>
                    <li><strong>By Train:</strong> Thiruvananthapuram Central is a major railway hub with strong connections across South India.</li>
                    <li><strong>By Road:</strong> A short, straightforward drive from Trivandrum city.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Kovalam's proximity to the airport makes it a good first- or last-night base for a longer Kerala trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kovalam</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/andaman/hero.jpg" alt="Beach and lighthouse view representative of Kovalam" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Lighthouse Beach:</strong> The most developed and famous of the three coves, named for the climbable Vizhinjam Lighthouse at its southern end.</li>
                    <li><strong>Vizhinjam Lighthouse:</strong> A working red-and-white lighthouse offering panoramic coastal views from the top.</li>
                    <li><strong>Hawah and Samudra Beach:</strong> Quieter neighbouring coves, generally calmer for swimming than the rocky stretch near the lighthouse.</li>
                    <li><strong>Ayurvedic wellness centres:</strong> A long-running local specialty — choose a certified centre for a genuine treatment rather than a beachfront massage stall.</li>
                    <li><strong>Vizhinjam fishing harbour:</strong> A working harbour and an ancient rock-cut cave temple nearby, worth a short visit.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kovalam</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses near Lighthouse Beach", "Budget hotels a short walk from the sand"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Beachfront mid-range hotels", "Ayurveda-resort combo stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹9,000–₹20,000+/night", picks: ["Premium beachfront resorts", "High-end Ayurveda wellness retreats"] },
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
                  <h2>What to Eat in Kovalam</h2>
                  <ul>
                    <li><strong>Fresh seafood:</strong> Kingfish, prawns, and squid grilled or curried at beachfront shacks along Lighthouse Beach.</li>
                    <li><strong>Kerala thalis:</strong> Traditional vegetarian and fish-based thalis at local restaurants in and around the town.</li>
                    <li><strong>International cafe menus:</strong> A long history of foreign travelers has left Kovalam with a wide range of continental and multi-cuisine beach cafes.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Kovalam Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Beaches & Lighthouse", color: "bg-amber-700", activities: ["Arrive, check in near Lighthouse Beach", "Afternoon: beach time, lighthouse climb", "Evening: sunset dinner at a beach shack"] },
                      { day: "Day 2", title: "Wellness & Trivandrum", color: "bg-forest-600", activities: ["Morning: Ayurvedic treatment session", "Afternoon: half-day trip to Trivandrum (Padmanabhaswamy Temple exterior, Napier Museum)", "Evening: return, relax on the beach"] },
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
                          ["Accommodation/night", "₹1,200", "₹4,000", "₹14,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          ["Ayurvedic treatment (per session)", "₹800", "₹2,500", "₹6,000"],
                          ["Daily total", "₹1,600", "₹4,500", "₹12,000"],
                          ["2-Day trip total", "₹3,200", "₹9,000", "₹24,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kovalam</h2>
                  <ul>
                    <li><strong>Check swimming safety flags:</strong> Currents near the lighthouse rocks can be stronger than they look.</li>
                    <li><strong>Choose a certified Ayurveda centre:</strong> Look for genuine practitioners rather than tourist-trap massage shacks.</li>
                    <li><strong>Book ahead in peak season:</strong> December–January fills up fast given the easy airport access.</li>
                    <li><strong>Combine with a Trivandrum city day trip:</strong> Padmanabhaswamy Temple and the Napier Museum are both close by.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Check safety flags before swimming", "Book a certified Ayurveda centre", "Climb the Vizhinjam Lighthouse for the view", "Combine with a Trivandrum day trip", "Book ahead for peak December–January dates"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Swim past the shallows without checking currents", "Book an uncertified 'massage' shack expecting genuine Ayurveda", "Visit during peak monsoon for a beach-focused trip", "Skip sun protection during long beach days", "Ignore local advice on rocky sections near the lighthouse"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Kovalam", "Ayurveda", "Beaches", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KOVALAM_GEAR} destination="Kovalam" />
              <RelatedPostsGrid currentSlug="kovalam-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="kovalam-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
