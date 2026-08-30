// src/app/blog/mehrauli-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mehrauli Travel Guide: Qutub Minar & Ancient Delhi",
  description:
    "Complete Mehrauli travel guide — Qutub Minar, the rust-resistant Iron Pillar, Mehrauli Archaeological Park, Jamali Kamali, Rajon ki Baoli, the Qutub Festival, and a half-day walking itinerary through Delhi's oldest settlement.",
  keywords:
    "Mehrauli travel guide, Qutub Minar, Mehrauli Archaeological Park, Iron Pillar Delhi, Jamali Kamali Mosque, Rajon ki Baoli, Balban's Tomb, Qutub Festival, Dargah Qutub Sahib, oldest inhabited area Delhi, Qutb al-Din Aibak, Alai Darwaza",
  openGraph: {
    title: "Mehrauli Travel Guide: Qutub Minar & Ancient Delhi",
    description:
      "Delhi's oldest continuously inhabited settlement — Qutub Minar, the Iron Pillar, a forest full of forgotten tombs, and 800+ years of layered history in one neighbourhood.",
    url: "https://club.kudozz.in/blog/mehrauli-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Red sandstone fort walls at golden hour, evoking the Sultanate-era stonework of Mehrauli's Qutub Minar complex",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehrauli Travel Guide: Qutub Minar & Ancient Delhi",
    description:
      "Qutub Minar, the Iron Pillar, and a forest full of forgotten tombs — the complete guide to Delhi's oldest continuously inhabited settlement.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mehrauli-delhi-travel-guide",
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
          headline: "Mehrauli Travel Guide: Qutub Minar & Ancient Delhi",
          description:
            "Complete Mehrauli travel guide — Qutub Minar, the rust-resistant Iron Pillar, Mehrauli Archaeological Park, Jamali Kamali, Rajon ki Baoli, the Qutub Festival, and a half-day walking itinerary through Delhi's oldest settlement.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/mehrauli-delhi-travel-guide",
          },
          keywords:
            "Mehrauli travel guide, Qutub Minar, Mehrauli Archaeological Park, Iron Pillar Delhi, Jamali Kamali Mosque, Rajon ki Baoli, Qutub Festival",
          about: {
            "@type": "Place",
            name: "Mehrauli",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mehrauli",
              addressRegion: "Delhi",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mehrauli",
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
    q: "How old is Mehrauli?",
    a: "Mehrauli is widely regarded as the oldest continuously inhabited settlement in Delhi, with roots going back over a thousand years to the Tomar Rajputs, well before it became the capital of the Delhi Sultanate in 1206. Unlike Delhi's other historic quarters, which were largely abandoned and rebuilt elsewhere by successive dynasties, Mehrauli has remained a living neighbourhood — village, monuments, and modern city — for more than 800 years without a real break.",
  },
  {
    q: "How much time do I need for Qutub Minar?",
    a: "Budget 1.5 to 2 hours for the Qutub Minar complex itself — the minaret, Iron Pillar, Quwwat-ul-Islam Mosque, and Alai Darwaza are all within a compact, walkable enclosure. If you're combining it with Mehrauli Archaeological Park next door, set aside a half day (roughly 4 hours) to do both without rushing.",
  },
  {
    q: "Can you climb Qutub Minar?",
    a: "No. Public access to climb the interior staircase has been closed since 1981, following a stampede triggered by a power outage that killed several schoolchildren inside. Visitors can walk around the base and view the minaret from ground level and the surrounding complex, but the tower itself is closed to entry.",
  },
  {
    q: "Is Mehrauli Archaeological Park safe?",
    a: "Generally yes during daylight hours, but it's a genuinely different experience from the fenced, ticketed Qutub Minar complex next door — it's a semi-wild, forested area with loose dogs, monkeys, and uneven terrain, and some of the outlying monuments sit along unmarked or overgrown paths. Visit in daylight, stick to worn trails, avoid the park after dusk, and consider a guide for the lesser-known structures, since signage is minimal.",
  },
  {
    q: "Why doesn't the Iron Pillar rust?",
    a: "The 4th-century Iron Pillar owes its resistance to a naturally formed protective layer of misawite (an iron hydrogen phosphate compound) that developed on its surface over centuries, a byproduct of the high phosphorus content and specific forging technique used by Gupta-era metalworkers. It's considered a landmark achievement of ancient Indian metallurgy, roughly 800 years older than the minaret it now stands beside.",
  },
  {
    q: "Is Qutub Minar older than the Iron Pillar?",
    a: "No — it's the other way around. The Iron Pillar dates to around the 4th century CE, from the Gupta era, and was moved to its current site later. Qutub Minar itself was begun around 1192-93 CE by Qutb al-Din Aibak, making the pillar roughly 800 years older than the minaret standing next to it today.",
  },
  {
    q: "What is the entry fee for Qutub Minar?",
    a: "Entry fees are nominal for Indian nationals and higher for foreign nationals, with children under 15 typically free; tickets can be bought online through the ASI's booking portal or at the gate. Mehrauli Archaeological Park itself has no entry fee, since it's an open public park rather than a ticketed ASI monument.",
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
  { id: "introduction", title: "Mehrauli: Delhi's Oldest Quarter", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mehrauli", level: 2 },
  { id: "qutub-minar", title: "Qutub Minar & Complex", level: 2 },
  { id: "archaeological-park", title: "Mehrauli Archaeological Park", level: 2 },
  { id: "qutub-festival", title: "The Qutub Festival", level: 2 },
  { id: "village-dargah", title: "Mehrauli Village & Dargah Qutub Sahib", level: 2 },
  { id: "itinerary", title: "Half-Day Walking Itinerary", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MehrauliGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Red sandstone fort walls at golden hour, evoking the Sultanate-era stonework of Mehrauli's Qutub Minar complex"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "Mehrauli", href: null },
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
                "Mehrauli",
                "Delhi",
                "Qutub Minar",
                "Heritage Walk",
                "UNESCO Site",
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
              Mehrauli Travel Guide: Qutub Minar & Delhi's Oldest Quarter
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 73-metre Sultanate-era minaret, a 1,600-year-old pillar that
              refuses to rust, and a forest scattered with forgotten tombs —
              Mehrauli has been continuously lived in for over 800 years, and
              it shows in every layer of it.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mehrauli, South Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,900 words",
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
                  <h2>Mehrauli: Delhi's Oldest Quarter</h2>
                  <p>
                    Of all the districts folded into modern{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>,{" "}
                    <strong>Mehrauli</strong> makes the strongest claim to
                    being its oldest continuously inhabited settlement — a
                    village that predates the Mughals, predates the Delhi
                    Sultanate, and has never gone through the kind of
                    wholesale abandonment that emptied out Delhi's other
                    historic cities. Tughlaqabad was built, occupied, and
                    largely deserted within decades. Old Delhi (Shahjahanabad)
                    is a comparatively recent 17th-century addition. Mehrauli,
                    by contrast, has had people living in and around it more
                    or less without interruption since at least the Tomar
                    Rajput period, over a thousand years ago.
                  </p>
                  <p>
                    That unbroken thread is exactly what makes it fascinating
                    to walk through today. A single neighbourhood holds a
                    4th-century iron pillar, a 12th-century minaret, 14th- and
                    16th-century tombs scattered through a public forest, a
                    living dargah still drawing pilgrims, and an ordinary
                    urban village bazaar selling vegetables a few hundred
                    metres from all of it — 800-plus years of layered history
                    compressed into one walkable quarter of South Delhi.
                  </p>
                  <p>
                    Most visitors come for one reason: the{" "}
                    <strong>Qutub Minar</strong>, a UNESCO World Heritage Site
                    and the tallest brick minaret in the world. That alone is
                    worth the trip. But treating Mehrauli as a single-monument
                    stop badly undersells it — right next door sits{" "}
                    <strong>Mehrauli Archaeological Park</strong>, a
                    semi-forested expanse dotted with dozens of lesser-known
                    tombs, mosques, and stepwells that most tourists never
                    see. This guide covers both, plus the village, the annual
                    Qutub Festival, and a realistic half-day itinerary to tie
                    it all together.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Mehrauli at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Delhi, near Saket",
                        },
                        {
                          icon: "🏛️",
                          label: "Qutub Minar Height",
                          value: "~73 m, tallest brick minaret",
                        },
                        {
                          icon: "📅",
                          label: "Construction Began",
                          value: "1192–93 CE",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Qutub Minar (Yellow Line)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Visit",
                          value: "₹300 – ₹1,500",
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
                  <h2>Best Time to Visit Mehrauli</h2>
                  <p>
                    Mehrauli's two main draws — Qutub Minar's complex and the
                    largely uncovered Archaeological Park — both involve
                    extended time outdoors on stone and forest paths, so the
                    season matters more here than in most parts of Delhi.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days (10–26°C) make both the Qutub Minar complex and the longer, shadeless walk through the Archaeological Park genuinely pleasant.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid the park midday",
                        text: "Temperatures regularly cross 40°C. The Archaeological Park has minimal shade, so if you must visit, go at opening time and skip the midday hours entirely.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — greener but slippery",
                        text: "The park turns lush and atmospheric, but stone steps and unpaved trails to outlying monuments get slick — good footwear matters more than usual.",
                      },
                      {
                        season: "Feb (Qutub Festival)",
                        emoji: "🎭",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cultural bonus, bigger crowds",
                        text: "The annual Qutub Festival brings classical music and dance performances against the complex's backdrop — atmospheric, but book accommodation and expect fuller crowds.",
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
                    <strong>Our pick:</strong> a weekday morning between
                    November and February. The Qutub Minar complex opens
                    early and gets crowded fast with tour groups — arriving
                    right at opening gives you a genuinely quiet first hour.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mehrauli</h2>
                  <p>
                    Mehrauli sits in South Delhi, close to Saket and Vasant
                    Kunj, and is one of the more straightforward parts of the
                    city to reach independent of where you're staying.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> The Qutub Minar station on
                      the Yellow Line drops you within a short walk (or a
                      quick auto ride) of the monument complex — by far the
                      easiest and most reliable way in, especially during
                      peak traffic hours.
                    </li>
                    <li>
                      <strong>By App-based Cab or Auto:</strong> Widely
                      available from anywhere in Delhi; expect 30–50 minutes
                      from Central Delhi depending on traffic, less from{" "}
                      <Link href="/blog/hauz-khas-delhi-travel-guide">
                        Hauz Khas
                      </Link>{" "}
                      or Saket.
                    </li>
                    <li>
                      <strong>By Bus:</strong> DTC buses run to Mehrauli
                      terminal from various points in the city, though the
                      metro is more predictable for visitors unfamiliar with
                      Delhi's bus routes.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> From Qutub Minar metro
                    station, it's roughly a 10–15 minute walk to the complex
                    gate, or a 5-minute auto ride — either works, but the walk
                    gives you a first look at the minaret rising over the
                    treeline before you're even inside.
                  </div>
                </section>

                {/* ── Qutub Minar ───────────────────────────────────────── */}
                <section id="qutub-minar">
                  <h2>Qutub Minar & Complex</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic sandstone monument architecture reminiscent of the Qutub Minar complex's carved stonework"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The <strong>Qutub Minar</strong> is the reason most
                    people first hear of Mehrauli, and it earns the
                    reputation. Standing at roughly <strong>73 metres</strong>,
                    it's the tallest brick minaret in the world and a UNESCO
                    World Heritage Site, its five tapering storeys carved with
                    intricate bands of Quranic inscriptions and geometric
                    patterning that shift subtly from red sandstone at the
                    base to marble and sandstone near the top.
                  </p>
                  <p>
                    Construction began around <strong>1192–93 CE</strong>,
                    commissioned by <strong>Qutb al-Din Aibak</strong>, the
                    first ruler of the Delhi Sultanate, to commemorate the
                    start of Muslim rule in Delhi. Aibak completed only the
                    first storey in his lifetime; his successor{" "}
                    <strong>Iltutmish</strong> added three more, and the fifth
                    and final storey was rebuilt in a different style by{" "}
                    <strong>Firoz Shah Tughlaq</strong> in the 14th century
                    after lightning damage — meaning the minaret itself is a
                    layered construction project spanning roughly 150 years
                    of Sultanate history, not a single building campaign.
                  </p>

                  <h3>The Iron Pillar</h3>
                  <p>
                    Standing in the courtyard just in front of the minaret is
                    the complex's other famous attraction: the{" "}
                    <strong>Iron Pillar</strong>, a roughly 7-metre column
                    dating to the <strong>4th century CE</strong>, from the
                    Gupta era — making it nearly <strong>800 years older</strong>{" "}
                    than the minaret standing beside it. It was moved to this
                    site from elsewhere and originally bore a Sanskrit
                    inscription referencing a Gupta king, most likely
                    Chandragupta II.
                  </p>
                  <p>
                    What makes it genuinely remarkable is that, after roughly
                    1,600 years exposed to Delhi's weather, it has barely
                    rusted. Metallurgists attribute this to a thin protective
                    layer — a compound called misawite — that formed
                    naturally on its surface due to the pillar's unusually
                    high phosphorus content and the specific forging technique
                    used, a level of metallurgical skill that still draws
                    researchers today. A railing now keeps visitors from
                    touching it, both to protect the pillar and to end the
                    old tradition of trying to encircle it with your arms
                    behind your back for luck.
                  </p>

                  <h3>Quwwat-ul-Islam Mosque & Alai Darwaza</h3>
                  <ul>
                    <li>
                      <strong>Quwwat-ul-Islam Mosque:</strong> Built alongside
                      the minaret's earliest phase, this is among the oldest
                      surviving mosques in India, assembled partly from
                      columns and materials taken from demolished Hindu and
                      Jain temples — a detail that shows plainly in the
                      carved pillars still visible in the cloisters.
                    </li>
                    <li>
                      <strong>Alai Darwaza:</strong> A striking red sandstone
                      and white marble gateway added by Alauddin Khalji in
                      1311, considered one of the finest examples of early
                      Indo-Islamic architecture in India, with a genuinely
                      elegant horseshoe-shaped arch and detailed lattice
                      screens.
                    </li>
                    <li>
                      <strong>Alai Minar:</strong> An unfinished, much stubbier
                      tower Alauddin Khalji began nearby, intended to dwarf
                      the Qutub Minar itself — construction stopped after his
                      death and the stump still stands, a curious "what if"
                      a short walk from the finished minaret.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Climbing the Qutub Minar has
                    been closed to the public since 1981, after a stampede
                    inside the tower during a power cut killed several
                    schoolchildren. You can walk fully around its base and
                    photograph it from multiple angles within the complex,
                    but entry into the tower itself isn't permitted.
                  </div>
                </section>

                {/* ── Archaeological Park ───────────────────────────────── */}
                <section id="archaeological-park">
                  <h2>Mehrauli Archaeological Park</h2>
                  <p>
                    Directly adjacent to the Qutub Minar complex — and free
                    to enter, unlike it — is <strong>Mehrauli Archaeological
                    Park</strong>, a roughly 200-acre expanse of forest and
                    scrubland that most tourists skip entirely, which is
                    exactly why it's worth the detour. Scattered through the
                    trees are somewhere between 60 and 100 structures
                    spanning centuries: tombs, mosques, gateways, stepwells,
                    and the ruins of a British-era country house, most with
                    minimal signage and almost none of the crowds next door.
                  </p>
                  <ul>
                    <li>
                      <strong>Jamali Kamali Mosque & Tomb:</strong> The park's
                      best-known structure — a 16th-century mosque and
                      adjoining tomb built for Jamali, a Sufi poet and courtier
                      to several Delhi Sultanate and early Mughal rulers, whose
                      remains lie beside a mysterious "Kamali" whose identity
                      is still debated. The tomb's ceiling retains some of the
                      finest surviving painted plasterwork from the period.
                    </li>
                    <li>
                      <strong>Rajon ki Baoli:</strong> A large, beautifully
                      preserved four-storey stepwell from the early 16th
                      century, with arched colonnades descending toward the
                      water — among the best-preserved baolis in Delhi and a
                      genuinely striking piece of functional architecture.
                    </li>
                    <li>
                      <strong>Balban's Tomb:</strong> The burial place of
                      Ghiyasuddin Balban, a powerful 13th-century Delhi
                      Sultanate ruler, and architecturally significant as one
                      of the earliest known uses of the true arch in Indian
                      construction, a technique later refined throughout
                      Mughal architecture.
                    </li>
                    <li>
                      <strong>Dozens of lesser-known monuments:</strong> Small
                      unnamed tombs, gateways, and mosque ruins are scattered
                      throughout the park's forested paths, many without
                      identifying plaques — part of what makes exploring here
                      feel more like discovery than sightseeing.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> A guide genuinely adds value
                    here — most of the lesser monuments have no signage, and
                    trails aren't always obvious. INTACH and several local
                    heritage groups run periodic walks through the park; check
                    ahead if you want context rather than just wandering.
                  </div>
                </section>

                {/* ── Qutub Festival ────────────────────────────────────── */}
                <section id="qutub-festival">
                  <h2>The Qutub Festival</h2>
                  <p>
                    Each year, typically in <strong>late November or early
                    December</strong>, the Delhi Tourism department stages
                    the <strong>Qutub Festival</strong> — a multi-day
                    programme of classical Indian music and dance performances
                    held against the floodlit backdrop of the Qutub Minar
                    complex. Renowned classical musicians and dancers have
                    performed here over the years, and the setting is a
                    genuine draw in itself: watching a classical recital
                    unfold with a 12th-century minaret lit up behind the
                    stage is not something you get in many other places.
                  </p>
                  <p>
                    Exact dates shift year to year, so it's worth checking
                    Delhi Tourism's official channels close to your travel
                    dates if you want to time a visit around it. Expect
                    heavier evening crowds around the complex during the
                    festival window, and book accommodation in South Delhi a
                    little earlier than usual if your dates overlap.
                  </p>
                </section>

                {/* ── Village & Dargah ──────────────────────────────────── */}
                <section id="village-dargah">
                  <h2>Mehrauli Village & Dargah Qutub Sahib</h2>
                  <p>
                    Step outside the monument complex and Mehrauli is also,
                    simply, an ordinary Delhi urban village — narrow lanes,
                    vegetable carts, tea stalls, and small shops that have
                    nothing to do with tourism and everything to do with
                    daily life continuing exactly where it has for centuries.
                    It's a useful reminder that this isn't a museum piece;
                    people have lived here, uninterrupted, the entire time
                    the monuments were being built around them.
                  </p>
                  <p>
                    At the heart of the village bazaar sits{" "}
                    <strong>Dargah Qutub Sahib</strong>, the shrine of the
                    13th-century Sufi saint Khwaja Qutbuddin Bakhtiar Kaki —
                    one of Delhi's most revered dargahs and, notably, the
                    saint after whom the Qutub Minar itself is popularly
                    believed to be named. It remains an active place of
                    worship, drawing devotees of multiple faiths, particularly
                    dense with visitors on Thursday evenings when qawwali is
                    often performed. Dress modestly and remove footwear before
                    entering, as at any working shrine.
                  </p>
                  <p>
                    Just beyond the village, Mehrauli also borders more
                    recognisable pockets of{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi
                    </Link>{" "}
                    — worth knowing if you're stitching together a longer day
                    that also takes in{" "}
                    <Link href="/blog/hauz-khas-delhi-travel-guide">
                      Hauz Khas
                    </Link>{" "}
                    or the very different, largely abandoned fortress city of{" "}
                    <Link href="/blog/tughlaqabad-delhi-travel-guide">
                      Tughlaqabad
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Half-Day Walking Itinerary</h2>
                  <p>
                    Mehrauli rewards a single, focused half-day rather than a
                    rushed hour — here's a realistic sequence that covers the
                    Qutub Minar complex, the Archaeological Park, and the
                    village without feeling like a sprint.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "9:00 AM",
                        title: "Qutub Minar Complex",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive at opening time to beat tour-group crowds",
                          "The minaret, Iron Pillar, and Quwwat-ul-Islam Mosque",
                          "Alai Darwaza and the unfinished Alai Minar",
                        ],
                      },
                      {
                        day: "11:00 AM",
                        title: "Mehrauli Archaeological Park",
                        color: "bg-forest-600",
                        activities: [
                          "Enter through the park's dedicated gate nearby",
                          "Jamali Kamali Mosque & Tomb",
                          "Rajon ki Baoli stepwell and Balban's Tomb",
                        ],
                      },
                      {
                        day: "1:00 PM",
                        title: "Village & Dargah",
                        color: "bg-sky-600",
                        activities: [
                          "Walk into Mehrauli village bazaar",
                          "Visit Dargah Qutub Sahib (modest dress, remove shoes)",
                          "Lunch at a nearby local eatery",
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
                    * If you'd rather see the lesser-known park monuments in
                    more depth, split this across a full day, or add on a
                    nearby stop like Hauz Khas Village for the afternoon
                    instead of rushing the village bazaar.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Mehrauli</h2>
                  <p>
                    Mehrauli itself is fairly light on dedicated restaurants
                    compared to Delhi's dining neighbourhoods, but a short
                    drive in either direction fixes that easily.
                  </p>
                  <ul>
                    <li>
                      <strong>Local dhabas in Mehrauli village:</strong>{" "}
                      Simple, inexpensive North Indian food — good for a
                      quick, filling lunch after a morning of walking without
                      needing to travel far.
                    </li>
                    <li>
                      <strong>Saket malls (Select Citywalk, DLF Place):</strong>{" "}
                      A short cab ride away, with a full range of restaurant
                      chains and food courts if you want more variety.
                    </li>
                    <li>
                      <strong>Hauz Khas Village cafés:</strong> A slightly
                      longer trip, but worth it if you're extending your day
                      there — a completely different, café-and-bar scene set
                      around another set of ruins.
                    </li>
                    <li>
                      <strong>Ambawatta One:</strong> A boutique courtyard
                      complex a short walk from the Qutub Minar complex, with
                      a handful of upscale cafés and restaurants — a
                      convenient, comfortable stop right after sightseeing.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Mehrauli is one of Delhi's more affordable half-day trips
                    — the Archaeological Park is free, and the Qutub Minar
                    entry fee is modest, so most of your spending goes toward
                    transport and food.
                  </p>
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
                          [
                            "Qutub Minar entry (Indian national)",
                            "₹35–₹50",
                            "₹35–₹50",
                            "₹35–₹50",
                          ],
                          [
                            "Mehrauli Archaeological Park",
                            "Free",
                            "Free",
                            "Free",
                          ],
                          [
                            "Local transport (round trip)",
                            "₹100 (metro)",
                            "₹500 (auto)",
                            "₹1,000+ (cab)",
                          ],
                          ["Food/meal", "₹150", "₹500", "₹1,200"],
                          [
                            "Optional guided park walk",
                            "—",
                            "₹500–₹1,000",
                            "₹1,500+",
                          ],
                          [
                            "Half-day total",
                            "₹300–₹400",
                            "₹1,500",
                            "₹3,500+",
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
                    * Entry fees are typically higher for foreign nationals —
                    check current ASI rates before visiting. Figures exclude
                    travel to Delhi itself.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mehrauli</h2>
                  <ul>
                    <li>
                      <strong>Go early to beat both heat and crowds:</strong>{" "}
                      Tour buses arrive mid-morning; an early start gives you
                      a quieter, cooler complex before either sets in.
                    </li>
                    <li>
                      <strong>Carry water into the Archaeological Park:</strong>{" "}
                      There are no reliable vendors deep inside the park —
                      bring your own, especially outside the winter months.
                    </li>
                    <li>
                      <strong>Wear sturdy, closed footwear:</strong> The park's
                      trails are uneven, and stepwells like Rajon ki Baoli
                      involve descending worn stone steps.
                    </li>
                    <li>
                      <strong>Watch for monkeys and stray dogs:</strong> Both
                      are common in the park — don't carry visible food, and
                      give animals space rather than approaching them.
                    </li>
                    <li>
                      <strong>Snake caution in overgrown areas:</strong> As
                      with any forested park in Delhi, stick to worn paths
                      rather than pushing into thick undergrowth, particularly
                      after monsoon.
                    </li>
                    <li>
                      <strong>Consider a guide for the park:</strong> Most
                      lesser-known monuments have no signage — a local or
                      heritage-walk guide adds real context that's otherwise
                      easy to miss entirely.
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
                          "Arrive at opening time for a quieter Qutub Minar",
                          "Combine Qutub Minar with the free Archaeological Park",
                          "Carry water and wear closed, sturdy shoes",
                          "Dress modestly for Dargah Qutub Sahib",
                          "Book online tickets to skip the entry queue",
                          "Check Qutub Festival dates if visiting Nov–Dec",
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
                          "Expect to climb the Qutub Minar — it's closed since 1981",
                          "Wander far off marked trails in the Archaeological Park",
                          "Visit the park after dusk — it isn't lit or patrolled",
                          "Skip carrying water on a summer visit",
                          "Approach monkeys or carry visible food near them",
                          "Rush the park in under an hour — it deserves more time",
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
                    <strong>🗺️ Extend the trip:</strong> Mehrauli pairs
                    naturally with a fuller South Delhi heritage day —
                    continue on to{" "}
                    <Link href="/blog/hauz-khas-delhi-travel-guide">
                      Hauz Khas
                    </Link>{" "}
                    for its own reservoir-and-madrasa ruins, or head further
                    out to the eerily abandoned fortress city of{" "}
                    <Link href="/blog/tughlaqabad-delhi-travel-guide">
                      Tughlaqabad
                    </Link>{" "}
                    for a completely different flavour of Delhi Sultanate
                    history.
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
                  "Mehrauli",
                  "Delhi",
                  "Qutub Minar",
                  "Iron Pillar",
                  "Mehrauli Archaeological Park",
                  "UNESCO World Heritage Site",
                  "Heritage Walk",
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

              <RelatedPostsGrid currentSlug="mehrauli-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mehrauli-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
