// src/app/blog/vagamon-travel-guide/page.tsx
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
  title: "Vagamon Travel Guide: Meadows, Pine Forests & Paragliding",
  description:
    "The complete Vagamon travel guide. Rolling meadows, the Pine Forest, paragliding, Murugan Hill and Kurisumala, tea and cardamom plantations, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Vagamon travel guide, Vagamon meadows, Vagamon Pine Forest, Vagamon paragliding, Murugan Hill Vagamon, best time to visit Vagamon, how to reach Vagamon, Kerala hill station",
  openGraph: {
    title: "Vagamon Travel Guide: Meadows, Pine Forests & Paragliding",
    description: "Rolling grass meadows compared to Scotland, pine forests planted by a British-era estate, and Kerala's paragliding hub — the complete guide to Vagamon.",
    url: "https://club.kudozz.in/blog/vagamon-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/solang-valley.jpg", width: 1200, height: 630, alt: "Open highland meadows representative of Vagamon, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vagamon Travel Guide: Meadows, Pine Forests & Paragliding",
    description: "Rolling grass meadows and Kerala's paragliding hub — the complete guide to Vagamon.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/vagamon-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Vagamon Travel Guide: Meadows, Pine Forests & Paragliding",
          description: "The complete Vagamon travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/vagamon-travel-guide" },
          about: { "@type": "Place", name: "Vagamon", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Vagamon Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Vagamon?", a: "One to two days covers the meadows, Pine Forest, and a paragliding session comfortably. It's also easily combined with Munnar or Thekkady as part of a longer Kerala highlands trip." },
  { q: "What is the best time to visit Vagamon?", a: "September to May is best, with the clearest skies and most reliable paragliding conditions in the cooler months. Monsoon (June–August) is lush and green but grounds most flying activity." },
  { q: "How do I reach Vagamon?", a: "The nearest airport is Kochi (COK), about 110km away. There's no direct railway station — the nearest are Kottayam or Ernakulam, followed by a road journey via Kottayam or Idukki." },
  { q: "Is paragliding available year-round?", a: "No — paragliding depends heavily on wind and weather conditions, which are most reliable from September through May. Monsoon months typically ground most flights." },
  { q: "Is Vagamon busier than Munnar?", a: "No, generally the opposite — Vagamon is quieter and less commercially developed than Munnar, despite being in the same general Kerala highlands region." },
  { q: "What is the budget for a trip to Vagamon?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,800 a day including a paragliding session." },
  { q: "Can I combine Vagamon with Munnar or Thekkady?", a: "Yes — both are reasonable driving distances away and Vagamon works well as an add-on stop on a broader Kerala highlands circuit." },
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
  { id: "introduction", title: "Why Vagamon?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vagamon", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const VAGAMON_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for meadow walks and paragliding sessions",
    emoji: "🪂",
    items: [
      { name: "Light Warm Jacket", description: "Vagamon's open meadows get genuinely cool in the mornings and evenings, even in a tropical state.", price: "₹1,499", rating: 4.4, reviews: "3.9k", image: "🧥", affiliateUrl: amazonSearchUrl("light+warm+jacket+travel"), tag: "Comfort essential", tagColor: "bg-sky-100 text-sky-700", why: "The elevation and open terrain make Vagamon noticeably cooler than coastal Kerala." },
      { name: "Comfortable Walking Shoes", description: "For walking the open meadows and Pine Forest paths.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "The meadow terrain is uneven in places and benefits from proper footwear." },
      { name: "Sunscreen", description: "The open meadows offer little shade — sun exposure is more intense here than in Vagamon's forested surroundings might suggest.", price: "₹599", rating: 4.5, reviews: "7.4k", image: "🧴", affiliateUrl: amazonSearchUrl("sunscreen+SPF+50+travel"), tag: "Meadow essential", tagColor: "bg-forest-100 text-forest-700", why: "Open grassland at altitude means stronger sun exposure than expected." },
      { name: "GoPro / Action Camera", description: "A natural fit for capturing a paragliding flight over the meadows.", price: "₹4,999+", rating: 4.4, reviews: "2.6k", image: "📷", affiliateUrl: amazonSearchUrl("action+camera+paragliding"), tag: "Paragliding essential", tagColor: "bg-purple-100 text-purple-700", why: "Most paragliding operators can mount an action camera for footage of the flight." },
    ],
  },
];

export default function VagamonGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/solang-valley.jpg" alt="Open highland meadows representative of Vagamon, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Vagamon", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Vagamon", "Paragliding", "Off-beat", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Vagamon Travel Guide: Meadows, Pine Forests & Paragliding
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Rolling grass meadows compared to Scotland, pine forests planted during Vagamon's tea-estate era, and Kerala's paragliding hub.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Vagamon, Kerala" },
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
                  <h2>Why Vagamon?</h2>
                  <p>
                    <strong>Vagamon</strong> offers a landscape unlike most of Kerala's densely forested hill country — open, rolling grass meadows that visitors regularly compare to the Scottish highlands or the Swiss countryside. It's a quieter, less-developed alternative to Munnar, though it shares the same general highland region and cooler climate.
                  </p>
                  <p>
                    The area has become Kerala's primary paragliding destination, with tandem flight operators running seasonal sessions over the open meadow terrain, while the nearby Pine Forest — planted during the British colonial tea-estate era — offers a quieter walking alternative.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🪂</span> Vagamon at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🪂", label: "Known For", value: "Paragliding, open meadows" },
                        { icon: "🌡️", label: "Best Time", value: "Sept – May" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kochi (~110km)" },
                        { icon: "🌲", label: "Nearby", value: "Pine Forest, Murugan Hill" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,800" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Vagamon</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Sept – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Clear skies and reliable wind conditions make this the strongest window for paragliding and meadow walks." },
                      { season: "Mar – May", emoji: "🌤️", color: "bg-orange-50 border-orange-200", mood: "Good, warmer", text: "Still workable for paragliding and sightseeing, with somewhat warmer daytime temperatures." },
                      { season: "Jun – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — flying grounded", text: "The meadows turn a deep green, but paragliding is largely grounded and trails can be muddy." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to February — the most reliable window for both clear skies and good paragliding conditions.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Vagamon</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kochi (COK) is the nearest airport, about 110km away.</li>
                    <li><strong>By Train:</strong> No direct railway station — Kottayam or Ernakulam are the nearest, followed by a road journey.</li>
                    <li><strong>By Road:</strong> Access via Kottayam or Idukki is the most common route.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book paragliding slots in advance during the main season — good wind windows fill up quickly with tandem flight operators.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Vagamon</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/solang-valley.jpg" alt="Meadow and pine forest scenery around Vagamon" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>The Meadows:</strong> Vagamon's signature open grassland, ideal for walking and photography.</li>
                    <li><strong>Paragliding:</strong> Tandem flights over the meadows, seasonal and weather-dependent.</li>
                    <li><strong>Pine Forest:</strong> A tall, evenly-spaced pine plantation from the British tea-estate era, popular for photography.</li>
                    <li><strong>Murugan Hill / Kurisumala:</strong> A hilltop with both a Murugan temple and a Christian pilgrimage site, reflecting Vagamon's mixed religious heritage.</li>
                    <li><strong>Thangal Para:</strong> A rock formation with a small mosque, linked to a local Sufi saint's legend.</li>
                    <li><strong>Tea and cardamom plantations:</strong> Scenic plantation drives and short walks around the area.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Vagamon</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Homestays near the meadows", "Basic guesthouses in town"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Meadow-view mid-range resorts", "Cottage-style stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium hillside resort stays"] },
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
                  <h2>What to Eat in Vagamon</h2>
                  <ul>
                    <li><strong>Homestay-cooked Kerala meals:</strong> Most stays serve home-style local food, a good introduction to regional cooking.</li>
                    <li><strong>Local tea shops:</strong> Simple chai and snacks in the small town centre.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Vagamon Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Meadows & Paragliding", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: paragliding session", "Afternoon: walk the meadows", "Evening: sunset viewpoint"] },
                      { day: "Day 2", title: "Pine Forest & Hills", color: "bg-forest-600", activities: ["Morning: Pine Forest walk", "Midday: Murugan Hill/Kurisumala", "Afternoon: departure or onward to Munnar/Thekkady"] },
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
                          ["Food/day", "₹350", "₹800"],
                          ["Paragliding session", "₹1,500", "₹2,500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Paragliding fees may vary by operator and season.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Vagamon</h2>
                  <ul>
                    <li><strong>Book paragliding slots in advance:</strong> Good wind windows fill up quickly in peak season.</li>
                    <li><strong>Carry a warm layer:</strong> Mornings and evenings are noticeably cool at this elevation.</li>
                    <li><strong>Set modest expectations on facilities:</strong> Vagamon is quieter and less developed than Munnar.</li>
                    <li><strong>Combine with Munnar or Thekkady:</strong> Both are reasonable driving distances for a longer highlands trip.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book paragliding slots ahead", "Carry a warm layer for mornings/evenings", "Walk the Pine Forest for a quieter alternative", "Combine with Munnar or Thekkady", "Time your trip for Sept–Feb for the best flying conditions"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect to paraglide during monsoon months", "Expect Munnar-level infrastructure or nightlife", "Skip carrying warm layers", "Show up without booking paragliding in peak season", "Underestimate sun exposure on the open meadows"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Vagamon", "Paragliding", "Off-beat", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={VAGAMON_GEAR} destination="Vagamon" />
              <RelatedPostsGrid currentSlug="vagamon-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="vagamon-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
