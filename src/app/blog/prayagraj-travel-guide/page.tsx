// src/app/blog/prayagraj-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Prayagraj Travel Guide: Triveni Sangam & Kumbh Mela",
  description:
    "Complete Prayagraj (Allahabad) travel guide — the Triveni Sangam, Kumbh Mela's 12-year cycle, Allahabad Fort, Anand Bhavan, Khusro Bagh, how to reach, and a full visit plan.",
  keywords:
    "Prayagraj travel guide, Allahabad, Triveni Sangam, Kumbh Mela, Magh Mela, Allahabad Fort, Anand Bhavan, Khusro Bagh, how to reach Prayagraj, Prayagraj Junction",
  openGraph: {
    title: "Prayagraj Travel Guide: Triveni Sangam & Kumbh Mela",
    description:
      "The sacred confluence of the Ganga, Yamuna, and mythical Saraswati — home to the Kumbh Mela, the largest peaceful gathering of people on Earth.",
    url: "https://club.kudozz.in/blog/prayagraj-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Boats gathered on a wide river confluence at dawn, evocative of Prayagraj's Triveni Sangam",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayagraj Travel Guide: Triveni Sangam & Kumbh Mela",
    description:
      "The Triveni Sangam, the Kumbh Mela's 12-year cycle, and the Nehru family's Anand Bhavan — the complete Prayagraj guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/prayagraj-travel-guide",
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
          headline: "Prayagraj Travel Guide: Triveni Sangam & Kumbh Mela",
          description:
            "Complete Prayagraj (Allahabad) travel guide — the Triveni Sangam, Kumbh Mela's 12-year cycle, Allahabad Fort, Anand Bhavan, Khusro Bagh, how to reach, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/prayagraj-travel-guide",
          },
          keywords:
            "Prayagraj, Allahabad, Triveni Sangam, Kumbh Mela, Anand Bhavan, Allahabad Fort",
          about: {
            "@type": "Place",
            name: "Prayagraj",
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
                name: "Prayagraj",
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
    q: "Is Prayagraj the same city as Allahabad?",
    a: "Yes. The Uttar Pradesh government officially renamed Allahabad to Prayagraj in 2018, restoring what is considered its ancient name. Older maps, train tickets, and long-time residents may still refer to it as Allahabad, but both names point to the same city.",
  },
  {
    q: "What is the Triveni Sangam?",
    a: "The Triveni Sangam is the confluence of three rivers — the Ganga, the Yamuna, and the mythical, unseen Saraswati, believed in Hindu tradition to join the other two underground. Boats ferry pilgrims out to the exact meeting point of the visible Ganga and Yamuna, where taking a ritual dip is considered highly auspicious.",
  },
  {
    q: "How often is the Kumbh Mela held in Prayagraj?",
    a: "The full Kumbh Mela rotates among four sacred sites — Prayagraj, Haridwar, Ujjain, and Nashik — with each site hosting it roughly every 12 years. Prayagraj also hosts a smaller Ardh (\"half\") Kumbh at the roughly 6-year midpoint, and an annual Magh Mela in the intervening years, all centred on the Triveni Sangam. The full Kumbh Mela is widely considered the largest peaceful gathering of people on Earth.",
  },
  {
    q: "Can I visit Allahabad Fort?",
    a: "Allahabad Fort, built by Akbar on the riverbank near the Sangam, is largely under Indian military use, so public access is limited to a few sections, primarily the Ashoka Pillar and the underground Patalpuri Temple, usually accessible with prior permission or on limited visiting hours. Most of the fort's interior remains off-limits to tourists.",
  },
  {
    q: "How many days should I spend in Prayagraj?",
    a: "A full day covers the Sangam, Anand Bhavan, and Khusro Bagh comfortably; two days allow a more relaxed pace including Allahabad Fort's accessible sections and the university area. During Kumbh or Magh Mela years, many pilgrims stay longer to take advantage of the full festival period.",
  },
  {
    q: "What is Anand Bhavan?",
    a: "Anand Bhavan was the ancestral home of the Nehru family, including Jawaharlal Nehru, India's first Prime Minister, and later Indira Gandhi. It is now a museum documenting the family's role in India's independence movement, alongside the adjacent Swaraj Bhavan.",
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
  { id: "introduction", title: "City of the Sangam", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Prayagraj", level: 2 },
  { id: "attractions", title: "Sangam & Landmarks", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PrayagrajGuidePage() {
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
              alt="Boats gathered on a wide river confluence at dawn, evocative of Prayagraj's Triveni Sangam"
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
                { label: "Prayagraj", href: null },
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
                "Prayagraj",
                "Allahabad",
                "Triveni Sangam",
                "Kumbh Mela",
                "Uttar Pradesh",
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
              Prayagraj: Triveni Sangam, Kumbh Mela & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Formerly Allahabad — home to the sacred confluence of the
              Ganga, Yamuna, and mythical Saraswati, and to the Kumbh Mela,
              widely considered the largest peaceful gathering of people on
              Earth.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Prayagraj, Uttar Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,500 words",
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
                  <h2>City of the Sangam</h2>
                  <p>
                    <strong>Prayagraj</strong> — known for most of the
                    modern era as <strong>Allahabad</strong>, before a 2018
                    renaming restored its older, more traditional name — sits
                    at one of the most sacred spots in Hinduism: the{" "}
                    <strong>Triveni Sangam</strong>, the confluence of the{" "}
                    <strong>Ganga</strong>, the <strong>Yamuna</strong>, and
                    the mythical, unseen <strong>Saraswati</strong>, believed
                    to join the other two rivers underground. Boats ferry
                    pilgrims out to the exact point where the visible Ganga
                    and Yamuna waters meet — one noticeably clearer, the
                    other siltier — for a ritual dip considered deeply
                    auspicious.
                  </p>
                  <p>
                    This confluence is also the site of the{" "}
                    <strong>Kumbh Mela</strong>, a festival that rotates
                    roughly every 12 years among four sacred cities —
                    Prayagraj, Haridwar, Ujjain, and Nashik — and is widely
                    considered the largest peaceful gathering of people
                    anywhere on Earth, drawing tens of millions of pilgrims
                    over its weeks-long duration. A smaller Ardh Kumbh falls
                    at roughly the 6-year midpoint, and an annual Magh Mela
                    continues the tradition in the years between.
                  </p>
                  <p>
                    Beyond the river, Prayagraj carries a rich layered
                    history — <strong>Allahabad Fort</strong>, built by
                    Akbar directly on the riverbank; <strong>Anand
                    Bhavan</strong>, the Nehru family's ancestral home and
                    now a museum central to India's independence story; the
                    Mughal-era gardens and tombs of{" "}
                    <strong>Khusro Bagh</strong>; and the colonial-era
                    architecture of Allahabad University, once dubbed the
                    "Oxford of the East."
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕉️</span> Prayagraj at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Ganga-Yamuna confluence, UP",
                        },
                        {
                          icon: "✈️",
                          label: "Access",
                          value: "Airport, major rail junction",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Triveni Sangam, Kumbh Mela",
                        },
                        {
                          icon: "🏛️",
                          label: "History",
                          value: "Anand Bhavan, Allahabad Fort",
                        },
                        {
                          icon: "🎉",
                          label: "Formerly Called",
                          value: "Allahabad",
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
                  <h2>Best Time to Visit Prayagraj</h2>
                  <p>
                    Prayagraj's climate follows the North Indian pattern of
                    cool winters and scorching summers, but the single
                    biggest factor in timing a visit is whether it coincides
                    with a Kumbh or Magh Mela year.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for exploring the Sangam, Anand Bhavan, and the old city on foot without the summer heat or monsoon humidity.",
                      },
                      {
                        season: "Magh Mela (Jan/Feb)",
                        emoji: "🛶",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Annual mini-Kumbh — busy",
                        text: "A month-long annual gathering at the Sangam every year, smaller than the full Kumbh but still drawing large crowds of pilgrims and a temporary tent city on the riverbank.",
                      },
                      {
                        season: "Kumbh/Ardh Kumbh years",
                        emoji: "🌊",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Exceptional but extremely crowded",
                        text: "Held roughly every 12 years (with an Ardh Kumbh at the midpoint), this is an extraordinary once-in-a-cycle experience — but expect immense crowds, stretched infrastructure, and the need to book far in advance.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Very hot — avoid",
                        text: "Daytime temperatures regularly exceed 40°C, making sightseeing along the open riverbank genuinely difficult.",
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
                    <strong>Our pick:</strong> October to March for a
                    comfortable, moderately paced visit. Plan specifically
                    around a Kumbh or Magh Mela year only if you're prepared
                    for very large crowds and want that particular
                    experience.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Prayagraj</h2>
                  <p>
                    As a major administrative and pilgrimage centre,
                    Prayagraj is well connected by air, rail, and road.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Prayagraj Airport connects
                      to Delhi, Mumbai, and other major Indian cities with
                      regular domestic flights.
                    </li>
                    <li>
                      <strong>By train:</strong> Prayagraj Junction (still
                      widely known by its former name, Allahabad Junction)
                      is one of North India's busiest rail hubs, with
                      frequent connections to Delhi, Varanasi, Lucknow,
                      Kolkata, and beyond.
                    </li>
                    <li>
                      <strong>By road:</strong> NH19 connects Prayagraj to
                      Varanasi (roughly 2-2.5 hours) and onward toward
                      Kolkata; NH30 links it toward Lucknow and further
                      north.
                    </li>
                    <li>
                      <strong>Getting around:</strong> Auto-rickshaws and
                      taxis cover the city easily; during Magh Mela and
                      Kumbh years, expect significant traffic diversions
                      and extended walking distances near the Sangam.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Prayagraj pairs naturally
                    with{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>{" "}
                    — the two cities are just over two hours apart by road
                    or rail, making it easy to combine both on a single
                    North India trip.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Sangam & Landmarks</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Rowboats on a wide, calm river at sunrise, representative of the Triveni Sangam boat rides in Prayagraj"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Triveni Sangam</h3>
                  <p>
                    The heart of any Prayagraj visit. Rowboats from the
                    riverbank ferry visitors out to the exact confluence
                    point, where boatmen typically pause so passengers can
                    take a ritual dip or simply observe the meeting of the
                    two rivers' distinctly different waters. Priests on
                    anchored platforms nearby offer puja rituals for those
                    who want them — agree on a price beforehand if you
                    choose to participate.
                  </p>
                  <h3>Kumbh Mela & Magh Mela</h3>
                  <p>
                    Held on a roughly 12-year cycle (with an Ardh Kumbh at
                    the midpoint), the Kumbh Mela transforms the riverbank
                    into a temporary city of tents housing millions of
                    pilgrims, sadhus, and religious akharas (orders), all
                    converging for ritual bathing on auspicious dates
                    determined by astrological alignment. In non-Kumbh
                    years, the smaller annual Magh Mela in
                    January-February keeps a version of this tradition
                    alive on a more manageable scale.
                  </p>
                  <h3>Allahabad Fort</h3>
                  <p>
                    Built by the Mughal emperor Akbar in 1583 on the
                    riverbank near the Sangam, this fort remains largely
                    under Indian military occupation, which limits public
                    access to only a few sections — most notably an Ashoka
                    Pillar within the grounds and the underground Patalpuri
                    Temple. Check current visiting rules and permissions
                    before planning around it.
                  </p>
                  <h3>Anand Bhavan & Khusro Bagh</h3>
                  <p>
                    Anand Bhavan, the Nehru family's ancestral home, is now
                    a museum tracing the family's central role in India's
                    freedom struggle, including personal artefacts and
                    period rooms; the adjacent Swaraj Bhavan adds further
                    historical context. Khusro Bagh, a short distance away,
                    is a peaceful Mughal-era walled garden containing the
                    tombs of Prince Khusrau (son of Emperor Jahangir) and
                    other Mughal family members — a quieter counterpoint to
                    the city's busier religious sites.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Prayagraj</h2>
                  <p>
                    Accommodation is concentrated around Civil Lines (the
                    more modern part of the city) and closer to the Sangam
                    and old city for those prioritising proximity to the
                    ghats.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛕",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Dharamshalas near the Sangam",
                          "Budget lodges around the railway station",
                          "Simple guesthouses in the old city",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Business hotels in Civil Lines",
                          "Mid-range chains near the airport road",
                          "Comfortable options along MG Marg",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "₹6,000–₹14,000+/night",
                        picks: [
                          "Branded upscale hotels in Civil Lines",
                          "Riverside heritage-style properties",
                          "Premium chain hotels near the airport",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Sangam & the River",
                        color: "bg-amber-700",
                        activities: [
                          "Early morning boat ride to the Triveni Sangam",
                          "Visit the accessible sections of Allahabad Fort",
                          "Evening at the riverbank ghats",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "History & Gardens",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at Anand Bhavan and Swaraj Bhavan",
                          "Afternoon at Khusro Bagh and Allahabad University area",
                          "Onward travel to Varanasi or Lucknow",
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
                    * Many travellers combine Prayagraj with{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>{" "}
                    and{" "}
                    <Link href="/blog/chitrakoot-travel-guide">
                      Chitrakoot
                    </Link>{" "}
                    for a fuller spiritual circuit through eastern Uttar
                    Pradesh.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Prayagraj</h2>
                  <ul>
                    <li>
                      <strong>Civil Lines restaurants:</strong> The
                      city's main hub for a wider range of dining, from
                      casual North Indian to multi-cuisine options.
                    </li>
                    <li>
                      <strong>Street food near the old city:</strong>{" "}
                      Kachori-sabzi, chaat, and Allahabad's own take on
                      tehri (a spiced vegetable pulao) are worth seeking
                      out.
                    </li>
                    <li>
                      <strong>Prayagraj's famous guavas:</strong> The
                      region is known for high-quality guavas, especially
                      in season — look for them at local fruit stalls.
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
                            "Accommodation/night",
                            "₹1,000",
                            "₹3,800",
                            "₹9,500",
                          ],
                          ["Local transport/day", "₹250", "₹600", "₹1,500"],
                          ["Food/day", "₹450", "₹1,100", "₹2,800"],
                          [
                            "Sangam boat ride",
                            "₹300",
                            "₹500",
                            "₹800 (private)",
                          ],
                          ["Museum/monument entry", "₹50", "₹150", "₹300"],
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
                    Costs and availability shift dramatically during Kumbh
                    and Magh Mela periods.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Prayagraj</h2>
                  <ul>
                    <li>
                      <strong>Negotiate boat prices upfront:</strong> Agree
                      on the full Sangam boat ride cost, including any
                      priest-led rituals, before setting off.
                    </li>
                    <li>
                      <strong>Check Allahabad Fort's visiting rules:</strong>{" "}
                      Access is limited given ongoing military use — confirm
                      current hours and permissions before planning your
                      day around it.
                    </li>
                    <li>
                      <strong>Plan carefully during Kumbh/Magh Mela:</strong>{" "}
                      Book accommodation and transport far in advance, and
                      expect long walking distances and dense crowds near
                      the riverbank.
                    </li>
                    <li>
                      <strong>Carry sun protection at the Sangam:</strong>{" "}
                      The riverbank offers little shade — a hat and water
                      are worth carrying, especially outside winter.
                    </li>
                    <li>
                      <strong>Combine with Varanasi:</strong> The two
                      cities' spiritual character and geographic proximity
                      make them a natural pairing on any itinerary.
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
                          "Take an early morning boat ride to the Sangam",
                          "Negotiate boat and priest fees before starting",
                          "Check Allahabad Fort's current access rules",
                          "Visit Anand Bhavan for the independence history",
                          "Carry water and sun protection at the riverbank",
                          "Combine your trip with Varanasi",
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
                          "Assume free entry into all of Allahabad Fort",
                          "Skip agreeing on boat prices before departure",
                          "Underestimate Kumbh/Magh Mela crowd logistics",
                          "Visit the open riverbank without sun protection",
                          "Rush the Sangam visit into a brief photo stop",
                          "Ignore local guidance on ritual etiquette",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Prayagraj
                    with{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>,
                    just over two hours away, and{" "}
                    <Link href="/blog/chitrakoot-travel-guide">
                      Chitrakoot
                    </Link>{" "}
                    for a deeper spiritual circuit through eastern{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    .
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
                  "Prayagraj",
                  "Allahabad",
                  "Triveni Sangam",
                  "Kumbh Mela",
                  "Uttar Pradesh",
                  "Pilgrimage",
                  "Anand Bhavan",
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

              <RelatedPostsGrid currentSlug="prayagraj-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="prayagraj-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
