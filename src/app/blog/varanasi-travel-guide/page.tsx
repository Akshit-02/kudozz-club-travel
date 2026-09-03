// src/app/blog/varanasi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Varanasi Travel Guide: Ganga Ghats & Ganga Aarti",
  description:
    "Complete Varanasi guide — Kashi Vishwanath Temple, the Dashashwamedh Ghat Ganga Aarti, Manikarnika Ghat, sunrise boat rides, Banarasi silk, and a full visit plan for one of the world's oldest cities.",
  keywords:
    "Varanasi travel guide, Kashi, Ganga Aarti Varanasi, Kashi Vishwanath Temple, Dashashwamedh Ghat, Manikarnika Ghat, Varanasi ghats, Assi Ghat, Varanasi boat ride, Banarasi silk saree, Varanasi best time to visit, how to reach Varanasi, Uttar Pradesh pilgrimage",
  openGraph: {
    title: "Varanasi Travel Guide: Ganga Ghats & Ganga Aarti",
    description:
      "One of the world's oldest living cities — Kashi Vishwanath Temple, the evening Ganga Aarti at Dashashwamedh Ghat, Manikarnika's cremation rites, and the ghats of the Ganga.",
    url: "https://club.kudozz.in/blog/varanasi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/rishikesh/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "Stone ghats and boats along the Ganga at sunrise in Varanasi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Varanasi Travel Guide: Ganga Ghats & Ganga Aarti",
    description:
      "Kashi Vishwanath Temple, the Dashashwamedh Ghat Ganga Aarti, Manikarnika Ghat, and sunrise boat rides — the complete Varanasi guide.",
    images: ["/images/destinations/rishikesh/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/varanasi-travel-guide",
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
          headline: "Varanasi Travel Guide: Ganga Ghats & Ganga Aarti",
          description:
            "Complete Varanasi guide — Kashi Vishwanath Temple, the Dashashwamedh Ghat Ganga Aarti, Manikarnika Ghat, sunrise boat rides, Banarasi silk, and a full visit plan for one of the world's oldest cities.",
          image:
            "https://club.kudozz.in/images/destinations/rishikesh/rishikesh.jpg",
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
            "@id": "https://club.kudozz.in/blog/varanasi-travel-guide",
          },
          keywords:
            "Varanasi, Kashi, Ganga Aarti, Kashi Vishwanath Temple, Manikarnika Ghat, Dashashwamedh Ghat, Uttar Pradesh pilgrimage",
          about: {
            "@type": "Place",
            name: "Varanasi",
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
                name: "Varanasi",
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
    q: "What is the best time to visit Varanasi?",
    a: "October to March is by far the best window — daytime temperatures stay comfortable (roughly 15-28°C) and the ghats are dry and easy to walk. April to June turns brutally hot, often crossing 42°C, and the July-September monsoon frequently floods the lower steps of the ghats, submerging Manikarnika and Dashashwamedh's lower platforms and disrupting the usual ghat-level routines.",
  },
  {
    q: "How do I watch the Ganga Aarti at Dashashwamedh Ghat?",
    a: "The Aarti happens every evening at sunset (roughly 6:00-7:15 PM depending on the season) at Dashashwamedh Ghat. You can watch from the ghat steps directly (arrive 45-60 minutes early to get a decent spot), from a rooftop café overlooking the ghat, or — for the best overall view of all seven priests performing in sync — from a rented rowboat anchored just offshore, which costs more but avoids the crowd crush entirely.",
  },
  {
    q: "Is it respectful for tourists to visit Manikarnika Ghat?",
    a: "Yes, observing from a respectful distance is generally accepted, since cremation at Manikarnika is a public, ongoing ritual rather than a private one. However, never photograph or film the pyres or grieving families without explicit permission, don't smile or treat it as a spectacle, dress modestly, and be wary of self-appointed 'guides' who solicit large donations for the Doms (the traditional keepers of the cremation fire) — donate directly and only if you choose to.",
  },
  {
    q: "How many days should I spend in Varanasi?",
    a: "3-4 days is comfortable for a first visit — enough time for a sunrise boat ride, the evening Aarti, Kashi Vishwanath Temple, wandering the old city lanes, and a half-day trip to Sarnath. Serious photographers or those wanting a slower pace often stay 5-7 days.",
  },
  {
    q: "Can I do a day trip to Sarnath from Varanasi?",
    a: "Yes, easily. Sarnath is about 10 km from central Varanasi, roughly a 30-40 minute auto-rickshaw or taxi ride, and a half-day is enough to see the Dhamek Stupa, the Ashoka Pillar remains, the Archaeological Museum, and Mulagandha Kuti Vihar. See our full Sarnath guide for details.",
  },
  {
    q: "What should I wear and how should I behave at the ghats?",
    a: "Modest, loose clothing that covers shoulders and knees is advisable, especially near temples and cremation ghats. Remove footwear before entering temple premises, avoid public displays of affection, ask before photographing people (especially at Manikarnika), and expect to be approached by boatmen, guides, and vendors — a firm, polite decline usually works.",
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
  { id: "introduction", title: "One of the World's Oldest Cities", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Varanasi", level: 2 },
  { id: "ghats-and-aarti", title: "The Ghats & Ganga Aarti", level: 2 },
  { id: "kashi-vishwanath", title: "Kashi Vishwanath Temple", level: 2 },
  { id: "manikarnika", title: "Manikarnika Ghat", level: 2 },
  { id: "old-city", title: "The Old City & Its Crafts", level: 2 },
  { id: "sarnath-day-trip", title: "Day Trip to Sarnath", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function VaranasiGuidePage() {
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
              src="/images/destinations/rishikesh/rishikesh.jpg"
              alt="Stone ghats and boats along the Ganga at sunrise in Varanasi"
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
                { label: "Varanasi", href: null },
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
                "Varanasi",
                "Kashi",
                "Ganga Aarti",
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
              Varanasi: Ganga Ghats, Ganga Aarti & Kashi Vishwanath Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the world's oldest continuously inhabited cities — 88
              stone ghats along the Ganga, the fire-lit evening Aarti at
              Dashashwamedh, Kashi Vishwanath's Jyotirlinga, and a river of
              ritual that has run unbroken for millennia.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Varanasi, Uttar Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,000 words",
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
                  <h2>One of the World's Oldest Cities</h2>
                  <p>
                    <strong>Varanasi</strong> — known through its history as
                    Kashi ("the luminous one") and Banaras — is widely
                    considered one of the oldest continuously inhabited
                    cities on Earth, with settlement stretching back at
                    least 3,000 years and mythological roots that reach
                    further still. In the{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    pilgrimage circuit, it is the anchor: a city built almost
                    entirely around its relationship with the{" "}
                    <strong>Ganga</strong>, the river that Hindu tradition
                    holds as literally sacred, capable of washing away sin
                    and, for those cremated on its banks, of granting{" "}
                    <em>moksha</em> — liberation from the cycle of rebirth.
                  </p>
                  <p>
                    Nothing about Varanasi reveals itself from a car window.
                    The city has to be walked — along the 88-odd stone ghats
                    that line roughly 6-7 km of the river's western bank,
                    through the narrow lanes of the old quarter, and into
                    temples that have stood, in one form or another, for
                    centuries. Mark Twain's line about the city being "older
                    than history, older than tradition, older even than
                    legend" is quoted often here for good reason — it still
                    fits.
                  </p>
                  <p>
                    This guide covers the ghats and the evening Ganga Aarti,
                    Kashi Vishwanath Temple and its redeveloped corridor,
                    Manikarnika Ghat's cremation rites and how to visit
                    respectfully, the old city's silk-weaving lanes and food
                    culture, and a day-trip plan to nearby{" "}
                    <Link href="/blog/sarnath-travel-guide">Sarnath</Link>.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Varanasi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Ganga's west bank, Uttar Pradesh",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Ghats, Ganga Aarti, Kashi Vishwanath",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Lal Bahadur Shastri Airport (VNS)",
                        },
                        {
                          icon: "🚉",
                          label: "Rail Hub",
                          value: "Varanasi Junction (BSB)",
                        },
                        {
                          icon: "🛶",
                          label: "Don't Miss",
                          value: "Sunrise boat ride along the ghats",
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
                  <h2>Best Time to Visit Varanasi</h2>
                  <p>
                    Varanasi's ghats are outdoor, riverside, and largely
                    unshaded — the season you pick shapes the visit far more
                    than in most Indian cities.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant days (15-28°C), cool mornings ideal for a sunrise boat ride, and dry ghat steps. Peak season falls around Dev Deepawali (Nov) and the winter months, when the city is busiest.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Avoid if possible",
                        text: "Punishing heat, regularly crossing 40-42°C by mid-afternoon. If you must visit, restrict outdoor time to early morning and evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — ghats partly flooded",
                        text: "The Ganga rises significantly, often submerging the lower steps of Manikarnika and Dashashwamedh and pushing the Aarti and cremation platforms to higher ground. Humid and unpredictable for walking tours.",
                      },
                      {
                        season: "Nov (Dev Deepawali)",
                        emoji: "🪔",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Spectacular but crowded",
                        text: "The 'Diwali of the Gods,' fifteen days after regular Diwali, sees every ghat lined with thousands of oil lamps — extraordinary to witness, but book accommodation months ahead.",
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
                    <strong>Our pick:</strong> November to February —
                    comfortable temperatures, dry ghats, and cool, misty
                    mornings that make the sunrise boat ride genuinely
                    memorable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Varanasi</h2>
                  <p>
                    Varanasi is one of North India's best-connected pilgrim
                    cities, with air, rail, and road options all converging
                    here.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Lal Bahadur Shastri
                      International Airport (VNS), about 25 km from the
                      city centre, has direct domestic flights from Delhi,
                      Mumbai, Bengaluru, Kolkata, and other major hubs, plus
                      a handful of international connections.
                    </li>
                    <li>
                      <strong>By rail:</strong> Varanasi Junction (Varanasi
                      Cantt, station code BSB) is one of India's busiest
                      railway stations, with direct trains from Delhi,
                      Mumbai, Kolkata, Chennai, and virtually every major
                      city — the most common way pilgrims and travellers
                      arrive.
                    </li>
                    <li>
                      <strong>By road:</strong> NH19 connects Varanasi to
                      Prayagraj and onward toward Delhi/Kanpur, while NH35
                      and other highways link it to Chandauli, Mirzapur,
                      and eastern Bihar. State buses and private taxis run
                      frequently on these routes.
                    </li>
                    <li>
                      <strong>Getting around the city:</strong> Auto-rickshaws
                      and cycle-rickshaws cover most distances; the old
                      city's lanes near the ghats are walk-only, too narrow
                      for any vehicle.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a hotel within walking
                    distance of the ghats (near Dashashwamedh or Assi) —
                    traffic near the old city is dense, and being able to
                    walk to the Aarti avoids the worst of it.
                  </div>
                </section>

                {/* ── Ghats & Aarti ──────────────────────────────────────── */}
                <section id="ghats-and-aarti">
                  <h2>The Ghats & Ganga Aarti</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/rishikesh/rishikesh.jpg"
                      alt="Pilgrims and boats along the Ganga ghats in Varanasi at dusk"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Varanasi's identity is built on its ghats — long
                    stretches of stone steps descending to the river, each
                    with its own history, deity, or ritual purpose. Walking
                    the full length from Assi Ghat in the south to
                    Manikarnika and beyond in the north is the single best
                    way to understand the city.
                  </p>
                  <h3>Dashashwamedh Ghat & the Evening Ganga Aarti</h3>
                  <p>
                    The busiest and most central of the ghats, Dashashwamedh
                    is where the nightly <strong>Ganga Aarti</strong> is
                    performed — an elaborate fire ritual conducted by a row
                    of young priests in unison, each swinging multi-tiered
                    brass lamps, conch shells, and incense in choreographed
                    arcs to the sound of bells and devotional chanting.
                    Crowds gather on the steps and in boats anchored just
                    offshore; arriving 45-60 minutes before start time
                    (roughly sunset, adjusted seasonally) is necessary to
                    get a decent vantage point on the steps themselves.
                    Watching from a rented rowboat costs more but gives an
                    unobstructed view of all the priests performing
                    together, without the crowd crush.
                  </p>
                  <h3>Assi Ghat</h3>
                  <p>
                    At the southern end of the ghat stretch, Assi Ghat has a
                    younger, more relaxed energy — it's popular at sunrise
                    with joggers, yoga groups, and a smaller, quieter
                    version of the Aarti performed here each morning. It's
                    also where several riverside cafés and guesthouses
                    cluster, making it a common base for longer stays.
                  </p>
                  <h3>Sunrise Boat Ride</h3>
                  <p>
                    A rowboat ride along the ghats at first light, roughly
                    5:30-6:30 AM depending on the season, is arguably the
                    single most worthwhile thing to do in Varanasi. The
                    river is calm, the light is soft, and you pass the full
                    sweep of ghats — bathers performing their morning
                    rituals, priests under bamboo umbrellas, temple spires,
                    and the smoke rising from Manikarnika — from a distance
                    that feels appropriately respectful. Boats can be hired
                    directly at most major ghats; agree on the route,
                    duration, and price before setting off.
                  </p>
                </section>

                {/* ── Kashi Vishwanath ────────────────────────────────────── */}
                <section id="kashi-vishwanath">
                  <h2>Kashi Vishwanath Temple</h2>
                  <p>
                    <strong>Kashi Vishwanath Temple</strong>, dedicated to
                    Shiva in his form as Vishwanath ("Lord of the
                    Universe"), is one of the twelve <em>Jyotirlingas</em> —
                    shrines Hindu tradition holds as especially
                    self-manifested seats of Shiva — and the spiritual
                    centre of the entire city. The current structure dates
                    largely to 1780, rebuilt by Maharani Ahilyabai Holkar
                    of Indore after earlier temples on the site were
                    destroyed; its main spire was later gilded with gold
                    donated by Maharaja Ranjit Singh of Punjab.
                  </p>
                  <p>
                    In recent years, the temple's setting was transformed
                    by the <strong>Kashi Vishwanath Corridor</strong>, a
                    large redevelopment completed in 2021-22 that cleared
                    the dense maze of buildings previously wedged between
                    the temple and the river, replacing them with a wide,
                    landscaped pedestrian corridor that runs directly from
                    the temple complex down to Lalita Ghat on the Ganga.
                    The project dramatically eased pilgrim access and
                    crowd flow, though it also erased a layer of the old
                    city's density in the process — a trade-off still
                    debated locally.
                  </p>
                  <p>
                    Security is tight and mobile phones, cameras, leather
                    items, and bags are generally not permitted inside;
                    lockers are available near the entrance. Expect airport-style
                    screening and, during peak pilgrim season or festivals
                    like Shivaratri, queues that can run for hours.
                  </p>
                </section>

                {/* ── Manikarnika ─────────────────────────────────────────── */}
                <section id="manikarnika">
                  <h2>Manikarnika Ghat</h2>
                  <p>
                    <strong>Manikarnika Ghat</strong> is one of Varanasi's
                    two primary cremation ghats (the other being Harishchandra
                    Ghat, further south), and among the most sacred cremation
                    sites in Hinduism. Tradition holds that dying — or being
                    cremated — in Kashi grants <em>moksha</em>, direct
                    liberation from the cycle of rebirth, which is why
                    bodies are brought here from across India, often after
                    long journeys, and why cremations happen around the
                    clock, every day of the year.
                  </p>
                  <p>
                    The rites are conducted by the <strong>Doms</strong>, a
                    community that has held the hereditary right to tend the
                    cremation fires here for generations, and the sacred
                    flame used to light every pyre is said to have burned
                    continuously for centuries. This is a working, public
                    ritual space rather than a tourist site, and it is
                    entirely normal for visitors to observe from the
                    surrounding steps at a respectful distance — many
                    Varanasi guesthouses and rooftop cafés along this
                    stretch of the river offer views of the ghat for
                    exactly this reason.
                  </p>
                  <div
                    className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🙏 Visitor Etiquette:</strong> Never photograph
                    or film pyres, bodies, or grieving families without
                    explicit permission — this is treated as a serious
                    breach of respect. Dress modestly, keep your voice low,
                    and don't treat the ghat as a spectacle. You may be
                    approached by self-appointed "guides" pressing for large
                    donations toward wood or the Doms — these are not
                    official, and any donation should be a personal choice,
                    given directly and in a reasonable amount.
                  </div>
                </section>

                {/* ── Old City ─────────────────────────────────────────────── */}
                <section id="old-city">
                  <h2>The Old City & Its Crafts</h2>
                  <h3>The Galis (Lanes) of Varanasi</h3>
                  <p>
                    Behind the ghats lies a dense web of narrow lanes —
                    locally called <em>galis</em> — barely wide enough for
                    two people to pass, lined with centuries-old houses,
                    small shrines, sweet shops, and silk looms. Getting
                    genuinely lost here, without a fixed destination, is
                    one of the better ways to spend an unstructured
                    afternoon; the lanes eventually spit you back out
                    somewhere along the river.
                  </p>
                  <h3>Banarasi Silk</h3>
                  <p>
                    Varanasi has been synonymous with fine silk weaving for
                    centuries. <strong>Banarasi sarees</strong> — known for
                    intricate gold and silver zari brocade work — are
                    still hand-woven on traditional looms in weaver
                    neighbourhoods like <strong>Madanpura</strong> and{" "}
                    <strong>Lallapura</strong>, largely by families
                    practicing a craft passed down over generations. Some
                    weaving workshops welcome visitors to watch the process;
                    asking at your accommodation for a reputable one is
                    generally more reliable than following a random tout.
                  </p>
                  <h3>Breakfast Culture: Kachori-Sabzi & Jalebi</h3>
                  <p>
                    Mornings in Varanasi have their own institution: hot{" "}
                    <strong>kachori</strong> (deep-fried stuffed pastry)
                    served with spiced <strong>sabzi</strong>, followed by
                    fresh, syrup-soaked <strong>jalebi</strong>, sold at
                    small stalls that have often been run by the same
                    family for decades. It's a working-class breakfast
                    eaten standing up, and one of the most authentic food
                    experiences in the city.
                  </p>
                  <h3>Bharat Kala Bhavan</h3>
                  <p>
                    Housed within Banaras Hindu University's sprawling
                    campus, <strong>Bharat Kala Bhavan</strong> is a
                    well-regarded museum holding miniature paintings,
                    sculpture, textiles, and archaeological finds spanning
                    Indian art history — a useful, air-conditioned
                    counterpoint to a few days of ghat-walking.
                  </p>
                </section>

                {/* ── Sarnath Day Trip ─────────────────────────────────────── */}
                <section id="sarnath-day-trip">
                  <h2>Day Trip to Sarnath</h2>
                  <p>
                    About 10 km from central Varanasi sits{" "}
                    <Link href="/blog/sarnath-travel-guide">Sarnath</Link>,
                    where the Buddha is traditionally held to have
                    delivered his first sermon after attaining enlightenment.
                    The Dhamek Stupa, the remains of Ashoka's pillar, the
                    Deer Park, and the Archaeological Museum are all
                    walkable within a compact site, making it an easy
                    half-day addition to a Varanasi itinerary and a
                    meaningful contrast to the city's dominant Hindu
                    character. A round-trip auto-rickshaw or taxi takes
                    roughly 30-40 minutes each way; see our full{" "}
                    <Link href="/blog/sarnath-travel-guide">
                      Sarnath guide
                    </Link>{" "}
                    for a complete plan.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Varanasi</h2>
                  <p>
                    Most travellers base themselves near the ghats — either
                    close to Dashashwamedh for proximity to the Aarti and
                    old city, or around Assi Ghat for a quieter, more
                    laid-back setting.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses in the old city lanes",
                          "Backpacker hostels near Assi Ghat",
                          "Basic lodges near the railway station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Ghat-facing heritage havelis",
                          "Boutique hotels in the Cantt area",
                          "Riverside cottages near Assi Ghat",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹25,000+/night",
                        picks: [
                          "Riverfront heritage properties",
                          "Full-service 5-star hotels in Cantt",
                          "Restored palace-style stays",
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
                  <h2>Suggested Visit Plan (3-4 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Evening Aarti",
                        color: "bg-amber-700",
                        activities: [
                          "Check in, rest through the afternoon heat",
                          "Walk the ghats from Dashashwamedh toward Assi",
                          "Watch the evening Ganga Aarti at Dashashwamedh Ghat",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sunrise Boat Ride & Kashi Vishwanath",
                        color: "bg-sky-600",
                        activities: [
                          "Pre-dawn rowboat ride along the ghats",
                          "Breakfast: kachori-sabzi and jalebi at a local stall",
                          "Visit Kashi Vishwanath Temple via the corridor",
                          "Afternoon walk through the old city galis",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Sarnath & Old City Crafts",
                        color: "bg-forest-600",
                        activities: [
                          "Half-day trip to Sarnath (Dhamek Stupa, museum)",
                          "Visit a Banarasi silk weaving workshop",
                          "Evening at Assi Ghat or Bharat Kala Bhavan",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Slow Morning & Onward Travel",
                        color: "bg-purple-600",
                        activities: [
                          "Optional visit to Manikarnika/Harishchandra Ghat",
                          "Last-minute silk shopping",
                          "Depart by rail or road toward Prayagraj or Chandauli",
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
                    * Many travellers continue on to{" "}
                    <Link href="/blog/prayagraj-travel-guide">
                      Prayagraj
                    </Link>{" "}
                    (about 2.5-3 hours by road or rail) or take a day trip
                    out to{" "}
                    <Link href="/blog/chandauli-travel-guide">
                      Chandauli's waterfalls
                    </Link>{" "}
                    for a change of pace from the ghats.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Varanasi</h2>
                  <ul>
                    <li>
                      <strong>Kachori-sabzi and jalebi stalls:</strong>{" "}
                      Scattered through the old city, these are Varanasi's
                      breakfast institution — cheap, filling, and usually
                      busiest before 10 AM.
                    </li>
                    <li>
                      <strong>Thandai shops:</strong> A cooling, spiced
                      milk drink (sometimes with bhang, sold separately and
                      legally in licensed government shops) closely
                      associated with Varanasi's Shaivite culture.
                    </li>
                    <li>
                      <strong>Rooftop cafés near the ghats:</strong> Casual,
                      traveller-friendly menus with river views — a
                      reliable option for a slow breakfast or evening meal
                      while watching the ghats below.
                    </li>
                    <li>
                      <strong>Lassi shops in the old city:</strong> Thick,
                      often clay-cup-served lassi from small, long-running
                      shops tucked into the lanes near the ghats.
                    </li>
                    <li>
                      <strong>Chaat and street food near Vishwanath Gali:</strong>{" "}
                      A dense stretch of snack vendors close to the temple
                      corridor, good for an evening food walk.
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
                          ["Food/day", "₹500", "₹1,500", "₹3,500"],
                          ["Boat ride (sunrise)", "₹300", "₹500", "₹1,200"],
                          [
                            "Local transport/day",
                            "₹250",
                            "₹600",
                            "₹1,500",
                          ],
                          [
                            "Sarnath round trip",
                            "₹400",
                            "₹700",
                            "₹1,500",
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
                    * Figures are per person, per day (except Sarnath round
                    trip, a one-time cost). Kashi Vishwanath Temple entry is
                    free; some VIP/express darshan lines charge a fee.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Varanasi</h2>
                  <ul>
                    <li>
                      <strong>Do the sunrise boat ride:</strong> It's the
                      single best way to see the full sweep of the ghats
                      without the daytime crowds and heat.
                    </li>
                    <li>
                      <strong>Carry cash and a phone-free bag for
                      temples:</strong> Kashi Vishwanath and several other
                      temples don't allow phones, cameras, or leather
                      items inside — lockers are available near the
                      entrance.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Cover shoulders and
                      knees, especially around temples and cremation ghats.
                    </li>
                    <li>
                      <strong>Be firm with touts and boatmen:</strong>{" "}
                      Agree on prices before starting any ride or tour, and
                      expect frequent, persistent offers — a polite, firm
                      decline is normal and expected.
                    </li>
                    <li>
                      <strong>Respect Manikarnika Ghat:</strong> Observe
                      from a distance, never photograph pyres or grieving
                      families, and be sceptical of unofficial donation
                      requests.
                    </li>
                    <li>
                      <strong>Stay hydrated and pace yourself:</strong> Even
                      in the cooler months, a full day of ghat-walking adds
                      up — carry water and take shaded breaks.
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
                          "Take the sunrise boat ride along the ghats",
                          "Arrive early for the Dashashwamedh Ganga Aarti",
                          "Dress modestly near temples and ghats",
                          "Ask permission before photographing people",
                          "Try kachori-sabzi and jalebi for breakfast",
                          "Combine Varanasi with a Sarnath day trip",
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
                          "Photograph pyres or grieving families at Manikarnika",
                          "Carry phones or leather items into Kashi Vishwanath",
                          "Assume every 'guide' at the ghats is official",
                          "Visit the lower ghats without checking monsoon levels",
                          "Skip agreeing on boat/rickshaw prices upfront",
                          "Rush the old city — it rewards slow wandering",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Varanasi with a
                    half-day trip to{" "}
                    <Link href="/blog/sarnath-travel-guide">Sarnath</Link>,
                    a waterfall day trip to{" "}
                    <Link href="/blog/chandauli-travel-guide">
                      Chandauli
                    </Link>
                    , or continue onward to{" "}
                    <Link href="/blog/prayagraj-travel-guide">
                      Prayagraj's Triveni Sangam
                    </Link>{" "}
                    and the cliffside ghats of{" "}
                    <Link href="/blog/mirzapur-travel-guide">Mirzapur</Link>{" "}
                    to round out an{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    pilgrimage circuit.
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
                  "Varanasi",
                  "Kashi",
                  "Ganga Aarti",
                  "Uttar Pradesh",
                  "Kashi Vishwanath",
                  "Ghats",
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

              <RelatedPostsGrid currentSlug="varanasi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="varanasi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
