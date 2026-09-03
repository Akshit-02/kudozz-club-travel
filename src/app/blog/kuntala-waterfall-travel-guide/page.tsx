// src/app/blog/kuntala-waterfall-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kuntala Waterfall Guide: Telangana's Tallest Falls",
  description:
    "Complete Kuntala Waterfall guide — Telangana's tallest waterfall in remote Adilabad district, best time to visit, how to reach from Hyderabad, and how to combine it with Kawal Tiger Reserve.",
  keywords:
    "Kuntala Waterfall, Adilabad district waterfall, Telangana tallest waterfall, Kadam river falls, how to reach Kuntala Waterfall, Nirmal Telangana, Kawal Tiger Reserve, best time Kuntala Waterfall",
  openGraph: {
    title: "Kuntala Waterfall Guide: Telangana's Tallest Falls",
    description:
      "Telangana's tallest waterfall, dropping roughly 45 metres through remote Adilabad-district forest — genuinely off the beaten path.",
    url: "https://club.kudozz.in/blog/kuntala-waterfall-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hills and greenery, evoking the remote Adilabad-district setting of Kuntala Waterfall",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuntala Waterfall Guide: Telangana's Tallest Falls",
    description:
      "Telangana's tallest waterfall, dropping roughly 45 metres through remote Adilabad-district forest.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kuntala-waterfall-travel-guide",
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
          headline: "Kuntala Waterfall Guide: Telangana's Tallest Falls",
          description:
            "Complete Kuntala Waterfall guide — Telangana's tallest waterfall in remote Adilabad district, best time to visit, how to reach from Hyderabad, and how to combine it with Kawal Tiger Reserve.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kuntala-waterfall-travel-guide",
          },
          keywords:
            "Kuntala Waterfall, Adilabad district, Kadam river, Telangana tallest waterfall, off-beat",
          about: {
            "@type": "Place",
            name: "Kuntala Waterfall",
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
                name: "Kuntala Waterfall",
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
    q: "How tall is Kuntala Waterfall?",
    a: "Kuntala Waterfall drops roughly 45 metres (about 147 ft), formed by the Kadam river in Adilabad district — it's generally cited as Telangana's tallest waterfall.",
  },
  {
    q: "How far is Kuntala Waterfall from Hyderabad?",
    a: "Roughly 300 km, a genuinely long drive that makes this one of Telangana's more far-flung, offbeat waterfall destinations compared to the more accessible Mulugu-district falls closer to Warangal.",
  },
  {
    q: "What is the best time to visit Kuntala Waterfall?",
    a: "Roughly July through December, during and after the monsoon, when the Kadam river is running with enough volume to make the falls worth the long drive. Flow weakens considerably by peak summer.",
  },
  {
    q: "Is the walk to the base of Kuntala Waterfall difficult?",
    a: "There's a set of steps and paths down toward the base from the main viewpoint — manageable for most fitness levels, but the return climb and wet, uneven surfaces near the water call for proper footwear and a reasonable pace.",
  },
  {
    q: "Can Kuntala Waterfall be combined with Kawal Tiger Reserve?",
    a: "Yes — both sit within the broader Adilabad district, so a 2-day trip covering the waterfall and a Kawal Tiger Reserve safari is a practical way to justify the long drive from Hyderabad.",
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
  { id: "introduction", title: "Telangana's Tallest Waterfall", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kuntala Waterfall", level: 2 },
  { id: "things-to-do", title: "The Waterfall & the Walk Down", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KuntalaWaterfallGuidePage() {
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
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Forested hills and greenery, evoking the remote Adilabad-district setting of Kuntala Waterfall"
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
                { label: "Kuntala Waterfall", href: null },
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
                "Kuntala Waterfall",
                "Adilabad District",
                "Waterfall",
                "Off-beat",
                "Kadam River",
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
              Kuntala Waterfall: Telangana's Tallest Falls
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 45-metre drop through remote Adilabad-district forest — the
              state's tallest waterfall, and one of its most genuinely
              far-flung destinations.
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
                  text: "Adilabad district, Telangana",
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
                  <h2>Telangana's Tallest Waterfall</h2>
                  <p>
                    <strong>Kuntala Waterfall</strong>, in Neredigonda
                    mandal, Adilabad district, is formed by the{" "}
                    <strong>Kadam river</strong> dropping roughly 45 metres
                    (~147 ft) — generally regarded as Telangana's tallest
                    waterfall. At roughly 300 km from Hyderabad, it sits much
                    farther out than the more accessible Mulugu-district
                    falls closer to Warangal, which gives Kuntala a genuinely
                    remote, quiet character that's part of its appeal.
                  </p>
                  <p>
                    Like most of the state's waterfalls, Kuntala is fed
                    largely by monsoon rainfall and runs strongest from
                    roughly July through December — plan around this window
                    if seeing real volume matters to you, since flow tapers
                    considerably by peak summer.
                  </p>
                  <p>
                    Surrounded by forest, with a viewpoint above and a path
                    of steps leading down toward the base, Kuntala rewards
                    travelers who treat it as a proper day-or-two trip rather
                    than a quick detour — the distance from Hyderabad makes
                    it worth combining with{" "}
                    <Link href="/blog/kawal-tiger-reserve-travel-guide">
                      Kawal Tiger Reserve
                    </Link>{" "}
                    elsewhere in Adilabad district.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>💧</span> Kuntala Waterfall at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Adilabad district, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~300 km",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Jul – Dec",
                        },
                        {
                          icon: "📏",
                          label: "Height",
                          value: "~45 m (147 ft)",
                        },
                        {
                          icon: "🌲",
                          label: "Setting",
                          value: "Remote forest, Kadam river",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Kawal Tiger Reserve",
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
                  <h2>Best Time to Visit Kuntala Waterfall</h2>
                  <p>
                    Given how monsoon-dependent the Kadam river's flow is,
                    the season you choose has a big effect on what you'll
                    actually see.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Jul – Dec",
                        emoji: "🌊",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The falls run at their strongest during and well after the monsoon, given how far this window extends compared to the state's other waterfalls.",
                      },
                      {
                        season: "Jan – Mar",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Tapering, still worth seeing",
                        text: "Flow reduces gradually but Kuntala usually still has a reasonable presence into early winter.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Weak — avoid if the falls are the priority",
                        text: "Peak summer heat and the long dry spell typically leave the falls at their weakest before the next monsoon.",
                      },
                      {
                        season: "Aug – Sep",
                        emoji: "📸",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak flow",
                        text: "The most dramatic window for the falls, though approach paths can be muddier and the drive slower in heavy rain.",
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
                    <strong>Our pick:</strong> July to December — the widest
                    reliable window for real volume, given the long drive
                    it takes to get here.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kuntala Waterfall</h2>
                  <p>
                    This is one of Telangana's more remote attractions —
                    plan for a long drive and treat it as an overnight trip
                    rather than a rushed single day.
                  </p>
                  <ul>
                    <li>
                      <strong>From Hyderabad:</strong> Roughly 300 km, a
                      5-6 hour drive — genuinely long, and far more
                      comfortable split across two days with an overnight in
                      Nirmal or Adilabad town.
                    </li>
                    <li>
                      <strong>Via Nirmal:</strong> Nirmal town makes a
                      sensible waypoint and possible overnight base, cutting
                      down the final stretch to the falls.
                    </li>
                    <li>
                      <strong>By rail:</strong> Nirmal and Adilabad both have
                      railway stations with reasonable connectivity — onward
                      travel to the falls is by road only.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the distance, combine
                    Kuntala with a Kawal Tiger Reserve safari elsewhere in
                    Adilabad district to make the long drive worthwhile.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Waterfall & the Walk Down</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Forested landscape evoking the remote setting of Kuntala Waterfall"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Main Viewpoint</h3>
                  <p>
                    A viewpoint above the falls gives a first, wide look at
                    the drop — a good stop even for visitors who don't want
                    to make the descent to the base.
                  </p>
                  <h3>The Descent to the Base</h3>
                  <p>
                    A set of steps and paths leads down from the viewpoint
                    toward the base of the falls, where the scale of the
                    45-metre drop is far more apparent. It's a manageable
                    walk for most fitness levels, but the return climb and
                    wet rock near the pool call for a steady pace and proper
                    footwear.
                  </p>
                  <h3>The Remote Forest Setting</h3>
                  <p>
                    Kuntala's surrounding forest is thick and largely
                    undeveloped — part of what makes the site feel quiet and
                    far from the more crowded tourist circuits elsewhere in
                    Telangana.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Kuntala Waterfall</h2>
                  <p>
                    Accommodation right at the falls is essentially
                    non-existent — Adilabad or Nirmal town are the realistic
                    overnight bases.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,400/night",
                        picks: [
                          "Budget lodges, Adilabad town",
                          "Basic guesthouses, Nirmal",
                          "Simple stays near the highway",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,600–₹3,200/night",
                        picks: [
                          "Business hotels, Adilabad",
                          "Nirmal town hotel chains",
                          "Highway hotels near NH44",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹3,500–₹6,000+/night",
                        picks: [
                          "Best-available hotels, Adilabad",
                          "Premium stays en route from Hyderabad",
                          "Serviced rooms, Nirmal",
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
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Hyderabad to Adilabad District",
                        color: "bg-amber-700",
                        activities: [
                          "Long drive from Hyderabad via Nirmal",
                          "Check in at Adilabad or Nirmal",
                          "Rest and prepare for an early start",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Kuntala Waterfall & Kawal",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning at Kuntala Waterfall",
                          "Walk down to the base, photography",
                          "Optional afternoon safari at Kawal Tiger Reserve",
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
                    <Link href="/blog/kawal-tiger-reserve-travel-guide">
                      Kawal Tiger Reserve guide
                    </Link>{" "}
                    to plan the safari half of this trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Kuntala Waterfall</h2>
                  <ul>
                    <li>
                      <strong>Local stalls near the falls:</strong> Basic tea
                      and snack options when available — don't count on a
                      proper meal being available on-site.
                    </li>
                    <li>
                      <strong>Adilabad or Nirmal town:</strong> The realistic
                      places for a proper sit-down meal — plan your main
                      meals around these stops.
                    </li>
                    <li>
                      <strong>Carry food and water:</strong> Essential given
                      how remote the setting is and how limited the
                      standalone food scene is right at the falls.
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
                          ["Accommodation/night", "₹800", "₹2,200", "₹4,800"],
                          ["Car hire from Hyderabad (round trip)", "₹5,500", "₹8,000", "₹11,000"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Entry/parking fee", "₹30", "₹30", "₹30"],
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
                    * Figures are per person, per day (except car hire, a
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kuntala Waterfall</h2>
                  <ul>
                    <li>
                      <strong>Check the season before the long drive:</strong>{" "}
                      Confirm recent rainfall — the trip isn't worth it if
                      the falls are running weak.
                    </li>
                    <li>
                      <strong>Plan for an overnight trip:</strong> The
                      distance from Hyderabad makes a rushed single day
                      genuinely tiring.
                    </li>
                    <li>
                      <strong>Wear proper footwear for the descent:</strong>{" "}
                      Steps and rock near the base can be uneven and
                      slippery.
                    </li>
                    <li>
                      <strong>Combine with Kawal Tiger Reserve:</strong> Both
                      sit in Adilabad district, making a shared trip far more
                      efficient than two separate ones.
                    </li>
                    <li>
                      <strong>Carry cash and supplies:</strong> ATM access
                      and food options thin out considerably this far from
                      Hyderabad.
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
                          "Confirm the season/recent rainfall before setting off",
                          "Plan an overnight stop given the distance",
                          "Wear grippy footwear for the descent",
                          "Combine with a Kawal Tiger Reserve safari",
                          "Carry sufficient cash and supplies",
                          "Start the drive early to arrive in daylight",
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
                          "Attempt this as a rushed single-day round trip",
                          "Visit in peak summer expecting strong flow",
                          "Rely on food or ATM access near the falls",
                          "Descend to the base in worn or slick footwear",
                          "Skip pairing it with Kawal Tiger Reserve",
                          "Underestimate the 300 km drive from Hyderabad",
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
                    <strong>🗺️ Extend the trip:</strong> Kuntala pairs
                    naturally with{" "}
                    <Link href="/blog/kawal-tiger-reserve-travel-guide">
                      Kawal Tiger Reserve
                    </Link>{" "}
                    elsewhere in Adilabad district for a fuller two-day trip.
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
                  "Kuntala Waterfall",
                  "Adilabad District",
                  "Telangana",
                  "Waterfall",
                  "Off-beat",
                  "Kadam River",
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

              <RelatedPostsGrid currentSlug="kuntala-waterfall-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kuntala-waterfall-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
