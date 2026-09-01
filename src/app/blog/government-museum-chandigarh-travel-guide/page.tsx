// src/app/blog/government-museum-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Government Museum Chandigarh: Sector 10 Visit Guide",
  description:
    "Guide to the Government Museum and Art Gallery in Sector 10, Chandigarh — its Gandhara sculpture collection, Pahari and Kangra miniature paintings, modern art section, timings, entry fee, and visit tips.",
  keywords:
    "Government Museum Chandigarh, Government Museum and Art Gallery Chandigarh, Sector 10 Chandigarh museum, Gandhara sculpture Chandigarh, Pahari miniature paintings, Kangra paintings Chandigarh, Chandigarh museum cluster, Chandigarh museum timings, Chandigarh museum entry fee",
  openGraph: {
    title: "Government Museum Chandigarh: Sector 10 Visit Guide",
    description:
      "Ancient Gandhara sculpture, Pahari and Kangra miniature paintings, and a modern art section — the quiet, unhurried museum at the heart of Chandigarh's Sector 10 museum cluster.",
    url: "https://club.kudozz.in/blog/government-museum-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "The Government Museum and Art Gallery building in Sector 10, Chandigarh, home to a Gandhara sculpture and miniature painting collection",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Government Museum Chandigarh: Sector 10 Visit Guide",
    description:
      "Ancient Gandhara sculpture, Pahari and Kangra miniature paintings, and a modern art section — the quiet, unhurried museum at the heart of Chandigarh's Sector 10 museum cluster.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical:
      "https://club.kudozz.in/blog/government-museum-chandigarh-travel-guide",
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
          headline: "Government Museum Chandigarh: Sector 10 Visit Guide",
          description:
            "Guide to the Government Museum and Art Gallery in Sector 10, Chandigarh — its Gandhara sculpture collection, Pahari and Kangra miniature paintings, modern art section, timings, entry fee, and visit tips.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
              "https://club.kudozz.in/blog/government-museum-chandigarh-travel-guide",
          },
          keywords:
            "Government Museum Chandigarh, Gandhara sculpture, Pahari paintings, Kangra school, Sector 10 Chandigarh, museum cluster",
          about: {
            "@type": "Place",
            name: "Government Museum and Art Gallery, Chandigarh",
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
                name: "Government Museum",
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
    q: "What is the Government Museum and Art Gallery known for?",
    a: "It's best known for its collection of Gandhara sculpture — Buddhist-era stone sculpture from the ancient Gandhara region, in what is now Pakistan and Afghanistan — alongside a collection of miniature paintings, including Pahari and Kangra-school work, and a modern art section.",
  },
  {
    q: "How does it compare to Delhi's National Museum?",
    a: "It's considerably smaller and quieter than Delhi's larger institutions, without the crowds or scale of a national-level museum. That makes it a better fit for visitors specifically interested in Gandhara sculpture or Indian miniature painting traditions, rather than a broad survey of Indian art and history.",
  },
  {
    q: "What is the entry fee and opening hours?",
    a: "There's a modest entry fee, and the museum is closed one day a week — commonly Monday, as with many Indian government museums. Treat both figures as approximate and confirm current fees and hours before visiting, since these can change.",
  },
  {
    q: "Is the Government Museum part of a larger cluster?",
    a: "Yes — it sits within a small museum cluster in Sector 10 that also includes a few other specialised museums nearby, making it easy to combine more than one stop if you're specifically interested in museums during your visit.",
  },
  {
    q: "How much time should I set aside?",
    a: "An hour to ninety minutes is generally enough for a comfortable, unhurried walk through the main galleries. Visitors with a specific interest in ancient sculpture or miniature painting could reasonably spend longer.",
  },
  {
    q: "What should I combine it with?",
    a: "It pairs naturally with the Le Corbusier Centre for a museum-focused half-day, or with Capitol Complex for a fuller architecture-and-heritage day covering Chandigarh's design history alongside its art collections.",
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
  { id: "introduction", title: "Chandigarh's Quiet Art Museum", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-collections", title: "The Collections", level: 2 },
  { id: "nearby", title: "Nearby Sights", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GovernmentMuseumGuidePage() {
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
              alt="The Government Museum and Art Gallery building in Sector 10, Chandigarh, home to a Gandhara sculpture and miniature painting collection"
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
                { label: "Government Museum", href: null },
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
                "Government Museum",
                "Chandigarh",
                "Gandhara Sculpture",
                "Miniature Paintings",
                "Sector 10",
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
              Government Museum & Art Gallery, Chandigarh: Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Ancient Gandhara sculpture, centuries-old Pahari and Kangra
              miniature paintings, and a modern art section — Sector 10's
              quiet, unhurried counterpart to Delhi's bigger museums.
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
                  text: "Sector 10, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~1,350 words",
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
                  <h2>Chandigarh's Quiet Art Museum</h2>
                  <p>
                    The <strong>Government Museum and Art Gallery</strong> sits
                    in Sector 10 of{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>
                    , as part of a small museum cluster that also includes a
                    few other specialised museums nearby. It's not trying to
                    compete with Delhi's larger national institutions in
                    scale, and that's exactly its appeal — a relatively
                    quiet, unhurried space that rewards visitors with a
                    specific interest in what it actually holds.
                  </p>
                  <p>
                    Its standout holding is a collection of{" "}
                    <strong>Gandhara sculpture</strong> — Buddhist-era stone
                    sculpture from the ancient Gandhara region, spanning parts
                    of what is now Pakistan and Afghanistan, prized for how it
                    blended Greco-Roman artistic influence with Buddhist
                    iconography. Alongside it sits a collection of{" "}
                    <strong>miniature paintings</strong>, including works from
                    the Pahari and Kangra schools, and a modern art section
                    covering more recent Indian painting and sculpture.
                  </p>
                  <p>
                    Because it's compact and rarely crowded, the museum
                    combines naturally with the nearby{" "}
                    <Link href="/blog/le-corbusier-centre-chandigarh-travel-guide">
                      Le Corbusier Centre
                    </Link>{" "}
                    for a museum-focused half-day, or with{" "}
                    <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                      Capitol Complex
                    </Link>{" "}
                    for a fuller day built around Chandigarh's architecture
                    and art history together.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🖼️</span> Government Museum at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 10, Chandigarh",
                        },
                        {
                          icon: "🗿",
                          label: "Highlight",
                          value: "Gandhara sculpture collection",
                        },
                        {
                          icon: "🎨",
                          label: "Also Features",
                          value: "Pahari/Kangra miniatures, modern art",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Modest fee (approx.)",
                        },
                        {
                          icon: "📅",
                          label: "Weekly Closure",
                          value: "Commonly Monday (confirm locally)",
                        },
                        {
                          icon: "⏱️",
                          label: "Suggested Time",
                          value: "1 – 1.5 hours",
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
                    As an indoor museum, the Government Museum is a good option
                    regardless of season — useful to keep in mind for the
                    hottest and wettest stretches of the Chandigarh year, when
                    outdoor sightseeing is less appealing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Weekday Mornings",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Quietest galleries",
                        text: "Fewer visitors than weekends, particularly useful if you want unhurried time in front of specific Gandhara pieces or miniature paintings.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "A good indoor escape",
                        text: "Chandigarh's peak summer heat makes an air-conditioned indoor museum a genuinely welcome midday alternative to outdoor sightseeing.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Good monsoon backup plan",
                        text: "Sudden downpours during monsoon can disrupt outdoor plans — an indoor museum stop is an easy way to keep the day moving.",
                      },
                      {
                        season: "Any Day But Closure Day",
                        emoji: "📅",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Confirm before you go",
                        text: "Closed one day a week, commonly Monday for Indian government museums — confirm the current closure day before visiting.",
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
                    <strong>Our pick:</strong> a weekday morning, ideally
                    combined with the Le Corbusier Centre or slotted in as an
                    indoor break during the hotter months.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Government Museum</h2>
                  <p>
                    Sector 10 is a fairly central location within Chandigarh's
                    grid, making the museum easy to reach from most parts of
                    the city.
                  </p>
                  <ul>
                    <li>
                      <strong>By Cab or Auto:</strong> The simplest way in —
                      Sector 10 and the museum cluster are well known to local
                      drivers.
                    </li>
                    <li>
                      <strong>Combined with Le Corbusier Centre:</strong> Both
                      sit within easy driving distance of each other, making a
                      combined museum visit straightforward to plan in one
                      trip.
                    </li>
                    <li>
                      <strong>Self-drive:</strong> Straightforward given
                      Chandigarh's well-marked sector roads, with parking
                      generally available near the museum cluster.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Since Sector 10 hosts a small
                    cluster of museums, check what else is open on the day you
                    visit — you may be able to fold in another quick stop
                    nearby.
                  </div>
                </section>

                {/* ── The Collections ────────────────────────────────────── */}
                <section id="the-collections">
                  <h2>The Collections</h2>
                  <p>
                    The museum's galleries are organised loosely by period and
                    medium, moving from ancient sculpture through to more
                    recent Indian art.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Ancient Gandhara-style stone sculpture on display in a gallery at the Government Museum and Art Gallery, Chandigarh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Gandhara Sculpture</h3>
                  <p>
                    The museum's best-known holding is its collection of{" "}
                    <strong>Gandhara sculpture</strong> — Buddhist-era stone
                    carvings from the ancient Gandhara region, spanning parts
                    of present-day Pakistan and Afghanistan. What makes
                    Gandhara art distinctive is its blend of Greco-Roman
                    stylistic influence, a legacy of the region's exposure to
                    Hellenistic culture, with Buddhist religious subject
                    matter — resulting in a sculptural style unlike anything
                    produced elsewhere in the subcontinent at the time.
                  </p>

                  <h3>Pahari & Kangra Miniature Paintings</h3>
                  <p>
                    A dedicated collection of <strong>miniature paintings</strong>{" "}
                    includes work from the Pahari painting tradition — art
                    produced across the hill states of the Himalayan
                    foothills — with a particular emphasis on the Kangra
                    school, known for its lyrical, finely detailed treatment
                    of romantic and devotional themes.
                  </p>

                  <h3>Modern Art Section</h3>
                  <p>
                    Beyond the historical galleries, a modern art section
                    covers more recent Indian painting and sculpture, offering
                    a useful counterpoint to the ancient and medieval
                    collections elsewhere in the museum.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you only have limited time,
                    prioritise the Gandhara sculpture gallery first — it's the
                    collection that sets this museum apart from more generic
                    regional museums elsewhere in North India.
                  </div>
                </section>

                {/* ── Nearby ─────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Sights</h2>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/le-corbusier-centre-chandigarh-travel-guide">
                          Le Corbusier Centre
                        </Link>
                      </strong>{" "}
                      — a short drive away, and a natural pairing for a
                      museum-focused half-day covering both art history and
                      the city's own design story.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                          Capitol Complex
                        </Link>
                      </strong>{" "}
                      — for a fuller heritage day, combine both museums with a
                      (separately arranged) visit to Le Corbusier's UNESCO
                      Capitol Complex.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/international-dolls-museum-chandigarh-travel-guide">
                          International Dolls Museum
                        </Link>
                      </strong>{" "}
                      — another small, specialised museum in the city, worth
                      knowing about if you're already in a museum-hopping
                      mood.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sector-17-chandigarh-travel-guide">
                          Sector 17
                        </Link>
                      </strong>{" "}
                      — Chandigarh's central plaza, a short drive away for
                      food or a coffee break after the museum visit.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1 – 1.5 Hours)</h2>
                  <p>
                    A comfortable, unhurried loop through the museum's main
                    galleries fits well within about an hour to ninety
                    minutes.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-30 min",
                        title: "Gandhara Sculpture Gallery",
                        color: "bg-amber-700",
                        activities: [
                          "Start with the museum's signature collection",
                          "Take time with individual pieces rather than rushing through",
                        ],
                      },
                      {
                        day: "30-50 min",
                        title: "Miniature Paintings",
                        color: "bg-forest-600",
                        activities: [
                          "Pahari and Kangra-school miniature paintings",
                          "Note the detail work best appreciated up close",
                        ],
                      },
                      {
                        day: "50-90 min",
                        title: "Modern Art & Wrap Up",
                        color: "bg-sky-600",
                        activities: [
                          "Walk through the modern art section",
                          "Head onward to the Le Corbusier Centre or Sector 17",
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
                    * Visitors with a specific interest in ancient sculpture or
                    Indian miniature painting traditions could easily spend
                    longer than the ninety minutes budgeted here.
                  </p>
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
                            "Entry fee",
                            "Modest (approx.)",
                            "Modest (approx.)",
                            "Modest (approx.)",
                          ],
                          [
                            "Transport to/from site",
                            "₹100 (auto)",
                            "₹250 (cab)",
                            "₹600 (private car)",
                          ],
                          [
                            "Combine with Le Corbusier Centre",
                            "₹50-100",
                            "₹100-200",
                            "₹200+",
                          ],
                          ["Total (approx.)", "₹150-250", "₹450-650", "₹1,400+"],
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
                    * Figures are approximate and per person — confirm the
                    current entry fee locally. See our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a full city budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Confirm the weekly closure day:</strong> Commonly
                      Monday, like many Indian government museums, but confirm
                      current hours before planning your visit.
                    </li>
                    <li>
                      <strong>Prioritise the Gandhara gallery if short on time:</strong>{" "}
                      It's the collection that makes this museum genuinely
                      distinctive.
                    </li>
                    <li>
                      <strong>Use it as a weather backup:</strong> A good
                      indoor option during peak summer heat or sudden monsoon
                      downpours.
                    </li>
                    <li>
                      <strong>Combine with the Le Corbusier Centre:</strong>{" "}
                      Both are quiet, unhurried museums that pair naturally
                      into one half-day.
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
                          "Confirm the current weekly closure day before visiting",
                          "Start with the Gandhara sculpture gallery",
                          "Combine with the Le Corbusier Centre for a half-day",
                          "Take an unhurried pace through the miniature paintings",
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
                          "Expect the scale of Delhi's National Museum",
                          "Assume it's open every day of the week",
                          "Rush past the Gandhara sculpture gallery",
                          "Skip checking current entry fee and hours",
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
                    <strong>🗺️ Extend the trip:</strong> Combine this museum
                    with the{" "}
                    <Link href="/blog/le-corbusier-centre-chandigarh-travel-guide">
                      Le Corbusier Centre
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                      Capitol Complex
                    </Link>{" "}
                    for a full architecture-and-heritage day, or see our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      complete Chandigarh travel guide
                    </Link>{" "}
                    to plan the rest of your trip.
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
                  "Government Museum",
                  "Chandigarh",
                  "Gandhara Sculpture",
                  "Miniature Paintings",
                  "Sector 10",
                  "Art Gallery",
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

              <RelatedPostsGrid currentSlug="government-museum-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="government-museum-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
