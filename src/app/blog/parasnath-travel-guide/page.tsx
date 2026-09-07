// src/app/blog/parasnath-travel-guide/page.tsx
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
  title: "Parasnath Hill Travel Guide: Jain Temples & Jharkhand's Highest Peak",
  description:
    "The complete Parasnath (Shikharji) travel guide. Jharkhand's highest peak, a major Jain pilgrimage site where 20 Tirthankaras attained liberation, Madhuban base town, the climb, where to stay, and full planning tips.",
  keywords:
    "Parasnath travel guide, Shikharji, Sammed Shikharji, Madhuban Jharkhand, Jain pilgrimage Parasnath, Parasnath trek, Jharkhand highest peak, best time to visit Parasnath, how to reach Parasnath",
  openGraph: {
    title: "Parasnath Hill Travel Guide: Jain Temples & Jharkhand's Highest Peak",
    description:
      "Jharkhand's highest peak and one of Jainism's most sacred pilgrimage sites, where 20 of the 24 Tirthankaras are believed to have attained liberation — the complete guide to Parasnath.",
    url: "https://club.kudozz.in/blog/parasnath-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "High mountain ridge representative of Parasnath Hill, Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parasnath Hill Travel Guide: Jain Temples & Jharkhand's Highest Peak",
    description: "A major Jain pilgrimage climb to Jharkhand's highest peak — the complete guide to Parasnath.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/parasnath-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Parasnath Hill Travel Guide: Jain Temples & Jharkhand's Highest Peak",
          description: "The complete Parasnath (Shikharji) travel guide.",
          image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/parasnath-travel-guide" },
          about: {
            "@type": "Place",
            name: "Parasnath Hill",
            address: { "@type": "PostalAddress", addressRegion: "Jharkhand", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Parasnath Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How long is the Parasnath climb?",
    a: "The ascent from Madhuban to the summit ridge is commonly cited at around 9km one-way, with significant elevation gain. Most people take several hours each way, and many pilgrims complete the full round trip in a single very long day.",
  },
  {
    q: "Is Parasnath a trek or a pilgrimage?",
    a: "Both, genuinely. It's Jharkhand's highest peak and a serious physical climb, but it's also one of the holiest sites in Jainism — devotees believe 20 of the 24 Tirthankaras attained moksha (liberation) here, so most people on the trail are on active pilgrimage rather than simply hiking.",
  },
  {
    q: "What is the best time to visit Parasnath?",
    a: "October to March offers the coolest, most manageable trekking conditions. Many devout pilgrims climb overnight regardless of season as part of religious tradition, but for general visitors, cooler months make the long ascent considerably more comfortable.",
  },
  {
    q: "How do I reach Parasnath?",
    a: "The nearest airport is Ranchi (~165km) or Kolkata. Parasnath railway station is well connected on the Delhi-Kolkata main line, making it more accessible by train than several other Jharkhand destinations. From the station, it's a short road journey to Madhuban, the base town."
  },
  {
    q: "Can I hire a palanquin (doli) for the climb?",
    a: "Yes — palanquin services are available in Madhuban for those unable to walk the full distance. Current rates vary, so verify pricing locally before starting the climb.",
  },
  {
    q: "What is the budget for a trip to Parasnath?",
    a: "A budget traveler can manage on roughly ₹800-1,500 a day using dharamshala-style pilgrim accommodation in Madhuban, while private hotel stays run higher. Palanquin hire, if used, is an additional cost on top of accommodation and food."
  },
  {
    q: "Is Parasnath suitable for casual tourists, or only pilgrims?",
    a: "General travelers are welcome, but this is fundamentally an active Jain pilgrimage site — visitors should approach it with respect for the religious significance and the devotees observing it as such, especially along the temple-lined ridge."
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
  { id: "introduction", title: "Why Parasnath?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Parasnath", level: 2 },
  { id: "the-climb", title: "The Climb & Temples", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-2 Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const PARASNATH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a long, demanding pilgrimage climb",
    emoji: "🏔️",
    items: [
      {
        name: "Sturdy Trekking Shoes",
        description: "The 9km ascent with significant elevation gain calls for real trekking footwear, not casual sandals.",
        price: "₹3,299",
        rating: 4.5,
        reviews: "6.8k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+long+distance"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "This is one of the longest single-day treks covered on this site — proper footwear is essential, not optional.",
      },
      {
        name: "Headlamp / Torch",
        description: "Many pilgrims begin the climb before dawn, and the descent can easily run past sunset.",
        price: "₹599",
        rating: 4.4,
        reviews: "4.5k",
        image: "🔦",
        affiliateUrl: amazonSearchUrl("headlamp+torch+trekking"),
        tag: "Pre-dawn essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "A long day means both ends of the climb can happen in darkness — hands-free light matters." ,
      },
      {
        name: "Trekking Poles",
        description: "The long descent is genuinely tough on the knees after hours of climbing — poles make a real difference.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.2k",
        image: "🥢",
        affiliateUrl: amazonSearchUrl("trekking+poles+pair"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Many trekkers report the descent as harder on the body than the ascent, given the distance and fatigue.",
      },
      {
        name: "Energy Snacks & Water",
        description: "Facilities along the ridge are limited — carrying enough food and water for a full-day climb is essential.",
        price: "₹299",
        rating: 4.5,
        reviews: "5.1k",
        image: "🍫",
        affiliateUrl: amazonSearchUrl("energy+bars+trekking+snacks"),
        tag: "Trek essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "A climb of this length and duration burns significant energy with sparse resupply points en route.",
      },
      {
        name: "Layered Clothing",
        description: "Temperature swings meaningfully between the base, the ridge, and the exposed summit stretch through the day.",
        price: "₹1,499",
        rating: 4.3,
        reviews: "2.9k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("layered+trekking+clothing"),
        tag: "Comfort essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "A pre-dawn start followed by a hot midday climb followed by a cool evening descent covers a wide temperature range.",
      },
    ],
  },
];

export default function ParasnathGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />
      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="High mountain ridge representative of Parasnath Hill, Jharkhand"
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
                { label: "Parasnath", href: null },
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
              {["Parasnath", "Shikharji", "Jain Pilgrimage", "Trekking", "Jharkhand"].map((tag) => (
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
              Parasnath Hill Travel Guide: Jain Temples & Jharkhand's Highest Peak
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Jharkhand's highest peak and one of Jainism's most sacred pilgrimage sites, where 20 of the 24
              Tirthankaras are believed to have attained liberation — everything you need to plan a visit to
              Parasnath.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Parasnath, Jharkhand",
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
                  <h2>Why Parasnath?</h2>
                  <p>
                    <strong>Parasnath Hill</strong> (also known as Shikharji or Sammed Shikharji) is
                    Jharkhand's highest peak at roughly 1,365 metres — but its real significance is
                    spiritual, not just geographic. It's one of the holiest sites in <strong>Jainism</strong>,
                    believed to be the place where 20 of the 24 Tirthankaras attained moksha, or liberation.
                    For most people on the trail, this isn't a hike — it's an act of pilgrimage.
                  </p>
                  <p>
                    That dual identity shapes everything about visiting: the physical demands of a long,
                    steep climb, combined with the atmosphere of a genuinely sacred site dotted with Jain
                    temples along the ridge. Many devout pilgrims complete the round trip overnight in a
                    single continuous day, a demanding tradition observed out of religious devotion.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏔️</span> Parasnath at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Jharkhand, India" },
                        { icon: "⛰️", label: "Elevation", value: "~1,365m (Jharkhand's highest)" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Nearest Rail", value: "Parasnath Station" },
                        { icon: "🚶", label: "Climb Distance", value: "~9km one-way" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹1,500" },
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
                  <h2>Best Time to Visit Parasnath</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cooler temperatures make the long, demanding ascent considerably more manageable.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot — genuinely tough",
                        text: "Heat adds real difficulty to an already-long climb — go with an early start if visiting in this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — slippery trail",
                        text: "The stone path can get slippery in the rain, adding risk to an already-long descent.",
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
                    <strong>Our pick:</strong> October to March. Note that many pilgrims climb overnight
                    regardless of season, as part of long-standing religious tradition.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Parasnath</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airports are Ranchi (~165km) and Kolkata, both
                      requiring an onward road or train journey.
                    </li>
                    <li>
                      <strong>By Train:</strong> Parasnath railway station sits on the Delhi-Kolkata main
                      line, making this genuinely one of the more train-accessible destinations in Jharkhand.
                    </li>
                    <li>
                      <strong>By Road:</strong> A short drive from Parasnath station to Madhuban, the base
                      town where the climb begins.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Because the station sits directly on a major national rail
                    line, this is one of the easiest Jharkhand pilgrimage sites to combine with a longer
                    Delhi-Kolkata rail journey.
                  </div>
                </section>

                <section id="the-climb">
                  <h2>The Climb & Temples</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Ridge trail and mountain scenery representative of the Parasnath climb"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The ascent:</strong> Roughly 9km one-way from Madhuban with significant
                      elevation gain — typically several hours each way, and many pilgrims complete the
                      full round trip in a single very long day.
                    </li>
                    <li>
                      <strong>Jain temples (derasars):</strong> Numerous temples dot the ridge, each
                      dedicated to a different Tirthankara, marking the sites believed associated with their
                      liberation.
                    </li>
                    <li>
                      <strong>Madhuban:</strong> The base town where nearly all pilgrims and visitors stay
                      before and after the climb.
                    </li>
                    <li>
                      <strong>Palanquin (doli) services:</strong> Available in Madhuban for those unable to
                      walk the full distance — verify current rates locally before starting out.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Parasnath</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🛕", range: "₹300–₹800/night", picks: ["Dharamshala-style pilgrim stays in Madhuban", "Basic guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,200–₹2,500/night", picks: ["Private hotels in Madhuban", "Better-appointed guesthouses"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better hotels — luxury options here are genuinely limited"] },
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
                  <h2>What to Eat Near Parasnath</h2>
                  <ul>
                    <li><strong>Madhuban dharamshala meals:</strong> Simple, pure-vegetarian meals reflecting Jain dietary customs, widely available at pilgrim guesthouses.</li>
                    <li><strong>Local eateries:</strong> A handful of small restaurants in Madhuban serving simple vegetarian thalis.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-2 Day Parasnath Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Rest",
                        color: "bg-amber-700",
                        activities: ["Arrive in Madhuban", "Check in and rest ahead of the climb", "Early dinner and early sleep"],
                      },
                      {
                        day: "Day 2",
                        title: "The Climb",
                        color: "bg-forest-600",
                        activities: [
                          "Very early start (pre-dawn for many pilgrims)",
                          "Ascend the ridge, visiting temples along the way",
                          "Reach the summit area, then begin the descent",
                          "Return to Madhuban by evening",
                        ],
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
                          ["Accommodation/night", "₹500", "₹1,800"],
                          ["Food/day", "₹250", "₹500"],
                          ["Palanquin (optional, one-way)", "Verify locally", "Verify locally"],
                          ["Daily total (excl. palanquin)", "₹750", "₹2,300"],
                          ["1-2 Day trip total (excl. palanquin)", "₹1,500", "₹4,600"],
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
                    * Excludes transport to the region. Palanquin rates change and should be verified locally
                    in Madhuban.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Parasnath</h2>
                  <ul>
                    <li><strong>Prepare physically:</strong> This is a demanding full-day climb — don't underestimate the distance and elevation gain.</li>
                    <li><strong>Start very early:</strong> Many pilgrims begin before dawn to manage the heat and the length of the day.</li>
                    <li><strong>Carry water and snacks:</strong> Facilities along the ridge are limited.</li>
                    <li><strong>Respect the pilgrimage:</strong> This is an active, deeply significant Jain pilgrimage site — behave accordingly along the temple-lined ridge.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Start very early to manage the heat and distance", "Carry sufficient water and energy snacks", "Wear proper trekking shoes", "Respect the site's active pilgrimage status", "Consider a palanquin if you can't manage the full walk"].map((item) => (
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
                        {["Underestimate the length and difficulty of the climb", "Start late in the day without a torch for the return", "Wear casual sandals for a 9km mountain trail", "Behave disrespectfully around an active pilgrimage site", "Skip carrying enough water and snacks"].map((item) => (
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
                {["Parasnath", "Shikharji", "Jain Pilgrimage", "Trekking", "Jharkhand", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={PARASNATH_GEAR} destination="Parasnath" />
              <RelatedPostsGrid currentSlug="parasnath-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="parasnath-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
