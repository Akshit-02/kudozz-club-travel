// src/app/blog/bhindawas-travel-guide/page.tsx
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
  title: "Bhindawas Wildlife Sanctuary Travel Guide: Haryana's Largest Wetland",
  description:
    "The complete Bhindawas Wildlife Sanctuary travel guide. Migratory waterbirds, the Jhajjar reservoir, when to go, how to reach, and honest tips for this quiet birdwatching sanctuary near Delhi.",
  keywords:
    "Bhindawas Wildlife Sanctuary, Bhindawas travel guide, Haryana birdwatching, Jhajjar wetland, migratory birds Haryana, best time to visit Bhindawas, how to reach Bhindawas",
  openGraph: {
    title: "Bhindawas Wildlife Sanctuary Travel Guide: Haryana's Largest Wetland",
    description:
      "A reservoir-fed wetland sanctuary drawing thousands of migratory waterbirds, and Haryana's largest protected wetland — the complete guide to Bhindawas.",
    url: "https://club.kudozz.in/blog/bhindawas-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Wetland reservoir representative of Bhindawas Wildlife Sanctuary, Haryana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhindawas Wildlife Sanctuary Travel Guide: Haryana's Largest Wetland",
    description:
      "Haryana's largest protected wetland, drawing thousands of migratory waterbirds each winter — the complete guide to Bhindawas.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bhindawas-travel-guide",
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
          headline: "Bhindawas Wildlife Sanctuary Travel Guide: Haryana's Largest Wetland",
          description: "The complete Bhindawas Wildlife Sanctuary travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/bhindawas-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Bhindawas Wildlife Sanctuary",
            address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Bhindawas Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Is Bhindawas worth visiting outside winter?",
    a: "Honestly, not much — the sanctuary's main draw is its migratory waterbird population, which peaks November through February. Outside that window there's far less to see, and most visitors will find the trip underwhelming.",
  },
  {
    q: "How does Bhindawas compare to Sultanpur National Park?",
    a: "Both are wetland bird sanctuaries in the same region and serve a similar niche, but Bhindawas is quieter, less developed, and less visited than Sultanpur. Sultanpur has better infrastructure and is closer to Delhi/Gurugram; Bhindawas suits travelers who specifically want a lower-key, less crowded birding spot.",
  },
  {
    q: "How do I reach Bhindawas Wildlife Sanctuary?",
    a: "It's roughly 85km from Delhi, in Jhajjar district. Road is the only practical route — there's no direct rail or air access, so plan on driving or hiring a car.",
  },
  {
    q: "Do I need a guide or permit to visit?",
    a: "No special permit is typically required for a day visit, but facilities and staff presence are minimal — bringing your own binoculars and not relying on on-site amenities is the safer approach.",
  },
  {
    q: "Is Bhindawas suitable for casual tourists, or just birdwatchers?",
    a: "This is genuinely a destination for dedicated birdwatchers rather than general sightseeing. If you're not specifically interested in migratory waterbirds, your time is likely better spent elsewhere in the region.",
  },
  {
    q: "What is the budget for a trip to Bhindawas?",
    a: "It's a very low-cost day trip — expect to spend mainly on transport (private car or taxi from Delhi/Jhajjar) since there's little in the way of paid attractions, food stalls, or accommodation on site.",
  },
  {
    q: "Can I stay overnight near Bhindawas?",
    a: "Accommodation options directly at the sanctuary are essentially nonexistent. Most visitors do this as a day trip from Delhi, Gurugram, or Jhajjar town, where basic stays are available if needed.",
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
  { id: "introduction", title: "Why Bhindawas?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bhindawas", level: 2 },
  { id: "top-attractions", title: "What to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BHINDAWAS_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a self-sufficient day of birdwatching",
    emoji: "🦆",
    items: [
      {
        name: "Binoculars (8x42)",
        description:
          "Non-negotiable here — most of the birdlife sits well out over open water, and you won't get a real look without them.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "6.1k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("binoculars+8x42+birdwatching"),
        tag: "Essential",
        tagColor: "bg-red-100 text-red-700",
        why: "There's minimal on-site infrastructure to bring you closer to the birds — binoculars do all the work.",
      },
      {
        name: "Zoom Camera / Telephoto Lens",
        description:
          "For anyone wanting usable bird photographs rather than just a good look through binoculars.",
        price: "₹8,999",
        rating: 4.4,
        reviews: "2.3k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("telephoto+zoom+camera+birdwatching"),
        tag: "Recommended",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Birds here keep their distance across open reservoir water — a real zoom range matters.",
      },
      {
        name: "Neutral-Toned Clothing",
        description: "Muted greens, browns, and greys keep you less conspicuous near the water's edge.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.4k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("neutral+outdoor+birdwatching+clothing"),
        tag: "Good Practice",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Bright colours are more likely to startle waterbirds before you get a good look.",
      },
      {
        name: "Water and Snacks",
        description: "There are essentially no shops or stalls inside the sanctuary — come prepared.",
        price: "—",
        rating: 4.5,
        reviews: "—",
        image: "🥤",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "This is a genuinely low-facility destination — self-sufficiency is expected.",
      },
    ],
  },
];

