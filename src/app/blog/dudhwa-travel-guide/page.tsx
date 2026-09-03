// src/app/blog/dudhwa-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dudhwa National Park: Tiger & Rhino Safari Guide",
  description:
    "Complete Dudhwa National Park guide — Bengal tigers, the reintroduced one-horned rhinoceros, barasingha, safari ranges, best time to visit, how to reach, and a full visit plan.",
  keywords:
    "Dudhwa National Park, Dudhwa Tiger Reserve, one-horned rhinoceros Dudhwa, barasingha, terai Uttar Pradesh, Dudhwa safari, Kishanpur Wildlife Sanctuary, Sonaripur, Dudhwa best time to visit, how to reach Dudhwa, Lakhimpur Kheri",
  openGraph: {
    title: "Dudhwa National Park: Tiger & Rhino Safari Guide",
    description:
      "Terai grassland and sal forest on the Nepal border — Bengal tigers, a reintroduced one-horned rhino population, and one of India's largest wild barasingha herds.",
    url: "https://club.kudozz.in/blog/dudhwa-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Terai grassland and sal forest at Dudhwa National Park, Uttar Pradesh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dudhwa National Park: Tiger & Rhino Safari Guide",
    description:
      "Bengal tigers, reintroduced one-horned rhinos, and India's largest wild barasingha herds on the Nepal border — the complete Dudhwa guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dudhwa-travel-guide",
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
          headline: "Dudhwa National Park: Tiger & Rhino Safari Guide",
          description:
            "Complete Dudhwa National Park guide — Bengal tigers, the reintroduced one-horned rhinoceros, barasingha, safari ranges, best time to visit, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/dudhwa-travel-guide",
          },
          keywords:
            "Dudhwa National Park, Tiger Reserve, one-horned rhinoceros, barasingha, terai, Uttar Pradesh",
          about: {
            "@type": "Place",
            name: "Dudhwa National Park",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh",
                item: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Dudhwa National Park",
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
    q: "When is Dudhwa National Park open?",
    a: "Dudhwa is open from mid-November to mid-June. The park closes for roughly five months during the monsoon (mid-June to mid-November) to protect the breeding season of its wildlife, especially the barasingha and rhino, and because the terai grassland becomes waterlogged and largely impassable.",
  },
  {
    q: "Will I see a tiger at Dudhwa?",
    a: "Dudhwa has a genuine wild tiger population, but sightings are not guaranteed — the terai's tall grassland and dense sal forest give tigers far more cover than the open scrub of parks like Ranthambore or Bandhavgarh. Come with realistic expectations and enjoy the wider wildlife experience; a sighting is a bonus, not the baseline.",
  },
  {
    q: "What is special about Dudhwa's rhinos?",
    a: "Dudhwa is home to one of India's most successful rhino reintroduction stories. The one-horned rhinoceros had gone locally extinct in this part of Uttar Pradesh; a translocation programme starting in the 1980s brought founder animals from Assam and Nepal into a dedicated, fenced rhino sanctuary zone within the park, and the population has grown steadily since.",
  },
  {
    q: "What is a barasingha and why is Dudhwa known for it?",
    a: "Barasingha (swamp deer) are a hard-ground subspecies of deer with distinctive many-tined antlers, once widespread across north India's terai and floodplains but now highly restricted. Dudhwa holds one of the largest surviving wild barasingha populations in the country and is considered a stronghold for the species.",
  },
  {
    q: "How do I reach Dudhwa National Park?",
    a: "The park has limited direct rail connectivity at Dudhwa and Palia stations, so most visitors travel by road via Lucknow (about 230 km) or use Lakhimpur Kheri as the nearest practical gateway town, from where it's a shorter drive to the park gates.",
  },
  {
    q: "Can I combine Dudhwa with Pilibhit Tiger Reserve?",
    a: "Yes — both are terai reserves along the Nepal border, roughly a few hours apart by road via Lakhimpur Kheri and Shahjahanpur/Bareilly. Wildlife travellers with enough time often pair the two for a longer terai circuit, since the ecosystems and species overlap but the visitor experience differs quite a bit.",
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
  { id: "introduction", title: "A Terai Wilderness on the Nepal Border", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dudhwa", level: 2 },
  { id: "wildlife-safaris", title: "Wildlife & Safari Zones", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DudhwaGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Terai grassland and sal forest at Dudhwa National Park, Uttar Pradesh"
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
                { label: "Uttar Pradesh", href: "/blog/uttar-pradesh-travel-guide" },
                { label: "Dudhwa National Park", href: null },
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
                "Dudhwa National Park",
                "Tiger Reserve",
                "One-Horned Rhino",
                "Terai",
                "Wildlife Safari",
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
              Dudhwa National Park: Tiger & Rhino Safari Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Terai grassland and sal forest running along the Nepal border —
              Bengal tigers, a hard-won reintroduced rhino population, and
              one of India's largest surviving wild barasingha herds.
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
                  text: "Lakhimpur Kheri, Uttar Pradesh",
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
                  <h2>A Terai Wilderness on the Nepal Border</h2>
                  <p>
                    <strong>Dudhwa National Park</strong>, part of the wider
                    Dudhwa Tiger Reserve, sits in Lakhimpur Kheri district
                    of{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , hugging the Nepal border across a landscape of tall
                    terai grassland, riverine floodplain, and dense sal
                    forest. It's a genuinely different kind of Indian
                    wildlife destination — wetter, greener, and far less
                    visited than the dry-deciduous parks of central India,
                    which makes both the terrain and the wildlife feel
                    distinct.
                  </p>
                  <p>
                    The reserve is best known for three things: a wild
                    Bengal tiger population moving through cover so dense
                    that sightings demand patience; one of India's most
                    celebrated rhino reintroduction stories; and one of the
                    country's largest surviving populations of barasingha,
                    the swamp deer that is the park's flagship species.
                    Together with the neighbouring Kishanpur Wildlife
                    Sanctuary and Katarniaghat, Dudhwa forms one of the last
                    strongholds of the north Indian terai ecosystem.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐯</span> Dudhwa at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Lakhimpur Kheri, Uttar Pradesh",
                        },
                        {
                          icon: "🚗",
                          label: "From Lucknow",
                          value: "~230 km by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Dec – Mar" },
                        {
                          icon: "🦏",
                          label: "Known For",
                          value: "Tigers, Rhinos, Barasingha",
                        },
                        {
                          icon: "🌿",
                          label: "Ecosystem",
                          value: "Terai grassland & sal forest",
                        },
                        {
                          icon: "🚪",
                          label: "Park Open",
                          value: "Mid-Nov – Mid-Jun",
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
                  <h2>Best Time to Visit Dudhwa</h2>
                  <p>
                    Dudhwa's visiting calendar is dictated entirely by the
                    monsoon and the terai's floodplain terrain.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Dec – Mar",
                        emoji: "❄️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, cool weather and the best overall wildlife visibility as grass cover thins slightly. The most reliable window for sightings and comfortable safaris.",
                      },
                      {
                        season: "Nov, Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Shoulder season",
                        text: "The park opens in mid-November and closes mid-June. Late spring gets progressively hotter but water sources draw animals more predictably near forest edges.",
                      },
                      {
                        season: "Mid-Jun – Mid-Nov",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Park closed",
                        text: "Dudhwa shuts for roughly five months to protect the monsoon breeding season, especially for barasingha and rhino, and because much of the terai floods.",
                      },
                      {
                        season: "Early Morning Safaris",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best sighting window",
                        text: "Whatever the season, the first safari slot after gate-opening gives the best chance of animals still active near grassland edges before the day heats up.",
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
                    <strong>Our pick:</strong> December to March — cool,
                    dry, and the most consistent window for both comfortable
                    safaris and sightings across all three of Dudhwa's
                    signature species.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Dudhwa</h2>
                  <p>
                    Dudhwa remains genuinely off the well-worn tourist rail
                    and air network, which is part of why it stays quiet —
                    but it does mean planning the approach matters.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Dudhwa and Palia have
                      railway stations, but connectivity is limited and
                      infrequent — workable if your route already lines up,
                      but not the primary approach for most visitors.
                    </li>
                    <li>
                      <strong>By road via Lucknow:</strong> The most
                      practical route for most travellers — around 230 km
                      from{" "}
                      <Link href="/blog/lucknow-travel-guide">
                        Lucknow
                      </Link>
                      , roughly a 5-6 hour drive, with Lucknow's airport and
                      rail connections making it the natural starting point.
                    </li>
                    <li>
                      <strong>Via Lakhimpur Kheri:</strong> The nearest
                      sizeable town to the park, useful as a base for fuel,
                      supplies, and a shorter final approach to the gates at
                      Dudhwa, Sonaripur, or Kishanpur.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your safari permits and
                    forest lodge stay well ahead — Dudhwa allots a limited
                    number of vehicles per zone per slot, and options thin
                    out fast on weekends in peak winter.
                  </div>
                </section>

                {/* ── Wildlife & Safaris ────────────────────────────────── */}
                <section id="wildlife-safaris">
                  <h2>Wildlife & Safari Zones</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Sal forest and open grassland inside Dudhwa National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The One-Horned Rhino Reintroduction</h3>
                  <p>
                    The greater one-horned rhinoceros had vanished from this
                    stretch of Uttar Pradesh's terai by the early 20th
                    century, hunted and displaced long before conservation
                    protections existed. Starting in 1984, a dedicated,
                    fenced rhino rehabilitation area was carved out within
                    Dudhwa, and founder animals were translocated in from
                    Assam's Pobitora and from Nepal's Chitwan population.
                    Decades on, that founder group has bred successfully and
                    grown into a stable, closely monitored population — one
                    of the clearer conservation success stories in Indian
                    wildlife management, and a strong reason to visit even
                    for travellers who've already seen rhinos at Kaziranga.
                  </p>
                  <h3>Barasingha — Dudhwa's Flagship Species</h3>
                  <p>
                    The barasingha, or swamp deer, is instantly recognisable
                    by its many-tined, sweeping antlers — the name literally
                    means "twelve-horned." The hard-ground subspecies found
                    here once ranged widely across north India's terai belt
                    but has been reduced to a handful of surviving pockets.
                    Dudhwa holds one of the largest of these remaining wild
                    populations, and herds are a fairly reliable sight in
                    the park's open grassland clearings, particularly in the
                    cooler months.
                  </p>
                  <h3>Tigers & Other Wildlife</h3>
                  <p>
                    Dudhwa's Bengal tigers move through far denser cover
                    than the dry forests of central India, so sightings take
                    real patience and a measure of luck. The reserve also
                    supports leopards, sloth bears, hispid hares, Bengal
                    florican, and a rich birdlife drawn by the wetlands and
                    riverine tracts along the Suheli and Mohana rivers.
                  </p>
                  <h3>Safari Ranges: Dudhwa, Sonaripur & Kishanpur</h3>
                  <p>
                    Safaris run from three main zones — the core{" "}
                    <strong>Dudhwa range</strong> around the main gate,{" "}
                    <strong>Sonaripur</strong>, and the separate{" "}
                    <strong>Kishanpur Wildlife Sanctuary</strong> a short
                    drive away, each offering a slightly different mix of
                    grassland, forest, and wetland habitat. Both jeep
                    safaris and, seasonally, elephant-back safaris are
                    offered, with jeep safaris the more widely available
                    option through most of the season.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you only have time for one
                    zone, prioritise Sonaripur for the best combined odds of
                    spotting rhino and barasingha alongside general terai
                    scenery.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Dudhwa</h2>
                  <p>
                    Accommodation is limited and mostly forest-lodge style,
                    reflecting Dudhwa's low-key, low-density tourism model —
                    book ahead, especially for peak winter weekends.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Basic guesthouses in Palia town",
                          "Simple rest houses near the gate",
                          "Homestays around Lakhimpur Kheri",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "UPSTDC forest lodges near the park",
                          "Private eco-lodges bordering the buffer zone",
                          "Simple resorts along the Lucknow highway",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "Boutique jungle lodges near Kishanpur",
                          "Naturalist-led wildlife camps",
                          "Premium tented stays in season",
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
                        title: "Arrival & Dudhwa Range Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Drive in from Lucknow or Lakhimpur Kheri, check in",
                          "Afternoon jeep safari in the core Dudhwa range",
                          "Evening at the lodge, briefing on next day's zones",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sonaripur & Rhino Zone",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning safari in Sonaripur for rhino and barasingha",
                          "Afternoon rest or a second grassland safari",
                          "Birdwatching near the wetland tracts in the evening",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Kishanpur & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning safari at Kishanpur Wildlife Sanctuary",
                          "Late morning drive back toward Lucknow",
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
                    * Wildlife travellers with more time often continue on to{" "}
                    <Link href="/blog/pilibhit-travel-guide">
                      Pilibhit Tiger Reserve
                    </Link>{" "}
                    for a fuller terai circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Dudhwa</h2>
                  <ul>
                    <li>
                      <strong>Lodge dining:</strong> Most forest lodges and
                      resorts serve simple set meals — usually North Indian
                      vegetarian and non-vegetarian thalis — included with
                      your stay.
                    </li>
                    <li>
                      <strong>Local dhabas in Palia:</strong> Basic
                      roadside eateries for daal, roti, and regional
                      vegetable preparations at low prices.
                    </li>
                    <li>
                      <strong>Carry your own snacks:</strong> Options
                      thin out fast once you're inside the buffer zone, so
                      pack water and snacks for safari mornings.
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
                            "₹1,500",
                            "₹4,500",
                            "₹12,000",
                          ],
                          ["Jeep safari (per safari)", "₹2,500", "₹3,500", "₹5,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Park entry & permits/day", "₹300", "₹300", "₹500"],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,500"],
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
                    * Figures are per person, per day. Jeep safari costs are
                    usually shared across the vehicle, which typically seats
                    4-6 people.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Dudhwa</h2>
                  <ul>
                    <li>
                      <strong>Book safaris and stays in advance:</strong>{" "}
                      Vehicle numbers per zone are capped, and weekends in
                      peak winter fill up quickly.
                    </li>
                    <li>
                      <strong>Pack for cold mornings:</strong> Early winter
                      safaris can be surprisingly chilly — carry layers even
                      if the afternoons warm up.
                    </li>
                    <li>
                      <strong>Set realistic tiger expectations:</strong>{" "}
                      The dense terai cover means sightings are less
                      frequent than in central India's dry forests — come
                      for the wider ecosystem, not a guaranteed tiger photo.
                    </li>
                    <li>
                      <strong>Hire a park naturalist or guide:</strong>{" "}
                      Local guides are invaluable for spotting the barasingha
                      herds and rhinos, and for reading terai wildlife signs
                      that are easy to miss.
                    </li>
                    <li>
                      <strong>Check the park calendar before travelling:</strong>{" "}
                      Dudhwa is closed mid-June to mid-November — confirm
                      opening dates before finalising any trip near these
                      windows.
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
                          "Book safari permits and lodges well ahead",
                          "Take the first morning safari slot for best sightings",
                          "Hire a local naturalist guide",
                          "Pack warm layers for winter mornings",
                          "Prioritise Sonaripur for rhino and barasingha",
                          "Carry water, snacks, and binoculars",
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
                          "Expect guaranteed tiger sightings",
                          "Show up without pre-booked safari permits",
                          "Travel between mid-June and mid-November",
                          "Get out of the vehicle inside the core zone",
                          "Rely on rail connectivity for the final approach",
                          "Skip warm clothing for early winter drives",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Dudhwa with{" "}
                    <Link href="/blog/pilibhit-travel-guide">
                      Pilibhit Tiger Reserve
                    </Link>{" "}
                    for a longer terai wildlife circuit, or route back
                    through{" "}
                    <Link href="/blog/lucknow-travel-guide">Lucknow</Link>{" "}
                    to add the Nawabi city's history and cuisine to your
                    trip.
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
                  "Dudhwa National Park",
                  "Tiger Reserve",
                  "Uttar Pradesh",
                  "One-Horned Rhino",
                  "Terai",
                  "Wildlife Safari",
                  "Barasingh",
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

              <RelatedPostsGrid currentSlug="dudhwa-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dudhwa-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
