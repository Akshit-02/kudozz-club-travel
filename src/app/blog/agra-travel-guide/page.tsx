// src/app/blog/agra-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Agra Travel Guide: Taj Mahal, Fort & Fatehpur Sikri",
  description:
    "Complete Agra guide — Taj Mahal sunrise strategy and ticket tiers, Agra Fort, Itmad-ud-Daulah, Mehtab Bagh, marble-inlay shopping, how to reach from Delhi, and a full visit plan.",
  keywords:
    "Agra travel guide, Taj Mahal, Agra Fort, Itmad-ud-Daulah, Baby Taj, Mehtab Bagh, Fatehpur Sikri day trip, how to reach Agra from Delhi, Gatimaan Express, pietra dura marble inlay, Agra best time to visit, Uttar Pradesh tourism",
  openGraph: {
    title: "Agra Travel Guide: Taj Mahal, Fort & Fatehpur Sikri",
    description:
      "The Taj Mahal, red-sandstone Agra Fort, the 'Baby Taj', and a day trip to Fatehpur Sikri — the complete Agra guide, a 3-4 hour drive or 2-hour train from Delhi.",
    url: "https://club.kudozz.in/blog/agra-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/hero.jpg",
        width: 1200,
        height: 630,
        alt: "White marble domes and minarets of the Taj Mahal glowing at sunrise, Agra",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Agra Travel Guide: Taj Mahal, Fort & Fatehpur Sikri",
    description:
      "Sunrise at the Taj, the red-sandstone Agra Fort, and a day trip to Fatehpur Sikri — the complete Agra guide.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/agra-travel-guide",
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
          headline: "Agra Travel Guide: Taj Mahal, Fort & Fatehpur Sikri",
          description:
            "Complete Agra guide — Taj Mahal sunrise strategy and ticket tiers, Agra Fort, Itmad-ud-Daulah, Mehtab Bagh, marble-inlay shopping, how to reach from Delhi, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/agra-travel-guide",
          },
          keywords:
            "Agra, Taj Mahal, Agra Fort, Itmad-ud-Daulah, Fatehpur Sikri, Mughal heritage",
          about: {
            "@type": "Place",
            name: "Agra",
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
                name: "Agra",
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
    q: "What is the best time of day to visit the Taj Mahal?",
    a: "Sunrise, right at opening time (usually 6:00 AM, seasonally adjusted), is the best window — the light is soft and golden on the white marble, the heat hasn't set in, and the monument is at its quietest before tour groups arrive mid-morning. Many photographers also rate sunset highly, viewed from across the river at Mehtab Bagh.",
  },
  {
    q: "How much does a Taj Mahal ticket cost?",
    a: "Indian nationals pay a modest entry fee (roughly ₹50), while foreign nationals pay a significantly higher tier (roughly ₹1,100-1,300), which includes a small shoe-cover/water bottle allowance. Entry to the main mausoleum itself requires an additional smaller ticket on top of the garden entry ticket for everyone. Carry a valid photo ID, and always check current rates before you go, as they do change periodically.",
  },
  {
    q: "Is the Taj Mahal closed on any day of the week?",
    a: "Yes — the Taj Mahal is closed to visitors on Fridays, when it's reserved for prayers at the mosque within the complex (an exception is sometimes made for those attending prayers). Plan your Agra visit around this if Friday is your only available day.",
  },
  {
    q: "Can Agra and Fatehpur Sikri be covered in a day trip from Delhi?",
    a: "It's possible but rushed — a fast train like the Gatimaan Express gets you to Agra in about 100 minutes, but fitting in the Taj Mahal, Agra Fort, and the ~40km detour to Fatehpur Sikri in a single day leaves little breathing room. Most travellers who want to see all three comfortably choose an overnight stay in Agra instead.",
  },
  {
    q: "How do I avoid marble-inlay shopping scams in Agra?",
    a: "Buy only from government-emporium outlets (Uttar Pradesh's UPICA/handicraft emporiums) or well-reviewed established workshops, ask to see the stone-cutting process if a workshop offers it, and be wary of taxi or auto drivers who insist on taking you to a specific 'cousin's shop' — commission-driven detours are common and rarely offer the best prices or genuine stone inlay.",
  },
  {
    q: "Is one day enough to see Agra properly?",
    a: "One full day covers the Taj Mahal and Agra Fort comfortably, but doesn't leave time for Itmad-ud-Daulah, Mehtab Bagh, or Fatehpur Sikri. Two days is a more comfortable pace if you want to see the full set of monuments without rushing between them.",
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
  { id: "introduction", title: "The City of the Taj", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Agra", level: 2 },
  { id: "attractions", title: "Top Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AgraGuidePage() {
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
              alt="White marble domes and minarets of the Taj Mahal glowing at sunrise, Agra"
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
                { label: "Agra", href: null },
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
                "Agra",
                "Taj Mahal",
                "Agra Fort",
                "Mughal Heritage",
                "Fatehpur Sikri",
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
              Agra: Taj Mahal, Fort & Fatehpur Sikri Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The monument that draws more first-time visitors to India than
              any other — the Taj Mahal, the red-sandstone Agra Fort, and a
              scatter of Mughal-era marvels, all within a few hours of Delhi.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Agra, Uttar Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,700 words",
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
                  <h2>The City of the Taj</h2>
                  <p>
                    <strong>Agra</strong> is, for most first-time visitors to
                    India, the single most anticipated stop on the map — home
                    to the <strong>Taj Mahal</strong>, arguably the most
                    recognisable building on earth and the centrepiece of any{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary. But Agra is far more than one monument: as the
                    Mughal capital under three successive emperors — Akbar,
                    Jahangir, and Shah Jahan — it accumulated a concentration
                    of imperial architecture that few cities in the world can
                    match.
                  </p>
                  <p>
                    Beyond the Taj, the city holds the imposing red-sandstone{" "}
                    <strong>Agra Fort</strong>, the delicate marble{" "}
                    <strong>Itmad-ud-Daulah</strong> (often called the "Baby
                    Taj" for its precursor role in the Taj's design
                    language), and the riverside gardens of{" "}
                    <strong>Mehtab Bagh</strong>. Just outside the city, the
                    abandoned Mughal capital of{" "}
                    <Link href="/blog/fatehpur-sikri-travel-guide">
                      Fatehpur Sikri
                    </Link>{" "}
                    makes an easy half-day extension, and the temple town of{" "}
                    <Link href="/blog/mathura-travel-guide">Mathura</Link> lies
                    just over an hour further down the highway.
                  </p>
                  <p>
                    Sitting roughly 3-4 hours from Delhi by road and under
                    two hours by fast train, Agra is one of India's most
                    popular day trips and overnight getaways — and while a
                    rushed single day is enough to tick off the Taj and the
                    Fort, giving the city a proper two days lets you take in
                    its full sweep of Mughal architecture without feeling
                    hurried.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Agra at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Western Uttar Pradesh, on the Yamuna",
                        },
                        {
                          icon: "🚄",
                          label: "From Delhi",
                          value: "~2 hr by train, 3-4 hr by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🕌",
                          label: "Known For",
                          value: "Taj Mahal, Mughal Architecture",
                        },
                        {
                          icon: "🏰",
                          label: "Nearby",
                          value: "Fatehpur Sikri (~40 km)",
                        },
                        {
                          icon: "🎟️",
                          label: "Taj Closed",
                          value: "Every Friday",
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
                  <h2>Best Time to Visit Agra</h2>
                  <p>
                    Agra sits on the north Indian plains, which means brutal
                    summers and a genuinely pleasant winter — timing your
                    visit matters more here than almost anywhere else on a
                    typical India itinerary.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable days and crisp mornings make sightseeing genuinely enjoyable. December and January can turn foggy at dawn, which occasionally delays that perfect sunrise view of the Taj.",
                      },
                      {
                        season: "Feb – Mar",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Great light, fewer crowds",
                        text: "Winter chill eases but heat hasn't arrived — clear skies and good visibility make this a favourite window for photography, with slightly thinner crowds than peak December.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Avoid — extreme heat",
                        text: "Daytime temperatures regularly cross 40°C, sometimes touching 45-47°C in May-June. The open marble courtyards of the Taj and Fort become punishing by mid-morning.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Humid monsoon",
                        text: "Rain brings relief from the heat and greens up the surrounding countryside, but high humidity and occasional heavy downpours make sightseeing less comfortable.",
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
                    <strong>Our pick:</strong> November to February — cool
                    mornings for the Taj at sunrise, comfortable daytime
                    temperatures for the Fort and Fatehpur Sikri, and clear
                    winter skies for photography.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Agra</h2>
                  <p>
                    Agra is one of the most accessible cities in North India,
                    which is a large part of why it's such a popular day
                    trip or short getaway from the capital.
                  </p>
                  <ul>
                    <li>
                      <strong>By train (fastest and most popular):</strong>{" "}
                      The Gatimaan Express and the Shatabdi Express connect
                      Delhi to Agra Cantt station in around 100 minutes to 2
                      hours — comfortably India's quickest way to cover the
                      distance, and the preferred option for day-trippers.
                    </li>
                    <li>
                      <strong>By road:</strong> The Yamuna Expressway makes
                      Agra a smooth 3-4 hour drive from Delhi, whether by
                      self-drive car, hired taxi, or one of the many tour
                      buses that run the route daily.
                    </li>
                    <li>
                      <strong>By air:</strong> Agra has a small airport
                      (Kheria Airport) with limited scheduled flights,
                      mostly on a handful of domestic routes — most
                      travellers fly into Delhi and continue by train or
                      road instead.
                    </li>
                    <li>
                      <strong>Getting around Agra:</strong> Auto-rickshaws
                      and taxis cover the city easily; note that
                      diesel/petrol vehicles aren't allowed right up to the
                      Taj Mahal's gates, so the last stretch is covered by
                      electric buses, battery-operated golf carts, or a
                      short walk.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> A same-day Delhi-Agra-Delhi
                    trip on the Gatimaan Express is doable but tight — it
                    covers the Taj and Fort but leaves no time for Fatehpur
                    Sikri or Itmad-ud-Daulah. An overnight stay lets you see
                    Agra properly.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Top Attractions in Agra</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/hero.jpg"
                      alt="The Taj Mahal's central dome and reflecting pool, Agra"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Taj Mahal</h3>
                  <p>
                    Built by Emperor Shah Jahan as a mausoleum for his wife
                    Mumtaz Mahal, who died in childbirth in 1631, the Taj
                    Mahal took an estimated 20 years and thousands of
                    artisans to complete. Its white marble facade, inlaid
                    with semi-precious stones in intricate floral patterns
                    (a technique called pietra dura), shifts colour through
                    the day — pale pink at dawn, brilliant white at midday,
                    golden at sunset.
                  </p>
                  <p>
                    Entry works on a two-tier ticketing system: Indian
                    nationals pay a modest garden-entry fee, while foreign
                    nationals pay a substantially higher rate that includes
                    small amenities like shoe covers. Everyone — Indian and
                    foreign visitors alike — needs an additional, separately
                    priced ticket to enter the main mausoleum platform
                    itself. Arrive right at opening for the softest light
                    and thinnest crowds; for a different angle entirely,
                    head to <strong>Mehtab Bagh</strong> across the Yamuna
                    river at sunset, where the symmetrical char-bagh garden
                    frames a classic reflected view of the Taj without the
                    crowds inside the complex.
                  </p>
                  <h3>Agra Fort</h3>
                  <p>
                    A massive red-sandstone fortress-palace on the banks of
                    the Yamuna, Agra Fort was the primary residence of
                    Mughal emperors until the capital shifted to Delhi.
                    Within its walls sits the <strong>Musamman Burj</strong>,
                    an octagonal marble tower where Shah Jahan spent his
                    final years under house arrest, imprisoned by his own
                    son Aurangzeb — with, poignantly, a clear view of the
                    Taj Mahal he had built, visible in the distance down the
                    river.
                  </p>
                  <h3>Itmad-ud-Daulah ("Baby Taj")</h3>
                  <p>
                    Built earlier than the Taj Mahal, this smaller marble
                    tomb for a Mughal nobleman is widely considered a design
                    precursor to it — the first structure in Agra to use
                    extensive white marble and pietra dura inlay work at
                    this scale. Quieter and far less crowded than the Taj,
                    it rewards visitors who want to see the same
                    craftsmanship without the queues.
                  </p>
                  <h3>Mehtab Bagh</h3>
                  <p>
                    A restored Mughal garden directly across the river from
                    the Taj Mahal, laid out on a north-south axis so the
                    monument is perfectly framed from its central platform —
                    the classic sunset-silhouette photograph of the Taj is
                    taken from here.
                  </p>
                  <h3>Marble-Inlay Shopping & Avoiding Scams</h3>
                  <p>
                    Agra's artisans still practice pietra dura, the same
                    marble-inlay technique used on the Taj itself, and
                    workshops around the city sell everything from small
                    coasters to large tabletops. Buy from government
                    emporiums or established, well-reviewed workshops rather
                    than shops a driver insists on taking you to — commission
                    arrangements between drivers and certain stores are
                    common, and the pressure-sell items are rarely genuine
                    stone inlay at a fair price.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Agra</h2>
                  <p>
                    Most visitors base themselves near the Taj East or West
                    Gate area for easy morning access, or around Fatehabad
                    Road and Taj Ganj, where the widest range of budgets is
                    concentrated.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses in Taj Ganj",
                          "Budget hotels near Fatehabad Road",
                          "Backpacker hostels close to Agra Cantt",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Business hotels near Taj East Gate",
                          "Boutique stays with Taj-view rooftops",
                          "Chain hotels on Fatehabad Road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹10,000–₹40,000+/night",
                        picks: [
                          "Five-star resorts near Taj East Gate",
                          "Heritage-style luxury properties",
                          "International chain hotels with Taj views",
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
                        title: "Taj Mahal & Agra Fort",
                        color: "bg-amber-700",
                        activities: [
                          "Sunrise entry at the Taj Mahal (arrive before opening)",
                          "Late morning at Agra Fort and the Musamman Burj",
                          "Afternoon rest, evening at Mehtab Bagh for sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Fatehpur Sikri & Lesser Monuments",
                        color: "bg-sky-600",
                        activities: [
                          "Morning day trip to Fatehpur Sikri (~40 km)",
                          "Afternoon visit to Itmad-ud-Daulah (Baby Taj)",
                          "Evening marble-inlay shopping at a trusted emporium",
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
                    * Travellers continuing on toward the Braj pilgrimage
                    circuit often add a half-day for{" "}
                    <Link href="/blog/mathura-travel-guide">Mathura</Link>{" "}
                    (about an hour from Agra) before heading further into
                    Uttar Pradesh.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Agra</h2>
                  <ul>
                    <li>
                      <strong>Petha shops:</strong> Agra's signature sweet —
                      a translucent, sugar-syrup-soaked confection made from
                      ash gourd — is sold across the city in countless
                      variations, from plain to saffron and dry-fruit
                      versions.
                    </li>
                    <li>
                      <strong>Sadar Bazaar and Taj Ganj eateries:</strong>{" "}
                      Casual restaurants serving North Indian thalis,
                      Mughlai curries, and tandoori dishes at reasonable
                      prices, many with rooftop seating and Taj views.
                    </li>
                    <li>
                      <strong>Street food stalls:</strong> Chaat, kachori,
                      and bedai (a spiced, deep-fried breakfast bread) are
                      Agra staples, widely available near the older parts of
                      the city.
                    </li>
                    <li>
                      <strong>Hotel restaurants:</strong> Mid-range and
                      luxury hotels near the Taj offer more polished dining,
                      often with rooftop or terrace seating facing the
                      monument.
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
                            "₹4,000",
                            "₹15,000",
                          ],
                          [
                            "Taj Mahal entry (Indian/foreign)",
                            "₹50 / ₹1,300",
                            "₹50 / ₹1,300",
                            "₹50 / ₹1,300",
                          ],
                          ["Food/day", "₹500", "₹1,500", "₹3,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹800",
                            "₹2,000",
                          ],
                          [
                            "Fatehpur Sikri day trip (car)",
                            "₹1,500",
                            "₹2,500",
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
                    * Figures are per person, per day, in INR. Taj Mahal
                    mausoleum entry (an additional ~₹200) is charged on top
                    of the garden ticket for all visitors. Always confirm
                    current rates before your trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Agra</h2>
                  <ul>
                    <li>
                      <strong>The Taj is closed on Fridays:</strong> Plan
                      around this if your visit window is tight — the fort
                      and other monuments stay open.
                    </li>
                    <li>
                      <strong>No food, tobacco, or large bags allowed
                      inside the Taj complex:</strong> Security is strict;
                      carry only essentials, as cloakroom facilities are
                      limited.
                    </li>
                    <li>
                      <strong>Arrive early to beat both heat and
                      crowds:</strong> Sunrise entry is worth the early
                      alarm, especially between March and October.
                    </li>
                    <li>
                      <strong>Fix rates before hiring a driver or
                      guide:</strong> Agree taxi and guide fees upfront to
                      avoid disputes later, and consider a licensed guide
                      from the official booths near the entrance.
                    </li>
                    <li>
                      <strong>Combine with Fatehpur Sikri:</strong> It's a
                      short, easy add-on from Agra and shouldn't be skipped
                      if you have a second day.
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
                          "Arrive at sunrise for the softest light on the Taj",
                          "Buy tickets online in advance where possible",
                          "Carry a valid photo ID for entry",
                          "Visit Mehtab Bagh for the sunset reflection view",
                          "Buy marble inlay only from trusted emporiums",
                          "Add a half-day for Fatehpur Sikri if you can",
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
                          "Plan a Friday visit to the Taj Mahal",
                          "Carry food, tobacco, or large bags inside",
                          "Let a driver steer you to an unfamiliar 'discount' shop",
                          "Skip sunscreen and water in the summer months",
                          "Rush the Fort and Taj into the same rushed hour",
                          "Forget to agree taxi fares before you set off",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Agra with a
                    half-day at{" "}
                    <Link href="/blog/fatehpur-sikri-travel-guide">
                      Fatehpur Sikri
                    </Link>{" "}
                    and continue on to the temple town of{" "}
                    <Link href="/blog/mathura-travel-guide">Mathura</Link>{" "}
                    and the wider{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    circuit for a fuller Mughal-and-Braj-region trip.
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
                  "Agra",
                  "Taj Mahal",
                  "Uttar Pradesh",
                  "Agra Fort",
                  "Mughal Heritage",
                  "UNESCO World Heritage",
                  "Fatehpur Sikri",
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

              <RelatedPostsGrid currentSlug="agra-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="agra-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
