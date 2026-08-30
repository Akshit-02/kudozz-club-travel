// src/app/blog/gurez-valley-travel-guide/page.tsx
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
  title: "Gurez Valley Travel Guide: Kashmir's Hidden Border Valley",
  description:
    "Discover Gurez Valley, Kashmir's remote border valley near the LOC — Habba Khatoon Peak, Dawar village, permits, best time to visit, and full travel tips.",
  keywords:
    "Gurez Valley travel guide, Gurez Valley permit, Habba Khatoon Peak, Dawar Gurez, how to reach Gurez Valley, offbeat Kashmir destinations, Tulail Valley, Kishanganga river Kashmir, Gurez Valley Bandipora, Dard Shin community Kashmir",
  openGraph: {
    title: "Gurez Valley Travel Guide: Kashmir's Hidden Border Valley",
    description:
      "A remote, Dard-Shin valley along the Kishanganga river near the Line of Control — opened to tourists only in recent years. Habba Khatoon Peak, permits, Dawar, and Tulail Valley.",
    url: "https://club.kudozz.in/blog/gurez-valley-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Habba Khatoon Peak rising above Dawar village in Gurez Valley, Kashmir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurez Valley Travel Guide: Kashmir's Hidden Border Valley",
    description:
      "A remote, Dard-Shin valley along the Kishanganga river near the Line of Control — opened to tourists only in recent years. Habba Khatoon Peak, permits, and Dawar village.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gurez-valley-travel-guide",
  },
};

// ── JSON-LD: Article ─────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Gurez Valley Travel Guide: Kashmir's Hidden Border Valley",
          description:
            "Discover Gurez Valley, Kashmir's remote border valley near the LOC — Habba Khatoon Peak, Dawar village, permits, best time to visit, and full travel tips.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/gurez-valley-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Gurez Valley",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Jammu and Kashmir",
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
                name: "Jammu & Kashmir",
                item: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Gurez Valley Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── JSON-LD: FAQ ──────────────────────────────────────────────────────────────
