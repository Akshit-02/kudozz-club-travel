// src/app/blog/adi-kailash-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Adi Kailash Travel Guide: Trek, Permits & Best Time",
  description:
    "Complete Adi Kailash (Chhota Kailash) guide — the Om Parvat and Parvati Tal trek near the Nepal-Tibet border, Inner Line Permits, how to reach via Dharchula, and a full visit plan.",
  keywords:
    "Adi Kailash, Chhota Kailash, Om Parvat, Adi Kailash trek, Pithoragarh, Dharchula, Gunji, Jolingkong, Inner Line Permit, Adi Kailash best time to visit, how to reach Adi Kailash, Parvati Tal",
  openGraph: {
    title: "Adi Kailash Travel Guide: Trek, Permits & Best Time",
    description:
      "'Little Kailash' near the Nepal-Tibet border — a Shiva-associated peak resembling Mount Kailash, alongside Om Parvat and a genuinely remote multi-day Himalayan journey.",
    url: "https://club.kudozz.in/blog/adi-kailash-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Remote high-altitude Himalayan peak landscape near Adi Kailash, Pithoragarh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Adi Kailash Travel Guide: Trek, Permits & Best Time",
    description:
      "'Little Kailash' near the Nepal-Tibet border — Om Parvat, Parvati Tal, and a genuinely remote multi-day Himalayan journey. The complete Adi Kailash guide.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/adi-kailash-travel-guide",
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
          headline: "Adi Kailash Travel Guide: Trek, Permits & Best Time",
          description:
            "Complete Adi Kailash (Chhota Kailash) guide — the Om Parvat and Parvati Tal trek near the Nepal-Tibet border, Inner Line Permits, how to reach via Dharchula, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
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
            "@id": "https://club.kudozz.in/blog/adi-kailash-travel-guide",
          },
          keywords:
            "Adi Kailash, Chhota Kailash, Om Parvat, Pithoragarh, Dharchula, Gunji, Inner Line Permit",
          about: {
            "@type": "Place",
            name: "Adi Kailash",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand",
                item: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Adi Kailash",
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
    q: "What is the difference between Adi Kailash and Mount Kailash in Tibet?",
    a: "Mount Kailash (the destination of the Kailash Mansarovar Yatra) lies across the border in Tibet and requires international travel through Nepal or China. Adi Kailash — also called Chhota Kailash, or 'Little Kailash' — is a separate peak entirely within Indian territory in Pithoragarh district, which resembles Mount Kailash's distinctive shape and carries the same Shiva association, making it a domestic alternative for pilgrims who cannot make the Tibet journey.",
  },
  {
    q: "What is Om Parvat and why is it significant?",
    a: "Om Parvat is a peak near Adi Kailash where natural snow deposits in the mountain's crevices form a pattern resembling the sacred 'Om' symbol, visible from certain viewpoints and under the right snow conditions. It's considered a striking natural phenomenon and a major draw of the region alongside Adi Kailash itself.",
  },
  {
    q: "Do I need a permit to visit Adi Kailash?",
    a: "Yes. The route passes through a restricted border-area zone near the Nepal and Tibet (China) borders, so an Inner Line Permit is mandatory, typically arranged through registered tour operators or the district administration in Pithoragarh/Dharchula. Foreign nationals face additional restrictions and in practice usually cannot access this route independently — check current rules well before planning the trip.",
  },
  {
    q: "How physically demanding is the Adi Kailash trip?",
    a: "It's a genuinely demanding, multi-day journey — a long road drive over rough mountain roads followed by trekking sections that touch altitudes above 4,500m near Jolingkong and Parvati Tal. Altitude sickness is a real risk given the pace many itineraries require, so prior high-altitude experience or a conservative, well-acclimatised schedule is strongly advised.",
  },
  {
    q: "How remote is this trip really?",
    a: "Very. There's no shortcut here — reaching the Adi Kailash base involves a multi-day road journey from the nearest railhead or airport through Pithoragarh, Dharchula, and Gunji, on roads that are narrow, occasionally landslide-prone, and far from quick medical help. This is not a weekend trip; budget at least 7-9 days round-trip from Delhi or Dehradun.",
  },
  {
    q: "What is the best time to visit Adi Kailash?",
    a: "May to June and September to mid-October are the two viable windows — the monsoon (July-August) brings landslide risk on the mountain roads, and winter (November-April) closes the high-altitude route entirely due to snow. Even within these windows, weather can change quickly, so build buffer days into any itinerary.",
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
  { id: "introduction", title: "Little Kailash of the Kumaon Border", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Adi Kailash", level: 2 },
  { id: "attractions", title: "The Trek & Key Sites", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AdiKailashGuidePage() {
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
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Remote high-altitude Himalayan peak landscape near Adi Kailash, Pithoragarh"
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
                { label: "Uttarakhand", href: "/blog/uttarakhand-travel-guide" },
                { label: "Adi Kailash", href: null },
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
                "Adi Kailash",
                "Chhota Kailash",
                "Om Parvat",
                "Pithoragarh",
                "High Altitude Trek",
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
              Adi Kailash: Trek, Permits & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              "Little Kailash" near the Nepal-Tibet border — a
              Shiva-associated peak that mirrors Mount Kailash's shape,
              alongside the Om-marked slopes of Om Parvat, at the end of a
              genuinely remote multi-day journey.
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
                  text: "Pithoragarh District, Kumaon Himalaya",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,600 words",
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
                  <h2>Little Kailash of the Kumaon Border</h2>
                  <p>
                    <strong>Adi Kailash</strong>, also known as{" "}
                    <strong>Chhota Kailash</strong> ("Little Kailash"), is a
                    Shiva-associated peak in Pithoragarh district that
                    strikingly resembles Mount Kailash in Tibet in shape and
                    presence. For pilgrims and trekkers who cannot make the
                    international Kailash Mansarovar Yatra, Adi Kailash has
                    become a well-known domestic alternative — entirely
                    within Indian territory, though every bit as remote in
                    its own right.
                  </p>
                  <p>
                    Nearby stands <strong>Om Parvat</strong>, a peak where
                    snow naturally settles into crevices to form a pattern
                    resembling the sacred "ॐ" symbol — one of the more
                    striking natural phenomena in the Indian Himalaya, best
                    seen from a roadside viewpoint near Nabhidhang. The trek
                    itself is based out of <strong>Jolingkong</strong>,
                    near the sacred <strong>Parvati Tal</strong> (also
                    called Gauri Kund), a still lake set directly beneath
                    the Adi Kailash massif.
                  </p>
                  <p>
                    None of this is easy to reach. The journey runs via
                    Pithoragarh, Dharchula, and Gunji — a genuinely remote,
                    multi-day road approach through a restricted border-area
                    zone that requires an Inner Line Permit before you set
                    out. This is a serious undertaking, not a casual
                    detour, and should be planned as such.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Adi Kailash at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Pithoragarh District, Uttarakhand",
                        },
                        {
                          icon: "⛰️",
                          label: "Trek Altitude",
                          value: "4,500m+ near Jolingkong",
                        },
                        {
                          icon: "🛂",
                          label: "Permit",
                          value: "Inner Line Permit required",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "May–Jun & Sep–mid Oct",
                        },
                        {
                          icon: "🕉️",
                          label: "Nearby",
                          value: "Om Parvat, Parvati Tal",
                        },
                        {
                          icon: "🚏",
                          label: "Base Town",
                          value: "Dharchula / Gunji",
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
                  <h2>Best Time to Visit Adi Kailash</h2>
                  <p>
                    Both monsoon and winter close this route entirely, which
                    narrows the realistic travel window to two short
                    stretches each year.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The route typically opens after winter snow clears, with relatively stable weather and long daylight hours for the drive and trek sections.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-stone-100 border-stone-300",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain brings a genuine landslide risk on the narrow mountain roads between Pithoragarh and Gunji; many operators pause trips entirely.",
                      },
                      {
                        season: "Sep – Mid Oct",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Second window",
                        text: "Post-monsoon skies clear and the route reopens for a shorter autumn window before early winter snow returns to the high passes.",
                      },
                      {
                        season: "Nov – Apr",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Route closed",
                        text: "Heavy snow closes the high-altitude sections of the route entirely — this trip is simply not possible in these months.",
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
                    <strong>Our pick:</strong> Late May to June, when the
                    route has just reopened and weather is typically most
                    stable — book early, as this window fills up with tour
                    operator batches quickly.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Adi Kailash</h2>
                  <p>
                    Be honest with yourself about the scale of this trip —
                    it is a multi-day journey by design, not a shortcut-able
                    weekend visit.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Pantnagar or Dehradun are the
                      nearest airports, both requiring a long onward road
                      journey of well over 300 km to Pithoragarh and
                      further to Dharchula.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kathgodam is the nearest
                      practical railhead, followed by a full day or more of
                      driving to reach Pithoragarh, and further still to
                      Dharchula.
                    </li>
                    <li>
                      <strong>By road:</strong> The route runs Pithoragarh →
                      Dharchula → Gunji, each leg a demanding mountain drive
                      in its own right, typically requiring an overnight
                      stop at multiple points along the way rather than a
                      single push.
                    </li>
                    <li>
                      <strong>The final trek:</strong> From Gunji or nearby,
                      the last stretch to Jolingkong and Parvati Tal involves
                      trekking at altitudes above 4,500m — this is where
                      most itineraries build in acclimatisation days.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book through a registered
                    tour operator experienced with this specific route — they
                    handle Inner Line Permit paperwork, know current road
                    conditions, and build realistic acclimatisation buffers
                    into the itinerary that independent travellers often
                    underestimate.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>The Trek & Key Sites</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="High-altitude Himalayan terrain near Adi Kailash and Om Parvat, Pithoragarh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Adi Kailash Peak</h3>
                  <p>
                    The peak itself, seen from Jolingkong and the shores of
                    Parvati Tal, mirrors the distinctive shape of Mount
                    Kailash across the border — a striking, near-symmetrical
                    summit that has long carried a Shiva association for
                    pilgrims who make the journey here.
                  </p>
                  <h3>Om Parvat</h3>
                  <p>
                    A separate peak nearby, viewable from a roadside point
                    near Nabhidhang, where natural snow deposits settle into
                    the mountain's rock crevices to form a pattern resembling
                    the "ॐ" (Om) symbol. Visibility of the full pattern
                    depends on current snow conditions and can vary by
                    season — it's not guaranteed on every visit, but is a
                    major highlight when clearly visible.
                  </p>
                  <h3>Parvati Tal (Gauri Kund)</h3>
                  <p>
                    A sacred, still lake at Jolingkong directly beneath the
                    Adi Kailash massif, believed in local tradition to be
                    where Parvati bathed. It's the natural endpoint of the
                    trek from Gunji, and the classic viewpoint for
                    photographing Adi Kailash reflected in calm water.
                  </p>
                  <h3>Kalapani & the Border Villages</h3>
                  <p>
                    The route passes through small, high-altitude villages
                    like Gunji and Kalapani, near the tri-junction of India,
                    Nepal, and Tibet — remote settlements that give a sense
                    of just how far from ordinary infrastructure this trip
                    travels, and a reminder to respect the sensitivity of a
                    genuine border-area zone.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation along this route is basic by necessity —
                    this is a remote border region, not a resort
                    destination. Most travellers book multi-day tour
                    packages that include lodging at each overnight stop.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic guesthouses in Dharchula",
                          "PWD/forest rest houses at Gunji",
                          "Shared dormitory-style camps",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Tour-operator arranged lodges",
                          "Better guesthouses in Pithoragarh/Dharchula",
                          "Trekking-agency tent camps",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "⛺",
                        range: "Not applicable here",
                        picks: [
                          "No true luxury tier along this route",
                          "Comfort caps out at well-run tour camps",
                          "Full-service organised expeditions only",
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
                  <h2>Suggested Visit Plan (7-9 Days Round Trip)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Days 1-2",
                        title: "Travel to Pithoragarh/Dharchula",
                        color: "bg-amber-700",
                        activities: [
                          "Fly/train to Pantnagar or Kathgodam",
                          "Multi-day drive toward Pithoragarh and Dharchula",
                          "Permit formalities and document checks en route",
                        ],
                      },
                      {
                        day: "Days 3-5",
                        title: "Dharchula to Gunji & Jolingkong",
                        color: "bg-sky-600",
                        activities: [
                          "Drive/trek onward via Gunji with acclimatisation stops",
                          "Reach Jolingkong, visit Parvati Tal",
                          "View Adi Kailash and, weather permitting, Om Parvat",
                        ],
                      },
                      {
                        day: "Days 6-9",
                        title: "Return Journey",
                        color: "bg-forest-600",
                        activities: [
                          "Retrace the route back through Gunji and Dharchula",
                          "Return drive to Pithoragarh and onward railhead/airport",
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
                    * Many travellers combine this trip with a stop in{" "}
                    <Link href="/blog/munsiyari-travel-guide">Munsiyari</Link>{" "}
                    on the way in or out, since both share the same Pithoragarh
                    approach road.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Dhabas in Pithoragarh and Dharchula:</strong>{" "}
                      Simple North Indian meals, dal-rice, and basic
                      vegetarian thalis at reasonable prices.
                    </li>
                    <li>
                      <strong>Tour package meals:</strong> Most organised
                      trips beyond Dharchula include meals as part of the
                      package, since independent food options thin out
                      sharply past this point.
                    </li>
                    <li>
                      <strong>Carry your own snacks and water purification:</strong>{" "}
                      Once past Gunji, food options are extremely limited —
                      pack high-energy snacks and a way to purify water for
                      the trek sections.
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Full package (7-9 days, per person)",
                            "₹18,000",
                            "₹35,000",
                          ],
                          ["Inner Line Permit", "₹200–₹500", "₹200–₹500"],
                          ["Accommodation/night (if independent)", "₹1,000", "₹3,000"],
                          ["Food/day (if independent)", "₹500", "₹1,200"],
                          ["Local transport/vehicle hire", "Included in package", "Included in package"],
                        ].map(([exp, b, m], i) => (
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Most travellers book an all-inclusive tour package
                    (transport, permits, food, and lodging) rather than
                    arranging each piece independently, given the route's
                    remoteness and permit requirements.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Adi Kailash</h2>
                  <ul>
                    <li>
                      <strong>Arrange your Inner Line Permit well in
                      advance:</strong> It's mandatory for this restricted
                      border zone — go through a registered operator or the
                      Pithoragarh/Dharchula district administration, and
                      don't leave it to the last moment.
                    </li>
                    <li>
                      <strong>Build in acclimatisation days:</strong> The
                      trek touches altitudes above 4,500m — a rushed
                      itinerary significantly raises the risk of altitude
                      sickness. Choose an operator whose schedule reflects
                      this.
                    </li>
                    <li>
                      <strong>Carry proper cold-weather and rain gear:</strong>{" "}
                      Weather at this altitude and this close to the border
                      changes quickly and without much warning.
                    </li>
                    <li>
                      <strong>Don't expect mobile network or easy medical
                      access:</strong> Connectivity is patchy to nonexistent
                      past Dharchula, and the nearest serious medical
                      facilities are a full day or more away.
                    </li>
                    <li>
                      <strong>Go with a registered, experienced operator:</strong>{" "}
                      Given the permit requirements, road conditions, and
                      altitude, this is not a trip to improvise
                      independently unless you have serious high-altitude
                      trekking experience of your own.
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
                          "Arrange your Inner Line Permit well ahead",
                          "Book with a registered, experienced operator",
                          "Build in acclimatisation days",
                          "Carry proper cold-weather and rain gear",
                          "Carry cash — no ATMs beyond Dharchula",
                          "Respect the sensitivity of the border zone",
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
                          "Attempt this trip during monsoon or winter",
                          "Rush the altitude gain without acclimatisation",
                          "Travel without a confirmed Inner Line Permit",
                          "Expect reliable mobile network past Dharchula",
                          "Underestimate how remote this route is",
                          "Travel without checking current border-area rules",
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
                    <strong>🗺️ Extend the trip:</strong> Adi Kailash is
                    commonly combined with{" "}
                    <Link href="/blog/munsiyari-travel-guide">
                      Munsiyari
                    </Link>{" "}
                    on the same Pithoragarh approach road, or treated as a
                    thematic pairing with{" "}
                    <Link href="/blog/gangotri-travel-guide">Gangotri</Link>{" "}
                    for travellers drawn to Uttarakhand's remote,
                    pilgrimage-linked high-altitude sites.
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
                  "Adi Kailash",
                  "Chhota Kailash",
                  "Uttarakhand",
                  "Om Parvat",
                  "Pithoragarh",
                  "High Altitude Trek",
                  "Inner Line Permit",
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

              <RelatedPostsGrid currentSlug="adi-kailash-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="adi-kailash-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
