// src/app/blog/damdama-lake-travel-guide/page.tsx
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
  title: "Damdama Lake Travel Guide: Haryana's Largest Natural Lake",
  description:
    "The complete Damdama Lake travel guide. Aravalli hill scenery, walking trails, paragliding history, where to stay, best time to visit, and honest practical advice for a Gurugram weekend escape.",
  keywords:
    "Damdama Lake travel guide, Damdama Lake Sohna, Damdama Lake Gurugram, Aravalli hills Haryana, best time to visit Damdama Lake, how to reach Damdama Lake",
  openGraph: {
    title: "Damdama Lake Travel Guide: Haryana's Largest Natural Lake",
    description: "A quiet Aravalli-ringed lake and a former paragliding hotspot, one of the easiest weekend escapes from Gurugram — the complete guide to Damdama Lake.",
    url: "https://club.kudozz.in/blog/damdama-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/jammu-kashmir/dal.jpg", width: 1200, height: 630, alt: "Quiet lake scenery representative of Damdama Lake, Haryana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damdama Lake Travel Guide: Haryana's Largest Natural Lake",
    description: "A quiet Aravalli-ringed lake near Gurugram — the complete guide to Damdama Lake.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/damdama-lake-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Damdama Lake Travel Guide: Haryana's Largest Natural Lake",
          description: "The complete Damdama Lake travel guide.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/damdama-lake-travel-guide" },
          about: {
            "@type": "Place",
            name: "Damdama Lake",
            address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Damdama Lake Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Is Damdama Lake worth visiting?",
    a: "Yes, if you're looking for a quiet, low-key nature escape rather than a developed tourist attraction — it's genuinely one of the easiest weekend breaks from Gurugram's traffic, but set expectations for an undeveloped, unpolished spot rather than a resort-style destination.",
  },
  {
    q: "Can I still paraglide at Damdama Lake?",
    a: "Paragliding activity here has fluctuated and been restricted at various points over the years — verify current operator availability before planning a trip specifically around that activity.",
  },
  {
    q: "How do I reach Damdama Lake?",
    a: "It's roughly 30km from Gurugram via Sohna Road, a straightforward day-trip drive with no need for public transport connections.",
  },
  {
    q: "Is Damdama Lake good for a family day trip?",
    a: "Yes, for a relaxed walk and picnic — just don't expect developed facilities like those at more built-up lakes; bring your own food and water.",
  },
  {
    q: "What is the best time to visit Damdama Lake?",
    a: "October to March, when the exposed, low-elevation terrain around the lake is far more comfortable than during the intense summer heat.",
  },
  {
    q: "Is there accommodation at Damdama Lake?",
    a: "There are a few resort-style properties in the area, but most visitors treat this as a day trip from Gurugram rather than an overnight destination.",
  },
  {
    q: "What is the budget for a trip to Damdama Lake?",
    a: "A very low-cost day trip — mainly transport and any food you bring or buy nearby, typically well under ₹1,000 per person.",
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
  { id: "introduction", title: "Why Damdama Lake?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Damdama Lake", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const DAMDAMA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a quiet lakeside day trip",
    emoji: "🏞️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "For the walking trails around the lake edge and into the surrounding Aravalli scrubland.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Trail essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The lakeside trails involve uneven, natural terrain rather than paved paths.",
      },
      {
        name: "Sun Hat",
        description: "The exposed, low-elevation terrain around the lake offers little shade.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.8k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "This is genuinely one of the more sun-exposed day-trip spots near Gurugram.",
      },
      {
        name: "Packed Food & Water",
        description: "Facilities are minimal at Damdama — bring your own supplies rather than relying on nearby options.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "🥪",
        affiliateUrl: amazonSearchUrl("insulated+picnic+bag"),
        tag: "Essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "This is a genuinely undeveloped spot — don't expect much in the way of food stalls.",
      },
      {
        name: "Insect Repellent",
        description: "Useful for time spent near the water's edge, especially in warmer months.",
        price: "₹199",
        rating: 4.3,
        reviews: "4.2k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"),
        tag: "Lakeside essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Standing water areas near the lake edge can bring mosquito activity.",
      },
    ],
  },
];

