// src/app/blog/kochi-travel-guide/page.tsx
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
  title: "Kochi Travel Guide: Fort Kochi, Chinese Nets & 3-Day Itinerary",
  description:
    "The complete Kochi travel guide. Fort Kochi, Chinese fishing nets, Mattancherry Palace, Jew Town synagogue, Kathakali shows, where to stay, what to eat, and a full 3-day itinerary through Kerala's most walkable old town.",
  keywords:
    "Kochi travel guide, Cochin travel guide, Fort Kochi, Chinese fishing nets, Mattancherry Palace, Jew Town, Paradesi Synagogue, Kathakali Kochi, best time to visit Kochi, how to reach Kochi, Kochi itinerary, Kochi Muziris Biennale",
  openGraph: {
    title: "Kochi Travel Guide: Fort Kochi, Chinese Nets & 3-Day Itinerary",
    description:
      "Chinese fishing nets silhouetted against the sunset, spice-trade history layered under Portuguese and Dutch influence, and Kerala's most walkable old town — the complete guide to Kochi.",
    url: "https://club.kudozz.in/blog/kochi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Chinese fishing nets and coastline representative of Kochi, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kochi Travel Guide: Fort Kochi, Chinese Nets & 3-Day Itinerary",
    description:
      "Chinese fishing nets, colonial-era churches, and Kerala's most walkable old town — the complete guide to Kochi.",
    images: ["/images/destinations/kerala/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kochi-travel-guide",
  },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Kochi Travel Guide: Fort Kochi, Chinese Nets & 3-Day Itinerary",
          description: "The complete Kochi travel guide.",
          image: "https://club.kudozz.in/images/destinations/kerala/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/kochi-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Kochi",
            address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Kochi Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Kochi?",
    a: "Three days is a comfortable amount of time — one for Fort Kochi's waterfront and colonial streets, one for Mattancherry and Jew Town's spice-trade history, and one for Ernakulam, a Kathakali show, or a day trip to the backwaters.",
  },
  {
    q: "What is the best time to visit Kochi?",
    a: "October to March is the most comfortable window, with dry weather and temperatures in a pleasant range for walking around Fort Kochi. April to May gets hot and humid, and the monsoon (June–September) brings heavy rain, though the city stays lush and green.",
  },
  {
    q: "How do I reach Kochi?",
    a: "Cochin International Airport (COK) has extensive domestic and international connections, and Kochi is a major railway junction on the southern network. As Kerala's primary gateway city, it's also the easiest starting point for onward travel to Munnar, Alleppey, and Thekkady.",
  },
  {
    q: "Are the Chinese fishing nets still in use?",
    a: "Yes — the cantilevered nets along the Fort Kochi waterfront are still operated by local fishermen, though many now also let visitors try lifting one for a small fee. Sunset is the best time to see them silhouetted against the water.",
  },
  {
    q: "Is Fort Kochi walkable?",
    a: "Very — Fort Kochi is Kochi's most compact, walkable district, and most of its major sights (the fishing nets, Mattancherry Palace, Jew Town, St. Francis Church) are within a comfortable walk or short bicycle ride of each other.",
  },
  {
    q: "Can non-Jewish visitors enter the Paradesi Synagogue?",
    a: "Yes, the Paradesi Synagogue in Jew Town is open to visitors during set hours (though usually closed on Saturdays and Jewish holidays) — check current timings locally before visiting, and dress modestly.",
  },
  {
    q: "What is the budget for a trip to Kochi?",
    a: "A budget traveler can manage on roughly ₹1,800 a day, a mid-range trip closer to ₹4,500 a day, and a luxury heritage stay can run ₹12,000+ a day. A 3-day trip totals roughly ₹5,400 on a budget and ₹13,500 mid-range, excluding flights or trains to the city.",
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
  { id: "introduction", title: "Why Kochi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kochi", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const KOCHI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for walking Fort Kochi's streets and touring its heritage sites",
    emoji: "⚓",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Fort Kochi's cobbled and paved lanes reward walking over taxis — good shoes make a full day of sightseeing far more comfortable.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.8k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "City-walk essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Most of Fort Kochi's best sights are close together but best explored slowly, on foot.",
      },
      {
        name: "Light Cotton/Linen Clothing",
        description:
          "Kochi's coastal humidity makes breathable fabrics far more comfortable than synthetic blends, especially outside the cooler winter months.",
        price: "₹799",
        rating: 4.3,
        reviews: "4.1k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("breathable+cotton+travel+clothing"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Humidity stays noticeable year-round in Kochi, even in the dry season.",
      },
      {
        name: "Compact Umbrella",
        description:
          "Useful across seasons — for sudden showers in shoulder months and for shade during the hotter parts of the day.",
        price: "₹399",
        rating: 4.4,
        reviews: "6.3k",
        image: "☂️",
        affiliateUrl: amazonSearchUrl("compact+travel+umbrella"),
        tag: "Weather essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Kochi's weather can shift quickly, especially outside the driest winter months.",
      },
      {
        name: "Modest Cover-Up",
        description:
          "A light scarf or shawl comes in handy for the Paradesi Synagogue and St. Francis Church, both of which expect modest dress.",
        price: "₹399",
        rating: 4.4,
        reviews: "3.5k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+scarf+travel+modest"),
        tag: "Heritage-site essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Fort Kochi's churches and synagogue are active places of worship, not just monuments.",
      },
    ],
  },
];

