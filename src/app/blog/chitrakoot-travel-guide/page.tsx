// src/app/blog/chitrakoot-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chitrakoot Travel Guide: Ram's Forest Exile Site",
  description:
    "Complete Chitrakoot guide — Kamadgiri parikrama, Ramghat on the Mandakini river, Hanuman Dhara, Gupt Godavari, Sati Anasuya Ashram, how to reach, and a full visit plan for this Ramayana circuit town.",
  keywords:
    "Chitrakoot travel guide, Kamadgiri, Ramghat Mandakini, Hanuman Dhara, Gupt Godavari, Sati Anasuya Ashram, Chitrakoot Ramayana, how to reach Chitrakoot, Bundelkhand, Chitrakoot Dham Karwi",
  openGraph: {
    title: "Chitrakoot Travel Guide: Ram's Forest Exile Site",
    description:
      "Where Ram, Sita, and Lakshman spent part of their exile — the Kamadgiri parikrama, Ramghat's evening aarti, Hanuman Dhara, and a quieter Ramayana-circuit alternative.",
    url: "https://club.kudozz.in/blog/chitrakoot-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hills and riverside setting at Chitrakoot on the Uttar Pradesh-Madhya Pradesh border",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chitrakoot Travel Guide: Ram's Forest Exile Site",
    description:
      "Kamadgiri, Ramghat on the Mandakini, Hanuman Dhara, and Gupt Godavari — the complete guide to this Ramayana-circuit town.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chitrakoot-travel-guide",
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
          headline: "Chitrakoot Travel Guide: Ram's Forest Exile Site",
          description:
            "Complete Chitrakoot guide — Kamadgiri parikrama, Ramghat on the Mandakini river, Hanuman Dhara, Gupt Godavari, Sati Anasuya Ashram, how to reach, and a full visit plan for this Ramayana circuit town.",
          image:
            "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
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
            "@id": "https://club.kudozz.in/blog/chitrakoot-travel-guide",
          },
          keywords:
            "Chitrakoot, Kamadgiri, Mandakini river, Ramayana circuit, pilgrimage, Bundelkhand",
          about: {
            "@type": "Place",
            name: "Chitrakoot",
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
                name: "Chitrakoot",
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
    q: "What is Chitrakoot's connection to the Ramayana?",
    a: "Chitrakoot is traditionally believed to be where Lord Ram, Sita, and Lakshman spent a significant part of their 14-year forest exile. The town, which straddles the Uttar Pradesh-Madhya Pradesh border, is dotted with sites associated with this period, making it an important stop on the wider Ramayana pilgrimage circuit.",
  },
  {
    q: "What is Kamadgiri and why don't pilgrims climb it?",
    a: "Kamadgiri is Chitrakoot's central sacred hill, considered the most important site in the town. Rather than climbing it, pilgrims perform a parikrama — a circumambulation on foot around its base — as the traditional and most sacred form of worship here.",
  },
  {
    q: "What can I do at Ramghat?",
    a: "Ramghat, on the banks of the Mandakini river, is Chitrakoot's main riverside ghat, known for its evening aarti ceremony and boat rides. It's one of the most atmospheric spots in town, especially at dusk.",
  },
  {
    q: "How do I reach Chitrakoot?",
    a: "Chitrakoot Dham Karwi railway station serves the town directly. By road, it's about 130 km from Prayagraj and around 250 km from Lucknow, with reasonable highway connectivity given its location in the Bundelkhand region.",
  },
  {
    q: "Is Chitrakoot a quieter alternative to Ayodhya or Varanasi?",
    a: "Yes — Chitrakoot carries genuine Ramayana significance but sees far fewer visitors and much less commercial development than India's bigger pilgrimage cities, making it appealing for travellers who want the mythology and atmosphere without the crowds.",
  },
  {
    q: "What is Gupt Godavari?",
    a: "Gupt Godavari refers to a pair of caves at Chitrakoot with a stream running through them, associated in local tradition with Ram and Lakshman. Visitors walk through the cool, narrow cave passages as part of the wider Chitrakoot circuit.",
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
  { id: "introduction", title: "Ram's Forest Exile Site", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chitrakoot", level: 2 },
  { id: "sacred-sites", title: "Sacred Sites of the Ramayana Circuit", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChitrakootGuidePage() {
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
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Forested hills and riverside setting at Chitrakoot on the Uttar Pradesh-Madhya Pradesh border"
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
                { label: "Chitrakoot", href: null },
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
                "Chitrakoot",
                "Kamadgiri",
                "Mandakini River",
                "Ramayana Circuit",
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
              Chitrakoot Travel Guide: Ram's Forest Exile Site
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Straddling the Uttar Pradesh-Madhya Pradesh border, where Ram,
              Sita, and Lakshman are believed to have spent part of their
              exile — Kamadgiri, Ramghat's evening aarti, and a quieter
              alternative to the bigger pilgrimage cities.
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
                  text: "Chitrakoot, Bundelkhand",
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
                  <h2>Ram's Forest Exile Site</h2>
                  <p>
                    <strong>Chitrakoot</strong> straddles the border between{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    and Madhya Pradesh, its forested hills and the Mandakini
                    river carrying deep significance in the Ramayana. Tradition
                    holds that this is where Lord Ram, his wife Sita, and his
                    brother Lakshman spent a substantial part of their
                    fourteen-year forest exile — making Chitrakoot one of the
                    most textually grounded stops on the wider Ramayana
                    pilgrimage circuit.
                  </p>
                  <p>
                    Unlike the sprawl and commercial intensity of India's
                    larger pilgrimage cities, Chitrakoot remains a smaller,
                    quieter town, its sacred geography organised around a
                    handful of closely spaced sites — Kamadgiri, Ramghat,
                    Hanuman Dhara, and Gupt Godavari among them. For
                    travellers drawn to the Ramayana's narrative more than
                    grand architecture, Chitrakoot offers something genuinely
                    different from the bigger circuits.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Chitrakoot at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "UP-Madhya Pradesh border, Bundelkhand",
                        },
                        {
                          icon: "🚗",
                          label: "From Prayagraj",
                          value: "~130 km by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "⛰️",
                          label: "Known For",
                          value: "Kamadgiri, Ramghat",
                        },
                        {
                          icon: "📖",
                          label: "Significance",
                          value: "Ram, Sita & Lakshman's exile site",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Station",
                          value: "Chitrakoot Dham Karwi",
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
                  <h2>Best Time to Visit Chitrakoot</h2>
                  <p>
                    Chitrakoot's climate, typical of the Bundelkhand region,
                    makes cooler months by far the more comfortable window
                    for temple hopping and the Kamadgiri parikrama.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather ideal for the Kamadgiri parikrama and visiting the wider circuit of sacred sites without summer heat.",
                      },
                      {
                        season: "Diwali & Deepdaan",
                        emoji: "🪔",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Most festive period",
                        text: "Chitrakoot's Diwali celebrations, especially the Deepdaan lighting along the Mandakini's ghats, are among the town's most atmospheric events.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Hot — avoid if possible",
                        text: "Bundelkhand summers are intense, making the parikrama and outdoor temple visits genuinely uncomfortable by midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon",
                        text: "The Mandakini swells and the surrounding hills turn lush green, though heavy rain can disrupt travel plans.",
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
                    temperatures for walking the parikrama and visiting the
                    full circuit of sacred sites at an unhurried pace.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chitrakoot</h2>
                  <p>
                    Chitrakoot sits within the Bundelkhand region, connected
                    by both a dedicated railway station and reasonable
                    highway links.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Chitrakoot Dham Karwi
                      railway station serves the town directly, with
                      connections toward major regional hubs.
                    </li>
                    <li>
                      <strong>By road from Prayagraj:</strong> About 130 km,
                      roughly a 3-hour drive — a common route for travellers
                      combining Chitrakoot with{" "}
                      <Link href="/blog/prayagraj-travel-guide">
                        Prayagraj
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>By road from Lucknow:</strong> Around 250 km,
                      a longer drive best suited to travellers with more
                      time or those combining Chitrakoot with a wider
                      Bundelkhand circuit including{" "}
                      <Link href="/blog/jhansi-travel-guide">Jhansi</Link>.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're already visiting
                    Prayagraj, add Chitrakoot as a natural extension rather
                    than a separate trip — the drive is manageable in half a
                    day each way.
                  </div>
                </section>

                {/* ── Sacred Sites ───────────────────────────────────────── */}
                <section id="sacred-sites">
                  <h2>Sacred Sites of the Ramayana Circuit</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Riverside ghats and forested hills around Chitrakoot's sacred sites"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Kamadgiri</h3>
                  <p>
                    Kamadgiri is Chitrakoot's most sacred site — a hill that
                    pilgrims do not climb but instead circle on foot in a
                    parikrama around its base, a practice considered the
                    holiest act of devotion here. The circumambulation path,
                    lined with small shrines and temples, typically takes
                    an hour or more at an unhurried, meditative pace.
                  </p>
                  <h3>Ramghat & the Mandakini River</h3>
                  <p>
                    Ramghat, on the banks of the Mandakini, is Chitrakoot's
                    main riverside ghat and one of its most atmospheric
                    spots, especially during the evening aarti when the
                    ghat steps fill with devotees and lamps float on the
                    water. Short boat rides along the river are also popular
                    here, offering a different vantage point on the town's
                    ghats and temples.
                  </p>
                  <h3>Hanuman Dhara</h3>
                  <p>
                    A spring set into a hillside, Hanuman Dhara is
                    mythologically linked to the story of Hanuman cooling
                    the burns from his tail after setting fire to Lanka.
                    Reaching the spring involves climbing a flight of steps
                    up the hillside, rewarded with good views over
                    Chitrakoot along the way.
                  </p>
                  <h3>Gupt Godavari & Sati Anasuya Ashram</h3>
                  <p>
                    Gupt Godavari consists of twin caves with a stream
                    running through them, associated in local tradition with
                    Ram and Lakshman — visitors walk through the cool,
                    narrow passages as part of the circuit. A short distance
                    away, Sati Anasuya Ashram, set in forested surroundings
                    along the Mandakini, is linked to the sage Atri and his
                    wife Anasuya and offers a quieter, more contemplative
                    stop away from the town's busier sites.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Chitrakoot</h2>
                  <p>
                    Chitrakoot has a reasonable range of pilgrimage-oriented
                    accommodation, most of it clustered near Ramghat and the
                    main temple areas.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Dharamshalas near Ramghat",
                          "Basic pilgrim guesthouses",
                          "Simple lodges near the station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,800/night",
                        picks: [
                          "Trust-run guesthouses with better amenities",
                          "Standard hotels near the main market",
                          "Comfortable riverside stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏨",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Best available hotels in Chitrakoot town",
                          "Upscale stays with modern amenities",
                          "Premium options near the main circuit",
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
                        title: "Kamadgiri & Ramghat",
                        color: "bg-purple-700",
                        activities: [
                          "Morning parikrama around Kamadgiri",
                          "Afternoon rest, explore the local market",
                          "Evening aarti and boat ride at Ramghat",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Hanuman Dhara & Gupt Godavari",
                        color: "bg-amber-700",
                        activities: [
                          "Morning climb to Hanuman Dhara",
                          "Visit Gupt Godavari caves",
                          "Stop at Sati Anasuya Ashram before departure",
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
                    * Travellers with more time often continue on to{" "}
                    <Link href="/blog/jhansi-travel-guide">Jhansi</Link> for
                    a wider Bundelkhand history circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Chitrakoot</h2>
                  <ul>
                    <li>
                      <strong>Prasad and temple kitchens:</strong> Simple
                      vegetarian meals and prasad available around the
                      Kamadgiri and Ramghat areas.
                    </li>
                    <li>
                      <strong>Local dhabas and eateries:</strong> Basic
                      vegetarian North Indian meals in the main market area.
                    </li>
                    <li>
                      <strong>Riverside stalls near Ramghat:</strong>{" "}
                      Snacks and light refreshments convenient for evening
                      aarti visits.
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
                            "₹800",
                            "₹2,500",
                            "₹5,500",
                          ],
                          ["Local transport/day", "₹300", "₹800", "₹1,800"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Boat ride at Ramghat", "₹100–₹200", "₹100–₹200", "₹100–₹200"],
                          ["Temple entry", "Free", "Free", "Free"],
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
                    * Figures are per person, per day. Most temple entries
                    are free; donations are customary.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chitrakoot</h2>
                  <ul>
                    <li>
                      <strong>Wear comfortable footwear for the parikrama:</strong>{" "}
                      The circumambulation path around Kamadgiri covers real
                      distance and is best done in sturdy walking shoes.
                    </li>
                    <li>
                      <strong>Time your visit for the evening aarti:</strong>{" "}
                      Ramghat's aarti is one of the town's highlights — plan
                      your day to be there by dusk.
                    </li>
                    <li>
                      <strong>Carry a torch for Gupt Godavari:</strong> The
                      cave passages can be dim and narrow in places.
                    </li>
                    <li>
                      <strong>Dress modestly throughout:</strong> Standard
                      respectful dress is expected across all the sacred
                      sites here.
                    </li>
                    <li>
                      <strong>Combine with Prayagraj or Jhansi:</strong>{" "}
                      Chitrakoot works well as an extension of either
                      itinerary rather than a standalone trip.
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
                          "Walk the Kamadgiri parikrama at an unhurried pace",
                          "Time your evening at Ramghat for the aarti",
                          "Carry a torch for Gupt Godavari's caves",
                          "Wear sturdy shoes for the parikrama and Hanuman Dhara steps",
                          "Combine with Prayagraj or Jhansi",
                          "Dress modestly at all sacred sites",
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
                          "Attempt to climb Kamadgiri itself",
                          "Visit in peak summer heat if avoidable",
                          "Rush the parikrama without proper footwear",
                          "Skip the evening aarti at Ramghat",
                          "Expect large hotel chains in town",
                          "Miss Sati Anasuya Ashram if you enjoy quieter sites",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Chitrakoot with{" "}
                    <Link href="/blog/prayagraj-travel-guide">
                      Prayagraj
                    </Link>{" "}
                    on one side, or continue to{" "}
                    <Link href="/blog/jhansi-travel-guide">Jhansi</Link> for
                    a fuller Bundelkhand and Ramayana-circuit itinerary
                    across{" "}
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
                  "Chitrakoot",
                  "Uttar Pradesh",
                  "Ramayana Circuit",
                  "Kamadgiri",
                  "Mandakini River",
                  "Pilgrimage",
                  "Bundelkhand",
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

              <RelatedPostsGrid currentSlug="chitrakoot-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chitrakoot-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
