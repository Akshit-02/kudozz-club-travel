// src/app/blog/tezpur-travel-guide/page.tsx
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
  title: "Tezpur Travel Guide: The City of Eternal Romance",
  description:
    "The complete Tezpur travel guide. Agnigarh Hill, Da Parbatia ruins, Cole Park, the Brahmaputra riverfront, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Tezpur travel guide, Agnigarh Hill, Da Parbatia ruins, Cole Park Tezpur, City of Eternal Romance, best time to visit Tezpur, how to reach Tezpur, Nameri from Tezpur",
  openGraph: {
    title: "Tezpur Travel Guide: The City of Eternal Romance",
    description: "A riverside town wrapped in Mahabharata legend, ringed by ancient ruins and a hilltop garden overlooking the Brahmaputra — the complete guide to Tezpur.",
    url: "https://club.kudozz.in/blog/tezpur-travel-guide", type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jammu-kashmir/dal.jpg", width: 1200, height: 630, alt: "Riverside town scenery representative of Tezpur, Assam" }],
  },
  twitter: { card: "summary_large_image", title: "Tezpur Travel Guide: The City of Eternal Romance", description: "A riverside town wrapped in Mahabharata legend — the complete guide to Tezpur.", images: ["/images/destinations/jammu-kashmir/dal.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/tezpur-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Tezpur Travel Guide: The City of Eternal Romance",
      description: "The complete Tezpur travel guide.",
      image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/tezpur-travel-guide" },
      about: { "@type": "Place", name: "Tezpur", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Tezpur Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "Why is Tezpur called the City of Eternal Romance?", a: "The nickname comes from a local legend, tied to the Mahabharata era, involving Usha and Aniruddha — traditionally associated with this region and commemorated at sites like Agnigarh Hill." },
  { q: "How many days do I need in Tezpur?", a: "One day covers the city's main sights comfortably. Many travelers combine it with a day or two at Nameri National Park nearby." },
  { q: "What is the best time to visit Tezpur?", a: "October to March offers the most comfortable weather for sightseeing and river views." },
  { q: "How do I reach Tezpur?", a: "Tezpur Airport (Salonibari, TEZ) has limited connectivity. Rangapara is the nearest well-connected railway station, and road access is via NH15." },
  { q: "What is Da Parbatia?", a: "A site featuring one of the oldest surviving carved stone door-frames in Assam, dated to the early Gupta period — a genuinely significant piece of early Assamese sculptural art." },
  { q: "Can I combine Tezpur with Nameri National Park?", a: "Yes — Tezpur is a common stopover en route to Nameri, and the two combine naturally into a 2-day trip." },
  { q: "What is the budget for a trip to Tezpur?", a: "A budget traveler can manage on roughly ₹1,400 a day, a mid-range trip closer to ₹3,800 a day." },
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
  { id: "introduction", title: "Why Tezpur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tezpur", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const TEZPUR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for riverside walks and heritage-ruin stops", emoji: "🏞️",
  items: [
    { name: "Comfortable Walking Shoes", description: "For exploring Agnigarh Hill, Cole Park, and the scattered ruins around town.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Tezpur's sights are spread across town, with genuine walking between several of them." },
    { name: "Camera", description: "For the Brahmaputra sunset views from Agnigarh Hill and the ancient carved ruins at Da Parbatia.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-sky-100 text-sky-700", why: "Agnigarh's river views and Da Parbatia's carvings are genuinely photogenic." },
    { name: "Sun Hat", description: "Several of Tezpur's sights involve time outdoors in direct sun.", price: "₹399", rating: 4.3, reviews: "4.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Comfort essential", tagColor: "bg-forest-100 text-forest-700", why: "Hilltop and riverside viewpoints offer little shade." },
    { name: "Reusable Water Bottle", description: "For a full day of sightseeing between spread-out sites.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-purple-100 text-purple-700", why: "Facilities thin out between Tezpur's more scattered heritage sites." },
  ],
}];

export default function TezpurGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jammu-kashmir/dal.jpg" alt="Riverside town scenery representative of Tezpur, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Tezpur", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Tezpur", "Brahmaputra River", "Destination Guide", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Tezpur Travel Guide: The City of Eternal Romance
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A riverside town wrapped in Mahabharata legend, ringed by ancient ruins and a hilltop garden overlooking the Brahmaputra.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Tezpur, Assam" },
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
                  <h2>Why Tezpur?</h2>
                  <p>
                    <strong>Tezpur</strong> carries the nickname "City of Eternal Romance" (or the "Cultural Capital of Assam"), tied to a local legend from the Mahabharata era involving Usha and Aniruddha — a romantic mythological story traditionally associated with this stretch of the Brahmaputra.
                  </p>
                  <p>
                    Beyond the legend, Tezpur holds genuine historical weight: Da Parbatia's carved stone door-frame is one of the oldest surviving pieces of sculptural art in Assam, and the town sits as a natural stopover en route to Nameri National Park and further into Arunachal Pradesh (cross-reference the Nameri guide).
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏞️</span> Tezpur at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🏞️", label: "Key Site", value: "Agnigarh Hill" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Rangapara" },
                        { icon: "🌊", label: "River", value: "Brahmaputra" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Tezpur</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for sightseeing and Brahmaputra viewpoints." },
                      { season: "Apr – Jun", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Warm, pre-monsoon", text: "Warmer but still workable, with clear river views." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain and a swollen Brahmaputra — not ideal for sightseeing." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most comfortable window for both the city and a river-view sunset at Agnigarh Hill.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Tezpur</h2>
                  <ul>
                    <li><strong>By Air:</strong> Tezpur Airport (Salonibari, TEZ) has limited connectivity.</li>
                    <li><strong>By Train:</strong> Rangapara is the nearest well-connected railway station.</li>
                    <li><strong>By Road:</strong> Well connected via NH15.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Tezpur with Nameri National Park — they sit close enough together to make a natural 2-day trip.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Tezpur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jammu-kashmir/dal.jpg" alt="Riverside scenery around Tezpur" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Agnigarh Hill:</strong> A hilltop park linked to the Usha-Aniruddha legend, with panoramic views over the Brahmaputra.</li>
                    <li><strong>Da Parbatia:</strong> Ruins featuring one of the oldest surviving carved stone door-frames in Assam, from the early Gupta period.</li>
                    <li><strong>Bamuni Hills:</strong> Scattered ancient temple ruins from a later period.</li>
                    <li><strong>Cole Park (Chitralekha Udyan):</strong> A landscaped town park with two ponds and salvaged ancient stone sculptures on display.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Tezpur</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["City-centre guesthouses", "Budget hotels near the bus stand"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Mid-range city hotels", "Riverside-adjacent stays"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — luxury options are limited in Tezpur itself"] },
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
                  <h2>What to Eat in Tezpur</h2>
                  <ul>
                    <li><strong>Assamese thalis:</strong> Rice, dal, and vegetable dishes at local restaurants.</li>
                    <li><strong>Khar and tenga:</strong> Distinctive Assamese preparations worth seeking out.</li>
                    <li><strong>Pitha:</strong> Traditional rice cakes, a good local snack.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Tezpur Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Heritage & Riverfront", color: "bg-amber-700", activities: ["Morning: Da Parbatia and Bamuni Hills ruins", "Afternoon: Cole Park", "Evening: sunset at Agnigarh Hill"] },
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
                          ["Accommodation/night", "₹900", "₹2,800"],
                          ["Food/day", "₹350", "₹800"],
                          ["Local transport", "₹150", "₹500"],
                          ["Daily total", "₹1,400", "₹3,800"],
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
                  <h2>Essential Travel Tips for Tezpur</h2>
                  <ul>
                    <li><strong>Combine with Nameri:</strong> A natural 2-day pairing given the short distance.</li>
                    <li><strong>Visit Agnigarh Hill at sunset:</strong> The best time for Brahmaputra views.</li>
                    <li><strong>Don't skip Da Parbatia:</strong> A genuinely underrated stop for early Assamese art history.</li>
                    <li><strong>Hire a local driver for the scattered ruins:</strong> Sites are spread across town.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Combine with a Nameri National Park trip", "Catch sunset at Agnigarh Hill", "Visit Da Parbatia for its historical significance", "Hire local transport for the spread-out ruins", "Explore Cole Park's salvaged stone sculptures"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Skip Da Parbatia thinking it's a minor stop", "Visit during heavy monsoon expecting good river views", "Assume all sites are within easy walking distance", "Overlook combining with Nameri given the proximity", "Rely on limited flight connectivity without a backup plan"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Tezpur", "Brahmaputra River", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={TEZPUR_GEAR} destination="Tezpur" />
              <RelatedPostsGrid currentSlug="tezpur-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="tezpur-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
