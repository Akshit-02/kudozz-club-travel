// src/app/blog/silchar-travel-guide/page.tsx
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
  title: "Silchar Travel Guide: Gateway to the Barak Valley",
  description:
    "The complete Silchar travel guide. Barak Valley culture, Kachari ruins, Bhuban Hill, connections onward to Mizoram, Tripura, and Manipur, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Silchar travel guide, Barak Valley, Kachari ruins, Bhuban Hill, best time to visit Silchar, how to reach Silchar, Silchar to Mizoram, Silchar to Tripura, Assam Northeast gateway",
  openGraph: {
    title: "Silchar Travel Guide: Gateway to the Barak Valley",
    description: "The main city of Assam's Bengali-speaking Barak Valley, and the practical gateway to Mizoram, Tripura, and Manipur — the complete guide to Silchar.",
    url: "https://club.kudozz.in/blog/silchar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/udaipur/hero.jpg", width: 1200, height: 630, alt: "City and river scenery representative of Silchar, Assam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silchar Travel Guide: Gateway to the Barak Valley",
    description: "Assam's Barak Valley hub and the practical gateway to Mizoram, Tripura, and Manipur — the complete guide to Silchar.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/silchar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Silchar Travel Guide: Gateway to the Barak Valley",
          description: "The complete Silchar travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/silchar-travel-guide" },
          about: { "@type": "Place", name: "Silchar", address: { "@type": "PostalAddress", addressRegion: "Assam", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Silchar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "What is the Barak Valley?", a: "A geographically distinct sub-region of Assam, separated from the main Brahmaputra Valley by hills, with a predominantly Bengali-speaking population and a genuinely different cultural character from the rest of the state. Silchar is its principal city." },
  { q: "Is Silchar worth visiting as a standalone destination?", a: "It functions mainly as a practical transport hub and gateway city rather than a headline tourist destination in its own right. Most travelers pass through Silchar on their way to Mizoram, Tripura, or Manipur, or use it as a base to explore the Barak Valley's own quieter sites like Bhuban Hill and the Kachari ruins." },
  { q: "How do I reach Silchar?", a: "Silchar Airport (Kumbhirgram, IXS) has decent connectivity given the city's role as a regional hub. It's also a well-connected railway station, with road access via NH6 and NH27." },
  { q: "How do I travel onward from Silchar to Mizoram, Tripura, or Manipur?", a: "Silchar is the standard gateway city for road and, in some cases, air connections onward to all three neighbouring states — check current flight and road options for your specific destination before finalizing plans." },
  { q: "What is Bhuban Hill?", a: "A hill near Silchar with an associated Shiva temple, popular as a pilgrimage and nature spot for a short outing from the city." },
  { q: "What is the best time to visit Silchar?", a: "October to March offers the most comfortable weather for sightseeing and onward travel." },
  { q: "What is the budget for a trip to Silchar?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,500 a day, reflecting its role as a practical stopover city rather than a resort destination." },
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
  { id: "introduction", title: "Why Silchar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Silchar", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SILCHAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a transit-hub city and onward Northeast travel",
    emoji: "🧳",
    items: [
      { name: "Comfortable Travel Backpack", description: "Silchar is primarily a transit point for onward Northeast India travel, so a practical, easy-to-carry bag matters.", price: "₹1,999", rating: 4.4, reviews: "5.8k", image: "🎒", affiliateUrl: amazonSearchUrl("travel+backpack+40l"), tag: "Transit essential", tagColor: "bg-amber-100 text-amber-700", why: "Given Silchar's role as a gateway city, most visitors are moving on quickly to Mizoram, Tripura, or Manipur." },
      { name: "Power Bank", description: "Useful for long onward road journeys to neighbouring states where charging points can be sparse.", price: "₹999", rating: 4.4, reviews: "6.5k", image: "🔋", affiliateUrl: amazonSearchUrl("power+bank+10000mah+travel"), tag: "Travel essential", tagColor: "bg-sky-100 text-sky-700", why: "Onward road trips from Silchar into hill states can run long with limited charging stops." },
      { name: "Comfortable Walking Shoes", description: "For exploring Bhuban Hill and the Kachari ruins if you have time before continuing onward.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Sightseeing essential", tagColor: "bg-forest-100 text-forest-700", why: "Bhuban Hill involves some walking/climbing to reach the temple area." },
      { name: "Travel Documents Pouch", description: "Given Silchar's role as a gateway to states with occasional permit or ID-check requirements.", price: "₹399", rating: 4.3, reviews: "3.2k", image: "📄", affiliateUrl: amazonSearchUrl("travel+document+organizer+pouch"), tag: "Transit essential", tagColor: "bg-purple-100 text-purple-700", why: "Keeping documents organized helps at road checkpoints common on Northeast India routes." },
    ],
  },
];

