// src/app/blog/hanle-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hanle Travel Guide: Dark Sky Reserve, Observatory & Stargazing",
  description:
    "The complete Hanle travel guide — India's first Dark Sky Reserve on the Changthang plateau. Stargazing tips, the Indian Astronomical Observatory, how to reach, permits, homestays, and a full itinerary for this remote Ladakh village.",
  keywords:
    "Hanle, Hanle Dark Sky Reserve, Hanle Ladakh, Indian Astronomical Observatory, Changthang plateau, stargazing India, Hanle Monastery, Ladakh astro tourism, Hanle permit, Nyoma Ladakh, best time to visit Hanle, how to reach Hanle from Leh, Hanle itinerary days, is Hanle safe for solo travellers, Hanle trip budget, top things to do in Hanle, Hanle homestays, Hanle Pangong Tso Moriri loop, Ladakh dark sky tourism, Hanle stargazing tips",
  openGraph: {
    title: "Hanle Travel Guide: Dark Sky Reserve, Observatory & Stargazing",
    description:
      "A village at 4,500 metres where the Milky Way is visible to the naked eye — the complete guide to Hanle, India's first Dark Sky Reserve.",
    url: "https://club.kudozz.in/blog/hanle-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Night sky over the Changthang plateau near Hanle, Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanle Travel Guide: Dark Sky Reserve, Observatory & Stargazing",
    description:
      "India's first Dark Sky Reserve — stargazing, the Indian Astronomical Observatory, permits, and homestays in remote Hanle, Ladakh.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/hanle-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Hanle Travel Guide: Dark Sky Reserve, Observatory & Stargazing",
          description:
            "The complete Hanle travel guide — India's first Dark Sky Reserve, the Indian Astronomical Observatory, how to reach, permits, homestays, and stargazing tips.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-07-02",
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
            "@id": "https://club.kudozz.in/blog/hanle-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Hanle",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Ladakh",
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
                name: "Hanle Travel Guide",
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
    q: "How many days do I need for Hanle?",
    a: "Plan for at least 2 days acclimatising in Leh, then a full day of driving each way to Hanle (7-8 hours via the Nyoma route), plus at least one overnight in the village for a stargazing session. Most travellers fold Hanle into a longer loop with Pangong Tso and Tso Moriri, which stretches the trip to around a week from Leh.",
  },
  {
    q: "What is the best time to visit Hanle?",
    a: "The roads are open from roughly May through late October. September is our pick — crowds thin out, the air is at its driest, and clear-sky nights are near-guaranteed, with days crisp and nights cold but manageable. Whatever month you choose, time your visit around the new moon, since a full moon washes out the fainter stars and the Milky Way.",
  },
  {
    q: "How do I reach Hanle from Leh?",
    a: "The standard route runs Leh to Upshi to Chumathang to Mahe to Nyoma to Hanle, roughly 254 km and 7-8 hours of driving. Fuel up in Leh or Upshi, since there is no reliable fuel station beyond Nyoma and none in Hanle itself. Travellers coming from Pangong Tso can also continue south via Chushul, though that route is longer, rougher, and requires confirming your permit covers it.",
  },
  {
    q: "Is Hanle safe for solo travellers?",
    a: "Hanle is remote but not unsafe — the main risks are altitude (roughly 4,500 metres, higher than Leh itself), extreme cold after dark, and the lack of fuel, ATMs, or mobile signal beyond Nyoma. Acclimatise in Leh for at least 2 days first, carry sufficient cash, and confirm your Inner Line Permit before setting out; solo travellers regularly make the trip via homestays and shared taxis.",
  },
  {
    q: "What is the budget for a trip to Hanle?",
    a: "A standard homestay with meals runs roughly ₹1,200-2,500 a night, while an astro-stay homestay with guided telescope sessions runs ₹2,500-5,000. Daily costs excluding vehicle hire range from about ₹1,300 on a budget to ₹6,600 for comfort. Vehicle hire for the Leh-Hanle return (₹6,000-14,000) is usually the largest single cost, and is far more affordable split across a group of 3-4.",
  },
  {
    q: "Do I need a permit to visit Hanle?",
    a: "Yes. Indian nationals need an Inner Line Permit (ILP), available online at lahdclehpermit.in or in person at the Leh DC Office, typically approved within 24-48 hours. Foreign nationals need a Protected Area Permit (PAP) arranged through a registered Leh tour operator and cannot travel to Hanle independently. Checkpoints at Upshi and Nyoma are strictly enforced.",
  },
  {
    q: "What makes Hanle's Dark Sky Reserve special?",
    a: "Hanle sits at nearly 4,500 metres in one of India's driest, least light-polluted corners, with over 250 clear nights a year. In 2022 it became India's first Dark Sky Reserve, a roughly 1,000 sq km zone where outdoor lighting is shielded and dimmed and vehicles use parking lights after dark, protecting the conditions that also make it home to the Indian Astronomical Observatory.",
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
  { id: "introduction", title: "Why Hanle?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hanle", level: 2 },
  { id: "via-nyoma", title: "→ Via Chumathang & Nyoma", level: 3 },
  { id: "via-pangong", title: "→ Via Pangong & Chushul", level: 3 },
  { id: "permits", title: "Permits & Paperwork", level: 2 },
  { id: "stargazing", title: "Stargazing & the Dark Sky Reserve", level: 2 },
  { id: "observatory", title: "Indian Astronomical Observatory", level: 2 },
  { id: "monastery", title: "Hanle Monastery", level: 2 },
  { id: "combo-trip", title: "Pangong & Tso Moriri Combo", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HanlePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Night sky and mountain silhouettes over the Changthang plateau near Hanle, Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Hanle", href: null },
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
                "Hanle",
                "Dark Sky Reserve",
                "Stargazing",
                "Changthang",
                "Ladakh",
                "Astro-Tourism",
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
              Hanle Travel Guide: Dark Sky Reserve, Observatory & Stargazing
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A village of stone houses and grazing pashmina goats at 4,500
              metres, where the night sky is so dark the Milky Way casts a
              faint shadow. This is Hanle — India's first Dark Sky Reserve,
              and one of the last truly quiet places left on the map.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Changthang, Ladakh",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.icon}
                    />
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
                  <h2>Why Hanle?</h2>
                  <p>
                    Most of Ladakh sells itself on colour — turquoise lakes,
                    ochre monasteries, prayer flags snapping against a
                    cobalt sky. <strong>Hanle</strong> sells itself on the
                    absence of it. This is a village of roughly 40 stone
                    houses scattered across the Changthang plateau in
                    eastern Ladakh, so far from any city, any highway glow,
                    any real source of artificial light, that on a clear
                    moonless night the sky above it does something most
                    people have never seen: it fills, edge to edge, with
                    stars, and the Milky Way arcs overhead thick and bright
                    enough to read a shadow by.
                  </p>
                  <p>
                    In 2022, the Union Territory of Ladakh formally declared
                    the area around Hanle India's{" "}
                    <strong>first Dark Sky Reserve</strong> — a roughly
                    1,000 sq km zone where lighting is regulated and
                    astro-tourism is actively encouraged rather than merely
                    tolerated. The choice of location was not arbitrary.
                    Hanle sits at nearly 4,500 metres, in one of the driest,
                    least humid, least light-polluted corners of the
                    country, with over 250 clear nights a year. Those are
                    precisely the conditions astronomers look for — which is
                    why, since 2001, the ridge above the village has hosted
                    the <strong>Indian Astronomical Observatory</strong>,
                    one of the highest sites for optical and gamma-ray
                    telescopes anywhere on Earth.
                  </p>
                  <p>
                    What makes Hanle worth the long drive isn't only the
                    science, though. It's the totality of the place — a
                    Changpa nomad settlement with a 17th-century monastery
                    on a hillock, yak and pashmina goats grazing on
                    wind-scoured grassland, homestays that now double as
                    informal observatories, and a silence so complete that
                    visitors often describe the drive out as more
                    disorienting than the drive in. There is very little to
                    "do" in Hanle in the conventional sense. There is only,
                    after dark, an enormous amount to see.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>✨</span> Hanle at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Changthang, Nyoma, Ladakh",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "~4,500 m (14,760 ft)",
                        },
                        {
                          icon: "🌌",
                          label: "Status",
                          value: "India's 1st Dark Sky Reserve (2022)",
                        },
                        {
                          icon: "🔭",
                          label: "Landmark",
                          value: "Indian Astronomical Observatory",
                        },
                        {
                          icon: "🛣️",
                          label: "From Leh",
                          value: "~254 km / 7–8 hrs",
                        },
                        {
                          icon: "🛂",
                          label: "Permits",
                          value: "ILP mandatory (border-adjacent)",
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
                  <h2>Best Time to Visit Hanle</h2>
                  <p>
                    Two calendars matter in Hanle: the road-access calendar
                    and the sky calendar. The roads are open, weather
                    permitting, from roughly May through late October.
                    Within that window, the darkest and clearest skies fall
                    around the <strong>new moon</strong>, when moonlight
                    isn't washing out fainter stars and the Milky Way's core
                    is at its most vivid.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "June – July",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warmest window",
                        text: "Daytime temperatures are as mild as Hanle gets (10–18°C), nights still drop below freezing. Roads fully open, homestays operating at full capacity. Monsoon barely touches this rain-shadow plateau, so skies stay reliably clear.",
                      },
                      {
                        season: "September",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Our pick",
                        text: "Crowds from peak summer thin out, the air is at its driest, and clear-sky nights are near-guaranteed. Days are crisp, nights cold but manageable. Widely considered the best month for both scenery and stargazing.",
                      },
                      {
                        season: "October",
                        emoji: "🌙",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best stargazing, harder access",
                        text: "Humidity drops further and skies turn exceptionally transparent — astronomers rate this among the best months for observing. But nights fall well below -10°C and early snow can complicate the return drive. For committed stargazers only.",
                      },
                      {
                        season: "Nov – April",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Effectively closed",
                        text: "Roads become unreliable or impassable, temperatures plunge to -25°C to -30°C, and most homestays shut down. Hanle is not a realistic winter destination for casual travellers — this is expedition territory.",
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
                    <strong>Our pick:</strong> The week around the September
                    new moon. Combine it with the tail end of the tourist
                    season for empty homestays, warm-enough days, and skies
                    that will genuinely rearrange your sense of scale.
                    Whatever month you choose, check a lunar calendar before
                    booking — a full moon in Hanle can wash out everything
                    but the brightest planets.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Hanle</h2>
                  <p>
                    There is no shortcut to Hanle. Every route funnels
                    through Leh, and every route is a long, high-altitude
                    day of driving across the Changthang plateau. Plan for a
                    full day each way, with an overnight stop if you're
                    combining Hanle with Pangong Tso or Tso Moriri.
                  </p>

                  <section id="via-nyoma">
                    <h3>Via Chumathang & Nyoma (the standard route)</h3>
                    <p>
                      The most direct approach runs Leh → Upshi → Chumathang
                      → Mahe → Nyoma → Hanle, following the Indus River for
                      much of the way before cutting east across open
                      plateau. It's the route almost every taxi and self-
                      drive traveller uses, and the road surface — while
                      remote — is in reasonably good condition for most of
                      its length.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> ~254 km from Leh
                      </li>
                      <li>
                        <strong>Duration:</strong> 7–8 hours of driving
                        (rest stops included)
                      </li>
                      <li>
                        <strong>Route markers:</strong> Upshi (last real
                        fuel stop for many travellers), Chumathang (natural
                        hot springs), Mahe bridge, Nyoma (military and
                        administrative outpost)
                      </li>
                      <li>
                        <strong>Road condition:</strong> Paved for long
                        stretches; expect gravel and washboard sections
                        near Nyoma and on the final approach to Hanle
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Fuel up in Leh or Upshi:</strong> There is
                      no reliable fuel station beyond Nyoma. Fill your tank
                      completely before leaving and carry a spare canister
                      if you're on a bike — Hanle itself has no petrol pump.
                    </div>
                  </section>

                  <section id="via-pangong">
                    <h3>Via Pangong Tso & Chushul (the scenic detour)</h3>
                    <p>
                      Travellers already at Pangong Tso can continue south
                      along the lake's remote shore through Chushul and
                      Loma before joining the Nyoma road into Hanle. This
                      route is longer, rougher, and passes closer to the
                      Line of Actual Control, which means it demands extra
                      planning — but it strings together three of eastern
                      Ladakh's most remote landscapes in a single loop.
                    </p>
                    <ul>
                      <li>
                        <strong>Best for:</strong> Travellers doing the full
                        Changthang loop — Pangong → Chushul → Hanle → Tso
                        Moriri → Leh
                      </li>
                      <li>
                        <strong>Vehicle:</strong> High-clearance SUV
                        strongly recommended; some stretches are unpaved and
                        river-crossed
                      </li>
                      <li>
                        <strong>Permits:</strong> This corridor sits well
                        inside the restricted zone — confirm your ILP covers
                        Chushul and the connecting road before setting out
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Local advice beats maps:</strong> Road
                      conditions and checkpoint rules on the Pangong–Chushul
                      stretch change with the season and the security
                      situation. Confirm the current status with your Leh
                      operator or the DC office before committing to this
                      route — the standard Nyoma road is the safer default.
                    </div>
                  </section>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Paperwork for Hanle</h2>
                  <p>
                    Hanle lies deep in Ladakh's protected border belt, close
                    enough to the Line of Actual Control that every visitor
                    needs paperwork sorted before leaving Leh. Checkpoints
                    at Upshi and Nyoma are strictly enforced — arriving
                    without the right documents means being turned back
                    after most of a day's driving.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        permit: "Inner Line Permit (ILP)",
                        color: "border-forest-300 bg-forest-50",
                        required: "Hanle, Nyoma, Chumathang, Loma, Chushul",
                        who: "All Indian nationals",
                        cost: "₹20–₹400 depending on sector",
                        how: "Apply online at lahdclehpermit.in or in person at the DC Office in Leh. Online approval typically takes 24–48 hours.",
                        note: "Carry printed copies — checkpoints at Upshi and Nyoma often want physical paperwork, not screenshots.",
                      },
                      {
                        permit: "Protected Area Permit (PAP)",
                        color: "border-amber-300 bg-amber-50",
                        required: "Hanle and the wider Changthang sector",
                        who: "Foreign nationals",
                        cost: "Arranged through a registered Leh tour operator",
                        how: "Foreign nationals cannot travel to Hanle independently — a licensed Leh-based agency must arrange the permit and, in most cases, accompany the trip.",
                        note: "Restrictions on this sector have eased in recent years but change with little notice. Confirm current rules before booking flights.",
                      },
                      {
                        permit: "Dark Sky Reserve entry",
                        color: "border-sky-300 bg-sky-50",
                        required: "Core stargazing zone around Hanle village",
                        who: "All visitors",
                        cost: "Nominal fee, collected locally",
                        how: "Coordinated through your homestay or the village council — most homestays now build this into their stargazing packages.",
                        note: "No separate permit office; ask your host on arrival for the current process.",
                      },
                    ].map((p) => (
                      <div
                        key={p.permit}
                        className={`border ${p.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-3"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {p.permit}
                        </h4>
                        <div
                          className="grid sm:grid-cols-2 gap-3 text-sm"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Required for
                            </span>
                            <span className="text-stone-700">
                              {p.required}
                            </span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Who needs it
                            </span>
                            <span className="text-stone-700">{p.who}</span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Cost
                            </span>
                            <span className="text-stone-700 font-medium">
                              {p.cost}
                            </span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              How to get
                            </span>
                            <span className="text-stone-700">{p.how}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-start gap-2 text-xs text-stone-500">
                          <span className="flex-shrink-0">⚠️</span>
                          {p.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Stargazing ────────────────────────────────────────── */}
                <section id="stargazing">
                  <h2>Stargazing & the Dark Sky Reserve</h2>
                  <p>
                    This is the reason to make the drive. Hanle combines
                    three things astronomers chase and rarely get together:
                    altitude (thinner, drier air with less atmosphere to
                    look through), minimal humidity (the Changthang plateau
                    sits in a rain shadow, so haze and cloud are rare), and
                    almost zero artificial light for hundreds of kilometres
                    in every direction. The result, on a clear new-moon
                    night, is a sky that looks less like stargazing and more
                    like standing inside a planetarium with the dome
                    switched off.
                  </p>
                  <p>
                    The <strong>Hanle Dark Sky Reserve (HDSR)</strong>,
                    notified by the Ladakh administration in 2022, covers
                    roughly 1,000 sq km around the village with a strictly
                    controlled core zone. Within it, outdoor lighting is
                    shielded and dimmed, vehicle headlights are switched to
                    parking lights after dark near the village, and new
                    construction is required to follow dark-sky-friendly
                    lighting norms. It's a rare case of a remote community
                    treating its night sky as an economic and cultural
                    asset worth actively protecting, rather than something
                    to simply not think about.
                  </p>
                  <p>
                    On the ground, this has quietly built a small
                    astro-tourism economy. Several homestays now have their
                    own Dobsonian telescopes and viewing decks, and can walk
                    guests through locating the rings of Saturn, the moons
                    of Jupiter, star clusters, and — on the clearest nights
                    — the dust lanes within the Milky Way's own arm. A
                    handful of dedicated astro-camps and public observatories
                    run longer sessions with larger telescopes, astrophotography
                    guidance, and constellation walks aimed at both first-
                    timers and serious amateur astronomers.
                  </p>

                  <div className="bg-stone-900 text-white rounded-xl p-6 my-8">
                    <h4
                      className="font-bold text-white mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🔴</span> Red-Light Etiquette — Non-Negotiable
                    </h4>
                    <div
                      className="space-y-2 text-sm text-stone-300"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <p className="m-0">
                        Human eyes take 20–30 minutes to fully adapt to
                        darkness — and a single burst of white light resets
                        that adaptation instantly, for you and everyone
                        around you.
                      </p>
                      <ul className="space-y-1.5 m-0 pl-5 list-disc">
                        <li>
                          Use a red-filtered torch (or red cellophane over a
                          regular one) for any nighttime movement
                        </li>
                        <li>
                          Never use your phone flashlight or camera flash
                          near a telescope setup
                        </li>
                        <li>
                          Switch your phone to night mode / lowest
                          brightness before stepping outside
                        </li>
                        <li>
                          Vehicles should use parking lights, not headlights,
                          once inside the village after dark
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Practically: dress for far colder than you expect. Even
                    in July, standing still at 4,500 metres for an hour
                    after dark drops the felt temperature dramatically —
                    down jacket, thermal layers, gloves, and a warm hat are
                    essential kit for a stargazing session, not optional
                    extras. Bring a flask of hot water or tea, and if you
                    own binoculars or a camera capable of long exposures,
                    pack them; Hanle rewards anyone who comes prepared to
                    linger outside.
                  </p>
                </section>

                {/* ── Observatory ───────────────────────────────────────── */}
                <section id="observatory">
                  <h2>Indian Astronomical Observatory</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="High-altitude ridge landscape near the Indian Astronomical Observatory, Hanle"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    On the ridge of Mt Saraswati (locally Digpa-ratsa Ri),
                    roughly 4,500 metres up and a short drive above the
                    village, sits the{" "}
                    <strong>Indian Astronomical Observatory (IAO)</strong>,
                    operated by the Indian Institute of Astrophysics (IIA)
                    since 2001. It is one of the highest sites in the world
                    hosting optical, infrared, and gamma-ray telescopes —
                    a distinction that put Hanle on the map for astronomers
                    decades before "dark sky tourism" became a phrase
                    anyone used.
                  </p>
                  <p>
                    The observatory's flagship instrument is the{" "}
                    <strong>2-metre Himalayan Chandra Telescope (HCT)</strong>,
                    remotely operated via satellite link from IIA's control
                    room in Hosakote, near Bengaluru — a setup that lets
                    scientists observe from sea level while the telescope
                    itself sits in the thin, dry air where it performs best.
                    The site also hosts the{" "}
                    <strong>
                      Major Atmospheric Cherenkov Experiment (MACE)
                    </strong>
                    , a large gamma-ray telescope studying high-energy
                    astrophysical events, along with other instruments run
                    in collaboration with international partners.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Not a walk-in attraction:</strong> The IAO is
                    an active research facility, not a visitor centre.
                    General public access to the telescope domes themselves
                    is limited and typically requires prior coordination
                    through IIA or your tour operator — most travellers
                    experience Hanle's astronomy through village-based
                    stargazing sessions rather than a site visit to the
                    observatory itself. Treat any observatory visit as a
                    bonus to arrange in advance, not a guaranteed stop.
                  </div>
                  <p>
                    Even without stepping inside a dome, the drive up toward
                    the ridge is worth it for the views alone — the
                    telescope structures catching the last light against an
                    empty, ochre-and-grey plateau is one of the more
                    surreal sights in Ladakh, science and wilderness sharing
                    the same frame.
                  </p>
                </section>

                {/* ── Monastery ─────────────────────────────────────────── */}
                <section id="monastery">
                  <h2>Hanle Monastery</h2>
                  <p>
                    Above the village, on a rocky outcrop that has clearly
                    been chosen for its view as much as its defensibility,
                    stands <strong>Hanle Monastery (Hanle Gompa)</strong>,
                    built in the late 17th century and belonging to the
                    Drukpa Kagyu lineage — the same order responsible for
                    Hemis, Ladakh's largest monastery. A handful of monks
                    still maintain it, and the walk up is short but steep
                    enough to remind you how thin the air really is at this
                    altitude.
                  </p>
                  <p>
                    The interior holds older Buddhist statuary and murals,
                    faded but intact, and the courtyard offers a sweeping
                    view across the Hanle valley — stone houses, grazing
                    animals, the thin ribbon of the Hanle river, and the
                    observatory domes catching light on the ridge beyond.
                    It's a quiet, unhurried stop, usually visited in the
                    late afternoon before the evening's stargazing begins.
                  </p>
                </section>

                {/* ── Combo Trip ────────────────────────────────────────── */}
                <section id="combo-trip">
                  <h2>Pangong & Tso Moriri Combo</h2>
                  <p>
                    Very few travellers make the long drive to Hanle on its
                    own — most fold it into a loop through eastern Ladakh's
                    other great high-altitude landscapes.{" "}
                    <strong>Tso Moriri</strong>, roughly a half-day's drive
                    away via Chumathang and the Rupshu plateau, is a
                    Ramsar-protected lake at 4,522 metres known for its
                    stillness and its birdlife, including bar-headed geese
                    and the rare black-necked crane. <strong>Pangong Tso</strong>,
                    reachable via the rougher Chushul route described
                    above, adds Ladakh's most photographed lake to the same
                    circuit.
                  </p>
                  <p>
                    A well-paced version of this loop runs: Leh → Pangong Tso
                    (overnight) → Chushul → Hanle (overnight, stargazing) →
                    Tso Moriri via Puga/Chumathang (overnight) → Leh. Done
                    this way, Hanle sits at the quiet, dark heart of a trip
                    that also delivers Ladakh's two most famous lakes —
                    without the crowds that gather at either one closer to
                    Leh.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro tip:</strong> Build in a buffer day
                    somewhere on this loop. Changthang's roads, weather, and
                    checkpoint procedures are all more variable than the
                    well-travelled Leh–Nubra–Pangong circuit, and a single
                    delayed permit or closed stretch of road can knock a
                    tight itinerary sideways.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Hanle</h2>
                  <p>
                    There are no hotels in Hanle — accommodation is almost
                    entirely home­stays run by Changpa and Ladakhi families,
                    many of which have adapted specifically for
                    stargazers over the last few years, adding heated
                    rooms, telescopes, and dedicated night-viewing decks.
                    Book ahead; capacity is genuinely limited.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Standard Homestays",
                        icon: "🏠",
                        range: "₹1,200–₹2,500/night (with meals)",
                        picks: [
                          "Family-run village homestays",
                          "Simple rooms, shared bathrooms common",
                          "Home-cooked meals included",
                          "Basic telescope access on request",
                        ],
                      },
                      {
                        tier: "Astro-Stay Homestays",
                        icon: "🔭",
                        range: "₹2,500–₹5,000/night (with meals)",
                        picks: [
                          "Dedicated stargazing decks or terraces",
                          "Guided telescope sessions included",
                          "Better insulation, attached bathrooms",
                          "Some offer astrophotography guidance",
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
                  <p>
                    Expect basic but warm rooms, thick quilts, and limited
                    or no electricity after certain hours (partly a
                    practical constraint, partly deliberate — it keeps the
                    village dark). Hot water is usually bucket-based.
                    Charge devices and torches fully before your stargazing
                    session; power isn't guaranteed to last the night.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Hanle</h2>
                  <p>
                    There are no restaurants in Hanle — food comes from your
                    homestay kitchen, cooked with what's locally available
                    and whatever staples the family has stocked up from Leh.
                    It's simple, warming food, built for altitude and cold
                    rather than variety.
                  </p>
                  <ul>
                    <li>
                      <strong>Thukpa & Skyu:</strong> Hearty noodle and
                      dough-based soups, the backbone of most homestay
                      dinners across the Changthang plateau.
                    </li>
                    <li>
                      <strong>Butter tea (Gur Gur Chai):</strong> Salted
                      yak-butter tea, churned fresh — a Changpa staple and
                      genuinely useful for warmth at this altitude.
                    </li>
                    <li>
                      <strong>Yak cheese (Churpi):</strong> Hard, dried
                      cheese made by local nomadic herders — an acquired
                      taste, but a real taste of Changthang's pastoral
                      economy.
                    </li>
                    <li>
                      <strong>Rice, dal, and vegetables:</strong> Most
                      homestays serve a simple rice-dal-sabzi meal for
                      dinner, supplemented with whatever vegetables made it
                      up from Leh that week.
                    </li>
                    <li>
                      <strong>Carry your own snacks:</strong> Bring energy
                      bars, dry fruit, and instant coffee/tea sachets — the
                      nearest shop of any real size is hours away, and
                      you'll want extra calories for the cold nights out
                      under the telescope.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Hanle</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
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
                            "Homestay/night (with meals)",
                            "₹1,200",
                            "₹2,800",
                            "₹5,000",
                          ],
                          [
                            "Guided stargazing session",
                            "Included",
                            "₹500–₹1,000",
                            "₹1,500+",
                          ],
                          ["Permits (ILP, per person)", "₹100", "₹100", "₹100"],
                          [
                            "Vehicle hire (Leh–Hanle return)",
                            "₹6,000",
                            "₹9,000",
                            "₹14,000",
                          ],
                          [
                            "Daily total (excl. vehicle)",
                            "₹1,300",
                            "₹3,400",
                            "₹6,600",
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
                    * Vehicle hire is typically shared across 3–4 travellers
                    and is usually the largest single cost — pooling a
                    group makes Hanle noticeably more affordable.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Hanle</h2>
                  <ul>
                    <li>
                      <strong>Acclimatise before you arrive:</strong> Hanle
                      sits higher than Leh itself. Spend at least 2 days
                      acclimatising in Leh before attempting the drive out —
                      there is no medical facility of any size in Hanle.
                    </li>
                    <li>
                      <strong>Nights are brutally cold, even in summer:</strong>{" "}
                      Pack a proper down jacket, thermal base layers, gloves,
                      and a warm hat regardless of the month. Temperatures
                      can drop below freezing after dark even in July.
                    </li>
                    <li>
                      <strong>Check the moon phase before booking:</strong>{" "}
                      A full moon washes out the fainter stars and the
                      Milky Way almost entirely. Time your trip around the
                      new moon for the darkest, most dramatic skies.
                    </li>
                    <li>
                      <strong>No fuel, no ATM, minimal connectivity:</strong>{" "}
                      Fill your tank in Leh or Upshi, carry sufficient cash
                      for the whole trip, and expect little to no mobile
                      signal once you're past Nyoma.
                    </li>
                    <li>
                      <strong>Respect the dark-sky rules:</strong> Use a
                      red-light torch after dark, avoid camera flashes and
                      phone screens near telescope setups, and keep vehicle
                      headlights off inside the village at night.
                    </li>
                    <li>
                      <strong>Book homestays in advance:</strong> Rooms are
                      genuinely limited, especially around new-moon
                      weekends in peak season. Confirm with your host a few
                      days ahead rather than arriving on spec.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-6">
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
                          "Time your visit around the new moon",
                          "Acclimatise in Leh for 2 full days first",
                          "Carry a red-filtered torch for nighttime use",
                          "Book your homestay's stargazing session in advance",
                          "Fill your fuel tank fully before leaving Leh/Upshi",
                          "Carry enough cash for the entire trip",
                          "Pack down jackets and thermal layers, even in July",
                          "Build a buffer day into any Pangong–Hanle–Tso Moriri loop",
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
                          "Use phone flashlights or camera flash near telescopes",
                          "Drive to Hanle straight from sea level without acclimatising",
                          "Expect fuel, ATMs, or reliable signal beyond Nyoma",
                          "Assume the IAO observatory itself is open for walk-in visits",
                          "Arrive without confirming your ILP covers the full route",
                          "Underestimate nighttime cold — even in peak summer",
                          "Skip booking your homestay ahead of a new-moon weekend",
                          "Rush the Pangong–Chushul route without checking current road status",
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
                  "Hanle",
                  "Ladakh",
                  "Dark Sky Reserve",
                  "Stargazing",
                  "Changthang",
                  "Astro-Tourism",
                  "Off-beat",
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

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Hanle"
              />

              <RelatedPostsGrid currentSlug="hanle-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="hanle-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
