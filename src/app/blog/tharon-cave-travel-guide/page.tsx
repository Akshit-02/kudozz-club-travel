// src/app/blog/tharon-cave-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tharon Cave Guide: Manipur's Longest Limestone Cave",
  description:
    "Complete Tharon Cave travel guide — one of the longest known cave systems in Northeast India, near Tharon village in the Tamenglong-Noney hill country, stalactite formations, best time to visit, and how to arrange a guided visit.",
  keywords:
    "Tharon Cave, Tharon Cave Manipur, Tamenglong caves, Noney district caves, Northeast India caving, limestone caves Manipur, Tharon village, caving Manipur guide",
  openGraph: {
    title: "Tharon Cave Guide: Manipur's Longest Limestone Cave",
    description:
      "One of the longest known cave systems in Northeast India, deep in Manipur's Tamenglong-Noney hill country — the complete guide to visiting Tharon Cave.",
    url: "https://club.kudozz.in/blog/tharon-cave-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Rugged, rocky mountain terrain, evoking the remote limestone hill country around Tharon Cave in Manipur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharon Cave Guide: Manipur's Longest Limestone Cave",
    description:
      "One of the longest known cave systems in Northeast India — the complete guide to visiting Tharon Cave, Manipur.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tharon-cave-travel-guide",
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
          headline: "Tharon Cave Guide: Manipur's Longest Limestone Cave",
          description:
            "Complete Tharon Cave travel guide — one of the longest known cave systems in Northeast India, near Tharon village, best time to visit, and how to arrange a guided visit.",
          image:
            "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
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
            "@id": "https://club.kudozz.in/blog/tharon-cave-travel-guide",
          },
          keywords: "Tharon Cave, Manipur, Tamenglong, Noney, caving",
          about: {
            "@type": "Place",
            name: "Tharon Cave",
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
                name: "Tharon Cave",
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
    q: "Where exactly is Tharon Cave located?",
    a: "Tharon Cave sits near Tharon village in the Tamenglong-Noney hill country of western Manipur. District boundaries in this area were reorganized in 2016 when Noney district was carved out of Tamenglong, so you'll see the cave referenced under either district depending on the source.",
  },
  {
    q: "How long is Tharon Cave?",
    a: "It's regarded as one of the longest known cave systems in Northeast India, with notable stalactite and stalagmite formations and resident bat colonies. Exact survey figures vary by source, so treat specific length claims with some caution.",
  },
  {
    q: "Do I need a guide to visit Tharon Cave?",
    a: "Yes. The cave is undeveloped for mass tourism — there are no lit walkways or handrails — so a local guide, headlamps or torches, and a reasonable level of fitness and comfort with tight, dark spaces are essential.",
  },
  {
    q: "Where do I stay to visit Tharon Cave?",
    a: "There's essentially no accommodation at the cave itself. Most visitors base themselves in Imphal or Tamenglong town and arrange transport and a local guide in advance.",
  },
  {
    q: "When is the best time to visit Tharon Cave?",
    a: "October to April, when drier conditions make both the cave interior and the approach roads safer. The June-September monsoon raises water levels inside the cave and makes approach roads difficult.",
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
  { id: "introduction", title: "Northeast India's Hidden Cave System", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tharon Cave", level: 2 },
  { id: "things-to-do", title: "Inside the Cave", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Supplies", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TharonCaveGuidePage() {
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
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Rugged, rocky mountain terrain, evoking the remote limestone hill country around Tharon Cave in Manipur"
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
                { label: "Tharon Cave", href: null },
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
              {["Tharon Cave", "Manipur", "Caving", "Adventure"].map(
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
              Tharon Cave: Manipur's Longest Limestone Cave
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A vast, undeveloped limestone cave system deep in Manipur's
              western hill country — among the longest known caves in
              Northeast India, and a genuine adventure for those willing to
              reach it.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Tamenglong-Noney, Manipur",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,800 words",
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
                  <h2>Northeast India's Hidden Cave System</h2>
                  <p>
                    <strong>Tharon Cave</strong> is a large limestone cave
                    system near Tharon village, deep in the
                    Tamenglong–Noney hill country of western{" "}
                    <Link href="/blog/manipur-travel-guide">Manipur</Link>.
                    (District boundaries here were reorganized in 2016 when
                    Noney district was carved out of Tamenglong, so you'll
                    see the cave referenced under either name.) It's
                    regarded as one of the longest known cave systems in
                    Northeast India, with notable stalactite and stalagmite
                    formations and resident bat colonies.
                  </p>
                  <p>
                    Unlike better-known show caves elsewhere in India, Tharon
                    Cave is entirely undeveloped for mass tourism — there
                    are no lit walkways, handrails, or ticket counters. This
                    is a genuine adventure destination, not a casual sightseeing
                    stop, and it rewards visitors who come properly prepared
                    with a local guide.
                  </p>
                  <p>
                    Given how remote and undeveloped it is, this is best
                    treated as a separate, further-flung offbeat leg of a
                    Manipur trip rather than something to combine casually
                    with{" "}
                    <Link href="/blog/ukhrul-travel-guide">Ukhrul</Link> or{" "}
                    <Link href="/blog/shirui-hills-travel-guide">
                      Shirui Hills
                    </Link>
                    , which lie in the opposite direction toward the
                    Nagaland border.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕳️</span> Tharon Cave at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Tamenglong–Noney hill country",
                        },
                        {
                          icon: "🪨",
                          label: "Type",
                          value: "Limestone cave system",
                        },
                        {
                          icon: "🦇",
                          label: "Notable For",
                          value: "Stalactites, bat colonies",
                        },
                        {
                          icon: "🧗",
                          label: "Access",
                          value: "Undeveloped, guide required",
                        },
                        {
                          icon: "🛌",
                          label: "Base",
                          value: "Imphal or Tamenglong",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Apr",
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
                  <h2>Best Time to Visit Tharon Cave</h2>
                  <p>
                    Timing matters more here than at most destinations —
                    both the cave interior and the approach roads are
                    directly affected by the season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Dry season — our pick",
                        text: "Drier conditions make both the cave interior and the approach roads considerably safer — the clear window for this trip.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Water levels inside the cave rise and approach roads become difficult or unsafe — not a suitable window for a visit.",
                      },
                      {
                        season: "May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pre-monsoon transition",
                        text: "Still generally workable, but conditions can turn quickly as the monsoon approaches — check forecasts closely.",
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
                    <strong>Our pick:</strong> October to April — drier
                    conditions make both the cave itself and the roads in
                    genuinely safer to navigate.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tharon Cave</h2>
                  <ul>
                    <li>
                      <strong>Base in Imphal or Tamenglong:</strong> There's
                      no direct public transport network to the cave itself
                      — most visitors base in{" "}
                      <Link href="/blog/manipur-travel-guide">Imphal</Link>{" "}
                      or Tamenglong town and arrange a private vehicle and
                      local guide from there.
                    </li>
                    <li>
                      <strong>Arrange a guide in advance:</strong> Given how
                      remote and undeveloped the site is, contact a local
                      guide or operator ahead of your trip rather than
                      expecting to arrange one on arrival.
                    </li>
                    <li>
                      <strong>Expect a genuinely long day:</strong> The
                      journey from Imphal into the Tamenglong–Noney hill
                      country is substantial given the terrain — plan for a
                      full day of travel each way, or an overnight in
                      Tamenglong.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Permit note:</strong> Manipur has required an
                    Inner Line Permit (ILP) for visitors from outside the
                    state since December 2019 — arrange this before
                    traveling into any of Manipur's hill districts.
                  </div>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Confirm your guide and
                    transport arrangements by phone before setting out —
                    mobile connectivity thins out considerably once you
                    leave Imphal, so last-minute changes are hard to
                    coordinate on the road.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Inside the Cave</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Rocky terrain near the Tharon Cave hill country, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Stalactite & Stalagmite Formations</h3>
                  <p>
                    The cave's interior features notable limestone
                    formations built up over a very long time — a genuine
                    highlight for anyone interested in geology or cave
                    systems.
                  </p>
                  <h3>Bat Colonies</h3>
                  <p>
                    Tharon Cave is home to resident bat colonies, adding to
                    the sense that this is a living ecosystem rather than a
                    static tourist attraction — move carefully and quietly
                    to avoid disturbing them.
                  </p>
                  <h3>An Undeveloped, Adventurous Interior</h3>
                  <p>
                    With no lit walkways or handrails, moving through the
                    cave genuinely requires headlamps or torches, sturdy
                    footwear, and comfort with tight, dark spaces — this is
                    real caving, not a paved show-cave walkthrough.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's essentially no accommodation at the cave itself
                    — plan to base yourself in Imphal or Tamenglong town and
                    treat the cave as a long day trip or an overnight
                    excursion.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Imphal — Base",
                        icon: "🏨",
                        range: "₹1,000–₹3,000/night",
                        picks: [
                          "Business hotels",
                          "Guesthouses",
                          "Widest range of options",
                        ],
                      },
                      {
                        tier: "Tamenglong Town",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Basic guesthouses",
                          "Government circuit house (where available)",
                        ],
                      },
                      {
                        tier: "At the Cave",
                        icon: "🕳️",
                        range: "No accommodation",
                        picks: [
                          "Day trip or return same evening",
                          "Arrange all logistics in advance",
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
                    Come prepared for genuinely basic infrastructure once you
                    leave Imphal — this is a remote destination, not a
                    weekend-comfortable one.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Imphal to Tamenglong",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Imphal into Tamenglong-Noney hill country",
                          "Meet your pre-arranged local guide",
                          "Rest ahead of the cave visit",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tharon Cave & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Guided visit into Tharon Cave with headlamps",
                          "Explore the formations and bat colony areas",
                          "Return to Imphal or overnight in Tamenglong again",
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
                  <h2>Food & Supplies</h2>
                  <ul>
                    <li>
                      <strong>Carry your own food and water:</strong> There
                      are minimal facilities near the cave itself — pack
                      enough supplies for the full day.
                    </li>
                    <li>
                      <strong>Stock up in Imphal or Tamenglong:</strong> Buy
                      snacks, water, and any other essentials before heading
                      toward the cave, as options thin out quickly beyond
                      the towns.
                    </li>
                    <li>
                      <strong>Ask your guide about local arrangements:</strong>{" "}
                      Some local guides or operators can arrange simple
                      meals as part of the trip — confirm this in advance.
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
                          ["Local guide (per visit)", "₹1,500", "₹2,500", "₹4,000"],
                          ["Private vehicle, Imphal-Tamenglong", "₹4,000", "₹5,500", "₹8,000"],
                          ["Tamenglong/Imphal stay, per night", "₹700", "₹1,800", "₹3,500"],
                          ["Headlamp/caving gear (if not carried)", "₹300", "₹600", "₹1,200"],
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
                    * A local guide is not optional here — the cave has no
                    lit walkways or handrails, and the value of local
                    knowledge for a safe visit is genuinely significant.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Tharon Cave</h2>
                  <ul>
                    <li>
                      <strong>Never enter without a local guide:</strong>{" "}
                      The cave is undeveloped for mass tourism, with no
                      lighting or handrails — this isn't a spot for
                      independent exploration.
                    </li>
                    <li>
                      <strong>Carry your own headlamps/torches:</strong> Bring
                      at least one backup light source per person.
                    </li>
                    <li>
                      <strong>Arrange your Inner Line Permit ahead of time:</strong>{" "}
                      Manipur has required an ILP for visitors from outside
                      the state since December 2019.
                    </li>
                    <li>
                      <strong>Check current travel advisories:</strong> Parts
                      of Manipur have periodically seen security-related
                      travel advisories, so check current conditions before
                      finalizing plans, travel via well-established routes,
                      and consider a local guide or operator in these hill
                      districts.
                    </li>
                    <li>
                      <strong>Treat this as a standalone leg:</strong> Tharon
                      Cave sits far to the west of{" "}
                      <Link href="/blog/ukhrul-travel-guide">Ukhrul</Link>{" "}
                      and{" "}
                      <Link href="/blog/shirui-hills-travel-guide">
                        Shirui Hills
                      </Link>{" "}
                      — it isn't easily combinable with those in one trip.
                      Pair it instead with a wider{" "}
                      <Link href="/blog/tamenglong-travel-guide">
                        Tamenglong travel guide
                      </Link>{" "}
                      itinerary if you're heading into that part of the
                      state.
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
                          "Arrange a local guide well before your trip",
                          "Carry multiple headlamps/torches and spare batteries",
                          "Confirm your ILP before traveling",
                          "Visit between October and April",
                          "Stock up on food and water in Imphal or Tamenglong",
                          "Check current advisories before finalizing plans",
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
                          "Enter the cave without a guide or proper lighting",
                          "Visit during the June-September monsoon",
                          "Expect any accommodation at the cave site itself",
                          "Try to combine this with Ukhrul/Shirui in one short trip",
                          "Disturb the resident bat colonies",
                          "Rely on mobile signal once past Imphal",
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
                    <strong>🗺️ Extend the trip:</strong> Treat Tharon Cave
                    as part of a dedicated Tamenglong-Noney leg — see our{" "}
                    <Link href="/blog/tamenglong-travel-guide">
                      Tamenglong travel guide
                    </Link>{" "}
                    for the wider area, and our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for the state overall.
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
                {["Manipur", "Tharon Cave", "Caving"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="tharon-cave-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tharon-cave-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
