// src/app/blog/unakoti-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Unakoti Travel Guide: Rock Carvings & How to Reach",
  description:
    "Complete Unakoti guide — the giant Unakotishwara Kal Bhairava carving, ancient rock-cut deities on a forested hillside, the Ashokashtami Mela, how to reach from Agartala, and a full visit plan.",
  keywords:
    "Unakoti travel guide, Unakoti rock carvings, Kailashahar, Unakotishwara Kal Bhairava, Unakoti district, Tripura archaeological site, how to reach Unakoti, Ashokashtami Mela, Unakoti day trip from Agartala",
  openGraph: {
    title: "Unakoti Travel Guide: Rock Carvings & How to Reach",
    description:
      "A forested hillside covered in massive rock-cut carvings dating back over a thousand years — the complete guide to Unakoti, one of Northeast India's most significant archaeological sites.",
    url: "https://club.kudozz.in/blog/unakoti-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hillside landscape, evoking Unakoti's rock-cut carvings hidden among the trees in North Tripura",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Unakoti Travel Guide: Rock Carvings & How to Reach",
    description:
      "A giant carved face of Shiva and a hillside of thousand-year-old rock art — the complete guide to Unakoti.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/unakoti-travel-guide",
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
          headline: "Unakoti Travel Guide: Rock Carvings & How to Reach",
          description:
            "Complete Unakoti guide — the giant Unakotishwara Kal Bhairava carving, ancient rock-cut deities on a forested hillside, the Ashokashtami Mela, how to reach from Agartala, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/unakoti-travel-guide",
          },
          keywords:
            "Unakoti, Kailashahar, Tripura, rock carvings, archaeological site, pilgrimage",
          about: {
            "@type": "Place",
            name: "Unakoti",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tripura",
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
                name: "Tripura",
                item: "https://club.kudozz.in/blog/tripura-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Unakoti",
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
    q: "How far is Unakoti from Agartala?",
    a: "Roughly 178 km, about a 4-hour drive each way via Kailashahar. It's one of the longest day trips out of Agartala in Tripura, which is why an overnight stay in Kailashahar is worth considering.",
  },
  {
    q: "Is Unakoti a day trip from Agartala?",
    a: "It can be, but it makes for a very long day — around 8 hours of driving alone. Many travellers prefer to overnight in Kailashahar, explore the carvings unhurried the next morning, and drive back, rather than rushing both legs in a single day.",
  },
  {
    q: "What makes Unakoti significant?",
    a: "It's one of Northeast India's most important archaeological sites — a forested hillside covered in massive rock-cut carvings and bas-reliefs, centred on Unakotishwara Kal Bhairava, a roughly 30-foot carved face of Shiva, believed to date to around the 7th–9th centuries CE. It has also featured in discussions around India's UNESCO World Heritage tentative list.",
  },
  {
    q: "What is the best time to visit Unakoti?",
    a: "October to March, when dry conditions make the forested hillside trail manageable. The monsoon (June–September) turns the paths muddy and difficult, and the site is far less enjoyable to explore.",
  },
  {
    q: "What are Unakoti's entry timings and fees?",
    a: "The site is generally open through daylight hours with a modest entry fee, though it's worth confirming current timings locally or with your driver/guide before setting out, since these details can shift.",
  },
  {
    q: "Where does the name Unakoti come from?",
    a: "\"Unakoti\" roughly translates to \"one less than a crore\" (one less than 10 million). Local legend ties this to a story involving Shiva and a crore of gods, said to explain the origin of the carvings.",
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
  { id: "introduction", title: "A Hillside of Ancient Carvings", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Unakoti", level: 2 },
  { id: "things-to-do", title: "The Carvings & the Trail", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function UnakotiGuidePage() {
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
              alt="Forested hillside landscape, evoking Unakoti's rock-cut carvings hidden among the trees in North Tripura"
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
                { label: "Tripura", href: "/blog/tripura-travel-guide" },
                { label: "Unakoti", href: null },
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
              {["Unakoti", "Kailashahar", "Tripura", "Rock Carvings"].map(
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
              Unakoti: Ancient Rock Carvings & Full Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A forested hillside in North Tripura covered in massive
              rock-cut carvings and a giant thirty-foot face of Shiva —
              one of Northeast India's most significant, and least
              visited, archaeological sites.
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
                  text: "Kailashahar, North Tripura",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>A Hillside of Ancient Carvings</h2>
                  <p>
                    <strong>Unakoti</strong>, near Kailashahar town in North
                    Tripura's Unakoti district, is one of Northeast India's
                    most significant archaeological sites — a forested
                    hillside covered in massive rock-cut carvings and
                    bas-reliefs of Hindu deities, believed to date roughly
                    to the 7th–9th centuries CE. It's briefly mentioned as a
                    highlight in our{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
                    </Link>
                    , but the site deserves a far deeper look on its own.
                  </p>
                  <p>
                    The centrepiece is{" "}
                    <strong>Unakotishwara Kal Bhairava</strong> — a giant
                    carved face of Shiva roughly 30 feet tall, flanked by
                    smaller carved figures. Scattered across the surrounding
                    hillside and forest are numerous other rock-cut images:
                    Ganesha, Durga astride her lion, a partly buried figure
                    of Nandi the bull, and other deities, some carved
                    directly into rock faces and others standing as
                    moss-covered free-standing stone images.
                  </p>
                  <p>
                    Local legend explains the name: "Unakoti" roughly means
                    "one less than a crore" (one less than 10 million),
                    tied to a story involving Shiva and a crore of gods.
                    The site is now maintained by the Archaeological Survey
                    of India, and it has featured in discussions around
                    India's UNESCO World Heritage tentative list — a sign
                    of how significant its carvings are considered, even
                    though the site itself sees a fraction of the visitors
                    of India's better-known heritage destinations.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🗿</span> Unakoti at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Unakoti district, North Tripura",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Kumarghat",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🗿",
                          label: "Known For",
                          value: "Rock-cut carvings, Kal Bhairava",
                        },
                        {
                          icon: "🏘️",
                          label: "Nearest Town",
                          value: "Kailashahar",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~178 km, ~4 hrs",
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
                  <h2>Best Time to Visit Unakoti</h2>
                  <p>
                    The forest trail up to the carvings is the main factor
                    to plan around — its condition changes a lot with the
                    seasons.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions make the forested trail up to the carvings genuinely enjoyable, with good light for photography.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still manageable",
                        text: "Temperatures rise but an early-morning visit is still comfortable before the midday heat sets in.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain makes the forested hillside paths muddy and slippery, and the long drive from Agartala considerably harder.",
                      },
                      {
                        season: "Around April",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Ashokashtami Mela",
                        text: "A major annual fair draws large crowds to Unakoti — atmospheric, but expect a busier, less contemplative visit.",
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
                    <strong>Our pick:</strong> October to March — dry trail
                    conditions and comfortable temperatures make the
                    forested walk to the carvings far more pleasant.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Unakoti</h2>
                  <p>
                    Unakoti's distance from Agartala is the single biggest
                    planning factor — this isn't a casual half-day trip.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Agartala:</strong> Roughly 178
                      km, about a 4-hour drive each way, mostly via
                      Kailashahar — the standard route for most visitors.
                    </li>
                    <li>
                      <strong>By rail to Kumarghat:</strong> The nearest
                      railhead, with onward road transport of roughly an
                      hour or so to Unakoti via Kailashahar.
                    </li>
                    <li>
                      <strong>Basing yourself in Kailashahar:</strong> A
                      short, manageable drive from the carvings themselves,
                      and the practical base if you're not doing a
                      same-day round trip from Agartala.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the roughly 8-hour
                    round-trip drive, an overnight stay in Kailashahar lets
                    you explore Unakoti unhurried the next morning rather
                    than rushing both legs in a single exhausting day.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Carvings & the Trail</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Forested hillside at Unakoti, North Tripura"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Unakotishwara Kal Bhairava</h3>
                  <p>
                    The site's single most striking image — a giant carved
                    face of Shiva, roughly 30 feet tall, set into the
                    hillside and flanked by smaller carved figures. It's the
                    natural centrepiece of any visit and the reason most
                    photographs of Unakoti exist.
                  </p>
                  <h3>Scattered Rock-Cut Deities</h3>
                  <p>
                    Beyond the main carving, dozens of smaller rock-cut
                    figures are spread across the forested hillside —
                    Ganesha, Durga on her lion, a partly buried Nandi bull,
                    and other deities, some carved into rock faces, others
                    standing as moss-covered free images half-reclaimed by
                    the forest.
                  </p>
                  <h3>The Forest Trail</h3>
                  <p>
                    Walking between the carvings involves an uneven,
                    partly forested path — comfortable footwear matters
                    here, and the walk itself, through quiet forest with
                    carvings emerging unexpectedly at points, is part of
                    what makes Unakoti memorable.
                  </p>
                  <h3>Ashokashtami Mela</h3>
                  <p>
                    Held annually around April, this is Unakoti's biggest
                    event — a major fair that draws large crowds of
                    pilgrims and visitors. Worth timing a visit around if
                    you want festival atmosphere, or avoiding if you prefer
                    a quieter, more contemplative visit.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Unakoti</h2>
                  <p>
                    Accommodation options are basic and concentrated in
                    Kailashahar — Agartala is too far for a comfortable
                    day-trip return if you want to explore Unakoti at a
                    relaxed pace.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic guesthouses, Kailashahar",
                          "Government tourist lodges",
                          "Simple hotels near the bus stand",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Better hotels, Kailashahar town",
                          "Tourism department properties",
                          "Business-style lodges",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹4,000+/night",
                        picks: [
                          "Very limited — none dedicated locally",
                          "Best luxury options remain in Agartala",
                          "Consider a comfortable Agartala stay instead",
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
                        title: "Agartala to Kailashahar",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Agartala",
                          "Drive to Kailashahar (~4 hrs)",
                          "Check in, rest for the evening",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Unakoti & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning visit to Unakoti's carvings and forest trail",
                          "Explore at an unhurried pace",
                          "Drive back to Agartala by evening",
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
                    * If pressed for time, a very long single day from
                    Agartala is possible, but expect roughly 8 hours of
                    driving on top of the visit itself.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Unakoti</h2>
                  <ul>
                    <li>
                      <strong>Kailashahar town:</strong> The main option for
                      a proper meal — a handful of local restaurants
                      serving Bengali and Tripuri fare.
                    </li>
                    <li>
                      <strong>Roadside stalls:</strong> Simple tea and
                      snack stalls along the route and near the site
                      entrance, useful for a quick break.
                    </li>
                    <li>
                      <strong>Carry your own supplies:</strong> Worth
                      packing water and snacks given the limited options
                      right at Unakoti itself.
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
                          ["Accommodation/night", "₹800", "₹2,200", "₹4,500"],
                          [
                            "Car hire from Agartala (round trip)",
                            "₹5,500",
                            "₹8,000",
                            "₹11,000",
                          ],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Entry fee", "₹30", "₹30", "₹30"],
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
                    round trip figure best split across a group). Fees are
                    approximate — confirm current rates locally.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Unakoti</h2>
                  <ul>
                    <li>
                      <strong>Start very early:</strong> Whether doing it
                      as a long single day or an overnight trip, an early
                      start makes the long drive far more manageable.
                    </li>
                    <li>
                      <strong>Wear proper footwear:</strong> The forested
                      trail between carvings is uneven and partly
                      unpaved.
                    </li>
                    <li>
                      <strong>Carry water and mosquito repellent:</strong>{" "}
                      There's limited shade-free shopping right at the
                      site, and the forested setting means mosquitoes are
                      a factor.
                    </li>
                    <li>
                      <strong>Treat it as a living pilgrimage site too:</strong>{" "}
                      Beyond the archaeology, Unakoti remains an active
                      place of worship for many visitors — dress and
                      behave respectfully around the carvings.
                    </li>
                    <li>
                      <strong>Confirm timings ahead:</strong> Entry hours
                      and fees are modest but worth double-checking locally
                      before you set out on the long drive.
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
                          "Consider an overnight stay in Kailashahar",
                          "Wear sturdy, comfortable footwear",
                          "Start the drive early in either direction",
                          "Carry water, snacks, and repellent",
                          "Time a visit around the Ashokashtami Mela if you enjoy festivals",
                          "Respect the site's living pilgrimage character",
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
                          "Rush both legs of the drive in a single tight day",
                          "Visit during the monsoon if you can help it",
                          "Expect resort-style accommodation nearby",
                          "Skip proper footwear for the forest trail",
                          "Rely on finding a wide restaurant scene at the site",
                          "Forget to confirm current entry timings",
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
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
                    </Link>{" "}
                    to plan Unakoti alongside{" "}
                    <Link href="/blog/agartala-travel-guide">Agartala</Link>{" "}
                    and other Tripura highlights.
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
                  "Unakoti",
                  "Kailashahar",
                  "Tripura",
                  "Rock Carvings",
                  "Heritage",
                  "Archaeology",
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

              <RelatedPostsGrid currentSlug="unakoti-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="unakoti-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
