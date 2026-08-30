// src/app/blog/doodhpathri-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Doodhpathri Travel Guide: Kashmir's Valley of Milk",
  description:
    "Doodhpathri travel guide: Kashmir's peaceful Valley of Milk near Srinagar. Best time to visit, how to reach, things to do, day-trip itinerary, and budget tips.",
  keywords:
    "Doodhpathri travel guide, Doodhpathri Kashmir, Doodhpathri distance from Srinagar, Doodhpathri meadow, best time to visit Doodhpathri, Doodhpathri day trip, Doodhpathri Budgam, Valley of Milk Kashmir",
  openGraph: {
    title: "Doodhpathri Travel Guide: Kashmir's Valley of Milk",
    description:
      "A rolling green meadow ringed by pine forest, a milky-white mountain stream, and a fraction of the crowds at Gulmarg — the complete Doodhpathri guide.",
    url: "https://club.kudozz.in/blog/doodhpathri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green meadow and pine forest at Doodhpathri, Kashmir's Valley of Milk",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Doodhpathri Travel Guide: Kashmir's Valley of Milk",
    description:
      "A rolling green meadow ringed by pine forest, a milky-white mountain stream, and a fraction of the crowds at Gulmarg — the complete Doodhpathri guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/doodhpathri-travel-guide",
  },
};

// ── JSON-LD: Article ────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Doodhpathri Travel Guide: Kashmir's Valley of Milk",
          description:
            "The complete Doodhpathri travel guide — Kashmir's quiet, milk-white meadow near Srinagar. Best time to visit, how to reach, things to do, and a day-trip itinerary.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/doodhpathri-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Doodhpathri",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Jammu and Kashmir",
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
                name: "Jammu & Kashmir",
                item: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Doodhpathri" },
            ],
          },
        }),
      }}
    />
  );
}