function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Gurez Valley safe to visit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Gurez Valley is open to domestic tourists and sees a steady, growing flow of visitors every summer. It sits close to the Line of Control and has a visible Army presence, which in practice makes it one of the more closely monitored — and orderly — regions to travel in. As with any border area, it's worth checking current advisories before you travel and avoiding photography near checkposts and military installations.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need a permit for Gurez Valley?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Indian nationals need to register at an Army/police checkpost along the route from Bandipora and carry a valid government-issued photo ID such as an Aadhaar card or passport — this functions as an entry permit and is usually issued on the spot. Foreign nationals typically require prior permission and should confirm current rules with the district administration before planning a visit, as access for foreigners has historically been more restricted here than in the rest of Kashmir.",
              },
            },
            {
              "@type": "Question",
              name: "How far is Gurez Valley from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Gurez Valley is roughly 123 km from Srinagar, travelling via Bandipora and over the Razdan Pass. The drive takes about 5-6 hours depending on road and weather conditions, and is best started early in the morning to cross the pass before afternoon cloud cover sets in.",
              },
            },
            {
              "@type": "Question",
              name: "Is Gurez Valley open in winter?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. The Razdan Pass, the only road access into the valley, is buried under heavy snow from roughly November to May and is closed for the season. Gurez is effectively cut off from the rest of Kashmir by road during these months, and the visiting window for tourists is limited to June through September.",
              },
            },
            {
              "@type": "Question",
              name: "What is Gurez Valley famous for?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Gurez Valley is best known for the cone-shaped Habba Khatoon Peak, named after the 16th-century Kashmiri poetess-queen; the Kishanganga River, prized for trout fishing and dramatic scenery; its distinct Dard-Shin ethnic community and Shina language, culturally separate from the rest of Kashmir; and its remoteness — the valley was closed to civilian tourism for decades because of its location along the Line of Control.",
              },
            },
            {
              "@type": "Question",
              name: "What language do people speak in Gurez Valley?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most residents of Gurez belong to the Dard-Shin community and speak Shina, a distinct language unrelated to Kashmiri. Many locals also speak Kashmiri, Urdu, and basic Hindi, so communication is rarely a problem for domestic visitors.",
              },
            },
            {
              "@type": "Question",
              name: "How many days are enough for Gurez Valley?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Two to three days is a comfortable window — enough time for the scenic drive in, a day exploring Dawar and the base of Habba Khatoon Peak, a look at the Kishanganga River, and a short excursion toward Tulail Valley if road conditions and permissions allow, before the drive back over Razdan Pass.",
              },
            },
          ],
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Gurez Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gurez Valley", level: 2 },
  { id: "dawar", title: "Dawar — The Valley's Base", level: 2 },
  { id: "habba-khatoon", title: "Habba Khatoon Peak", level: 2 },
  { id: "kishanganga-river", title: "Kishanganga River & Trout Fishing", level: 2 },
  { id: "tulail-valley", title: "Tulail Valley", level: 2 },
  { id: "culture", title: "Dard-Shin Culture & People", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GurezValleyGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Habba Khatoon Peak rising above Dawar village in Gurez Valley, Kashmir"
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
                {
                  label: "Jammu & Kashmir",
                  href: "/blog/jammu-kashmir-travel-guide",
                },
                { label: "Gurez Valley", href: null },
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
                "Gurez Valley",
                "Jammu & Kashmir",
                "Habba Khatoon",
                "Dawar",
                "Offbeat Kashmir",
                "Border Valley",
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
              Gurez Valley: Kashmir's Remote Valley Along the Line of Control
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Dard-Shin valley along the Kishanganga River, cradled beneath
              the cone of Habba Khatoon Peak — closed to civilian tourism for
              decades, and still one of the least-crowded corners of Kashmir.
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
                  text: "Bandipora, Jammu & Kashmir",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
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
                  <h2>Why Visit Gurez Valley?</h2>
                  <p>
                    Tucked into the far north of Bandipora district, <strong>Gurez
                    Valley</strong> is one of the last genuinely offbeat corners
                    left in Jammu & Kashmir — a place most travellers in the
                    region have heard of but very few have actually seen. The
                    valley runs along the <strong>Kishanganga River</strong>,
                    hemmed in by steep mountains on either side, close enough to
                    the Line of Control that its skyline is dotted with Army
                    posts as much as pine forest. For a long stretch of its
                    modern history — through the wars of 1947, 1965, 1971, and
                    the Kargil conflict in 1999 — Gurez was effectively sealed
                    off from civilian travel. It was only opened up to tourists
                    in the years after, and infrastructure here is still
                    catching up to that recent history.
                  </p>
                  <p>
                    That lag is exactly what makes Gurez worth the detour. This
                    is home to the <strong>Dard-Shin</strong> community, an
                    ethnic and linguistic group distinct from the
                    Kashmiri-speaking majority of the Valley, with its own
                    language, dress, and wooden village architecture. The
                    scenery leans wilder and less manicured than the
                    Gulmarg–Pahalgam–Sonamarg circuit most visitors run through
                    on a first trip covered in our{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir travel guide
                    </Link>{" "}
                    — fewer houseboats and gondolas, more open meadow, glacial
                    river, and a single cone-shaped peak that dominates every
                    view from the valley floor.
                  </p>
                  <p>
                    None of this comes without trade-offs. Gurez is remote,
                    mobile connectivity is patchy at best, the road in shuts
                    for roughly seven months of the year, and travel here
                    requires a bit more planning — permits, timing, fuel — than
                    a standard Kashmir trip. For travellers willing to put that
                    planning in, though, it delivers something increasingly
                    rare: a Himalayan valley that still feels genuinely quiet.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Gurez Valley at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Bandipora, J&K",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation (Dawar)",
                          value: "~2,400–2,600 m",
                        },
                        {
                          icon: "🛣️",
                          label: "Razdan Pass",
                          value: "~3,600 m",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Jun – Sep",
                        },
                        {
                          icon: "❄️",
                          label: "Road Closed",
                          value: "~Nov – May",
                        },
                        {
                          icon: "🪪",
                          label: "Entry",
                          value: "ID-based permit (Indians)",
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
                  <h2>Best Time to Visit Gurez Valley</h2>
                  <p>
                    Unlike most of Kashmir, Gurez doesn't really have a "least
                    bad" off-season option — the Razdan Pass, the only road
                    connecting the valley to the rest of the Valley, is buried
                    under snow for a large part of the year, and the window for
                    visiting is genuinely narrow.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Late May – Jun",
                        emoji: "🌱",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Valley greening up",
                        text: "Razdan Pass reopens and the valley turns green as snowmelt feeds the Kishanganga — an early, less-crowded window, though the road can still be rough right after opening.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Peak summer — our pick",
                        text: "Mild days (18–24°C), fully bloomed meadows, and the best odds of clear views of Habba Khatoon Peak. This is when most of Gurez's limited homestay capacity is booked.",
                      },
                      {
                        season: "Sep",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Quiet and golden",
                        text: "Fewer visitors, crisp air, and the valley's grasses turning amber before the first snow — arguably the most photogenic stretch, if you don't mind cooler nights.",
                      },
                      {
                        season: "Oct – May",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Closed to road traffic",
                        text: "Heavy snowfall shuts the Razdan Pass, cutting Gurez off from the rest of Kashmir by road. Not accessible for standard tourism during these months.",
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
                    <strong>Our pick:</strong> Mid-July to early September —
                    the road is reliably open, homestays are running at full
                    capacity, and the meadows below Habba Khatoon Peak are at
                    their greenest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gurez Valley</h2>
                  <p>
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>{" "}
                    is the practical starting point for Gurez — there's no
                    direct flight or rail option, and the entire journey is by
                    road.
                  </p>
                  <ul>
                    <li>
                      <strong>Srinagar to Bandipora:</strong> Roughly 65 km,
                      taking about 2 hours along the northern shore of Wular
                      Lake — a scenic, easy drive on decent roads.
                    </li>
                    <li>
                      <strong>Bandipora to Dawar (via Razdan Pass):</strong>{" "}
                      Around 58 km further, climbing over the{" "}
                      <strong>Razdan Pass</strong> (~3,600 m) before dropping
                      into the Gurez valley floor. This stretch is the slow
                      part — narrow, winding, and weather-dependent, taking
                      3–4 hours on its own.
                    </li>
                    <li>
                      <strong>Total distance:</strong> About 123 km from
                      Srinagar, typically 5–6 hours door to door including the
                      permit checkpost stop.
                    </li>
                    <li>
                      <strong>Vehicle:</strong> Shared Sumos run from
                      Bandipora to Dawar for budget travellers; a private
                      cab/SUV from Srinagar is the more comfortable option and
                      easily arranged through Srinagar hotels or travel
                      agents.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Leave Srinagar by 6–7 AM. The
                    Razdan Pass is narrow, single-lane in stretches, and
                    afternoon cloud cover reduces visibility fast — an early
                    start also gives you first light for photographs at the
                    top of the pass.
                  </div>
                  <p>
                    <strong>Permits:</strong> Indian nationals need to
                    register with a valid photo ID (Aadhaar card, passport, or
                    similar) at an Army/police checkpost along the route — this
                    functions as the entry permit and is normally issued on
                    the spot, with no advance application needed. Foreign
                    nationals have historically faced tighter restrictions on
                    entry to Gurez given its location along the LOC, and
                    should confirm current rules with the district
                    administration or a registered local operator before
                    planning a trip.
                  </p>
                </section>

                {/* ── Dawar ─────────────────────────────────────────────── */}
                <section id="dawar">
                  <h2>Dawar — The Valley's Base</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Wooden houses and green meadows of Dawar village, the main town in Gurez Valley"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Dawar</strong> is the administrative headquarters
                    of Gurez tehsil and the valley's only real town — a
                    scattering of wooden and stone houses along the
                    Kishanganga, with a small market street, a handful of
                    guesthouses, schools, a health centre, and an Army camp.
                    It's small enough to walk end to end in twenty minutes, but
                    it's where almost every visitor to Gurez ends up basing
                    themselves, since it's the only settlement with reliable
                    accommodation and supplies.
                  </p>
                  <ul>
                    <li>
                      <strong>Dawar market:</strong> A short stretch of shops
                      selling essentials, tea stalls, and a few general stores
                      — useful for last-minute supplies, though options thin
                      out fast compared to Srinagar.
                    </li>
                    <li>
                      <strong>Riverside walks:</strong> The Kishanganga runs
                      right past town, and short walks along its banks in the
                      early morning or at sunset are one of the simplest,
                      best things to do in Dawar.
                    </li>
                    <li>
                      <strong>Base for excursions:</strong> Dawar is the
                      launch point for the trek toward Habba Khatoon Peak, the
                      drive further up to Tulail Valley, and river-side spots
                      for trout fishing.
                    </li>
                  </ul>
                </section>

                {/* ── Habba Khatoon Peak ──────────────────────────────────── */}
                <section id="habba-khatoon">
                  <h2>Habba Khatoon Peak</h2>
                  <p>
                    The single most recognisable feature of Gurez Valley is{" "}
                    <strong>Habba Khatoon Peak</strong>, a striking,
                    near-perfect cone of a mountain that rises directly behind
                    Dawar and dominates every photograph taken in the valley.
                    It's named after <strong>Habba Khatoon</strong>, a 16th-
                    century Kashmiri poetess born Zoon in a village near
                    Pampore, who became queen consort to Yusuf Shah Chak, the
                    last independent ruler of Kashmir before Mughal annexation.
                  </p>
                  <p>
                    When Akbar's forces took Kashmir and Yusuf Shah Chak was
                    exiled to Bihar, where he later died, Habba Khatoon is said
                    to have wandered the meadows and mountainsides of the
                    Valley composing verses of longing and separation — poetry
                    that is still sung in Kashmir today and is widely credited
                    with shaping the <em>lol</em> style of Kashmiri lyric
                    poetry. The peak's association with her isn't a formal
                    historical record so much as a local legend passed down
                    through generations, but it's told with real affection and
                    respect across the valley, and locals will happily point
                    out the exact silhouette from town.
                  </p>
                  <p>
                    Reaching the peak itself is a proper trek — a full day's
                    hike up from Dawar through meadow and forest, best
                    attempted with a local guide given the terrain and the
                    valley's sensitive border location. Most visitors are
                    content admiring it from Dawar or walking partway up the
                    lower slopes for closer views without committing to the
                    full ascent.
                  </p>
                </section>

                {/* ── Kishanganga River ────────────────────────────────────── */}
                <section id="kishanganga-river">
                  <h2>Kishanganga River & Trout Fishing</h2>
                  <p>
                    The <strong>Kishanganga River</strong> — known as the
                    Neelum once it crosses into Pakistan-administered Kashmir
                    downstream — runs the length of Gurez Valley and forms
                    part of the Line of Control boundary in this sector. It's
                    a fast, cold, glacier-fed river, and one of the defining
                    presences in the valley: nearly every village and
                    homestay in Gurez sits within earshot of it.
                  </p>
                  <ul>
                    <li>
                      <strong>Trout fishing:</strong> The Kishanganga and its
                      tributary streams are stocked with brown and rainbow
                      trout, and angling permits can be arranged locally
                      through the fisheries department or your homestay host
                      — a genuinely popular activity among the few travellers
                      who make it out here.
                    </li>
                    <li>
                      <strong>Riverside picnics:</strong> Flat grassy banks
                      near Dawar make for easy, unhurried riverside stops —
                      bring your own food, as facilities directly on the
                      banks are minimal.
                    </li>
                    <li>
                      <strong>Photography:</strong> The river valley, framed
                      by pine-covered slopes and the Habba Khatoon cone, is
                      the single most photographed stretch in Gurez, especially
                      in the soft light of early morning.
                    </li>
                  </ul>
                </section>

                {/* ── Tulail Valley ─────────────────────────────────────── */}
                <section id="tulail-valley">
                  <h2>Tulail Valley</h2>
                  <p>
                    If Gurez itself feels remote, <strong>Tulail Valley</strong>{" "}
                    — a further offshoot beyond Dawar, following the
                    Kishanganga upstream toward villages like Chorwan, Chakwali,
                    and Badoab — is remoter still. This is Gurez's own
                    "offbeat within the offbeat," seeing a small fraction of
                    the (already small) number of visitors who make it to Dawar.
                  </p>
                  <p>
                    The scenery through Tulail is arguably even more dramatic
                    than the main valley — narrower, wilder, with the river
                    running closer to the road and the mountains pressing in
                    tighter on both sides. Given its proximity to the Line of
                    Control, movement beyond certain points can be restricted
                    or require additional clearance depending on the security
                    situation at the time, so it's worth checking locally in
                    Dawar — through your homestay host or the local police
                    post — before planning a Tulail excursion, rather than
                    assuming free access.
                  </p>
                  <p>
                    Travellers who do make it up value it precisely because it
                    strips away even Dawar's modest tourist infrastructure —
                    it's a good pairing with a valley like{" "}
                    <Link href="/blog/doodhpathri-travel-guide">
                      Doodhpathri
                    </Link>{" "}
                    on a different trip, if what you're chasing across Kashmir
                    is quiet, unpolished meadow and river scenery over
                    marquee sights.
                  </p>
                </section>

                {/* ── Culture ───────────────────────────────────────────── */}
                <section id="culture">
                  <h2>Dard-Shin Culture & People</h2>
                  <p>
                    Gurez is home to the <strong>Dard-Shin</strong> community,
                    an ethnic and linguistic group distinct from the
                    Kashmiri-speaking majority elsewhere in the Valley. They
                    speak <strong>Shina</strong>, a language unrelated to
                    Kashmiri, and trace cultural roots shared with Dard
                    communities across the border in Gilgit-Baltistan and in
                    Ladakh's Dras and Dah-Hanu areas — a reminder that this
                    stretch of the Himalaya has ethnic and linguistic
                    continuities that run straight through a modern political
                    boundary.
                  </p>
                  <ul>
                    <li>
                      <strong>Language:</strong> Shina is the everyday
                      language in Gurez villages, though most residents also
                      speak Kashmiri, Urdu, and basic Hindi — communication is
                      rarely an issue for domestic visitors.
                    </li>
                    <li>
                      <strong>Architecture:</strong> Traditional Gurez homes
                      use timber-and-stone construction suited to heavy snow
                      loads, distinct in style from houses further south in
                      the Kashmir Valley.
                    </li>
                    <li>
                      <strong>Way of life:</strong> Agriculture, livestock
                      rearing, and — increasingly — small-scale tourism form
                      the backbone of the local economy, alongside a
                      significant Army presence given the valley's location.
                    </li>
                    <li>
                      <strong>Respect and sensitivity:</strong> This is a
                      militarised border region as much as a scenic one —
                      travel here with the same courtesy and restraint you'd
                      bring to any community living under those conditions,
                      and let locals set the tone for how much they want to
                      engage.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Gurez Valley</h2>
                  <p>
                    Accommodation in Gurez is limited and simple by design —
                    this is homestay and guesthouse territory, not a hotel
                    market, and it's worth adjusting expectations accordingly.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Homestays",
                        icon: "🏠",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Local family homestays, Dawar",
                          "Village homestays, Tulail side",
                          "Simple, home-cooked meals usually included",
                        ],
                      },
                      {
                        tier: "Guesthouses",
                        icon: "🛏️",
                        range: "₹1,500–₹3,500/night",
                        picks: [
                          "J&K Tourism guesthouse, Dawar",
                          "Private guesthouses near the market",
                          "Basic rooms, limited hot water/electricity",
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

                  <blockquote>
                    Book ahead where you can, but don't expect an online
                    booking ecosystem here — most Gurez homestays are arranged
                    by phone through your Srinagar hotel, a local operator, or
                    directly once you're in Bandipora. Cash is essential, as
                    card payments are unreliable to nonexistent this far out.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Gurez Valley</h2>
                  <p>
                    Food in Gurez is simple, homestyle, and shaped by what's
                    locally available rather than restaurant menus — most
                    meals here happen inside a homestay kitchen, not a
                    market eatery.
                  </p>
                  <ul>
                    <li>
                      <strong>Fresh trout:</strong> Pan-fried river trout,
                      often caught the same day, is the valley's signature
                      dish where available — simple preparation, excellent
                      flavour.
                    </li>
                    <li>
                      <strong>Local dairy:</strong> Fresh milk, butter, and
                      yogurt from valley livestock feature heavily in
                      homestay meals — noticeably richer than what's typically
                      available in Srinagar.
                    </li>
                    <li>
                      <strong>Rice and lentil staples:</strong> Simple rice,
                      dal, and seasonal vegetable preparations form the core
                      of most homestay dinners, usually shared family-style.
                    </li>
                    <li>
                      <strong>Kahwa and noon chai:</strong> Both the sweet,
                      saffron-spiced Kashmiri kahwa and the salty pink noon
                      chai show up here, much as elsewhere in the Valley.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Carry some packaged snacks
                    and dry fruit from Srinagar or Bandipora — options thin
                    out fast in Dawar, and there's no real restaurant scene
                    to fall back on between homestay meals.
                  </div>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Gurez Valley Itinerary</h2>
                  <p>
                    Three days is a comfortable, realistic window for Gurez —
                    enough to justify the drive in without rushing, while
                    respecting how much of the trip is genuinely spent on the
                    road.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Srinagar to Dawar via Razdan Pass",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Srinagar (6–7 AM)",
                          "Permit checkpost near Bandipora",
                          "Cross Razdan Pass, photo stops at the top",
                          "Arrive Dawar by afternoon, settle into homestay",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Dawar & Habba Khatoon Views",
                        color: "bg-forest-600",
                        activities: [
                          "Morning walk along the Kishanganga River",
                          "Explore Dawar market and village lanes",
                          "Short hike toward the lower Habba Khatoon slopes",
                          "Evening: trout dinner and tea with your host family",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Tulail Valley (or Rest) & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning excursion toward Tulail Valley (permission-dependent)",
                          "Alternative: relaxed morning in Dawar and riverside photography",
                          "Depart Dawar by early afternoon",
                          "Cross Razdan Pass back to Bandipora, onward to Srinagar",
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
                          ["Accommodation/night", "₹800", "₹3,000"],
                          ["Food/day (homestay)", "₹500", "₹900"],
                          [
                            "Srinagar–Gurez cab (round trip)",
                            "₹4,500 (shared Sumo)",
                            "₹9,000 (private SUV)",
                          ],
                          ["Local excursions/fishing permit", "₹300", "₹800"],
                          ["Daily total", "₹1,600", "₹4,700"],
                          [
                            "3-Day trip total (incl. transport)",
                            "₹9,300",
                            "₹18,600",
                          ],
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
                    * Excludes travel to Srinagar. The Srinagar–Gurez round
                    trip is typically the largest single cost given the
                    distance and limited public transport options in the
                    valley.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Gurez Valley</h2>
                  <ul>
                    <li>
                      <strong>Carry a valid photo ID:</strong> Aadhaar card
                      or passport is needed at the entry checkpost — don't
                      travel to Gurez without one.
                    </li>
                    <li>
                      <strong>Carry enough cash:</strong> ATMs are scarce and
                      unreliable beyond Bandipora, and card payments are not
                      widely accepted in Dawar — withdraw what you need before
                      leaving Srinagar or Bandipora.
                    </li>
                    <li>
                      <strong>Expect limited connectivity:</strong> Mobile
                      network coverage is patchy through much of the valley,
                      with only intermittent signal in Dawar — let people know
                      you'll be largely unreachable for a couple of days.
                    </li>
                    <li>
                      <strong>Respect the military presence:</strong> Avoid
                      photographing Army checkposts, camps, or installations,
                      and follow instructions from personnel at checkpoints
                      without argument — this is standard practice in any
                      border-sensitive area.
                    </li>
                    <li>
                      <strong>Confirm Tulail access locally:</strong> Don't
                      assume free movement beyond Dawar — check current
                      restrictions with your homestay host or the local police
                      post before heading toward Tulail Valley.
                    </li>
                    <li>
                      <strong>Pack for cold nights year-round:</strong> Even
                      in peak summer, Gurez's altitude means nights can drop
                      well below what Srinagar experiences — carry warm
                      layers regardless of when you visit.
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
                          "Carry a valid photo ID for the entry checkpost",
                          "Withdraw sufficient cash before Bandipora",
                          "Start the Razdan Pass crossing early in the day",
                          "Book homestays ahead by phone where possible",
                          "Respect Army checkposts and follow instructions",
                          "Pack warm layers even for a summer visit",
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
                          "Rely on cards or ATMs beyond Bandipora",
                          "Photograph checkposts or military installations",
                          "Assume free access to Tulail Valley without checking",
                          "Travel without confirming the pass is currently open",
                          "Expect restaurant-style dining beyond homestay meals",
                          "Rush the Razdan Pass crossing in poor visibility",
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
                    {[
                      {
                        q: "Is Gurez Valley safe to visit?",
                        a: "Yes, Gurez Valley is open to domestic tourists and sees a steady, growing flow of visitors every summer. It sits close to the Line of Control and has a visible Army presence, which in practice makes it one of the more closely monitored — and orderly — regions to travel in. As with any border area, it's worth checking current advisories before you travel and avoiding photography near checkposts and military installations.",
                      },
                      {
                        q: "Do I need a permit for Gurez Valley?",
                        a: "Indian nationals need to register at an Army/police checkpost along the route from Bandipora and carry a valid government-issued photo ID such as an Aadhaar card or passport — this functions as an entry permit and is usually issued on the spot. Foreign nationals typically require prior permission and should confirm current rules with the district administration before planning a visit.",
                      },
                      {
                        q: "How far is Gurez Valley from Srinagar?",
                        a: "Gurez Valley is roughly 123 km from Srinagar, travelling via Bandipora and over the Razdan Pass. The drive takes about 5–6 hours depending on road and weather conditions, and is best started early in the morning to cross the pass before afternoon cloud cover sets in.",
                      },
                      {
                        q: "Is Gurez Valley open in winter?",
                        a: "No. The Razdan Pass, the only road access into the valley, is buried under heavy snow from roughly November to May and is closed for the season. Gurez is effectively cut off from the rest of Kashmir by road during these months, and the visiting window for tourists is limited to June through September.",
                      },
                      {
                        q: "What is Gurez Valley famous for?",
                        a: "Gurez Valley is best known for the cone-shaped Habba Khatoon Peak, named after the 16th-century Kashmiri poetess-queen; the Kishanganga River, prized for trout fishing and dramatic scenery; its distinct Dard-Shin ethnic community and Shina language; and its remoteness — the valley was closed to civilian tourism for decades because of its location along the Line of Control.",
                      },
                      {
                        q: "What language do people speak in Gurez Valley?",
                        a: "Most residents of Gurez belong to the Dard-Shin community and speak Shina, a distinct language unrelated to Kashmiri. Many locals also speak Kashmiri, Urdu, and basic Hindi, so communication is rarely a problem for domestic visitors.",
                      },
                      {
                        q: "How many days are enough for Gurez Valley?",
                        a: "Two to three days is a comfortable window — enough time for the scenic drive in, a day exploring Dawar and the base of Habba Khatoon Peak, a look at the Kishanganga River, and a short excursion toward Tulail Valley if road conditions and permissions allow, before the drive back over Razdan Pass.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {item.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Gurez Valley",
                  "Jammu and Kashmir",
                  "Kashmir",
                  "Habba Khatoon",
                  "Dawar",
                  "Tulail Valley",
                  "Offbeat Kashmir",
                  "Line of Control",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Gurez Valley"
              />

              <RelatedPostsGrid currentSlug="gurez-valley-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gurez-valley-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
