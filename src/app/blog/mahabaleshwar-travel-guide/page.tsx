// src/app/blog/mahabaleshwar-travel-guide/page.tsx
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
  title: "Mahabaleshwar Travel Guide: Viewpoints, Strawberries & Itinerary",
  description:
    "The complete Mahabaleshwar travel guide. Venna Lake, Arthur's Seat, Pratapgad Fort, Panchgani's Table Land, strawberry farms, where to stay, and a 3-day itinerary through Maharashtra's favourite hill station.",
  keywords:
    "Mahabaleshwar travel guide, Venna Lake, Arthur's Seat, Pratapgad Fort, Panchgani, Table Land, Mahabaleshwar strawberries, Mapro Garden, Mahabaleshwar itinerary, best time to visit Mahabaleshwar, how to reach Mahabaleshwar, Mahabaleshwar Panchgani trip, Western Ghats hill station",
  openGraph: {
    title: "Mahabaleshwar Travel Guide: Viewpoints, Strawberries & Itinerary",
    description:
      "Table-top viewpoints over the Western Ghats, strawberry farms lining every road, and the source of the Krishna River — the complete guide to Maharashtra's favourite hill station.",
    url: "https://club.kudozz.in/blog/mahabaleshwar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/abbey-falls.jpg", width: 1200, height: 630, alt: "Waterfall in the misty hills near Mahabaleshwar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahabaleshwar Travel Guide: Viewpoints, Strawberries & Itinerary",
    description: "Venna Lake, Arthur's Seat, Pratapgad Fort, and strawberry farms — the complete guide to Mahabaleshwar.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/mahabaleshwar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Mahabaleshwar Travel Guide: Viewpoints, Strawberries & Itinerary",
          description: "The complete Mahabaleshwar travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/mahabaleshwar-travel-guide" },
          about: { "@type": "Place", name: "Mahabaleshwar", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Mahabaleshwar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Mahabaleshwar?", a: "Two to three days works well — enough to cover the main viewpoints, Pratapgad Fort, and a half-day trip to Panchgani's Table Land without rushing." },
  { q: "What is the best time to visit Mahabaleshwar?", a: "September to May is the best window, with March to May being peak strawberry season. Winter (Dec–Feb) brings cool, misty mornings, while the monsoon (Jun–Aug) is scenic but comes with heavy fog and landslide risk on the ghat roads." },
  { q: "How do I reach Mahabaleshwar from Pune or Mumbai?", a: "Mahabaleshwar is about 120 km (3–3.5 hrs) from Pune and 260 km (5–6 hrs) from Mumbai by road. The nearest airport and major railway station are both in Pune; from there it's a scenic drive up the Western Ghats via NH4/Wai." },
  { q: "Should I combine Mahabaleshwar with Panchgani?", a: "Yes — Panchgani is only about 19 km away and is easily combined on the same trip, particularly for its Table Land plateau, one of Asia's largest volcanic tablelands." },
  { q: "When is the best time for fresh strawberries in Mahabaleshwar?", a: "March to May is peak strawberry season, when farms around the region are open for picking and roadside stalls sell fresh berries and strawberry-cream cups." },
  { q: "What is the budget for a trip to Mahabaleshwar?", a: "A budget traveller can manage on roughly ₹1,500 a day, a mid-range trip runs closer to ₹4,000 a day, and a resort stay can run ₹10,000+ a day. Weekend prices for accommodation run noticeably higher." },
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
  { id: "introduction", title: "Why Mahabaleshwar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "top-attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MAHABALESHWAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for viewpoints, fort visits, and cool hill-station evenings",
    emoji: "🍓",
    items: [
      { name: "Light Woollen Jacket", description: "Mahabaleshwar's elevation (over 1,350m) keeps evenings cool year-round, even in summer when the plains are sweltering.", price: "₹1,299", rating: 4.5, reviews: "6.1k", image: "🧥", affiliateUrl: amazonSearchUrl("light+woolen+jacket+travel"), tag: "Evening essential", tagColor: "bg-sky-100 text-sky-700", why: "Temperatures can drop noticeably after sunset even outside winter, catching travellers packed for the plains off guard." },
      { name: "Comfortable Walking Shoes", description: "The viewpoint circuit and Pratapgad Fort both involve extended walking on uneven ground — proper shoes make the day easier.", price: "₹1,499", rating: 4.5, reviews: "8.2k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-amber-100 text-amber-700", why: "Pratapgad Fort's climb and the string of viewpoints both add up to several kilometres of walking." },
      { name: "Compact Binoculars", description: "Useful at Arthur's Seat and Kate's Point for spotting the valley and river views that make these viewpoints famous.", price: "₹1,199", rating: 4.3, reviews: "3.4k", image: "🔭", affiliateUrl: amazonSearchUrl("compact+binoculars+travel"), tag: "Viewpoint essential", tagColor: "bg-forest-100 text-forest-700", why: "The panoramic Western Ghats views from Arthur's Seat are dramatically better with even basic binoculars." },
      { name: "Reusable Cotton Tote", description: "Handy for carrying home fresh strawberries, jams, and Mapro Garden purchases without extra plastic.", price: "₹249", rating: 4.4, reviews: "2.9k", image: "🛍️", affiliateUrl: amazonSearchUrl("reusable+cotton+tote+bag"), tag: "Shopping essential", tagColor: "bg-red-100 text-red-700", why: "Strawberry and jam shopping is a core part of the Mahabaleshwar experience — a sturdy tote avoids leaks and spills on the drive home." },
    ],
  },
];

