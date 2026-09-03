// src/app/blog/courtallam-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Courtallam Falls Guide: Best Time & How to Reach",
  description:
    "Complete Courtallam guide — the Main Falls, Five Falls, Old Falls and Tiger Falls, the Aavani bathing season, Kutralanathar Temple, how to reach Tenkasi district, and a full visit plan.",
  keywords:
    "Courtallam travel guide, Kutralam Falls, Spa of South India, Courtallam Aavani season, Main Falls Courtallam, Five Falls, Kutralanathar Temple, how to reach Courtallam, Tenkasi waterfalls",
  openGraph: {
    title: "Courtallam Falls Guide: Best Time & How to Reach",
    description:
      "Known across South India as the 'Spa of South India' — a cluster of waterfalls believed to hold curative, mineral-rich waters. The complete Courtallam guide.",
    url: "https://club.kudozz.in/blog/courtallam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "A forested waterfall cascading over rocks, evoking Courtallam's cluster of falls in Tenkasi district",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Courtallam Falls Guide: Best Time & How to Reach",
    description:
      "The 'Spa of South India' — a cluster of waterfalls with a devoted bathing season and a temple town wrapped around them.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/courtallam-travel-guide",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Courtallam Falls Guide: Best Time & How to Reach",
          description:
            "Complete Courtallam guide — the Main Falls, Five Falls, Old Falls and Tiger Falls, the Aavani bathing season, Kutralanathar Temple, how to reach Tenkasi district, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/courtallam-travel-guide",
          },
          keywords:
            "Courtallam, Kutralam, Tamil Nadu, waterfalls, Aavani season, Tenkasi",
          about: {
            "@type": "Place",
            name: "Courtallam",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://club.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://club.kudozz.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Courtallam",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "What is the best time to visit Courtallam for bathing at the falls?",
    a: "The Aavani season, roughly mid-August to mid-September in the Tamil calendar, is the traditional peak — flow is strong and the town is at its liveliest, though also its most crowded. September through December more broadly is also good, with decent flow and thinner crowds outside the Aavani weeks.",
  },
  {
    q: "What makes Courtallam's water special?",
    a: "Courtallam is popularly known as the 'Spa of South India' because locals and long-time visitors consider the falls' water to have mineral-rich, health-beneficial properties — this is a folk and traditional belief rather than a clinically established fact, but it's central to why people travel here specifically to bathe rather than just to view the falls.",
  },
  {
    q: "How far is Courtallam from Madurai and Tenkasi?",
    a: "Courtallam is close to Tenkasi town, just a short drive away, and roughly 100 km from Madurai — a comfortable half-day drive, making it easy to combine with a wider southern Tamil Nadu trip.",
  },
  {
    q: "Is Courtallam very crowded during the Aavani season?",
    a: "Yes — this is when crowds peak, with visitors arriving specifically for the traditional bathing season. If you'd prefer a quieter visit with still-decent water flow, aim for just before or after the Aavani weeks, roughly September through November.",
  },
  {
    q: "Which falls are best for families versus more adventurous bathers?",
    a: "The Main Falls (Chitraruvi) and Old Falls tend to have more developed, managed bathing areas suited to families, while Tiger Falls and some of the smaller falls involve rougher terrain and stronger currents better suited to more confident swimmers.",
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
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "The Spa of South India", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Courtallam", level: 2 },
  { id: "things-to-do", title: "The Falls & Kutralanathar Temple", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CourtallamGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="A forested waterfall cascading over rocks, evoking Courtallam's cluster of falls in Tenkasi district"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10"
            aria-label="Breadcrumb"
          >
            <ol
              className="flex items-center gap-2 text-xs text-white/55"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Courtallam", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Courtallam",
                "Kutralam Falls",
                "Tenkasi",
                "Aavani Season",
                "Off-beat",
              ].map((tag) => (
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
              Courtallam: Waterfalls & the Aavani Bathing Season
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Known across South India as the "Spa of South India" — a
              cluster of waterfalls where locals and visitors alike come to
              bathe in water believed to carry genuine curative properties.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Tenkasi district, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
                },
              ].map((m) => (
                <span
                  key={m.text}
                  className="flex items-center gap-1.5 text-sm text-white/55"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Three-Column Layout ───────────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            {/* LEFT — TOC */}
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* CENTER — Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>The Spa of South India</h2>
                  <p>
                    <strong>Courtallam</strong> (also spelled Kutralam), in
                    Tenkasi district, is known across South India as the{" "}
                    <strong>"Spa of South India"</strong> — a title it earns
                    from a cluster of waterfalls whose waters are widely
                    believed by locals to carry genuine mineral-rich,
                    health-beneficial properties. This mix of scenic beauty
                    and folk-medicinal tradition sets Courtallam apart from a
                    typical waterfall destination — people come here to
                    bathe, not just to look.
                  </p>
                  <p>
                    The town isn't built around a single waterfall but a
                    cluster of them, each with a different character: the{" "}
                    <strong>Main Falls</strong> (Chitraruvi), the{" "}
                    <strong>Five Falls</strong>, the{" "}
                    <strong>Old Falls</strong>, <strong>Tiger Falls</strong>,
                    and <strong>Honey Falls</strong> among them.
                  </p>
                  <p>
                    Presiding over the town is the{" "}
                    <strong>Kutralanathar Temple</strong>, a Shiva temple
                    that anchors Courtallam's identity as a pilgrimage town
                    as much as a waterfall destination.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>💧</span> Courtallam at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Tenkasi district, Tamil Nadu",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Town",
                          value: "Tenkasi (few km)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Mid-Aug – Dec",
                        },
                        {
                          icon: "💦",
                          label: "Known For",
                          value: "Curative Bathing Falls",
                        },
                        {
                          icon: "🎉",
                          label: "Peak Season",
                          value: "Aavani (Aug-Sep)",
                        },
                        {
                          icon: "🛕",
                          label: "Also Visit",
                          value: "Kutralanathar Temple",
                        },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Courtallam</h2>
                  <p>
                    Timing here matters more than at most waterfall
                    destinations, since Courtallam has a genuine traditional
                    "season" tied to its bathing culture.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mid-Aug – Mid-Sep",
                        emoji: "🎉",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Aavani season — the traditional peak",
                        text: "The Tamil month of Aavani is Courtallam's defining season, when flow is at its fullest and the town is at its liveliest for traditional bathing. Expect the biggest crowds of the year.",
                      },
                      {
                        season: "Sep – Dec",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Good flow, thinner crowds",
                        text: "Just after the Aavani rush, the falls still run well and the town is noticeably calmer — a good compromise for many visitors.",
                      },
                      {
                        season: "Jan – May",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Reduced flow",
                        text: "Flow thins out through the dry months — still worth a visit for the temple and town, but the bathing experience is less dramatic.",
                      },
                      {
                        season: "Jun – Aug",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Building up to Aavani",
                        text: "Monsoon rains start filling the falls again ahead of the Aavani season, with flow strengthening through this window.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
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
                        <p className="text-sm text-stone-600 leading-relaxed m-0">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> If you want the full
                    traditional Aavani experience, mid-August to
                    mid-September; if you'd rather skip the crowds, aim for
                    late September through November instead.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Courtallam</h2>
                  <ul>
                    <li>
                      <strong>Via Tenkasi:</strong> Courtallam sits just a
                      short drive from Tenkasi town, the practical gateway
                      with the nearest significant rail and bus connections.
                    </li>
                    <li>
                      <strong>By road from Madurai:</strong> Roughly 100 km,
                      a comfortable half-day drive.
                    </li>
                    <li>
                      <strong>By road from Tirunelveli:</strong> A shorter
                      drive of around 55-60 km, another common approach
                      route from the south.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If visiting during the
                    Aavani season, book accommodation well in advance —
                    rooms in and around Courtallam fill up quickly during
                    these peak weeks.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Falls & Kutralanathar Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Waterfall cascading through forest near Courtallam"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Main Falls (Chitraruvi)</h3>
                  <p>
                    The most visited and most developed of the falls, with a
                    managed bathing area suited to families and casual
                    visitors — usually the first stop for most travellers.
                  </p>
                  <h3>Five Falls & Old Falls</h3>
                  <p>
                    A cluster of smaller cascades a short distance from the
                    Main Falls, along with the Old Falls — one of the
                    original bathing spots in the area, with its own loyal
                    following among regular visitors.
                  </p>
                  <h3>Tiger Falls & Honey Falls</h3>
                  <p>
                    These involve rougher terrain and stronger currents,
                    better suited to more confident swimmers and adventurous
                    visitors rather than families with small children.
                  </p>
                  <h3>Kutralanathar Temple</h3>
                  <p>
                    A significant Shiva temple in the town itself, worth
                    visiting alongside the falls for a fuller sense of why
                    Courtallam has been a pilgrimage destination for
                    generations, not just a scenic one.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Courtallam</h2>
                  <p>
                    Accommodation ranges from simple lodges geared toward
                    Aavani-season pilgrims to a few more comfortable resort
                    options.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Pilgrim lodges near the falls",
                          "Basic guesthouses in town",
                          "Government tourist accommodation",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Standard hotels in Tenkasi",
                          "Family-run resorts near the falls",
                          "Comfortable town hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌊",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Resort properties with pools",
                          "Premium hotels in Tenkasi/Tirunelveli",
                          "Full-board waterfall-view stays",
                        ],
                      },
                    ].map((t) => (
                      <div
                        key={t.tier}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div
                          className="font-bold text-stone-900 mb-1"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
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
                            <li
                              key={p}
                              className="text-xs text-stone-600"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Main Falls & Temple",
                        color: "bg-amber-700",
                        activities: [
                          "Morning bathe at the Main Falls (Chitraruvi)",
                          "Visit Kutralanathar Temple",
                          "Evening walk around the town",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "The Other Falls",
                        color: "bg-sky-600",
                        activities: [
                          "Visit the Five Falls and Old Falls",
                          "Tiger Falls or Honey Falls, if adventurous",
                          "Depart toward Tenkasi or onward destination",
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
                          <h4
                            className="font-bold text-stone-900 mb-3"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                                  ✓
                                </span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * See our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for combining Courtallam with a wider southern Tamil
                    Nadu circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Courtallam</h2>
                  <ul>
                    <li>
                      <strong>Local Tamil eateries:</strong> Simple
                      vegetarian "meals" restaurants around the falls and
                      town centre are the mainstay for most visitors.
                    </li>
                    <li>
                      <strong>Roadside stalls near the falls:</strong> Snacks
                      and tea, convenient between bathing sessions at
                      different falls.
                    </li>
                    <li>
                      <strong>Tenkasi town:</strong> A wider range of
                      restaurants if you're staying there and travelling in
                      for the day.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map(
                            (h) => (
                              <th
                                key={h}
                                className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                              >
                                {h}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹6,500"],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
                          ["Falls entry (per falls)", "₹20", "₹20", "₹20"],
                        ].map(([exp, b, m, l], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {b}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {m}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {l}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Figures are per person, per day. Aavani-season prices
                    for accommodation can run noticeably higher than shown
                    here.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Courtallam</h2>
                  <ul>
                    <li>
                      <strong>Plan around the Aavani season deliberately:</strong>{" "}
                      Decide whether you want the full festival crowd
                      experience or a quieter visit, and time your trip
                      accordingly.
                    </li>
                    <li>
                      <strong>Wear grippy footwear:</strong> The rocks
                      around the bathing areas get slippery, especially at
                      the more developed falls.
                    </li>
                    <li>
                      <strong>Be cautious of currents:</strong> The main
                      bathing falls can have a stronger pull than they look
                      — stay within the marked or shallower areas if
                      unsure.
                    </li>
                    <li>
                      <strong>Book ahead in season:</strong> Accommodation
                      fills up fast during Aavani weeks.
                    </li>
                    <li>
                      <strong>Carry a change of clothes:</strong> You will
                      get wet — plan for it rather than being caught out.
                    </li>
                  </ul>

                  {/* Do & Don't */}
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
                          "Time your visit around the Aavani season deliberately",
                          "Wear grippy sandals for the wet rocks",
                          "Visit Kutralanathar Temple alongside the falls",
                          "Book accommodation ahead if visiting in season",
                          "Try the falls best suited to your comfort level",
                          "Carry a change of dry clothes",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">
                              →
                            </span>
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
                          "Underestimate the currents at the main falls",
                          "Arrive during Aavani without a booking",
                          "Attempt Tiger Falls if you're not a confident swimmer",
                          "Leave valuables unattended near the bathing areas",
                          "Expect quiet crowds during peak Aavani weeks",
                          "Skip footwear made for wet, slippery rock",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Courtallam pairs
                    well with a wider Tenkasi-Tirunelveli circuit. See our
                    full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for the region.
                  </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div
                        key={f.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
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

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Courtallam",
                  "Kutralam Falls",
                  "Tamil Nadu",
                  "Waterfall",
                  "Tenkasi",
                  "Aavani Season",
                  "Off-beat",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="courtallam-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="courtallam-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
