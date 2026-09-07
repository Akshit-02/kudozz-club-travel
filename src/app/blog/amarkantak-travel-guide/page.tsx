// src/app/blog/amarkantak-travel-guide/page.tsx
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
  title: "Amarkantak Travel Guide: Source of the Narmada & Son Rivers",
  description:
    "The complete Amarkantak travel guide. Narmada Kund, Sonmuda, Kapil Dhara Falls, Mai ki Bagiya, where to stay, best time to visit, and a full itinerary through this plateau pilgrimage town in the Maikal Hills.",
  keywords:
    "Amarkantak travel guide, Narmada Kund, Sonmuda, Kapil Dhara Falls, source of Narmada river, source of Son river, best time to visit Amarkantak, how to reach Amarkantak, Maikal Hills, Madhya Pradesh pilgrimage",
  openGraph: {
    title: "Amarkantak Travel Guide: Source of the Narmada & Son Rivers",
    description: "A plateau temple town where two of India's major rivers are born a few hundred metres apart, deep in dense Maikal hill forest — the complete guide to Amarkantak.",
    url: "https://club.kudozz.in/blog/amarkantak-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/solang-valley.jpg", width: 1200, height: 630, alt: "Highland plateau and forest representative of Amarkantak, Madhya Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarkantak Travel Guide: Source of the Narmada & Son Rivers",
    description: "A plateau temple town where two of India's major rivers are born a few hundred metres apart — the complete guide to Amarkantak.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/amarkantak-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Amarkantak Travel Guide: Source of the Narmada & Son Rivers",
          description: "The complete Amarkantak travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/amarkantak-travel-guide" },
          about: { "@type": "Place", name: "Amarkantak", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Amarkantak Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Amarkantak?", a: "One full day covers Narmada Kund, Sonmuda, and Kapil Dhara Falls comfortably; a second day allows for a slower pace and a visit to Mai ki Bagiya." },
  { q: "What is the best time to visit Amarkantak?", a: "October to March is most comfortable for temple visits and walking. The monsoon (July–September) brings the fullest waterfalls but muddier conditions underfoot." },
  { q: "How do I reach Amarkantak?", a: "The nearest railway station is Pendra Road (~17km) or Anuppur, and the nearest airport is Jabalpur (~245km). Road travel from Jabalpur or Bilaspur is the most practical approach." },
  { q: "Is it true two major rivers begin at Amarkantak?", a: "Yes — the Narmada, which flows west to the Arabian Sea, and the Son, which flows east toward the Ganga, both have their traditional sources here, only a short walk apart despite eventually heading in opposite directions across the subcontinent." },
  { q: "What is the budget for a trip to Amarkantak?", a: "A budget traveler can manage on roughly ₹1,200 a day, a mid-range trip closer to ₹3,000 a day. A 2-day trip totals roughly ₹2,400 on a budget and ₹6,000 mid-range, excluding transport to the region." },
  { q: "Is Amarkantak a lively tourist town?", a: "No — it's a quiet, spiritually significant pilgrimage and retreat town rather than a lively tourist hub. Expect modest infrastructure and a slower pace." },
  { q: "Can I combine Amarkantak with other Madhya Pradesh destinations?", a: "It's fairly remote relative to MP's other heritage sites, so most travelers treat it as a standalone trip from Jabalpur or Bilaspur rather than combining it into a larger circuit." },
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
  { id: "introduction", title: "Why Amarkantak?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Amarkantak", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const AMARKANTAK_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for temple walks and forest waterfall trails",
    emoji: "🌊",
    items: [
      { name: "Comfortable Walking Shoes", description: "Narmada Kund, Sonmuda, and Kapil Dhara Falls all involve walking on uneven, sometimes wet stone paths.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Stone paths near the river sources and waterfall can be slippery, especially after rain." },
      { name: "Modest Cotton Clothing", description: "Amarkantak is a genuine pilgrimage town — modest dress is expected at Narmada Kund and the surrounding temples.", price: "₹599", rating: 4.4, reviews: "3.9k", image: "👕", affiliateUrl: amazonSearchUrl("modest+cotton+travel+clothing"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "This is a spiritually significant site for many pilgrims — respectful dress matters more here than at a typical tourist stop." },
      { name: "Rain Layer", description: "A packable rain jacket or poncho is useful in shoulder-monsoon months when Kapil Dhara Falls is at its fullest.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🧥", affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "The falls are most dramatic exactly when rain is most likely." },
      { name: "Reusable Water Bottle", description: "Facilities are sparse between the main sites, so carrying water is sensible for a full day of walking.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "This is a quiet, spread-out town with fewer shops than bigger MP destinations." },
    ],
  },
];

export default function AmarkantakGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/solang-valley.jpg" alt="Highland plateau and forest representative of Amarkantak, Madhya Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Amarkantak", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Amarkantak", "Narmada River", "Off-beat", "Pilgrimage", "Madhya Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Amarkantak Travel Guide: Source of the Narmada & Son Rivers
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A plateau pilgrimage town deep in the Maikal Hills, where two of India's major rivers begin their journeys in opposite directions — everything you need to plan a trip to Amarkantak.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Amarkantak, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,600 words" },
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
                  <h2>Why Amarkantak?</h2>
                  <p>
                    <strong>Amarkantak</strong> sits on a plateau in the Maikal Hills, part of the Satpura-Vindhya range system, and holds an unusual geographic distinction: it's the traditional source of two major Indian rivers that flow in opposite directions. The <strong>Narmada</strong> begins here and flows west across Madhya Pradesh and Gujarat to the Arabian Sea, while the <strong>Son</strong> begins nearby and flows east to eventually join the Ganga — their sources are only a short walk apart despite the rivers heading to opposite coasts of the subcontinent.
                  </p>
                  <p>
                    The town is a genuine pilgrimage and spiritual retreat site, quieter and less commercial than most of Madhya Pradesh's better-known destinations, wrapped in dense sal forest that keeps the plateau notably cool.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🌊</span> Amarkantak at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Narmada Kund" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Pendra Road (~17km)" },
                        { icon: "🌲", label: "Setting", value: "Maikal Hills, sal forest" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Amarkantak</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, clear, and comfortable for temple visits and walking between sites." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Warm but manageable", text: "Warmer than winter but still tempered by the plateau's elevation and forest cover." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — fullest waterfalls, muddier paths", text: "Kapil Dhara Falls is at its most dramatic, but paths get slippery and travel logistics are less predictable." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> October to March — the most comfortable window for the temple circuit and the walk to Kapil Dhara Falls.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Amarkantak</h2>
                  <ul>
                    <li><strong>By Air:</strong> The nearest airport is Jabalpur (JLR), about 245km away.</li>
                    <li><strong>By Train:</strong> Pendra Road (~17km) or Anuppur are the nearest railway stations, both requiring a short onward drive.</li>
                    <li><strong>By Road:</strong> Road access from Jabalpur or Bilaspur is the most practical way in — this is one of MP's more remote heritage destinations.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Given the remote setting, confirm your driver or transport arrangements for both directions in advance — options thin out once you're on the plateau.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Amarkantak</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/solang-valley.jpg" alt="Forest and highland scenery around Amarkantak" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Narmada Kund:</strong> The temple tank marking the traditional source of the Narmada River, ringed by small shrines — the spiritual centre of the town.</li>
                    <li><strong>Sonmuda:</strong> A viewpoint marking the Son River's source, with sweeping Maikal hill views and where the young Son begins its descent as a waterfall.</li>
                    <li><strong>Kapil Dhara Falls:</strong> A scenic waterfall a short distance downstream where the young Narmada drops over rocks — busiest and most dramatic in the monsoon.</li>
                    <li><strong>Mai ki Bagiya:</strong> A forested garden area considered sacred, good for a quieter walk away from the main temple circuit.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Amarkantak</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Ashram/dharamshala-style stays", "Basic guesthouses near Narmada Kund"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,500/night", picks: ["MPT/tourism board hotels", "Private mid-range hotels in town"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed hotels — luxury options here are genuinely limited"] },
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
                  <h2>What to Eat in Amarkantak</h2>
                  <p>Simple vegetarian food dominates, reflecting the town's pilgrimage character.</p>
                  <ul>
                    <li><strong>Ashram/temple-run canteens:</strong> Simple, wholesome vegetarian meals near the main temple area.</li>
                    <li><strong>Local thalis:</strong> Straightforward MP-style vegetarian thalis at small hotels and eateries.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Amarkantak Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Narmada Kund & Sonmuda", color: "bg-amber-700", activities: ["Arrive, check in", "Sunrise/morning at Narmada Kund", "Afternoon: Sonmuda viewpoint", "Evening: rest in town"] },
                      { day: "Day 2", title: "Kapil Dhara & Mai ki Bagiya", color: "bg-forest-600", activities: ["Morning walk to Kapil Dhara Falls", "Late morning: Mai ki Bagiya", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹600", "₹2,200"],
                          ["Food/day", "₹250", "₹600"],
                          ["Local transport per day", "₹250", "₹500"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes transport to the region. Luxury-tier options are limited in Amarkantak.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Amarkantak</h2>
                  <ul>
                    <li><strong>Dress modestly:</strong> This is an active pilgrimage site, not a leisure destination — dress and behave accordingly.</li>
                    <li><strong>Pair sunrise at Narmada Kund with a walk to Kapil Dhara Falls:</strong> A natural, efficient combination for a compact morning.</li>
                    <li><strong>Set realistic expectations:</strong> Facilities, nightlife, and dining options are modest — this is a quiet spiritual retreat, not a resort town.</li>
                    <li><strong>Carry cash:</strong> Card acceptance is limited in this small, remote town.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Narmada Kund at sunrise", "Walk to both Kapil Dhara Falls and Sonmuda", "Dress modestly throughout", "Carry sufficient cash", "Confirm return transport in advance"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Expect nightlife or extensive dining options", "Rely on cards for payments", "Arrive without confirming transport onward", "Wear beachwear-style clothing near the temples", "Rush the visit — this is a place best taken slowly"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Amarkantak", "Narmada River", "Off-beat", "Pilgrimage", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={AMARKANTAK_GEAR} destination="Amarkantak" />
              <RelatedPostsGrid currentSlug="amarkantak-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="amarkantak-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
