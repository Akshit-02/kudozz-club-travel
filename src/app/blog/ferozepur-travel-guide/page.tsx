// src/app/blog/ferozepur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ferozepur Travel Guide: Hussainiwala & Tips",
  description:
    "Complete Ferozepur guide — the National Martyrs Memorial at Hussainiwala, a quieter alternative to the Wagah Border ceremony, how to reach from Amritsar, and a full visit plan.",
  keywords:
    "Ferozepur travel guide, Hussainiwala, National Martyrs Memorial, Bhagat Singh Rajguru Sukhdev, Hussainiwala Beating Retreat, Ferozepur border, how to reach Ferozepur, Punjab border towns",
  openGraph: {
    title: "Ferozepur Travel Guide: Hussainiwala & Tips",
    description:
      "A border town holding one of India's most solemn patriotic memorials, and a quieter alternative to the famous Wagah Border ceremony — the complete Ferozepur guide.",
    url: "https://club.kudozz.in/blog/ferozepur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Open plains and civic architecture, evoking Ferozepur's border-town character in Punjab",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferozepur Travel Guide: Hussainiwala & Tips",
    description:
      "A solemn martyrs' memorial and a quieter border ceremony than Wagah — the complete Ferozepur guide.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ferozepur-travel-guide",
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
          headline: "Ferozepur Travel Guide: Hussainiwala & Tips",
          description:
            "Complete Ferozepur guide — the National Martyrs Memorial at Hussainiwala, a quieter alternative to the Wagah Border ceremony, how to reach from Amritsar, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/ferozepur-travel-guide",
          },
          keywords:
            "Ferozepur, Hussainiwala, National Martyrs Memorial, Punjab, border town",
          about: {
            "@type": "Place",
            name: "Ferozepur",
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
                name: "Ferozepur",
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
    q: "How does Hussainiwala's ceremony compare to Wagah?",
    a: "Hussainiwala hosts its own Beating Retreat ceremony at the border, with the same military pageantry and flag-lowering ritual as Wagah but on a much smaller scale — considerably fewer crowds and a more intimate atmosphere, making it a genuine alternative for travellers who find Wagah's scale overwhelming.",
  },
  {
    q: "Who are the martyrs commemorated at Hussainiwala?",
    a: "The National Martyrs Memorial marks the site where Bhagat Singh, Rajguru, and Sukhdev — three of India's most revered independence-movement figures — were cremated, making it one of the country's most significant patriotic pilgrimage sites.",
  },
  {
    q: "How far is Ferozepur from Amritsar?",
    a: "Ferozepur is roughly 100 km from Amritsar by road, a comfortable half-day trip that can be combined with other Punjab border-region stops.",
  },
  {
    q: "Is it as crowded as Wagah?",
    a: "No — Hussainiwala draws a fraction of Wagah's visitor numbers, which is precisely its appeal for travellers who want the border-ceremony experience without the intense crowds and noise of the more famous site.",
  },
  {
    q: "Is it worth visiting if you've already done Wagah?",
    a: "Yes, particularly for the martyrs' memorial itself, which has its own distinct historical weight separate from the border-ceremony spectacle — many visitors find the memorial the more moving part of a Ferozepur visit.",
  },
  {
    q: "What is the best time to visit Ferozepur?",
    a: "October to March offers the most comfortable weather for outdoor sightseeing and the evening ceremony; Punjab's summer months bring intense heat that makes daytime visits uncomfortable.",
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
  { id: "introduction", title: "A Border Town with Deep History", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ferozepur", level: 2 },
  { id: "things-to-do", title: "Hussainiwala & the Cantonment", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function FerozepurGuidePage() {
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
              src="/images/destinations/chandigarh/hero.jpg"
              alt="Open plains and civic architecture, evoking Ferozepur's border-town character in Punjab"
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
                { label: "Ferozepur", href: null },
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
                "Ferozepur",
                "Hussainiwala",
                "Punjab",
                "Border Town",
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
              Ferozepur: Hussainiwala Memorial & Border Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A solemn martyrs&apos; memorial and a border ceremony with all
              the pageantry of Wagah, at a fraction of the crowd.
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
                  text: "Ferozepur, Punjab",
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
                  <h2>A Border Town with Deep History</h2>
                  <p>
                    <strong>Ferozepur</strong> sits close to the India-Pakistan
                    border, carrying significant colonial and Partition-era
                    history alongside a role in India&apos;s independence
                    movement. Its most notable site is{" "}
                    <strong>Hussainiwala</strong>, home to the{" "}
                    <strong>National Martyrs Memorial</strong>, which
                    commemorates Bhagat Singh, Rajguru, and Sukhdev — three of
                    India&apos;s most revered independence-movement figures,
                    whose cremation took place at this exact site.
                  </p>
                  <p>
                    Hussainiwala also hosts its own Beating Retreat ceremony at
                    the border, mirroring the pageantry of the famous{" "}
                    <strong>Wagah Border</strong> ceremony near Amritsar but on
                    a considerably smaller, quieter scale — a genuine option
                    for travellers who want the experience without Wagah&apos;s
                    crowds.
                  </p>
                  <p>
                    The wider Ferozepur Cantonment area reflects the
                    town&apos;s continued military significance as a garrison
                    town close to the international border.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🇮🇳</span> Ferozepur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "Punjab, India" },
                        {
                          icon: "🚗",
                          label: "From Amritsar",
                          value: "~100 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🕯️",
                          label: "Known For",
                          value: "Martyrs Memorial",
                        },
                        {
                          icon: "🎖️",
                          label: "Ceremony",
                          value: "Hussainiwala Retreat",
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
                  <h2>Best Time to Visit Ferozepur</h2>
                  <p>
                    Punjab&apos;s continental climate means comfort levels vary
                    sharply across the year.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for daytime sightseeing and the evening border ceremony.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Punjab's summer heat makes daytime visits genuinely uncomfortable; the evening ceremony is still viable but the day is best spent indoors.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid",
                        text: "Intermittent rain and high humidity; manageable but not the most comfortable window.",
                      },
                      {
                        season: "Republic Day / Independence Day",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Extra patriotic atmosphere",
                        text: "The memorial and border ceremony carry extra significance around these national holidays, though expect larger local crowds.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    daytime temperatures for the memorial and a pleasant
                    evening for the border ceremony.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ferozepur</h2>
                  <ul>
                    <li>
                      <strong>By road from Amritsar:</strong> Roughly 100 km,
                      about a 2-hour drive — the most common way visitors
                      combine Ferozepur with an Amritsar-based Punjab trip.
                    </li>
                    <li>
                      <strong>By rail:</strong> Ferozepur has its own railway
                      station with connections to major Punjab cities and
                      onward to Delhi.
                    </li>
                    <li>
                      <strong>By road from Chandigarh:</strong> Roughly 220 km,
                      a longer but manageable day&apos;s drive if combining
                      with other Punjab stops.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Time your arrival for late
                    afternoon so you can see the memorial in daylight and stay
                    on for the evening Beating Retreat ceremony.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Hussainiwala & the Cantonment</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Open plains near the India-Pakistan border at Ferozepur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>National Martyrs Memorial</h3>
                  <p>
                    The memorial at Hussainiwala marks the cremation site of
                    Bhagat Singh, Rajguru, and Sukhdev, and stands as one of
                    the most solemn patriotic pilgrimage sites in India — a
                    place for quiet reflection as much as sightseeing.
                  </p>
                  <h3>Hussainiwala Beating Retreat Ceremony</h3>
                  <p>
                    Held daily at the border, the ceremony features the same
                    military drill, flag-lowering ritual, and patriotic
                    energy as Wagah, staged for a considerably smaller crowd —
                    a good option if you want the experience without the
                    intensity of Wagah&apos;s scale.
                  </p>
                  <h3>Ferozepur Cantonment</h3>
                  <p>
                    The Cantonment area reflects the town&apos;s ongoing
                    military role as a garrison close to the international
                    border, with a distinct, orderly civic character.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Ferozepur</h2>
                  <p>
                    Accommodation is modest — many visitors treat Ferozepur as
                    a day trip from Amritsar rather than an overnight stop.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏨",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Local guesthouses",
                          "Budget hotels near the station",
                          "Simple lodges in the city centre",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏩",
                        range: "₹2,000–₹3,500/night",
                        picks: [
                          "Business hotels in Ferozepur city",
                          "Highway hotels on the Amritsar road",
                          "Family-run guesthouses",
                        ],
                      },
                      {
                        tier: "Day Trip",
                        icon: "🚗",
                        range: "Stay in Amritsar",
                        picks: [
                          "Base yourself in Amritsar",
                          "Return same evening after the ceremony",
                          "Combine with other border-region stops",
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
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Afternoon",
                        title: "Hussainiwala Memorial",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Amritsar or Ferozepur city",
                          "Visit the National Martyrs Memorial",
                          "Learn the history at the small museum on site",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Border Ceremony",
                        color: "bg-sky-600",
                        activities: [
                          "Arrive early for a good viewing spot",
                          "Watch the Beating Retreat ceremony",
                          "Return to Amritsar or overnight locally",
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
                    * Combine with a wider Amritsar-based Punjab trip,
                    including the{" "}
                    <Link href="/blog/punjab-travel-guide">
                      full Punjab travel guide
                    </Link>{" "}
                    for the wider region.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Ferozepur</h2>
                  <ul>
                    <li>
                      <strong>Local dhabas:</strong> Classic Punjabi highway
                      dhabas along the Amritsar road serve hearty thali meals
                      and fresh rotis.
                    </li>
                    <li>
                      <strong>City-centre restaurants:</strong> Ferozepur city
                      has a handful of proper sit-down restaurants for a more
                      substantial meal.
                    </li>
                    <li>
                      <strong>Amritsar as a food base:</strong> If day-tripping
                      from Amritsar, its far larger food scene makes an easy
                      bookend to the trip.
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
                          ["Car hire from Amritsar (round trip)", "₹2,500", "₹3,500", "₹5,000"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Local transport", "₹200", "₹500", "₹1,000"],
                          ["Entry (memorial/ceremony)", "Free", "Free", "Free"],
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
                    * Entry to both the memorial and the border ceremony is
                    free; car hire is the main cost for a day trip from
                    Amritsar.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ferozepur</h2>
                  <ul>
                    <li>
                      <strong>Carry ID:</strong> Border-area security checks
                      are routine — carry a valid photo ID at all times.
                    </li>
                    <li>
                      <strong>Arrive early for the ceremony:</strong> Even with
                      smaller crowds than Wagah, a good viewing spot is worth
                      arriving 30–45 minutes ahead for.
                    </li>
                    <li>
                      <strong>Treat the memorial with respect:</strong> This is
                      a solemn site of national significance — dress and
                      behave accordingly.
                    </li>
                    <li>
                      <strong>Combine with Amritsar:</strong> Ferozepur works
                      best as a day trip bookended by an Amritsar stay.
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
                          "Carry photo ID for security checks",
                          "Arrive early for the border ceremony",
                          "Visit the memorial with quiet respect",
                          "Combine with an Amritsar-based trip",
                          "Check current ceremony timings before travelling",
                          "Carry water and sun protection in warmer months",
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
                          "Expect Wagah-level infrastructure or crowds",
                          "Skip carrying ID near the border",
                          "Visit during peak summer heat if avoidable",
                          "Rush the memorial visit — take your time",
                          "Forget the ceremony is weather-dependent",
                          "Assume overnight stays are easy to find locally",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Ferozepur with
                    Sikh-heritage stops like{" "}
                    <Link href="/blog/tarn-taran-travel-guide">
                      Tarn Taran Sahib
                    </Link>{" "}
                    on the way back to Amritsar. See our full{" "}
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
                  "Ferozepur",
                  "Hussainiwala",
                  "Punjab",
                  "Border Town",
                  "National Martyrs Memorial",
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

              <RelatedPostsGrid currentSlug="ferozepur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ferozepur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
