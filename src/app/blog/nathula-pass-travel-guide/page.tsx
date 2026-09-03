// src/app/blog/nathula-pass-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nathula Pass Guide: Permits, Height & Tips",
  description:
    "Complete Nathula Pass guide — permits, the Old Silk Route, the Indo-China border post, Baba Mandir, best time to visit, and how to plan the day trip from Gangtok.",
  keywords:
    "Nathula Pass travel guide, Nathula permit, Old Silk Route Sikkim, Indo-China border Sikkim, Baba Mandir, Nathula height, how to reach Nathula Pass, Nathula closed days",
  openGraph: {
    title: "Nathula Pass Guide: Permits, Height & Tips",
    description:
      "An active Indo-China border post on the historic Old Silk Route, at 4,310 metres — the complete Nathula Pass guide.",
    url: "https://club.kudozz.in/blog/nathula-pass-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude mountain pass landscape, evoking Nathula Pass on the Sikkim-Tibet border",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathula Pass Guide: Permits, Height & Tips",
    description:
      "An active Indo-China border post on the historic Old Silk Route, at 4,310 metres — the complete Nathula Pass guide.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nathula-pass-travel-guide",
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
          headline: "Nathula Pass Guide: Permits, Height & Tips",
          description:
            "Complete Nathula Pass guide — permits, the Old Silk Route, the Indo-China border post, Baba Mandir, best time to visit, and how to plan the day trip from Gangtok.",
          image: "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
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
            "@id": "https://club.kudozz.in/blog/nathula-pass-travel-guide",
          },
          keywords: "Nathula Pass, Sikkim, Old Silk Route, Indo-China border",
          about: {
            "@type": "Place",
            name: "Nathula Pass",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Sikkim",
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
                name: "Sikkim",
                item: "https://club.kudozz.in/blog/sikkim-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Nathula Pass",
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
    q: "How far is Nathula Pass from Gangtok?",
    a: "Roughly 54 km, generally visited as a day trip and usually combined with Tsomgo Lake, which sits along the same route about 40 km from Gangtok.",
  },
  {
    q: "Do I need a permit to visit Nathula Pass?",
    a: "Yes, a Protected Area Permit is mandatory, arranged through a registered travel agent in Gangtok. You'll need original photo ID, and the permit is usually bundled with a vehicle and driver.",
  },
  {
    q: "Is Nathula Pass open every day?",
    a: "No — it's typically closed on Mondays and Tuesdays, and can also close on short notice for bad weather or snow. Build flexibility into your Sikkim itinerary rather than treating a Nathula visit as guaranteed on a fixed date.",
  },
  {
    q: "Can foreign nationals visit Nathula Pass?",
    a: "Foreign nationals typically face additional restrictions or may not be permitted at all, given its status as an active border post. Check current rules with a Gangtok travel agent well before your trip if this applies to you.",
  },
  {
    q: "What is the best time to visit Nathula Pass?",
    a: "April to June and October to November give the best odds of clear roads and views. Winter months often see closures due to snow at this altitude.",
  },
  {
    q: "How high is Nathula Pass?",
    a: "About 4,310 metres (~14,140 ft), high enough that visitors should be prepared for the effects of thin air and extreme cold, even on a short visit.",
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
  { id: "introduction", title: "A Border Post on the Old Silk Route", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach & Permits", level: 2 },
  { id: "things-to-do", title: "The Border Post & Baba Mandir", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NathulaPassGuidePage() {
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
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="High-altitude mountain pass landscape, evoking Nathula Pass on the Sikkim-Tibet border"
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
                { label: "Sikkim", href: "/blog/sikkim-travel-guide" },
                { label: "Nathula Pass", href: null },
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
              {["Nathula Pass", "Sikkim", "Indo-China Border", "Old Silk Route"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nathula Pass: Permits, Height & the Old Silk Route
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              An active Indo-China border trade post at 4,310 metres, on the
              historic route that once carried caravans between India and
              Tibet.
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
                  text: "East Sikkim, near Gangtok",
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
                  <h2>A Border Post on the Old Silk Route</h2>
                  <p>
                    <strong>Nathula Pass</strong>, roughly 54 km from{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>,
                    sits at about 4,310 m on the historic Old Silk Route
                    that once carried trade caravans between India and
                    Tibet. Today it's an active Indo-China border post,
                    with limited border trade having resumed here in 2006.
                  </p>
                  <p>
                    It's one of the few places in India where civilians can
                    get relatively close to the actual international
                    border, under military supervision — a genuinely
                    distinctive experience, though one that comes with
                    permit requirements, closed days, and real
                    altitude to plan around.
                  </p>
                  <p>
                    A memorial at the pass commemorates the 1967 Indo-China
                    skirmish that took place here, and nearby Baba Mandir —
                    a shrine to a revered Indian soldier — is a common,
                    worthwhile stop on the same trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Nathula Pass at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Altitude", value: "~4,310 m" },
                        {
                          icon: "🚗",
                          label: "From Gangtok",
                          value: "~54 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Apr–Jun, Oct–Nov" },
                        {
                          icon: "🎫",
                          label: "Requires",
                          value: "Protected Area Permit",
                        },
                        {
                          icon: "📅",
                          label: "Closed",
                          value: "Mon & Tue, weather permitting",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Trip",
                          value: "₹1,500 – ₹4,500",
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
                  <h2>Best Time to Visit Nathula Pass</h2>
                  <p>
                    Given the altitude, weather has an outsized effect on
                    whether a visit here is even possible on a given day.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The most reliable window for clear roads and views, before the monsoon sets in.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — high closure risk",
                        text: "Rain and cloud cover regularly disrupt visibility and access; not a reliable time to plan around.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear post-monsoon window",
                        text: "Another strong option, with crisp air and good visibility before winter snow arrives.",
                      },
                      {
                        season: "Dec – Mar",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Snow — frequent closures",
                        text: "Heavy snow at this altitude often closes the pass entirely for stretches of the winter.",
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
                    <strong>Our pick:</strong> April to June or October to
                    November — the two windows with the best odds of the
                    pass being both open and clear.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Nathula Pass & Permits</h2>
                  <ul>
                    <li>
                      <strong>From Gangtok:</strong> A roughly 54 km drive,
                      almost always done as a day trip rather than an
                      overnight, typically combined with{" "}
                      <Link href="/blog/tsomgo-lake-travel-guide">
                        Tsomgo Lake
                      </Link>{" "}
                      along the same route.
                    </li>
                    <li>
                      <strong>Permit required:</strong> A Protected Area
                      Permit is mandatory, arranged through a registered
                      travel agent in Gangtok. Bring original photo ID —
                      copies aren't accepted at the checkpoint.
                    </li>
                    <li>
                      <strong>Vehicle and driver:</strong> Self-drive isn't
                      typically an option here; the permit is usually
                      bundled with a shared or private vehicle and driver.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Nathula is closed on Mondays
                    and Tuesdays, and can close further on short notice for
                    weather — don't schedule it as the single fixed-date
                    highlight of your trip without a backup day.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Border Post & Baba Mandir</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="High-altitude mountain border landscape, evoking Nathula Pass"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Border Post</h3>
                  <p>
                    Under military supervision, visitors can view the
                    actual international boundary marker and the Chinese
                    military post just across it — a rare, genuinely
                    striking experience for most Indian travelers. A
                    memorial here commemorates the 1967 Indo-China
                    skirmish.
                  </p>
                  <h3>Baba Mandir</h3>
                  <p>
                    A short distance from the pass, this shrine is
                    dedicated to Harbhajan Singh, an Indian soldier still
                    revered by troops stationed in the area — a
                    culturally significant stop often combined with
                    Nathula and Tsomgo Lake on the same day.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's no accommodation at Nathula Pass itself — this
                    is strictly a day trip.{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>{" "}
                    is the practical base, with a full range of budget to
                    luxury options.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Depart Gangtok",
                        color: "bg-amber-700",
                        activities: [
                          "Early start with permits and ID in hand",
                          "Stop at Tsomgo Lake en route",
                          "Continue to Nathula Pass",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Nathula & Baba Mandir",
                        color: "bg-sky-600",
                        activities: [
                          "View the border post under supervision",
                          "Visit the 1967 memorial",
                          "Stop at Baba Mandir on the return route",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Return to Gangtok",
                        color: "bg-forest-600",
                        activities: [
                          "Drive back to Gangtok",
                          "Warm up with dinner and rest",
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
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Carry your own:</strong> Options at the pass
                      itself are very limited given the altitude and
                      military-zone setting.
                    </li>
                    <li>
                      <strong>Small stalls en route:</strong> A handful of
                      basic tea and snack stalls exist along the route near
                      Tsomgo Lake.
                    </li>
                    <li>
                      <strong>Gangtok:</strong> Eat a proper meal before
                      departing and after returning, rather than relying on
                      the route itself.
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
                          ["Permit fee", "₹200", "₹200", "₹200"],
                          [
                            "Shared/private vehicle (round trip)",
                            "₹1,200",
                            "₹2,500",
                            "₹4,500",
                          ],
                          ["Food/snacks", "₹300", "₹600", "₹1,200"],
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
                    * Figures are per person for a shared-vehicle day trip;
                    private-vehicle costs are best split across a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Nathula Pass</h2>
                  <ul>
                    <li>
                      <strong>Dress for extreme cold:</strong> Regardless of
                      season, the altitude here means genuinely cold
                      conditions.
                    </li>
                    <li>
                      <strong>Carry ID originals:</strong> Copies aren't
                      accepted at the permit checkpoint.
                    </li>
                    <li>
                      <strong>Build in flexibility:</strong> Weather-related
                      closures happen with little notice.
                    </li>
                    <li>
                      <strong>Watch for altitude effects:</strong> Move
                      slowly and stay hydrated, even for a short visit.
                    </li>
                    <li>
                      <strong>Check current rules if you're a foreign
                      national:</strong> Restrictions apply and can change —
                      confirm with your Gangtok agent in advance.
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
                          "Arrange your permit through a registered Gangtok agent",
                          "Carry original photo ID",
                          "Dress in heavy layers regardless of season",
                          "Combine the trip with Tsomgo Lake and Baba Mandir",
                          "Build a backup day into your itinerary",
                          "Move slowly given the altitude",
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
                          "Plan a Monday or Tuesday visit — the pass is closed",
                          "Rely on ID copies at the checkpoint",
                          "Underestimate the cold at 4,310 metres",
                          "Assume foreign nationals can visit without checking rules",
                          "Skip a backup day in case of weather closure",
                          "Rush the altitude adjustment",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Nathula with{" "}
                    <Link href="/blog/tsomgo-lake-travel-guide">
                      Tsomgo Lake
                    </Link>{" "}
                    on the same route, and base yourself in{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>{" "}
                    for the rest of your Sikkim trip. See our full{" "}
                    <Link href="/blog/sikkim-travel-guide">
                      Sikkim travel guide
                    </Link>{" "}
                    for the wider state.
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
                {["Nathula Pass", "Sikkim", "Indo-China Border", "Old Silk Route"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="nathula-pass-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nathula-pass-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
