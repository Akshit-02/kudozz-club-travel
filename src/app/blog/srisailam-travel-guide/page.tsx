// src/app/blog/srisailam-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Srisailam Travel Guide: Jyotirlinga & Nallamala",
  description:
    "Complete Srisailam guide — the Mallikarjuna Jyotirlinga and Bhramaramba Shakti Peetha, Patala Ganga, the Krishna river gorge through Nallamala forest, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Srisailam travel guide, Mallikarjuna Jyotirlinga, Bhramaramba Shakti Peetha, Srisailam temple, Patala Ganga, Nallamala forest, Krishna river gorge, Srisailam dam, how to reach Srisailam, Srisailam from Hyderabad",
  openGraph: {
    title: "Srisailam Travel Guide: Jyotirlinga & Nallamala",
    description:
      "One of the 12 Jyotirlingas and a Shakti Peetha in a single temple, set deep in the Nallamala forest above the Krishna river gorge — the complete Srisailam guide.",
    url: "https://club.kudozz.in/blog/srisailam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested mountain gorge landscape, evoking Srisailam's Nallamala forest and Krishna river gorge setting",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Srisailam Travel Guide: Jyotirlinga & Nallamala",
    description:
      "A Jyotirlinga and a Shakti Peetha in one temple, deep in the Nallamala forest above the Krishna gorge — the complete Srisailam guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/srisailam-travel-guide",
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
          headline: "Srisailam Travel Guide: Jyotirlinga & Nallamala",
          description:
            "Complete Srisailam guide — the Mallikarjuna Jyotirlinga and Bhramaramba Shakti Peetha, Patala Ganga, the Krishna river gorge through Nallamala forest, how to reach from Hyderabad, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/srisailam-travel-guide",
          },
          keywords:
            "Srisailam, Mallikarjuna Jyotirlinga, Telangana, Nallamala Forest, pilgrimage, Krishna river",
          about: {
            "@type": "Place",
            name: "Srisailam",
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
                name: "Srisailam",
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
    q: "How far is Srisailam from Hyderabad?",
    a: "Roughly 200 km, a drive of about 5-6 hours given the winding ghat road through the Nallamala forest for the final stretch. Most visitors treat it as a long day trip with an early start, or a more relaxed overnight visit.",
  },
  {
    q: "Is Srisailam both a Jyotirlinga and a Shakti Peetha?",
    a: "Yes — the Mallikarjuna Swamy temple here is one of the 12 Jyotirlingas of Shiva, and the same complex also honours Bhramaramba Devi as one of the Shakti Peethas, a rare dual significance shared by very few temples in India.",
  },
  {
    q: "What is the best time to visit Srisailam given the ghat road?",
    a: "October to February is best — cooler weather and clearer conditions make the winding ghat-road drive through Nallamala forest considerably more comfortable. Avoid the peak monsoon months when the forest road can be more difficult to drive.",
  },
  {
    q: "Do I need to stay overnight at Srisailam?",
    a: "Not strictly, but given the length of the drive from Hyderabad, an overnight stay lets you visit the temple without rushing and add Patala Ganga and the dam viewpoint at a relaxed pace rather than cramming everything into a single long day.",
  },
  {
    q: "Is Srisailam inside a tiger reserve?",
    a: "The temple town sits within the broader Nagarjunsagar-Srisailam Tiger Reserve landscape, one of India's largest tiger reserves. You won't be on a safari simply visiting the temple, but the forested ghat road does pass through reserve buffer areas, so watch for wildlife-crossing signage.",
  },
  {
    q: "What is Patala Ganga at Srisailam?",
    a: "A site where a long flight of steps (and a ropeway option) descends steeply down to the Krishna river itself, where devotees traditionally bathe before heading up to the main temple. It's also simply a scenic spot given the dramatic river gorge below.",
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
  { id: "introduction", title: "Jyotirlinga & Shakti Peetha in One", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Srisailam", level: 2 },
  { id: "things-to-do", title: "Temple, Patala Ganga & Gorge", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SrisailamGuidePage() {
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
              alt="Forested mountain gorge landscape, evoking Srisailam's Nallamala forest and Krishna river gorge setting"
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
                { label: "Srisailam", href: null },
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
                "Srisailam",
                "Jyotirlinga",
                "Shakti Peetha",
                "Nallamala",
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
              Srisailam: Jyotirlinga, Nallamala & the Krishna Gorge
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Jyotirlinga and a Shakti Peetha under one roof, reached by a
              winding forest road through the Nallamala hills above a
              dramatic Krishna river gorge.
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
                  text: "Nallamala Forest, Telangana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Jyotirlinga & Shakti Peetha in One</h2>
                  <p>
                    <strong>Srisailam</strong>, roughly 200 km southeast of
                    Hyderabad, holds a rare double distinction in Hindu
                    pilgrimage geography: the Mallikarjuna Swamy temple here
                    is one of the twelve <strong>Jyotirlingas</strong> of
                    Shiva, and the same complex also honours{" "}
                    <strong>Bhramaramba Devi</strong> as one of the{" "}
                    <strong>Shakti Peethas</strong> — very few temples in
                    India carry both designations at once.
                  </p>
                  <p>
                    The temple sits deep inside the{" "}
                    <strong>Nallamala forest</strong>, reached by a long,
                    winding ghat road that is as much a part of the
                    experience as the destination itself. Below the temple
                    town, the <strong>Krishna river</strong> carves a
                    genuinely dramatic gorge, visible from Patala Ganga and
                    from the nearby Srisailam Dam.
                  </p>
                  <p>
                    This is a temple visited for both faith and scenery —
                    plan for a long but rewarding day trip from{" "}
                    <Link href="/blog/hyderabad-travel-guide">Hyderabad</Link>
                    , or better, an unhurried overnight stay.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Srisailam at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Nallamala Forest, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~200 km, 5-6 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Jyotirlinga + Shakti Peetha",
                        },
                        {
                          icon: "🏞️",
                          label: "Setting",
                          value: "Krishna River Gorge",
                        },
                        {
                          icon: "🐅",
                          label: "Nearby",
                          value: "Nagarjunsagar-Srisailam Reserve",
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
                  <h2>Best Time to Visit Srisailam</h2>
                  <p>
                    The ghat road through Nallamala forest makes timing
                    matter more here than at most temple towns.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions make the winding ghat-road drive considerably more comfortable, and temple queues are generally more manageable outside major festival dates.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, drive early",
                        text: "Heat builds through the day — an early morning departure from Hyderabad keeps the long drive comfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but slower going",
                        text: "The forest turns a deep green and the Krishna gorge fills dramatically, but the ghat road demands more caution and slower driving.",
                      },
                      {
                        season: "Maha Shivaratri",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Major festival — huge crowds",
                        text: "The temple's biggest occasion draws enormous crowds and long queues — atmospheric, but plan for a very different, far more crowded visit.",
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
                    <strong>Our pick:</strong> October to February — the
                    cooler, drier window that makes both the ghat-road drive
                    and the temple visit itself genuinely comfortable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Srisailam</h2>
                  <p>
                    Srisailam's remote forest location means the drive itself
                    needs planning, whether from Hyderabad or Kurnool.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Hyderabad:</strong> Roughly 200
                      km, about 5-6 hours including the ghat-road stretch
                      through Nallamala forest — the most common approach for
                      most visitors.
                    </li>
                    <li>
                      <strong>By road from Kurnool:</strong> A shorter
                      alternative route from the Andhra Pradesh side, also
                      via forest roads.
                    </li>
                    <li>
                      <strong>Nearest railhead:</strong> Markapur Road or
                      Nandyal, both requiring a further road journey onward —
                      driving directly from Hyderabad is simpler for most
                      travellers.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early from Hyderabad —
                    the ghat road has numerous hairpin bends best driven in
                    daylight, and an early start also means reaching the
                    temple before the busiest midday crowds.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple, Patala Ganga & the Krishna Gorge</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Forested gorge landscape near Srisailam, Nallamala forest, Telangana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Mallikarjuna Swamy Temple</h3>
                  <p>
                    The main temple complex, honouring both Mallikarjuna
                    (Shiva, as a Jyotirlinga) and Bhramaramba Devi (as a
                    Shakti Peetha) — the dual significance draws pilgrims
                    seeking either or both blessings in a single visit.
                  </p>
                  <h3>Patala Ganga</h3>
                  <p>
                    A steep descent — by steps or ropeway — down to the
                    Krishna river itself, where devotees traditionally bathe
                    before heading up to the temple. Even for non-pilgrims,
                    the descent offers striking views into the gorge below.
                  </p>
                  <h3>Krishna River Gorge & Srisailam Dam</h3>
                  <p>
                    The Krishna carves a genuinely dramatic gorge through the
                    Nallamala hills here, and the Srisailam Dam a short
                    distance away is worth a stop for the scale of the
                    reservoir and the surrounding forested hills.
                  </p>
                  <h3>Nagarjunsagar-Srisailam Tiger Reserve</h3>
                  <p>
                    The temple town sits within the broader boundary of one
                    of India's largest tiger reserves — you won't be on
                    safari simply visiting the temple, but the forest setting
                    is a constant backdrop, and wildlife-crossing signage
                    along the ghat road is a reminder of what surrounds it.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Srisailam</h2>
                  <p>
                    Accommodation is a mix of temple-run guesthouses and a
                    handful of forest/tourism department lodges — book ahead
                    around major festival dates.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Devasthanam (temple trust) guesthouses",
                          "Basic lodges in the temple town",
                          "Dormitory-style pilgrim accommodation",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Haritha (Telangana Tourism) resort",
                          "Private hotels near the temple",
                          "Forest-view guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏞️",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium forest resorts nearby",
                          "Well-appointed tourism department cottages",
                          "Full-board pilgrimage packages",
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
                        title: "Hyderabad to Srisailam",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure via the Nallamala ghat road",
                          "Check in, temple darshan in the evening",
                          "Evening aarti at the temple",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Patala Ganga, Dam & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning descent to Patala Ganga",
                          "Srisailam Dam viewpoint",
                          "Drive back to Hyderabad",
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
                    * With more time, combine Srisailam with{" "}
                    <Link href="/blog/nagarjuna-sagar-travel-guide">
                      Nagarjuna Sagar
                    </Link>{" "}
                    for a fuller Krishna-river circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat at Srisailam</h2>
                  <ul>
                    <li>
                      <strong>Temple prasadam:</strong> Annaprasadam
                      (free/subsidised meals) is served to pilgrims at the
                      temple, a common way many visitors eat here.
                    </li>
                    <li>
                      <strong>Local eateries in the temple town:</strong>{" "}
                      Simple Andhra/Telangana thali restaurants cluster around
                      the temple area.
                    </li>
                    <li>
                      <strong>Resort/lodge dining:</strong> Most
                      accommodation options serve straightforward South
                      Indian meals to guests, useful given limited standalone
                      restaurant variety.
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹6,500"],
                          [
                            "Car hire from Hyderabad (round trip)",
                            "₹6,500",
                            "₹9,000",
                            "₹13,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Special darshan (optional)", "₹300", "₹500", "₹1,000"],
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
                    * Figures are per person, per day (except car hire, a
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Srisailam</h2>
                  <ul>
                    <li>
                      <strong>Start early for the ghat road:</strong> Numerous
                      hairpin bends are best driven in daylight and before
                      midday crowds build.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> As with most major
                      temples, conservative clothing is expected inside the
                      complex.
                    </li>
                    <li>
                      <strong>Book accommodation ahead on festival
                      dates:</strong> Maha Shivaratri in particular draws huge
                      crowds and fills rooms fast.
                    </li>
                    <li>
                      <strong>Watch for wildlife-crossing signage:</strong>{" "}
                      The forest road runs through tiger reserve buffer
                      areas — drive attentively, especially at dusk.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance thins out
                      once you're off the main highway.
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
                          "Start the drive from Hyderabad early",
                          "Visit Patala Ganga for the gorge views",
                          "Dress modestly for the temple",
                          "Book ahead during Maha Shivaratri",
                          "Carry cash for the temple town",
                          "Combine with Nagarjuna Sagar if time allows",
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
                          "Drive the ghat road after dark if avoidable",
                          "Underestimate the drive time from Hyderabad",
                          "Expect fast-moving queues on festival days",
                          "Rely on cards outside the main temple town",
                          "Rush the visit into a same-day round trip if you can avoid it",
                          "Ignore wildlife-crossing signage on the forest stretch",
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
                    <strong>🗺️ Extend the trip:</strong> Srisailam pairs
                    naturally with{" "}
                    <Link href="/blog/nagarjuna-sagar-travel-guide">
                      Nagarjuna Sagar
                    </Link>{" "}
                    for a fuller Krishna-river circuit. See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
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
                  "Srisailam",
                  "Mallikarjuna Jyotirlinga",
                  "Telangana",
                  "Nallamala Forest",
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

              <RelatedPostsGrid currentSlug="srisailam-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="srisailam-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
