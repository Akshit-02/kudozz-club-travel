// src/app/blog/tarapith-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tarapith Travel Guide: Shakti Peeth Temple & Tips",
  description:
    "Complete Tarapith guide — the Maa Tara Shakti Peeth temple, the Mahashmashan cremation ground, Bengal's Tantric tradition, how to reach from Kolkata, and where to stay.",
  keywords:
    "Tarapith, Tarapith Temple, Maa Tara Temple, Shakti Peeth, Tarapith Mahashmashan, Bamakhepa, Rampurhat, Birbhum, Tantric tradition Bengal, Tarapith how to reach, Tarapith Kali Puja",
  openGraph: {
    title: "Tarapith Travel Guide: Shakti Peeth Temple & Tips",
    description:
      "One of the 51 Shakti Peethas — the fierce Tantric form of Goddess Tara, the Mahashmashan cremation ground, and Bengal's living Tantric tradition at Tarapith.",
    url: "https://club.kudozz.in/blog/tarapith-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Temple setting evocative of Tarapith's Maa Tara Temple, a Shakti Peeth in Birbhum, West Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarapith Travel Guide: Shakti Peeth Temple & Tips",
    description:
      "The Maa Tara Temple, the Mahashmashan, and Bengal's Tantric heartland — the complete Tarapith pilgrimage guide.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tarapith-travel-guide",
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
          headline: "Tarapith Travel Guide: Shakti Peeth Temple & Tips",
          description:
            "Complete Tarapith guide — the Maa Tara Shakti Peeth temple, the Mahashmashan cremation ground, Bengal's Tantric tradition, how to reach from Kolkata, and where to stay.",
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
            "@id": "https://club.kudozz.in/blog/tarapith-travel-guide",
          },
          keywords:
            "Tarapith, Maa Tara Temple, Shakti Peeth, Mahashmashan, Bamakhepa, Birbhum, Tantric tradition",
          about: {
            "@type": "Place",
            name: "Tarapith",
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
                name: "Tarapith",
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
    q: "What is Tarapith famous for?",
    a: "Tarapith is one of the 51 Shakti Peethas — sacred sites believed to mark where parts of the goddess Sati's body fell across the Indian subcontinent, according to Hindu mythology. Here she is worshipped as Maa Tara, a fierce Tantric form of the Divine Mother. Tarapith is also famous for its adjoining Mahashmashan (cremation ground), historically associated with Tantric sadhana (spiritual practice) and the revered saint Bamakhepa.",
  },
  {
    q: "What is the Mahashmashan and can visitors go there?",
    a: "The Mahashmashan is the cremation ground beside the Dwarka river next to Tarapith Temple, long associated with Tantric practitioners who traditionally meditated among its ashes as part of intense spiritual disciplines. Visitors can walk through and observe the area respectfully; it remains an active cremation ground, so appropriate conduct and sensitivity are expected.",
  },
  {
    q: "How do I reach Tarapith from Kolkata?",
    a: "By road, Tarapith is roughly 260 km from Kolkata, taking about 5-6 hours via NH12 and connecting roads through Birbhum district. By train, the nearest railhead is Rampurhat, about 10 km away, well connected to Kolkata's Howrah and Sealdah stations — from Rampurhat, autos and taxis cover the final stretch.",
  },
  {
    q: "Who was Bamakhepa?",
    a: "Bamakhepa (also spelled Bamdev or Vama Khepa) was a 19th-century mystic and devotee of Maa Tara closely associated with Tarapith, revered for his intense, unconventional spiritual practices at the Mahashmashan. He remains a deeply venerated figure in Bengal's Shakta and Tantric traditions, and his ashram and samadhi near the temple are an important stop for pilgrims.",
  },
  {
    q: "When is the best time to visit Tarapith?",
    a: "October to March offers the most comfortable weather for temple visits and walking around the ghats. Kali Puja, usually in October or November, is Tarapith's single biggest crowd event, along with other major dates on the Shakta festival calendar — visit then for the fullest atmosphere, or avoid it if you prefer a quieter experience.",
  },
  {
    q: "Is Tarapith safe and welcoming for general tourists, not just pilgrims?",
    a: "Yes. While Tarapith is first and foremost a working pilgrimage and Tantric site, it welcomes travellers interested in its history, architecture, and cultural significance. Basic courtesies apply — modest dress, respectful behaviour near the Mahashmashan, and an understanding that this is a living religious site rather than a tourist attraction.",
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
  { id: "introduction", title: "A Shakti Peeth in Birbhum", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tarapith", level: 2 },
  { id: "attractions", title: "Temple & Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TarapithGuidePage() {
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
              alt="Temple setting evocative of Tarapith's Maa Tara Temple, a Shakti Peeth in Birbhum, West Bengal"
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
                { label: "Tarapith", href: null },
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
                "Tarapith",
                "Shakti Peeth",
                "Maa Tara Temple",
                "Birbhum",
                "Pilgrimage",
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
              Tarapith: Shakti Peeth Temple & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the 51 Shakti Peethas — the fierce Tantric form of
              Goddess Tara, the Mahashmashan cremation ground, and centuries
              of Bengal's living Tantric tradition, roughly 5-6 hours from
              Kolkata.
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
                  text: "Birbhum District, West Bengal",
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
                  <h2>A Shakti Peeth in Birbhum</h2>
                  <p>
                    <strong>Tarapith</strong> is one of the most powerful and
                    atmospheric pilgrimage sites in{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , counted among the <strong>51 Shakti Peethas</strong> —
                    sacred sites across the subcontinent believed, in Hindu
                    mythology, to mark where parts of the goddess Sati's body
                    fell after Lord Shiva carried her remains in grief. At
                    Tarapith, tradition holds that the third eye of Sati fell
                    here, and the site is dedicated to <strong>Maa Tara</strong>
                    , a fierce Tantric form of the Divine Mother.
                  </p>
                  <p>
                    What sets Tarapith apart from many other Shakti Peethas is
                    its deep association with Bengal's <strong>Tantric
                    tradition</strong>. The <strong>Mahashmashan</strong>{" "}
                    (great cremation ground) adjoining the temple has for
                    centuries been a site of intense spiritual practice,
                    linked most famously with the 19th-century mystic{" "}
                    <strong>Bamakhepa</strong>, whose unconventional devotion
                    to Maa Tara made him one of Bengal's most revered
                    saint-figures.
                  </p>
                  <p>
                    The temple town sits in Birbhum district, close to the
                    base towns of Rampurhat and Dubrajpur, not far from{" "}
                    <Link href="/blog/santiniketan-travel-guide">
                      Santiniketan
                    </Link>{" "}
                    — Rabindranath Tagore's university town, also in Birbhum
                    — making the two an easy, if contrasting, pairing for
                    travellers exploring this part of Bengal.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕉️</span> Tarapith at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Birbhum District, West Bengal",
                        },
                        {
                          icon: "🚆",
                          label: "Nearest Station",
                          value: "Rampurhat (~10 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Shakti Peeth, Maa Tara Temple",
                        },
                        {
                          icon: "🔥",
                          label: "Notable Site",
                          value: "Mahashmashan (cremation ground)",
                        },
                        {
                          icon: "🪔",
                          label: "Peak Crowds",
                          value: "Kali Puja (Oct/Nov)",
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
                  <h2>Best Time to Visit Tarapith</h2>
                  <p>
                    Tarapith functions as a pilgrimage site year-round, but
                    Bengal's seasons and the temple's festival calendar both
                    affect comfort and crowd levels significantly.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather makes temple visits and walking around the ghats and Mahashmashan far more comfortable than the rest of the year.",
                      },
                      {
                        season: "Oct / Nov",
                        emoji: "🪔",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Kali Puja — peak crowds",
                        text: "The single biggest event on Tarapith's calendar, drawing enormous crowds of devotees. Powerful atmosphere, but expect long queues and packed lodgings.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot",
                        text: "Daytime heat is intense; plan temple visits for early morning or evening if travelling in this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Heavy rain can slow road travel from Kolkata; the temple and Mahashmashan remain open and functioning throughout.",
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
                    <strong>Our pick:</strong> November through February for
                    comfortable weather and a calmer temple experience —
                    unless you specifically want to witness Kali Puja, in
                    which case plan well ahead for the crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tarapith</h2>
                  <p>
                    Tarapith sits in Birbhum district, roughly 260 km from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>,
                    and is reachable comfortably by both road and rail.
                  </p>
                  <ul>
                    <li>
                      <strong>By train:</strong> The nearest railhead is{" "}
                      <strong>Rampurhat</strong>, about 10 km from the
                      temple, well connected to Kolkata's Howrah and Sealdah
                      stations by regular express trains. From Rampurhat,
                      autos and shared taxis cover the final stretch to
                      Tarapith.
                    </li>
                    <li>
                      <strong>By road:</strong> Roughly 260 km from Kolkata
                      via NH12, taking about 5-6 hours by car or bus
                      depending on traffic and stops en route.
                    </li>
                    <li>
                      <strong>Getting around Tarapith:</strong> The temple,
                      Mahashmashan, and most guesthouses are within easy
                      walking distance of each other in the compact temple
                      town.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If travelling by train,
                    book Rampurhat-bound tickets well ahead during Kali
                    Puja season — trains and onward transport both get
                    heavily booked.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Temple & Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Temple architecture similar in spirit to Tarapith's Maa Tara Temple, Birbhum"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Tarapith Temple (Maa Tara Temple)</h3>
                  <p>
                    The heart of the pilgrimage — a temple dedicated to Maa
                    Tara, worshipped here in her fierce, protective Tantric
                    form. The idol and sanctum draw a constant stream of
                    devotees seeking darshan, with queues lengthening
                    considerably around major festival dates. The ritual
                    worship here follows Shakta and Tantric traditions
                    distinct from many other Bengal temples.
                  </p>
                  <h3>Mahashmashan (The Great Cremation Ground)</h3>
                  <p>
                    Adjoining the temple beside the Dwarka river, the
                    Mahashmashan has for centuries been associated with
                    Tantric sadhana — practitioners historically meditated
                    among its ashes as part of intense spiritual disciplines
                    aimed at transcending fear and worldly attachment. It
                    remains an active cremation ground today, and visitors
                    should approach it with the same respect they'd show any
                    working religious site.
                  </p>
                  <h3>Bamakhepa's Ashram & Samadhi</h3>
                  <p>
                    A short walk from the main temple, this site
                    commemorates Bamakhepa, the 19th-century saint whose
                    unorthodox, deeply devoted worship of Maa Tara at the
                    Mahashmashan made him one of the most venerated figures
                    in Bengal's Shakta tradition. Many pilgrims consider a
                    visit here as essential as the main temple itself.
                  </p>
                  <h3>Dwarka River Ghats</h3>
                  <p>
                    The small river flowing past the Mahashmashan has its
                    own set of ghats where pilgrims bathe before entering the
                    temple — a ritual considered an important part of a
                    proper Tarapith visit.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Tarapith</h2>
                  <p>
                    As a working pilgrimage town, Tarapith's accommodation
                    is geared almost entirely toward visiting devotees —
                    simple, functional, and clustered close to the temple.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛖",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Pilgrim lodges near the temple",
                          "Basic dormitory-style rooms",
                          "Dharamshala-style guesthouses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Private rooms with attached bath",
                          "Small hotels near the main road",
                          "Guesthouses with basic dining",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🛏️",
                        range: "₹3,500–₹6,000+/night",
                        picks: [
                          "Air-conditioned hotel rooms",
                          "Larger hotels in nearby Rampurhat",
                          "Multi-room family accommodation",
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
                    * For a wider range of comfort-tier hotels, many
                    travellers base themselves in Rampurhat, a short taxi
                    ride from the temple.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Temple & Mahashmashan",
                        color: "bg-amber-700",
                        activities: [
                          "Morning arrival, check in near the temple",
                          "Bathe at the Dwarka river ghats before darshan",
                          "Darshan at the main Tarapith Temple",
                          "Visit the Mahashmashan and Bamakhepa's ashram",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Onward to Santiniketan (optional)",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning return visit to the temple if desired",
                          "Depart for Santiniketan, roughly 1.5-2 hours away",
                          "Explore Tagore's university town for contrast",
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
                    * Both towns sit in Birbhum district — see our{" "}
                    <Link href="/blog/santiniketan-travel-guide">
                      Santiniketan guide
                    </Link>{" "}
                    for details on pairing the two.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Tarapith</h2>
                  <ul>
                    <li>
                      <strong>Prasad and bhog counters near the temple:</strong>{" "}
                      Simple, blessed vegetarian meals available close to the
                      temple gates, popular with pilgrims wanting a quick,
                      ritually appropriate meal.
                    </li>
                    <li>
                      <strong>Local Bengali eateries:</strong> Small
                      restaurants around the main market serve everyday
                      Bengali thalis, both vegetarian and with fish, at
                      modest prices.
                    </li>
                    <li>
                      <strong>Rampurhat's wider dining options:</strong> For
                      more variety, the base town of Rampurhat has a broader
                      range of restaurants and sweets shops than Tarapith
                      itself.
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
                          ["Accommodation/night", "₹700", "₹2,000", "₹4,500"],
                          [
                            "Train (round trip, sleeper/AC)",
                            "₹500",
                            "₹1,200",
                            "₹2,500",
                          ],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          ["Local transport/day", "₹150", "₹300", "₹600"],
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
                    * Figures are per person, per day (except train fare, a
                    round-trip figure from Kolkata to Rampurhat). Donations
                    are entirely optional and vary widely.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Tarapith</h2>
                  <ul>
                    <li>
                      <strong>Approach the Mahashmashan respectfully:</strong>{" "}
                      It's an active cremation ground with deep spiritual
                      significance, not a sightseeing stop — observe quietly
                      and follow local cues.
                    </li>
                    <li>
                      <strong>Expect queues at the main temple:</strong>{" "}
                      Darshan lines can be long, especially on weekends and
                      festival days — arrive early morning for a shorter
                      wait.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Cover shoulders and
                      knees, and remove footwear before entering the temple
                      complex.
                    </li>
                    <li>
                      <strong>Be cautious with unofficial guides:</strong>{" "}
                      As at many pilgrimage sites, self-appointed guides may
                      approach offering "special" darshan or rituals for a
                      fee — stick to official temple procedures.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited in
                      the temple town itself; withdraw what you need in
                      Rampurhat or before travelling.
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
                          "Bathe at the ghats before entering the temple",
                          "Visit Bamakhepa's ashram alongside the main temple",
                          "Dress modestly and remove footwear at the complex",
                          "Arrive early to avoid the longest darshan queues",
                          "Carry enough cash for your full visit",
                          "Combine the trip with nearby Santiniketan",
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
                          "Treat the Mahashmashan as a casual photo stop",
                          "Accept unofficial 'special darshan' offers from strangers",
                          "Wear revealing clothing inside the temple",
                          "Expect wide ATM access in the temple town",
                          "Arrive without checking the festival calendar",
                          "Rush the visit if you want to also see the Mahashmashan properly",
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
                    <strong>🗺️ Extend the trip:</strong> Tarapith pairs
                    naturally with{" "}
                    <Link href="/blog/santiniketan-travel-guide">
                      Santiniketan
                    </Link>
                    , also in Birbhum district, or you can return to{" "}
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
                  "Tarapith",
                  "Shakti Peeth",
                  "West Bengal",
                  "Maa Tara Temple",
                  "Pilgrimage",
                  "Birbhum",
                  "Tantric Tradition",
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

              <RelatedPostsGrid currentSlug="tarapith-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tarapith-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
