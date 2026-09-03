// src/app/blog/vemulawada-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Vemulawada Temple Guide: Darshan & Tips",
  description:
    "Complete Vemulawada guide — the Sri Raja Rajeswara Swamy temple, its dual Shiva-Vishnu shrines, Kartika Masam significance, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Vemulawada travel guide, Sri Raja Rajeswara Swamy temple, Dakshina Kashi, Rajanna Sircilla, Telangana temples, Kartika Masam, how to reach Vemulawada",
  openGraph: {
    title: "Vemulawada Temple Guide: Darshan & Tips",
    description:
      "Known locally as the 'Dakshina Kashi' — a Shiva temple sharing its complex with a Vishnu shrine, and one of Telangana's most significant pilgrimage towns.",
    url: "https://club.kudozz.in/blog/vemulawada-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/gokarna/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Temple-town coastline mood image, evoking Vemulawada's pilgrimage character",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vemulawada Temple Guide: Darshan & Tips",
    description:
      "Known locally as the 'Dakshina Kashi' — a Shiva temple sharing its complex with a Vishnu shrine, and one of Telangana's most significant pilgrimage towns.",
    images: ["/images/destinations/gokarna/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/vemulawada-travel-guide",
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
          headline: "Vemulawada Temple Guide: Darshan & Tips",
          description:
            "Complete Vemulawada guide — the Sri Raja Rajeswara Swamy temple, its dual Shiva-Vishnu shrines, Kartika Masam significance, how to reach from Hyderabad, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/gokarna/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/vemulawada-travel-guide",
          },
          keywords:
            "Vemulawada, Sri Raja Rajeswara Swamy, Dakshina Kashi, Telangana temples, Kartika Masam",
          about: {
            "@type": "Place",
            name: "Vemulawada",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog/telangana-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Vemulawada",
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
    q: "How far is Vemulawada from Hyderabad?",
    a: "Vemulawada is roughly 150 km from Hyderabad in Rajanna Sircilla district, about a 3-hour drive, or accessible by rail with onward road transport.",
  },
  {
    q: "What does 'Dakshina Kashi' mean?",
    a: "It translates roughly to 'Varanasi of the South' — a title locally applied to Vemulawada's Sri Raja Rajeswara Swamy temple to reflect its considerable religious significance for Shiva devotees in the region.",
  },
  {
    q: "Is Vemulawada a day trip from Hyderabad?",
    a: "Yes, most visitors complete a comfortable day trip from Hyderabad, though it can also be combined with other Rajanna Sircilla or Karimnagar district stops for a longer regional itinerary.",
  },
  {
    q: "What is the best time to visit Vemulawada?",
    a: "October to February offers pleasant weather generally. The Kartika Masam period (typically October-November) is considered especially significant for devotees, though it also brings larger crowds.",
  },
  {
    q: "What is Kartika Masam?",
    a: "Kartika Masam is a sacred Hindu lunar month, generally falling in October-November, considered especially auspicious for Shiva worship — visiting Vemulawada during this period adds meaningful devotional atmosphere, though expect more crowds than usual.",
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
  { id: "introduction", title: "The Dakshina Kashi of Telangana", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vemulawada", level: 2 },
  { id: "things-to-do", title: "Temple & Rituals", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function VemulawadaGuidePage() {
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
              src="/images/destinations/gokarna/hero.jpg"
              alt="Temple-town coastline mood image, evoking Vemulawada's pilgrimage character"
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
                { label: "Telangana", href: "/blog/telangana-travel-guide" },
                { label: "Vemulawada", href: null },
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
                "Vemulawada",
                "Shiva Temple",
                "Rajanna Sircilla",
                "Telangana",
                "Pilgrimage",
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
              Vemulawada: Temple Darshan & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Known locally as the "Dakshina Kashi," Vemulawada pairs a major
              Shiva shrine with a Vishnu temple in the same complex — one of
              Telangana's most significant, and least crowded, pilgrimage
              towns.
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
                  text: "Rajanna Sircilla, Telangana",
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
                  <h2>The Dakshina Kashi of Telangana</h2>
                  <p>
                    <strong>Vemulawada</strong>, roughly 150 km from
                    Hyderabad in Rajanna Sircilla district, is a temple town
                    centered on the{" "}
                    <strong>Sri Raja Rajeswara Swamy Temple</strong>, a major
                    Shiva shrine sometimes referred to locally as{" "}
                    <strong>"Dakshina Kashi"</strong> — the "Varanasi of the
                    South" — for its considerable religious significance.
                  </p>
                  <p>
                    Unusually for a single temple complex, Vemulawada also
                    houses a shrine to{" "}
                    <strong>Sri Anantha Padmanabha Swamy</strong> (Vishnu)
                    within the same premises, giving the site a dual
                    Shiva-Vishnu significance that draws devotees of both
                    traditions.
                  </p>
                  <p>
                    Compared to Telangana's more heavily promoted temple
                    circuits, Vemulawada sees a steadier, more local flow of
                    pilgrims rather than large tourist crowds — making for an
                    unhurried, genuinely devotional visit within the wider{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana
                    </Link>{" "}
                    temple landscape.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Vemulawada at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Rajanna Sircilla, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~150 km, ~3 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🕉️",
                          label: "Deity",
                          value: "Sri Raja Rajeswara Swamy",
                        },
                        {
                          icon: "✨",
                          label: "Known As",
                          value: "Dakshina Kashi",
                        },
                        {
                          icon: "🗓️",
                          label: "Best Season",
                          value: "Kartika Masam",
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
                  <h2>Best Time to Visit Vemulawada</h2>
                  <p>
                    Weather and the Hindu lunar calendar both matter for
                    timing a visit here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for the temple visit and any time spent in the town.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — early visits better",
                        text: "Temperatures climb; an early-morning or evening darshan is more comfortable than a midday visit.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — generally manageable",
                        text: "Rain is moderate for the region and doesn't significantly disrupt a temple visit.",
                      },
                      {
                        season: "Kartika Masam",
                        emoji: "🕉️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Most auspicious period",
                        text: "This sacred lunar month, typically Oct-Nov, is considered especially significant for Shiva worship here — expect more devotees than usual.",
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
                    <strong>Our pick:</strong> A visit during Kartika Masam if
                    your dates allow it — otherwise, any weekday between
                    November and February offers a calm, comfortable
                    experience.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Vemulawada</h2>
                  <p>
                    Vemulawada is well connected to Hyderabad and the wider
                    northern Telangana road/rail network.
                  </p>
                  <ul>
                    <li>
                      <strong>By road:</strong> Roughly 150 km from Hyderabad,
                      about a 3-hour drive via NH563 through Karimnagar.
                    </li>
                    <li>
                      <strong>By rail:</strong> Vemulawada has its own railway
                      station with connections via the Karimnagar/Sircilla
                      line, useful for those preferring not to drive.
                    </li>
                    <li>
                      <strong>Combining with nearby stops:</strong>
                      Rajanna Sircilla district has other local sights worth
                      folding into the same trip if you have extra time.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your schedule allows,
                    align your visit with Kartika Masam for a noticeably
                    richer devotional atmosphere — just expect a busier
                    temple than usual.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple & Rituals</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/gokarna/hero.jpg"
                      alt="Temple-town mood image standing in for Vemulawada's pilgrimage setting"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Sri Raja Rajeswara Swamy Temple</h3>
                  <p>
                    The main Shiva shrine, the reason for the town's
                    "Dakshina Kashi" reputation, draws steady devotee traffic
                    for daily and special rituals throughout the year.
                  </p>
                  <h3>Sri Anantha Padmanabha Swamy Shrine</h3>
                  <p>
                    Sharing the same temple complex, this Vishnu shrine gives
                    Vemulawada a dual religious significance uncommon for a
                    single site — many visitors pay respects at both in the
                    same visit.
                  </p>
                  <h3>Temple Rituals & Kartika Masam</h3>
                  <p>
                    Regular abhishekams and aartis run through the day; during{" "}
                    <strong>Kartika Masam</strong>, additional rituals and a
                    noticeably larger devotee turnout add to the atmosphere.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Vemulawada has modest pilgrim-focused accommodation;
                    Karimnagar town, roughly 40 km away, offers a wider range
                    if you want more options.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,400/night",
                        picks: [
                          "Temple guesthouses/choultries",
                          "Basic lodges in town",
                          "Simple stays near the bus stand",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Devasthanam-run guesthouses",
                          "Small hotels in Vemulawada",
                          "Better range of hotels in Karimnagar",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌇",
                        range: "Base in Karimnagar/Hyderabad",
                        picks: [
                          "Limited premium options locally",
                          "Karimnagar has better business hotels",
                          "Or day-trip from Hyderabad instead",
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
                  <h2>Suggested Visit Plan (Day Trip)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive & Darshan",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Hyderabad early",
                          "Sri Raja Rajeswara Swamy Temple darshan",
                          "Visit the Anantha Padmanabha Swamy shrine",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return or Extend",
                        color: "bg-sky-600",
                        activities: [
                          "Lunch in town or Karimnagar",
                          "Optional: explore other Rajanna Sircilla sights",
                          "Return to Hyderabad by evening",
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
                      <strong>Temple prasadam:</strong> Simple pilgrim meal
                      services are available near the temple.
                    </li>
                    <li>
                      <strong>Local vegetarian eateries:</strong> A handful
                      of straightforward restaurants near the temple road
                      handle everyday meals.
                    </li>
                    <li>
                      <strong>Karimnagar for a wider choice:</strong> The
                      nearby town has a better spread of restaurants if you
                      want more variety.
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
                            "Car hire from Hyderabad (round trip)",
                            "₹5,000",
                            "₹7,000",
                            "₹9,500",
                          ],
                          ["Food", "₹300", "₹700", "₹1,200"],
                          ["Offerings/prasadam", "₹100", "₹300", "₹500"],
                          [
                            "Accommodation (if staying overnight)",
                            "₹800",
                            "₹2,000",
                            "₹4,000",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Most visitors day-trip from Hyderabad, so the
                    accommodation line is optional.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Vemulawada</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> Traditional attire is
                      expected at both shrines within the complex.
                    </li>
                    <li>
                      <strong>Use footwear counters:</strong> Footwear isn't
                      allowed inside the temple; deposit counters are
                      available near the entrance.
                    </li>
                    <li>
                      <strong>Time it for Kartika Masam if possible:</strong>{" "}
                      Adds meaningful devotional atmosphere, though expect
                      more crowds than a regular day.
                    </li>
                    <li>
                      <strong>Combine with Karimnagar:</strong> Useful for a
                      wider choice of stays and restaurants if extending
                      beyond a single day trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Smaller local vendors and
                      offering counters often don't accept cards.
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
                          "Visit both the Shiva and Vishnu shrines",
                          "Dress modestly for the temple complex",
                          "Consider timing your visit for Kartika Masam",
                          "Carry cash for offerings and local stalls",
                          "Combine with a Karimnagar stop if needed",
                          "Go early morning for a calmer darshan",
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
                          "Skip the Anantha Padmanabha Swamy shrine",
                          "Wear casual/immodest clothing",
                          "Expect a wide luxury-hotel selection locally",
                          "Rely on cards for smaller purchases",
                          "Visit at peak midday in summer",
                          "Rush the visit if it's your only Telangana temple stop",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
                    </Link>{" "}
                    for other temple towns worth combining with a longer
                    northern-Telangana itinerary.
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
                  "Vemulawada",
                  "Shiva Temple",
                  "Rajanna Sircilla",
                  "Telangana",
                  "Pilgrimage",
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

              <RelatedPostsGrid currentSlug="vemulawada-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="vemulawada-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
