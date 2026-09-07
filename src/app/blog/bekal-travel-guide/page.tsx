// src/app/blog/bekal-travel-guide/page.tsx
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
  title: "Bekal Travel Guide: Fort, Beach & North Kerala's Quiet Coast",
  description:
    "The complete Bekal travel guide. Bekal Fort, Bekal Beach, Kappil Beach, where to stay, best time to visit, and a full itinerary through North Kerala's quietest stretch of coastline.",
  keywords:
    "Bekal travel guide, Bekal Fort, Bekal Beach, Kasaragod, North Kerala beaches, best time to visit Bekal, how to reach Bekal, Kerala fort beach",
  openGraph: {
    title: "Bekal Travel Guide: Fort, Beach & North Kerala's Quiet Coast",
    description: "Kerala's largest fort rising straight out of the Arabian Sea, on a coastline that still sees a fraction of Kovalam's crowds — the complete guide to Bekal.",
    url: "https://club.kudozz.in/blog/bekal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jaisalmer/fort.jpg", width: 1200, height: 630, alt: "Coastal fort representative of Bekal, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bekal Travel Guide: Fort, Beach & North Kerala's Quiet Coast",
    description: "Kerala's largest fort rising straight out of the Arabian Sea — the complete guide to Bekal.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/bekal-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Bekal Travel Guide: Fort, Beach & North Kerala's Quiet Coast",
          description: "The complete Bekal travel guide.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bekal-travel-guide" },
          about: { "@type": "Place", name: "Bekal", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Bekal Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Bekal?", a: "One to two days covers the fort and beach comfortably. Most travelers pair Bekal with Kannur (about 55km away) for a fuller North Kerala trip since neither destination alone fills more than a couple of days." },
  { q: "What is the best time to visit Bekal?", a: "November to February is the driest, most comfortable window, though North Kerala's coastal climate is fairly mild year-round compared to inland areas." },
  { q: "How do I reach Bekal?", a: "The nearest airports are Mangalore (IXE, Karnataka, ~55km) and Kannur (CNN, ~55km). Kanhangad or Kasaragod railway stations are close by on the Konkan coastal line." },
  { q: "Is Bekal Fort worth visiting?", a: "Yes — it's the largest and best-preserved fort in Kerala, dramatically positioned on a headland with excellent sunset views over the Arabian Sea." },
  { q: "Is Bekal crowded like South Kerala beaches?", a: "No — North Kerala receives far fewer tourists than the Kochi-Munnar-Alleppey circuit, and Bekal's beaches are noticeably quieter than Kovalam or Varkala." },
  { q: "What is the budget for a trip to Bekal?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,800 a day. Infrastructure and dining options are more limited than South Kerala, so set expectations accordingly." },
  { q: "Can I combine Bekal with other North Kerala destinations?", a: "Yes — Kannur is a natural pairing at about 55km away, and both can be covered in a single North Kerala loop." },
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
  { id: "introduction", title: "Why Bekal?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bekal", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BEKAL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for fort ramparts and quiet North Kerala beaches",
    emoji: "🏰",
    items: [
      { name: "Comfortable Walking Shoes", description: "Bekal Fort's ramparts and pathways involve a fair amount of walking on uneven laterite stone.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Fort essential", tagColor: "bg-amber-100 text-amber-700", why: "The fort's stone paths and ramparts reward sturdy, comfortable footwear." },
      { name: "Reef-Safe Sunscreen (SPF 50)", description: "Bekal's beach and fort ramparts both offer long stretches with little shade.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"), tag: "Sun essential", tagColor: "bg-sky-100 text-sky-700", why: "Fort visits often run through the hottest part of the day with minimal shade." },
      { name: "Sun Hat", description: "Useful for both the open fort ramparts and beach time.", price: "₹399", rating: 4.4, reviews: "4.5k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "All-day essential", tagColor: "bg-purple-100 text-purple-700", why: "Shade is limited across most of Bekal's main sights." },
      { name: "Swimwear & Quick-Dry Towel", description: "For Bekal Beach and Kappil Beach, both good for a relaxed swim outside monsoon season.", price: "₹699", rating: 4.4, reviews: "3.9k", image: "🏖️", affiliateUrl: amazonSearchUrl("quick+dry+travel+towel"), tag: "Beach essential", tagColor: "bg-forest-100 text-forest-700", why: "Bekal's beaches are genuinely swimmable outside the monsoon months." },
    ],
  },
];

