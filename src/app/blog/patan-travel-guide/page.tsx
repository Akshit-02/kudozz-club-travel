// src/app/blog/patan-travel-guide/page.tsx
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
  title: "Patan Travel Guide: Rani ki Vav Stepwell & Patola Sarees",
  description:
    "The complete Patan travel guide. Rani ki Vav UNESCO stepwell, Patola saree weaving workshops, Sahastralinga Talav, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Patan travel guide, Rani ki Vav, Patola saree, Sahastralinga Talav, best time to visit Patan, how to reach Patan, Gujarat stepwell, Modhera Sun Temple day trip",
  openGraph: {
    title: "Patan Travel Guide: Rani ki Vav Stepwell & Patola Sarees",
    description:
      "A seven-storey inverted temple carved entirely underground, and a handwoven silk saree so intricate it takes months to make — the complete guide to Patan.",
    url: "https://club.kudozz.in/blog/patan-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Intricately carved stone architecture representative of Rani ki Vav, Patan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patan Travel Guide: Rani ki Vav Stepwell & Patola Sarees",
    description: "Rani ki Vav's underground carved temple-stepwell and Patan's famed Patola weaving tradition — the complete guide.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/patan-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Patan Travel Guide: Rani ki Vav Stepwell & Patola Sarees",
          description: "The complete Patan travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/patan-travel-guide" },
          about: {
            "@type": "Place",
            name: "Patan",
            address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Patan Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "What makes Rani ki Vav special?",
    a: "It's an exceptionally elaborate 11th-century stepwell built as an inverted temple, descending seven levels underground with hundreds of intricately carved sculptural panels — widely regarded as one of the finest stepwells in India, and a UNESCO World Heritage Site. Patan is also depicted on India's ₹100 currency note.",
  },
  {
    q: "How many days do I need in Patan?",
    a: "One day covers Rani ki Vav, a Patola weaving workshop visit, and Sahastralinga Talav comfortably — it's typically done as a day trip rather than an overnight stay.",
  },
  {
    q: "What is the best time to visit Patan?",
    a: "October to March offers the most comfortable weather for walking the stepwell's many stairs and exploring the town on foot.",
  },
  {
    q: "How do I reach Patan?",
    a: "The nearest airport is Ahmedabad, about 125km away. Patan has its own railway station, and road access via state highway is straightforward from Ahmedabad.",
  },
  {
    q: "What is a Patola saree?",
    a: "A double-ikat handwoven silk textile tradition unique to Patan, an intensely labor-intensive craft where a single saree can take months to weave. Only a small number of families still practice the traditional technique — worth visiting a workshop if the craft genuinely interests you.",
  },
  {
    q: "Can I combine Patan with other Gujarat sites?",
    a: "Yes — Patan pairs naturally with Modhera Sun Temple (a well-known nearby heritage site) as a single day trip from Ahmedabad, or with a broader North Gujarat heritage route.",
  },
  {
    q: "What is the budget for a trip to Patan?",
    a: "A budget traveler can manage on roughly ₹1,200 a day for a day-trip-style visit; if buying a genuine Patola saree, that's a separate, often significant expense reflecting the craft's labor intensity.",
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
  { id: "introduction", title: "Why Patan?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Patan", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PATAN_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the stepwell's stairs and a day of heritage walking",
    emoji: "🏛️",
    items: [
      {
        name: "Comfortable Walking/Climbing Shoes",
        description: "Rani ki Vav's seven underground levels involve a genuine amount of stair-climbing.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Stepwell essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The descent through Rani ki Vav's many levels is more physical than it looks from photos.",
      },
      {
        name: "Sun Hat",
        description: "For the walk between sites in Patan's open, exposed terrain.",
        price: "₹399",
        rating: 4.3,
        reviews: "4.0k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"),
        tag: "Day-trip essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "North Gujarat's sun is intense with little shade between heritage sites." ,
      },
      {
        name: "Camera",
        description: "Rani ki Vav's carved panels are genuinely some of the finest stone sculpture in India — worth documenting properly.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The intricacy of the carvings rewards close, careful photography.",
      },
      {
        name: "Reusable Water Bottle",
        description: "For a full day covering the stepwell, Sahastralinga Talav, and any workshop visits.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "All-day essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Facilities are limited between Patan's spread-out heritage sites." ,
      },
    ],
  },
];

