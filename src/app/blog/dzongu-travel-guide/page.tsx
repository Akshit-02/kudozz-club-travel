// src/app/blog/dzongu-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dzongu Travel Guide: Permits & Lepcha Culture",
  description:
    "Complete Dzongu guide — Sikkim's restricted Lepcha reserve, permit requirements, community homestays, forests and hot springs, how to reach from Gangtok, and a full visit plan.",
  keywords:
    "Dzongu Sikkim, Dzongu permits, Lepcha reserve, North Sikkim, Lepcha culture, Dzongu homestay, how to reach Dzongu, restricted area Sikkim",
  openGraph: {
    title: "Dzongu Travel Guide: Permits & Lepcha Culture",
    description:
      "A protected reserve set aside for Sikkim's indigenous Lepcha community, opening slowly to respectful, community-based tourism.",
    url: "https://club.kudozz.in/blog/dzongu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dense green forested hills, evoking Dzongu's protected Lepcha reserve landscape in North Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzongu Travel Guide: Permits & Lepcha Culture",
    description:
      "Sikkim's restricted Lepcha reserve, opening slowly to respectful, community-based tourism — the complete Dzongu guide.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dzongu-travel-guide",
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
          headline: "Dzongu Travel Guide: Permits & Lepcha Culture",
          description:
            "Complete Dzongu guide — Sikkim's restricted Lepcha reserve, permit requirements, community homestays, forests and hot springs, how to reach from Gangtok, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/dzongu-travel-guide",
          },
          keywords: "Dzongu, North Sikkim, Lepcha reserve, Lepcha culture, permits",
          about: {
            "@type": "Place",
            name: "Dzongu",
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
                name: "Dzongu",
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
    q: "Why is access to Dzongu restricted?",
    a: "Dzongu is a protected reserve set aside exclusively for Sikkim's indigenous Lepcha community — the state's original inhabitants — to preserve both their traditional way of life and the area's exceptional biodiversity. The restriction is a deliberate cultural and ecological protection, not a bureaucratic obstacle.",
  },
  {
    q: "How do I get a permit to visit Dzongu?",
    a: "Entry generally requires a special permit, in practice often arranged through a local Lepcha host or a registered agency with the right access. Requirements can change, so confirm the current process with a trusted operator before planning your trip.",
  },
  {
    q: "What is Lepcha culture?",
    a: "The Lepcha are considered the original inhabitants of Sikkim, with a distinct language, customs, and deep traditional connection to the land. Dzongu remains one of the best-preserved places to experience this culture firsthand, largely because of its restricted-access status.",
  },
  {
    q: "Is it appropriate for tourists to visit?",
    a: "Yes, when done respectfully — the area has cautiously opened to community-based tourism through Lepcha-run homestays, which offer a genuine, low-impact way to experience the region. Visitors should approach it as cultural immersion, not a checklist sightseeing stop.",
  },
  {
    q: "How many days should I plan to stay?",
    a: "Given the restricted access and the slower pace that defines a meaningful visit here, 2-3 days is a reasonable minimum — enough time to settle into a homestay, explore the forest and hot springs, and engage with the community without rushing.",
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
  { id: "introduction", title: "A Protected Lepcha Reserve", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dzongu", level: 2 },
  { id: "things-to-do", title: "Homestays, Forest & Hot Springs", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DzonguGuidePage() {
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
              alt="Dense green forested hills, evoking Dzongu's protected Lepcha reserve landscape in North Sikkim"
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
                { label: "Dzongu", href: null },
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
                "Dzongu",
                "Lepcha Reserve",
                "North Sikkim",
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
              Dzongu: Sikkim's Protected Lepcha Reserve
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A restricted reserve set aside for Sikkim's indigenous
              Lepcha community, opening slowly to travelers who come to
              slow down, not check boxes.
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
                  text: "North Sikkim",
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
                  <h2>A Protected Lepcha Reserve</h2>
                  <p>
                    <strong>Dzongu</strong>, in North Sikkim, is a
                    protected reserve set aside exclusively for the
                    indigenous <strong>Lepcha</strong> community — the
                    original inhabitants of Sikkim. Entry is restricted,
                    generally requiring a special permit and, in practice,
                    often arranged through a local Lepcha host or a
                    registered agency with the right access.
                  </p>
                  <p>
                    That restricted-access status has helped preserve both
                    exceptional biodiversity — dense forest, waterfalls,
                    hot springs — and traditional Lepcha culture in a way
                    that's increasingly rare elsewhere in Sikkim.
                  </p>
                  <p>
                    In recent years, the area has cautiously opened to
                    sustainable, community-based tourism, with homestays
                    run by local Lepcha families offering visitors a
                    genuine, low-impact way to experience the region's
                    culture and nature together. This is a place for slow,
                    respectful travel — not a checklist sightseeing stop.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Dzongu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North Sikkim",
                        },
                        {
                          icon: "🪪",
                          label: "Access",
                          value: "Permit Required",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct-Feb, Mar-May" },
                        {
                          icon: "🏘️",
                          label: "Known For",
                          value: "Lepcha Culture",
                        },
                        {
                          icon: "🏡",
                          label: "Stay Type",
                          value: "Community Homestays",
                        },
                        {
                          icon: "♨️",
                          label: "Also Has",
                          value: "Hot Springs, Waterfalls",
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
                  <h2>Best Time to Visit Dzongu</h2>
                  <p>
                    Trail access and general comfort both shape when a
                    visit works best.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct - Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear, dry conditions with accessible trails, ideal for exploring the forest and spending unhurried time with a host family.",
                      },
                      {
                        season: "Mar - May",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Also excellent",
                        text: "Comfortable temperatures with the forest at its most lush before the monsoon sets in.",
                      },
                      {
                        season: "Jun - Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain brings genuinely difficult access on the region's forest roads and trails.",
                      },
                      {
                        season: "Dec - Jan",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, quiet",
                        text: "Colder temperatures but a particularly peaceful time to experience the reserve with fewer visitors.",
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
                    <strong>Our pick:</strong> October to February or
                    March to May — both give accessible trails and
                    comfortable conditions for a slow-paced stay.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Dzongu</h2>
                  <ul>
                    <li>
                      <strong>From Gangtok:</strong> Access is via North
                      Sikkim, with the specific approach and checkpoints
                      depending on current permit arrangements — confirm
                      the route with your host or agency before departure.
                      See our{" "}
                      <Link href="/blog/gangtok-travel-guide">
                        Gangtok guide
                      </Link>{" "}
                      for the wider North Sikkim gateway.
                    </li>
                    <li>
                      <strong>Permits:</strong> Generally arranged in
                      advance through a local Lepcha host or a registered
                      agency — this is not something to sort out on
                      arrival.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Confirm current permit
                    requirements well in advance — Dzongu is one of
                    Sikkim's more tightly regulated areas, and rules can
                    change.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Homestays, Forest & Hot Springs</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Forested landscape of Dzongu, North Sikkim"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Community Homestays</h3>
                  <p>
                    The heart of a Dzongu visit — staying with a Lepcha
                    family gives genuine insight into local life, food, and
                    customs. This isn't a limitation on options; it's the
                    authentic way to experience the reserve.
                  </p>
                  <h3>Forest & Biodiversity</h3>
                  <p>
                    Dense, protected forest defines the landscape, home to
                    varied flora and fauna preserved in part because of the
                    area's restricted-access status.
                  </p>
                  <h3>Hot Springs</h3>
                  <p>
                    Natural hot springs are scattered through the reserve,
                    a relaxing counterpoint to forest walks — ask your host
                    about access to the nearest one.
                  </p>
                  <h3>Waterfalls</h3>
                  <p>
                    Several waterfalls dot the reserve, generally reached
                    via walks arranged through your homestay host, who can
                    point you to routes suited to your pace and interest.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Dzongu</h2>
                  <p>
                    Lepcha-run homestays are the standard and, for most
                    visitors, the only real option — and part of the
                    appeal rather than a limitation.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Community Homestay",
                        icon: "🏡",
                        range: "₹1,500–₹3,000/night (full board)",
                        picks: [
                          "Lepcha family homestays",
                          "Meals typically included",
                          "Arranged via local host or agency",
                        ],
                      },
                      {
                        tier: "Guided Package",
                        icon: "🧭",
                        range: "Varies by operator",
                        picks: [
                          "Multi-day homestay + permit bundles",
                          "Local guide included",
                          "Booked through a registered agency",
                        ],
                      },
                      {
                        tier: "Nearby Base",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Hotels in nearby North Sikkim towns",
                          "Useful before/after a Dzongu stay",
                          "For those unable to secure homestay access",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Settling In",
                        color: "bg-amber-700",
                        activities: [
                          "Travel in from Gangtok, permit check",
                          "Arrive at homestay, meet your host family",
                          "Short evening walk near the homestay",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Forest, Hot Springs & Culture",
                        color: "bg-forest-600",
                        activities: [
                          "Guided forest walk with your host",
                          "Visit a nearby hot spring or waterfall",
                          "Evening spent learning about Lepcha customs",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Slow Morning & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Unhurried morning, optional further walks",
                          "Depart back toward Gangtok",
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
                  <h2>Where to Eat in Dzongu</h2>
                  <ul>
                    <li>
                      <strong>Homestay meals:</strong> The primary — often
                      only — dining option, featuring local Lepcha
                      cuisine and homegrown ingredients.
                    </li>
                    <li>
                      <strong>Traditional preparations:</strong> Ask your
                      host about local dishes specific to Lepcha
                      tradition; this is part of the cultural experience.
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
                          [
                            "Homestay/night (full board)",
                            "₹1,500",
                            "₹2,500",
                            "₹3,500",
                          ],
                          ["Permit + agency fee", "₹500", "₹1,000", "₹2,000"],
                          ["Local guide/day", "₹500", "₹800", "₹1,200"],
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
                    * Figures are approximate and vary by operator — confirm
                    current pricing when arranging your permit and
                    homestay.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Dzongu</h2>
                  <ul>
                    <li>
                      <strong>Confirm permit requirements early:</strong>{" "}
                      Rules can change, so check with a trusted local
                      contact or agency well before your trip.
                    </li>
                    <li>
                      <strong>Approach with genuine respect:</strong> This
                      is someone's home and living culture, not a tourist
                      attraction in the conventional sense.
                    </li>
                    <li>
                      <strong>Don't expect conventional infrastructure:</strong>{" "}
                      That's the point — Dzongu's appeal is precisely its
                      unspoiled, lightly developed character.
                    </li>
                    <li>
                      <strong>Ask before photographing people:</strong>{" "}
                      Standard courtesy that matters even more in a
                      protected cultural reserve.
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
                          "Confirm permit requirements well in advance",
                          "Book a Lepcha-run community homestay",
                          "Approach the visit with genuine respect",
                          "Ask before photographing people or ceremonies",
                          "Allow a slow, unhurried 2-3 day stay",
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
                          "Arrive without a confirmed permit",
                          "Expect hotel-style tourist infrastructure",
                          "Treat local customs casually",
                          "Rush a visit meant for slowing down",
                          "Visit during heavy monsoon (Jun-Sep)",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Dzongu with{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>{" "}
                    as your North Sikkim base. See our full{" "}
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
                {["Dzongu", "Lepcha Reserve", "North Sikkim", "Sikkim"].map(
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

              <RelatedPostsGrid currentSlug="dzongu-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dzongu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
