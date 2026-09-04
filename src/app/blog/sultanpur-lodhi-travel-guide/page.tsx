// src/app/blog/sultanpur-lodhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sultanpur Lodhi Guide: Guru Nanak's Sacred Town",
  description:
    "Complete Sultanpur Lodhi guide — Gurdwara Ber Sahib, the Kali Bein rivulet where Guru Nanak is believed to have attained enlightenment, how to reach from Amritsar and Kapurthala, and a full visit plan.",
  keywords:
    "Sultanpur Lodhi travel guide, Gurdwara Ber Sahib, Guru Nanak enlightenment, Kali Bein, Kapurthala district, Sikh history Punjab, how to reach Sultanpur Lodhi",
  openGraph: {
    title: "Sultanpur Lodhi Guide: Guru Nanak's Sacred Town",
    description:
      "The town where Guru Nanak is believed to have attained spiritual enlightenment, and a restored rivulet with its own inspiring story — the complete Sultanpur Lodhi guide.",
    url: "https://club.kudozz.in/blog/sultanpur-lodhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Calm waterway lined with greenery, evoking the restored Kali Bein rivulet at Sultanpur Lodhi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sultanpur Lodhi Guide: Guru Nanak's Sacred Town",
    description:
      "The site of Guru Nanak's spiritual awakening, and a rivulet restored from ecological decline — the complete Sultanpur Lodhi guide.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sultanpur-lodhi-travel-guide",
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
          headline: "Sultanpur Lodhi Guide: Guru Nanak's Sacred Town",
          description:
            "Complete Sultanpur Lodhi guide — Gurdwara Ber Sahib, the Kali Bein rivulet where Guru Nanak is believed to have attained enlightenment, how to reach from Amritsar and Kapurthala, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/sultanpur-lodhi-travel-guide",
          },
          keywords:
            "Sultanpur Lodhi, Guru Nanak, Kali Bein, Gurdwara Ber Sahib, Punjab, Sikh heritage",
          about: {
            "@type": "Place",
            name: "Sultanpur Lodhi",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Punjab",
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
                name: "Punjab",
                item: "https://club.kudozz.in/blog/punjab-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Sultanpur Lodhi",
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
    q: "What is the significance of Sultanpur Lodhi in Sikh history?",
    a: "Sultanpur Lodhi is where Guru Nanak, the founder of Sikhism, is believed to have experienced his spiritual enlightenment while bathing in the Kali Bein rivulet — an event considered foundational to the birth of Sikhism. He lived and worked in the town for years before this awakening.",
  },
  {
    q: "What happened at the Kali Bein?",
    a: "Beyond its role in Guru Nanak's enlightenment, the Kali Bein fell into serious ecological decline over the centuries before undergoing a notable environmental restoration in recent decades, reviving both the waterway and its spiritual significance.",
  },
  {
    q: "How far is Sultanpur Lodhi from Amritsar and Kapurthala?",
    a: "It's roughly 55 km from Amritsar and about 25 km from Kapurthala town, making it an easy addition to a wider Punjab itinerary from either base.",
  },
  {
    q: "Is Sultanpur Lodhi a day trip?",
    a: "Yes, most visitors treat it as a day trip from Amritsar, Jalandhar, or Kapurthala — a half-day is enough to cover the key gurdwaras and a walk along the Kali Bein.",
  },
  {
    q: "What should I know before visiting the gurdwaras here?",
    a: "Cover your head, remove footwear before entering, and dress modestly, as is customary at any gurdwara. Taking time to learn the specific story of Guru Nanak's enlightenment here significantly deepens the experience.",
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
  { id: "introduction", title: "Where Guru Nanak Found Enlightenment", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sultanpur Lodhi", level: 2 },
  { id: "things-to-do", title: "Gurdwara Ber Sahib & the Kali Bein", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SultanpurLodhiGuidePage() {
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
              alt="Calm waterway lined with greenery, evoking the restored Kali Bein rivulet at Sultanpur Lodhi"
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
                { label: "Punjab", href: "/blog/punjab-travel-guide" },
                { label: "Sultanpur Lodhi", href: null },
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
                "Sultanpur Lodhi",
                "Guru Nanak",
                "Punjab",
                "Kapurthala District",
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
              Sultanpur Lodhi: Guru Nanak&apos;s Sacred Town
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The town where Guru Nanak is believed to have attained spiritual
              enlightenment, beside a rivulet restored from decades of
              ecological decline.
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
                  text: "Kapurthala district, Punjab",
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
                  <h2>Where Guru Nanak Found Enlightenment</h2>
                  <p>
                    <strong>Sultanpur Lodhi</strong>, in Kapurthala district,
                    holds one of the deepest wells of significance in Sikh
                    history. It was here that <strong>Guru Nanak</strong>, the
                    founder of Sikhism, is believed to have experienced his
                    spiritual enlightenment while bathing in the{" "}
                    <strong>Kali Bein</strong>, a local rivulet — an event
                    considered foundational to the birth of the faith.
                  </p>
                  <p>
                    Guru Nanak lived and worked in Sultanpur Lodhi for a
                    significant period before this awakening, and several
                    important gurdwaras in the town mark sites tied to his
                    life, most notably{" "}
                    <strong>Gurdwara Ber Sahib</strong>.
                  </p>
                  <p>
                    The Kali Bein itself has its own inspiring modern story: a
                    notable environmental restoration effort in recent decades
                    revived a waterway that had fallen into serious ecological
                    decline, reconnecting the town with both its spiritual
                    history and its natural landscape.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🙏</span> Sultanpur Lodhi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Kapurthala district, Punjab",
                        },
                        {
                          icon: "🚗",
                          label: "From Amritsar",
                          value: "~55 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Gurdwara Ber Sahib",
                        },
                        {
                          icon: "🌊",
                          label: "Also See",
                          value: "Kali Bein rivulet",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹3,000",
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
                  <h2>Best Time to Visit Sultanpur Lodhi</h2>
                  <p>
                    As with most of Punjab, weather comfort varies sharply
                    across the seasons.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for visiting the gurdwaras and walking along the Kali Bein.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around midday",
                        text: "Intense heat makes midday sightseeing uncomfortable; early morning or evening visits work better.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but humid",
                        text: "The Kali Bein and surrounding greenery are at their most vivid, though humidity is high.",
                      },
                      {
                        season: "Guru Nanak Jayanti",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Major celebration",
                        text: "Sultanpur Lodhi sees significant celebrations around Guru Nanak's birth anniversary, with a correspondingly larger crowd.",
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
                    <strong>Our pick:</strong> October to March — cool weather
                    for both the gurdwaras and a relaxed walk along the
                    restored Kali Bein.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sultanpur Lodhi</h2>
                  <ul>
                    <li>
                      <strong>By road from Amritsar:</strong> Roughly 55 km,
                      about a 1.5-hour drive.
                    </li>
                    <li>
                      <strong>By road from Kapurthala:</strong> Roughly 25 km,
                      a short 30-40 minute drive — a natural pairing given the
                      shared district.
                    </li>
                    <li>
                      <strong>By road from Jalandhar:</strong> Roughly 30 km,
                      another practical base for a day trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Pair Sultanpur Lodhi with{" "}
                    <Link href="/blog/kapurthala-travel-guide">
                      Kapurthala
                    </Link>{" "}
                    for a fuller day exploring both the town&apos;s Sikh
                    heritage and Kapurthala&apos;s distinctive Indo-French
                    architecture.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Gurdwara Ber Sahib & the Kali Bein</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Waterway lined with trees, evoking the Kali Bein rivulet at Sultanpur Lodhi"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Gurdwara Ber Sahib</h3>
                  <p>
                    Built near an ancient ber (jujube) tree associated with
                    Guru Nanak&apos;s time in the town, this is the most
                    important gurdwara here, marking the site closest to his
                    enlightenment on the banks of the Kali Bein.
                  </p>
                  <h3>The Kali Bein Rivulet</h3>
                  <p>
                    Beyond its spiritual significance, the Kali Bein carries a
                    genuinely inspiring modern conservation story — a
                    community-driven restoration revived a waterway that had
                    fallen into serious decline, and today it&apos;s worth a
                    walk both for its history and its renewed natural state.
                  </p>
                  <h3>Other Guru Nanak Sites</h3>
                  <p>
                    Several smaller gurdwaras and landmarks around the town
                    mark other moments from Guru Nanak&apos;s years here,
                    adding depth for visitors who want to trace his story in
                    detail.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Sultanpur Lodhi</h2>
                  <p>
                    Most visitors day-trip from Amritsar, Jalandhar, or
                    Kapurthala, though pilgrim accommodation is available near
                    the gurdwaras for those wanting an overnight stay.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Pilgrim Stay",
                        icon: "🛕",
                        range: "Free – ₹500/night",
                        picks: [
                          "Gurdwara guesthouses (sarais)",
                          "Simple, donation-based stays",
                          "Community dining (langar) included",
                        ],
                      },
                      {
                        tier: "Budget Hotel",
                        icon: "🏨",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Local guesthouses in town",
                          "Basic hotels near the bus stand",
                          "Family-run lodges",
                        ],
                      },
                      {
                        tier: "Day Trip",
                        icon: "🚗",
                        range: "Stay in Kapurthala/Amritsar",
                        picks: [
                          "Base in a larger nearby city",
                          "Return same day",
                          "Combine with other district stops",
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
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Gurdwara Ber Sahib",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive and visit Gurdwara Ber Sahib",
                          "Learn the story of Guru Nanak's time here",
                          "Partake in langar if timing allows",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Kali Bein & Nearby Sites",
                        color: "bg-sky-600",
                        activities: [
                          "Walk along the restored Kali Bein",
                          "Visit other Guru Nanak-associated gurdwaras",
                          "Continue to Kapurthala or head back to Amritsar",
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
                  <h2>Where to Eat in Sultanpur Lodhi</h2>
                  <ul>
                    <li>
                      <strong>Langar at the gurdwaras:</strong> Free community
                      meals are served at Gurdwara Ber Sahib and other
                      gurdwaras — a meaningful part of the visit, not just a
                      practical meal option.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Simple Punjabi meals are
                      available in the town centre for a more standard dining
                      experience.
                    </li>
                    <li>
                      <strong>Kapurthala or Jalandhar:</strong> Either nearby
                      city offers a wider restaurant scene if you want more
                      variety.
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
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Accommodation/night", "Free (sarai)", "₹1,200", "₹2,500"],
                          ["Food/day", "Free (langar)", "₹400", "₹900"],
                          ["Local transport", "₹200", "₹500", "₹1,000"],
                          ["Entry fees", "Free", "Free", "Free"],
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
                    * Gurdwara langar and sarai stays are offered freely,
                    though a voluntary donation (seva) is customary and
                    appreciated.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sultanpur Lodhi</h2>
                  <ul>
                    <li>
                      <strong>Cover your head:</strong> A head covering is
                      required at all gurdwaras — carry a scarf or use one
                      provided at the entrance.
                    </li>
                    <li>
                      <strong>Remove footwear:</strong> Footwear counters are
                      available at gurdwara entrances.
                    </li>
                    <li>
                      <strong>Learn the story first:</strong> Understanding
                      Guru Nanak's enlightenment here adds significant depth
                      to the visit.
                    </li>
                    <li>
                      <strong>Combine with Kapurthala:</strong> The two make a
                      natural single-day pairing.
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
                          "Cover your head and remove footwear at gurdwaras",
                          "Walk along the restored Kali Bein",
                          "Partake respectfully in langar if offered",
                          "Combine with a Kapurthala day trip",
                          "Learn the enlightenment story before visiting",
                          "Leave a voluntary donation if you can",
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
                          "Enter a gurdwara without a head covering",
                          "Rush through without understanding the history",
                          "Expect a large hotel scene in the town itself",
                          "Visit during peak summer heat if avoidable",
                          "Wear leather items into the gurdwara premises",
                          "Skip the Kali Bein walk — it's part of the story",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Sultanpur Lodhi
                    with{" "}
                    <Link href="/blog/kapurthala-travel-guide">
                      Kapurthala
                    </Link>{" "}
                    or continue on to{" "}
                    <Link href="/blog/amritsar-travel-guide">Amritsar</Link>{" "}
                    and the{" "}
                    <Link href="/blog/golden-temple-travel-guide">
                      Golden Temple
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
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
                  "Sultanpur Lodhi",
                  "Guru Nanak",
                  "Punjab",
                  "Kapurthala District",
                  "Sikh Heritage",
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

              <RelatedPostsGrid currentSlug="sultanpur-lodhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sultanpur-lodhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
