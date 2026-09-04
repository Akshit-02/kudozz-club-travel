// src/app/blog/chandipur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chandipur Beach Guide: The Vanishing Sea",
  description:
    "Complete Chandipur guide — the vanishing-sea tide that pulls the water back up to 5 km, tide timings, how to reach from Balasore, where to stay, and a full visit plan.",
  keywords:
    "Chandipur travel guide, Chandipur beach, vanishing sea beach Odisha, hide and seek beach, Balasore beach, Chandipur tide timings, how to reach Chandipur, Odisha beaches",
  openGraph: {
    title: "Chandipur Beach Guide: The Vanishing Sea",
    description:
      "A beach where the sea recedes up to 5 km at low tide — one of India's strangest and most quietly beautiful coastlines.",
    url: "https://club.kudozz.in/blog/chandipur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/gokarna/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet coastal beach with open sand, evoking Chandipur's vanishing-sea tidal beach in Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandipur Beach Guide: The Vanishing Sea",
    description:
      "A beach where the sea disappears up to 5 km at low tide — the complete Chandipur guide.",
    images: ["/images/destinations/gokarna/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chandipur-travel-guide",
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
          headline: "Chandipur Beach Guide: The Vanishing Sea",
          description:
            "Complete Chandipur guide — the vanishing-sea tide that pulls the water back up to 5 km, tide timings, how to reach from Balasore, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/gokarna/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/chandipur-travel-guide",
          },
          keywords:
            "Chandipur, vanishing sea, Odisha beaches, Balasore, hide and seek beach",
          about: {
            "@type": "Place",
            name: "Chandipur",
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
                name: "Chandipur",
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
    q: "What causes the sea to vanish at Chandipur?",
    a: "It's an unusually pronounced tidal range — at low tide, the sea recedes dramatically further than at most beaches, exposing a wide stretch of sand that had been underwater, before the tide returns and covers it again a few hours later.",
  },
  {
    q: "How far does the water recede?",
    a: "By some accounts, the sea pulls back as much as 5 km from the high-tide shoreline — a genuinely striking distance that gives Chandipur its nickname, the 'vanishing sea' or 'hide and seek beach.'",
  },
  {
    q: "How far is Chandipur from Balasore?",
    a: "Roughly 16 km, an easy 20-30 minute drive — Balasore is the practical gateway town for a Chandipur visit.",
  },
  {
    q: "Is Chandipur quieter than Puri?",
    a: "Yes, considerably — Chandipur has a much smaller hospitality scene and far fewer crowds than Puri, making it a good choice for travelers who want a peaceful beach rather than a busy pilgrimage-and-beach combination.",
  },
  {
    q: "What is the best time to see the tidal effect?",
    a: "Check local tide timings before you go — the vanishing-sea effect is tied directly to the tide cycle, so arriving at the wrong time of day means missing the phenomenon entirely, regardless of season.",
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
  { id: "introduction", title: "A Beach Where the Sea Disappears", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chandipur", level: 2 },
  { id: "things-to-do", title: "The Vanishing Sea & More", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChandipurGuidePage() {
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
              src="/images/destinations/gokarna/hero.jpg"
              alt="Quiet coastal beach with open sand, evoking Chandipur's vanishing-sea tidal beach in Odisha"
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
                { label: "Chandipur", href: null },
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
              {["Chandipur", "Vanishing Sea", "Balasore", "Odisha Beaches"].map(
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
              Chandipur: The Beach Where the Sea Vanishes
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet stretch of Odisha coastline where the tide pulls the
              sea back as much as 5 kilometres, and brings it home again a
              few hours later.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Balasore district, Odisha",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>A Beach Where the Sea Disappears</h2>
                  <p>
                    <strong>Chandipur</strong>, roughly 16 km from
                    Balasore, has a party trick almost no other Indian
                    beach can match: at low tide, the sea recedes as much
                    as <strong>5 kilometres</strong> from the shoreline,
                    exposing a vast stretch of sand where the water had
                    been just hours earlier — then returns and covers it
                    all again as the tide comes back in.
                  </p>
                  <p>
                    Locals call it the <strong>"vanishing sea"</strong>{" "}
                    or the <strong>"hide and seek beach,"</strong> and it's
                    the single reason most visitors make the trip. Beyond
                    the tidal spectacle, Chandipur is a genuinely quiet,
                    lightly developed beach — a sharp contrast to Puri's
                    busier pilgrimage-and-beach combination further down
                    the coast.
                  </p>
                  <p>
                    The beach also sits near the{" "}
                    <strong>Chandipur missile testing range</strong>, a
                    defense facility that occasionally shapes local access
                    around test dates — worth being aware of, though it
                    rarely affects a typical visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌊</span> Chandipur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Balasore" },
                        {
                          icon: "🚉",
                          label: "Nearest Town",
                          value: "Balasore (~16 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Vanishing Sea Tide",
                        },
                        {
                          icon: "🏖️",
                          label: "Vibe",
                          value: "Quiet, uncommercialized",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹4,500",
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
                  <h2>Best Time to Visit Chandipur</h2>
                  <p>
                    Season shapes the weather; the tide table shapes
                    whether you actually see the sea vanish. Both matter.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, comfortable beach weather — the most pleasant window for a relaxed stay.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm but manageable",
                        text: "Coastal breezes keep it more bearable than inland Odisha, though midday heat is significant.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain and rougher seas make this the least comfortable window for a beach visit.",
                      },
                      {
                        season: "Any season",
                        emoji: "🕐",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Check the tide table",
                        text: "The vanishing-sea effect follows the tide cycle, not the calendar — confirm local low-tide timings before you go.",
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
                    <strong>Our pick:</strong> October to February for
                    weather — but check the tide table for whichever day
                    you visit, since that's what determines whether you
                    actually see the sea recede.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chandipur</h2>
                  <ul>
                    <li>
                      <strong>Via Balasore:</strong> Balasore, roughly 16
                      km away, is the practical gateway — it has a
                      railway station with connections to Bhubaneswar and
                      Kolkata, and taxis cover the short final stretch.
                    </li>
                    <li>
                      <strong>By road from Bhubaneswar:</strong> Roughly
                      230 km, a 4-5 hour drive.
                    </li>
                    <li>
                      <strong>By road from Kolkata:</strong> Roughly 220
                      km, a comparable drive time, making Chandipur a
                      realistic option for travelers coming from West
                      Bengal too.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check the local tide
                    timetable before finalizing your travel plans —
                    arriving at high tide means you'll miss the very
                    thing that makes Chandipur worth the detour.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Vanishing Sea & More</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/gokarna/hero.jpg"
                      alt="Open coastal sand and calm water near Chandipur, Odisha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Watching the Sea Recede</h3>
                  <p>
                    The main event: at low tide, the water pulls back
                    dramatically, exposing a wide expanse of firm, flat
                    sand where the sea had been. Walking out onto this
                    exposed seabed — and watching the water return a few
                    hours later — is a genuinely unusual experience that
                    most Indian beaches simply can't offer.
                  </p>
                  <h3>A Quiet, Uncommercialized Stretch</h3>
                  <p>
                    Chandipur's beach is far less developed than Puri's —
                    fewer crowds, fewer vendors, and a slower pace that
                    suits travelers who want a peaceful coastal stop
                    rather than a bustling pilgrimage-town beach.
                  </p>
                  <h3>The Missile Testing Range</h3>
                  <p>
                    A defense facility sits near Chandipur, and access to
                    certain stretches may occasionally be restricted
                    around test dates — worth being aware of, though it
                    rarely affects a typical visit to the main beach area.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Chandipur</h2>
                  <p>
                    Accommodation is modest and beach-adjacent, a much
                    smaller hospitality scene than Puri's.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "OTDC Panthanivas Chandipur",
                          "Basic beachside guesthouses",
                          "Simple lodges near the shore",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Beach-facing cottages",
                          "Private resorts near the coast",
                          "Comfortable family-run stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Premium beach resorts",
                          "Boutique coastal properties",
                          "Full-board weekend packages",
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
                        title: "Arrival & Low Tide",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive via Balasore, check in",
                          "Time your walk onto the exposed seabed for low tide",
                          "Evening on the beach as the tide returns",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Relax & Depart",
                        color: "bg-sky-600",
                        activities: [
                          "A slow morning on a quiet stretch of beach",
                          "Fresh seafood before departure",
                          "Return to Balasore for onward travel",
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
                  <h2>Where to Eat at Chandipur</h2>
                  <ul>
                    <li>
                      <strong>Fresh seafood:</strong> Being a fishing
                      coastline, Chandipur's small eateries serve
                      genuinely fresh fish and prawns, often the day's
                      catch.
                    </li>
                    <li>
                      <strong>Resort/guesthouse kitchens:</strong> Most
                      accommodation serves home-style Odia meals, often
                      the most convenient option given the limited
                      standalone restaurant scene.
                    </li>
                    <li>
                      <strong>Balasore town:</strong> For a wider choice
                      of restaurants, Balasore offers more options than
                      the beach area itself.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹5,500"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          [
                            "Local transport/day",
                            "₹300",
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
                    * Figures are per person, per day, excluding travel to
                    Chandipur.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chandipur</h2>
                  <ul>
                    <li>
                      <strong>Check tide timings first:</strong> This is
                      the single most important planning detail — arrive
                      at the wrong time and you'll just see a normal
                      beach.
                    </li>
                    <li>
                      <strong>Don't wander too far at low tide:</strong>{" "}
                      The sea returns steadily, not suddenly, but it's
                      still worth keeping track of time and distance when
                      walking out onto the exposed sand.
                    </li>
                    <li>
                      <strong>Come for quiet, not nightlife:</strong>{" "}
                      Chandipur is a peaceful beach, not a party town —
                      set expectations accordingly.
                    </li>
                    <li>
                      <strong>Respect restricted areas:</strong> Follow
                      any posted signage near the missile testing range.
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
                          "Check the local tide table before you go",
                          "Time your visit around low tide for the full effect",
                          "Try fresh local seafood",
                          "Enjoy the quiet compared to Puri",
                          "Keep an eye on the tide while walking on the seabed",
                          "Base yourself in Balasore for more dining options",
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
                          "Arrive without checking tide timings",
                          "Expect Puri-level nightlife or crowds",
                          "Ignore posted restrictions near the testing range",
                          "Wander far onto the exposed seabed without watching the time",
                          "Expect a wide restaurant scene right at the beach",
                          "Visit during peak monsoon (Jun-Sep)",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
                    </Link>{" "}
                    for the wider Puri-Konark-Bhubaneswar circuit.
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
                  "Chandipur",
                  "Vanishing Sea",
                  "Odisha",
                  "Balasore",
                  "Beaches",
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

              <RelatedPostsGrid currentSlug="chandipur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chandipur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