export default function BhindawasGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Wetland reservoir representative of Bhindawas Wildlife Sanctuary, Haryana"
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
                { label: "Bhindawas", href: null },
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
              {["Bhindawas", "Wildlife Sanctuary", "Birdwatching", "Off-beat", "Haryana"].map((tag) => (
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
              Bhindawas Wildlife Sanctuary Travel Guide: Haryana's Largest Wetland
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A reservoir-fed wetland sanctuary drawing thousands of migratory waterbirds, and Haryana's largest
              protected wetland — a quiet alternative for birdwatchers willing to skip the crowds.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Jhajjar, Haryana",
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
                  <h2>Why Bhindawas?</h2>
                  <p>
                    <strong>Bhindawas Wildlife Sanctuary</strong>, built around a reservoir in Haryana's Jhajjar
                    district, is widely cited as the state's largest protected wetland. It plays host to
                    significant numbers of migratory waterbirds every winter, and while it serves a similar
                    purpose to the better-known Sultanpur National Park closer to Gurugram, Bhindawas is quieter,
                    less developed, and sees far fewer visitors.
                  </p>
                  <p>
                    That's both its charm and its limitation. There's no polished visitor centre, no curated
                    walking trails, and very little to do here outside the winter migration season — this is a
                    destination for people who specifically want birds, not a general day-out.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦆</span> Bhindawas at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Jhajjar, Haryana" },
                        { icon: "🦅", label: "Known For", value: "Migratory waterbirds" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "🚗", label: "From Delhi", value: "~85 km" },
                        { icon: "🎫", label: "Facilities", value: "Minimal — come prepared" },
                        { icon: "💰", label: "Budget/Day", value: "₹500 – ₹1,500" },
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
                  <h2>Best Time to Visit Bhindawas</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "🦆",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — our pick",
                        text: "Migratory waterbirds arrive in force, making this the only real window that justifies a dedicated trip.",
                      },
                      {
                        season: "Mar – Oct",
                        emoji: "🌤️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Off-season — limited appeal",
                        text: "Most migratory species have left. Resident birdlife remains but the sanctuary offers much less to see.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span
                            className="font-bold text-stone-800 text-sm"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
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
                    <strong>Our honest take:</strong> Don't plan a trip here outside November–February. This is a
                    single-season destination, and the payoff simply isn't there the rest of the year.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Bhindawas</h2>
                  <ul>
                    <li>
                      <strong>By Road:</strong> The only practical route — roughly 85km from Delhi via Jhajjar
                      town. A private car or taxi is the standard approach; there's no meaningful public transport
                      option that gets you to the sanctuary gate itself.
                    </li>
                    <li>
                      <strong>By Rail:</strong> No direct rail access. Jhajjar's nearest railway connections still
                      require a further drive to the sanctuary.
                    </li>
                    <li>
                      <strong>By Air:</strong> Delhi's IGI Airport is the nearest, roughly 100km away including the
                      drive to Bhindawas.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hire a car for the round trip from Delhi or Gurugram rather than
                    relying on local transport — public options thin out well before you reach the sanctuary.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>What to See at Bhindawas</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Reservoir wetland at Bhindawas Wildlife Sanctuary"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The reservoir wetland:</strong> The sanctuary's core — open water and marshy edges
                      that attract large numbers of migratory waterbirds in winter.
                    </li>
                    <li>
                      <strong>Migratory bird activity:</strong> The main reason to visit; species vary year to
                      year but the winter influx is the sanctuary's defining feature.
                    </li>
                    <li>
                      <strong>Quiet, undeveloped surroundings:</strong> Unlike more polished sanctuaries, Bhindawas
                      remains genuinely low-key — appealing if you want solitude, less so if you want amenities.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Bhindawas</h2>
                  <p>
                    There is essentially no accommodation at the sanctuary itself. Most visitors treat this as a
                    day trip from Delhi or Gurugram; if an overnight stay is needed, basic options exist in Jhajjar
                    town.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Day-Trip (recommended)",
                        icon: "🚗",
                        range: "N/A — return same day",
                        picks: ["Base in Delhi or Gurugram", "Drive out and back in a single day"],
                      },
                      {
                        tier: "If Staying Nearby",
                        icon: "🏨",
                        range: "₹800–₹2,000/night",
                        picks: ["Basic hotels in Jhajjar town", "Not purpose-built for tourists"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div
                          className="text-xs text-forest-600 font-medium mb-3"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
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
                  <h2>What to Eat Near Bhindawas</h2>
                  <p>
                    There's no food available inside the sanctuary. Eat before you leave Delhi/Gurugram, or stop
                    at a dhaba in Jhajjar town on the way — simple Haryanvi thalis and roadside snacks are the
                    norm along this route.
                  </p>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Bhindawas Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive Out & Birdwatch",
                        color: "bg-amber-700",
                        activities: [
                          "Leave Delhi/Gurugram early to reach by mid-morning",
                          "Spend 2–3 hours around the reservoir with binoculars",
                          "Photograph waterbirds from a respectful distance",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return Journey",
                        color: "bg-forest-600",
                        activities: [
                          "Head back toward Jhajjar or Delhi",
                          "Optional stop for a roadside meal en route",
                        ],
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
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
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
                          {["Expense", "Estimate"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Car/taxi (round trip from Delhi)", "₹2,500 – ₹4,000"],
                          ["Food (roadside stops)", "₹300 – ₹600"],
                          ["Entry (if applicable)", "Nominal / free"],
                          ["Total for a group day trip", "₹3,000 – ₹4,600"],
                        ].map(([exp, cost], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Costs are per group/car, not per person, given this is typically a shared day trip.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Bhindawas</h2>
                  <ul>
                    <li>
                      <strong>Come self-sufficient:</strong> Bring your own water, snacks, and binoculars — don't
                      expect facilities on site.
                    </li>
                    <li>
                      <strong>Time it right:</strong> A visit outside November–February will likely disappoint —
                      plan accordingly.
                    </li>
                    <li>
                      <strong>Go early morning:</strong> Bird activity is typically highest in the first few hours
                      after sunrise.
                    </li>
                    <li>
                      <strong>Compare with Sultanpur first:</strong> If you want a more developed birdwatching
                      experience with better infrastructure, Sultanpur National Park may suit you better.
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
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Visit specifically between November and February",
                          "Bring binoculars — they're essential, not optional",
                          "Pack water and snacks before you leave",
                          "Go early morning for the best bird activity",
                          "Treat this as a birdwatching trip, not general sightseeing",
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
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Expect a polished visitor centre or marked trails",
                          "Visit outside winter expecting a rewarding trip",
                          "Rely on finding food or water on site",
                          "Plan an overnight stay directly at the sanctuary",
                          "Come without binoculars and expect to see much",
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
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {f.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Bhindawas", "Wildlife Sanctuary", "Birdwatching", "Haryana", "Off-beat", "India"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BHINDAWAS_GEAR} destination="Bhindawas" />

              <RelatedPostsGrid currentSlug="bhindawas-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bhindawas-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
