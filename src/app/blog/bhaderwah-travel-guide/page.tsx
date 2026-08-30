// src/app/blog/bhaderwah-travel-guide/page.tsx
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
  title: "Bhaderwah Travel Guide: J&K's Mini Kashmir",
  description:
    "Complete Bhaderwah travel guide: explore Jammu & Kashmir's Mini Kashmir in Doda district — Jai Valley, Chinta Valley, Padri, best time, and a 2-day itinerary.",
  keywords:
    "Bhaderwah travel guide, Bhaderwah mini Kashmir, Jai Valley Bhaderwah, Bhaderwah distance from Jammu, best time to visit Bhaderwah, Chinta Valley, Padri Bhaderwah, Vasuki Nag Temple, Doda district Jammu Kashmir, Chota Kashmir, Seoj Dhar Bhaderwah",
  openGraph: {
    title: "Bhaderwah Travel Guide: J&K's Mini Kashmir",
    description:
      "Terraced meadows, glacier-fed valleys, and a snow point toward Chamba — Bhaderwah is the Doda district valley locals call 'Mini Kashmir.'",
    url: "https://club.kudozz.in/blog/bhaderwah-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Terraced green fields and forested hills in the Bhaderwah valley, Doda district",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaderwah Travel Guide: J&K's Mini Kashmir",
    description:
      "Terraced meadows, glacier-fed valleys, and a snow point toward Chamba — Bhaderwah is the Doda district valley locals call 'Mini Kashmir.'",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bhaderwah-travel-guide",
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Bhaderwah Travel Guide: J&K's Mini Kashmir",
          description:
            "Complete Bhaderwah travel guide covering Jai Valley, Chinta Valley, Padri, Vasuki Nag Temple, best time to visit, how to reach, and a 2-day itinerary.",
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
            "@id": "https://club.kudozz.in/blog/bhaderwah-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Bhaderwah",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bhaderwah",
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
              { "@type": "ListItem", position: 4, name: "Bhaderwah" },
            ],
          },
        }),
      }}
    />
  );
}

