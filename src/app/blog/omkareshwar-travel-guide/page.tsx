// src/app/blog/omkareshwar-travel-guide/page.tsx
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
  title: "Omkareshwar Travel Guide: Jyotirlinga Island Temple & Narmada Ghats",
  description:
    "The complete Omkareshwar travel guide. The Om-shaped Mandhata island temple, Mamleshwar Temple, Narmada Parikrama, riverside ghats and boating, where to stay, and a 1-day itinerary.",
  keywords:
    "Omkareshwar travel guide, Omkareshwar Jyotirlinga, Mandhata Island, Mamleshwar Temple, Narmada Parikrama, Omkareshwar itinerary, best time to visit Omkareshwar, how to reach Omkareshwar, Omkareshwar Madhya Pradesh",
  openGraph: {
    title: "Omkareshwar Travel Guide: Jyotirlinga Island Temple & Narmada Ghats",
    description:
      "A Shiva temple on an island shaped like the sacred Om symbol, ringed by the Narmada River — the complete guide to Omkareshwar.",
    url: "https://club.kudozz.in/blog/omkareshwar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      { url: "/images/destinations/kerala/alleppey.jpg", width: 1200, height: 630, alt: "A river landscape representative of the Narmada at Omkareshwar" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkareshwar Travel Guide: Jyotirlinga Island Temple & Narmada Ghats",
    description: "A Shiva temple on an Om-shaped island, ringed by the Narmada River — the complete guide to Omkareshwar.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/omkareshwar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Omkareshwar Travel Guide: Jyotirlinga Island Temple & Narmada Ghats",
          description: "The complete Omkareshwar travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/omkareshwar-travel-guide" },
          about: { "@type": "Place", name: "Omkareshwar", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Omkareshwar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Omkareshwar?",
    a: "A single day or overnight stop is enough for most travellers — the temple, island, and ghats can be comfortably covered in half a day, with a sunset boat ride as a nice way to close it out.",
  },
  {
    q: "What is Omkareshwar famous for?",
    a: "The Omkareshwar Jyotirlinga Temple, one of the 12 Jyotirlingas of Shiva, located on Mandhata (Shivapuri) island in the Narmada River — an island traditionally said to be shaped like the sacred Om symbol.",
  },
  {
    q: "Is Omkareshwar the same as Mamleshwar?",
    a: "They're closely linked but distinct — Omkareshwar Temple sits on the island, while Mamleshwar Temple is on the mainland bank and is sometimes considered a companion Jyotirlinga site. Many pilgrims visit both.",
  },
  {
    q: "What is the best time to visit Omkareshwar?",
    a: "October to March, for comfortable temperatures for the walk to the island and around the ghats.",
  },
  {
    q: "How do I reach Omkareshwar?",
    a: "The nearest airport is Indore (IDR), about 75 km away, with Omkareshwar Road or Khandwa as the nearest railway stations. It's well connected by road from both Indore and Khandwa.",
  },
  {
    q: "Can Omkareshwar be combined with Mandu or Indore?",
    a: "Yes — it sits roughly between Indore and Mandu, making it easy to combine into a wider western Madhya Pradesh itinerary covering both.",
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
  { id: "introduction", title: "Why Omkareshwar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Omkareshwar", level: 2 },
  { id: "attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const OMKARESHWAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the island temple, ghats, and riverside walks",
    emoji: "🕉️",
    items: [
      { name: "Modest Temple Wear", description: "Covered shoulders and knees are expected at both Omkareshwar and Mamleshwar temples.", price: "₹599", rating: 4.4, reviews: "3.4k", image: "🧣", affiliateUrl: amazonSearchUrl("modest+travel+clothing+cotton"), tag: "Temple essential", tagColor: "bg-purple-100 text-purple-700", why: "Omkareshwar is an active, revered Jyotirlinga site, not a heritage-only monument." },
      { name: "Comfortable Sandals", description: "The walk across the bridge to Mandhata island and around the ghats involves steps and stone paths best done in secure footwear.", price: "₹799", rating: 4.4, reviews: "3.7k", image: "👡", affiliateUrl: amazonSearchUrl("comfortable+sandals+travel"), tag: "Ghat essential", tagColor: "bg-amber-100 text-amber-700", why: "You'll remove footwear frequently near temples, so easy-on, easy-off sandals beat laced shoes here." },
      { name: "Sun Protection (Hat + Sunscreen)", description: "The island and riverside paths offer little shade across a fair amount of walking.", price: "₹699", rating: 4.4, reviews: "4.2k", image: "🧴", affiliateUrl: amazonSearchUrl("travel+sunscreen+hat+combo"), tag: "Riverside essential", tagColor: "bg-orange-100 text-orange-700", why: "Much of an Omkareshwar visit happens outdoors along open riverbank and island paths." },
      { name: "Small Bag for Shoes & Valuables", description: "Footwear comes off before entering the temple, and a dedicated bag makes crowded queues easier to manage.", price: "₹299", rating: 4.3, reviews: "3.1k", image: "👝", affiliateUrl: amazonSearchUrl("travel+shoe+bag+pouch"), tag: "Temple essential", tagColor: "bg-forest-100 text-forest-700", why: "Shoe-drop areas near the temple entrance can get crowded, especially on weekends." },
      { name: "Reusable Water Bottle", description: "Useful for the island walk and ghat-side time, particularly outside the cooler months.", price: "₹349", rating: 4.5, reviews: "6.0k", image: "💧", affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"), tag: "Travel essential", tagColor: "bg-sky-100 text-sky-700", why: "Shops thin out once you're across the bridge onto the island itself." },
    ],
  },
];

export default function OmkareshwarGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/kerala/alleppey.jpg" alt="A river landscape representative of the Narmada at Omkareshwar" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Madhya Pradesh", href: "/blog/madhya-pradesh-travel-guide" },
                { label: "Omkareshwar", href: null },
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
              {["Omkareshwar", "Narmada River", "Heritage", "Madhya Pradesh"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Omkareshwar Travel Guide: Jyotirlinga Island Temple & Narmada Ghats
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A Shiva temple on an island shaped like the sacred Om symbol,
              ringed by the Narmada River — everything you need to plan a
              trip to Omkareshwar.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Omkareshwar, Madhya Pradesh" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,750 words" },
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
                  <h2>Why Omkareshwar?</h2>
                  <p>
                    On <strong>Mandhata Island</strong> (also called
                    Shivapuri), where the Narmada River splits and rejoins
                    itself, sits one of Hinduism's most distinctive
                    pilgrimage sites — an island traditionally said to be
                    shaped like the sacred{" "}
                    <strong>Om</strong> symbol, home to the{" "}
                    <strong>Omkareshwar Jyotirlinga Temple</strong>, one of
                    only twelve Jyotirlingas of Shiva in India.
                  </p>
                  <p>
                    A bridge connects the island to the mainland, where{" "}
                    <strong>Mamleshwar Temple</strong> sits on the opposite
                    bank, sometimes considered a companion Jyotirlinga site.
                    Around both temples run the Narmada's ghats — a
                    riverside world of boat rides, bathing steps, and the
                    long-standing tradition of the{" "}
                    <strong>Narmada Parikrama</strong>, a circumambulation
                    pilgrimage along the length of the river. It's a smaller,
                    quieter pilgrimage stop than Ujjain, and easy to combine
                    with Indore or Mandu.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🕉️</span> Omkareshwar at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Madhya Pradesh, India" },
                        { icon: "🛕", label: "Key Site", value: "Omkareshwar Jyotirlinga" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Indore (IDR), ~75 km" },
                        { icon: "🌊", label: "River", value: "Narmada" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Omkareshwar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall", text: "Cool, comfortable weather for the island walk and ghat-side time — the most pleasant window to visit." },
                      { season: "Apr – Jun", emoji: "🔥", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Dry heat builds through the day; an early-morning or evening visit avoids the worst of it." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-forest-50 border-forest-200", mood: "Monsoon", text: "The Narmada swells dramatically and the surroundings turn lush green, though boating can be suspended when the river runs high." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February, for comfortable temperatures and calm river conditions for boating.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Omkareshwar</h2>
                  <ul>
                    <li><strong>By Air:</strong> Indore (IDR) is the nearest airport, about 75 km away.</li>
                    <li><strong>By Train:</strong> Omkareshwar Road and Khandwa are the nearest railway stations, both requiring a short onward drive.</li>
                    <li><strong>By Road:</strong> Well connected from both Indore and Khandwa, and easily combined with a Mandu or Maheshwar trip.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Cross to the island early in the morning, before the day-trip crowds from Indore arrive — the temple and ghats are noticeably calmer before mid-morning.
                  </div>
                </section>

                <section id="attractions">
                  <h2>Top Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/kerala/alleppey.jpg" alt="Riverside scenery representative of the Narmada at Omkareshwar" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Omkareshwar Jyotirlinga Temple:</strong> One of the 12 Jyotirlingas of Shiva, located on Mandhata island — the reason most travellers come.</li>
                    <li><strong>Mamleshwar Temple:</strong> On the mainland bank, sometimes considered a companion Jyotirlinga site, and often visited alongside Omkareshwar.</li>
                    <li><strong>Narmada ghats and boating:</strong> Riverside steps and boat rides along the Narmada, particularly scenic at sunset.</li>
                    <li><strong>Narmada Parikrama route:</strong> Omkareshwar is a significant stop on the long-standing circumambulation pilgrimage along the Narmada River.</li>
                    <li><strong>Kajal Rani Cave:</strong> A smaller, quieter site worth a stop for those with extra time.</li>
                    <li><strong>Omkareshwar Dam:</strong> A large hydro project on the Narmada nearby, a reminder of the river's modern significance alongside its sacred one.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹600–₹1,500/night", picks: ["Dharamshalas and pilgrim lodges near the temple", "Simple guesthouses on the mainland side"] },
                      { tier: "Mid-Range", icon: "🏩", range: "₹1,800–₹4,000/night", picks: ["Riverside hotels on the mainland", "MP Tourism guesthouses"] },
                      { tier: "Luxury", icon: "✨", range: "₹4,500–₹9,000+/night", picks: ["Riverfront resort-style stays", "Boutique heritage stays nearby"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => (<li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>))}</ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>Options here are simpler than Ujjain or Indore — most travellers treat Omkareshwar as a day trip or a single overnight rather than a longer base.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Omkareshwar</h2>
                  <ul>
                    <li><strong>Temple prasad:</strong> Simple vegetarian offerings are widely available around the temple.</li>
                    <li><strong>Local vegetarian thalis:</strong> Basic, filling meals are the norm at eateries near the ghats and mainland market.</li>
                    <li><strong>Riverside snack stalls:</strong> Simple snacks and chai are readily available along the ghat approach roads.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Omkareshwar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Morning", title: "Temple & Island", color: "bg-amber-700", activities: ["Early arrival, cross the bridge to Mandhata island", "Darshan at Omkareshwar Jyotirlinga Temple", "Walk around the island's smaller shrines"] },
                      { day: "Afternoon / Evening", title: "Mamleshwar & Ghats", color: "bg-forest-600", activities: ["Visit Mamleshwar Temple on the mainland", "Relaxed time along the Narmada ghats", "Sunset boat ride on the river"] },
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
                          ["Accommodation/night", "₹600", "₹2,500", "₹6,500"],
                          ["Food/day", "₹250", "₹600", "₹1,500"],
                          ["Boat ride & local transport", "₹200", "₹500", "₹1,200"],
                          ["Daily total", "₹1,050", "₹3,600", "₹9,200"],
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
                    <li><strong>Cross to the island early:</strong> Mornings before mid-morning day-trip crowds arrive from Indore are noticeably calmer.</li>
                    <li><strong>Dress modestly:</strong> Covered shoulders and knees are expected at both Omkareshwar and Mamleshwar temples.</li>
                    <li><strong>Check boating conditions in monsoon:</strong> Rides can be suspended when the Narmada runs high.</li>
                    <li><strong>Combine with Mandu or Indore:</strong> Omkareshwar works well as a stop on a wider western Madhya Pradesh route.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Cross to the island early to beat the crowds", "Visit both Omkareshwar and Mamleshwar temples", "Take a sunset boat ride on the Narmada", "Combine the visit with Mandu or Indore", "Dress modestly at both temples"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Arrive mid-morning expecting a quiet temple visit", "Skip Mamleshwar Temple on the mainland", "Book a boat ride without checking river conditions in monsoon", "Wear revealing or beachwear-style clothing near temples", "Rush the ghat-side time — it's the calmest part of the visit"].map((item) => (<li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>))}
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
                {["Omkareshwar", "Narmada River", "Heritage", "Madhya Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={OMKARESHWAR_GEAR} destination="Omkareshwar" />
              <RelatedPostsGrid currentSlug="omkareshwar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24"><RelatedSidebar currentSlug="omkareshwar-travel-guide" /></div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
