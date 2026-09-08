// src/app/blog/rajgir-travel-guide/page.tsx
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
  title: "Rajgir Travel Guide: Hot Springs, Ropeway & Buddhist Heritage",
  description:
    "The complete Rajgir travel guide. Griddhakuta Hill, the Rajgir Ropeway, Vishwa Shanti Stupa, natural hot springs, where to stay, best time to visit, and a full itinerary through this hill-ringed Buddhist and Jain heritage town.",
  keywords:
    "Rajgir travel guide, Griddhakuta Hill, Rajgir ropeway, Vishwa Shanti Stupa, Rajgir hot springs, Bimbisara jail, best time to visit Rajgir, how to reach Rajgir, Rajgir Nalanda day trip",
  openGraph: {
    title: "Rajgir Travel Guide: Hot Springs, Ropeway & Buddhist Heritage",
    description: "A hill-ringed town where Buddha spent years teaching, with natural hot springs, an ancient ropeway, and one of the world's oldest surviving jail sites — the complete guide to Rajgir.",
    url: "https://club.kudozz.in/blog/rajgir-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/coorg/coorg.jpg", width: 1200, height: 630, alt: "Misty hill scenery representative of Rajgir, Bihar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajgir Travel Guide: Hot Springs, Ropeway & Buddhist Heritage",
    description: "Hot springs, an ancient ropeway, and Buddhist heritage — the complete guide to Rajgir.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/rajgir-travel-guide" },
};

function ArticleSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Rajgir Travel Guide: Hot Springs, Ropeway & Buddhist Heritage",
      description: "The complete Rajgir travel guide.",
      image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
      datePublished: "2026-09-08", dateModified: "2026-09-08",
      publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
      author: { "@type": "Organization", name: "Kudozz Club" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/rajgir-travel-guide" },
      about: { "@type": "Place", name: "Rajgir", address: { "@type": "PostalAddress", addressRegion: "Bihar", addressCountry: "IN" } },
      breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
        { "@type": "ListItem", position: 3, name: "Rajgir Travel Guide" },
      ]},
    })}} />
  );
}

