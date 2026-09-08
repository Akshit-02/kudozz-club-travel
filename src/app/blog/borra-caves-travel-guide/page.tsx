// src/app/blog/borra-caves-travel-guide/page.tsx
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
  title: "Borra Caves Travel Guide: Million-Year-Old Limestone Caverns",
  description:
    "The complete Borra Caves travel guide. Stalactite formations, Ananthagiri Hills, combining with Araku Valley, where to stay, best time to visit, and everything you need to plan a visit.",
  keywords:
    "Borra Caves travel guide, Ananthagiri Hills caves, best time to visit Borra Caves, how to reach Borra Caves, Araku Valley caves, Visakhapatnam limestone caves",
  openGraph: {
    title: "Borra Caves Travel Guide: Million-Year-Old Limestone Caverns",
    description:
      "Some of India's largest and oldest limestone caves, with stalactite formations that took over a million years to form — the complete guide to Borra Caves.",
    url: "https://club.kudozz.in/blog/borra-caves-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hill terrain representative of the Ananthagiri Hills near Borra Caves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borra Caves Travel Guide: Million-Year-Old Limestone Caverns",
    description: "One of India's largest limestone cave systems — the complete guide to Borra Caves.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/borra-caves-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Borra Caves Travel Guide: Million-Year-Old Limestone Caverns",
          description: "The complete Borra Caves travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/borra-caves-travel-guide" },
          about: {
            "@type": "Place",
            name: "Borra Caves",
            address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Borra Caves Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How old are the Borra Caves?",
    a: "Geologists estimate the stalactite and stalagmite formations took over a million years to develop through gradual mineral deposition, making Borra one of India's oldest known cave systems.",
  },
  {
    q: "How do I reach Borra Caves?",
    a: "The caves sit on the Visakhapatnam-Araku Valley route, roughly on the way between the two. Most visitors combine a visit with an Araku Valley trip, either by road or via the scenic Araku train with a road detour.",
  },
  {
    q: "Are the caves difficult to visit?",
    a: "No — Borra Caves have developed pathways and lighting, making them accessible to most casual visitors, unlike more remote, undeveloped cave systems. The interior can be damp and slippery in places, so grippy footwear helps.",
  },
  {
    q: "How much time do I need at Borra Caves?",
    a: "A visit typically takes 1-2 hours, making it an easy half-day stop rather than a full-day destination on its own.",
  },
  {
    q: "Can I combine Borra Caves with Araku Valley in one day?",
    a: "Yes — this is the standard way most travelers experience it, either as a stop en route by road or combined with the Araku train journey.",
  },
  {
    q: "What is the best time to visit Borra Caves?",
    a: "October to February for the most comfortable overall trip conditions, though the caves themselves are visitable year-round given their sheltered, developed nature.",
  },
  {
    q: "Is there a temple inside the caves?",
    a: "Yes — a Shiva shrine sits within the cave complex, reflecting ongoing local devotional use of the site alongside its tourist appeal.",
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
  { id: "introduction", title: "Why Borra Caves?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Borra Caves", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Suggested Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BORRA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a damp, cool underground cave visit",
    emoji: "🕳️",
    items: [
      {
        name: "Grippy Closed-Toe Shoes",
        description: "The cave interior is naturally damp and can be slippery in sections.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("grippy+outdoor+shoes+travel"),
        tag: "Cave essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Wet cave floors and uneven steps are the main hazard for casual visitors here.",
      },
      {
        name: "Light Jacket",
        description: "Caves maintain a naturally cool interior temperature regardless of the weather outside.",
        price: "₹999",
        rating: 4.4,
        reviews: "3.9k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("light+jacket+travel"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The temperature contrast between the outside hills and the cave interior is genuinely noticeable.",
      },
      {
        name: "Small Torch",
        description: "Useful as backup lighting beyond the developed, lit walking path.",
        price: "₹299",
        rating: 4.3,
        reviews: "4.6k",
        image: "🔦",
        affiliateUrl: amazonSearchUrl("small+led+torch+travel"),
        tag: "Backup essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Lighting is generally good but a personal torch is a sensible backup in a cave environment." ,
      },
      {
        name: "Camera",
        description: "For the stalactite/stalagmite formations, genuinely one of the visual highlights of the site.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+low+light"),
        tag: "Sightseeing essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "A camera with decent low-light performance captures the formations better than a phone alone.",
      },
    ],
  },
];

