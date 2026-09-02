// src/app/blog/bishnupur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bishnupur Travel Guide: Terracotta Temples & Baluchari",
  description:
    "Complete Bishnupur guide — the Malla dynasty's terracotta temples, Rasmancha, Baluchari sarees, the Bishnupur Gharana, how to reach from Kolkata, and a full visit plan.",
  keywords:
    "Bishnupur travel guide, Bishnupur terracotta temples, Rasmancha, Jor Bangla temple, Madan Mohan Temple, Shyam Rai Temple, Baluchari saree, Bishnupur Gharana, Malla dynasty, Bankura district, how to reach Bishnupur, West Bengal heritage",
  openGraph: {
    title: "Bishnupur Travel Guide: Terracotta Temples & Baluchari",
    description:
      "The former Malla dynasty capital famous for intricately carved terracotta temples, a distinct classical music tradition, and hand-woven Baluchari silk.",
    url: "https://club.kudozz.in/blog/bishnupur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Intricately carved stone temple architecture evoking Bishnupur's terracotta temple carvings",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishnupur Travel Guide: Terracotta Temples & Baluchari",
    description:
      "The Malla dynasty's terracotta temple capital — carved brick shrines, a distinct classical music tradition, and hand-woven Baluchari silk.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bishnupur-travel-guide",
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
          headline: "Bishnupur Travel Guide: Terracotta Temples & Baluchari",
          description:
            "Complete Bishnupur guide — the Malla dynasty's terracotta temples, Rasmancha, Baluchari sarees, the Bishnupur Gharana, how to reach from Kolkata, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/bishnupur-travel-guide",
          },
          keywords:
            "Bishnupur, terracotta temples, Rasmancha, Jor Bangla, Baluchari saree, Bishnupur Gharana, Malla dynasty, Bankura",
          about: {
            "@type": "Place",
            name: "Bishnupur",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bishnupur",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Bishnupur",
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
    q: "How do I reach Bishnupur from Kolkata?",
    a: "Bishnupur railway station is on the Kolkata-Bishnupur-Bankura rail line, roughly 200km from Howrah, with the journey taking about 4-5 hours by express train. By road, it's a similar 4-5 hour drive via NH2 and NH14 — most visitors go by train given the distance and road traffic through smaller towns.",
  },
  {
    q: "What makes Bishnupur's temples unique?",
    a: "Bishnupur's temples are built almost entirely from terracotta (fired brick and clay) rather than stone, a material choice driven by the region's alluvial soil and lack of accessible stone quarries. Malla dynasty rulers turned this practical constraint into an art form, covering entire temple facades in intricately carved panels depicting scenes from the Ramayana, Mahabharata, and everyday Bengali life — a style found nowhere else in India at this scale and density.",
  },
  {
    q: "What is a Baluchari saree and can I buy one in Bishnupur?",
    a: "Baluchari is a style of handwoven silk saree with elaborate pallu (end-piece) designs depicting mythological scenes, court life, or even trains and boats, woven directly into the fabric rather than embroidered. It carries a Geographical Indication (GI) tag as a product of the Bishnupur-Bankura region, and local weavers' cooperatives and shops in the town sell them directly, often at significantly better prices than in Kolkata.",
  },
  {
    q: "How many days should I spend in Bishnupur?",
    a: "One full day is enough to see the main temple cluster (Rasmancha, Jor Bangla, Madan Mohan, Shyam Rai, Keshta Rai) at an unhurried pace, with time left for a Baluchari weaving workshop visit. An overnight stay lets you add an early-morning temple visit before the day heats up and a side trip to Mukutmanipur.",
  },
  {
    q: "What is the best time to visit Bishnupur?",
    a: "October to March offers the most comfortable temperatures for walking between temple sites, most of which are outdoors and offer limited shade. Summers (April-June) get very hot on Bankura district's dry plains, and the monsoon, while cooling things down, can make the unpaved approaches to some temples muddy.",
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
  { id: "introduction", title: "The Malla Dynasty's Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bishnupur", level: 2 },
  { id: "temples", title: "The Terracotta Temples", level: 2 },
  { id: "music-crafts", title: "Music & Baluchari Weaving", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BishnupurGuidePage() {
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
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="Intricately carved stone temple architecture evoking Bishnupur's terracotta temple carvings"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Bishnupur", href: null },
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
                "Bishnupur",
                "Terracotta Temples",
                "Bankura",
                "Baluchari Saree",
                "Malla Dynasty",
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
              Bishnupur: Terracotta Temples & Baluchari Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Once the capital of the Malla dynasty, Bishnupur turned a lack
              of stone into an art form — brick temples carved so
              intricately they read like storybooks, alongside a distinct
              classical music tradition and India's most storied silk
              weaving town.
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
                  text: "Bankura district, West Bengal",
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
                  <h2>The Malla Dynasty's Capital</h2>
                  <p>
                    <strong>Bishnupur</strong>, in Bankura district of{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , served as the capital of the Malla dynasty for nearly a
                    thousand years, reaching its cultural and architectural
                    peak between the 17th and 18th centuries. Lacking access
                    to stone quarries, Malla rulers built their temples from
                    fired brick and terracotta instead — and rather than
                    treating that as a limitation, their artisans turned it
                    into one of India's most distinctive architectural
                    traditions, covering entire temple facades in carved
                    panels depicting scenes from the Ramayana, the
                    Mahabharata, courtly hunts, and everyday rural Bengali
                    life.
                  </p>
                  <p>
                    The town's legacy isn't only architectural. Bishnupur
                    also gave rise to its own distinct classical music
                    tradition, the <strong>Bishnupur Gharana</strong> of
                    Hindustani classical music, and remains one of India's
                    most important centres for <strong>Baluchari</strong>{" "}
                    silk weaving, a GI-tagged craft producing sarees with
                    elaborately woven mythological and courtly scenes.
                  </p>
                  <p>
                    Today, roughly 200km from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>,
                    Bishnupur is a compact, walkable town where temples,
                    weaving workshops, and quiet residential lanes sit
                    within easy reach of each other — a rewarding day trip
                    or overnight stop for anyone interested in Bengal's
                    pre-colonial history.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏺</span> Bishnupur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bankura district, West Bengal",
                        },
                        {
                          icon: "🚂",
                          label: "From Kolkata",
                          value: "~200km, 4-5 hr by train",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Terracotta Temples, Baluchari Silk",
                        },
                        {
                          icon: "🎶",
                          label: "Heritage",
                          value: "Bishnupur Gharana (music)",
                        },
                        {
                          icon: "🗺️",
                          label: "Dynasty",
                          value: "Malla (10th–19th century)",
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
                  <h2>Best Time to Visit Bishnupur</h2>
                  <p>
                    Since most of the temple sightseeing happens outdoors
                    and on foot, timing your trip around comfortable weather
                    matters more here than in most West Bengal
                    destinations.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather makes walking between the various temple clusters comfortable, and clear light is best for photographing the terracotta carvings.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot — avoid if possible",
                        text: "Bankura's dry plains heat up significantly, and the temples offer little shade during the midday hours.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green but muddy",
                        text: "The countryside turns lush and green, but unpaved approaches to some temple sites can get muddy, and heavy rain can disrupt a full day's plan.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🎭",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cultural season",
                        text: "Winter months often bring local cultural programmes celebrating the Bishnupur Gharana's classical music tradition — worth checking local listings before you go.",
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
                    <strong>Our pick:</strong> October to March — cool
                    enough for a full day of temple-hopping on foot, with
                    good light for photographing the carvings.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bishnupur</h2>
                  <ul>
                    <li>
                      <strong>By Train:</strong> Bishnupur railway station
                      sits on the Kolkata-Bishnupur-Bankura line, roughly
                      200km from Howrah, with express trains taking about
                      4-5 hours — the most comfortable option given the
                      distance.
                    </li>
                    <li>
                      <strong>By Road:</strong> A similar 4-5 hour drive from{" "}
                      <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                      via NH2 and NH14, though traffic through smaller towns
                      along the way can add time.
                    </li>
                    <li>
                      <strong>Getting around locally:</strong> Bishnupur's
                      temple cluster is compact enough to explore mostly on
                      foot, with cycle-rickshaws and autos available for
                      longer hops or for visiting the outlying weaving
                      villages.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> A composite ticket covering
                    entry to several of the main ASI-protected temples is
                    available at the ticket counter near Rasmancha — buy it
                    upfront rather than paying separately at each site.
                  </div>
                </section>

                {/* ── Temples ────────────────────────────────────────────── */}
                <section id="temples">
                  <h2>The Terracotta Temples</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Detailed carved temple facade evoking Bishnupur's terracotta panel work"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Rasmancha</h3>
                  <p>
                    Built around 1600 by King Bir Hambir, Rasmancha is
                    unusual among Bishnupur's monuments in being built of
                    laterite rather than terracotta brick, with a distinctive
                    pyramidal roof and rows of arched galleries. It was
                    constructed to house the deities of all the town's
                    temples during the annual Ras festival, when idols were
                    brought together for communal worship — a practice
                    unique to the site.
                  </p>
                  <h3>Jor Bangla Temple</h3>
                  <p>
                    Built in 1655, Jor Bangla ("twin-hut") gets its name from
                    its distinctive roof, mimicking the curved thatched huts
                    of rural Bengal in fired brick. Every inch of its
                    exterior walls is covered in relief carvings depicting
                    battle scenes, hunting expeditions, and episodes from the
                    Hindu epics, in some of the finest and best-preserved
                    terracotta work in the town.
                  </p>
                  <h3>Madan Mohan Temple</h3>
                  <p>
                    A later addition, built in 1694, dedicated to Krishna
                    and still an active place of worship today, distinguishing
                    it from several of the town's other temples now
                    maintained purely as monuments. Its carved panels focus
                    heavily on scenes from Krishna's life.
                  </p>
                  <h3>Shyam Rai & Keshta Rai Temples</h3>
                  <p>
                    Shyam Rai, built in 1643, is notable for its distinctive
                    pancharatna ("five-spired") architecture, a style that
                    later influenced temple design across Bengal. Nearby,
                    the smaller Keshta Rai temple rounds out the cluster —
                    together, these sites are best explored slowly over a
                    few hours, on foot, rather than rushed as a checklist.
                  </p>
                </section>

                {/* ── Music & Crafts ─────────────────────────────────────── */}
                <section id="music-crafts">
                  <h2>Music & Baluchari Weaving</h2>
                  <p>
                    Bishnupur's cultural legacy extends well beyond its
                    temples, into two living traditions still practiced in
                    the town today.
                  </p>
                  <ul>
                    <li>
                      <strong>Bishnupur Gharana:</strong> A distinct
                      tradition (or "school") of Hindustani classical vocal
                      music that developed under Malla royal patronage,
                      known for its emphasis on dhrupad-influenced singing —
                      still taught and performed locally, particularly
                      during winter cultural programmes.
                    </li>
                    <li>
                      <strong>Baluchari sarees:</strong> Handwoven silk
                      sarees famous for their elaborate pallu designs,
                      depicting mythological scenes, courtly processions, or
                      even trains and steamships, woven directly into the
                      fabric on traditional jacquard looms. The craft carries
                      a Geographical Indication (GI) tag tied specifically to
                      the Bishnupur-Bankura region.
                    </li>
                    <li>
                      <strong>Dalmadal Cannon:</strong> A massive 17th-century
                      iron cannon, associated in local legend with the town's
                      defence against Maratha raiders, still on display near
                      the temple cluster.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Buying Baluchari sarees
                    directly from weavers' cooperatives or workshops in
                    Bishnupur is typically significantly cheaper than buying
                    the same craft in Kolkata's city shops.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Bishnupur</h2>
                  <p>
                    Accommodation is modest but comfortable, concentrated in
                    the town centre near the temple cluster and along the
                    approach roads.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Simple lodges near the bus stand",
                          "West Bengal Tourism guesthouses",
                          "Family-run budget hotels",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Heritage-style guesthouses near the temples",
                          "Standard hotels in the town centre",
                          "Riverside lodges on the outskirts",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Boutique heritage resorts",
                          "Garden-set countryside properties",
                          "Upscale stays near Mukutmanipur",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1 Morning",
                        title: "The Main Temple Cluster",
                        color: "bg-amber-700",
                        activities: [
                          "Rasmancha and the Dalmadal Cannon",
                          "Jor Bangla and Shyam Rai temples",
                          "Madan Mohan Temple for an active-worship visit",
                        ],
                      },
                      {
                        day: "Day 1 Afternoon",
                        title: "Weaving & Crafts",
                        color: "bg-forest-600",
                        activities: [
                          "Visit a local Baluchari weaving workshop",
                          "Browse the town's silk and terracotta craft shops",
                        ],
                      },
                      {
                        day: "Day 2 (optional)",
                        title: "Mukutmanipur Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Half-day trip to the Mukutmanipur reservoir",
                          "Return to Bishnupur or onward to Kolkata",
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
                    * Many travellers combine Bishnupur with{" "}
                    <Link href="/blog/mukutmanipur-travel-guide">
                      Mukutmanipur
                    </Link>{" "}
                    for a fuller two-day loop from Kolkata.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Bishnupur</h2>
                  <ul>
                    <li>
                      <strong>Bengali thalis near the temple cluster:</strong>{" "}
                      Simple, home-style rice-fish-vegetable meals at local
                      eateries close to the main sites.
                    </li>
                    <li>
                      <strong>Mud-baked sweets:</strong> Bishnupur is known
                      for a local variety of clay-pot yoghurt and sweets sold
                      at small shops around town.
                    </li>
                    <li>
                      <strong>Roadside stalls:</strong> Simple snacks and tea
                      stalls cluster near the bus stand and railway station,
                      convenient between sightseeing stops.
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
                            "Accommodation/night",
                            "₹800",
                            "₹3,000",
                            "₹7,000",
                          ],
                          ["Train from Kolkata (round trip)", "₹500", "₹1,200", "₹2,000"],
                          ["Food/day", "₹350", "₹900", "₹2,000"],
                          [
                            "Temple composite ticket",
                            "₹50–100",
                            "₹50–100",
                            "₹50–100",
                          ],
                          ["Local transport/day", "₹150", "₹400", "₹1,000"],
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
                    * Figures are per person, per day (train fare is a
                    round-trip figure from Kolkata). Add a saree budget
                    separately if buying Baluchari silk.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Bishnupur</h2>
                  <ul>
                    <li>
                      <strong>Buy the composite temple ticket:</strong>{" "}
                      Covers entry to several ASI-protected sites in one
                      purchase near Rasmancha.
                    </li>
                    <li>
                      <strong>Wear comfortable walking shoes:</strong> The
                      temple cluster is best explored on foot over several
                      hours, much of it under open sky.
                    </li>
                    <li>
                      <strong>Visit a weaving workshop directly:</strong> For
                      the best prices and to see the Baluchari craft in
                      progress, seek out local weavers rather than only
                      shopping at retail stores.
                    </li>
                    <li>
                      <strong>Check for winter music programmes:</strong>{" "}
                      Local cultural events celebrating the Bishnupur Gharana
                      often run in the cooler months.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited
                      outside the main town centre.
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
                          "Buy the composite temple entry ticket",
                          "Explore the temple cluster slowly, on foot",
                          "Buy Baluchari silk directly from weavers",
                          "Visit Madan Mohan Temple for active worship",
                          "Combine with a Mukutmanipur day trip",
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
                          "Visit in peak summer heat without shade breaks",
                          "Rush the terracotta carvings — look closely",
                          "Assume ATMs are widely available",
                          "Skip the composite ticket and pay separately",
                          "Forget comfortable shoes for a lot of walking",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Bishnupur
                    with the reservoir scenery of{" "}
                    <Link href="/blog/mukutmanipur-travel-guide">
                      Mukutmanipur
                    </Link>{" "}
                    or Tagore's{" "}
                    <Link href="/blog/santiniketan-travel-guide">
                      Santiniketan
                    </Link>{" "}
                    before heading back to{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>.
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
                  "Bishnupur",
                  "Terracotta Temples",
                  "West Bengal",
                  "Bankura",
                  "Baluchari Saree",
                  "Malla Dynasty",
                  "Heritage",
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

              <RelatedPostsGrid currentSlug="bishnupur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bishnupur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
