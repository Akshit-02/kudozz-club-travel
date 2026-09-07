// src/app/blog/surat-travel-guide/page.tsx
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
  title: "Surat Travel Guide: Diamond City, Riverfront & Street Food",
  description:
    "The complete Surat travel guide. The Tapi Riverfront, Surat Castle, Dutch Garden, the city's diamond and textile trade, Surati street food, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Surat travel guide, Tapi Riverfront, Surat Castle, Surat diamond city, Surati food, locho ghari, best time to visit Surat, how to reach Surat, Gujarat street food",
  openGraph: {
    title: "Surat Travel Guide: Diamond City, Riverfront & Street Food",
    description:
      "A city that cuts and polishes most of the world's diamonds, with a revamped Tapi riverfront and a street food culture to match Ahmedabad's — the complete guide to Surat.",
    url: "https://club.kudozz.in/blog/surat-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Riverfront promenade scenery representative of Surat, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surat Travel Guide: Diamond City, Riverfront & Street Food",
    description:
      "The Tapi Riverfront, Surat Castle, and a street food scene that rivals Ahmedabad's — the complete guide to Surat.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/surat-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Surat Travel Guide: Diamond City, Riverfront & Street Food",
          description: "The complete Surat travel guide.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/surat-travel-guide" },
          about: {
            "@type": "Place",
            name: "Surat",
            address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Surat Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Surat?",
    a: "One to two days covers the Tapi Riverfront, Surat Castle, Dutch Garden, and a proper food crawl through the city's snack culture. It also works well as a stop on a longer Gujarat coastal route between Mumbai and Ahmedabad.",
  },
  {
    q: "What is the best time to visit Surat?",
    a: "October to March offers the most comfortable temperatures for riverfront walks and street food exploring. Summers (April–June) get hot and humid, and monsoon (July–September) brings heavy rain typical of coastal Gujarat.",
  },
  {
    q: "How do I reach Surat?",
    a: "Surat Airport has decent domestic connectivity. Surat railway station sits on the busy Mumbai-Ahmedabad main line, making it one of the easiest Gujarat cities to reach by train. Road access via NH48 is straightforward from both Mumbai and Ahmedabad.",
  },
  {
    q: "Can I visit a diamond workshop in Surat?",
    a: "Surat's diamond cutting and polishing industry is a defining part of the local economy, but it isn't generally set up as a visitor attraction with public factory tours — most workshops are working commercial spaces, not tourism sites.",
  },
  {
    q: "What should I eat in Surat?",
    a: "Locho (a steamed savory snack) and ghari (a sweet made specifically around Diwali season) are distinctly Surati specialties you won't find in quite the same form elsewhere in Gujarat — seek them out alongside standard Gujarati thalis and street food.",
  },
  {
    q: "Is Surat worth visiting on its own, or just as a stopover?",
    a: "It works well both ways — the Tapi Riverfront and food scene justify a dedicated day or two, and its position on the Mumbai-Ahmedabad rail/road corridor also makes it a natural, easy stop on a longer Gujarat trip.",
  },
  {
    q: "What is the budget for a trip to Surat?",
    a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹4,000 a day. Note Gujarat is a legally dry state — alcohol requires a permit and isn't casually available.",
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
  { id: "introduction", title: "Why Surat?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Surat", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SURAT_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for riverfront walks and a proper street food crawl",
    emoji: "💎",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "The Tapi Riverfront promenade and old-city food streets both call for real walking over a full day.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "All-day essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Between the riverfront and the old-city food lanes, a full day here adds up to serious mileage on foot.",
      },
      {
        name: "Light Breathable Clothing",
        description: "Surat's coastal humidity is real for most of the year — loose cotton fabrics are far more comfortable than synthetics.",
        price: "₹799",
        rating: 4.4,
        reviews: "3.9k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("breathable+cotton+travel+clothing"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Humidity here is more consistent and noticeable than in drier parts of Gujarat.",
      },
      {
        name: "Reusable Water Bottle",
        description: "Useful for a long riverfront walk and a full afternoon of street food exploring.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Surat's humidity means you'll want water on hand more often than you'd expect.",
      },
      {
        name: "Camera",
        description: "For the Tapi Riverfront's evening lighting, Surat Castle, and the old-city heritage lanes.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The riverfront is particularly photogenic around sunset when the evening crowds gather.",
      },
    ],
  },
];

