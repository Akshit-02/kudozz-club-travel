// src/app/blog/nainital-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nainital Travel Guide: Naini Lake, Views & Tips",
  description:
    "Complete Nainital guide — Naini Lake boating, Naina Devi Temple, Naina Peak's cable car, how to reach from Kathgodam, where to stay, and a full visit plan.",
  keywords:
    "Nainital, Naini Lake, Naina Devi Temple, Nainital Kumaon, Snow View Point, Naina Peak, Tiffin Top, how to reach Nainital, Nainital best time to visit, Kathgodam to Nainital, Uttarakhand hill station",
  openGraph: {
    title: "Nainital Travel Guide: Naini Lake, Views & Tips",
    description:
      "Kumaon's most iconic hill station, built around the crescent-shaped Naini Lake — boating, temple, cable car viewpoints, and the gateway to the wider Kumaon circuit.",
    url: "https://club.kudozz.in/blog/nainital-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Naini Lake ringed by forested hills at Nainital, Kumaon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nainital Travel Guide: Naini Lake, Views & Tips",
    description:
      "Naini Lake, Naina Devi Temple, and cable car viewpoints — the complete Nainital guide and gateway to the Kumaon hill circuit.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nainital-travel-guide",
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
          headline: "Nainital Travel Guide: Naini Lake, Views & Tips",
          description:
            "Complete Nainital guide — Naini Lake boating, Naina Devi Temple, Naina Peak's cable car, how to reach from Kathgodam, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/nainital-travel-guide",
          },
          keywords:
            "Nainital, Naini Lake, Naina Devi Temple, Kumaon, Snow View Point, Naina Peak",
          about: {
            "@type": "Place",
            name: "Nainital",
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
                name: "Nainital",
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
    q: "Is Naini Lake a Shakti Peeth?",
    a: "Yes. Naini Lake is associated with one of the Shakti Peethas of Hindu tradition, and the Naina Devi Temple on its northern shore marks the spot. Local belief holds the lake formed where the eyes (nain) of the goddess Sati fell, which also gives the town and lake their name.",
  },
  {
    q: "How do I reach Nainital from Delhi?",
    a: "The most common route is an overnight train or a day drive to Kathgodam, the nearest railway station at about 35 km, followed by a roughly 1.5-hour taxi or bus ride up to Nainital. The full road journey from Delhi is about 300 km and takes 7-8 hours depending on traffic.",
  },
  {
    q: "Can you go boating on Naini Lake?",
    a: "Yes, boating is one of Nainital's signature activities — both paddle boats and larger rowed boats operate from the Mallital and Tallital ghats on the lake, with fixed time-slot rides available throughout the day.",
  },
  {
    q: "How many days should I spend in Nainital?",
    a: "2 days covers the lake, Mall Road, and one or two viewpoints comfortably. If you plan to use Nainital as a base to explore the wider Kumaon circuit — Bhimtal, Sattal, or a day trip toward Mukteshwar — 3-4 days gives a more relaxed pace.",
  },
  {
    q: "Is Nainital crowded in peak season?",
    a: "Yes, considerably — summer (May-June) and major holiday weekends bring heavy tourist traffic and congestion around the lake and Mall Road. Visiting in the shoulder months of March-April or September-November gives a noticeably calmer experience with similarly good weather.",
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
  { id: "introduction", title: "Kumaon's Lake Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nainital", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NainitalGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Naini Lake ringed by forested hills at Nainital, Kumaon"
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
                { label: "Nainital", href: null },
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
                "Nainital",
                "Naini Lake",
                "Uttarakhand",
                "Kumaon",
                "Hill Station",
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
              Nainital: Naini Lake, Views & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Kumaon's best-known hill station, wrapped around the
              crescent-shaped Naini Lake — temple ghats, boating, cable-car
              viewpoints, and the gateway to the wider Kumaon hill circuit.
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
                  text: "Kumaon Himalayas, Uttarakhand",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,500 words",
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
                  <h2>Kumaon's Lake Town</h2>
                  <p>
                    <strong>Nainital</strong> is the flagship hill station of
                    the Kumaon region of{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>
                    , built entirely around a striking crescent-shaped body
                    of water — <strong>Naini Lake</strong> — that gives the
                    town both its name and its centre of gravity. Discovered
                    by the British in 1841 and rapidly developed into a
                    summer capital for the United Provinces, it retains a
                    layout still shaped by that colonial-era planning:
                    Mallital and Tallital townships at either end of the
                    lake, connected by the promenade of Mall Road running
                    along its eastern shore.
                  </p>
                  <p>
                    The lake itself carries religious significance as one of
                    the Shakti Peethas, marked by the{" "}
                    <strong>Naina Devi Temple</strong> on its northern bank —
                    a working temple that draws pilgrims alongside the
                    tourists boating just offshore. Ringed by forested hills
                    on all sides, with several named viewpoints reachable by
                    short hikes or cable car, Nainital packs a lot of
                    hill-station variety into a fairly compact town.
                  </p>
                  <p>
                    It's also the natural jumping-off point for the wider
                    Kumaon hill circuit — smaller, quieter towns like{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link>,{" "}
                    <Link href="/blog/ranikhet-travel-guide">Ranikhet</Link>,
                    and{" "}
                    <Link href="/blog/mukteshwar-travel-guide">
                      Mukteshwar
                    </Link>{" "}
                    are all a half-day's drive or less, along with the lower
                    lake towns of Bhimtal and Sattal.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Nainital at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Kumaon Himalayas, Uttarakhand",
                        },
                        {
                          icon: "🚉",
                          label: "From Kathgodam",
                          value: "~35 km, ~1.5 hr drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Naini Lake, Naina Devi Temple",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~2,084 m",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay",
                          value: "Wide range around the lake",
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
                  <h2>Best Time to Visit Nainital</h2>
                  <p>
                    Nainital's altitude keeps summers comfortably cool while
                    autumn brings the clearest views — the two most reliable
                    windows to visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant days and cool evenings, with clear lake and hill views. May-June is also peak season, so expect crowds and higher prices.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Quieter, equally scenic",
                        text: "Post-monsoon skies are crisp and clear, with noticeably fewer tourists than peak summer — a good balance of good weather and lower crowds.",
                      },
                      {
                        season: "Dec",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Occasional snow",
                        text: "Nainital occasionally sees light snowfall, and the surrounding viewpoints can turn genuinely wintry — check road conditions before travelling.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain brings landslide risk on the approach roads and reduces visibility sharply — best avoided unless necessary.",
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
                    <strong>Our pick:</strong> September to November — clear
                    skies, comfortable temperatures, and a noticeably calmer
                    Mall Road and lake front than the summer rush.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Nainital</h2>
                  <p>
                    Nainital has no airport or railway station of its own —
                    Kathgodam is the standard gateway.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Pantnagar Airport is the
                      nearest, about 65 km away, with limited flights mainly
                      from Delhi. Kathgodam remains the more practical
                      arrival point for most travellers.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kathgodam railway station,
                      about 35 km from Nainital, is well connected to Delhi
                      and Lucknow with several daily trains, including
                      convenient overnight options.
                    </li>
                    <li>
                      <strong>By road:</strong> From Kathgodam, it's a
                      roughly 1.5-hour drive up to Nainital. The full road
                      journey from Delhi is around 300 km, typically 7-8
                      hours by car.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Private vehicles are
                    restricted from entering central Mallital and Tallital
                    during peak season — many hotels arrange parking outside
                    the core and a short walk or local taxi in.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Nainital</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Boats on Naini Lake with Nainital's Mall Road along the shore"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Naini Lake & Naina Devi Temple</h3>
                  <p>
                    The lake is Nainital's centrepiece — paddle boats and
                    larger rowed boats run from ghats at both the Mallital
                    and Tallital ends, offering a leisurely way to take in
                    the town's amphitheatre of hills from the water. On the
                    northern shore, the Naina Devi Temple marks the spot
                    where, in local tradition, the eyes of the goddess Sati
                    fell — one of the region's significant Shakti Peeth
                    sites, and usually busy with both pilgrims and visitors.
                  </p>
                  <h3>Mall Road</h3>
                  <p>
                    Running along the lake's eastern edge between Mallital
                    and Tallital, Mall Road is Nainital's main promenade —
                    shops, restaurants, and a steady flow of evening foot
                    traffic, with the lake and hills as a constant backdrop.
                  </p>
                  <h3>Snow View Point & Naina Peak</h3>
                  <p>
                    A cable car from Mallital climbs to Snow View Point,
                    which — on clear days — offers views toward the higher
                    Himalayan range including Nanda Devi. From here, a
                    further trek leads to Naina Peak (also called China
                    Peak), Nainital's highest point, for a wider and quieter
                    panorama than the cable car station itself.
                  </p>
                  <h3>Tiffin Top & Land's End</h3>
                  <p>
                    Tiffin Top (also known as Dorothy's Seat) is a popular
                    short hike or pony ride from Mallital, with wide views
                    over the lake and surrounding valleys. Land's End, a bit
                    further out, is a quieter viewpoint favoured by those
                    wanting to avoid the more crowded spots.
                  </p>
                  <h3>Eco Cave Gardens</h3>
                  <p>
                    A small network of interconnected natural caves near
                    Mallital, developed into a walk-through attraction —
                    modest in scale but a popular stop, especially for
                    families travelling with children.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Nainital's colonial-era
                    schools — St. Xavier's and Sherwood College among them —
                    give the town's older quarters a distinct character;
                    even a walk past their gates and grounds is worth the
                    detour for the architecture alone.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Nainital</h2>
                  <p>
                    Most accommodation sits around the lake in Mallital and
                    Tallital, with quieter options a short drive up the
                    surrounding hillsides.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,800/night",
                        picks: [
                          "Guesthouses near Tallital",
                          "Budget hotels off Mall Road",
                          "Basic stays near the bus stand",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹7,000/night",
                        picks: [
                          "Lake-facing hotels on Mall Road",
                          "Hillside cottages above Mallital",
                          "Family hotels near the Naina Devi Temple",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹9,000–₹22,000+/night",
                        picks: [
                          "Colonial-era heritage hotels near the lake",
                          "Boutique hillside resorts",
                          "Premium lake-view suites",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & the Lake",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Kathgodam, check in near the lake",
                          "Boating on Naini Lake, visit Naina Devi Temple",
                          "Evening stroll along Mall Road",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Viewpoints",
                        color: "bg-sky-600",
                        activities: [
                          "Morning cable car to Snow View Point",
                          "Trek onward to Naina Peak, or visit Tiffin Top",
                          "Afternoon at Eco Cave Gardens",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Bhimtal/Sattal Day Trip & Onward",
                        color: "bg-forest-600",
                        activities: [
                          "Half-day trip to nearby Bhimtal and Sattal lakes",
                          "Return to Nainital, or head onward into Kumaon",
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
                    * Many travellers continue from Nainital into the wider
                    Kumaon circuit —{" "}
                    <Link href="/blog/ranikhet-travel-guide">Ranikhet</Link>,{" "}
                    <Link href="/blog/mukteshwar-travel-guide">
                      Mukteshwar
                    </Link>
                    , or{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link> for
                    its wide Himalayan panorama.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Nainital</h2>
                  <ul>
                    <li>
                      <strong>Mall Road restaurants:</strong> The widest
                      choice of North Indian, Kumaoni thalis, and
                      continental café options, most with lake or hill
                      views.
                    </li>
                    <li>
                      <strong>Tallital eateries:</strong> Slightly less
                      touristy than the Mallital end, with good options for
                      simple, reasonably priced meals.
                    </li>
                    <li>
                      <strong>Local Kumaoni cuisine:</strong> Look for
                      smaller local restaurants serving Kumaoni dal, bhatt ki
                      churkani, and other regional specialities away from
                      the main tourist strip.
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
                            "₹1,800",
                            "₹4,800",
                            "₹14,000",
                          ],
                          ["Travel from Kathgodam (round trip)", "₹700", "₹1,500", "₹2,500"],
                          ["Food/day", "₹600", "₹1,500", "₹3,500"],
                          [
                            "Boating (30 min)",
                            "₹200",
                            "₹300",
                            "₹500",
                          ],
                          ["Local transport/day", "₹300", "₹600", "₹1,200"],
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
                    * Figures are per person, per day (except accommodation
                    and travel, which are per night/round trip as noted).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Nainital</h2>
                  <ul>
                    <li>
                      <strong>Book ahead for summer weekends:</strong>{" "}
                      May-June sees the heaviest crowds and hotel prices rise
                      sharply — reserve well in advance.
                    </li>
                    <li>
                      <strong>Expect vehicle restrictions near the lake:</strong>{" "}
                      Central Mallital and Tallital limit private car entry
                      in peak season — check with your hotel about parking.
                    </li>
                    <li>
                      <strong>Fixed boating time slots:</strong> Boat rides
                      run on set durations rather than open-ended hire — ask
                      about timing before boarding.
                    </li>
                    <li>
                      <strong>Carry a light jacket even in summer:</strong>{" "}
                      Evenings by the lake cool down quickly.
                    </li>
                    <li>
                      <strong>Use Nainital as a base, not the whole trip:</strong>{" "}
                      The wider Kumaon region rewards a day or two of
                      exploring beyond the town itself.
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
                          "Go boating early in the day for calmer water",
                          "Visit Naina Devi Temple along the lake's north shore",
                          "Take the cable car to Snow View Point on a clear day",
                          "Book hotels ahead for May-June weekends",
                          "Use Nainital as a base for the Kumaon circuit",
                          "Carry a light jacket for lakeside evenings",
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
                          "Expect free vehicle access to the lakefront in peak season",
                          "Travel during heavy monsoon rains",
                          "Assume walk-up hotel availability in summer",
                          "Skip the surrounding Kumaon towns entirely",
                          "Rush the Snow View Point cable car queue",
                          "Rely on guaranteed December snowfall",
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
                    <strong>🗺️ Extend the trip:</strong> From Nainital, head
                    onward into the wider Kumaon hills at{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link> for
                    its Himalayan panorama,{" "}
                    <Link href="/blog/ranikhet-travel-guide">Ranikhet</Link>{" "}
                    for a quieter cantonment town, or{" "}
                    <Link href="/blog/mukteshwar-travel-guide">
                      Mukteshwar
                    </Link>{" "}
                    for orchards and viewpoints — or south toward{" "}
                    <Link href="/blog/jim-corbett-travel-guide">
                      Jim Corbett National Park
                    </Link>{" "}
                    for wildlife.
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
                  "Nainital",
                  "Naini Lake",
                  "Uttarakhand",
                  "Kumaon",
                  "Hill Station",
                  "Naina Devi Temple",
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

              <RelatedPostsGrid currentSlug="nainital-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nainital-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
