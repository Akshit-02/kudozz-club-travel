// src/app/blog/mount-saramati-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mount Saramati Trek: Nagaland's Highest Peak",
  description:
    "Complete Mount Saramati trek guide — Nagaland's highest peak at 3,826m near the Myanmar border, expedition-level difficulty, best time, guides, and what the multi-day trek actually involves.",
  keywords:
    "Mount Saramati trek, Nagaland's highest peak, Kiphire district trek, Saramati Nagaland, Naga Hills highest point, India Myanmar border trek, Nagaland trekking, expedition trek Northeast India",
  openGraph: {
    title: "Mount Saramati Trek: Nagaland's Highest Peak",
    description:
      "A remote, expedition-level climb to Nagaland's highest point on the India-Myanmar border — the complete Mount Saramati trek guide.",
    url: "https://club.kudozz.in/blog/mount-saramati-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Snow-dusted high mountain pass, evoking the remote high-altitude terrain of Mount Saramati in Nagaland",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Saramati Trek: Nagaland's Highest Peak",
    description:
      "A remote, expedition-level climb to Nagaland's highest point near the Myanmar border — the complete Mount Saramati trek guide.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mount-saramati-travel-guide",
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
          headline: "Mount Saramati Trek: Nagaland's Highest Peak",
          description:
            "Complete Mount Saramati trek guide — Nagaland's highest peak at 3,826m near the Myanmar border, expedition-level difficulty, best time, guides, and what the multi-day trek actually involves.",
          image:
            "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
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
            "@id": "https://club.kudozz.in/blog/mount-saramati-travel-guide",
          },
          keywords:
            "Mount Saramati, Nagaland, Kiphire district, highest peak, expedition trek, Myanmar border",
          about: {
            "@type": "Place",
            name: "Mount Saramati",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
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
                name: "Nagaland",
                item: "https://club.kudozz.in/blog/nagaland-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mount Saramati",
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
    q: "How difficult is the Mount Saramati trek?",
    a: "Genuinely difficult — this is an expedition-level trek, not a casual walk. Expect multiple days on remote, largely unmarked trails, real altitude gain to 3,826m, and no rescue infrastructure to fall back on. It sits in a completely different difficulty class from shorter treks like Dzukou Valley.",
  },
  {
    q: "How many days does it take?",
    a: "Realistically 4-6 days or more once you include the journey to and from Kiphire district, acclimatization, and the trek itself. This isn't a trip you can compress into a long weekend.",
  },
  {
    q: "Is a guide mandatory?",
    a: "In practice, yes. There's minimal signage, no established base-camp infrastructure, and the route runs close to the India-Myanmar border. An experienced local guide and support team aren't a convenience here — they're how the trek gets done safely.",
  },
  {
    q: "How far is Kiphire district from Kohima?",
    a: "It's a long overland journey on hill roads — plan for the better part of a day just to reach Kiphire town before the trek itself begins. Factor this fully into your overall trip timeline rather than treating it as a quick add-on.",
  },
  {
    q: "What is the best time to attempt the trek?",
    a: "October to April offers the most stable weather window. Monsoon (roughly May-September) should be avoided entirely — the remote terrain and lack of support infrastructure make bad-weather conditions genuinely risky here.",
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
  { id: "introduction", title: "Nagaland's Highest Point", level: 2 },
  { id: "best-time", title: "Best Time to Attempt the Trek", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kiphire District", level: 2 },
  { id: "the-trek", title: "The Trek Itself", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Trip Plan", level: 2 },
  { id: "food-guide", title: "Food & Supplies", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MountSaramatiGuidePage() {
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
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Snow-dusted high mountain pass, evoking the remote high-altitude terrain of Mount Saramati in Nagaland"
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
                { label: "Nagaland", href: "/blog/nagaland-travel-guide" },
                { label: "Mount Saramati", href: null },
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
                "Mount Saramati",
                "Nagaland's Highest Peak",
                "Kiphire District",
                "Trekking",
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
              Mount Saramati Trek: Nagaland&apos;s Highest Peak
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A remote, expedition-level climb to 3,826 metres near the
              India-Myanmar border — rarely attempted, and genuinely
              demanding.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Kiphire District, Nagaland",
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
                  <h2>Nagaland&apos;s Highest Point</h2>
                  <p>
                    <strong>Mount Saramati</strong> is the highest peak in
                    Nagaland — and, in fact, the highest point in the entire
                    Naga Hills range, which stretches across the India-Myanmar
                    border. At roughly 3,826 m, it sits near the
                    international border in remote Kiphire district, about as
                    far from Nagaland&apos;s Hornbill Festival circuit as this
                    small state gets.
                  </p>
                  <p>
                    This is not a casual weekend hike. Compared to
                    Nagaland&apos;s more accessible treks, Saramati is a
                    genuine expedition — multi-day, physically demanding, and
                    largely without the trail infrastructure trekkers might
                    expect in the Himalaya proper. It draws a small, dedicated
                    number of experienced trekkers each year rather than the
                    steadier stream that heads to Dzukou Valley.
                  </p>
                  <p>
                    In return, the mountain offers something increasingly
                    rare in Northeast India&apos;s trekking scene: genuine
                    remoteness. The upper reaches support high-altitude flora
                    and fauna adapted to this little-explored corner of the
                    Naga Hills ecosystem, and the route itself passes through
                    country that sees very few outside visitors in any given
                    year.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Mount Saramati at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Kiphire District, Nagaland",
                        },
                        {
                          icon: "⛰️",
                          label: "Height",
                          value: "~3,826 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🥾",
                          label: "Difficulty",
                          value: "Expedition-level",
                        },
                        {
                          icon: "📅",
                          label: "Duration",
                          value: "4–6+ days",
                        },
                        {
                          icon: "🇲🇲",
                          label: "Borders",
                          value: "India–Myanmar",
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
                  <h2>Best Time to Attempt the Trek</h2>
                  <p>
                    Given the remoteness and the total absence of nearby
                    rescue or resupply infrastructure, timing matters more
                    here than on almost any other Nagaland trek.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The most stable weather window, with clearer trails and drier conditions — the only realistic season for a trek this remote and unsupported.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Coldest, clearest",
                        text: "Genuinely cold at altitude, but skies tend to be at their clearest — worth it if the views matter as much as the summit.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid entirely",
                        text: "Heavy rain, landslide risk, and near-impossible trail conditions on remote terrain with no support nearby. Don't attempt Saramati in this window.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌱",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Late-season option",
                        text: "Warming up before the monsoon arrives — a reasonable late window if October-February doesn't fit your schedule.",
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
                    <strong>Our pick:</strong> October to April, with
                    November–February offering the clearest skies if you can
                    handle the colder temperatures at altitude.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kiphire District</h2>
                  <p>
                    Getting to the trailhead is a genuine part of the trip —
                    budget a full day of travel just to reach Kiphire town
                    before the trek itself even begins.
                  </p>
                  <ul>
                    <li>
                      <strong>From Kohima:</strong> A long overland journey on
                      hill roads to Kiphire district headquarters — treat this
                      as its own travel day, not a quick add-on to the trek
                      schedule.
                    </li>
                    <li>
                      <strong>Onward to the trailhead:</strong> From Kiphire
                      town, a further drive and then the trek on foot begins —
                      arrange this through your local guide/support team in
                      advance.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build at least one buffer day
                    into your itinerary either side of the trek — road
                    conditions in this part of Nagaland can be unpredictable,
                    and there's no way to make up lost time once you're on the
                    mountain.
                  </div>
                </section>

                {/* ── The Trek ──────────────────────────────────────────── */}
                <section id="the-trek">
                  <h2>The Trek Itself</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="High mountain terrain evoking the remote trail toward Mount Saramati's summit"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Terrain & Difficulty</h3>
                  <p>
                    This is a genuinely demanding, multi-day trek across
                    remote, largely unmarked terrain, with real altitude gain
                    to 3,826 m. It sits in a completely different difficulty
                    class from shorter, well-trodden Northeast India treks —
                    expect steep, forested approaches giving way to more open,
                    high-altitude ground near the summit.
                  </p>
                  <h3>High-Altitude Flora & Fauna</h3>
                  <p>
                    The mountain&apos;s upper reaches support flora and fauna
                    adapted to this relatively unexplored stretch of the Naga
                    Hills — a genuine draw for trekkers interested in
                    ecosystems few outside visitors ever see.
                  </p>
                  <h3>The Border Proximity</h3>
                  <p>
                    Given the route&apos;s proximity to the India-Myanmar
                    border, register with local guides and authorities before
                    setting out, and follow their guidance on where the trek
                    can and cannot go.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is basic camping on the mountain itself, and
                    simple guesthouses in Kiphire town before and after the
                    trek.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "On the Trek",
                        icon: "⛺",
                        range: "Camping",
                        picks: [
                          "Tented camps arranged by your guide/support team",
                          "No fixed lodges on the route",
                          "Bring your own or rented expedition gear",
                        ],
                      },
                      {
                        tier: "In Kiphire Town",
                        icon: "🏠",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Basic guesthouses",
                          "Simple homestays",
                          "Government circuit house (if available)",
                        ],
                      },
                      {
                        tier: "Before/After in Kohima",
                        icon: "🏨",
                        range: "₹1,500–₹4,000/night",
                        picks: [
                          "Standard hotels for acclimatization/rest",
                          "A comfortable stop either side of the trek",
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
                  <h2>Suggested Trip Plan (5–6 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Kohima to Kiphire",
                        color: "bg-amber-700",
                        activities: [
                          "Full day overland journey to Kiphire district",
                          "Meet your guide/support team, check gear",
                          "Overnight in Kiphire town",
                        ],
                      },
                      {
                        day: "Day 2–4",
                        title: "The Trek",
                        color: "bg-sky-600",
                        activities: [
                          "Multi-day ascent through forest and high terrain",
                          "Camp overnight at designated points",
                          "Summit push weather-permitting",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Descent",
                        color: "bg-forest-600",
                        activities: [
                          "Descend back to the trailhead",
                          "Return to Kiphire town",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Return to Kohima",
                        color: "bg-stone-600",
                        activities: [
                          "Overland journey back to Kohima",
                          "Rest and recovery",
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
                    * Add buffer days either side given the unpredictability
                    of hill-road travel and weather in this part of Nagaland.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food & Supplies</h2>
                  <ul>
                    <li>
                      <strong>On the trek:</strong> Carry expedition-style
                      supplies — there are no shops or lodges along the route
                      itself.
                    </li>
                    <li>
                      <strong>In Kiphire town:</strong> Basic local eateries
                      serve simple Naga meals — stock up on supplies here
                      before heading out.
                    </li>
                    <li>
                      <strong>Water:</strong> Carry purification tablets or a
                      filter — natural water sources exist along the route but
                      should be treated.
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
                          {["Expense", "Budget", "Mid-Range", "Full Support"].map(
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
                            "Guide + porter (per day)",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
                          ],
                          [
                            "Kiphire guesthouse/night",
                            "₹800",
                            "₹1,500",
                            "₹2,000",
                          ],
                          ["Food/day (trek + town)", "₹500", "₹800", "₹1,500"],
                          [
                            "Vehicle hire (Kohima–Kiphire round trip)",
                            "₹8,000",
                            "₹12,000",
                            "₹18,000",
                          ],
                          ["Permits/registration", "₹500", "₹500", "₹500"],
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
                    * A guide and support team are not optional here — budget
                    for them as an essential cost, not an upgrade.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Mount Saramati</h2>
                  <ul>
                    <li>
                      <strong>Do not attempt without a guide:</strong> The
                      remoteness, lack of signage, and border proximity make
                      an experienced local guide and support team essential,
                      not optional.
                    </li>
                    <li>
                      <strong>Prepare physically in advance:</strong> This is
                      a multi-day, high-altitude trek — arrive fit and
                      acclimatized rather than treating it as a casual add-on
                      to a Nagaland trip.
                    </li>
                    <li>
                      <strong>Register with local authorities:</strong> Given
                      the border-proximate route, follow your guide&apos;s
                      guidance on registration and permitted areas.
                    </li>
                    <li>
                      <strong>Pack for genuine cold:</strong> Temperatures at
                      altitude drop sharply, even in the recommended season.
                    </li>
                    <li>
                      <strong>Build in buffer days:</strong> Hill-road travel
                      to and from Kiphire can be unpredictable — don&apos;t
                      cut your schedule too tight.
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
                          "Hire an experienced local guide and support team",
                          "Train and acclimatize before attempting the trek",
                          "Build buffer days into your overall itinerary",
                          "Register with local authorities before setting out",
                          "Pack genuine cold-weather gear",
                          "Carry water purification supplies",
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
                          "Attempt this trek solo without local support",
                          "Underestimate the physical difficulty",
                          "Travel during monsoon season (May–Sep)",
                          "Cut your itinerary too close on travel days",
                          "Skip acclimatization before the summit push",
                          "Ignore your guide's advice on border-area routes",
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
                    <strong>🗺️ Extend the trip:</strong> Combine an
                    expedition-level Saramati attempt with a gentler stretch
                    of Nagaland first — the shorter, more accessible{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
                    </Link>{" "}
                    covers Kohima, Kisama, and Dzukou Valley for the rest of
                    your trip.
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
                  "Mount Saramati",
                  "Nagaland's Highest Peak",
                  "Kiphire District",
                  "Trekking",
                  "Nagaland",
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

              <RelatedPostsGrid currentSlug="mount-saramati-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mount-saramati-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
