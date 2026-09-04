// src/app/blog/bikaner-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bikaner Travel Guide: Junagarh Fort & Desert",
  description:
    "Complete Bikaner guide — Junagarh Fort, the Karni Mata rat temple at Deshnoke, camel safaris, old-city havelis, bhujia and local food, how to reach, and a full visit plan.",
  keywords:
    "Bikaner travel guide, Junagarh Fort, Karni Mata Temple rat temple, Deshnoke, Bikaner camel safari, Bikaner bhujia, Bikaner havelis, how to reach Bikaner, Rajasthan desert cities",
  openGraph: {
    title: "Bikaner Travel Guide: Junagarh Fort & Desert",
    description:
      "An unconquered fort, a temple full of sacred rats, and camel culture running through everything — the complete guide to Bikaner.",
    url: "https://club.kudozz.in/blog/bikaner-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ornate desert-city palace architecture, evoking Bikaner's Junagarh Fort and old-city havelis",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikaner Travel Guide: Junagarh Fort & Desert",
    description:
      "An unconquered fort, a temple full of sacred rats, and camel culture running through everything — the complete Bikaner guide.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bikaner-travel-guide",
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
          headline: "Bikaner Travel Guide: Junagarh Fort & Desert",
          description:
            "Complete Bikaner guide — Junagarh Fort, the Karni Mata rat temple at Deshnoke, camel safaris, old-city havelis, bhujia and local food, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/bikaner-travel-guide",
          },
          keywords:
            "Bikaner, Rajasthan, Junagarh Fort, Karni Mata Temple, camel safari, desert city",
          about: {
            "@type": "Place",
            name: "Bikaner",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
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
                name: "Rajasthan",
                item: "https://club.kudozz.in/blog/rajasthan-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Bikaner",
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
    q: "What is the Karni Mata rat temple and is it safe to visit?",
    a: "The Karni Mata Temple at Deshnoke, roughly 30 km from Bikaner, is home to thousands of rats considered sacred and fed by devotees. It's safe to visit — the rats are habituated to visitors and generally not aggressive — though it requires walking barefoot among them, which some travelers find unusual and others find fascinating.",
  },
  {
    q: "How far is Bikaner from Jaisalmer and Jodhpur?",
    a: "Bikaner is roughly 330 km from Jaisalmer (about 5-6 hours by road) and roughly 250 km from Jodhpur (about 4-5 hours) — both are commonly combined with Bikaner in a wider western Rajasthan desert circuit.",
  },
  {
    q: "What is the best time to visit Bikaner?",
    a: "October to March, when daytime temperatures are far more manageable for exploring Junagarh Fort and the old city. Summer (Apr-Jun) brings extreme desert heat that makes sightseeing genuinely difficult.",
  },
  {
    q: "What is Bikaner famous for food-wise?",
    a: "Bhujia — a spicy gram-flour namkeen snack — is Bikaner's most famous export, sold across India but best bought fresh from an old-city shop here. Rasgulla and other sweets are also well regarded locally.",
  },
  {
    q: "How many days should I plan for Bikaner?",
    a: "Two days is a reasonable amount — one for Junagarh Fort and old-city havelis, another for the Karni Mata Temple day trip and the camel research centre if time allows.",
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
  { id: "introduction", title: "A Desert City Built on Camel Culture", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bikaner", level: 2 },
  { id: "things-to-do", title: "Junagarh Fort, Karni Mata Temple & Camels", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BikanerGuidePage() {
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
              src="/images/destinations/udaipur/hero.jpg"
              alt="Ornate desert-city palace architecture, evoking Bikaner's Junagarh Fort and old-city havelis"
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
                { label: "Rajasthan", href: "/blog/rajasthan-travel-guide" },
                { label: "Bikaner", href: null },
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
                "Bikaner",
                "Junagarh Fort",
                "Rajasthan",
                "Karni Mata Temple",
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
              Bikaner Travel Guide: Junagarh Fort & the Desert
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              An unconquered fort, a temple full of sacred rats, and camel
              culture running through everything from safaris to snacks —
              Bikaner is western Rajasthan's most distinctive desert city.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Bikaner, Rajasthan",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>A Desert City Built on Camel Culture</h2>
                  <p>
                    <strong>Bikaner</strong> is a desert city in northern
                    Rajasthan, centred on Junagarh Fort — built in the late
                    16th century and notable for reportedly never having
                    been conquered. Its interiors are elaborately painted
                    and mirrored, among the most opulent of Rajasthan's
                    fort-palaces, despite Bikaner drawing far fewer
                    visitors than{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer
                    </Link>{" "}
                    or Jodhpur.
                  </p>
                  <p>
                    A short drive away at Deshnoke sits the Karni Mata
                    Temple, famously known as the "rat temple," where
                    thousands of rats living within the temple are
                    considered sacred and are fed and revered by devotees —
                    one of the most distinctive, and for many visitors
                    startling, attractions in all of Rajasthan.
                  </p>
                  <p>
                    Camel culture runs deep here too, from the National
                    Research Centre on Camel offering safaris and
                    camel-milk products, to Bikaner's old-city havelis and
                    its most famous export: bhujia, a spicy gram-flour
                    snack sold across India but best bought fresh here.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐫</span> Bikaner at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Northern Rajasthan",
                        },
                        {
                          icon: "🏰",
                          label: "Landmark",
                          value: "Junagarh Fort (unconquered)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🐀",
                          label: "Known For",
                          value: "Karni Mata Rat Temple",
                        },
                        {
                          icon: "🐫",
                          label: "Culture",
                          value: "Camel Research Centre",
                        },
                        {
                          icon: "🍿",
                          label: "Famous Food",
                          value: "Bhujia",
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
                  <h2>Best Time to Visit Bikaner</h2>
                  <p>
                    Bikaner's desert climate makes timing a real factor —
                    summer heat here is severe.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions make exploring Junagarh Fort, the old city, and Deshnoke genuinely comfortable.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid",
                        text: "Desert summer temperatures regularly exceed 45°C, making daytime sightseeing genuinely difficult.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — light, sporadic rain",
                        text: "Bikaner sees relatively little rainfall even in monsoon, though humidity can still make the heat feel worse.",
                      },
                      {
                        season: "Jan",
                        emoji: "🐫",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Camel Festival",
                        text: "Bikaner's annual Camel Festival brings parades, races, and cultural performances celebrating the city's camel heritage.",
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
                    <strong>Our pick:</strong> October to March — with
                    January offering the bonus of the Camel Festival if
                    timing allows.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bikaner</h2>
                  <ul>
                    <li>
                      <strong>By road from Jaipur:</strong> Roughly 335 km,
                      about 5-6 hours by car.
                    </li>
                    <li>
                      <strong>By road from Jodhpur:</strong> Roughly 250 km,
                      about 4-5 hours — a common leg of a wider western
                      Rajasthan desert circuit.
                    </li>
                    <li>
                      <strong>By rail:</strong> Bikaner Junction is well
                      connected to Jaipur, Delhi, and Jodhpur by regular
                      trains.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Bikaner with{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer
                    </Link>{" "}
                    for a fuller western Rajasthan desert circuit — the two
                    cities pair naturally along the same general route.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Junagarh Fort, Karni Mata Temple & Camels</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/hero.jpg"
                      alt="Desert palace and fort architecture at Bikaner, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Junagarh Fort</h3>
                  <p>
                    Built in the late 16th century, Junagarh Fort is
                    notable for reportedly never having been conquered. Its
                    interiors are richly painted and mirrored, with ornate
                    palace chambers that rank among the most opulent in
                    Rajasthan.
                  </p>
                  <h3>Karni Mata Temple (Deshnoke)</h3>
                  <p>
                    Roughly 30 km from Bikaner, this temple is famously
                    known as the "rat temple" — thousands of rats living
                    within the complex are considered sacred, fed and
                    revered by devotees. Visiting involves walking barefoot
                    among them, a genuinely distinctive experience worth
                    approaching with an open mind.
                  </p>
                  <h3>Camel Research Centre & Safaris</h3>
                  <p>
                    The National Research Centre on Camel, near Bikaner, is
                    a camel-breeding facility offering safaris and
                    camel-milk products — a fitting stop given how central
                    camel culture is to the city's identity.
                  </p>
                  <h3>Old-City Havelis</h3>
                  <p>
                    Bikaner's old town has numerous ornate havelis, worth
                    exploring on foot for their carved facades and a sense
                    of the city's mercantile history.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Bikaner</h2>
                  <p>
                    Bikaner has a solid range of accommodation, from budget
                    guesthouses to heritage palace-style hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Guesthouses near the old city",
                          "Budget hotels close to the railway station",
                          "Simple homestays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Heritage-style hotels",
                          "Business hotels, central Bikaner",
                          "Boutique havelis converted to stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Laxmi Niwas Palace",
                          "Premium heritage properties",
                          "Full-service luxury hotels",
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
                        title: "Junagarh Fort & Old City",
                        color: "bg-amber-700",
                        activities: [
                          "Junagarh Fort in detail",
                          "Old-city havelis walk",
                          "Evening at a local market for bhujia and sweets",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Karni Mata Temple & Camels",
                        color: "bg-sky-600",
                        activities: [
                          "Day trip to Karni Mata Temple, Deshnoke",
                          "Camel Research Centre and safari",
                          "Return to Bikaner, departure",
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
                  <h2>What to Eat in Bikaner</h2>
                  <ul>
                    <li>
                      <strong>Bhujia:</strong> Bikaner's most famous
                      export, a spicy gram-flour namkeen snack — buy it
                      fresh from a reputable old-city shop for the real
                      experience.
                    </li>
                    <li>
                      <strong>Rasgulla:</strong> Bikaner's sweet shops are
                      well regarded locally, alongside a range of other
                      traditional Rajasthani mithai.
                    </li>
                    <li>
                      <strong>Rajasthani thali:</strong> Dal baati churma
                      and other regional staples are widely available
                      across the city.
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
                            "₹2,800",
                            "₹8,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹800",
                            "₹2,000",
                          ],
                          ["Entry fees (fort/temple)", "₹100", "₹100", "₹100"],
                          ["Camel safari", "₹500", "₹1,200", "₹2,500"],
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
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Bikaner</h2>
                  <ul>
                    <li>
                      <strong>Go barefoot at Karni Mata Temple with an
                      open mind:</strong> It's a genuinely unique
                      experience — know what to expect before you go.
                    </li>
                    <li>
                      <strong>Buy bhujia from a reputable old-city
                      shop:</strong> A far more authentic souvenir than
                      packaged versions sold elsewhere.
                    </li>
                    <li>
                      <strong>Avoid peak summer (Apr-Jun):</strong> Bikaner's
                      desert heat is among the most extreme in Rajasthan.
                    </li>
                    <li>
                      <strong>Combine with Jaisalmer:</strong> The two
                      cities make a natural western Rajasthan desert
                      pairing.
                    </li>
                    <li>
                      <strong>Time a January visit for the Camel
                      Festival:</strong> A lively cultural bonus if your
                      dates allow.
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
                          "Visit Karni Mata Temple with an open mind",
                          "Buy bhujia fresh from an old-city shop",
                          "Explore Junagarh Fort's painted interiors slowly",
                          "Try a camel safari near the research centre",
                          "Combine with Jaisalmer for a desert circuit",
                          "Time a visit around the January Camel Festival",
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
                          "Visit during peak summer heat (Apr-Jun)",
                          "Skip the Karni Mata Temple expecting to feel neutral about it",
                          "Rush Junagarh Fort's extensive interiors",
                          "Buy bhujia from unreliable roadside stalls",
                          "Forget Bikaner pairs well with Jaisalmer",
                          "Wander old-city havelis without checking access hours",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Bikaner
                    with{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer
                    </Link>{" "}
                    for a fuller western Rajasthan desert circuit. See our
                    full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
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
                  "Bikaner",
                  "Junagarh Fort",
                  "Rajasthan",
                  "Karni Mata Temple",
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

              <RelatedPostsGrid currentSlug="bikaner-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bikaner-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
