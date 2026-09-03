// src/app/blog/vrindavan-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Vrindavan Travel Guide: Temples & Krishna Lore",
  description:
    "Complete Vrindavan travel guide — Banke Bihari Temple, ISKCON Krishna Balaram Mandir, Prem Mandir's light show, Nidhivan, how to reach from Mathura, where to stay, and a full visit plan.",
  keywords:
    "Vrindavan travel guide, Banke Bihari Temple, Prem Mandir, ISKCON Vrindavan, Krishna Balaram Mandir, Nidhivan, Radha Raman Temple, Braj region, how to reach Vrindavan, Vrindavan Holi",
  openGraph: {
    title: "Vrindavan Travel Guide: Temples & Krishna Lore",
    description:
      "Krishna's mythological childhood playground — Banke Bihari's curtain ritual, ISKCON's Krishna Balaram Mandir, and Prem Mandir's illuminated evening show.",
    url: "https://club.kudozz.in/blog/vrindavan-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/rishikesh/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "A riverside town at dusk with temple ghats, evocative of Vrindavan's sacred Yamuna riverfront",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrindavan Travel Guide: Temples & Krishna Lore",
    description:
      "Banke Bihari's curtain ritual, ISKCON's Krishna Balaram Mandir, and Prem Mandir's evening light show — the complete Vrindavan guide.",
    images: ["/images/destinations/rishikesh/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/vrindavan-travel-guide",
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
          headline: "Vrindavan Travel Guide: Temples & Krishna Lore",
          description:
            "Complete Vrindavan travel guide — Banke Bihari Temple, ISKCON Krishna Balaram Mandir, Prem Mandir's light show, Nidhivan, how to reach from Mathura, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/rishikesh/rishikesh.jpg",
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
            "@id": "https://club.kudozz.in/blog/vrindavan-travel-guide",
          },
          keywords:
            "Vrindavan, Banke Bihari Temple, Prem Mandir, ISKCON, Braj region, Krishna Temples",
          about: {
            "@type": "Place",
            name: "Vrindavan",
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
                name: "Vrindavan",
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
    q: "Why does the curtain at Banke Bihari Temple keep opening and closing?",
    a: "Tradition holds that Banke Bihari's gaze is so intensely captivating that devotees could lose themselves staring at the deity indefinitely, so temple priests draw a curtain across the idol every few minutes throughout the day, alternating between darshan (viewing) and a brief closed interval — unlike most temples, where the idol stays visible continuously.",
  },
  {
    q: "How far is Vrindavan from Mathura?",
    a: "Vrindavan is about 15km from Mathura, roughly a 20-30 minute auto-rickshaw or taxi ride depending on traffic. The two towns are commonly visited together, and many travellers base themselves in one and day-trip to the other.",
  },
  {
    q: "What is Prem Mandir known for?",
    a: "Prem Mandir is a modern, gleaming white marble temple complex completed in 2012, known for its intricate carvings depicting scenes from Krishna and Radha's life and, especially, its evening light-and-water fountain show that draws large crowds after dark.",
  },
  {
    q: "Can visitors enter Nidhivan?",
    a: "Nidhivan is open to visitors during daylight hours, but it closes to the public before dusk. Local belief holds that Krishna and the gopis perform the Raas Leela there each night, and that anyone who stays past closing risks going mad or blind — the sanctuary's Tulsi trees are also said to transform into gopis after dark. Whatever one's view of the legend, the closing time is strictly observed.",
  },
  {
    q: "Is Vrindavan only about temples?",
    a: "Mostly, yes — Vrindavan's identity is built almost entirely around its temples and its association with Krishna's mythological childhood. It's also historically known for its community of widows who came to the town seeking spiritual refuge, supported today by several ashrams; visitors should approach this aspect of the town with sensitivity rather than as a curiosity.",
  },
  {
    q: "When should I visit Vrindavan for festivals?",
    a: "Janmashtami (Krishna's birthday, typically August/September) and Holi (February/March) are Vrindavan's biggest festival windows, both drawing enormous crowds with elaborate temple decorations and celebrations. Visit then for the spectacle, or avoid those dates for a calmer trip.",
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
  { id: "introduction", title: "Krishna's Playground", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vrindavan", level: 2 },
  { id: "attractions", title: "Temples & Sacred Sites", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function VrindavanGuidePage() {
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
              alt="A riverside town at dusk with temple ghats, evocative of Vrindavan's sacred Yamuna riverfront"
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
                { label: "Vrindavan", href: null },
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
                "Vrindavan",
                "Banke Bihari Temple",
                "Prem Mandir",
                "Uttar Pradesh",
                "ISKCON",
                "Braj Region",
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
              Vrindavan: Temples, Krishna Lore & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Krishna's mythological childhood playground — Banke Bihari's
              famous curtain ritual, ISKCON's Krishna Balaram Mandir, and
              Prem Mandir's dazzling evening light show.
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
                  text: "Braj Region, Uttar Pradesh",
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
                  <h2>Krishna's Playground</h2>
                  <p>
                    <strong>Vrindavan</strong> sits about 15km from{" "}
                    <Link href="/blog/mathura-travel-guide">Mathura</Link>{" "}
                    on the banks of the Yamuna, and in Hindu tradition, it
                    is the forest-turned-town where the young Krishna spent
                    his childhood and youth — herding cows, playing his
                    flute, and, per legend, dancing the Raas Leela with
                    Radha and the gopis. Little of that pastoral landscape
                    survives today; instead, Vrindavan is a dense town of
                    thousands of temples, ranging from centuries-old stone
                    shrines to gleaming modern marble complexes.
                  </p>
                  <p>
                    The town's best-known site is the{" "}
                    <strong>Banke Bihari Temple</strong>, famous for a
                    curtain that opens and closes every few minutes during
                    darshan rather than staying drawn back — tradition
                    holds this protects devotees from the deity's intense
                    gaze. Nearby, the modern{" "}
                    <strong>ISKCON Vrindavan</strong> complex (Krishna
                    Balaram Mandir) and the newer{" "}
                    <strong>Prem Mandir</strong>, with its evening
                    light-and-water show, draw both devotees and curious
                    travellers in equal number.
                  </p>
                  <p>
                    Vrindavan is also, historically, home to a community of
                    widows who travelled here seeking spiritual refuge — a
                    part of the town's identity supported today by several
                    ashrams, and one worth approaching respectfully rather
                    than as a photo opportunity.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🪈</span> Vrindavan at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "~15km from Mathura, on the Yamuna",
                        },
                        {
                          icon: "🚕",
                          label: "From Mathura",
                          value: "~20-30 min by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Banke Bihari, ISKCON, Prem Mandir",
                        },
                        {
                          icon: "🎆",
                          label: "Big Festivals",
                          value: "Janmashtami, Holi",
                        },
                        {
                          icon: "🌳",
                          label: "Sacred Site",
                          value: "Nidhivan (closes at dusk)",
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
                  <h2>Best Time to Visit Vrindavan</h2>
                  <p>
                    Like the rest of the Braj region, Vrindavan is best
                    visited in the cooler months, with two major festivals
                    creating dramatically different — and dramatically
                    busier — versions of the same town.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable temperatures for walking between temples and sitting through longer darshan queues without the summer heat.",
                      },
                      {
                        season: "Feb / Mar",
                        emoji: "🎨",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Holi — spectacular but packed",
                        text: "Vrindavan's Holi celebrations, especially at Banke Bihari Temple, are among the most famous in India — expect huge crowds and book well ahead.",
                      },
                      {
                        season: "Aug / Sep",
                        emoji: "🎆",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Janmashtami — Krishna's birthday",
                        text: "Temples across Vrindavan are elaborately decorated and stay open through the night for Krishna's birth celebrations — a major draw for devotees.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Peak summer heat makes daytime temple-hopping uncomfortable; if you must visit, plan around early mornings and evenings.",
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
                    <strong>Our pick:</strong> October to March for
                    pleasant sightseeing. Time your trip around Janmashtami
                    or Holi specifically if you want the festival energy —
                    otherwise, avoid those dates for a calmer visit.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Vrindavan</h2>
                  <p>
                    Vrindavan shares its gateway with Mathura, and the
                    short hop between the two is the easiest leg of most
                    Braj itineraries.
                  </p>
                  <ul>
                    <li>
                      <strong>From Mathura:</strong> Auto-rickshaws, taxis,
                      and shared vikrams cover the roughly 15km distance in
                      20-30 minutes — the most common way travellers reach
                      Vrindavan.
                    </li>
                    <li>
                      <strong>By train:</strong> Mathura Junction is the
                      nearest major railhead, connected to Delhi (~2-3
                      hours) and Agra (~1 hour); Vrindavan also has its own
                      smaller Vrindavan railway station with limited
                      connectivity.
                    </li>
                    <li>
                      <strong>By road:</strong> Both the Yamuna Expressway
                      and NH19 bring you within easy reach via Mathura; taxi
                      and bus services run directly from Delhi and Agra.
                    </li>
                    <li>
                      <strong>Getting around Vrindavan:</strong> The temple
                      lanes are dense and often best explored on foot or by
                      cycle-rickshaw; e-rickshaws cover the longer stretches
                      to Prem Mandir and ISKCON.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Vrindavan's temple lanes
                    are narrow and vehicle-free in places — wear
                    comfortable footwear you can slip on and off easily,
                    since most temples require you to remove shoes at the
                    entrance.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Temples & Sacred Sites in Vrindavan</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/rishikesh/rishikesh.jpg"
                      alt="Riverside temple town scenery representative of Vrindavan's ghats and shrines along the Yamuna"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Banke Bihari Temple</h3>
                  <p>
                    Vrindavan's most-visited temple, dedicated to Krishna
                    in his "Banke Bihari" form. Unlike almost any other
                    Hindu temple, the idol here is deliberately kept
                    hidden behind a curtain that priests draw open and
                    closed every few minutes throughout the day — belief
                    holds that Bihariji's gaze is so captivating that
                    devotees could lose all sense of themselves if allowed
                    to stare continuously. Expect dense crowds, especially
                    in the evenings and during festivals.
                  </p>
                  <h3>ISKCON Vrindavan (Krishna Balaram Mandir)</h3>
                  <p>
                    Built by the International Society for Krishna
                    Consciousness, this temple complex is one of ISKCON's
                    most significant sites worldwide and includes the
                    samadhi (memorial shrine) of the movement's founder,
                    A.C. Bhaktivedanta Swami Prabhupada. It draws a large
                    number of international devotees alongside domestic
                    pilgrims, and its grounds are notably calmer and more
                    orderly than the older temple lanes.
                  </p>
                  <h3>Prem Mandir</h3>
                  <p>
                    A striking modern temple complex completed in 2012,
                    built almost entirely in white Italian marble and
                    covered in intricate carvings depicting scenes from
                    Radha-Krishna and Sita-Ram lore. Prem Mandir is best
                    known for its evening show — coloured lights and
                    fountains set against the illuminated temple facade —
                    which draws large crowds after sunset.
                  </p>
                  <h3>Nidhivan & Radha Raman Temple</h3>
                  <p>
                    Nidhivan is a small, dense forest grove tied to the
                    legend of the Raas Leela — Krishna's nightly dance with
                    Radha and the gopis — and is closed to visitors before
                    dusk in keeping with the belief that the dance resumes
                    each night. Nearby, the centuries-old Radha Raman
                    Temple houses a self-manifested deity and is considered
                    one of Vrindavan's most sacred and historic shrines,
                    quieter and more traditional than the town's bigger,
                    newer complexes.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Vrindavan</h2>
                  <p>
                    Accommodation ranges from simple pilgrim guesthouses
                    and ashram stays to well-equipped hotels, mostly
                    clustered around the Parikrama Marg and the roads
                    leading to ISKCON and Prem Mandir.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🙏",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Ashram and dharamshala stays",
                          "Simple guesthouses near the temples",
                          "ISKCON guesthouse rooms",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹5,000/night",
                        picks: [
                          "Hotels along Parikrama Marg",
                          "Business hotels near Chhatikara Road",
                          "Properties close to Prem Mandir",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "₹6,000–₹14,000+/night",
                        picks: [
                          "Branded resort-style hotels",
                          "Spa and wellness retreats on the outskirts",
                          "Premium heritage-style properties",
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
                        title: "Core Temples",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at Banke Bihari Temple and the old town lanes",
                          "Afternoon at ISKCON Vrindavan (Krishna Balaram Mandir)",
                          "Evening light show at Prem Mandir",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Quieter Sites & Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at Radha Raman Temple and Nidhivan (before dusk closing)",
                          "Optional side trip to Mathura or Govardhan",
                          "Evening departure or onward travel",
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
                    * Combine with{" "}
                    <Link href="/blog/mathura-travel-guide">Mathura</Link>{" "}
                    (15km) and{" "}
                    <Link href="/blog/govardhan-travel-guide">
                      Govardhan
                    </Link>{" "}
                    (~40km) for a fuller Braj region trip of 3-4 days.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Vrindavan</h2>
                  <ul>
                    <li>
                      <strong>Satvik vegetarian food:</strong> Given
                      Vrindavan's religious character, nearly all food here
                      is pure vegetarian and often onion-and-garlic-free,
                      served in temple-run kitchens and small eateries
                      alike.
                    </li>
                    <li>
                      <strong>ISKCON's Govinda's restaurant:</strong> A
                      well-known vegetarian dining option within the ISKCON
                      complex, popular with both pilgrims and travellers.
                    </li>
                    <li>
                      <strong>Sweet shops near Banke Bihari:</strong> Try
                      rabri, kalakand, and other milk-based sweets from the
                      lanes around the main temple.
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
                            "₹3,200",
                            "₹8,500",
                          ],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
                          ["Food/day", "₹350", "₹900", "₹2,200"],
                          [
                            "Auto from Mathura (one-way)",
                            "₹150",
                            "₹300",
                            "₹600",
                          ],
                          ["Temple donations", "₹100", "₹300", "₹500+"],
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
                    * Figures are per person, per day, in Indian Rupees.
                    Expect higher accommodation costs during Janmashtami
                    and Holi.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Vrindavan</h2>
                  <ul>
                    <li>
                      <strong>Check darshan timings:</strong> Banke Bihari
                      and other major temples close for a few hours around
                      midday — plan your visit around morning or evening
                      darshan windows.
                    </li>
                    <li>
                      <strong>Respect Nidhivan's closing time:</strong>{" "}
                      The grove closes to visitors before dusk — don't try
                      to linger past posted hours.
                    </li>
                    <li>
                      <strong>Remove leather items at some temples:</strong>{" "}
                      Leather belts and wallets are restricted at a few
                      shrines — check before entering if unsure.
                    </li>
                    <li>
                      <strong>Be mindful near the ashrams:</strong>{" "}
                      Vrindavan's community of widows and the ashrams that
                      support them are part of everyday town life, not a
                      sightseeing stop — avoid photographing residents
                      without permission.
                    </li>
                    <li>
                      <strong>Watch the Prem Mandir light show after
                      sunset:</strong> Timings vary seasonally — check
                      locally on the day.
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
                          "Check darshan timings before heading to a temple",
                          "Dress modestly and remove shoes as required",
                          "Watch Prem Mandir's evening light show",
                          "Visit Nidhivan before dusk, not after",
                          "Try Govinda's or another ISKCON dining option",
                          "Combine your trip with Mathura and Govardhan",
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
                          "Show up at Banke Bihari during its midday closure",
                          "Try to enter Nidhivan after dusk",
                          "Photograph ashram residents without permission",
                          "Wear leather items at temples that restrict them",
                          "Expect a quiet visit during Janmashtami or Holi",
                          "Rush between temples without checking timings first",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Vrindavan
                    with{" "}
                    <Link href="/blog/mathura-travel-guide">Mathura</Link>,
                    just 15km away, and{" "}
                    <Link href="/blog/govardhan-travel-guide">
                      Govardhan
                    </Link>{" "}
                    for its parikrama path, to complete the Braj circuit —
                    all part of a wider{" "}
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
                  "Vrindavan",
                  "Banke Bihari Temple",
                  "Prem Mandir",
                  "Uttar Pradesh",
                  "ISKCON",
                  "Braj Region",
                  "Krishna Temples",
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

              <RelatedPostsGrid currentSlug="vrindavan-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="vrindavan-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
