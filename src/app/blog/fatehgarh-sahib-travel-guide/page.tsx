// src/app/blog/fatehgarh-sahib-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Fatehgarh Sahib Guide: History & Tips",
  description:
    "Complete Fatehgarh Sahib guide — Gurdwara Fatehgarh Sahib, the martyrdom of Guru Gobind Singh's younger sons, the Shaheedi Jor Mela, nearby Sirhind, and how to visit respectfully.",
  keywords:
    "Fatehgarh Sahib travel guide, Sahibzada Zorawar Singh, Sahibzada Fateh Singh, Shaheedi Jor Mela, Sirhind, Punjab Sikh history, how to reach Fatehgarh Sahib",
  openGraph: {
    title: "Fatehgarh Sahib Guide: History & Tips",
    description:
      "One of the most solemn and significant sites in Sikh history — the complete guide to visiting Fatehgarh Sahib with the respect the site deserves.",
    url: "https://club.kudozz.in/blog/fatehgarh-sahib-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Historic stone architecture under an open sky, evoking the solemn heritage of Fatehgarh Sahib",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatehgarh Sahib Guide: History & Tips",
    description:
      "One of the most profoundly significant sites in Sikh history — the complete guide to Fatehgarh Sahib.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/fatehgarh-sahib-travel-guide",
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
          headline: "Fatehgarh Sahib Guide: History & Tips",
          description:
            "Complete Fatehgarh Sahib guide — Gurdwara Fatehgarh Sahib, the martyrdom of Guru Gobind Singh's younger sons, the Shaheedi Jor Mela, nearby Sirhind, and how to visit respectfully.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/fatehgarh-sahib-travel-guide",
          },
          keywords:
            "Fatehgarh Sahib, Sahibzada Zorawar Singh, Sahibzada Fateh Singh, Shaheedi Jor Mela, Sirhind, Punjab",
          about: {
            "@type": "Place",
            name: "Fatehgarh Sahib",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Punjab",
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
                name: "Punjab",
                item: "https://club.kudozz.in/blog/punjab-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Fatehgarh Sahib",
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
    q: "What happened at Fatehgarh Sahib?",
    a: "The site marks where the two younger sons of Guru Gobind Singh — Sahibzada Zorawar Singh and Sahibzada Fateh Singh, aged just 9 and 7 — were martyred by Mughal forces in 1705, along with their grandmother Mata Gujri, who died around the same time. It is one of the most profoundly significant events in Sikh history.",
  },
  {
    q: "When is Shaheedi Jor Mela?",
    a: "The Shaheedi Jor Mela, a major annual commemoration, is typically held in December and draws large numbers of pilgrims from across Punjab and beyond.",
  },
  {
    q: "How far is Fatehgarh Sahib from Chandigarh and Patiala?",
    a: "It's roughly 45 km from Chandigarh and about 40 km from Patiala, making it an accessible day trip from either city.",
  },
  {
    q: "Is Sirhind worth combining with a visit?",
    a: "Yes — the historic town of Sirhind, with its own layered Mughal and Sikh-era history, sits in the same area and makes a natural extension for those interested in the wider historical context.",
  },
  {
    q: "What is the appropriate way to visit such a significant historical site?",
    a: "Approach it with quiet respect rather than as a casual sightseeing stop — dress modestly, cover your head as at any gurdwara, and take time to understand the history before or during your visit.",
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
  { id: "introduction", title: "A Site of Profound Significance", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Fatehgarh Sahib", level: 2 },
  { id: "things-to-do", title: "The Gurdwara & Sirhind", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function FatehgarhSahibGuidePage() {
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
              src="/images/destinations/hampi/hero.jpg"
              alt="Historic stone architecture under an open sky, evoking the solemn heritage of Fatehgarh Sahib"
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
                { label: "Punjab", href: "/blog/punjab-travel-guide" },
                { label: "Fatehgarh Sahib", href: null },
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
                "Fatehgarh Sahib",
                "Punjab",
                "Sikh Heritage",
                "Sirhind",
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
              Fatehgarh Sahib: A Site of Profound History
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the most solemn and significant sites in Sikh history,
              honoured each year by tens of thousands of pilgrims.
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
                  text: "Fatehgarh Sahib district, Punjab",
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
                  <h2>A Site of Profound Significance</h2>
                  <p>
                    <strong>Fatehgarh Sahib</strong> is centred on{" "}
                    <strong>Gurdwara Fatehgarh Sahib</strong>, one of the most
                    solemn and profoundly significant sites in Sikh history.
                    It marks the location where the two younger sons of Guru
                    Gobind Singh — Sahibzada Zorawar Singh and Sahibzada
                    Fateh Singh, aged just 9 and 7 — were martyred by Mughal
                    forces in 1705, along with their grandmother Mata Gujri,
                    who died around the same time.
                  </p>
                  <p>
                    This event holds deep, lasting significance in Sikh
                    collective memory, and visitors should approach the site
                    with the gravity and respect it commands — this is not a
                    casual sightseeing stop, but a place of remembrance.
                  </p>
                  <p>
                    The site is commemorated annually during{" "}
                    <strong>Shaheedi Jor Mela</strong> (typically held in
                    December), a major gathering that draws large numbers of
                    pilgrims. The historic town of{" "}
                    <strong>Sirhind</strong>, with its own layered Mughal and
                    Sikh-era history, sits in the same district and makes a
                    natural extension for those interested in the wider
                    historical context.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕯️</span> Fatehgarh Sahib at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Fatehgarh Sahib district, Punjab",
                        },
                        {
                          icon: "🚗",
                          label: "From Chandigarh",
                          value: "~45 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Gurdwara Fatehgarh Sahib",
                        },
                        {
                          icon: "🕯️",
                          label: "Major Event",
                          value: "Shaheedi Jor Mela (Dec)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹3,000",
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
                  <h2>Best Time to Visit Fatehgarh Sahib</h2>
                  <p>
                    Weather comfort follows the same pattern as the rest of
                    Punjab, with one major commemorative event to plan around.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time for a general visit",
                        text: "Cool, comfortable weather for visiting the gurdwara and Sirhind without the added crowds of the December mela.",
                      },
                      {
                        season: "December",
                        emoji: "🕯️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Shaheedi Jor Mela",
                        text: "The major annual commemoration draws very large crowds of pilgrims — a powerful experience, but plan for significant crowds and limited accommodation.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around midday",
                        text: "Intense heat makes midday visits uncomfortable; early morning is preferable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid",
                        text: "Intermittent rain and high humidity; manageable but not the most comfortable window.",
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
                    <strong>Our pick:</strong> October to March for a quieter,
                    contemplative visit — or December specifically if you want
                    to witness the Shaheedi Jor Mela.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Fatehgarh Sahib</h2>
                  <ul>
                    <li>
                      <strong>By road from Chandigarh:</strong> Roughly 45 km,
                      about a 1-hour drive.
                    </li>
                    <li>
                      <strong>By road from Patiala:</strong> Roughly 40 km,
                      about a 1-hour drive — cross-link to{" "}
                      <Link href="/blog/patiala-travel-guide">Patiala</Link>{" "}
                      for a combined trip.
                    </li>
                    <li>
                      <strong>By rail:</strong> Fatehgarh Sahib is on the
                      Chandigarh-Ludhiana rail line, with regular connections.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If visiting during Shaheedi
                    Jor Mela in December, plan for significant road traffic
                    and arrive well ahead of the main commemorative events.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Gurdwara & Sirhind</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Historic architecture evoking the heritage of Fatehgarh Sahib and Sirhind, Punjab"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Gurdwara Fatehgarh Sahib</h3>
                  <p>
                    The gurdwara complex marks the site of the martyrdom, and
                    includes memorials to the Sahibzadas and Mata Gujri —
                    approach with the quiet reverence the site deserves.
                  </p>
                  <h3>Shaheedi Jor Mela</h3>
                  <p>
                    Held annually, typically in December, this major
                    commemoration draws pilgrims from across Punjab and
                    beyond, with prayers, processions, and a deeply
                    devotional atmosphere.
                  </p>
                  <h3>Sirhind</h3>
                  <p>
                    The nearby historic town of Sirhind carries its own
                    layered Mughal and Sikh-era history, worth exploring for
                    visitors who want the fuller historical context of the
                    region.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Fatehgarh Sahib</h2>
                  <p>
                    Pilgrim accommodation is available near the gurdwara, or
                    day trip from Patiala or Chandigarh.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Pilgrim Stay",
                        icon: "🛕",
                        range: "Free – ₹500/night",
                        picks: [
                          "Gurdwara guesthouse (sarai)",
                          "Donation-based accommodation",
                          "Community dining (langar) included",
                        ],
                      },
                      {
                        tier: "Budget Hotel",
                        icon: "🏨",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Local guesthouses in town",
                          "Basic hotels near the highway",
                        ],
                      },
                      {
                        tier: "Day Trip",
                        icon: "🚗",
                        range: "Stay in Patiala/Chandigarh",
                        picks: [
                          "Base in a larger nearby city",
                          "Return same day",
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
                  <h2>Suggested Visit Plan (Half to Full Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Gurdwara Fatehgarh Sahib",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive and pay respects at the gurdwara",
                          "Learn the history at the memorial complex",
                          "Take time for quiet reflection",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Sirhind Extension",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to nearby Sirhind",
                          "Explore its Mughal and Sikh-era heritage",
                          "Return to Patiala or Chandigarh",
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
                  <h2>Where to Eat Near Fatehgarh Sahib</h2>
                  <ul>
                    <li>
                      <strong>Langar at the gurdwara:</strong> A free
                      community meal, open to all visitors.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Simple Punjabi meals
                      along the highway and in the town centre.
                    </li>
                    <li>
                      <strong>Patiala or Chandigarh:</strong> Either nearby
                      city offers a wider restaurant scene for a more
                      substantial meal.
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
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Car hire from Chandigarh (round trip)", "₹1,800", "₹2,800", "₹4,000"],
                          ["Accommodation/night (if staying)", "Free (sarai)", "₹1,200", "₹2,500"],
                          ["Food/day", "Free (langar)", "₹400", "₹900"],
                          ["Entry fees", "Free", "Free", "Free"],
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
                    * Entry to the gurdwara is free; car hire is the main cost
                    for a day trip from Chandigarh or Patiala.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Fatehgarh Sahib</h2>
                  <ul>
                    <li>
                      <strong>Approach with reverence:</strong> This is a site
                      of deep historical and emotional significance — visit
                      accordingly, not as a casual sightseeing stop.
                    </li>
                    <li>
                      <strong>Cover your head:</strong> Required at the
                      gurdwara, as at any Sikh shrine.
                    </li>
                    <li>
                      <strong>Plan around Shaheedi Jor Mela:</strong> If
                      visiting in December, expect very large crowds and plan
                      logistics accordingly.
                    </li>
                    <li>
                      <strong>Combine with Sirhind:</strong> The nearby
                      historic town rounds out the visit with additional
                      historical context.
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
                          "Learn the history before or during your visit",
                          "Cover your head and dress modestly",
                          "Combine with a Sirhind extension",
                          "Plan ahead if visiting during Shaheedi Jor Mela",
                          "Approach the site with quiet reflection",
                          "Pair with Patiala for a fuller day trip",
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
                          "Treat the visit as a casual sightseeing stop",
                          "Skip head covering or modest dress",
                          "Arrive during Shaheedi Jor Mela without planning ahead",
                          "Rush through without understanding the history",
                          "Expect large hotel infrastructure locally",
                          "Overlook Sirhind if you have the time",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Fatehgarh
                    Sahib with{" "}
                    <Link href="/blog/patiala-travel-guide">Patiala</Link> for
                    a fuller day exploring this part of Punjab. See our full{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
                    </Link>{" "}
                    for the wider region.
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
                  "Fatehgarh Sahib",
                  "Punjab",
                  "Sikh Heritage",
                  "Sirhind",
                  "Shaheedi Jor Mela",
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

              <RelatedPostsGrid currentSlug="fatehgarh-sahib-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="fatehgarh-sahib-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
