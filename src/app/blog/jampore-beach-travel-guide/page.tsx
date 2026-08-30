// src/app/blog/jampore-beach-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jampore Beach Daman: Camel Rides, Timings & Tips",
  description:
    "Jampore Beach travel guide — the long, quiet, casuarina-lined beach south of Moti Daman. Camel and pony rides, sunset walks, timings, how to reach, and honest swimming advice.",
  keywords:
    "Jampore Beach, Jampore Beach Daman, Jampore Beach camel ride, Jampore Beach timings, Moti Daman beaches, Daman beaches, Jampore vs Devka Beach, Daman weekend trip, casuarina beach Daman",
  openGraph: {
    title: "Jampore Beach Daman: Camel Rides, Timings & Tips",
    description:
      "A long, casuarina-lined stretch of sand south of Moti Daman — camel rides, quiet sunset walks, and honest guidance on swimming conditions.",
    url: "https://club.kudozz.in/blog/jampore-beach-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "A long, quiet stretch of sandy coastline with palm trees, illustrative of the casuarina-lined shore at Jampore Beach, Daman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jampore Beach Daman: Camel Rides, Timings & Tips",
    description:
      "A long, casuarina-lined stretch of sand south of Moti Daman — camel rides, quiet sunset walks, and honest guidance on swimming conditions.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jampore-beach-travel-guide",
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
          headline: "Jampore Beach Daman: Camel Rides, Timings & Tips",
          description:
            "Jampore Beach travel guide — the long, quiet, casuarina-lined beach south of Moti Daman. Camel and pony rides, sunset walks, timings, how to reach, and honest swimming advice.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
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
            "@id": "https://club.kudozz.in/blog/jampore-beach-travel-guide",
          },
          keywords:
            "Jampore Beach, Jampore Beach Daman, Jampore Beach camel ride, Jampore Beach timings, Moti Daman beaches, Daman beaches",
          about: {
            "@type": "Place",
            name: "Jampore Beach",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Daman",
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
                name: "Jampore Beach",
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
    q: "Is Jampore Beach good for swimming?",
    a: "Not really, and it's worth setting expectations honestly. Like most beaches around Daman, Jampore has patches of muddy, greyish sand and a shoreline that isn't consistently clean or gently sloped enough for comfortable swimming. Waves are mild, but this is a walk-and-relax beach rather than a swim destination — go for the camel rides, the sunset, and the open space rather than expecting a dip.",
  },
  {
    q: "How far is Jampore Beach from Daman?",
    a: "Jampore Beach is around 4 to 5 km south of Moti Daman, roughly a 10 to 15 minute auto-rickshaw or taxi ride from the Moti Daman Fort area, and about 8 to 10 km (20 to 25 minutes) from Nani Daman and the Vapi side of town.",
  },
  {
    q: "Is Jampore Beach better than Devka Beach?",
    a: "It depends what you're after. Devka Beach is more developed, with a promenade, garden, and more food stalls, which makes it busier and more convenient. Jampore is longer, quieter, and lined with casuarina trees, which makes it better for a peaceful walk, photography, or an unhurried camel ride away from the crowds. Neither is a strong swimming beach.",
  },
  {
    q: "What is the best time to visit Jampore Beach?",
    a: "Late afternoon into sunset, roughly 4:30 PM to 7 PM, is the best window — the heat has eased, the camel and pony operators are out, and the light over the Arabian Sea is at its best. October to March also brings the most comfortable weather for a visit any time of day.",
  },
  {
    q: "Are camel and horse rides available at Jampore Beach all year?",
    a: "Camel and pony rides run through most of the year but are most reliably available in the cooler months (October to March) and on weekend evenings, when footfall is higher. During peak monsoon, rough seas and wet sand can pause rides for safety, so treat availability as weather-dependent rather than guaranteed.",
  },
  {
    q: "Is Jampore Beach crowded?",
    a: "No — that's its main appeal. It sees noticeably fewer visitors than Devka Beach, especially on weekdays, making it one of the quieter beach options in Daman for a relaxed evening out.",
  },
  {
    q: "Are there resorts right on Jampore Beach?",
    a: "Yes, a handful of resorts and hotels sit close to or a short drive from Jampore, generally quieter and more nature-facing than the hotel cluster around Devka and Nani Daman. Most visitors, however, stay in Moti or Nani Daman and drive out to Jampore for a few hours.",
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
  { id: "introduction", title: "About Jampore Beach", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Nearby Resorts & Stay Options", level: 2 },
  { id: "food-guide", title: "Food Shacks & What to Eat", level: 2 },
  { id: "evening-plan", title: "A Suggested Evening Visit", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JamporeBeachGuidePage() {
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
              src="/images/destinations/goa/beach.jpg"
              alt="A long, quiet stretch of sandy coastline with palm trees, illustrative of the casuarina-lined shore at Jampore Beach, Daman"
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
                { label: "Jampore Beach", href: null },
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
                "Jampore Beach",
                "Daman",
                "Beaches",
                "Camel Rides",
                "Sunset Spot",
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
              Jampore Beach, Daman: Camel Rides, Timings & Honest Travel Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A long, casuarina-lined stretch of sand a few kilometres south
              of Moti Daman — quieter than Devka Beach, known for camel and
              pony rides, and best enjoyed as a sunset walk rather than a
              swim.
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
                  text: "Daman, Dadra & Nagar Haveli and Daman & Diu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~1,900 words",
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
                  <h2>About Jampore Beach</h2>
                  <p>
                    <strong>Jampore Beach</strong> lies a few kilometres
                    south of Moti Daman, in the Daman half of the Union
                    Territory of{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu
                    </Link>
                    . It's a long, wide, open stretch of sand backed by a
                    line of casuarina trees, and it's generally quieter and
                    less built-up than{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>
                    , Daman's more developed and better-known beach further
                    north.
                  </p>
                  <p>
                    What draws people to Jampore isn't dramatic scenery — it's
                    the space and the pace. The beach runs on for a good
                    distance without much interruption, the casuarina cover
                    gives a shaded spot to sit even in the afternoon, and it's
                    one of the more reliable places nearby to arrange a camel
                    or pony ride along the shore. It's also a well-liked
                    sunset spot, since the open coastline and lack of crowds
                    make for an unhurried evening compared to the busier
                    beaches closer to town.
                  </p>
                  <p>
                    This guide covers what Jampore is actually good for,
                    honest swimming advice, how to get there from{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman
                    </Link>
                    , where to eat and stay nearby, and a suggested evening
                    plan that makes the most of a short visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Jampore Beach at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "~4–5 km south of Moti Daman",
                        },
                        {
                          icon: "🐫",
                          label: "Known For",
                          value: "Camel & pony rides, sunset walks",
                        },
                        {
                          icon: "🌊",
                          label: "Swimming",
                          value: "Not recommended — muddy patches",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar, evenings year-round",
                        },
                        {
                          icon: "🕓",
                          label: "Best Hours",
                          value: "4:30 PM – 7 PM",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Free (rides & shacks extra)",
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
                  <h2>Best Time to Visit Jampore Beach</h2>
                  <p>
                    Coastal Gujarat is hot and humid for most of the year, so
                    timing matters both by season and by time of day.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best season — our pick",
                        text: "Cooler, drier weather (18–30°C) makes for comfortable walks and camel rides any time of day, not just at sunset.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot afternoons",
                        text: "Daytime heat climbs quickly, with little shade beyond the casuarina line — stick to early morning or evening visits.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — rough seas",
                        text: "Heavy rain and choppy water make the beach unpleasant and camel rides unreliable; the casuarina grove still offers a quiet, moody walk between showers.",
                      },
                      {
                        season: "Every day",
                        emoji: "🌇",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best time of day",
                        text: "Late afternoon into sunset (roughly 4:30–7 PM) is consistently the best window, when the heat drops and ride operators and shacks are open.",
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
                    <strong>Our pick:</strong> A weekday evening between
                    November and February — mild weather, an easy sunset, and
                    the fewest crowds you'll find at any beach in Daman.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jampore Beach</h2>
                  <p>
                    Jampore is close enough to{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman
                    </Link>{" "}
                    that it works well as a short add-on trip rather than a
                    destination requiring its own logistics.
                  </p>
                  <ul>
                    <li>
                      <strong>From Moti Daman:</strong> Roughly 4–5 km, about
                      10–15 minutes by auto-rickshaw or taxi — the most common
                      way visitors reach the beach after seeing Moti Daman
                      Fort or Bom Jesus Church.
                    </li>
                    <li>
                      <strong>From Nani Daman:</strong> About 8–10 km, roughly
                      20–25 minutes by road, crossing the Daman Ganga river
                      into Moti Daman first.
                    </li>
                    <li>
                      <strong>From Vapi Railway Station:</strong> Around 15
                      km, roughly 30–40 minutes by taxi, depending on traffic
                      through Daman town.
                    </li>
                    <li>
                      <strong>Self-drive:</strong> The road down to Jampore is
                      well-paved and easy to navigate; parking near the beach
                      is informal but generally available.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Autos in Daman rarely run on
                    meters — agree on a fare before setting off, including the
                    return trip if you want the same driver to wait.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do at Jampore Beach</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="A quiet coastal shoreline at golden hour, illustrative of sunset conditions similar to those at Jampore Beach"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Camel and pony rides:</strong> Jampore's
                      signature activity. Operators line the beach with
                      camels and horses for short rides along the shore,
                      usually priced per ride rather than per hour — good fun
                      for families and a genuinely distinctive experience for
                      a beach this close to a city.
                    </li>
                    <li>
                      <strong>Sunset walks:</strong> The beach's length and
                      the casuarina backdrop make it one of the better places
                      in Daman for an unhurried evening walk, especially
                      compared to the busier promenade at Devka.
                    </li>
                    <li>
                      <strong>Sunset photography:</strong> Wide, uncluttered
                      views over the Arabian Sea, with camels and fishing
                      boats often in frame — a favourite for casual and
                      serious photographers alike.
                    </li>
                    <li>
                      <strong>Beach shacks and snacking:</strong> A cluster of
                      shacks near the main access point serve snacks, chai,
                      and light meals — a relaxed way to spend an hour without
                      needing to go anywhere else.
                    </li>
                    <li>
                      <strong>Gentle walks under the casuarina trees:</strong>{" "}
                      The tree line behind the sand offers real shade, useful
                      if you're visiting outside the coolest hours.
                    </li>
                  </ul>

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🌊 Honest note on swimming:</strong> We'd rather
                    set the right expectations than oversell this. Like most
                    beaches around Daman, Jampore has stretches of muddy or
                    rocky sand and water that isn't consistently clean or calm
                    enough for comfortable swimming. Wading in ankle-deep to
                    cool off is fine, but this isn't a beach to plan a swim
                    around — come for the rides, the walk, and the sunset
                    instead.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Nearby Resorts & Stay Options</h2>
                  <p>
                    Most visitors base themselves in Moti or Nani Daman and
                    drive out to Jampore for a few hours, though a few
                    properties sit closer to the beach itself for those who'd
                    rather stay near the quieter end of town.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Guesthouses in Moti Daman",
                          "Budget lodges, Nani Daman",
                          "Simple stays near the Jampore road",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Business hotels, Daman town",
                          "Beach-facing hotels near Devka",
                          "Resorts along the Jampore–Moti Daman road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌴",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Radisson Blu Resort (Daman)",
                          "Premium resort properties near Jampore",
                          "Sea-facing suites, Devka–Jampore stretch",
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
                    If a quiet, resort-style stay matters more to you than
                    being in the middle of town, look at properties along the
                    road toward Jampore rather than in central Nani Daman —
                    you'll trade a bit of convenience for a lot of quiet.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food Shacks & What to Eat</h2>
                  <p>
                    Jampore's food scene is informal — a set of beach shacks
                    rather than full restaurants — which suits the beach's
                    relaxed character.
                  </p>
                  <ul>
                    <li>
                      <strong>Beach shacks near the entrance:</strong> Serve
                      basic snacks, chai, cold drinks, and light fried food —
                      convenient for a quick bite between a camel ride and a
                      sunset walk.
                    </li>
                    <li>
                      <strong>Bhel, chaat and local snacks:</strong> Common
                      offerings from vendors along the sand, especially in
                      the evening rush.
                    </li>
                    <li>
                      <strong>Seafood in Daman town:</strong> For a proper
                      meal, head back into Moti or Nani Daman, where
                      seafood-focused restaurants offer a far wider menu than
                      anything available beachside.
                    </li>
                    <li>
                      <strong>Carry water:</strong> Options thin out toward
                      the quieter stretches of the beach — carrying a bottle
                      is a good habit if you're planning a longer walk.
                    </li>
                  </ul>
                </section>

                {/* ── Evening Plan ──────────────────────────────────────── */}
                <section id="evening-plan">
                  <h2>A Suggested Evening Visit</h2>
                  <p>
                    Jampore works best as a focused evening trip rather than
                    a full-day plan — here's a simple timeline that covers
                    the highlights without wasting time.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "4:30 PM",
                        title: "Arrive & Settle In",
                        color: "bg-amber-700",
                        activities: [
                          "Drive or auto from Moti Daman (~10–15 min)",
                          "Find a shady spot under the casuarina trees",
                          "Grab a cold drink at a nearby shack",
                        ],
                      },
                      {
                        day: "5:00 PM",
                        title: "Camel or Pony Ride",
                        color: "bg-forest-600",
                        activities: [
                          "Negotiate the ride rate upfront",
                          "Short ride along the open shoreline",
                          "Good light for photos as the sun lowers",
                        ],
                      },
                      {
                        day: "6:00 PM",
                        title: "Sunset Walk",
                        color: "bg-sky-600",
                        activities: [
                          "Walk the length of the beach at low intensity",
                          "Watch the sunset over the Arabian Sea",
                          "Wade in shallow water if you'd like to cool off",
                        ],
                      },
                      {
                        day: "6:45 PM",
                        title: "Snacks & Wind Down",
                        color: "bg-stone-600",
                        activities: [
                          "Chaat or bhel at a beach shack",
                          "Head back toward Moti Daman for dinner",
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
                    * This plan pairs well with a morning at{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman Fort
                    </Link>{" "}
                    or an earlier stop at{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>{" "}
                    for a fuller day in Daman.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown (per person)</h2>
                  <p>
                    A visit to Jampore Beach itself is inexpensive — entry is
                    free, and your main costs are transport and optional
                    rides.
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
                          ["Beach entry", "Free", "Free", "Free"],
                          [
                            "Auto/taxi (round trip)",
                            "₹150",
                            "₹400",
                            "₹800+",
                          ],
                          [
                            "Camel/pony ride",
                            "₹100–₹200",
                            "₹200–₹350",
                            "Private extended ride",
                          ],
                          ["Snacks & drinks", "₹100", "₹300", "₹600+"],
                          [
                            "Evening total",
                            "₹350",
                            "₹1,000",
                            "₹2,200+",
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
                    * Excludes accommodation and travel to Daman itself.
                    Camel and pony ride rates are typically negotiated
                    directly with operators and can vary by season and
                    demand.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Don't plan around swimming:</strong> Muddy
                      patches and inconsistent water quality make this a
                      walk-and-relax beach, not a swim spot — plan
                      accordingly.
                    </li>
                    <li>
                      <strong>Negotiate ride fares upfront:</strong> Camel and
                      pony rides don't have fixed meters — agree on the price
                      and duration before you get on.
                    </li>
                    <li>
                      <strong>Go for sunset, not midday:</strong> The beach
                      has limited natural shade outside the casuarina line,
                      and the light is far better in the evening anyway.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Shacks and ride operators
                      are informal small vendors — don't expect card or UPI
                      acceptance everywhere.
                    </li>
                    <li>
                      <strong>Combine it with Moti Daman:</strong> Pairing
                      Jampore with the fort and church at Moti Daman makes for
                      a fuller, more efficient half-day trip.
                    </li>
                    <li>
                      <strong>Watch your footing near the shoreline:</strong>{" "}
                      Some stretches get slippery and uneven where the sand
                      turns muddy — keep an eye on kids near the water's edge.
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
                          "Visit in the late afternoon for the best light",
                          "Negotiate camel/pony ride rates before starting",
                          "Carry cash for shacks and ride operators",
                          "Pair it with a stop at Moti Daman Fort",
                          "Wear footwear suited to sand and occasional mud",
                          "Carry water if walking the beach's full length",
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
                          "Plan a swim-focused day around Jampore",
                          "Expect fixed pricing on camel or pony rides",
                          "Visit at midday expecting good photo light",
                          "Rely on cards at beach shacks",
                          "Wander far from the entrance after dark",
                          "Skip agreeing on a return auto fare in advance",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Jampore with{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman
                    </Link>
                    's fort and churches, or a stop at{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>{" "}
                    for the promenade and food stalls, to build out a fuller{" "}
                    <Link href="/blog/daman-travel-guide">Daman</Link>{" "}
                    itinerary.
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
                  "Jampore Beach",
                  "Daman",
                  "Daman and Diu",
                  "Moti Daman",
                  "Beaches",
                  "Camel Ride",
                  "Sunset Point",
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

              <RelatedPostsGrid currentSlug="jampore-beach-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jampore-beach-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
