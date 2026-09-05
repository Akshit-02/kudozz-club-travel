// src/app/blog/loktak-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Loktak Lake Travel Guide: Phumdis, Sendra & Boating",
  description:
    "The complete Loktak Lake travel guide — floating phumdi islands, fishing villages built on the water, Sendra's viewpoint, Keibul Lamjao's floating national park, boating, best time to visit, and full trip planning.",
  keywords:
    "Loktak Lake travel guide, phumdi, floating islands Manipur, Sendra Island, Keibul Lamjao National Park, Sangai deer, Loktak Lake boating, Moirang, best time Loktak Lake, largest freshwater lake Northeast India",
  openGraph: {
    title: "Loktak Lake Travel Guide: Phumdis, Sendra & Boating",
    description:
      "Floating masses of vegetation drifting across Northeast India's largest freshwater lake, fishing huts built right on the water — the complete guide to Loktak Lake.",
    url: "https://club.kudozz.in/blog/loktak-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake water reflecting green hills, evoking Manipur's Loktak Lake",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Loktak Lake Travel Guide: Phumdis, Sendra & Boating",
    description:
      "Floating islands, fishing huts on the water, and the world's only floating national park — the complete Loktak Lake guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/loktak-lake-travel-guide",
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
          headline: "Loktak Lake Travel Guide: Phumdis, Sendra & Boating",
          description:
            "The complete Loktak Lake travel guide — floating phumdi islands, fishing villages on the water, Sendra's viewpoint, Keibul Lamjao's floating national park, and boating.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/loktak-lake-travel-guide",
          },
          keywords:
            "Loktak Lake, phumdi, Manipur, Sendra Island, Keibul Lamjao",
          about: {
            "@type": "Place",
            name: "Loktak Lake",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Manipur",
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
                name: "Manipur",
                item: "https://club.kudozz.in/blog/manipur-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Loktak Lake",
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
    q: "What is Loktak Lake famous for?",
    a: "Loktak Lake is the largest freshwater lake in Northeast India, famous for its phumdis — floating masses of vegetation, soil, and organic matter that drift across the water, some thick enough to support fishing huts and even small settlements. It's also home to Keibul Lamjao National Park, the world's only floating national park.",
  },
  {
    q: "What is a phumdi?",
    a: "A phumdi is a floating mass of vegetation, soil, and organic matter that drifts across Loktak Lake. Fishing communities build circular huts called athaphum on the thicker phumdis and fish from them using traditional circular nets, and the thickest phumdis form the base of Keibul Lamjao National Park.",
  },
  {
    q: "How do I get to Loktak Lake?",
    a: "Loktak Lake is roughly 48 km from Imphal, reachable by hired car or taxi in under two hours. Most visitors pass through the nearby town of Moirang, the main gateway for Sendra and lake access. Visitors from outside Manipur need an Inner Line Permit (ILP), required since December 2019.",
  },
  {
    q: "What is the best time to visit Loktak Lake?",
    a: "November to March offers the clearest weather and the most comfortable boat rides. The lake can technically be visited year-round, but it's best to avoid the heavy monsoon months of June to August, when water levels rise and conditions on the water are less pleasant.",
  },
  {
    q: "Can I see the Sangai deer at Loktak Lake?",
    a: "Yes — the endangered Sangai (Manipur brow-antlered deer), Manipur's state animal, lives within Keibul Lamjao National Park, the floating national park set inside Loktak Lake. Early morning boat trips give the best chance of a sighting; see our dedicated Keibul Lamjao guide for details.",
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
  { id: "introduction", title: "Northeast India's Floating Lake", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Loktak Lake", level: 2 },
  { id: "things-to-do", title: "Things to Do at Loktak Lake", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food Near the Lake", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LoktakLakeGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Calm lake water reflecting green hills, evoking Manipur's Loktak Lake"
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
                { label: "Manipur", href: "/blog/manipur-travel-guide" },
                { label: "Loktak Lake", href: null },
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
              {["Manipur", "Loktak Lake", "Phumdi"].map((tag) => (
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
              Loktak Lake: Floating Islands & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Northeast India's largest freshwater lake, where floating
              islands of vegetation drift across the water and fishing
              families build huts right on top of them.
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
                  text: "Near Moirang, Manipur",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Northeast India's Floating Lake</h2>
                  <p>
                    <strong>Loktak Lake</strong> is the largest freshwater
                    lake in Northeast India, and one of the region's most
                    genuinely unusual natural sights. It's famous for its{" "}
                    <strong>phumdis</strong> — floating masses of vegetation,
                    soil, and organic matter that drift across the lake's
                    surface, some thick enough to support fishing huts
                    (locally called <em>athaphum</em>) and even small
                    settlements built directly on top of them.
                  </p>
                  <p>
                    Fishing communities live and work from these floating
                    platforms, casting traditional circular nets into the
                    water around them — a way of life found in very few
                    other places on earth.
                  </p>
                  <p>
                    Within the lake sits{" "}
                    <Link href="/blog/keibul-lamjao-travel-guide">
                      Keibul Lamjao National Park
                    </Link>
                    , made entirely of floating phumdis — the world's only
                    floating national park, and home to the endangered Sangai
                    (Manipur brow-antlered deer), the state animal.
                  </p>
                  <p>
                    The lake sits near the town of{" "}
                    <Link href="/blog/moirang-travel-guide">Moirang</Link>,
                    roughly 48 km from{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link>, and
                    most visitors combine all three in a single day trip or
                    overnight excursion from the capital.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛶</span> Loktak Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "Near Moirang, Manipur" },
                        { icon: "🚗", label: "From Imphal", value: "~48 km" },
                        { icon: "🌾", label: "Known For", value: "Floating Phumdis" },
                        { icon: "🦌", label: "Wildlife", value: "Sangai Deer" },
                        { icon: "🏞️", label: "Viewpoint", value: "Sendra Hillock" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Mar" },
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
                  <h2>Best Time to Visit Loktak Lake</h2>
                  <p>
                    Loktak Lake can technically be visited year-round, but
                    clear weather makes a real difference to how much you'll
                    enjoy the boat ride and the views from Sendra.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear, dry weather with calm water — the most reliable window for a comfortable boat ride and good visibility across the phumdis.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still visitable",
                        text: "Warmer temperatures but still a reasonable window before the monsoon sets in, with fewer crowds than peak winter.",
                      },
                      {
                        season: "Jun – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rainfall raises water levels and can make boat access less predictable — not the best window for the full experience.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🌥️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Post-monsoon transition",
                        text: "Water levels start settling and skies clear up gradually as the region heads into its best season.",
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
                    <strong>Our pick:</strong> November to March for the
                    clearest weather and calmest water — avoid the heavy
                    monsoon months of June to August if your dates are
                    flexible.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Loktak Lake</h2>
                  <ul>
                    <li>
                      <strong>From Imphal:</strong> Loktak Lake is roughly 48
                      km from{" "}
                      <Link href="/blog/imphal-travel-guide">Imphal</Link>,
                      about an hour and a half by hired car or taxi — the
                      standard way most visitors reach the lake.
                    </li>
                    <li>
                      <strong>Via Moirang:</strong> Most access points,
                      including Sendra, are reached via{" "}
                      <Link href="/blog/moirang-travel-guide">Moirang</Link>,
                      the main gateway town on the lake's shore.
                    </li>
                    <li>
                      <strong>Local transport:</strong> Public transport
                      options are limited and slow — a private vehicle or
                      organized day trip from Imphal is far more practical.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hire a car with a driver for
                    the day from Imphal — it lets you combine Loktak Lake,
                    Sendra, and Moirang without depending on unreliable local
                    transport.
                  </div>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Inner Line Permit:</strong> Visitors from
                    outside Manipur need an Inner Line Permit (ILP), required
                    since December 2019 — arrange this before traveling to
                    the state.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do at Loktak Lake</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Calm lake water reflecting green hills, evoking Manipur's Loktak Lake"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Sendra Hillock</h3>
                  <p>
                    A hillock/island on the lake with a viewpoint and a
                    tourism park overlooking the phumdis — the classic photo
                    spot and the usual starting point for boat rides across
                    the lake.
                  </p>
                  <h3>Boating Across the Phumdis</h3>
                  <p>
                    Dugout and motorboats take visitors out through the
                    floating phumdis and past fishing villages built directly
                    on the water — a genuinely unusual sight that's the main
                    draw of a Loktak visit.
                  </p>
                  <h3>Fishing Villages on the Water</h3>
                  <p>
                    Fishing communities live and fish from floating platforms
                    using traditional circular nets, moving with the drifting
                    phumdis rather than a fixed shoreline settlement.
                  </p>
                  <h3>Keibul Lamjao National Park</h3>
                  <p>
                    Set within the lake and made of phumdis, this is the
                    world's only floating national park and home to the
                    endangered Sangai deer. See our dedicated{" "}
                    <Link href="/blog/keibul-lamjao-travel-guide">
                      Keibul Lamjao guide
                    </Link>{" "}
                    for a full visit plan.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Dedicated tourist accommodation directly on Loktak Lake
                    is limited — most visitors either base themselves in{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link> and
                    day-trip out, or stay overnight in{" "}
                    <Link href="/blog/moirang-travel-guide">Moirang</Link>.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Lakeside",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Sendra tourism park stays",
                          "Basic guesthouses, Moirang",
                          "Limited homestays",
                        ],
                      },
                      {
                        tier: "Moirang Town",
                        icon: "🏨",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Small local hotels",
                          "Basic guesthouses",
                        ],
                      },
                      {
                        tier: "Imphal (Day Trip Base)",
                        icon: "🏛️",
                        range: "₹1,000–₹7,000/night",
                        picks: [
                          "Wider hotel selection",
                          "All budget tiers available",
                          "~1.5 hrs from the lake",
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
                    Most travelers get the best of both worlds by basing
                    themselves in Imphal and treating Loktak Lake and Moirang
                    as a single, unhurried day trip.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Full Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Imphal to Sendra",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Imphal (~1.5 hrs)",
                          "Sendra Hillock viewpoint and tourism park",
                          "Boat ride through the phumdis",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Keibul Lamjao & Fishing Villages",
                        color: "bg-sky-600",
                        activities: [
                          "Boat ride toward Keibul Lamjao National Park",
                          "Look for the Sangai deer",
                          "Pass floating fishing villages",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Moirang & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Stop in Moirang for the INA Memorial Complex",
                          "Return drive to Imphal",
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
                    For a slower pace, stay overnight near{" "}
                    <Link href="/blog/moirang-travel-guide">Moirang</Link>{" "}
                    and split the lake and the INA Memorial across two
                    half-days. See the full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for how this fits into a longer state-wide itinerary.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food Near the Lake</h2>
                  <ul>
                    <li>
                      <strong>Fresh lake fish:</strong> Small eateries around
                      Sendra and Moirang serve fish caught directly from
                      Loktak Lake, often in simple curries.
                    </li>
                    <li>
                      <strong>Eromba and singju:</strong> Standard Meitei
                      staples — mashed vegetables with fermented fish, and a
                      tangy shredded salad — are widely available in the
                      area.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Options thin
                      out away from Sendra and Moirang's small commercial
                      strip, so it's worth carrying your own supplies for the
                      day.
                    </li>
                    <li>
                      <strong>Eat well in Imphal before or after:</strong> A
                      wider range of Manipuri dishes, including chak-hao
                      kheer, is easier to find back in the capital.
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
                          ["Car hire from Imphal (day)", "₹2,000", "₹3,500", "₹6,000"],
                          ["Boat ride (per boat)", "₹500", "₹1,000", "₹2,000"],
                          ["Entry/park fees", "₹50", "₹100", "₹200"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
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
                    * Boat rides are typically charged per boat rather than
                    per person, so costs work out cheaper in a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Loktak Lake</h2>
                  <ul>
                    <li>
                      <strong>Book boats through official counters:</strong>{" "}
                      Sendra and the Keibul Lamjao access points have
                      designated boat operators — use these for a safer,
                      fairly priced ride.
                    </li>
                    <li>
                      <strong>Go early morning:</strong> Calmer water and
                      better light for photography, plus a better chance of
                      spotting the Sangai deer near Keibul Lamjao.
                    </li>
                    <li>
                      <strong>Carry your Inner Line Permit:</strong> Required
                      for visitors from outside Manipur since December 2019.
                    </li>
                    <li>
                      <strong>Pack mosquito repellent:</strong> The lake's
                      wetland setting makes mosquitoes a genuine factor,
                      especially at dawn and dusk.
                    </li>
                    <li>
                      <strong>Don't rush it:</strong> Set aside a full day
                      rather than a quick two-hour stop — the boat ride and
                      the phumdi villages are worth taking slowly.
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
                          "Book boat rides through official counters",
                          "Go early morning for calm water and wildlife",
                          "Carry your Inner Line Permit",
                          "Pack mosquito repellent for the wetland setting",
                          "Combine the lake with a Moirang stop",
                          "Set aside a full day rather than rushing it",
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
                          "Book informal, unlicensed boat operators",
                          "Visit during the heaviest monsoon months if avoidable",
                          "Rely on public transport to reach the lake",
                          "Skip mosquito precautions around the wetlands",
                          "Step onto thin phumdis away from marked paths",
                          "Rush the visit into a couple of hours",
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
                    <strong>🗺️ Extend the trip:</strong> Base yourself in{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link> and
                    pair Loktak Lake with{" "}
                    <Link href="/blog/moirang-travel-guide">Moirang</Link>{" "}
                    and{" "}
                    <Link href="/blog/keibul-lamjao-travel-guide">
                      Keibul Lamjao National Park
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for the wider state itinerary.
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
                {["Manipur", "Loktak Lake", "Phumdi"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="loktak-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="loktak-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
