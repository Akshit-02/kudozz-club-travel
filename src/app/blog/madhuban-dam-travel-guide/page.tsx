// src/app/blog/madhuban-dam-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Madhuban Dam Travel Guide: Boating & Picnic Spot",
  description:
    "Complete Madhuban Dam guide near Silvassa — the Damanganga reservoir, dam viewpoint, boating at Dudhni, forest and birdlife, best time to visit, and a half-day plan.",
  keywords:
    "Madhuban Dam, Madhuban Dam Silvassa, Damanganga river dam, Madhuban Dam Dudhni, Madhuban Dam Khanvel, Dadra Nagar Haveli dam, Madhuban Dam reservoir, Silvassa picnic spot, Madhuban Dam boating, Damanganga reservoir Dudhni",
  openGraph: {
    title: "Madhuban Dam Travel Guide: Boating & Picnic Spot",
    description:
      "A dam on the Damanganga river whose reservoir feeds Dudhni's boating scene — the complete guide to Madhuban Dam near Silvassa.",
    url: "https://club.kudozz.in/blog/madhuban-dam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "A large, calm forest-fringed reservoir under an open sky, evoking the scenic backwaters of Madhuban Dam",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhuban Dam Travel Guide: Boating & Picnic Spot",
    description:
      "A dam on the Damanganga river whose reservoir feeds Dudhni's boating scene — the complete guide to Madhuban Dam near Silvassa.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/madhuban-dam-travel-guide",
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
          headline: "Madhuban Dam Travel Guide: Boating & Picnic Spot",
          description:
            "Complete Madhuban Dam guide near Silvassa — the Damanganga reservoir, dam viewpoint, boating at Dudhni, forest and birdlife, best time to visit, and a half-day plan.",
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
            "@id": "https://club.kudozz.in/blog/madhuban-dam-travel-guide",
          },
          keywords:
            "Madhuban Dam, Madhuban Dam Silvassa, Damanganga river dam, Madhuban Dam Dudhni, Madhuban Dam Khanvel",
          about: {
            "@type": "Place",
            name: "Madhuban Dam",
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
                name: "Madhuban Dam",
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
    q: "Is Madhuban Dam worth visiting?",
    a: "Yes, if you enjoy quiet, scenic water bodies rather than a full-blown adventure park. Madhuban Dam itself is a low-key stop — the dam structure, a viewpoint over a genuinely large reservoir, and pleasant forest surroundings — best combined with Dudhni for boating or Khanvel for a fuller day rather than visited alone as a destination in itself.",
  },
  {
    q: "How far is Madhuban Dam from Silvassa?",
    a: "Madhuban Dam is roughly 15–18 km from central Silvassa, a drive of about 30–40 minutes on decent roads. It sits close to Khanvel, and the Dudhni boating point is a further short drive along the same reservoir.",
  },
  {
    q: "Is boating available at Madhuban Dam?",
    a: "Boating operations are concentrated at Dudhni, on the same Damanganga reservoir that Madhuban Dam creates, rather than right at the dam wall itself. Most visitors see the dam and its viewpoint first, then drive on to Dudhni for the actual boat rides.",
  },
  {
    q: "What is the difference between Madhuban Dam and Dudhni?",
    a: "They're two points on the same reservoir. Madhuban Dam is the dam structure itself — where the Damanganga river is impounded — along with its viewpoint and surrounding forest. Dudhni is a specific spot further along the reservoir's backwaters, developed with jetties and boating operators, and is where the region's speedboat and cruise activities actually happen.",
  },
  {
    q: "What is the best time to visit Madhuban Dam?",
    a: "October to February, right after the monsoon, is the best window — the reservoir is at its fullest and most scenic, and daytime temperatures are comfortable for a viewpoint visit. Summer (April–June) can be hot with lower water levels; the monsoon itself brings dramatic water release but also slippery, restricted access near the dam.",
  },
  {
    q: "Can Madhuban Dam be visited as a day trip from Mumbai?",
    a: "Yes, though it's a long day. Silvassa is roughly 3 hours from Mumbai by road, and Madhuban Dam adds another 30–40 minutes from there. Most travellers combine it with an overnight stay in Silvassa and pair it with Dudhni and Khanvel rather than rushing it as a single-day round trip from Mumbai.",
  },
  {
    q: "Is Madhuban Dam safe for families and kids?",
    a: "The viewpoint and picnic areas are generally safe with normal supervision, but the dam and reservoir edges involve real water and, during monsoon releases, fast-moving currents — keep children away from the water's edge near the dam structure itself, and stick to designated viewing areas.",
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
  { id: "introduction", title: "About Madhuban Dam", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "things-to-do", title: "What to See & Do", level: 2 },
  { id: "forest-birdlife", title: "Forest & Birdlife", level: 2 },
  { id: "itinerary", title: "Suggested Half-Day Plan", level: 2 },
  { id: "food-guide", title: "Food & Picnic Options", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MadhubanDamGuidePage() {
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
              alt="A large, calm forest-fringed reservoir under an open sky, evoking the scenic backwaters of Madhuban Dam"
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
                { label: "Madhuban Dam", href: null },
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
                "Madhuban Dam",
                "Silvassa",
                "Dadra & Nagar Haveli",
                "Reservoir",
                "Picnic Spot",
                "Off-beat",
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
              Madhuban Dam Travel Guide: Reservoir, Viewpoint & Picnic Spot
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A dam on the Damanganga river whose reservoir stretches all the
              way to Dudhni's boat jetties — Silvassa's quietest scenic
              escape, set inside a forested stretch of Dadra & Nagar Haveli.
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
                  text: "Silvassa, Dadra & Nagar Haveli",
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
                  <h2>About Madhuban Dam</h2>
                  <p>
                    <strong>Madhuban Dam</strong> is a dam built across the{" "}
                    <strong>Damanganga river</strong> near Silvassa, the main
                    town of{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli
                    </Link>
                    . Its reservoir spreads out into a large, genuinely
                    scenic lake — forest-fringed, calm, and one of the few
                    proper water bodies of any size in this small Union
                    Territory. That same reservoir extends as backwaters
                    toward{" "}
                    <Link href="/blog/dudhni-travel-guide">Dudhni</Link>,
                    the region's popular boating and jetty point, which makes
                    Madhuban Dam and Dudhni effectively two access points to
                    one continuous water body rather than two unrelated
                    attractions.
                  </p>
                  <p>
                    The dam sits within Dadra & Nagar Haveli's forest belt,
                    close to{" "}
                    <Link href="/blog/khanvel-travel-guide">Khanvel</Link>,
                    which means the drive out here is as much a part of the
                    appeal as the destination itself — winding roads through
                    dense green cover, opening up to a wide expanse of water
                    at the dam viewpoint. It's not a place with a long list
                    of "things to do" in the theme-park sense; it's a place
                    to slow down, take in the view, and pair with a more
                    activity-driven stop nearby.
                  </p>
                  <p>
                    This guide focuses on Madhuban Dam itself — the
                    structure, the viewpoint, the surrounding forest, and how
                    to combine it sensibly with Dudhni and Khanvel. For a
                    deep dive into the boating experience specifically, see
                    our dedicated{" "}
                    <Link href="/blog/dudhni-travel-guide">
                      Dudhni travel guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌊</span> Madhuban Dam at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Silvassa, Dadra & Nagar Haveli",
                        },
                        {
                          icon: "🏞️",
                          label: "River",
                          value: "Damanganga",
                        },
                        {
                          icon: "🚗",
                          label: "From Silvassa",
                          value: "~15–18 km (30–40 min)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Feb (post-monsoon)",
                        },
                        {
                          icon: "🚤",
                          label: "Boating",
                          value: "At Dudhni, on the same reservoir",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Free to view; boating charged separately",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    The reservoir's appearance changes considerably across
                    the year, so timing your visit matters more here than at
                    most destinations in the region.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Right after the monsoon, the reservoir is at its fullest and most scenic, and cool, dry weather makes the viewpoint and a picnic genuinely comfortable.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, receding water",
                        text: "Water levels drop noticeably by peak summer and daytime heat is intense — visit early morning or late afternoon if travelling in this window.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — dramatic but restricted",
                        text: "The dam can see active water release during heavy rain, which is a striking sight from a safe distance but also means restricted or unsafe access right near the structure.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak comfort",
                        text: "The coolest, most pleasant stretch of the year for a full outdoor day combining the dam, Dudhni, and Khanvel.",
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
                    <strong>Our pick:</strong> November to February — the
                    reservoir is full from the monsoon, the light is clear
                    for photos, and the weather is comfortable for both the
                    dam viewpoint and a boat ride at Dudhni afterward.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Madhuban Dam</h2>
                  <p>
                    Madhuban Dam is a short, straightforward drive from
                    Silvassa, and is typically visited as part of a day trip
                    rather than a standalone destination.
                  </p>
                  <ul>
                    <li>
                      <strong>From Silvassa:</strong> Roughly 15–18 km, about
                      30–40 minutes by car or taxi on well-maintained roads
                      running through Dadra & Nagar Haveli's forest belt.
                    </li>
                    <li>
                      <strong>From Khanvel:</strong> Madhuban Dam sits close
                      to{" "}
                      <Link href="/blog/khanvel-travel-guide">Khanvel</Link>,
                      making it easy to combine both in a single outing —
                      typically a 10–15 minute drive between the two.
                    </li>
                    <li>
                      <strong>Onward to Dudhni:</strong> The boating point at{" "}
                      <Link href="/blog/dudhni-travel-guide">Dudhni</Link>{" "}
                      is a further short drive along the reservoir's edge,
                      usually included in the same trip.
                    </li>
                    <li>
                      <strong>Self-drive or taxi:</strong> Public transport
                      options are limited this far out of town — a self-drive
                      car, rented two-wheeler, or a taxi arranged from
                      Silvassa is the practical way to get here.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Plan the dam viewpoint for
                    the morning, when the light is best and the water is
                    calmest, then continue on to Dudhni for boating in the
                    early afternoon.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>What to See & Do at Madhuban Dam</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="An open, calm waterfront framed by greenery, evocative of the view from Madhuban Dam's reservoir edge"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The dam structure and viewpoint:</strong> The
                      main draw is simply standing at the viewpoint and
                      taking in the scale of the reservoir — a wide sheet of
                      water framed by forested hills, especially striking in
                      the soft light of early morning or late afternoon.
                    </li>
                    <li>
                      <strong>Scenic reservoir views:</strong> Unlike most
                      spots in the region, Madhuban Dam offers genuinely
                      open, uncluttered views across a large water body —
                      a rare sight in a Union Territory with no natural
                      lakes of comparable size.
                    </li>
                    <li>
                      <strong>Boating at the Dudhni end:</strong> The
                      reservoir's dedicated boating operations — speedboats,
                      pedal boats, and cruise rides — are concentrated at
                      Dudhni rather than at the dam itself. See our{" "}
                      <Link href="/blog/dudhni-travel-guide">
                        Dudhni guide
                      </Link>{" "}
                      for the full rundown of boat types, rates, and timings.
                    </li>
                    <li>
                      <strong>Photography:</strong> The combination of still
                      water, forest backdrop, and the dam's clean structural
                      lines makes this a favourite quick photo stop for
                      travellers passing through Silvassa.
                    </li>
                    <li>
                      <strong>Picnicking:</strong> Open, shaded spots near
                      the viewpoint area are popular with local families and
                      groups for a relaxed picnic, particularly on weekends
                      in the cooler months.
                    </li>
                  </ul>
                </section>

                {/* ── Forest & Birdlife ─────────────────────────────────── */}
                <section id="forest-birdlife">
                  <h2>The Surrounding Forest & Birdlife</h2>
                  <p>
                    Madhuban Dam sits within one of Dadra & Nagar Haveli's
                    greener stretches, and the drive in and around the
                    reservoir passes through genuine forest cover rather than
                    open farmland — a noticeable contrast to the more built-up
                    parts of Silvassa.
                  </p>
                  <ul>
                    <li>
                      <strong>Forest belt:</strong> Deciduous forest hugs
                      much of the reservoir's edge, giving the whole area a
                      cooler, greener feel than the rest of the territory,
                      especially just after the monsoon.
                    </li>
                    <li>
                      <strong>Birdlife:</strong> The combination of open
                      water, forest edge, and relatively low human traffic
                      around the dam makes it a reasonable spot for casual
                      birdwatching — waterbirds and forest species are both
                      possible sightings for anyone who pauses rather than
                      just stopping for a quick photo.
                    </li>
                    <li>
                      <strong>Quiet over spectacle:</strong> This isn't a
                      dedicated sanctuary or reserve, so don't expect
                      curated trails or guided birding walks — the appeal is
                      the ambient greenery and water rather than a structured
                      wildlife experience.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Plan</h2>
                  <p>
                    Madhuban Dam works best as one stop in a fuller half-day
                    or full-day loop with Dudhni and Khanvel, rather than a
                    standalone trip.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Madhuban Dam Viewpoint",
                        color: "bg-amber-700",
                        activities: [
                          "Drive out from Silvassa (30–40 min)",
                          "Take in the dam and reservoir viewpoint",
                          "Photos in the calm early light; short walk around the area",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Onward to Dudhni",
                        color: "bg-sky-600",
                        activities: [
                          "Short drive along the reservoir to Dudhni",
                          "Speedboat, pedal boat, or cruise ride on the water",
                          "Lakeside snacks near the jetty area",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Khanvel & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Stop at Khanvel on the way back if time allows",
                          "Return drive to Silvassa",
                          "Wrap up with an early dinner in town",
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
                    * This loop fits comfortably into half a day; add Vasona
                    Lion Safari Park or a Silvassa town stop to stretch it
                    into a full day out.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food & Picnic Options</h2>
                  <p>
                    Don't expect a dense restaurant scene right at the dam —
                    most visitors either carry a picnic or eat properly once
                    they reach Dudhni or head back into Silvassa.
                  </p>
                  <ul>
                    <li>
                      <strong>Carry your own picnic:</strong> The shaded
                      areas near the viewpoint are well suited to a packed
                      picnic — the practical choice given how sparse dedicated
                      eateries are this close to the dam itself.
                    </li>
                    <li>
                      <strong>Snacks and light bites at Dudhni:</strong> The
                      jetty area at Dudhni has small stalls and basic
                      eateries serving snacks and tea — a natural stop after
                      boating.
                    </li>
                    <li>
                      <strong>Full meals in Silvassa:</strong> For a proper
                      sit-down meal, Gujarati thalis and general
                      multi-cuisine restaurants are widely available back in
                      Silvassa town.
                    </li>
                    <li>
                      <strong>Carry water:</strong> There's little in the way
                      of shops directly at the dam, so bring your own water
                      and snacks rather than counting on finding a vendor.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Visiting Madhuban Dam itself costs little to nothing —
                    most of the day's spending comes from boating at Dudhni,
                    transport, and food.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Splurge"].map(
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
                            "Dam viewpoint entry",
                            "Free",
                            "Free",
                            "Free",
                          ],
                          [
                            "Local transport (round trip)",
                            "₹300",
                            "₹700",
                            "₹1,500",
                          ],
                          [
                            "Boating at Dudhni",
                            "₹150–₹300/person",
                            "₹400–₹700/person",
                            "₹1,000+/private ride",
                          ],
                          [
                            "Food & snacks",
                            "₹200",
                            "₹500",
                            "₹1,200",
                          ],
                          [
                            "Half-day total (per person)",
                            "₹650",
                            "₹1,700",
                            "₹3,700+",
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
                    * Boating rates vary by boat type and season — see the{" "}
                    <Link href="/blog/dudhni-travel-guide">
                      Dudhni travel guide
                    </Link>{" "}
                    for detailed, current pricing.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Mind the water near the dam:</strong> The area
                      right by the dam structure can have uneven, slippery
                      surfaces close to the water — stick to designated
                      viewing spots rather than climbing down to the edge.
                    </li>
                    <li>
                      <strong>Be cautious during monsoon water release:</strong>{" "}
                      If the dam is releasing water during heavy rain, currents
                      downstream can turn dangerous fast — admire from a
                      distance and follow any local advisories or barriers.
                    </li>
                    <li>
                      <strong>Combine it with Dudhni, don't treat it as
                      standalone:</strong> Madhuban Dam alone is a fairly quick
                      stop — pairing it with boating at Dudhni makes for a
                      much more complete outing.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Boating operators and small
                      stalls in this area are unlikely to accept cards
                      reliably.
                    </li>
                    <li>
                      <strong>Go early for the best light and fewer
                      crowds:</strong> Weekend afternoons draw local
                      day-trippers — an early morning visit is calmer and
                      better for photography.
                    </li>
                    <li>
                      <strong>Carry your own water and snacks:</strong>{" "}
                      Facilities directly at the dam are minimal compared to
                      Dudhni or Silvassa town.
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
                          "Visit early morning for the best light and calm water",
                          "Combine the dam with Dudhni for boating",
                          "Carry water, snacks, and cash",
                          "Stick to designated viewpoints near the dam",
                          "Check the season — post-monsoon has the fullest reservoir",
                          "Pair with Khanvel for a fuller half-day loop",
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
                          "Climb down to the water's edge near the dam wall",
                          "Visit close to the structure during monsoon releases",
                          "Expect boating right at the dam — it's at Dudhni",
                          "Rely on finding food vendors directly at the viewpoint",
                          "Treat it as a full-day destination on its own",
                          "Ignore local barriers or safety advisories near the water",
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
                    <strong>🗺️ Extend the trip:</strong> Base yourself in{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>{" "}
                    and combine Madhuban Dam with{" "}
                    <Link href="/blog/dudhni-travel-guide">Dudhni</Link> and{" "}
                    <Link href="/blog/khanvel-travel-guide">Khanvel</Link> for
                    a well-rounded day in Dadra & Nagar Haveli's forest belt.
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
                  "Madhuban Dam",
                  "Dadra and Nagar Haveli",
                  "Silvassa",
                  "Dudhni",
                  "Khanvel",
                  "Damanganga River",
                  "Reservoir",
                  "Picnic Spot",
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

              <RelatedPostsGrid currentSlug="madhuban-dam-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="madhuban-dam-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