export default function PatanGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="Intricately carved stone architecture representative of Rani ki Vav, Patan"
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
                { label: "Patan", href: null },
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
              {["Patan", "Rani ki Vav", "Heritage", "Gujarat"].map((tag) => (
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
              Patan Travel Guide: Rani ki Vav Stepwell & Patola Sarees
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A seven-storey inverted temple carved entirely underground, and a handwoven silk saree so
              intricate it takes months to make.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Patan, Gujarat",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
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
                  <h2>Why Patan?</h2>
                  <p>
                    <strong>Patan</strong> is a former capital of the Chaulukya (Solanki) dynasty, and its
                    single most famous site — <strong>Rani ki Vav</strong>, the Queen's Stepwell — is
                    genuinely one of India's most extraordinary pieces of stone architecture: a seven-level
                    inverted temple descending underground, its walls covered in hundreds of intricately
                    carved sculptural panels. It's a UNESCO World Heritage Site, and the reason many
                    travelers make the detour here in the first place.
                  </p>
                  <p>
                    The town also carries a living craft tradition in <strong>Patola sarees</strong> — a
                    double-ikat weaving technique so labor-intensive that a single saree can take months to
                    complete, still practiced today by only a small number of specialist families.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏛️</span> Patan at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🏛️", label: "Key Site", value: "Rani ki Vav (UNESCO)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Ahmedabad (~125km)" },
                        { icon: "🧵", label: "Known For", value: "Patola weaving" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200+" },
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
                  <h2>Best Time to Visit Patan</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cool, comfortable weather for walking the stepwell's many stairs and exploring the town on foot.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot",
                        text: "North Gujarat gets genuinely hot — plan sightseeing for morning hours if visiting this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Rain is less disruptive here than on the coast, but conditions are still less comfortable for a full day of walking.",
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
                    <strong>Our pick:</strong> November to February — the most comfortable window for a full
                    day exploring Rani ki Vav and the town on foot.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Patan</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Ahmedabad is the nearest airport, about 125km away.
                    </li>
                    <li>
                      <strong>By Train:</strong> Patan has its own railway station.
                    </li>
                    <li>
                      <strong>By Road:</strong> A straightforward drive from Ahmedabad via state highway.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Combine Patan with Modhera Sun Temple in a single day trip
                    from Ahmedabad — the two sites sit close enough together to pair naturally.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Patan</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Carved stone heritage architecture in Patan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Rani ki Vav:</strong> An 11th-century UNESCO-listed stepwell built as an
                      inverted temple, descending seven levels with extraordinary carved detail — Patan's
                      unmissable highlight.
                    </li>
                    <li>
                      <strong>Patola weaving workshops:</strong> Watch (or shop for) the town's famed
                      double-ikat silk saree tradition, practiced by only a handful of specialist families.
                    </li>
                    <li>
                      <strong>Sahastralinga Talav:</strong> An ancient stepped tank complex, less visited but
                      historically significant.
                    </li>
                    <li>
                      <strong>Modhera Sun Temple:</strong> A well-known nearby heritage site, commonly paired
                      with Patan on a single day trip.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Patan</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹600–₹1,400/night", picks: ["Basic hotels in Patan town", "Simple guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,500/night", picks: ["Better-appointed hotels in Patan", "Ahmedabad hotels if day-tripping"] },
                      { tier: "Luxury", icon: "✨", range: "Limited locally", picks: ["Most travelers base in Ahmedabad and day-trip rather than stay overnight in Patan"] },
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
                  <blockquote>Most visitors day-trip from Ahmedabad rather than staying overnight in Patan itself.</blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Patan</h2>
                  <ul>
                    <li><strong>Gujarati thalis:</strong> Standard vegetarian thalis at local eateries.</li>
                    <li><strong>North Gujarat snacks:</strong> Regional street food similar to what you'd find in Ahmedabad, on a smaller scale.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Patan Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Stepwell & Weaving",
                        color: "bg-amber-700",
                        activities: ["Morning: arrive from Ahmedabad", "Explore Rani ki Vav thoroughly", "Visit a Patola weaving workshop", "Afternoon: Sahastralinga Talav", "Optional: Modhera Sun Temple on the way back"],
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Entry fees (stepwell)", "₹50-₹250", "₹50-₹250"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport per day", "₹300", "₹800"],
                          ["Day-trip total (excl. Patola purchase)", "₹1,200", "₹2,700"],
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes transport to the region and any Patola saree purchase, which can be a
                    significant separate expense given the craft's labor intensity.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Patan</h2>
                  <ul>
                    <li><strong>Allow real time at Rani ki Vav:</strong> Rushing through undersells the carving detail.</li>
                    <li><strong>Visit a genuine Patola workshop:</strong> Ask locally to distinguish authentic hand-weavers from resellers.</li>
                    <li><strong>Combine with Modhera Sun Temple:</strong> A natural single-day pairing from Ahmedabad.</li>
                    <li><strong>Wear comfortable shoes:</strong> The stepwell's levels involve genuine stair-climbing.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Allow real time to appreciate Rani ki Vav's carvings", "Visit a genuine Patola weaving workshop", "Combine with Modhera Sun Temple", "Wear comfortable shoes for the stepwell's stairs", "Carry water and sun protection"].map((item) => (
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
                        {["Rush through the stepwell in a few minutes", "Buy a 'Patola' saree without verifying authenticity", "Skip Modhera Sun Temple if you have the extra hour", "Visit at peak midday heat in summer months", "Expect nightlife or big-city infrastructure in Patan town"].map((item) => (
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
                {["Patan", "Rani ki Vav", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PATAN_GEAR} destination="Patan" />
              <RelatedPostsGrid currentSlug="patan-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="patan-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
