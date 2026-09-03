// src/app/blog/charminar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Charminar Guide: History, Timings & Tips",
  description:
    "Complete Charminar guide — history, architecture, the Laad Bazaar and Mecca Masjid nearby, best time to visit, how to reach, and a full visit plan for Hyderabad's iconic monument.",
  keywords:
    "Charminar travel guide, Charminar history, Charminar timings, Laad Bazaar, Mecca Masjid, Hyderabad Old City, Charminar entry fee, how to reach Charminar, Qutb Shahi monument",
  openGraph: {
    title: "Charminar Guide: History, Timings & Tips",
    description:
      "Four grand arches, four minarets, and a bangle bazaar that hasn't stopped since the 16th century — the complete Charminar guide.",
    url: "https://club.kudozz.in/blog/charminar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Iconic historic monument glowing at dusk, evoking Hyderabad's Charminar",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Charminar Guide: History, Timings & Tips",
    description:
      "Four grand arches, four minarets, and a bangle bazaar unchanged since the 16th century — the complete Charminar guide.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/charminar-travel-guide",
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
          headline: "Charminar Guide: History, Timings & Tips",
          description:
            "Complete Charminar guide — history, architecture, the Laad Bazaar and Mecca Masjid nearby, best time to visit, how to reach, and a full visit plan for Hyderabad's iconic monument.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/charminar-travel-guide",
          },
          keywords:
            "Charminar, Hyderabad, Telangana, Laad Bazaar, Mecca Masjid, Qutb Shahi heritage",
          about: {
            "@type": "Place",
            name: "Charminar",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog/telangana-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Charminar",
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
    q: "Can you go inside or climb Charminar?",
    a: "Ground-floor access is generally open to visitors, but access to the upper floors and minarets is sometimes restricted for public safety — confirm current access on arrival rather than assuming you can climb to the top.",
  },
  {
    q: "What is the best time to visit Charminar?",
    a: "Early morning offers the fewest crowds and softest light for photos, while evening brings the monument's illumination — both are better than the busy, hot midday hours.",
  },
  {
    q: "Is there an entry fee for Charminar?",
    a: "There is a modest entry fee for the monument itself, with a separate small fee for cameras — inexpensive either way and well worth it for the views and history.",
  },
  {
    q: "How long should I spend at Charminar?",
    a: "An hour or two covers the monument and a walk through Laad Bazaar comfortably; add more time if you want to browse the bazaar properly or visit the nearby Mecca Masjid.",
  },
  {
    q: "Is Laad Bazaar worth visiting?",
    a: "Yes — it's Hyderabad's historic bangle and pearl market, directly beside Charminar, and one of the best places in the city to see Old City commerce that has continued largely unchanged for generations.",
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
  { id: "introduction", title: "Hyderabad's Defining Monument", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Charminar", level: 2 },
  { id: "things-to-do", title: "Architecture, Bazaar & Mosque", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CharminarGuidePage() {
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
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Iconic historic monument glowing at dusk, evoking Hyderabad's Charminar"
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
                { label: "Telangana", href: "/blog/telangana-travel-guide" },
                { label: "Charminar", href: null },
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
                "Charminar",
                "Hyderabad",
                "Telangana",
                "Heritage",
                "Laad Bazaar",
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
              Charminar: History, Timings & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Four grand arches, four soaring minarets, and a bangle bazaar
              that has traded beneath them since the 16th century — the
              monument that gave Hyderabad its skyline.
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
                  text: "Old City, Hyderabad",
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
                  <h2>Hyderabad's Defining Monument</h2>
                  <p>
                    Built in 1591 by <strong>Muhammad Quli Qutb Shah</strong>,{" "}
                    <strong>Charminar</strong> is traditionally said to
                    commemorate the end of a plague epidemic in the city —
                    and, by extension, to mark the founding of{" "}
                    <Link href="/blog/hyderabad-travel-guide">Hyderabad</Link>{" "}
                    itself. Its name comes straight from its form: "char"
                    (four) "minar" (minarets), rising from a granite and
                    limestone structure of four grand arches.
                  </p>
                  <p>
                    A mosque occupies the upper floor, making Charminar one
                    of the oldest still-functioning mosques of its kind in
                    the country in that sense. It sits at the absolute heart
                    of Hyderabad's Old City, encircled by{" "}
                    <strong>Laad Bazaar</strong>, the historic bangle and
                    pearl market, and a short walk from the{" "}
                    <strong>Mecca Masjid</strong>, one of India's oldest and
                    largest mosques.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Charminar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Old City, Hyderabad",
                        },
                        { icon: "📅", label: "Built", value: "1591 CE" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏛️",
                          label: "Style",
                          value: "Qutb Shahi",
                        },
                        {
                          icon: "🛍️",
                          label: "Nearby",
                          value: "Laad Bazaar, Mecca Masjid",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "1–2 hours",
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
                  <h2>Best Time to Visit Charminar</h2>
                  <p>
                    Hyderabad's heat and the monument's crowd patterns both
                    shape when a visit is at its most enjoyable.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Fewest crowds, softest light, and cooler air — the best window for photographs and an unhurried walk through the surrounding lanes.",
                      },
                      {
                        season: "Evening",
                        emoji: "🌆",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Illuminated monument",
                        text: "Charminar is lit up after dark, drawing crowds for the view — busier, but atmospheric, and a good time for Laad Bazaar shopping.",
                      },
                      {
                        season: "Midday",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and crowded — avoid if possible",
                        text: "The busiest and hottest window, especially March–June, when the surrounding bazaar lanes get genuinely uncomfortable.",
                      },
                      {
                        season: "Oct – Feb",
                        emoji: "🍃",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best season overall",
                        text: "Cooler citywide temperatures make any time of day at Charminar more pleasant during these months.",
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
                    <strong>Our pick:</strong> an early-morning visit for
                    photos and a quieter bazaar walk, then return at dusk to
                    see the monument illuminated.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Charminar</h2>
                  <p>
                    Charminar sits at the centre of Hyderabad's Old City,
                    making it easy to reach from almost anywhere in the
                    metro.
                  </p>
                  <ul>
                    <li>
                      <strong>From central Hyderabad:</strong> A short auto
                      or cab ride from Abids, Nampally, or the Banjara
                      Hills/Jubilee Hills hotel belt.
                    </li>
                    <li>
                      <strong>On foot:</strong> If staying in the Old City
                      itself, Charminar, Laad Bazaar, and Mecca Masjid are
                      all walkable from one another.
                    </li>
                    <li>
                      <strong>Combine with Golconda Fort:</strong> Both sights
                      are easily covered in a single day, with Charminar in
                      the morning and Golconda's sound-and-light show in the
                      evening.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Old City traffic and parking
                    can be difficult — an auto-rickshaw or ride-hailing app is
                    usually more practical than self-driving here.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Architecture, Bazaar & Mosque</h2>
                  <h3>The Monument</h3>
                  <p>
                    Charminar's four arches face the four cardinal
                    directions, with four minarets rising roughly 56 metres,
                    each with a spiral staircase. Access to the upper floors
                    and minarets is sometimes restricted for public safety —
                    confirm on arrival rather than assuming you can climb to
                    the top. The upper-floor mosque remains a working place
                    of worship.
                  </p>
                  <h3>Laad Bazaar</h3>
                  <p>
                    Directly beside Charminar, this narrow, colourful market
                    has traded bangles, pearls, and jewellery for
                    generations — a genuinely atmospheric walk even if you
                    aren't buying, and one of the best places in the city to
                    see Old City commerce up close.
                  </p>
                  <h3>Mecca Masjid</h3>
                  <p>
                    A short walk from Charminar, this is one of India's
                    oldest and largest mosques, built with bricks reportedly
                    made from soil brought from Mecca — worth combining with
                    a Charminar visit given the proximity.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Charminar</h2>
                  <p>
                    Most visitors stay elsewhere in Hyderabad and visit
                    Charminar as part of a wider city trip — see our full{" "}
                    <Link href="/blog/hyderabad-travel-guide">
                      Hyderabad travel guide
                    </Link>{" "}
                    for accommodation across the city, from Old City
                    guesthouses to Banjara Hills business hotels and
                    Falaknuma Palace at the luxury end.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Charminar & Bazaar",
                        color: "bg-amber-700",
                        activities: [
                          "Charminar monument, early for fewer crowds",
                          "Walk through Laad Bazaar",
                          "Mecca Masjid nearby",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Old City Food & Rest",
                        color: "bg-sky-600",
                        activities: [
                          "Old City street food and Irani chai",
                          "Break during the midday heat",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Golconda Fort",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to Golconda Fort",
                          "Sound-and-light show at dusk",
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
                    * Pairs naturally with{" "}
                    <Link href="/blog/golconda-fort-travel-guide">
                      Golconda Fort
                    </Link>{" "}
                    for a full Old City heritage day.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat Near Charminar</h2>
                  <ul>
                    <li>
                      <strong>Old-city Irani cafes:</strong> Strong Irani
                      chai and Osmania biscuits at cafes within walking
                      distance of the monument.
                    </li>
                    <li>
                      <strong>Street-side kebabs and biryani:</strong> The
                      lanes around Charminar have a dense concentration of
                      small biryani and kebab houses worth grazing through.
                    </li>
                    <li>
                      <strong>Sweet shops:</strong> The Old City has several
                      long-running sweet shops good for a quick post-bazaar
                      treat.
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
                          ["Entry fee", "₹25", "₹25", "₹25"],
                          ["Camera fee", "₹25", "₹25", "₹25"],
                          ["Auto/cab to Old City (one-way)", "₹80", "₹150", "₹300"],
                          ["Street food snack", "₹100", "₹250", "₹500"],
                          ["Laad Bazaar shopping", "Varies", "Varies", "Varies"],
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
                    * Figures are per person; Laad Bazaar shopping costs vary
                    widely by what you buy.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Charminar</h2>
                  <ul>
                    <li>
                      <strong>Confirm minaret access on arrival:</strong>{" "}
                      Upper-floor and minaret access is sometimes restricted
                      for safety reasons — don't plan the visit assuming
                      you'll be able to climb to the top.
                    </li>
                    <li>
                      <strong>Bargain at Laad Bazaar:</strong> Prices are
                      rarely fixed — a bit of friendly negotiation is
                      expected.
                    </li>
                    <li>
                      <strong>Watch your belongings:</strong> The bazaar gets
                      genuinely crowded, especially in the evening — keep
                      valuables secure.
                    </li>
                    <li>
                      <strong>Dress modestly near the mosque:</strong>{" "}
                      Charminar's upper floor and Mecca Masjid nearby both
                      expect modest clothing.
                    </li>
                    <li>
                      <strong>Combine with Golconda Fort:</strong> The two
                      sights pair naturally into a single Old City heritage
                      day.
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
                          "Visit early morning for fewer crowds and better light",
                          "Walk through Laad Bazaar for the full experience",
                          "Dress modestly near the mosque",
                          "Combine with Golconda Fort the same day",
                          "Bargain politely at bazaar stalls",
                          "Return at dusk to see the illumination",
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
                          "Assume you can always climb the minarets",
                          "Visit at peak midday heat if avoidable",
                          "Carry excess valuables into the crowded bazaar",
                          "Skip modest dress near the mosque",
                          "Rush the visit — allow time for the bazaar too",
                          "Drive yourself into the Old City if you can avoid it",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Charminar with{" "}
                    <Link href="/blog/golconda-fort-travel-guide">
                      Golconda Fort
                    </Link>{" "}
                    for a full Old City day, or see our complete{" "}
                    <Link href="/blog/hyderabad-travel-guide">
                      Hyderabad travel guide
                    </Link>{" "}
                    for the wider city.
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
                  "Charminar",
                  "Hyderabad",
                  "Telangana",
                  "Heritage",
                  "Laad Bazaar",
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

              <RelatedPostsGrid currentSlug="charminar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="charminar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
