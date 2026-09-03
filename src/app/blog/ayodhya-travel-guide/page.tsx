// src/app/blog/ayodhya-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ayodhya Travel Guide: Ram Mandir & Saryu Ghats",
  description:
    "Complete Ayodhya travel guide — the Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu River aarti, how to reach, entry rules, where to stay, and a full visit plan.",
  keywords:
    "Ayodhya travel guide, Ram Mandir, Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, Saryu River, Ayodhya Dham, Deepotsav, how to reach Ayodhya, Maharishi Valmiki Airport",
  openGraph: {
    title: "Ayodhya Travel Guide: Ram Mandir & Saryu Ghats",
    description:
      "The traditional birthplace of Lord Ram — the newly consecrated Ram Mandir, Hanuman Garhi, and the Saryu River's evening aarti.",
    url: "https://club.kudozz.in/blog/ayodhya-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Ornate temple architecture and pilgrim gathering, evocative of Ayodhya's Ram Mandir complex",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodhya Travel Guide: Ram Mandir & Saryu Ghats",
    description:
      "The newly consecrated Ram Mandir, Hanuman Garhi, and the Saryu River's evening aarti — the complete Ayodhya guide.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ayodhya-travel-guide",
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
          headline: "Ayodhya Travel Guide: Ram Mandir & Saryu Ghats",
          description:
            "Complete Ayodhya travel guide — the Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu River aarti, how to reach, entry rules, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
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
            "@id": "https://club.kudozz.in/blog/ayodhya-travel-guide",
          },
          keywords:
            "Ayodhya, Ram Mandir, Ram Janmabhoomi, Hanuman Garhi, Saryu River, Deepotsav",
          about: {
            "@type": "Place",
            name: "Ayodhya",
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
                name: "Ayodhya",
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
    q: "When was the Ram Mandir in Ayodhya consecrated?",
    a: "The Ram Mandir's Pran Pratishtha (consecration) ceremony took place in January 2024, marking the completion of the temple's ground floor sanctum. Construction of the wider complex — including additional floors and surrounding structures — has continued in phases since, so parts of the site may still be under development when you visit.",
  },
  {
    q: "Can I carry my phone or bag inside the Ram Mandir?",
    a: "No. Mobile phones, cameras, bags, and most electronic items are not allowed inside the temple complex for security reasons. Cloakroom facilities are available near the entry points — plan to leave these items there before joining the darshan queue.",
  },
  {
    q: "How do I reach Ayodhya?",
    a: "Ayodhya is served by Maharishi Valmiki International Airport, a newly built airport with growing flight connectivity, as well as Ayodhya Dham railway station (also called Ayodhya Junction), which has expanded significantly with direct trains from Delhi, Lucknow, and other major cities. By road, NH330 and NH27 connect Ayodhya to Lucknow (~130km) and other regional hubs.",
  },
  {
    q: "Is Ayodhya crowded, and when is the best time to avoid crowds?",
    a: "Yes, especially since the Ram Mandir's opening — daily visitor volumes are high year-round, with long queues for darshan. Weekdays outside major festivals are relatively calmer; Ram Navami (March/April) and Diwali's Deepotsav celebrations (October/November) bring the largest crowds of the year.",
  },
  {
    q: "What is Ayodhya's Deepotsav?",
    a: "Deepotsav is Ayodhya's large-scale Diwali lamp-lighting celebration, during which hundreds of thousands of earthen lamps are lit along the Saryu River ghats, often setting world records for the number of lamps lit simultaneously. It has become one of the city's biggest annual events since being scaled up in recent years.",
  },
  {
    q: "How many days should I spend in Ayodhya?",
    a: "A full day covers the Ram Mandir, Hanuman Garhi, and a Saryu ghat visit, though queues at the Ram Mandir can extend this significantly. Two days allow a more relaxed pace including Kanak Bhawan, Nageshwarnath Temple, and Treta Ke Thakur without rushing.",
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
  { id: "introduction", title: "Birthplace of Lord Ram", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ayodhya", level: 2 },
  { id: "attractions", title: "Temples & Ghats", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AyodhyaGuidePage() {
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
              src="/images/destinations/manali/hadimba-temple.jpg"
              alt="Ornate temple architecture and pilgrim gathering, evocative of Ayodhya's Ram Mandir complex"
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
                { label: "Ayodhya", href: null },
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
                "Ayodhya",
                "Ram Mandir",
                "Uttar Pradesh",
                "Saryu River",
                "Pilgrimage",
                "Deepotsav",
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
              Ayodhya: Ram Mandir, Saryu Ghats & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The traditional birthplace of Lord Ram — the newly
              consecrated Ram Mandir, Hanuman Garhi, and the Saryu River's
              evening aarti, now one of India's fastest-growing pilgrimage
              destinations.
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
                  text: "Ayodhya, Uttar Pradesh",
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
                  <h2>Birthplace of Lord Ram</h2>
                  <p>
                    <strong>Ayodhya</strong>, on the banks of the{" "}
                    <strong>Saryu River</strong> in eastern Uttar Pradesh,
                    is revered in Hindu tradition as the birthplace of{" "}
                    <strong>Lord Ram</strong> and the setting for much of
                    the Ramayana. For centuries a significant pilgrimage
                    town, Ayodhya has, since January 2024, become one of
                    India's fastest-growing religious destinations
                    following the consecration of the{" "}
                    <strong>Ram Mandir</strong> at the site long known as
                    Ram Janmabhoomi.
                  </p>
                  <p>
                    The temple's ground-floor sanctum was consecrated in a
                    widely watched Pran Pratishtha ceremony, though
                    construction of the wider complex has continued in
                    phases since — expect scaffolding or ongoing work in
                    parts of the grounds depending on when you visit.
                    Daily visitor numbers are substantial, and the city has
                    seen rapid infrastructure growth in response — new
                    roads, expanded hotel capacity, and a newly built
                    airport.
                  </p>
                  <p>
                    Beyond the Ram Mandir, Ayodhya's older pilgrimage
                    circuit remains very much alive: <strong>Hanuman
                    Garhi</strong>, <strong>Kanak Bhawan</strong>, the{" "}
                    <strong>Saryu ghats</strong> and their evening aarti,{" "}
                    <strong>Nageshwarnath Temple</strong>, and{" "}
                    <strong>Treta Ke Thakur</strong> together give a fuller
                    picture of the city than the new temple alone.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Ayodhya at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Banks of the Saryu River, UP",
                        },
                        {
                          icon: "✈️",
                          label: "Access",
                          value: "New airport, expanded rail station",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Ram Mandir, Hanuman Garhi",
                        },
                        {
                          icon: "🪔",
                          label: "Big Festival",
                          value: "Deepotsav (Diwali)",
                        },
                        {
                          icon: "📵",
                          label: "Note",
                          value: "No phones/bags inside Ram Mandir",
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
                  <h2>Best Time to Visit Ayodhya</h2>
                  <p>
                    Ayodhya's weather follows the familiar North Indian
                    pattern, but with visitor volumes now high year-round,
                    timing your trip around — or specifically for —
                    festivals matters more than ever.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for standing in darshan queues and walking between the Ram Mandir, Hanuman Garhi, and the ghats.",
                      },
                      {
                        season: "Ram Navami (Mar/Apr)",
                        emoji: "🏹",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Ram's birthday — huge crowds",
                        text: "One of Ayodhya's biggest festival windows, celebrating Ram's birth with elaborate processions and ceremonies — expect very heavy crowds.",
                      },
                      {
                        season: "Deepotsav (Oct/Nov)",
                        emoji: "🪔",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Diwali lamp festival — spectacular",
                        text: "Hundreds of thousands of lamps are lit along the Saryu ghats in a record-setting display — visually stunning but extremely crowded.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Very hot — avoid",
                        text: "High heat combined with long outdoor darshan queues makes this the toughest window to visit comfortably.",
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
                    <strong>Our pick:</strong> October to March on a
                    regular weekday for the most manageable queues.
                    Deliberately plan around Ram Navami or Deepotsav only
                    if you're prepared for very large crowds and want that
                    specific festival experience.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ayodhya</h2>
                  <p>
                    Ayodhya's connectivity has improved dramatically since
                    the Ram Mandir's consecration, with major upgrades to
                    air, rail, and road access.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Maharishi Valmiki
                      International Airport, a newly built airport near
                      the city, has steadily expanded its flight network
                      to major Indian cities since opening.
                    </li>
                    <li>
                      <strong>By train:</strong> Ayodhya Dham railway
                      station (also referred to as Ayodhya Junction) has
                      been significantly redeveloped, with direct trains
                      from Delhi, Lucknow, Varanasi, and several other
                      major cities.
                    </li>
                    <li>
                      <strong>By road:</strong> NH330 and NH27 connect
                      Ayodhya to Lucknow (~130km, roughly 2.5-3 hours) and
                      other regional centres; UPSRTC and private buses run
                      regularly.
                    </li>
                    <li>
                      <strong>Getting around:</strong> Auto-rickshaws and
                      e-rickshaws cover the town; expect significant
                      walking near the Ram Mandir itself, as vehicle access
                      close to the complex is restricted.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book accommodation and, if
                    flying, your tickets well in advance — hotel capacity,
                    while growing quickly, still lags behind the surge in
                    demand since the temple's opening, especially around
                    weekends and festivals.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Temples & Ghats in Ayodhya</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Elaborately carved temple towers, representative of Ayodhya's Ram Mandir architecture"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Ram Mandir</h3>
                  <p>
                    The centrepiece of modern Ayodhya, built at the site
                    long known as Ram Janmabhoomi. The temple's ground
                    floor sanctum was consecrated in January 2024, with
                    further construction phases continuing since. Security
                    is tight and visitor volumes are high — mobile phones,
                    bags, and most electronic items are not permitted
                    inside, so plan to use the cloakroom facilities near
                    the entry points. Queue times can run long, particularly
                    on weekends and during festivals.
                  </p>
                  <h3>Hanuman Garhi</h3>
                  <p>
                    A hilltop fort-temple dedicated to Hanuman, reached by
                    a flight of steps and considered one of Ayodhya's most
                    important shrines — tradition holds that visiting
                    Hanuman Garhi before the Ram Mandir is customary for
                    many pilgrims. It draws a constant stream of devotees
                    throughout the day.
                  </p>
                  <h3>Kanak Bhawan & Nageshwarnath Temple</h3>
                  <p>
                    Kanak Bhawan, believed to have been gifted to Sita by
                    her mother-in-law Kaikeyi, is known for its
                    richly decorated interior and idols of Ram and Sita in
                    royal attire. Nageshwarnath Temple, dedicated to Shiva,
                    is one of Ayodhya's older surviving temples and hosts a
                    lively Shivratri celebration each year.
                  </p>
                  <h3>Saryu Ghats & Treta Ke Thakur</h3>
                  <p>
                    The ghats along the Saryu River host a daily evening
                    aarti, with boat rides available along the water — a
                    calmer, more contemplative counterpoint to the busier
                    temple queues. Nearby, Treta Ke Thakur is believed to
                    mark the site of Ram's Ashwamedha Yajna (horse
                    sacrifice ritual) and houses centuries-old black
                    sandstone idols associated with the Ramayana's central
                    characters.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Ayodhya</h2>
                  <p>
                    Hotel capacity has expanded rapidly since the Ram
                    Mandir's opening, though demand — especially on
                    weekends and festivals — still frequently outpaces
                    supply. Book ahead where possible.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛕",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Dharamshalas near the temple circuit",
                          "Budget lodges near the railway station",
                          "UPSTDC guesthouses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,800–₹6,000/night",
                        picks: [
                          "New business hotels near the Ram Mandir",
                          "Hotels along the main pilgrim routes",
                          "Serviced apartments near the airport road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "₹7,000–₹18,000+/night",
                        picks: [
                          "Newly opened branded hotels",
                          "Premium riverside properties",
                          "Upscale chain hotels near the airport",
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
                        title: "Ram Mandir & Hanuman Garhi",
                        color: "bg-amber-700",
                        activities: [
                          "Early morning queue for Ram Mandir darshan",
                          "Hanuman Garhi in the afternoon",
                          "Evening aarti at the Saryu ghats",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Wider Temple Circuit",
                        color: "bg-sky-600",
                        activities: [
                          "Kanak Bhawan and Nageshwarnath Temple",
                          "Treta Ke Thakur and a Saryu boat ride",
                          "Onward travel to Lucknow or Varanasi",
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
                    * Many travellers combine Ayodhya with{" "}
                    <Link href="/blog/prayagraj-travel-guide">
                      Prayagraj
                    </Link>
                    ,{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>
                    , or{" "}
                    <Link href="/blog/naimisharanya-travel-guide">
                      Naimisharanya
                    </Link>{" "}
                    for a fuller eastern Uttar Pradesh pilgrimage circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Ayodhya</h2>
                  <ul>
                    <li>
                      <strong>Pure-vegetarian eateries:</strong> Given
                      Ayodhya's religious character, most restaurants
                      near the temple circuit serve satvik vegetarian
                      food.
                    </li>
                    <li>
                      <strong>New hotel restaurants:</strong> A growing
                      number of dining options have opened alongside the
                      city's expanded hotel capacity since 2024.
                    </li>
                    <li>
                      <strong>Street food near the ghats:</strong> Kachori,
                      chaat, and sweets stalls line the routes to Hanuman
                      Garhi and the Saryu ghats.
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
                            "₹1,200",
                            "₹4,200",
                            "₹10,000",
                          ],
                          ["Local transport/day", "₹250", "₹600", "₹1,500"],
                          ["Food/day", "₹450", "₹1,100", "₹2,800"],
                          [
                            "Saryu boat ride",
                            "₹200",
                            "₹400",
                            "₹700 (private)",
                          ],
                          ["Temple donations", "₹100", "₹300", "₹500+"],
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
                    Accommodation rates rise sharply on weekends, Ram
                    Navami, and Deepotsav.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ayodhya</h2>
                  <ul>
                    <li>
                      <strong>Leave phones and bags at the cloakroom:</strong>{" "}
                      Electronics and bags are not permitted inside the Ram
                      Mandir — use the cloakroom facilities near the entry
                      points beforehand.
                    </li>
                    <li>
                      <strong>Expect long queues:</strong> Darshan at the
                      Ram Mandir can take hours, especially on weekends —
                      arrive early and be prepared to wait.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Cover shoulders and
                      knees at all temples in the city.
                    </li>
                    <li>
                      <strong>Book accommodation ahead:</strong> Demand has
                      surged since the temple's opening — don't rely on
                      walk-in availability, especially around festivals.
                    </li>
                    <li>
                      <strong>Wear comfortable footwear:</strong> Expect
                      significant walking near the Ram Mandir, where
                      vehicle access is restricted close to the complex.
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
                          "Leave phones and bags at the cloakroom",
                          "Arrive early to beat the darshan queues",
                          "Dress modestly at all temples",
                          "Book accommodation well in advance",
                          "Watch the evening aarti at the Saryu ghats",
                          "Wear comfortable footwear for walking",
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
                          "Carry phones or bags into the Ram Mandir",
                          "Show up expecting a quick, short queue",
                          "Rely on walk-in hotel availability on weekends",
                          "Visit during Ram Navami or Deepotsav expecting calm",
                          "Wear shorts or sleeveless tops at temples",
                          "Skip checking current construction/access updates",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Ayodhya
                    with{" "}
                    <Link href="/blog/prayagraj-travel-guide">
                      Prayagraj
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>
                    , or add{" "}
                    <Link href="/blog/naimisharanya-travel-guide">
                      Naimisharanya
                    </Link>{" "}
                    for a wider spiritual circuit through{" "}
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
                  "Ayodhya",
                  "Ram Mandir",
                  "Uttar Pradesh",
                  "Saryu River",
                  "Pilgrimage",
                  "Deepotsav",
                  "Ram Janmabhoomi",
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

              <RelatedPostsGrid currentSlug="ayodhya-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ayodhya-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
