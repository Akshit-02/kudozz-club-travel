// src/app/blog/tarn-taran-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tarn Taran Sahib Guide: The Largest Sarovar",
  description:
    "Complete Tarn Taran Sahib guide — the gurdwara with the largest sarovar of any Sikh shrine, its founding by Guru Arjan Dev, how to reach from Amritsar, and visiting etiquette.",
  keywords:
    "Tarn Taran Sahib, largest sarovar Sikh gurdwara, Guru Arjan Dev, Tarn Taran travel guide, Amritsar district, Sikh heritage Punjab, how to reach Tarn Taran",
  openGraph: {
    title: "Tarn Taran Sahib Guide: The Largest Sarovar",
    description:
      "The gurdwara with the largest sacred pool of any Sikh shrine — larger even than the Golden Temple's — a short drive from Amritsar.",
    url: "https://club.kudozz.in/blog/tarn-taran-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Large calm lake reflecting the sky, evoking the vast sarovar at Tarn Taran Sahib",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarn Taran Sahib Guide: The Largest Sarovar",
    description:
      "The largest sarovar of any Sikh gurdwara, founded by Guru Arjan Dev — a short, worthwhile trip from Amritsar.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tarn-taran-travel-guide",
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
          headline: "Tarn Taran Sahib Guide: The Largest Sarovar",
          description:
            "Complete Tarn Taran Sahib guide — the gurdwara with the largest sarovar of any Sikh shrine, its founding by Guru Arjan Dev, how to reach from Amritsar, and visiting etiquette.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/tarn-taran-travel-guide",
          },
          keywords:
            "Tarn Taran Sahib, largest sarovar, Guru Arjan Dev, Punjab, Sikh heritage, Amritsar district",
          about: {
            "@type": "Place",
            name: "Tarn Taran Sahib",
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
                name: "Tarn Taran Sahib",
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
    q: "Why is Tarn Taran's sarovar notable?",
    a: "Sri Darbar Sahib Tarn Taran has the largest sarovar (sacred pool) of any Sikh gurdwara — larger even than the Golden Temple's sarovar in nearby Amritsar, a genuinely distinctive claim to fame.",
  },
  {
    q: "How far is Tarn Taran from Amritsar?",
    a: "It's a short drive, roughly 25 km, making it easy to combine with an Amritsar-based Punjab trip.",
  },
  {
    q: "Is Tarn Taran Sahib a day trip?",
    a: "Yes — most visitors treat it as a half-day addition to an Amritsar itinerary rather than an overnight destination.",
  },
  {
    q: "What is the historical significance of the site?",
    a: "The gurdwara was founded by Guru Arjan Dev, and historically the site was also known as a place of healing and pilgrimage, with historical accounts associating it with people seeking relief from various ailments in earlier centuries.",
  },
  {
    q: "What is the visiting etiquette?",
    a: "The same as any gurdwara: cover your head, remove footwear before entering, and dress modestly. Photography rules can vary near the sanctum, so follow local signage and staff guidance.",
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
  { id: "introduction", title: "The Largest Sarovar in Sikhism", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tarn Taran", level: 2 },
  { id: "things-to-do", title: "The Gurdwara & Sarovar", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TarnTaranGuidePage() {
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
              alt="Large calm lake reflecting the sky, evoking the vast sarovar at Tarn Taran Sahib"
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
                { label: "Tarn Taran Sahib", href: null },
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
                "Tarn Taran Sahib",
                "Punjab",
                "Sikh Heritage",
                "Amritsar District",
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
              Tarn Taran Sahib: The Largest Sarovar in Sikhism
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A short drive from Amritsar, this gurdwara holds a sacred pool
              larger than the Golden Temple&apos;s own.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Amritsar district, Punjab",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>The Largest Sarovar in Sikhism</h2>
                  <p>
                    <strong>Tarn Taran</strong> is home to{" "}
                    <strong>Sri Darbar Sahib Tarn Taran</strong>, founded by
                    Guru Arjan Dev, and notable for having the largest{" "}
                    <strong>sarovar</strong> (sacred pool) of any Sikh
                    gurdwara — larger even than the Golden Temple&apos;s
                    sarovar in nearby Amritsar, a genuinely distinctive
                    superlative worth knowing before you visit.
                  </p>
                  <p>
                    Historically, the site was also known as a place of
                    healing and pilgrimage, with some historical accounts
                    associating it with people seeking relief from various
                    ailments in earlier centuries — a layer of history that
                    adds to the site&apos;s deep local significance.
                  </p>
                  <p>
                    Sitting close to Amritsar, Tarn Taran makes an easy and
                    worthwhile addition to an Amritsar-based itinerary for
                    anyone interested in Sikh heritage beyond the Golden
                    Temple alone.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Tarn Taran at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Amritsar district, Punjab",
                        },
                        {
                          icon: "🚗",
                          label: "From Amritsar",
                          value: "~25 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Largest Sarovar",
                        },
                        {
                          icon: "🙏",
                          label: "Founded By",
                          value: "Guru Arjan Dev",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹500 – ₹2,000",
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
                  <h2>Best Time to Visit Tarn Taran</h2>
                  <p>
                    As with the rest of Punjab, comfort varies considerably
                    across the year.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for visiting the gurdwara and walking around the sarovar.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around midday",
                        text: "Punjab's summer heat makes midday visits uncomfortable; early morning or evening is better.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid",
                        text: "Intermittent rain and high humidity; the sarovar looks especially full and reflective in this season.",
                      },
                      {
                        season: "Gurpurab periods",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Festive atmosphere",
                        text: "Major Sikh festival days bring a livelier, more devotional atmosphere, along with larger crowds.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    weather for a relaxed visit and a walk around the sarovar.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tarn Taran</h2>
                  <ul>
                    <li>
                      <strong>By road from Amritsar:</strong> Roughly 25 km,
                      about a 40-minute drive — the most common route.
                    </li>
                    <li>
                      <strong>By rail:</strong> Tarn Taran has its own railway
                      station on the Amritsar line.
                    </li>
                    <li>
                      <strong>By road from other Punjab cities:</strong> Well
                      connected by highway to the wider Majha region.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit Tarn Taran in the same
                    trip as the{" "}
                    <Link href="/blog/golden-temple-travel-guide">
                      Golden Temple
                    </Link>{" "}
                    — the contrast between the two sarovars is part of the
                    experience.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Gurdwara & Sarovar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Large sacred pool at Tarn Taran Sahib, Punjab"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Sri Darbar Sahib Tarn Taran</h3>
                  <p>
                    The gurdwara itself, founded by Guru Arjan Dev, is a
                    significant site within the wider network of major Sikh
                    shrines in the Amritsar region — quieter and less crowded
                    than the Golden Temple, but no less meaningful.
                  </p>
                  <h3>The Sarovar</h3>
                  <p>
                    The sacred pool surrounding the gurdwara is the largest of
                    any Sikh shrine, and its scale is genuinely striking in
                    person — a slow walk around its perimeter is a fitting way
                    to take it in.
                  </p>
                  <h3>Historical Significance</h3>
                  <p>
                    The site's historical association with healing and
                    pilgrimage adds another layer to its story, reflecting
                    centuries of devotion beyond its architectural scale.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Tarn Taran</h2>
                  <p>
                    Day trip from Amritsar is the norm — Tarn Taran has
                    limited dedicated tourist accommodation.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Pilgrim Stay",
                        icon: "🛕",
                        range: "Free – ₹500/night",
                        picks: [
                          "Gurdwara guesthouse (sarai)",
                          "Donation-based accommodation",
                          "Community dining (langar) included",
                        ],
                      },
                      {
                        tier: "Budget Hotel",
                        icon: "🏨",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Local guesthouses in town",
                          "Basic hotels near the station",
                        ],
                      },
                      {
                        tier: "Day Trip",
                        icon: "🚗",
                        range: "Stay in Amritsar",
                        picks: [
                          "Base yourself in Amritsar",
                          "Return same day after visiting",
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
                  <h2>Suggested Visit Plan (Half Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive & Darshan",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Amritsar (~40 minutes)",
                          "Darshan at Sri Darbar Sahib Tarn Taran",
                          "Walk the sarovar perimeter",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Return or Continue",
                        color: "bg-sky-600",
                        activities: [
                          "Langar if timing allows",
                          "Return to Amritsar for the afternoon",
                          "Or continue onward within Punjab",
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
                  <h2>Where to Eat in Tarn Taran</h2>
                  <ul>
                    <li>
                      <strong>Langar at the gurdwara:</strong> A free
                      community meal, open to all visitors — a meaningful part
                      of a gurdwara visit.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Simple Punjabi meals in
                      the town centre.
                    </li>
                    <li>
                      <strong>Amritsar:</strong> The far larger food scene
                      back in Amritsar is easy to enjoy on either end of the
                      trip.
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
                          ["Car hire from Amritsar (round trip)", "₹1,200", "₹2,000", "₹3,000"],
                          ["Food/day", "Free (langar)", "₹400", "₹900"],
                          ["Local transport", "₹100", "₹300", "₹600"],
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
                    * Entry to the gurdwara is free; car hire from Amritsar is
                    the main cost for a half-day trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Tarn Taran</h2>
                  <ul>
                    <li>
                      <strong>Cover your head:</strong> Required at the
                      gurdwara, as at any Sikh shrine.
                    </li>
                    <li>
                      <strong>Remove footwear:</strong> Footwear counters are
                      available at the entrance.
                    </li>
                    <li>
                      <strong>Combine with the Golden Temple:</strong> The
                      contrast in scale between the two sarovars makes for a
                      memorable pairing.
                    </li>
                    <li>
                      <strong>Visit with the same respect as any major
                      gurdwara:</strong> Tarn Taran deserves the same
                      reverence as more famous Sikh shrines.
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
                          "Cover your head and remove footwear",
                          "Walk the full perimeter of the sarovar",
                          "Combine with a Golden Temple visit",
                          "Try the langar if timing allows",
                          "Dress modestly throughout the visit",
                          "Ask staff about photography rules near the sanctum",
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
                          "Skip head covering or footwear removal",
                          "Expect Golden Temple-level crowds or infrastructure",
                          "Rush the visit — take time by the sarovar",
                          "Forget it's a short, easy add-on from Amritsar",
                          "Wear leather items into the gurdwara premises",
                          "Overlook the site's historical healing associations",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Tarn Taran with{" "}
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
                  "Tarn Taran Sahib",
                  "Punjab",
                  "Sikh Heritage",
                  "Amritsar District",
                  "Guru Arjan Dev",
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

              <RelatedPostsGrid currentSlug="tarn-taran-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tarn-taran-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