export default function BorraCavesGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Forested hill terrain representative of the Ananthagiri Hills near Borra Caves"
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
                { label: "Borra Caves", href: null },
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
              {["Borra Caves", "Ananthagiri Hills", "Off-beat", "Andhra Pradesh"].map((tag) => (
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
              Borra Caves Travel Guide: Million-Year-Old Limestone Caverns
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Some of India's largest and oldest limestone caves, with stalactite formations that took over a
              million years to form.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Ananthagiri Hills, Andhra Pradesh",
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
                  <h2>Why Borra Caves?</h2>
                  <p>
                    <strong>Borra Caves</strong>, set in the Ananthagiri Hills of the Eastern Ghats, are
                    genuinely significant limestone caves widely cited among India's largest cave systems.
                    Their stalactite and stalagmite formations — built up drop by drop through mineral
                    deposition — are estimated by geologists to have taken over a million years to reach their
                    current scale. Some formations have taken on shapes locals have given devotional names to
                    over time.
                  </p>
                  <p>
                    A British geologist is often credited with the caves' modern "discovery" in the 19th
                    century, though local communities certainly knew of them long before. A Shiva shrine
                    inside the cave complex reflects that continuing local devotional use.
                  </p>
                  <p>
                    Unlike more remote, undeveloped cave systems, Borra has developed pathways and lighting,
                    making it genuinely accessible to casual visitors — and it sits right on the popular
                    Visakhapatnam-Araku Valley route, making it an easy add-on rather than a dedicated trip.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕳️</span> Borra Caves at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🕳️", label: "Known For", value: "Ancient limestone formations" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Visakhapatnam" },
                        { icon: "🛤️", label: "Route", value: "On the Araku Valley road/rail line" },
                        { icon: "💰", label: "Budget/Day", value: "Low-cost day trip" },
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
                  <h2>Best Time to Visit Borra Caves</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "The most comfortable window for the overall trip, especially if combining with Araku Valley by road or train.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Warmer",
                        text: "The caves stay cool inside regardless, but the outdoor drive/wait can be uncomfortably hot.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "The Eastern Ghats are lush and green, though hill roads can be affected by heavy rain.",
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
                    <strong>Our pick:</strong> Combine with an October-February Araku Valley trip — the caves
                    stay sheltered and comfortable year-round, so the seasonal call really comes down to the
                    rest of the journey.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Borra Caves</h2>
                  <ul>
                    <li>
                      <strong>By Road:</strong> On the Visakhapatnam-Araku Valley route, a straightforward
                      stop for anyone driving between the two.
                    </li>
                    <li>
                      <strong>By Train:</strong> Some travelers combine a ride on the scenic Araku train with a
                      road detour to the caves.
                    </li>
                    <li>
                      <strong>Nearest Airport:</strong> Visakhapatnam, the practical regional hub.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build the caves into your Araku Valley itinerary rather than
                    treating it as a standalone trip — they're a natural, easy stop on that route.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See at Borra Caves</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Forested Eastern Ghats terrain near Borra Caves"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Stalactite and stalagmite formations:</strong> The genuine highlight — mineral
                      formations that took over a million years to build up, some with local devotional names.
                    </li>
                    <li>
                      <strong>The Shiva shrine inside the cave:</strong> A working shrine reflecting the site's
                      continued religious significance.
                    </li>
                    <li>
                      <strong>Developed walking path:</strong> A lit, accessible route through the main cave
                      chambers, suitable for most casual visitors.
                    </li>
                    <li>
                      <strong>Combine with Araku Valley:</strong> The caves sit directly on the shared route,
                      making a combined trip natural and efficient.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Borra Caves</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹800–₹1,800/night", picks: ["Guesthouses in Araku town", "Basic stays en route"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹2,000–₹4,500/night", picks: ["Coffee-estate stays in Araku Valley", "Mid-range hotels in Araku"] },
                      { tier: "Luxury", icon: "✨", range: "₹6,000+/night", picks: ["Premium resort-style stays in Araku Valley"] },
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
                  <blockquote>
                    There's no real standalone accommodation right at the caves — most visitors stay in Araku
                    Valley or Visakhapatnam.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Borra Caves</h2>
                  <ul>
                    <li>
                      <strong>Snack stalls near the entrance:</strong> Simple local snacks and drinks by the
                      cave entrance.
                    </li>
                    <li>
                      <strong>Araku Valley cafes and restaurants:</strong> A wider range of food, including
                      locally grown Araku coffee, a short drive away.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Suggested Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Half-Day Stop",
                        title: "Borra Caves En Route to Araku",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Visakhapatnam early morning",
                          "Explore Borra Caves' lit walking path (1-2 hours)",
                          "Continue on to Araku Valley for the rest of the day",
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Cave entry ticket", "₹80", "₹150"],
                          ["Local transport (add-on to Araku trip)", "₹300", "₹800"],
                          ["Snacks/refreshments", "₹150", "₹400"],
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
                    * Excludes transport to the region and accommodation, since most visitors combine this with
                    an Araku Valley trip.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Borra Caves</h2>
                  <ul>
                    <li>
                      <strong>Combine with Araku Valley:</strong> The most efficient way to visit, given the
                      shared route.
                    </li>
                    <li>
                      <strong>Wear grippy footwear:</strong> The cave interior can be damp and slippery.
                    </li>
                    <li>
                      <strong>Bring a light jacket:</strong> The cave interior is noticeably cooler than
                      outside.
                    </li>
                    <li>
                      <strong>Allow 1-2 hours:</strong> This is an easy half-day stop, not a full-day
                      destination.
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
                          "Combine with an Araku Valley trip",
                          "Wear grippy, closed-toe shoes",
                          "Carry a light jacket for the cool interior",
                          "Take your time appreciating the formations",
                          "Respect the working Shiva shrine inside",
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
                          "Wear slippery-soled footwear",
                          "Expect a full-day destination on its own",
                          "Touch or damage the formations",
                          "Skip a light jacket assuming the outside heat carries in",
                          "Rush through without appreciating the scale",
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
                {["Borra Caves", "Ananthagiri Hills", "Off-beat", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BORRA_GEAR} destination="Borra Caves" />

              <RelatedPostsGrid currentSlug="borra-caves-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="borra-caves-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
