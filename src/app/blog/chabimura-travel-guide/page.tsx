// src/app/blog/chabimura-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chabimura Travel Guide: Rock Carvings & Boat Ride",
  description:
    "Complete Chabimura guide — the 16th-century rock-cut carvings on the Gomati river cliffs, the boat ride from Amarpur, how to combine it with Udaipur, and a full visit plan.",
  keywords:
    "Chabimura travel guide, Chabimura rock carvings, Gomati river Tripura, Amarpur boat ride, Chabimura Tripura, how to reach Chabimura, Tripura rock carvings, Amar Manikya carvings",
  openGraph: {
    title: "Chabimura Travel Guide: Rock Carvings & Boat Ride",
    description:
      "Rock-cut Hindu deities carved into cliffs above the Gomati river, viewable only from a boat gliding through forested riverbanks — the complete Chabimura guide.",
    url: "https://club.kudozz.in/blog/chabimura-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "River flowing through a forested gorge, evoking the Gomati river cliffs at Chabimura, Tripura",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chabimura Travel Guide: Rock Carvings & Boat Ride",
    description:
      "16th-century rock-cut carvings on cliffs above the Gomati river, seen only by boat — the complete Chabimura guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chabimura-travel-guide",
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
          headline: "Chabimura Travel Guide: Rock Carvings & Boat Ride",
          description:
            "Complete Chabimura guide — the 16th-century rock-cut carvings on the Gomati river cliffs, the boat ride from Amarpur, how to combine it with Udaipur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/chabimura-travel-guide",
          },
          keywords:
            "Chabimura, Tripura, Gomati river, rock carvings, Amarpur, boat ride, heritage",
          about: {
            "@type": "Place",
            name: "Chabimura",
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
                name: "Chabimura",
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
    q: "How do I actually see the Chabimura rock carvings?",
    a: "Almost entirely by boat. The carvings are cut into steep cliff faces directly above the Gomati river, and a boat ride from the Amarpur ghat is the practical way to view most of them — very few can be properly seen or reached on foot.",
  },
  {
    q: "How far is Chabimura from Agartala?",
    a: "Roughly 65 km by road to Amarpur via Udaipur, followed by a further boat journey of a few kilometres along the Gomati river to reach the carvings themselves.",
  },
  {
    q: "Can Chabimura be combined with Udaipur in one trip?",
    a: "Yes, this is the natural way to visit — Udaipur's lakes and the Tripura Sundari Temple sit directly on the route to Amarpur, so most travellers combine both into a single long day trip from Agartala.",
  },
  {
    q: "What is the best time to visit Chabimura?",
    a: "October to March, when the weather is pleasant and the Gomati river's current is calmer and more predictable for boating. Monsoon months can make the river current stronger and boating less reliable.",
  },
  {
    q: "Do I need to book a boat in advance?",
    a: "It's worth arranging one in advance where possible, or at least confirming with a local operator at the Amarpur ghat before setting out, since boat availability isn't always guaranteed given how few visitors reach this far.",
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
  { id: "introduction", title: "Cliff Carvings on the Gomati", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chabimura", level: 2 },
  { id: "things-to-do", title: "The Boat Ride & the Carvings", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChabimuraGuidePage() {
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
              alt="River flowing through a forested gorge, evoking the Gomati river cliffs at Chabimura, Tripura"
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
                { label: "Chabimura", href: null },
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
              {["Chabimura", "Gomati River", "Tripura", "Rock Carvings"].map(
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
              Chabimura: Rock Carvings & Gomati River Boat Ride Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Sixteenth-century carvings of Hindu deities cut into cliffs
              above the Gomati river, viewable only by gliding past them on
              a quiet forested boat ride.
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
                  text: "Amarpur, South Tripura",
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
                  <h2>Cliff Carvings on the Gomati</h2>
                  <p>
                    <strong>Chabimura</strong> — meaning "cliff of pictures"
                    — is a stretch of steep cliffs directly overlooking the
                    Gomati river in the Udaipur–Amarpur subdivision of South{" "}
                    <Link href="/blog/tripura-travel-guide">Tripura</Link>,
                    carved with rock-cut images of Hindu deities including
                    Shiva, Durga, Vishnu, Kartikeya, and Ganesha. The
                    carvings are believed to date to the 16th century,
                    during the reign of Maharaja Amar Manikya.
                  </p>
                  <p>
                    What sets Chabimura apart from other heritage sites in
                    Tripura is how it has to be seen: the carvings are set
                    into inaccessible cliff faces rising straight from the
                    water, so a boat ride along the Gomati is really the
                    only practical way to view most of them properly. The
                    river journey itself — through quiet, forested
                    riverbanks with plenty of birdlife — is as much a
                    highlight of a Chabimura visit as the carvings
                    themselves.
                  </p>
                  <p>
                    Chabimura sits close enough to{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur
                    </Link>{" "}
                    that most visitors combine the two into a single day
                    trip from Agartala.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🗿</span> Chabimura at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Amarpur, South Tripura",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~65 km + boat",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🗿",
                          label: "Known For",
                          value: "16th-Century Rock Carvings",
                        },
                        {
                          icon: "🛶",
                          label: "Access",
                          value: "Boat ride only",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Udaipur",
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
                  <h2>Best Time to Visit Chabimura</h2>
                  <p>
                    River conditions matter as much as weather when planning
                    a Chabimura boat ride.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant weather and a calmer, more predictable river current make for comfortable, unhurried boating past the carvings.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warming up",
                        text: "Still workable with an early start, though rising heat and humidity make the boat ride less pleasant by midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — stronger current",
                        text: "Heavy rain swells the Gomati river, making the current stronger and boating less predictable — best avoided if possible.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best light for photos",
                        text: "Soft morning light on the cliff faces makes for the most striking photographs of the carvings from the water.",
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
                    <strong>Our pick:</strong> October to March, ideally with
                    a mid-morning start — calm water, comfortable weather,
                    and good light on the cliff carvings.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chabimura</h2>
                  <ul>
                    <li>
                      <strong>By road to Amarpur:</strong> Roughly 65 km from
                      Agartala via{" "}
                      <Link href="/blog/udaipur-tripura-travel-guide">
                        Udaipur
                      </Link>
                      , a comfortable half-day's drive with a private
                      vehicle.
                    </li>
                    <li>
                      <strong>Boat from the Amarpur ghat:</strong> From
                      Amarpur, a further boat journey of a few kilometres
                      along the Gomati river brings you to the carvings —
                      boats are arranged locally at the ghat/jetty.
                    </li>
                    <li>
                      <strong>Combine with Udaipur:</strong> Since Udaipur
                      sits directly on the route, most visitors stop there
                      for the lakes and temple before continuing to Amarpur.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange the boat in advance
                    if you can, or at least confirm availability with a
                    local operator at the Amarpur ghat before setting out
                    from Agartala.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Boat Ride & the Carvings</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Forested river gorge near the Chabimura rock carvings, South Tripura"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Viewing the Carvings from the Water</h3>
                  <p>
                    The main experience is the boat ride itself, drifting
                    slowly past the cliffs to take in the carved figures of
                    Shiva, Durga, Vishnu, Kartikeya, and Ganesha, each set
                    into the rock face at different points along the
                    river's bend.
                  </p>
                  <h3>The Gomati River Journey</h3>
                  <p>
                    Beyond the carvings, the boat ride passes through quiet
                    forested riverbanks with plenty of birdlife — a calm,
                    scenic stretch that's worth savouring rather than
                    rushing straight to the carvings and back.
                  </p>
                  <h3>Combining with Udaipur</h3>
                  <p>
                    Since Udaipur's lakes and the{" "}
                    <Link href="/blog/tripura-sundari-temple-travel-guide">
                      Tripura Sundari Temple
                    </Link>{" "}
                    sit directly on the route to Amarpur, a stop there on
                    the way in or out rounds out a full day of South
                    Tripura sightseeing.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Chabimura</h2>
                  <p>
                    Accommodation directly at Chabimura is essentially
                    nonexistent — the realistic options are a day trip from
                    Agartala, or a base in Udaipur or Amarpur if you'd
                    rather not rush the round trip.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Guesthouses in Udaipur town",
                          "Basic lodges in Amarpur",
                          "Simple stays near Udaipur's lakes",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹3,500/night",
                        picks: [
                          "Business hotels in Agartala",
                          "Better guesthouses, Udaipur",
                          "Tourism department properties nearby",
                        ],
                      },
                      {
                        tier: "Practical Option",
                        icon: "🚗",
                        range: "Day trip",
                        picks: [
                          "Base in Agartala, day-trip via Udaipur",
                          "Return to Agartala same evening",
                          "Combine with Udaipur sightseeing en route",
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
                        title: "Agartala to Udaipur",
                        color: "bg-amber-700",
                        activities: [
                          "Drive to Udaipur (~55 km)",
                          "Visit Kalyan Sagar and the Tripura Sundari Temple",
                          "Continue on to Amarpur",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Chabimura Boat Ride",
                        color: "bg-sky-600",
                        activities: [
                          "Arrange a boat at the Amarpur ghat",
                          "Boat ride along the Gomati to view the carvings",
                          "Return drive to Agartala",
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
                    * This works comfortably as a single long day trip from
                    Agartala — an overnight in Udaipur is worth considering
                    only if you want a more relaxed pace.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Chabimura</h2>
                  <ul>
                    <li>
                      <strong>Amarpur town:</strong> Simple local eateries
                      near the ghat serve Bengali and Tripuri home-style
                      meals — the most convenient option before or after the
                      boat ride.
                    </li>
                    <li>
                      <strong>Udaipur town:</strong> A wider spread of
                      options if you're stopping there en route, useful for
                      a proper meal before continuing to Amarpur.
                    </li>
                    <li>
                      <strong>Carry snacks and water:</strong> There's
                      little in the way of food directly at the ghat or on
                      the river, so pack what you need for the boat ride
                      itself.
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
                            "Car hire from Agartala (round trip)",
                            "₹4,500",
                            "₹6,500",
                            "₹9,500",
                          ],
                          ["Boat hire at Amarpur", "₹500", "₹900", "₹1,500"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Accommodation, if staying over", "₹800", "₹2,500", "₹5,000"],
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
                    * Boat hire is typically per trip and best shared across
                    a group. Figures assume a day trip from Agartala.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chabimura</h2>
                  <ul>
                    <li>
                      <strong>Book or confirm the boat ahead:</strong>{" "}
                      Availability isn't guaranteed on arrival, especially
                      outside weekends — confirm with a local operator
                      before setting out.
                    </li>
                    <li>
                      <strong>Wear a life jacket:</strong> Standard practice
                      on any river boat ride — check that one is provided
                      before boarding.
                    </li>
                    <li>
                      <strong>Time it for good light:</strong> Morning light
                      generally shows the cliff carvings best for
                      photography.
                    </li>
                    <li>
                      <strong>Combine with Udaipur:</strong> Since the two
                      sit on the same route, visiting them together makes
                      much better use of the long drive out from Agartala.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card payment is not a
                      realistic option at the Amarpur ghat or on the river.
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
                          "Confirm boat availability before setting out",
                          "Combine the trip with Udaipur sightseeing",
                          "Wear or ask for a life jacket on the boat",
                          "Visit in the morning for the best light",
                          "Carry cash for the boat hire and food",
                          "Pack water and snacks for the river stretch",
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
                          "Expect to reach the carvings without a boat",
                          "Visit during heavy monsoon river flow",
                          "Assume a boat will be ready without checking",
                          "Rely on cards near the ghat",
                          "Skip the life jacket on the river",
                          "Rush straight past Udaipur if you have the time",
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
                    <strong>🗺️ Extend the trip:</strong> Chabimura pairs
                    naturally with{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur
                    </Link>{" "}
                    for temple and lake sightseeing, or extend further to
                    the islands of{" "}
                    <Link href="/blog/dumboor-lake-travel-guide">
                      Dumboor Lake
                    </Link>{" "}
                    for a fuller South Tripura circuit. See our full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
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
                  "Chabimura",
                  "Gomati River",
                  "Tripura",
                  "Rock Carvings",
                  "Amarpur",
                  "Boat Ride",
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

              <RelatedPostsGrid currentSlug="chabimura-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chabimura-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
