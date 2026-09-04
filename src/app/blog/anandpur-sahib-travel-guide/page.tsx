// src/app/blog/anandpur-sahib-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Anandpur Sahib Guide: Birthplace of the Khalsa",
  description:
    "Complete Anandpur Sahib guide — Gurdwara Kesgarh Sahib, the founding of the Khalsa, the Virasat-e-Khalsa museum, Hola Mohalla festival, how to reach, and a full visit plan.",
  keywords:
    "Anandpur Sahib, Khalsa, Gurdwara Kesgarh Sahib, Virasat-e-Khalsa, Hola Mohalla, Punjab, Sikh heritage, five Takhts",
  openGraph: {
    title: "Anandpur Sahib Guide: Birthplace of the Khalsa",
    description:
      "Where Guru Gobind Singh founded the Khalsa in 1699 — one of the five Takhts of Sikhism, and home to a striking modern heritage museum.",
    url: "https://club.kudozz.in/blog/anandpur-sahib-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hillside town landscape evoking Anandpur Sahib's setting in Rupnagar district, Punjab",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Anandpur Sahib Guide: Birthplace of the Khalsa",
    description:
      "One of the five Takhts of Sikhism, and the site where the Khalsa was founded in 1699 — the complete Anandpur Sahib guide.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/anandpur-sahib-travel-guide",
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
          headline: "Anandpur Sahib Guide: Birthplace of the Khalsa",
          description:
            "Complete Anandpur Sahib guide — Gurdwara Kesgarh Sahib, the founding of the Khalsa, the Virasat-e-Khalsa museum, Hola Mohalla festival, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/anandpur-sahib-travel-guide",
          },
          keywords:
            "Anandpur Sahib, Khalsa, Gurdwara Kesgarh Sahib, Virasat-e-Khalsa, Hola Mohalla, Punjab",
          about: {
            "@type": "Place",
            name: "Anandpur Sahib",
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
                name: "Anandpur Sahib",
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
    q: "Why is Anandpur Sahib significant in Sikh history?",
    a: "It's one of the five Takhts (seats of temporal authority) of Sikhism, founded in 1665 by Guru Tegh Bahadur, and the site where Guru Gobind Singh founded the Khalsa in 1699 — a landmark event in the faith's history.",
  },
  {
    q: "What is the Khalsa?",
    a: "The Khalsa is the collective body of initiated Sikhs, formally established by Guru Gobind Singh at Anandpur Sahib in 1699, marking a defining moment in Sikh identity and organization.",
  },
  {
    q: "When is Hola Mohalla?",
    a: "Hola Mohalla is held annually around Holi, typically in March, featuring martial arts displays, mock battles, and processions by the Nihang (traditional Sikh warrior order) — a vivid, distinctive festival unlike most others in India.",
  },
  {
    q: "How far is Anandpur Sahib from Chandigarh or Amritsar?",
    a: "Roughly 2 hours from Chandigarh by road, and a longer drive from Amritsar — most visitors combine it with a Chandigarh-based itinerary rather than an Amritsar day trip.",
  },
  {
    q: "Is Virasat-e-Khalsa worth visiting?",
    a: "Yes — it's a substantial, well-curated museum on Sikh heritage with striking contemporary architecture, worth allocating real time to rather than treating as a quick stop.",
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
  { id: "introduction", title: "Birthplace of the Khalsa", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Anandpur Sahib", level: 2 },
  { id: "things-to-do", title: "Kesgarh Sahib, Virasat-e-Khalsa & More", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AnandpurSahibGuidePage() {
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
              src="/images/destinations/manali/hero.jpg"
              alt="Hillside town landscape evoking Anandpur Sahib's setting in Rupnagar district, Punjab"
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
                { label: "Anandpur Sahib", href: null },
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
                "Anandpur Sahib",
                "Khalsa",
                "Punjab",
                "Sikh Heritage",
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
              Anandpur Sahib Guide: Birthplace of the Khalsa
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the five Takhts of Sikhism, where Guru Gobind Singh
              founded the Khalsa in 1699 — and home to one of India's most
              striking modern heritage museums.
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
                  text: "Rupnagar district, Punjab",
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
                  <h2>Birthplace of the Khalsa</h2>
                  <p>
                    <strong>Anandpur Sahib</strong>, in Rupnagar district, is
                    one of the five Takhts (seats of temporal authority) of
                    Sikhism and holds profound historical significance. It
                    was founded in 1665 by{" "}
                    <strong>Guru Tegh Bahadur</strong>, and it was here in
                    1699 that <strong>Guru Gobind Singh</strong> founded the{" "}
                    <strong>Khalsa</strong> — the collective body of
                    initiated Sikhs — in a landmark event that reshaped Sikh
                    identity and history.
                  </p>
                  <p>
                    <strong>Gurdwara Kesgarh Sahib</strong> marks the site
                    of this founding and is the town's most significant
                    shrine. Nearby, <strong>Virasat-e-Khalsa</strong> is a
                    modern museum dedicated to Sikh heritage, notable for
                    its striking contemporary architecture alongside its
                    historical content — worth visiting for the building
                    itself as much as the exhibits.
                  </p>
                  <p>
                    The town also hosts <strong>Hola Mohalla</strong>, a
                    major annual festival around Holi featuring martial arts
                    displays, mock battles, and processions by the Nihang
                    (traditional Sikh warrior order) — a vivid, distinctive
                    event unlike most other festivals in India.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Anandpur Sahib at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Rupnagar, Punjab" },
                        {
                          icon: "🚗",
                          label: "From Chandigarh",
                          value: "~2 hours",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Khalsa founding, Kesgarh Sahib",
                        },
                        {
                          icon: "🎉",
                          label: "Festival",
                          value: "Hola Mohalla (March)",
                        },
                        {
                          icon: "🏛️",
                          label: "Museum",
                          value: "Virasat-e-Khalsa",
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
                  <h2>Best Time to Visit Anandpur Sahib</h2>
                  <p>
                    Punjab's continental climate and the timing of Hola
                    Mohalla both shape when a visit is at its best.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable weather for exploring the gurdwara and Virasat-e-Khalsa at an unhurried pace.",
                      },
                      {
                        season: "March",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Hola Mohalla",
                        text: "The festival brings the town to life with martial displays and processions — spectacular but very crowded.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Punjab's summer heat makes extended outdoor sightseeing genuinely difficult.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Humid but manageable with some flexibility in your plans.",
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
                    <strong>Our pick:</strong> October to March for a
                    comfortable, unhurried visit — or March specifically if
                    you want to experience Hola Mohalla, keeping in mind the
                    much larger crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Anandpur Sahib</h2>
                  <ul>
                    <li>
                      <strong>By Road from Chandigarh:</strong> Roughly 2
                      hours — the most common approach for most visitors.
                    </li>
                    <li>
                      <strong>By Road from Amritsar:</strong> A longer
                      drive; most visitors combine Anandpur Sahib with a
                      Chandigarh-based itinerary rather than an Amritsar day
                      trip.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Anandpur Sahib has its own
                      railway station with connections from nearby cities.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If visiting during Hola
                    Mohalla, plan for significant road traffic and arrange
                    accommodation well in advance given the surge in
                    visitors.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Kesgarh Sahib, Virasat-e-Khalsa & More</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hero.jpg"
                      alt="Hillside landscape evoking Anandpur Sahib's setting"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Gurdwara Kesgarh Sahib</h3>
                  <p>
                    The town's most significant shrine, marking the site
                    where Guru Gobind Singh founded the Khalsa in 1699 — the
                    essential stop for any visit to Anandpur Sahib.
                  </p>
                  <h3>Virasat-e-Khalsa</h3>
                  <p>
                    A modern museum dedicated to Sikh heritage and history,
                    notable for its bold contemporary architecture as much
                    as its historical exhibits — allocate real time here
                    rather than a quick pass-through.
                  </p>
                  <h3>Hola Mohalla</h3>
                  <p>
                    Held annually around Holi, this festival features
                    martial arts displays, mock battles, and processions by
                    the Nihang — a vivid, unmissable spectacle if your
                    timing allows, though expect very large crowds.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Pilgrim accommodation near the gurdwara sits alongside
                    a modest range of standard hotels — book ahead if
                    visiting during Hola Mohalla, when demand spikes
                    sharply.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Pilgrim guesthouses near the gurdwara",
                          "Basic hotels in town",
                          "Dharamshalas",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹3,500/night",
                        picks: [
                          "Standard hotels, central Anandpur Sahib",
                          "Business hotels nearby",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛕",
                        range: "₹4,000+/night",
                        picks: [
                          "Premium hotels in nearby towns",
                          "Chandigarh as a comfortable base with a day trip out",
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
                        day: "Morning",
                        title: "Gurdwara Kesgarh Sahib",
                        color: "bg-amber-700",
                        activities: [
                          "Visit the gurdwara and learn the Khalsa founding history",
                          "Explore the surrounding complex",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Virasat-e-Khalsa",
                        color: "bg-sky-600",
                        activities: [
                          "Tour the museum's galleries in depth",
                          "Appreciate the building's contemporary architecture",
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
                    * A single focused day covers both sites well; extend to
                    an overnight if visiting during Hola Mohalla.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Anandpur Sahib</h2>
                  <ul>
                    <li>
                      <strong>Langar:</strong> As at any major gurdwara, a
                      free community meal is available to all visitors.
                    </li>
                    <li>
                      <strong>Local Punjabi dhabas:</strong> Simple,
                      hearty Punjabi fare is easy to find around town.
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
                          ["Accommodation/night", "₹1,000", "₹2,500", "₹4,500"],
                          ["Food/day", "Free (langar) – ₹600", "₹800", "₹1,500"],
                          ["Virasat-e-Khalsa entry", "Free", "Free", "Free"],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
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
                    * Virasat-e-Khalsa is free to enter; langar is always
                    free at the gurdwara.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Anandpur Sahib</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly and cover your head:</strong>{" "}
                      Required at Gurdwara Kesgarh Sahib, as at any Sikh
                      shrine.
                    </li>
                    <li>
                      <strong>Allocate real time for Virasat-e-Khalsa:</strong>{" "}
                      It's a substantial, well-curated museum, not a quick
                      stop.
                    </li>
                    <li>
                      <strong>Plan ahead for Hola Mohalla:</strong> Book
                      accommodation early and expect very large crowds if
                      visiting during the festival.
                    </li>
                    <li>
                      <strong>Combine with a Chandigarh-based trip:</strong>{" "}
                      The roughly 2-hour drive makes this a very manageable
                      day trip or overnight from Chandigarh.
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
                          "Cover your head and dress modestly at the gurdwara",
                          "Set aside real time for Virasat-e-Khalsa",
                          "Book ahead if visiting during Hola Mohalla",
                          "Try the langar meal",
                          "Combine with a Chandigarh-based itinerary",
                          "Learn the Khalsa founding story before you visit",
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
                          "Rush Virasat-e-Khalsa into a quick photo stop",
                          "Show up for Hola Mohalla without booking accommodation",
                          "Enter the gurdwara without covering your head",
                          "Treat this as a same-day Amritsar side trip — the distance is long",
                          "Skip learning the Khalsa history before visiting",
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
                    <strong>🗺️ Extend the trip:</strong> Combine with{" "}
                    <Link href="/blog/amritsar-travel-guide">Amritsar</Link>{" "}
                    for a deeper Sikh heritage circuit, or see our full{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
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
                  "Anandpur Sahib",
                  "Khalsa",
                  "Punjab",
                  "Sikh Heritage",
                  "Virasat-e-Khalsa",
                  "Hola Mohalla",
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

              <RelatedPostsGrid currentSlug="anandpur-sahib-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="anandpur-sahib-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
