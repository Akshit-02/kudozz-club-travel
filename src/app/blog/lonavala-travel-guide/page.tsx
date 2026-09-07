// src/app/blog/lonavala-travel-guide/page.tsx
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
  title: "Lonavala Travel Guide: Waterfalls, Caves & Monsoon Getaway",
  description:
    "The complete Lonavala travel guide. Bhushi Dam, Karla & Bhaja Caves, Tiger's Leap, Rajmachi Fort, where to stay, what to eat, and a 2-day itinerary for Mumbai and Pune's favourite monsoon escape.",
  keywords:
    "Lonavala travel guide, Bhushi Dam, Karla Caves, Bhaja Caves, Tiger's Leap, Lonavala chikki, Khandala, Rajmachi Fort trek, Lonavala itinerary, best time to visit Lonavala, how to reach Lonavala from Mumbai, how to reach Lonavala from Pune, Lonavala weekend trip, Lonavala waterfalls monsoon",
  openGraph: {
    title: "Lonavala Travel Guide: Waterfalls, Caves & Monsoon Getaway",
    description:
      "Mist-wrapped ghats two hours from Mumbai and Pune, ancient rock-cut caves, and waterfalls that roar to life every monsoon — the complete guide to Lonavala.",
    url: "https://club.kudozz.in/blog/lonavala-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty green hills of the Western Ghats near Lonavala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lonavala Travel Guide: Waterfalls, Caves & Monsoon Getaway",
    description: "Bhushi Dam, Karla & Bhaja Caves, and waterfalls at their peak — the complete guide to Lonavala.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/lonavala-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Lonavala Travel Guide: Waterfalls, Caves & Monsoon Getaway",
          description: "The complete Lonavala travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/lonavala-travel-guide" },
          about: { "@type": "Place", name: "Lonavala", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Lonavala Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Lonavala?", a: "Two days is enough to cover Bhushi Dam, the viewpoints, and either Karla or Bhaja Caves at an easy pace, with time left for chikki shopping. A day trip from Mumbai or Pune also works if you focus on just one or two spots." },
  { q: "What is the best time to visit Lonavala?", a: "Monsoon (June–September) is when Lonavala is at its most iconic — waterfalls in full flow and every hillside green — though it also draws the biggest weekend crowds. October to February offers pleasant weather and better trekking conditions with far fewer people." },
  { q: "How do I reach Lonavala from Mumbai and Pune?", a: "Lonavala is about 100 km (2–2.5 hrs) from Mumbai and 65 km (1.5 hrs) from Pune via the Mumbai-Pune Expressway. It's also directly on the Mumbai-Pune railway line, with frequent trains making it one of the easiest weekend trips from either city." },
  { q: "Is Lonavala worth visiting outside the monsoon?", a: "Yes — while the waterfalls are best in monsoon, winter (Oct–Feb) is better for trekking to Rajmachi Fort, visiting Karla and Bhaja Caves comfortably, and avoiding the peak monsoon crowds and slippery viewpoints." },
  { q: "What is Lonavala famous for besides waterfalls?", a: "Lonavala chikki (a jaggery-and-nut brittle) is a famous local specialty sold at shops throughout town, alongside the 2nd-century BCE Buddhist rock-cut Karla and Bhaja Caves nearby." },
  { q: "What is the budget for a trip to Lonavala?", a: "A budget traveller can manage on roughly ₹1,200 a day, a mid-range trip runs closer to ₹3,500 a day, and a resort stay can run ₹8,000+ a day. A 2-day trip totals roughly ₹2,400 on a budget and ₹7,000 mid-range, excluding transport to the region." },
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
  { id: "introduction", title: "Why Lonavala?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lonavala", level: 2 },
  { id: "top-attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const LONAVALA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for waterfalls, caves, and monsoon trails",
    emoji: "🌧️",
    items: [
      { name: "Grip Trekking Sandals", description: "Bhushi Dam's rock steps and the caves' uneven stone floors get slippery in monsoon — proper grip footwear matters more here than almost anywhere else in Maharashtra.", price: "₹899", rating: 4.4, reviews: "5.4k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+sandals+grip+monsoon"), tag: "Monsoon essential", tagColor: "bg-sky-100 text-sky-700", why: "Slips on wet rock at Bhushi Dam are the single most common minor injury reported by visitors." },
      { name: "Waterproof Poncho", description: "Lonavala's monsoon showers arrive fast and heavy — a poncho covers both you and a daypack, unlike an umbrella on windy viewpoints.", price: "₹399", rating: 4.3, reviews: "4.1k", image: "🧥", affiliateUrl: amazonSearchUrl("waterproof+poncho+rain"), tag: "Monsoon essential", tagColor: "bg-forest-100 text-forest-700", why: "Umbrellas are nearly useless at the exposed, windy viewpoints Lonavala is known for." },
      { name: "Waterproof Phone Pouch", description: "Useful at Bhushi Dam and the monsoon waterfalls, where a soaked phone is one of the most common regrets travellers report.", price: "₹299", rating: 4.3, reviews: "8.9k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch"), tag: "Waterfall essential", tagColor: "bg-purple-100 text-purple-700", why: "Bhushi Dam's cascading steps are a magnet for phone drops and water damage every monsoon." },
      { name: "Quick-Dry Daypack", description: "A light bag for carrying snacks, a change of clothes, and valuables between the caves and the dam without soaking through.", price: "₹899", rating: 4.4, reviews: "4.6k", image: "🎒", affiliateUrl: amazonSearchUrl("quick+dry+daypack+20l"), tag: "Everyday essential", tagColor: "bg-amber-100 text-amber-700", why: "Canvas or leather bags soak through fast in monsoon rain — quick-dry synthetic packs hold up far better." },
    ],
  },
];

