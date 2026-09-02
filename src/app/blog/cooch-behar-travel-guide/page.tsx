// src/app/blog/cooch-behar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Cooch Behar Travel Guide: Palace & Royal Heritage",
  description:
    "Complete Cooch Behar guide — the Buckingham Palace-inspired royal palace, Madan Mohan Temple, Sagardighi, Rasmela, how to reach from Siliguri, and a full visit plan.",
  keywords:
    "Cooch Behar travel guide, Cooch Behar Palace, Victor Jubilee Palace, Madan Mohan Temple, Sagardighi, Rasmela festival, North Bengal, Cooch Behar to Siliguri, Dooars gateway, how to reach Cooch Behar",
  openGraph: {
    title: "Cooch Behar Travel Guide: Palace & Royal Heritage",
    description:
      "North Bengal's former princely capital — a Buckingham Palace-inspired royal residence, a placid central lake, and the gateway feel of the Dooars nearby.",
    url: "https://club.kudozz.in/blog/cooch-behar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/saheliyon.jpg",
        width: 1200,
        height: 630,
        alt: "Formal palace garden grounds evoking Cooch Behar Palace and its landscaped lawns in North Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooch Behar Travel Guide: Palace & Royal Heritage",
    description:
      "A Buckingham Palace-inspired royal residence, a placid central lake, and North Bengal's gateway feel toward the Dooars.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/cooch-behar-travel-guide",
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
          headline: "Cooch Behar Travel Guide: Palace & Royal Heritage",
          description:
            "Complete Cooch Behar guide — the Buckingham Palace-inspired royal palace, Madan Mohan Temple, Sagardighi, Rasmela, how to reach from Siliguri, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
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
            "@id": "https://club.kudozz.in/blog/cooch-behar-travel-guide",
          },
          keywords:
            "Cooch Behar, Cooch Behar Palace, Victor Jubilee Palace, Madan Mohan Temple, Sagardighi, Rasmela, North Bengal",
          about: {
            "@type": "Place",
            name: "Cooch Behar",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cooch Behar",
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
                name: "Cooch Behar",
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
    q: "How do I reach Cooch Behar?",
    a: "Cooch Behar has its own railway station with connections to Kolkata and other parts of North Bengal, though the most common approach is via New Jalpaiguri (NJP) or Siliguri, roughly 150km away, from where NBSTC buses and shared taxis run regularly. The nearest major airport is Bagdogra, near Siliguri.",
  },
  {
    q: "What is Cooch Behar Palace modelled on?",
    a: "Cooch Behar Palace, officially the Victor Jubilee Palace, was built in 1887 by Maharaja Nripendra Narayan in an Italian Renaissance-influenced style, reportedly inspired by Buckingham Palace after the Maharaja's visits to England. It's now protected and maintained by the Archaeological Survey of India as a museum open to the public.",
  },
  {
    q: "Is Cooch Behar a good base for visiting the Dooars?",
    a: "Yes — Cooch Behar sits close to the western edge of the Dooars and Jaldapara regions, making it a reasonable, less-touristy alternative base to Siliguri for travellers heading into North Bengal's forest and tea-country belt, though Siliguri and New Jalpaiguri remain the more common transport hubs.",
  },
  {
    q: "What is Rasmela?",
    a: "Rasmela is Cooch Behar's major annual fair, held around the Hindu festival of Rash Purnima (usually November), centred on the Madan Mohan Temple. It combines religious observance with a large regional trade fair, cultural performances, and folk traditions distinctive to the historic Koch kingdom, drawing visitors from across North Bengal.",
  },
  {
    q: "How many days should I spend in Cooch Behar?",
    a: "A single day is enough to see the palace, Madan Mohan Temple, and Sagardighi at a comfortable pace. Most travellers treat it as a stopover en route to or from the Dooars/Jaldapara region rather than a multi-day standalone destination.",
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
  { id: "introduction", title: "North Bengal's Royal Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Cooch Behar", level: 2 },
  { id: "landmarks", title: "Palace, Temple & Sagardighi", level: 2 },
  { id: "rasmela", title: "Rasmela & the Dooars Gateway", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CoochBeharGuidePage() {
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
              src="/images/destinations/udaipur/saheliyon.jpg"
              alt="Formal palace garden grounds evoking Cooch Behar Palace and its landscaped lawns in North Bengal"
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
                { label: "Cooch Behar", href: null },
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
                "Cooch Behar",
                "Royal Palace",
                "North Bengal",
                "Heritage",
                "Rasmela",
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
              Cooch Behar: Palace & Royal Heritage Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The former capital of a princely state that ruled North Bengal
              for centuries — a Buckingham Palace-inspired royal residence, a
              placid central lake, and an easy gateway feel toward the
              Dooars beyond.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "North Bengal, West Bengal",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>North Bengal's Royal Capital</h2>
                  <p>
                    <strong>Cooch Behar</strong>, in the northernmost reaches
                    of{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , was for centuries the capital of an independent
                    princely state ruled by the Koch dynasty, one of the
                    longest-surviving royal lineages in the region. The
                    kingdom retained a degree of autonomy even through the
                    Mughal and British colonial periods, only formally
                    merging with independent India in 1950 — a distinct
                    political history that set it apart from the rest of
                    Bengal for much of its existence.
                  </p>
                  <p>
                    That legacy is most visible in{" "}
                    <strong>Cooch Behar Palace</strong>, a grand
                    late-19th-century royal residence built in a style
                    reportedly inspired by Buckingham Palace, now maintained
                    as a museum by the Archaeological Survey of India. Around
                    it, a compact, unhurried town centres on the{" "}
                    <strong>Madan Mohan Temple</strong> and the placid
                    central lake of <strong>Sagardighi</strong>, with a quiet
                    civic character shaped by its former royal status.
                  </p>
                  <p>
                    Today Cooch Behar also functions as a natural, less
                    crowded gateway toward the forests and tea estates of the{" "}
                    <Link href="/blog/dooars-travel-guide">Dooars</Link> and
                    Jaldapara regions further north — a worthwhile stop for
                    travellers heading that way rather than only a
                    standalone destination.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>👑</span> Cooch Behar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North Bengal, West Bengal",
                        },
                        {
                          icon: "🚌",
                          label: "From Siliguri",
                          value: "~150km by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Cooch Behar Palace, Royal Heritage",
                        },
                        {
                          icon: "🎉",
                          label: "Festival",
                          value: "Rasmela (around Nov)",
                        },
                        {
                          icon: "🌲",
                          label: "Nearby",
                          value: "Dooars & Jaldapara",
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
                  <h2>Best Time to Visit Cooch Behar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable, with Rasmela usually falling within this window — the most pleasant time to explore the palace grounds and town on foot.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot and humid",
                        text: "Temperatures and humidity climb noticeably, making outdoor sightseeing less comfortable, though North Bengal stays somewhat cooler than the plains further south.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "North Bengal receives significant monsoon rainfall, which can affect road travel toward Cooch Behar and onward to the Dooars.",
                      },
                      {
                        season: "Around Nov",
                        emoji: "🎊",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Rasmela season",
                        text: "Cooch Behar's biggest annual fair, centred on the Madan Mohan Temple, draws large crowds from across the region — book ahead if visiting then.",
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
                    <strong>Our pick:</strong> October to March — cool,
                    comfortable, and, if timed right, overlapping with the
                    Rasmela fair in November.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Cooch Behar</h2>
                  <ul>
                    <li>
                      <strong>By Rail:</strong> Cooch Behar has its own
                      railway station with some direct connections, though
                      many travellers route via New Jalpaiguri (NJP), the
                      major regional rail hub, and continue on by road.
                    </li>
                    <li>
                      <strong>By Road:</strong> Roughly 150km from Siliguri,
                      with regular NBSTC (North Bengal State Transport
                      Corporation) buses and shared taxis making the journey
                      in about 3-4 hours.
                    </li>
                    <li>
                      <strong>By Air:</strong> Bagdogra Airport, near
                      Siliguri, is the nearest major airport, with onward
                      road travel required to reach Cooch Behar.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your trip also includes
                    the Dooars or Jaldapara, plan Cooch Behar as a stop along
                    that route rather than a separate out-and-back journey
                    from Siliguri.
                  </div>
                </section>

                {/* ── Landmarks ─────────────────────────────────────────── */}
                <section id="landmarks">
                  <h2>Palace, Temple & Sagardighi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/saheliyon.jpg"
                      alt="Landscaped palace grounds evoking Cooch Behar Palace's formal gardens"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Cooch Behar Palace (Victor Jubilee Palace)</h3>
                  <p>
                    Built in 1887 by Maharaja Nripendra Narayan and formally
                    named the Victor Jubilee Palace to mark Queen Victoria's
                    Golden Jubilee, this Italian Renaissance-influenced
                    residence was reportedly modelled in part on Buckingham
                    Palace following the Maharaja's visits to England. Its
                    grand central dome, symmetrical wings, and manicured
                    lawns make it the town's most visited site, now
                    maintained by the Archaeological Survey of India as a
                    museum with royal furnishings, portraits, and artefacts
                    from the Koch dynasty on display.
                  </p>
                  <h3>Madan Mohan Temple</h3>
                  <p>
                    Built in 1889 and dedicated to a form of Krishna
                    considered the royal family's tutelary deity, this temple
                    remains the spiritual centre of the town and the focal
                    point of the annual Rasmela fair, drawing devotees and
                    visitors from across North Bengal for its rituals and
                    festivities.
                  </p>
                  <h3>Sagardighi</h3>
                  <p>
                    A large, rectangular artificial lake at the heart of
                    town, originally excavated during the Koch dynasty's
                    reign, now surrounded by a landscaped park that serves as
                    Cooch Behar's main civic green space — a pleasant,
                    unhurried spot for an evening walk after a day of
                    sightseeing.
                  </p>
                </section>

                {/* ── Rasmela / Dooars Gateway ───────────────────────────── */}
                <section id="rasmela">
                  <h2>Rasmela & the Dooars Gateway</h2>
                  <p>
                    <strong>Rasmela</strong>, Cooch Behar's largest annual
                    event, is held around the Hindu festival of Rash Purnima
                    (usually falling in November) at the Madan Mohan Temple.
                    What began as a religious observance has grown into a
                    major regional trade fair, combining rituals, folk
                    performances, and stalls selling everything from
                    handicrafts to farm equipment — one of North Bengal's
                    most significant annual gatherings.
                  </p>
                  <p>
                    Cooch Behar's location also gives it a natural
                    "gateway" feel toward the forests, tea estates, and
                    wildlife sanctuaries of the wider{" "}
                    <Link href="/blog/dooars-travel-guide">Dooars</Link>{" "}
                    region further north and east — a quieter, less-touristy
                    alternative base to Siliguri for travellers heading that
                    way, even if Siliguri and New Jalpaiguri remain the more
                    established transport hubs for the region overall.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Cooch Behar</h2>
                  <p>
                    Accommodation is modest and functional, concentrated
                    around the town centre near the palace and Sagardighi.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Simple lodges near the bus stand",
                          "West Bengal Tourism guesthouses",
                          "Basic hotels in the town centre",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Standard hotels near Sagardighi",
                          "Business-style hotels with modern amenities",
                          "Guesthouses close to the palace grounds",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "👑",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Well-appointed business hotels",
                          "Heritage-style boutique stays",
                          "Comfortable resorts en route to the Dooars",
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
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Cooch Behar Palace",
                        color: "bg-amber-700",
                        activities: [
                          "Explore the palace museum and royal galleries",
                          "Walk the landscaped grounds and lawns",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Temple & Sagardighi",
                        color: "bg-forest-600",
                        activities: [
                          "Visit Madan Mohan Temple",
                          "Relax by the Sagardighi lake and park",
                          "Browse the local market area",
                        ],
                      },
                      {
                        day: "Onward",
                        title: "Toward the Dooars",
                        color: "bg-sky-600",
                        activities: [
                          "Continue by road toward Jaldapara or the wider Dooars region",
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
                    * Most travellers treat Cooch Behar as a one-day stop en
                    route to the{" "}
                    <Link href="/blog/dooars-travel-guide">Dooars</Link>{" "}
                    rather than a standalone multi-day destination.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Cooch Behar</h2>
                  <ul>
                    <li>
                      <strong>Bengali home-style meals:</strong> Simple,
                      well-cooked rice-fish-vegetable thalis at local
                      eateries around the town centre.
                    </li>
                    <li>
                      <strong>Rasmela food stalls:</strong> During the
                      November fair, food stalls around the temple grounds
                      serve regional snacks and sweets.
                    </li>
                    <li>
                      <strong>Local tea stalls:</strong> As with much of
                      North Bengal, simple roadside tea stalls are a good,
                      inexpensive way to pause between sights.
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
                            "₹600",
                            "₹2,500",
                            "₹6,000",
                          ],
                          ["Bus/taxi from Siliguri (round trip)", "₹400", "₹1,500", "₹3,000"],
                          ["Food/day", "₹300", "₹800", "₹1,800"],
                          [
                            "Palace entry",
                            "₹15–50",
                            "₹15–50",
                            "₹15–50",
                          ],
                          ["Local transport/day", "₹150", "₹400", "₹900"],
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
                    * Figures are per person, per day (transport fare is a
                    round-trip figure from Siliguri).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Cooch Behar</h2>
                  <ul>
                    <li>
                      <strong>Check the palace's weekly closure day:</strong>{" "}
                      Like most ASI-maintained monuments, it closes on a
                      fixed day each week — confirm before planning your
                      visit around it.
                    </li>
                    <li>
                      <strong>Book ahead during Rasmela:</strong>{" "}
                      Accommodation fills up quickly during the November
                      fair — plan early if visiting then.
                    </li>
                    <li>
                      <strong>Treat it as a stopover, not a
                      standalone trip:</strong> A single day covers the main
                      sights well — combine it with onward travel toward the
                      Dooars for a fuller itinerary.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is more
                      limited than in bigger North Bengal towns like
                      Siliguri.
                    </li>
                    <li>
                      <strong>Confirm bus schedules in advance:</strong>{" "}
                      NBSTC bus timings between Siliguri and Cooch Behar can
                      shift seasonally — check locally before travel.
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
                          "Check the palace's weekly closure day first",
                          "Walk the Sagardighi lake park at sunset",
                          "Book ahead if visiting during Rasmela",
                          "Combine with onward travel to the Dooars",
                          "Carry enough cash for the whole stay",
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
                          "Assume walk-in ATM access everywhere",
                          "Skip checking bus timings before travel",
                          "Plan more than a day for the town alone",
                          "Arrive during Rasmela without a booking",
                          "Expect Siliguri-level tourist infrastructure",
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
                    <strong>🗺️ Extend the trip:</strong> Continue from Cooch
                    Behar into the forests and tea country of the{" "}
                    <Link href="/blog/dooars-travel-guide">Dooars</Link>{" "}
                    before looping back through{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      the rest of North Bengal
                    </Link>
                    .
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
                  "Cooch Behar",
                  "West Bengal",
                  "Royal Palace",
                  "North Bengal",
                  "Heritage",
                  "Rasmela",
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

              <RelatedPostsGrid currentSlug="cooch-behar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="cooch-behar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
