// src/app/blog/dirang-travel-guide/page.tsx
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
  title: "Dirang Travel Guide: Hot Springs, Apple Orchards & Dirang Dzong",
  description:
    "The complete Dirang travel guide. Dirang Dzong, natural hot springs, apple and kiwi orchards, Sangti Valley, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Dirang travel guide, Dirang Dzong, Dirang hot springs, Sangti Valley, best time to visit Dirang, how to reach Dirang, Bomdila to Tawang road, Arunachal Pradesh apple orchards",
  openGraph: {
    title: "Dirang Travel Guide: Hot Springs, Apple Orchards & Dirang Dzong",
    description: "A valley town between Bomdila and Tawang with natural hot springs, apple orchards, and a fortified monastery few travelers stop long enough to see — the complete guide to Dirang.",
    url: "https://club.kudozz.in/blog/dirang-travel-guide",
    type: "article", siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/solang-valley.jpg", width: 1200, height: 630, alt: "Himalayan valley scenery representative of Dirang, Arunachal Pradesh" }],
  },
  twitter: { card: "summary_large_image", title: "Dirang Travel Guide: Hot Springs, Apple Orchards & Dirang Dzong", description: "Hot springs, apple orchards, and a fortified monastery on the road to Tawang — the complete guide to Dirang.", images: ["/images/destinations/manali/solang-valley.jpg"] },
  alternates: { canonical: "https://club.kudozz.in/blog/dirang-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Dirang Travel Guide: Hot Springs, Apple Orchards & Dirang Dzong",
      description: "The complete Dirang travel guide.",
      image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dirang-travel-guide" },
      about: { "@type": "Place", name: "Dirang", address: { "@type": "PostalAddress", addressRegion: "Arunachal Pradesh", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Dirang Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Dirang?", a: "A half-day to a full day is enough to see Dirang Dzong, the hot springs, and Sangti Valley if you don't rush — most travelers use it as an overnight stop on the way to or from Tawang." },
  { q: "What is the best time to visit Dirang?", a: "March–June and September–November, matching the wider Tawang circuit's seasonal pattern for reliable road conditions and pleasant weather." },
  { q: "How do I reach Dirang?", a: "By road only — Dirang sits on the Bomdila-Tawang road, roughly a day's drive from Guwahati via Bomdila, or a shorter stretch from Tawang itself." },
  { q: "Is Dirang worth stopping at, or just a transit point?", a: "It's genuinely worth a proper stop — Dirang Dzong and the hot springs are easy to miss if you treat this purely as an overnight transit stay, but they're worth allocating real time to." },
  { q: "Can I see black-necked cranes at Sangti Valley?", a: "Sangti Valley has been known for wintering black-necked cranes in some years, but sighting status can shift with population and route changes — verify current information before planning a visit specifically around this." },
  { q: "What is the budget for a trip to Dirang?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,500 a day, similar to nearby Bomdila." },
  { q: "Do I need a permit to visit Dirang?", a: "Yes — the same Inner Line Permit (Indian citizens) or Protected Area Permit (foreign nationals) required for Arunachal Pradesh generally applies here." },
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
  { id: "introduction", title: "Why Dirang?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dirang", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DIRANG_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for hot springs and valley walks", emoji: "♨️",
  items: [
    { name: "Warm Layers", description: "Dirang's valley setting is cooler than the plains but milder than Tawang — light-to-mid warm layers work well.", price: "₹1,999", rating: 4.4, reviews: "4.7k", image: "🧥", affiliateUrl: amazonSearchUrl("warm+jacket+hill+travel"), tag: "Trip essential", tagColor: "bg-sky-100 text-sky-700", why: "Evenings in the valley are noticeably cool year-round." },
    { name: "Swimwear", description: "For a soak at Dirang's natural hot springs.", price: "₹599", rating: 4.4, reviews: "3.1k", image: "🩱", affiliateUrl: amazonSearchUrl("swimwear+travel"), tag: "Hot-spring essential", tagColor: "bg-amber-100 text-amber-700", why: "The hot springs are a genuine local highlight worth planning for." },
    { name: "Comfortable Walking Shoes", description: "For exploring Dirang Dzong and the surrounding orchards and valley paths.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"), tag: "All-day essential", tagColor: "bg-forest-100 text-forest-700", why: "Terrain around the dzong and orchards is uneven in places." },
    { name: "Binoculars", description: "Useful if visiting Sangti Valley during crane-wintering season.", price: "₹1,999", rating: 4.5, reviews: "6.5k", image: "🔭", affiliateUrl: amazonSearchUrl("binoculars+birdwatching+travel"), tag: "Optional", tagColor: "bg-purple-100 text-purple-700", why: "Worth bringing if birdwatching interests you, though sightings aren't guaranteed." },
  ],
}];

export default function DirangGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/solang-valley.jpg" alt="Himalayan valley scenery representative of Dirang, Arunachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dirang", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dirang", "Dirang Dzong", "Off-beat", "Arunachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dirang Travel Guide: Hot Springs, Apple Orchards & Dirang Dzong
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A valley town between Bomdila and Tawang with natural hot springs, apple orchards, and a fortified monastery few travelers stop long enough to see.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dirang, Arunachal Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,500 words" },
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
                  <h2>Why Dirang?</h2>
                  <p>
                    <strong>Dirang</strong> sits on the Bomdila-Tawang road (cross-reference both guides), and it's the town most travelers stop at overnight without fully exploring — a genuine shame, since <strong>Dirang Dzong</strong>, natural hot springs, and apple orchards are all worth real time rather than a rushed evening stopover.
                  </p>
                  <p>
                    Dirang Dzong is built in a fortified monastery style more commonly associated with Bhutan, reflecting the region's cultural proximity to Bhutanese Buddhist tradition — a distinctive architectural note among the monasteries along this route.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>♨️</span> Dirang at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh, India" },
                        { icon: "🏯", label: "Key Site", value: "Dirang Dzong" },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sep–Nov" },
                        { icon: "♨️", label: "Known For", value: "Natural hot springs" },
                        { icon: "🍎", label: "Agriculture", value: "Apple & kiwi orchards" },
                        { icon: "🪪", label: "Permit", value: "Inner Line Permit required" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dirang</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Pleasant and clear", text: "Comfortable valley weather and clear onward road conditions toward Tawang." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Best overall — our pick", text: "Post-monsoon clarity and the most reliable conditions for the wider Tawang circuit." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Heavier rain and landslide risk on the connecting roads." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Cold, onward road risk", text: "Dirang itself stays accessible, but Sela Pass ahead can close in heavy snow — verify current conditions." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to November, matching the wider Tawang circuit's best-conditions window.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dirang</h2>
                  <ul>
                    <li><strong>By Road:</strong> The only access route — Dirang sits on the Bomdila-Tawang road, roughly a day's drive from Guwahati via Bomdila.</li>
                    <li><strong>From Tawang:</strong> A shorter drive back down the mountain via Sela Pass (cross-reference that guide).</li>
                    <li><strong>Permits:</strong> The standard ILP/PAP requirements for Arunachal Pradesh apply here.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Use Dirang as a genuine acclimatization stop before continuing to higher-altitude Tawang, not just an overnight box to tick.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Dirang</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/solang-valley.jpg" alt="Valley scenery around Dirang" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Dirang Dzong:</strong> A fortified monastery structure built in a Bhutan-influenced dzong style, genuinely distinctive among the region's religious sites.</li>
                    <li><strong>Natural Hot Springs:</strong> Locally used sulphur springs believed to have therapeutic properties.</li>
                    <li><strong>Apple and kiwi orchards:</strong> Dirang's cooler valley climate supports fruit cultivation unusual for the wider region.</li>
                    <li><strong>Sangti Valley:</strong> A scenic side valley, known in some years for wintering black-necked cranes — verify current sighting status.</li>
                    <li><strong>Yak Research Centre:</strong> A government facility studying yak breeding, of niche interest to some travelers.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Dirang</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Guesthouses in Dirang town", "Basic homestays"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Valley-view mid-range hotels", "Orchard-adjacent stays"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better-appointed properties — luxury options remain limited here"] },
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
                  <h2>What to Eat in Dirang</h2>
                  <ul>
                    <li><strong>Thukpa and momos:</strong> Widely available Tibetan-influenced staples across the region.</li>
                    <li><strong>Fresh apples and kiwis:</strong> Straight from local orchards in season.</li>
                    <li><strong>Simple guesthouse meals:</strong> Most stays serve straightforward local and North Indian fare.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Dirang Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Dirang Dzong & Orchards", color: "bg-amber-700", activities: ["Visit Dirang Dzong", "Walk through local apple/kiwi orchards"] },
                      { day: "Afternoon", title: "Hot Springs & Sangti Valley", color: "bg-forest-600", activities: ["Soak at the natural hot springs", "Short drive to Sangti Valley if time allows"] },
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
                          ["Accommodation/night", "₹1,000", "₹2,800"],
                          ["Food/day", "₹400", "₹900"],
                          ["Hot spring/local transport", "₹100", "₹300"],
                          ["Daily total", "₹1,500", "₹4,000"],
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
                  <h2>Essential Travel Tips for Dirang</h2>
                  <ul>
                    <li><strong>Don't rush through:</strong> Allocate real time to Dirang Dzong and the hot springs rather than treating this as just an overnight stop.</li>
                    <li><strong>Use it for acclimatization:</strong> A good place to adjust before continuing to higher-altitude Tawang.</li>
                    <li><strong>Verify Sangti Valley crane season status:</strong> Sighting reliability varies year to year.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Dirang Dzong properly, not just drive past", "Soak at the natural hot springs", "Visit Sangti Valley if time allows", "Use this stop to acclimatize before Tawang", "Try fresh local apples and kiwis in season"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Treat Dirang as just a transit stop", "Skip the dzong assuming it's minor", "Plan a trip solely around crane sightings without checking current status", "Expect Tawang-level infrastructure here", "Forget your ILP/PAP before arriving"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dirang", "Dirang Dzong", "Arunachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DIRANG_GEAR} destination="Dirang" />
              <RelatedPostsGrid currentSlug="dirang-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="dirang-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
