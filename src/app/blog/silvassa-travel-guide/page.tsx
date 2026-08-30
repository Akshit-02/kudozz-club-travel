// src/app/blog/silvassa-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Silvassa Travel Guide: Lakes, Forests & Tribal Culture",
  description:
    "Complete Silvassa travel guide — capital of Dadra & Nagar Haveli. Dudhni lake, Khanvel gardens, Satmaliya Deer Sanctuary, Madhuban Dam, Warli tribal art, best time, how to reach, stay, food and a 2-day itinerary.",
  keywords:
    "Silvassa travel guide, Dadra Nagar Haveli tourism, Silvassa tourist places, Dudhni lake Silvassa, Khanvel Silvassa, Satmaliya Deer Sanctuary, Madhuban Dam Silvassa, Warli art Silvassa, Vasona Lion Safari Park, Silvassa weekend trip from Mumbai, Silvassa near Vapi",
  openGraph: {
    title: "Silvassa Travel Guide: Lakes, Forests & Tribal Culture",
    description:
      "Lakes, forested hills, Warli tribal art and a string of quiet day-trip destinations — the complete guide to Silvassa, capital of Dadra & Nagar Haveli.",
    url: "https://club.kudozz.in/blog/silvassa-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Lush green Indian heritage landscape, used here to represent Silvassa's forested, inland character rather than a literal photo of the town",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Silvassa Travel Guide: Lakes, Forests & Tribal Culture",
    description:
      "Lakes, forested hills, Warli tribal art and a string of quiet day-trip destinations — the complete guide to Silvassa, capital of Dadra & Nagar Haveli.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/silvassa-travel-guide",
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
          headline: "Silvassa Travel Guide: Lakes, Forests & Tribal Culture",
          description:
            "Complete Silvassa travel guide — capital of Dadra & Nagar Haveli. Dudhni lake, Khanvel gardens, Satmaliya Deer Sanctuary, Madhuban Dam, Warli tribal art, best time, how to reach, stay, food and a 2-day itinerary.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/silvassa-travel-guide",
          },
          keywords:
            "Silvassa travel guide, Dadra Nagar Haveli tourism, Dudhni lake, Khanvel, Satmaliya Deer Sanctuary, Madhuban Dam, Warli art",
          about: {
            "@type": "Place",
            name: "Silvassa",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Silvassa",
              addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
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
                name: "Daman & Diu",
                item: "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Silvassa",
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
    q: "How many days are enough for Silvassa?",
    a: "Two days is the sweet spot for most travellers — enough time to cover Dudhni, Khanvel, Satmaliya Deer Sanctuary or Madhuban Dam, plus the in-town sights like Vasona Lion Safari Park, without feeling rushed. A single long day trip from Mumbai or Vapi works too if you're only after two or three highlights.",
  },
  {
    q: "Is Silvassa good for a weekend trip?",
    a: "Yes — Silvassa is one of the more popular short weekend getaways from Mumbai, Surat and Vapi precisely because it's close, green, and doesn't require much planning. It suits families, small groups and couples looking for lakes, gardens and a slower pace rather than a party scene.",
  },
  {
    q: "What is Silvassa famous for?",
    a: "Silvassa is known as the capital of the Union Territory of Dadra & Nagar Haveli, for its forested, inland landscape quite unlike coastal Daman and Diu, for a significant Warli tribal population and their distinctive folk art, for lakes and gardens like Dudhni and Khanvel, and — less visibly to tourists — as a notable industrial hub with a large concentration of small and mid-sized factories.",
  },
  {
    q: "How far is Silvassa from Mumbai?",
    a: "Silvassa is roughly 180 km from Mumbai, about 3–3.5 hours by road via NH48. It's also easily reached via Vapi railway station on the Mumbai–Ahmedabad main line, which sits only about 18 km away, making Silvassa one of the more accessible short trips from both Mumbai and Surat.",
  },
  {
    q: "Is Silvassa part of Daman and Diu?",
    a: "They're now administered together. Dadra & Nagar Haveli and Daman & Diu were merged into a single Union Territory in 2020, but Silvassa and the surrounding district remain geographically separate — an inland, forested pocket bordering Maharashtra and Gujarat, quite distinct from the coastal towns of Daman and Diu roughly 750 km away.",
  },
  {
    q: "What is the best time to visit Silvassa?",
    a: "October to March is the most comfortable window, with pleasant temperatures for boating at Dudhni, walking the gardens at Khanvel, and visiting Satmaliya Deer Sanctuary. Monsoon (June–September) turns the district a vivid green and is when Hathni Mata Waterfall is at its best, though some outdoor activities get curtailed by rain.",
  },
  {
    q: "Can Silvassa be combined with Daman or Diu in one trip?",
    a: "Not comfortably in a short trip — Silvassa sits roughly 750 km from Diu, and even Daman is a separate multi-hour drive away. Treat Silvassa and Dadra & Nagar Haveli as a standalone weekend trip rather than trying to tack it onto a Daman or Diu itinerary.",
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
  { id: "introduction", title: "Silvassa: An Introduction", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "dudhni", title: "Dudhni: Lake & Tribal Museum", level: 2 },
  { id: "khanvel", title: "Khanvel: Gardens & Resorts", level: 2 },
  { id: "satmaliya", title: "Satmaliya Deer Sanctuary", level: 2 },
  { id: "madhuban-dam", title: "Madhuban Dam", level: 2 },
  { id: "vasona", title: "Vasona Lion Safari Park", level: 2 },
  { id: "warli-culture", title: "Warli Tribal Art & Culture", level: 2 },
  { id: "hathni-mata", title: "Hathni Mata Waterfall", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Silvassa Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SilvassaGuidePage() {
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
              src="/images/destinations/goa/hero.jpg"
              alt="Lush green Indian heritage landscape, used here to represent Silvassa's forested, inland character rather than a literal photo of the town"
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
                {
                  label: "Daman & Diu",
                  href: "/blog/dadra-nagar-haveli-daman-diu-travel-guide",
                },
                { label: "Silvassa", href: null },
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
                "Silvassa",
                "Dadra & Nagar Haveli",
                "Warli Art",
                "Lakes & Gardens",
                "Weekend Trip",
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
              Silvassa Travel Guide: Lakes, Forests & Tribal Culture
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Forested hills, reservoir lakes, Warli tribal villages, and a
              relaxed pace barely three hours from Mumbai — the capital of
              Dadra & Nagar Haveli is one of western India's most
              underrated short trips.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Silvassa, Dadra & Nagar Haveli",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,700 words",
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
                  <h2>Silvassa: An Introduction</h2>
                  <p>
                    <strong>Silvassa</strong> is the capital of the Union
                    Territory of{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli
                    </Link>{" "}
                    — and a genuinely different kind of destination from its
                    administrative sibling towns of Daman and Diu on the
                    Gujarat coast. Where Daman and Diu are coastal, sun-baked
                    and steeped in Portuguese heritage, Silvassa sits inland,
                    wedged into the border between Maharashtra and Gujarat,
                    wrapped in forested hills, reservoir lakes, and a
                    landscape that stays noticeably green even outside
                    monsoon.
                  </p>
                  <p>
                    The two halves of the territory were merged into a single
                    Union Territory only in 2020, but geographically and
                    culturally they've always been worlds apart. Silvassa and
                    the surrounding district of Dadra & Nagar Haveli are home
                    to a significant <strong>Warli tribal population</strong>,
                    whose distinctive folk art and way of life give the region
                    a cultural identity found nowhere else in this corner of
                    India. At the same time, Silvassa is a serious{" "}
                    <strong>industrial hub</strong> — a dense concentration of
                    small and mid-sized factories drawn here by tax incentives
                    — a side of the town most weekend visitors never see, since
                    the industrial areas sit apart from the lakes, gardens and
                    forest pockets that draw tourists.
                  </p>
                  <p>
                    What makes Silvassa worth a trip is exactly that
                    combination: it's close enough to Mumbai, Surat and Vapi
                    for an easy weekend, green and unhurried enough to feel
                    like a real break, and dotted with a cluster of small,
                    genuinely pleasant day-trip destinations — Dudhni,
                    Khanvel, Satmaliya Deer Sanctuary and Madhuban Dam among
                    them — each covered in its own dedicated guide linked
                    throughout this page. Think of this as the orientation
                    piece: what Silvassa is, how to plan around it, and where
                    to go deeper on each individual spot.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Silvassa at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Union Territory",
                          value: "Dadra & Nagar Haveli and Daman & Diu",
                        },
                        {
                          icon: "🚗",
                          label: "From Mumbai",
                          value: "~180 km, 3–3.5 hrs by road",
                        },
                        {
                          icon: "🚆",
                          label: "Nearest Railhead",
                          value: "Vapi, ~18 km away",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "🎨",
                          label: "Known For",
                          value: "Lakes, forests, Warli tribal culture",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Silvassa</h2>
                  <p>
                    Being inland and forested rather than coastal, Silvassa's
                    weather rhythm is a little different from Daman and
                    Diu's — the monsoon here is a genuine highlight rather
                    than a season to avoid, since it's when the district's
                    lakes fill up and its waterfalls run.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry and comfortable (15–28°C), ideal for boating at Dudhni, walking Khanvel's gardens, and spending a full day outdoors without the heat or humidity of summer.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, best avoided at midday",
                        text: "Temperatures climb into the mid-to-high 30s. Outdoor sightseeing is still doable early morning or evening, but midday heat is genuinely uncomfortable.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush and scenic",
                        text: "Heavy rain turns the district vividly green, fills the reservoirs at Dudhni and Madhuban, and brings Hathni Mata Waterfall to life — though boating and some outdoor activities may pause during heavy spells.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak weekend season",
                        text: "The most popular window for Mumbai and Surat weekenders — expect busier resorts at Khanvel and Dudhni, and book stays a little ahead.",
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
                    <strong>Our pick:</strong> November to February for
                    comfortable sightseeing, or a well-timed monsoon weekend
                    (July–August) if you specifically want to see Hathni Mata
                    Waterfall and the reservoirs at their fullest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Silvassa</h2>
                  <p>
                    Silvassa's biggest practical advantage is how close it
                    sits to three major western-India cities, making it one
                    of the easiest short trips on this coast.
                  </p>
                  <ul>
                    <li>
                      <strong>By Train:</strong> The nearest railhead is{" "}
                      <strong>Vapi</strong>, on the Mumbai–Ahmedabad main
                      line, roughly 18 km from Silvassa and well connected by
                      frequent express and local trains from both Mumbai and
                      Surat. Autos and cabs from Vapi station to Silvassa take
                      about 30–40 minutes.
                    </li>
                    <li>
                      <strong>By Road from Mumbai:</strong> Around 180 km via
                      NH48, roughly 3–3.5 hours by car or bus — one of the
                      more comfortable weekend drives out of Mumbai given the
                      highway quality.
                    </li>
                    <li>
                      <strong>By Road from Surat:</strong> Closer still, at
                      roughly 90–100 km and under 2 hours, making Silvassa a
                      very accessible day trip or overnight for Surat-based
                      travellers.
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest airport is Surat,
                      about 100 km away; Mumbai's airport, though farther, has
                      significantly more flight options and is a common entry
                      point for out-of-state visitors.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Local transport within
                    Dadra & Nagar Haveli is thin outside the main roads — a
                    self-drive car or a hired taxi for the full trip makes
                    covering Dudhni, Khanvel, Satmaliya and Madhuban Dam in
                    one visit far more practical than relying on public
                    transport between them.
                  </div>
                </section>

                {/* ── Dudhni ────────────────────────────────────────────── */}
                <section id="dudhni">
                  <h2>Dudhni: Lake & Tribal Museum</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="A calm inland waterfront scene, used here to represent the general feel of a reservoir lake rather than a literal photo of Dudhni"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Dudhni</strong> is built around a scenic stretch
                    of the Damanganga reservoir, best known for boating out to
                    a small island garden and for the{" "}
                    <strong>Tribal Museum</strong>, which houses a genuinely
                    worthwhile collection on Warli life and culture. It's one
                    of the most popular single day-trip destinations near
                    Silvassa, and easily the best spot in the district for a
                    slow, scenic couple of hours on the water.
                  </p>
                  <p>
                    We've covered Dudhni in full detail — boating options,
                    the museum, timings, and how to plan your visit — in a
                    dedicated guide:{" "}
                    <Link href="/blog/dudhni-travel-guide">
                      read the complete Dudhni travel guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Khanvel ───────────────────────────────────────────── */}
                <section id="khanvel">
                  <h2>Khanvel: Gardens & Resorts</h2>
                  <p>
                    A short drive from central Silvassa, <strong>Khanvel</strong>{" "}
                    is a small resort town known for its landscaped gardens, a
                    mini-zoo, and a cluster of family-friendly resorts that
                    make it a popular overnight or day-trip stop. It's a more
                    laid-back, garden-and-greenery kind of destination than
                    the lake-focused appeal of Dudhni.
                  </p>
                  <p>
                    For a full rundown of what to see and do in Khanvel and
                    where to stay if you'd rather base yourself there instead
                    of Silvassa town, see our{" "}
                    <Link href="/blog/khanvel-travel-guide">
                      dedicated Khanvel travel guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Satmaliya ─────────────────────────────────────────── */}
                <section id="satmaliya">
                  <h2>Satmaliya Deer Sanctuary</h2>
                  <p>
                    <strong>Satmaliya Deer Sanctuary</strong> is a protected
                    forest area near Khanvel where spotted deer roam in a
                    relatively natural setting, making it a favourite stop
                    for families and anyone wanting an easy wildlife-spotting
                    detour without a serious safari commitment.
                  </p>
                  <p>
                    Timings, what to expect, and how it pairs with a Khanvel
                    visit are covered in our{" "}
                    <Link href="/blog/satmaliya-deer-sanctuary-travel-guide">
                      Satmaliya Deer Sanctuary guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Madhuban Dam ──────────────────────────────────────── */}
                <section id="madhuban-dam">
                  <h2>Madhuban Dam</h2>
                  <p>
                    <strong>Madhuban Dam</strong>, built on the Damanganga
                    river, is the district's other major reservoir and a
                    quieter, more scenic alternative to Dudhni — popular for
                    the drive along its embankment and the views over the
                    water, especially once the monsoon has filled it up.
                  </p>
                  <p>
                    We've written a separate, detailed guide to Madhuban Dam
                    covering the best viewpoints and how to combine it with
                    the rest of your Silvassa trip:{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      explore the Madhuban Dam guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Vasona ────────────────────────────────────────────── */}
                <section id="vasona">
                  <h2>Vasona Lion Safari Park</h2>
                  <p>
                    Right within Silvassa town, <strong>Vasona Lion Safari
                    Park</strong> is a small zoological and wildlife park
                    that's one of the most-visited attractions for families
                    with children — a modest but genuinely enjoyable stop for
                    an hour or two, with lions, deer, crocodiles and a few
                    other enclosures set among landscaped grounds. It's less
                    about seeing wildlife in truly wild conditions and more
                    about an easy, accessible outing that doesn't require a
                    dedicated day trip out of town.
                  </p>
                  <p>
                    Pair it with the adjoining{" "}
                    <strong>Hirwa Van Garden</strong> and deer park nearby for
                    an easy in-town half-day if you're not planning to venture
                    out to Dudhni, Khanvel or Madhuban Dam.
                  </p>
                </section>

                {/* ── Warli Culture ─────────────────────────────────────── */}
                <section id="warli-culture">
                  <h2>Warli Tribal Art & Culture</h2>
                  <p>
                    Beyond its lakes and gardens, what makes Dadra & Nagar
                    Haveli genuinely distinctive is its significant{" "}
                    <strong>Warli tribal population</strong> and their
                    centuries-old artistic tradition. Warli painting — simple,
                    geometric white figures on a mud-red or ochre background,
                    depicting everyday village life, harvests, dance and
                    ritual — has since travelled far beyond its origins here
                    to become one of India's most recognisable folk art
                    styles, appearing on everything from home décor to
                    fashion.
                  </p>
                  <p>
                    Villages around Silvassa continue to practise Warli art
                    and craft traditions, and visiting respectfully — through
                    a guided cultural visit, a genuine handicraft purchase
                    from local artisans, or the Tribal Museum at{" "}
                    <Link href="/blog/dudhni-travel-guide">Dudhni</Link> — is
                    one of the most meaningful ways to engage with the region
                    beyond its scenery. A few things worth keeping in mind:
                  </p>
                  <ul>
                    <li>
                      <strong>Visit with intention, not as a spectacle:</strong>{" "}
                      If you're visiting a Warli village, go through a
                      recognised guide or cultural programme rather than
                      wandering in uninvited — it's someone's home, not an
                      open-air exhibit.
                    </li>
                    <li>
                      <strong>Buy directly from artisans where possible:</strong>{" "}
                      Supporting Warli painters and craftspeople directly, or
                      through the Tribal Museum and local emporiums, puts
                      money back into the community rather than intermediaries.
                    </li>
                    <li>
                      <strong>Ask before photographing people:</strong>{" "}
                      Landscapes and artwork are generally fine to photograph
                      freely; always ask first before photographing
                      individuals or their homes.
                    </li>
                  </ul>
                </section>

                {/* ── Hathni Mata ───────────────────────────────────────── */}
                <section id="hathni-mata">
                  <h2>Hathni Mata Waterfall</h2>
                  <p>
                    A short distance from Silvassa, <strong>Hathni Mata
                    Waterfall</strong> is a modest, seasonal cascade set
                    inside forested terrain — a pleasant monsoon-season detour
                    rather than a year-round attraction. It's at its best in
                    the weeks during and just after heavy monsoon rain, when
                    the flow is at its strongest; outside that window it can
                    reduce to a trickle or run dry entirely.
                  </p>
                  <p>
                    If you're visiting specifically for the waterfall, plan
                    your trip for July–September and check locally on current
                    flow and accessibility, since seasonal waterfalls like
                    this one can vary considerably year to year depending on
                    rainfall.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Silvassa has a reasonable spread of accommodation for a
                    town its size, ranging from simple budget lodges to
                    resort-style properties, with an especially strong
                    cluster of family resorts around Khanvel and Dudhni.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Budget lodges, central Silvassa",
                          "Guesthouses near the bus stand",
                          "Simple stays close to Vapi road",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Resort stays around Khanvel",
                          "Business hotels, Silvassa town",
                          "Lake-facing rooms near Dudhni",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹6,000–₹14,000+/night",
                        picks: [
                          "Premium resorts, Khanvel area",
                          "Larger full-service hotels in town",
                          "Weekend resort packages near Dudhni",
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

                  <blockquote>
                    If your trip is built around Dudhni or Khanvel rather
                    than Silvassa town itself, staying right at a resort in
                    those areas often works out more convenient than
                    commuting in from central Silvassa each day.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Silvassa</h2>
                  <p>
                    Silvassa's food scene reflects its position between
                    Gujarat and Maharashtra, with a strong Gujarati vegetarian
                    influence alongside simpler tribal and regional dishes.
                  </p>
                  <ul>
                    <li>
                      <strong>Gujarati thalis:</strong> Widely available
                      across town, given Silvassa's proximity to Gujarat and
                      shared culinary influence — a reliable, filling option
                      almost anywhere.
                    </li>
                    <li>
                      <strong>Local Warli and tribal cuisine:</strong> Simple,
                      rustic dishes built around rice, local vegetables and
                      seasonal produce — worth seeking out at smaller local
                      eateries for a genuinely different experience from the
                      standard thali circuit.
                    </li>
                    <li>
                      <strong>Street food and snacks:</strong> Common Gujarati
                      and Maharashtrian street snacks are easy to find around
                      the main market areas of Silvassa town.
                    </li>
                    <li>
                      <strong>Resort dining at Khanvel and Dudhni:</strong>{" "}
                      Many of the resorts around these areas offer their own
                      multi-cuisine dining, a convenient option if you're
                      staying overnight rather than driving back into town for
                      meals.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Silvassa Itinerary</h2>
                  <p>
                    This itinerary balances the in-town sights with the
                    district's best day-trip destinations, giving you a
                    genuine feel for Silvassa without over-packing either day.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Silvassa Town & Dudhni",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Arrive, check in, breakfast in Silvassa",
                          "Late morning: Vasona Lion Safari Park & Hirwa Van Garden",
                          "Afternoon: Drive to Dudhni, boating on the reservoir",
                          "Evening: Visit the Tribal Museum, relax by the lake",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Khanvel, Satmaliya & Madhuban Dam",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Drive to Khanvel, explore the gardens and mini-zoo",
                          "Late morning: Satmaliya Deer Sanctuary, easy wildlife walk",
                          "Afternoon: Madhuban Dam viewpoint and embankment drive",
                          "Evening: Return to Silvassa or depart",
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
                    * With a third day, add Hathni Mata Waterfall (monsoon
                    season) or a slower, guided visit to a nearby Warli
                    village.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown (per day)</h2>
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
                            "₹1,200",
                            "₹3,500",
                            "₹8,500",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹800",
                            "₹1,800",
                          ],
                          [
                            "Activities/day (boating, entry fees)",
                            "₹200",
                            "₹500",
                            "₹1,200",
                          ],
                          [
                            "Daily total",
                            "₹2,100",
                            "₹5,700",
                            "₹13,500",
                          ],
                          [
                            "2-Day trip total",
                            "₹4,200",
                            "₹11,400",
                            "₹27,000",
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
                    * Excludes travel to Silvassa. Costs are notably lower
                    than comparable weekend destinations closer to Mumbai.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Silvassa</h2>
                  <ul>
                    <li>
                      <strong>Hire a car or taxi for the full trip:</strong>{" "}
                      Public transport between Dudhni, Khanvel, Satmaliya and
                      Madhuban Dam is limited — a self-drive or hired vehicle
                      makes covering multiple spots far easier.
                    </li>
                    <li>
                      <strong>Book resorts ahead for weekends:</strong> Khanvel
                      and Dudhni see a steady flow of Mumbai and Surat
                      weekenders, especially December–February.
                    </li>
                    <li>
                      <strong>Carry cash for smaller towns:</strong> Card
                      acceptance thins out quickly outside the main resorts
                      and Silvassa town.
                    </li>
                    <li>
                      <strong>Check waterfall flow before visiting Hathni
                      Mata:</strong> It's seasonal and can run dry outside the
                      monsoon window — don't build a trip around it without
                      checking current conditions.
                    </li>
                    <li>
                      <strong>Visit Warli villages respectfully:</strong> Go
                      through a guide or recognised cultural programme rather
                      than wandering in independently.
                    </li>
                    <li>
                      <strong>Don't try to combine with Daman or Diu:</strong>{" "}
                      They're administratively one Union Territory but roughly
                      750 km apart — plan Silvassa as its own standalone trip.
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
                          "Hire a taxi or self-drive to cover Dudhni, Khanvel & Madhuban Dam",
                          "Book Khanvel/Dudhni resorts ahead for weekends",
                          "Visit the Tribal Museum at Dudhni for real cultural context",
                          "Carry cash for smaller local vendors",
                          "Plan Hathni Mata Waterfall for the monsoon months",
                          "Treat Silvassa as a standalone trip, not a Daman/Diu add-on",
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
                          "Expect frequent public transport between attractions",
                          "Skip booking ahead during December–January weekends",
                          "Wander into Warli villages uninvited or unguided",
                          "Rely on cards outside main resorts and town",
                          "Expect Hathni Mata Waterfall to run outside monsoon",
                          "Try to combine Silvassa with Daman or Diu in one short trip",
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
                    <strong>🗺️ Extend the trip:</strong> Deepen your Silvassa
                    visit with the dedicated guides to{" "}
                    <Link href="/blog/dudhni-travel-guide">Dudhni</Link>,{" "}
                    <Link href="/blog/khanvel-travel-guide">Khanvel</Link>,{" "}
                    <Link href="/blog/satmaliya-deer-sanctuary-travel-guide">
                      Satmaliya Deer Sanctuary
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      Madhuban Dam
                    </Link>
                    , or read the full{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu travel guide
                    </Link>{" "}
                    for the wider Union Territory.
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
                  "Silvassa",
                  "Dadra and Nagar Haveli",
                  "Dudhni",
                  "Khanvel",
                  "Warli Art",
                  "Weekend Trip",
                  "Madhuban Dam",
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

              <RelatedPostsGrid currentSlug="silvassa-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="silvassa-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
