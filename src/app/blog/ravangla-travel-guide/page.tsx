// src/app/blog/ravangla-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ravangla Travel Guide: Buddha Park & Views",
  description:
    "Complete Ravangla guide — Buddha Park (Tathagata Tsal), Ralang Monastery, the Bon Monastery, Tendong Hill, how to reach from Gangtok, and a full visit plan.",
  keywords:
    "Ravangla travel guide, Rabongla, Buddha Park Sikkim, Tathagata Tsal, Ralang Monastery, Tendong Hill, South Sikkim, how to reach Ravangla, Kanchenjunga view Ravangla",
  openGraph: {
    title: "Ravangla Travel Guide: Buddha Park & Views",
    description:
      "A giant seated Buddha, a Kagyu-sect monastery, and one of South Sikkim's quieter, more contemplative bases — the complete guide to Ravangla.",
    url: "https://club.kudozz.in/blog/ravangla-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Wooden temple architecture in a forested hill setting, evoking Ravangla's Buddha Park and monastery heritage",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravangla Travel Guide: Buddha Park & Views",
    description:
      "A giant Buddha statue with Kanchenjunga views, and a quiet South Sikkim base away from the bigger crowds.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ravangla-travel-guide",
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
          headline: "Ravangla Travel Guide: Buddha Park & Views",
          description:
            "Complete Ravangla guide — Buddha Park (Tathagata Tsal), Ralang Monastery, the Bon Monastery, Tendong Hill, how to reach from Gangtok, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/ravangla-travel-guide",
          },
          keywords:
            "Ravangla, Rabongla, Buddha Park, Sikkim, South Sikkim, monastery",
          about: {
            "@type": "Place",
            name: "Ravangla",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Sikkim",
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
                name: "Sikkim",
                item: "https://club.kudozz.in/blog/sikkim-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ravangla",
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
    q: "How far is Ravangla from Gangtok?",
    a: "Roughly 3 hours by road, covering about 65 km through South Sikkim's hill roads.",
  },
  {
    q: "What is Buddha Park?",
    a: "Buddha Park (Tathagata Tsal) is a landscaped complex centred on a large seated Buddha statue roughly 130 feet tall, with sweeping Kanchenjunga range views on clear days — Ravangla's signature attraction.",
  },
  {
    q: "Is Ravangla good as a base for South Sikkim?",
    a: "Yes — it's generally quieter and less commercial than Gangtok or Pelling, and sits within easy reach of Namchi, Temi Tea Garden, and other South Sikkim sights, making it a good lower-key alternative base.",
  },
  {
    q: "What is the best time for Kanchenjunga views from Ravangla?",
    a: "October to February gives the clearest skies for mountain views, while March to May adds blooming rhododendrons on Tendong Hill for a more scenic (if slightly hazier) alternative.",
  },
  {
    q: "Is Tendong Hill a difficult hike?",
    a: "It's a moderate walk rather than a technical trek, suitable for most reasonably fit visitors, and rewards the effort with panoramic views tied to local legend.",
  },
  {
    q: "Can Ravangla be combined with Namchi and Temi Tea Garden?",
    a: "Yes, all three sit along the same general South Sikkim route and are commonly combined into a single 1-2 day circuit.",
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
  { id: "introduction", title: "Ravangla's Buddha Park", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ravangla", level: 2 },
  { id: "things-to-do", title: "Monasteries & Tendong Hill", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RavanglaGuidePage() {
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
              src="/images/destinations/manali/hadimba-temple.jpg"
              alt="Wooden temple architecture in a forested hill setting, evoking Ravangla's Buddha Park and monastery heritage"
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
                { label: "Sikkim", href: "/blog/sikkim-travel-guide" },
                { label: "Ravangla", href: null },
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
              {["Ravangla", "Buddha Park", "Sikkim", "South Sikkim"].map(
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
              Ravangla: Buddha Park & Quiet Mountain Views
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A giant seated Buddha with Kanchenjunga in the background, and
              one of South Sikkim's calmer, less-crowded bases.
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
                  text: "South Sikkim",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>Ravangla's Buddha Park</h2>
                  <p>
                    <strong>Ravangla</strong> (also spelled Rabongla), in
                    South Sikkim at roughly 2,100 m, is centred on{" "}
                    <strong>Buddha Park</strong> (Tathagata Tsal) — a
                    landscaped complex home to a large seated Buddha statue
                    roughly 130 feet tall, with sweeping views of the{" "}
                    <strong>Kanchenjunga range</strong> on clear days.
                  </p>
                  <p>
                    The town is generally quieter and less commercial than
                    Gangtok or{" "}
                    <Link href="/blog/pelling-travel-guide">Pelling</Link>,
                    making it a good lower-key base for South Sikkim
                    sightseeing. Nearby, Ralang Monastery and a smaller Bon
                    Monastery add religious and cultural depth, while
                    Tendong Hill offers a moderate walk to panoramic views.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🧘</span> Ravangla at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Sikkim, ~2,100m",
                        },
                        {
                          icon: "🚗",
                          label: "From Gangtok",
                          value: "~65 km, 3 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🙏",
                          label: "Known For",
                          value: "Buddha Park",
                        },
                        {
                          icon: "⛰️",
                          label: "Nearby Hike",
                          value: "Tendong Hill",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Namchi, Temi",
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
                  <h2>Best Time to Visit Ravangla</h2>
                  <p>
                    Clear mountain views and comfortable hiking conditions on
                    Tendong Hill both depend heavily on the season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies give the most reliable Kanchenjunga views from Buddha Park, with cool, comfortable daytime temperatures.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Rhododendrons in bloom",
                        text: "Tendong Hill and the surrounding slopes turn colourful with blooming rhododendrons, though mountain views can be slightly hazier.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain obscures mountain views and makes hill roads and hiking trails difficult.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, very clear",
                        text: "Genuinely cold, but among the clearest stretches of the year for photographing the mountain backdrop.",
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
                    <strong>Our pick:</strong> October to February for the
                    clearest Kanchenjunga views, or March to May if
                    blooming rhododendrons on Tendong Hill matter more to
                    you than perfect visibility.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ravangla</h2>
                  <ul>
                    <li>
                      <strong>By road from Gangtok:</strong> Roughly 65 km,
                      about 3 hours through South Sikkim's hill roads.
                    </li>
                    <li>
                      <strong>Via Bagdogra/NJP:</strong> Reachable by road
                      from Bagdogra Airport or New Jalpaiguri railway
                      station without necessarily routing through Gangtok.
                    </li>
                    <li>
                      <strong>As part of a South Sikkim loop:</strong>{" "}
                      Ravangla combines naturally with{" "}
                      <Link href="/blog/namchi-travel-guide">Namchi</Link>{" "}
                      and{" "}
                      <Link href="/blog/temi-tea-garden-travel-guide">
                        Temi Tea Garden
                      </Link>{" "}
                      on the same road route.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit Buddha Park in clear
                    morning light for both the best photography and the
                    best odds of an unobstructed Kanchenjunga view.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Monasteries & Tendong Hill</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Traditional wooden temple structure surrounded by forest, evoking Ravangla's monastery heritage"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Buddha Park (Tathagata Tsal)</h3>
                  <p>
                    Ravangla's centrepiece — a large seated Buddha statue set
                    in landscaped grounds, as much a place for quiet
                    reflection as sightseeing, with Kanchenjunga visible on
                    clear days.
                  </p>
                  <h3>Ralang Monastery</h3>
                  <p>
                    A significant Kagyu-sect monastery a short distance from
                    town, worth visiting for its architecture and active
                    monastic life.
                  </p>
                  <h3>Bon Monastery</h3>
                  <p>
                    A smaller monastery representing Tibet's pre-Buddhist
                    Bon tradition — an interesting contrast for visitors
                    curious about the region's religious diversity.
                  </p>
                  <h3>Tendong Hill</h3>
                  <p>
                    A moderate hike/viewpoint tied to local legend as a
                    place of refuge during a mythic flood, rewarding the
                    walk with panoramic views over South Sikkim.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Ravangla</h2>
                  <p>
                    Accommodation here is smaller in scale than Gangtok or
                    Pelling but generally good value, with several
                    properties offering direct Kanchenjunga views.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses near the main market",
                          "Basic lodges close to Buddha Park",
                          "Homestays with hill views",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Hotels with Kanchenjunga-facing rooms",
                          "Boutique stays near Buddha Park",
                          "Sikkim Tourism-affiliated properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Premium resorts with mountain views",
                          "Full-board South Sikkim packages",
                          "Boutique hillside retreats",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Buddha Park & Monasteries",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Buddha Park in clear morning light",
                          "Ralang Monastery and Bon Monastery",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tendong Hill & Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Morning hike up Tendong Hill",
                          "Depart toward Namchi or Temi Tea Garden",
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
                    * Combine with{" "}
                    <Link href="/blog/namchi-travel-guide">Namchi</Link> and{" "}
                    <Link href="/blog/temi-tea-garden-travel-guide">
                      Temi Tea Garden
                    </Link>{" "}
                    for a fuller South Sikkim circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Ravangla</h2>
                  <ul>
                    <li>
                      <strong>Hotel/guesthouse kitchens:</strong> Most
                      accommodation serves home-style Sikkimese and North
                      Indian meals.
                    </li>
                    <li>
                      <strong>Local eateries near the market:</strong>{" "}
                      Simple momo and thukpa joints in the town centre.
                    </li>
                    <li>
                      <strong>Cafés near Buddha Park:</strong> A few small
                      cafés cater to visitors moving between the park and
                      nearby monasteries.
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
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹6,500"],
                          ["Car hire from Gangtok (round trip)", "₹3,000", "₹4,500", "₹7,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Buddha Park entry", "₹20", "₹20", "₹20"],
                          ["Monastery visits", "Free-₹20", "Free-₹20", "Free-₹20"],
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
                    * Figures are per person, per day (except car hire, a
                    round-trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ravangla</h2>
                  <ul>
                    <li>
                      <strong>Visit Buddha Park in the morning:</strong>{" "}
                      Clearer light and better odds of an unobstructed
                      Kanchenjunga view.
                    </li>
                    <li>
                      <strong>Wear proper footwear for Tendong Hill:</strong>{" "}
                      The trail is moderate but uneven in places.
                    </li>
                    <li>
                      <strong>Use Ravangla as a quiet base:</strong> It's a
                      good lower-key alternative to Gangtok or Pelling for
                      South Sikkim exploration.
                    </li>
                    <li>
                      <strong>Combine with Namchi and Temi:</strong> Makes
                      far better use of the drive time than visiting in
                      isolation.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> Even outside
                      winter, mornings can be cold at this altitude.
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
                          "Visit Buddha Park early for clear views",
                          "Hike Tendong Hill with proper footwear",
                          "Combine with Namchi and Temi Tea Garden",
                          "Use Ravangla as a quiet South Sikkim base",
                          "Carry warm layers for cold mornings",
                          "Visit Ralang and Bon Monastery together",
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
                          "Expect Gangtok-level restaurant variety",
                          "Visit during heavy monsoon rain",
                          "Attempt Tendong Hill in unsuitable shoes",
                          "Skip Namchi and Temi if you have extra time",
                          "Assume mountain views are guaranteed year-round",
                          "Rely on cards outside the main hotels",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Ravangla
                    with{" "}
                    <Link href="/blog/namchi-travel-guide">Namchi</Link> and{" "}
                    <Link href="/blog/temi-tea-garden-travel-guide">
                      Temi Tea Garden
                    </Link>{" "}
                    for a complete South Sikkim loop. See our full{" "}
                    <Link href="/blog/sikkim-travel-guide">
                      Sikkim travel guide
                    </Link>{" "}
                    for the wider state.
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
                {["Ravangla", "Buddha Park", "Sikkim", "South Sikkim"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="ravangla-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ravangla-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
