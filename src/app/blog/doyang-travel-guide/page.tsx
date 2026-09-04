// src/app/blog/doyang-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Doyang Guide: Amur Falcon Capital of the World",
  description:
    "Complete Doyang guide — the annual Amur falcon migration, the Wokha community conservation story, when millions of raptors gather at the reservoir, how to reach, and a full visit plan.",
  keywords:
    "Doyang travel guide, Amur Falcon Nagaland, Doyang Reservoir, Wokha district, Amur falcon migration, bird watching Nagaland, Doyang best time to visit, falcon conservation Nagaland",
  openGraph: {
    title: "Doyang Guide: Amur Falcon Capital of the World",
    description:
      "Millions of migratory raptors, a river reservoir in Wokha district, and one of conservation's great community-led turnaround stories — the complete Doyang guide.",
    url: "https://club.kudozz.in/blog/doyang-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm reservoir surrounded by hills, evoking Doyang's river dam setting in Wokha district, Nagaland",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Doyang Guide: Amur Falcon Capital of the World",
    description:
      "One of the largest gatherings of migratory raptors on Earth, and a genuine community conservation success story — the complete Doyang guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/doyang-travel-guide",
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
          headline: "Doyang Guide: Amur Falcon Capital of the World",
          description:
            "Complete Doyang guide — the annual Amur falcon migration, the Wokha community conservation story, when millions of raptors gather at the reservoir, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/doyang-travel-guide",
          },
          keywords:
            "Doyang, Amur Falcon, Wokha, Nagaland, bird migration, conservation",
          about: {
            "@type": "Place",
            name: "Doyang",
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
                name: "Doyang",
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
    q: "When exactly do the Amur falcons arrive at Doyang?",
    a: "Late October through November is the window to plan around. This is when millions of Amur falcons roost around Doyang Reservoir on their epic migration from Siberia and Mongolia toward southern Africa — visiting outside this window means missing the falcons entirely.",
  },
  {
    q: "How many birds actually gather here?",
    a: "Doyang is considered one of the largest congregations of migratory birds of prey anywhere in the world, with estimates historically running into the millions of Amur falcons roosting in the area during peak season.",
  },
  {
    q: "What happened with the historical hunting, and how did conservation efforts change things?",
    a: "The same congregation that draws birdwatchers today was once the site of large-scale hunting of the falcons by local communities. A community-led conservation shift — driven by Wokha villagers working alongside conservation groups including WWF and government agencies — turned Doyang from a hunting ground into a protected roosting site, now held up as a genuine global conservation success story.",
  },
  {
    q: "How far is Doyang from Kohima or Dimapur?",
    a: "Doyang sits in Wokha district, reached by road from either Kohima or Dimapur via Wokha town, the practical gateway for the reservoir.",
  },
  {
    q: "Is Doyang worth visiting outside the migration season?",
    a: "The reservoir and surrounding hills have a quiet scenic appeal year-round, but the singular draw — the falcon gathering — is strictly an October-November phenomenon. Most visitors plan specifically around that window.",
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
  { id: "introduction", title: "The Falcon Capital of the World", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Doyang", level: 2 },
  { id: "things-to-do", title: "The Migration & Conservation Story", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DoyangGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Calm reservoir surrounded by hills, evoking Doyang's river dam setting in Wokha district, Nagaland"
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
                { label: "Doyang", href: null },
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
                "Doyang",
                "Amur Falcon",
                "Wokha",
                "Nagaland",
                "Bird Migration",
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
              Doyang: Amur Falcon Capital of the World
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet river reservoir in Wokha district that transforms every
              October into one of the largest gatherings of migratory birds
              of prey anywhere on Earth — and a genuine conservation
              turnaround story behind it.
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
                  text: "Wokha district, Nagaland",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>The Falcon Capital of the World</h2>
                  <p>
                    <strong>Doyang</strong>, centred on the Doyang River and
                    its reservoir in Wokha district, is a genuinely
                    extraordinary natural spectacle. Every October and
                    November, millions of{" "}
                    <strong>Amur falcons</strong> — small, fast raptors on an
                    epic migration from breeding grounds in Siberia and
                    Mongolia all the way to southern Africa — gather here to
                    roost, making Doyang one of the largest congregations of
                    migratory birds of prey found anywhere in the world.
                  </p>
                  <p>
                    What makes Doyang's story even more remarkable is what
                    came before: this same congregation was once the site of
                    large-scale hunting of the falcons by local communities.
                    A community-led conservation turnaround — driven by
                    Wokha villagers working alongside conservation
                    organisations including WWF and government agencies —
                    transformed the region from a hunting ground into a
                    protected roosting site. Doyang is now held up as a
                    genuine global conservation success story, and that
                    human story is as much a part of a visit here as the
                    birds themselves.
                  </p>
                  <p>
                    Outside the migration window, Doyang is a quiet reservoir
                    set among forested hills — pleasant, but not the reason
                    most travellers make the journey out to Wokha district.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦅</span> Doyang at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Wokha, Nagaland" },
                        {
                          icon: "🚗",
                          label: "Gateway",
                          value: "Wokha town",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Nov",
                        },
                        {
                          icon: "🦅",
                          label: "Known For",
                          value: "Amur Falcon Migration",
                        },
                        {
                          icon: "🌍",
                          label: "Significance",
                          value: "Global Conservation Story",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹4,000",
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
                  <h2>Best Time to Visit Doyang</h2>
                  <p>
                    Doyang's calendar revolves almost entirely around one
                    narrow window — timing is the single most important
                    planning factor here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Nov",
                        emoji: "🦅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "The falcon window — our pick",
                        text: "The Amur falcons roost here in vast numbers during this window. This is the entire reason to visit Doyang, and outside it the falcons simply aren't present.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cool, quiet, falcon-free",
                        text: "Pleasant hill weather and a peaceful reservoir, but the falcons have moved on toward Africa by this point.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, off-season",
                        text: "A quiet time to see the reservoir and surrounding hills without any wildlife-migration draw.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon",
                        text: "Heavy rain makes travel into Wokha district less comfortable, and this is well before the falcons arrive.",
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
                    <strong>Our pick:</strong> Late October through November,
                    without exception — this is a single-purpose destination
                    built entirely around the falcon migration window.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Doyang</h2>
                  <ul>
                    <li>
                      <strong>Via Wokha town:</strong> The practical gateway
                      to Doyang, reachable by road from both Kohima and
                      Dimapur, with the reservoir a further drive from town.
                    </li>
                    <li>
                      <strong>From Kohima:</strong> A road journey of several
                      hours through Nagaland's hill terrain — arrange a
                      vehicle in advance given the limited public transport
                      options this far into Wokha district.
                    </li>
                    <li>
                      <strong>From Dimapur:</strong> Dimapur's airport is the
                      nearest air link for most travellers, with a road
                      journey onward to Wokha and Doyang.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a vehicle and local
                    guide through a Wokha-based operator in advance —
                    demand rises sharply during the short October-November
                    window when the falcons are present.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Migration & Conservation Story</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Reservoir landscape evoking Doyang's roosting grounds for migratory Amur falcons"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Amur Falcon Migration</h3>
                  <p>
                    Amur falcons breed across Siberia and Mongolia and
                    migrate an extraordinary distance to wintering grounds in
                    southern Africa — one of the longest migratory routes of
                    any raptor species. Doyang sits along this route as a
                    critical stopover, where the birds gather in the
                    millions to roost before continuing their journey. Watching
                    thousands of falcons wheel and settle into the trees at
                    dusk is the singular experience that draws visitors here.
                  </p>
                  <h3>The Conservation Turnaround</h3>
                  <p>
                    For years, this same gathering was targeted by
                    large-scale hunting from surrounding villages. A
                    community-led shift — local Wokha villagers partnering
                    with conservation organisations including WWF and
                    government wildlife agencies — turned hunters into
                    protectors, and Doyang is now cited internationally as a
                    model for community-driven wildlife conservation. Local
                    guides who were part of this shift can offer visitors a
                    far richer understanding of the story than the birds
                    alone convey.
                  </p>
                  <h3>The Doyang Reservoir</h3>
                  <p>
                    Beyond the falcons, the reservoir itself sits in a
                    peaceful setting of forested Wokha hills, worth a slow
                    walk or boat ride if time allows around the main
                    birdwatching activity.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is modest and concentrated in Wokha town,
                    with limited options closer to the reservoir itself.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,500/night",
                        picks: [
                          "Basic guesthouses, Wokha town",
                          "Government circuit house (where available)",
                          "Simple homestays near the reservoir",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: [
                          "Better-appointed Wokha lodges",
                          "Tour-operator-arranged stays",
                          "Seasonal migration-camp packages",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "Limited availability",
                        picks: [
                          "No dedicated luxury properties",
                          "Premium options via Kohima day trips",
                          "Curated small-group tour packages",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Evening Roost",
                        color: "bg-amber-700",
                        activities: [
                          "Travel from Kohima or Dimapur to Wokha",
                          "Settle in, meet local guide",
                          "Evening at the reservoir for the falcon roost",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Dawn Flight & Conservation Story",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning falcon departure watch",
                          "Meet community members from the conservation effort",
                          "Return journey or extend into wider Wokha district",
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
                    * Dawn and dusk are the two key windows for falcon
                    activity — plan around both if possible.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Most Wokha
                      accommodation serves home-style Naga meals to guests,
                      the most reliable option given limited standalone
                      restaurants.
                    </li>
                    <li>
                      <strong>Local eateries in Wokha town:</strong> Simple
                      Naga and North Indian fare, useful before heading out
                      to the reservoir.
                    </li>
                    <li>
                      <strong>Carry your own for the reservoir itself:</strong>{" "}
                      Facilities right at the birdwatching spots are minimal,
                      so pack water and snacks.
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
                          {["Expense", "Budget", "Mid-Range", "Notes"].map(
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
                            "Accommodation/night",
                            "₹800",
                            "₹2,200",
                            "Wokha town",
                          ],
                          ["Food/day", "₹400", "₹800", "Simple local fare"],
                          [
                            "Local guide (per day)",
                            "₹1,500",
                            "₹3,000",
                            "Essential for the reservoir areas",
                          ],
                          [
                            "Vehicle hire (round trip)",
                            "₹3,000",
                            "₹6,000",
                            "From Kohima or Dimapur",
                          ],
                        ].map(([exp, b, m, n], i) => (
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
                              {n}
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
                    * A local guide is genuinely worth the cost here — much
                    of the value of a Doyang visit comes from the
                    conservation story, which is best told by people who
                    lived through it.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Doyang</h2>
                  <ul>
                    <li>
                      <strong>Timing is everything:</strong> Visiting outside
                      October-November means the falcons simply won't be
                      there — there is no substitute experience the rest of
                      the year.
                    </li>
                    <li>
                      <strong>Book ahead for peak weeks:</strong> Guides and
                      vehicles get booked up quickly during the short
                      migration window.
                    </li>
                    <li>
                      <strong>Bring binoculars and a zoom lens:</strong> The
                      falcons roost at a distance, and decent optics make a
                      real difference.
                    </li>
                    <li>
                      <strong>Engage local guides for the conservation
                      story:</strong> Many were part of the community shift
                      themselves and can explain it far better than any
                      sign or brochure.
                    </li>
                    <li>
                      <strong>Dawn and dusk matter most:</strong> Falcon
                      activity peaks at the reservoir around sunrise
                      departures and sunset roosting.
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
                          "Plan the trip specifically for late Oct–Nov",
                          "Book a local guide and vehicle well in advance",
                          "Bring binoculars and a camera with reasonable zoom",
                          "Ask guides about the conservation shift story",
                          "Visit at both dawn and dusk for the best activity",
                          "Carry water and snacks for the reservoir",
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
                          "Visit outside Oct–Nov expecting to see falcons",
                          "Show up without pre-arranged transport",
                          "Expect luxury accommodation in Wokha district",
                          "Disturb roosting birds by getting too close",
                          "Skip the local guide — the story is half the visit",
                          "Rely on find-on-arrival stays during peak weeks",
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
                    <strong>🗺️ Extend the trip:</strong> Doyang works well as
                    a focused add-on to a wider Nagaland itinerary. See our
                    full{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
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
                {[
                  "Doyang",
                  "Amur Falcon",
                  "Wokha",
                  "Nagaland",
                  "Bird Migration",
                  "Conservation",
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

              <RelatedPostsGrid currentSlug="doyang-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="doyang-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
