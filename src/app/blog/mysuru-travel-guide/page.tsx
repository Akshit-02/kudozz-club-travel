// src/app/blog/mysuru-travel-guide/page.tsx
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
  title: "Mysuru Travel Guide: Mysore Palace, Dasara & City Guide",
  description:
    "The complete Mysuru travel guide. Mysore Palace, Dasara festival, Chamundi Hill, Brindavan Gardens, Devaraja Market, where to stay, best time to visit, and a full 2-day itinerary through Karnataka's royal city.",
  keywords:
    "Mysuru travel guide, Mysore travel guide, Mysore Palace, Mysuru Dasara, Chamundi Hill, Brindavan Gardens, best time to visit Mysuru, how to reach Mysuru, Mysuru itinerary, Mysore silk",
  openGraph: {
    title: "Mysuru Travel Guide: Mysore Palace, Dasara & City Guide",
    description: "A Wodeyar-dynasty palace lit by nearly 100,000 bulbs every evening, and a ten-day Dasara festival that turns the whole city into a procession — the complete guide to Mysuru.",
    url: "https://club.kudozz.in/blog/mysuru-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/hero.jpg", width: 1200, height: 630, alt: "Golden-toned palace architecture representative of Mysuru, Karnataka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mysuru Travel Guide: Mysore Palace, Dasara & City Guide",
    description: "A Wodeyar-dynasty palace and a ten-day Dasara procession — the complete guide to Mysuru.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/mysuru-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Mysuru Travel Guide: Mysore Palace, Dasara & City Guide",
          description: "The complete Mysuru travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/mysuru-travel-guide" },
          about: { "@type": "Place", name: "Mysuru", address: { "@type": "PostalAddress", addressRegion: "Karnataka", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Mysuru Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Mysuru?", a: "Two days covers the palace, Chamundi Hill, and Brindavan Gardens comfortably. Add a day if you're visiting during Dasara, since crowds and queues run much longer then." },
  { q: "What is the best time to visit Mysuru?", a: "October to February is generally most comfortable. If you want to see Dasara itself, plan for October (dates follow the lunar calendar and shift year to year, so verify current dates), but expect very large crowds." },
  { q: "How do I reach Mysuru?", a: "Mysuru Airport has limited flights; most travelers fly into Bengaluru and drive roughly 150km (about 3 hours) by road, or take the well-connected train from Bengaluru." },
  { q: "When is the Mysore Palace illuminated?", a: "The palace is lit up every Sunday evening and on special occasions, most spectacularly throughout the Dasara festival period — verify current timing before your visit." },
  { q: "Is Mysuru a good day trip from Bengaluru?", a: "It's possible as a very long day trip, but an overnight stay lets you catch the Sunday evening illumination and see Chamundi Hill and Brindavan Gardens without rushing." },
  { q: "What is the budget for a trip to Mysuru?", a: "A budget traveler can manage on roughly ₹1,700 a day, a mid-range trip closer to ₹4,200 a day. A 2-day trip totals roughly ₹3,400 on a budget and ₹8,400 mid-range, excluding transport to the region." },
  { q: "What should I buy in Mysuru?", a: "Mysore silk sarees and sandalwood products (soap, incense) are the classic souvenirs, widely available at shops around the city and Devaraja Market." },
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
  { id: "introduction", title: "Why Mysuru?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mysuru", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const MYSURU_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for palace visits, hilltop temples, and festival crowds",
    emoji: "🏰",
    items: [
      { name: "Comfortable Walking Shoes", description: "Mysore Palace's grounds and Chamundi Hill's steps both call for sturdy, comfortable footwear.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "City essential", tagColor: "bg-amber-100 text-amber-700", why: "Chamundi Hill's steps and the palace's large grounds add up over a full day." },
      { name: "Modest Temple-Appropriate Clothing", description: "Chamundi Hill Temple and other religious sites expect modest, covered clothing.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Mysuru's key sites include active temples with expected dress standards." },
      { name: "Camera", description: "Between the illuminated palace, hilltop views, and Brindavan Gardens, this is a genuinely photogenic city.", price: "—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+travel+camera"), tag: "Photography essential", tagColor: "bg-sky-100 text-sky-700", why: "The Sunday evening palace illumination alone is worth capturing well." },
      { name: "Reusable Water Bottle", description: "For a full day of walking between the palace, market, and hilltop temple.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Mysuru's sightseeing spans a genuinely large area on foot." },
    ],
  },
];

export default function MysuruGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Golden-toned palace architecture representative of Mysuru, Karnataka" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Mysuru", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Mysuru", "Mysore Palace", "Heritage", "Karnataka"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Mysuru Travel Guide: Mysore Palace, Dasara & City Guide
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A Wodeyar-dynasty palace lit by nearly 100,000 bulbs every evening, and a ten-day Dasara festival that turns the whole city into a procession.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Mysuru, Karnataka" },
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
                  <h2>Why Mysuru?</h2>
                  <p>
                    <strong>Mysuru</strong>, historically known as Mysore, was the capital of the Wodeyar dynasty and remains one of India's most genteel, planned cities — a deliberate contrast to Bengaluru's fast pace, roughly 150km away. Its centrepiece, <strong>Mysore Palace</strong>, is one of India's most-visited monuments, and every Sunday evening the whole structure is lit up with tens of thousands of bulbs.
                  </p>
                  <p>
                    The city's biggest event is <strong>Mysuru Dasara</strong>, a ten-day festival with roots in royal celebration, culminating in a grand procession featuring a bejeweled elephant carrying the deity through the streets — one of Karnataka's most significant cultural events.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏰</span> Mysuru at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Karnataka, India" },
                        { icon: "🏰", label: "Key Site", value: "Mysore Palace" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "🚆", label: "From Bengaluru", value: "~150km, ~3hrs" },
                        { icon: "🎉", label: "Signature Event", value: "Mysuru Dasara" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,700 – ₹4,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Mysuru</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather for walking the palace grounds and Chamundi Hill." },
                      { season: "Oct (Dasara)", emoji: "🎉", color: "bg-purple-50 border-purple-200", mood: "Peak festival — very crowded", text: "The full Dasara procession is a spectacle, but expect large crowds and premium accommodation pricing — book well ahead." },
                      { season: "Mar – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Warmer weather makes long walking days more tiring, though sights remain fully open." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to February for comfortable sightseeing, or specifically during Dasara if you don't mind the crowds and want the full festival spectacle.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mysuru</h2>
                  <ul>
                    <li><strong>By Air:</strong> Mysuru Airport has limited flights; most travelers fly into Bengaluru instead.</li>
                    <li><strong>By Train:</strong> A well-connected railway station with regular services from Bengaluru.</li>
                    <li><strong>By Road:</strong> About 150km from Bengaluru, roughly 3 hours — a popular weekend road trip.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Time your visit for a Sunday to catch the Mysore Palace evening illumination — one of the city's genuine highlights.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Mysuru</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/hero.jpg" alt="Palace architecture in Mysuru" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Mysore Palace:</strong> The city's centrepiece, the seat of the Wodeyar dynasty, illuminated with tens of thousands of lights every Sunday evening.</li>
                    <li><strong>Chamundi Hill:</strong> A hilltop temple overlooking the city, reachable by road or a long flight of steps, with a large Nandi statue along the way.</li>
                    <li><strong>Brindavan Gardens:</strong> Illuminated musical fountain gardens at the KRS Dam, a short drive from the city.</li>
                    <li><strong>Devaraja Market:</strong> A bustling traditional market for flowers, spices, and produce, good for a slice of everyday city life.</li>
                    <li><strong>St. Philomena's Church:</strong> A Neo-Gothic cathedral, one of the largest churches in India.</li>
                    <li><strong>Mysuru Zoo:</strong> One of India's oldest zoos, a popular family stop.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Mysuru</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Budget hotels near the palace", "Guesthouses in the city centre"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹5,000/night", picks: ["Heritage-style mid-range hotels", "Business hotels near the railway station"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹15,000+/night", picks: ["Heritage palace-style luxury hotels", "Premium resorts on the city outskirts"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Book well ahead if visiting during Dasara — accommodation fills up fast and prices climb significantly.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Mysuru</h2>
                  <ul>
                    <li><strong>Mysore Pak:</strong> A dense, ghee-rich sweet that originated in the city's royal kitchens and remains a classic souvenir.</li>
                    <li><strong>Mysore Masala Dosa:</strong> A distinctive spiced-chutney variant of the classic South Indian dosa.</li>
                    <li><strong>Filter coffee:</strong> Widely available at traditional South Indian eateries across the city.</li>
                    <li><strong>Devaraja Market snacks:</strong> A good spot for quick local bites while browsing the market.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Mysuru Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Palace & City Core", color: "bg-amber-700", activities: ["Morning: Mysore Palace tour", "Afternoon: Devaraja Market and St. Philomena's Church", "Evening: Sunday illumination (if timing aligns)"] },
                      { day: "Day 2", title: "Chamundi Hill & Brindavan Gardens", color: "bg-forest-600", activities: ["Morning: Chamundi Hill Temple", "Afternoon: Mysuru Zoo", "Evening: Brindavan Gardens fountain show"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,200", "₹9,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          ["Local transport per day", "₹300", "₹700", "₹1,800"],
                          ["Daily total", "₹1,700", "₹4,200", "₹10,500"],
                          ["2-Day trip total", "₹3,400", "₹8,400", "₹21,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Dasara-period pricing runs notably higher.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Mysuru</h2>
                  <ul>
                    <li><strong>Time a Sunday visit:</strong> For the palace's weekly evening illumination.</li>
                    <li><strong>Book ahead for Dasara:</strong> Accommodation and transport fill up fast during the festival period.</li>
                    <li><strong>Dress modestly at Chamundi Hill:</strong> It's an active temple site.</li>
                    <li><strong>Bargain respectfully at Devaraja Market:</strong> Standard local market etiquette applies.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Time your visit for a Sunday evening illumination", "Book Dasara-period stays well in advance", "Dress modestly at Chamundi Hill", "Buy Mysore silk and sandalwood as souvenirs", "Combine with Brindavan Gardens in the evening"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit during Dasara without booking accommodation ahead", "Wear beachwear-style clothing at Chamundi Hill", "Skip the palace's evening illumination", "Rush the palace grounds — they reward a slower visit", "Assume Dasara dates are fixed — they follow the lunar calendar"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Mysuru", "Mysore Palace", "Karnataka", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MYSURU_GEAR} destination="Mysuru" />
              <RelatedPostsGrid currentSlug="mysuru-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="mysuru-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
