// src/app/blog/ahobilam-travel-guide/page.tsx
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
  title: "Ahobilam Travel Guide: The Nine Forms of Lord Narasimha",
  description:
    "The complete Ahobilam travel guide. Lower and Upper Ahobilam, the nine Narasimha shrines, Prahladavarada Temple, where to stay, best time to visit, and a full itinerary through this Nallamala forest pilgrimage site.",
  keywords:
    "Ahobilam travel guide, Nava Narasimha temples, Lower Ahobilam, Upper Ahobilam, Prahladavarada Temple, best time to visit Ahobilam, how to reach Ahobilam, Nallamala forest, Andhra Pradesh pilgrimage",
  openGraph: {
    title: "Ahobilam Travel Guide: The Nine Forms of Lord Narasimha",
    description: "Nine temples scattered across a forested hill range, each dedicated to a different form of Lord Narasimha, deep in the Nallamala forest — the complete guide to Ahobilam.",
    url: "https://club.kudozz.in/blog/ahobilam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/hampi/virupaksha.jpg", width: 1200, height: 630, alt: "Temple stone carving representative of Ahobilam, Andhra Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahobilam Travel Guide: The Nine Forms of Lord Narasimha",
    description: "Nine forest temples, each dedicated to a different form of Lord Narasimha — the complete guide to Ahobilam.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/ahobilam-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Ahobilam Travel Guide: The Nine Forms of Lord Narasimha",
      description: "The complete Ahobilam travel guide.",
      image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/ahobilam-travel-guide" },
      about: { "@type": "Place", name: "Ahobilam", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Ahobilam Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Ahobilam?", a: "One day covers Lower Ahobilam and its main Prahladavarada Temple comfortably. A second day is needed if you want to attempt the Upper Ahobilam trek to reach more of the nine shrines." },
  { q: "What is the best time to visit Ahobilam?", a: "October to March offers the most comfortable temperatures for both temple visits and any trekking to the upper shrines. Summer heat (April–June) makes the forest trek genuinely difficult." },
  { q: "How do I reach Ahobilam?", a: "The nearest airports are Tirupati and Kadapa, both a real driving distance away. Nandyal is the nearest railway station, with road access via the forest route being the standard approach from there." },
  { q: "What are the Nine Forms of Narasimha at Ahobilam?", a: "Ahobilam is traditionally home to nine temples (Nava Narasimha), each dedicated to a different manifestation of Lord Narasimha, Vishnu's half-man, half-lion avatar. They're split between the more accessible Lower Ahobilam and the harder-to-reach Upper Ahobilam." },
  { q: "Do I need to visit all nine shrines?", a: "No — most travelers focus on the main Prahladavarada Temple at Lower Ahobilam, which is far more accessible. Visiting all nine requires serious time, fitness, and often a local guide for the Upper Ahobilam forest trek." },
  { q: "Is Ahobilam crowded like Tirupati?", a: "No — Ahobilam sees considerably lower general-tourist footfall than Tirupati (a short distance away), making it a quieter pilgrimage experience, though it can still get busy during major festival periods." },
  { q: "What is the budget for a trip to Ahobilam?", a: "A budget traveler can manage on roughly ₹1,200 a day, a mid-range trip closer to ₹3,000 a day. Accommodation options are more limited and simpler here than at bigger pilgrimage towns." },
];

function FAQSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    })}} />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Ahobilam?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ahobilam", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const AHOBILAM_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for the Upper Ahobilam forest trek and temple visits", emoji: "🛕",
  items: [
    { name: "Sturdy Trekking Shoes", description: "Essential if attempting the Upper Ahobilam trail, which crosses uneven forest terrain to reach the remaining shrines.", price: "₹2,999", rating: 4.5, reviews: "6.2k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+forest+trail"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "The Upper Ahobilam path is genuinely uneven forest terrain, not a paved pilgrim route." },
    { name: "Modest Cotton Clothing", description: "Required for temple entry at both Lower and Upper Ahobilam's active shrines.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "These are active, living pilgrimage sites, not tourist monuments." },
    { name: "2L Hydration Bottle", description: "Facilities thin out fast past Lower Ahobilam — carrying enough water matters for the forest trek.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"), tag: "Trek essential", tagColor: "bg-sky-100 text-sky-700", why: "There are few reliable water sources between the lower and upper shrine clusters." },
    { name: "Insect Repellent", description: "The dense Nallamala forest setting brings a real mosquito and insect presence, especially near dusk.", price: "₹199", rating: 4.3, reviews: "4.2k", image: "🦟", affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"), tag: "Forest essential", tagColor: "bg-forest-100 text-forest-700", why: "Ahobilam sits within genuine forest cover, unlike most temple towns." },
  ],
}];

