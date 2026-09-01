// src/app/blog/international-dolls-museum-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "International Dolls Museum Chandigarh: Timings & Visit Guide",
  description:
    "Complete guide to the International Dolls Museum, Chandigarh — a quirky collection of dolls from around the world inside the Bal Bhavan complex. Timings, entry fee, what to expect with kids, and nearby sights.",
  keywords:
    "International Dolls Museum Chandigarh, Dolls Museum Chandigarh timings, Bal Bhavan Chandigarh, Dolls Museum Sector 23, Chandigarh with kids, family attractions Chandigarh, Chandigarh museums, things to do in Chandigarh with children",
  openGraph: {
    title: "International Dolls Museum Chandigarh: Timings & Visit Guide",
    description:
      "A themed collection of dolls from countries around the world, tucked inside Chandigarh's Bal Bhavan complex — a quick, novel stop for families.",
    url: "https://club.kudozz.in/blog/international-dolls-museum-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A calm lake ringed by hills in Chandigarh, evoking the city's family-friendly attractions including the International Dolls Museum",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "International Dolls Museum Chandigarh: Timings & Visit Guide",
    description:
      "A themed collection of dolls from countries around the world, tucked inside Chandigarh's Bal Bhavan complex — a quick, novel stop for families.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical:
      "https://club.kudozz.in/blog/international-dolls-museum-chandigarh-travel-guide",
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
          headline:
            "International Dolls Museum Chandigarh: Timings & Visit Guide",
          description:
            "Complete guide to the International Dolls Museum, Chandigarh — a quirky collection of dolls from around the world inside the Bal Bhavan complex. Timings, entry fee, what to expect with kids, and nearby sights.",
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
            "@id":
              "https://club.kudozz.in/blog/international-dolls-museum-chandigarh-travel-guide",
          },
          keywords:
            "International Dolls Museum Chandigarh, Bal Bhavan Chandigarh, Dolls Museum Sector 23, Chandigarh with kids",
          about: {
            "@type": "Place",
            name: "International Dolls Museum",
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
                name: "International Dolls Museum",
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
    q: "Where exactly is the International Dolls Museum in Chandigarh?",
    a: "It's commonly located within the Bal Bhavan children's complex in Sector 23 — a cluster of kid-oriented facilities rather than a standalone building. It's worth confirming the exact entrance with a local auto driver or your hotel, since Bal Bhavan itself has multiple sections.",
  },
  {
    q: "Is the International Dolls Museum worth visiting?",
    a: "It's a niche, family-friendly attraction rather than a major heritage sight — genuinely enjoyable with kids, and a pleasant novelty stop for adults who have an afternoon free. If you're short on time in Chandigarh and prioritising the Rock Garden, Sukhna Lake, or the Capitol Complex, this can reasonably be skipped, but it's a nice addition to a relaxed, family-paced day.",
  },
  {
    q: "How much time should I set aside for the Dolls Museum?",
    a: "Budget roughly 30 to 60 minutes. It's a compact collection, not a half-day destination, which makes it easy to combine with other stops in the same part of the city.",
  },
  {
    q: "Is there an entry fee?",
    a: "Yes, there's typically a modest entry fee, and it may be lower for children. Fees at civic and municipal attractions like this can change, so it's worth treating any figure you've seen online as approximate and confirming at the counter.",
  },
  {
    q: "Is the museum good for very young children?",
    a: "Yes — dolls in colourful traditional costumes tend to hold younger children's attention well, and the broader Bal Bhavan complex around it usually has other child-oriented facilities, making it easy to turn into a longer family outing rather than just a quick museum stop.",
  },
  {
    q: "What are the museum's timings?",
    a: "Like most municipal attractions in Chandigarh, it generally keeps daytime hours and is closed on at least one weekday — it's best to confirm current timings locally before making a special trip, since these details can shift.",
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
  { id: "introduction", title: "A Quirky Corner of Chandigarh", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-collection", title: "The Collection", level: 2 },
  { id: "visiting-with-kids", title: "Visiting with Kids", level: 2 },
  { id: "nearby", title: "Nearby Attractions", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DollsMuseumGuidePage() {
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
              alt="A calm lake ringed by hills in Chandigarh, evoking the city's family-friendly attractions including the International Dolls Museum"
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
                { label: "International Dolls Museum", href: null },
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
                "Dolls Museum",
                "Chandigarh",
                "Bal Bhavan",
                "Family Travel",
                "With Kids",
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
              International Dolls Museum, Chandigarh: Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A themed collection of dolls from countries and cultures
              around the world, tucked inside Chandigarh's Bal Bhavan
              complex — a small, quirky, kid-friendly museum that's easy to
              overlook and easy to enjoy.
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
                  text: "Bal Bhavan, Sector 23, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,200 words",
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
                  <h2>A Quirky Corner of Chandigarh</h2>
                  <p>
                    The <strong>International Dolls Museum</strong> is one
                    of the more offbeat entries on any{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>{" "}
                    itinerary — a themed collection of dolls gathered from
                    countries and cultures around the world, many dressed in
                    traditional or regional costume, displayed alongside
                    dolls representing India's own states and traditions.
                    It's the kind of attraction that rarely makes anyone's
                    top-three list for the city, and yet consistently ends
                    up being one of the more memorable stops for families
                    travelling with children.
                  </p>
                  <p>
                    The museum is commonly located within the{" "}
                    <strong>Bal Bhavan</strong> children's complex in Sector
                    23 — a civic facility built around child-oriented
                    activities and exhibits, of which the dolls collection
                    is one part. That setting matters: this isn't a grand,
                    purpose-built museum with polished galleries and
                    audio guides, but a modest, well-loved civic space that
                    leans into charm rather than scale.
                  </p>
                  <p>
                    It's best approached with the right expectations — a
                    niche, family-friendly attraction rather than a major
                    heritage sight, and a genuinely enjoyable half-hour to
                    an hour rather than a half-day destination in its own
                    right.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🪆</span> International Dolls Museum at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bal Bhavan, Sector 23, Chandigarh",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Modest fee (approx.)",
                        },
                        {
                          icon: "⏱️",
                          label: "Visit Duration",
                          value: "30–60 minutes",
                        },
                        {
                          icon: "👨‍👩‍👧",
                          label: "Best For",
                          value: "Families, kids, novelty stop",
                        },
                        {
                          icon: "🏛️",
                          label: "Type",
                          value: "Themed civic museum",
                        },
                        {
                          icon: "🚗",
                          label: "Nearby",
                          value: "Sector 22 / Sector 17",
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
                    Because this is an indoor museum, the weather matters
                    far less here than it does for Chandigarh's gardens and
                    lakes — it's a genuinely useful option on a hot
                    afternoon or a sudden monsoon shower when outdoor
                    sightseeing isn't appealing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Weekday Mornings",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Quietest window",
                        text: "Weekday mornings tend to be calmest, with fewer school groups and family visitors than weekend afternoons.",
                      },
                      {
                        season: "Summer Afternoons",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "A useful indoor break",
                        text: "A sensible slot to duck indoors during Chandigarh's hottest hours (April–June), when outdoor sights like Sukhna Lake and the Rock Garden are best avoided anyway.",
                      },
                      {
                        season: "Weekend Afternoons",
                        emoji: "👨‍👩‍👧‍👦",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Busiest, family-heavy",
                        text: "Expect more families and children around, especially if Bal Bhavan's other activities are also running — livelier, but a bit more crowded.",
                      },
                      {
                        season: "Monsoon",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Reliable rainy-day option",
                        text: "An easy fallback plan if sudden showers disrupt an outdoor Chandigarh itinerary during July–September.",
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
                    <strong>Our pick:</strong> a weekday late morning,
                    combined with other Sector 22-23 errands or sightseeing
                    — you'll get a quieter museum and an easy pairing with
                    lunch nearby.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach</h2>
                  <p>
                    Bal Bhavan, and the Dolls Museum inside it, sits in
                    Sector 23 — a fairly central, easy-to-reach part of the
                    city given Chandigarh's well-planned sector grid.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The simplest way to
                      reach Bal Bhavan — most drivers know the complex by
                      name, and it's a short ride from Sector 17 or
                      Sector 22.
                    </li>
                    <li>
                      <strong>On foot from nearby sectors:</strong> If
                      you're already exploring{" "}
                      <Link href="/blog/sector-22-chandigarh-travel-guide">
                        Sector 22
                      </Link>{" "}
                      or the surrounding area, the museum is within
                      comfortable walking distance for most visitors.
                    </li>
                    <li>
                      <strong>Combine with Sector 17:</strong>{" "}
                      <Link href="/blog/sector-17-chandigarh-travel-guide">
                        Sector 17
                      </Link>
                      , the city's central plaza, is close enough to fold
                      into the same outing before or after the museum.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Since the museum sits
                    inside the larger Bal Bhavan complex, ask your driver
                    for "Bal Bhavan, Sector 23" rather than the museum name
                    alone — it's the more commonly recognised reference
                    point.
                  </div>
                </section>

                {/* ── The Collection ────────────────────────────────────── */}
                <section id="the-collection">
                  <h2>The Collection</h2>
                  <p>
                    What makes the museum worth the detour is simply the
                    novelty and variety of what's on display: dolls
                    gathered from a wide range of countries and cultures,
                    many dressed in traditional or regional costume that
                    reflects the place they represent. Alongside these
                    international pieces, the collection also includes
                    dolls representing India's own states and traditions —
                    a small, side-by-side survey of costume and craft from
                    around the world and closer to home.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Chandigarh cityscape, evoking the compact, easy-to-browse displays inside the International Dolls Museum's Bal Bhavan setting"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Don't come expecting the scale or curatorial polish of a
                    major national museum — this is a compact, single-theme
                    collection, best enjoyed by walking through at an
                    unhurried pace and pointing out favourites rather than
                    reading detailed placards on every case. It's precisely
                    that simplicity that makes it work so well for younger
                    visitors, who tend to respond more to color, costume,
                    and variety than to historical context.
                  </p>
                  <p>
                    For adults, the appeal is more about novelty than depth
                    — a pleasant half-hour browsing something genuinely
                    different from Chandigarh's modernist architecture and
                    manicured gardens, and a nice conversation piece if
                    you're travelling with people who enjoy folk art,
                    textiles, or costume design.
                  </p>
                </section>

                {/* ── Visiting with Kids ────────────────────────────────── */}
                <section id="visiting-with-kids">
                  <h2>Visiting with Kids</h2>
                  <p>
                    This is, first and foremost, a family attraction, and
                    it's worth planning the visit with that in mind.
                  </p>
                  <ul>
                    <li>
                      <strong>Genuinely engaging for children:</strong> The
                      colour, variety, and costume detail of the dolls tend
                      to hold younger visitors' attention far better than a
                      typical museum collection would.
                    </li>
                    <li>
                      <strong>Combine with the rest of Bal Bhavan:</strong>{" "}
                      Since the museum sits inside a broader children's
                      complex, it's easy to turn a museum visit into a
                      longer family outing depending on what else is
                      running that day.
                    </li>
                    <li>
                      <strong>Keep it short and unhurried:</strong> 30 to 60
                      minutes is usually the right pace — long enough to
                      enjoy the collection, short enough to avoid tiring
                      out younger children.
                    </li>
                    <li>
                      <strong>A good rainy-day or heat-break plan:</strong>{" "}
                      Being indoors, it's a reliable fallback if the
                      weather makes Chandigarh's outdoor sights
                      uncomfortable for kids that day.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Treat this as a supporting
                    stop rather than the centrepiece of a family day in
                    Chandigarh — pair it with a longer, more active outing
                    like <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                      Sukhna Lake
                    </Link>{" "}
                    or the{" "}
                    <Link href="/blog/rock-garden-chandigarh-travel-guide">
                      Rock Garden
                    </Link>{" "}
                    so children get a mix of indoor and outdoor time.
                  </div>
                </section>

                {/* ── Nearby ─────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Attractions</h2>
                  <p>
                    The museum's central Sector 23 location makes it easy
                    to combine with other nearby parts of the city rather
                    than visiting as a standalone trip.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/sector-22-chandigarh-travel-guide">
                          Sector 22
                        </Link>
                        :
                      </strong>{" "}
                      A commercial and residential sector close by, useful
                      for a casual walk, food, or errands before or after
                      the museum.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sector-17-chandigarh-travel-guide">
                          Sector 17 Plaza
                        </Link>
                        :
                      </strong>{" "}
                      Chandigarh's central shopping and café district, a
                      short ride away and a natural place to head for a
                      meal afterward.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/rose-garden-chandigarh-travel-guide">
                          Rose Garden
                        </Link>
                        :
                      </strong>{" "}
                      One of the city's best-known green spaces, reachable
                      as part of the same half-day if you want to balance
                      the museum with time outdoors.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (30–60 Minutes)</h2>
                  <p>
                    The Dolls Museum doesn't need a detailed itinerary of
                    its own — it's best treated as a short, self-contained
                    stop within a longer Chandigarh day.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0–10 min",
                        title: "Arrive & Orient",
                        color: "bg-amber-700",
                        activities: [
                          "Reach Bal Bhavan, Sector 23 by auto or cab",
                          "Locate the Dolls Museum section within the complex",
                          "Pay the entry fee at the counter",
                        ],
                      },
                      {
                        day: "10–45 min",
                        title: "Browse the Collection",
                        color: "bg-forest-600",
                        activities: [
                          "Walk through the international dolls displays",
                          "Look for the Indian states and traditions section",
                          "Let kids point out favourites at their own pace",
                        ],
                      },
                      {
                        day: "45–60 min",
                        title: "Wrap Up & Move On",
                        color: "bg-sky-600",
                        activities: [
                          "A final walk-through of any missed sections",
                          "Head to Sector 22 or Sector 17 for food",
                          "Continue on to a bigger sight if time allows",
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
                    * This pairs naturally with a broader{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh itinerary
                    </Link>{" "}
                    — treat it as a 30–60 minute add-on rather than a
                    half-day plan of its own.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    This is one of the cheapest attractions in Chandigarh —
                    your main cost is simply getting to and from Sector 23.
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
                          [
                            "Museum entry",
                            "₹20 (approx.)",
                            "₹20 (approx.)",
                            "₹20 (approx.)",
                          ],
                          [
                            "Transport to/from Sector 23",
                            "₹40 (shared auto)",
                            "₹150 (auto/cab)",
                            "₹400 (private cab)",
                          ],
                          ["Snacks/food nearby", "₹150", "₹400", "₹1,000+"],
                          ["Total (approx.)", "₹210", "₹570", "₹1,420+"],
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
                    * Figures are per person, approximate, and can change —
                    confirm the current entry fee at the counter.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting</h2>
                  <ul>
                    <li>
                      <strong>Confirm timings before you go:</strong>{" "}
                      Municipal attractions like this can have a weekly
                      closed day and daytime-only hours — check locally
                      rather than assuming it's always open.
                    </li>
                    <li>
                      <strong>Don't expect a long visit:</strong> This is a
                      quick, 30-60 minute stop, not a half-day museum —
                      plan the rest of your day around a bigger sight.
                    </li>
                    <li>
                      <strong>Ask for "Bal Bhavan" by name:</strong> It's the
                      more widely recognised reference point for auto and
                      cab drivers than the museum's own name.
                    </li>
                    <li>
                      <strong>Best combined, not standalone:</strong> Pair
                      it with Sector 22, Sector 17, or another nearby sight
                      rather than making a special trip just for the
                      museum.
                    </li>
                    <li>
                      <strong>Carry small change:</strong> Entry fees at
                      civic attractions like this are usually modest and
                      easiest to pay in cash.
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
                          "Visit with kids if you're travelling with a family",
                          "Combine it with Sector 22 or Sector 17 nearby",
                          "Keep the visit short and relaxed",
                          "Confirm timings and the weekly closed day locally",
                          "Use it as an indoor break during hot afternoons",
                          "Ask drivers for Bal Bhavan, Sector 23",
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
                          "Expect a large, polished national-level museum",
                          "Plan a whole day around this one stop",
                          "Make a special trip without pairing it with other sights",
                          "Assume it's open every single day without checking",
                          "Rush through it if kids are enjoying the displays",
                          "Prioritise it over the Rock Garden or Sukhna Lake on a short trip",
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
                    <strong>🗺️ Extend the trip:</strong> The Dolls Museum
                    fits naturally into a wider{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>{" "}
                    day — combine it with{" "}
                    <Link href="/blog/sector-22-chandigarh-travel-guide">
                      Sector 22
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>{" "}
                    for a relaxed, family-paced afternoon.
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
                  "International Dolls Museum",
                  "Chandigarh",
                  "Bal Bhavan",
                  "Family Travel",
                  "With Kids",
                  "Chandigarh Museums",
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

              <RelatedPostsGrid currentSlug="international-dolls-museum-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="international-dolls-museum-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
