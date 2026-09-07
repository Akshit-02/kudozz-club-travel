// src/app/blog/athirappilly-travel-guide/page.tsx
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
  title: "Athirappilly Falls Travel Guide: Kerala's Niagara & Best Time to Visit",
  description:
    "The complete Athirappilly Falls travel guide. Kerala's biggest waterfall, Vazhachal Falls, the surrounding rainforest, where to stay, best time to visit, and a full day-trip itinerary from Kochi or Thrissur.",
  keywords:
    "Athirappilly Falls travel guide, Kerala Niagara, Vazhachal Falls, Chalakudy River waterfall, best time to visit Athirappilly, how to reach Athirappilly, Athirappilly day trip from Kochi",
  openGraph: {
    title: "Athirappilly Falls Travel Guide: Kerala's Niagara & Best Time to Visit",
    description: "Kerala's biggest waterfall, thundering 80 feet through rainforest just outside a tiger reserve — the complete guide to Athirappilly.",
    url: "https://club.kudozz.in/blog/athirappilly-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/abbey-falls.jpg", width: 1200, height: 630, alt: "Waterfall through rainforest representative of Athirappilly, Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athirappilly Falls Travel Guide: Kerala's Niagara & Best Time to Visit",
    description: "Kerala's biggest waterfall, thundering through rainforest — the complete guide to Athirappilly.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/athirappilly-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Athirappilly Falls Travel Guide: Kerala's Niagara & Best Time to Visit",
          description: "The complete Athirappilly Falls travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/athirappilly-travel-guide" },
          about: { "@type": "Place", name: "Athirappilly", address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Athirappilly Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How much time do I need at Athirappilly?", a: "A half-day is enough to see both Athirappilly and Vazhachal Falls, making it an easy day trip from Kochi or Thrissur rather than an overnight destination for most visitors." },
  { q: "What is the best time to visit Athirappilly?", a: "June to September (monsoon) brings the falls to maximum, most dramatic flow, though base access can be restricted for safety. October to February offers a calmer, still-solid flow with clearer weather for photography." },
  { q: "How do I reach Athirappilly?", a: "The nearest airport is Kochi (COK), about 70km away. The nearest railway station is Chalakudy, roughly 30km away, with the falls reached by road from there." },
  { q: "Why is Athirappilly called the 'Niagara of India'?", a: "It's a popular nickname reflecting the falls' scale and drama by Indian standards — about 80 feet high and 100 feet wide on the Chalakudy River — rather than a literal comparison to Niagara Falls' size." },
  { q: "Can I swim at the base of Athirappilly Falls?", a: "Access to the base is generally restricted and safety-fenced, particularly during high-flow periods — check current access rules on arrival rather than assuming open swimming access." },
  { q: "Is Athirappilly good for a day trip from Kochi?", a: "Yes — at roughly 70km and combined easily with nearby Vazhachal Falls, it's a very manageable half-day or full-day trip from Kochi." },
  { q: "What is the budget for a trip to Athirappilly?", a: "This is a low-cost day-trip destination — entry fees, transport, and a simple meal typically total well under ₹1,000 per person, excluding any organized tour or private car hire." },
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
  { id: "introduction", title: "Why Athirappilly?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Athirappilly", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const ATHIRAPPILLY_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a wet, slippery waterfall day trip",
    emoji: "💦",
    items: [
      { name: "Grip Sandals / Water Shoes", description: "The steps and viewing areas near the falls get consistently wet and slippery, especially in monsoon.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🥾", affiliateUrl: amazonSearchUrl("grip+sandals+water+shoes"), tag: "Waterfall essential", tagColor: "bg-amber-100 text-amber-700", why: "Wet stone steps near the falls are the top cause of minor injuries at Athirappilly." },
      { name: "Rain Poncho", description: "Useful for a monsoon-season visit when spray and rain are both a given near the falls.", price: "₹399", rating: 4.3, reviews: "4.0k", image: "🌂", affiliateUrl: amazonSearchUrl("rain+poncho+travel"), tag: "Monsoon essential", tagColor: "bg-sky-100 text-sky-700", why: "Spray from the falls alone is enough to soak a visitor even without active rain." },
      { name: "Waterproof Phone Pouch", description: "Protects your phone from spray while photographing the falls up close.", price: "₹299", rating: 4.3, reviews: "9.1k", image: "📱", affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+travel"), tag: "Photography essential", tagColor: "bg-purple-100 text-purple-700", why: "Waterfall spray reaches further than most visitors expect near the viewing platforms." },
      { name: "Reusable Water Bottle", description: "For the short walking sections between Athirappilly and Vazhachal Falls.", price: "₹449", rating: 4.5, reviews: "6.2k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Day-trip essential", tagColor: "bg-forest-100 text-forest-700", why: "Facilities are limited right at the falls area itself." },
    ],
  },
];

export default function AthirappillyGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Waterfall through rainforest representative of Athirappilly, Kerala" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Athirappilly", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Athirappilly", "Waterfalls", "Off-beat", "Kerala"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Athirappilly Falls Travel Guide: Kerala's Niagara & Best Time to Visit
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Kerala's biggest waterfall, thundering through rainforest just outside a tiger reserve — everything you need to plan a visit to Athirappilly.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Athirappilly, Kerala" },
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
                  <h2>Why Athirappilly?</h2>
                  <p>
                    <strong>Athirappilly Falls</strong> is Kerala's largest waterfall — roughly 80 feet high and 100 feet wide — where the Chalakudy River drops through dense rainforest at the edge of the Vazhachal/Sholayar forest range, close to the Parambikulam Tiger Reserve landscape. It's earned the popular nickname "Niagara of India" for its scale and drama by Indian standards, and has featured as a backdrop in numerous Malayalam and Indian films.
                  </p>
                  <p>
                    It sits close enough to Kochi and Thrissur to make an easy day trip, and pairs naturally with Vazhachal Falls, a gentler cascade a short distance upstream.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>💦</span> Athirappilly at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "💦", label: "Height", value: "~80 feet" },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Feb (see below)" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kochi (~70km)" },
                        { icon: "🌿", label: "Setting", value: "Vazhachal rainforest" },
                        { icon: "💰", label: "Budget/Day", value: "Under ₹1,000/person" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Athirappilly</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Maximum flow — most dramatic", text: "The falls are at their most powerful, though base access can be restricted for safety during peak flow." },
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Calmer, clearer — our pick for photography", text: "Still-solid flow with clearer weather, easier access, and better conditions for photography." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Lower flow", text: "The falls run noticeably lower before the monsoon arrives — still worth a visit, just less dramatic." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> If you want the biggest, most dramatic falls, go in monsoon and check access rules on arrival. For a calmer, safer, photogenic visit, October to February is the better bet.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Athirappilly</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kochi (COK) is the nearest airport, about 70km away.</li>
                    <li><strong>By Train:</strong> Chalakudy railway station, roughly 30km away, or Thrissur, both requiring onward road travel.</li>
                    <li><strong>By Road:</strong> Most visitors arrive by road via Chalakudy town as a day trip from Kochi or Thrissur.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Go early morning or on a weekday to avoid the heaviest day-tripper crowds from Kochi and Thrissur.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Athirappilly</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/abbey-falls.jpg" alt="Waterfall viewing platform near Athirappilly" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Athirappilly Falls viewing platforms:</strong> Multiple vantage points along a short walk offer views of the main falls.</li>
                    <li><strong>Vazhachal Falls:</strong> A gentler, wider cascade a short distance upstream, worth combining with the same visit.</li>
                    <li><strong>Rainforest walks:</strong> The surrounding Vazhachal forest range is home to hornbills and other birdlife, worth a slower look if you have time.</li>
                    <li><strong>Photography:</strong> A well-known filming location, offering some of Kerala's most photogenic waterfall shots.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Athirappilly</h2>
                  <p>Most travelers visit as a day trip from Kochi or Thrissur, but a handful of stays exist near the falls for those wanting an early start or a quieter overnight.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹1,000–₹2,200/night", picks: ["Basic guesthouses near Chalakudy", "Simple lodges close to the falls road"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,500–₹5,500/night", picks: ["Forest-view resorts near Vazhachal", "Mid-range hotels in Chalakudy town"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["A handful of premium rainforest resort stays near the falls area"] },
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
                  <h2>What to Eat Near Athirappilly</h2>
                  <ul>
                    <li><strong>Roadside Kerala eateries:</strong> Simple thalis and snacks along the road to the falls, popular with day-trippers.</li>
                    <li><strong>Resort dining:</strong> Nearby resorts serve set Kerala meals for overnight guests.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Day-Trip Itinerary from Kochi</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Drive & Vazhachal Falls", color: "bg-amber-700", activities: ["Depart Kochi early morning", "Stop first at the gentler Vazhachal Falls", "Continue on to Athirappilly"] },
                      { day: "Afternoon", title: "Athirappilly Falls & Return", color: "bg-forest-600", activities: ["Explore viewing platforms at Athirappilly", "Lunch at a nearby roadside eatery", "Return drive to Kochi by evening"] },
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
                      <thead><tr className="bg-amber-50">{["Expense", "Per Person (approx.)"].map((h) => (<th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>))}</tr></thead>
                      <tbody>
                        {[
                          ["Entry fee", "₹50–100"],
                          ["Local transport (shared taxi/bus)", "₹150–400"],
                          ["Food (day)", "₹250–500"],
                          ["Day-trip total (excl. private car hire)", "₹450–1,000"],
                        ].map(([exp, b], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* A private car/taxi for the day from Kochi adds significantly more but is the most convenient option for combining both falls.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Athirappilly</h2>
                  <ul>
                    <li><strong>Check base access before your visit:</strong> Restrictions can change with water flow and safety conditions.</li>
                    <li><strong>Combine with Vazhachal Falls:</strong> The two are close together and naturally visited on the same trip.</li>
                    <li><strong>Go early or on a weekday:</strong> Both falls draw heavy day-tripper traffic from Kochi and Thrissur on weekends.</li>
                    <li><strong>Wear grippy footwear:</strong> Wet stone steps near the falls are genuinely slippery.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Combine Athirappilly with Vazhachal Falls", "Check current base access before your visit", "Go early morning or on a weekday", "Wear grippy footwear on wet steps", "Carry a rain layer in monsoon season"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Assume open swimming access at the base", "Visit on a monsoon weekend expecting light crowds", "Skip checking safety restrictions during heavy flow", "Wear slippery footwear near the falls", "Expect overnight-heavy infrastructure right at the falls"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Athirappilly", "Waterfalls", "Off-beat", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={ATHIRAPPILLY_GEAR} destination="Athirappilly" />
              <RelatedPostsGrid currentSlug="athirappilly-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="athirappilly-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
