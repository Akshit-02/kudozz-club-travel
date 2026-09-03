// src/app/blog/govardhan-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Govardhan Travel Guide: Hill, Parikrama & Temples",
  description:
    "Complete Govardhan travel guide — the sacred Govardhan Hill, the 23km Govardhan Parikrama, Radha Kund, Mansi Ganga, Daan Ghati Temple, how to reach, and a full visit plan.",
  keywords:
    "Govardhan travel guide, Govardhan Hill, Govardhan Parikrama, Radha Kund, Shyam Kund, Mansi Ganga, Daan Ghati Temple, Govardhan Puja, Braj region, how to reach Govardhan",
  openGraph: {
    title: "Govardhan Travel Guide: Hill, Parikrama & Temples",
    description:
      "The sacred hill Krishna is said to have lifted on his little finger — Govardhan Parikrama, Radha Kund, and a quieter side of the Braj region.",
    url: "https://club.kudozz.in/blog/govardhan-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A low sacred hill and pilgrimage path at dawn, evocative of Govardhan Hill and its parikrama route",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Govardhan Travel Guide: Hill, Parikrama & Temples",
    description:
      "Govardhan Hill, the 23km parikrama path, and the twin sacred ponds of Radha Kund and Shyam Kund — a quieter corner of the Braj region.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/govardhan-travel-guide",
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
          headline: "Govardhan Travel Guide: Hill, Parikrama & Temples",
          description:
            "Complete Govardhan travel guide — the sacred Govardhan Hill, the 23km Govardhan Parikrama, Radha Kund, Mansi Ganga, Daan Ghati Temple, how to reach, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/govardhan-travel-guide",
          },
          keywords:
            "Govardhan, Govardhan Parikrama, Radha Kund, Mansi Ganga, Daan Ghati Temple, Braj region",
          about: {
            "@type": "Place",
            name: "Govardhan",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh",
                item: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Govardhan",
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
    q: "What is the story behind Govardhan Hill?",
    a: "According to the Bhagavata Purana, Krishna lifted Govardhan Hill on the little finger of his left hand and held it aloft for seven days and nights, sheltering the villagers of Braj and their cattle from a torrential storm sent by an angered Indra, the god of rain and thunder. The episode is one of the best-known stories from Krishna's youth and is why the hill is worshipped rather than merely visited.",
  },
  {
    q: "How long is the Govardhan Parikrama?",
    a: "The full circumambulation path around Govardhan Hill is roughly 23km. Pilgrims walk it, and some undertake it barefoot or even perform dandavat parikrama (prostrating full-body length repeatedly around the entire route) as an act of devotion — a practice that can take several days to complete.",
  },
  {
    q: "How far is Govardhan from Mathura and Vrindavan?",
    a: "Govardhan is about 26km from Mathura and roughly 40km from Vrindavan, typically a 45-60 minute drive from either. It's commonly visited as a day trip from both towns as part of a wider Braj region itinerary.",
  },
  {
    q: "What is Govardhan Puja?",
    a: "Govardhan Puja is a major Hindu festival celebrated around Diwali (October/November), commemorating Krishna's lifting of the hill. Communities prepare a large annakut — literally a 'mountain of food' — offering dozens of dishes to the deity, symbolically recreating the abundance Krishna's protection made possible for the villagers of Braj.",
  },
  {
    q: "Is Govardhan less crowded than Mathura and Vrindavan?",
    a: "Yes, generally. Despite its deep religious significance, Govardhan sees noticeably fewer tourists and remains a quieter, more rural experience than the denser temple towns of Mathura and Vrindavan — a good choice if you want the Braj region's spiritual character without the crowds.",
  },
  {
    q: "What are Radha Kund and Shyam Kund?",
    a: "Radha Kund and Shyam Kund are twin sacred ponds near Govardhan, believed to have been created by Radha and Krishna respectively. They are considered among the holiest bathing sites in the Braj region, and many pilgrims combine a visit here with the Govardhan Parikrama.",
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
  { id: "introduction", title: "The Hill Krishna Lifted", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Govardhan", level: 2 },
  { id: "attractions", title: "The Parikrama & Sacred Sites", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GovardhanGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="A low sacred hill and pilgrimage path at dawn, evocative of Govardhan Hill and its parikrama route"
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
                { label: "Uttar Pradesh", href: "/blog/uttar-pradesh-travel-guide" },
                { label: "Govardhan", href: null },
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
                "Govardhan",
                "Govardhan Parikrama",
                "Uttar Pradesh",
                "Braj Region",
                "Radha Kund",
                "Krishna Lore",
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
              Govardhan: Sacred Hill, Parikrama & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The low hill Krishna is said to have lifted on his little
              finger to shelter the villagers of Braj — a 23km parikrama
              path, twin sacred ponds, and a quieter, more rural corner of
              the region.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Braj Region, Uttar Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>The Hill Krishna Lifted</h2>
                  <p>
                    <strong>Govardhan</strong> is built around a long, low
                    sandstone hill of the same name — one of the most
                    sacred sites in the{" "}
                    <strong>Braj region</strong>, despite being modest in
                    height compared to almost any hill elsewhere in India.
                    According to the Bhagavata Purana, a young Krishna
                    lifted the entire hill on the little finger of his left
                    hand and held it aloft for seven days and nights,
                    sheltering the villagers of Braj and their cattle from
                    a relentless storm sent by an angered Indra. The story
                    is why Govardhan Hill is worshipped as a deity in its
                    own right, not simply visited as a landmark.
                  </p>
                  <p>
                    The town's central ritual is the{" "}
                    <strong>Govardhan Parikrama</strong> — a roughly 23km
                    circumambulation path that circles the entire hill.
                    Pilgrims walk it, many barefoot, and some perform the
                    more arduous dandavat parikrama, prostrating themselves
                    full-length repeatedly around the whole route as an act
                    of profound devotion.
                  </p>
                  <p>
                    Beyond the parikrama, Govardhan is home to{" "}
                    <strong>Radha Kund</strong> and{" "}
                    <strong>Shyam Kund</strong> — twin sacred ponds tied to
                    Radha and Krishna — the <strong>Mansi Ganga</strong>{" "}
                    tank, and the <strong>Daan Ghati Temple</strong>.
                    Compared to{" "}
                    <Link href="/blog/mathura-travel-guide">Mathura</Link>{" "}
                    and{" "}
                    <Link href="/blog/vrindavan-travel-guide">
                      Vrindavan
                    </Link>
                    , Govardhan remains notably quieter and less
                    commercial, despite its central place in the Krishna
                    story.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Govardhan at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "~26km from Mathura, Braj region",
                        },
                        {
                          icon: "🚕",
                          label: "From Mathura",
                          value: "~45-60 min by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🚶",
                          label: "Known For",
                          value: "23km Govardhan Parikrama",
                        },
                        {
                          icon: "🎆",
                          label: "Big Festival",
                          value: "Govardhan Puja (Oct/Nov)",
                        },
                        {
                          icon: "🌊",
                          label: "Sacred Ponds",
                          value: "Radha Kund, Shyam Kund",
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
                  <h2>Best Time to Visit Govardhan</h2>
                  <p>
                    Since much of the Govardhan experience involves walking
                    — whether a short visit to the main temples or the full
                    parikrama — comfortable weather matters even more here
                    than elsewhere in the Braj region.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, walkable conditions make this the ideal window for the parikrama and for exploring the temples and kunds without the summer heat.",
                      },
                      {
                        season: "Oct / Nov",
                        emoji: "🎆",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Govardhan Puja — festive but busy",
                        text: "The town's biggest festival, timed around Diwali, features a large communal annakut food offering and draws sizeable crowds of devotees.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid the full parikrama",
                        text: "High daytime temperatures make the 23km walk genuinely tough; if visiting, stick to early morning temple visits rather than the full circuit.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — muddy paths",
                        text: "Rain keeps things green but can make the parikrama path muddy and uneven in stretches — manageable, but less pleasant underfoot.",
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
                    <strong>Our pick:</strong> October to March, ideally on
                    an early morning start, gives you the coolest and most
                    comfortable conditions for both the parikrama and the
                    temple visits.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Govardhan</h2>
                  <p>
                    Govardhan has no rail or air access of its own — nearly
                    every visitor arrives by road as part of a wider Braj
                    region trip.
                  </p>
                  <ul>
                    <li>
                      <strong>From Mathura:</strong> About 26km, roughly a
                      45-60 minute drive by taxi, auto-rickshaw, or shared
                      transport — the most common route.
                    </li>
                    <li>
                      <strong>From Vrindavan:</strong> Around 40km, about
                      an hour by road, often combined with a stop in
                      Mathura along the way.
                    </li>
                    <li>
                      <strong>By train or air:</strong> The nearest railhead
                      and airport connections are through Mathura and
                      Agra; from either, hire a taxi or join a day-trip tour
                      covering the wider Braj circuit.
                    </li>
                    <li>
                      <strong>Getting around Govardhan:</strong> The
                      parikrama path itself is walked on foot (or, for some
                      pilgrims, by cycle-rickshaw for shorter distances);
                      autos and taxis connect the town centre to Radha
                      Kund and Shyam Kund.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Most travellers visit
                    Govardhan as a half-day or full-day trip from Mathura
                    or Vrindavan rather than staying overnight — plan your
                    base accordingly unless you specifically want to walk
                    the full parikrama at a relaxed pace.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>The Parikrama & Sacred Sites</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="A gently rising sacred hill landscape representative of Govardhan Hill and its surrounding countryside"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Govardhan Hill & the Parikrama</h3>
                  <p>
                    The hill itself is long and low rather than dramatic —
                    its significance is entirely devotional rather than
                    scenic. The roughly 23km parikrama path circles its
                    base, dotted with small temples and shrines,
                    monkeys, and a steady stream of pilgrims at almost any
                    time of day. Most visitors complete the walk in around
                    6-8 hours; the more devout dandavat parikrama, involving
                    repeated full-body prostration around the entire
                    route, can take several days.
                  </p>
                  <h3>Radha Kund & Shyam Kund</h3>
                  <p>
                    These twin ponds, separated by a narrow strip of land,
                    are among the holiest bathing sites in the Braj region
                    — Radha Kund associated with Radha and Shyam Kund with
                    Krishna. Many pilgrims consider a dip here, especially
                    during Kartik Purnima, spiritually significant enough
                    to plan their entire Govardhan visit around it.
                  </p>
                  <h3>Mansi Ganga & Daan Ghati Temple</h3>
                  <p>
                    Mansi Ganga is a large rectangular sacred tank at the
                    start of the parikrama route, believed to have been
                    created by Krishna's thought alone. Nearby, the Daan
                    Ghati Temple marks the spot where, per local tradition,
                    Krishna playfully demanded a "toll" of curd and butter
                    from the gopis passing through — a lighter, more
                    playful counterpoint to the hill-lifting legend that
                    defines the rest of the town.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Govardhan</h2>
                  <p>
                    Govardhan has limited accommodation compared to Mathura
                    or Vrindavan, and most visitors — especially those not
                    walking the full parikrama — base themselves in one of
                    those two towns instead and day-trip in.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🙏",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Dharamshalas along the parikrama route",
                          "Simple pilgrim guesthouses",
                          "Ashram-run stays near Radha Kund",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Small hotels in Govardhan town",
                          "Better-equipped guesthouses near Radha Kund",
                          "Mathura- or Vrindavan-based day trip instead",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "Base in Mathura/Vrindavan",
                        picks: [
                          "No major luxury properties in Govardhan itself",
                          "Best luxury options are in nearby Mathura",
                          "Or in Vrindavan's higher-end hotels",
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
                  <h2>Suggested Visit Plan (Day Trip or 1 Night)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Option A",
                        title: "Day Trip from Mathura/Vrindavan",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure to reach Govardhan by mid-morning",
                          "Visit Mansi Ganga, Daan Ghati Temple, and a section of the parikrama",
                          "Stop at Radha Kund and Shyam Kund before returning",
                        ],
                      },
                      {
                        day: "Option B",
                        title: "Full Parikrama (1 Night)",
                        color: "bg-sky-600",
                        activities: [
                          "Arrive the evening before, stay near the parikrama's start point",
                          "Begin the full 23km parikrama at dawn",
                          "Rest at Radha Kund before heading back to Mathura or Vrindavan",
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
                    <Link href="/blog/mathura-travel-guide">Mathura</Link>{" "}
                    and{" "}
                    <Link href="/blog/vrindavan-travel-guide">
                      Vrindavan
                    </Link>{" "}
                    for a complete 3-4 day Braj region itinerary.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Govardhan</h2>
                  <ul>
                    <li>
                      <strong>Roadside stalls along the parikrama:</strong>{" "}
                      Simple vegetarian snacks, fruit, and refreshments cater
                      to pilgrims walking the route.
                    </li>
                    <li>
                      <strong>Dharamshala kitchens:</strong> Many pilgrim
                      guesthouses serve basic, home-style vegetarian thalis
                      at low cost.
                    </li>
                    <li>
                      <strong>Better options in Mathura/Vrindavan:</strong>{" "}
                      For a wider choice of restaurants, most travellers eat
                      before or after their Govardhan visit in one of the
                      two larger towns.
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
                            "Taxi from Mathura (round trip)",
                            "₹1,200",
                            "₹1,800",
                            "₹2,500",
                          ],
                          [
                            "Accommodation/night (if staying)",
                            "₹500",
                            "₹2,500",
                            "n/a (base elsewhere)",
                          ],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          [
                            "Local transport on-site",
                            "₹100",
                            "₹300",
                            "₹600",
                          ],
                          ["Temple/kund donations", "₹100", "₹300", "₹500+"],
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
                    * Figures are per person, per day, in Indian Rupees.
                    Most travellers treat Govardhan as a day trip rather
                    than an overnight stay.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Govardhan</h2>
                  <ul>
                    <li>
                      <strong>Wear comfortable walking footwear:</strong>{" "}
                      Even a partial parikrama involves a fair amount of
                      walking on uneven ground.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Stalls line
                      the parikrama route, but options can be sparse in
                      quieter stretches.
                    </li>
                    <li>
                      <strong>Watch for monkeys:</strong> As with most
                      Braj-region pilgrimage sites, monkeys are common along
                      the parikrama path — keep food and loose items secure.
                    </li>
                    <li>
                      <strong>Start early:</strong> A dawn start avoids both
                      the day's heat and the busiest crowds on the parikrama
                      path.
                    </li>
                    <li>
                      <strong>Combine with Mathura and Vrindavan:</strong>{" "}
                      Govardhan is best experienced as one leg of a broader
                      Braj circuit rather than a standalone destination.
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
                          "Start the parikrama early in the morning",
                          "Carry water and light snacks for the walk",
                          "Wear sturdy, comfortable footwear",
                          "Visit Radha Kund and Shyam Kund together",
                          "Keep valuables secure around monkeys",
                          "Combine with Mathura and Vrindavan",
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
                          "Attempt the full parikrama in peak summer heat",
                          "Expect wide dining or hotel choice on-site",
                          "Leave food or bags open near monkeys",
                          "Skip carrying enough cash — ATMs are limited",
                          "Rush the visit into a quick drive-by stop",
                          "Forget sun protection on the open parikrama path",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Govardhan
                    with{" "}
                    <Link href="/blog/mathura-travel-guide">Mathura</Link>{" "}
                    and{" "}
                    <Link href="/blog/vrindavan-travel-guide">
                      Vrindavan
                    </Link>{" "}
                    to complete the Braj region circuit, all part of a
                    wider{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary.
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
                  "Govardhan",
                  "Govardhan Parikrama",
                  "Uttar Pradesh",
                  "Braj Region",
                  "Radha Kund",
                  "Krishna Lore",
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

              <RelatedPostsGrid currentSlug="govardhan-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="govardhan-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
