// src/app/blog/barabar-caves-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, { GearSection } from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Barabar Caves Travel Guide: India's Oldest Rock-Cut Caves",
  description:
    "The complete Barabar Caves travel guide. Lomas Rishi Cave, Ashokan inscriptions, the Ajivika sect, the A Passage to India connection, best time to visit, and a full itinerary.",
  keywords:
    "Barabar Caves travel guide, Lomas Rishi Cave, Ashoka caves Bihar, Ajivika sect caves, A Passage to India Marabar Caves, best time to visit Barabar Caves, how to reach Barabar Caves",
  openGraph: {
    title: "Barabar Caves Travel Guide: India's Oldest Rock-Cut Caves",
    description: "Polished granite caves carved under Emperor Ashoka nearly 2,300 years ago, believed to have inspired the Marabar Caves in A Passage to India — the complete guide to Barabar Caves.",
    url: "https://club.kudozz.in/blog/barabar-caves-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/spiti-valley/spiti-valley.jpg", width: 1200, height: 630, alt: "Rocky arid landscape representative of the Barabar Caves, Bihar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barabar Caves Travel Guide: India's Oldest Rock-Cut Caves",
    description: "Ashokan-era granite caves near Gaya — the complete guide to Barabar Caves.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/barabar-caves-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Barabar Caves Travel Guide: India's Oldest Rock-Cut Caves",
          description: "The complete Barabar Caves travel guide.",
          image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/barabar-caves-travel-guide" },
          about: { "@type": "Place", name: "Barabar Caves", address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Barabar Caves Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How old are the Barabar Caves?", a: "Several of the caves date to the 3rd century BCE, under the reign of Emperor Ashoka, making them among the oldest surviving rock-cut caves in India." },
  { q: "What is the connection to A Passage to India?", a: "The Barabar Caves are widely believed to have inspired the fictional 'Marabar Caves' in E.M. Forster's novel A Passage to India — a well-known literary connection for readers familiar with the book." },
  { q: "How do I reach the Barabar Caves?", a: "Gaya is the nearest airport, about 35km away. Patna is another option. Road access is the standard route to this fairly remote, rural site." },
  { q: "What is the Ajivika sect?", a: "The Ajivikas were a now-extinct ascetic religious tradition contemporary with early Buddhism and Jainism. Some Barabar caves bear inscriptions dedicating them to this sect, making the site a genuinely rare surviving example of Ajivika-associated architecture." },
  { q: "How many days do I need to visit?", a: "Half a day is enough for the caves themselves. Most travelers combine this with a Gaya or Bodh Gaya visit given the relative proximity." },
  { q: "What is special about the caves' interior?", a: "Several caves, notably Lomas Rishi and Sudama, retain a remarkable mirror-like polish on their granite interior walls — an impressive ancient stone-working technique for their age." },
  { q: "What is the budget for a trip to Barabar Caves?", a: "This is a low-cost day-trip destination — a budget traveler can manage on roughly ₹1,000-1,500 for the visit itself, excluding transport from Gaya or Patna." },
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
  { id: "introduction", title: "Why Barabar Caves?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Barabar Caves", level: 2 },
  { id: "top-attractions", title: "The Caves & Their History", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BARABAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for cave exploration and rural site access",
    emoji: "🕳️",
    items: [
      { name: "Torch/Flashlight", description: "Cave interiors are dark and lack electric lighting — essential for seeing the polished walls and any inscriptions clearly.", price: "₹399", rating: 4.4, reviews: "4.1k", image: "🔦", affiliateUrl: amazonSearchUrl("led+torch+flashlight+travel"), tag: "Cave essential", tagColor: "bg-amber-100 text-amber-700", why: "Without a light source, the caves' famous polished interior finish is hard to appreciate fully." },
      { name: "Comfortable Walking Shoes", description: "For navigating the rocky, uneven approach to the caves.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Site essential", tagColor: "bg-forest-100 text-forest-700", why: "The terrain around the granite outcrops is uneven and rocky." },
      { name: "Sun Hat", description: "The site is exposed with little shade around the granite hills.", price: "₹399", rating: 4.3, reviews: "3.5k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Sun-protection essential", tagColor: "bg-sky-100 text-sky-700", why: "Little natural shade exists around the exposed granite outcrops." },
      { name: "Reusable Water Bottle", description: "Facilities are minimal at this rural site — carry enough water for the visit.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Rural-site essential", tagColor: "bg-purple-100 text-purple-700", why: "There are few shops or facilities directly at this remote heritage site." },
    ],
  },
];

export default function BarabarCavesGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Rocky arid landscape representative of the Barabar Caves, Bihar" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Barabar Caves", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Barabar Caves", "Ashoka", "Heritage", "Bihar"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Barabar Caves Travel Guide: India's Oldest Rock-Cut Caves
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Polished granite caves carved under Emperor Ashoka nearly 2,300 years ago, believed to have inspired the Marabar Caves in A Passage to India.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Barabar Caves, Bihar" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Barabar Caves?</h2>
                  <p>
                    The <strong>Barabar Caves</strong> are a small group of rock-cut caves carved into granite hills, widely cited as among the oldest surviving rock-cut caves in India. Several date to the reign of <strong>Emperor Ashoka</strong> in the 3rd century BCE, with some caves bearing inscriptions dedicating them to the <strong>Ajivika sect</strong> — a now-extinct ascetic religious tradition contemporary with early Buddhism and Jainism. Surviving Ajivika-associated sites are genuinely rare, making Barabar historically significant well beyond its modest visitor numbers.
                  </p>
                  <p>
                    The caves are also known for their remarkable interior polish — the granite walls of caves like Lomas Rishi and Sudama retain a mirror-like finish achieved through ancient stone-polishing techniques, a genuinely impressive technical feat for their age. Literature fans may also recognize the site as the widely-believed inspiration for the fictional "Marabar Caves" in E.M. Forster's novel <em>A Passage to India</em>.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🕳️</span> Barabar Caves at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🏛️", label: "Era", value: "3rd century BCE (Ashokan)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Gaya (~35km)" },
                        { icon: "📖", label: "Literary Link", value: "A Passage to India" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹1,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Barabar Caves</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for exploring the exposed granite hillside site." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "The site's limited shade makes a summer visit genuinely uncomfortable." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Rural approach roads can be affected by heavy rain — plan carefully." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most comfortable window for exploring the exposed hillside site.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Barabar Caves</h2>
                  <ul>
                    <li><strong>By Air:</strong> Gaya is the nearest airport, about 35km away.</li>
                    <li><strong>By Road:</strong> Road access from Gaya or Patna is the standard route to this fairly remote, rural site.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Barabar Caves with a Gaya or Bodh Gaya visit — the sites are close enough to fit into a single broader day trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>The Caves & Their History</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/spiti-valley/spiti-valley.jpg" alt="Granite hill terrain around the Barabar Caves" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Lomas Rishi Cave:</strong> Famous for its distinctive carved facade featuring an elephant frieze and an architectural style echoing wooden construction translated into stone.</li>
                    <li><strong>Sudama Cave:</strong> Notable for its remarkably polished granite interior, an impressive ancient stone-working achievement.</li>
                    <li><strong>Ashokan inscriptions:</strong> Several caves bear inscriptions from Emperor Ashoka's reign dedicating them to the Ajivika sect.</li>
                    <li><strong>A Passage to India connection:</strong> The caves are widely believed to have inspired the fictional Marabar Caves in E.M. Forster's novel — a notable literary footnote for readers of the book.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Barabar Caves</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses in Gaya", "Basic hotels near Bodh Gaya"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Mid-range hotels in Gaya or Bodh Gaya"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000+/night", picks: ["Premium hotels in Bodh Gaya (the practical luxury base for this region)"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>There's no accommodation at the caves themselves — base in Gaya or Bodh Gaya and visit as a day trip.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Barabar Caves</h2>
                  <ul>
                    <li><strong>Litti chokha:</strong> Bihar's signature dish, widely available in Gaya.</li>
                    <li><strong>Local thalis:</strong> Simple regional meals at eateries in Gaya or Bodh Gaya.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Barabar Caves Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Caves & History", color: "bg-amber-700", activities: ["Travel from Gaya or Bodh Gaya", "Explore Lomas Rishi and Sudama Caves with a guide", "Learn about the Ajivika inscriptions and A Passage to India connection"] },
                      { day: "Afternoon", title: "Return & Combine", color: "bg-forest-600", activities: ["Return to Gaya or Bodh Gaya", "Combine with other Gaya-area heritage sites (cross-reference the Gaya and Bodh Gaya guides)"] },
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
                          ["Local transport (round trip from Gaya)", "₹500", "₹1,200"],
                          ["Guide fee", "₹300", "₹600"],
                          ["Food", "₹200", "₹500"],
                          ["Half-day total", "₹1,000", "₹2,300"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes accommodation, which is based in Gaya or Bodh Gaya rather than at the caves themselves.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Barabar Caves</h2>
                  <ul>
                    <li><strong>Hire a local guide:</strong> Context on the Ajivika history and cave architecture significantly enriches the visit.</li>
                    <li><strong>Bring a torch:</strong> Cave interiors are dark and have no electric lighting.</li>
                    <li><strong>Combine with Gaya or Bodh Gaya:</strong> This makes the most efficient use of the day given the caves' remote location.</li>
                    <li><strong>Carry water:</strong> Facilities are minimal at the site itself.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Hire a local guide for historical context", "Bring a torch for cave interiors", "Combine with a Gaya or Bodh Gaya trip", "Carry sufficient water", "Wear sturdy shoes for the rocky approach"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit without a torch expecting lit interiors", "Expect facilities or shops at the site", "Skip hiring a guide and miss the historical context", "Visit during peak summer heat without sun protection", "Plan an overnight stay at the caves — base elsewhere"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Barabar Caves", "Ashoka", "Bihar", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BARABAR_GEAR} destination="Barabar Caves" />
              <RelatedPostsGrid currentSlug="barabar-caves-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="barabar-caves-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
