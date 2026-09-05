// src/app/blog/moreh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Moreh Travel Guide: India's Border Town to Myanmar",
  description:
    "Complete Moreh travel guide — India's frontier trading town on the Manipur-Myanmar border, the Friendship Bridge over the Yu River to Tamu, border-market culture, permits, how to reach, and full trip planning.",
  keywords:
    "Moreh travel guide, Moreh Manipur, India Myanmar border town, Tengnoupal district, Friendship Bridge Yu River, Tamu Myanmar, Act East policy, NH102 Manipur, Inner Line Permit Manipur, border trade Manipur",
  openGraph: {
    title: "Moreh Travel Guide: India's Border Town to Myanmar",
    description:
      "A frontier trading town on the India-Myanmar border, linked by a bridge over the Yu River — the complete guide to Moreh.",
    url: "https://club.kudozz.in/blog/moreh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "River forming a border landscape, evoking the Yu River at Moreh on the India-Myanmar frontier in Manipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moreh Travel Guide: India's Border Town to Myanmar",
    description:
      "A frontier trading town on the India-Myanmar border — the complete Moreh travel guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/moreh-travel-guide",
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
          headline: "Moreh Travel Guide: India's Border Town to Myanmar",
          description:
            "Complete Moreh travel guide — India's frontier trading town on the Manipur-Myanmar border, the Friendship Bridge over the Yu River, and full trip planning.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/moreh-travel-guide",
          },
          keywords: "Moreh, Manipur, India Myanmar border, Tengnoupal, Yu River",
          about: {
            "@type": "Place",
            name: "Moreh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Manipur",
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
                name: "Manipur",
                item: "https://club.kudozz.in/blog/manipur-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Moreh",
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
    q: "What is Moreh known for?",
    a: "Moreh is a border town on the India-Myanmar international boundary in Manipur's Tengnoupal district, connected to Myanmar's Tamu town via the India-Myanmar Friendship Bridge over the Yu River. It's historically been a significant trading town for cross-border commerce and sits on a key point of India's Act East connectivity corridor, part of the broader India-Myanmar-Thailand trilateral highway concept.",
  },
  {
    q: "How do I get to Moreh, and do I need special permission?",
    a: "Moreh is roughly 110 km southeast of Imphal via NH102, typically a half-day drive. Beyond the standard state Inner Line Permit required of all visitors from outside Manipur, Moreh's status as an international border town means any border-area movement is subject to additional local regulations — confirm current requirements with local authorities or a trusted operator before planning a visit.",
  },
  {
    q: "Can I cross into Myanmar at Moreh?",
    a: "Crossing the Friendship Bridge into Tamu, Myanmar, is subject to its own separate permissions and documentation beyond a standard tourist visit to Moreh — this isn't something to assume is possible without confirming current rules with the relevant authorities well ahead of time.",
  },
  {
    q: "Is Moreh a typical tourist destination?",
    a: "Not really — it's more a geography and frontier-interest stop for travelers curious about India's border regions and cross-border trade culture than a conventional sightseeing destination. Its interest lies in what it represents — a working frontier trading post — rather than a checklist of attractions.",
  },
  {
    q: "Is Moreh safe to visit?",
    a: "Parts of Manipur have periodically seen security-related travel advisories, so check current government advisories before finalizing plans, stick to well-established routes such as NH102, travel with a local guide or operator, and avoid traveling after dark in this district. As a border town, it's especially worth confirming current local conditions and any area-specific movement rules before you go.",
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
  { id: "introduction", title: "India's Frontier Trading Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Moreh", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MorehGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="River forming a border landscape, evoking the Yu River at Moreh on the India-Myanmar frontier in Manipur"
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
                { label: "Manipur", href: "/blog/manipur-travel-guide" },
                { label: "Moreh", href: null },
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
              {["Manipur", "Moreh", "India-Myanmar Border", "Off-beat"].map(
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
              Moreh: India's Border Town to Myanmar
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A frontier trading post on the India-Myanmar international
              boundary, linked to Tamu across the Yu River by a
              Friendship Bridge — a genuinely different kind of
              destination for travelers curious about India's borderlands.
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
                  text: "Tengnoupal district, on NH102",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,850 words",
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
                  <h2>India's Frontier Trading Town</h2>
                  <p>
                    <strong>Moreh</strong> is a border town in{" "}
                    <Link href="/blog/manipur-travel-guide">Manipur</Link>
                    's Tengnoupal district — a district carved out more
                    recently from the older, larger Chandel district — sitting
                    directly on the India-Myanmar international boundary.
                    It's connected to Myanmar's border town of Tamu by the
                    India-Myanmar Friendship Bridge, which spans the Yu
                    River separating the two countries.
                  </p>
                  <p>
                    Moreh has long been a significant trading town for
                    cross-border commerce, and today it sits on a key
                    point of India's Act East connectivity policy — part
                    of the broader vision for a trilateral highway linking
                    India, Myanmar, and Thailand. That role shows up
                    clearly in the town itself: a border market and trade
                    atmosphere, and a mixed population reflecting its
                    identity as a frontier trading post rather than a
                    single-community town.
                  </p>
                  <p>
                    This isn't a conventional leisure or sightseeing stop —
                    it's more of a geography and frontier-interest
                    destination, appealing to travelers who want to
                    understand the region's cross-border trade history and
                    India's easternmost land connection rather than tick
                    off typical tourist attractions.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌉</span> Moreh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Tengnoupal district, Manipur",
                        },
                        {
                          icon: "🌉",
                          label: "Connects To",
                          value: "Tamu, Myanmar",
                        },
                        {
                          icon: "🚗",
                          label: "From Imphal",
                          value: "~110 km via NH102",
                        },
                        {
                          icon: "🛍️",
                          label: "Known For",
                          value: "Border trade market",
                        },
                        {
                          icon: "🌊",
                          label: "River",
                          value: "Yu River",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
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
                  <h2>Best Time to Visit Moreh</h2>
                  <p>
                    Travel comfort here follows the same general pattern
                    as the rest of Manipur — cooler, drier months make for
                    an easier drive and a more pleasant time exploring the
                    town.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and generally comfortable for the drive from Imphal and for spending time around the border market.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity rising",
                        text: "Temperatures climb ahead of the monsoon; still manageable with an early start to the day.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavier rainfall",
                        text: "NH102 and the surrounding hill roads can be affected by rain in this window; plan for possible delays.",
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
                    <strong>Our pick:</strong> October to March, for the
                    most comfortable drive down NH102 and the most
                    pleasant conditions for exploring the town.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Moreh</h2>
                  <ul>
                    <li>
                      <strong>Via Imphal:</strong> Nearly every visitor
                      routes through{" "}
                      <Link href="/blog/imphal-travel-guide">Imphal</Link>,
                      Manipur's air and road gateway. Moreh is roughly
                      110 km southeast of Imphal via NH102, typically a
                      half-day drive.
                    </li>
                    <li>
                      <strong>By road on NH102:</strong> The main route
                      connecting Imphal to the border, winding through
                      hill terrain — a private vehicle with a driver
                      familiar with the road is the most practical option.
                    </li>
                    <li>
                      <strong>Inner Line Permit plus border-area
                      rules:</strong> Visitors from outside Manipur need an
                      Inner Line Permit (ILP), in effect since December
                      2019, to enter the state. Beyond that, as an
                      international border town, Moreh is subject to
                      additional local regulations on border-area movement
                      — confirm current requirements with local authorities
                      or a trusted operator before finalizing your plans.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Sort your Inner Line
                    Permit and confirm any additional border-area
                    requirements while still in Imphal — paperwork and
                    local guidance are both easier to arrange there than
                    once you're already on the road to Moreh.
                  </div>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Border-area note:</strong> As an
                    international frontier town, movement in and around
                    Moreh — and any question of crossing toward Tamu — is
                    governed by rules separate from the general state ILP.
                    Always confirm the current position with local
                    authorities or an established travel operator before
                    you go; this guide is a general orientation, not a
                    substitute for that check.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Moreh</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="River landscape near the India-Myanmar border at Moreh, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Border Market</h3>
                  <p>
                    Moreh's market atmosphere reflects its identity as a
                    trading post — goods, food, and daily commerce with a
                    genuinely cross-border character, shaped by the town's
                    long history as a commercial link between India and
                    Myanmar.
                  </p>
                  <h3>The Friendship Bridge &amp; Yu River</h3>
                  <p>
                    The India-Myanmar Friendship Bridge over the Yu River
                    is the town's defining landmark — the physical link to
                    Tamu on the Myanmar side, and a visible marker of
                    India's easternmost land connection under the Act East
                    policy framework.
                  </p>
                  <h3>A Frontier, Not a Checklist</h3>
                  <p>
                    Moreh rewards travelers who come with genuine curiosity
                    about borderlands and trade geography rather than
                    expectations of conventional sightseeing — its value
                    is in what it represents as a living frontier town.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation in Moreh is basic and limited — most
                    travelers treat it as a day trip from Imphal rather
                    than an overnight stop, given the modest range of
                    stays available locally.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Basic local guesthouses",
                          "Simple lodges near the market",
                        ],
                      },
                      {
                        tier: "Government Stays",
                        icon: "🏛️",
                        range: "₹800–₹1,800/night",
                        picks: ["Tourist lodge (limited rooms)"],
                      },
                      {
                        tier: "Base in Imphal",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Imphal",
                          "Day-trip approach",
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

                  <blockquote>
                    Given the modest range of stays, a day trip from
                    Imphal is the more practical approach for most
                    travelers, though basic local options exist if you
                    prefer to overnight.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Day Trip)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Imphal to Moreh",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Imphal via NH102",
                          "Arrive, get oriented in town",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Border Market & Bridge",
                        color: "bg-sky-600",
                        activities: [
                          "Explore the border trade market",
                          "View the Friendship Bridge and Yu River",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return to Imphal",
                        color: "bg-forest-600",
                        activities: [
                          "Lunch in town",
                          "Drive back to Imphal via NH102",
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
                  <h2>What to Eat in Moreh</h2>
                  <ul>
                    <li>
                      <strong>Border-market food stalls:</strong> A mix of
                      Manipuri and Southeast Asian-influenced snacks and
                      dishes, reflecting the town's cross-border trade
                      character.
                    </li>
                    <li>
                      <strong>Local Manipuri staples:</strong> Standard
                      Meitei and hill-community dishes are available from
                      small local eateries in town.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Dedicated
                      restaurants are limited, so come prepared,
                      especially if making it a day trip.
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
                          ["Car hire from Imphal (round trip)", "₹3,500", "₹5,500", "₹8,000"],
                          ["Accommodation/night (if staying)", "₹600", "₹1,500", "₹3,000"],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          ["Local guide/fixer (per day)", "₹1,200", "₹2,000", "₹3,500"],
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
                    * Car hire from Imphal is the main cost given the
                    distance; a local guide familiar with current
                    border-area rules is worth the extra expense.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Moreh</h2>
                  <ul>
                    <li>
                      <strong>Confirm border-area requirements ahead of
                      time:</strong> Beyond the standard Inner Line Permit
                      required since December 2019, Moreh's status as an
                      international border town means additional local
                      regulations apply — check with local authorities or
                      a trusted operator before finalizing plans.
                    </li>
                    <li>
                      <strong>Travel with a local guide or operator:</strong>{" "}
                      Especially valuable given the town's border-area
                      status and the practical value of local knowledge.
                    </li>
                    <li>
                      <strong>Treat it as a geography stop, not a
                      sightseeing checklist:</strong> Come with an interest
                      in borderlands and trade history rather than
                      expecting conventional tourist attractions.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Digital payment
                      acceptance is inconsistent this far from Imphal.
                    </li>
                    <li>
                      <strong>Check current advisories:</strong> Parts of
                      Manipur have periodically seen security-related
                      travel advisories, so check current government
                      advisories before finalizing plans, stick to
                      well-established routes such as NH102, travel with a
                      local guide or operator, and avoid traveling after
                      dark in this district.
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
                          "Confirm border-area rules before finalizing plans",
                          "Arrange your Inner Line Permit in Imphal first",
                          "Travel with a local guide or established operator",
                          "Plan it as a day trip from Imphal",
                          "Check current advisories before you go",
                          "Carry cash for the market and local eateries",
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
                          "Assume you can cross the border without checking rules first",
                          "Travel without confirming your Inner Line Permit",
                          "Travel after dark in this district",
                          "Expect a conventional sightseeing itinerary",
                          "Rely on cards — carry cash instead",
                          "Skip local guidance given the border-area context",
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
                    <strong>🗺️ Plan the wider trip:</strong> Base yourself
                    in <Link href="/blog/imphal-travel-guide">Imphal</Link>{" "}
                    and treat Moreh as a focused day trip rather than a
                    multi-day stay. See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for the rest of the state.
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
                {["Manipur", "Moreh", "India-Myanmar Border"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="moreh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="moreh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
