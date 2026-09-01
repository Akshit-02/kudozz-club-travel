// src/app/blog/sukhna-lake-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sukhna Lake Chandigarh: Travel Guide, Boating & Tips",
  description:
    "Complete Sukhna Lake guide — Chandigarh's man-made lake at the foot of the Shivalik hills. The 3 km promenade, boating, birdwatching, timings, and visit tips.",
  keywords:
    "Sukhna Lake Chandigarh, Sukhna Lake boating, Sukhna Lake timings, Sukhna Lake promenade, Sukhna Lake Sector 1, Sukhna Choe, Chandigarh lake, Sukhna Lake birdwatching, Sukhna Lake sunset, Sukhna Lake Rock Garden, Chandigarh sightseeing, best time to visit Sukhna Lake, Sukhna Lake boat club, Sukhna Lake FAQ",
  openGraph: {
    title: "Sukhna Lake Chandigarh: Travel Guide, Boating & Tips",
    description:
      "A man-made lake at the edge of the Shivalik foothills, ringed by a 3 km promenade and known for boating, birdwatching, and Chandigarh's best sunsets.",
    url: "https://club.kudozz.in/blog/sukhna-lake-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sukhna Lake, the man-made lake at the foot of the Shivalik hills in Chandigarh's Sector 1, ringed by the city's most popular promenade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukhna Lake Chandigarh: Travel Guide, Boating & Tips",
    description:
      "A man-made lake at the edge of the Shivalik foothills, ringed by a 3 km promenade and known for boating, birdwatching, and Chandigarh's best sunsets.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sukhna-lake-chandigarh-travel-guide",
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
          headline: "Sukhna Lake Chandigarh: Travel Guide, Boating & Tips",
          description:
            "Complete Sukhna Lake guide — Chandigarh's man-made lake at the foot of the Shivalik hills. The 3 km promenade, boating, birdwatching, timings, and visit tips.",
          image:
            "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-08-31",
          dateModified: "2026-08-31",
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
            "@id": "https://club.kudozz.in/blog/sukhna-lake-chandigarh-travel-guide",
          },
          keywords:
            "Sukhna Lake Chandigarh, Sukhna Lake boating, Sukhna Lake timings, Sukhna Lake promenade, Sector 1 Chandigarh, Sukhna Choe",
          about: {
            "@type": "Place",
            name: "Sukhna Lake",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressRegion: "Chandigarh",
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
                name: "Chandigarh",
                item: "https://club.kudozz.in/blog/chandigarh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Sukhna Lake",
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
    q: "Is Sukhna Lake natural or man-made?",
    a: "Sukhna Lake is entirely man-made, created in 1958 by damming the seasonal Sukhna Choe stream as it flowed down from the Shivalik hills. It was originally built to solve a siltation problem in the area before becoming Chandigarh's best-known recreational spot and, arguably, its signature public space.",
  },
  {
    q: "Is entry to Sukhna Lake free?",
    a: "Yes, walking the lakeside promenade is free and open to the public at all times it's accessible. The only costs come from optional activities on site — mainly the rowboats and pedal boats run by the boat club, which charge a modest per-person or per-boat fee.",
  },
  {
    q: "Can you go boating at Sukhna Lake?",
    a: "Yes — a boat club on the lake offers rowboats and pedal boats for a per-person or per-boat fee (an approximate, modest amount that can vary by boat type and season). Motorboats aren't permitted, which keeps the lake notably quiet compared to many boating spots elsewhere in India.",
  },
  {
    q: "How long is the Sukhna Lake promenade?",
    a: "The promenade running around the lake is roughly 3 km, making a full loop a comfortable 30-45 minute walk at an easy pace, longer if you're jogging intervals, stopping often, or walking with children.",
  },
  {
    q: "What is the best time of day to visit Sukhna Lake?",
    a: "Sunrise and sunset are both excellent, and for different reasons — mornings are cooler, quieter, and popular with joggers and walkers, while evenings bring out a wider social crowd and the best light for photographs over the water and the Shivalik hills behind it. Weekday visits at either time are noticeably calmer than weekend evenings.",
  },
  {
    q: "Can I see birds at Sukhna Lake?",
    a: "Yes — the lake draws migratory birds during the winter months, making it a popular, if informal, spot for birdwatchers in Chandigarh. A modest pair of binoculars or a telephoto lens is enough to make the most of it.",
  },
  {
    q: "How do I combine Sukhna Lake with the Rock Garden?",
    a: "Easily — the two sit right next to each other in Sector 1, and almost every visitor does both in the same outing. A popular plan is the Rock Garden first, followed by the lake promenade and boating, or the reverse if you'd rather catch the lake at sunrise before the Rock Garden opens.",
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
  { id: "introduction", title: "Chandigarh's Signature Lake", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-promenade", title: "The 3 km Promenade", level: 2 },
  { id: "boating", title: "Boating at Sukhna Lake", level: 2 },
  { id: "wildlife-and-birds", title: "Wildlife & Birdwatching", level: 2 },
  { id: "nearby-rock-garden", title: "Nearby: Rock Garden & More", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SukhnaLakeGuidePage() {
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
              src="/images/destinations/chandigarh/hero.jpg"
              alt="Sukhna Lake, the man-made lake at the foot of the Shivalik hills in Chandigarh's Sector 1, ringed by the city's most popular promenade"
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
                { label: "Chandigarh", href: "/blog/chandigarh-travel-guide" },
                { label: "Sukhna Lake", href: null },
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
                "Sukhna Lake",
                "Chandigarh",
                "Sector 1",
                "Boating",
                "Shivalik Hills",
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
              Sukhna Lake, Chandigarh: Complete Travel Guide & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A man-made lake at the edge of the Shivalik foothills, ringed
              by a 3 km promenade of walkers, joggers, and cyclists — quiet
              rowboats on the water, migratory birds in winter, and
              Chandigarh's most reliable sunset.
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
                  text: "Sector 1, Chandigarh",
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
                  <h2>Chandigarh's Signature Lake</h2>
                  <p>
                    <strong>Sukhna Lake</strong> is Chandigarh's best-known
                    recreational space and, for many residents, the closest
                    thing the city has to a public living room. Sitting at
                    the edge of the Shivalik foothills in Sector 1 of{" "}
                    <Link href="/blog/chandigarh-travel-guide">Chandigarh</Link>
                    , it's a man-made lake ringed by a roughly 3 km promenade
                    that fills every morning and evening with walkers,
                    joggers, and cyclists — and, thanks to a backdrop of low
                    hills rather than flat cityscape, it manages to feel
                    genuinely scenic rather than just functional.
                  </p>
                  <p>
                    Unlike most artificial lakes built purely for utility,
                    Sukhna Lake has become something closer to a civic
                    institution — the place where Chandigarh comes to
                    exercise, socialise, watch the sunset, and, in winter,
                    watch the migratory birds that pass through. It sits
                    immediately next to the{" "}
                    <Link href="/blog/rock-garden-chandigarh-travel-guide">
                      Rock Garden
                    </Link>
                    , and the two are almost always visited together as a
                    natural half-day pairing at the northern edge of the
                    city.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌊</span> Sukhna Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 1, Chandigarh",
                        },
                        {
                          icon: "🛠️",
                          label: "Created",
                          value: "1958 (damming the Sukhna Choe)",
                        },
                        {
                          icon: "🚶",
                          label: "Promenade",
                          value: "~3 km loop",
                        },
                        {
                          icon: "🚣",
                          label: "Boating",
                          value: "Rowboats & pedal boats (no motorboats)",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free (boating has a fee)",
                        },
                        {
                          icon: "🐦",
                          label: "Best For Birds",
                          value: "Nov – Feb, migratory season",
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
                  <h2>Best Time to Visit Sukhna Lake</h2>
                  <p>
                    Sukhna Lake genuinely changes character across the day
                    and the year — the same promenade that's a brisk,
                    business-like fitness circuit at 6 AM turns into a
                    relaxed, crowded social space by 6 PM.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Sunrise",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for walkers, joggers & quiet",
                        text: "The promenade is at its coolest and calmest soon after sunrise, filled mostly with locals on their morning walk or run rather than visitors — a good window if you want the lake without the crowds.",
                      },
                      {
                        season: "Sunset",
                        emoji: "🌇",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for atmosphere & photography",
                        text: "Evenings bring out a wider, more sociable crowd and the best light of the day over the water and the Shivalik hills behind it — arguably Sukhna Lake's signature moment.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best season overall",
                        text: "Cool, comfortable weather makes the full 3 km promenade genuinely enjoyable at any hour, and coincides with the winter migratory bird season.",
                      },
                      {
                        season: "Weekday visits",
                        emoji: "🗓️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Quieter than weekends",
                        text: "Sukhna Lake gets very crowded on weekend evenings especially — a weekday visit, or an early-morning one on any day, is noticeably calmer.",
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
                    <strong>Our pick:</strong> a winter weekday, split between
                    both ends of the day — an early morning walk for quiet and
                    birdwatching, then back for sunset and boating once the
                    light turns golden over the hills.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sukhna Lake</h2>
                  <p>
                    Sukhna Lake sits in Sector 1 at the northern edge of
                    Chandigarh, right next to the Rock Garden — easily one of
                    the most convenient sightseeing clusters in the city.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The simplest way in from
                      anywhere in Chandigarh — Sector 1 and Sukhna Lake are
                      landmarks every driver knows.
                    </li>
                    <li>
                      <strong>From Sector 17:</strong> A short ride from the
                      city's central shopping and café district, making it
                      easy to combine a lake visit with an evening in Sector
                      17 afterward.
                    </li>
                    <li>
                      <strong>On foot from the Rock Garden:</strong> If you're
                      already at the Rock Garden, the lake is a short, easy
                      walk away — most visitors combine the two in a single
                      outing.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ask your cab to drop you at
                    the boat club end of the promenade — it puts you close to
                    both boating and the busiest, most scenic stretch facing
                    the hills.
                  </div>
                </section>

                {/* ── The Promenade ─────────────────────────────────────── */}
                <section id="the-promenade">
                  <h2>The 3 km Promenade</h2>
                  <p>
                    The paved promenade ringing Sukhna Lake runs for roughly{" "}
                    <strong>3 km</strong>, and functions less like a tourist
                    walkway and more like the city's default fitness circuit
                    — it's genuinely one of the most heavily used pieces of
                    public infrastructure in Chandigarh. Walkers, joggers, and
                    cyclists share the loop in large numbers, particularly at
                    sunrise and sunset, when the temperature drops and the
                    light softens over the water.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="The Sukhna Lake promenade against the Shivalik foothills backdrop, popular with walkers, joggers, and cyclists especially at sunrise and sunset"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    What sets the setting apart from a typical city lake is
                    the backdrop: Sukhna Lake sits right at the edge of the
                    <strong> Shivalik hills</strong>, so instead of looking out
                    at more city, the far shore gives way to a low range of
                    hills that catches the day's changing light — hazy blue in
                    the middle of the day, warmer and more defined toward
                    evening. It's a genuinely different feel from most urban
                    lakes in the plains, and a large part of why the
                    promenade draws people back day after day rather than
                    just as a one-time sightseeing stop.
                  </p>
                  <p>
                    Along the promenade you'll also find benches, small food
                    and snack stalls at points, and — a little further along
                    — the <strong>Garden of Silence</strong> and an open-air
                    sculpture area, both worth a short detour if you're
                    walking the full loop rather than just the busiest
                    stretch near the boat club.
                  </p>
                </section>

                {/* ── Boating ────────────────────────────────────────────── */}
                <section id="boating">
                  <h2>Boating at Sukhna Lake</h2>
                  <p>
                    A boat club on the lake offers <strong>rowboats and
                    pedal boats</strong> for a modest per-person or per-boat
                    fee — figures worth confirming on the day, since exact
                    rates and boat categories can vary. Notably, motorboats
                    are not permitted on the lake, which keeps the water
                    quiet and largely free of engine noise, a deliberate
                    choice that sets Sukhna Lake apart from many boating spots
                    elsewhere in India where motorised boats dominate.
                  </p>
                  <p>
                    Boating tends to be busiest in the evening, when families
                    and groups turn a lake visit into a longer outing rather
                    than just a walk — expect a short queue at the boat club
                    counter during peak weekend evening hours, and a much
                    quicker turnaround on weekday mornings or afternoons.
                  </p>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If boating is a priority,
                    arrive at the boat club in the couple of hours before
                    sunset rather than right at peak evening — you'll get
                    similar light for photos with a noticeably shorter wait.
                  </div>
                </section>

                {/* ── Wildlife & Birds ───────────────────────────────────── */}
                <section id="wildlife-and-birds">
                  <h2>Wildlife & Birdwatching</h2>
                  <p>
                    Sukhna Lake draws a reliable population of migratory
                    birds during the winter months, making it one of
                    Chandigarh's more popular — if informal — birdwatching
                    spots. Early mornings between roughly November and
                    February are the most productive window, when the lake is
                    also at its quietest and coolest, a convenient overlap
                    for anyone combining a walk with some casual birding.
                  </p>
                  <p>
                    You don't need specialised equipment to enjoy this side
                    of the lake — a pair of binoculars or a modest telephoto
                    lens is enough to make the most of a morning walk along
                    the quieter stretches of the promenade, away from the
                    busier boat club end.
                  </p>
                </section>

                {/* ── Nearby ────────────────────────────────────────────── */}
                <section id="nearby-rock-garden">
                  <h2>Nearby: Rock Garden & More</h2>
                  <p>
                    Sukhna Lake's location in Sector 1 puts it right beside
                    several of Chandigarh's other major sights, making this
                    part of the city a natural cluster for a half- or
                    full-day visit.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/rock-garden-chandigarh-travel-guide">
                          Rock Garden
                        </Link>
                        :
                      </strong>{" "}
                      Right next door — Nek Chand's 40-acre maze of
                      courtyards and sculptures built entirely from
                      industrial waste. Almost every Sukhna Lake visit is
                      paired with at least a short stop here.
                    </li>
                    <li>
                      <strong>Garden of Silence & open-air sculpture
                      area:</strong> A quieter detour along the promenade,
                      good for a slower pace away from the busiest stretch
                      near the boat club.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                          Capitol Complex
                        </Link>
                        :
                      </strong>{" "}
                      Le Corbusier's UNESCO-listed government buildings are a
                      short drive away, for anyone extending the day into the
                      city's formal modernist architecture.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a complete itinerary covering the Rose Garden, Sector
                    17, and day trips to the nearby hills.
                  </div>
                </section>

                {/* ── Photography ────────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Shoot at sunset:</strong> The Shivalik hills
                      behind the lake catch warm light beautifully in the
                      last hour before sunset — the single best window for
                      photographs here.
                    </li>
                    <li>
                      <strong>Use the promenade's edge for reflections:</strong>{" "}
                      On calm mornings and evenings, the still water often
                      reflects the hills and sky clearly — worth a low-angle
                      shot from the water's edge.
                    </li>
                    <li>
                      <strong>Bring a telephoto lens in winter:</strong>{" "}
                      Migratory birds are the standout subject during the
                      November-to-February window.
                    </li>
                    <li>
                      <strong>Photograph the boats from the promenade:</strong>{" "}
                      Rowboats and pedal boats on calm water make a simple but
                      effective foreground against the hills.
                    </li>
                    <li>
                      <strong>Avoid the crowded boat-club stretch if you
                      want empty shots:</strong> Walk further along the
                      promenade toward the quieter sections for cleaner
                      compositions.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1.5-2 Hours)</h2>
                  <p>
                    Sukhna Lake works well both as a quick stop and a longer,
                    unhurried visit — here's a simple plan that covers the
                    highlights without feeling rushed.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-30 min",
                        title: "Arrive & Walk the Promenade",
                        color: "bg-amber-700",
                        activities: [
                          "Start at the boat club end of the lake",
                          "Walk along the busiest, most scenic stretch",
                          "Take in the Shivalik hills across the water",
                        ],
                      },
                      {
                        day: "30-70 min",
                        title: "Boating & Quieter Stretch",
                        color: "bg-forest-600",
                        activities: [
                          "Rent a rowboat or pedal boat if the queue is short",
                          "Continue toward the Garden of Silence",
                          "Look for migratory birds if visiting in winter",
                        ],
                      },
                      {
                        day: "70-100 min",
                        title: "Sunset & Wind Down",
                        color: "bg-sky-600",
                        activities: [
                          "Find a bench facing west for sunset",
                          "Grab a snack from a stall along the promenade",
                          "Head to the Rock Garden next door, or wrap up",
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
                    * Add 30-45 minutes if you're doing the full 3 km loop,
                    photographing seriously, or continuing straight on to the
                    Rock Garden afterward.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Walking Sukhna Lake's promenade costs nothing — your only
                    real expenses are getting there and, if you choose,
                    boating and snacks along the way.
                  </p>
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
                          ["Promenade walk", "Free", "Free", "Free"],
                          [
                            "Transport to/from Sector 1",
                            "₹60 (auto, shared)",
                            "₹200 (auto/cab)",
                            "₹500 (private cab)",
                          ],
                          [
                            "Boating (rowboat/pedal boat)",
                            "~₹100-150",
                            "~₹150-250",
                            "₹400+ (extended ride)",
                          ],
                          [
                            "Snacks at promenade stalls",
                            "₹100",
                            "₹300",
                            "₹800+",
                          ],
                          ["Total (approx.)", "₹260", "₹700", "₹1,700+"],
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
                    * Figures are per person, per visit, and approximate —
                    boating rates can vary. See our{" "}
                    <Link href="/blog/rock-garden-chandigarh-travel-guide">
                      Rock Garden guide
                    </Link>{" "}
                    for combined-visit budgeting.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sukhna Lake</h2>
                  <ul>
                    <li>
                      <strong>Go early or late, avoid weekend evenings if
                      you want quiet:</strong> Sukhna Lake gets very crowded
                      on weekend evenings — a weekday or early-morning visit
                      is noticeably calmer.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> Long
                      stretches of the promenade have limited shade,
                      especially at midday in summer.
                    </li>
                    <li>
                      <strong>Confirm boating rates on the day:</strong>{" "}
                      Fees are modest but can vary by boat type — check at the
                      boat club counter rather than assuming a fixed price.
                    </li>
                    <li>
                      <strong>Bring binoculars in winter:</strong> Migratory
                      birds arrive roughly November to February — a rewarding
                      bonus for anyone interested in birdwatching.
                    </li>
                    <li>
                      <strong>Combine with the Rock Garden:</strong> The two
                      sites sit right next to each other — see our{" "}
                      <Link href="/blog/rock-garden-chandigarh-travel-guide">
                        Rock Garden guide
                      </Link>{" "}
                      to plan a combined half-day visit.
                    </li>
                    <li>
                      <strong>Wear comfortable walking shoes:</strong> The
                      full promenade loop is roughly 3 km — worthwhile
                      footwear if you plan to walk the whole thing.
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
                          "Visit at sunrise or sunset for the best light",
                          "Try rowboating or pedal boating at the boat club",
                          "Walk the full 3 km loop if you have the time",
                          "Bring binoculars for winter birdwatching",
                          "Pair the visit with the Rock Garden next door",
                          "Choose a weekday for a quieter promenade",
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
                          "Expect motorboats — only rowboats and pedal boats operate",
                          "Visit weekend evenings expecting a quiet walk",
                          "Skip sun protection on the shadeless stretches",
                          "Assume fixed boating prices without checking",
                          "Rush the promenade — it rewards an unhurried pace",
                          "Skip the Rock Garden — it's a two-minute walk away",
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
                  "Sukhna Lake",
                  "Chandigarh",
                  "Sector 1",
                  "Rock Garden",
                  "Boating",
                  "Shivalik Hills",
                  "Birdwatching",
                  "City Guide",
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

              <RelatedPostsGrid currentSlug="sukhna-lake-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sukhna-lake-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