export default function BekalGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Coastal fort representative of Bekal, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Bekal", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bekal", "Bekal Fort", "Beaches", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bekal Travel Guide: Fort, Beach & North Kerala's Quiet Coast
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Kerala's largest fort rising straight out of the Arabian Sea, on a coastline that still sees a fraction of Kovalam's crowds — everything you need to plan a trip to Bekal.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bekal, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,700 words" },
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
                  <h2>Why Bekal?</h2>
                  <p>
                    <strong>Bekal</strong> centers on the largest and best-preserved fort in Kerala — a circular 17th-century laterite structure dramatically positioned on a headland jutting into the Arabian Sea, once even used as a filming location for a well-known Bollywood song. Beneath the fort walls stretches Bekal Beach, part of a North Kerala coastline that receives a fraction of the tourist traffic of Kovalam or Varkala down south.
                  </p>
                  <p>
                    That relative quiet is Bekal's biggest draw — genuinely uncrowded beaches and a fort with real breathing room, in a region still very much off the mainstream Kerala tourist trail.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏰</span> Bekal at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🏰", label: "Key Site", value: "Bekal Fort" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Mangalore/Kannur (~55km)" },
                        { icon: "🏖️", label: "Character", value: "North Kerala, quiet coast" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bekal</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Nov – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry and comfortable for both fort exploring and beach time." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warmer", text: "Warmer but still manageable given North Kerala's generally milder coastal climate." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavy rain and rough seas make this the least suitable window for beach time." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — the most comfortable, driest window for both the fort and the beach.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bekal</h2>
                  <ul>
                    <li><strong>By Air:</strong> Mangalore (IXE, Karnataka) and Kannur (CNN) are both about 55km away.</li>
                    <li><strong>By Train:</strong> Kanhangad or Kasaragod railway stations are close by on the Konkan coastal line.</li>
                    <li><strong>By Road:</strong> Well connected via NH66.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Pair Bekal with Kannur for a fuller North Kerala trip — neither destination alone fills more than a day or two.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Bekal</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/jaisalmer/fort.jpg" alt="Fort ramparts and coastline near Bekal" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Bekal Fort:</strong> Kerala's largest fort, a circular 17th-century laterite structure with sweeping sea views from the ramparts.</li>
                    <li><strong>Bekal Beach:</strong> The crescent beach right beneath the fort, quieter and less developed than South Kerala's beaches.</li>
                    <li><strong>Kappil Beach:</strong> A quieter alternative beach nearby, good for a calmer swim.</li>
                    <li><strong>Pallikere Beach:</strong> Another nearby stretch worth a visit for those wanting to beach-hop.</li>
                    <li><strong>Bekal Hole Aqua Park:</strong> A family-friendly water park nearby, a lighter add-on for those traveling with kids.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Bekal</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹900–₹2,000/night", picks: ["Basic guesthouses near the fort", "Budget hotels in Kasaragod town"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,000/night", picks: ["Beachfront mid-range resorts", "Fort-view hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium coastal resorts near Bekal"] },
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
                  <h2>What to Eat in Bekal</h2>
                  <ul>
                    <li><strong>Fresh seafood:</strong> Local catch prepared in North Kerala coastal style, distinct from South Kerala's flavors.</li>
                    <li><strong>Kerala thalis:</strong> Widely available at hotels and local eateries around Kasaragod.</li>
                    <li><strong>Malabar biryani:</strong> Common in this part of Kerala given the region's blend of culinary influences.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Bekal Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Fort & Sunset", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: explore Bekal Fort ramparts", "Evening: sunset from the fort walls"] },
                      { day: "Day 2", title: "Beach Day", color: "bg-forest-600", activities: ["Morning: Bekal Beach", "Afternoon: Kappil Beach", "Evening: departure or onward to Kannur"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,200", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport per day", "₹150", "₹500", "₹1,200"],
                          ["Daily total", "₹1,500", "₹3,800", "₹9,500"],
                          ["2-Day trip total", "₹3,000", "₹7,600", "₹19,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Bekal</h2>
                  <ul>
                    <li><strong>Combine with Kannur:</strong> A natural pairing for a fuller North Kerala loop.</li>
                    <li><strong>Catch sunset from the fort walls:</strong> One of the best views in the region.</li>
                    <li><strong>Set realistic expectations:</strong> North Kerala's infrastructure and nightlife are more limited than the south.</li>
                    <li><strong>Carry cash:</strong> Card acceptance is patchier here than in South Kerala's tourist hubs.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Watch sunset from Bekal Fort's ramparts", "Combine with Kannur for a fuller trip", "Try both Bekal Beach and Kappil Beach", "Carry sufficient cash", "Set modest expectations for nightlife/infrastructure"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect South Kerala-level nightlife or crowds", "Rely solely on cards for payment", "Skip Kappil Beach if you want a quieter option", "Visit expecting rough monsoon-season swimming", "Rush the fort visit — the ramparts reward a slow walk"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Bekal", "Bekal Fort", "Beaches", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BEKAL_GEAR} destination="Bekal" />
              <RelatedPostsGrid currentSlug="bekal-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="bekal-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
