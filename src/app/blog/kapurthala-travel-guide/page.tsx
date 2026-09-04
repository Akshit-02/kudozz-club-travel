// src/app/blog/kapurthala-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kapurthala Travel Guide: The Paris of Punjab",
  description:
    "Complete Kapurthala guide — Jagatjit Palace modeled on Versailles, the Moorish Mosque, Elysee Palace, and why this small Punjab town is nicknamed the Paris of Punjab.",
  keywords:
    "Kapurthala travel guide, Paris of Punjab, Jagatjit Palace, Moorish Mosque Kapurthala, Elysee Palace, Maharaja Jagatjit Singh, Kapurthala architecture, how to reach Kapurthala",
  openGraph: {
    title: "Kapurthala Travel Guide: The Paris of Punjab",
    description:
      "A small Punjab town with French palaces and a Moorish mosque — the complete guide to Kapurthala's unlikely European architecture.",
    url: "https://club.kudozz.in/blog/kapurthala-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ornate palace architecture set in landscaped grounds, evoking Kapurthala's European-influenced Jagatjit Palace",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapurthala Travel Guide: The Paris of Punjab",
    description:
      "A Versailles-inspired palace and a Moorish mosque, deep in rural Punjab — the complete Kapurthala guide.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kapurthala-travel-guide",
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
          headline: "Kapurthala Travel Guide: The Paris of Punjab",
          description:
            "Complete Kapurthala guide — Jagatjit Palace modeled on Versailles, the Moorish Mosque, Elysee Palace, and why this small Punjab town is nicknamed the Paris of Punjab.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kapurthala-travel-guide",
          },
          keywords:
            "Kapurthala, Punjab, Jagatjit Palace, Moorish Mosque, Paris of Punjab",
          about: {
            "@type": "Place",
            name: "Kapurthala",
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
                name: "Kapurthala",
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
    q: "Why is Kapurthala called the \"Paris of Punjab\"?",
    a: "Maharaja Jagatjit Singh, who ruled Kapurthala in the early 20th century, had a deep fascination with French design and commissioned buildings — most notably Jagatjit Palace, partly modeled on the Palace of Versailles — that gave the town a distinctly European architectural character unlike anywhere else in Punjab.",
  },
  {
    q: "Can you go inside Jagatjit Palace?",
    a: "The palace today functions as a school (Sainik School Kapurthala), so public access to the interior is limited. Check current visiting arrangements locally, though the exterior and grounds remain a striking sight from outside.",
  },
  {
    q: "How far is Kapurthala from Amritsar and Jalandhar?",
    a: "Kapurthala is roughly 20 km from Jalandhar and about 75 km from Amritsar, making it an easy half-day side trip from either city.",
  },
  {
    q: "Is Kapurthala a standalone destination or a day trip?",
    a: "Most visitors treat it as a half-day to full-day trip from Jalandhar, given limited dedicated tourist accommodation in the town itself.",
  },
  {
    q: "What makes the Moorish Mosque unusual?",
    a: "It's built in a North African/Moorish architectural style rarely seen in Punjab, reflecting Maharaja Jagatjit Singh's eclectic international design tastes alongside his French-inspired palaces.",
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
  { id: "introduction", title: "The Paris of Punjab", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kapurthala", level: 2 },
  { id: "things-to-do", title: "Jagatjit Palace & Moorish Mosque", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KapurthalaGuidePage() {
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
              src="/images/destinations/udaipur/hero.jpg"
              alt="Ornate palace architecture set in landscaped grounds, evoking Kapurthala's European-influenced Jagatjit Palace"
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
                { label: "Kapurthala", href: null },
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
              {["Kapurthala", "Jagatjit Palace", "Punjab", "Paris of Punjab"].map(
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
              Kapurthala: The Paris of Punjab
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Versailles-inspired palace, a Moorish mosque, and a whole
              town built on one maharaja's fascination with European
              design — Kapurthala looks nothing like the rest of Punjab.
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
                  text: "Kapurthala, Punjab",
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
                  <h2>The Paris of Punjab</h2>
                  <p>
                    <strong>Kapurthala</strong> is sometimes called the
                    "Paris of Punjab" — a genuinely unusual nickname for a
                    small Punjab town, and one that's entirely earned by its
                    architecture. The reason traces back to{" "}
                    <strong>Maharaja Jagatjit Singh</strong>, who ruled the
                    princely state in the early 20th century and developed a
                    deep fascination with French design during his travels
                    abroad.
                  </p>
                  <p>
                    That fascination reshaped the town. His centrepiece,{" "}
                    <strong>Jagatjit Palace</strong>, was partly modeled on
                    the Palace of Versailles — an extraordinary sight amid
                    Punjab's flat agricultural plains. Nearby, the{" "}
                    <strong>Moorish Mosque</strong> takes its cues from North
                    African architecture instead, adding yet another
                    unexpected layer to the town's eclectic, internationally
                    inspired identity.
                  </p>
                  <p>
                    Kapurthala rewards visitors specifically interested in
                    architecture and photography — it's less a
                    checklist-heritage stop than a genuinely unusual detour
                    from the standard Punjab circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Kapurthala at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Punjab" },
                        {
                          icon: "🚗",
                          label: "From Jalandhar",
                          value: "~20 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Jagatjit Palace, Moorish Mosque",
                        },
                        {
                          icon: "🇫🇷",
                          label: "Nickname",
                          value: "Paris of Punjab",
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
                  <h2>Best Time to Visit Kapurthala</h2>
                  <p>
                    Punjab's plains climate applies here — comfortable
                    winters and hot summers shape the best window.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, clear weather is ideal for exploring the palace grounds and the mosque's exterior at a relaxed pace.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot",
                        text: "Temperatures rise sharply, making outdoor architecture photography less comfortable by midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Periodic heavy rain and humidity — manageable but check forecasts before a day trip.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "📸",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best light for photography",
                        text: "Clear winter skies give the palace's facades and the mosque's domes their best photographic light.",
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
                    clearest skies and the most flattering light for
                    photographing Kapurthala's unusual architecture.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kapurthala</h2>
                  <ul>
                    <li>
                      <strong>From Jalandhar:</strong> The closest major
                      city, roughly 20 km away — a short, easy drive.
                    </li>
                    <li>
                      <strong>From Amritsar:</strong> Roughly 75 km, a
                      comfortable side trip if already exploring that part
                      of Punjab.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Kapurthala has its own
                      railway station with regional connections.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Jalandhar
                    and treat Kapurthala as a half-day architecture-focused
                    excursion rather than planning a dedicated overnight
                    stay.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Jagatjit Palace & Moorish Mosque</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/hero.jpg"
                      alt="Palace facade and gardens, evoking Kapurthala's Jagatjit Palace"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Jagatjit Palace</h3>
                  <p>
                    Partly modeled on the Palace of Versailles, this remains
                    Kapurthala's defining landmark. It now functions as a
                    school, so interior access is limited — the exterior and
                    grounds are still the highlight for most visitors.
                  </p>
                  <h3>Moorish Mosque</h3>
                  <p>
                    Built in a striking North African/Moorish style rarely
                    seen elsewhere in Punjab, reflecting the maharaja's
                    eclectic international design tastes.
                  </p>
                  <h3>Elysee Palace</h3>
                  <p>
                    Another notable heritage building in the same
                    French-influenced architectural vein, worth a stop for
                    anyone touring the town's palace circuit.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Kapurthala has limited dedicated tourist accommodation —
                    most visitors base themselves in Jalandhar and treat
                    Kapurthala as a day trip.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Simple guesthouses in Kapurthala town",
                          "Budget hotels in Jalandhar",
                          "Railway-station-area lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Business hotels in Jalandhar",
                          "Central Jalandhar chain hotels",
                          "Comfortable stays near the highway",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Premium hotels in Jalandhar",
                          "Upscale business-district properties",
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
                  <h2>Suggested Visit Plan (Half Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Jagatjit Palace",
                        color: "bg-amber-700",
                        activities: [
                          "Photograph the palace exterior and grounds",
                          "Learn the Maharaja Jagatjit Singh backstory",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Moorish Mosque & Elysee Palace",
                        color: "bg-sky-600",
                        activities: [
                          "Visit the Moorish Mosque",
                          "Stop at Elysee Palace",
                          "Return to Jalandhar or continue onward",
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
                  <h2>What to Eat</h2>
                  <ul>
                    <li>
                      <strong>Local dhabas:</strong> Classic Punjabi staples
                      at simple roadside eateries in town.
                    </li>
                    <li>
                      <strong>Jalandhar's food scene:</strong> With
                      Kapurthala so close to Jalandhar, a fuller range of
                      restaurants is easily accessible there.
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
                            "Accommodation/night (Jalandhar)",
                            "₹900",
                            "₹2,500",
                            "₹5,500",
                          ],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          [
                            "Local transport (round trip)",
                            "₹500",
                            "₹1,200",
                            "₹2,500",
                          ],
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
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Check current access to Jagatjit
                      Palace:</strong> As it functions as a school, interior
                      visiting arrangements can change — confirm before
                      planning around it.
                    </li>
                    <li>
                      <strong>Bring a good camera:</strong> This is
                      genuinely one of Punjab's best photography-focused
                      day trips.
                    </li>
                    <li>
                      <strong>Combine with Jalandhar:</strong> Given the
                      short distance, pairing the two makes for an efficient
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
                          "Visit as a half or full day trip from Jalandhar",
                          "Photograph the palace and mosque in good light",
                          "Check current visiting rules before arrival",
                          "Combine with Amritsar if on that route",
                          "Learn the Maharaja Jagatjit Singh backstory",
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
                          "Expect full interior access to Jagatjit Palace",
                          "Plan a multi-night stay in Kapurthala itself",
                          "Skip the Moorish Mosque",
                          "Visit without checking current access rules",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Kapurthala
                    with Jalandhar or Amritsar. See our full{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
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
                  "Kapurthala",
                  "Jagatjit Palace",
                  "Punjab",
                  "Paris of Punjab",
                  "Moorish Mosque",
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

              <RelatedPostsGrid currentSlug="kapurthala-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kapurthala-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
