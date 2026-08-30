// src/app/blog/moti-daman-fort-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Moti Daman Fort: St. Jerome Fort History & Guide",
  description:
    "Moti Daman Fort (Fort of St. Jerome) guide — history, ten bastions, cannons, Bom Jesus Church's gilded altar, the collectorate, sea views and visiting tips.",
  keywords:
    "Moti Daman Fort, Fort of St Jerome, Daman fort history, Bom Jesus Church Daman, Daman Portuguese fort, Moti Daman Fort bastions, Daman Ganga estuary, Portuguese fort India, Daman collectorate, Moti Daman Fort visiting guide",
  openGraph: {
    title: "Moti Daman Fort: St. Jerome Fort History & Guide",
    description:
      "A deep dive into Moti Daman Fort — the Fort of St. Jerome — its ten bastions, cannons, Bom Jesus Church, the collectorate, and how to visit today.",
    url: "https://club.kudozz.in/blog/moti-daman-fort-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Portuguese-era fort ramparts overlooking the sea, evocative of Moti Daman Fort's bastioned walls",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Moti Daman Fort: St. Jerome Fort History & Guide",
    description:
      "A deep dive into Moti Daman Fort — the Fort of St. Jerome — its ten bastions, cannons, Bom Jesus Church, the collectorate, and how to visit today.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/moti-daman-fort-travel-guide",
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
          headline: "Moti Daman Fort: St. Jerome Fort History & Guide",
          description:
            "Moti Daman Fort (Fort of St. Jerome) guide — history, ten bastions, cannons, Bom Jesus Church's gilded altar, the collectorate, sea views and visiting tips.",
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
            "@id": "https://club.kudozz.in/blog/moti-daman-fort-travel-guide",
          },
          keywords:
            "Moti Daman Fort, Fort of St Jerome, Daman fort history, Bom Jesus Church Daman, Daman Portuguese fort, Moti Daman Fort bastions",
          about: {
            "@type": "Place",
            name: "Moti Daman Fort",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Moti Daman, Daman",
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
                name: "Moti Daman Fort",
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
    q: "What is the difference between Moti Daman Fort and Diu Fort?",
    a: "Both are 16th-century Portuguese forts on India's west coast, but they're quite different in character. Diu Fort is a compact, dramatically sited sea fort on a small island, with a lighthouse and cannons pointed straight out at the Arabian Sea. Moti Daman Fort is much larger in footprint — a sprawling bastioned enclosure that contains an entire lived-in town quarter within its walls, including a church, government offices, and residential lanes. Diu Fort feels more like a monument you tour; Moti Daman Fort feels more like a walled town you walk through.",
  },
  {
    q: "Is there an entry fee for Moti Daman Fort?",
    a: "There's generally no ticketed entry fee to walk the fort area itself, since it functions as an active quarter of Daman town rather than a fenced monument — you can walk in through the gates and along most of the ramparts freely. Some individual buildings within the complex, such as government offices, are naturally not open to visitors, and access can occasionally be restricted around specific sections for maintenance or security. Always check locally on the day, as arrangements can change.",
  },
  {
    q: "What is inside Moti Daman Fort?",
    a: "Inside the fort walls is essentially an old Portuguese town quarter — narrow lanes, colonial-era houses, the Bom Jesus Church with its notable gilded altar, other smaller chapels and shrines, government buildings including the district collectorate, and open ground near the ramparts. It's a working part of Daman, not a preserved-in-amber ruin, which is part of what makes walking through it interesting.",
  },
  {
    q: "How old is Moti Daman Fort?",
    a: "Moti Daman Fort dates back to the Portuguese colonial era, with construction beginning in the mid-to-late 16th century, roughly the 1550s–70s, and continuing in phases over the following decades as the fortifications were expanded and strengthened. That makes it well over 400 years old, and one of the largest surviving Portuguese-built fortifications anywhere on India's west coast.",
  },
  {
    q: "Is Moti Daman Fort the same as the Fort of St. Jerome?",
    a: "Yes — Moti Daman Fort and the Fort of St. Jerome are the same structure. \"Fort of St. Jerome\" is the fort's original Portuguese-era name, and \"Moti Daman Fort\" is the more common name used locally today, referring to the Moti Daman (literally \"Big Daman\") quarter of the town that the fort encloses.",
  },
  {
    q: "How much time do you need to visit Moti Daman Fort?",
    a: "Budget around one to one and a half hours for a focused visit — enough time to walk a stretch of the ramparts, see a couple of the bastions and their old cannons, step inside Bom Jesus Church, and take in the sea-facing views over the Daman Ganga estuary. If you want to wander the internal lanes at a slower pace or spend real time with the church's interior, allow closer to two hours.",
  },
  {
    q: "Can you visit Bom Jesus Church inside the fort?",
    a: "Yes, Bom Jesus Church is generally open to visitors and is one of the fort's genuine highlights, best known for its ornate gilded wooden altar and baroque interior. As with any active place of worship, dress modestly, keep voices low if a service or prayer is underway, and check on opening hours locally since these can vary.",
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
  { id: "introduction", title: "Moti Daman Fort: Fort of St. Jerome", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Fort", level: 2 },
  { id: "ramparts-bastions", title: "Ramparts & Ten Bastions", level: 2 },
  { id: "bom-jesus-church", title: "Bom Jesus Church", level: 2 },
  { id: "administrative-quarter", title: "The Collectorate & Old Buildings", level: 2 },
  { id: "sea-facing-bastions", title: "Sea-Facing Bastions & Estuary Views", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "visiting-info", title: "Entry & Visiting Practicalities", level: 2 },
  { id: "itinerary", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MotiDamanFortGuidePage() {
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
              alt="Portuguese-era fort ramparts overlooking the sea, evocative of Moti Daman Fort's bastioned walls"
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
                { label: "Moti Daman Fort", href: null },
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
                "Moti Daman Fort",
                "Fort of St. Jerome",
                "Daman",
                "Portuguese Heritage",
                "History",
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
              Moti Daman Fort: The Fort of St. Jerome, Bastion by Bastion
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 16th-century Portuguese fortress so large it doesn't just
              guard a town — it contains one. Ten bastions, a gilded church,
              old cannons, and a district collectorate, all inside the same
              set of walls.
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
                  text: "Moti Daman, Daman",
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
                  <h2>Moti Daman Fort: The Fort of St. Jerome</h2>
                  <p>
                    <strong>Moti Daman Fort</strong> — also known by its
                    original Portuguese name, the{" "}
                    <strong>Fort of St. Jerome</strong> — is the single
                    largest piece of Portuguese military architecture on
                    Daman's coastline, and one of the largest and
                    best-preserved Portuguese forts anywhere on India's west
                    coast. Construction began under Portuguese rule in the
                    mid-to-late 16th century, roughly the 1550s–70s, and the
                    fortifications were expanded and strengthened in phases
                    over the decades that followed, as Daman grew into an
                    important Portuguese trading and administrative outpost.
                  </p>
                  <p>
                    What sets Moti Daman Fort apart from most Indian forts is
                    scale of a different kind. It isn't a citadel perched
                    above a town — it <em>is</em> the town, or at least the
                    old core of it. The fort's massive bastioned walls
                    enclose the entire <strong>Moti Daman</strong> quarter on
                    the southern bank of the Daman Ganga river: lanes,
                    houses, a church, government buildings, and open ground,
                    all sitting inside the same perimeter that Portuguese
                    military engineers laid out more than four centuries ago.
                    This guide is a focused deep-dive on the fort itself —
                    its walls, bastions, church, and the buildings within
                    them — rather than a tour of the wider neighbourhood; for
                    that broader picture of Moti Daman as a quarter, see our{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman neighbourhood guide
                    </Link>
                    .
                  </p>
                  <p>
                    Moti Daman Fort sits within the larger story of{" "}
                    <Link href="/blog/daman-travel-guide">Daman</Link>, one
                    half of the Union Territory covered in our{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu travel guide
                    </Link>
                    , and it stands directly across the river from the
                    smaller, older{" "}
                    <Link href="/blog/nani-daman-travel-guide">
                      Nani Daman
                    </Link>{" "}
                    quarter, giving the two banks a distinctly different
                    character — one built around a fortress, the other
                    around a fishing harbour.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Moti Daman Fort at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Moti Daman, south bank of Daman Ganga",
                        },
                        {
                          icon: "🏗️",
                          label: "Built",
                          value: "From the 1550s–70s, Portuguese era",
                        },
                        {
                          icon: "🛡️",
                          label: "Also Known As",
                          value: "Fort of St. Jerome",
                        },
                        {
                          icon: "🧱",
                          label: "Bastions",
                          value: "10, along the full perimeter",
                        },
                        {
                          icon: "⛪",
                          label: "Inside the Walls",
                          value: "Bom Jesus Church, collectorate, old lanes",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Generally free, open town quarter",
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
                  <h2>Best Time to Visit Moti Daman Fort</h2>
                  <p>
                    Since most of a fort visit happens outdoors — walking
                    ramparts, standing beside cannon emplacements, taking in
                    sea views — the season you go in changes the experience
                    more than any opening hours ever will.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry mornings and evenings make walking the exposed ramparts genuinely pleasant. This is when the fort's stonework photographs best too, with clear light and low humidity.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, but doable early or late",
                        text: "Temperatures climb quickly and the laterite walls hold heat by midday. Visit at opening time or closer to sunset, and carry water — there's little shade along the bastions.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — atmospheric but slippery",
                        text: "Rain gives the old stone walls a moody, weathered look, but rampart surfaces and steps get slick. Fine for a shorter, more cautious visit; less ideal for a long, unhurried walk.",
                      },
                      {
                        season: "Sunset hour, any month",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best single hour to be there",
                        text: "The sea-facing bastions catch the evening light directly over the Daman Ganga estuary — arguably the single best hour to be inside the fort walls, any time of year.",
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
                    <strong>Our pick:</strong> A November-to-February
                    afternoon, timed so you're on the sea-facing ramparts as
                    the light softens toward sunset. Cool weather, clear air,
                    and the estuary at its most photogenic.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Fort (Within Daman Town)</h2>
                  <p>
                    Moti Daman Fort isn't a standalone monument out of town —
                    it sits right within Daman's built-up area, on the
                    southern bank of the Daman Ganga, which makes reaching it
                    straightforward once you're anywhere in the town.
                  </p>
                  <ul>
                    <li>
                      <strong>From Nani Daman:</strong> The fort is directly
                      across the Daman Ganga river from{" "}
                      <Link href="/blog/nani-daman-travel-guide">
                        Nani Daman
                      </Link>
                      , connected by a bridge — a short auto-rickshaw ride or
                      a walkable crossing depending on where you're starting
                      from.
                    </li>
                    <li>
                      <strong>By auto-rickshaw or taxi:</strong> The easiest
                      way to reach the fort's gates from anywhere in Daman;
                      drivers know it well since it also houses government
                      offices that see daily local traffic.
                    </li>
                    <li>
                      <strong>On foot:</strong> If you're already staying in
                      or near Moti Daman, the fort's gates and ramparts are
                      walkable — this is genuinely the best way to explore
                      once you're inside, since the internal lanes are narrow
                      and not really built for vehicles.
                    </li>
                    <li>
                      <strong>From Vapi railway station:</strong> Daman's
                      nearest railhead is Vapi, roughly 12 km away, from
                      where taxis and autos run into town and on to the fort
                      area.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ask your driver to drop you
                    at the fort's main gate rather than at a specific
                    landmark inside — from the gate, the ramparts and Bom
                    Jesus Church are both an easy, orienting walk in either
                    direction.
                  </div>
                </section>

                {/* ── Ramparts & Bastions ───────────────────────────────── */}
                <section id="ramparts-bastions">
                  <h2>The Ramparts and Ten Bastions</h2>
                  <p>
                    The fort's defining feature is its sheer scale of
                    fortification. A continuous run of thick laterite and
                    stone walls, punctuated by <strong>ten bastions</strong>,
                    rings the entire Moti Daman quarter — not a partial wall
                    or a single defensive face, but a complete enclosure. Each
                    bastion was positioned to cover the approaches to the
                    walls between it and its neighbours, a standard piece of
                    16th-century military engineering that, at this scale,
                    still reads clearly today.
                  </p>
                  <p>
                    Walking a stretch of rampart, the walls are noticeably
                    thick — built to absorb cannon fire, not just deter
                    scaling — and several of the bastions still hold their
                    original <strong>cannons</strong>, iron and bronze pieces
                    left more or less where they were mounted centuries ago.
                    They're not roped-off museum pieces; you can walk right
                    up to most of them, run a hand along the barrel, and get
                    a real sense of the angle and range they once covered.
                  </p>
                  <p>
                    Not every bastion is equally accessible or equally
                    intact — some stretches of wall are better maintained
                    than others, and a few sections abut buildings or
                    government land that limit how close you can get. But
                    enough of the perimeter is walkable that you can trace a
                    genuine sense of the fort's full outline, especially
                    along the sections nearest the river and the sea.
                  </p>
                  <blockquote>
                    What's striking isn't any single bastion — it's the
                    realisation, walking the walls, that this fortification
                    was built to enclose an entire functioning town, not just
                    protect a garrison. Few Portuguese forts on India's west
                    coast operate at this scale.
                  </blockquote>
                </section>

                {/* ── Bom Jesus Church ──────────────────────────────────── */}
                <section id="bom-jesus-church">
                  <h2>Bom Jesus Church Inside the Fort Walls</h2>
                  <p>
                    Tucked inside the fort's perimeter is{" "}
                    <strong>Bom Jesus Church</strong>, one of the genuine
                    highlights of a visit and, on its own merits, worth a
                    dedicated stop rather than a passing glance. Built in the
                    early 17th century as the fort's principal church, it's
                    one of the oldest churches in the wider Daman and Diu
                    region.
                  </p>
                  <p>
                    The church's biggest draw is its interior — a{" "}
                    <strong>gilded, ornately carved baroque altar</strong>{" "}
                    that stands in real contrast to the plain, defensive
                    stone outside the walls. Where the fort's exterior is all
                    function — thick walls, cannon emplacements, sightlines —
                    the church interior is pure ornament: gold leaf, carved
                    woodwork, and the kind of altar craftsmanship that
                    Portuguese colonial churches on India's west coast are
                    genuinely known for.
                  </p>
                  <p>
                    Bom Jesus Church remains an active place of worship, not
                    a roped-off historical exhibit, so time your visit with
                    that in mind — quiet hours outside of services are best
                    for taking in the altar and interior without disrupting
                    anyone at prayer.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Dress modestly before
                    stepping inside — covered shoulders and knees — and keep
                    phones on silent. It's a working church, and locals
                    appreciate visitors treating it that way.
                  </div>
                </section>

                {/* ── Administrative Quarter ────────────────────────────── */}
                <section id="administrative-quarter">
                  <h2>The Collectorate & Old Administrative Buildings</h2>
                  <p>
                    Beyond the church, a walk through Moti Daman Fort passes
                    a cluster of old Portuguese-era{" "}
                    <strong>administrative buildings</strong> — the offices
                    from which the colonial government once ran Daman's
                    affairs. Many of these structures are still standing and
                    still in use, which is part of what makes the fort feel
                    inhabited rather than preserved.
                  </p>
                  <p>
                    Today, part of the fort complex houses the{" "}
                    <strong>district collectorate</strong> — Daman's modern
                    seat of local government — occupying buildings that sit
                    inside the very walls the Portuguese built centuries
                    earlier. It's an unusual continuity: the fort has never
                    really stopped being an administrative centre, just under
                    different flags. Seeing government staff going about
                    routine business inside a 400-year-old fortification is
                    one of the small, genuinely interesting details of
                    visiting Moti Daman Fort rather than a fort that's been
                    frozen as a pure monument.
                  </p>
                  <p>
                    Because these buildings are active government offices,
                    treat them as you would any working institution — they
                    aren't open for casual sightseeing inside, though the
                    exteriors and the lanes around them are very much part of
                    the fort's walkable character.
                  </p>
                </section>

                {/* ── Sea-Facing Bastions ───────────────────────────────── */}
                <section id="sea-facing-bastions">
                  <h2>Sea-Facing Bastions & the Daman Ganga Estuary</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Coastal shoreline with waves meeting old stone fortifications, evocative of the estuary views from Moti Daman Fort's sea-facing bastions"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The bastions on the fort's western and northern faces
                    look directly out over the mouth of the{" "}
                    <strong>Daman Ganga estuary</strong>, where the river
                    meets the Arabian Sea. This stretch of the fort also
                    includes a <strong>lighthouse</strong>, a later addition
                    to the original fortification but one that fits naturally
                    into the fort's long history of watching the water —
                    first for enemy ships, later simply to guide them safely
                    in.
                  </p>
                  <p>
                    Standing on these ramparts, the view takes in fishing
                    boats moving in and out of the estuary, the opposite bank
                    where Nani Daman's harbour sits, and open sea beyond. It's
                    the most scenic single vantage point in the fort, and the
                    one place where the fort's original military purpose —
                    controlling the river mouth and coastline — is still
                    completely legible in the landscape.
                  </p>
                  <blockquote>
                    Every Portuguese fort on this coast was built to watch
                    the water. At Moti Daman Fort, that logic is still
                    visible: stand at the sea-facing bastions and you're
                    looking at exactly what the fort's builders were
                    guarding.
                  </blockquote>
                </section>

                {/* ── Photography ───────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Shoot the ramparts in soft light:</strong> Early
                      morning or the hour before sunset brings out the
                      texture of the laterite and stone walls far better than
                      harsh midday sun.
                    </li>
                    <li>
                      <strong>Frame the cannons at low angles:</strong>{" "}
                      Kneeling to shoot along a cannon's barrel toward the
                      sea gives a real sense of the sightline it once
                      covered.
                    </li>
                    <li>
                      <strong>Save the sea-facing bastions for sunset:</strong>{" "}
                      The estuary and the light over open water make this the
                      single best spot in the fort for a golden-hour shot.
                    </li>
                    <li>
                      <strong>Ask before photographing inside the church:</strong>{" "}
                      Bom Jesus Church is an active place of worship — check
                      it's an appropriate time before photographing the
                      altar, and avoid flash near anyone at prayer.
                    </li>
                    <li>
                      <strong>Wide shots from the gates:</strong> Standing
                      just inside one of the main gates and shooting back
                      along the wall gives the best sense of the fort's
                      scale, more than any single bastion close-up can.
                    </li>
                  </ul>
                </section>

                {/* ── Visiting Info ──────────────────────────────────────── */}
                <section id="visiting-info">
                  <h2>Entry & Visiting Practicalities</h2>
                  <p>
                    Because Moti Daman Fort is a living quarter of Daman town
                    rather than a fenced archaeological site, visiting it
                    works a little differently than a typical ticketed
                    monument — and it's worth being upfront and honest about
                    that.
                  </p>
                  <ul>
                    <li>
                      <strong>Access:</strong> Walking through the fort's
                      gates and along most of its lanes and ramparts is
                      generally free and open, in keeping with its status as
                      an inhabited town quarter rather than a cordoned
                      heritage site.
                    </li>
                    <li>
                      <strong>Hours:</strong> There's no single formal
                      "opening time" for the fort area as a whole since it's
                      a lived-in quarter — daylight hours are the practical
                      window for exploring comfortably, and Bom Jesus Church
                      has its own hours worth checking locally.
                    </li>
                    <li>
                      <strong>Restricted areas:</strong> Government office
                      buildings, including sections used by the collectorate,
                      are not open for casual entry — stick to the ramparts,
                      lanes, and church, which make up the bulk of what
                      there is to see anyway.
                    </li>
                    <li>
                      <strong>Footwear:</strong> Ramparts and old steps are
                      uneven stone, sometimes worn smooth — comfortable,
                      closed shoes make the walk considerably easier than
                      sandals.
                    </li>
                    <li>
                      <strong>Best pace:</strong> This isn't a site to rush
                      through in ten minutes — the value here is in walking a
                      real stretch of the walls, not just glimpsing a gate
                      from a passing vehicle.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>Note:</strong> Local arrangements around access
                    and any restricted sections can change — confirm current
                    conditions with your hotel or a local guide on the day of
                    your visit rather than relying solely on this or any
                    other online guide.
                  </div>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Visit Plan (1–1.5 Hours)</h2>
                  <p>
                    A focused visit to Moti Daman Fort doesn't need a full
                    day — here's a realistic plan that covers the highlights
                    without feeling rushed.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0–15 min",
                        title: "Enter Through the Main Gate",
                        color: "bg-amber-700",
                        activities: [
                          "Get oriented at the gate — note the wall's thickness up close",
                          "Take a first wide shot of the ramparts from inside",
                          "Head toward the nearest accessible bastion",
                        ],
                      },
                      {
                        day: "15–40 min",
                        title: "Walk the Ramparts & Bastions",
                        color: "bg-forest-600",
                        activities: [
                          "Walk a stretch of wall, stopping at 2–3 bastions",
                          "Look for the old cannons still mounted in place",
                          "Take in views over the surrounding lanes and rooftops",
                        ],
                      },
                      {
                        day: "40–60 min",
                        title: "Bom Jesus Church",
                        color: "bg-purple-600",
                        activities: [
                          "Step inside to see the gilded baroque altar",
                          "Take a quiet moment in the nave if it's not in use for a service",
                          "Photograph the exterior facade before moving on",
                        ],
                      },
                      {
                        day: "60–90 min",
                        title: "Sea-Facing Bastions & Estuary",
                        color: "bg-sky-600",
                        activities: [
                          "Walk to the western/northern ramparts facing the water",
                          "Take in the Daman Ganga estuary and the lighthouse",
                          "End the visit here if timed near sunset",
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
                    * If you're combining the fort with the rest of Moti
                    Daman's lanes and markets, budget extra time separately —
                    see our{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman neighbourhood guide
                    </Link>{" "}
                    for that fuller itinerary.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Visiting Moti Daman Fort itself is inexpensive by
                    design — the main costs are getting there and back, plus
                    whatever food or drink you pick up nearby.
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
                          ["Fort entry", "Free", "Free", "Free"],
                          [
                            "Auto-rickshaw, one-way to fort",
                            "₹50",
                            "₹100",
                            "₹250 (private taxi)",
                          ],
                          [
                            "Local guide (optional)",
                            "Skip",
                            "₹300–₹500",
                            "₹800+ (private guide)",
                          ],
                          [
                            "Snacks/drinks nearby",
                            "₹50",
                            "₹150",
                            "₹400 (sit-down cafe)",
                          ],
                          [
                            "Total for the fort visit",
                            "₹100–₹150",
                            "₹500–₹750",
                            "₹1,000+",
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
                    * Excludes accommodation and travel to Daman itself — see
                    our{" "}
                    <Link href="/blog/daman-travel-guide">
                      Daman travel guide
                    </Link>{" "}
                    for a full trip budget.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Wear closed, comfortable shoes:</strong> Uneven
                      stone ramparts and steps aren't sandal-friendly,
                      especially after rain.
                    </li>
                    <li>
                      <strong>Carry water:</strong> There's little shade
                      along the walls, and no guarantee of a vendor nearby
                      once you're deep into a rampart walk.
                    </li>
                    <li>
                      <strong>Time it for golden hour if you can:</strong> The
                      sea-facing bastions are dramatically better in soft,
                      late-afternoon light than at midday.
                    </li>
                    <li>
                      <strong>Dress modestly for the church:</strong> Bom
                      Jesus Church is active place of worship, not a museum —
                      covered shoulders and knees are appropriate.
                    </li>
                    <li>
                      <strong>Respect the working buildings:</strong> The
                      collectorate and other government offices inside the
                      walls aren't tourist attractions — admire the
                      exteriors, don't wander in.
                    </li>
                    <li>
                      <strong>Confirm access locally:</strong> Since the fort
                      isn't a formally ticketed monument, hours and any
                      restricted sections can vary — check with your hotel or
                      a local before planning your visit around a fixed time.
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
                          "Walk a real stretch of the ramparts, not just the gate",
                          "Step inside Bom Jesus Church for the gilded altar",
                          "Time the sea-facing bastions for sunset",
                          "Wear closed shoes for uneven stone surfaces",
                          "Carry water — shade is limited along the walls",
                          "Ask before photographing inside the church",
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
                          "Expect a fenced, single-ticket monument experience",
                          "Wander into the collectorate or other government offices",
                          "Visit the ramparts at peak midday heat in summer",
                          "Rush through in under half an hour",
                          "Use flash photography during a church service",
                          "Skip modest dress when entering Bom Jesus Church",
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
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Pair the fort with
                    the rest of the{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman quarter
                    </Link>{" "}
                    on one side of the river, and{" "}
                    <Link href="/blog/nani-daman-travel-guide">
                      Nani Daman
                    </Link>{" "}
                    on the other, for a fuller sense of how Daman's two
                    halves grew up around this single fortification.
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
                  "Moti Daman Fort",
                  "Fort of St. Jerome",
                  "Daman",
                  "Daman and Diu",
                  "Bom Jesus Church",
                  "Portuguese Heritage",
                  "Daman Ganga",
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

              <RelatedPostsGrid currentSlug="moti-daman-fort-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="moti-daman-fort-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
