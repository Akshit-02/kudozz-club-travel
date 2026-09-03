// src/app/blog/nagarjuna-sagar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nagarjuna Sagar Guide: Dam, Island & Tips",
  description:
    "Complete Nagarjuna Sagar guide — one of the world's largest masonry dams, the Nagarjunakonda island museum reached only by boat, Ethipothala waterfall, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Nagarjuna Sagar travel guide, Nagarjuna Sagar dam, Nagarjunakonda island, Nagarjunakonda museum, Ethipothala waterfall, Krishna river Telangana, how to reach Nagarjuna Sagar, Nagarjuna Sagar from Hyderabad",
  openGraph: {
    title: "Nagarjuna Sagar Guide: Dam, Island & Tips",
    description:
      "One of the world's largest masonry dams, and an island museum of relocated Buddhist heritage reachable only by boat — the complete Nagarjuna Sagar guide.",
    url: "https://club.kudozz.in/blog/nagarjuna-sagar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Large calm reservoir landscape, evoking Nagarjuna Sagar's dam and lake setting",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagarjuna Sagar Guide: Dam, Island & Tips",
    description:
      "A vast dam, an island museum of relocated Buddhist heritage, and a scenic waterfall nearby — the complete Nagarjuna Sagar guide.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nagarjuna-sagar-travel-guide",
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
          headline: "Nagarjuna Sagar Guide: Dam, Island & Tips",
          description:
            "Complete Nagarjuna Sagar guide — one of the world's largest masonry dams, the Nagarjunakonda island museum reached only by boat, Ethipothala waterfall, how to reach from Hyderabad, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/nagarjuna-sagar-travel-guide",
          },
          keywords:
            "Nagarjuna Sagar, Nagarjunakonda, Telangana, dam, Buddhist heritage, Ethipothala waterfall",
          about: {
            "@type": "Place",
            name: "Nagarjuna Sagar",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog/telangana-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Nagarjuna Sagar",
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
    q: "How far is Nagarjuna Sagar from Hyderabad?",
    a: "Roughly 160 km, about a 3-4 hour drive on generally good roads — one of the more straightforward day trips from the city, though an overnight stay lets you see the dam, the island, and the waterfall without rushing.",
  },
  {
    q: "How do I reach Nagarjunakonda island?",
    a: "Only by boat, from a jetty near the dam. Boats run on a schedule rather than continuously, so it's worth checking timings on arrival or in advance rather than assuming you can leave whenever you like.",
  },
  {
    q: "Is Nagarjuna Sagar a day trip from Hyderabad?",
    a: "Yes, it's commonly done as a long day trip, though fitting in the dam, the Nagarjunakonda boat ride and museum, and Ethipothala waterfall comfortably is easier with an overnight stay nearby.",
  },
  {
    q: "What is the best time to visit Nagarjuna Sagar?",
    a: "October to February, when the reservoir and the waterfall both benefit from good post-monsoon water levels and the weather is comfortable for a full day outdoors.",
  },
  {
    q: "Can I combine Nagarjuna Sagar with Srisailam?",
    a: "Yes, this is a natural pairing — both sit along the Krishna river and fall within the same broader tiger reserve landscape, making a combined 2-3 day Krishna-river circuit a popular option.",
  },
  {
    q: "What is significant about Nagarjunakonda?",
    a: "It was an important ancient Buddhist settlement and centre of learning. When the dam's reservoir was created, key monuments and relics were carefully relocated to what is now an island, and a museum there preserves and displays this heritage.",
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
  { id: "introduction", title: "A Dam, An Island & Lost Heritage", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nagarjuna Sagar", level: 2 },
  { id: "things-to-do", title: "Dam, Island & Waterfall", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NagarjunaSagarGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Large calm reservoir landscape, evoking Nagarjuna Sagar's dam and lake setting"
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
                { label: "Telangana", href: "/blog/telangana-travel-guide" },
                { label: "Nagarjuna Sagar", href: null },
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
                "Nagarjuna Sagar",
                "Nagarjunakonda",
                "Dam",
                "Buddhist Heritage",
                "Off-beat",
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
              Nagarjuna Sagar: Dam, Island & Buddhist Heritage
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the world's largest masonry dams, an island museum of
              relocated Buddhist heritage reachable only by boat, and a
              waterfall tucked into the same Krishna-river landscape.
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
                  text: "Nalgonda District, Telangana",
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
                  <h2>A Dam, an Island & Lost Heritage Saved</h2>
                  <p>
                    <strong>Nagarjuna Sagar</strong>, roughly 160 km southeast
                    of Hyderabad, is the site of one of the{" "}
                    <strong>world's largest masonry dams</strong>, built
                    across the Krishna river to create a vast reservoir that
                    now defines the landscape here.
                  </p>
                  <p>
                    What makes it more than just an engineering landmark is{" "}
                    <strong>Nagarjunakonda</strong> — an island in the middle
                    of the reservoir that holds the relocated remains of an
                    important ancient Buddhist settlement and centre of
                    learning. When the valley was flooded for the dam, key
                    monuments and relics were carefully moved here rather
                    than lost, and a museum on the island now preserves that
                    heritage — reachable only by a scheduled boat ride from
                    the jetty near the dam.
                  </p>
                  <p>
                    Nearby, the multi-tiered <strong>Ethipothala
                    waterfall</strong> rounds out a day here nicely, and the
                    whole area sits within the broader
                    Nagarjunsagar-Srisailam Tiger Reserve landscape, pairing
                    naturally with a trip to{" "}
                    <Link href="/blog/srisailam-travel-guide">Srisailam</Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Nagarjuna Sagar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Nalgonda district, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~160 km, 3-4 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Masonry Dam, Nagarjunakonda",
                        },
                        {
                          icon: "🛶",
                          label: "Island Access",
                          value: "Scheduled boat only",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Srisailam",
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
                  <h2>Best Time to Visit Nagarjuna Sagar</h2>
                  <p>
                    Water levels at both the dam and Ethipothala waterfall
                    shape when a visit looks its best.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Dec",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Post-monsoon water levels make both the reservoir and Ethipothala waterfall look their most impressive, with pleasant, comfortable weather.",
                      },
                      {
                        season: "Jan – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Still good, cooler",
                        text: "Water levels remain decent and daytime temperatures stay comfortable — a reliable window for a full day outdoors.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot — avoid if possible",
                        text: "Rising heat and lower water levels toward summer make sightseeing less rewarding and less comfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — full reservoir",
                        text: "The dam and reservoir fill dramatically, sometimes with gates opened for excess water — impressive to see but check boat operations, which can be suspended in heavy rain.",
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
                    <strong>Our pick:</strong> October to December — the
                    reservoir and waterfall both look their best on good
                    post-monsoon water levels, with comfortable weather for a
                    full day outdoors.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Nagarjuna Sagar</h2>
                  <ul>
                    <li>
                      <strong>By road from Hyderabad:</strong> Roughly 160
                      km, about 3-4 hours on generally good roads — the
                      simplest and most common way to visit.
                    </li>
                    <li>
                      <strong>By bus:</strong> Regular state transport buses
                      connect Hyderabad to Nagarjuna Sagar, a budget-friendly
                      option if you don't want to drive.
                    </li>
                    <li>
                      <strong>Nearest railhead:</strong> Macherla, requiring a
                      short onward road journey — most visitors find driving
                      directly from Hyderabad more convenient.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check Nagarjunakonda boat
                    timings before you arrive — the island museum is only
                    reachable on scheduled crossings, not on demand.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Dam, Island & Waterfall</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Reservoir landscape near Nagarjuna Sagar dam, Telangana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Nagarjuna Sagar Dam</h3>
                  <p>
                    One of the world's largest masonry dams, an impressive
                    feat of engineering in its own right, with viewpoints
                    that take in both the dam structure and the vast
                    reservoir it holds back.
                  </p>
                  <h3>Nagarjunakonda Island & Museum</h3>
                  <p>
                    A scheduled boat ride from the jetty near the dam takes
                    visitors to Nagarjunakonda, where a museum houses relics
                    and reconstructed monuments from the submerged ancient
                    Buddhist settlement — one of Telangana's more unusual
                    heritage sites given its island-only access.
                  </p>
                  <h3>Ethipothala Waterfall</h3>
                  <p>
                    A scenic multi-tiered waterfall on a tributary of the
                    Krishna, a short drive from the dam — a natural add-on
                    to round out the day.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Nagarjuna Sagar</h2>
                  <p>
                    Telangana Tourism runs lodges near the dam, and there are
                    a handful of private options — many visitors also simply
                    day-trip from Hyderabad.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹1,800/night",
                        picks: [
                          "Basic guesthouses near the dam",
                          "State tourism budget rooms",
                          "Simple lodges in Nagarjuna Sagar town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹4,500/night",
                        picks: [
                          "Haritha (Telangana Tourism) resort",
                          "Private hotels near the reservoir",
                          "Reservoir-view rooms",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹5,000–₹9,000+/night",
                        picks: [
                          "Premium tourism department cottages",
                          "Boutique resort stays nearby",
                          "Full-board weekend packages",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Dam & Nagarjunakonda",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in near the dam",
                          "Dam viewpoint",
                          "Scheduled boat ride to Nagarjunakonda island museum",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Ethipothala & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning visit to Ethipothala waterfall",
                          "Last views of the reservoir",
                          "Drive back to Hyderabad",
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
                    * With an extra day, extend to{" "}
                    <Link href="/blog/srisailam-travel-guide">Srisailam</Link>{" "}
                    for a fuller Krishna-river pilgrimage-and-nature circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat at Nagarjuna Sagar</h2>
                  <ul>
                    <li>
                      <strong>Lodge and resort kitchens:</strong> Most
                      accommodation serves straightforward Andhra/Telangana
                      meals, the most convenient option given limited
                      standalone dining.
                    </li>
                    <li>
                      <strong>Local dhabas near the dam:</strong> Simple food
                      stalls and small restaurants cluster around the dam and
                      town area.
                    </li>
                    <li>
                      <strong>Carry snacks for the island trip:</strong>{" "}
                      Options at Nagarjunakonda itself are minimal — eat
                      before boarding the boat.
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
                          ["Accommodation/night", "₹1,100", "₹3,200", "₹7,000"],
                          [
                            "Car hire from Hyderabad (round trip)",
                            "₹5,500",
                            "₹8,000",
                            "₹12,000",
                          ],
                          ["Food/day", "₹450", "₹950", "₹2,000"],
                          [
                            "Nagarjunakonda boat + museum ticket",
                            "₹100",
                            "₹150",
                            "₹300",
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
                    * Figures are per person, per day (except car hire, a
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Nagarjuna Sagar</h2>
                  <ul>
                    <li>
                      <strong>Check boat timings in advance:</strong>{" "}
                      Nagarjunakonda island runs on a scheduled crossing, not
                      an on-demand ferry.
                    </li>
                    <li>
                      <strong>Combine with Ethipothala waterfall:</strong> A
                      short, worthwhile detour that rounds out the day well.
                    </li>
                    <li>
                      <strong>Visit Oct-Dec for the best water
                      levels:</strong> Both the reservoir and the waterfall
                      look their most impressive in this window.
                    </li>
                    <li>
                      <strong>Carry snacks for the island trip:</strong> Food
                      options on Nagarjunakonda itself are minimal.
                    </li>
                    <li>
                      <strong>Pair with Srisailam for a longer trip:</strong>{" "}
                      Both sit along the Krishna river within the same
                      broader tiger reserve landscape.
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
                          "Check Nagarjunakonda boat schedules ahead",
                          "Visit Oct-Dec for the best water levels",
                          "Combine with Ethipothala waterfall",
                          "Carry snacks and water for the island trip",
                          "Consider pairing with Srisailam",
                          "Book state tourism lodges ahead on weekends",
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
                          "Assume the island boat runs continuously",
                          "Visit in peak summer heat if avoidable",
                          "Expect much food variety on Nagarjunakonda itself",
                          "Skip checking boat operations during heavy monsoon rain",
                          "Rush the museum visit — it rewards unhurried time",
                          "Forget cash for smaller local stalls",
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
                    <strong>🗺️ Extend the trip:</strong> Nagarjuna Sagar
                    pairs naturally with{" "}
                    <Link href="/blog/srisailam-travel-guide">Srisailam</Link>{" "}
                    for a fuller Krishna-river circuit. See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
                    </Link>{" "}
                    for the wider region.
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
                  "Nagarjuna Sagar",
                  "Nagarjunakonda",
                  "Telangana",
                  "Dam",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="nagarjuna-sagar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nagarjuna-sagar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
