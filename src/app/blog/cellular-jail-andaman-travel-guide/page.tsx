// src/app/blog/cellular-jail-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Cellular Jail Travel Guide: History, Timings & Light Show",
  description:
    "Complete Cellular Jail guide — the British-era prison in Sri Vijaya Puram (Port Blair) that held India's freedom fighters. History, museum galleries, the evening Light and Sound Show, timings and tips.",
  keywords:
    "Cellular Jail Port Blair, Cellular Jail history, Kaala Pani, Cellular Jail Light and Sound Show, Cellular Jail timings, Cellular Jail entry fee, Veer Savarkar Cellular Jail, Andaman freedom fighters jail, Cellular Jail museum, Port Blair Cellular Jail visit guide",
  openGraph: {
    title: "Cellular Jail Travel Guide: History, Timings & Light Show",
    description:
      "A pentagonal British-era prison that became the most feared symbol of colonial punishment — and today, a moving National Memorial to India's freedom struggle.",
    url: "https://club.kudozz.in/blog/cellular-jail-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Andaman coastline near Sri Vijaya Puram (Port Blair), home to the Cellular Jail National Memorial",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cellular Jail Travel Guide: History, Timings & Light Show",
    description:
      "The prison that became known as Kaala Pani — history, museum galleries, and the evening Light and Sound Show.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/cellular-jail-andaman-travel-guide",
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
          headline: "Cellular Jail Travel Guide: History, Timings & Light Show",
          description:
            "Complete Cellular Jail guide — the British-era prison in Sri Vijaya Puram (Port Blair) that held India's freedom fighters. History, museum galleries, the evening Light and Sound Show, timings and tips.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-09-01",
          dateModified: "2026-09-01",
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
            "@id": "https://club.kudozz.in/blog/cellular-jail-andaman-travel-guide",
          },
          keywords:
            "Cellular Jail, Kaala Pani, Veer Savarkar, Light and Sound Show, Port Blair, National Memorial",
          about: {
            "@type": "Place",
            name: "Cellular Jail",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sri Vijaya Puram",
              addressRegion: "Andaman and Nicobar Islands",
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
                name: "Andaman Islands",
                item: "https://club.kudozz.in/blog/andaman-islands-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Cellular Jail",
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
    q: "Why is Cellular Jail called Kaala Pani?",
    a: "\"Kaala Pani\" (Black Water) was the nickname prisoners and the wider Indian public gave to Cellular Jail and, more broadly, to transportation to the Andaman Islands. The isolation of the islands, the harsh solitary-confinement design of the jail, and the sense of being cut off from the mainland made it feel like a fate worse than death for many freedom fighters sent there.",
  },
  {
    q: "Who was imprisoned at Cellular Jail?",
    a: "Cellular Jail held numerous Indian freedom fighters and political prisoners through the early 20th century, most famously Vinayak Damodar Savarkar (Veer Savarkar), who spent years there in solitary confinement. The airport in Port Blair is named after him.",
  },
  {
    q: "What are the timings for the Light and Sound Show?",
    a: "The show typically runs in two slots each evening — commonly an earlier Hindi show and a later English show (or vice versa, depending on the season) — held on the jail grounds after the museum closes for the day. Exact timings shift seasonally, so confirm locally or with your hotel on the day of your visit.",
  },
  {
    q: "How much time should I set aside for Cellular Jail?",
    a: "Budget 1.5-2 hours for the museum galleries and cell blocks in the afternoon, plus roughly 45 minutes to an hour for the evening Light and Sound Show — the two are best done as a single extended visit rather than separate trips.",
  },
  {
    q: "Is Cellular Jail suitable for children?",
    a: "Yes, though some of the historical content — descriptions of torture and harsh punishment — is sobering rather than light entertainment. It's a genuinely educational stop for older children and a moving one for adults with an interest in India's independence history.",
  },
  {
    q: "Is Cellular Jail wheelchair accessible?",
    a: "The main courtyard and ground-floor galleries are reasonably walkable, but the jail's original stone stairways and upper-level cell blocks have limited accessibility — check with staff on arrival if mobility is a concern.",
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
  { id: "introduction", title: "A Monument to Kaala Pani", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "history", title: "History of Cellular Jail", level: 2 },
  { id: "museum", title: "The Museum & Cell Blocks", level: 2 },
  { id: "light-show", title: "The Light and Sound Show", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CellularJailGuidePage() {
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
              src="/images/destinations/andaman/hero.jpg"
              alt="Andaman coastline near Sri Vijaya Puram (Port Blair), home to the Cellular Jail National Memorial"
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
                { label: "Andaman Islands", href: "/blog/andaman-islands-travel-guide" },
                { label: "Cellular Jail", href: null },
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
                "Cellular Jail",
                "Kaala Pani",
                "Sri Vijaya Puram",
                "Freedom Struggle",
                "National Memorial",
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
              Cellular Jail: History, Light Show & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A pentagonal British-era prison that became the most feared
              symbol of colonial punishment in India — today, a National
              Memorial and the most moving historical experience in the
              Andamans.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sri Vijaya Puram (Port Blair)",
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
                  <h2>A Monument to Kaala Pani</h2>
                  <p>
                    <strong>Cellular Jail</strong> sits in the heart of{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Sri Vijaya Puram (Port Blair)
                    </Link>
                    , the capital of the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman & Nicobar Islands
                    </Link>
                    , and it's arguably the single most important historical
                    site in the entire archipelago. Built by the British
                    between 1896 and 1906, it was designed with a chilling
                    purpose: a pentagonal, spoke-and-hub layout of seven
                    wings radiating from a central watchtower, each cell
                    built for total isolation rather than shared
                    imprisonment.
                  </p>
                  <p>
                    That isolation — combined with the sheer remoteness of
                    the islands themselves — is why transportation here
                    earned the name <strong>"Kaala Pani"</strong> (Black
                    Water), a fate Indians of the era regarded as close to a
                    living death. Freedom fighters and political prisoners,
                    most famously Vinayak Damodar Savarkar (Veer Savarkar),
                    were held here through the early 20th century, often in
                    solitary confinement designed to break their spirit as
                    much as restrict their movement.
                  </p>
                  <p>
                    Today, three of the original seven wings have been
                    demolished, but the remaining four stand preserved as a
                    National Memorial — part solemn museum, part evening
                    spectacle, and one of the few places in India where the
                    cost of independence feels genuinely, physically close.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛓️</span> Cellular Jail at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sri Vijaya Puram (Port Blair)",
                        },
                        {
                          icon: "🏗️",
                          label: "Built",
                          value: "1896 – 1906",
                        },
                        {
                          icon: "🏛️",
                          label: "Layout",
                          value: "Pentagonal, 4 wings remain",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Nominal fee",
                        },
                        {
                          icon: "🌃",
                          label: "Don't Miss",
                          value: "Light & Sound Show",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "2 – 3 hrs total",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Cellular Jail is a year-round indoor-outdoor visit, but
                    timing your day around the evening show matters more
                    than the season.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Late Afternoon",
                        emoji: "🌇",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for the museum",
                        text: "Arrive a couple of hours before closing to see the cell blocks and galleries in cooler, softer light before the evening show begins.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Most comfortable season",
                        text: "Cool, dry weather makes walking the open courtyard and queuing for the show far more comfortable than in the humid summer months.",
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
                    <strong>Our pick:</strong> Arrive by mid-afternoon,
                    tour the museum unhurried, then stay on for the evening
                    Light and Sound Show — the two together make for a full,
                    unforgettable visit.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Cellular Jail</h2>
                  <p>
                    Cellular Jail sits centrally within{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Sri Vijaya Puram (Port Blair)
                    </Link>
                    , making it one of the easiest sights in the islands to
                    reach.
                  </p>
                  <ul>
                    <li>
                      <strong>By Taxi/Auto:</strong> A short, inexpensive
                      ride from anywhere in the city centre or from Phoenix
                      Bay Jetty.
                    </li>
                    <li>
                      <strong>On foot:</strong> Walkable from several
                      central hotels and Aberdeen Bazaar if you're staying
                      nearby.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ask your cab or auto to wait
                    if you plan to stay for the evening show — the jail
                    grounds are less crowded with dedicated pickups after
                    dark.
                  </div>
                </section>

                {/* ── History ────────────────────────────────────────────── */}
                <section id="history">
                  <h2>History of Cellular Jail</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Andaman coastline near Sri Vijaya Puram, close to where Cellular Jail stands"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Construction began in 1896 and finished a decade later
                    in 1906, built by the British colonial administration
                    specifically to house political prisoners rather than
                    ordinary criminals. Its pentagonal design — seven wings
                    radiating out from a central watchtower like spokes —
                    meant every cell faced outward, away from other cells,
                    so prisoners could never see or communicate with one
                    another. Each cell measured roughly the same small
                    footprint, built for one occupant in total solitary
                    confinement.
                  </p>
                  <p>
                    Prisoners were subjected to hard labour, extracting oil
                    from coconuts and grinding grain by hand, alongside
                    routine physical punishment for even minor infractions.
                    The extreme isolation of the islands themselves — weeks
                    from the mainland by ship in that era — compounded the
                    psychological toll, giving rise to the enduring name
                    "Kaala Pani."
                  </p>
                  <p>
                    Vinayak Damodar Savarkar, later honoured with the
                    Veer ("brave") title, is the most widely known prisoner
                    held here, alongside numerous other revolutionaries
                    associated with India's independence movement. Three of
                    the jail's original seven wings were demolished after
                    independence; the remaining four are preserved today as
                    the National Memorial.
                  </p>
                </section>

                {/* ── Museum ─────────────────────────────────────────────── */}
                <section id="museum">
                  <h2>The Museum & Cell Blocks</h2>
                  <p>
                    Inside, visitors can walk through preserved cell blocks,
                    see the original gallows where prisoners were executed,
                    and move through museum galleries documenting the
                    freedom struggle with photographs, artefacts, and
                    written accounts from former prisoners.
                  </p>
                  <ul>
                    <li>
                      <strong>Cell blocks:</strong> Walk the narrow
                      corridors and step into individual cells to
                      understand the scale of the isolation prisoners
                      endured.
                    </li>
                    <li>
                      <strong>The gallows:</strong> A sobering, preserved
                      execution site within the jail complex.
                    </li>
                    <li>
                      <strong>Photo and artefact galleries:</strong> Covering
                      the broader Indian independence movement, not just
                      the jail's own history.
                    </li>
                    <li>
                      <strong>Central watchtower:</strong> The hub from
                      which guards could observe all seven original wings
                      simultaneously.
                    </li>
                  </ul>
                </section>

                {/* ── Light Show ─────────────────────────────────────────── */}
                <section id="light-show">
                  <h2>The Light and Sound Show</h2>
                  <p>
                    Held on the jail grounds after the museum closes, the
                    evening <strong>Light and Sound Show</strong> uses
                    dramatic lighting, narration, and sound design to walk
                    the audience through the jail's history and India's
                    freedom struggle — widely considered one of the best
                    such shows in the country, and an experience that lands
                    even harder once you've already walked the cell blocks
                    in daylight.
                  </p>
                  <p>
                    Shows typically run in two language slots each evening
                    — commonly Hindi and English — with exact timings
                    shifting slightly by season. Seating is on the jail
                    grounds itself, so arrive a little early to get a
                    comfortable spot.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Don't skip the show even if
                    you're tired after a long day — it's consistently
                    described as the emotional highlight of a Cellular Jail
                    visit, more so than the daytime museum tour alone.
                  </div>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half-Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Late Afternoon",
                        title: "Museum & Cell Blocks",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive 2-3 hours before closing",
                          "Walk the preserved cell blocks and gallows",
                          "Tour the freedom-struggle photo galleries",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Light and Sound Show",
                        color: "bg-sky-600",
                        activities: [
                          "Grab an early dinner nearby or snacks on hand",
                          "Take a seat on the jail grounds before showtime",
                          "Stay for the full narration and lighting sequence",
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
                          ["Museum entry", "₹30–50", "₹30–50", "₹30–50"],
                          [
                            "Light & Sound Show ticket",
                            "₹50–100",
                            "₹50–100",
                            "₹50–100",
                          ],
                          [
                            "Transport (round trip)",
                            "₹150",
                            "₹400",
                            "₹800",
                          ],
                          ["Total (approx.)", "₹230", "₹500", "₹950"],
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
                    * Figures are per person. See our{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Sri Vijaya Puram (Port Blair) guide
                    </Link>{" "}
                    for a fuller city budget.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Check show timings on arrival:</strong>{" "}
                      Language slots and exact start times shift seasonally
                      — confirm at the ticket counter when you arrive for
                      the museum.
                    </li>
                    <li>
                      <strong>Dress respectfully:</strong> This is a solemn
                      memorial site, not a casual attraction — modest,
                      comfortable clothing is appropriate.
                    </li>
                    <li>
                      <strong>Carry water:</strong> The daytime courtyard
                      walk has limited shade, especially in warmer months.
                    </li>
                    <li>
                      <strong>Combine with a city day:</strong> Pair it
                      with Corbyn's Cove or the Chatham Saw Mill earlier in
                      the day — see our{" "}
                      <Link href="/blog/port-blair-andaman-travel-guide">
                        Sri Vijaya Puram (Port Blair) guide
                      </Link>{" "}
                      for the full day plan.
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
                          "Stay for the evening Light and Sound Show",
                          "Arrive with time to walk the galleries unhurried",
                          "Confirm show timings at the ticket counter",
                          "Carry water for the open courtyard walk",
                          "Combine with other Port Blair sights same day",
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
                          "Rush through in under an hour",
                          "Skip the Light and Sound Show to save time",
                          "Treat the site casually — it's a memorial",
                          "Assume showtimes are fixed year-round",
                          "Visit at midday without water in summer",
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
                    <strong>🗺️ Extend the trip:</strong> Follow up Cellular
                    Jail with the colonial ruins of{" "}
                    <Link href="/blog/ross-island-andaman-travel-guide">
                      Ross Island
                    </Link>{" "}
                    the next morning — together they give a fuller picture
                    of the islands' British-era history before you head to
                    the beaches.
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
                  "Cellular Jail",
                  "Kaala Pani",
                  "Sri Vijaya Puram",
                  "Port Blair",
                  "Veer Savarkar",
                  "Freedom Struggle",
                  "National Memorial",
                  "Light and Sound Show",
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

              <RelatedPostsGrid currentSlug="cellular-jail-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="cellular-jail-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
