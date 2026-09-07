// src/app/blog/surajkund-travel-guide/page.tsx
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
  title: "Surajkund Travel Guide: Crafts Mela & Ancient Sun Reservoir",
  description:
    "The complete Surajkund travel guide. The ancient stepped reservoir, the Surajkund International Crafts Mela, nearby Anangpur Dam, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Surajkund travel guide, Surajkund Crafts Mela, Surajkund reservoir, Surajkund Mela dates, best time to visit Surajkund, how to reach Surajkund, Faridabad heritage",
  openGraph: {
    title: "Surajkund Travel Guide: Crafts Mela & Ancient Sun Reservoir",
    description: "A thousand-year-old amphitheatre-shaped reservoir that hosts one of Asia's largest crafts fairs every February — the complete guide to Surajkund.",
    url: "https://club.kudozz.in/blog/surajkund-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [{ url: "/images/destinations/udaipur/saheliyon.jpg", width: 1200, height: 630, alt: "Historic garden and reservoir scenery representative of Surajkund, Haryana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surajkund Travel Guide: Crafts Mela & Ancient Sun Reservoir",
    description: "An ancient reservoir and Asia's largest crafts fair — the complete guide to Surajkund.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/surajkund-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Surajkund Travel Guide: Crafts Mela & Ancient Sun Reservoir",
          description: "The complete Surajkund travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/surajkund-travel-guide" },
          about: {
            "@type": "Place",
            name: "Surajkund",
            address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Surajkund Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "What is the Surajkund International Crafts Mela?",
    a: "A major month-long February festival, widely cited as one of Asia's largest crafts fairs, drawing artisans and cultural performers from across India and invited partner countries each year. Verify current-year exact dates and the partner-country theme before planning your trip.",
  },
  {
    q: "How old is the Surajkund reservoir?",
    a: "It's believed to have been built by the Tomar dynasty around the 10th century — an amphitheatre-shaped rainwater harvesting structure originally dedicated to the sun god, making it one of the region's oldest surviving water structures.",
  },
  {
    q: "How do I reach Surajkund?",
    a: "It's roughly 8km from South Delhi's border, very easily reached by road — the nearest metro/rail hub is Delhi itself, making it a straightforward day trip from the capital.",
  },
  {
    q: "Do I need to visit during the Mela specifically?",
    a: "No — the ancient reservoir site is a quick, low-cost stop outside festival dates too. The Mela is worth planning around only if the crafts-fair experience itself is your priority, since it draws very heavy crowds." ,
  },
  {
    q: "How many days do I need in Surajkund?",
    a: "The reservoir site itself needs only a couple of hours. If visiting during the Mela, budget a half to full day given the scale of the grounds and crowds.",
  },
  {
    q: "What is the budget for a trip to Surajkund?",
    a: "Outside Mela dates, this is a very low-cost day trip. During the Mela, budget for an entry ticket plus discretionary spending on crafts — costs vary significantly by how much shopping you do.",
  },
  {
    q: "What else is near Surajkund?",
    a: "Anangpur Dam and the Aravalli Golf Course are both nearby, making for quieter add-on stops if you want to extend your visit beyond the reservoir and Mela grounds.",
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
  { id: "introduction", title: "Why Surajkund?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Surajkund", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const SURAJKUND_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the Mela grounds and reservoir site",
    emoji: "🏺",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "Essential if visiting during the Mela — the crafts fair grounds are extensive.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Mela essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The Mela grounds cover a large area with plenty of walking between stalls.",
      },
      {
        name: "Cash / Payment Card",
        description: "For craft purchases at the Mela — many smaller stalls prefer cash.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "💳",
        affiliateUrl: amazonSearchUrl("travel+wallet+organizer"),
        tag: "Shopping essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "A genuine shopping destination during Mela dates — come prepared to browse and buy.",
      },
      {
        name: "Sun Hat",
        description: "Useful for a day spent largely outdoors around the reservoir and Mela grounds.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.8k",
        image: "🧢",
        affiliateUrl: amazonSearchUrl("sun+hat+travel+outdoor"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Limited shade across much of the open reservoir and fairground area.",
      },
    ],
  },
];

