// src/app/blog/shnongpdeng-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Shnongpdeng Guide: Camping & River Adventure",
  description:
    "Complete Shnongpdeng guide — riverside camping on the crystal-clear Umngot river, kayaking, cliff jumping, scuba diving, how to reach from Shillong and Dawki, and a full visit plan.",
  keywords:
    "Shnongpdeng travel guide, Umngot river camping, Shnongpdeng scuba diving, Meghalaya river camping, Shnongpdeng kayaking, how to reach Shnongpdeng, Dawki Shnongpdeng",
  openGraph: {
    title: "Shnongpdeng Guide: Camping & River Adventure",
    description:
      "Tented camps on one of the clearest rivers in India — camping, kayaking, cliff jumping, and scuba diving on the Umngot at Shnongpdeng.",
    url: "https://club.kudozz.in/blog/shnongpdeng-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Clear turquoise river winding through green hills, evoking the Umngot river at Shnongpdeng",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shnongpdeng Guide: Camping & River Adventure",
    description:
      "Tented riverside camps, kayaking, and scuba diving on one of India's clearest rivers — the complete Shnongpdeng guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/shnongpdeng-travel-guide",
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
          headline: "Shnongpdeng Guide: Camping & River Adventure",
          description:
            "Complete Shnongpdeng guide — riverside camping on the crystal-clear Umngot river, kayaking, cliff jumping, scuba diving, how to reach from Shillong and Dawki, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/shnongpdeng-travel-guide",
          },
          keywords:
            "Shnongpdeng, Umngot river, Meghalaya, river camping, scuba diving",
          about: {
            "@type": "Place",
            name: "Shnongpdeng",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Shnongpdeng",
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
    q: "How does Shnongpdeng differ from Dawki?",
    a: "Dawki is best known for the quick boat ride across the Umngot river's clear water; Shnongpdeng, a short distance away on the same river, is the dedicated hub for staying overnight on the water — riverside camping, kayaking, cliff jumping, and scuba diving, rather than a brief day-trip visit.",
  },
  {
    q: "Is scuba diving really available here?",
    a: "Yes — the Umngot's exceptional clarity around Shnongpdeng makes it one of very few inland scuba-diving spots in India. It should be arranged through a properly certified, equipped operator rather than an informal setup.",
  },
  {
    q: "How far is Shnongpdeng from Shillong?",
    a: "Roughly 80–85 km, about 2.5–3 hours by road, similar in distance to Dawki since the two sit close together on the same stretch of the Umngot river.",
  },
  {
    q: "Is camping the best way to experience Shnongpdeng?",
    a: "Yes — an overnight stay in one of the riverside tented camps is genuinely the ideal way to experience Shnongpdeng, giving you sunset and sunrise on the water rather than a rushed midday stop.",
  },
  {
    q: "What is the best time for water clarity?",
    a: "November to February offers the clearest, calmest water for camping, kayaking, and diving — the same essential window that makes Dawki's water famously transparent.",
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
  { id: "introduction", title: "The Umngot's Adventure Hub", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Shnongpdeng", level: 2 },
  { id: "things-to-do", title: "Camping, Kayaking & Diving", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ShnongpdengGuidePage() {
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
              alt="Clear turquoise river winding through green hills, evoking the Umngot river at Shnongpdeng"
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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Shnongpdeng", href: null },
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
                "Shnongpdeng",
                "Umngot River",
                "Meghalaya",
                "River Camping",
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
              Shnongpdeng Guide: Camping & River Adventure
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Tented camps pitched right on the banks of one of India&apos;s
              clearest rivers — kayaking, cliff jumping, and even scuba
              diving in water so transparent it barely looks real.
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
                  text: "East Khasi Hills, Meghalaya",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
                  <h2>The Umngot&apos;s Adventure Hub</h2>
                  <p>
                    <strong>Shnongpdeng</strong> is a riverside village on
                    the Umngot river, a short distance from{" "}
                    <Link href="/blog/dawki-travel-guide">Dawki</Link>, and
                    it functions as the main hub for actually spending time
                    on this famously clear stretch of water rather than
                    just a quick boat-ride visit.
                  </p>
                  <p>
                    Where Dawki draws day-trippers for a boat ride across
                    the transparent water, Shnongpdeng is where you camp on
                    the riverbank, kayak, jump off the cliffs into deep
                    pools, and — genuinely unusually for inland India — go
                    scuba diving, given how exceptionally clear the water
                    is here.
                  </p>
                  <p>
                    Tented camps line the banks, letting you wake up to the
                    river rather than driving out and back in a single
                    afternoon.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏕️</span> Shnongpdeng at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "East Khasi Hills, Meghalaya",
                        },
                        {
                          icon: "🕒",
                          label: "From Shillong",
                          value: "~2.5–3 hrs drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "River Camping, Scuba Diving",
                        },
                        {
                          icon: "🚣",
                          label: "Activities",
                          value: "Kayaking, Cliff Jumping",
                        },
                        {
                          icon: "🎯",
                          label: "Near",
                          value: "Dawki (same river)",
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
                  <h2>Best Time to Visit Shnongpdeng</h2>
                  <p>
                    Water clarity and river conditions drive the seasonal
                    calendar here, just as they do at Dawki.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The clearest, calmest water of the year, ideal for kayaking, diving, and simply floating on the surface watching the riverbed below.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warming up, still clear",
                        text: "Water clarity generally holds up well, with warmer air temperatures making for pleasant camping evenings.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain swells and muddies the Umngot considerably; most water activities are suspended for safety during this window.",
                      },
                      {
                        season: "Oct",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Water clearing again",
                        text: "The river starts settling back to its famous clarity as the monsoon tapers off, a good transitional window.",
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
                    <strong>Our pick:</strong> November to February — the
                    same window that makes the Umngot famous for its
                    transparency, and the best time for every water
                    activity here.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Shnongpdeng</h2>
                  <ul>
                    <li>
                      <strong>From Shillong:</strong> Roughly 80–85 km,
                      about 2.5–3 hours by road.
                    </li>
                    <li>
                      <strong>From Dawki:</strong> A short drive, given the
                      two sit close together on the same stretch of the
                      Umngot river.
                    </li>
                    <li>
                      <strong>By taxi/shared vehicle:</strong> Most visitors
                      book through a camp operator, who often arranges
                      transport as part of the package.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your riverside camp
                    directly and confirm what&apos;s included (meals,
                    kayaking, transfers) — packages vary significantly
                    between operators.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Camping, Kayaking & Diving</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Clear river water with visible riverbed, evoking Shnongpdeng's exceptional water clarity"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Riverside Camping</h3>
                  <p>
                    Tented camps line the Umngot&apos;s banks at
                    Shnongpdeng, offering an overnight stay directly on the
                    water — a far more immersive way to experience the
                    river&apos;s famous clarity than a quick day trip.
                  </p>
                  <h3>Kayaking & Cliff Jumping</h3>
                  <p>
                    Kayaks are available to paddle out onto the calm,
                    clear water, and several spots along the banks are
                    popular for cliff jumping into deep, clean pools.
                  </p>
                  <h3>Scuba Diving</h3>
                  <p>
                    Genuinely unusual for inland India, Shnongpdeng offers
                    scuba diving given the Umngot&apos;s exceptional
                    clarity — arrange this only through a properly
                    certified, equipped operator.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Shnongpdeng</h2>
                  <p>
                    Riverside tented camps are the main and most appealing
                    accommodation style here, ranging from basic to fairly
                    comfortable.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "⛺",
                        range: "₹1,000–₹1,800/night",
                        picks: [
                          "Basic riverside tents",
                          "Shared-facility camps",
                          "Simple camp packages",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏕️",
                        range: "₹2,000–₹3,500/night",
                        picks: [
                          "Comfortable tented camps",
                          "Packages with meals included",
                          "Camps with kayaking bundled in",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Premium riverside camps",
                          "Full-board adventure packages",
                          "Camps with scuba diving included",
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
                        title: "Arrive & Settle In",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Shillong, check into a riverside camp",
                          "Afternoon kayaking or a boat ride",
                          "Evening by the river",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Diving & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning scuba diving or cliff jumping",
                          "Optional stop at Dawki on the way out",
                          "Depart for Shillong",
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
                    * Combine with{" "}
                    <Link href="/blog/dawki-travel-guide">Dawki</Link> for
                    the full Umngot river experience.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat at Shnongpdeng</h2>
                  <ul>
                    <li>
                      <strong>Camp meals:</strong> Most riverside camps
                      include meals as part of their overnight package,
                      typically simple, filling Khasi and North Indian
                      fare.
                    </li>
                    <li>
                      <strong>Local stalls:</strong> A few basic food stalls
                      operate near the main camp cluster.
                    </li>
                    <li>
                      <strong>Bring snacks:</strong> Options are genuinely
                      limited outside the camps, so carry extra snacks if
                      you're particular about food.
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
                            "Camp package/night (with meals)",
                            "₹1,500",
                            "₹3,000",
                            "₹6,000",
                          ],
                          ["Kayaking (per session)", "₹300", "₹500", "₹800"],
                          ["Scuba diving (per dive)", "₹1,500", "₹2,000", "₹3,000"],
                          ["Taxi from Shillong (round trip)", "₹4,500", "₹6,000", "₹8,500"],
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
                    * Diving and kayaking costs vary significantly by
                    operator — confirm inclusions before booking.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Shnongpdeng</h2>
                  <ul>
                    <li>
                      <strong>Book camps ahead on weekends:</strong> Limited
                      capacity fills up quickly during the Nov–Feb peak
                      season.
                    </li>
                    <li>
                      <strong>Use a certified diving operator:</strong>{" "}
                      Don't compromise on safety equipment for scuba diving.
                    </li>
                    <li>
                      <strong>Avoid the monsoon:</strong> Jun–Sep water
                      levels and current make most activities unsafe or
                      unavailable.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is
                      inconsistent this far from Shillong.
                    </li>
                    <li>
                      <strong>Pack for both wet and dry:</strong> You'll
                      want swimwear and warm layers for cool camp evenings.
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
                          "Book a riverside camp well in advance",
                          "Use a certified operator for diving",
                          "Visit in the Nov–Feb clear-water window",
                          "Combine with a Dawki visit",
                          "Carry enough cash for the whole stay",
                          "Pack swimwear and warm evening layers",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Visit during monsoon months",
                          "Dive with an uncertified operator",
                          "Arrive without a camp booking",
                          "Expect wide card acceptance",
                          "Rely on find-on-arrival food options",
                          "Skip checking package inclusions",
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
                    <strong>🗺️ Extend the trip:</strong> Combine
                    Shnongpdeng with{" "}
                    <Link href="/blog/dawki-travel-guide">Dawki</Link> for
                    the full Umngot river experience, or see our full{" "}
                    <Link href="/blog/meghalaya-travel-guide">
                      Meghalaya travel guide
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
                {[
                  "Shnongpdeng",
                  "Umngot River",
                  "Meghalaya",
                  "River Camping",
                  "Scuba Diving",
                  "Adventure",
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

              <RelatedPostsGrid currentSlug="shnongpdeng-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="shnongpdeng-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
