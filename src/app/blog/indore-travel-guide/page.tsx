// src/app/blog/indore-travel-guide/page.tsx
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
  title: "Indore Travel Guide: Sarafa Bazaar, Rajwada & Street Food Capital",
  description:
    "The complete Indore travel guide. Rajwada Palace, Sarafa Bazaar's night food market, Chappan Dukan, Lal Bagh Palace, Kanch Mandir, where to stay, what to eat, and a 2-day itinerary for India's street food capital.",
  keywords:
    "Indore travel guide, Sarafa Bazaar, Rajwada Palace, Chappan Dukan, Indore street food, Lal Bagh Palace, Kanch Mandir Indore, Indore itinerary, best time to visit Indore, how to reach Indore, Indore Madhya Pradesh",
  openGraph: {
    title: "Indore Travel Guide: Sarafa Bazaar, Rajwada & Street Food Capital",
    description:
      "India's cleanest city and its unofficial street food capital, with a night market that comes alive after 9pm and an 18th-century Holkar palace at its heart — the complete guide to Indore.",
    url: "https://club.kudozz.in/blog/indore-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      { url: "/images/destinations/udaipur/hero.jpg", width: 1200, height: 630, alt: "Palace architecture representative of Indore's Holkar-era heritage" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indore Travel Guide: Sarafa Bazaar, Rajwada & Street Food Capital",
    description: "A night market that comes alive after 9pm and an 18th-century Holkar palace — the complete guide to Indore.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/indore-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Indore Travel Guide: Sarafa Bazaar, Rajwada & Street Food Capital",
          description: "The complete Indore travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/indore-travel-guide" },
          about: { "@type": "Place", name: "Indore", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Indore Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Indore?",
    a: "Two days is enough to cover Rajwada, Lal Bagh Palace, Kanch Mandir, and both Sarafa Bazaar at night and Chappan Dukan during the day — the two food streets are really the heart of any Indore visit.",
  },
  {
    q: "What is Indore famous for?",
    a: "Being India's unofficial street food capital (Sarafa Bazaar's night market and Chappan Dukan's all-day food street), the Rajwada and Lal Bagh Holkar-era palaces, the mirror-mosaic Kanch Mandir, and repeatedly topping India's Swachh Survekshan cleanliness rankings.",
  },
  {
    q: "What time does Sarafa Bazaar's night market start?",
    a: "The jewellery shops close and the food stalls take over roughly from 8-9pm, running until around 1-2am. Go hungry and go late — early evening is still the jewellery market, not the food scene.",
  },
  {
    q: "Is Chappan Dukan the same as Sarafa Bazaar?",
    a: "No — Chappan Dukan ('56 shops') is a separate, dedicated food street that operates through the day and evening, while Sarafa Bazaar is a jewellery market by day that becomes a night-only food market. Most visitors do both on different days or at different times.",
  },
  {
    q: "What is the best time to visit Indore?",
    a: "October to March, when temperatures are comfortable for walking the markets and palace grounds. Summers (April-June) get very hot.",
  },
  {
    q: "How do I reach Indore?",
    a: "Devi Ahilyabai Holkar Airport (IDR) has strong domestic connectivity, Indore Junction is a major railway hub, and it's about 190 km / 4 hours from Bhopal by road.",
  },
  {
    q: "Is Indore a good base for other Madhya Pradesh trips?",
    a: "Yes — Ujjain (~55 km), Omkareshwar (~75 km), Mandu (~100 km), and Maheshwar are all reachable as day trips or short overnight stops from Indore, making it a practical hub for western MP.",
  },
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
  { id: "introduction", title: "Why Indore?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Indore", level: 2 },
  { id: "attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "Sarafa Bazaar & Street Food", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const INDORE_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a market-hopping, food-first city trip",
    emoji: "🍛",
    items: [
      { name: "Comfortable Walking Shoes", description: "A night at Sarafa Bazaar and a day at Chappan Dukan both mean hours on your feet weaving through stalls.", price: "₹1,199", rating: 4.4, reviews: "4.1k", image: "👟", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+outdoor"), tag: "Market-day essential", tagColor: "bg-amber-100 text-amber-700", why: "Both of Indore's famous food streets are best explored slowly, on foot, over several hours." },
      { name: "Basic Antacid / Digestive Aid", description: "A genuinely useful, light-hearted item for anyone sampling their way through Indore's street food scene in one sitting.", price: "₹99", rating: 4.3, reviews: "5.2k", image: "💊", affiliateUrl: amazonSearchUrl("antacid+travel+pack"), tag: "Food-trip essential", tagColor: "bg-red-100 text-red-700", why: "Sarafa Bazaar and Chappan Dukan both reward serious quantity — pace yourself or carry backup." },
      { name: "Small Cash Pouch", description: "Most stalls at Sarafa Bazaar and Chappan Dukan are cash-only, and keeping small notes handy speeds up ordering.", price: "₹299", rating: 4.3, reviews: "3.8k", image: "👛", affiliateUrl: amazonSearchUrl("travel+cash+pouch+wallet"), tag: "Street-food essential", tagColor: "bg-forest-100 text-forest-700", why: "Card acceptance is patchy at street stalls even in a well-developed city like Indore." },
      { name: "Reusable Water Bottle", description: "Useful across a day of palace-and-market walking, especially outside the cooler winter months.", price: "₹349", rating: 4.5, reviews: "6.0k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Travel essential", tagColor: "bg-sky-100 text-sky-700", why: "Indore's markets involve a lot of standing and slow walking in close, warm crowds." },
      { name: "Compact Daypack", description: "For carrying a jacket for the night market, camera gear, and any small shopping picked up along the way.", price: "₹899", rating: 4.4, reviews: "3.6k", image: "🎒", affiliateUrl: amazonSearchUrl("daypack+travel+lightweight"), tag: "City-day essential", tagColor: "bg-purple-100 text-purple-700", why: "Sarafa Bazaar runs late into the night and can get cool — a daypack keeps a layer handy without carrying it by hand." },
    ],
  },
];