const faqs = [
  { q: "How many days do I need in Rajgir?", a: "One to two days — a single day covers the ropeway, Griddhakuta Hill, and the hot springs comfortably; two days lets you add Nalanda (~12km away) at a relaxed pace." },
  { q: "What is the best time to visit Rajgir?", a: "October to March offers cool, comfortable weather well suited to hill viewpoints and walking." },
  { q: "How do I reach Rajgir?", a: "The nearest airport is Patna (~100km) or Gaya. Rajgir has its own railway station, and road access is straightforward." },
  { q: "What is Griddhakuta Hill?", a: "Also known as Vulture's Peak, it's a site where Buddha is said to have spent significant time teaching. It's reachable by the Rajgir Ropeway or a walking trail." },
  { q: "Are the Rajgir hot springs safe to bathe in?", a: "The sulphur springs are a popular local bathing site considered sacred by many visitors. As with any natural hot spring, check current conditions and any posted guidance locally before entering." },
  { q: "Can I combine Rajgir with Nalanda in one day?", a: "Yes — they're only about 12km apart, making a combined day trip straightforward and one of the most efficient ways to cover Bihar's Buddhist heritage circuit." },
  { q: "What is the budget for a trip to Rajgir?", a: "A budget traveler can manage on roughly ₹1,300 a day, a mid-range trip closer to ₹3,000 a day, including the ropeway ticket." },
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
  { id: "introduction", title: "Why Rajgir?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rajgir", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const RAJGIR_GEAR: GearSection[] = [{
  title: "Things Worth Carrying", subtitle: "Gear for hill viewpoints and the hot springs", emoji: "🚡",
  items: [
    { name: "Comfortable Walking/Climbing Shoes", description: "For Griddhakuta Hill's trail and general walking between sites around town.", price: "₹1,999", rating: 4.4, reviews: "5.3k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+trekking+shoes"), tag: "Hill essential", tagColor: "bg-amber-100 text-amber-700", why: "The walking trail up Griddhakuta Hill has real elevation gain." },
    { name: "Swimwear", description: "If you plan to bathe at the natural hot springs.", price: "₹—", rating: 4.4, reviews: "—", image: "🩱", affiliateUrl: amazonSearchUrl("swimwear+travel"), tag: "Hot springs essential", tagColor: "bg-sky-100 text-sky-700", why: "The sulphur springs are a genuine local draw worth being prepared for." },
    { name: "Sun Hat", description: "For hilltop viewpoints and the open ropeway ride with direct sun exposure.", price: "₹399", rating: 4.4, reviews: "5.0k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"), tag: "Sun essential", tagColor: "bg-forest-100 text-forest-700", why: "Hilltop sites and the ropeway offer little shade." },
    { name: "Camera", description: "For panoramic views from Vishwa Shanti Stupa and the ropeway ride itself.", price: "₹—", rating: 4.5, reviews: "—", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sightseeing essential", tagColor: "bg-purple-100 text-purple-700", why: "The hilltop panorama is one of Rajgir's best photo opportunities." },
  ],
}];

export default function RajgirGuidePage() {
  return (
    <>
      <ArticleSchema /><FAQSchema /><SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/coorg/coorg.jpg" alt="Misty hill scenery representative of Rajgir, Bihar" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Rajgir", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Rajgir", "Buddhist Heritage", "Jain Heritage", "Bihar"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Rajgir Travel Guide: Hot Springs, Ropeway & Buddhist Heritage
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A hill-ringed town where Buddha spent years teaching, with natural hot springs, an ancient ropeway, and one of the world's oldest surviving jail sites.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Rajgir, Bihar" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" },
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
                  <h2>Why Rajgir?</h2>
                  <p>
                    <strong>Rajgir</strong> sits ringed by five hills, a former capital of the ancient Magadha kingdom with deep ties to both Buddhism and Jainism. Buddha spent significant time teaching here, including at <strong>Griddhakuta Hill</strong> (Vulture's Peak), while Mahavira, the Jain Tirthankara, is also closely linked to the town — Jain temples dot the surrounding hilltops.
                  </p>
                  <p>
                    Beyond the religious heritage, Rajgir has a genuinely old aerial ropeway — one of the earliest in India — carrying visitors up to hilltop viewpoints, plus natural hot springs considered sacred by many who visit. It's a compact, easy town to explore, and pairs naturally with nearby Nalanda.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🚡</span> Rajgir at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Bihar, India" },
                        { icon: "🛕", label: "Key Site", value: "Griddhakuta Hill" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Patna (~100km)" },
                        { icon: "🚡", label: "Landmark", value: "Rajgir Ropeway" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Rajgir</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, comfortable weather for hill climbs, the ropeway, and general sightseeing." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Significant heat makes hilltop walking less comfortable, though the ropeway helps." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "Rain can affect hill trail access and general sightseeing plans." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — comfortable for both hill trails and the ropeway.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Rajgir</h2>
                  <ul>
                    <li><strong>By Air:</strong> Patna (~100km) or Gaya are the nearest airports.</li>
                    <li><strong>By Train:</strong> Rajgir has its own railway station.</li>
                    <li><strong>By Road:</strong> Straightforward road access, commonly combined with Nalanda (~12km) and Bodh Gaya.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Book ropeway tickets early in the day — queues build up as day-trippers arrive from Patna and Gaya.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Rajgir</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/coorg/coorg.jpg" alt="Hill scenery around Rajgir" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Griddhakuta Hill (Vulture's Peak):</strong> A site where Buddha spent significant time teaching, reachable by ropeway or walking trail.</li>
                    <li><strong>Rajgir Ropeway:</strong> One of India's earliest aerial cableways, connecting to hilltop viewpoints and the Vishwa Shanti Stupa.</li>
                    <li><strong>Vishwa Shanti Stupa:</strong> A Japanese-built peace pagoda with panoramic hill views.</li>
                    <li><strong>Natural hot springs:</strong> Sulphur springs at the base of Vaibhav hill, considered sacred by many visitors.</li>
                    <li><strong>Bimbisara's Jail and Ajatashatru's Fort:</strong> Ruins associated with ancient Magadha royal history, among India's oldest identified jail sites.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Rajgir</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹600–₹1,500/night", picks: ["Basic guesthouses near the town centre", "Simple pilgrim-style lodges"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,000/night", picks: ["Mid-range hotels near the ropeway", "Comfortable resort-style stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["A handful of premium hotels catering to the Buddhist heritage circuit"] },
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
                  <h2>What to Eat in Rajgir</h2>
                  <ul>
                    <li><strong>Litti chokha:</strong> Bihar's signature dish, widely available at local eateries.</li>
                    <li><strong>Sattu-based snacks:</strong> A common, filling local staple.</li>
                    <li><strong>Simple thalis:</strong> Standard vegetarian and non-vegetarian options at hotels and local restaurants.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Rajgir Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Ropeway & Hilltop Sites", color: "bg-amber-700", activities: ["Arrive, check in", "Morning: Rajgir Ropeway to Vishwa Shanti Stupa", "Afternoon: Griddhakuta Hill", "Evening: hot springs"] },
                      { day: "Day 2", title: "Ruins & Nalanda", color: "bg-forest-600", activities: ["Morning: Bimbisara's Jail and Ajatashatru's Fort ruins", "Afternoon: day trip to Nalanda (~12km)", "Evening: departure"] },
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
                          ["Accommodation/night", "₹800", "₹2,800"],
                          ["Food/day", "₹350", "₹800"],
                          ["Ropeway + entry fees", "₹300", "₹500"],
                          ["Local transport per day", "₹300", "₹700"],
                          ["Daily total", "₹1,300", "₹3,000"],
                          ["2-Day trip total", "₹2,600", "₹6,000"],
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
                  <h2>Essential Travel Tips for Rajgir</h2>
                  <ul>
                    <li><strong>Take the ropeway early:</strong> Queues build up over the course of the day.</li>
                    <li><strong>Combine with Nalanda:</strong> Just 12km away, a natural single-trip pairing.</li>
                    <li><strong>Check hot spring conditions locally:</strong> As with any natural spring, verify current conditions before bathing.</li>
                    <li><strong>Wear proper footwear:</strong> The Griddhakuta Hill walking trail has real elevation gain.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Take the ropeway early in the day", "Combine Rajgir with Nalanda", "Check hot spring conditions before bathing", "Wear proper footwear for Griddhakuta Hill", "Visit Vishwa Shanti Stupa for the panoramic views"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the ropeway late and wait in long queues", "Skip Nalanda given how close it is", "Bathe in the hot springs without checking current conditions", "Underestimate the Griddhakuta Hill climb", "Rush through in a few hours"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Rajgir", "Buddhist Heritage", "Jain Heritage", "Bihar", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={RAJGIR_GEAR} destination="Rajgir" />
              <RelatedPostsGrid currentSlug="rajgir-travel-guide" />
            </article>
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="rajgir-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
