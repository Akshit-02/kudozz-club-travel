// src/app/blog/yamunotri-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yamunotri Travel Guide: Trek, Hot Springs & Tips",
  description:
    "Complete Yamunotri guide — the Char Dham temple at the Yamuna's source, the Janki Chatti trek, Surya Kund hot spring, how to reach via Barkot, where to stay, and a full visit plan.",
  keywords:
    "Yamunotri, Yamunotri temple, Yamunotri trek, Char Dham Yatra, Janki Chatti, Surya Kund, Yamunotri hot spring, Yamunotri best time to visit, how to reach Yamunotri, Barkot, Divya Shila, Yamuna river source",
  openGraph: {
    title: "Yamunotri Travel Guide: Trek, Hot Springs & Tips",
    description:
      "The traditional starting point of the Char Dham Yatra — a forested Himalayan trek from Janki Chatti to the source of the Yamuna, with its distinctive hot-spring prasad ritual.",
    url: "https://club.kudozz.in/blog/yamunotri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Forested Himalayan trail on the approach to Yamunotri temple, Uttarakhand",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yamunotri Travel Guide: Trek, Hot Springs & Tips",
    description:
      "The Char Dham Yatra's traditional first stop — a forested trek to the source of the Yamuna, with its distinctive Surya Kund hot-spring ritual. The complete Yamunotri guide.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/yamunotri-travel-guide",
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
          headline: "Yamunotri Travel Guide: Trek, Hot Springs & Tips",
          description:
            "Complete Yamunotri guide — the Char Dham temple at the Yamuna's source, the Janki Chatti trek, Surya Kund hot spring, how to reach via Barkot, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
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
            "@id": "https://club.kudozz.in/blog/yamunotri-travel-guide",
          },
          keywords:
            "Yamunotri, Char Dham, Janki Chatti, Surya Kund, Yamuna river, Barkot, Divya Shila",
          about: {
            "@type": "Place",
            name: "Yamunotri",
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
                name: "Yamunotri",
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
    q: "Why is Yamunotri visited first in the Char Dham Yatra?",
    a: "Tradition orders the Char Dham circuit as Yamunotri, Gangotri, Kedarnath, and Badrinath, moving roughly west to east across Garhwal. Yamunotri's temple, honouring the source of the Yamuna river, is treated as the natural starting point before pilgrims move on to Gangotri (source of the Ganga) and then to the Kedarnath and Badrinath shrines further east.",
  },
  {
    q: "How difficult is the trek to Yamunotri temple?",
    a: "The trek from Janki Chatti to the temple is roughly 5-6 km one way on a well-maintained paved pilgrim path, gaining a few hundred metres of elevation. It's manageable for most reasonably fit travellers in 3-4 hours, and pony, palanquin (doli), and porter services are widely available at Janki Chatti for those who prefer not to walk the full distance.",
  },
  {
    q: "What is Surya Kund and what happens there?",
    a: "Surya Kund is a natural hot spring right beside the Yamunotri temple. In a ritual distinctive to Yamunotri, pilgrims tie raw rice and potatoes in a cloth pouch and dip it into the spring — the geothermal heat cooks them, and the cooked food is then offered as prasad and taken back home.",
  },
  {
    q: "When does the Yamunotri temple open each year?",
    a: "The temple typically opens around Akshaya Tritiya in late April or early May and closes around Diwali in October or November, following the traditional Hindu calendar. Exact dates are announced annually and shift by a few days year to year, so check the current year's schedule before travelling.",
  },
  {
    q: "How do I reach Janki Chatti, the trek starting point?",
    a: "Janki Chatti is reached by road via Dehradun, Mussoorie or Barkot — Barkot is the last major town before the final stretch, roughly 40 km before Janki Chatti. Shared taxis and buses run this route from Dehradun and Rishikesh, especially during the Char Dham season.",
  },
  {
    q: "Can I visit Yamunotri without doing the full Char Dham circuit?",
    a: "Yes. Many travellers visit Yamunotri as a standalone trip, particularly if time or fitness limits a full Char Dham circuit. It's the most geographically separate of the four dhams from the others, so pairing it with just one more site (commonly Gangotri) rather than all four is a common, practical alternative.",
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
  { id: "introduction", title: "Source of the Yamuna", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Yamunotri", level: 2 },
  { id: "attractions", title: "The Trek & Key Sites", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function YamunotriGuidePage() {
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
              src="/images/destinations/kasol/kasol.jpg"
              alt="Forested Himalayan trail on the approach to Yamunotri temple, Uttarakhand"
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
                { label: "Yamunotri", href: null },
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
                "Yamunotri",
                "Char Dham",
                "Janki Chatti",
                "Pilgrimage",
                "Himalayan Trek",
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
              Yamunotri: Trek, Temple & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The traditional starting point of the Char Dham Yatra — a
              forested trek from Janki Chatti to the source of the Yamuna,
              past a hot spring where pilgrims cook their own prasad.
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
                  text: "Uttarkashi District, Garhwal Himalaya",
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
                  <h2>Source of the Yamuna</h2>
                  <p>
                    <strong>Yamunotri</strong> is one of the four{" "}
                    <strong>Char Dham</strong> pilgrimage sites of
                    Uttarakhand, dedicated to the goddess Yamuna and built at
                    the traditional source of the Yamuna river, at roughly
                    3,293 metres in Uttarkashi district. It's conventionally
                    visited first in the Char Dham circuit — Yamunotri,{" "}
                    <Link href="/blog/gangotri-travel-guide">Gangotri</Link>,{" "}
                    <Link href="/blog/kedarnath-travel-guide">Kedarnath</Link>
                    , then{" "}
                    <Link href="/blog/badrinath-travel-guide">
                      Badrinath
                    </Link>{" "}
                    — moving broadly west to east across the Garhwal
                    Himalaya.
                  </p>
                  <p>
                    Unlike Kedarnath's longer trek or Gangotri's roadside
                    temple, Yamunotri sits at the end of a relatively short —
                    if steep — 5-6 km path from Janki Chatti, walkable by
                    most fit travellers in a few hours, or covered by pony
                    and palanquin for those who prefer not to walk. The
                    temple itself is modest, but the setting — glacial
                    peaks, dense pine and deodar forest, and the roaring
                    Yamuna gorge alongside the path — gives the trek its
                    character.
                  </p>
                  <p>
                    Beside the temple, a natural hot spring called{" "}
                    <strong>Surya Kund</strong> hosts one of the more
                    distinctive rituals of any Char Dham site: pilgrims cook
                    rice and potatoes in the geothermally heated water and
                    offer the result as prasad.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Yamunotri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Uttarkashi District, Uttarakhand",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~3,293m",
                        },
                        {
                          icon: "🥾",
                          label: "Trek",
                          value: "~5-6 km from Janki Chatti",
                        },
                        {
                          icon: "🌡️",
                          label: "Temple Season",
                          value: "Late Apr/May – Nov",
                        },
                        {
                          icon: "♨️",
                          label: "Known For",
                          value: "Surya Kund Hot Spring",
                        },
                        {
                          icon: "🚏",
                          label: "Base Town",
                          value: "Barkot / Janki Chatti",
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
                  <h2>Best Time to Visit Yamunotri</h2>
                  <p>
                    The temple itself is only open roughly six to seven
                    months a year, which narrows the practical window
                    considerably.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant daytime temperatures, clear trekking conditions, and the temple freshly reopened. The busiest window of the Char Dham season, so expect crowds around Akshaya Tritiya.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-stone-100 border-stone-300",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain brings a real landslide risk on the Barkot-Janki Chatti road and the trek path itself; many pilgrims postpone travel during peak monsoon.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Good alternative",
                        text: "Post-monsoon skies clear up, trails dry out, and crowds thin compared to the May-June rush — a strong second choice.",
                      },
                      {
                        season: "Nov – Apr",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Temple closed",
                        text: "Heavy snow closes the temple and makes the higher trail impassable; the idol is ceremonially moved down to Kharsali village for winter.",
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
                    <strong>Our pick:</strong> Late May to June, or September
                    to October — both offer stable weather and a safer trek,
                    while avoiding the monsoon's landslide risk on the
                    approach road.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Yamunotri</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Jolly Grant Airport in
                      Dehradun is the nearest airport, roughly 210 km from
                      Janki Chatti — about 7-8 hours by road.
                    </li>
                    <li>
                      <strong>By rail:</strong>{" "}
                      <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                      and Rishikesh are the nearest railheads, both a similar
                      distance and drive time as Dehradun.
                    </li>
                    <li>
                      <strong>By road:</strong> Drive via Dehradun/Mussoorie
                      and Barkot to Janki Chatti, the roadhead where the
                      motorable road ends. From there, it's a 5-6 km trek,
                      pony ride, or palanquin (doli) journey to the temple.
                    </li>
                    <li>
                      <strong>Barkot as a base:</strong> Most pilgrims
                      overnight in Barkot the night before the trek, since
                      Janki Chatti itself has limited accommodation compared
                      to Barkot.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Register for the mandatory
                    Char Dham biometric registration online before you
                    travel — it's required at checkpoints along the route
                    and is far quicker to complete in advance than at the
                    counter.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>The Trek & Key Sites</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="Pine forest trail along the route to Yamunotri temple, Uttarakhand"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Janki Chatti Trek</h3>
                  <p>
                    The pilgrim path from Janki Chatti to the Yamunotri
                    temple covers roughly 5-6 km one way, paved for most of
                    its length and gaining a few hundred metres in
                    elevation. It follows the Yamuna's gorge for much of the
                    way, through pine and deodar forest, with tea stalls at
                    intervals. Pony and palanquin (doli) services are
                    available at Janki Chatti for those unable to walk the
                    full distance.
                  </p>
                  <h3>Surya Kund Hot Spring</h3>
                  <p>
                    Right beside the temple, this natural hot spring is where
                    Yamunotri's most distinctive ritual takes place —
                    pilgrims tie rice and potatoes in a cloth pouch, dip it
                    into the geothermally heated water, and retrieve cooked
                    food a few minutes later to offer as prasad. It's one of
                    very few pilgrimage sites in India with this particular
                    custom.
                  </p>
                  <h3>Divya Shila</h3>
                  <p>
                    A naturally standing rock pillar near the temple,
                    worshipped by pilgrims before entering the main shrine.
                    It's considered an important stop on the short walk
                    around the temple complex.
                  </p>
                  <h3>Kharsali Village</h3>
                  <p>
                    A small village near Janki Chatti where the Yamuna
                    deity's idol is moved for the winter months when the
                    main temple closes — worth a short visit for its own
                    older temple and quieter Garhwali village atmosphere.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Yamunotri</h2>
                  <p>
                    Barkot has the widest range of accommodation and is the
                    most common overnight base; Janki Chatti has more basic
                    options closer to the trek start for those wanting an
                    earlier start the next morning.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "GMVN guesthouses in Barkot",
                          "Basic lodges at Janki Chatti",
                          "Dharamshalas near the trailhead",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Mid-size hotels in Barkot town",
                          "Riverside guesthouses along the Yamuna",
                          "Char Dham tour-operator stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹6,000–₹12,000+/night",
                        picks: [
                          "Better resort-style properties in Barkot",
                          "Premium riverside cottages",
                          "Full-service Char Dham packages",
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
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Dehradun to Barkot",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Dehradun/Rishikesh to Barkot",
                          "Check in, rest and acclimatise",
                          "Early dinner ahead of a pre-dawn start",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Janki Chatti Trek & Temple",
                        color: "bg-sky-600",
                        activities: [
                          "Early drive from Barkot to Janki Chatti",
                          "Trek (or pony/palanquin) to Yamunotri temple",
                          "Darshan, Surya Kund ritual, return trek",
                          "Drive back to Barkot or onward toward Gangotri",
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
                    * Most pilgrims continue on to{" "}
                    <Link href="/blog/gangotri-travel-guide">Gangotri</Link>{" "}
                    next, following the traditional Char Dham order.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Dhabas in Barkot:</strong> Simple North Indian
                      thalis, dal-rice, and Garhwali staples at pilgrim-
                      friendly prices.
                    </li>
                    <li>
                      <strong>Tea stalls along the trek:</strong> Basic
                      snacks, tea, Maggi noodles, and bottled water at
                      intervals along the Janki Chatti-Yamunotri path.
                    </li>
                    <li>
                      <strong>Langar/community kitchens:</strong> Free or
                      donation-based simple meals are sometimes available
                      near the temple during peak pilgrimage season.
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
                            "₹1,200",
                            "₹3,500",
                            "₹8,000",
                          ],
                          ["Pony (one way)", "₹1,200", "₹1,200", "₹1,200"],
                          ["Palanquin (one way)", "₹3,000", "₹3,000", "₹3,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Local transport/day", "₹600", "₹1,500", "₹3,000"],
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
                    * Figures are per person, per day (pony/palanquin figures
                    are one-way, per trip). Palanquin services are more
                    expensive for larger or heavier passengers.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Yamunotri</h2>
                  <ul>
                    <li>
                      <strong>Complete Char Dham biometric registration
                      first:</strong> It's mandatory and checked at
                      checkpoints en route — register online before you
                      travel to save time.
                    </li>
                    <li>
                      <strong>Start the trek early:</strong> Weather can
                      change quickly by afternoon; an early morning start
                      gives the clearest conditions and avoids the busiest
                      crowds.
                    </li>
                    <li>
                      <strong>Pack layered clothing:</strong> Janki Chatti
                      and the temple sit well above 2,500m — mornings and
                      evenings are cold even in the May-June season.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs are scarce beyond
                      Barkot — withdraw what you need before heading to
                      Janki Chatti.
                    </li>
                    <li>
                      <strong>Wear sturdy trekking shoes:</strong> The paved
                      path can still be steep, uneven, and slippery in wet
                      weather.
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
                          "Register for Char Dham biometrics in advance",
                          "Start the trek early morning",
                          "Carry layered warm clothing",
                          "Carry cash before leaving Barkot",
                          "Wear proper trekking shoes",
                          "Try the Surya Kund cooked-prasad ritual",
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
                          "Travel during peak monsoon (Jul-Aug)",
                          "Skip registration and expect a smooth checkpoint",
                          "Start the trek late afternoon",
                          "Rely on ATMs beyond Barkot",
                          "Bathe directly in the hot Surya Kund water",
                          "Underestimate the cold at altitude",
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
                    <strong>🗺️ Extend the trip:</strong> Yamunotri is most
                    naturally paired with{" "}
                    <Link href="/blog/gangotri-travel-guide">Gangotri</Link>{" "}
                    as the next stop on the Char Dham route, or with a stop
                    at{" "}
                    <Link href="/blog/haridwar-travel-guide">Haridwar</Link>{" "}
                    on the way back down.
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
                  "Yamunotri",
                  "Char Dham",
                  "Uttarakhand",
                  "Yamuna River",
                  "Janki Chatti",
                  "Pilgrimage",
                  "Himalayan Trek",
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

              <RelatedPostsGrid currentSlug="yamunotri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="yamunotri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