export default function MahabaleshwarGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Waterfall in the misty hills near Mahabaleshwar" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Maharashtra", href: "/blog/maharashtra-travel-guide" }, { label: "Mahabaleshwar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mahabaleshwar", "Maharashtra", "Panchgani", "Western Ghats", "Destination Guide"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Mahabaleshwar Travel Guide: Viewpoints, Strawberries & Itinerary
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Table-top viewpoints over the Western Ghats, strawberry farms lining every road, and the source of the Krishna River — the complete guide to Maharashtra's favourite hill station.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" }, { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Mahabaleshwar, Maharashtra" }, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,400 words" }].map((m) => (
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
                  <h2>Why Mahabaleshwar?</h2>
                  <p>
                    Perched above 1,350 metres in the Western Ghats,{" "}
                    <strong>Mahabaleshwar</strong> has been Maharashtra's
                    go-to hill station since the British made it their summer
                    capital of the Bombay Presidency in the 1820s. Its appeal
                    hasn't changed much since — a string of cliffside
                    viewpoints over the Krishna valley, cool weather year-
                    round, and strawberry farms that turn the region into a
                    genuinely fragrant place to visit each spring.
                  </p>
                  <p>
                    Mahabaleshwar is also the source of the Krishna River,
                    one of India's major rivers, which begins as a trickle
                    at the Panch Ganga Temple before flowing across the
                    Deccan Plateau. A short drive away, the twin hill town of
                    Panchgani adds its own centerpiece — Table Land, one of
                    Asia's largest volcanic plateaus.
                  </p>
                  <p>
                    It's an easy hill station to visit without a car-heavy
                    itinerary — most viewpoints and the town centre are
                    walkable or a short taxi ride apart, making it a relaxed
                    counterpoint to Maharashtra's more demanding treks.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🍓</span> Mahabaleshwar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[{ icon: "📍", label: "State", value: "Maharashtra, India" }, { icon: "🏔️", label: "Elevation", value: "~1,353 m" }, { icon: "🌡️", label: "Best Time", value: "Sep – May" }, { icon: "✈️", label: "Nearest Airport", value: "Pune (PNQ)" }, { icon: "🍓", label: "Strawberry Season", value: "Mar – May" }, { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹10,000" }].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Mahabaleshwar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Sep – Feb", emoji: "🍂", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Post-monsoon greenery gives way to cool, clear winter weather (10–25°C), ideal for viewpoint visits and fort climbs." },
                      { season: "Mar – May", emoji: "🍓", color: "bg-orange-50 border-orange-200", mood: "Strawberry season", text: "Fresh strawberries at farms and stalls make this a favourite window, though daytime temperatures climb into the high 20s and 30s." },
                      { season: "Jun – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — scenic but foggy", text: "Heavy rain and thick fog reduce visibility at viewpoints and make ghat roads slower and riskier to drive, though the hills turn dramatically green." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late September to November, for clear post-monsoon views without the strawberry-season crowds.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mahabaleshwar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Pune Airport (PNQ) is the nearest, roughly 120 km away, followed by a scenic drive up NH4 and the Wai ghat road.</li>
                    <li><strong>By Train:</strong> The nearest major railway station is Pune Junction (~120 km); Wathar is a smaller, closer station (~60 km) with limited connections.</li>
                    <li><strong>By Road:</strong> ~120 km (3–3.5 hrs) from Pune and ~260 km (5–6 hrs) from Mumbai — the final stretch up the Western Ghats is winding but well-maintained.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Fog can settle over the ghat road quickly in monsoon and early winter mornings — drive this stretch in daylight if possible and keep headlights on.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Western Ghats viewpoint near Mahabaleshwar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Venna Lake:</strong> A boating lake in the town centre, popular for a relaxed hour of paddle-boating and lakeside snacking.</li>
                    <li><strong>Arthur's Seat:</strong> Nicknamed the "Queen of Points," this cliffside viewpoint offers one of the region's most dramatic drops into the Konkan valley below.</li>
                    <li><strong>Kate's Point & Elephant's Head Point:</strong> Two more standout viewpoints, the latter named for a rock formation resembling an elephant's head and trunk.</li>
                    <li><strong>Mahabaleshwar Temple:</strong> An ancient Shiva temple near the source of the Krishna River, where the river is said to begin as a trickle from a stone cow's mouth.</li>
                    <li><strong>Pratapgad Fort:</strong> Built by Chhatrapati Shivaji Maharaj in the 1650s, this hilltop fort (~24 km away) is one of Maharashtra's most historically significant, with sweeping Sahyadri views from its ramparts.</li>
                    <li><strong>Mapro Garden:</strong> A strawberry-and-cream institution on the road to Panchgani, with a farm shop, café, and jam/squash factory outlet.</li>
                    <li><strong>Panchgani's Table Land:</strong> A vast, flat volcanic plateau roughly 19 km away — one of the largest of its kind in Asia — popular for horse rides and paragliding.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,200/night", picks: ["Guesthouses near Main Road", "Budget lodges, Mahabaleshwar town", "MTDC-adjacent stays"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹3,000–₹7,000/night", picks: ["Hill-view resorts", "Cottages near Venna Lake", "Panchgani boutique stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹9,000–₹22,000+/night", picks: ["Valley-view luxury resorts", "Heritage colonial-era hotels", "Private pool villas"] },
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
                  <h2>What to Eat</h2>
                  <ul>
                    <li><strong>Fresh strawberries and cream:</strong> Sold at roadside stalls and Mapro Garden through the peak March–May season.</li>
                    <li><strong>Strawberry jams and squashes:</strong> A popular local souvenir, best bought at Mapro or one of the smaller family-run farm stalls.</li>
                    <li><strong>Maharashtrian thalis:</strong> Widely available in town, a reliable option for a filling vegetarian meal after a day of sightseeing.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Mahabaleshwar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Town & Viewpoints", color: "bg-amber-700", activities: ["Arrive, check in", "Venna Lake boating", "Afternoon: Arthur's Seat and Kate's Point", "Evening: Mapro Garden"] },
                      { day: "Day 2", title: "Pratapgad Fort & Mahabaleshwar Temple", color: "bg-forest-600", activities: ["Morning: Pratapgad Fort", "Afternoon: Mahabaleshwar Temple, source of the Krishna", "Evening: Elephant's Head Point sunset"] },
                      { day: "Day 3", title: "Panchgani & Departure", color: "bg-orange-600", activities: ["Morning: Panchgani's Table Land", "Optional: paragliding or horse ride", "Afternoon: depart via Pune"] },
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
                        {[["Accommodation/night", "₹1,000", "₹4,000", "₹14,000"], ["Food/day", "₹400", "₹1,000", "₹2,200"], ["Local transport per day", "₹300", "₹900", "₹2,500"], ["Activities/entry fees", "₹300", "₹700", "₹1,800"], ["Daily total", "₹2,000", "₹6,600", "₹20,500"], ["3-Day trip total", "₹6,000", "₹19,800", "₹61,500"]].map(([exp, b, m, l], i) => (
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Includes a taxi/car for viewpoint-hopping, which most travellers find worthwhile given the spread-out sights.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Book stays early for weekends and strawberry season:</strong> March–May and holiday weekends see the biggest price jumps.</li>
                    <li><strong>Hire a taxi for the day:</strong> Viewpoints are spread out enough that a shared or private taxi for the day is usually more efficient than individual trips.</li>
                    <li><strong>Drive carefully in fog:</strong> Monsoon and early winter mornings can bring thick fog on the ghat roads.</li>
                    <li><strong>Carry a light jacket even in summer:</strong> Elevation keeps evenings cooler than you'd expect from Maharashtra's plains.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Pratapgad Fort for the historical context and views", "Combine your trip with Panchgani's Table Land", "Buy strawberries and jams directly from farm stalls", "Catch sunset at Elephant's Head Point", "Hire a full-day taxi for efficient viewpoint-hopping"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Drive the ghat road in heavy fog without caution", "Expect clear viewpoint visibility during peak monsoon", "Skip booking ahead during strawberry season weekends", "Pack only summer clothing — evenings stay cool year-round", "Rush all the viewpoints in a single afternoon"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Mahabaleshwar", "Maharashtra", "Panchgani", "Western Ghats", "Strawberries", "India"].map((tag) => <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>)}
              </div>

              <TrekGearRecommendations sections={MAHABALESHWAR_GEAR} destination="Mahabaleshwar" />
              <RelatedPostsGrid currentSlug="mahabaleshwar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="mahabaleshwar-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
