// src/app/blog/pune-travel-guide/page.tsx
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
  title: "Pune Travel Guide: Shaniwar Wada, Sinhagad & City Guide",
  description:
    "The complete Pune travel guide. Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, Dagdusheth Ganpati Temple, where to stay, what to eat, and a 2-day itinerary through Maharashtra's cultural and IT capital.",
  keywords:
    "Pune travel guide, Shaniwar Wada, Sinhagad Fort, Aga Khan Palace, Dagdusheth Halwai Ganpati Temple, Pune itinerary, best time to visit Pune, how to reach Pune, Pune food guide, misal pav Pune, Koregaon Park, Pune weekend trip, Pune Maharashtra",
  openGraph: {
    title: "Pune Travel Guide: Shaniwar Wada, Sinhagad & City Guide",
    description:
      "A Maratha empire capital turned India's education and IT hub, ringed by hill forts and famous for its food streets — the complete guide to Pune.",
    url: "https://club.kudozz.in/blog/pune-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/chandigarh/hero.jpg", width: 1200, height: 630, alt: "City skyline view representing Pune, Maharashtra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pune Travel Guide: Shaniwar Wada, Sinhagad & City Guide",
    description: "Shaniwar Wada, Sinhagad Fort, and Pune's famous food streets — the complete guide.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/pune-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Pune Travel Guide: Shaniwar Wada, Sinhagad & City Guide",
          description: "The complete Pune travel guide.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/pune-travel-guide" },
          about: { "@type": "Place", name: "Pune", address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Pune Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Pune?", a: "Two days covers the main heritage sites and a fort visit comfortably. Add a third day if you want to explore Koregaon Park's cafe scene or take a day trip to nearby Lonavala." },
  { q: "What is the best time to visit Pune?", a: "October to February is the most comfortable window, with cool, dry weather ideal for fort visits like Sinhagad. Monsoon (June–September) is scenic and popular for weekend fort treks despite the rain." },
  { q: "How do I reach Pune?", a: "Pune International Airport (PNQ) has good domestic connectivity, Pune Junction is a major railway hub, and the Mumbai-Pune Expressway makes the drive from Mumbai around 3 hours." },
  { q: "Is Sinhagad Fort worth visiting?", a: "Yes — it's one of the most popular fort visits near Pune, reachable by a manageable trek or a drive most of the way up, with panoramic Sahyadri views and stalls selling the fort's famous pithla-bhakri and kanda bhaji." },
  { q: "What is Pune famous for?", a: "Pune is known as the cultural capital of Maharashtra and a major education and IT hub, alongside its Maratha empire history — Shaniwar Wada was the seat of the Peshwas who once ruled much of India." },
  { q: "What is the budget for a trip to Pune?", a: "A budget traveller can manage on roughly ₹1,500 a day, a mid-range trip runs closer to ₹4,000 a day, and upscale stays can run ₹9,000+ a day, excluding transport to the city." },
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
  { id: "introduction", title: "Why Pune?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pune", level: 2 },
  { id: "top-attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PUNE_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for fort visits, heritage walks, and Pune's food streets",
    emoji: "🏯",
    items: [
      { name: "Trekking Shoes", description: "The Sinhagad Fort climb involves uneven stone steps and loose gravel — proper grip matters even on the shorter, more popular routes.", price: "₹1,799", rating: 4.5, reviews: "5.9k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+fort+climb"), tag: "Fort-trek essential", tagColor: "bg-red-100 text-red-700", why: "Sinhagad's stone steps and loose gravel sections are easy to slip on in regular sneakers." },
      { name: "Sun Cap & Sunglasses", description: "Both the heritage walk through Shaniwar Wada and the fort climb at Sinhagad offer little shade for stretches at a time.", price: "₹599", rating: 4.3, reviews: "4.2k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+cap+sunglasses+travel"), tag: "Sun protection", tagColor: "bg-amber-100 text-amber-700", why: "Both the fort trail and the old-city heritage walk are largely exposed with little tree cover." },
      { name: "Reusable Water Bottle", description: "Essential for the Sinhagad climb and long city walking days between heritage sites.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Everyday essential", tagColor: "bg-sky-100 text-sky-700", why: "Stalls thin out on the upper stretch of the Sinhagad trail — carrying your own water avoids relying on them." },
      { name: "Compact Crossbody Bag", description: "Handy for navigating crowded areas like Dagdusheth Ganpati Temple and FC Road's busy shopping stretch.", price: "₹799", rating: 4.3, reviews: "5.1k", image: "🎒", affiliateUrl: amazonSearchUrl("compact+crossbody+travel+bag"), tag: "City essential", tagColor: "bg-purple-100 text-purple-700", why: "Pune's busiest markets and temple areas get crowded enough that a secure, close bag is worth it." },
    ],
  },
];