export default function KochiGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kerala/hero.jpg"
              alt="Chinese fishing nets and coastline representative of Kochi, Kerala"
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
                { label: "Kochi", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
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
              {["Kochi", "Fort Kochi", "Heritage", "Kerala", "Destination Guide"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kochi Travel Guide: Fort Kochi, Chinese Nets & 3-Day Itinerary
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Chinese fishing nets against the evening sky, spice-trade history layered under Portuguese and Dutch influence, and Kerala's most walkable old town — everything you need to plan a trip to Kochi.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "14 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Kochi, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,200 words" },
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
                  <h2>Why Kochi?</h2>
                  <p>
                    <strong>Kochi</strong> (Cochin) has been a trading port for over a thousand years, and its old-town peninsula, <strong>Fort Kochi</strong>, still shows the layers: Portuguese churches, Dutch-era architecture, a centuries-old Jewish quarter, and cantilevered Chinese fishing nets worked by local fishermen at the water's edge. It's Kerala's most walkable city, and its most historically dense — a compact area you can cover almost entirely on foot or bicycle.
                  </p>
                  <p>
                    As Kerala's primary gateway city, Kochi is also the natural starting or ending point for a wider Kerala trip — Munnar, Alleppey, and Thekkady are all within a few hours by road, making Kochi a practical base as well as a destination in its own right.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>⚓</span> Kochi at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🎣", label: "Key Site", value: "Chinese Fishing Nets" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Airport", value: "Cochin (COK)" },
                        { icon: "🚶", label: "Best Explored By", value: "Foot / bicycle / ferry" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹4,500" },
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
                  <h2>Best Time to Visit Kochi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      { season: "Oct – Feb", emoji: "☀️", color: "bg-amber-50 border-amber-200", mood: "Best overall — our pick", text: "Dry and comfortably warm, ideal for walking Fort Kochi's streets and lingering at the waterfront for sunset." },
                      { season: "Mar – May", emoji: "🥵", color: "bg-orange-50 border-orange-200", mood: "Hot and humid", text: "Temperatures and humidity both climb — plan museum and indoor stops for the hottest part of the afternoon." },
                      { season: "Jun – Sep", emoji: "🌧️", color: "bg-sky-50 border-sky-200", mood: "Monsoon — heavy, atmospheric", text: "Kerala's monsoon is dramatic and the city turns lush green, but heavy rain can disrupt walking plans and ferry schedules." },
                      { season: "Sep", emoji: "🌤️", color: "bg-purple-50 border-purple-200", mood: "Transitional", text: "Rains taper off, humidity lingers, but the city is noticeably quieter than peak winter months." },
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
                    <strong>Our pick:</strong> November to February — the most reliably pleasant stretch for walking Fort Kochi and catching a sunset with the fishing nets in silhouette.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Kochi</h2>
                  <ul>
                    <li><strong>By Air:</strong> Cochin International Airport (COK) has extensive domestic and international connections, making Kochi Kerala's primary gateway city.</li>
                    <li><strong>By Train:</strong> Kochi is a major railway junction on the southern network, well connected to Kerala's other cities and the rest of South India.</li>
                    <li><strong>By Road:</strong> Well connected via NH66 (coastal route) and NH544, with easy onward road access to Munnar, Alleppey, and Thekkady.</li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Use Kochi's ferries to move between Fort Kochi, Mattancherry, Ernakulam, and Willingdon Island — they're cheap, scenic, and often faster than road traffic.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Kochi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/hero.jpg"
                      alt="Fort Kochi waterfront scenery"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li><strong>Chinese Fishing Nets:</strong> Cantilevered shore-operated nets along the Fort Kochi waterfront, still worked by local fishermen and iconic at sunset.</li>
                    <li><strong>Mattancherry Palace (Dutch Palace):</strong> A palace with striking Kerala mural paintings depicting Hindu epics, built originally for the Kochi royal family.</li>
                    <li><strong>Paradesi Synagogue, Jew Town:</strong> One of the oldest active synagogues in the Commonwealth, in a historic spice-trading quarter.</li>
                    <li><strong>St. Francis Church:</strong> One of the earliest European churches built in India, where Vasco da Gama was originally buried before his remains were moved to Portugal.</li>
                    <li><strong>Spice markets, Mattancherry:</strong> Narrow lanes stacked with sacks of cardamom, pepper, and other spices, part of Kochi's centuries-old trading heritage.</li>
                    <li><strong>Kathakali performance:</strong> Several Fort Kochi venues stage evening shows with elaborate makeup demonstrations beforehand — a good introduction to Kerala's classical dance-drama.</li>
                    <li><strong>Marine Drive & Willingdon Island:</strong> Modern Ernakulam's waterfront promenade and the man-made island housing the naval base and port — worth a look for contrast with old Fort Kochi.</li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Kochi</h2>
                  <p>Fort Kochi is the obvious base for most travelers, with Ernakulam as a more modern, business-district alternative.</p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Backpacker hostels, Fort Kochi", "Budget guesthouses near Jew Town", "Simple lodges in Ernakulam"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹5,500/night", picks: ["Heritage boutique hotels, Fort Kochi", "Mid-range chain hotels, Ernakulam", "Converted colonial-era bungalows"] },
                      { tier: "Luxury", icon: "✨", range: "₹8,000–₹18,000+/night", picks: ["Waterfront heritage properties", "Premium boutique stays, Fort Kochi", "Five-star hotels, Ernakulam/Marine Drive"] },
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
                  <blockquote>Fort Kochi is the best base — most sights are within walking distance, and it has far more character than Ernakulam's business-district hotels.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Kochi</h2>
                  <p>Kochi's food reflects its trading history — Kerala staples alongside seafood shaped by centuries of spice-route contact.</p>
                  <ul>
                    <li><strong>Karimeen (pearl spot fish):</strong> A Kerala backwater staple, often grilled or served in a tangy fish curry.</li>
                    <li><strong>Appam & stew:</strong> Lacy rice pancakes paired with a mild coconut-milk vegetable or meat stew — a classic Kerala breakfast.</li>
                    <li><strong>Kerala sadya:</strong> A traditional vegetarian feast served on a banana leaf, worth seeking out at a local restaurant even outside festival season.</li>
                    <li><strong>Jew Town cafes:</strong> Small cafes serving a mix of Kerala and continental dishes, popular with the area's steady stream of travelers.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Kochi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      { day: "Day 1", title: "Fort Kochi Waterfront", color: "bg-amber-700", activities: ["Arrive, check in around Fort Kochi", "Afternoon: Chinese Fishing Nets, St. Francis Church", "Evening: Sunset at the waterfront", "Dinner at a Fort Kochi cafe"] },
                      { day: "Day 2", title: "Mattancherry & Jew Town", color: "bg-forest-600", activities: ["Morning: Mattancherry Palace", "Midday: Jew Town spice markets", "Afternoon: Paradesi Synagogue", "Evening: Kathakali performance"] },
                      { day: "Day 3", title: "Ernakulam & Departure", color: "bg-orange-600", activities: ["Morning: Ferry to Ernakulam, Marine Drive walk", "Late morning: Optional Willingdon Island visit", "Afternoon: Depart via Cochin Airport or onward road/rail travel"] },
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹13,000"],
                          ["Food/day", "₹450", "₹1,000", "₹2,500"],
                          ["Local transport per day", "₹200", "₹600", "₹1,500"],
                          ["Entry fees / shows", "₹200", "₹500", "₹1,200"],
                          ["Daily total", "₹1,800", "₹4,500", "₹15,200"],
                          ["3-Day trip total", "₹5,400", "₹13,500", "₹45,600"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>* Excludes flight/train to the city.</p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Kochi</h2>
                  <ul>
                    <li><strong>Explore Fort Kochi on foot or by bicycle:</strong> Most major sights are within a comfortable walk of each other.</li>
                    <li><strong>Use the ferries:</strong> They're cheap, scenic, and connect Fort Kochi, Mattancherry, Ernakulam, and Willingdon Island efficiently.</li>
                    <li><strong>Check synagogue timings:</strong> The Paradesi Synagogue keeps set visiting hours and is usually closed on Saturdays and Jewish holidays — verify current timings locally.</li>
                    <li><strong>Dress modestly at religious sites:</strong> Carry a light cover-up for the synagogue and churches.</li>
                    <li><strong>Book a Kathakali show in advance:</strong> Popular venues can fill up, especially in peak season.</li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Walk or cycle through Fort Kochi at a relaxed pace", "Catch the fishing nets in action at sunset", "Watch a Kathakali makeup demonstration and performance", "Use ferries to hop between Fort Kochi and Ernakulam", "Explore Jew Town's spice markets and synagogue"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Wear beachwear-style clothing into churches or the synagogue", "Rush Fort Kochi in half a day — it rewards slow exploring", "Skip checking synagogue and church visiting hours", "Rely only on road transport when a ferry is faster", "Miss the spice markets in Mattancherry"].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>
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
                {["Kochi", "Fort Kochi", "Heritage", "Kerala", "Destination Guide", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">#{tag}</Link>
                ))}
              </div>

              <TrekGearRecommendations sections={KOCHI_GEAR} destination="Kochi" />

              <RelatedPostsGrid currentSlug="kochi-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kochi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