export default function SuratGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Riverfront promenade scenery representative of Surat, Gujarat"
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
                { label: "Surat", href: null },
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
              {["Surat", "Tapi Riverfront", "Street Food", "Gujarat"].map((tag) => (
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
              Surat Travel Guide: Diamond City, Riverfront & Street Food
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A city that cuts and polishes most of the world's diamonds, with a revamped Tapi riverfront and a
              street food culture to match Ahmedabad's.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "10 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Surat, Gujarat",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
                },
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
                  <h2>Why Surat?</h2>
                  <p>
                    <strong>Surat</strong> carries two defining, and slightly unlikely, identities: it's the
                    city where a substantial share of the world's diamonds are cut and polished, and it's
                    home to one of India's most ambitious urban riverfront redevelopments. Neither is what
                    most travelers expect from a Gujarat itinerary, which is exactly why it's worth a stop.
                  </p>
                  <p>
                    Long before Bombay rose to prominence, Surat was one of India's most important port
                    cities — a legacy still visible in its old Dutch, British, and Armenian cemeteries and
                    its historic castle on the Tapi River. Today it pairs that layered history with a food
                    scene locals will insist rivals Ahmedabad's.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>💎</span> Surat at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "💎", label: "Known For", value: "Diamond cutting & polishing" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Surat Airport" },
                        { icon: "🌊", label: "Signature Spot", value: "Tapi Riverfront" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Surat</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cool, dry, and comfortable for long riverfront walks and a proper food crawl through the old city.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot and humid",
                        text: "Coastal humidity makes midday sightseeing tiring — plan outdoor time for morning or evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Heavy coastal rain can disrupt riverfront plans — build flexibility into any itinerary.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> November to February — the most comfortable window for the
                    riverfront and old-city walking.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Surat</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Surat Airport has decent domestic connectivity to major Indian
                      cities.
                    </li>
                    <li>
                      <strong>By Train:</strong> Surat railway station sits on the busy Mumbai-Ahmedabad main
                      line — one of the easier Gujarat cities to reach by rail.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected via NH48, roughly 4-5 hours from Mumbai and
                      3-4 hours from Ahmedabad by car.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Surat's position directly on the Mumbai-Ahmedabad corridor
                    makes it an easy add-on stop rather than requiring a dedicated detour.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Surat</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Riverfront scenery around Surat"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Tapi Riverfront:</strong> A large-scale redeveloped promenade along the Tapi
                      River, with walking paths, gardens, and lively evening activity.
                    </li>
                    <li>
                      <strong>Surat Castle:</strong> A 16th-century fort on the riverbank, a quick and easy
                      heritage stop.
                    </li>
                    <li>
                      <strong>Dutch Garden and old cemeteries:</strong> A lesser-known colonial-era heritage
                      layer from Surat's history as an early major Indian port city.
                    </li>
                    <li>
                      <strong>Old-city textile and diamond trade:</strong> Not a visitor attraction in the
                      conventional sense, but a genuine part of the city's identity worth knowing about as
                      you walk through the commercial districts.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Surat</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Budget hotels near the railway station", "Guesthouses in the old city"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,200–₹5,000/night", picks: ["Riverfront-adjacent mid-range hotels", "Business-district hotels"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹14,000+/night", picks: ["Premium business hotels", "Upscale riverside properties"] },
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
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Surat</h2>
                  <ul>
                    <li>
                      <strong>Locho:</strong> A steamed savory snack genuinely distinct to Surat, worth
                      seeking out specifically.
                    </li>
                    <li>
                      <strong>Ghari:</strong> A rich, layered sweet especially associated with Diwali season,
                      another Surati specialty.
                    </li>
                    <li>
                      <strong>Undhiyu and Gujarati thalis:</strong> The broader Gujarati vegetarian tradition,
                      well represented across the city.
                    </li>
                    <li>
                      <strong>Street food lanes:</strong> Surat's food streets have a citywide reputation that
                      genuinely rivals Ahmedabad's — worth a dedicated evening.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Surat Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Heritage & Riverfront",
                        color: "bg-amber-700",
                        activities: ["Arrive, check in", "Afternoon: Surat Castle and Dutch Garden", "Evening: Tapi Riverfront walk and sunset"],
                      },
                      {
                        day: "Day 2",
                        title: "Food Crawl & Departure",
                        color: "bg-forest-600",
                        activities: ["Morning: old-city walk", "Afternoon: locho, ghari, and street food crawl", "Evening: departure"],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
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
                          ["Accommodation/night", "₹1,000", "₹3,200", "₹9,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹200", "₹600", "₹1,500"],
                          ["Daily total", "₹1,600", "₹4,700", "₹12,500"],
                          ["2-Day trip total", "₹3,200", "₹9,400", "₹25,000"],
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
                    * Excludes transport to the region.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Surat</h2>
                  <ul>
                    <li><strong>Visit the Tapi Riverfront in the evening:</strong> It's genuinely at its liveliest and most photogenic then.</li>
                    <li><strong>Try distinctly Surati snacks:</strong> Locho and ghari are worth seeking out specifically, not just generic Gujarati fare.</li>
                    <li><strong>Gujarat is a dry state:</strong> Alcohol requires a permit and isn't casually available.</li>
                    <li><strong>Combine with Mumbai or Ahmedabad:</strong> Surat's rail/road position makes it an easy add-on rather than a standalone detour.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Visit the Tapi Riverfront at sunset", "Try locho and ghari specifically", "Combine with a Mumbai-Ahmedabad rail/road trip", "Explore Surat Castle and Dutch Garden", "Carry a valid liquor permit if you plan to drink"].map((item) => (
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
                        {["Expect public diamond workshop tours", "Skip the riverfront thinking it's just another park", "Assume casual alcohol availability", "Visit only for the food and skip the heritage sites entirely", "Rush through in a few hours — the city rewards a proper day"].map((item) => (
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
                {["Surat", "Tapi Riverfront", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SURAT_GEAR} destination="Surat" />
              <RelatedPostsGrid currentSlug="surat-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="surat-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