export default function PuneGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/chandigarh/hero.jpg" alt="City skyline view representing Pune, Maharashtra" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Maharashtra", href: "/blog/maharashtra-travel-guide" }, { label: "Pune", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Pune", "Maharashtra", "Shaniwar Wada", "Forts", "Destination Guide"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Pune Travel Guide: Shaniwar Wada, Sinhagad & City Guide
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A Maratha empire capital turned India's education and IT hub, ringed by hill forts and famous for its food streets — the complete guide to Pune.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "14 min read" }, { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Pune, Maharashtra" }, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,600 words" }].map((m) => (
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
                  <h2>Why Pune?</h2>
                  <p>
                    <strong>Pune</strong> carries two identities at once —
                    it was the seat of the Peshwas, the prime ministers who
                    ran the Maratha empire at its 18th-century peak, and today
                    it's one of India's fastest-growing education and IT
                    cities. That combination gives Pune a rare mix: genuine
                    Maratha-era heritage sites within city limits, a huge
                    student population that keeps its food and café scene
                    lively, and a ring of hill forts within easy day-trip
                    distance.
                  </p>
                  <p>
                    Compared to Mumbai, Pune moves at a noticeably calmer
                    pace, with wider streets, more greenery, and a food
                    culture built around misal pav and other Maharashtrian
                    staples rather than beach-side street food. It's an easy
                    add-on to a Lonavala or Mahabaleshwar trip, or a
                    standalone city break in its own right.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏯</span> Pune at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[{ icon: "📍", label: "State", value: "Maharashtra, India" }, { icon: "🏰", label: "Key Site", value: "Shaniwar Wada" }, { icon: "🌡️", label: "Best Time", value: "Oct – Feb" }, { icon: "✈️", label: "Airport", value: "Pune Intl (PNQ)" }, { icon: "🚆", label: "Rail Hub", value: "Pune Junction" }, { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹9,000" }].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Pune</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather (12–28°C), ideal for fort climbs and long heritage walks around the old city." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Temperatures climb past 35°C, making midday sightseeing uncomfortable — plan around early mornings and evenings." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — popular for forts", text: "Green hills and misty fort views draw plenty of weekend trekkers to Sinhagad despite the rain." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to January for the most comfortable citywide sightseeing weather.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Pune</h2>
                  <ul>
                    <li><strong>By Air:</strong> Pune International Airport (PNQ) connects to most major Indian cities and select international routes.</li>
                    <li><strong>By Train:</strong> Pune Junction is a major railway hub with direct trains from across the country, including frequent services to and from Mumbai.</li>
                    <li><strong>By Road:</strong> The Mumbai-Pune Expressway makes the drive from Mumbai (~150 km) around 3 hours; Pune is also well-connected to Nashik, Kolhapur, and other Maharashtra cities.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're combining Pune with Lonavala or Mahabaleshwar, Pune makes a more convenient base than Mumbai given the shorter drive to both.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Attractions in Pune</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/chandigarh/hero.jpg" alt="Heritage city architecture representing Pune" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Shaniwar Wada:</strong> The fortified 18th-century palace that was the seat of the Peshwa rulers — now partly in ruins after a fire, but its grand gate and walls still convey its former scale.</li>
                    <li><strong>Aga Khan Palace:</strong> A grand 1890s palace that later served as a detention site for Mahatma Gandhi and Kasturba Gandhi — today a memorial to India's freedom struggle.</li>
                    <li><strong>Sinhagad Fort:</strong> A hilltop fort roughly 25 km from the city, reachable by a moderate trek or a drive most of the way up, famous for its Maratha-era history and panoramic views.</li>
                    <li><strong>Dagdusheth Halwai Ganpati Temple:</strong> One of Pune's most visited temples, known for its elaborately decorated Ganesh idol and lively atmosphere, especially during Ganesh Chaturthi.</li>
                    <li><strong>Pataleshwar Cave Temple:</strong> A small 8th-century rock-cut Shiva temple carved directly into basalt rock, tucked away in the middle of the city.</li>
                    <li><strong>Parvati Hill Temple:</strong> A hilltop temple complex offering panoramic city views, reached by a short flight of steps.</li>
                    <li><strong>Koregaon Park:</strong> Pune's most fashionable neighbourhood, known for its cafes, restaurants, and nightlife.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹2,000/night", picks: ["Hostels near FC Road", "Budget hotels, Camp area"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹6,000/night", picks: ["Business hotels, Koregaon Park", "Serviced apartments, Kalyani Nagar"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["5-star hotels, Koregaon Park", "Premium business hotels, Kharadi"] },
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
                  <h2>What to Eat in Pune</h2>
                  <ul>
                    <li><strong>Misal Pav:</strong> Pune's signature dish — a spicy sprouted-lentil curry topped with farsan, served with bread rolls, found at legendary local joints across the city.</li>
                    <li><strong>Bakarwadi:</strong> A tightly rolled, sweet-and-spicy snack that's one of Pune's most famous edible souvenirs.</li>
                    <li><strong>Mastani:</strong> A thick, decadent milkshake topped with ice cream and dry fruits — a Pune specialty best had at the shops around Deccan Gymkhana.</li>
                    <li><strong>Irani Cafes & German Bakery:</strong> Old-school cafes serving bun maska, chai, and continental snacks, popular with Pune's large student population.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Pune Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Heritage Pune", color: "bg-amber-700", activities: ["Morning: Shaniwar Wada", "Aga Khan Palace", "Dagdusheth Ganpati Temple", "Evening: Koregaon Park cafes"] },
                      { day: "Day 2", title: "Sinhagad Fort & Old City", color: "bg-forest-600", activities: ["Morning: Sinhagad Fort", "Afternoon: Pataleshwar Cave Temple and Parvati Hill", "Evening: FC Road/JM Road shopping and food"] },
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
                        {[["Accommodation/night", "₹900", "₹3,500", "₹12,000"], ["Food/day", "₹400", "₹900", "₹2,200"], ["Local transport per day", "₹200", "₹600", "₹1,800"], ["Entry fees/activities", "₹200", "₹500", "₹1,200"], ["Daily total", "₹1,700", "₹5,500", "₹17,200"], ["2-Day trip total", "₹3,400", "₹11,000", "₹34,400"]].map(([exp, b, m, l], i) => (
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
                    <li><strong>Start Sinhagad early:</strong> Beat the heat and the weekend crowds by beginning the fort trek in the morning.</li>
                    <li><strong>Traffic builds through the day:</strong> Pune's roads get congested, especially around IT corridors — factor this into your timing.</li>
                    <li><strong>Try local joints over chains:</strong> Pune's misal pav scene is best experienced at long-running local establishments rather than restaurant chains.</li>
                    <li><strong>Combine with nearby hill stations:</strong> Pune is a convenient base for day trips to Lonavala or a longer trip to Mahabaleshwar.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Shaniwar Wada with some background on Peshwa history for context", "Climb Sinhagad early to avoid the midday heat", "Try misal pav at a well-established local joint", "Spend an evening in Koregaon Park's cafe scene", "Use Pune as a base for Lonavala day trips"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt Sinhagad in the midday heat during summer", "Underestimate Pune's traffic when planning your day", "Skip Aga Khan Palace's freedom-struggle history", "Rush the old city heritage walk", "Expect Mumbai-style beach or coastal attractions here"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Pune", "Maharashtra", "Shaniwar Wada", "Sinhagad Fort", "City Guide", "India"].map((tag) => <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>)}
              </div>

              <TrekGearRecommendations sections={PUNE_GEAR} destination="Pune" />
              <RelatedPostsGrid currentSlug="pune-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="pune-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
