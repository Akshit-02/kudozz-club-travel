// src/app/blog/gwalior-travel-guide/page.tsx
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
  title: "Gwalior Fort Travel Guide: History, Timings & City Guide",
  description:
    "The complete Gwalior travel guide. Gwalior Fort, Man Singh Palace, Sas-Bahu Temples, Jai Vilas Palace, Tansen's tomb, where to stay, what to eat, and a 2-day itinerary through one of India's greatest hill forts.",
  keywords:
    "Gwalior travel guide, Gwalior Fort, Man Singh Palace, Jai Vilas Palace, Sas Bahu Temples, Teli ka Mandir, Gwalior itinerary, best time to visit Gwalior, how to reach Gwalior, Gwalior light and sound show, Tansen tomb, Gwalior Madhya Pradesh, Gwalior 2 day itinerary",
  openGraph: {
    title: "Gwalior Fort Travel Guide: History, Timings & City Guide",
    description:
      "A hilltop fort Babur once called 'the pearl among fortresses of India', plus a palace with a working 15th-century water-lift system — the complete guide to Gwalior.",
    url: "https://club.kudozz.in/blog/gwalior-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Hilltop fort architecture representative of Gwalior, Madhya Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwalior Fort Travel Guide: History, Timings & City Guide",
    description: "Gwalior Fort, Man Singh Palace, and Jai Vilas Palace — the complete guide to one of India's greatest hill forts.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/gwalior-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Gwalior Fort Travel Guide: History, Timings & City Guide",
          description: "The complete Gwalior travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/gwalior-travel-guide" },
          about: { "@type": "Place", name: "Gwalior", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Gwalior Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Gwalior?", a: "Two days is enough — a full day for Gwalior Fort and its temples, and a second for Jai Vilas Palace and the old city. Add a day if you're combining it with Orchha, which is a comfortable day trip away via Jhansi." },
  { q: "What is the best time to visit Gwalior?", a: "October to March is by far the most comfortable window — cool, dry weather ideal for the fort's long stairways and exposed ramparts. Summers (April–June) get brutally hot, often crossing 42°C." },
  { q: "How do I reach Gwalior?", a: "Gwalior Airport (GWL) has domestic flights from major cities, and Gwalior Junction is a major stop on the Delhi-Mumbai and Delhi-Chennai rail lines, making it one of the easiest heritage towns in India to reach by train. By road it's about 320 km from Delhi and 120 km from Agra on NH44." },
  { q: "Is Gwalior Fort worth visiting?", a: "Yes — it's one of the largest and best-preserved hill forts in India, with Mughal emperor Babur reportedly calling it 'the pearl among the fortresses of India'. Between the fort walls, Man Singh Palace, and the Sas-Bahu Temples, it easily fills half a day." },
  { q: "What is Gwalior famous for?", a: "Gwalior is best known for its massive hilltop fort, the opulent Jai Vilas Palace of the Scindia royal family, and its deep classical music heritage — the legendary musician Tansen was born and is buried here." },
  { q: "Can I combine Gwalior with Orchha and Khajuraho?", a: "Yes — Gwalior, Orchha, and Khajuraho form a popular Madhya Pradesh heritage circuit. Orchha is roughly 120 km away via Jhansi, and Khajuraho is a further drive or short flight beyond that." },
  { q: "What is the budget for a trip to Gwalior?", a: "A budget traveller can manage on roughly ₹1,400 a day, a mid-range trip runs closer to ₹3,800 a day, and upscale stays can run ₹9,000+ a day, excluding transport to the city." },
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
  { id: "introduction", title: "Why Gwalior?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gwalior", level: 2 },
  { id: "top-attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GWALIOR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the fort's stairways, ramparts, and city heritage walks",
    emoji: "🏰",
    items: [
      { name: "Comfortable Walking Shoes", description: "Gwalior Fort involves long stretches of stone ramps, uneven stairways, and open ramparts — closed, grippy shoes make a real difference over a half-day visit.", price: "₹1,699", rating: 4.5, reviews: "6.1k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+heritage"), tag: "Fort essential", tagColor: "bg-red-100 text-red-700", why: "The fort's stone stairways and sloped ramps are worn smooth in places and genuinely tiring in regular sandals." },
      { name: "Wide-Brim Sun Hat", description: "Most of the fort complex and its temples sit fully exposed on the hilltop with almost no shade.", price: "₹549", rating: 4.3, reviews: "3.8k", image: "👒", affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"), tag: "Sun protection", tagColor: "bg-amber-100 text-amber-700", why: "The open hilltop plateau around Man Singh Palace and the Sas-Bahu Temples has essentially no tree cover." },
      { name: "2L Hydration Bottle", description: "Water points thin out once you're inside the fort walls, especially on the longer walk to Teli ka Mandir.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"), tag: "Everyday essential", tagColor: "bg-sky-100 text-sky-700", why: "A half-day fort visit in Gwalior's dry heat adds up fast without a large bottle on hand." },
      { name: "Compact Binoculars", description: "Useful for picking out detail on the Sas-Bahu Temples' carvings and for the light and sound show's wide-angle views over the city.", price: "₹1,299", rating: 4.2, reviews: "2.4k", image: "🔭", affiliateUrl: amazonSearchUrl("compact+binoculars+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "The fort ramparts offer sweeping views of the old city that are much better appreciated with a bit of zoom." },
    ],
  },
];

export default function GwaliorGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Hilltop fort architecture representative of Gwalior, Madhya Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Madhya Pradesh", href: "/blog/madhya-pradesh-travel-guide" }, { label: "Gwalior", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Gwalior", "Madhya Pradesh", "Man Singh Palace", "Heritage", "Fort"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Gwalior Fort Travel Guide: History, Timings & City Guide
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A hilltop fort Babur once called "the pearl among fortresses of India", plus a palace with a working 15th-century water-lift system — the complete guide to Gwalior.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" }, { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Gwalior, Madhya Pradesh" }, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,200 words" }].map((m) => (
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
                  <h2>Why Gwalior?</h2>
                  <p>
                    <strong>Gwalior</strong> is built around one of India's
                    most formidable hill forts — a mile-long fortress on a
                    sandstone plateau that the Mughal emperor Babur reportedly
                    called "the pearl among the fortresses of India." Rulers
                    from the Tomars to the Mughals to the Scindias all fought
                    over and rebuilt within its walls, leaving behind a dense
                    cluster of palaces, temples, and water-harvesting
                    engineering that's rare to find this intact anywhere else
                    in the country.
                  </p>
                  <p>
                    Beyond the fort, Gwalior is also a city of music — the
                    legendary classical musician Tansen was born here and is
                    buried in the old city, and it remains an important
                    center for Hindustani classical music to this day. Add in
                    the almost absurdly opulent Jai Vilas Palace of the
                    Scindia royal family, and Gwalior earns a full two days
                    on any Madhya Pradesh itinerary.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏰</span> Gwalior at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[{ icon: "📍", label: "State", value: "Madhya Pradesh, India" }, { icon: "🏯", label: "Key Site", value: "Gwalior Fort" }, { icon: "🌡️", label: "Best Time", value: "Oct – Mar" }, { icon: "✈️", label: "Airport", value: "Gwalior (GWL)" }, { icon: "🚆", label: "Rail Hub", value: "Gwalior Junction" }, { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹9,000" }].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Gwalior</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather ideal for spending hours walking the fort's exposed ramparts and stairways without the heat working against you." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Very hot", text: "Temperatures regularly cross 40–42°C. If you must visit, stick to early mornings and keep the fort walk short." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Green surroundings and lower crowds, but the fort's stone surfaces get slippery and some sections may be less pleasant to explore." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February, when the fort's exposed stone surfaces are at their most bearable and the Tansen Music Festival (typically held in this window) adds a cultural draw.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Gwalior</h2>
                  <ul>
                    <li><strong>By Air:</strong> Gwalior Airport (GWL) has domestic flights connecting to Delhi and other major cities.</li>
                    <li><strong>By Train:</strong> Gwalior Junction sits on the main Delhi-Mumbai and Delhi-Chennai rail corridors, making it one of the best-connected heritage towns in India — an easy stop on almost any North-Central India rail itinerary.</li>
                    <li><strong>By Road:</strong> Well connected via NH44 — roughly 320 km (5-6 hrs) from Delhi and 120 km (2.5 hrs) from Agra, making it a natural add-on to a Taj Mahal trip.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Gwalior's excellent rail connectivity makes it easy to slot in between Agra and Khajuraho or Orchha — plan it as a stopover rather than a dedicated round trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Attractions in Gwalior</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Fort ramparts and palace architecture in Gwalior" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Gwalior Fort:</strong> A massive hilltop fortress with a history stretching back over a thousand years, its walls enclosing palaces, temples, and reservoirs across a sprawling plateau.</li>
                    <li><strong>Man Singh Palace (Gujari Mahal / Man Mandir):</strong> Known for its striking blue-tiled facade and an ingenious ancient water-lift and cooling system built directly into the palace walls.</li>
                    <li><strong>Sas-Bahu Temples:</strong> A pair of ornately carved 11th-century temples inside the fort complex, their name loosely translating to "mother-in-law/daughter-in-law" temples.</li>
                    <li><strong>Teli ka Mandir:</strong> A tall, distinctive temple within the fort blending Dravidian and North Indian architectural styles — one of the fort's oldest surviving structures.</li>
                    <li><strong>Jai Vilas Palace:</strong> The opulent Scindia dynasty palace, partly a working museum, famous for a massive chandelier and a silver toy train that once carried after-dinner treats along the dining table.</li>
                    <li><strong>Tansen's Tomb:</strong> The resting place of one of Hindustani classical music's greatest figures, in the old city, and the venue for the annual Tansen Music Festival.</li>
                    <li><strong>Light and Sound Show:</strong> An evening show held at the fort recounting Gwalior's history — a good way to close out a day of sightseeing.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,800/night", picks: ["Hotels near Gwalior railway station", "Budget lodges, city center"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,500/night", picks: ["Business hotels near Lashkar", "Heritage-style guesthouses"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹16,000+/night", picks: ["Usha Kiran Palace (former Scindia guesthouse)", "Premium hotels near Jai Vilas Palace"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Gwalior</h2>
                  <ul>
                    <li><strong>Bedai & Kachori:</strong> A classic Gwalior breakfast — deep-fried stuffed bread served with spiced potato curry, found at old-city eateries from early morning.</li>
                    <li><strong>Gwalior-style Chaat:</strong> Local chaat stalls, especially around Sarafa Bazaar, serve a distinct spice mix that regulars swear is different from anywhere else in North India.</li>
                    <li><strong>Gajak & Rewri:</strong> Sesame and jaggery sweets that Gwalior is well known for, especially in winter — a good edible souvenir.</li>
                    <li><strong>Local thalis:</strong> Simple vegetarian thalis are widely available and a reliable, filling option after a long day at the fort.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Gwalior Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Gwalior Fort & Palaces", color: "bg-amber-700", activities: ["Morning: Gwalior Fort, Man Singh Palace", "Sas-Bahu Temples and Teli ka Mandir", "Evening: Light and sound show at the fort"] },
                      { day: "Day 2", title: "Jai Vilas Palace & Old City", color: "bg-forest-600", activities: ["Morning: Jai Vilas Palace and museum", "Afternoon: Tansen's Tomb and the old city", "Evening: Sarafa Bazaar for chaat"] },
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
                        {[["Accommodation/night", "₹800", "₹3,000", "₹10,000"], ["Food/day", "₹350", "₹800", "₹1,800"], ["Local transport per day", "₹200", "₹600", "₹1,500"], ["Entry fees/activities", "₹150", "₹400", "₹800"], ["Daily total", "₹1,500", "₹4,800", "₹14,100"], ["2-Day trip total", "₹3,000", "₹9,600", "₹28,200"]].map(([exp, b, m, l], i) => (
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
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Allow a half-day for the fort alone:</strong> Between the palaces, temples, and ramparts, Gwalior Fort is bigger than it looks from below.</li>
                    <li><strong>Catch the light and sound show:</strong> It's a low-effort, high-value way to absorb the fort's history after a day of walking.</li>
                    <li><strong>Combine with Orchha:</strong> Roughly 120 km via Jhansi, Orchha makes a natural next stop on a Madhya Pradesh heritage circuit.</li>
                    <li><strong>Avoid summer midday visits:</strong> The fort's stone surfaces radiate heat brutally between April and June.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Start the fort visit early to avoid both heat and crowds", "Watch the evening light and sound show", "Visit Jai Vilas Palace for the chandelier and silver toy train", "Try Gwalior's distinct chaat at Sarafa Bazaar", "Combine with Orchha for a fuller heritage circuit"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the fort at midday in peak summer", "Rush past the Sas-Bahu Temples' carvings", "Skip Tansen's Tomb if you're interested in Indian classical music", "Underestimate how much walking the fort complex requires", "Expect nightlife or a big-city pace — Gwalior is heritage-focused"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Gwalior", "Madhya Pradesh", "Gwalior Fort", "Man Singh Palace", "Heritage", "India"].map((tag) => <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>)}
              </div>

              <TrekGearRecommendations sections={GWALIOR_GEAR} destination="Gwalior" />
              <RelatedPostsGrid currentSlug="gwalior-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="gwalior-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
