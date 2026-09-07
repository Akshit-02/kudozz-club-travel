// src/app/blog/deoghar-travel-guide/page.tsx
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
  title: "Deoghar Travel Guide: Baidyanath Temple & Jyotirlinga Pilgrimage",
  description:
    "The complete Deoghar travel guide. Baidyanath Temple, the Shravani Mela, Nandan Pahar, Tapovan, where to stay, best time to visit, and practical planning for one of India's most important Shiva pilgrimage sites.",
  keywords:
    "Deoghar travel guide, Baidyanath Temple, Baba Baidyanath Dham, Jyotirlinga, Shravani Mela, Nandan Pahar, best time to visit Deoghar, how to reach Deoghar, Deoghar pilgrimage, Jharkhand temple town",
  openGraph: {
    title: "Deoghar Travel Guide: Baidyanath Temple & Jyotirlinga Pilgrimage",
    description: "One of the 12 Jyotirlingas and among India's most important Shiva pilgrimage sites, especially during the Shravani Mela — the complete guide to Deoghar.",
    url: "https://club.kudozz.in/blog/deoghar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Temple town skyline representative of Deoghar, Jharkhand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deoghar Travel Guide: Baidyanath Temple & Jyotirlinga Pilgrimage",
    description: "One of the 12 Jyotirlingas and among India's most important Shiva pilgrimage sites — the complete guide to Deoghar.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/deoghar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Deoghar Travel Guide: Baidyanath Temple & Jyotirlinga Pilgrimage",
          description: "The complete Deoghar travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/deoghar-travel-guide" },
          about: { "@type": "Place", name: "Deoghar", address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Deoghar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Deoghar?", a: "One to two days covers Baidyanath Temple, Nandan Pahar, and Tapovan comfortably. Add a day if combining with a Trikut Hills day trip." },
  { q: "What is Baidyanath Temple?", a: "Baba Baidyanath Dham is one of the 12 Jyotirlingas and one of India's most significant Shiva pilgrimage sites, with a temple complex that includes 21 additional shrines within its precinct." },
  { q: "What is the Shravani Mela?", a: "A massive annual month-long pilgrimage during the Hindu month of Shravan, when pilgrims (kanwariyas) carry holy Ganga water on foot roughly 100km from Sultanganj in Bihar to Deoghar to offer at the temple. It draws enormous crowds — verify current-year dates before planning around it." },
  { q: "How do I reach Deoghar?", a: "Deoghar Airport (DGH) has growing connectivity, Jasidih Junction is the main railway station, and the town is well connected by road." },
  { q: "What is the best time to visit Deoghar?", a: "As a year-round pilgrimage site, Deoghar is always active, but October to March is most comfortable weather-wise. Shravan month (roughly July–August per the lunar calendar) sees by far the largest crowds." },
  { q: "What is the budget for a trip to Deoghar?", a: "A budget traveler can manage on roughly ₹1,500 a day using dharamshala-style pilgrim accommodation, a mid-range trip closer to ₹3,800 a day. A 2-day trip totals roughly ₹3,000 on a budget and ₹7,600 mid-range." },
  { q: "Can I combine Deoghar with other Jharkhand destinations?", a: "Yes — Trikut Hills is a short, popular day trip from Deoghar, and it can also be combined with a broader Jharkhand itinerary via Ranchi." },
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
  { id: "introduction", title: "Why Deoghar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Deoghar", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DEOGHAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple queues and pilgrimage-town practicalities",
    emoji: "🛕",
    items: [
      { name: "Comfortable Walking Shoes", description: "Long queue standing at Baidyanath Temple, especially outside Shravan month, calls for genuinely comfortable footwear you can slip off easily at entry.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Temple essential", tagColor: "bg-amber-100 text-amber-700", why: "Queue times can run long even on an ordinary day, let alone during festival season." },
      { name: "Modest Cotton Clothing", description: "Deoghar is an active pilgrimage town — modest dress is expected throughout, not just inside the temple itself.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+cotton+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "This is one of India's most significant Shiva pilgrimage sites — respectful dress matters here more than at a leisure destination." },
      { name: "Small Bag for Shoes/Valuables", description: "Useful for the queue and temple entry process, where shoes are left outside and phones/valuables need somewhere secure.", price: "₹299", rating: 4.3, reviews: "3.1k", image: "🎒", affiliateUrl: amazonSearchUrl("small+crossbody+travel+bag"), tag: "Practical essential", tagColor: "bg-sky-100 text-sky-700", why: "Keeping shoes and valuables secure in a crowded temple queue is a genuine practical concern." },
      { name: "Light Shawl / Stole", description: "Doubles as a head covering where expected and as a light layer for early-morning temple visits.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧣", affiliateUrl: amazonSearchUrl("cotton+shawl+travel"), tag: "Temple essential", tagColor: "bg-forest-100 text-forest-700", why: "A simple shawl covers several practical needs at once during temple visits." },
    ],
  },
];

export default function DeogharGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Temple town skyline representative of Deoghar, Jharkhand" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Deoghar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Deoghar", "Baidyanath Temple", "Heritage", "Jharkhand"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Deoghar Travel Guide: Baidyanath Temple & Jyotirlinga Pilgrimage
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              One of the 12 Jyotirlingas and among India's most important Shiva pilgrimage sites, especially during the Shravani Mela.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Deoghar, Jharkhand" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Deoghar?</h2>
                  <p>
                    <strong>Deoghar</strong> is built around <strong>Baidyanath Temple</strong> (Baba Baidyanath Dham), one of the 12 Jyotirlingas and one of India's most significant Shiva pilgrimage sites — a sprawling temple complex that includes 21 additional shrines within its precinct. This is a genuine, high-devotion pilgrimage town rather than a leisure destination, and it's worth going in with that framing.
                  </p>
                  <p>
                    Deoghar's biggest annual event is the <strong>Shravani Mela</strong>, a massive month-long pilgrimage during the Hindu month of Shravan, when pilgrims known as kanwariyas carry holy Ganga water on foot roughly 100km from Sultanganj in Bihar to offer at the temple. Outside this period, Deoghar is far quieter and easier to navigate.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Deoghar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "🛕", label: "Key Site", value: "Baidyanath Temple (Jyotirlinga)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Deoghar (DGH)" },
                        { icon: "🚆", label: "Nearest Rail", value: "Jasidih Junction" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Deoghar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Most comfortable — our pick", text: "Cool, dry weather and comparatively quiet queues outside major festival dates." },
                      { season: "Shravan (Jul–Aug)", emoji: "🚶", color: "bg-purple-50 border-purple-200", mood: "Shravani Mela — very heavy crowds", text: "By far the busiest period, with pilgrims arriving on foot from Sultanganj — verify current-year dates before planning around it." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Warmer and less comfortable for extended queue standing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our advice:</strong> Visit outside Shravan month for much shorter queues, unless the Shravani Mela experience itself is your specific reason for going.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Deoghar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Deoghar Airport (DGH) has growing connectivity.</li>
                    <li><strong>By Train:</strong> Jasidih Junction is the main railway station serving Deoghar.</li>
                    <li><strong>By Road:</strong> Well connected by road within Jharkhand and to neighbouring Bihar and West Bengal.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If visiting outside Shravan month, weekday mornings typically mean the shortest queues at Baidyanath Temple.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Deoghar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Temple architecture representative of Deoghar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Baidyanath Temple:</strong> The central Jyotirlinga shrine and the reason most visitors come to Deoghar.</li>
                    <li><strong>Nandan Pahar:</strong> A small hill park with a ropeway, a lighter, more relaxed stop.</li>
                    <li><strong>Tapovan:</strong> A hill with caves historically associated with sages, a quieter spot away from the main temple crowds.</li>
                    <li><strong>Trikut Hills:</strong> A short day trip from Deoghar with a ropeway and hilltop views — see our separate Trikut Hills guide.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Deoghar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Dharamshala-style pilgrim accommodation", "Basic hotels near the temple"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,500/night", picks: ["Private mid-range hotels in town"] },
                      { tier: "Luxury", icon: "✨", range: "₹5,000–₹9,000/night", picks: ["A handful of better-appointed hotels"] },
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
                  <h2>What to Eat in Deoghar</h2>
                  <ul>
                    <li><strong>Prasad and temple-adjacent sweets:</strong> Simple sweets and prasad offerings are widely available near the temple.</li>
                    <li><strong>Litti Chokha:</strong> A regional staple found across Jharkhand and Bihar.</li>
                    <li><strong>Local thalis:</strong> Simple vegetarian meals at eateries around the temple area.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Deoghar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Baidyanath Temple", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Baidyanath Temple darshan", "Afternoon: Nandan Pahar", "Evening: Tapovan"] },
                      { day: "Day 2", title: "Trikut Hills Day Trip", color: "bg-forest-600", activities: ["Morning: drive to Trikut Hills", "Midday: ropeway and hilltop views", "Afternoon: return to Deoghar, departure"] },
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
                          ["Accommodation/night", "₹700", "₹2,200"],
                          ["Food/day", "₹350", "₹800"],
                          ["Local transport per day", "₹300", "₹700"],
                          ["Daily total", "₹1,500", "₹3,800"],
                          ["2-Day trip total", "₹3,000", "₹7,600"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flight/train to the region. Shravan-month accommodation demand pushes prices well above these figures.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Deoghar</h2>
                  <ul>
                    <li><strong>Verify Shravan-month dates:</strong> The Shravani Mela follows the lunar calendar — check current-year dates if trying to time your visit around or away from it.</li>
                    <li><strong>Dress modestly:</strong> This is an active pilgrimage town throughout.</li>
                    <li><strong>Visit on a weekday if avoiding crowds:</strong> Queues are noticeably shorter outside weekends and festival dates.</li>
                    <li><strong>Combine with Trikut Hills:</strong> A natural, easy day-trip pairing.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Dress modestly throughout your visit", "Visit on a weekday for shorter queues", "Verify current Shravani Mela dates if relevant", "Combine with a Trikut Hills day trip", "Carry a small bag for shoes and valuables at temple entry"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Plan a casual leisure visit during peak Shravani Mela without expecting heavy crowds", "Wear beachwear-style or immodest clothing near the temple", "Skip booking accommodation ahead during Shravan month", "Expect nightlife or resort-style infrastructure", "Rush the temple visit — queues need patience"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Deoghar", "Baidyanath Temple", "Jharkhand", "Heritage", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DEOGHAR_GEAR} destination="Deoghar" />
              <RelatedPostsGrid currentSlug="deoghar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="deoghar-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
