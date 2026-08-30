// src/app/blog/diu-fort-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Diu Fort Travel Guide: History, Timings & Tips",
  description:
    "Diu Fort travel guide: 16th-century Portuguese history, the double-moat layout, cannons, lighthouse, entry timings, tickets, photo spots, and a visit plan.",
  keywords:
    "Diu Fort, Diu Fort history, Diu Fort timings, Diu Fort entry fee, Portuguese fort Diu, Diu Fort lighthouse, Diu Fort ticket price, Diu Fort sunset, Diu Fort photography, things to do in Diu",
  openGraph: {
    title: "Diu Fort Travel Guide: History, Timings & Tips",
    description:
      "A 16th-century Portuguese sea fort with a seawater-filled moat, original cannons, and one of the best sunset spots on India's west coast — the complete Diu Fort guide.",
    url: "https://club.kudozz.in/blog/diu-fort-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Portuguese-era fort walls overlooking the sea, evoking the coastal forts of Diu",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Diu Fort Travel Guide: History, Timings & Tips",
    description:
      "A 16th-century Portuguese sea fort with a seawater-filled moat, original cannons, and one of the best sunset spots on India's west coast.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/diu-fort-travel-guide",
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
          headline: "Diu Fort Travel Guide: History, Timings & Tips",
          description:
            "Diu Fort travel guide: 16th-century Portuguese history, the double-moat layout, cannons, lighthouse, entry timings, tickets, photo spots, and a visit plan.",
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
            "@id": "https://club.kudozz.in/blog/diu-fort-travel-guide",
          },
          keywords:
            "Diu Fort, Diu Fort history, Diu Fort timings, Diu Fort entry fee, Portuguese fort Diu, Diu Fort lighthouse",
          about: {
            "@type": "Place",
            name: "Diu Fort",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Diu",
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
                name: "Diu Fort",
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
    q: "What is the entry fee for Diu Fort?",
    a: "Diu Fort is a state-protected monument with a nominal entry fee — typically in the ₹15–₹50 range for Indian visitors, with a small additional charge if you want to climb the lighthouse inside the complex. Foreign nationals usually pay a somewhat higher but still modest fee. Rates are revised periodically, so it's worth confirming the current ticket price at the counter rather than relying on any figure quoted online.",
  },
  {
    q: "What is the history of Diu Fort?",
    a: "The Portuguese began building Diu Fort in 1535, shortly after securing a foothold on the island through a treaty with the Sultan of Gujarat, and expanded and reinforced it through the 1540s to 1570s as their hold on the western Indian coast grew more contested. It served as a key military and administrative stronghold for nearly 450 years of Portuguese rule in Diu, which lasted until 1961 — making it one of the longest-surviving European colonial forts in India.",
  },
  {
    q: "Is Diu Fort open at night?",
    a: "No. Diu Fort operates on daytime hours and closes by early evening, so it isn't open for night visits and the interior isn't illuminated after dark. Plan your visit for the late afternoon if you want to catch the sunset from the ramparts just before closing, rather than expecting an after-dark experience.",
  },
  {
    q: "How much time do I need for Diu Fort?",
    a: "Budget roughly 1 to 1.5 hours for a relaxed, unhurried visit — enough time to walk the ramparts, see the cannons and lighthouse, look into the old jail section, and take photographs. Photography enthusiasts or history buffs who want to read every plaque and linger for the light can easily stretch this to 2 hours.",
  },
  {
    q: "Can you climb the Diu Fort lighthouse?",
    a: "Yes, the old lighthouse within the fort complex is generally open to visitors, sometimes for a small additional ticket, and the climb rewards you with one of the best panoramic views of the fort's layout, the Arabian Sea, and Diu town. Access can occasionally be restricted for maintenance, so treat it as a likely highlight rather than a guaranteed one.",
  },
  {
    q: "Is Diu Fort suitable for elderly visitors or small children?",
    a: "It's manageable but not effortless — the fort has uneven stone surfaces, some narrow staircases (especially up to the lighthouse and along parts of the ramparts), and almost no shade. Elderly visitors and young children can comfortably see the main courtyard, moat and lower ramparts, but should skip the steeper lighthouse climb if mobility is a concern.",
  },
  {
    q: "How far is Diu Fort from Diu bus stand and the airport?",
    a: "Diu Fort sits at the eastern edge of Diu town, an easy 10–15 minute walk from the main bus stand and the old town's guesthouses. From Diu Airport, it's about 3–4 km, a short and inexpensive auto-rickshaw or taxi ride away.",
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
  { id: "introduction", title: "Diu Fort: A 500-Year Sentinel", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "layout-architecture", title: "Layout & Architecture", level: 2 },
  { id: "ramparts-views", title: "Ramparts & Sunset Views", level: 2 },
  { id: "old-jail", title: "The Old Jail", level: 2 },
  { id: "photography-tips", title: "Photography Tips", level: 2 },
  { id: "entry-timings", title: "Entry Timings & Tickets", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "nearby-sights", title: "Nearby Sights", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DiuFortGuidePage() {
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
              alt="Portuguese-era fort walls overlooking the sea, evoking the coastal forts of Diu"
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
                { label: "Diu Fort", href: null },
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
                "Diu Fort",
                "Diu",
                "Portuguese Heritage",
                "Sea Fort",
                "Sunset Point",
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
              Diu Fort Travel Guide: History, Timings & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 16th-century Portuguese sea fort with a seawater-filled moat,
              cannons still mounted on the ramparts, and one of the finest
              sunset views on India's west coast — everything you need to
              plan your visit to Diu Fort.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Diu, Daman & Diu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>Diu Fort: A 500-Year Sentinel Over the Arabian Sea</h2>
                  <p>
                    <strong>Diu Fort</strong> is the single most iconic
                    landmark in{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu
                    </Link>{" "}
                    — a sprawling, weathered sea fort built by the Portuguese
                    starting in <strong>1535</strong> on a rocky promontory at
                    the eastern end of Diu town, and steadily expanded through
                    the <strong>1540s to 1570s</strong> as Portuguese control
                    over the western Indian coastline grew more contested by
                    rival European powers and regional sultanates. Few
                    colonial-era sea forts in India survive in this kind of
                    condition — original cannons still sit in their
                    embrasures, the double-moat defences are largely intact,
                    and the old lighthouse still stands watch over the
                    Arabian Sea.
                  </p>
                  <p>
                    Where{" "}
                    <Link href="/blog/diu-travel-guide">our Diu town guide</Link>{" "}
                    covers the fort only in passing alongside Nagoa Beach, the
                    old town, and the rest of the island, this guide goes deep
                    on the fort itself — its history, its layout, exactly what
                    to look for inside, when to go, what it costs, and how to
                    plan your visit around one of the best sunset spots on
                    India's west coast.
                  </p>
                  <p>
                    Diu passed from local Gujarat Sultanate control to the
                    Portuguese by treaty in 1535, and the fort was raised
                    almost immediately after — a direct response to the very
                    real threat of an Ottoman-backed siege that came just a
                    few years later, in 1546. It held through that siege and
                    several subsequent ones, and remained the administrative
                    and military heart of Portuguese Diu for nearly 450 years,
                    right up until Portuguese rule in India ended in 1961 —
                    longer than almost anywhere else the Portuguese held on
                    the subcontinent.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Diu Fort at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "Eastern end, Diu town" },
                        { icon: "🏗️", label: "Built", value: "From 1535, Portuguese" },
                        { icon: "🌊", label: "Design", value: "Double moat, one seawater-filled" },
                        { icon: "🕰️", label: "Timings", value: "~8:30 AM – 6:30 PM, daily" },
                        { icon: "🎟️", label: "Entry Fee", value: "Nominal (~₹15–₹50)" },
                        { icon: "⏱️", label: "Visit Time", value: "1 – 1.5 hours" },
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
                  <h2>Best Time to Visit Diu Fort</h2>
                  <p>
                    Diu Fort has almost no shade across its courtyards and
                    ramparts, which makes the time of day and season matter
                    more here than at most monuments.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather (18–30°C) makes walking the exposed ramparts genuinely pleasant, even at midday. The best window for a leisurely visit and clear-sky photography.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — visit early or late",
                        text: "Stone surfaces and open ramparts get punishingly hot by midday. Stick to early morning or the two hours before closing.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — atmospheric but slippery",
                        text: "Rain and sea spray make the moat dramatic and the fort near-empty of tourists, but the old stone underfoot gets slick — watch your footing.",
                      },
                      {
                        season: "Evenings, year-round",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best light of the day",
                        text: "Regardless of season, the last 90 minutes before closing brings the softest light and the fort's best sunset views over the Arabian Sea.",
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
                    <strong>Our pick:</strong> Arrive about 90 minutes before
                    closing, any time from November to February. You get
                    cooler stone underfoot, softer light for photos, and a
                    front-row seat for sunset from the ramparts.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Diu Fort</h2>
                  <p>
                    Diu Fort sits right at the eastern edge of Diu town's old
                    quarter, and reaching it is the easiest part of the whole
                    trip — nothing on the island requires long-distance
                    transport once you've arrived.
                  </p>
                  <ul>
                    <li>
                      <strong>On foot:</strong> If you're staying anywhere in
                      Diu's old town or near the bus stand, the fort is a
                      10–15 minute walk — the most common way locals and
                      visitors alike get there.
                    </li>
                    <li>
                      <strong>By auto-rickshaw or taxi:</strong> From Diu
                      Airport (roughly 3–4 km away) or from beaches like{" "}
                      <Link href="/blog/nagoa-beach-travel-guide">
                        Nagoa Beach
                      </Link>{" "}
                      (about 8 km), an auto or taxi is a quick, inexpensive
                      ride.
                    </li>
                    <li>
                      <strong>By rented moped or bicycle:</strong> Diu island
                      is small enough that renting a moped for the day is the
                      most popular way to combine the fort with other sights
                      like the old town, Naida Caves, and{" "}
                      <Link href="/blog/gangeshwar-temple-travel-guide">
                        Gangeshwar Temple
                      </Link>
                      .
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Parking near the fort's main
                    gate is limited and informal — if you're on a moped, it's
                    usually easier to park a short walk away near the old
                    town and approach on foot.
                  </div>
                </section>

                {/* ── Layout & Architecture ─────────────────────────────── */}
                <section id="layout-architecture">
                  <h2>Layout & Architecture</h2>
                  <p>
                    What makes Diu Fort remarkable isn't just its age but how
                    much of its original defensive design survives intact.
                    The Portuguese built it on a rocky spit of land jutting
                    into the Arabian Sea, using the sea itself as a natural
                    defence on three sides and layering additional
                    fortifications on the fourth, landward side.
                  </p>
                  <ul>
                    <li>
                      <strong>The double-moat system:</strong> The fort's
                      defining feature is its two-moat design — an outer moat
                      filled directly with seawater, connected to the ocean,
                      and an inner dry moat behind it. An attacking force
                      would have had to cross both under fire from the walls
                      above, a serious deterrent that helped the fort survive
                      multiple sieges.
                    </li>
                    <li>
                      <strong>Bastions and ramparts:</strong> Thick stone
                      walls run in an irregular polygon around the complex,
                      punctuated by projecting bastions that gave defenders
                      overlapping fields of fire along every wall — standard
                      European fort design of the period, adapted to the
                      rocky coastal site.
                    </li>
                    <li>
                      <strong>Cannons:</strong> Genuine Portuguese-era
                      cannons remain mounted in several of the fort's
                      embrasures, still angled out toward the sea approach —
                      one of the more striking details for anyone interested
                      in colonial military history, and rare to see this
                      well preserved in India.
                    </li>
                    <li>
                      <strong>The old lighthouse:</strong> A lighthouse stands
                      within the fort complex, added later than the original
                      16th-century structure, and remains one of the best
                      vantage points on the island — when open, the climb up
                      offers a sweeping view over the fort's walls, the moat,
                      and the open sea.
                    </li>
                    <li>
                      <strong>A chapel within the walls:</strong> A small
                      chapel sits inside the fort complex, a reminder that
                      Portuguese forts of this era were never purely
                      military — garrison life revolved around both defence
                      and faith, and this chapel is one of the more intact
                      surviving structures inside.
                    </li>
                    <li>
                      <strong>The main gate and courtyards:</strong> A
                      fortified entrance, once reachable only by a drawbridge
                      over the moat, opens into a series of open courtyards
                      and roofless structures — much of the fort's interior
                      is now weathered ruin rather than furnished rooms,
                      which is part of its raw, atmospheric appeal.
                    </li>
                  </ul>
                </section>

                {/* ── Ramparts & Views ──────────────────────────────────── */}
                <section id="ramparts-views">
                  <h2>The Sea-Facing Ramparts & Sunset Views</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Waves meeting a rocky coastline at sunset, similar to the sea view from Diu Fort's ramparts"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Walking the outer ramparts is the single best reason to
                    visit Diu Fort, and it's not a formality — the walls sit
                    right at the edge of open water, with waves breaking
                    against the rocks directly below in places. There's
                    nothing between you and the horizon but the old stone
                    parapet and, occasionally, a cannon barrel.
                  </p>
                  <p>
                    The fort genuinely earns its reputation as one of Diu's
                    best sunset spots. As the light drops, the sea turns
                    gold and amber, the weathered stone of the bastions warms
                    in colour, and the silhouettes of the old cannons and
                    lighthouse make for some of the most photogenic minutes
                    the island has to offer. Because the fort has real
                    elevation in places — particularly near the lighthouse
                    and the taller bastions — you get a genuinely wide,
                    unobstructed sea view rather than a narrow slice of
                    coastline.
                  </p>
                  <blockquote>
                    Time your visit so you're on the seaward ramparts, not
                    still walking in through the gate, when the sun is about
                    30–40 minutes from setting — that's when the light and
                    the crowd thin out together.
                  </blockquote>
                </section>

                {/* ── Old Jail ──────────────────────────────────────────── */}
                <section id="old-jail">
                  <h2>The Old Jail & Prison Cells</h2>
                  <p>
                    Tucked within the fort complex is a section of old
                    prison cells, used during the Portuguese colonial period
                    and, notably, continuing to serve a custodial function
                    even after 1961 for a period, before eventually being
                    decommissioned. It's a smaller, quieter part of the
                    complex than the ramparts, but a genuinely evocative one
                    — bare cells, thick walls, and small barred openings that
                    make the fort's dual identity as both a military
                    stronghold and a place of confinement easy to picture.
                  </p>
                  <p>
                    It's not a large or elaborately presented section, and
                    there's minimal signage, so don't expect a museum-style
                    experience — but it's worth the short detour if you're
                    interested in the fort's fuller history rather than just
                    its photogenic ramparts.
                  </p>
                </section>

                {/* ── Photography Tips ──────────────────────────────────── */}
                <section id="photography-tips">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Golden hour on the ramparts:</strong> The last
                      hour before closing gives the best light for both wide
                      sea shots and close-ups of the weathered cannons and
                      stonework.
                    </li>
                    <li>
                      <strong>Shoot from the lighthouse level:</strong> If
                      it's open, the elevated vantage point gives you a
                      genuinely different composition — the moat, bastions,
                      and coastline laid out together in one frame.
                    </li>
                    <li>
                      <strong>Use the moat as foreground:</strong> The
                      seawater-filled outer moat, with the fort walls rising
                      behind it, makes for one of the most distinctive shots
                      on the island — arrive at high tide for the most
                      dramatic water level.
                    </li>
                    <li>
                      <strong>Watch your footing while composing shots:</strong>{" "}
                      Uneven, sometimes crumbling stone surfaces mean it's
                      worth glancing down as often as you look through the
                      viewfinder, especially near unguarded rampart edges.
                    </li>
                    <li>
                      <strong>Midday light is harsh — plan around it:</strong>{" "}
                      Between roughly 11 AM and 3 PM the light flattens
                      everything out; if you can only visit at midday,
                      prioritise the shaded interior sections and the jail
                      over the open ramparts.
                    </li>
                  </ul>
                </section>

                {/* ── Entry Timings & Tickets ────────────────────────────── */}
                <section id="entry-timings">
                  <h2>Entry Timings & Tickets</h2>
                  <p>
                    Diu Fort is generally open daily from around{" "}
                    <strong>8:30 AM to 6:30 PM</strong>, though exact hours
                    can shift slightly with the season and are worth
                    confirming locally, especially if you're planning a
                    sunset visit right up against closing time.
                  </p>
                  <p>
                    As a state-protected heritage monument, entry is charged
                    at a nominal rate — typically somewhere in the{" "}
                    <strong>₹15–₹50 range for Indian nationals</strong>, with
                    a modest additional charge for climbing the lighthouse
                    where applicable, and a somewhat higher (but still
                    inexpensive) rate for foreign nationals. These figures
                    are broadly representative of ASI and state-monument
                    pricing rather than an exact, currently verified number —
                    ticket rates are revised periodically, so treat the
                    counter price as final.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Carry small change for the
                    ticket counter and, if applicable, the separate
                    lighthouse ticket — card acceptance at monument counters
                    in small towns like Diu can be inconsistent.
                  </div>
                </section>

                {/* ── Suggested Visit Plan ──────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1–1.5 Hours)</h2>
                  <p>
                    The fort is compact enough to see properly without a
                    rigid schedule, but this rough sequence covers everything
                    worth seeing without backtracking too much.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0–15 min",
                        title: "Main Gate & Outer Moat",
                        color: "bg-amber-700",
                        activities: [
                          "Cross the old drawbridge approach over the moat",
                          "Take in the seawater-filled outer moat and walls",
                          "Enter through the fortified main gate",
                        ],
                      },
                      {
                        day: "15–40 min",
                        title: "Courtyards, Chapel & Cannons",
                        color: "bg-forest-600",
                        activities: [
                          "Explore the open courtyards and ruined interior structures",
                          "Visit the small chapel inside the complex",
                          "Look for the original Portuguese cannons in the embrasures",
                        ],
                      },
                      {
                        day: "40–55 min",
                        title: "The Old Jail",
                        color: "bg-stone-600",
                        activities: [
                          "Short detour to the old prison cells",
                          "Take in the contrast with the fort's military sections",
                        ],
                      },
                      {
                        day: "55–90 min",
                        title: "Ramparts, Lighthouse & Sunset",
                        color: "bg-sky-600",
                        activities: [
                          "Walk the sea-facing ramparts",
                          "Climb the lighthouse if open, for the best overview",
                          "Time your last 20–30 minutes for sunset light",
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
                    * History enthusiasts and photographers can comfortably
                    stretch this to 2 hours; if you're pairing the fort with
                    a full day of island sightseeing, 1 hour covers the
                    essentials.
                  </p>
                </section>

                {/* ── Nearby Sights ──────────────────────────────────────── */}
                <section id="nearby-sights">
                  <h2>Nearby Sights</h2>
                  <p>
                    The fort's location at the edge of Diu's old town means
                    a handful of the island's other highlights are within
                    easy reach, making it simple to combine with the rest of
                    your day.
                  </p>
                  <ul>
                    <li>
                      <strong>Panikotha (Sea Fort):</strong> A second, smaller
                      Portuguese fortification visible offshore from Diu
                      Fort's ramparts, built on a small island in the water
                      as an additional line of coastal defence. It's not
                      generally open for regular public access, but seeing
                      it from the ramparts — a fort looking out at another
                      fort — is one of the more memorable sightlines Diu
                      Fort offers.
                    </li>
                    <li>
                      <strong>St. Paul's Church:</strong> A striking
                      Portuguese Baroque church a short walk into the old
                      town, known for its ornately carved wooden facade — one
                      of the best-preserved colonial churches on the island
                      and an easy pairing with a fort visit.
                    </li>
                    <li>
                      <strong>Diu old town:</strong> Narrow lanes lined with
                      pastel Portuguese-era houses sit just beyond the fort's
                      landward approach, worth a wander either before or
                      after your visit.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/gangeshwar-temple-travel-guide">
                          Gangeshwar Temple
                        </Link>
                      </strong>
                      : A cluster of Shivlings sitting directly on the rocks
                      where waves crash over them, a short drive from the
                      fort and a genuinely unusual sight worth the detour.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/nagoa-beach-travel-guide">
                          Nagoa Beach
                        </Link>
                      </strong>
                      : If you want to follow up a morning at the fort with
                      an afternoon swim, Nagoa is Diu's best beach and about
                      20 minutes away by moped or auto.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown (Diu Fort Visit)</h2>
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
                          ["Fort entry ticket", "₹15–₹50", "₹15–₹50", "₹15–₹50"],
                          ["Lighthouse entry (if separate)", "₹10–₹30", "₹10–₹30", "₹10–₹30"],
                          [
                            "Transport to/from fort",
                            "Free (walk)",
                            "₹50–₹150 (auto)",
                            "₹300+ (private taxi)",
                          ],
                          [
                            "Guide (optional, local)",
                            "—",
                            "₹200–₹400",
                            "₹500+",
                          ],
                          [
                            "Approx. total for the visit",
                            "₹25–₹80",
                            "₹275–₹630",
                            "₹825+",
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
                    * Ticket prices are representative of typical
                    state-protected monument pricing and should be confirmed
                    at the counter. Diu Fort is genuinely one of the
                    cheapest major sights to visit anywhere in India.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Wear proper shoes:</strong> The fort's
                      surfaces are uneven, sometimes crumbling stone
                      throughout — sandals or flip-flops make the ramparts
                      genuinely uncomfortable and a little risky.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> There
                      is almost no shade anywhere in the complex, and no
                      shops or water points inside — carry what you need
                      before entering.
                    </li>
                    <li>
                      <strong>Mind rampart edges:</strong> Many sections of
                      the outer walls have no modern railing — keep a
                      sensible distance from the edge, especially with
                      children.
                    </li>
                    <li>
                      <strong>Avoid climbing on ruined structures:</strong>{" "}
                      Parts of the interior are genuinely fragile, centuries
                      old, and actively eroding — treat every wall and
                      archway as something to photograph, not something to
                      climb.
                    </li>
                    <li>
                      <strong>Go near closing time for sunset:</strong> The
                      light and the crowd both improve in the final hour
                      before the fort closes for the day.
                    </li>
                    <li>
                      <strong>Respect the monument:</strong> No graffiti,
                      no climbing on cannons, and no removing loose stones or
                      debris as souvenirs — it's a protected heritage site,
                      not a ruin free-for-all.
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
                          "Wear closed, comfortable walking shoes",
                          "Visit in the last hour before closing for sunset",
                          "Carry water — there are no shops inside",
                          "Look for the original cannons on the ramparts",
                          "Climb the lighthouse if it's open that day",
                          "Carry small change for the ticket counter",
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
                          "Wear sandals or flip-flops on the ramparts",
                          "Get close to unguarded rampart edges",
                          "Climb on cannons or ruined structures",
                          "Visit at midday in peak summer if avoidable",
                          "Expect the fort to be open or lit after dark",
                          "Leave graffiti or remove loose stones",
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
                    <strong>🗺️ Extend the trip:</strong> Diu Fort pairs
                    naturally with a full day exploring the rest of the
                    island — see our complete{" "}
                    <Link href="/blog/diu-travel-guide">Diu travel guide</Link>{" "}
                    for beaches, the old town, and a full itinerary, or the
                    broader{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu travel guide
                    </Link>{" "}
                    if you're planning a longer trip across the Union
                    Territory.
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
                  "Diu Fort",
                  "Diu",
                  "Daman and Diu",
                  "Portuguese Heritage",
                  "Sea Fort",
                  "Heritage Sites",
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

              <RelatedPostsGrid currentSlug="diu-fort-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="diu-fort-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
