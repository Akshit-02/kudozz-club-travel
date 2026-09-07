// src/app/blog/bhandardara-travel-guide/page.tsx
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

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bhandardara Travel Guide: Arthur Lake, Waterfalls & Camping",
  description:
    "The complete Bhandardara travel guide — Arthur Lake and Wilson Dam, Randha Falls, the Kalsubai Peak trek, camping and stargazing, how to reach, where to stay, and a 2-day itinerary.",
  keywords:
    "Bhandardara travel guide, Arthur Lake, Wilson Dam, Randha Falls, Kalsubai Peak trek, Ratangad Fort trek, Bhandardara camping, Bhandardara stargazing, best time to visit Bhandardara, how to reach Bhandardara, Bhandardara from Mumbai, Bhandardara from Pune, Bhandardara itinerary",
  openGraph: {
    title: "Bhandardara Travel Guide: Arthur Lake, Waterfalls & Camping",
    description:
      "A quiet dam-side lake ringed by peaks, a waterfall that free-falls 300 feet, and some of Maharashtra's clearest night skies — the complete guide to Bhandardara.",
    url: "https://club.kudozz.in/blog/bhandardara-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Lake ringed by hills, representative of Bhandardara's Arthur Lake, Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhandardara Travel Guide: Arthur Lake, Waterfalls & Camping",
    description:
      "Arthur Lake, Randha Falls, and the Kalsubai Peak trek — the complete guide to Bhandardara.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bhandardara-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Bhandardara Travel Guide: Arthur Lake, Waterfalls & Camping",
          description: "The complete Bhandardara travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/bhandardara-travel-guide" },
          about: {
            "@type": "Place",
            name: "Bhandardara",
            address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Bhandardara Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Bhandardara?",
    a: "Two days is a comfortable amount — one for Arthur Lake, Wilson Dam, and Randha Falls, and a second dedicated to the Kalsubai Peak trek, Maharashtra's highest point.",
  },
  {
    q: "What is the best time to visit Bhandardara?",
    a: "Post-monsoon, September to February, is the best overall window — the lake is full, waterfalls are still flowing, and skies are clear for stargazing. Monsoon (June–September) brings the waterfalls to peak flow but makes trekking trails muddy and slippery.",
  },
  {
    q: "How do I reach Bhandardara from Mumbai or Pune?",
    a: "Bhandardara is about 165 km from Mumbai (roughly 4 hours by road) and around 180 km from Pune. The nearest railheads are Igatpuri (~65 km) or Kasara, from where you'd continue by road.",
  },
  {
    q: "How difficult is the Kalsubai Peak trek?",
    a: "It's a moderate trek — no technical climbing skills required, but it does involve a genuine multi-hour climb with some iron ladder sections near the summit. Fitness and proper trekking shoes matter more than prior trekking experience.",
  },
  {
    q: "Is camping available at Bhandardara?",
    a: "Yes — lakeside and hillside camping is one of Bhandardara's biggest draws, popular for its dark, mostly light-pollution-free night skies. Book camping spots or homestays in advance, especially for weekends.",
  },
  {
    q: "What is the budget for a trip to Bhandardara?",
    a: "A budget traveller camping or staying in a basic homestay can manage on roughly ₹1,200 a day, while a mid-range trip with an MTDC resort or better-equipped campsite runs closer to ₹3,000 a day, excluding travel to the region.",
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
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Bhandardara?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bhandardara", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay & Camp", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BHANDARDARA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the Kalsubai trek and lakeside camping nights",
    emoji: "⛺",
    items: [
      {
        name: "Trekking Shoes",
        description: "The Kalsubai Peak trek includes rocky, sometimes slippery sections and iron ladder climbs near the summit — proper grip matters.",
        price: "₹3,499", rating: 4.5, reviews: "5.4k", image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+ankle+support"),
        tag: "Trek essential", tagColor: "bg-amber-100 text-amber-700",
        why: "Loose gravel and wet rock near the summit ladders are where most minor injuries on this trek happen.",
      },
      {
        name: "Warm Jacket / Fleece Layer",
        description: "Nights at Bhandardara's campsites, especially post-monsoon and winter, get genuinely cold once the sun sets.",
        price: "₹1,799", rating: 4.5, reviews: "4.2k", image: "🧥",
        affiliateUrl: amazonSearchUrl("warm+fleece+jacket+camping"),
        tag: "Camping essential", tagColor: "bg-stone-100 text-stone-700",
        why: "The temperature drop after dark near the lake surprises most first-time campers here.",
      },
      {
        name: "Headlamp / LED Torch",
        description: "Essential for the early-morning Kalsubai summit push and for navigating a campsite after dark.",
        price: "₹599", rating: 4.4, reviews: "3.8k", image: "🔦",
        affiliateUrl: amazonSearchUrl("led+headlamp+trekking"),
        tag: "Trek essential", tagColor: "bg-purple-100 text-purple-700",
        why: "Most Kalsubai treks start pre-dawn to catch the sunrise from the summit temple.",
      },
      {
        name: "Sleeping Bag (if camping)",
        description: "For lakeside or hillside camping — some operators provide these, but carrying your own guarantees warmth and hygiene.",
        price: "₹1,499", rating: 4.3, reviews: "2.6k", image: "🛌",
        affiliateUrl: amazonSearchUrl("compact+sleeping+bag+camping"),
        tag: "Camping essential", tagColor: "bg-forest-100 text-forest-700",
        why: "Rental sleeping bags at unorganised campsites vary widely in warmth and cleanliness.",
      },
      {
        name: "Insect Repellent",
        description: "The lake-adjacent camping areas and forested trek trails see plenty of mosquito activity, especially post-monsoon.",
        price: "₹199", rating: 4.2, reviews: "5.9k", image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+camping+travel"),
        tag: "Camping essential", tagColor: "bg-sky-100 text-sky-700",
        why: "Standing water near the dam and lake makes for a noticeably higher mosquito presence than drier trek destinations.",
      },
    ],
  },
];

