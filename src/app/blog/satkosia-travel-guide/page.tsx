// src/app/blog/satkosia-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Satkosia Gorge Guide: Tiger Reserve & Safari",
  description:
    "Complete Satkosia guide — the Mahanadi river gorge through the Eastern Ghats, river-gorge boat safaris, mugger crocodiles, and a full visit plan for one of Odisha's quietest reserves.",
  keywords:
    "Satkosia travel guide, Satkosia Gorge, Satkosia Tiger Reserve, Mahanadi river, boat safari Odisha, Angul, Nayagarh, how to reach Satkosia, Odisha wildlife",
  openGraph: {
    title: "Satkosia Gorge Guide: Tiger Reserve & Safari",
    description:
      "A dramatic gorge carved by the Mahanadi through the Eastern Ghats, explored by river-gorge boat safari — one of Odisha's quietest wildlife reserves.",
    url: "https://club.kudozz.in/blog/satkosia-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain river gorge landscape, evoking Satkosia's Mahanadi river gorge cutting through the Eastern Ghats in Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Satkosia Gorge Guide: Tiger Reserve & Safari",
    description:
      "A dramatic river gorge through the Eastern Ghats, explored by boat rather than jeep — the complete Satkosia guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/satkosia-travel-guide",
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
          headline: "Satkosia Gorge Guide: Tiger Reserve & Safari",
          description:
            "Complete Satkosia guide — the Mahanadi river gorge through the Eastern Ghats, river-gorge boat safaris, mugger crocodiles, and a full visit plan for one of Odisha's quietest reserves.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/satkosia-travel-guide",
          },
          keywords: "Satkosia, Mahanadi River, Odisha, Tiger Reserve, Gorge",
          about: {
            "@type": "Place",
            name: "Satkosia",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Satkosia",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What makes Satkosia different from other tiger reserves?",
    a: "Its centrepiece experience is a river-gorge boat safari along the Mahanadi rather than a jeep drive — a genuinely different way of exploring a wildlife reserve, gliding beneath forested gorge walls rather than bouncing along forest tracks.",
  },
  {
    q: "Are tiger sightings likely?",
    a: "Not reliably — as with several of Odisha's reserves, wildlife density here is lower than more famous parks elsewhere in India. Go for the gorge scenery and the boat-safari experience, and treat any big-cat sighting as a bonus rather than the goal.",
  },
  {
    q: "How far is Satkosia from Cuttack or Bhubaneswar?",
    a: "Roughly 120-150 km from either city depending on the exact access point, a 3-4 hour drive.",
  },
  {
    q: "Is the boat safari the main way to explore it?",
    a: "Yes — the river-gorge boat safari along the Mahanadi is the signature Satkosia experience, though some zones do offer traditional jeep-based safaris as well.",
  },
  {
    q: "What is the best time to visit?",
    a: "November to February, for comfortable safari conditions and clearer river water.",
  },
  {
    q: "Can Satkosia be combined with Cuttack?",
    a: "Yes — the two share regional access and pair naturally into a single trip covering Cuttack's heritage sights and Satkosia's gorge safari.",
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
  { id: "introduction", title: "A Gorge Cut by the Mahanadi", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Satkosia", level: 2 },
  { id: "things-to-do", title: "Boat Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SatkosiaGuidePage() {
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
              alt="Mountain river gorge landscape, evoking Satkosia's Mahanadi river gorge cutting through the Eastern Ghats in Odisha"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Satkosia", href: null },
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
              {["Satkosia", "Mahanadi River", "Odisha", "Tiger Reserve", "Boat Safari"].map(
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
              Satkosia Gorge Guide: Tiger Reserve & Safari
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A dramatic gorge carved by the Mahanadi river through the
              Eastern Ghats, explored by boat rather than jeep — one of
              Odisha&apos;s quietest, most scenic reserves.
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
                  text: "Angul / Nayagarh, Odisha",
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
                  <h2>A Gorge Cut by the Mahanadi</h2>
                  <p>
                    <strong>Satkosia Tiger Reserve</strong> is built around a
                    dramatic gorge carved by the <strong>Mahanadi
                    river</strong> as it cuts through the Eastern Ghats,
                    spanning Angul and Nayagarh districts. Its defining
                    feature — and the reason it&apos;s worth a dedicated
                    trip — is the <strong>river-gorge boat safari</strong>,
                    a genuinely different way to explore a wildlife reserve:
                    gliding along the Mahanadi beneath forested gorge walls
                    rather than bouncing along dusty forest tracks in a jeep.
                  </p>
                  <p>
                    The reserve has a healthy population of mugger
                    crocodiles, along with tigers, leopards, and elephants —
                    though as with several of Odisha&apos;s reserves,
                    wildlife density and sighting odds are generally lower
                    than more famous parks elsewhere in India. It&apos;s
                    best approached as a scenic, quieter alternative rather
                    than a guaranteed big-cat safari.
                  </p>
                  <p>
                    Satkosia remains considerably less visited than
                    Odisha&apos;s other wildlife destinations, which is
                    exactly its appeal for travelers who want a peaceful,
                    uncrowded nature experience rather than a busy safari
                    circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛶</span> Satkosia at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Angul / Nayagarh, Odisha",
                        },
                        {
                          icon: "🛶",
                          label: "Signature Experience",
                          value: "River-Gorge Boat Safari",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🐊",
                          label: "Known For",
                          value: "Mugger Crocodiles, Gorge Scenery",
                        },
                        {
                          icon: "🌊",
                          label: "River",
                          value: "Mahanadi",
                        },
                        {
                          icon: "🏨",
                          label: "Suggested Stay",
                          value: "1–2 Days",
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
                  <h2>Best Time to Visit Satkosia</h2>
                  <p>
                    River conditions and comfortable safari weather both
                    shape the best window to visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather and clearer river water for the gorge boat safari.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still workable",
                        text: "Rising heat but generally manageable for a morning boat safari.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — restricted access",
                        text: "The Mahanadi swells significantly, often suspending boat safaris for safety.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Post-monsoon, lush scenery",
                        text: "The gorge is at its greenest just after the rains ease, with the river still running full.",
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
                    <strong>Our pick:</strong> November to February — the
                    most comfortable window for the boat safari, with clear
                    water and pleasant temperatures.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Satkosia</h2>
                  <ul>
                    <li>
                      <strong>By road from Angul:</strong> The nearest major
                      town and the most common access point for the reserve
                      and its boat-safari launch.
                    </li>
                    <li>
                      <strong>By road from Cuttack:</strong> Roughly 120–150
                      km, a 3–4 hour drive — cross-link{" "}
                      <Link href="/blog/cuttack-travel-guide">Cuttack</Link>{" "}
                      for a combined trip.
                    </li>
                    <li>
                      <strong>By road from Bhubaneswar:</strong> A similar
                      driving distance via Nayagarh or Angul depending on
                      the specific entry point.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book the river-gorge boat
                    safari in advance — it&apos;s the reserve&apos;s
                    signature experience and slots can be limited,
                    especially on weekends.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Boat Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Mahanadi river gorge landscape within Satkosia Tiger Reserve, Odisha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The River-Gorge Boat Safari</h3>
                  <p>
                    The signature Satkosia experience — a boat glides along
                    the Mahanadi beneath forested gorge walls, offering
                    river-level views impossible to get from a jeep. Time it
                    for early morning or late afternoon for the softest
                    light and best wildlife activity.
                  </p>
                  <h3>Mugger Crocodile Sightings</h3>
                  <p>
                    The reserve has a healthy mugger crocodile population,
                    often visible basking along the riverbanks during the
                    boat safari.
                  </p>
                  <h3>Tigers, Leopards & Elephants</h3>
                  <p>
                    All present within the reserve, though sighting odds are
                    genuinely lower than at more famous Indian tiger
                    reserves — approach a visit here with the gorge scenery
                    as the primary draw, not a guaranteed big-cat encounter.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is limited to a handful of forest lodges
                    near the reserve boundary.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,500/night",
                        picks: [
                          "Forest department rest houses",
                          "Basic guesthouses in Angul",
                          "Simple village lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Nature-lodge stays near the reserve",
                          "Angul business hotels",
                          "River-view guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛶",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Premium eco-lodges",
                          "Full-board boat-safari packages",
                          "Boutique riverside stays",
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
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Evening Boat Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Cuttack, Bhubaneswar, or Angul",
                          "Check in near the reserve",
                          "Evening river-gorge boat safari",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Morning Safari & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Early-morning boat safari for the best wildlife activity",
                          "Explore nearby gorge viewpoints if time allows",
                          "Departure, optionally via Cuttack",
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
                    * With more time, combine this trip with{" "}
                    <Link href="/blog/cuttack-travel-guide">Cuttack</Link>{" "}
                    for a fuller central-Odisha heritage-and-nature circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Satkosia</h2>
                  <ul>
                    <li>
                      <strong>Lodge kitchens:</strong> Most accommodation
                      serves simple home-style Odia meals, the most
                      reliable option given limited standalone dining
                      nearby.
                    </li>
                    <li>
                      <strong>Angul town:</strong> A wider range of
                      restaurants for those basing themselves there.
                    </li>
                    <li>
                      <strong>Carry snacks for the boat safari:</strong> No
                      food options exist on the water itself.
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
                            "₹1,000",
                            "₹2,500",
                            "₹5,500",
                          ],
                          ["Boat safari (per trip)", "₹1,500", "₹2,500", "₹4,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          ["Local transport/day", "₹800", "₹1,500", "₹3,000"],
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
                    * Boat safari costs are typically per-boat — split
                    across your group for a lower per-head figure.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Satkosia</h2>
                  <ul>
                    <li>
                      <strong>Book the boat safari in advance:</strong> It&apos;s
                      the reserve&apos;s core experience — don&apos;t leave
                      it to chance.
                    </li>
                    <li>
                      <strong>Go with realistic wildlife
                      expectations:</strong> The gorge scenery is the
                      reliable draw, not guaranteed tiger sightings.
                    </li>
                    <li>
                      <strong>Combine with Cuttack:</strong> Shared regional
                      access makes this an efficient pairing.
                    </li>
                    <li>
                      <strong>Check monsoon-season access:</strong> Boat
                      safaris are often suspended when the Mahanadi runs
                      high.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Limited
                      options once you're on the reserve.
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
                          "Book the river-gorge boat safari in advance",
                          "Go for the gorge scenery, not guaranteed tiger sightings",
                          "Combine the trip with Cuttack",
                          "Visit Nov-Feb for the clearest water",
                          "Carry water, snacks, and sun protection",
                          "Ask about jeep-safari zones if boats are unavailable",
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
                          "Expect big-cat sightings to be guaranteed",
                          "Arrive without a pre-booked boat safari",
                          "Visit during heavy monsoon flow",
                          "Rely on finding food inside the reserve",
                          "Rush the visit — the gorge rewards a slow pace",
                          "Skip Cuttack if you have the extra day",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Satkosia with{" "}
                    <Link href="/blog/cuttack-travel-guide">Cuttack</Link>{" "}
                    for a fuller central-Odisha loop, or explore our guides
                    to <Link href="/blog/similipal-travel-guide">
                      Similipal
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/bhitarkanika-travel-guide">
                      Bhitarkanika
                    </Link>{" "}
                    for the wider Odisha wildlife circuit, or check the full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
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
                  "Satkosia",
                  "Mahanadi River",
                  "Odisha",
                  "Tiger Reserve",
                  "Boat Safari",
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

              <RelatedPostsGrid currentSlug="satkosia-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="satkosia-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
