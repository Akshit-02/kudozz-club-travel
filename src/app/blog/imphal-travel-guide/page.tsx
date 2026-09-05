// src/app/blog/imphal-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Imphal Travel Guide: Kangla Fort & Ima Keithel Market",
  description:
    "The complete Imphal travel guide — Kangla Fort's royal ruins, Ima Keithel's all-women market, Shree Govindajee Temple, the Imphal War Cemetery, day trips to Loktak Lake, and full trip planning for Manipur's capital.",
  keywords:
    "Imphal travel guide, Kangla Fort, Ima Keithel, Imphal War Cemetery, Manipur capital, Shree Govindajee Temple, Sangai Festival, Imphal airport, best time to visit Imphal, Manipur Inner Line Permit",
  openGraph: {
    title: "Imphal Travel Guide: Kangla Fort & Ima Keithel Market",
    description:
      "A royal fort sacred to Meitei kings, a market run entirely by women for centuries, and the gateway to Loktak Lake — the complete guide to Imphal.",
    url: "https://club.kudozz.in/blog/imphal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green hills and misty countryside, evoking the valley setting of Imphal, Manipur's capital",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Imphal Travel Guide: Kangla Fort & Ima Keithel Market",
    description:
      "A royal fort, an all-women market centuries old, and the gateway to Loktak Lake — the complete Imphal guide.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/imphal-travel-guide",
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
          headline: "Imphal Travel Guide: Kangla Fort & Ima Keithel Market",
          description:
            "The complete Imphal travel guide — Kangla Fort's royal ruins, Ima Keithel's all-women market, Shree Govindajee Temple, the Imphal War Cemetery, and day trips to Loktak Lake.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/imphal-travel-guide",
          },
          keywords: "Imphal, Kangla Fort, Ima Keithel, Manipur, Loktak Lake",
          about: {
            "@type": "Place",
            name: "Imphal",
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
                name: "Imphal",
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
    q: "How many days do I need in Imphal?",
    a: "Two days covers the city's core sights comfortably — Kangla Fort, Ima Keithel, Shree Govindajee Temple, the State Museum, and the War Cemetery — with a third day free for a Loktak Lake day trip.",
  },
  {
    q: "What is the best time to visit Imphal?",
    a: "October to March is the best window — cool, dry weather that makes walking around Kangla Fort and the market areas genuinely pleasant. November is worth timing your trip around if you can, since it usually coincides with the Sangai Festival.",
  },
  {
    q: "How do I reach Imphal?",
    a: "Imphal International Airport (Bir Tikendrajit International Airport, IATA: IMF) has regular flights from Kolkata, Guwahati, and Delhi, and is by far the fastest way in. Visitors from outside Manipur need an Inner Line Permit (ILP), which has been required since December 2019 — check the current application process before you travel.",
  },
  {
    q: "What is Ima Keithel and can I take photos there?",
    a: "Ima Keithel (Mother's Market, also called Khwairamband Bazar) is a market run entirely by women vendors, with centuries of history behind it — one of the largest all-women-run markets in Asia. It's respectful to ask individual vendors before photographing them.",
  },
  {
    q: "Is Imphal safe to visit?",
    a: "Parts of Manipur have periodically seen security-related travel advisories, so check current conditions before finalizing plans and stick to well-established tourist routes around Imphal. Within those established routes, sightseeing at Kangla Fort, Ima Keithel, and the city's temples and museums is routine for visitors.",
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
  { id: "introduction", title: "Manipur's Historic Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Imphal", level: 2 },
  { id: "things-to-do", title: "Things to Do in Imphal", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ImphalGuidePage() {
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
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Green hills and misty countryside, evoking the valley setting of Imphal, Manipur's capital"
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
                { label: "Imphal", href: null },
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
              {["Manipur", "Imphal", "Kangla Fort"].map((tag) => (
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
              Imphal: Kangla Fort, Ima Keithel & City Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A former royal seat sacred to the Meitei kings, a market run
              entirely by women for centuries, and the natural base for
              exploring the rest of Manipur — this is Imphal.
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
                  text: "Imphal, Manipur",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Manipur's Historic Capital</h2>
                  <p>
                    <strong>Imphal</strong> is the capital of{" "}
                    <Link href="/blog/manipur-travel-guide">Manipur</Link> and
                    the historic seat of the Meitei kingdom, sitting in the
                    middle of a fertile valley ringed by hills. Most visitors
                    to Manipur base themselves here for the bulk of a trip —
                    it's home to the state's most significant heritage sites
                    and its main airport, and it's the natural launchpad for
                    day trips further afield.
                  </p>
                  <p>
                    The city blends deep history with everyday life in a way
                    that's genuinely distinctive — a former royal fort sits a
                    short walk from a market that's been run entirely by
                    women for generations, and a Commonwealth war cemetery
                    from a pivotal WWII battle sits quietly on the edge of
                    town.
                  </p>
                  <p>
                    Roughly 48 km south of the city, <Link href="/blog/loktak-lake-travel-guide">Loktak Lake</Link> makes for the classic day trip
                    from Imphal, and most itineraries pair the two.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏯</span> Imphal at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Manipur, capital city" },
                        { icon: "✈️", label: "Gateway", value: "Imphal Airport (IMF)" },
                        { icon: "🏯", label: "Landmark", value: "Kangla Fort" },
                        { icon: "🧺", label: "Known For", value: "Ima Keithel Market" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🎉", label: "Festival", value: "Sangai (late Nov)" },
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
                  <h2>Best Time to Visit Imphal</h2>
                  <p>
                    Imphal's valley setting keeps its climate milder than the
                    surrounding hill districts, but timing still matters for
                    comfortable sightseeing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool and dry, the most comfortable window for walking around Kangla Fort and the market areas without heat or humidity working against you.",
                      },
                      {
                        season: "Late Nov",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Sangai Festival",
                        text: "Manipur's flagship cultural festival — music, dance, sports, cuisine, and handicrafts, organized by Manipur Tourism and centered mainly in and around Imphal.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warming up",
                        text: "Temperatures and humidity climb ahead of the monsoon, though an early start still makes sightseeing manageable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Substantial rainfall across the valley — outdoor sightseeing becomes less predictable, though indoor sights like the State Museum remain unaffected.",
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
                    <strong>Our pick:</strong> November, if your dates allow
                    — dry, comfortable weather with a genuine chance of
                    catching the Sangai Festival.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Imphal</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Imphal International Airport
                      (Bir Tikendrajit International Airport, IATA: IMF) has
                      regular flights from Kolkata, Guwahati, and Delhi — by
                      far the fastest and most practical way in.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Jiribam is Manipur's nearest
                      rail link, connected to the broader Indian rail network
                      via Assam, though journey times from most major cities
                      are long.
                    </li>
                    <li>
                      <strong>By Road:</strong> Imphal connects to Guwahati
                      (~580 km) via NH-2, though drive times are substantial
                      given the hilly terrain along the way.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Flying into Imphal is by far
                    the most practical option — road and rail journeys from
                    major Indian cities can take a day or more.
                  </div>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Inner Line Permit:</strong> Visitors from
                    outside Manipur need an Inner Line Permit (ILP), a
                    requirement in effect since December 2019. Check the
                    current application process ahead of your trip.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Imphal</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Green valley landscape, evoking the setting around Imphal, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Kangla Fort</h3>
                  <p>
                    The former royal seat of the Meitei kings, Kangla Fort is
                    a sacred complex of temples, moats, and the mythical
                    Kangla-Sha (dragon-lion) sculptures that guard its
                    grounds. It's the single most significant heritage site
                    in the city and worth a slow, unhurried visit.
                  </p>
                  <h3>Ima Keithel (Mother's Market)</h3>
                  <p>
                    Also known as Khwairamband Bazar, Ima Keithel is a market
                    run entirely by women vendors, with centuries of history
                    behind it — one of the largest all-women-run markets in
                    Asia. It's a genuine highlight of any Imphal visit; it's
                    respectful to ask before photographing individual
                    vendors.
                  </p>
                  <h3>Shree Shree Govindajee Temple</h3>
                  <p>
                    An important Vaishnavite temple near the old palace
                    grounds, still an active center of worship and a good
                    stop for understanding Meitei religious life alongside
                    the region's older, pre-Vaishnavite traditions.
                  </p>
                  <h3>Manipur State Museum</h3>
                  <p>
                    A useful primer on the state's history, tribal cultures,
                    and natural history before heading out to sites like
                    Loktak Lake and Moirang.
                  </p>
                  <h3>Imphal War Cemetery</h3>
                  <p>
                    A Commonwealth War Graves Commission cemetery
                    commemorating soldiers who died in the 1944 Battle of
                    Imphal, a pivotal turning point of the WWII Asian
                    theatre. Quiet, well-maintained, and a moving stop.
                  </p>
                  <h3>Sangai Festival</h3>
                  <p>
                    Manipur's flagship annual cultural festival, usually held
                    in late November and organized by Manipur Tourism,
                    showcasing music, dance, sports, cuisine, and handicrafts
                    from across the state's communities, mainly centered in
                    and around Imphal.
                  </p>
                  <h3>Day Trip: Loktak Lake</h3>
                  <p>
                    Roughly 48 km south of the city,{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    and its floating phumdis are the classic day trip from
                    Imphal, usually combined with a stop in the gateway town
                    of <Link href="/blog/moirang-travel-guide">Moirang</Link>.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Imphal</h2>
                  <p>
                    Accommodation in Manipur is concentrated in Imphal —
                    outside the capital, options thin out significantly, so
                    most travelers base themselves here for the whole trip.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses, central Imphal",
                          "Tourist lodges (Manipur Tourism)",
                          "Homestays near Ima Keithel",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Imphal",
                          "Hotel Imphal",
                          "Boutique stays, central Imphal",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Classic Hotel Imphal",
                          "Premium business hotels",
                          "Heritage-style stays (limited)",
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
                    Stay central, near Kangla Fort or Ima Keithel — most of
                    the city's key sights and eateries are within easy reach
                    of either area.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Heritage & History",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at Kangla Fort",
                          "Shree Govindajee Temple",
                          "Manipur State Museum",
                          "Evening at Ima Keithel market",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "War History & Local Life",
                        color: "bg-sky-600",
                        activities: [
                          "Imphal War Cemetery",
                          "Local café or restaurant for lunch",
                          "Browse craft and textile shops near the market",
                          "Optional: begin a Loktak Lake day trip",
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
                    With an extra day, add{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/moirang-travel-guide">Moirang</Link> as
                    a full day trip — see our{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for a complete multi-day itinerary across the state.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Imphal</h2>
                  <ul>
                    <li>
                      <strong>Eromba:</strong> A staple Meitei dish of mashed
                      boiled vegetables with fermented fish (ngari) and
                      chilies — a good introduction to Manipuri flavors.
                    </li>
                    <li>
                      <strong>Chak-hao kheer:</strong> A dessert made from
                      Manipur's distinctive black rice, naturally sweet and
                      aromatic.
                    </li>
                    <li>
                      <strong>Singju:</strong> A tangy salad of shredded
                      vegetables, herbs, and fermented fish or roasted
                      chickpea powder — a common everyday snack, easy to find
                      around the market areas.
                    </li>
                    <li>
                      <strong>Ima Keithel food stalls:</strong> The market
                      itself is a good place to try local snacks alongside
                      shopping for textiles and produce.
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹7,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport/day", "₹300", "₹700", "₹1,800"],
                          ["Sightseeing/day", "₹150", "₹350", "₹800"],
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
                    * Excludes flights to Imphal and any Loktak Lake day-trip
                    transport, which is typically arranged separately.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Imphal</h2>
                  <ul>
                    <li>
                      <strong>Carry your Inner Line Permit:</strong> Visitors
                      from outside Manipur need an ILP, required since
                      December 2019 — arrange this ahead of your trip.
                    </li>
                    <li>
                      <strong>Check current travel advisories:</strong> Parts
                      of Manipur have periodically seen security-related
                      advisories — confirm the latest guidance and stick to
                      established tourist routes.
                    </li>
                    <li>
                      <strong>Visit Ima Keithel respectfully:</strong> The
                      market is run entirely by women vendors — ask before
                      photographing individual stallholders.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is inconsistent outside Imphal's main
                      commercial areas.
                    </li>
                    <li>
                      <strong>Book flights ahead in peak season:</strong>{" "}
                      Imphal has limited flight frequency compared to larger
                      Northeastern hubs like Guwahati, especially around the
                      Sangai Festival.
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
                          "Carry your Inner Line Permit at all times",
                          "Check current advisories before finalizing plans",
                          "Ask permission before photographing market vendors",
                          "Book flights well ahead in peak/festival season",
                          "Try Meitei dishes like eromba and chak-hao kheer",
                          "Set aside a full day for the Loktak Lake day trip",
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
                          "Travel without arranging your ILP in advance",
                          "Travel to unfamiliar areas without checking advisories",
                          "Photograph vendors at Ima Keithel without asking",
                          "Rely on cards outside Imphal's main areas",
                          "Rush Kangla Fort into a quick photo stop",
                          "Skip checking flight availability during festival season",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Imphal with
                    a day trip to{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    and the gateway town of{" "}
                    <Link href="/blog/moirang-travel-guide">Moirang</Link>.
                    See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for a complete multi-day itinerary.
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
                {["Manipur", "Imphal", "Kangla Fort"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="imphal-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="imphal-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
