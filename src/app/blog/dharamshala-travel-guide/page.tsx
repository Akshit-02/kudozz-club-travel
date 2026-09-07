// src/app/blog/dharamshala-travel-guide/page.tsx
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
  title: "Dharamshala Travel Guide: McLeod Ganj, Triund Trek & Tibetan Culture",
  description:
    "The complete Dharamshala travel guide. McLeod Ganj, the Dalai Lama's temple complex, the Triund trek, Bhagsu Falls, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Dharamshala travel guide, McLeod Ganj, Triund trek, Dalai Lama temple, Bhagsu Falls, best time to visit Dharamshala, how to reach Dharamshala, Dhauladhar range trekking",
  openGraph: {
    title: "Dharamshala Travel Guide: McLeod Ganj, Triund Trek & Tibetan Culture",
    description: "The seat-in-exile of the Dalai Lama, a Tibetan refugee town wrapped around Himalayan monasteries, and a short trek up to a grassy ridge with snow peaks close enough to touch — the complete guide to Dharamshala.",
    url: "https://club.kudozz.in/blog/dharamshala-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/manali/solang-valley.jpg", width: 1200, height: 630, alt: "Himalayan valley representative of Dharamshala, Himachal Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharamshala Travel Guide: McLeod Ganj, Triund Trek & Tibetan Culture",
    description: "McLeod Ganj, the Triund trek, and Tibetan Buddhist culture — the complete guide to Dharamshala.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/dharamshala-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Dharamshala Travel Guide: McLeod Ganj, Triund Trek & Tibetan Culture",
          description: "The complete Dharamshala travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/dharamshala-travel-guide" },
          about: { "@type": "Place", name: "Dharamshala", address: { "@type": "PostalAddress", addressRegion: "Himachal Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Dharamshala Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Dharamshala?", a: "Two days covers McLeod Ganj, the temple complex, and Bhagsu Falls comfortably. Add a third day for the Triund trek, done either as a long day hike or an overnight camp." },
  { q: "What is the best time to visit Dharamshala?", a: "March–June and September–November offer the clearest mountain views and best trekking conditions. December–February brings snow at higher elevations, while July–August is heavy monsoon season — this is one of India's wetter hill regions." },
  { q: "How do I reach Dharamshala?", a: "Kangra Airport (DHM), about 15km away, has limited flights. Kangra is the nearest broad-gauge railhead, with a narrow-gauge line closer to town. Road access via Pathankot (~90km) is common from Delhi/Punjab." },
  { q: "Do I need a permit for the Triund trek?", a: "HP forest authorities have required registration/permits for the Triund trek in the past — verify the current process before you go, as requirements have changed over time." },
  { q: "Can I meet the Dalai Lama in Dharamshala?", a: "The Dalai Lama's residence and the Tsuglagkhang temple complex are in McLeod Ganj, but public audiences aren't a standard tourist activity and access can be restricted during his travels or events — check current status before planning around this." },
  { q: "Is the Triund trek difficult?", a: "It's considered one of India's more accessible high-altitude treks — moderate difficulty, doable as a long day hike (roughly 9km one-way) or a relaxed overnight camp, without requiring technical climbing experience." },
  { q: "What is the budget for a trip to Dharamshala?", a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹4,000 a day. Add trekking gear rental or a guide fee if doing Triund with an operator." },
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
  { id: "introduction", title: "Why Dharamshala?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dharamshala", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DHARAMSHALA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for McLeod Ganj and the Triund trek",
    emoji: "🏔️",
    items: [
      { name: "Trekking Shoes", description: "Essential for the Triund trail, which climbs steadily over rocky, sometimes loose terrain to nearly 2,850m.", price: "₹3,299", rating: 4.5, reviews: "6.8k", image: "🥾", affiliateUrl: amazonSearchUrl("trekking+shoes+men+women"), tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700", why: "Triund's terrain shifts from forest path to open rocky ridge — solid ankle support matters." },
      { name: "Warm Layers", description: "Temperatures drop sharply at Triund's altitude even when McLeod Ganj feels mild — essential for an overnight camp.", price: "₹2,499", rating: 4.5, reviews: "4.7k", image: "🧥", affiliateUrl: amazonSearchUrl("warm+trekking+jacket+layers"), tag: "Non-negotiable", tagColor: "bg-red-100 text-red-700", why: "Many trekkers underestimate how cold Triund gets after sunset, even in summer months." },
      { name: "Rain Layer", description: "Dharamshala is one of India's wetter hill regions — a packable rain jacket is useful across most seasons.", price: "₹899", rating: 4.4, reviews: "5.1k", image: "🌂", affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"), tag: "Weather essential", tagColor: "bg-sky-100 text-sky-700", why: "Sudden showers are common here, not just during peak monsoon." },
      { name: "Sleeping Bag", description: "For an overnight camp at Triund — most trekking operators rent these, but bringing your own guarantees fit and warmth.", price: "₹2,999", rating: 4.4, reviews: "2.9k", image: "🎒", affiliateUrl: amazonSearchUrl("sleeping+bag+trekking+camping"), tag: "Overnight-trek essential", tagColor: "bg-purple-100 text-purple-700", why: "Rental sleeping bags at the campsite can be inconsistent quality — your own is a safer bet for a cold night." },
    ],
  },
];

export default function DharamshalaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/manali/solang-valley.jpg" alt="Himalayan valley representative of Dharamshala, Himachal Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Dharamshala", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Dharamshala", "McLeod Ganj", "Trekking", "Himachal Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Dharamshala Travel Guide: McLeod Ganj, Triund Trek & Tibetan Culture
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The seat-in-exile of the Dalai Lama, a Tibetan refugee town wrapped around Himalayan monasteries, and a short trek up to a grassy ridge with snow peaks close enough to touch.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Dharamshala, Himachal Pradesh" },
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
                  <h2>Why Dharamshala?</h2>
                  <p>
                    <strong>Dharamshala</strong> is really two towns stacked on a hillside: the lower town of everyday Himachal life, and <strong>McLeod Ganj</strong> above it — a genuinely distinctive settlement built around the Dalai Lama's residence-in-exile and the Central Tibetan Administration since 1960. It's one of the few places in India where you can walk between a working Buddhist monastery, a Himalayan trekking trailhead, and a third-wave coffee shop within a few hundred metres of each other.
                  </p>
                  <p>
                    The Dhauladhar range rises directly behind the town, and the Triund trek — one of India's most accessible high-altitude walks — climbs straight up from McLeod Ganj to a ridge with close, unobstructed mountain views.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🏔️</span> Dharamshala at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Himachal Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Tsuglagkhang Temple Complex" },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kangra (DHM), ~15km" },
                        { icon: "🥾", label: "Signature Trek", value: "Triund (~2,850m)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Dharamshala</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Mar – Jun", emoji: "🌸", color: "bg-amber-50 border-amber-200", mood: "Great trekking window", text: "Clear mountain views and comfortable trekking conditions before summer heat builds at lower elevations." },
                      { season: "Sept – Nov", emoji: "🍂", color: "bg-orange-50 border-orange-200", mood: "Best overall — our pick", text: "Post-monsoon clarity, dry trails, and crisp mountain air — the most reliable window for the Triund trek." },
                      { season: "Jul – Aug", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Heavy monsoon", text: "This is one of India's wetter hill regions — expect significant rain, landslide risk, and limited mountain visibility." },
                      { season: "Dec – Feb", emoji: "❄️", color: "bg-purple-50 border-purple-200", mood: "Snow season", text: "McLeod Ganj can see snow; Triund's upper reaches become a serious winter trek requiring proper gear and experience." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> September to November — the clearest mountain views and the most reliable conditions for the Triund trek.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Dharamshala</h2>
                  <ul>
                    <li><strong>By Air:</strong> Kangra Airport (DHM), about 15km away, has limited flight connectivity.</li>
                    <li><strong>By Train:</strong> Kangra is the nearest broad-gauge railhead; a narrow-gauge line runs closer to town, though connectivity is limited.</li>
                    <li><strong>By Road:</strong> Most travelers arrive via Pathankot (~90km), which has strong rail and road links from Delhi and Punjab.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Overnight Volvo buses from Delhi to McLeod Ganj are a popular, comfortable option if you'd rather skip the flight-plus-transfer combination.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Dharamshala</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/solang-valley.jpg" alt="Mountain scenery around Dharamshala and McLeod Ganj" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Tsuglagkhang Complex:</strong> The Dalai Lama's main temple complex in McLeod Ganj, open to visitors when not restricted for events.</li>
                    <li><strong>Triund Trek:</strong> A moderate day or overnight trek to a grassy ridge at roughly 2,850m with close Dhauladhar views — one of India's most accessible high-altitude treks.</li>
                    <li><strong>Bhagsu Falls and Bhagsunath Temple:</strong> A short walk from McLeod Ganj, popular for a quick outing.</li>
                    <li><strong>Namgyal Monastery:</strong> The Dalai Lama's personal monastery, part of the temple complex.</li>
                    <li><strong>HPCA Cricket Stadium:</strong> One of India's most scenically situated cricket grounds, with Dhauladhar peaks as a backdrop.</li>
                    <li><strong>McLeod Ganj's cafe scene:</strong> A long-running mix of Tibetan and international menus reflecting the town's backpacker and spiritual-tourism history.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Dharamshala</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹500–₹1,200/night", picks: ["Guesthouses in McLeod Ganj", "Monastery-adjacent budget stays", "Backpacker hostels"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,500/night", picks: ["Boutique hotels with mountain views", "Cafe-adjacent mid-range stays"] },
                      { tier: "Luxury", icon: "✨", range: "₹7,000–₹15,000+/night", picks: ["Premium hillside resorts", "High-end mountain-view properties"] },
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
                  <h2>What to Eat in Dharamshala</h2>
                  <ul>
                    <li><strong>Tibetan momos and thukpa:</strong> A defining part of McLeod Ganj's food scene, widely available and generally excellent.</li>
                    <li><strong>Himachali dham:</strong> A traditional festive vegetarian thali, available at select local restaurants.</li>
                    <li><strong>McLeod Ganj cafe fare:</strong> A long-running mix of Israeli, Japanese, and continental menus reflecting decades of international travelers.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Dharamshala Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "McLeod Ganj & Temple Complex", color: "bg-amber-700", activities: ["Arrive, check in", "Afternoon: Tsuglagkhang Complex and Namgyal Monastery", "Evening: explore McLeod Ganj cafes and markets"] },
                      { day: "Day 2", title: "Triund Trek", color: "bg-forest-600", activities: ["Early morning start on the Triund trail", "Reach the ridge, camp overnight or return same day", "Sunset/sunrise views over the Dhauladhar range"] },
                      { day: "Day 3", title: "Bhagsu Falls & Departure", color: "bg-orange-600", activities: ["Morning: Bhagsu Falls and Bhagsunath Temple", "Late morning: final shopping/cafe time", "Afternoon: departure"] },
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
                          ["Accommodation/night", "₹700", "₹2,800", "₹9,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          ["Trek gear/guide (Triund)", "₹500", "₹1,500", "₹3,000"],
                          ["Daily total", "₹1,500", "₹4,000", "₹10,500"],
                          ["3-Day trip total", "₹4,500", "₹12,000", "₹31,500"],
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
                  <h2>Essential Travel Tips for Dharamshala</h2>
                  <ul>
                    <li><strong>Verify Triund trek permit requirements:</strong> Registration processes have changed over time — check current requirements before setting out.</li>
                    <li><strong>Check Dalai Lama residence access:</strong> Areas can close temporarily during his travels or public events.</li>
                    <li><strong>Carry rain gear year-round:</strong> This is one of India's wetter hill regions.</li>
                    <li><strong>Respect monastery etiquette:</strong> Modest dress and quiet, respectful behavior are expected at religious sites.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Verify current Triund permit requirements before the trek", "Carry warm layers for the ridge, even in summer", "Respect monastery etiquette and dress modestly", "Try Tibetan food at long-running McLeod Ganj spots", "Check Dalai Lama residence access status if relevant"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Underestimate how cold Triund gets after dark", "Skip rain gear expecting dry weather", "Attempt Triund without checking current trail/permit status", "Expect guaranteed access to Dalai Lama events", "Ignore posted etiquette at monasteries"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Dharamshala", "McLeod Ganj", "Trekking", "Himachal Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DHARAMSHALA_GEAR} destination="Dharamshala" />
              <RelatedPostsGrid currentSlug="dharamshala-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="dharamshala-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