export default function SurajkundGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/udaipur/saheliyon.jpg"
              alt="Historic garden and reservoir scenery representative of Surajkund, Haryana"
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
                { label: "Surajkund", href: null },
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
              {["Surajkund", "Surajkund Mela", "Heritage", "Haryana"].map((tag) => (
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
              Surajkund Travel Guide: Crafts Mela & Ancient Sun Reservoir
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A thousand-year-old amphitheatre-shaped reservoir that hosts one of Asia's largest
              crafts fairs every February.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Surajkund, Haryana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
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
                  <h2>Why Surajkund?</h2>
                  <p>
                    <strong>Surajkund</strong> takes its name from an ancient, amphitheatre-shaped
                    stepped reservoir believed built by the Tomar dynasty around the 10th century — a
                    genuinely old and architecturally distinctive water-harvesting structure
                    dedicated to the sun god.
                  </p>
                  <p>
                    Today, Surajkund is best known for the <strong>Surajkund International Crafts
                    Mela</strong>, a major month-long February festival widely cited as one of Asia's
                    largest crafts fairs, drawing artisans and cultural performers from across India
                    and invited partner countries each year.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏺</span> Surajkund at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🏛️", label: "Key Site", value: "10th-century stepped reservoir" },
                        { icon: "🌡️", label: "Best Time", value: "Feb (Mela) or Oct – Mar" },
                        { icon: "🚗", label: "Distance from Delhi", value: "~8km" },
                        { icon: "🎨", label: "Signature Event", value: "Surajkund Crafts Mela" },
                        { icon: "💰", label: "Budget/Day", value: "₹500 – ₹2,500" },
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
                  <h2>Best Time to Visit Surajkund</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "February",
                        emoji: "🎨",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Crafts Mela season",
                        text: "The Surajkund International Crafts Mela typically runs this month — verify current-year exact dates and theme country before planning around it.",
                      },
                      {
                        season: "Oct – Mar (outside Mela)",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Comfortable, quiet visit",
                        text: "Pleasant weather for a quick, uncrowded visit to the reservoir site itself.",
                      },
                      {
                        season: "Apr – Sep",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot",
                        text: "Warm North Indian plains weather — still doable for a short visit but less pleasant for extended time outdoors.",
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
                  <blockquote>
                    <strong>Our advice:</strong> Time your visit for February if the crafts fair is
                    the draw — otherwise, any cooler month works well for a quick, quiet stop at the
                    reservoir.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Surajkund</h2>
                  <ul>
                    <li>
                      <strong>By Road:</strong> Roughly 8km from South Delhi's border, an easy and
                      direct drive.
                    </li>
                    <li>
                      <strong>By Metro/Rail:</strong> Delhi is the nearest major transport hub, with
                      onward road/cab connections to Surajkund.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If visiting during the Mela, book tickets ahead and
                    expect significant traffic near the venue — plan extra travel time.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Surajkund</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/saheliyon.jpg"
                      alt="Ancient garden and water structure at Surajkund"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The ancient reservoir:</strong> A 10th-century amphitheatre-shaped
                      stepped water structure, one of the region's oldest surviving of its kind.
                    </li>
                    <li>
                      <strong>Surajkund International Crafts Mela:</strong> A month-long February
                      festival featuring artisans, performers, and cultural exhibits from across
                      India and partner countries.
                    </li>
                    <li>
                      <strong>Anangpur Dam:</strong> A quieter nearby stop for those wanting to
                      extend their visit.
                    </li>
                    <li>
                      <strong>Aravalli Golf Course:</strong> An additional nearby leisure option.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Surajkund</h2>
                  <p>
                    Given the proximity to Delhi, most visitors treat Surajkund as a day trip — but
                    hotels in Faridabad and South Delhi offer practical options if staying overnight,
                    especially during the crowded Mela dates.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏨", range: "₹1,000–₹2,000/night", picks: ["Budget hotels in Faridabad", "South Delhi guesthouses"] },
                      { tier: "Mid-Range", icon: "🏢", range: "₹2,500–₹5,000/night", picks: ["Business hotels near the Delhi-Faridabad border", "Mid-range chains close to the Mela grounds"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000–₹15,000+/night", picks: ["Premium South Delhi hotels", "Well-appointed Faridabad properties"] },
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
                  <h2>What to Eat at Surajkund</h2>
                  <ul>
                    <li>
                      <strong>Mela food stalls:</strong> During festival dates, a wide range of
                      regional Indian cuisines are represented across the fairground.
                    </li>
                    <li>
                      <strong>Haryanvi and North Indian fare:</strong> Standard options at nearby
                      Faridabad and South Delhi restaurants outside Mela dates.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Day Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "The Reservoir",
                        color: "bg-amber-700",
                        activities: ["Visit the ancient stepped reservoir", "Explore the surrounding heritage grounds"],
                      },
                      {
                        day: "Afternoon",
                        title: "Mela Grounds (if in season) or Anangpur Dam",
                        color: "bg-forest-600",
                        activities: ["Browse craft stalls and cultural performances during Mela dates", "Alternatively, visit quieter Anangpur Dam outside Mela season"],
                      },
                      {
                        day: "Evening",
                        title: "Return to Delhi",
                        color: "bg-orange-600",
                        activities: ["Short drive back given the close proximity to South Delhi"],
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
                          {["Expense", "Outside Mela", "During Mela"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Entry/reservoir visit", "Free/low-cost", "Mela ticket price varies"],
                          ["Food", "₹200 – ₹500", "₹500 – ₹1,000"],
                          ["Shopping/crafts", "N/A", "₹500+"],
                          ["Day total", "~₹500", "~₹2,000 – ₹2,500"],
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
                    * Excludes transport to the region. Mela entry pricing varies by year — verify
                    current rates.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Surajkund</h2>
                  <ul>
                    <li>
                      <strong>Verify current-year Mela dates:</strong> Timing and the featured
                      partner country change annually.
                    </li>
                    <li>
                      <strong>Book ahead for the Mela:</strong> Crowds are genuinely heavy during
                      festival dates.
                    </li>
                    <li>
                      <strong>Visit the reservoir outside Mela dates for a quick, quiet stop:</strong>{" "}
                      A low-cost option if the crowds aren't for you.
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
                          "Verify current-year Mela dates before planning",
                          "Book tickets ahead during festival season",
                          "Combine with a broader South Delhi/Faridabad day trip",
                          "Visit the reservoir outside Mela dates for a quieter experience",
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
                          "Assume Mela dates without checking current-year information",
                          "Skip booking ahead during festival season",
                          "Expect a quiet visit if going during peak Mela weekends",
                          "Rely only on cash — carry both cash and card options",
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
                {["Surajkund", "Surajkund Mela", "Heritage", "Haryana", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={SURAJKUND_GEAR} destination="Surajkund" />

              <RelatedPostsGrid currentSlug="surajkund-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="surajkund-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
