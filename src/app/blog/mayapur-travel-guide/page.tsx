// src/app/blog/mayapur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mayapur Travel Guide: ISKCON Temple & Visit Tips",
  description:
    "Complete Mayapur guide — ISKCON's global headquarters, the TOVP, Chandrodaya Mandir, Gaura Purnima, how to reach from Kolkata, where to stay, and a full visit plan.",
  keywords:
    "Mayapur, ISKCON Mayapur, Hare Krishna Mayapur, TOVP, Temple of the Vedic Planetarium, Chandrodaya Mandir, Nabadwip, Sri Chaitanya Mahaprabhu, Gaura Purnima, Mayapur how to reach, Krishnanagar, West Bengal pilgrimage",
  openGraph: {
    title: "Mayapur Travel Guide: ISKCON Temple & Visit Tips",
    description:
      "The global headquarters of ISKCON and birthplace of Sri Chaitanya Mahaprabhu — the TOVP, riverside ghats on the Hooghly, and a full Mayapur visit guide.",
    url: "https://club.kudozz.in/blog/mayapur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/rishikesh/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "Riverside spiritual town setting evocative of Mayapur's temples on the banks of the Hooghly (Ganga), West Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayapur Travel Guide: ISKCON Temple & Visit Tips",
    description:
      "ISKCON's global headquarters, the TOVP, and the birthplace of Sri Chaitanya Mahaprabhu — the complete Mayapur guide.",
    images: ["/images/destinations/rishikesh/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mayapur-travel-guide",
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
          headline: "Mayapur Travel Guide: ISKCON Temple & Visit Tips",
          description:
            "Complete Mayapur guide — ISKCON's global headquarters, the TOVP, Chandrodaya Mandir, Gaura Purnima, how to reach from Kolkata, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/rishikesh/rishikesh.jpg",
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
            "@id": "https://club.kudozz.in/blog/mayapur-travel-guide",
          },
          keywords:
            "Mayapur, ISKCON, TOVP, Chandrodaya Mandir, Nabadwip, Hare Krishna, Gaura Purnima",
          about: {
            "@type": "Place",
            name: "Mayapur",
            address: {
              "@type": "PostalAddress",
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
                name: "Mayapur",
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
    q: "What is Mayapur famous for?",
    a: "Mayapur is revered as the birthplace of Sri Chaitanya Mahaprabhu, the 15th-century saint who popularised congregational chanting (kirtan) of Krishna's names across Bengal. Today it is best known as the global headquarters of ISKCON (the International Society for Krishna Consciousness, or the Hare Krishna movement), and home to the under-construction Temple of the Vedic Planetarium (TOVP).",
  },
  {
    q: "What is the TOVP and is it finished?",
    a: "The Temple of the Vedic Planetarium is a vast domed temple being built by ISKCON in Mayapur, designed to become one of the largest religious monuments in the world on completion, with a planetarium-style presentation of Vedic cosmology inside. Construction has been ongoing for years and continues in phases — check current status before visiting, as parts of the complex may still be under scaffolding.",
  },
  {
    q: "How do I reach Mayapur from Kolkata?",
    a: "The most common route is by road, roughly 130 km and 3-3.5 hours via NH12 through Krishnanagar. By train, take a Sealdah-line service to Krishnanagar City Junction (about 15 km from Mayapur) or to Nabadwip Dham station, then a short taxi or auto-rickshaw, sometimes combined with a ferry crossing of the Hooghly from Nabadwip town.",
  },
  {
    q: "When is Gaura Purnima and why does it matter?",
    a: "Gaura Purnima is the full-moon day marking Sri Chaitanya Mahaprabhu's birth, usually falling in February or March depending on the lunar calendar. It is Mayapur's single biggest festival, drawing tens of thousands of pilgrims from India and abroad for days of kirtan, processions, and celebration — book accommodation months in advance if visiting during this window.",
  },
  {
    q: "Is Mayapur suitable for a day trip from Kolkata?",
    a: "Yes, though it's a long one — roughly 3-3.5 hours each way means a very early start and a late return. Most visitors who want time to properly explore the temple complex, the TOVP, and the riverside ghats without rushing prefer an overnight stay instead.",
  },
  {
    q: "Do I need to be a follower of ISKCON to visit Mayapur?",
    a: "Not at all. Mayapur welcomes visitors of all backgrounds and faiths. Guesthouses, the temple complex, and the prasadam dining halls are open to general travellers interested in the architecture, the philosophy, or simply a quieter, spiritually-oriented trip — though modest dress and respectful conduct inside temple areas are expected.",
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
  { id: "introduction", title: "ISKCON's Spiritual Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mayapur", level: 2 },
  { id: "attractions", title: "Temples & Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MayapurGuidePage() {
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
              src="/images/destinations/rishikesh/rishikesh.jpg"
              alt="Riverside spiritual town setting evocative of Mayapur's temples on the banks of the Hooghly (Ganga), West Bengal"
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
                { label: "Mayapur", href: null },
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
              {["Mayapur", "ISKCON", "TOVP", "Hare Krishna", "Pilgrimage"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mayapur: ISKCON Temple, TOVP & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The birthplace of Sri Chaitanya Mahaprabhu and the global
              headquarters of ISKCON — riverside temples, the monumental
              Temple of the Vedic Planetarium, and a spiritual town on the
              banks of the Hooghly, roughly 3 hours from Kolkata.
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
                  text: "Nadia District, West Bengal",
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
                  <h2>ISKCON's Spiritual Capital</h2>
                  <p>
                    <strong>Mayapur</strong> is one of the most significant
                    pilgrimage sites in Bengal Vaishnavism — revered as the
                    birthplace of <strong>Sri Chaitanya Mahaprabhu</strong>,
                    the 15th-century saint whose movement of devotional,
                    congregational chanting (kirtan) reshaped Hindu practice
                    across eastern India. Sitting on the eastern bank of the{" "}
                    <Link href="/blog/kolkata-travel-guide">Hooghly</Link>{" "}
                    river opposite the older pilgrim town of Nabadwip, Mayapur
                    is part of the wider Nadia district in{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , roughly 130 km north of Kolkata.
                  </p>
                  <p>
                    In the modern era, Mayapur has taken on a second identity:
                    it is the <strong>world headquarters of ISKCON</strong>{" "}
                    (the International Society for Krishna Consciousness),
                    better known internationally as the Hare Krishna
                    movement. Since the 1970s, ISKCON has built out a sprawling
                    campus here — temples, guesthouses, a Vedic-themed
                    museum, agricultural land, and its most ambitious project
                    yet, the Temple of the Vedic Planetarium (TOVP), planned
                    as one of the largest religious monuments on earth.
                  </p>
                  <p>
                    The result is a town that feels distinct from anywhere
                    else in Bengal — devotees from dozens of countries walking
                    the same riverside paths as local pilgrims, communal
                    chanting rising from the temple halls through the day,
                    and vegetarian prasadam dining shared by everyone who
                    visits, regardless of faith or background.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Mayapur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Nadia District, West Bengal",
                        },
                        {
                          icon: "🚗",
                          label: "From Kolkata",
                          value: "~130 km, 3-3.5 hr by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "ISKCON HQ, TOVP, Sri Chaitanya's Birthplace",
                        },
                        {
                          icon: "🌕",
                          label: "Biggest Event",
                          value: "Gaura Purnima (Feb/Mar)",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay",
                          value: "Guesthouses & ashram accommodation",
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
                  <h2>Best Time to Visit Mayapur</h2>
                  <p>
                    Mayapur is a year-round pilgrimage destination, but
                    Bengal's climate and the town's biggest festival both
                    shape when it's most rewarding to visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable for temple visits and walking the riverside ghats. The most popular window for both domestic and international devotees.",
                      },
                      {
                        season: "Feb / Mar",
                        emoji: "🌕",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Gaura Purnima — peak pilgrimage",
                        text: "The single biggest event on Mayapur's calendar, marking Sri Chaitanya Mahaprabhu's birth. Tens of thousands of pilgrims arrive; book stays months ahead.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, humid",
                        text: "Bengal's summer heat is intense and taxing for temple-hopping through the day; visits are best kept to early morning and evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional flooding",
                        text: "Heavy rain can affect road travel and the river ferry crossing from Nabadwip; the town itself remains functional but travel takes longer.",
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
                    <strong>Our pick:</strong> late October through February
                    for pleasant weather and manageable crowds — or plan
                    deliberately around Gaura Purnima if you want to
                    experience Mayapur's biggest festival, accepting the
                    much larger crowds that come with it.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mayapur</h2>
                  <p>
                    Mayapur has no airport or major railway station of its
                    own — most visitors arrive from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link> by
                    road or a combination of train and short road/ferry legs.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Kolkata:</strong> The most direct
                      option — roughly 130 km via NH12 through Krishnanagar,
                      taking about 3 to 3.5 hours by car or bus depending on
                      traffic.
                    </li>
                    <li>
                      <strong>By train to Krishnanagar City Junction:</strong>{" "}
                      Regular Sealdah-line trains connect Kolkata to
                      Krishnanagar, roughly 15 km from Mayapur, from where
                      taxis and auto-rickshaws cover the final stretch.
                    </li>
                    <li>
                      <strong>By train to Nabadwip Dham:</strong> An
                      alternative route lands you in Nabadwip, the historic
                      town directly across the Hooghly from Mayapur. From
                      here, a short ferry crossing (or the road bridge
                      further downstream) brings you into Mayapur itself —
                      the ferry crossing is a memorable way to arrive.
                    </li>
                    <li>
                      <strong>Getting around Mayapur:</strong> The ISKCON
                      campus and surrounding town are walkable or a short
                      cycle-rickshaw ride apart; most guesthouses are within
                      easy reach of the main temple.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If travelling during Gaura
                    Purnima, arrange transport and accommodation weeks in
                    advance — roads into Mayapur get heavily congested and
                    guesthouses fill up fast.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Temples & Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/rishikesh/rishikesh.jpg"
                      alt="Riverside temple town atmosphere similar to Mayapur's ISKCON campus on the Hooghly"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Temple of the Vedic Planetarium (TOVP)</h3>
                  <p>
                    Mayapur's landmark project — a vast domed temple under
                    long-running construction by ISKCON, intended to become
                    one of the largest religious monuments in the world once
                    complete. Inside, a planetarium-style installation will
                    present Vedic cosmology alongside deity worship halls.
                    Construction proceeds in phases, so parts of the complex
                    may be under scaffolding on any given visit — check
                    current status before you go, but even a partial visit is
                    worth the detour for the sheer scale of the project.
                  </p>
                  <h3>Chandrodaya Mandir</h3>
                  <p>
                    The existing main temple complex at the heart of the
                    ISKCON campus, home to the deities worshipped daily by
                    resident devotees and visiting pilgrims alike. Arti
                    ceremonies here run several times a day, open to all
                    visitors, and are among the most atmospheric experiences
                    in Mayapur — call-and-response kirtan, incense, and
                    drums filling the temple hall.
                  </p>
                  <h3>Srila Prabhupada's Samadhi & Yoga Pith</h3>
                  <p>
                    The Yoga Pith marks the site traditionally identified as
                    the birthplace of Sri Chaitanya Mahaprabhu, a quieter and
                    more contemplative spot than the main temple. Nearby, the
                    samadhi (memorial shrine) of ISKCON's founder-acharya, A.
                    C. Bhaktivedanta Swami Prabhupada, draws devotees paying
                    respects to the movement's modern founder.
                  </p>
                  <h3>Riverside Ghats & Nabadwip Crossing</h3>
                  <p>
                    The ghats along the Hooghly give Mayapur its quieter,
                    more contemplative side — a good place for an early
                    morning or sunset walk away from the temple crowds.
                    Boats ferry pilgrims across to Nabadwip, itself an
                    ancient centre of Bengali learning and devotion with its
                    own cluster of temples worth a half-day detour if time
                    allows.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mayapur</h2>
                  <p>
                    Accommodation in Mayapur is overwhelmingly ashram-style
                    and guesthouse-based, run either directly by ISKCON or by
                    smaller private lodges catering to pilgrims — there is
                    little in the way of conventional hotel chains here.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛖",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Ashram-run dormitories",
                          "Simple pilgrim guesthouses",
                          "Shared-room lodges near the campus",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,500/night",
                        picks: [
                          "Private rooms in ISKCON guesthouses",
                          "Independent lodges with attached baths",
                          "Family-friendly guesthouse suites",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🛏️",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Air-conditioned guesthouse rooms",
                          "Larger multi-room suites for groups",
                          "Guesthouses closer to the TOVP complex",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * During Gaura Purnima, guesthouses fill months in
                    advance — book as early as possible if visiting for the
                    festival.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Main Temple Complex",
                        color: "bg-amber-700",
                        activities: [
                          "Morning arrival from Kolkata, check in",
                          "Visit Chandrodaya Mandir for midday arti",
                          "Explore the TOVP construction site and grounds",
                          "Evening kirtan and prasadam dinner",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Yoga Pith, Ghats & Nabadwip",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning walk to Yoga Pith and Prabhupada's samadhi",
                          "Riverside ghats along the Hooghly",
                          "Ferry crossing to Nabadwip for its older temples",
                          "Return to Mayapur or onward to Kolkata",
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
                    * Some travellers combine Mayapur with a trip further
                    into Bengal — see our{" "}
                    <Link href="/blog/murshidabad-travel-guide">
                      Murshidabad guide
                    </Link>{" "}
                    for a historic detour a couple of hours further north.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mayapur</h2>
                  <ul>
                    <li>
                      <strong>Temple prasadam halls:</strong> The heart of
                      Mayapur's dining culture — vegetarian meals blessed as
                      offerings, served at set times in large communal
                      halls, open to all visitors regardless of faith.
                    </li>
                    <li>
                      <strong>Guesthouse dining rooms:</strong> Most
                      guesthouses run their own simple vegetarian kitchens
                      for guests, typically thali-style Bengali vegetarian
                      fare.
                    </li>
                    <li>
                      <strong>Small local eateries:</strong> A handful of
                      basic vegetarian cafés and stalls near the campus
                      serve snacks, tea, and simple meals through the day.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Note:</strong> Mayapur is entirely vegetarian —
                    no meat, fish, egg, onion, or garlic is served anywhere
                    on or around the ISKCON campus, in keeping with Vaishnava
                    dietary principles.
                  </div>
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
                          ["Accommodation/night", "₹700", "₹2,200", "₹5,500"],
                          [
                            "Road transport (round trip)",
                            "₹800",
                            "₹2,000",
                            "₹4,000",
                          ],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          [
                            "Local transport/day",
                            "₹150",
                            "₹300",
                            "₹600",
                          ],
                          ["Donations/offerings", "₹100+", "₹500+", "₹1,000+"],
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
                    * Figures are per person, per day (except road transport,
                    a round-trip figure from Kolkata). Donations are entirely
                    optional and vary widely.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mayapur</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> Cover shoulders and
                      knees inside temple areas — this is a working
                      spiritual campus, not a tourist attraction, and dress
                      norms are taken seriously.
                    </li>
                    <li>
                      <strong>Time your visit around arti:</strong> The daily
                      arti ceremonies at Chandrodaya Mandir are Mayapur's
                      most atmospheric moments — check the schedule at your
                      guesthouse on arrival.
                    </li>
                    <li>
                      <strong>Book early for Gaura Purnima:</strong>{" "}
                      Accommodation and transport both get extremely tight
                      around this festival — plan months, not weeks, ahead.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited
                      compared to Kolkata; withdraw what you'll need before
                      travelling out.
                    </li>
                    <li>
                      <strong>Expect an entirely vegetarian trip:</strong> No
                      meat, fish, or egg is available anywhere near the
                      campus — plan your meals accordingly.
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
                          "Dress modestly inside temple areas",
                          "Attend at least one arti ceremony",
                          "Try the temple prasadam dining halls",
                          "Book ahead for Gaura Purnima season",
                          "Take the ferry across to Nabadwip if time allows",
                          "Carry enough cash for your stay",
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
                          "Expect meat, fish, or egg anywhere near the campus",
                          "Wear revealing clothing inside the temples",
                          "Assume walk-in rooms during Gaura Purnima",
                          "Rely heavily on ATMs in town",
                          "Rush the TOVP visit — take time to appreciate the scale",
                          "Forget to check current construction access at the TOVP",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Mayapur with
                    the palaces and history of{" "}
                    <Link href="/blog/murshidabad-travel-guide">
                      Murshidabad
                    </Link>{" "}
                    further north, or return to{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                    for onward travel — see our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
                    </Link>{" "}
                    for more pilgrimage and heritage stops across the state.
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
                  "Mayapur",
                  "ISKCON",
                  "West Bengal",
                  "Nabadwip",
                  "Hare Krishna",
                  "Pilgrimage",
                  "TOVP",
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

              <RelatedPostsGrid currentSlug="mayapur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mayapur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
