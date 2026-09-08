// src/app/blog/tirupati-travel-guide/page.tsx
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
  title: "Tirupati Travel Guide: Tirumala Temple, Darshan & How to Reach",
  description:
    "The complete Tirupati travel guide. Tirumala Venkateswara Temple, darshan types and booking, laddu prasadam, how to reach, where to stay, and a full itinerary.",
  keywords:
    "Tirupati travel guide, Tirumala temple, Tirupati darshan booking, Tirumala laddu, best time to visit Tirupati, how to reach Tirupati, Tirupati Balaji, Seeghra darshan, Tirupati itinerary",
  openGraph: {
    title: "Tirupati Travel Guide: Tirumala Temple, Darshan & How to Reach",
    description: "The world's most visited and richest pilgrimage temple, atop a hill where millions queue every year for a few seconds before the deity — the complete guide to Tirupati.",
    url: "https://club.kudozz.in/blog/tirupati-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/blogs/andhra-pradesh/tirupati/tirumala-venkateswara-temple-gopuram-tirupati.webp", width: 1600, height: 1067, alt: "The white gopuram of Tirumala Venkateswara Temple rising against the forested Tirumala hills" }],
  },
  twitter: { card: "summary_large_image", title: "Tirupati Travel Guide: Tirumala Temple, Darshan & How to Reach", description: "Darshan types, booking, and everything you need to plan a visit to Tirumala — the complete guide to Tirupati.", images: ["/images/blogs/andhra-pradesh/tirupati/tirumala-venkateswara-temple-gopuram-tirupati.webp"] },
  alternates: { canonical: "https://club.kudozz.in/blog/tirupati-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Tirupati Travel Guide: Tirumala Temple, Darshan & How to Reach",
      description: "The complete Tirupati travel guide.",
      image: "https://club.kudozz.in/images/blogs/andhra-pradesh/tirupati/tirumala-venkateswara-temple-gopuram-tirupati.webp",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/tirupati-travel-guide" },
      about: { "@type": "Place", name: "Tirupati", address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Tirupati Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Tirupati?", a: "One full day covers a standard darshan visit; two days gives buffer time for long queues and a look at Tirupati town's secondary sights without rushing." },
  { q: "What is the best time to visit Tirupati?", a: "The temple operates year-round, so any time works logistically. October–March brings the most comfortable weather. Brahmotsavam, a major annual festival around September–October, draws especially heavy crowds — verify current-year dates if you'd rather avoid or attend it specifically." },
  { q: "How do I book Tirumala darshan?", a: "The TTD (Tirumala Tirupati Devasthanams) trust runs several darshan types, from free general darshan (often a very long wait) to paid options like Seeghra Darshan (faster, but still not instant). Verify the current official booking process before your visit, as procedures and slot systems change." },
  { q: "How do I reach Tirupati?", a: "Tirupati Airport (TIR) serves the town directly, it's a major railway junction, and it's well connected by road via NH716. Buses and taxis run the hill road up to Tirumala; private vehicles are also permitted with registration." },
  { q: "What is the Tirumala laddu?", a: "A trademarked, GI-tagged sweet prasadam offered at the temple — genuinely one of very few prasadam items in India with legal protected status. It's distributed to pilgrims as part of the darshan experience." },
  { q: "Is there a dress code at Tirumala?", a: "Yes — modest, traditional dress is expected. Follow the temple's current dress code guidelines, which are enforced at entry points." },
  { q: "What is the budget for a trip to Tirupati?", a: "A budget traveler can manage on roughly ₹1,200 a day using TTD's subsidized accommodation options, a mid-range trip closer to ₹3,000 a day. Paid darshan passes and any premium accommodation add to this." },
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
  { id: "introduction", title: "Why Tirupati?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tirupati", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TIRUPATI_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for temple queues and darshan day", emoji: "🛕",
  items: [
    { name: "Comfortable Loose Clothing", description: "Following the temple's traditional dress code while staying comfortable through long queue waits.", price: "₹799", rating: 4.4, reviews: "3.8k", image: "👕", affiliateUrl: amazonSearchUrl("modest+traditional+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Dress code compliance is enforced at entry — loose, modest clothing avoids any last-minute issues." },
    { name: "Comfortable Walking Shoes", description: "Darshan queues can mean hours of standing and walking through the temple complex.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Queue essential", tagColor: "bg-amber-100 text-amber-700", why: "Long queue waits are the defining feature of a Tirumala visit — footwear comfort matters more here than almost anywhere else." },
    { name: "Small Cross-Body Bag", description: "Many items are restricted inside the temple — a minimal bag for essentials only avoids repeated security checks.", price: "₹599", rating: 4.3, reviews: "3.1k", image: "🎒", affiliateUrl: amazonSearchUrl("small+crossbody+travel+bag"), tag: "Security-friendly", tagColor: "bg-sky-100 text-sky-700", why: "Simplifying what you carry speeds up security screening at temple checkpoints." },
    { name: "Reusable Water Bottle", description: "Essential for the long queue waits, especially outside the cooler winter months.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Queue essential", tagColor: "bg-forest-100 text-forest-700", why: "Dehydration during multi-hour queue waits is a genuine, common complaint among pilgrims." },
  ],
}];

export default function TirupatiGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/blogs/andhra-pradesh/tirupati/tirumala-venkateswara-temple-gopuram-tirupati.webp" alt="The white gopuram of Tirumala Venkateswara Temple rising against the forested Tirumala hills" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Tirupati", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Tirupati", "Tirumala", "Heritage", "Andhra Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Tirupati Travel Guide: Tirumala Temple, Darshan & How to Reach
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The world's most visited and richest pilgrimage temple, atop a hill where millions queue every year for a few seconds before the deity.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Tirupati, Andhra Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,100 words" },
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
                  <h2>Why Tirupati?</h2>
                  <p>
                    <strong>Tirumala Venkateswara Temple</strong>, on the hills above Tirupati town, is widely cited as the world's most-visited pilgrimage site by annual footfall — and among the wealthiest religious institutions globally, with donations, gold reserves, and endowments that are genuinely substantial and well-documented. The temple sits atop the Saptagiri (seven hills), giving the deity here the alternate name "Lord of the Seven Hills."
                  </p>
                  <p>
                    The scale of daily operation here is unlike almost any other religious site in the world. Understanding the darshan system before you arrive — rather than after standing in the wrong queue for three hours — makes a genuine difference to how your visit goes.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🛕</span> Tirupati at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Tirumala Venkateswara Temple" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Tirupati (TIR)" },
                        { icon: "🍬", label: "Famous For", value: "Trademarked laddu prasadam" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Tirupati</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Comfortable temperatures for the long queue waits and walking involved in a temple visit." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Significant heat makes outdoor queue time genuinely tougher — carry extra water and sun protection." },
                      { season: "Sept – Oct", emoji: "🎊", color: "bg-purple-50 border-purple-200", mood: "Brahmotsavam season", text: "A major annual festival draws especially heavy crowds — verify current-year dates if you want to attend or avoid it." },
                      { season: "Year-round", emoji: "🛕", color: "bg-sky-50 border-sky-200", mood: "The temple never closes", text: "As an active daily pilgrimage site, Tirumala operates year-round regardless of season." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March, for the most comfortable weather during what can already be a physically demanding day of queuing.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tirupati</h2>
                  <ul>
                    <li><strong>By Air:</strong> Tirupati Airport (TIR) serves the town directly.</li>
                    <li><strong>By Train:</strong> Tirupati is a major railway junction with strong connections across South India.</li>
                    <li><strong>By Road:</strong> Well connected via NH716; buses and taxis run the hill road up to Tirumala, and private vehicles are permitted with registration.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Verify the current official TTD darshan booking process before you travel — procedures and slot systems change, and arriving with an outdated plan wastes real time.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Tirupati</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/blogs/andhra-pradesh/tirupati/maha-dwaram-gopuram-close-up-tirumala.webp" alt="Close-up of the ornately carved Maha Dwaram gopuram tower at Tirumala Venkateswara Temple" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Tirumala Venkateswara Temple darshan:</strong> The central pilgrimage experience — free general darshan involves long waits, while paid Seeghra Darshan offers a faster but still not instant option.</li>
                    <li><strong>Laddu prasadam:</strong> A trademarked, GI-tagged sweet offering, one of very few prasadam items in India with legal protected status.</li>
                    <li><strong>Head-tonsuring tradition:</strong> Many pilgrims shave their heads as a voluntary act of devotion — respectful to observe, not expected of every visitor.</li>
                    <li><strong>Sri Venkateswara Zoological Park:</strong> A secondary attraction in Tirupati town itself, good for a lower-key half-day.</li>
                    <li><strong>Koti Linga Temple and other Tirupati town sites:</strong> Smaller temples and sights worth a look if extending your stay beyond a single darshan day.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Tirupati</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,500/night", picks: ["TTD subsidized guesthouses", "Basic hotels near the temple entrance"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["TTD premium cottages", "Private mid-range hotels in Tirupati town"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹15,000+/night", picks: ["Premium hotel chains in Tirupati town", "High-end TTD guest accommodation"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>The TTD trust operates a wide range of accommodation from free/subsidized to premium, alongside private hotels — book TTD stays through their official channel well ahead.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Tirupati</h2>
                  <ul>
                    <li><strong>Tirumala laddu:</strong> The temple's signature trademarked prasadam, distributed as part of the darshan experience.</li>
                    <li><strong>Andhra thalis:</strong> Genuinely spicy regional vegetarian meals widely available in Tirupati town.</li>
                    <li><strong>TTD-run canteens:</strong> Simple, affordable meals available for pilgrims near the temple complex.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Tirupati Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Arrival & Darshan Prep", color: "bg-amber-700", activities: ["Arrive, check in near Tirumala or Tirupati town", "Confirm darshan slot/pass per current TTD process", "Rest and prepare for a full queue day"] },
                      { day: "Day 2", title: "Tirumala Darshan", color: "bg-forest-600", activities: ["Early morning: proceed to darshan queue", "Complete darshan and collect laddu prasadam", "Afternoon: explore Tirupati town sights", "Departure"] },
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
                          ["Accommodation/night", "₹700", "₹3,000", "₹9,000"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Darshan pass (if paid option)", "₹0–300", "₹300", "₹300+"],
                          ["Daily total", "₹1,200", "₹3,000", "₹9,500"],
                          ["2-Day trip total", "₹2,400", "₹6,000", "₹19,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Darshan pass pricing/availability changes — verify current TTD rates.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Tirupati</h2>
                  <ul>
                    <li><strong>Book darshan slots in advance:</strong> Use the official TTD process where possible — verify current procedures before traveling.</li>
                    <li><strong>Expect significant queue time:</strong> Even paid darshan options don't guarantee a quick visit.</li>
                    <li><strong>Follow the dress code:</strong> Modest, traditional dress is expected and enforced at entry.</li>
                    <li><strong>Carry only essentials:</strong> Many items are restricted inside the temple complex.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Verify current darshan booking procedures before you go", "Follow the temple's traditional dress code", "Carry water and snacks for queue waits", "Budget real time — don't plan a rushed visit", "Try the trademarked laddu prasadam"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a quick visit even with paid darshan", "Carry restricted items into the temple", "Arrive without confirming current booking procedures", "Wear non-compliant clothing expecting exceptions", "Underestimate the physical demands of queue time"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Tirupati", "Tirumala Temple", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TIRUPATI_GEAR} destination="Tirupati" />
              <RelatedPostsGrid currentSlug="tirupati-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="tirupati-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
