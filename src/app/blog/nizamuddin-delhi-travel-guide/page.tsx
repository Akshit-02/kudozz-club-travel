// src/app/blog/nizamuddin-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nizamuddin Travel Guide: Dargah, Qawwali & Tomb",
  description:
    "Nizamuddin travel guide to Hazrat Nizamuddin Dargah, Thursday qawwali, Humayun's Tomb, Ghalib's grave, Sunder Nursery, basti food, and visitor etiquette.",
  keywords:
    "Nizamuddin Delhi, Hazrat Nizamuddin Dargah, Nizamuddin qawwali, Nizamuddin Auliya, Thursday qawwali Delhi, Nizamuddin Basti, Humayun's Tomb, Ghalib tomb Delhi, Sunder Nursery, Amir Khusrau tomb, Nizamuddin heritage walk, Sufi shrine Delhi",
  openGraph: {
    title: "Nizamuddin Travel Guide: Dargah, Qawwali & Tomb",
    description:
      "A living Sufi shrine, Thursday qawwali, and Humayun's Tomb next door — the complete guide to Nizamuddin, one of Delhi's most spiritually alive neighbourhoods.",
    url: "https://club.kudozz.in/blog/nizamuddin-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Red sandstone fort walls at golden hour, evoking the Mughal-era architecture found around Delhi's Nizamuddin Dargah and Humayun's Tomb",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nizamuddin Travel Guide: Dargah, Qawwali & Tomb",
    description:
      "A living Sufi shrine, Thursday qawwali, and Humayun's Tomb next door — the complete guide to Nizamuddin, Delhi.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nizamuddin-delhi-travel-guide",
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
          headline: "Nizamuddin Travel Guide: Dargah, Qawwali & Tomb",
          description:
            "Nizamuddin travel guide to Hazrat Nizamuddin Dargah, Thursday qawwali, Humayun's Tomb, Ghalib's grave, Sunder Nursery, basti food, and visitor etiquette.",
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
            "@id": "https://club.kudozz.in/blog/nizamuddin-delhi-travel-guide",
          },
          keywords:
            "Nizamuddin Delhi, Hazrat Nizamuddin Dargah, Nizamuddin qawwali, Nizamuddin Auliya, Thursday qawwali Delhi, Humayun's Tomb, Ghalib tomb Delhi, Sunder Nursery",
          about: {
            "@type": "Place",
            name: "Nizamuddin",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nizamuddin",
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
                name: "Nizamuddin",
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
    q: "Is Nizamuddin Dargah open to non-Muslims?",
    a: "Yes. Hazrat Nizamuddin Dargah welcomes visitors of every faith, and it's common to see people of all backgrounds sitting quietly in the courtyard or listening to qawwali. The inner sanctum around the saint's grave is more tightly managed and, at points, gender-segregated, but the shrine as a whole is open and — during Thursday qawwali — genuinely one of the most inclusive religious spaces in Delhi.",
  },
  {
    q: "What day is qawwali performed at Nizamuddin Dargah?",
    a: "Qawwali is sung every Thursday evening after sunset, year-round, as it has been for generations — Thursday (the eve of the Muslim holy day) is considered especially auspicious at Sufi shrines. Shorter qawwali sessions sometimes happen on other evenings too, but Thursday night is the main, most reliably scheduled performance and the one most visitors plan around.",
  },
  {
    q: "Is Humayun's Tomb near Nizamuddin Dargah?",
    a: "Yes — Humayun's Tomb is only about a 10–15 minute walk from the dargah, on the other side of Mathura Road, and the two are often visited together in a single half-day. Sunder Nursery, a restored Mughal-era garden with several smaller monuments, sits directly between them and makes a natural stop on the way.",
  },
  {
    q: "What should I wear to visit Nizamuddin Dargah?",
    a: "Modest, conservative clothing that covers shoulders and knees for everyone, and a headscarf for women (available to borrow or buy cheaply near the entrance if you don't have one). Shoes must be removed before entering the shrine complex — inexpensive, guarded shoe-storage stalls line the approach lane, or you can simply carry a pair of socks.",
  },
  {
    q: "Do I need to pay to enter Nizamuddin Dargah?",
    a: "There's no entry fee. Donations (nazr) are entirely voluntary, though you'll likely be offered flower petals, chadar (ceremonial cloth for the grave), or a guided walk-through for a fee by people at the entrance — none of this is compulsory, and it's fine to politely decline and simply pay respects on your own terms.",
  },
  {
    q: "How much time should I budget for Nizamuddin and Humayun's Tomb together?",
    a: "A comfortable half-day — roughly 3 to 4 hours — covers the dargah, a short basti walk, and Humayun's Tomb at an unhurried pace. Add another hour if you want to properly explore Sunder Nursery, or a full evening if your visit is timed around the Thursday qawwali, which usually runs well into the night.",
  },
  {
    q: "Is Nizamuddin Basti safe to walk through?",
    a: "Yes, generally — it's a dense, working residential neighbourhood with narrow lanes, and like anywhere crowded, it pays to keep valuables secure and be mindful during peak Thursday evening crowds. Guided heritage walks run by local trusts are a good option for first-time visitors who'd rather navigate the basti with context than alone.",
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
  { id: "introduction", title: "A Living Sufi Shrine", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nizamuddin", level: 2 },
  { id: "dargah", title: "Hazrat Nizamuddin Dargah", level: 2 },
  { id: "qawwali", title: "Thursday Evening Qawwali", level: 2 },
  { id: "humayuns-tomb", title: "Humayun's Tomb", level: 2 },
  { id: "ghalib-tomb", title: "Ghalib's Tomb & the Basti Graves", level: 2 },
  { id: "sunder-nursery", title: "Sunder Nursery", level: 2 },
  { id: "heritage-walk", title: "The Nizamuddin Basti Heritage Walk", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips & Etiquette", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NizamuddinGuidePage() {
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
              alt="Red sandstone fort walls at golden hour, evoking the Mughal-era architecture found around Delhi's Nizamuddin Dargah and Humayun's Tomb"
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
                { label: "Nizamuddin", href: null },
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
                "Nizamuddin",
                "Delhi",
                "Sufi Shrine",
                "Qawwali",
                "Humayun's Tomb",
                "Heritage Walk",
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
              Nizamuddin Travel Guide: Dargah, Qawwali & Humayun's Tomb
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 700-year-old Sufi shrine still alive with devotion every
              single day, Thursday nights filled with qawwali, and one of
              Mughal India's finest tombs a short walk away — Nizamuddin is
              one of Delhi's most spiritually alive neighbourhoods.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Nizamuddin, Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,900 words",
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
                  <h2>A Living Sufi Shrine at the Heart of Delhi</h2>
                  <p>
                    <strong>Nizamuddin</strong> is unlike almost anywhere
                    else in{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>. At
                    its centre sits{" "}
                    <strong>Hazrat Nizamuddin Dargah</strong>, the shrine of
                    the 14th-century Sufi saint Nizamuddin Auliya — a place of
                    worship that has been continuously active, without
                    interruption, for close to 700 years. Wrapped tightly
                    around it is <strong>Nizamuddin Basti</strong>, a dense,
                    living neighbourhood of narrow lanes, kebab shops, and
                    generations of families whose lives have been tied to the
                    shrine for centuries. This isn't a monument you visit to
                    admire from a respectful distance; it's a place where
                    devotion is still actively happening, every single day.
                  </p>
                  <p>
                    That alone would make Nizamuddin worth the trip, but the
                    neighbourhood also happens to sit beside{" "}
                    <strong>Humayun's Tomb</strong>, one of the finest Mughal
                    monuments in India and a UNESCO World Heritage Site, with
                    the beautifully restored{" "}
                    <strong>Sunder Nursery</strong> gardens connecting the
                    two. Few pockets of Delhi pack this much genuine history,
                    living culture, and architecture into a space you can
                    comfortably cover on foot.
                  </p>
                  <p>
                    This guide covers the dargah and its etiquette, the
                    famous Thursday night qawwali, Humayun's Tomb next door,
                    the graves of Amir Khusrau and the poet Ghalib within the
                    basti, Sunder Nursery, the heritage walk through the
                    basti's lanes, and where to eat — everything you need to
                    visit Nizamuddin thoughtfully and respectfully.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Nizamuddin at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Delhi, near Mathura Road",
                        },
                        {
                          icon: "🕋",
                          label: "The Saint",
                          value: "Nizamuddin Auliya (d. 1325)",
                        },
                        {
                          icon: "🎶",
                          label: "Qawwali",
                          value: "Every Thursday, after sunset",
                        },
                        {
                          icon: "🏛️",
                          label: "Next Door",
                          value: "Humayun's Tomb, Sunder Nursery",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Free (dargah); ticketed (tomb)",
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
                  <h2>Best Time to Visit Nizamuddin</h2>
                  <p>
                    The dargah itself is open year-round with no real "off
                    season" — devotion doesn't pause for weather — but
                    Delhi's climate still shapes how comfortable a visit will
                    be, especially since much of your time here is spent
                    walking narrow, uncovered lanes and courtyards.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days make the basti's narrow lanes and standing through evening qawwali genuinely comfortable — the busiest season, but manageably so.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — plan around it",
                        text: "Daytime heat in the basti's tight, shade-poor lanes is intense. An early morning or after-dark visit becomes almost essential.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional flooding",
                        text: "Heavy rain can flood the basti's narrow, unpaved side-lanes. The dargah courtyard and main paths remain accessible, but footwear choices matter.",
                      },
                      {
                        season: "Ramzan & Urs",
                        emoji: "🕌",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Deeply atmospheric, but very crowded",
                        text: "The Urs (death anniversary) of Nizamuddin Auliya, observed in the Islamic calendar month of Rabi al-Akhir, and Ramzan evenings both draw enormous crowds — moving but far busier than a normal visit.",
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
                    <strong>Our pick:</strong> a cool-season Thursday evening,
                    October to March. Arrive an hour or so before sunset to
                    explore the basti and dargah in daylight, then stay for
                    qawwali as evening settles in.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Nizamuddin</h2>
                  <p>
                    Nizamuddin sits in South Delhi, just off Mathura Road,
                    and is easy to reach from almost anywhere in the city.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> Hazrat Nizamuddin isn't
                      directly on a metro line, but Jangpura (Violet Line)
                      and JLN Stadium (Violet Line) are both a short
                      auto-rickshaw ride away. Nizamuddin metro connections
                      are gradually expanding, so double-check the closest
                      operating station before you set out.
                    </li>
                    <li>
                      <strong>By Train:</strong> Hazrat Nizamuddin Railway
                      Station, one of Delhi's major terminals connecting to
                      much of the country, is within easy walking distance
                      of the dargah — genuinely convenient if you're arriving
                      or departing by rail.
                    </li>
                    <li>
                      <strong>By Auto-rickshaw or app cab:</strong> The
                      simplest option from anywhere else in the city — ask
                      to be dropped at the "Nizamuddin Dargah" entrance lane
                      off Lodhi Road or Mathura Road, since vehicles can't go
                      all the way in.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The dargah, Humayun's Tomb,
                    and Sunder Nursery are all within a 15–20 minute walk of
                    each other — plan to cover all three on foot in one
                    outing rather than moving vehicles between them.
                  </div>
                </section>

                {/* ── Dargah ────────────────────────────────────────────── */}
                <section id="dargah">
                  <h2>Hazrat Nizamuddin Dargah</h2>
                  <p>
                    <strong>Nizamuddin Auliya</strong> (1238–1325) was one of
                    the most important saints of the <strong>Chishti
                    order</strong> of Sufism in South Asia — a disciple of
                    Baba Farid and, in turn, spiritual teacher to Amir
                    Khusrau, the poet, musician, and scholar often credited
                    with shaping qawwali into the form still sung today.
                    Nizamuddin Auliya preached a message of love, humility,
                    and service that drew followers across religious lines
                    even in his own lifetime — a legacy that still visibly
                    shapes how the shrine functions.
                  </p>
                  <p>
                    The dargah that stands today has been rebuilt and
                    expanded many times since the saint's death in 1325, with
                    much of the current marble structure, including its
                    distinctive dome, dating to renovations carried out
                    across the Mughal period. The complex also holds the
                    tombs of several other historically significant figures,
                    including the poet <strong>Amir Khusrau</strong> and{" "}
                    <strong>Jahanara Begum</strong>, the eldest daughter of
                    Mughal emperor Shah Jahan, both buried close to their
                    spiritual guide by choice.
                  </p>
                  <p>
                    Walking in from the main lane, you pass through a
                    sequence of narrow, covered passages lined with flower
                    and chadar sellers before the space opens into the marble
                    courtyard around the saint's grave. It's usually crowded,
                    always atmospheric, and — unlike many historical
                    monuments — genuinely functioning as a place of active
                    worship rather than a preserved relic.
                  </p>

                  <h3>Dress Code & Etiquette for All Visitors</h3>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> Shoulders and knees
                      covered for everyone; women should carry or borrow a
                      headscarf, available cheaply from stalls near the
                      entrance.
                    </li>
                    <li>
                      <strong>Remove shoes before entering:</strong> Guarded
                      shoe-storage stalls line the approach lane for a small
                      fee — carrying socks is a good idea for the stone
                      floors.
                    </li>
                    <li>
                      <strong>Visitors of all faiths are welcome:</strong>{" "}
                      The dargah's courtyard is open to everyone; only the
                      innermost sanctum around the grave has more specific,
                      sometimes gender-based, access norms — follow the lead
                      of those managing the space if unsure.
                    </li>
                    <li>
                      <strong>Photography:</strong> Generally tolerated in
                      the outer courtyard, but avoid photographing people
                      praying up close without asking, and expect
                      restrictions closer to the inner sanctum.
                    </li>
                    <li>
                      <strong>Donations are voluntary:</strong> You may be
                      offered flowers, a chadar, or a guided walk-through for
                      a fee — none of this is compulsory, and a polite "no
                      thank you" is entirely acceptable.
                    </li>
                  </ul>
                </section>

                {/* ── Qawwali ───────────────────────────────────────────── */}
                <section id="qawwali">
                  <h2>The Thursday Evening Qawwali</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Warm evening light over historic sandstone architecture, evoking the atmosphere of a Thursday qawwali night at Nizamuddin Dargah"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    For many visitors, this is the reason to come. Every{" "}
                    <strong>Thursday evening after sunset</strong>, qawwals —
                    many from hereditary singing families whose lineage
                    traces back through generations of performers in the
                    tradition Amir Khusrau helped establish — gather in the
                    dargah courtyard to sing. The sessions are devotional
                    first and performance second: verses in Persian, Urdu,
                    and Braj Bhasha praising the saint and the divine, built
                    around rhythmic clapping, harmonium, and tabla, rising
                    and falling in intensity as the evening goes on.
                  </p>
                  <p>
                    Thursday is chosen deliberately — it's considered the eve
                    of Jumu'ah (Friday), an auspicious time at Sufi shrines
                    across South Asia — and the ritual has continued at
                    Nizamuddin in some form for centuries. Shorter or smaller
                    sessions occasionally happen on other evenings, but
                    Thursday night is the one to plan around.
                  </p>

                  <h3>What to Expect</h3>
                  <ul>
                    <li>
                      <strong>Arrive early:</strong> The courtyard fills up
                      quickly as sunset approaches; arriving 30–45 minutes
                      ahead secures a decent spot to sit or stand.
                    </li>
                    <li>
                      <strong>It runs long:</strong> Sessions often continue
                      for hours after dark — you're free to stay as long or
                      as briefly as you like.
                    </li>
                    <li>
                      <strong>Seating is on the floor:</strong> Men and women
                      are typically seated in separate sections of the
                      courtyard; look for where others are settling and
                      follow suit.
                    </li>
                    <li>
                      <strong>It's free, but tipping happens:</strong> It's
                      customary for listeners to place small denomination
                      notes near the qawwals as the performance builds —
                      entirely optional, and a much smaller gesture than a
                      formal donation.
                    </li>
                  </ul>

                  <h3>Respectful Listening Etiquette</h3>
                  <ul>
                    <li>
                      <strong>Keep phone use minimal and quiet:</strong> A
                      few photos or a short video clip is fine, but this is a
                      devotional gathering, not a concert — avoid filming
                      extensively or with flash.
                    </li>
                    <li>
                      <strong>Don't walk in front of seated listeners:</strong>{" "}
                      The courtyard gets tightly packed; move around the
                      edges rather than cutting through.
                    </li>
                    <li>
                      <strong>Follow the room's energy:</strong> Clapping
                      along or swaying gently is welcomed as the music
                      builds; loud talking or moving through the crowd
                      during a particularly devotional passage is not.
                    </li>
                    <li>
                      <strong>Dress and behave as you would inside the
                      dargah itself:</strong> The qawwali happens within the
                      shrine complex, so the same modesty and respect apply
                      throughout the evening.
                    </li>
                  </ul>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine a Thursday visit with
                    dinner in the basti beforehand — the kebab and biryani
                    stalls are at their liveliest in the hour before qawwali
                    begins.
                  </div>
                </section>

                {/* ── Humayun's Tomb ────────────────────────────────────── */}
                <section id="humayuns-tomb">
                  <h2>Humayun's Tomb</h2>
                  <p>
                    A short walk from the dargah, across Mathura Road, stands{" "}
                    <strong>Humayun's Tomb</strong> — the resting place of
                    the second Mughal emperor, Humayun, and one of the most
                    significant monuments in Mughal architectural history.
                    Commissioned by his widow, Empress Bega Begum, and built
                    between roughly 1565 and 1572, it was the first
                    monumental garden-tomb constructed in India, arranged
                    within a formal <em>charbagh</em> (four-part Persian
                    garden) and set on a raised platform with a striking
                    double dome in red sandstone and white marble.
                  </p>
                  <p>
                    Its influence runs directly through to the{" "}
                    <strong>Taj Mahal</strong>, built roughly seven decades
                    later — the same charbagh layout, the same use of a
                    raised plinth and symmetrical garden geometry, refined
                    into the more famous, all-white monument at Agra.
                    Historians and architects widely consider Humayun's Tomb
                    the direct architectural precursor to the Taj, which
                    makes visiting the two back to back a genuinely
                    interesting way to trace that evolution.
                  </p>
                  <p>
                    It was declared a <strong>UNESCO World Heritage
                    Site</strong> in 1993 and has been extensively restored
                    over the past two decades, including the surrounding
                    gardens and several smaller tombs within its grounds.
                    Humayun's Tomb genuinely deserves its own unhurried
                    visit — budget at least an hour, more if you enjoy Mughal
                    architecture and garden design, and treat this section as
                    an overview rather than a full guide to the complex.
                  </p>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🎫 Practical note:</strong> Humayun's Tomb is
                    ticketed (separate rates for Indian and foreign
                    nationals) and typically open daily except a few national
                    holidays, sunrise to sunset — check current timings and
                    fees before visiting, since these are periodically
                    revised.
                  </div>
                </section>

                {/* ── Ghalib Tomb ───────────────────────────────────────── */}
                <section id="ghalib-tomb">
                  <h2>Ghalib's Tomb & Other Basti Graves</h2>
                  <p>
                    Tucked within the lanes of Nizamuddin Basti, a short walk
                    from the dargah, is the tomb of{" "}
                    <strong>Mirza Ghalib</strong> — widely regarded as one of
                    the greatest Urdu and Persian poets to have written in
                    India, and a towering figure in South Asian literary
                    history. Ghalib lived much of his later life in Delhi
                    during the final years of the Mughal era and was buried
                    here, in the same basti his poetry still echoes through,
                    when he died in 1869.
                  </p>
                  <p>
                    The tomb itself is a modest, marble-latticed enclosure —
                    quieter and far less crowded than the dargah, and a good
                    stop for anyone with an interest in Urdu poetry or
                    Delhi's literary history. Within the basti's tightly
                    packed lanes are also several other historic graves and
                    small shrines, including that of{" "}
                    <strong>Amir Khusrau</strong>, buried within the dargah
                    complex itself close to his spiritual teacher — a
                    resting place he is said to have specifically wished for.
                  </p>
                </section>

                {/* ── Sunder Nursery ────────────────────────────────────── */}
                <section id="sunder-nursery">
                  <h2>Sunder Nursery</h2>
                  <p>
                    Sitting almost exactly between the dargah and Humayun's
                    Tomb is <strong>Sunder Nursery</strong> — a roughly
                    90-acre heritage park built around a cluster of
                    Mughal-era monuments, including the striking Sunder Burj
                    and Lakkarwala Burj tombs, that had fallen into
                    neglect over the decades.
                  </p>
                  <p>
                    A major restoration effort led by the{" "}
                    <strong>Aga Khan Trust for Culture</strong>, working
                    alongside government heritage bodies, transformed the
                    site into a landscaped public park — formal gardens, a
                    working nursery and micro-forest, an amphitheatre, and
                    walking paths connecting its restored monuments — before
                    reopening it fully to the public in 2018. It now
                    functions as a buffer zone connected to the wider
                    Humayun's Tomb UNESCO World Heritage complex, and is one
                    of the more pleasant, unhurried green spaces in this part
                    of Delhi.
                  </p>
                  <p>
                    It's easy to underestimate how much time Sunder Nursery
                    deserves — most visitors treat it as a quick pass-through
                    between the dargah and the tomb, but it rewards a slower
                    wander, particularly in the cooler hours of morning or
                    early evening.
                  </p>
                </section>

                {/* ── Heritage Walk ─────────────────────────────────────── */}
                <section id="heritage-walk">
                  <h2>The Nizamuddin Basti Heritage Walk</h2>
                  <p>
                    Beyond the dargah itself, <strong>Nizamuddin
                    Basti</strong> is a genuinely fascinating place to walk
                    through — a maze of lanes barely wide enough for two
                    people to pass, lined with generations-old shops, small
                    khanqahs (Sufi hospices), and homes of families whose
                    ancestors have served the shrine for centuries.
                  </p>
                  <p>
                    Extensive conservation work in the basti, led over the
                    past two decades by the <strong>Aga Khan Trust for
                    Culture</strong> in partnership with local community
                    organisations, has restored several historic structures,
                    improved sanitation and public space within the
                    neighbourhood, and trained local youth as heritage guides
                    — part of a wider urban renewal initiative that also
                    covers Humayun's Tomb and Sunder Nursery.
                  </p>
                  <p>
                    Guided heritage walks through the basti, often run by
                    local community-based organisations, are a genuinely
                    worthwhile way to experience the neighbourhood — they
                    offer context on its history, architecture, and daily
                    life that's easy to miss walking through alone, and
                    directly support the community whose lanes you're
                    walking through.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Around Nizamuddin</h2>
                  <p>
                    Nizamuddin Basti has its own dedicated street food
                    culture, distinct from Old Delhi's Chandni Chowk but
                    every bit as loved by locals — built almost entirely
                    around Mughlai kebabs, biryani, and slow-cooked meat
                    dishes served from small, decades-old establishments.
                  </p>
                  <ul>
                    <li>
                      <strong>Ghalib Kebab Corner:</strong> A well-known
                      basti institution for seekh kebabs and other grilled
                      meats, popular with both locals and visitors passing
                      through after a dargah visit.
                    </li>
                    <li>
                      <strong>Al Jawahar & similar basti eateries:</strong>{" "}
                      Small, long-running restaurants serving mutton korma,
                      nihari, and biryani in the narrow lanes near the
                      dargah entrance — look for the busiest counters as a
                      good sign.
                    </li>
                    <li>
                      <strong>Nizamuddin's Karim's branch:</strong> A branch
                      of the legendary Old Delhi Mughlai institution,
                      serving the same kebab-and-biryani tradition close to
                      the dargah.
                    </li>
                    <li>
                      <strong>Street-side kebab stalls:</strong> Especially
                      lively in the early evening before Thursday qawwali,
                      when the basti's lanes fill with both worshippers and
                      the smell of grilling meat.
                    </li>
                    <li>
                      <strong>Chai stalls near the dargah entrance:</strong>{" "}
                      A simple, inexpensive way to sit and take in the pace
                      of the neighbourhood between the dargah and a walk
                      toward Humayun's Tomb.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    A visit to Nizamuddin is inexpensive by design — the
                    dargah itself is free, and most costs come down to
                    optional donations, food, and Humayun's Tomb's entry
                    ticket.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Comfortable"].map(
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
                            "Dargah entry",
                            "Free",
                            "Free",
                            "Free",
                          ],
                          [
                            "Shoe storage / donation",
                            "₹20–50",
                            "₹50–150",
                            "₹150–500",
                          ],
                          [
                            "Humayun's Tomb entry",
                            "₹35 (Indian)",
                            "₹35 (Indian)",
                            "₹35 (Indian)",
                          ],
                          ["Food (basti kebabs/biryani)", "₹150", "₹400", "₹900"],
                          [
                            "Local transport (auto/cab)",
                            "₹100",
                            "₹300",
                            "₹800",
                          ],
                          [
                            "Guided heritage walk (optional)",
                            "—",
                            "₹300–600",
                            "₹800+",
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
                    * Humayun's Tomb ticket prices are typically higher for
                    foreign nationals and are periodically revised — confirm
                    current rates before visiting. Donations at the dargah
                    are entirely optional.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips & Etiquette</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly, every time:</strong> Covered
                      shoulders and knees for all visitors, and a headscarf
                      for women, whether it's your first visit or your
                      fifth.
                    </li>
                    <li>
                      <strong>Remove shoes at the designated stalls:</strong>{" "}
                      Use the guarded shoe-storage points near the entrance
                      rather than leaving footwear unattended.
                    </li>
                    <li>
                      <strong>Ask before photographing people:</strong>{" "}
                      Especially inside the dargah and during qawwali — many
                      worshippers are there for deeply personal reasons.
                    </li>
                    <li>
                      <strong>Donations are optional, not obligatory:</strong>{" "}
                      It's fine to politely decline offers of chadar, flowers,
                      or a paid guided walk-through at the entrance.
                    </li>
                    <li>
                      <strong>Arrive early for Thursday qawwali:</strong> The
                      courtyard fills quickly after sunset — 30–45 minutes
                      early secures a decent spot.
                    </li>
                    <li>
                      <strong>Pair it with Humayun's Tomb and Sunder
                      Nursery:</strong> All three sit within a 15–20 minute
                      walk of each other and combine naturally into one
                      half-day outing.
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
                          "Cover shoulders and knees; women carry a headscarf",
                          "Remove shoes at the guarded storage stalls",
                          "Arrive early on Thursday for a good spot for qawwali",
                          "Walk quietly and follow the courtyard's lead during singing",
                          "Combine the visit with Humayun's Tomb and Sunder Nursery",
                          "Consider a guided heritage walk through the basti",
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
                          "Wear shorts, sleeveless tops, or immodest clothing",
                          "Photograph worshippers up close without asking",
                          "Feel obligated to pay for chadar, flowers, or a guide",
                          "Walk through seated crowds during qawwali",
                          "Rush the basti's lanes — it rewards slow exploring",
                          "Skip Humayun's Tomb, assuming the dargah alone is enough",
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
                    <strong>🗺️ Extend the trip:</strong> Nizamuddin pairs
                    naturally with a walk through the nearby{" "}
                    <Link href="/blog/lodhi-garden-delhi-travel-guide">
                      Lodhi Garden
                    </Link>
                    , or with a longer day covering{" "}
                    <Link href="/blog/new-delhi-travel-guide">New Delhi</Link>
                    's central sights and the modern{" "}
                    <Link href="/blog/akshardham-delhi-travel-guide">
                      Akshardham Temple
                    </Link>{" "}
                    for a striking contrast between Sufi, colonial, and
                    contemporary Delhi in a single trip.
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
                  "Nizamuddin",
                  "Delhi",
                  "Sufi Shrine",
                  "Qawwali",
                  "Humayun's Tomb",
                  "Nizamuddin Basti",
                  "Heritage Walk",
                  "Ghalib",
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

              <RelatedPostsGrid currentSlug="nizamuddin-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nizamuddin-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
