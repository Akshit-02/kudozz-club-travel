// src/app/blog/tripura-sundari-temple-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tripura Sundari Temple Guide: Matabari Shakti Peeth",
  description:
    "Complete Tripura Sundari Temple guide — the Matabari Shakti Peeth's history, tortoise-shaped architecture, Kalyan Sagar lake, the Diwali mela, how to reach from Agartala, and visiting tips.",
  keywords:
    "Tripura Sundari Temple, Matabari temple, Shakti Peeth Tripura, Kalyan Sagar lake, Udaipur Tripura temple, Tripura Sundari Mela, Matabari Diwali, Dhanya Manikya temple",
  openGraph: {
    title: "Tripura Sundari Temple Guide: Matabari Shakti Peeth",
    description:
      "A tortoise-shaped temple beside a sacred lake, one of Hinduism's 51 Shakti Peethas — the complete guide to Matabari.",
    url: "https://club.kudozz.in/blog/tripura-sundari-temple-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Traditional temple architecture, evoking the Tripura Sundari Temple at Matabari",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripura Sundari Temple Guide: Matabari Shakti Peeth",
    description:
      "A tortoise-shaped temple beside a sacred lake, one of Hinduism's 51 Shakti Peethas — the complete guide to Matabari.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tripura-sundari-temple-travel-guide",
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
          headline: "Tripura Sundari Temple Guide: Matabari Shakti Peeth",
          description:
            "Complete Tripura Sundari Temple guide — the Matabari Shakti Peeth's history, tortoise-shaped architecture, Kalyan Sagar lake, the Diwali mela, how to reach from Agartala, and visiting tips.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
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
            "@id":
              "https://club.kudozz.in/blog/tripura-sundari-temple-travel-guide",
          },
          keywords:
            "Tripura Sundari Temple, Matabari, Shakti Peeth, Udaipur Tripura, pilgrimage",
          about: {
            "@type": "Place",
            name: "Tripura Sundari Temple",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Udaipur",
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
                name: "Tripura Sundari Temple",
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
    q: "What is a Shakti Peetha, and why does that matter here?",
    a: "Shakti Peethas are sites across the Indian subcontinent believed to mark where parts of the goddess Sati's body fell — 51 in total according to tradition. The Tripura Sundari Temple is one of them, believed to mark where her right foot (or toe) fell, which is a large part of its significance for pilgrims.",
  },
  {
    q: "Why is the temple called Matabari?",
    a: "Matabari is the name of the locality in Udaipur town where the temple stands — the temple itself is dedicated to Tripura Sundari, a form of the goddess, but it's commonly referred to by the place name Matabari.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to March for comfortable weather and manageable crowds, or specifically around Diwali for the temple's major annual mela — though that comes with very large crowds, so plan accordingly.",
  },
  {
    q: "How do I reach the Tripura Sundari Temple?",
    a: "It's in Udaipur town, roughly 55 km from Agartala, about a 1.5–2 hour drive. Most visitors day-trip from Agartala by car or shared taxi.",
  },
  {
    q: "Is the temple crowded?",
    a: "On a normal day it's manageable, but during Diwali and Durga Puja it draws very large crowds — arrive early morning for a shorter queue, or plan around the peak festival days if you'd rather avoid them.",
  },
  {
    q: "Is there a dress code?",
    a: "Modest clothing is expected, as at most Hindu temples in India. Footwear is typically removed before entering the inner temple area — carry a bag for your shoes or use the facilities provided.",
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
  { id: "introduction", title: "One of the 51 Shakti Peethas", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Matabari", level: 2 },
  { id: "things-to-do", title: "Temple, Lake & Festivals", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "What to Expect: Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Prasad", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TripuraSundariTempleGuidePage() {
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
              alt="Traditional temple architecture, evoking the Tripura Sundari Temple at Matabari"
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
                { label: "Tripura Sundari Temple", href: null },
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
                "Tripura Sundari Temple",
                "Matabari",
                "Shakti Peeth",
                "Udaipur Tripura",
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
              Tripura Sundari Temple Guide: Matabari Shakti Peeth
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A tortoise-shaped temple beside a sacred lake full of hand-fed
              fish — one of Hinduism's 51 Shakti Peethas, and Udaipur's
              spiritual heart.
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
                  text: "Matabari, Udaipur, Tripura",
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
                  <h2>One of the 51 Shakti Peethas</h2>
                  <p>
                    The <strong>Tripura Sundari Temple</strong>, at Matabari
                    in{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur town
                    </Link>
                    , South Tripura, is one of the 51 Shakti Peethas of Hindu
                    mythology — sites believed to mark where parts of the
                    goddess Sati's body fell. Here, tradition holds it was
                    her right foot (or toe). It was built around 1501 by
                    Maharaja Dhanya Manikya, and remains one of the most
                    significant pilgrimage sites in Northeast India.
                  </p>
                  <p>
                    What sets it apart architecturally is its shape: the
                    temple is built to resemble a{" "}
                    <strong>tortoise's back</strong> ("Kurma pitha" style),
                    unusual even among the other Shakti Peethas across the
                    subcontinent. It sits beside the sacred{" "}
                    <strong>Kalyan Sagar</strong> lake, home to large fish
                    and turtles that devotees feed by hand.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Tripura Sundari Temple at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Matabari, Udaipur",
                        },
                        { icon: "🏗️", label: "Built", value: "c. 1501" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🐢",
                          label: "Architecture",
                          value: "Tortoise-back shape",
                        },
                        {
                          icon: "🪔",
                          label: "Biggest Mela",
                          value: "Diwali",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~55 km",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Weather and festival crowds both shape the right timing
                    for a visit here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather and generally manageable crowds outside of major festival days.",
                      },
                      {
                        season: "Diwali",
                        emoji: "🪔",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Biggest mela of the year",
                        text: "One of Northeast India's largest Diwali gatherings — incredible atmosphere, but very heavy crowds and queues.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Shortest queues",
                        text: "Arriving soon after the temple opens gives a noticeably calmer, less crowded darshan on any day.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — wetter visit",
                        text: "Heavy rain can make the open temple courtyard and lake area less comfortable to linger in.",
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
                    <strong>Our pick:</strong> An early winter morning for a
                    calm, unhurried darshan — save Diwali for when you
                    specifically want the mela atmosphere and don't mind the
                    crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Matabari</h2>
                  <ul>
                    <li>
                      <strong>From Agartala:</strong> Roughly 55 km, about a
                      1.5–2 hour drive — the most common way to visit, by
                      taxi or shared vehicle.
                    </li>
                    <li>
                      <strong>Within Udaipur town:</strong> The temple sits
                      centrally in Udaipur, an easy auto or short walk from
                      most local stays.
                    </li>
                    <li>
                      <strong>Combining with sightseeing:</strong> Most
                      visitors pair the temple with the rest of{" "}
                      <Link href="/blog/udaipur-tripura-travel-guide">
                        Udaipur's lakes and old-capital sights
                      </Link>{" "}
                      in the same day trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Leave Agartala early and
                    aim to reach the temple soon after it opens — the
                    difference in crowd levels between early morning and
                    midday is significant.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple, Lake & Festivals</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Temple architecture and grounds at Matabari"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Temple's Tortoise-Shaped Architecture</h3>
                  <p>
                    Built around 1501 by Maharaja Dhanya Manikya, the temple
                    is designed in the shape of a tortoise's back — a rare
                    architectural choice that makes it visually distinct
                    from other Shakti Peethas and other Tripura temples
                    alike.
                  </p>
                  <h3>Kalyan Sagar Lake</h3>
                  <p>
                    The sacred lake beside the temple is home to large
                    turtles and fish that devotees feed by hand — a calm,
                    almost meditative counterpart to the temple's more
                    ritual-focused atmosphere.
                  </p>
                  <h3>The Diwali Mela</h3>
                  <p>
                    Diwali is by far the temple's biggest occasion, drawing
                    one of Northeast India's largest religious gatherings —
                    a genuinely striking scene, though visitors should
                    expect very heavy crowds and plan accordingly. Durga
                    Puja is also a significant, though smaller, occasion
                    here.
                  </p>
                  <h3>Ritual Traditions</h3>
                  <p>
                    Like many old Shakti Peethas, the temple carries a
                    historical association with animal sacrifice traditions.
                    This remains part of its documented history — visitors
                    interested only in sightseeing can simply focus on the
                    architecture, lake, and general temple atmosphere.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Most visitors day-trip from{" "}
                    <Link href="/blog/agartala-travel-guide">Agartala</Link>,
                    given the short drive and Agartala's much wider choice of
                    hotels. A handful of modest options exist in Udaipur
                    itself for those who prefer to stay closer, especially
                    around festival periods when an early start really pays
                    off.
                  </p>
                  <blockquote>
                    Basing yourself in Agartala and driving out early is the
                    simplest approach for most travellers — see our{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur guide
                    </Link>{" "}
                    for local stay options if you'd rather overnight closer
                    to the temple.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>What to Expect: Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Step 1",
                        title: "Arrival & Darshan",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early morning for shorter queues",
                          "Remove footwear before the inner temple area",
                          "Join the darshan queue",
                        ],
                      },
                      {
                        day: "Step 2",
                        title: "Kalyan Sagar",
                        color: "bg-sky-600",
                        activities: [
                          "Walk around the lake after darshan",
                          "Feed the resident fish and turtles",
                          "Take in the temple's tortoise-shaped silhouette",
                        ],
                      },
                      {
                        day: "Step 3",
                        title: "Onward Sightseeing",
                        color: "bg-forest-600",
                        activities: [
                          "Continue to the rest of Udaipur's lakes and temples",
                          "Or head back toward Agartala by early afternoon",
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
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food & Prasad</h2>
                  <ul>
                    <li>
                      <strong>Prasad:</strong> Available at and around the
                      temple, typically simple sweets offered as part of
                      darshan.
                    </li>
                    <li>
                      <strong>Nearby stalls:</strong> Small snack and tea
                      stalls cluster around the temple complex, useful
                      between darshan and further sightseeing.
                    </li>
                    <li>
                      <strong>Full meals:</strong> For a proper sit-down
                      meal, Udaipur town or Agartala offer a wider spread of
                      restaurants.
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
                          {["Expense", "Amount (per person)"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Car hire from Agartala (round trip)", "₹2,500 – ₹4,000"],
                          ["Prasad / offerings", "₹50 – ₹300"],
                          ["Food nearby", "₹150 – ₹400"],
                          ["Fish feed for Kalyan Sagar", "₹20 – ₹50"],
                        ].map(([exp, amt], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {amt}
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
                    * Car hire figure is best split across a group and shared
                    with wider Udaipur sightseeing.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting</h2>
                  <ul>
                    <li>
                      <strong>Go early morning:</strong> The single biggest
                      factor in how comfortable your visit is, especially on
                      weekends and festival days.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Standard temple
                      etiquette applies — cover shoulders and knees.
                    </li>
                    <li>
                      <strong>Remove footwear before the inner area:</strong>{" "}
                      Carry a bag for your shoes or use the facilities
                      provided at the entrance.
                    </li>
                    <li>
                      <strong>Avoid driving right up to Diwali:</strong>{" "}
                      Traffic and parking near the temple gets very
                      congested during the main mela days.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> For prasad, offerings, and
                      nearby stalls.
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
                          "Arrive early morning for a calmer darshan",
                          "Dress modestly and carry a bag for footwear",
                          "Feed the fish and turtles at Kalyan Sagar",
                          "Carry cash for prasad and offerings",
                          "Combine with the rest of Udaipur's sights",
                          "Plan extra time if visiting during Diwali",
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
                          "Arrive midday expecting short queues",
                          "Drive right up to the temple during Diwali",
                          "Wear immodest clothing inside the complex",
                          "Rely on card payments for prasad or stalls",
                          "Rush the visit if it's your only Udaipur stop",
                          "Skip checking festival dates before planning",
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
                    <strong>🗺️ Extend the trip:</strong> Combine with the
                    rest of{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur's lakes and old-capital sights
                    </Link>
                    , or read our full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
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
                {[
                  "Tripura Sundari Temple",
                  "Matabari",
                  "Shakti Peeth",
                  "Udaipur Tripura",
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

              <RelatedPostsGrid currentSlug="tripura-sundari-temple-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tripura-sundari-temple-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