// ── JSON-LD: FAQ ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Why is Bhaderwah called Mini Kashmir?",
    a: "Bhaderwah earned the nickname \"Mini Kashmir\" (also \"Chota Kashmir\") because its terraced green meadows, pine and deodar forests, and glacier-fed streams closely resemble the scenery of the Kashmir Valley — but the town sits in Doda district, south of the Pir Panjal range, and sees a fraction of the tourist footfall Srinagar or Gulmarg get.",
  },
  {
    q: "How far is Bhaderwah from Jammu?",
    a: "Bhaderwah is roughly 200 km from Jammu, a drive of about 6–7 hours via Udhampur, Batote, and the Chenab valley road. Many travellers break the journey with a stop at Patnitop, which sits almost exactly halfway along the route.",
  },
  {
    q: "Is Bhaderwah good for snow?",
    a: "Bhaderwah town gets light snowfall in some winters, but the reliable snow destination is Padri, about 40 km away, which is blanketed in heavy snow from December through February and is one of the region's better spots for snow play and short ski outings.",
  },
  {
    q: "What is the best time to visit Bhaderwah?",
    a: "April to June and September to October are the best months, with mild days, clear skies, and meadows at their greenest. December to February suits travellers chasing snow at Padri, though several higher roads close for the season.",
  },
  {
    q: "Is Padri near Bhaderwah?",
    a: "Yes. Padri is about 40 km from Bhaderwah town, connected by a scenic mountain road that continues onward toward Chamba district in Himachal Pradesh. It's a popular day trip from Bhaderwah for snow, meadows, and paragliding in season.",
  },
  {
    q: "What is Jai Valley famous for?",
    a: "Jai Valley is a glacier-fed alpine meadow about 25 km from Bhaderwah, known locally as a picnic and camping spot. Streams cut through open grassland ringed by forested slopes, and it's one of the two signature valley excursions from Bhaderwah, alongside Chinta Valley.",
  },
  {
    q: "Do I need permits to visit Bhaderwah?",
    a: "No special permit is required for Indian tourists to visit Bhaderwah town, Jai Valley, or Chinta Valley. Foreign nationals should carry standard ID and check current local advisories, as with any travel in the wider Jammu & Kashmir region.",
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
  { id: "introduction", title: "Why Visit Bhaderwah?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bhaderwah", level: 2 },
  { id: "top-places", title: "Top Places to Visit", level: 2 },
  { id: "jai-valley", title: "→ Jai Valley", level: 3 },
  { id: "chinta-valley", title: "→ Chinta Valley", level: 3 },
  { id: "padri", title: "→ Padri Snow Point", level: 3 },
  { id: "vasuki-nag-temple", title: "→ Vasuki Nag Temple", level: 3 },
  { id: "seoj-dhar", title: "→ Seoj Dhar Meadow", level: 3 },
  { id: "culture", title: "Local Culture", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BhaderwahGuidePage() {
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
              alt="Terraced green fields and forested hills in the Bhaderwah valley, Doda district"
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
                { label: "Bhaderwah", href: null },
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
                "Bhaderwah",
                "Jammu & Kashmir",
                "Mini Kashmir",
                "Doda District",
                "Jai Valley",
                "Padri",
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
              Bhaderwah Travel Guide: Exploring Kashmir's Mini Kashmir
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Terraced meadows, deodar forests, and glacier-fed valleys tucked
              into Doda district — the town locals call "Chota Kashmir" is one
              of Jammu & Kashmir's quietest, most rewarding detours.
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
                  text: "Doda District, Jammu & Kashmir",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,500 words",
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
                  <h2>Why Visit Bhaderwah?</h2>
                  <p>
                    Ask most Indian travellers about <strong>Bhaderwah</strong>{" "}
                    and you'll get a blank look. That's precisely the point.
                    Set at roughly 1,650 metres in the <strong>Doda</strong>{" "}
                    district of Jammu & Kashmir, on the banks of the Neru
                    stream and cradled by the Bhaderwah Kailash range, this
                    valley town earned the nickname{" "}
                    <strong>"Mini Kashmir"</strong> — or "Chota Kashmir" — for
                    a reason that becomes obvious the moment you arrive:
                    terraced green fields, pine and deodar forests, and
                    snow-fed streams that could pass for the Kashmir Valley
                    proper, minus the crowds.
                  </p>
                  <p>
                    Bhaderwah sits south of the Pir Panjal range, which makes
                    it geographically and administratively distinct from
                    Srinagar's valley circuit even though the scenery rhymes.
                    It's covered in our broader{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir travel guide
                    </Link>
                    , but deserves a dedicated one — the two signature side
                    valleys, Jai Valley and Chinta Valley, plus the snow point
                    at Padri and the pilgrimage draw of the Vasuki Nag Temple,
                    make Bhaderwah a genuinely self-contained 2–3 day trip
                    rather than a quick stopover.
                  </p>
                  <p>
                    What sets Bhaderwah apart from Kashmir's marquee
                    destinations isn't just the lower footfall — it's the
                    pace. There are no gondolas or ski lifts here, no
                    houseboat touts at the bus stand. Just meadows, shepherd
                    trails, and a small town that still runs on its own
                    rhythm.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Bhaderwah at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Doda, J&K" },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~1,650 m",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Apr–Jun, Sep–Oct",
                        },
                        {
                          icon: "❄️",
                          label: "Snow (Padri)",
                          value: "Dec – Feb",
                        },
                        {
                          icon: "🚗",
                          label: "From Jammu",
                          value: "~200 km, 6–7 hrs",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Bhaderwah</h2>
                  <p>
                    Bhaderwah has two distinct high seasons — one for green
                    valleys, one for snow — and picking the right one depends
                    entirely on what you're chasing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌿",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Peak greenery — our pick",
                        text: "Meadows at Jai Valley and Chinta Valley turn fully green, days are mild (15–25°C), and the roads to Padri and Seoj Dhar are fully open.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon & the Vasuki Nag Mela",
                        text: "Short spells of rain and lush landscapes, but also the busiest local season — the Vasuki Nag Mela draws large crowds from across the region.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear skies, quiet trails",
                        text: "Post-monsoon clarity, cooler nights, and by far the least crowded window for Jai Valley and Seoj Dhar — a strong alternative to spring.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Snow season at Padri",
                        text: "Bhaderwah town sees occasional light snow; Padri, 40 km away, gets buried in it — the region's best bet for snow play without the Gulmarg crowds.",
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
                    <strong>Our pick:</strong> Late April through June for
                    green meadows and open roads to every viewpoint, or
                    January if a quieter, less-commercial snow trip toward
                    Padri sounds better than fighting Gulmarg's gondola
                    queues.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bhaderwah</h2>
                  <p>
                    Bhaderwah has no airport or railhead of its own — every
                    route in runs through <strong>Jammu</strong>, by road.
                  </p>
                  <ul>
                    <li>
                      <strong>From Jammu (~200 km, 6–7 hrs):</strong> The
                      standard route runs via Udhampur, Batote, and the
                      Chenab valley road to Doda, then on to Bhaderwah. Start
                      early — the last stretch through the hills is slow but
                      scenic. Read our{" "}
                      <Link href="/blog/jammu-travel-guide">
                        Jammu travel guide
                      </Link>{" "}
                      if you're basing your trip out of the city first.
                    </li>
                    <li>
                      <strong>Via Patnitop:</strong> Many travellers break the
                      Jammu–Bhaderwah drive at{" "}
                      <Link href="/blog/patnitop-travel-guide">Patnitop</Link>
                      , which sits almost exactly midway and makes a natural
                      overnight stop before continuing on to Doda and
                      Bhaderwah the next morning.
                    </li>
                    <li>
                      <strong>By Air:</strong> Jammu Airport is the nearest
                      airport, with regular flights from Delhi and other
                      major cities. From Jammu, hire a cab or take a shared
                      Sumo/bus onward to Bhaderwah.
                    </li>
                    <li>
                      <strong>By Train:</strong> Jammu Tawi is the nearest
                      railhead, well connected to Delhi. There's no rail link
                      beyond Jammu — the rest of the journey is by road.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The Chenab valley road has
                    tight curves and can be slow after rain or in early
                    winter — build in a buffer rather than trying to reach
                    Bhaderwah the same evening you leave Jammu, especially if
                    you're starting after noon.
                  </div>
                </section>

                {/* ── Top Places ──────────────────────────────────────────── */}
                <section id="top-places">
                  <h2>Top Places to Visit in Bhaderwah</h2>
                  <p>
                    Bhaderwah's appeal is almost entirely about what surrounds
                    the town — two signature valleys, a snow point toward
                    Himachal, a well-known local temple, and a high meadow
                    that few outside the region have heard of.
                  </p>

                  {/* Jai Valley */}
                  <section id="jai-valley">
                    <h3>Jai Valley</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/jammu-kashmir/hero.jpg"
                        alt="Glacier-fed meadow and stream at Jai Valley near Bhaderwah"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      About 25 km from Bhaderwah town, <strong>Jai Valley</strong>{" "}
                      is a glacier-fed meadow that feeds the Neru stream — a
                      wide stretch of open grassland ringed by forested
                      slopes, with cold, clear water running through it even
                      in peak summer. It's the most popular local picnic and
                      camping spot in the area, and for good reason: the drive
                      up climbs through pine forest before opening into the
                      meadow itself.
                    </p>
                    <p>
                      Basic camping is possible in season, and short walks
                      along the stream reward you with views back down toward
                      the valley floor. Weekends can get busy with local
                      visitors, so a weekday trip or an early start makes for
                      a quieter experience.
                    </p>
                  </section>

                  {/* Chinta Valley */}
                  <section id="chinta-valley">
                    <h3>Chinta Valley</h3>
                    <p>
                      Roughly 10 km from town, <strong>Chinta Valley</strong>{" "}
                      is Jai Valley's quieter counterpart — a dense forest of
                      deodar and pine that closes in around a narrow stream,
                      with far fewer visitors on any given day. Where Jai
                      Valley opens into broad meadow, Chinta Valley stays
                      wooded and shaded almost the whole way, which makes it
                      the better pick on a hot afternoon or if you'd rather
                      walk than picnic in a crowd.
                    </p>
                    <p>
                      Both valleys are usually done as half-day trips from
                      Bhaderwah, and pairing them on consecutive mornings is
                      the standard way locals recommend seeing the area — Jai
                      Valley for the open meadow, Chinta Valley for the forest
                      walk.
                    </p>
                  </section>

                  {/* Padri */}
                  <section id="padri">
                    <h3>Padri Snow Point</h3>
                    <p>
                      About 40 km from Bhaderwah, <strong>Padri</strong> is a
                      high mountain pass and snow point on the road toward{" "}
                      <strong>Chamba</strong> district in Himachal Pradesh.
                      From December through February it holds heavy, reliable
                      snow, drawing day-trippers from Bhaderwah for snow play,
                      short ski attempts, and — outside the deep winter months
                      — paragliding off the open slopes. The Bhaderwah–Padri
                      road is one of the more scenic drives in the district,
                      climbing steadily through forest before the tree line
                      thins out.
                    </p>
                    <p>
                      The Padri–Chamba road continues on the far side of the
                      pass, but it's weather-dependent and often shut in
                      winter — treat Padri as a there-and-back day trip from
                      Bhaderwah rather than a through-route unless you've
                      confirmed the road is open.
                    </p>
                  </section>

                  {/* Vasuki Nag Temple */}
                  <section id="vasuki-nag-temple">
                    <h3>Vasuki Nag Temple</h3>
                    <p>
                      Near the village of Kai, a short drive from Bhaderwah,
                      the <strong>Vasuki Nag Temple</strong> is one of the
                      region's most important local pilgrimage sites,
                      dedicated to Vasuki Nag, a serpent deity central to Naga
                      worship traditions across Doda and Kishtwar. The temple
                      hosts a large annual mela (fair) around the month of
                      Sawan (roughly July–August) that draws pilgrims from
                      across the district and beyond — expect a genuinely
                      festive, crowded atmosphere if you visit during that
                      window, and a calm, quiet one at any other time of year.
                    </p>
                    <p>
                      Visitors are welcome outside the mela period; dress
                      modestly and follow the customs observed by local
                      pilgrims, as with any active place of worship in the
                      region.
                    </p>
                  </section>

                  {/* Seoj Dhar */}
                  <section id="seoj-dhar">
                    <h3>Seoj Dhar Meadow</h3>
                    <p>
                      A high-altitude pasture above Bhaderwah, <strong>Seoj Dhar</strong>{" "}
                      is where Gujjar and Bakarwal shepherd families graze
                      livestock through the summer months. It's less visited
                      than Jai or Chinta Valley — reaching it involves more of
                      a trek than a drive — but rewards the effort with wide,
                      open meadow views and a genuine sense of the pastoral
                      life that shapes this part of Doda district. Best
                      attempted with a local guide, since trail conditions and
                      access change with the season.
                    </p>
                  </section>
                </section>

                {/* ── Culture ────────────────────────────────────────────── */}
                <section id="culture">
                  <h2>Local Culture: Bhaderwahi & Gujjar-Bakarwal Life</h2>
                  <p>
                    Bhaderwah has its own dialect, <strong>Bhaderwahi</strong>,
                    distinct from both Kashmiri and Dogri, and its own strand
                    of Pahari folk tradition — the <strong>Kud dance</strong>,
                    performed at festivals and around the Vasuki Nag Mela, is
                    one of the more visible expressions of it.
                  </p>
                  <p>
                    The valley's high meadows, including Jai Valley, Chinta
                    Valley, and Seoj Dhar, are seasonal grazing ground for{" "}
                    <strong>Gujjar and Bakarwal</strong> communities — nomadic
                    and semi-nomadic shepherd groups who move livestock up
                    into the mountains through summer and back down before
                    winter sets in. If you're travelling through in the warmer
                    months, it's common to pass Gujjar and Bakarwal
                    settlements and grazing camps along the routes to the
                    outer valleys — worth a respectful stop and conversation
                    if the timing and welcome align, but not a photo-op to
                    push for.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Bhaderwah</h2>
                  <p>
                    Bhaderwah's accommodation scene is small and mostly local
                    — don't expect Srinagar-style choice, but there's enough
                    for a comfortable stay across budget tiers.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Local guesthouses, town centre",
                          "J&K Tourism huts (booked in advance)",
                          "Basic camping, Jai Valley (in season)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Hotel Kailash View, Bhaderwah",
                          "Private homestays, valley outskirts",
                          "Tourist Reception Centre rooms",
                        ],
                      },
                      {
                        tier: "Upscale",
                        icon: "🏔️",
                        range: "₹5,000–₹9,000/night",
                        picks: [
                          "Better-appointed private resorts",
                          "Seasonal Padri-facing lodges",
                          "Pre-booked group camps, Jai Valley",
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
                    Book ahead if your trip lands on or near the Vasuki Nag
                    Mela in Sawan (July–August) — the town's limited rooms
                    fill quickly during the fair, and prices rise
                    accordingly.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Bhaderwah</h2>
                  <p>
                    Food here leans Dogri and Pahari, with the same
                    mutton-forward, wazwan-adjacent dishes found across the
                    wider Jammu region, alongside simple local staples.
                  </p>
                  <ul>
                    <li>
                      <strong>Rajma-chawal:</strong> A regional staple across
                      Doda and Jammu — kidney bean curry with rice, found at
                      almost every local dhaba.
                    </li>
                    <li>
                      <strong>Kalari:</strong> A local semi-hard cheese,
                      pan-fried and served hot — a genuinely distinctive Doda
                      district specialty worth seeking out.
                    </li>
                    <li>
                      <strong>Mutton curry:</strong> Home-style, less
                      elaborate than Kashmiri wazwan but rich and well-spiced
                      — common at family-run eateries in town.
                    </li>
                    <li>
                      <strong>Kahwa:</strong> The same saffron-cardamom green
                      tea found across the wider Kashmir region, a good
                      warmer after a cold morning in Jai or Chinta Valley.
                    </li>
                    <li>
                      <strong>Maize and wheat breads:</strong> Simple flatbreads
                      from local kitchens, often served with fresh dairy from
                      Gujjar and Bakarwal herds in the area.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Bhaderwah Itinerary</h2>
                  <p>
                    Two days covers the town's two signature valleys and
                    leaves room for either the Vasuki Nag Temple or a longer
                    push to Padri, depending on the season.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival, Jai Valley & Chinta Valley",
                        color: "bg-forest-600",
                        activities: [
                          "Arrive Bhaderwah, check in and settle",
                          "Morning: Drive up to Jai Valley, walk the meadow",
                          "Afternoon: Chinta Valley forest walk",
                          "Evening: Stroll the town, dinner at a local dhaba",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Vasuki Nag Temple or Padri, then Depart",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Vasuki Nag Temple (or Padri day trip, if snow season)",
                          "Midday: Return to Bhaderwah town",
                          "Afternoon: Free time — Seoj Dhar for a short trek if energy allows",
                          "Evening: Depart via Patnitop toward Jammu",
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

                  <p>
                    With a third day, add a full Padri excursion in winter, or
                    a longer Seoj Dhar trek in summer — both work better as a
                    dedicated day than squeezed into the itinerary above. If
                    you're coming from or continuing on to the{" "}
                    <Link href="/blog/katra-travel-guide">
                      Vaishno Devi route via Katra
                    </Link>
                    , Bhaderwah pairs reasonably well as an add-on for
                    travellers with an extra 2–3 days to spare on either side
                    of a Jammu-based pilgrimage trip.
                  </p>
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
                          {["Expense", "Budget", "Mid-Range", "Upscale"].map(
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹7,000"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          [
                            "Local transport (Jai/Chinta Valley, Padri)",
                            "₹800",
                            "₹1,800",
                            "₹3,000",
                          ],
                          ["Guide / camping (optional)", "₹300", "₹800", "₹1,500"],
                          ["Daily total", "₹2,500", "₹6,500", "₹13,300"],
                          [
                            "2-Day trip total",
                            "₹5,000",
                            "₹13,000",
                            "₹26,600",
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
                    * Excludes travel to/from Jammu. Cab hire for Jai Valley,
                    Chinta Valley, and Padri day trips is typically the
                    largest variable cost, since Bhaderwah itself has no local
                    public transport network to speak of.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Bhaderwah</h2>
                  <ul>
                    <li>
                      <strong>Arrange local transport in advance:</strong>{" "}
                      Bhaderwah has no ride-hailing apps and limited shared
                      transport — book a local cab through your hotel for Jai
                      Valley, Chinta Valley, and Padri trips.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs in Bhaderwah town can
                      run out during busy periods, and card acceptance is
                      limited outside a handful of shops.
                    </li>
                    <li>
                      <strong>Check the Padri road before setting out:</strong>{" "}
                      Conditions change quickly with weather, especially near
                      winter — confirm with your hotel or local drivers the
                      same morning.
                    </li>
                    <li>
                      <strong>Pack for cold regardless of season:</strong>{" "}
                      Evenings in Bhaderwah and especially at Jai Valley or
                      Padri drop noticeably even in summer — carry a proper
                      layer.
                    </li>
                    <li>
                      <strong>Time your trip around the Vasuki Nag Mela deliberately:</strong>{" "}
                      Either plan to experience it (book early) or avoid the
                      Sawan window if you'd rather have the valleys to
                      yourself.
                    </li>
                    <li>
                      <strong>Combine with Patnitop or Jammu:</strong> Since
                      Bhaderwah has no airport of its own, most itineraries
                      pair it with a night in{" "}
                      <Link href="/blog/patnitop-travel-guide">Patnitop</Link>{" "}
                      on the way in or out.
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
                          "Book a local cab in advance for valley day trips",
                          "Carry enough cash for the full trip",
                          "Start early for Jai Valley and Padri to beat weekend crowds",
                          "Pack warm layers even for a summer visit",
                          "Try kalari cheese and local Doda-style dishes",
                          "Dress modestly at the Vasuki Nag Temple",
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
                          "Expect Srinagar-level accommodation choice or nightlife",
                          "Attempt Seoj Dhar without a local guide",
                          "Drive the Padri road in poor weather without checking first",
                          "Rely on cards outside a handful of shops in town",
                          "Push for photos at Gujjar-Bakarwal camps uninvited",
                          "Skip booking ahead during the Vasuki Nag Mela",
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
                  "Bhaderwah",
                  "Jammu and Kashmir",
                  "Mini Kashmir",
                  "Doda District",
                  "Jai Valley",
                  "Chinta Valley",
                  "Padri",
                  "Vasuki Nag Temple",
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
                destination="Bhaderwah"
              />

              <RelatedPostsGrid currentSlug="bhaderwah-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bhaderwah-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
