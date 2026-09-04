// src/app/blog/similipal-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Similipal Tiger Reserve: Safari Guide & Tips",
  description:
    "Complete Similipal guide — one of India's largest tiger reserves, the rare melanistic black tiger, Barehipani and Joranda waterfalls, safari zones, and a full visit plan.",
  keywords:
    "Similipal travel guide, Similipal Tiger Reserve, black tiger Similipal, Barehipani Falls, Joranda Falls, Mayurbhanj, Similipal safari, how to reach Similipal, Odisha wildlife",
  openGraph: {
    title: "Similipal Tiger Reserve: Safari Guide & Tips",
    description:
      "One of India's largest tiger reserves, home to the rare melanistic black tiger and two of the country's highest waterfalls — the complete Similipal guide.",
    url: "https://club.kudozz.in/blog/similipal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dense green forest landscape, evoking Similipal's sal forest and tiger reserve terrain in Mayurbhanj, Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Similipal Tiger Reserve: Safari Guide & Tips",
    description:
      "One of India's largest tiger reserves, home to the rare melanistic black tiger and dramatic waterfalls — the complete Similipal guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/similipal-travel-guide",
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
          headline: "Similipal Tiger Reserve: Safari Guide & Tips",
          description:
            "Complete Similipal guide — one of India's largest tiger reserves, the rare melanistic black tiger, Barehipani and Joranda waterfalls, safari zones, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/similipal-travel-guide",
          },
          keywords:
            "Similipal, Tiger Reserve, Odisha, Mayurbhanj, Wildlife Safari",
          about: {
            "@type": "Place",
            name: "Similipal",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Similipal",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Are black tigers really found here and how rare are sightings?",
    a: "Yes — Similipal is one of the few places on earth where melanistic (black) tigers have been documented in the wild, a genuinely rare pigmentation variant. Sightings of a black tiger specifically are still rare even by tiger-safari standards, so treat it as a remarkable bonus rather than a planning goal.",
  },
  {
    q: "When is the park open?",
    a: "Similipal is typically open from November to June and closed during the monsoon (roughly July to October) for ecological reasons, when forest tracks become difficult and the ecosystem needs an undisturbed breeding season. Plan visits within the open window.",
  },
  {
    q: "How far is Similipal from Bhubaneswar?",
    a: "Roughly 250 km, a 5-6 hour drive. Baripada, the nearest major town, is the practical gateway and roughly 20-30 km from the park's main entry points depending on the zone.",
  },
  {
    q: "How many days should I plan for Similipal?",
    a: "2-3 days is realistic given the reserve's scale — one or two days for safari drives across different zones, and at least a half-day dedicated to Barehipani and Joranda Falls, which are worth visiting on their own terms rather than squeezed into a wildlife drive.",
  },
  {
    q: "Can I see the waterfalls as part of a safari, or do they need separate visits?",
    a: "Barehipani and Joranda Falls sit within the reserve and are typically visited via designated viewpoints reached by the same permit system as the wildlife safari, but they're best treated as their own outing rather than rushed alongside a game drive — the approach roads and viewpoints take real time to do justice to.",
  },
  {
    q: "What is the best time to visit Similipal?",
    a: "November to February for cooler weather and comfortable safari conditions; March to June sees more wildlife activity around remaining water sources despite the heat, though days are considerably hotter.",
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
  { id: "introduction", title: "India's Rare Black Tiger Country", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Similipal", level: 2 },
  { id: "things-to-do", title: "Safaris, Waterfalls & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SimilipalGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Dense green forest landscape, evoking Similipal's sal forest and tiger reserve terrain in Mayurbhanj, Odisha"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Similipal", href: null },
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
              {["Similipal", "Tiger Reserve", "Mayurbhanj", "Odisha", "Wildlife Safari"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Similipal Tiger Reserve: Safari Guide & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India&apos;s largest tiger reserves, home to the rare
              melanistic black tiger, dense sal forests, and two of the
              country&apos;s most dramatic waterfalls.
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
                  text: "Mayurbhanj, Odisha",
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
                  <h2>India&apos;s Rare Black Tiger Country</h2>
                  <p>
                    <strong>Similipal</strong>, in Mayurbhanj district in
                    northern Odisha, is one of India&apos;s largest tiger
                    reserves — a vast, densely forested expanse of sal
                    woodland that feels remote even by wildlife-reserve
                    standards. What sets it apart from every other tiger
                    reserve in the country is a genuine rarity: Similipal is
                    one of only a handful of places on earth where{" "}
                    <strong>melanistic (black) tigers</strong> have been
                    documented in the wild, a striking pigmentation variant
                    that has made the reserve a point of fascination for
                    wildlife researchers and photographers alike.
                  </p>
                  <p>
                    Sightings of a black tiger specifically remain genuinely
                    rare, even by the already-unpredictable standards of
                    tiger safaris — so it&apos;s worth treating any sighting
                    as an extraordinary bonus rather than the reason to
                    book the trip. What Similipal reliably delivers instead
                    is scale and scenery: dense forest, resident elephants
                    and gaur, and two of India&apos;s most dramatic
                    waterfalls tumbling through the reserve itself.
                  </p>
                  <p>
                    Tribal communities, including the Kholha and Santhal,
                    live in and around the reserve&apos;s buffer areas,
                    adding a cultural dimension that many visitors only
                    encounter briefly on the drive in — worth a mention if a
                    guide offers more context along the way.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐅</span> Similipal at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Mayurbhanj, Odisha",
                        },
                        {
                          icon: "🚗",
                          label: "Gateway Town",
                          value: "Baripada",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Jun" },
                        {
                          icon: "🎯",
                          label: "Known For",
                          value: "Black Tigers, Waterfalls",
                        },
                        {
                          icon: "💧",
                          label: "Waterfalls",
                          value: "Barehipani, Joranda",
                        },
                        {
                          icon: "🏨",
                          label: "Suggested Stay",
                          value: "2–3 Days",
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
                  <h2>Best Time to Visit Similipal</h2>
                  <p>
                    Similipal closes entirely during the monsoon, which
                    shapes the visiting calendar more strictly than most
                    Indian wildlife reserves.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable for extended safari drives and the waterfall hikes.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, better wildlife activity",
                        text: "Rising heat concentrates wildlife around remaining water sources, improving sighting odds despite the harsher conditions.",
                      },
                      {
                        season: "Jul – Oct",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Closed to visitors",
                        text: "The park shuts for the monsoon — forest tracks become impassable and the ecosystem needs an undisturbed breeding season.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "💧",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Fullest waterfalls",
                        text: "Barehipani and Joranda are at their most dramatic shortly after monsoon runoff has settled, with clear approach roads.",
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
                    weather, clear waterfall approach roads, and long
                    comfortable safari drives across the reserve.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Similipal</h2>
                  <ul>
                    <li>
                      <strong>Via Baripada:</strong> The nearest major town
                      and the practical gateway, roughly 20–30 km from the
                      park&apos;s main entry points depending on the zone.
                    </li>
                    <li>
                      <strong>By road from Bhubaneswar:</strong> Roughly 250
                      km, a 5–6 hour drive — most visitors arrive by private
                      vehicle or hired car.
                    </li>
                    <li>
                      <strong>By rail:</strong> Baripada and Balasore both
                      have rail connections, with onward road transfers to
                      the reserve.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book permits and safari
                    slots in advance — Similipal&apos;s entry system is
                    stricter than many Indian reserves given its
                    conservation priorities, and last-minute arrivals can be
                    turned away.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Safaris, Waterfalls & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Dense sal forest inside Similipal Tiger Reserve, Mayurbhanj"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Safari Zones & Wildlife</h3>
                  <p>
                    Safaris run through designated zones within the reserve,
                    typically by jeep along forest tracks through the sal
                    canopy. Beyond the elusive black tiger, wildlife
                    includes elephants, gaur (Indian bison), leopards, and a
                    genuinely rich birdlife — sightings vary considerably by
                    season and zone, so set expectations around a full
                    forest experience rather than any single animal.
                  </p>
                  <h3>Barehipani Falls</h3>
                  <p>
                    One of India&apos;s highest waterfalls, dropping in a
                    long, dramatic cascade through the forest — best viewed
                    from a designated viewpoint, and worth allocating real
                    time to rather than a quick drive-by stop.
                  </p>
                  <h3>Joranda Falls</h3>
                  <p>
                    A second major waterfall within the reserve, less tall
                    than Barehipani but equally scenic, often paired with
                    Barehipani in a single waterfall-focused day.
                  </p>
                  <h3>Tribal Communities Nearby</h3>
                  <p>
                    The Kholha and Santhal communities inhabit the buffer
                    areas around the reserve, and a knowledgeable local
                    guide can add valuable cultural context to the drive in
                    and out.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation clusters around Baripada and a handful of
                    forest-lodge and private-resort options near the park
                    boundary.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic lodges in Baripada",
                          "Forest department rest houses",
                          "Simple guesthouses near entry points",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Private resorts near the boundary",
                          "Baripada business hotels",
                          "Nature-lodge stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium forest-view resorts",
                          "Full-board safari packages",
                          "Boutique wildlife lodges",
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
                  <h2>Suggested Visit Plan (3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & First Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Travel from Bhubaneswar or arrive via Baripada",
                          "Check permits and settle in",
                          "Evening safari drive",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Waterfalls",
                        color: "bg-sky-600",
                        activities: [
                          "Morning safari drive",
                          "Barehipani Falls viewpoint",
                          "Joranda Falls in the afternoon",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Final Safari & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Early-morning safari for the best wildlife activity",
                          "Time with tribal-village context if guide offers it",
                          "Departure",
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
                  <h2>Where to Eat Near Similipal</h2>
                  <ul>
                    <li>
                      <strong>Lodge and resort kitchens:</strong> Most
                      accommodation serves home-style Odia meals — the most
                      reliable option given how limited standalone dining
                      is near the reserve.
                    </li>
                    <li>
                      <strong>Baripada town:</strong> A wider spread of
                      proper restaurants for visitors basing themselves in
                      town.
                    </li>
                    <li>
                      <strong>Carry snacks and water:</strong> Options thin
                      out considerably once inside the reserve boundary.
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
                            "₹3,000",
                            "₹6,000",
                          ],
                          ["Safari/jeep permit (per drive)", "₹1,500", "₹2,500", "₹4,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          ["Local transport/day", "₹1,000", "₹2,000", "₹3,500"],
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
                    * Safari/permit costs are per drive and can add up
                    quickly across a multi-day visit — factor this into
                    trip planning.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Similipal</h2>
                  <ul>
                    <li>
                      <strong>Book permits and safaris in advance:</strong>{" "}
                      Similipal&apos;s entry system is stricter than many
                      Indian reserves — don&apos;t plan on arriving without
                      confirmed bookings.
                    </li>
                    <li>
                      <strong>Don&apos;t plan around seeing a black
                      tiger:</strong> Treat any sighting as an extraordinary
                      bonus, not the trip&apos;s goal.
                    </li>
                    <li>
                      <strong>Dedicate real time to the waterfalls:</strong>{" "}
                      Barehipani and Joranda deserve their own outing rather
                      than a rushed stop between safari drives.
                    </li>
                    <li>
                      <strong>Check the park's open dates:</strong> Closed
                      entirely during monsoon (roughly Jul–Oct) — confirm
                      current-year dates before travelling.
                    </li>
                    <li>
                      <strong>Carry your own snacks and water:</strong> Very
                      limited options once inside the reserve.
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
                          "Book permits and safari slots well in advance",
                          "Dedicate a separate outing to the waterfalls",
                          "Go on early-morning safaris for the best activity",
                          "Confirm current park-opening dates before travelling",
                          "Carry snacks, water, and basic essentials",
                          "Ask your guide about the local tribal communities",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Expect to see a black tiger on your trip",
                          "Arrive without confirmed permits",
                          "Visit during the monsoon closure",
                          "Rush the waterfalls between safari drives",
                          "Rely on finding food inside the reserve",
                          "Underestimate travel time from Bhubaneswar",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Similipal
                    with a wider Odisha wildlife circuit — see our guides to{" "}
                    <Link href="/blog/satkosia-travel-guide">
                      Satkosia
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/bhitarkanika-travel-guide">
                      Bhitarkanika
                    </Link>
                    , or check the full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
                    </Link>{" "}
                    for the wider state.
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
                  "Similipal",
                  "Tiger Reserve",
                  "Odisha",
                  "Mayurbhanj",
                  "Wildlife Safari",
                  "Black Tiger",
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

              <RelatedPostsGrid currentSlug="similipal-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="similipal-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
