// src/app/blog/badrinath-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Badrinath Travel Guide: Temple, Timings & How to Reach",
  description:
    "Complete Badrinath guide — temple opening dates, Tapt Kund, Mana village, Vasudhara Falls, how to reach via Joshimath, where to stay, and a full Char Dham visit plan.",
  keywords:
    "Badrinath, Badrinath temple, Char Dham, Badrinath opening date, Mana village, Tapt Kund, Vasudhara Falls, how to reach Badrinath, Joshimath, Badrinath yatra, Alaknanda river, Uttarakhand pilgrimage",
  openGraph: {
    title: "Badrinath Travel Guide: Temple, Timings & How to Reach",
    description:
      "One of the Char Dham and a Divya Desam of Lord Vishnu, set at 3,100m between the Nar and Narayan ranges — temple timings, Mana village, and how to plan the yatra.",
    url: "https://club.kudozz.in/blog/badrinath-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Badrinath temple's colourful facade set against snow-capped Himalayan peaks on the banks of the Alaknanda river",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Badrinath Travel Guide: Temple, Timings & How to Reach",
    description:
      "Temple opening dates, Tapt Kund, Mana village, and how to reach Badrinath via Joshimath — the complete guide.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/badrinath-travel-guide",
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
          headline: "Badrinath Travel Guide: Temple, Timings & How to Reach",
          description:
            "Complete Badrinath guide — temple opening dates, Tapt Kund, Mana village, Vasudhara Falls, how to reach via Joshimath, where to stay, and a full Char Dham visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
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
            "@id": "https://club.kudozz.in/blog/badrinath-travel-guide",
          },
          keywords:
            "Badrinath, Badrinath temple, Char Dham, Mana village, Tapt Kund, Joshimath, Alaknanda river",
          about: {
            "@type": "Place",
            name: "Badrinath",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand",
                item: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Badrinath",
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
    q: "When does Badrinath temple open and close each year?",
    a: "Badrinath temple opens in late April or early May and closes in early November, following a date set by temple authorities and religious tradition each year. The portals stay shut through winter because heavy snow makes the region inaccessible — always confirm exact dates for your travel year before planning, since they shift slightly year to year.",
  },
  {
    q: "What is Tapt Kund and do I need to bathe there?",
    a: "Tapt Kund is a natural hot sulphur spring right below the temple, on the banks of the Alaknanda. Pilgrims traditionally bathe here before entering Badrinath temple, both as a purification ritual and a genuinely welcome warm-up given the cold mountain air. It's optional but a deeply rooted part of the yatra experience.",
  },
  {
    q: "Is Mana village worth visiting from Badrinath?",
    a: "Yes — Mana, about 3km from Badrinath, is officially India's last village before the Tibet border and is easily combined with a Badrinath visit. It has Vyas Gufa (the cave associated with sage Vyasa), Bhim Pul (a natural rock bridge over the Saraswati river), and is the starting point for the Vasudhara Falls trek.",
  },
  {
    q: "How do I reach Badrinath — is there a train or flight directly there?",
    a: "No — Badrinath has no airport or railway station. The nearest airport is Jolly Grant in Dehradun (~317km) and the nearest railheads are Rishikesh and Haridwar (~295-325km). From any of these, the rest of the journey is by road via Joshimath, on mountain roads that can take 10-12 hours depending on conditions.",
  },
  {
    q: "Can I visit Badrinath and Kedarnath in one trip?",
    a: "Yes, this is one of the most common Char Dham combinations. They're roughly 220km apart by road (with no direct road link — you typically route via Rudraprayag), so most travellers budget a week or more to cover both comfortably along with the drive time between them.",
  },
  {
    q: "Is altitude sickness a concern at Badrinath?",
    a: "Badrinath sits at roughly 3,100m, high enough that some travellers feel mild symptoms — headache, breathlessness, fatigue — especially if they've travelled up quickly. It's rarely severe at this altitude, but staying hydrated, avoiding alcohol, and not overexerting on your first day are sensible precautions, particularly for older travellers or those with heart or lung conditions.",
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
  { id: "introduction", title: "A Seat of Lord Vishnu in the Himalayas", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Badrinath", level: 2 },
  { id: "attractions", title: "The Temple, Mana & Beyond", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BadrinathGuidePage() {
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
              src="/images/destinations/manali/hadimba-temple.jpg"
              alt="Badrinath temple's colourful facade set against snow-capped Himalayan peaks on the banks of the Alaknanda river"
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
                { label: "Uttarakhand", href: "/blog/uttarakhand-travel-guide" },
                { label: "Badrinath", href: null },
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
                "Badrinath",
                "Char Dham",
                "Vishnu Temple",
                "Mana Village",
                "Uttarakhand",
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
              Badrinath: Temple, Timings & Complete Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the Char Dham and a Divya Desam of Lord Vishnu, sitting
              at 3,100m between the Nar and Narayan ranges on the banks of
              the Alaknanda — temple timings, Mana village, Vasudhara Falls,
              and how to plan the yatra.
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
                  text: "Chamoli District, Uttarakhand",
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
                  <h2>A Seat of Lord Vishnu in the Himalayas</h2>
                  <p>
                    <strong>Badrinath</strong> is one of the four sites of the{" "}
                    <strong>Char Dham</strong> — the quartet of sacred
                    Himalayan pilgrimages in{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>{" "}
                    — and also one of the 108 Divya Desams, the holiest
                    Vishnu temples revered in Vaishnavite tradition. Set at
                    roughly 3,100 metres on the banks of the Alaknanda river,
                    flanked by the Nar and Narayan mountain ranges with
                    Neelkanth Peak rising behind, it is among the most
                    visited pilgrimage sites in the entire Himalaya.
                  </p>
                  <p>
                    Unlike Kedarnath or Yamunotri, Badrinath is reachable
                    almost entirely by motorable road — there's no trek
                    required to reach the temple itself, which makes it
                    accessible to a wider range of travellers, including
                    elderly pilgrims. What it does demand is a long mountain
                    drive, typically routed through{" "}
                    <Link href="/blog/rishikesh-adventure-travel-guide">
                      Rishikesh
                    </Link>{" "}
                    and Joshimath, and a genuine respect for its high
                    altitude and short operating season.
                  </p>
                  <p>
                    The temple's portals open for only about six months of
                    the year. For the rest, snow seals off the valley and the
                    deity's rituals are continued at Joshimath, the region's
                    winter seat — a rhythm that has shaped the pilgrimage
                    for centuries.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Badrinath at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Chamoli District, Uttarakhand",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~3,100m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Oct" },
                        {
                          icon: "🚪",
                          label: "Temple Open",
                          value: "Late Apr/May – Early Nov",
                        },
                        {
                          icon: "🕉️",
                          label: "Deity",
                          value: "Lord Vishnu (Badri Narayan)",
                        },
                        {
                          icon: "🚗",
                          label: "Access",
                          value: "Full road access, no trek",
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
                  <h2>Best Time to Visit Badrinath</h2>
                  <p>
                    Badrinath temple is only open for around six months a
                    year, so "best time" here really means choosing the
                    right window within that season rather than the whole
                    calendar.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May",
                        emoji: "🌨️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Reopening — cold & snowy",
                        text: "The portals reopen in late April or early May, but the higher reaches are often still under snow and temperatures can dip below freezing at night. Beautiful but genuinely cold.",
                      },
                      {
                        season: "Jun – Jul",
                        emoji: "🌦️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, but monsoon risk builds",
                        text: "Daytime temperatures become far more comfortable, though late July starts to bring monsoon rain that can trigger landslides on the approach roads.",
                      },
                      {
                        season: "Aug",
                        emoji: "🌧️",
                        color: "bg-red-50 border-red-200",
                        mood: "Peak monsoon — avoid if possible",
                        text: "The riskiest month for road travel in this region. Landslides and road closures on the Rishikesh–Joshimath stretch are common; delays should be expected.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best window — our pick",
                        text: "Monsoon clears, skies stay largely open, and mountain views are at their sharpest. Crowds are lighter than the June rush and roads are generally more stable.",
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
                    <strong>Our pick:</strong> September to mid-October —
                    clear post-monsoon skies, cooler but manageable
                    temperatures, and noticeably fewer crowds than the
                    June rush right after the temple reopens.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Badrinath</h2>
                  <p>
                    Badrinath has no airport and no railway station — every
                    route in ends with a long stretch of mountain road via
                    Joshimath.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> The nearest airport is Jolly
                      Grant in Dehradun, roughly 317km away — figure a full
                      day's onward drive from there.
                    </li>
                    <li>
                      <strong>By train:</strong> The nearest railheads are
                      Rishikesh and Haridwar, roughly 295-325km away.{" "}
                      <Link href="/blog/haridwar-travel-guide">
                        Haridwar
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/rishikesh-adventure-travel-guide">
                        Rishikesh
                      </Link>{" "}
                      are the two most common starting points for the road
                      journey and where most Char Dham taxis and buses
                      originate.
                    </li>
                    <li>
                      <strong>By road:</strong> From Rishikesh/Haridwar, it's
                      a 10-12 hour drive via Devprayag, Rudraprayag,
                      Karnaprayag, and Joshimath — often split into two days
                      with an overnight halt, most commonly at Joshimath
                      itself, which is also the gateway to{" "}
                      <Link href="/blog/auli-travel-guide">Auli</Link>.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Break the drive at Joshimath
                    rather than pushing through in one day — it lets you
                    acclimatise a little before Badrinath's higher altitude,
                    and gives you the option of a short Auli detour if time
                    allows.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>The Temple, Mana & Beyond</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Badrinath temple courtyard with pilgrims, framed by the Himalayan skyline"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Badrinath Temple & Tapt Kund</h3>
                  <p>
                    The temple's brightly painted facade, rebuilt several
                    times over the centuries, is one of the most recognisable
                    images of Himalayan pilgrimage. Most visitors bathe first
                    at <strong>Tapt Kund</strong>, a natural hot sulphur
                    spring on the riverbank right below the temple — a
                    tradition that doubles as a welcome warm-up in the cold
                    mountain air before joining the queue for darshan.
                  </p>
                  <h3>Mana Village</h3>
                  <p>
                    About 3km beyond Badrinath, <strong>Mana</strong> is
                    officially India's last inhabited village before the
                    Tibet border. It's an easy half-day add-on and home to{" "}
                    <strong>Vyas Gufa</strong>, a cave associated with the
                    sage Vyasa, and <strong>Bhim Pul</strong>, a dramatic
                    natural rock bridge said to have been placed by Bhima
                    across the Saraswati river for Draupadi to cross.
                  </p>
                  <h3>Vasudhara Falls</h3>
                  <p>
                    A roughly 5-6km round-trip trek from Mana leads to{" "}
                    <strong>Vasudhara Falls</strong>, a slender waterfall
                    plunging from a high rock face. The trail is largely
                    flat but at altitude, so pace yourself — it makes a
                    rewarding half-day trek for anyone with an extra day
                    at Badrinath.
                  </p>
                  <h3>Neelkanth Peak</h3>
                  <p>
                    Often called the "Garhwal Queen," Neelkanth's sharp,
                    pyramidal summit rises behind Badrinath and is visible
                    from the temple town on a clear morning — one of the
                    most photographed peaks in this part of the Himalaya.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Badrinath</h2>
                  <p>
                    Accommodation in Badrinath itself is functional and
                    pilgrimage-oriented — don't expect resort-style comfort.
                    Many travellers instead base themselves at Joshimath,
                    about 45km away, especially outside peak season.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛖",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Ashram-run dormitories near the temple",
                          "Basic pilgrim guesthouses",
                          "GMVN budget rooms",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "GMVN Tourist Rest House",
                          "Private hotels along the main market road",
                          "Joshimath mid-range hotels (45km away)",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🛏️",
                        range: "₹5,500–₹9,000/night",
                        picks: [
                          "Better-appointed private hotels in Badrinath",
                          "Joshimath's higher-end properties",
                          "Rooms with river or mountain views",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Rishikesh/Haridwar to Joshimath",
                        color: "bg-amber-700",
                        activities: [
                          "Early start from Rishikesh or Haridwar",
                          "Drive via Devprayag, Rudraprayag, Karnaprayag",
                          "Overnight halt at Joshimath",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Joshimath to Badrinath & Darshan",
                        color: "bg-sky-600",
                        activities: [
                          "Morning drive to Badrinath (~45km)",
                          "Bathe at Tapt Kund, temple darshan",
                          "Evening aarti at the temple",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Mana Village & Onward",
                        color: "bg-forest-600",
                        activities: [
                          "Morning trip to Mana village, Vyas Gufa, Bhim Pul",
                          "Optional Vasudhara Falls trek (half day)",
                          "Return drive toward Joshimath/Rudraprayag",
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
                    * Many pilgrims combine Badrinath with{" "}
                    <Link href="/blog/kedarnath-travel-guide">Kedarnath</Link>{" "}
                    as part of a wider Char Dham circuit — budget a week or
                    more if covering both.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Badrinath</h2>
                  <ul>
                    <li>
                      <strong>Temple langar and ashram kitchens:</strong>{" "}
                      Simple, wholesome vegetarian meals are widely available
                      near the temple, often at low cost or by donation.
                    </li>
                    <li>
                      <strong>Dhabas along the main market:</strong>{" "}
                      Straightforward North Indian thalis, parathas, and hot
                      chai — the standard fare for most pilgrims.
                    </li>
                    <li>
                      <strong>Joshimath eateries:</strong> A wider range of
                      restaurants if you're based there rather than in
                      Badrinath itself.
                    </li>
                  </ul>
                  <p>
                    Note that Badrinath, like the other Char Dham towns,
                    keeps a strictly vegetarian food culture out of respect
                    for the pilgrimage — don't expect meat or alcohol
                    anywhere near the temple town.
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
                          ["Accommodation/night", "₹1,000", "₹3,500", "₹7,500"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          [
                            "Taxi (Haridwar-Badrinath, round trip)",
                            "₹9,000",
                            "₹14,000",
                            "₹20,000",
                          ],
                          ["Local transport/pony hire", "₹200", "₹600", "₹1,200"],
                          ["Misc (offerings, permits)", "₹300", "₹600", "₹1,000"],
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
                    * Figures are per person, per day, except the taxi fare,
                    which is a full round-trip estimate for a shared or
                    private vehicle from Haridwar/Rishikesh.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Badrinath</h2>
                  <ul>
                    <li>
                      <strong>Confirm temple opening/closing dates every
                      year:</strong> These shift by a few days each year and
                      are announced closer to the season — check before
                      finalising travel dates.
                    </li>
                    <li>
                      <strong>Pack warm layers regardless of season:</strong>{" "}
                      Even in June, nights at 3,100m can dip close to
                      freezing, and weather can change fast.
                    </li>
                    <li>
                      <strong>Watch for landslides in the monsoon
                      shoulder:</strong> Late July and August carry real
                      risk of road closures on the Rishikesh-Joshimath
                      stretch — build slack into your itinerary.
                    </li>
                    <li>
                      <strong>Register for the yatra if required:</strong>{" "}
                      Uttarakhand authorities periodically require biometric
                      or online registration for Char Dham travel — check
                      current requirements before you leave.
                    </li>
                    <li>
                      <strong>Give yourself a day to acclimatise:</strong>{" "}
                      Breaking the journey at Joshimath rather than pushing
                      straight through reduces the risk of altitude-related
                      discomfort.
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
                          "Confirm the year's opening/closing dates ahead",
                          "Carry warm layers even in June",
                          "Break the drive with an overnight at Joshimath",
                          "Bathe at Tapt Kund before the temple queue",
                          "Add on Mana village and Vasudhara Falls",
                          "Carry cash — card access is limited",
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
                          "Travel without checking current road conditions",
                          "Push straight through without acclimatising",
                          "Expect meat or alcohol near the temple town",
                          "Skip warm clothing assuming it's summer",
                          "Ignore mild altitude symptoms on arrival",
                          "Rely solely on card payments in the mountains",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Badrinath
                    with{" "}
                    <Link href="/blog/kedarnath-travel-guide">Kedarnath</Link>{" "}
                    for a wider Char Dham loop, detour to{" "}
                    <Link href="/blog/auli-travel-guide">Auli</Link> from
                    Joshimath for Himalayan views and cable-car rides, or
                    start your journey from{" "}
                    <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                    — the traditional gateway for Char Dham pilgrims.
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
                  "Badrinath",
                  "Char Dham",
                  "Uttarakhand",
                  "Vishnu Temple",
                  "Joshimath",
                  "Pilgrimage",
                  "Alaknanda River",
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

              <RelatedPostsGrid currentSlug="badrinath-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="badrinath-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
