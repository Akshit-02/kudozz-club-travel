// src/app/blog/orchha-travel-guide/page.tsx
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
  title: "Orchha Travel Guide: Cenotaphs, Palaces & Betwa River",
  description:
    "The complete Orchha travel guide. Orchha Fort Complex, Jahangir Mahal, Ram Raja Temple, the riverside Chhatris, where to stay, what to eat, and a 2-day itinerary through this uncrowded Bundela heritage town.",
  keywords:
    "Orchha travel guide, Orchha Fort, Jahangir Mahal, Ram Raja Temple, Orchha Chhatris, Betwa River, Orchha itinerary, best time to visit Orchha, how to reach Orchha, Orchha Jhansi, Orchha Madhya Pradesh, Orchha 2 day itinerary",
  openGraph: {
    title: "Orchha Travel Guide: Cenotaphs, Palaces & Betwa River",
    description:
      "A 16th-century Bundela capital of sandstone palaces and riverside chhatris, still remarkably uncrowded — the complete guide to Orchha.",
    url: "https://club.kudozz.in/blog/orchha-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/udaipur/saheliyon.jpg", width: 1200, height: 630, alt: "Sandstone palace architecture representative of Orchha, Madhya Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchha Travel Guide: Cenotaphs, Palaces & Betwa River",
    description: "Jahangir Mahal, Ram Raja Temple, and riverside cenotaphs — the complete guide to Orchha.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/orchha-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Orchha Travel Guide: Cenotaphs, Palaces & Betwa River",
          description: "The complete Orchha travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: { "@type": "Organization", name: "Kudozz Club", logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" } },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/orchha-travel-guide" },
          about: { "@type": "Place", name: "Orchha", address: { "@type": "PostalAddress", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Orchha Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  { q: "How many days do I need in Orchha?", a: "One full day covers the fort complex, Ram Raja Temple, and the riverside Chhatris comfortably. Two days lets you add a slower pace, a Betwa riverside walk, and a side trip to Jhansi." },
  { q: "What is the best time to visit Orchha?", a: "October to March offers the most comfortable weather for walking between the fort, temple, and riverbank. Summers get very hot, and the temple and palace complexes have little shade." },
  { q: "How do I reach Orchha?", a: "The nearest major hub is Jhansi Junction, about 16 km away, on a major North-South rail line with frequent trains from Delhi, Agra, and Bhopal. Orchha also has its own small railway station, and the nearest airports are Gwalior (GWL) and Khajuraho (HJR)." },
  { q: "Is Orchha worth visiting?", a: "Yes — it has one of the most complete and uncrowded clusters of medieval Indian architecture anywhere, especially the riverside Chhatris at sunset, without the crowds of bigger-name heritage sites." },
  { q: "Why is Ram Raja Temple unique?", a: "It's the only temple in India where Lord Rama is worshipped as a reigning king rather than purely as a deity. It was originally built as a palace, and tradition holds that once the idol was installed, it could not be moved — so the palace became a temple." },
  { q: "Can I combine Orchha with Gwalior or Khajuraho?", a: "Yes — Orchha sits neatly between Gwalior (via Jhansi, ~120 km) and Khajuraho, making it a natural stop on a Madhya Pradesh heritage circuit." },
  { q: "What is the budget for a trip to Orchha?", a: "A budget traveller can manage on roughly ₹1,200 a day, a mid-range trip runs closer to ₹3,200 a day, and upscale heritage stays can run ₹8,000+ a day, excluding transport to the region." },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Orchha?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Orchha", level: 2 },
  { id: "top-attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const ORCHHA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the fort complex, riverside walks, and temple visits",
    emoji: "🕌",
    items: [
      { name: "Comfortable Walking Shoes", description: "Jahangir Mahal and the surrounding fort complex involve plenty of stairs and uneven sandstone surfaces.", price: "₹1,699", rating: 4.5, reviews: "6.1k", image: "🥾", affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+heritage"), tag: "Heritage-walk essential", tagColor: "bg-red-100 text-red-700", why: "Worn sandstone steps throughout the palace complex are easy to underestimate in flimsy footwear." },
      { name: "Modest Cotton Wrap", description: "Ram Raja Temple, an active place of worship, expects modest dress — a light cotton stole or wrap covers shoulders easily.", price: "₹399", rating: 4.4, reviews: "4.0k", image: "🧣", affiliateUrl: amazonSearchUrl("cotton+wrap+travel+modest"), tag: "Temple essential", tagColor: "bg-stone-100 text-stone-700", why: "Unlike the fort ruins, Ram Raja Temple is a living shrine with daily rituals and a real dress expectation." },
      { name: "Sun Hat & Sunglasses", description: "The Chhatris riverbank and the open fort courtyards offer very little shade through the middle of the day.", price: "₹599", rating: 4.3, reviews: "4.2k", image: "🧢", affiliateUrl: amazonSearchUrl("sun+hat+sunglasses+travel"), tag: "Sun protection", tagColor: "bg-amber-100 text-amber-700", why: "Both the palace terraces and the cenotaph riverbank are fully exposed." },
      { name: "Compact Camera / Zoom Lens", description: "The riverside Chhatris at sunset are Orchha's signature photo — a decent zoom lens or a good phone camera goes a long way here.", price: "₹1,499", rating: 4.3, reviews: "3.1k", image: "📷", affiliateUrl: amazonSearchUrl("compact+camera+travel"), tag: "Sunset essential", tagColor: "bg-purple-100 text-purple-700", why: "The Chhatris reflected in the Betwa River at golden hour are the single most photographed scene in Orchha." },
    ],
  },
];

export default function OrchhaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/destinations/udaipur/saheliyon.jpg" alt="Sandstone palace architecture representative of Orchha, Madhya Pradesh" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Madhya Pradesh", href: "/blog/madhya-pradesh-travel-guide" }, { label: "Orchha", href: null }].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link> : <span className="text-white/35">{crumb.label}</span>}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Orchha", "Madhya Pradesh", "Betwa River", "Heritage", "Bundela"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Orchha Travel Guide: Cenotaphs, Palaces & Betwa River
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A 16th-century Bundela capital of sandstone palaces and riverside chhatris, still remarkably uncrowded — the complete guide to Orchha.
            </p>
            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[{ d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" }, { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Orchha, Madhya Pradesh" }, { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "1,800 words" }].map((m) => (
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
                  <h2>Why Orchha?</h2>
                  <p>
                    <strong>Orchha</strong> was the capital of the Bundela
                    Rajput dynasty from the 16th century, built on the banks
                    of the Betwa River, and it has aged into one of India's
                    most complete — and most overlooked — clusters of medieval
                    architecture. Unlike bigger heritage circuits, Orchha's
                    palaces, temples, and riverside cenotaphs sit in a
                    compact, walkable area that rarely feels crowded even in
                    peak season.
                  </p>
                  <p>
                    The town's centerpiece is an odd bit of history: Ram Raja
                    Temple, the only temple in India where Rama is worshipped
                    as a reigning king rather than purely as a god, born out
                    of a palace that — according to local tradition — simply
                    couldn't have its idol relocated once installed. Combine
                    that with a row of riverside chhatris that turn gold at
                    sunset, and Orchha earns its reputation as Madhya
                    Pradesh's most photogenic small town.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>🕌</span> Orchha at a Glance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[{ icon: "📍", label: "State", value: "Madhya Pradesh, India" }, { icon: "🏰", label: "Key Site", value: "Jahangir Mahal" }, { icon: "🌡️", label: "Best Time", value: "Oct – Mar" }, { icon: "✈️", label: "Airport", value: "Gwalior / Khajuraho" }, { icon: "🚆", label: "Rail Hub", value: "Jhansi Junction (~16 km)" }, { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹8,000" }].map(({ icon, label, value }) => (
                        <div key={label}><span className="text-stone-400 text-xs block">{icon} {label}</span><span className="text-stone-800 font-medium">{value}</span></div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Orchha</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Mar", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Cool, dry weather, ideal for walking between the fort complex, temple, and riverbank without the heat cutting the day short." },
                      { season: "Apr – Jun", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot", text: "Temperatures climb sharply, and the fort's open sandstone courtyards offer very little shade." },
                      { season: "Jul – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon", text: "A green, dramatic Betwa River and fewer visitors, though some riverside walks may be affected by higher water levels." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5"><span className="text-xl">{s.emoji}</span><span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span></div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote><strong>Our pick:</strong> November to February, and try to time your visit for a clear sunset at the riverside Chhatris — the single best moment in Orchha.</blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Orchha</h2>
                  <ul>
                    <li><strong>By Air:</strong> The nearest airports are Gwalior (GWL, ~120 km) and Khajuraho (HJR), both requiring a further road journey.</li>
                    <li><strong>By Train:</strong> Jhansi Junction, about 16 km away, is a major North-South rail hub with frequent trains from Delhi, Agra, and Bhopal. Orchha also has its own small station with limited services.</li>
                    <li><strong>By Road:</strong> Auto-rickshaws and taxis run regularly between Jhansi and Orchha (roughly 30-40 minutes); the drive itself is straightforward on well-paved roads.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Treat Jhansi purely as a transit point — most travelers base themselves in Orchha itself, which has far more character and a much better range of heritage-style stays.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Attractions in Orchha</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/udaipur/saheliyon.jpg" alt="Palace and riverside architecture in Orchha" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Jahangir Mahal:</strong> A palace built to host Mughal emperor Jahangir for a single royal visit, elaborately domed and turreted, and the fort complex's architectural highlight.</li>
                    <li><strong>Raja Mahal:</strong> The older royal residence within the fort, known for faded but still vivid mural work in its inner chambers.</li>
                    <li><strong>Ram Raja Temple:</strong> The only temple in India where Rama is worshipped as a king rather than purely a deity — originally a palace, converted by tradition rather than design.</li>
                    <li><strong>The Chhatris:</strong> A row of memorial cenotaphs for Bundela rulers along the Betwa riverbank, especially striking at sunset when reflected in the water.</li>
                    <li><strong>Laxmi Narayan Temple:</strong> Notable for mural and fresco work that blends temple and fort architectural styles, a short walk from the main complex.</li>
                    <li><strong>Betwa River activities:</strong> Riverside walks and seasonal rafting give an easy, unhurried way to spend an afternoon between the main sights.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹600–₹1,500/night", picks: ["Guesthouses near Ram Raja Temple", "Budget lodges, town center"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹4,500/night", picks: ["Heritage-style boutique stays", "Riverside guesthouses"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹14,000+/night", picks: ["Amar Mahal heritage hotel", "Premium riverside resorts"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">{t.picks.map((p) => <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Orchha</h2>
                  <ul>
                    <li><strong>Local thalis:</strong> Simple vegetarian Madhya Pradesh-style thalis are the most common and reliable option in Orchha's small selection of eateries.</li>
                    <li><strong>Poha & jalebi:</strong> A classic Central Indian breakfast, easy to find at small stalls around the temple area in the morning.</li>
                    <li><strong>Riverside cafes:</strong> A handful of laid-back cafes near the Betwa serve simple Indian and continental fare, popular for a relaxed evening after temple visits.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Orchha Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Fort Complex & Temple", color: "bg-amber-700", activities: ["Morning: Jahangir Mahal and Raja Mahal", "Afternoon: Ram Raja Temple", "Evening: Sunset at the riverside Chhatris"] },
                      { day: "Day 2", title: "Riverside & Slow Town", color: "bg-forest-600", activities: ["Morning: Laxmi Narayan Temple", "Betwa riverside walk or rafting", "Afternoon: Depart via Jhansi"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0"><div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div></div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">{d.activities.map((a) => <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}><span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>{a}</li>)}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead><tr className="bg-amber-50">{["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>)}</tr></thead>
                      <tbody>
                        {[["Accommodation/night", "₹600", "₹2,500", "₹9,000"], ["Food/day", "₹300", "₹700", "₹1,600"], ["Local transport per day", "₹150", "₹500", "₹1,200"], ["Entry fees/activities", "₹100", "₹300", "₹600"], ["Daily total", "₹1,150", "₹4,000", "₹12,400"], ["2-Day trip total", "₹2,300", "₹8,000", "₹24,800"]].map(([exp, b, m, l], i) => (
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
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li><strong>Time the Chhatris for sunset:</strong> The riverside cenotaphs reflected in golden-hour light are Orchha's defining image.</li>
                    <li><strong>Dress modestly at Ram Raja Temple:</strong> It's a living, active shrine, unlike the surrounding fort ruins.</li>
                    <li><strong>Combine with Gwalior and Khajuraho:</strong> Orchha slots naturally into a Madhya Pradesh heritage circuit via Jhansi.</li>
                    <li><strong>Keep expectations modest on facilities:</strong> Orchha is a small town — dining and nightlife options are limited compared to bigger cities.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Watch sunset from the riverside Chhatris", "Dress modestly for Ram Raja Temple", "Explore Jahangir Mahal slowly — it rewards a close look", "Base yourself in Orchha rather than Jhansi", "Combine with Gwalior for a fuller heritage loop"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Rush through in a few hours en route elsewhere", "Expect big-city dining or nightlife options", "Skip the Betwa riverside walk", "Visit Ram Raja Temple in beachwear-style clothing", "Miss the light and shadow on the fort in early morning"].map((item) => <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>)}
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
                {["Orchha", "Madhya Pradesh", "Jahangir Mahal", "Ram Raja Temple", "Heritage", "India"].map((tag) => <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>)}
              </div>

              <TrekGearRecommendations sections={ORCHHA_GEAR} destination="Orchha" />
              <RelatedPostsGrid currentSlug="orchha-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0"><div className="sticky top-24"><RelatedSidebar currentSlug="orchha-travel-guide" /></div></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