export default function IndoreGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/udaipur/hero.jpg" alt="Palace architecture representative of Indore's Holkar-era heritage" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Madhya Pradesh", href: "/blog/madhya-pradesh-travel-guide" },
                { label: "Indore", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (<Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>) : (<span className="text-white/35">{crumb.label}</span>)}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Indore", "Street Food", "Heritage", "Madhya Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Indore Travel Guide: Sarafa Bazaar, Rajwada & Street Food Capital
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              India's cleanest city and its unofficial street food capital,
              with a night market that comes alive after 9pm and an
              18th-century Holkar palace at its heart — everything you need
              to plan a trip to Indore.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "12 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Indore, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,200 words" },
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
                  <h2>Why Indore?</h2>
                  <p>
                    <strong>Indore</strong> is Madhya Pradesh's largest city
                    and its commercial engine, but the reason travellers make
                    a special trip here has little to do with commerce — it's
                    the food. Indore has quietly built a reputation as one of
                    India's great street food cities, anchored by two
                    legendary food streets: <strong>Sarafa Bazaar</strong>,
                    a jewellery market that transforms into a night-only food
                    bazaar, and <strong>Chappan Dukan</strong> ("56 shops"),
                    a dedicated food street that runs through the day.
                  </p>
                  <p>
                    Beneath the food scene sits a genuine Holkar dynasty
                    capital — the seven-storey Rajwada Palace facing the main
                    square, the grand European-influenced Lal Bagh Palace, and
                    a Jain temple entirely encrusted in mirror mosaic at Kanch
                    Mandir. Add repeated wins as India's cleanest city in the
                    Swachh Survekshan rankings, and Indore turns out to be a
                    far more rewarding stop than its reputation as "just a
                    business city" suggests.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🍛</span> Indore at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🏛️", label: "Key Site", value: "Rajwada Palace" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Devi Ahilyabai Holkar (IDR)" },
                        { icon: "🍜", label: "Famous For", value: "Sarafa Bazaar night market" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹6,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Indore</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall", text: "Cool, dry, comfortable evenings — exactly what a night spent standing at food stalls calls for." },
                      { season: "Apr – Jun", emoji: "🔥", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Daytime heat is intense; plan sightseeing for early morning or evening and save midday for indoor stops." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-forest-50 border-forest-200", mood: "Monsoon", text: "Humid with periodic heavy rain — markets stay open, but outdoor palace walks can get disrupted." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February — cool evenings make the Sarafa Bazaar night market genuinely comfortable rather than sweaty.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Indore</h2>
                  <ul>
                    <li><strong>By Air:</strong> Devi Ahilyabai Holkar Airport (IDR) has strong domestic connectivity to major Indian cities.</li>
                    <li><strong>By Train:</strong> Indore Junction is a major railway hub on multiple lines, well connected to Delhi, Mumbai, and the rest of Madhya Pradesh.</li>
                    <li><strong>By Road:</strong> About 190 km / 4 hours from Bhopal via NH46, and well connected to Ujjain (~55 km) and Omkareshwar (~75 km).</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Indore's strong flight and rail connectivity makes it the most practical base for visiting Ujjain, Omkareshwar, and Mandu as day trips or short add-ons rather than flying into each separately.
                  </div>
                </section>

                <section id="attractions">
                  <h2>Top Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/udaipur/hero.jpg" alt="Holkar-era palace architecture in Indore" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Rajwada Palace:</strong> A seven-storey 18th-century Holkar dynasty palace facing the city's main square — Indore's most recognisable landmark.</li>
                    <li><strong>Lal Bagh Palace:</strong> A grand, European-influenced Holkar palace on the city's edge, now a museum showcasing royal furniture and décor.</li>
                    <li><strong>Kanch Mandir:</strong> A Jain temple with every interior surface — walls, ceilings, floors — decorated in mirror and glass mosaic work.</li>
                    <li><strong>Sarafa Bazaar:</strong> A jewellery market by day that becomes MP's most famous night food market after dark — the single best reason to visit Indore.</li>
                    <li><strong>Chappan Dukan:</strong> A dedicated all-day food street ("56 shops"), a good daytime alternative or companion to Sarafa Bazaar's night scene.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹900–₹2,000/night", picks: ["Guesthouses near Rajwada", "Budget hotels near the railway station"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹2,200–₹5,000/night", picks: ["Business hotels around Vijay Nagar", "Hotels near Chappan Dukan"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹14,000+/night", picks: ["International chain hotels", "Heritage-style boutique stays"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Stay near Rajwada or Chappan Dukan — both put you within walking distance of the old city and a short auto ride from Sarafa Bazaar.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>Sarafa Bazaar & Street Food</h2>
                  <ul>
                    <li><strong>Sarafa Bazaar (night):</strong> Jewellery shops shut around 8-9pm and stalls take over, running until roughly 1-2am — garadu (fried purple yam), bhutte ka kees, jalebi, and dozens of other specialties in one dense lane.</li>
                    <li><strong>Chappan Dukan (day):</strong> A more relaxed, all-day alternative with 56-plus permanent food shops — good for a first taste of Indori snacking without the late-night crowd.</li>
                    <li><strong>Poha-jalebi:</strong> Indore's iconic breakfast combination — spiced flattened rice with a syrupy jalebi on the side, sold at countless small stalls across the city.</li>
                    <li><strong>Where to eat:</strong> Just wander — both food streets are built for grazing across multiple stalls rather than picking one restaurant.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Indore Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Heritage & Chappan Dukan", color: "bg-amber-700", activities: ["Morning: Rajwada Palace and the old city square", "Midday: Lal Bagh Palace museum", "Afternoon: Kanch Mandir", "Evening: Chappan Dukan for an early dinner"] },
                      { day: "Day 2", title: "Markets & Sarafa Bazaar Night Market", color: "bg-forest-600", activities: ["Daytime: local markets and any short excursion (Ujjain is a viable half-day trip)", "Evening: light dinner, then head to Sarafa Bazaar around 9pm", "Late night: graze through Sarafa Bazaar's food stalls", "Departure the next morning"] },
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
                          ["Accommodation/night", "₹900", "₹3,200", "₹9,000"],
                          ["Food/day (street food heavy)", "₹350", "₹800", "₹2,000"],
                          ["Local transport/day", "₹250", "₹700", "₹1,800"],
                          ["Daily total", "₹1,500", "₹4,700", "₹12,800"],
                          ["2-Day trip total", "₹3,000", "₹9,400", "₹25,600"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flights/trains to the region.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Go to Sarafa Bazaar hungry and after 9pm:</strong> Earlier than that it's still a jewellery market — the food stalls take over later in the evening.</li>
                    <li><strong>Carry cash:</strong> Most street stalls at both Sarafa Bazaar and Chappan Dukan don't accept cards.</li>
                    <li><strong>Pace yourself:</strong> The sheer variety on offer makes it easy to overeat in one sitting — share dishes and graze rather than order full portions everywhere.</li>
                    <li><strong>Use Indore as a base:</strong> Ujjain, Omkareshwar, and Mandu are all realistic day trips or short add-ons from here.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit Sarafa Bazaar after 9pm on an empty stomach", "Try poha-jalebi for breakfast at least once", "Visit Rajwada and Lal Bagh Palace during the day", "Use Indore as a base for Ujjain and Omkareshwar", "Carry small cash for street stalls"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Show up at Sarafa Bazaar early evening expecting food stalls", "Order full portions at every stall you pass", "Rely on cards for street food purchases", "Skip Chappan Dukan just because you've done Sarafa Bazaar", "Rush the palace visits — both reward unhurried time"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Indore", "Street Food", "Heritage", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={INDORE_GEAR} destination="Indore" />
              <RelatedPostsGrid currentSlug="indore-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="indore-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
