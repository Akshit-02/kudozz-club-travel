// src/app/blog/dayara-bugyal-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dayara Bugyal Trek Guide: Route, Season & Tips",
  description:
    "Complete Dayara Bugyal trek guide — route from Raithal or Barsu, best season for green meadows or winter snow, how to reach Uttarkashi, camping, and a full itinerary.",
  keywords:
    "Dayara Bugyal trek, Dayara Bugyal Uttarkashi, Raithal trek, Barsu village trek, Dayara Bugyal winter trek, Dayara Bugyal best time, Bandarpoonch view trek, Uttarkashi trekking, bugyal trek Uttarakhand, beginner Himalayan trek",
  openGraph: {
    title: "Dayara Bugyal Trek Guide: Route, Season & Tips",
    description:
      "One of Uttarakhand's largest and most accessible high-altitude meadows — a relatively short, beginner-friendly trek from Raithal or Barsu with sweeping Garhwal views.",
    url: "https://club.kudozz.in/blog/dayara-bugyal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude alpine meadow at Dayara Bugyal with Garhwal Himalayan peaks in view",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayara Bugyal Trek Guide: Route, Season & Tips",
    description:
      "Green meadows, winter snow, and sweeping Bandarpoonch views — the complete beginner-friendly guide to the Dayara Bugyal trek.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dayara-bugyal-travel-guide",
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
          headline: "Dayara Bugyal Trek Guide: Route, Season & Tips",
          description:
            "Complete Dayara Bugyal trek guide — route from Raithal or Barsu, best season for green meadows or winter snow, how to reach Uttarkashi, camping, and a full itinerary.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/dayara-bugyal-travel-guide",
          },
          keywords:
            "Dayara Bugyal, bugyal trek, Uttarkashi, Raithal, Barsu, Bandarpoonch, Garhwal, winter trek",
          about: {
            "@type": "Place",
            name: "Dayara Bugyal",
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
                name: "Dayara Bugyal",
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
    q: "Is Dayara Bugyal suitable for beginner trekkers?",
    a: "Yes — it's widely considered one of the more accessible high-altitude treks in Uttarakhand. The route from Raithal or Barsu is relatively short (typically covered over 2-3 days) with moderate gradients, making it a popular first Himalayan trek for beginners and families, compared to longer, more technical routes elsewhere in the region.",
  },
  {
    q: "What are Raithal and Barsu, and which starting point should I choose?",
    a: "Raithal and Barsu are two villages near Uttarkashi that serve as the main trailheads for Dayara Bugyal. Raithal is the more commonly used route and slightly shorter to the meadow; Barsu offers a quieter alternative with its own charm. Both converge on the same high meadow, so the choice often comes down to which village your trek operator or guide is based in.",
  },
  {
    q: "Can Dayara Bugyal be trekked in winter?",
    a: "Yes, and it's one of its most popular seasons — the meadow turns into a snow-covered expanse between December and February, drawing trekkers specifically for a winter/snow-trek experience. It does require proper winter gear (insulated layers, waterproof boots, gaiters) and, ideally, a guide familiar with snow conditions.",
  },
  {
    q: "How do I reach the Dayara Bugyal trailhead?",
    a: "Jolly Grant Airport in Dehradun is the nearest airport, about 170 km away, and Rishikesh is the nearest major railway station. From either, it's a road journey via Uttarkashi to Raithal or Barsu village, where the trek itself begins.",
  },
  {
    q: "Do I need a permit for Dayara Bugyal?",
    a: "Since the trek passes through forest and meadow areas near Uttarkashi, a forest entry permit is typically required and is usually arranged by trek operators or at the local forest checkpoint. Carrying a valid ID is essential, and it's worth confirming current permit requirements with a local operator before setting out.",
  },
  {
    q: "How does Dayara Bugyal compare to other treks in the Uttarkashi region?",
    a: "Dayara Bugyal is shorter and less demanding than routes toward Gangotri/Gaumukh or the Har Ki Dun valley, both also based out of the Uttarkashi region, making it a good starting trek before attempting those longer, higher-altitude routes.",
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
  { id: "introduction", title: "A Meadow for First-Time Trekkers", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Trailhead", level: 2 },
  { id: "trek-route", title: "The Trek Route", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Trek Itinerary", level: 2 },
  { id: "food-guide", title: "Food on the Trek", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DayaraBugyalGuidePage() {
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
              src="/images/destinations/manali/solang-valley.jpg"
              alt="High-altitude alpine meadow at Dayara Bugyal with Garhwal Himalayan peaks in view"
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
                { label: "Dayara Bugyal", href: null },
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
                "Dayara Bugyal",
                "Trekking",
                "Uttarkashi",
                "Himalayan Meadow",
                "Winter Trek",
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
              Dayara Bugyal Trek: Route, Season & a Complete Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of Uttarakhand's largest and most accessible
              high-altitude meadows — a relatively short, beginner-friendly
              trek from Raithal or Barsu with sweeping Bandarpoonch views.
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
                  text: "Uttarkashi, Garhwal Himalaya",
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
                  <h2>A Meadow for First-Time Trekkers</h2>
                  <p>
                    <strong>Dayara Bugyal</strong> is one of the largest and
                    most accessible high-altitude meadows (bugyals) in{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>
                    , sitting in the Garhwal Himalaya near Uttarkashi. Rolling
                    open grassland stretches for kilometres at altitude, framed
                    by sweeping views of Bandarpoonch and other Garhwal peaks
                    — the kind of high-Himalaya scenery that usually demands
                    a much longer, harder trek to reach.
                  </p>
                  <p>
                    What sets Dayara Bugyal apart is how approachable it is.
                    The route from either Raithal or Barsu village is
                    relatively short and covers moderate gradients, typically
                    done over 2-3 days — making it one of the most popular
                    beginner and family treks in the region, without
                    sacrificing the genuine high-altitude meadow payoff that
                    longer treks are known for.
                  </p>
                  <p>
                    It's also a genuinely different trek depending on when
                    you go: lush green meadow and wildflowers in early
                    summer, crisp clear skies after the monsoon, and a full
                    snow-covered winter trek from December to February — a
                    rare trifecta for a trek this accessible. Camping under
                    open sky at the meadow is the typical overnight
                    experience, and Dayara sits within a broader
                    Uttarkashi-region trekking cluster alongside{" "}
                    <Link href="/blog/gangotri-travel-guide">
                      Gangotri and Gaumukh
                    </Link>{" "}
                    and the Har Ki Dun valley.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Dayara Bugyal at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Uttarkashi, Garhwal",
                        },
                        {
                          icon: "🥾",
                          label: "Trailheads",
                          value: "Raithal or Barsu village",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Apr-Jun, Sep-Nov, Dec-Feb" },
                        {
                          icon: "⏱️",
                          label: "Duration",
                          value: "2-3 days typical",
                        },
                        {
                          icon: "🏔️",
                          label: "Peak Views",
                          value: "Bandarpoonch & Garhwal range",
                        },
                        {
                          icon: "⛺",
                          label: "Stay",
                          value: "Camping under open sky",
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
                  <h2>Best Time to Visit Dayara Bugyal</h2>
                  <p>
                    Dayara Bugyal is genuinely trek-worthy across three quite
                    different seasons, each giving the meadow its own
                    character.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌼",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Green meadows",
                        text: "The bugyal turns lush green with wildflowers in bloom, and daytime temperatures on the trek are comfortable. A popular window for first-timers.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear post-monsoon skies",
                        text: "Some of the clearest mountain views of the year, with crisp air and good visibility toward Bandarpoonch — many trekkers rate this the best overall window.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Snow trek — needs gear",
                        text: "The meadow becomes a genuine snow trek, spectacular but demanding proper winter gear — insulated layers, waterproof boots, gaiters — and ideally an experienced guide.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain, slippery trails, and leech activity in the forest sections make this the least practical window for the trek.",
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
                    <strong>Our pick:</strong> September to November for the
                    clearest views and easiest trekking conditions —
                    December to February if you specifically want the snow
                    experience and can gear up properly.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Dayara Bugyal Trailhead</h2>
                  <p>
                    The trek begins from Raithal or Barsu village, both
                    reached by road via Uttarkashi.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Jolly Grant Airport in
                      Dehradun is the nearest, roughly 170 km from the
                      trailhead villages.
                    </li>
                    <li>
                      <strong>By rail:</strong> Rishikesh is the nearest
                      major railway station, from where the journey
                      continues entirely by road.
                    </li>
                    <li>
                      <strong>By road:</strong> From Rishikesh or Dehradun,
                      drive via Uttarkashi town, then branch off toward
                      Raithal or Barsu village — the last stretch is on
                      narrower hill roads. The trek itself begins on foot
                      from whichever village you base out of.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Break the journey with an
                    overnight in Uttarakashi before starting the trek —
                    it gives you a buffer against road delays and a chance
                    to acclimatise slightly before gaining altitude.
                  </div>
                </section>

                {/* ── Trek Route ──────────────────────────────────────────── */}
                <section id="trek-route">
                  <h2>The Trek Route</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Trekking trail leading toward the Dayara Bugyal meadow, Garhwal Himalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Raithal Route</h3>
                  <p>
                    The more commonly used trailhead, Raithal is a small
                    Garhwali village that offers the slightly shorter
                    approach to the meadow. The trail climbs through mixed
                    oak and pine forest before opening out onto the bugyal,
                    typically covered in a day or a day and a half of
                    walking depending on your pace and camping plan.
                  </p>
                  <h3>Barsu Route</h3>
                  <p>
                    A quieter alternative starting point with its own rustic
                    charm, Barsu converges on the same high meadow via a
                    slightly different forest path. Some trek operators
                    prefer basing out of Barsu specifically for the reduced
                    foot traffic on the trail.
                  </p>
                  <h3>Camping at the Bugyal</h3>
                  <p>
                    Most itineraries include at least one night camping
                    directly on or near the meadow — under genuinely open
                    sky, with the Garhwal range visible from the tent door
                    on a clear night. Organised treks typically bring in
                    tents, sleeping bags, and food; independent trekkers
                    need to carry or arrange their own gear.
                  </p>
                  <h3>Views of Bandarpoonch</h3>
                  <p>
                    The meadow's high points give sweeping views of
                    Bandarpoonch and other Garhwal Himalaya peaks — on clear
                    days, this payoff is disproportionate to how
                    comparatively short and manageable the trek itself is.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation splits between the trailhead villages
                    (before and after the trek) and camping on the trail
                    itself.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏠",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Homestays in Raithal or Barsu village",
                          "Basic village guesthouses",
                          "Self-carried camping gear on-trail",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "⛺",
                        range: "₹2,500–₹4,500/night (organised trek)",
                        picks: [
                          "Guided group treks with tents & meals included",
                          "Better-equipped village homestays",
                          "Small trek-operator base camps",
                        ],
                      },
                      {
                        tier: "Premium",
                        icon: "🏕️",
                        range: "₹5,000–₹9,000/night (organised trek)",
                        picks: [
                          "Small-group guided treks with premium gear",
                          "Private guide & porter arrangements",
                          "Higher-comfort camping setups on the bugyal",
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
                  <h2>Suggested Trek Itinerary (3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Trailhead Village",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Uttarkashi to Raithal or Barsu",
                          "Acclimatise and prepare gear overnight in the village",
                          "Brief warm-up walk around the village if time allows",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Trek to the Meadow",
                        color: "bg-sky-600",
                        activities: [
                          "Trek through forest cover up to the bugyal",
                          "Set up camp on the open meadow",
                          "Evening views of Bandarpoonch under clear sky",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Explore & Descend",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning walk further into the meadow for sunrise views",
                          "Break camp and descend back to the trailhead village",
                          "Drive back toward Uttarkashi or onward",
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
                    * Many trekkers combine Dayara Bugyal with a longer trip
                    into the{" "}
                    <Link href="/blog/gangotri-travel-guide">
                      Gangotri
                    </Link>{" "}
                    region, or treat it as a warm-up before attempting a
                    longer trek like{" "}
                    <Link href="/blog/valley-of-flowers-travel-guide">
                      Valley of Flowers
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food on the Trek</h2>
                  <ul>
                    <li>
                      <strong>Village homestay meals:</strong> Simple,
                      hearty Garhwali home cooking — dal, rice, seasonal
                      vegetables, and rotis — available in Raithal and
                      Barsu before and after the trek.
                    </li>
                    <li>
                      <strong>Organised trek catering:</strong> Guided
                      groups typically bring a cook and rations for the
                      trail, serving hot meals at camp — a major convenience
                      given there are no shops or dhabas on the meadow
                      itself.
                    </li>
                    <li>
                      <strong>Carry your own snacks:</strong> Energy bars,
                      dry fruit, and glucose biscuits are worth packing for
                      the trail regardless of whether meals are arranged,
                      given the altitude and exertion involved.
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
                          {["Expense", "Budget (DIY)", "Mid-Range (Guided)", "Premium (Guided)"].map(
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
                          ["Trek package/person", "N/A (self-organised)", "₹4,500", "₹8,000"],
                          ["Village homestay/night", "₹1,000", "Included", "Included"],
                          ["Local transport to trailhead", "₹1,500", "Included", "Included"],
                          ["Food/day", "₹400", "Included", "Included"],
                          ["Gear rental (if needed)", "₹500", "₹800", "₹1,200"],
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
                    * Figures are per person, in INR. Guided trek packages
                    typically bundle homestay, transport from Uttarkashi,
                    and meals into a single per-person price.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for the Dayara Bugyal Trek</h2>
                  <ul>
                    <li>
                      <strong>Choose a guide for the winter trek:</strong>{" "}
                      Snow conditions between December and February can be
                      unpredictable — an experienced local guide is worth
                      the cost in that season.
                    </li>
                    <li>
                      <strong>Break in your trekking shoes beforehand:</strong>{" "}
                      Even a moderate trek like this is far more comfortable
                      in shoes you've already worn on shorter walks.
                    </li>
                    <li>
                      <strong>Carry a forest entry permit:</strong> Confirm
                      current requirements with your trek operator or the
                      local forest checkpoint before setting out.
                    </li>
                    <li>
                      <strong>Pack layers regardless of season:</strong>{" "}
                      Even in summer, temperatures drop sharply at the
                      meadow once the sun sets.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Neither Raithal nor Barsu
                      have reliable ATM access — withdraw what you need in
                      Uttarkashi beforehand.
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
                          "Break in trekking shoes before the trip",
                          "Carry layers for sharp evening temperature drops",
                          "Confirm permit requirements ahead of time",
                          "Hire a guide for a winter/snow trek",
                          "Carry enough cash from Uttarkashi",
                          "Pace yourself — it's short but still altitude gain",
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
                          "Attempt the winter trek without proper gear",
                          "Trek during peak monsoon (Jul-Aug)",
                          "Assume ATMs will be available at the trailhead",
                          "Skip warm layers in summer evenings",
                          "Underestimate a 'short' trek's altitude effects",
                          "Leave litter on the meadow or trail",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Dayara
                    Bugyal with a visit to{" "}
                    <Link href="/blog/gangotri-travel-guide">Gangotri</Link>{" "}
                    in the same Uttarkashi region, or treat it as a
                    beginner-friendly warm-up before a longer trek like{" "}
                    <Link href="/blog/valley-of-flowers-travel-guide">
                      Valley of Flowers
                    </Link>
                    .
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
                  "Dayara Bugyal",
                  "Uttarakhand",
                  "Bugyal Trek",
                  "Uttarkashi",
                  "Garhwal",
                  "Himalayan Meadow",
                  "Winter Trek",
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

              <RelatedPostsGrid currentSlug="dayara-bugyal-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dayara-bugyal-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
