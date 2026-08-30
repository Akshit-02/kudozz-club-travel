// src/app/blog/pahalgam-travel-guide/page.tsx
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
  title: "Pahalgam Travel Guide: Betaab Valley, Aru & Chandanwari",
  description:
    "Complete Pahalgam travel guide: Betaab Valley, Aru Valley, Chandanwari, the Lidder River, Amarnath Yatra base, best time to visit, and a full itinerary.",
  keywords:
    "Pahalgam travel guide, Betaab Valley, Aru Valley, Chandanwari, Pahalgam sightseeing, best time to visit Pahalgam, Pahalgam to Srinagar distance, Pahalgam itinerary, Amarnath Yatra Pahalgam, Baisaran valley, Lidder River Pahalgam",
  openGraph: {
    title: "Pahalgam Travel Guide: Betaab Valley, Aru & Chandanwari",
    description:
      "Pine forests, the Lidder River, and the valleys that made Pahalgam Bollywood's favourite backdrop and one of two Amarnath Yatra base routes — the complete guide.",
    url: "https://club.kudozz.in/blog/pahalgam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pine-forested valley and mountains around Pahalgam in Jammu and Kashmir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pahalgam Travel Guide: Betaab Valley, Aru & Chandanwari",
    description:
      "Pine forests, the Lidder River, and the valleys that made Pahalgam Bollywood's favourite backdrop and an Amarnath Yatra base — the complete guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/pahalgam-travel-guide",
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
          headline: "Pahalgam Travel Guide: Betaab Valley, Aru & Chandanwari",
          description:
            "Complete Pahalgam travel guide: Betaab Valley, Aru Valley, Chandanwari, the Lidder River, Amarnath Yatra base, best time to visit, and a full itinerary.",
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
            "@id": "https://club.kudozz.in/blog/pahalgam-travel-guide",
          },
          keywords:
            "Pahalgam travel guide, Betaab Valley, Aru Valley, Chandanwari, Pahalgam sightseeing, best time to visit Pahalgam, Amarnath Yatra Pahalgam",
          about: {
            "@type": "Place",
            name: "Pahalgam",
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
              { "@type": "ListItem", position: 4, name: "Pahalgam Travel Guide" },
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
              name: "How many days are needed for Pahalgam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Two to three days is enough to cover Betaab Valley, Aru Valley, Chandanwari, and Baisaran meadow at a relaxed pace, with a night or two spent along the Lidder River. A single day trip from Srinagar is possible but only allows time for one or two of the valleys.",
              },
            },
            {
              "@type": "Question",
              name: "Is Pahalgam better than Gulmarg?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "They serve different purposes rather than one being objectively better. Gulmarg is built around its gondola, snow, and skiing, while Pahalgam is quieter, greener, and centred on river valleys, meadows, and gentle treks. Most Kashmir itineraries include both rather than choosing between them.",
              },
            },
            {
              "@type": "Question",
              name: "What is the distance between Srinagar and Pahalgam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pahalgam is roughly 90 to 95 km from Srinagar, a drive of about 2.5 to 3 hours via Anantnag on generally good roads. It is a common day-trip distance, though an overnight stay is worthwhile to properly cover the surrounding valleys.",
              },
            },
            {
              "@type": "Question",
              name: "Is Pahalgam safe for family trips?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pahalgam is a well-established, family-friendly tourism town with a strong local infrastructure for hotels, taxis, and guided pony or trekking routes. As with anywhere in Jammu and Kashmir, it is worth checking current travel advisories before booking, but Pahalgam itself sees consistently high family and group tourist traffic.",
              },
            },
            {
              "@type": "Question",
              name: "What is famous in Pahalgam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pahalgam is best known for Betaab Valley (named after the 1983 Bollywood film shot there), Aru Valley as a trekking base, Chandanwari as the traditional starting point of the Amarnath Yatra, the Lidder River, and Baisaran meadow, often called 'mini Switzerland'. It has also been a backdrop for dozens of Hindi films over the decades.",
              },
            },
            {
              "@type": "Question",
              name: "Can I visit Chandanwari without joining the Amarnath Yatra?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Chandanwari is open to regular tourists year-round as a scenic valley and picnic spot, separate from the Amarnath Yatra registration process. Outside the yatra season, it is simply another stop on the Pahalgam sightseeing circuit, known for its snow bridge and river views.",
              },
            },
            {
              "@type": "Question",
              name: "Is Pahalgam open in winter?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pahalgam stays open through winter and receives snowfall from December to February, though it is far less crowded and colder than the peak April-to-June season. Some higher points like Chandanwari can be snowbound or harder to reach, but the town itself and Betaab Valley remain accessible.",
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
  { id: "introduction", title: "Why Visit Pahalgam?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pahalgam", level: 2 },
  { id: "betaab-valley", title: "Betaab Valley", level: 2 },
  { id: "aru-valley", title: "Aru Valley", level: 2 },
  { id: "chandanwari", title: "Chandanwari", level: 2 },
  { id: "other-sights", title: "Other Sights in Pahalgam", level: 2 },
  { id: "amarnath-yatra", title: "Pahalgam & the Amarnath Yatra", level: 2 },
  { id: "activities", title: "Adventure Activities", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-3 Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PahalgamGuidePage() {
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
              alt="Pine-forested valley and snow-capped mountains around Pahalgam, Jammu and Kashmir"
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
                { label: "Pahalgam", href: null },
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
                "Pahalgam",
                "Jammu & Kashmir",
                "Betaab Valley",
                "Aru Valley",
                "Chandanwari",
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
              Pahalgam Travel Guide: Betaab Valley, Aru & Chandanwari
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A pine-forested valley along the Lidder River that gave its name
              to a Bollywood classic and its trails to the Amarnath Yatra —
              this is the complete guide to Kashmir's "Valley of Shepherds."
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
                  text: "Pahalgam, Jammu & Kashmir",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~3,000 words",
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
                  <h2>Why Visit Pahalgam?</h2>
                  <p>
                    Set at roughly <strong>2,130 metres</strong> along the
                    banks of the <strong>Lidder River</strong>,{" "}
                    <strong>Pahalgam</strong> translates loosely to "Valley of
                    Shepherds" — and even after decades of growing tourism, it
                    hasn't entirely lost that quiet, pastoral character. Pine
                    and deodar forests climb the surrounding slopes, sheep
                    graze on open meadows, and the Lidder's glacial water runs
                    clear and cold through the middle of town.
                  </p>
                  <p>
                    Pahalgam is best known for three things. First, it's been
                    Bollywood's favourite Kashmir backdrop for over half a
                    century — <strong>Betaab Valley</strong> was renamed after
                    the 1983 film shot there, and dozens of other productions
                    have used its meadows and forests since. Second, it's the
                    launch point for short, accessible outings into{" "}
                    <strong>Aru Valley</strong> and{" "}
                    <strong>Chandanwari</strong>, both easy half-day trips with
                    genuine mountain scenery. Third, it is one of the two
                    traditional base routes for the{" "}
                    <strong>Amarnath Yatra</strong>, alongside Baltal near
                    Sonamarg — a role that shapes the town's character every
                    July and August.
                  </p>
                  <p>
                    Compared to the sharper, snow-and-gondola drama of{" "}
                    <Link href="/blog/gulmarg-travel-guide">Gulmarg</Link> or
                    the glacier walk at{" "}
                    <Link href="/blog/sonamarg-travel-guide">Sonamarg</Link>,
                    Pahalgam is gentler — a place to slow down, walk along a
                    river, and let a horse do the climbing if you'd rather not.
                    It pairs naturally with a Srinagar base and fits into any
                    broader{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir itinerary
                    </Link>{" "}
                    as either a day trip or, better, an overnight stop of its
                    own.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Pahalgam at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Anantnag, J&K",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~2,130 m",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Apr–Jun, Sep–Oct",
                        },
                        {
                          icon: "🚗",
                          label: "From Srinagar",
                          value: "~90 km / 2.5 hrs",
                        },
                        {
                          icon: "🏞️",
                          label: "Known For",
                          value: "Betaab, Aru, Chandanwari",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹7,000",
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
                  <h2>Best Time to Visit Pahalgam</h2>
                  <p>
                    Pahalgam is a summer-and-shoulder-season destination
                    first, with a distinct but shorter winter appeal. Unlike{" "}
                    <Link href="/blog/gulmarg-travel-guide">Gulmarg</Link>,
                    it isn't built around a ski season — the draw here is
                    green valleys and mild weather.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌷",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Spring & early summer — our pick",
                        text: "Meadows turn green, rivers run full with snowmelt, and daytime temperatures sit around 15–25°C. The most reliable window for all three valleys.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🕉️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Amarnath Yatra season",
                        text: "Pahalgam fills with pilgrims and their support infrastructure. Scenery stays lush, but expect heavier traffic on the road from Srinagar and busier hotels.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Autumn colours, fewer crowds",
                        text: "Forests turn gold and rust, the yatra crowds are gone, and temperatures stay comfortable for walking — a genuinely underrated season here.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Quiet, cold, occasional snow",
                        text: "Pahalgam sees snowfall and sub-zero nights. Chandanwari can be hard to reach, but Betaab Valley and the town itself stay open and are strikingly peaceful.",
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
                    <strong>Our pick:</strong> Late April through June for the
                    greenest valleys and calmest roads, or September–October
                    if you'd rather skip both the summer crowds and the
                    Amarnath Yatra traffic entirely.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Pahalgam</h2>
                  <p>
                    Pahalgam has no airport or railway station of its own —
                    every route runs through Srinagar first.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Fly into{" "}
                      <Link href="/blog/srinagar-travel-guide">
                        Srinagar Airport
                      </Link>
                      , which has direct flights from Delhi, Mumbai, Bangalore
                      and other major cities. This is the standard first leg
                      for almost every Pahalgam trip.
                    </li>
                    <li>
                      <strong>By Road from Srinagar:</strong> Pahalgam is
                      roughly <strong>90–95 km</strong> from Srinagar, about a{" "}
                      <strong>2.5 to 3-hour drive</strong> via Anantnag
                      (Islamabad). Shared cabs, private taxis, and J&K SRTC
                      buses all run this route regularly.
                    </li>
                    <li>
                      <strong>By Train:</strong> There is no direct rail link;
                      the nearest useful railhead is Jammu Tawi, from where
                      it's a long road journey via Srinagar. Flying into
                      Srinagar is faster for almost all visitors.
                    </li>
                    <li>
                      <strong>Getting around Pahalgam:</strong> Private
                      vehicles beyond a certain point in Betaab and Aru
                      Valleys are often restricted — local shared taxis (Tata
                      Sumo unions) and pony operators cover the last stretch,
                      with fixed rates set by the local tourism office.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your Srinagar–Pahalgam
                    taxi through your hotel or a registered union rather than
                    at the airport — rates are fixed and posted, and this
                    avoids the inflated quotes touts sometimes offer arriving
                    tourists.
                  </div>
                </section>

                {/* ── Betaab Valley ─────────────────────────────────────── */}
                <section id="betaab-valley">
                  <h2>Betaab Valley</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Betaab Valley in Pahalgam with pine forests and the Lidder River"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Around 15 km from Pahalgam town,{" "}
                    <strong>Betaab Valley</strong> is a narrow, densely wooded
                    stretch flanking the Lidder River, framed by steep pine
                    slopes on both sides. It was originally called Hajan
                    Valley before Bollywood's 1983 blockbuster{" "}
                    <em>Betaab</em>, starring Sunny Deol and Amrita Singh, was
                    filmed here — the valley was renamed after the film and
                    has kept the name ever since.
                  </p>
                  <p>
                    The valley has since appeared in numerous other Hindi
                    films, and it remains one of the most photographed spots
                    in Kashmir: manicured lawns along the riverbank, backdrop
                    mountains, and the sound of the Lidder running fast over
                    rocks. It's a gentle, low-effort stop — mostly walking on
                    flat ground — that works well with children or older
                    family members who might skip the further treks into Aru.
                  </p>
                  <ul>
                    <li>
                      <strong>Entry:</strong> A small ticketed entry fee
                      applies, with the site maintained as a managed park
                      rather than open wilderness.
                    </li>
                    <li>
                      <strong>Best for:</strong> Photography, a short riverside
                      walk, and pony rides along the valley floor.
                    </li>
                    <li>
                      <strong>Time needed:</strong> 1–1.5 hours is enough to
                      see the valley properly without rushing.
                    </li>
                  </ul>
                </section>

                {/* ── Aru Valley ────────────────────────────────────────── */}
                <section id="aru-valley">
                  <h2>Aru Valley</h2>
                  <p>
                    About 12 km from Pahalgam, <strong>Aru Valley</strong> is a
                    small village and meadow set against a wall of pine forest
                    and distant peaks — quieter and less manicured than
                    Betaab, with more of a working-village feel to it. It sits
                    at roughly 2,400 m and functions as the trailhead for
                    several serious treks, most notably the multi-day route to{" "}
                    <strong>Tarsar and Marsar lakes</strong>, twin alpine lakes
                    tucked behind the ridgeline that most day-trippers never
                    see but that experienced trekkers rate among the finest
                    routes in the Kashmir Himalaya.
                  </p>
                  <p>
                    Even without attempting the full trek, Aru rewards a visit
                    on its own — open meadows for a picnic, short walks along
                    the stream, and pony rides up toward the treeline. It's
                    also noticeably calmer than Betaab Valley, since most
                    day-tour groups treat it as a quick photo stop rather than
                    lingering.
                  </p>
                  <ul>
                    <li>
                      <strong>Day visit:</strong> Meadow walks, pony rides, and
                      river-side photography — no permits needed for the
                      village and immediate surroundings.
                    </li>
                    <li>
                      <strong>Multi-day trek:</strong> The Aru–Tarsar–Marsar
                      route typically takes 4–5 days and requires camping gear,
                      a local guide, and a reasonable fitness level — arrange
                      this through a registered trekking operator in advance.
                    </li>
                  </ul>
                </section>

                {/* ── Chandanwari ───────────────────────────────────────── */}
                <section id="chandanwari">
                  <h2>Chandanwari</h2>
                  <p>
                    Roughly 16 km from Pahalgam and at about 2,900 m,{" "}
                    <strong>Chandanwari</strong> is the highest of the three
                    valleys most visitors reach by road, and the most
                    dramatic. Its name — "Valley of Moonlight" — comes from
                    the reflection of moonlight off the snow that used to
                    cover the valley floor year-round; a shrinking but still
                    visible <strong>snow bridge</strong> over the Lidder is
                    the site's signature feature for much of the year.
                  </p>
                  <p>
                    Chandanwari's other identity is as the traditional
                    starting point of the <strong>Amarnath Yatra</strong>,
                    from where pilgrims begin the trek toward the holy cave
                    via <strong>Sheshnag</strong> and Panchtarni. Outside the
                    yatra season, it functions as a normal, if slightly
                    higher-altitude, tourist stop — cold even in summer, with
                    views back down the valley toward Pahalgam.
                  </p>
                  <ul>
                    <li>
                      <strong>Access:</strong> A shared taxi or private cab
                      from Pahalgam covers most of the route; the last stretch
                      near the snow bridge is on foot.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> Even in June, wind
                      chill at Chandanwari can be sharp — pack accordingly
                      regardless of how warm Pahalgam town feels.
                    </li>
                    <li>
                      <strong>Seasonal access:</strong> Heavy snow can restrict
                      the road in deep winter; check locally before planning a
                      December–February visit.
                    </li>
                  </ul>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Other Sights in Pahalgam</h2>
                  <p>
                    Beyond the "big three," a handful of smaller sights round
                    out a Pahalgam visit.
                  </p>
                  <ul>
                    <li>
                      <strong>Baisaran Meadow:</strong> A forested plateau
                      reached by a roughly 5 km pony or walking trail above
                      Pahalgam town, often nicknamed "mini Switzerland" for its
                      open rolling meadow ringed by pine forest. A popular
                      half-day outing on its own, with paragliding available
                      seasonally.
                    </li>
                    <li>
                      <strong>Lidder River:</strong> The glacial river that
                      runs through the entire valley, source of most of
                      Pahalgam's scenery and its river-rafting and trout
                      fishing activities alike.
                    </li>
                    <li>
                      <strong>Mamaleshwar Temple:</strong> An ancient Shiva
                      temple in Pahalgam town, believed to date back over a
                      thousand years — a quiet, low-key stop compared to the
                      valley excursions, worth a short visit if temples
                      interest you.
                    </li>
                    <li>
                      <strong>Pahalgam Golf Course:</strong> One of the
                      highest-altitude golf courses in India, set against a
                      genuinely spectacular mountain backdrop.
                    </li>
                  </ul>
                </section>

                {/* ── Amarnath Yatra ────────────────────────────────────── */}
                <section id="amarnath-yatra">
                  <h2>Pahalgam & the Amarnath Yatra</h2>
                  <p>
                    Pahalgam is one of two traditional base routes for the{" "}
                    <strong>Amarnath Yatra</strong>, the annual pilgrimage to
                    the ice lingam cave shrine of Lord Shiva — the other being
                    the shorter Baltal route near{" "}
                    <Link href="/blog/sonamarg-travel-guide">Sonamarg</Link>.
                    The Pahalgam route is longer, typically taken over
                    multiple days via Chandanwari, Sheshnag, and Panchtarni,
                    and is generally considered the more traditional and
                    scenic — if more demanding — of the two.
                  </p>
                  <p>
                    This isn't a full yatra guide, but it's worth knowing if
                    you're visiting Pahalgam during <strong>July–August</strong>:
                    the town becomes a major logistics hub for pilgrims, with
                    registration camps, base facilities, and heavier traffic
                    on the Srinagar–Pahalgam road. If your trip isn't
                    yatra-related, this is worth factoring into your travel
                    dates — the valleys themselves stay open and beautiful,
                    but hotels fill faster and roads are busier than in the
                    shoulder seasons.
                  </p>
                </section>

                {/* ── Activities ────────────────────────────────────────── */}
                <section id="activities">
                  <h2>Adventure Activities in Pahalgam</h2>
                  <ul>
                    <li>
                      <strong>River rafting on the Lidder:</strong> Short,
                      beginner-friendly rafting stretches operate near
                      Pahalgam town, a fun way to experience the river beyond
                      just admiring it from the bank.
                    </li>
                    <li>
                      <strong>Pony rides:</strong> The standard way to cover
                      Baisaran, the upper stretches of Aru, and parts of
                      Chandanwari — rates are fixed by local pony unions and
                      posted at each starting point.
                    </li>
                    <li>
                      <strong>Golf:</strong> Pahalgam's high-altitude golf
                      course welcomes visiting players for a round with
                      genuinely unmatched mountain views.
                    </li>
                    <li>
                      <strong>Trout fishing:</strong> The Lidder is stocked
                      with trout, and licensed fishing is possible with
                      permits arranged through the local fisheries department
                      or your hotel.
                    </li>
                    <li>
                      <strong>Trekking:</strong> Aru Valley is the launch point
                      for the multi-day Tarsar-Marsar trek, along with several
                      shorter half-day walking routes for less experienced
                      trekkers.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Pahalgam</h2>
                  <p>
                    Pahalgam's hotel scene is concentrated in and around the
                    town centre, close to the Lidder River, with options
                    spanning simple guesthouses to riverside luxury resorts.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Local guesthouses, Pahalgam town",
                          "Budget hotels near the bus stand",
                          "Basic riverside lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,500/night",
                        picks: [
                          "Hotel Heevan, Pahalgam",
                          "Hotel Pahalgam Woods",
                          "Hotel Paradise Inn",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹9,000–₹22,000+/night",
                        picks: [
                          "The Chinar Resort & Spa",
                          "Pahalgam Hotel",
                          "Woodstock Village Resort",
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
                    A hotel with river-facing rooms is worth the small premium
                    here — falling asleep to the sound of the Lidder is one
                    of Pahalgam's simplest, most memorable details.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Pahalgam</h2>
                  <p>
                    Pahalgam's food scene mirrors the broader{" "}
                    <strong>Kashmiri</strong> table — rich, meat-forward, and
                    built around slow-cooked curries — alongside fresh trout
                    from the Lidder itself.
                  </p>
                  <ul>
                    <li>
                      <strong>Fresh river trout:</strong> Locally caught and
                      usually pan-fried with butter and garlic — one of the
                      few genuinely local specialities specific to Pahalgam.
                    </li>
                    <li>
                      <strong>Rogan Josh:</strong> The classic Kashmiri mutton
                      curry, available at most local restaurants and dhabas.
                    </li>
                    <li>
                      <strong>Kahwa:</strong> Saffron and cardamom-spiced
                      green tea — a warming, restorative drink after a cold
                      morning at Chandanwari or Aru.
                    </li>
                    <li>
                      <strong>Wazwan-style thalis:</strong> Simplified,
                      single-meal versions of the traditional multi-course
                      Kashmiri feast, offered by several Pahalgam restaurants
                      for visitors.
                    </li>
                    <li>
                      <strong>Roadside stalls:</strong> Corn on the cob,
                      walnuts, and kehwa stalls line the route to Betaab and
                      Aru — good, cheap snacking between sightseeing stops.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-3 Day Pahalgam Itinerary</h2>
                  <p>
                    Three days lets you cover all three valleys without
                    rushing; two days is workable if you combine Betaab and
                    Aru into one outing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Baisaran Meadow",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Srinagar, check into your hotel",
                          "Afternoon: Pony or walking trek to Baisaran meadow",
                          "Evening: Riverside walk along the Lidder in town",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Betaab Valley & Aru Valley",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Betaab Valley — riverside walk and photos",
                          "Midday: Continue to Aru Valley for a meadow picnic",
                          "Afternoon: Pony ride toward Aru's upper treeline",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Chandanwari & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Chandanwari — snow bridge and valley views",
                          "Midday: Return to Pahalgam, casual lunch by the river",
                          "Afternoon: Depart for Srinagar or onward travel",
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

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you only have one day,
                    prioritise Betaab Valley and Aru Valley together — they're
                    on the same road and easy to combine, whereas Chandanwari
                    is a separate, slightly longer detour.
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
                          [
                            "Accommodation/night",
                            "₹1,200",
                            "₹4,000",
                            "₹12,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local taxi / pony hire",
                            "₹1,200",
                            "₹2,000",
                            "₹3,500",
                          ],
                          [
                            "Entry fees & activities",
                            "₹500",
                            "₹1,200",
                            "₹2,500",
                          ],
                          ["Daily total", "₹3,400", "₹8,400", "₹20,500"],
                          [
                            "3-Day trip total",
                            "₹10,200",
                            "₹25,200",
                            "₹61,500",
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
                    * Excludes flights or trains to Srinagar. Pony hire,
                    entry fees to Betaab Valley, and taxi charges into Aru and
                    Chandanwari are the largest variable costs on a Pahalgam
                    trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Pahalgam</h2>
                  <ul>
                    <li>
                      <strong>Book local taxis through unions:</strong>
                      Betaab Valley, Aru, and Chandanwari all use fixed local
                      taxi-union rates — book through your hotel rather than
                      negotiating individually.
                    </li>
                    <li>
                      <strong>Negotiate pony rates upfront:</strong> Pony rides
                      at Baisaran and within the valleys have posted union
                      rates — confirm the price and route before setting off.
                    </li>
                    <li>
                      <strong>Pack layers regardless of season:</strong>
                      Chandanwari and Aru run noticeably colder than Pahalgam
                      town even in peak summer.
                    </li>
                    <li>
                      <strong>Plan around Amarnath Yatra dates if avoiding
                      crowds:</strong> July and August bring heavier traffic
                      and fuller hotels due to yatra logistics.
                    </li>
                    <li>
                      <strong>Check current travel advisories:</strong>
                      As with the rest of Jammu and Kashmir, conditions can
                      shift — check official advisories before booking
                      non-refundable travel.
                    </li>
                    <li>
                      <strong>Carry cash for smaller towns:</strong> Card
                      acceptance thins out beyond Pahalgam's main market —
                      withdraw cash in Srinagar before heading up.
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
                          "Book Srinagar–Pahalgam taxis through registered unions",
                          "Spend at least one night to cover all three valleys",
                          "Carry a warm layer even for a summer Chandanwari trip",
                          "Confirm pony and taxi rates before starting out",
                          "Visit Baisaran meadow for a quieter half-day option",
                          "Check current travel advisories before booking",
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
                          "Try to cover all three valleys in a single rushed day",
                          "Ignore layering for Chandanwari's higher altitude",
                          "Book non-refundable travel without checking advisories",
                          "Skip confirming pony or taxi rates in advance",
                          "Visit in July-August expecting Gulmarg-level solitude",
                          "Rely on cards outside Pahalgam's main market",
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
                        q: "How many days are needed for Pahalgam?",
                        a: "Two to three days is enough to cover Betaab Valley, Aru Valley, Chandanwari, and Baisaran meadow at a relaxed pace, with a night or two along the Lidder River. A single day trip from Srinagar is possible but only allows time for one or two of the valleys.",
                      },
                      {
                        q: "Is Pahalgam better than Gulmarg?",
                        a: "They serve different purposes rather than one being objectively better. Gulmarg is built around its gondola, snow, and skiing, while Pahalgam is quieter, greener, and centred on river valleys, meadows, and gentle treks. Most Kashmir itineraries include both rather than choosing between them.",
                      },
                      {
                        q: "What is the distance between Srinagar and Pahalgam?",
                        a: "Pahalgam is roughly 90 to 95 km from Srinagar, a drive of about 2.5 to 3 hours via Anantnag on generally good roads. It's a common day-trip distance, though an overnight stay is worthwhile to properly cover the surrounding valleys.",
                      },
                      {
                        q: "Is Pahalgam safe for family trips?",
                        a: "Pahalgam is a well-established, family-friendly tourism town with a strong local infrastructure for hotels, taxis, and guided pony or trekking routes. As with anywhere in Jammu and Kashmir, it's worth checking current travel advisories before booking, but Pahalgam itself sees consistently high family and group tourist traffic.",
                      },
                      {
                        q: "What is famous in Pahalgam?",
                        a: "Pahalgam is best known for Betaab Valley (named after the 1983 Bollywood film shot there), Aru Valley as a trekking base, Chandanwari as the traditional starting point of the Amarnath Yatra, the Lidder River, and Baisaran meadow, often called 'mini Switzerland'. It has also been a backdrop for dozens of Hindi films over the decades.",
                      },
                      {
                        q: "Can I visit Chandanwari without joining the Amarnath Yatra?",
                        a: "Yes. Chandanwari is open to regular tourists year-round as a scenic valley and picnic spot, separate from the Amarnath Yatra registration process. Outside the yatra season, it's simply another stop on the Pahalgam sightseeing circuit, known for its snow bridge and river views.",
                      },
                      {
                        q: "Is Pahalgam open in winter?",
                        a: "Pahalgam stays open through winter and receives snowfall from December to February, though it's far less crowded and colder than the peak April-to-June season. Some higher points like Chandanwari can be snowbound or harder to reach, but the town itself and Betaab Valley remain accessible.",
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
                        <p className="text-sm text-stone-600 leading-relaxed m-0">
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
                  "Pahalgam",
                  "Jammu and Kashmir",
                  "Kashmir",
                  "Betaab Valley",
                  "Aru Valley",
                  "Chandanwari",
                  "Amarnath Yatra",
                  "Lidder River",
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
                destination="Pahalgam"
              />

              <RelatedPostsGrid currentSlug="pahalgam-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="pahalgam-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