export default function LonavalaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Misty green hills of the Western Ghats near Lonavala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Maharashtra", href: "/blog/maharashtra-travel-guide" }, { label: "Lonavala", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Lonavala", "Maharashtra", "Waterfalls", "Caves", "Monsoon", "Destination Guide"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Lonavala Travel Guide: Waterfalls, Caves & Monsoon Getaway
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Mist-wrapped ghats two hours from Mumbai and Pune, 2,000-year-old rock-cut caves, and waterfalls that roar to life every monsoon — the complete guide to Lonavala.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" }, { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Lonavala, Maharashtra" }, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,200 words" }].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={m.d} /></svg>{m.text}
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
                  <h2>Why Lonavala?</h2>
                  <p>
                    Perched in the Sahyadri hills along the Mumbai-Pune
                    Expressway, <strong>Lonavala</strong> is the weekend
                    getaway both cities reach for — close enough for a
                    day trip, green enough to feel like a real escape. Its
                    twin hill town, Khandala, sits just a few kilometres away
                    and is often visited together with Lonavala on the same
                    trip.
                  </p>
                  <p>
                    The region's real draw is monsoon: from June to September,
                    the surrounding ghats turn a deep green and dozens of
                    seasonal waterfalls appear on the hillsides, including the
                    cascades at Bhushi Dam that draw crowds every weekend.
                    Beyond the waterfalls, Lonavala sits beside two of India's
                    oldest Buddhist rock-cut cave complexes — Karla and Bhaja
                    — both over 2,000 years old.
                  </p>
                  <p>
                    Lonavala works equally well as a rushed day trip or a
                    relaxed two-day break, and its easy expressway and rail
                    access make it one of the most low-effort escapes from
                    either Mumbai or Pune.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌿</span> Lonavala at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[{ icon: "📍", label: "State", value: "Maharashtra, India" }, { icon: "💧", label: "Key Site", value: "Bhushi Dam" }, { icon: "🌡️", label: "Best Time", value: "Jun – Sep (falls), Oct – Feb (comfort)" }, { icon: "✈️", label: "Nearest Airport", value: "Pune (PNQ)" }, { icon: "🚆", label: "Rail Access", value: "Mumbai-Pune line" }, { icon: "💰", label: "Budget/Day", value: "₹700 – ₹4,000" }].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Lonavala</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Peak — waterfalls at their best", text: "The Sahyadris turn lush green and every seasonal waterfall runs full, including Bhushi Dam. Expect heavy weekend crowds and slippery trails." },
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best for comfort and trekking", text: "Dry, pleasant weather (15–28°C) with fewer crowds, ideal for the Rajmachi Fort trek and unhurried cave visits, though the waterfalls run dry." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Hot and dry", text: "Temperatures climb past 35°C with little to see at the seasonal waterfalls — the least recommended window for a visit." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> Late July to August for the fullest waterfalls, or November for a quieter, comfortable trip with clear viewpoints.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Lonavala</h2>
                  <ul>
                    <li><strong>By Road:</strong> ~65 km (1.5 hrs) from Pune and ~100 km (2–2.5 hrs) from Mumbai via the Mumbai-Pune Expressway — one of India's best-maintained highways.</li>
                    <li><strong>By Train:</strong> Lonavala railway station sits directly on the Mumbai-Pune line, with frequent express and local trains from both cities — often faster than the road on a busy weekend.</li>
                    <li><strong>By Air:</strong> Pune Airport (PNQ) is the nearest, roughly 65 km away.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> During heavy monsoon rain, the expressway can see landslide-related delays — check road conditions before a Mumbai–Lonavala drive and keep the train as a backup.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Attractions in Lonavala</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Green Sahyadri hills near Lonavala in monsoon" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bhushi Dam:</strong> Lonavala's most popular monsoon spot, where overflow water cascades down stepped rocks — hugely crowded on weekends but the defining Lonavala experience.</li>
                    <li><strong>Tiger's Leap & Lion's Point:</strong> Cliffside viewpoints overlooking the valley, best visited near sunrise or sunset for clear views and cooler temperatures.</li>
                    <li><strong>Karla Caves:</strong> A 2nd-century BCE Buddhist rock-cut complex with India's largest and best-preserved chaitya (prayer hall), reached via a short uphill walk.</li>
                    <li><strong>Bhaja Caves:</strong> A quieter, older group of 22 rock-cut caves close to Karla, with simpler carvings and far fewer crowds.</li>
                    <li><strong>Rajmachi Fort:</strong> A moderate trek through forest and grassland to twin hilltop forts with sweeping Sahyadri views — best attempted outside peak monsoon.</li>
                    <li><strong>Della Adventure Park:</strong> A commercial adventure park with zip-lining, go-karting, and other activities — a good option for families and thrill-seekers.</li>
                    <li><strong>Lonavala Chikki shopping:</strong> The town's main street is lined with shops selling the local jaggery-and-nut brittle — a classic souvenir to carry home.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Lonavala</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹2,000/night", picks: ["Lodges near the railway station", "Backpacker stays, main market", "Homestays on the outskirts"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Resorts near Bhushi Dam", "Hillside cottages, Khandala", "Business hotels, town centre"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹20,000+/night", picks: ["Valley-view resort villas", "Private pool cottages", "Boutique hillside retreats"] },
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
                  <h2>What to Eat in Lonavala</h2>
                  <ul>
                    <li><strong>Lonavala Chikki:</strong> The town's signature sweet — jaggery-and-nut brittle sold at dozens of shops along the main road, with peanut, cashew, and til (sesame) varieties.</li>
                    <li><strong>Vada Pav & Misal Pav:</strong> Standard Maharashtrian street food, widely available at stalls near the market and railway station.</li>
                    <li><strong>Corn on the cob & bhutta:</strong> A monsoon-season street favourite, sold roadside near the viewpoints and Bhushi Dam.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Lonavala Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Waterfalls & Viewpoints", color: "bg-amber-700", activities: ["Morning: Bhushi Dam", "Tiger's Leap and Lion's Point viewpoints", "Afternoon: chikki shopping in town", "Evening: relax at your stay"] },
                      { day: "Day 2", title: "Caves & Departure", color: "bg-forest-600", activities: ["Morning: Karla Caves", "Bhaja Caves (short drive away)", "Afternoon: Della Adventure Park (optional) or a short Rajmachi trail", "Depart"] },
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
                        {[["Accommodation/night", "₹800", "₹3,000", "₹12,000"], ["Food/day", "₹350", "₹800", "₹1,800"], ["Local transport per day", "₹150", "₹500", "₹1,500"], ["Activities/entry fees", "₹200", "₹600", "₹1,500"], ["Daily total", "₹1,500", "₹4,900", "₹16,800"], ["2-Day trip total", "₹3,000", "₹9,800", "₹33,600"]].map(([exp, b, m, l], i) => (
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Weekend prices run noticeably higher than weekdays.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Lonavala</h2>
                  <ul>
                    <li><strong>Avoid weekends if you can:</strong> Bhushi Dam and the main road get heavily congested on Saturdays and Sundays, especially in monsoon.</li>
                    <li><strong>Watch footing near the dam:</strong> Wet rocks at Bhushi Dam are slippery and have led to serious accidents — stick to areas with railings.</li>
                    <li><strong>Check monsoon road conditions:</strong> The expressway can see landslide-related closures in heavy rain.</li>
                    <li><strong>Carry cash for chikki shops and local stalls:</strong> Card acceptance is inconsistent outside larger resorts.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Bhushi Dam early morning to beat crowds", "Compare Karla and Bhaja Caves on the same day", "Try at least one Rajmachi trail if visiting Oct–Feb", "Buy chikki directly from established local shops", "Time a monsoon visit for the fullest waterfalls"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Step past railings near Bhushi Dam's rock cascades", "Drive the expressway in heavy monsoon rain without checking conditions", "Expect waterfalls to be flowing outside monsoon", "Skip Bhaja Caves just because Karla is more famous", "Rely on cards at smaller local shops"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Lonavala", "Maharashtra", "Waterfalls", "Karla Caves", "Monsoon", "India"].map((tag) => <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>)}
              </div>

              <TrekGearRecommendations sections={LONAVALA_GEAR} destination="Lonavala" />
              <RelatedPostsGrid currentSlug="lonavala-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="lonavala-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
