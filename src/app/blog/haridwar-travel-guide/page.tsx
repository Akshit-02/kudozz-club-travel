// src/app/blog/haridwar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Haridwar Travel Guide: Ganga Aarti, Ghats & Temples",
  description:
    "Complete Haridwar guide — Har Ki Pauri's Ganga Aarti, Mansa Devi & Chandi Devi temples, the Kumbh Mela, how to reach, where to stay, and its role as gateway to Char Dham and Rishikesh.",
  keywords:
    "Haridwar travel guide, Har Ki Pauri, Ganga Aarti Haridwar, Mansa Devi Temple, Chandi Devi Temple, Haridwar Kumbh Mela, Char Dham gateway, Haridwar to Rishikesh, Haridwar Junction, Maya Devi Temple, Haridwar best time to visit, Sapta Puri, Uttarakhand pilgrimage",
  openGraph: {
    title: "Haridwar Travel Guide: Ganga Aarti, Ghats & Temples",
    description:
      "One of Hinduism's seven holiest cities — Har Ki Pauri's evening Ganga Aarti, hilltop temples reached by cable car, and the gateway to the entire Char Dham circuit.",
    url: "https://club.kudozz.in/blog/haridwar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/rishikesh/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "Riverside ghats and temple spires along the Ganga at Haridwar, Uttarakhand, at dusk",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Haridwar Travel Guide: Ganga Aarti, Ghats & Temples",
    description:
      "Har Ki Pauri's Ganga Aarti, hilltop temples, the Kumbh Mela, and the gateway to Char Dham — the complete Haridwar guide.",
    images: ["/images/destinations/rishikesh/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/haridwar-travel-guide",
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
          headline: "Haridwar Travel Guide: Ganga Aarti, Ghats & Temples",
          description:
            "Complete Haridwar guide — Har Ki Pauri's Ganga Aarti, Mansa Devi & Chandi Devi temples, the Kumbh Mela, how to reach, where to stay, and its role as gateway to Char Dham and Rishikesh.",
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
            "@id": "https://club.kudozz.in/blog/haridwar-travel-guide",
          },
          keywords:
            "Haridwar, Har Ki Pauri, Ganga Aarti, Mansa Devi Temple, Chandi Devi Temple, Kumbh Mela, Char Dham gateway, Rishikesh",
          about: {
            "@type": "Place",
            name: "Haridwar",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Haridwar",
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
                name: "Haridwar",
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
    q: "What time is the Ganga Aarti at Har Ki Pauri?",
    a: "The evening Ganga Aarti at Har Ki Pauri typically begins around sunset — roughly 6:00-6:30 PM in winter and 7:00-7:30 PM in summer, timings shift with daylight so it's worth checking the exact time locally on the day. Arrive at least 45-60 minutes early to find a good spot on the ghat steps, especially on weekends and during festivals.",
  },
  {
    q: "Is Haridwar a good base for the Char Dham Yatra?",
    a: "Yes — Haridwar is the traditional starting point for the Char Dham circuit (Yamunotri, Gangotri, Kedarnath, Badrinath). Most yatra buses, shared taxis, and tour operators originate here, and many pilgrims begin with a dip at Har Ki Pauri before setting off. It's also the last major town with full facilities — banking, medical, shopping — before the mountain roads begin.",
  },
  {
    q: "What is the difference between Haridwar and Rishikesh?",
    a: "Though only about 25 km apart on the same river, they have distinct characters. Haridwar is a temple town — sacred to Hindus as one of the Sapta Puri (seven holiest cities), with alcohol and meat banned within city limits, and its energy centred on ghats, aartis, and pilgrimage. Rishikesh, upstream, has grown into an adventure and yoga hub with white-water rafting, bungee jumping, and international yoga ashrams, and a more relaxed, backpacker-friendly atmosphere.",
  },
  {
    q: "When is the Kumbh Mela held in Haridwar?",
    a: "The Kumbh Mela rotates among four sacred river cities — Haridwar, Prayagraj, Nashik, and Ujjain — roughly every three years at one location, meaning each city hosts the full Kumbh Mela once every twelve years, with a smaller Ardh (Half) Kumbh Mela at Haridwar and Prayagraj at the six-year midpoint. The exact dates are set by planetary positions in the Hindu calendar. It draws tens of millions of pilgrims and is one of the largest peaceful gatherings on Earth.",
  },
  {
    q: "How do I reach the Mansa Devi and Chandi Devi temples?",
    a: "Both hilltop temples have a cable car (ropeway) option — the Mansa Devi Udankhatola from near Har Ki Pauri, and the Chandi Devi ropeway from across the river near Chandighat — which takes a few minutes each way. Fit visitors can also trek up on foot via stepped paths, typically 1-1.5 hours for Mansa Devi and a steeper 1.5-2 hours for Chandi Devi.",
  },
  {
    q: "How many days should I spend in Haridwar?",
    a: "One full day covers Har Ki Pauri, the evening aarti, and one hilltop temple comfortably. Two days lets you add both temples, Maya Devi Temple, and a more relaxed pace around the ghats. Many travellers combine Haridwar with Rishikesh as a single 3-4 day twin-city trip.",
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
  { id: "introduction", title: "Gateway of the Gods", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Haridwar", level: 2 },
  { id: "ghats-and-aarti", title: "Har Ki Pauri & Ganga Aarti", level: 2 },
  { id: "temples", title: "Temples & Hilltop Shrines", level: 2 },
  { id: "kumbh-mela", title: "The Kumbh Mela", level: 2 },
  { id: "char-dham-gateway", title: "Gateway to Char Dham", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HaridwarGuidePage() {
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
              alt="Riverside ghats and temple spires along the Ganga at Haridwar, Uttarakhand, at dusk"
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
                { label: "Haridwar", href: null },
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
                "Haridwar",
                "Uttarakhand",
                "Har Ki Pauri",
                "Ganga Aarti",
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
              Haridwar: Ganga Aarti, Ghats & Temples Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of Hinduism's seven holiest cities, where the Ganga leaves
              the Himalayan foothills for the plains — Har Ki Pauri's evening
              Ganga Aarti, hilltop temples, the Kumbh Mela, and the gateway to
              the entire Char Dham yatra.
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
                  text: "Haridwar District, Uttarakhand",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,100 words",
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
                  <h2>Gateway of the Gods</h2>
                  <p>
                    <strong>Haridwar</strong> — literally "Gateway to Hari
                    (Vishnu)" or, in an alternate reading, "Gateway to Hara
                    (Shiva)" — is one of the seven holiest cities in Hinduism,
                    the Sapta Puri, and among the oldest continuously
                    inhabited places in India. It sits at the exact point
                    where the Ganga, having tumbled down from its Himalayan
                    source, leaves the mountains and enters the northern
                    plains for the first time — a geographic threshold that
                    gives the city its enduring spiritual weight.
                  </p>
                  <p>
                    Unlike hill stations or adventure towns, Haridwar's whole
                    identity is built around the river and its rituals. Life
                    here revolves around <strong>Har Ki Pauri</strong>, the
                    city's most sacred ghat, where thousands gather every
                    evening for the Ganga Aarti — a ceremony of fire, chants,
                    and floating diyas that is, for many visitors, the single
                    most memorable experience in Uttarakhand. Alcohol and meat
                    are banned within city limits, reinforcing Haridwar's
                    identity as a place of pilgrimage rather than leisure
                    tourism.
                  </p>
                  <p>
                    Haridwar is also inseparable from its twin city upstream,{" "}
                    <Link href="/blog/rishikesh-adventure-travel-guide">
                      Rishikesh
                    </Link>
                    , just 25 km away on the same river — together they form
                    one of North India's most popular two-in-one trips,
                    pairing Haridwar's temple-town devotion with Rishikesh's
                    adventure sports and yoga scene. Haridwar is also the
                    traditional launch point for the{" "}
                    <strong>Char Dham Yatra</strong>, the pilgrimage circuit
                    to Yamunotri, Gangotri, Kedarnath, and Badrinath, and
                    hosts the <strong>Kumbh Mela</strong>, one of the largest
                    religious gatherings on the planet, on its rotating
                    12-year cycle.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕉️</span> Haridwar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Haridwar District, Uttarakhand",
                        },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Jolly Grant, Dehradun (~35 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Har Ki Pauri, Ganga Aarti",
                        },
                        {
                          icon: "🚌",
                          label: "Gateway To",
                          value: "Char Dham Yatra Circuit",
                        },
                        {
                          icon: "🚆",
                          label: "Rail",
                          value: "Haridwar Junction (major hub)",
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
                  <h2>Best Time to Visit Haridwar</h2>
                  <p>
                    Haridwar is a year-round pilgrimage destination, but
                    comfort, crowd levels, and river conditions shift sharply
                    with the seasons.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant weather makes the ghats comfortable to walk and sit at for the evening aarti. October-November and February-March are especially popular, with clear skies and manageable crowds outside major festival dates.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but workable",
                        text: "Daytime heat climbs, sometimes past 40°C by May-June, but early mornings and evenings at the ghats remain pleasant. This window overlaps with the start of the Char Dham Yatra season.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Peak monsoon — avoid",
                        text: "The Ganga runs high, fast, and murky, and bathing at the ghats is often restricted for safety. Heavy rain also disrupts road travel toward the Char Dham shrines.",
                      },
                      {
                        season: "Kumbh Years",
                        emoji: "🙏",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Exceptional but extremely crowded",
                        text: "During the Kumbh or Ardh Kumbh Mela, Haridwar sees an extraordinary spiritual gathering, but also extreme crowding, traffic restrictions, and stretched accommodation — plan far in advance if visiting during these dates.",
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
                    comfortable weather for the ghats, clear evening aartis,
                    and calmer river levels than the monsoon months.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Haridwar</h2>
                  <p>
                    Haridwar is one of the best-connected towns in
                    Uttarakhand, reachable comfortably by air, rail, or road
                    from across North India.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jolly Grant Airport in Dehradun
                      is the nearest, around 35 km away, with regular flights
                      from Delhi and other major cities. From the airport,
                      taxis and shared cabs reach Haridwar in about an hour.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Haridwar Junction is a major
                      railway station with direct trains from Delhi, Mumbai,
                      Kolkata, Chennai, and most large North Indian cities —
                      one of the most convenient ways to arrive, especially
                      overnight from Delhi.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected via NH334, with
                      Delhi roughly 5-6 hours away by car or bus. Regular bus
                      services run from Delhi's ISBT and other North Indian
                      cities, and Haridwar's own bus stand is a major hub for
                      onward Char Dham travel.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're combining Haridwar
                    with Rishikesh, note that Haridwar Junction is more useful
                    for the wider onward journey — Rishikesh's own station is
                    smaller with fewer direct long-distance trains.
                  </div>
                </section>

                {/* ── Ghats & Aarti ─────────────────────────────────────── */}
                <section id="ghats-and-aarti">
                  <h2>Har Ki Pauri & the Ganga Aarti</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/rishikesh/rishikesh.jpg"
                      alt="Pilgrims gathered at a Ganga-side ghat in Haridwar for the evening Ganga Aarti"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Har Ki Pauri</h3>
                  <p>
                    Har Ki Pauri — "the footsteps of the Lord" — is Haridwar's
                    holiest ghat and its beating heart. According to tradition,
                    the spot bears the footprint of Lord Vishnu, and taking a
                    dip here is believed to cleanse a lifetime of sins. It's
                    also the exact location where the Ganga completes its
                    descent from the mountains, making it one of the most
                    significant bathing points on the entire river. Pilgrims,
                    families, and sadhus gather here throughout the day, but
                    the ghat truly comes alive after sunset.
                  </p>
                  <h3>The Evening Ganga Aarti</h3>
                  <p>
                    Every evening at Har Ki Pauri, priests perform the{" "}
                    <strong>Ganga Aarti</strong> — a ritual of fire offered to
                    the river, accompanied by devotional chants, ringing
                    bells, and conch shells. Large brass lamps with multiple
                    flaming wicks are swept in circular motions before the
                    water as thousands watch from the ghat steps on both
                    banks. Many visitors also purchase small leaf-boats
                    holding a flower and a lit diya, setting them adrift on
                    the current — a simple, moving gesture that, multiplied by
                    hundreds of small flickering lights drifting downstream,
                    is one of the most photographed sights in North Indian
                    pilgrimage tourism.
                  </p>
                  <p>
                    Arrive at least 45-60 minutes early for a good vantage
                    point, especially on weekends, festival days, and during
                    the Kumbh season, when the ghat can draw enormous crowds.
                  </p>
                  <h3>Other Notable Ghats</h3>
                  <p>
                    Beyond Har Ki Pauri, Haridwar's riverfront stretches with
                    several other bathing ghats, each with its own local
                    significance, along with quieter stretches upstream and
                    downstream where the crowds thin considerably outside
                    aarti hours.
                  </p>
                </section>

                {/* ── Temples ────────────────────────────────────────────── */}
                <section id="temples">
                  <h2>Temples & Hilltop Shrines</h2>
                  <h3>Mansa Devi Temple</h3>
                  <p>
                    Perched atop Bilwa Parvat, Mansa Devi Temple is dedicated
                    to a form of the goddess Shakti believed to fulfil the
                    wishes of devotees — "Mansa" translates roughly to
                    "wish." A cable car (the Mansa Devi Udankhatola) carries
                    visitors up in a few minutes, offering sweeping views over
                    Haridwar and the Ganga along the way; a stepped footpath
                    is also an option for those who'd rather trek up, roughly
                    an hour on foot.
                  </p>
                  <h3>Chandi Devi Temple</h3>
                  <p>
                    On the opposite bank, atop Neel Parvat, Chandi Devi Temple
                    honours the goddess Chandi, said to have been established
                    by the philosopher Adi Shankaracharya in the 8th century.
                    Its own ropeway makes the ascent easy, though the hill is
                    somewhat steeper and quieter than Mansa Devi's, with dense
                    forest views on the way up and, on a clear day, distant
                    glimpses of the Himalayan foothills.
                  </p>
                  <h3>Maya Devi Temple</h3>
                  <p>
                    One of Haridwar's oldest temples and considered a Shakti
                    Peeth — a site associated with the goddess Sati in Hindu
                    mythology — Maya Devi Temple sits closer to the town
                    centre, easily combined with a visit to Har Ki Pauri.
                  </p>
                  <h3>Rajaji National Park</h3>
                  <p>
                    A short drive from the city, Rajaji National Park spans
                    dense forest along the Shivalik foothills and is home to
                    elephants, tigers, leopards, and a rich variety of
                    birdlife. Jeep safaris from designated entry gates make
                    for a worthwhile half-day detour for wildlife-inclined
                    travellers, offering a very different mood from the
                    temple-town bustle below.
                  </p>
                </section>

                {/* ── Kumbh Mela ─────────────────────────────────────────── */}
                <section id="kumbh-mela">
                  <h2>The Kumbh Mela</h2>
                  <p>
                    Haridwar is one of four sacred sites — alongside
                    Prayagraj, Nashik, and Ujjain — that host the{" "}
                    <strong>Kumbh Mela</strong> on a rotating cycle, based on
                    planetary positions in the Hindu calendar. Each city hosts
                    the full Kumbh Mela roughly once every twelve years, with
                    a smaller <strong>Ardh (Half) Kumbh Mela</strong> at the
                    midpoint. The festival draws staggering numbers of
                    pilgrims, sadhus, and akharas (monastic orders) for ritual
                    bathing at Har Ki Pauri, and is recognised as one of the
                    largest peaceful gatherings of people anywhere in the
                    world.
                  </p>
                  <p>
                    Visiting during a Kumbh year is an extraordinary
                    experience — but comes with serious crowding, stretched
                    accommodation, and traffic restrictions across the city.
                    If your visit coincides with these dates, book well in
                    advance and expect a very different, far busier Haridwar
                    than on a typical visit.
                  </p>
                </section>

                {/* ── Char Dham Gateway ──────────────────────────────────── */}
                <section id="char-dham-gateway">
                  <h2>Gateway to Char Dham</h2>
                  <p>
                    For centuries, Haridwar has served as the traditional
                    starting point of the <strong>Char Dham Yatra</strong> —
                    the pilgrimage circuit to the four sacred shrines of{" "}
                    <Link href="/blog/yamunotri-travel-guide">Yamunotri</Link>
                    , <Link href="/blog/gangotri-travel-guide">Gangotri</Link>
                    , <Link href="/blog/kedarnath-travel-guide">Kedarnath</Link>
                    , and{" "}
                    <Link href="/blog/badrinath-travel-guide">Badrinath</Link>
                    . Buses, shared taxis, and organised tour operators
                    heading to all four shrines originate from Haridwar's bus
                    stand, and many pilgrims begin their yatra with a
                    purifying dip at Har Ki Pauri before setting off into the
                    mountains.
                  </p>
                  <p>
                    Practically, Haridwar is also the last major town with
                    full city facilities — banks, ATMs, hospitals, larger
                    shops, and reliable mobile connectivity — before the roads
                    climb into the Garhwal Himalaya, so many travellers use it
                    to stock up before the yatra and unwind here again on the
                    way back down.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're planning the full
                    Char Dham circuit, arrange your registration and travel
                    permits in Haridwar or Rishikesh before departure — both
                    towns have official registration counters for the yatra.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Haridwar</h2>
                  <p>
                    Accommodation clusters mainly around Har Ki Pauri and
                    upper Haridwar (closer to the ghats and temples), with
                    quieter options further from the main crowds. Many
                    properties near Har Ki Pauri are run by ashrams and
                    trusts, reflecting the town's pilgrimage character.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛖",
                        range: "₹700–₹2,000/night",
                        picks: [
                          "Ashram guesthouses near Har Ki Pauri",
                          "Basic hotels in the main bazaar area",
                          "Dharamshalas (pilgrim rest houses)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "3-star hotels near the ghats",
                          "Riverside hotels with Ganga views",
                          "Comfortable business-style hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Upscale hotels on Haridwar-Rishikesh road",
                          "Riverside resort-style properties",
                          "Premium wellness-focused stays",
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
                        title: "Har Ki Pauri & the Ganga Aarti",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive and check in, morning at leisure",
                          "Afternoon walk along the ghats and main bazaar",
                          "Arrive early for the evening Ganga Aarti at Har Ki Pauri",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Temples & Rajaji National Park",
                        color: "bg-sky-600",
                        activities: [
                          "Morning cable car to Mansa Devi Temple",
                          "Chandi Devi Temple and Maya Devi Temple",
                          "Afternoon safari at Rajaji National Park (optional)",
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
                    * Most travellers extend this into a 3-4 day trip by
                    adding{" "}
                    <Link href="/blog/rishikesh-adventure-travel-guide">
                      Rishikesh
                    </Link>{" "}
                    just upstream, or by departing straight onward toward the
                    Char Dham circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Haridwar</h2>
                  <p>
                    As a pilgrimage town, Haridwar's food scene is entirely
                    vegetarian, alcohol- and meat-free, with a strong focus on
                    traditional North Indian and Uttarakhandi fare.
                  </p>
                  <ul>
                    <li>
                      <strong>Pure-veg thali restaurants:</strong> Widely
                      available across the main bazaar and near Har Ki Pauri,
                      serving classic North Indian vegetarian meals.
                    </li>
                    <li>
                      <strong>Sweet shops:</strong> Haridwar is well known for
                      its milk-based sweets and namkeen (savoury snacks) —
                      several long-running shops in the bazaar area are local
                      institutions worth seeking out.
                    </li>
                    <li>
                      <strong>Ashram dining halls:</strong> Many ashrams and
                      guesthouses serve simple, wholesome vegetarian meals to
                      guests and pilgrims, often at very reasonable rates.
                    </li>
                    <li>
                      <strong>Street food along the ghats:</strong> Chaat,
                      kachori-sabzi, and other North Indian street snacks are
                      widely available near Har Ki Pauri, especially in the
                      evening.
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
                            "₹4,000",
                            "₹10,000",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹200",
                            "₹500",
                            "₹1,500",
                          ],
                          ["Cable car (each temple)", "₹150–₹250", "₹150–₹250", "₹150–₹250"],
                          ["Daily total (approx.)", "₹1,900", "₹5,800", "₹14,500"],
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
                    * Figures are per person, per day, and exclude travel to
                    Haridwar itself. Ropeway prices are per round trip, per
                    temple.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Haridwar</h2>
                  <ul>
                    <li>
                      <strong>Respect the alcohol and meat ban:</strong>{" "}
                      Haridwar is strictly vegetarian and dry within city
                      limits — plan accordingly, and don't expect either to
                      be available.
                    </li>
                    <li>
                      <strong>Arrive early for the Ganga Aarti:</strong> Good
                      viewing spots at Har Ki Pauri fill up fast, especially
                      on weekends and festival days.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> As with any major
                      pilgrimage site, covered shoulders and knees are
                      appreciated, particularly inside temples.
                    </li>
                    <li>
                      <strong>Watch your belongings at the ghats:</strong>{" "}
                      Crowded areas like Har Ki Pauri can attract
                      pickpockets — keep valuables secure.
                    </li>
                    <li>
                      <strong>Check Kumbh Mela dates before booking:</strong>{" "}
                      If your travel window coincides with the Kumbh or Ardh
                      Kumbh, expect major crowding and book accommodation far
                      in advance.
                    </li>
                    <li>
                      <strong>Carry a light shawl in winter:</strong> Evenings
                      by the river can be noticeably cooler than the daytime
                      temperature, especially during the aarti.
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
                          "Arrive early for a good spot at the Ganga Aarti",
                          "Try the cable car to Mansa Devi and Chandi Devi",
                          "Dress modestly, especially inside temples",
                          "Sample the local sweets and vegetarian thalis",
                          "Combine your trip with nearby Rishikesh",
                          "Check Kumbh Mela dates before finalising plans",
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
                          "Expect alcohol or non-vegetarian food in town",
                          "Bathe at the ghats during high monsoon water levels",
                          "Leave valuables unattended in crowded ghat areas",
                          "Skip early arrival and expect a front-row aarti spot",
                          "Underestimate Kumbh-year crowding",
                          "Rush the Char Dham registration process",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Haridwar with{" "}
                    <Link href="/blog/rishikesh-adventure-travel-guide">
                      Rishikesh
                    </Link>{" "}
                    just upstream for rafting and yoga, or continue on toward
                    the{" "}
                    <Link href="/blog/badrinath-travel-guide">Badrinath</Link>
                    ,{" "}
                    <Link href="/blog/kedarnath-travel-guide">Kedarnath</Link>
                    ,{" "}
                    <Link href="/blog/gangotri-travel-guide">Gangotri</Link>,
                    and{" "}
                    <Link href="/blog/yamunotri-travel-guide">Yamunotri</Link>{" "}
                    shrines of the Char Dham circuit. See our full{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand travel guide
                    </Link>{" "}
                    for the bigger picture.
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
                  "Haridwar",
                  "Uttarakhand",
                  "Har Ki Pauri",
                  "Ganga Aarti",
                  "Rishikesh",
                  "Kumbh Mela",
                  "Pilgrimage",
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

              <RelatedPostsGrid currentSlug="haridwar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="haridwar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