export default function BhandardaraGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Lake ringed by hills, representative of Bhandardara's Arthur Lake, Maharashtra"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Bhandardara", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bhandardara", "Arthur Lake", "Kalsubai", "Off-beat", "Maharashtra"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Bhandardara Travel Guide: Arthur Lake, Waterfalls & Camping
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A quiet dam-side lake ringed by peaks, a waterfall that
              free-falls 300 feet, and some of Maharashtra's clearest night
              skies — the complete guide to Bhandardara.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Bhandardara, Maharashtra" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,000 words" },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Bhandardara?</h2>
                  <p>
                    Roughly four hours from both Mumbai and Pune sits one of
                    Maharashtra's quietest weekend escapes — a lake formed
                    by the <strong>Wilson Dam</strong>, one of the oldest
                    dams in India (built in the early 1900s on the Pravara
                    river), ringed by forested hills that shut out enough
                    ambient light to make Bhandardara one of the state's
                    better-known spots for amateur stargazing and night-sky
                    camping.
                  </p>
                  <p>
                    Unlike Lonavala or Mahabaleshwar, Bhandardara has never
                    fully commercialised — there's no strip of resorts or
                    viewpoint crowds, just <strong>Arthur Lake</strong>,
                    a scattering of homestays and campsites, and, for
                    trekkers, direct access to <strong>Kalsubai Peak</strong>,
                    Maharashtra's highest point at roughly 1,646 metres,
                    often nicknamed the "Everest of Maharashtra."
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>⛰️</span> Bhandardara at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Maharashtra, India" },
                        { icon: "🏔️", label: "Key Peak", value: "Kalsubai (~1,646m)" },
                        { icon: "🌡️", label: "Best Time", value: "Sep – Feb" },
                        { icon: "🚉", label: "Nearest Railhead", value: "Igatpuri (~65 km)" },
                        { icon: "🌊", label: "Key Site", value: "Arthur Lake / Wilson Dam" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹3,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Bhandardara</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Sep – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "The lake is full, Randha Falls still runs after the monsoon, trekking trails have dried out, and skies are at their clearest for stargazing." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — peak waterfall flow", text: "Randha Falls and Umbrella Falls run at their most dramatic, but trekking trails including Kalsubai turn muddy and slippery." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot — lake levels drop", text: "Heat makes daytime treks tougher and the lake visibly recedes as summer progresses — a quieter but less scenic window." },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> October to December — a full
                    lake, dry trekking trails for Kalsubai, and the
                    clearest skies of the year for a camping trip.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bhandardara</h2>
                  <ul>
                    <li><strong>From Mumbai:</strong> About 165 km, roughly 4 hours by road via Igatpuri.</li>
                    <li><strong>From Pune:</strong> About 180 km by road.</li>
                    <li><strong>By Train:</strong> Igatpuri (~65 km) or Kasara are the nearest railheads, from where you'd continue by road/taxi.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Network connectivity is limited around Bhandardara — download offline maps and inform your homestay/campsite of your arrival time before you lose signal.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image src="/images/destinations/manali/solang-valley.jpg" alt="Hills and water at Bhandardara" fill sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw" className="object-cover" />
                  </div>
                  <ul>
                    <li><strong>Arthur Lake & Wilson Dam:</strong> The centrepiece — a placid reservoir formed by one of India's oldest dams, with boat rides available and a scenic backdrop of surrounding hills.</li>
                    <li><strong>Randha Falls:</strong> A dramatic waterfall best seen in monsoon and immediately post-monsoon, when the flow is at its strongest.</li>
                    <li><strong>Umbrella Falls:</strong> A smaller, more accessible falls near the dam, popular for a quick photo stop.</li>
                    <li><strong>Kalsubai Peak Trek:</strong> Maharashtra's highest point at roughly 1,646m, a moderate multi-hour trek with iron ladder sections near the summit temple — most trekkers start pre-dawn for a sunrise finish.</li>
                    <li><strong>Ratangad Fort Trek:</strong> A less crowded alternative trek in the same hill range, with historical fort ruins at the top.</li>
                    <li><strong>Stargazing & Camping:</strong> Bhandardara's low light pollution makes it one of Maharashtra's better-known spots for night-sky camping and amateur astronomy.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay & Camp</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "⛺", range: "₹500–₹1,200/night", picks: ["Lakeside tent camping", "Basic homestays in Bhandardara village", "Shared dorm-style stays"] },
                      { tier: "Mid-Range", icon: "🏡", range: "₹1,800–₹4,000/night", picks: ["MTDC Holiday Resort, Bhandardara", "Private cottages with lake views", "Organised camping packages with meals"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹12,000+/night", picks: ["Premium resort stays near the dam", "Private villa rentals (seasonal)"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    Book camping spots and homestays ahead of weekends —
                    Bhandardara's limited accommodation fills up quickly
                    during the Sep–Feb high season.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Bhandardara</h2>
                  <ul>
                    <li><strong>Homestay thalis:</strong> Most accommodation here is homestay-style, meaning simple, home-cooked Maharashtrian meals rather than restaurant dining.</li>
                    <li><strong>Campfire meals:</strong> Organised camping packages typically include a bonfire dinner — a big part of the Bhandardara camping experience.</li>
                    <li><strong>Local roadside stalls:</strong> Basic chai and snack stops along the approach road, useful for the drive in.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Bhandardara Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Lake, Dam & Falls", color: "bg-amber-700", activities: ["Arrive, check into a homestay or campsite", "Visit Arthur Lake and Wilson Dam", "Randha Falls and Umbrella Falls", "Evening: bonfire and stargazing at the campsite"] },
                      { day: "Day 2", title: "Kalsubai Peak Trek", color: "bg-forest-600", activities: ["Pre-dawn start for the Kalsubai summit trek", "Sunrise at the summit temple", "Descend by early afternoon", "Depart for Mumbai/Pune"] },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹700", "₹2,500", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹2,000"],
                          ["Local transport/day", "₹300", "₹800", "₹2,000"],
                          ["Trek/camping fees", "₹200", "₹500", "₹1,500"],
                          ["Daily total", "₹1,550", "₹4,600", "₹13,500"],
                          ["2-Day trip total", "₹3,100", "₹9,200", "₹27,000"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes travel to Bhandardara from your city of origin.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Bhandardara</h2>
                  <ul>
                    <li><strong>Book camping/homestays ahead:</strong> Options are limited compared to more commercial hill stations — don't arrive without a reservation on weekends.</li>
                    <li><strong>Start Kalsubai early:</strong> A pre-dawn start avoids both the heat and the crowds, and rewards you with a sunrise summit.</li>
                    <li><strong>Carry warm layers:</strong> Even outside winter, lakeside nights get noticeably cool.</li>
                    <li><strong>Expect patchy network coverage:</strong> Download offline maps and inform your stay of your ETA in advance.</li>
                    <li><strong>Avoid the Kalsubai trek in heavy monsoon:</strong> The ladder sections near the summit get genuinely slippery.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Book camping or a homestay ahead of weekends", "Start the Kalsubai trek before sunrise", "Carry warm layers for the evening", "Download offline maps before arriving", "Try a bonfire dinner at your campsite"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Attempt the Kalsubai ladders in heavy monsoon rain", "Arrive on a weekend without a booking", "Underestimate the night-time cold near the lake", "Rely on mobile signal once past Igatpuri", "Skip insect repellent near the lake and campsites"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
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
                {["Bhandardara", "Arthur Lake", "Kalsubai", "Camping", "Maharashtra", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BHANDARDARA_GEAR} destination="Bhandardara" />

              <RelatedPostsGrid currentSlug="bhandardara-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bhandardara-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
