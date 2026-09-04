// src/app/blog/phek-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Phek Travel Guide: Terraced Fields & Tips",
  description:
    "Complete Phek guide — the striking terraced rice fields of Khezhakeno and Chizami, Chakhesang Naga culture, Shilloi Lake, how to reach from Kohima, and a full visit plan.",
  keywords:
    "Phek travel guide, Phek district Nagaland, Chakhesang Naga, Khezhakeno terraced fields, Chizami village, Shilloi Lake, how to reach Phek, offbeat Nagaland",
  openGraph: {
    title: "Phek Travel Guide: Terraced Fields & Tips",
    description:
      "Striking hillside rice terraces, Chakhesang Naga villages, and a genuinely offbeat corner of Nagaland — the complete Phek guide.",
    url: "https://club.kudozz.in/blog/phek-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Green terraced landscape, evoking Phek district's hillside rice terraces in Nagaland",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Phek Travel Guide: Terraced Fields & Tips",
    description:
      "Some of Nagaland's most striking rice terraces, Chakhesang Naga villages, and a quiet detour off the standard tourist circuit.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/phek-travel-guide",
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
          headline: "Phek Travel Guide: Terraced Fields & Tips",
          description:
            "Complete Phek guide — the striking terraced rice fields of Khezhakeno and Chizami, Chakhesang Naga culture, Shilloi Lake, how to reach from Kohima, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/phek-travel-guide",
          },
          keywords: "Phek, Chakhesang Naga, terraced fields, Shilloi Lake, Nagaland",
          about: {
            "@type": "Place",
            name: "Phek",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
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
                name: "Nagaland",
                item: "https://club.kudozz.in/blog/nagaland-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Phek",
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
    q: "How far is Phek from Kohima?",
    a: "Phek district sits a fair distance from Kohima, requiring several hours of driving through Nagaland's hill terrain — this is genuinely a longer journey than a quick day trip, so plan accordingly.",
  },
  {
    q: "What makes the terraced fields here notable?",
    a: "The terraced rice fields around Khezhakeno and Chizami are among the most visually striking examples of traditional hill agriculture in Nagaland, carved into steep slopes by generations of Chakhesang Naga farmers.",
  },
  {
    q: "Is Shilloi Lake part of the same district?",
    a: "Yes — Shilloi Lake, Nagaland's largest natural lake, is located within Phek district, making it a natural addition to a Phek visit.",
  },
  {
    q: "What is the best time to see the fields at their most striking?",
    a: "The terraces change character across the agricultural cycle — lush green during the growing season and golden at harvest time — so timing depends on which look you want to see. Broadly, October to April offers the clearest, most comfortable travel weather.",
  },
  {
    q: "Is Phek off the standard Nagaland tourist circuit?",
    a: "Yes. Phek is considerably quieter and less developed for tourism than Kohima or the Hornbill Festival circuit, appealing to travellers who specifically want a rural, unhurried part of Nagaland.",
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
  { id: "introduction", title: "Chakhesang Naga Country", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Phek", level: 2 },
  { id: "things-to-do", title: "Terraced Fields & Shilloi Lake", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PhekGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Green terraced landscape, evoking Phek district's hillside rice terraces in Nagaland"
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
                { label: "Nagaland", href: "/blog/nagaland-travel-guide" },
                { label: "Phek", href: null },
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
                "Phek",
                "Chakhesang Naga",
                "Nagaland",
                "Terraced Fields",
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
              Phek: Terraced Fields & Chakhesang Naga Country
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Rice terraces carved into steep hillsides, Chakhesang Naga
              villages, and Nagaland's largest natural lake — a genuinely
              rural, unhurried district far from the tourist circuit.
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
                  text: "Phek district, Nagaland",
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
                  <h2>Chakhesang Naga Country</h2>
                  <p>
                    <strong>Phek</strong> is the headquarters of Phek
                    district, home to the Chakhesang Naga tribe, and one of
                    the more rural, less-visited corners of Nagaland. The
                    district's defining visual signature is its{" "}
                    <strong>terraced rice fields</strong> — particularly
                    around Khezhakeno and Chizami villages — some of the
                    most striking examples of traditional hill agriculture
                    found anywhere in the state.
                  </p>
                  <p>
                    Phek district is also home to{" "}
                    <Link href="/blog/shilloi-lake-travel-guide">
                      Shilloi Lake
                    </Link>
                    , Nagaland's largest natural lake, making the district a
                    worthwhile base for combining terraced-field views with
                    a lake excursion. Compared to Kohima or the Hornbill
                    Festival circuit, Phek remains genuinely offbeat —
                    appealing to travellers who want a quieter, more rural
                    Nagaland experience over a well-trodden tourist trail.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌾</span> Phek at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Phek, Nagaland" },
                        {
                          icon: "🧑‍🤝‍🧑",
                          label: "Tribe",
                          value: "Chakhesang Naga",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🌾",
                          label: "Known For",
                          value: "Terraced Rice Fields",
                        },
                        {
                          icon: "🏞️",
                          label: "Nearby",
                          value: "Shilloi Lake",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹3,500",
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
                  <h2>Best Time to Visit Phek</h2>
                  <p>
                    Weather and the agricultural cycle both shape when a
                    visit to Phek's terraced fields is most rewarding.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Nov",
                        emoji: "🌾",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Harvest gold — our pick",
                        text: "The terraces turn a striking golden colour around harvest time, and the weather is clear and comfortable for travel.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Cool and clear",
                        text: "Crisp hill weather, good visibility for the terraces and for Shilloi Lake, though the fields are past harvest.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌱",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Fresh planting season",
                        text: "The fields are being prepared and planted, offering a different, earlier-stage look at the terraces.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — lush but wet",
                        text: "The terraces are at their greenest, but heavy rain makes travel into this rural district considerably harder.",
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
                    <strong>Our pick:</strong> October to November — clear,
                    comfortable travel weather and the terraces at their
                    most visually striking around harvest time.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Phek</h2>
                  <ul>
                    <li>
                      <strong>From Kohima:</strong> A long drive of several
                      hours through Nagaland's hill roads — this is a real
                      journey, not a quick day trip, so set expectations
                      honestly.
                    </li>
                    <li>
                      <strong>From Dimapur:</strong> Nagaland's main air and
                      rail gateway, with a further road journey on to Phek
                      district.
                    </li>
                    <li>
                      <strong>Local transport:</strong> Arrange a vehicle in
                      advance, ideally with a local driver familiar with the
                      district's rural roads.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the distance from
                    Kohima, plan Phek as a multi-day trip rather than a
                    rushed detour — the journey alone deserves real time.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Terraced Fields & Shilloi Lake</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Terraced hillside fields evoking the Khezhakeno and Chizami rice terraces near Phek"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Khezhakeno & Chizami Terraces</h3>
                  <p>
                    The terraced rice fields around these two villages are
                    Phek's visual centrepiece — steep hillsides carved into
                    generations-old agricultural terraces, worked using
                    traditional Chakhesang farming methods. Viewpoints along
                    the approach roads offer sweeping looks over the full
                    scale of the terracing.
                  </p>
                  <h3>Shilloi Lake</h3>
                  <p>
                    Nagaland's largest natural lake sits within Phek
                    district, a scenic and genuinely remote excursion — see
                    our full{" "}
                    <Link href="/blog/shilloi-lake-travel-guide">
                      Shilloi Lake guide
                    </Link>{" "}
                    for how to combine the two.
                  </p>
                  <h3>Chakhesang Naga Village Life</h3>
                  <p>
                    Beyond the fields, the villages themselves offer a
                    genuine window into Chakhesang Naga architecture, dress,
                    and daily rural life, best experienced respectfully with
                    a local guide.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Phek</h2>
                  <p>
                    Tourist infrastructure here is genuinely limited —
                    accommodation is basic and best arranged in advance.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic guesthouses, Phek town",
                          "Village homestays",
                          "Government circuit house (where available)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: [
                          "Better-appointed district lodges",
                          "Tour-operator-arranged homestays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "Very limited",
                        picks: [
                          "No dedicated luxury properties",
                          "Consider Kohima for premium stays",
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
                        title: "Kohima to Phek",
                        color: "bg-amber-700",
                        activities: [
                          "Long drive from Kohima into Phek district",
                          "Settle in, evening at leisure",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Terraced Field Villages",
                        color: "bg-forest-600",
                        activities: [
                          "Visit Khezhakeno terraced fields",
                          "Explore Chizami village",
                          "Learn about Chakhesang Naga farming traditions",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Shilloi Lake Excursion",
                        color: "bg-sky-600",
                        activities: [
                          "Day trip to Shilloi Lake",
                          "Return to Phek or begin journey back",
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
                      <strong>Homestay kitchens:</strong> The most reliable
                      and often the most rewarding option — home-cooked
                      Chakhesang Naga meals using local ingredients.
                    </li>
                    <li>
                      <strong>Phek town eateries:</strong> Simple, limited
                      options for a quick meal before or after field visits.
                    </li>
                    <li>
                      <strong>Carry supplies for Shilloi Lake:</strong>{" "}
                      Facilities are minimal at the lake itself.
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹700", "₹2,500"],
                          ["Food/day", "₹400", "₹800"],
                          ["Local guide (per day)", "₹1,200", "₹2,500"],
                          ["Vehicle hire (round trip)", "₹4,000", "₹7,000"],
                        ].map(([exp, b, m], i) => (
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Vehicle hire runs higher here given the distance and
                    rural roads from Kohima.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Phek</h2>
                  <ul>
                    <li>
                      <strong>Set realistic expectations:</strong> This is a
                      genuinely rural district with limited tourist
                      infrastructure, not a polished sightseeing circuit.
                    </li>
                    <li>
                      <strong>Combine with Shilloi Lake:</strong> Make the
                      most of the long journey out by pairing terraced-field
                      villages with the lake.
                    </li>
                    <li>
                      <strong>Ask locally about viewpoints:</strong> The best
                      spots to see the terraces shift with the season.
                    </li>
                    <li>
                      <strong>Arrange transport in advance:</strong> Public
                      transport options thin out significantly this far from
                      Kohima.
                    </li>
                    <li>
                      <strong>Respect village etiquette:</strong> Ask before
                      photographing people, and travel with a local guide
                      where possible.
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
                          "Plan for a multi-day trip given the distance",
                          "Combine with Shilloi Lake",
                          "Arrange a vehicle and guide in advance",
                          "Ask about the best terrace viewpoints locally",
                          "Try home-cooked Chakhesang Naga meals",
                          "Travel respectfully through village areas",
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
                          "Expect Kohima-level tourist infrastructure",
                          "Underestimate the drive time from Kohima",
                          "Rely on find-on-arrival accommodation",
                          "Photograph people without asking first",
                          "Rush the terraced-field villages in one stop",
                          "Skip arranging a local guide",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Phek with{" "}
                    <Link href="/blog/shilloi-lake-travel-guide">
                      Shilloi Lake
                    </Link>{" "}
                    for a fuller regional trip. See our full{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
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
                  "Phek",
                  "Chakhesang Naga",
                  "Nagaland",
                  "Terraced Fields",
                  "Off-beat",
                  "Shilloi Lake",
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

              <RelatedPostsGrid currentSlug="phek-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="phek-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