export default function DamdamaLakeGuidePage() {
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
              alt="Quiet lake scenery representative of Damdama Lake, Haryana"
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
                { label: "Damdama Lake", href: null },
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
              {["Damdama Lake", "Aravalli Hills", "Off-beat", "Haryana"].map((tag) => (
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
              Damdama Lake Travel Guide: Haryana's Largest Natural Lake
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet Aravalli-ringed lake and a former paragliding hotspot, one of the easiest
              weekend escapes from Gurugram.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Damdama Lake, Haryana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,300 words",
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
                  <h2>Why Damdama Lake?</h2>
                  <p>
                    <strong>Damdama Lake</strong> is Haryana's largest natural lake, set among the
                    Aravalli hills near Sohna. It's historically been known as a paragliding site,
                    though that activity has fluctuated over the years — what remains constant is the
                    lake's genuinely peaceful, undeveloped character, a real point of difference from
                    Haryana's more built-up attractions.
                  </p>
                  <p>
                    For Gurugram residents and visitors, it's one of the simplest ways to trade
                    traffic and crowds for a quiet afternoon by the water — as long as you go in with
                    the right expectations: this is a nature-and-quiet destination, not a developed
                    tourist facility.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Damdama Lake at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🌊", label: "Distinction", value: "Haryana's largest natural lake" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "Distance from Gurugram", value: "~30km" },
                        { icon: "⛰️", label: "Setting", value: "Aravalli hills" },
                        { icon: "💰", label: "Budget/Day", value: "Under ₹1,000" },
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
                  <h2>Best Time to Visit Damdama Lake</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Comfortable temperatures for walking around the lake and surrounding scrubland.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Intense heat",
                        text: "The exposed, low-elevation terrain gets genuinely hot — best avoided for a leisurely visit.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "The lake and surrounding hills turn greener, though periodic rain can affect access.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Damdama Lake</h2>
                  <ul>
                    <li>
                      <strong>By Road:</strong> Roughly 30km from Gurugram via Sohna Road, a
                      straightforward and popular day-trip drive.
                    </li>
                    <li>
                      <strong>From Delhi:</strong> A somewhat longer drive, but still manageable as a
                      day trip combined with a Gurugram stop.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Verify current paragliding operator status before
                    planning a trip specifically around that activity — availability here has changed
                    over the years.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do at Damdama Lake</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Lake and hill scenery at Damdama Lake"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Lakeside walks:</strong> Quiet trails around the lake edge, a genuine
                      change of pace from Gurugram's traffic.
                    </li>
                    <li>
                      <strong>Boating:</strong> Available in some seasons — check current
                      availability locally.
                    </li>
                    <li>
                      <strong>Paragliding (seasonal/variable):</strong> Historically a site for this
                      activity, though operator availability has fluctuated — verify current status.
                    </li>
                    <li>
                      <strong>Aravalli scrubland walks:</strong> Trails extending into the
                      surrounding hills for those wanting a longer nature walk.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Damdama Lake</h2>
                  <p>
                    Most visitors treat Damdama Lake as a day trip from Gurugram. A few resort-style
                    properties exist in the area for those wanting to stay overnight.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "Limited options", picks: ["A handful of guesthouses in the surrounding area"] },
                      { tier: "Mid-Range", icon: "🏢", range: "₹2,500–₹5,000/night", picks: ["Small lakeside resort properties"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["Very few premium options near the lake itself — Gurugram offers far more choice"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Damdama Lake</h2>
                  <p>
                    Food options right at the lake are minimal — carrying your own food and water is
                    the practical approach. A small number of local eateries exist in the surrounding
                    villages and along Sohna Road.
                  </p>
                </section>

                <section id="itinerary">
                  <h2>Day Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive & Arrival",
                        color: "bg-amber-700",
                        activities: ["Drive from Gurugram via Sohna Road", "Arrive and settle in for a lakeside walk"],
                      },
                      {
                        day: "Midday",
                        title: "Lake & Trails",
                        color: "bg-forest-600",
                        activities: ["Walk around the lake edge", "Optional boating or paragliding if currently available", "Picnic with packed food"],
                      },
                      {
                        day: "Afternoon",
                        title: "Return",
                        color: "bg-orange-600",
                        activities: ["Head back to Gurugram before evening traffic builds"],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {d.title}
                          </h4>
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
                          {["Expense", "Typical Cost"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Local transport (round trip from Gurugram)", "₹500 – ₹1,000"],
                          ["Food (self-carried or nearby)", "₹200 – ₹400"],
                          ["Boating/activities (if available)", "₹100 – ₹500"],
                          ["Day total", "Under ₹1,000 typical"],
                        ].map(([exp, b], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes transport if coming from outside the Gurugram/Delhi NCR region.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Damdama Lake</h2>
                  <ul>
                    <li>
                      <strong>Verify paragliding availability before planning around it:</strong>{" "}
                      Operator status has fluctuated over the years.
                    </li>
                    <li>
                      <strong>Carry your own food and water:</strong> Facilities are minimal at the
                      lake itself.
                    </li>
                    <li>
                      <strong>Go for a quiet escape, not a developed attraction:</strong> Set
                      expectations accordingly for the most enjoyable visit.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Verify paragliding operator status if that's your reason for going",
                          "Carry your own food and water",
                          "Go for a relaxed nature walk rather than a checklist visit",
                          "Visit in the cooler Oct–Mar months",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Expect developed tourist facilities or many food options",
                          "Plan a trip solely around paragliding without confirming current status",
                          "Visit during peak summer heat for a leisurely walk",
                          "Rely on finding water or supplies nearby — bring your own",
                        ].map((item) => (
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
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                          {f.q}
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Damdama Lake", "Aravalli Hills", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={DAMDAMA_GEAR} destination="Damdama Lake" />

              <RelatedPostsGrid currentSlug="damdama-lake-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="damdama-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
