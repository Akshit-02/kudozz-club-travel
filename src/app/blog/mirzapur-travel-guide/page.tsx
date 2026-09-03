// src/app/blog/mirzapur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mirzapur Travel Guide: Temples, Fort & Waterfalls",
  description:
    "Complete Mirzapur guide — Vindhyachal Temple's Shakti Peeth circuit, Chunar Fort's layered history, Sirsi and Wyndham Falls, the famous carpet-weaving belt, and how to reach from Varanasi.",
  keywords:
    "Mirzapur travel guide, Vindhyachal Temple, Chunar Fort, Mirzapur waterfalls, Sirsi Falls, Wyndham Falls, Mirzapur carpet weaving, Bhadohi Mirzapur carpets, Ashtabhuja Temple, Kali Khoh, how to reach Mirzapur, Varanasi to Mirzapur",
  openGraph: {
    title: "Mirzapur Travel Guide: Temples, Fort & Waterfalls",
    description:
      "A Ganga-side stop between Varanasi and Prayagraj — the Vindhyachal Shakti Peeth circuit, Chunar Fort, Vindhya hill waterfalls, and India's famous hand-knotted carpet belt.",
    url: "https://club.kudozz.in/blog/mirzapur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Vindhya hills and cascading waterfall near Mirzapur, Uttar Pradesh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirzapur Travel Guide: Temples, Fort & Waterfalls",
    description:
      "Vindhyachal Temple, Chunar Fort, Vindhya hill waterfalls, and the famous carpet-weaving belt — the complete Mirzapur guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mirzapur-travel-guide",
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
          headline: "Mirzapur Travel Guide: Temples, Fort & Waterfalls",
          description:
            "Complete Mirzapur guide — Vindhyachal Temple's Shakti Peeth circuit, Chunar Fort's layered history, Sirsi and Wyndham Falls, the famous carpet-weaving belt, and how to reach from Varanasi.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/mirzapur-travel-guide",
          },
          keywords:
            "Mirzapur, Vindhyachal Temple, Chunar Fort, carpet weaving, Uttar Pradesh, waterfalls, Shakti Peeth",
          about: {
            "@type": "Place",
            name: "Mirzapur",
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
                name: "Mirzapur",
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
    q: "What is Mirzapur famous for?",
    a: "Mirzapur is known for the Vindhyachal Temple, one of India's Shakti Peethas and part of a pilgrim circuit with the nearby Kali Khoh and Ashtabhuja temples; the historic Chunar Fort overlooking the Ganga; waterfalls in the surrounding Vindhya hills; and its centuries-old hand-knotted carpet-weaving industry, part of the GI-tagged Bhadohi-Mirzapur carpet belt.",
  },
  {
    q: "What is the Tridevi circuit at Vindhyachal?",
    a: "It refers to the triangular pilgrimage of three temples near Mirzapur — Vindhyachal Temple (Goddess Vindhyavasini), Ashtabhuja Devi Temple, and Kali Khoh — traditionally visited together in a single circuit, each representing a different aspect of the Devi.",
  },
  {
    q: "How do I reach Mirzapur from Varanasi?",
    a: "Mirzapur is about 65 km from Varanasi, roughly a 1.5-2 hour drive, and is also connected by Mirzapur Junction on the Varanasi-Prayagraj-Mumbai railway line, making it an easy day trip or short stopover.",
  },
  {
    q: "When is the best time to see Mirzapur's waterfalls?",
    a: "Sirsi Falls and Wyndham Falls run fullest just after the monsoon, roughly September to November, when water flow in the Vindhya hill streams is at its strongest. They thin out considerably by peak summer.",
  },
  {
    q: "Are Mirzapur's carpets genuinely famous?",
    a: "Yes — the Bhadohi-Mirzapur belt is one of India's best-known centres for hand-knotted woollen carpets, holding a Geographical Indication (GI) tag and supplying carpets internationally for decades. Visiting a local weaving unit offers a look at a labour-intensive, generations-old craft.",
  },
  {
    q: "Can I visit Chunar Fort and Vindhyachal Temple in one day?",
    a: "Yes, both are within a short driving distance of Mirzapur town and can comfortably be combined with a waterfall visit in a single well-planned day, though an overnight stay gives a more relaxed pace.",
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
  { id: "introduction", title: "A Ganga-Side Stop Between Two Cities", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mirzapur", level: 2 },
  { id: "attractions", title: "Temples, Fort & Waterfalls", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MirzapurGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Vindhya hills and cascading waterfall near Mirzapur, Uttar Pradesh"
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
                { label: "Mirzapur", href: null },
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
                "Mirzapur",
                "Vindhyachal Temple",
                "Chunar Fort",
                "Waterfalls",
                "Carpet Weaving",
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
              Mirzapur Travel Guide: Temples, Fort & Waterfalls
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Ganga-side stop between Varanasi and Prayagraj — the
              Vindhyachal Shakti Peeth circuit, Chunar Fort's layered
              history, Vindhya hill waterfalls, and India's famous
              hand-knotted carpet belt.
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
                  text: "Mirzapur, Uttar Pradesh",
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
                  <h2>A Ganga-Side Stop Between Two Cities</h2>
                  <p>
                    <strong>Mirzapur</strong>, on the southern bank of the
                    Ganga in{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , sits almost exactly between{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>{" "}
                    and Prayagraj — a practical, worthwhile stop for
                    travellers routing between the two, and a genuine
                    destination in its own right for anyone interested in
                    Shakti Peeth pilgrimage, Mughal-and-colonial-era forts,
                    or handmade craft traditions.
                  </p>
                  <p>
                    The town is best known for the Vindhyachal Temple, one
                    of India's revered Shakti Peethas, and for Chunar Fort, a
                    hilltop fort with a long, layered history stretching back
                    centuries. Around it, the Vindhya hills hide a scatter of
                    seasonal waterfalls, while Mirzapur's old town remains
                    one of the beating hearts of India's hand-knotted carpet
                    industry — a craft that rarely gets the tourist attention
                    it deserves.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Mirzapur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Banks of the Ganga, Uttar Pradesh",
                        },
                        {
                          icon: "🚗",
                          label: "From Varanasi",
                          value: "~65 km by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Vindhyachal Temple, Chunar Fort",
                        },
                        {
                          icon: "🧵",
                          label: "Craft",
                          value: "Hand-knotted carpet weaving",
                        },
                        {
                          icon: "💦",
                          label: "Waterfalls",
                          value: "Sirsi & Wyndham Falls",
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
                  <h2>Best Time to Visit Mirzapur</h2>
                  <p>
                    Mirzapur is comfortable through most of the cooler
                    months, with waterfall timing adding one extra wrinkle
                    to plan around.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather ideal for temple visits, the fort, and general sightseeing without the heat or humidity of other seasons.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "💦",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best for waterfalls",
                        text: "Sirsi and Wyndham Falls run fullest just after the monsoon, with strong water flow through the Vindhya hill streams.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Summer temperatures climb sharply and the waterfalls thin out considerably, making this the least rewarding window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon",
                        text: "Heavy rain refreshes the hills and waterfalls but can make hillside paths slippery and travel less predictable.",
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
                    <strong>Our pick:</strong> October to November if
                    waterfalls are your priority — pleasant weather
                    overlapping with the fullest water flow in the Vindhya
                    hills.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mirzapur</h2>
                  <p>
                    Mirzapur's location on a major rail line and highway
                    corridor makes it one of the easier off-beat stops to
                    reach in eastern Uttar Pradesh.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Mirzapur Junction sits on
                      the Varanasi-Prayagraj-Mumbai line, with frequent
                      trains connecting it to both cities and beyond.
                    </li>
                    <li>
                      <strong>By road from Varanasi:</strong> About 65 km,
                      roughly a 1.5-2 hour drive — the most common approach
                      for travellers based in{" "}
                      <Link href="/blog/varanasi-travel-guide">Varanasi</Link>
                      .
                    </li>
                    <li>
                      <strong>By road from Prayagraj:</strong> About 90 km,
                      making Mirzapur a convenient stop for those travelling
                      between Prayagraj and Varanasi rather than a dedicated
                      detour.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're already travelling
                    the Varanasi-Prayagraj highway, build in a half-day
                    detour to Mirzapur rather than treating it as a separate
                    trip — the temples and fort sit right off the route.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Temples, Fort & Waterfalls</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Waterfall cascading through the Vindhya hills near Mirzapur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Vindhyachal Temple & the Tridevi Circuit</h3>
                  <p>
                    The Vindhyachal Temple, on the banks of the Ganga, is
                    dedicated to Goddess Vindhyavasini and counted among
                    India's Shakti Peethas — sites believed to mark where
                    parts of the goddess Sati fell. Pilgrims traditionally
                    complete a triangular circuit connecting Vindhyachal with
                    two nearby temples, Kali Khoh and Ashtabhuja Devi, each
                    representing a different aspect of the Devi — together
                    known locally as the Tridevi circuit. It's one of the
                    more active pilgrimage traditions in this part of Uttar
                    Pradesh, drawing steady crowds especially during Navratri.
                  </p>
                  <h3>Chunar Fort</h3>
                  <p>
                    Perched on a rocky outcrop overlooking the Ganga, Chunar
                    Fort carries a long and layered past — associated at
                    various points with Hindu, Mughal, and later British
                    colonial control, each leaving its mark on the
                    structure. Its commanding riverside position made it a
                    strategically valuable stronghold for centuries, and the
                    fort's ramparts, old cannons, and river views make for
                    an evocative half-day visit.
                  </p>
                  <h3>Sirsi Falls & Wyndham Falls</h3>
                  <p>
                    The Vindhya hills around Mirzapur hide several seasonal
                    waterfalls, of which Sirsi Falls and Wyndham Falls are
                    the best known and most accessible. Both run fullest in
                    the weeks just after the monsoon and offer a scenic,
                    cooler counterpoint to the town's temples and fort —
                    worth the detour if your visit lines up with the right
                    season.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mirzapur</h2>
                  <p>
                    Mirzapur has modest but adequate accommodation options
                    for an overnight stay; many travellers alternatively base
                    themselves in Varanasi and visit as a day trip.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Simple hotels near the railway station",
                          "Budget lodges in the town centre",
                          "Basic dharamshalas near the temples",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Standard hotels along the highway",
                          "Riverside-view guesthouses",
                          "Business-class hotels in town",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Best available hotels in Mirzapur town",
                          "Heritage-style stays near Chunar",
                          "Upscale options via a Varanasi base",
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
                        day: "Day 1",
                        title: "Temples & Chunar Fort",
                        color: "bg-purple-700",
                        activities: [
                          "Morning at Vindhyachal Temple and the Tridevi circuit",
                          "Afternoon visit to Chunar Fort",
                          "Evening riverside walk along the Ganga",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Waterfalls & Carpet Weaving",
                        color: "bg-forest-600",
                        activities: [
                          "Morning trip to Sirsi Falls or Wyndham Falls",
                          "Visit a local carpet-weaving workshop",
                          "Afternoon drive onward to Prayagraj or back to Varanasi",
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
                    * With less time, all of Mirzapur's core sights can be
                    covered as a well-planned single day trip from{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mirzapur</h2>
                  <ul>
                    <li>
                      <strong>Local dhabas and eateries:</strong> Simple,
                      hearty North Indian vegetarian thalis and street food
                      around the town centre and near the railway station.
                    </li>
                    <li>
                      <strong>Prasad and sweet shops near the temples:</strong>{" "}
                      Traditional sweets and temple prasad sold around the
                      Vindhyachal complex.
                    </li>
                    <li>
                      <strong>Highway dhabas:</strong> Reliable stops along
                      the Varanasi-Prayagraj highway for travellers passing
                      through rather than staying overnight.
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
                            "₹1,000",
                            "₹2,800",
                            "₹6,500",
                          ],
                          ["Local transport/day", "₹300", "₹800", "₹2,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Temple & fort entry", "Free–₹50", "Free–₹50", "Free–₹50"],
                          ["Carpet workshop visit", "Free", "Free", "Free"],
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
                    * Figures are per person, per day. Most temple entries
                    are free; small donations are customary.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mirzapur</h2>
                  <ul>
                    <li>
                      <strong>Time waterfall visits carefully:</strong>{" "}
                      Sirsi and Wyndham Falls run thin outside the
                      post-monsoon window — check recent water flow before
                      making a special trip.
                    </li>
                    <li>
                      <strong>Visit the Tridevi circuit in one go:</strong>{" "}
                      Vindhyachal, Kali Khoh, and Ashtabhuja are close
                      enough to cover together in a morning.
                    </li>
                    <li>
                      <strong>Bargain respectfully at carpet workshops:</strong>{" "}
                      Genuine hand-knotted carpets take weeks of skilled
                      labour — prices reflect real craftsmanship, not just
                      tourist markup.
                    </li>
                    <li>
                      <strong>Wear sturdy shoes for Chunar Fort:</strong>{" "}
                      The ramparts and uneven stone surfaces are easier to
                      navigate in proper footwear.
                    </li>
                    <li>
                      <strong>Combine with a Varanasi-Prayagraj itinerary:</strong>{" "}
                      Mirzapur works best as a planned stop along that
                      route rather than a standalone trip.
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
                          "Visit the Tridevi temple circuit together",
                          "Check waterfall water levels before travelling",
                          "Explore a local carpet-weaving workshop",
                          "Wear sturdy shoes for the fort ramparts",
                          "Route through as part of a Varanasi-Prayagraj trip",
                          "Carry cash for small temple donations",
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
                          "Expect strong waterfalls in peak summer",
                          "Skip Chunar Fort as just a photo stop",
                          "Underestimate carpet-weaving as a craft",
                          "Visit during the busiest Navratri days if crowds bother you",
                          "Rush the Tridevi circuit without checking timings",
                          "Treat Mirzapur as only a highway pit stop",
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
                    <strong>🗺️ Extend the trip:</strong> Mirzapur pairs
                    naturally with{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>{" "}
                    to the east and{" "}
                    <Link href="/blog/chandauli-travel-guide">
                      Chandauli
                    </Link>{" "}
                    nearby — both easy additions to an eastern{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary.
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
                  "Mirzapur",
                  "Vindhyachal Temple",
                  "Chunar Fort",
                  "Uttar Pradesh",
                  "Carpet Weaving",
                  "Waterfalls",
                  "Shakti Peeth",
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

              <RelatedPostsGrid currentSlug="mirzapur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mirzapur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