// ── JSON-LD: FAQ ─────────────────────────────────────────────────────────────
function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Doodhpathri a day trip from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Doodhpathri is about 42 km from Srinagar and takes roughly 1.5–2 hours to reach by road via Budgam. Most visitors do it as a full-day round trip, leaving Srinagar in the morning and returning by early evening, since accommodation directly in the meadow is very limited.",
              },
            },
            {
              "@type": "Question",
              name: "What is the meaning of Doodhpathri?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Doodhpathri translates to \"Valley of Milk.\" The name comes from the Shaliganga stream that runs through the meadow — its water froths and foams white as it tumbles over stones, giving it a milky appearance, especially in the stretches near the main meadow.",
              },
            },
            {
              "@type": "Question",
              name: "How far is Doodhpathri from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Doodhpathri is approximately 42 km from Srinagar, reached via Budgam town on a mostly paved but narrowing mountain road. The drive takes about 1.5 to 2 hours one way, depending on traffic through Budgam and road conditions closer to the meadow.",
              },
            },
            {
              "@type": "Question",
              name: "Is Doodhpathri better than Gulmarg?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "They serve different purposes. Gulmarg has the gondola, skiing, and dramatic high-altitude views, but draws heavy crowds and higher prices. Doodhpathri is a quieter, gentler meadow experience — better for a peaceful picnic day or photography, without lifts, skiing, or the same infrastructure.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best time to visit Doodhpathri?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "May to September is the best window, when the meadow is green, wildflowers are in bloom, and the access road is fully open. June and July tend to be the greenest months. The meadow is snowbound and largely inaccessible from December through April.",
              },
            },
            {
              "@type": "Question",
              name: "Can Doodhpathri and Yusmarg be visited together?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Not comfortably in one day — they lie in different directions from Srinagar and each deserves a half to full day on its own. Most travellers pick one as a day trip and, if time allows, visit the other on a separate day of their Kashmir itinerary.",
              },
            },
          ],
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Doodhpathri?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Doodhpathri", level: 2 },
  { id: "things-to-do", title: "Things to Do in Doodhpathri", level: 2 },
  {
    id: "doodhpathri-vs-others",
    title: "Doodhpathri vs Gulmarg vs Yusmarg",
    level: 2,
  },
  { id: "tosa-maidan", title: "Nearby: Tosa Maidan", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Suggested Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DoodhpathriGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Green meadow and pine forest at Doodhpathri, Kashmir's Valley of Milk"
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
                  label: "Jammu & Kashmir",
                  href: "/blog/jammu-kashmir-travel-guide",
                },
                { label: "Doodhpathri", href: null },
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
                "Doodhpathri",
                "Jammu & Kashmir",
                "Kashmir Meadows",
                "Budgam",
                "Off-beat Kashmir",
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
              className="text-4xl sm:text-5xl lg:text-[3.3rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Doodhpathri Travel Guide: Kashmir's Valley of Milk
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A rolling green meadow ringed by pine forest, a stream that
              froths milky-white over its stones, and a fraction of the
              crowds you'll find at Gulmarg — this is Kashmir at its quietest.
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
                  text: "Budgam, Jammu & Kashmir",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,300 words",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
                  <h2>Why Visit Doodhpathri?</h2>
                  <p>
                    <strong>Doodhpathri</strong> — literally "Valley of
                    Milk" — is one of the quieter meadows tucked into the
                    hills of{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir
                    </Link>
                    , about two hours from Srinagar in Budgam district. The
                    name comes from the <strong>Shaliganga stream</strong>{" "}
                    that cuts through the meadow — its water churns and
                    foams white as it tumbles over stones, giving stretches
                    of it a genuinely milky look, and the meadow's soft
                    grass carpets around it complete the picture.
                  </p>
                  <p>
                    At roughly <strong>2,730 metres</strong>, Doodhpathri
                    sits below the tree line, so unlike Gulmarg's bare
                    upper slopes, it's ringed by thick pine and fir forest
                    that gives way to a wide, undulating meadow — the kind
                    of open green bowl that Kashmir's postcards are made
                    of, minus the crowds. Where Gulmarg and Pahalgam have
                    become genuinely busy in peak season, Doodhpathri still
                    feels like a local secret: a place Srinagar families
                    drive out to for a Sunday picnic rather than a
                    must-tick tourist stop.
                  </p>
                  <p>
                    That's exactly its appeal. There's no gondola, no ski
                    lift, no strip of souvenir shops — just grass, pine
                    forest, grazing horses, and a cold stream to dip your
                    feet in. It rewards travellers who want a slower,
                    quieter counterpart to the bigger valley destinations,
                    ideally as a single, unhurried day trip from Srinagar.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Doodhpathri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Budgam, J&K",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~2,730 m",
                        },
                        {
                          icon: "🚗",
                          label: "From Srinagar",
                          value: "~42 km / 1.5–2 hrs",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "May – September",
                        },
                        {
                          icon: "🐎",
                          label: "Known For",
                          value: "Meadows, Shaliganga stream",
                        },
                        {
                          icon: "💰",
                          label: "Day-Trip Budget",
                          value: "₹1,500 – ₹4,000",
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
                  <h2>Best Time to Visit Doodhpathri</h2>
                  <p>
                    Doodhpathri's access road and the meadow itself are
                    snowbound for a good chunk of the year, so the visiting
                    window is narrower than for Srinagar.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – Jun",
                        emoji: "🌱",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Fresh green — our pick",
                        text: "Snow has just melted off the meadow, grass is at its brightest green, and the Shaliganga runs full and fast. Wildflowers start appearing by late May.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌸",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Peak bloom, occasional showers",
                        text: "The meadow is at its lushest, with wildflowers scattered across the grass. Short monsoon showers can roll in by afternoon, so mornings are best.",
                      },
                      {
                        season: "Sep",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Quiet shoulder season",
                        text: "Grass starts turning golden-brown, crowds thin further, and the light in late afternoon is particularly good for photography.",
                      },
                      {
                        season: "Oct – Apr",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Closed or inaccessible",
                        text: "The road narrows and often closes under snow from late autumn through spring; the meadow itself is buried in snow through winter.",
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
                    <strong>Our pick:</strong> Early-to-mid June, right
                    after the road fully opens for the season — the meadow
                    is at its greenest, the stream runs strong with
                    snowmelt, and the summer rush hasn't fully picked up
                    yet.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Doodhpathri</h2>
                  <p>
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>{" "}
                    is the only realistic gateway to Doodhpathri — there's
                    no direct rail or air link, and the meadow itself has
                    no public transport running into it.
                  </p>
                  <ul>
                    <li>
                      <strong>By Road (self-drive or taxi):</strong> The
                      most common way in. Head out of Srinagar toward
                      Budgam town, then continue on the narrowing hill
                      road through Kanidajan village up to the meadow —
                      about 42 km and 1.5–2 hours depending on traffic
                      through Budgam and road conditions on the final
                      stretch.
                    </li>
                    <li>
                      <strong>Shared or private cabs:</strong> Taxis are
                      easy to arrange from Srinagar for a day trip, either
                      through your hotel or at the main taxi stands — most
                      drivers know the route well since it's a popular
                      local outing.
                    </li>
                    <li>
                      <strong>Last-mile transport:</strong> Depending on
                      where the tarred road ends for the season, the final
                      stretch into the meadow is sometimes covered on foot
                      or by pony — ask your driver, since this varies
                      year to year with road maintenance.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Leave Srinagar by 8–9 AM.
                    The road narrows considerably near the meadow, and
                    getting there before the midday rush of local
                    day-trippers means easier parking and a quieter
                    meadow for photos.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Doodhpathri</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Rolling meadow and pine forest at Doodhpathri near Srinagar, Kashmir"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Doodhpathri isn't built around a checklist of
                    "sights" — it's built around slowing down. The
                    activities here are simple by design.
                  </p>
                  <ul>
                    <li>
                      <strong>Walk along the Shaliganga stream:</strong>{" "}
                      The meadow's namesake stream is the centrepiece —
                      follow it upstream past patches of pine forest,
                      watching the water froth white over the stones that
                      give the valley its "milk" name.
                    </li>
                    <li>
                      <strong>Meadow walks:</strong> The open grassland
                      rolls gently for a couple of kilometres, framed by
                      forested slopes on all sides — genuinely pleasant
                      just to wander without a fixed route.
                    </li>
                    <li>
                      <strong>Pony rides:</strong> Local pony handlers
                      offer short rides across the meadow and toward the
                      surrounding ridgelines, similar in spirit to
                      Gulmarg but far less commercialised and cheaper.
                    </li>
                    <li>
                      <strong>Photography:</strong> Wide-open meadow,
                      grazing horses, pine treelines, and the stream all
                      in one frame — best light is early morning or the
                      last hour before sunset.
                    </li>
                    <li>
                      <strong>Picnic culture:</strong> This is genuinely
                      how most Kashmiri families experience Doodhpathri —
                      carrying a packed lunch, laying out a sheet on the
                      grass by the stream, and spending a few unhurried
                      hours before heading back.
                    </li>
                    <li>
                      <strong>Short forest walks:</strong> The pine and
                      fir forest ringing the meadow has a few informal
                      trails — good for a quieter half hour away from the
                      main picnic areas.
                    </li>
                  </ul>
                </section>

                {/* ── Comparison ──────────────────────────────────────── */}
                <section id="doodhpathri-vs-others">
                  <h2>Doodhpathri vs Gulmarg vs Yusmarg</h2>
                  <p>
                    Doodhpathri is often weighed against{" "}
                    <Link href="/blog/gulmarg-travel-guide">Gulmarg</Link>{" "}
                    and{" "}
                    <Link href="/blog/yusmarg-travel-guide">Yusmarg</Link>{" "}
                    — Kashmir's other well-known meadow destinations — and
                    each has a genuinely different character worth
                    understanding before you pick one for a day trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Gulmarg:</strong> The most developed of the
                      three, with a gondola climbing above the snow line,
                      skiing in winter, and hotels and restaurants right
                      at the meadow's edge — but correspondingly the
                      busiest and most expensive.
                    </li>
                    <li>
                      <strong>Yusmarg:</strong> Closer in spirit to
                      Doodhpathri — a quiet pine-ringed meadow with pony
                      rides and river walks — and reachable in a similar
                      time frame from Srinagar, but in a different
                      direction, so the two are rarely combined in one
                      day.
                    </li>
                    <li>
                      <strong>Doodhpathri:</strong> The least developed
                      and quietest of the three, with essentially no
                      lift or ski infrastructure — its draw is the meadow
                      and stream themselves, not add-on activities.
                    </li>
                  </ul>
                  <blockquote>
                    If your Kashmir itinerary already includes Gulmarg for
                    the gondola and snow, Doodhpathri is the better
                    complement — a calm, green counterpoint rather than a
                    repeat of the same experience.
                  </blockquote>
                </section>

                {/* ── Tosa Maidan ──────────────────────────────────────── */}
                <section id="tosa-maidan">
                  <h2>Nearby: Tosa Maidan</h2>
                  <p>
                    For travellers with an extra day and a taste for going
                    further off the beaten path, <strong>Tosa Maidan</strong>{" "}
                    is a larger, even less-visited highland meadow not far
                    from Doodhpathri, historically used as a firing range
                    before being reopened for tourism. It's considerably
                    wilder and less accessible — usually requiring a
                    sturdier vehicle or a longer trek — so it's better
                    suited to a separate, dedicated outing rather than
                    tacking it onto a Doodhpathri day trip. Worth
                    researching locally in Budgam if you're extending your
                    Kashmir trip specifically around off-beat meadows.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation directly at Doodhpathri is genuinely
                    limited — this is, deliberately, still mostly a
                    day-trip destination rather than an overnight one.
                    Most travellers base themselves in{" "}
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>{" "}
                    and drive out for the day.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "At Doodhpathri",
                        icon: "⛺",
                        range: "Very limited",
                        picks: [
                          "A handful of J&K Tourism huts/cottages (seasonal)",
                          "Occasional camping arranged via local operators",
                          "No real hotel infrastructure in the meadow itself",
                        ],
                      },
                      {
                        tier: "Base in Srinagar (recommended)",
                        icon: "🏨",
                        range: "₹1,500 – ₹8,000+/night",
                        picks: [
                          "Budget guesthouses near Dal Gate",
                          "Mid-range hotels across the city",
                          "Dal Lake houseboats for a signature stay",
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
                    Unless you're specifically arranging a camping trip
                    through a local operator, plan Doodhpathri as a day
                    trip and keep your actual booking in Srinagar — it
                    saves the uncertainty of scarce on-site options.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Doodhpathri</h2>
                  <p>
                    Food options right at the meadow are basic — a few
                    small tea stalls and dhabas rather than proper
                    restaurants — so most visitors either carry a picnic
                    or eat before/after in Srinagar or Budgam.
                  </p>
                  <ul>
                    <li>
                      <strong>Roadside dhabas:</strong> Simple stalls near
                      the meadow's edge serve tea, Maggi noodles, and
                      basic snacks — enough to tide you over, not a full
                      meal stop.
                    </li>
                    <li>
                      <strong>Kahwa:</strong> Saffron and cardamom-spiced
                      green tea, sold at the small stalls — a genuinely
                      warming cup with the meadow's cool air and altitude.
                    </li>
                    <li>
                      <strong>Pack a picnic:</strong> The single best way
                      to eat at Doodhpathri is to bring your own — this is
                      exactly what local families do, laying out lunch on
                      the grass by the stream.
                    </li>
                    <li>
                      <strong>Budgam town:</strong> A better bet for a
                      proper sit-down meal on the way in or out, with more
                      established local eateries than the meadow itself.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Day-Trip Itinerary from Srinagar</h2>
                  <p>
                    Doodhpathri fits comfortably into a single day out of
                    Srinagar, with time to spare for a slow lunch by the
                    stream.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Depart Srinagar & Drive In",
                        color: "bg-amber-700",
                        activities: [
                          "Leave Srinagar by 8–9 AM via Budgam town",
                          "Stop for tea/breakfast in Budgam if needed",
                          "Arrive Doodhpathri by 10:30–11 AM",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Meadow & Stream Time",
                        color: "bg-forest-600",
                        activities: [
                          "Walk the meadow and along the Shaliganga stream",
                          "Optional pony ride toward the ridgelines",
                          "Picnic lunch by the stream (packed or local snacks)",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Photography & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Golden-hour photos as crowds thin out",
                          "Depart by 4–5 PM to avoid the road after dark",
                          "Back in Srinagar by early evening",
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

                  <blockquote>
                    If your trip includes both{" "}
                    <Link href="/blog/gulmarg-travel-guide">Gulmarg</Link>{" "}
                    and Doodhpathri, do them on separate days rather than
                    trying to combine — they're in different directions
                    from Srinagar and each deserves unhurried time.
                  </blockquote>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown (Day Trip from Srinagar)</h2>
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
                          [
                            "Cab (round trip from Srinagar)",
                            "₹1,800 (shared)",
                            "₹2,800 (private)",
                            "₹4,000 (private, full day)",
                          ],
                          ["Pony ride", "₹300", "₹500", "₹800"],
                          [
                            "Food (picnic/dhaba)",
                            "₹200",
                            "₹400",
                            "₹700",
                          ],
                          [
                            "Misc (tea, parking, tips)",
                            "₹150",
                            "₹250",
                            "₹400",
                          ],
                          [
                            "Day-trip total",
                            "₹2,450",
                            "₹3,950",
                            "₹5,900",
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
                    * Excludes your Srinagar accommodation. A shared cab
                    with other travellers is the most cost-effective way
                    to reach Doodhpathri; a private cab gives you far more
                    flexibility on timing.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Doodhpathri</h2>
                  <ul>
                    <li>
                      <strong>Confirm the road is open:</strong> The
                      access road can close after early snowfall or heavy
                      rain — check with your Srinagar hotel or driver
                      before setting out, especially outside peak summer.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> There are no ATMs or
                      reliable card payment options at the meadow — pay
                      pony handlers and stall owners in cash.
                    </li>
                    <li>
                      <strong>Pack a picnic:</strong> Food options on-site
                      are minimal — carrying your own lunch is both more
                      reliable and more in keeping with how locals enjoy
                      the meadow.
                    </li>
                    <li>
                      <strong>Start early, leave by late afternoon:</strong>{" "}
                      The narrow hill road is best driven in daylight —
                      aim to be heading back to Srinagar by 4–5 PM.
                    </li>
                    <li>
                      <strong>Dress in layers:</strong> Even in summer,
                      mornings and evenings at 2,730m are noticeably
                      cooler than Srinagar — a light jacket is worth
                      carrying regardless of season.
                    </li>
                    <li>
                      <strong>Carry out your trash:</strong> Doodhpathri's
                      appeal is precisely that it isn't overrun — help
                      keep it that way by packing out whatever you bring
                      in.
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
                          "Confirm road conditions before setting out",
                          "Start early to beat the midday rush",
                          "Carry cash and a packed lunch",
                          "Pack a light jacket even in summer",
                          "Negotiate pony and cab fares upfront",
                          "Carry your trash back out with you",
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
                          "Expect hotel or restaurant infrastructure on-site",
                          "Rely on ATMs or card payments at the meadow",
                          "Attempt the drive after dark",
                          "Combine Doodhpathri and Yusmarg in a single day",
                          "Skip checking road status in shoulder season",
                          "Leave litter behind on the meadow",
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
                    {[
                      {
                        q: "Is Doodhpathri a day trip from Srinagar?",
                        a: "Yes. Doodhpathri is about 42 km from Srinagar and takes roughly 1.5–2 hours to reach by road via Budgam. Most visitors do it as a full-day round trip, leaving Srinagar in the morning and returning by early evening, since accommodation directly in the meadow is very limited.",
                      },
                      {
                        q: "What is the meaning of Doodhpathri?",
                        a: 'Doodhpathri translates to "Valley of Milk." The name comes from the Shaliganga stream that runs through the meadow — its water froths and foams white as it tumbles over stones, giving it a milky appearance, especially in the stretches near the main meadow.',
                      },
                      {
                        q: "How far is Doodhpathri from Srinagar?",
                        a: "Doodhpathri is approximately 42 km from Srinagar, reached via Budgam town on a mostly paved but narrowing mountain road. The drive takes about 1.5 to 2 hours one way, depending on traffic through Budgam and road conditions closer to the meadow.",
                      },
                      {
                        q: "Is Doodhpathri better than Gulmarg?",
                        a: "They serve different purposes. Gulmarg has the gondola, skiing, and dramatic high-altitude views, but draws heavy crowds and higher prices. Doodhpathri is a quieter, gentler meadow experience — better for a peaceful picnic day or photography, without lifts, skiing, or the same infrastructure.",
                      },
                      {
                        q: "What is the best time to visit Doodhpathri?",
                        a: "May to September is the best window, when the meadow is green, wildflowers are in bloom, and the access road is fully open. June and July tend to be the greenest months. The meadow is snowbound and largely inaccessible from December through April.",
                      },
                      {
                        q: "Can Doodhpathri and Yusmarg be visited together?",
                        a: "Not comfortably in one day — they lie in different directions from Srinagar and each deserves a half to full day on its own. Most travellers pick one as a day trip and, if time allows, visit the other on a separate day of their Kashmir itinerary.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {item.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Doodhpathri",
                  "Jammu and Kashmir",
                  "Kashmir",
                  "Kashmir Meadows",
                  "Budgam",
                  "Off-beat Kashmir",
                  "Srinagar Day Trips",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Doodhpathri"
              />

              <RelatedPostsGrid currentSlug="doodhpathri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="doodhpathri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
