// src/app/blog/kashmere-gate-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kashmere Gate Travel Guide: History & ISBT Hub",
  description:
    "Kashmere Gate travel guide — Shahjahanabad's northern gate, an 1857 Revolt battleground, St. James' Church, Nicholson Cemetery, and Delhi's biggest ISBT transit hub, with a heritage-walk plan.",
  keywords:
    "Kashmere Gate Delhi, Kashmere Gate ISBT, Kashmere Gate history, Kashmere Gate metro, St. James Church Delhi, Nicholson Cemetery Delhi, 1857 Revolt Delhi, Siege of Delhi, Shahjahanabad gates, Old Delhi heritage walk",
  openGraph: {
    title: "Kashmere Gate Travel Guide: History & ISBT Hub",
    description:
      "Shahjahanabad's northern gate, an 1857 Revolt battleground, and today Delhi's biggest transit interchange — the complete Kashmere Gate guide.",
    url: "https://club.kudozz.in/blog/kashmere-gate-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Red sandstone fortified gate architecture at golden hour, evoking the historic walled-city gates of Old Delhi such as Kashmere Gate",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashmere Gate Travel Guide: History & ISBT Hub",
    description:
      "Shahjahanabad's northern gate, an 1857 Revolt battleground, and Delhi's biggest transit interchange — the complete Kashmere Gate guide.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kashmere-gate-delhi-travel-guide",
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
          headline: "Kashmere Gate Travel Guide: History & ISBT Hub",
          description:
            "Kashmere Gate travel guide — Shahjahanabad's northern gate, an 1857 Revolt battleground, St. James' Church, Nicholson Cemetery, and Delhi's biggest ISBT transit hub, with a heritage-walk plan.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
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
            "@id": "https://club.kudozz.in/blog/kashmere-gate-delhi-travel-guide",
          },
          keywords:
            "Kashmere Gate Delhi, Kashmere Gate ISBT, Kashmere Gate history, St. James Church Delhi, Nicholson Cemetery, 1857 Revolt Delhi",
          about: {
            "@type": "Place",
            name: "Kashmere Gate",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressRegion: "Delhi",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Kashmere Gate",
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
    q: "What is Kashmere Gate famous for?",
    a: "Kashmere Gate is famous for two very different reasons. Historically, it's the northernmost surviving gate of Shah Jahan's walled city of Shahjahanabad, and the site of some of the fiercest fighting during the 1857 Revolt (the Siege of Delhi), when British and Company forces breached the gate to retake the city. Today, most Delhiites know it primarily as a massive transit hub — home to the Kashmere Gate ISBT (Inter-State Bus Terminal) and a three-line Delhi Metro interchange (Red, Yellow, and Violet lines).",
  },
  {
    q: "Is Kashmere Gate ISBT safe?",
    a: "Kashmere Gate ISBT is a heavily used, well-policed transit hub and is generally safe during daytime and evening hours when it's busiest. Like any large bus terminal, it gets congested, chaotic, and less comfortable late at night, when fewer services run and the area around it quiets down. Keep valuables secure, stick to well-lit, populated areas, use official pre-paid auto/taxi counters rather than touts, and avoid wandering into surrounding lanes alone after midnight.",
  },
  {
    q: "What is the history of Kashmere Gate?",
    a: "Kashmere Gate was one of the original gates built into the walls of Shahjahanabad, the fortified city founded by Mughal emperor Shah Jahan in the 1640s, and took its name from facing the road that led north toward Kashmir. The gate was rebuilt in its present form around 1835. During the 1857 Revolt, it became one of Delhi's key battlegrounds — British and Company troops blew open the gate with explosives on 14 September 1857 in a costly assault that was central to recapturing the city from rebel forces.",
  },
  {
    q: "How do I get to Kashmere Gate ISBT?",
    a: "Kashmere Gate is one of Delhi's best-connected points — it's a Delhi Metro interchange station serving the Red, Yellow, and Violet lines, so you can reach it directly from almost anywhere on the network. It's also a major auto-rickshaw and taxi destination from across Old and Central Delhi. If you're arriving by interstate bus, you'll most likely land here directly, since Kashmere Gate ISBT is Delhi's largest bus terminal for routes heading north and west.",
  },
  {
    q: "Can I still see the original Kashmere Gate structure?",
    a: "Yes. The gate itself still stands as a Archaeological Survey of India-protected monument, a squat, twin-arched sandstone-and-plaster structure with visible battle damage from 1857 still noticeable up close, sitting on a traffic island near the ISBT complex. It's a much smaller, quieter site than Delhi's grander monuments, but worth a short stop if you're already passing through.",
  },
  {
    q: "What other 1857 Revolt sites are near Kashmere Gate?",
    a: "Within easy walking distance are St. James' Church, Delhi's oldest surviving church, which carries bullet damage from the uprising and has a cemetery with graves connected to 1857; Nicholson Cemetery, the resting place of British officer John Nicholson, who died of wounds sustained during the assault on the city; and the general Old Delhi Railway Station area, close to where much of the fighting and the eventual British advance into the city took place.",
  },
  {
    q: "How much time should I set aside for a Kashmere Gate heritage walk?",
    a: "A focused walk covering the gate itself, St. James' Church, and Nicholson Cemetery comfortably takes 2 to 3 hours at an unhurried pace, including time to read plaques and sit with the cemetery grounds. It pairs naturally with a half-day extension into Old Delhi's Chandni Chowk, which begins just a short walk south.",
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
  { id: "introduction", title: "Kashmere Gate: Gate, Battleground, Hub", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kashmere Gate", level: 2 },
  { id: "the-gate", title: "The Historic Gate Structure", level: 2 },
  { id: "revolt-sites", title: "1857 Revolt Sites Nearby", level: 2 },
  { id: "isbt-hub", title: "The ISBT: A Practical Travel Hub", level: 2 },
  { id: "heritage-walk", title: "A Suggested Heritage Walk", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KashmereGateGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Red sandstone fortified gate architecture at golden hour, evoking the historic walled-city gates of Old Delhi such as Kashmere Gate"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "Kashmere Gate", href: null },
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
                "Kashmere Gate",
                "Delhi",
                "1857 Revolt",
                "Old Delhi",
                "Heritage Walk",
                "ISBT",
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
              Kashmere Gate Travel Guide: History, 1857 Sites & the ISBT Hub
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Shahjahanabad's northern gate, a bloody 1857 Revolt battleground,
              and today one of Delhi's busiest transit interchanges — a
              practical guide to a place most travellers pass through without
              knowing what stands right beside them.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Kashmere Gate, Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,500 words",
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
                  <h2>Kashmere Gate: Gate, Battleground, Hub</h2>
                  <p>
                    <strong>Kashmere Gate</strong> is one of the more unusual
                    landmarks in{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link> — a
                    site with three distinct identities stacked on top of one
                    another. It is, first, the northernmost surviving gate of
                    Shah Jahan's 17th-century walled city of Shahjahanabad,
                    named simply because it faced the road leading north
                    toward Kashmir. It is, second, one of the most fiercely
                    contested battlegrounds of the <strong>1857 Revolt</strong>{" "}
                    (also known as the War of Independence or the Indian
                    Mutiny), where the fate of the city itself was decided in
                    a single violent assault. And it is, third — to most
                    Delhiites today — simply a name on a Metro map: a sprawling
                    interchange station and the location of the city's biggest
                    interstate bus terminal.
                  </p>
                  <p>
                    That layering is exactly what makes Kashmere Gate worth a
                    deliberate stop rather than just a transit-through. Most
                    travellers pass through this junction on their way to or
                    from a bus, never realising that a genuine Mughal-era
                    monument, a bullet-scarred colonial church, and a
                    war-cemetery all sit within a few minutes' walk of the
                    platform they just got off.
                  </p>
                  <p>
                    This guide covers both sides of Kashmere Gate — the
                    history worth slowing down for, and the practical realities
                    of using it as the transit hub it's become — so you can
                    either fold a short heritage walk into a longer Delhi trip,
                    or simply navigate the ISBT with more confidence if that's
                    all your itinerary allows for.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Kashmere Gate at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North of Old Delhi's walled city",
                        },
                        {
                          icon: "🏗️",
                          label: "Current Structure",
                          value: "Rebuilt c. 1835",
                        },
                        {
                          icon: "⚔️",
                          label: "Known For",
                          value: "1857 Revolt / Siege of Delhi",
                        },
                        {
                          icon: "🚇",
                          label: "Metro Lines",
                          value: "Red, Yellow, Violet",
                        },
                        {
                          icon: "🚌",
                          label: "Also Home To",
                          value: "Kashmere Gate ISBT",
                        },
                        {
                          icon: "⛪",
                          label: "Nearby Landmark",
                          value: "St. James' Church (Delhi's oldest)",
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
                  <h2>Best Time to Visit Kashmere Gate</h2>
                  <p>
                    Since the historic sites here are outdoors and mostly
                    unshaded, the same seasonal logic applies as the rest of
                    Old Delhi — cooler months make for a far more comfortable
                    walk between the gate, the church, and the cemetery.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry mornings make it comfortable to walk the full loop from the gate to St. James' Church and Nicholson Cemetery without rushing.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — visit early or skip",
                        text: "Little shade around the gate itself; if visiting in this window, go at first light and keep the walk short.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — carry an umbrella",
                        text: "Heavy showers can flood the busy roads around the ISBT and slow bus departures — check services before travelling.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold, sometimes smoggy mornings",
                        text: "Pleasant for walking by mid-morning once the fog clears; carry a mask on the worst air-quality days.",
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
                    <strong>Our pick:</strong> a weekday morning between
                    October and March, ideally before 10 AM — the gate area
                    and church grounds are quiet, the light is good for
                    photos, and you'll beat both the heat and the ISBT's
                    peak departure crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kashmere Gate</h2>
                  <p>
                    Kashmere Gate is, without much competition, one of the
                    single best-connected points anywhere in Delhi — which is
                    precisely why it evolved into a transit hub in the first
                    place.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> Kashmere Gate is a
                      three-line interchange station serving the{" "}
                      <strong>Red Line</strong>, <strong>Yellow Line</strong>,
                      and <strong>Violet Line</strong> — you can reach it
                      directly from almost anywhere on Delhi's Metro network
                      without more than one change.
                    </li>
                    <li>
                      <strong>By Bus:</strong> If you're arriving from
                      outside Delhi by interstate bus, you'll most likely
                      arrive directly here — Kashmere Gate ISBT is the city's
                      largest bus terminal, particularly for routes heading
                      north toward Punjab, Himachal Pradesh, and Jammu &
                      Kashmir, and west toward Rajasthan and Haryana.
                    </li>
                    <li>
                      <strong>By Auto-rickshaw or Cab:</strong> Easily
                      reachable from anywhere in Old or Central Delhi;
                      app-based cabs and autos both serve the area, though
                      traffic around the terminal can be dense at peak hours.
                    </li>
                    <li>
                      <strong>On Foot:</strong> It's a short, walkable
                      distance north from{" "}
                      <Link href="/blog/chandni-chowk-delhi-travel-guide">
                        Chandni Chowk
                      </Link>
                      , making it easy to combine with an Old Delhi walking
                      day.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're just passing through
                    en route to a bus, the Metro interchange is genuinely
                    faster than a road transfer during peak hours — factor in
                    extra walking time inside the station, though, since it's
                    a large, multi-level complex.
                  </div>
                </section>

                {/* ── The Gate ──────────────────────────────────────────── */}
                <section id="the-gate">
                  <h2>The Historic Gate Structure</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic sandstone fortress gate architecture reminiscent of Old Delhi's Mughal-era city gates, illustrative of Kashmere Gate's style rather than an on-site photograph"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Kashmere Gate was one of the original gates built into
                    the walls of <strong>Shahjahanabad</strong>, the fortified
                    city Mughal emperor Shah Jahan founded in the 1640s as his
                    new capital — the same walled city whose lanes still form
                    the core of today's Old Delhi. As the northernmost of the
                    city's gates, it took its name simply and literally from
                    facing the road that led toward Kashmir.
                  </p>
                  <p>
                    The gate standing today isn't the original Mughal-era
                    structure — it was <strong>rebuilt in its present form
                    around 1835</strong>, a squat, twin-arched sandstone and
                    plaster gateway, considerably plainer than the grander
                    ceremonial gates of the Red Fort. What makes it worth a
                    stop isn't architectural grandeur; it's what happened at
                    this gate barely two decades after it was rebuilt.
                  </p>
                  <p>
                    The gate now stands as a protected monument on a traffic
                    island amid the roads and flyovers feeding the ISBT
                    complex — a strange, almost incongruous sight: a
                    nearly two-century-old fortification sitting quietly
                    inside a knot of modern bus lanes and Metro pillars. Look
                    closely at the stonework and you can still make out
                    scarring consistent with the fighting of 1857, though
                    time and restoration have softened much of it.
                  </p>
                </section>

                {/* ── 1857 Revolt Sites ─────────────────────────────────── */}
                <section id="revolt-sites">
                  <h2>1857 Revolt Sites Near Kashmere Gate</h2>
                  <p>
                    Kashmere Gate's real historical weight comes from{" "}
                    <strong>1857</strong>. When the Revolt broke out and Delhi
                    fell into rebel hands, the walled city became the central
                    prize of the conflict, and Kashmere Gate — the gate
                    closest to the British-held Ridge to the north — became
                    the focal point of the assault to retake it.
                  </p>
                  <p>
                    On <strong>14 September 1857</strong>, British and Company
                    forces blew open the gate with explosive charges in one of
                    the bloodiest actions of the entire siege, a move that was
                    central to the eventual recapture of the city after months
                    of fighting. The area around the gate carries the memory
                    of that day more heavily than almost anywhere else in
                    Delhi.
                  </p>
                  <h3>St. James' Church</h3>
                  <p>
                    A short walk from the gate stands <strong>St. James'
                    Church</strong>, widely regarded as <strong>Delhi's
                    oldest surviving church</strong>. It was built in the
                    1830s by <strong>Colonel James Skinner</strong>, the
                    famous Anglo-Indian cavalry officer and founder of
                    Skinner's Horse, reportedly as a gesture of gratitude
                    after surviving a battlefield wound, and was consecrated
                    in <strong>1836</strong>. The church's cream-domed
                    exterior and modest cruciform layout still show
                    <strong> bullet-scarred walls</strong> from the 1857
                    fighting, and its surrounding cemetery holds graves
                    connected to the uprising, including Skinner's own.
                  </p>
                  <h3>Old Delhi Railway Station Area</h3>
                  <p>
                    Just beyond Kashmere Gate lies the general area of the{" "}
                    <strong>Old Delhi Railway Station</strong>, close to
                    where much of the fighting and the eventual British
                    advance into the city unfolded during the siege. The
                    station itself is a much later addition, but the ground
                    it sits on is part of the same historically charged
                    stretch between the Ridge and the walled city.
                  </p>
                  <h3>Nicholson Cemetery</h3>
                  <p>
                    A little further north sits <strong>Nicholson
                    Cemetery</strong>, named for British officer{" "}
                    <strong>John Nicholson</strong>, who led the final assault
                    that breached Kashmere Gate and died shortly after from
                    wounds sustained during that action. The cemetery, quiet
                    and shaded, holds his grave along with those of numerous
                    other soldiers and civilians from the siege — a
                    genuinely evocative, under-visited spot for anyone
                    interested in this period of the city's history.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> These sites are modest and
                    unpolished compared to Delhi's headline monuments — there's
                    no ticketed entry experience or elaborate signage at most
                    of them. Read up beforehand so you know what you're
                    looking at when you arrive.
                  </div>
                </section>

                {/* ── ISBT Hub ──────────────────────────────────────────── */}
                <section id="isbt-hub">
                  <h2>The ISBT: A Practical Travel Hub</h2>
                  <p>
                    For most people passing through today, Kashmere Gate
                    means one thing: the <strong>Inter-State Bus
                    Terminal (ISBT)</strong>, one of Delhi's largest and
                    busiest bus stations. It's the departure and arrival point
                    for a huge share of interstate bus traffic heading north
                    and west out of the capital.
                  </p>
                  <ul>
                    <li>
                      <strong>Why travellers pass through here:</strong> ISBT
                      Kashmere Gate handles routes toward Punjab, Haryana,
                      Himachal Pradesh, Uttarakhand, and Jammu & Kashmir,
                      operated by both state transport corporations and
                      private operators — if your Delhi trip connects onward
                      to a hill station or a northern state, there's a good
                      chance you'll pass through this terminal.
                    </li>
                    <li>
                      <strong>Connections onward:</strong> The adjoining
                      Metro station makes it easy to connect straight from a
                      long-distance bus onto the city network, without
                      needing a separate cab ride into central Delhi first.
                    </li>
                    <li>
                      <strong>Facilities:</strong> Expect the usual
                      big-terminal mix — ticket counters, waiting areas, food
                      stalls, and pre-paid auto/taxi counters — functional
                      rather than polished, and genuinely crowded at peak
                      travel times and around festivals.
                    </li>
                    <li>
                      <strong>Booking ahead:</strong> Popular routes,
                      especially toward hill destinations in peak season, are
                      worth booking online in advance rather than relying on
                      walk-up tickets at the counter.
                    </li>
                  </ul>
                  <p>
                    It's a fitting, if slightly ironic, modern identity for
                    the site — a gate once fought over to control who could
                    move in and out of the city is now, quite literally, the
                    place where hundreds of thousands of people do exactly
                    that every single day.
                  </p>
                </section>

                {/* ── Heritage Walk ─────────────────────────────────────── */}
                <section id="heritage-walk">
                  <h2>A Suggested Heritage Walk</h2>
                  <p>
                    If you have even half a morning free, it's genuinely
                    worth turning Kashmere Gate from a pass-through into a
                    short, focused walk covering its historic sites.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Stop 1",
                        title: "The Gate Itself",
                        color: "bg-amber-700",
                        activities: [
                          "Start at the c. 1835 gate structure on the traffic island",
                          "Look for surviving scarring from the 1857 fighting",
                          "A brief stop — 10–15 minutes is enough",
                        ],
                      },
                      {
                        day: "Stop 2",
                        title: "St. James' Church",
                        color: "bg-sky-600",
                        activities: [
                          "Short walk to Delhi's oldest surviving church",
                          "Note the bullet-scarred walls and cream dome",
                          "Walk the cemetery grounds, including Skinner's grave",
                        ],
                      },
                      {
                        day: "Stop 3",
                        title: "Nicholson Cemetery",
                        color: "bg-stone-600",
                        activities: [
                          "Walk further north to the quiet cemetery grounds",
                          "Find John Nicholson's grave and read the markers",
                          "A reflective, largely uncrowded stop",
                        ],
                      },
                      {
                        day: "Optional",
                        title: "Extend Toward Old Delhi",
                        color: "bg-forest-600",
                        activities: [
                          "Walk south toward Chandni Chowk for a food trail",
                          "Or head onward toward Old Delhi's other lanes",
                          "Return to Kashmere Gate Metro or ISBT to move on",
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
                    * The whole walk covers roughly 2–3 km and comfortably
                    fits into 2–3 hours, including time to sit with the
                    cemetery grounds. It also pairs naturally with visits to{" "}
                    <Link href="/blog/old-delhi-travel-guide">Old Delhi</Link>{" "}
                    or a stop at{" "}
                    <Link href="/blog/majnu-ka-tilla-delhi-travel-guide">
                      Majnu Ka Tilla
                    </Link>{" "}
                    on the same day.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Kashmere Gate's historic sites are inexpensive to visit —
                    the real budgeting question here is usually about the bus
                    or Metro fares you're using to pass through the hub.
                  </p>
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
                          ["Gate & church visit", "Free", "Free", "Free"],
                          [
                            "Local transport to/from",
                            "₹30 (Metro)",
                            "₹150 (auto)",
                            "₹300+ (cab)",
                          ],
                          [
                            "Interstate bus (avg. route)",
                            "₹300–₹600",
                            "₹700–₹1,200 (AC)",
                            "₹1,500+ (Volvo/sleeper)",
                          ],
                          ["Food at ISBT/nearby", "₹100", "₹300", "₹600"],
                          [
                            "Half-day total (excl. bus fare)",
                            "₹130",
                            "₹450",
                            "₹900",
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
                    * Interstate bus fares vary widely by destination and
                    operator — check current rates on the relevant state
                    transport corporation's site or a booking app before
                    travelling.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Kashmere Gate</h2>
                  <ul>
                    <li>
                      <strong>Remember this is a working transit hub:</strong>{" "}
                      Traffic, noise, and crowding around the ISBT are
                      constant realities — build in extra time if you're
                      catching a bus, and don't expect a quiet monument
                      experience right at the gate itself.
                    </li>
                    <li>
                      <strong>Visit the heritage sites in daylight:</strong>{" "}
                      St. James' Church and Nicholson Cemetery are best
                      visited in the morning or early afternoon, both for
                      light and because they're quieter and safer to explore
                      unhurried during the day.
                    </li>
                    <li>
                      <strong>Be extra alert late at night:</strong> The area
                      around the ISBT is busy but noticeably less comfortable
                      after midnight, when fewer buses run — avoid wandering
                      into surrounding lanes alone, and use pre-paid auto or
                      cab counters rather than touts.
                    </li>
                    <li>
                      <strong>Book long-distance buses in advance:</strong>{" "}
                      Especially for hill destinations in peak season —
                      walk-up availability isn't guaranteed on popular routes.
                    </li>
                    <li>
                      <strong>Keep your bag secure in the terminal:</strong>{" "}
                      Large, crowded transit spaces are a common spot for
                      pickpocketing — keep valuables zipped and close.
                    </li>
                    <li>
                      <strong>Combine with Old Delhi:</strong> Since it's
                      such a short walk to{" "}
                      <Link href="/blog/chandni-chowk-delhi-travel-guide">
                        Chandni Chowk
                      </Link>
                      , it's worth folding Kashmere Gate into a broader Old
                      Delhi day rather than visiting it in isolation.
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
                          "Visit the gate, church, and cemetery in daylight",
                          "Read up on 1857 history before you arrive",
                          "Book interstate bus tickets online in advance",
                          "Use the Metro interchange to skip road traffic",
                          "Combine the walk with a Chandni Chowk visit",
                          "Use pre-paid auto/taxi counters at the ISBT",
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
                          "Expect a polished, ticketed monument experience",
                          "Wander alone into side lanes late at night",
                          "Rely on walk-up tickets for peak-season buses",
                          "Leave bags unattended in the crowded terminal",
                          "Rush the church and cemetery — they reward slow visits",
                          "Ignore basic bag security in the busy ISBT complex",
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
                    <strong>🗺️ Extend the trip:</strong> Many travellers pair
                    Kashmere Gate with a visit to{" "}
                    <Link href="/blog/majnu-ka-tilla-delhi-travel-guide">
                      Majnu Ka Tilla
                    </Link>{" "}
                    further north, or head south into{" "}
                    <Link href="/blog/old-delhi-travel-guide">Old Delhi</Link>{" "}
                    and{" "}
                    <Link href="/blog/chandni-chowk-delhi-travel-guide">
                      Chandni Chowk
                    </Link>{" "}
                    for a fuller day of walled-city history and food.
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
                  "Kashmere Gate",
                  "Delhi",
                  "1857 Revolt",
                  "Old Delhi",
                  "St. James Church",
                  "Nicholson Cemetery",
                  "Heritage Walk",
                  "ISBT",
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

              <RelatedPostsGrid currentSlug="kashmere-gate-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kashmere-gate-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