export default function SilcharGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/udaipur/hero.jpg" alt="City and river scenery representative of Silchar, Assam" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Silchar", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Silchar", "Barak Valley", "Destination Guide", "Assam"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Silchar Travel Guide: Gateway to the Barak Valley
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The main city of Assam's Bengali-speaking Barak Valley, and the practical gateway to Mizoram, Tripura, and Manipur.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Silchar, Assam" },
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
                  <h2>Why Silchar?</h2>
                  <p>
                    <strong>Silchar</strong> is the principal city of the <strong>Barak Valley</strong> — a distinct sub-region of Assam, geographically separated from the main Brahmaputra Valley by hills, with a predominantly Bengali-speaking population and a genuinely different cultural character from the rest of the state. It's a real, locally significant distinction worth knowing before you arrive expecting the same culture and language as Guwahati or Upper Assam.
                  </p>
                  <p>
                    For most travelers, though, Silchar's real importance is logistical: it's the practical transport hub and gateway city for onward travel into Mizoram, Tripura, and Manipur — a genuinely important fact for planning a wider Northeast India route.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🧳</span> Silchar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Assam, India" },
                        { icon: "🗺️", label: "Region", value: "Barak Valley" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Kumbhirgram (IXS)" },
                        { icon: "🧭", label: "Role", value: "Gateway to Mizoram, Tripura, Manipur" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Silchar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry, and comfortable for city sightseeing and onward road travel into neighbouring hill states." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot and humid", text: "Warmer, more humid conditions — still workable but less pleasant for extended outdoor time." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain can affect road conditions on onward routes into the hills — build in extra buffer time." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most reliable window for both city sightseeing and onward road connections to neighbouring states.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Silchar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Silchar Airport (Kumbhirgram, IXS) has decent connectivity given the city's regional hub role.</li>
                    <li><strong>By Train:</strong> Silchar has a well-connected railway station.</li>
                    <li><strong>By Road:</strong> Road access via NH6 and NH27, also the standard route onward into Mizoram, Tripura, and Manipur.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Check current flight and road connectivity to your specific onward Northeast destination before finalizing your Silchar stopover length.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Silchar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/udaipur/hero.jpg" alt="Cityscape and river scenery around Silchar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Kachari Ruins:</strong> Remains associated with the Dimasa Kachari kingdom, an earlier regional power in the Barak Valley area.</li>
                    <li><strong>Bhuban Hill:</strong> A hill with an associated Shiva temple, a popular short pilgrimage/nature outing from the city.</li>
                    <li><strong>Barak Valley's Bengali-influenced culture and cuisine:</strong> A genuinely distinct regional identity worth experiencing while passing through.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Silchar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,600/night", picks: ["City-centre guesthouses", "Budget business hotels"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Standard business hotels", "Mid-range chain properties"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — this is primarily a transit city, not a luxury destination"] },
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
                  <h2>What to Eat in Silchar</h2>
                  <ul>
                    <li><strong>Barak Valley Bengali cuisine:</strong> A genuinely distinct regional food culture shaped by the valley's Bengali-speaking majority, different from Upper Assam fare.</li>
                    <li><strong>Fish curries:</strong> A staple across Barak Valley meals, reflecting the region's river-fed geography.</li>
                    <li><strong>Standard Assamese thalis:</strong> Also widely available at local restaurants for a broader taste of the state.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Silchar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "City & Kachari Ruins", color: "bg-amber-700", activities: ["Explore central Silchar", "Visit the Kachari ruins", "Try Barak Valley Bengali cuisine for lunch"] },
                      { day: "Afternoon", title: "Bhuban Hill & Onward Prep", color: "bg-forest-600", activities: ["Short trip to Bhuban Hill", "Confirm onward travel arrangements to your next Northeast destination"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000"],
                          ["Food/day", "₹400", "₹900"],
                          ["Local transport per day", "₹300", "₹700"],
                          ["Daily total", "₹1,500", "₹3,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes onward transport to Mizoram, Tripura, or Manipur.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Silchar</h2>
                  <ul>
                    <li><strong>Treat it as a gateway, not a destination:</strong> Most travelers pass through Silchar rather than spending multiple days here.</li>
                    <li><strong>Check onward connectivity early:</strong> Confirm flight/road options to your next Northeast destination before arriving.</li>
                    <li><strong>Try the Barak Valley's distinct Bengali-influenced food:</strong> A genuinely different regional cuisine within Assam.</li>
                    <li><strong>Build in buffer time during monsoon:</strong> Onward hill routes can be affected by heavy rain.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Confirm onward Mizoram/Tripura/Manipur connectivity ahead of time", "Try Barak Valley's distinct Bengali-influenced cuisine", "Visit Bhuban Hill if you have a spare half-day", "Use Silchar as a practical, efficient stopover", "Build extra buffer time for monsoon-season road travel"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect a multi-day resort-style destination", "Skip confirming onward travel logistics", "Assume the same culture/language as the rest of Assam", "Plan tight monsoon-season connections without buffer time", "Overlook the Kachari ruins if you have a spare morning"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Silchar", "Barak Valley", "Assam", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SILCHAR_GEAR} destination="Silchar" />
              <RelatedPostsGrid currentSlug="silchar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="silchar-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