export default function AhobilamGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Temple stone carving representative of Ahobilam, Andhra Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Ahobilam", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Ahobilam", "Narasimha Temple", "Heritage", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Ahobilam Travel Guide: The Nine Forms of Lord Narasimha
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Nine temples scattered across a forested hill range, each dedicated to a different form of Lord Narasimha, deep in the Nallamala forest.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Ahobilam, Andhra Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
              ].map((m) => (
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
                  <h2>Why Ahobilam?</h2>
                  <p>
                    <strong>Ahobilam</strong> is one of Vaishnavite Hinduism's genuinely significant pilgrimage sites, tucked into the Nallamala forest range — the same broader forest tract as Srisailam, though Ahobilam is a distinct destination in its own right. Tradition holds that nine temples here, collectively called <strong>Nava Narasimha</strong>, each honor a different manifestation of Lord Narasimha, Vishnu's half-man, half-lion avatar.
                  </p>
                  <p>
                    The site splits into two clusters: <strong>Lower Ahobilam</strong>, home to the main and most accessible Prahladavarada Temple, and <strong>Upper Ahobilam</strong>, where reaching the remaining shrines demands a genuine forest trek — visited only by the most dedicated pilgrims. Ahobilam sees far fewer general tourists than nearby Tirupati, making it a quieter, more contemplative pilgrimage experience.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Ahobilam at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Prahladavarada Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Nandyal" },
                        { icon: "🌲", label: "Setting", value: "Nallamala Forest" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Ahobilam</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for both Lower Ahobilam temple visits and any Upper Ahobilam trekking." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — trekking difficult", text: "Forest heat makes the Upper Ahobilam trail genuinely tough; stick to Lower Ahobilam if visiting now." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Lush forest greenery but slippery forest paths — caution needed on any upper-shrine trek." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the only realistic window for a serious attempt at the Upper Ahobilam trek.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Ahobilam</h2>
                  <ul>
                    <li><strong>By Air:</strong> Tirupati or Kadapa airports, both a real driving distance away.</li>
                    <li><strong>By Train:</strong> Nandyal is the nearest railway station.</li>
                    <li><strong>By Road:</strong> The forest route from Nandyal is the standard approach for virtually all visitors.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Hire a car with a driver familiar with the Ahobilam forest route rather than relying on limited public transport this deep into the forest.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Ahobilam</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/hampi/virupaksha.jpg" alt="Temple architecture around Ahobilam" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Prahladavarada Temple (Lower Ahobilam):</strong> The main, most accessible shrine and the focus of most visitors' trips.</li>
                    <li><strong>Upper Ahobilam shrines:</strong> The remaining Nava Narasimha temples, reached via a demanding forest trail — only for well-prepared, dedicated pilgrims.</li>
                    <li><strong>Nallamala forest surroundings:</strong> Genuine dense forest scenery that sets Ahobilam apart from more built-up pilgrimage towns.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Ahobilam</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Temple trust guesthouses", "Basic pilgrim lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,000/night", picks: ["Simple private hotels near Lower Ahobilam"] },
                      { tier: "Luxury", icon: "✨", range: "Very limited", picks: ["Options are genuinely limited — most travelers base in Nandyal for anything beyond basic pilgrim stays"] },
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
                  <h2>What to Eat in Ahobilam</h2>
                  <ul>
                    <li><strong>Temple prasadam:</strong> Simple vegetarian offerings available at the main temple.</li>
                    <li><strong>Andhra thalis:</strong> Straightforward vegetarian meals at the small local eateries near Lower Ahobilam.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Ahobilam Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Lower Ahobilam", color: "bg-amber-700", activities: ["Arrive, check in", "Visit Prahladavarada Temple", "Explore the temple town at a relaxed pace"] },
                      { day: "Day 2", title: "Upper Ahobilam (optional)", color: "bg-forest-600", activities: ["Early start for the forest trek", "Visit as many upper shrines as time/fitness allow", "Return, departure prep"] },
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
                          ["Food/day", "₹250", "₹600"],
                          ["Local transport per day", "₹300", "₹700"],
                          ["Daily total", "₹1,200", "₹3,000"],
                          ["2-Day trip total", "₹2,400", "₹6,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Ahobilam</h2>
                  <ul>
                    <li><strong>Focus on Lower Ahobilam unless well-prepared:</strong> The Upper Ahobilam trek genuinely requires fitness and, ideally, a local guide.</li>
                    <li><strong>Dress modestly:</strong> Expected at all shrines throughout the site.</li>
                    <li><strong>Carry sufficient water and supplies:</strong> Facilities are minimal past Lower Ahobilam.</li>
                    <li><strong>Hire a car with a driver familiar with the route:</strong> Public transport into the forest is limited.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Prahladavarada Temple at Lower Ahobilam", "Hire a local guide for the Upper Ahobilam trek", "Dress modestly throughout", "Carry sufficient water and snacks", "Arrange transport with a driver who knows the route"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt the Upper Ahobilam trek unprepared", "Visit in peak summer heat expecting a comfortable trek", "Expect extensive dining/accommodation infrastructure", "Rely on public transport deep into the forest route", "Skip carrying water assuming shops along the way"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Ahobilam", "Narasimha Temple", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={AHOBILAM_GEAR} destination="Ahobilam" />
              <RelatedPostsGrid currentSlug="ahobilam-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="ahobilam-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
