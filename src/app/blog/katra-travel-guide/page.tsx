// src/app/blog/katra-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Katra & Vaishno Devi Yatra Guide: Route, Tips & Stay",
  description:
    "Complete Katra travel guide for the Vaishno Devi Yatra — registration, the 13 km trek route, helicopter booking, best time to visit, and where to stay.",
  keywords:
    "Katra travel guide, Vaishno Devi Yatra, Katra to Vaishno Devi distance, Vaishno Devi trek route, Vaishno Devi helicopter booking, Katra hotels, Vaishno Devi yatra registration, Ardhkuwari, Bhairon Temple Katra, Katra Jammu Kashmir",
  openGraph: {
    title: "Katra & Vaishno Devi Yatra Guide: Route, Tips & Stay",
    description:
      "Registration, the 13 km trek from Katra to Bhawan, helicopter booking, Bhairon Temple, and where to stay — the complete Vaishno Devi Yatra guide.",
    url: "https://club.kudozz.in/blog/katra-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain landscape of the Trikuta Hills surrounding Katra, base town for the Vaishno Devi Yatra",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Katra & Vaishno Devi Yatra Guide: Route, Tips & Stay",
    description:
      "Registration, the 13 km trek from Katra to Bhawan, helicopter booking, Bhairon Temple, and where to stay — the complete Vaishno Devi Yatra guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/katra-travel-guide",
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
          headline: "Katra & Vaishno Devi Yatra Guide: Route, Tips & Stay",
          description:
            "Complete Katra travel guide for the Vaishno Devi Yatra — registration, the 13 km trek route, helicopter booking, best time to visit, and where to stay.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/katra-travel-guide",
          },
          keywords:
            "Katra travel guide, Vaishno Devi Yatra, Katra to Vaishno Devi distance, Vaishno Devi trek route, Vaishno Devi helicopter booking, Katra hotels",
          about: {
            "@type": "Place",
            name: "Katra",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Katra",
              addressRegion: "Jammu and Kashmir",
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
                name: "Jammu & Kashmir",
                item: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Katra",
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
    q: "How many kms is Vaishno Devi from Katra?",
    a: "The Vaishno Devi shrine (Bhawan) is approximately 13 km from Katra by the main trekking track, starting at the Banganga checkpoint just outside town. Ardhkuwari, the customary halfway stop, is roughly 6 km in. A shorter, steeper track exists but the main paved route is what almost all yatris and pony/palki operators use.",
  },
  {
    q: "Is helicopter booking necessary for Vaishno Devi?",
    a: "No, it isn't necessary — the majority of pilgrims still walk. But it's a popular option for elderly travellers, young children, or anyone short on time, since it cuts the climb down to a short walk from Sanjichhat. Seats are limited and demand is high, so book online well in advance, especially around Navratri and weekends.",
  },
  {
    q: "How long does the Vaishno Devi trek take?",
    a: "Most walkers take 5 to 9 hours one way at a comfortable pace with rest stops, depending on fitness and crowd levels. Fit, fast trekkers can do it in under 5 hours. Pony and palki cover the distance somewhat faster, typically 4 to 6 hours, though queues at Banganga can add time on peak days.",
  },
  {
    q: "Can senior citizens do the Vaishno Devi Yatra?",
    a: "Yes, and it's done every day by pilgrims well into their seventies and eighties. Pony, palki (palanquin), battery-operated vehicles for the initial stretch, and helicopter service all make the yatra accessible without a full walking trek. We'd still recommend a basic fitness check with a doctor beforehand and an early, unhurried start.",
  },
  {
    q: "What is the best time to visit Vaishno Devi to avoid crowds?",
    a: "Weekdays outside the two Navratri festival periods (roughly late March–April and September–October) see noticeably thinner crowds and shorter darshan queues. Late monsoon (early September) and January–February, cold as they are, are generally the quietest windows of the year.",
  },
  {
    q: "Is registration mandatory for Vaishno Devi Yatra?",
    a: "Yes. A free Yatra Parchi (registration slip) is mandatory for every pilgrim and is checked at the Banganga checkpoint before the trek begins. It can be obtained online in advance through the Shrine Board's official portal or in person at registration counters in Katra, and requires a valid photo ID.",
  },
  {
    q: "What is Ardhkuwari and do I need to stop there?",
    a: "Ardhkuwari is a cave shrine roughly halfway along the route, associated with an episode from the Mata Vaishno Devi legend, and a popular rest point with food stalls and washrooms. Stopping isn't compulsory, but most pilgrims pause here to eat, refill water, and break the climb into two halves.",
  },
  {
    q: "Can the Vaishno Devi Yatra be completed in a single day?",
    a: "Yes — most pilgrims go up and return to Katra the same day, often starting before dawn to reach Bhawan by mid-morning. An overnight stay at Bhawan is also common among those who want to join the early-morning darshan queue when it's shortest, before descending or flying back down the next day.",
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
  { id: "introduction", title: "Katra: Gateway to Vaishno Devi", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Katra", level: 2 },
  { id: "yatra-route", title: "The Yatra Route & Registration", level: 2 },
  { id: "helicopter", title: "Helicopter Service", level: 2 },
  { id: "bhairon-temple", title: "Bhairon Temple", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "physical-prep", title: "Preparing for the Trek", level: 2 },
  { id: "itinerary", title: "Suggested Yatra Timeline", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KatraGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Mountain landscape of the Trikuta Hills surrounding Katra, base town for the Vaishno Devi Yatra"
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
                {
                  label: "Jammu & Kashmir",
                  href: "/blog/jammu-kashmir-travel-guide",
                },
                { label: "Katra", href: null },
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
                "Katra",
                "Vaishno Devi",
                "Pilgrimage",
                "Jammu & Kashmir",
                "Trekking",
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
              Katra & Vaishno Devi Yatra Guide: Route, Registration & Stay
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Everything you need for the Vaishno Devi Yatra — the 13 km trek
              from Katra to Bhawan, registration, helicopter booking, and
              where to stay before and after the climb.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "17 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Katra, Jammu & Kashmir",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,300 words",
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
                  <h2>Katra: Gateway to the Vaishno Devi Yatra</h2>
                  <p>
                    <strong>Katra</strong> is a small town in the Reasi
                    district of{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir
                    </Link>{" "}
                    that exists, almost entirely, for one purpose: it is the
                    base camp for the <strong>Vaishno Devi Yatra</strong>, the
                    pilgrimage to one of India's most visited and most
                    revered Hindu shrines. Every year, millions of pilgrims
                    pass through Katra's markets and registration counters on
                    their way up into the Trikuta Hills to seek darshan of
                    Mata Vaishno Devi — making it, by sheer footfall, one of
                    the busiest pilgrimage towns anywhere in the country.
                  </p>
                  <p>
                    The town itself sits at roughly <strong>870 metres</strong>{" "}
                    (2,850 ft) above sea level, ringed by forested hills, with
                    a single main road — Tarakote Marg — that funnels
                    everyone from the bus stand and railway station toward
                    the Banganga checkpoint where the actual trek begins.
                    Everything in Katra, from its hotel density to its purely
                    vegetarian food culture, is organised around the rhythm
                    of yatris arriving, resting, registering, and setting off
                    before dawn.
                  </p>
                  <p>
                    This guide covers the practical logistics in detail — the
                    registration process, the trek route itself, helicopter
                    booking, where to stay, and a full FAQ answering the
                    questions most pilgrims search for before they travel.
                    Whatever your plan — a day trip up and back, an overnight
                    stay at Bhawan, or a helicopter shortcut — the goal here
                    is to help you arrive prepared.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Katra at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Reasi, Jammu & Kashmir",
                        },
                        {
                          icon: "⛰️",
                          label: "Katra Elevation",
                          value: "~870 m (2,850 ft)",
                        },
                        {
                          icon: "🚶",
                          label: "Trek Distance",
                          value: "~13 km, Katra to Bhawan",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Year-round; Oct–Feb coolest",
                        },
                        {
                          icon: "🎉",
                          label: "Peak Crowd",
                          value: "Navratri (Mar–Apr, Sep–Oct)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Katra & Vaishno Devi</h2>
                  <p>
                    The shrine operates year-round and darshan is never
                    "closed" — but the experience of the yatra changes
                    substantially with the season, mostly because of crowd
                    volume rather than weather.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Apr",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Chaitra Navratri — peak crowd",
                        text: "The first of the year's two Navratri festivals draws enormous crowds and multi-hour darshan queues. Go only if the festival dates are part of the plan; otherwise avoid this window.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Summer holidays — busy, hot in Katra",
                        text: "School-holiday family crowds push numbers up, and Katra town itself gets genuinely hot by midday. The trek is more comfortable in the cooler early-morning hours.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Monsoon — thinner crowds, some caution",
                        text: "Rain makes sections of the paved track slippery and occasionally triggers short closures for landslide clearance. Crowds thin out noticeably, which some pilgrims prefer.",
                      },
                      {
                        season: "Oct – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Sharad Navratri, then cool & pleasant",
                        text: "Sharad Navratri (Sep–Oct) brings a second crowd peak; once it passes, November through February is cool, clear, and comfortable for trekking, aside from New Year's Eve crowds.",
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
                    <strong>Our pick:</strong> Late November to February, on a
                    weekday. The weather is crisp rather than brutally cold at
                    Katra's elevation, the two Navratri crowd surges are well
                    behind or ahead, and queue times at Bhawan drop
                    dramatically compared to peak season.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Katra</h2>
                  <p>
                    Katra is well connected for a town of its size, almost
                    entirely because of yatra traffic — road and rail links
                    into it are better maintained than most comparable towns
                    in the region.
                  </p>
                  <ul>
                    <li>
                      <strong>By Road from Jammu:</strong> Katra is
                      approximately 48 km from{" "}
                      <Link href="/blog/jammu-travel-guide">Jammu</Link>,
                      roughly 1.5–2 hours by taxi or bus on a well-surfaced
                      highway. Shared sumos, private cabs, and JKSRTC buses
                      all run this route frequently through the day.
                    </li>
                    <li>
                      <strong>By Train:</strong> The Shri Mata Vaishno Devi
                      Katra railway station sits right at the edge of town
                      and is directly connected to Delhi and other major
                      cities, including Vande Bharat services — arguably the
                      easiest way in for long-distance travellers, since it
                      avoids the Jammu road transfer entirely.
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest airport is Jammu
                      (Jammu Airport), about 50 km from Katra, with regular
                      flights from Delhi, Mumbai, and other metros. From the
                      airport, taxis to Katra take roughly the same 1.5–2
                      hours as from Jammu city.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your itinerary allows it,
                    booking a train straight into Katra Railway Station saves
                    an entire road transfer versus flying into Jammu — worth
                    checking availability first, especially around Navratri.
                  </div>
                </section>

                {/* ── Yatra Route ───────────────────────────────────────── */}
                <section id="yatra-route">
                  <h2>The Vaishno Devi Yatra Route from Katra</h2>
                  <p>
                    The climb from Katra to the shrine (referred to
                    throughout as <strong>Bhawan</strong>) covers roughly{" "}
                    <strong>13 km</strong> one-way on the main paved track,
                    gaining altitude to around 5,200 ft at the shrine itself.
                    It's a steady, well-maintained uphill walk rather than a
                    technical trek — no climbing gear or prior trekking
                    experience is needed — but the distance and gradient
                    still make it a genuine physical undertaking.
                  </p>

                  <h3>Registration: The Yatra Parchi</h3>
                  <p>
                    Before starting the trek, every pilgrim must obtain a{" "}
                    <strong>Yatra Parchi</strong> (registration slip) — this
                    is free, mandatory, and checked at the Banganga
                    checkpoint just past the edge of town. It can be
                    collected two ways:
                  </p>
                  <ul>
                    <li>
                      <strong>Online, in advance:</strong> Through the Shri
                      Mata Vaishno Devi Shrine Board's official yatra
                      registration portal — the far more convenient option,
                      since it skips the physical counter queue in Katra.
                    </li>
                    <li>
                      <strong>In person at Katra:</strong> Registration
                      counters near the bus stand and along Tarakote Marg
                      issue same-day slips; expect a longer wait here during
                      Navratri or weekends.
                    </li>
                  </ul>
                  <p>
                    A valid photo ID is required at the time of registration,
                    and the slip carries a QR/RFID code that's scanned at
                    checkpoints along the route — carry it (physical or
                    digital) for the entire yatra, not just at the start.
                  </p>

                  <h3>The Route: Banganga to Bhawan</h3>
                  <p>
                    The trek begins at <strong>Banganga</strong>, a holy
                    stream about a kilometre from central Katra, where the
                    first checkpoint scans your Yatra Parchi. From there, the
                    paved track climbs gradually through the Trikuta Hills:
                  </p>
                  <ul>
                    <li>
                      <strong>Banganga to Ardhkuwari (~6 km):</strong> The
                      first, gentler half of the climb.{" "}
                      <strong>Ardhkuwari</strong> is a cave shrine roughly at
                      the route's midpoint, tied to an episode from the
                      Vaishno Devi legend, and the most popular rest stop —
                      food stalls, washrooms, and drinking water are all
                      available here.
                    </li>
                    <li>
                      <strong>Ardhkuwari to Bhawan (~7 km):</strong> The
                      steeper second half, climbing toward the shrine
                      complex itself. This stretch is where most pilgrims
                      slow down, and where pony, palki, and battery car
                      services become especially useful.
                    </li>
                  </ul>

                  <h3>Trek Options: Walk, Pony, Palki, or Battery Car</h3>
                  <ul>
                    <li>
                      <strong>Walking:</strong> The most common choice. Most
                      walkers cover the 13 km in 5–9 hours including rest
                      stops; fit, fast trekkers can do it in under 5 hours.
                    </li>
                    <li>
                      <strong>Pony (horse):</strong> Licensed pony operators
                      cover most of the route for a fee, useful for those
                      with limited walking stamina. Rates are fixed and
                      posted at official stands — avoid unlicensed operators
                      soliciting off the main track.
                    </li>
                    <li>
                      <strong>Palki (palanquin):</strong> A carried litter
                      option, generally the most expensive, and well suited
                      to elderly pilgrims or anyone unable to walk or ride.
                    </li>
                    <li>
                      <strong>Battery-operated vehicles:</strong> Electric
                      cars cover the initial stretch from Katra toward
                      Ardhkuwari on a separate track, a useful way to save
                      energy for the steeper second half.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Whichever option you choose,
                    start before sunrise. The track is cooler, far less
                    congested, and you'll reach Bhawan in time for a shorter
                    darshan queue than the mid-morning peak.
                  </div>
                </section>

                {/* ── Helicopter ────────────────────────────────────────── */}
                <section id="helicopter">
                  <h2>Helicopter Service to Vaishno Devi</h2>
                  <p>
                    For pilgrims who can't or don't want to walk the full
                    trek, a <strong>helicopter service</strong> runs from a
                    helipad in Katra to <strong>Sanjichhat</strong>, a
                    helipad roughly 2.5 km from Bhawan — cutting the vast
                    majority of the climb down to a short, manageable walk or
                    a battery car ride from Sanjichhat to the shrine.
                  </p>
                  <ul>
                    <li>
                      <strong>Booking:</strong> Tickets are sold through the
                      official Shrine Board-authorised booking system, both
                      online in advance and at Katra counters, though
                      advance online booking is strongly recommended —
                      demand regularly outstrips seats, especially on
                      weekends and around Navratri.
                    </li>
                    <li>
                      <strong>Cost:</strong> Fares are typically in the
                      ₹1,000–₹1,300 per person, one-way range (subject to
                      change), making a round trip a few thousand rupees per
                      person — a meaningful cost, but a common trade-off for
                      elderly travellers or those short on time.
                    </li>
                    <li>
                      <strong>Weather dependency:</strong> Flights are
                      suspended in poor visibility or high winds, which is
                      common during monsoon — always keep a walking or
                      pony/palki backup plan if you're on a tight schedule.
                    </li>
                    <li>
                      <strong>ID requirement:</strong> A valid photo ID and
                      your booking confirmation are required at check-in,
                      similar to a domestic flight.
                    </li>
                  </ul>
                  <p>
                    Note that the helicopter doesn't eliminate walking
                    entirely — the stretch from Sanjichhat to Bhawan still
                    involves a short uphill walk, pony, or palki, so it isn't
                    a fully door-to-door solution for anyone with serious
                    mobility limitations.
                  </p>
                </section>

                {/* ── Bhairon Temple ────────────────────────────────────── */}
                <section id="bhairon-temple">
                  <h2>Bhairon Temple</h2>
                  <p>
                    Traditionally, a visit to <strong>Bhairon Temple</strong>{" "}
                    is considered to complete the Vaishno Devi darshan — many
                    pilgrims consider the yatra incomplete without it. The
                    temple sits about 2.5 km beyond Bhawan, connected by a
                    walking track as well as a ropeway (the Bhairon Ropeway)
                    for those who'd rather skip the additional climb after
                    already reaching the main shrine.
                  </p>
                  <p>
                    Most pilgrims visit Bhairon Temple either right after
                    their Bhawan darshan or on the way back down, since it
                    sits slightly off the direct return path. Budget an
                    additional 1.5–2 hours round trip if walking, or roughly
                    20–30 minutes each way by ropeway.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Katra has one of the highest hotel densities of any small
                    town in India, almost entirely built around yatra
                    traffic — but pilgrims doing an overnight yatra also have
                    the option of staying right up at Bhawan.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses along Tarakote Marg",
                          "Dharamshalas & yatri niwas",
                          "Budget hotels near the bus stand",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Hotel Asia Vaishnodevi, Katra",
                          "Fortune Riviera, Katra",
                          "Hotels along the Banganga road",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹7,000–₹20,000+/night",
                        picks: [
                          "Vivanta Katra – Vaishno Devi",
                          "Radisson resort-style properties",
                          "Larger full-service hotels, Katra",
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

                  <h3>Staying Overnight at Bhawan</h3>
                  <p>
                    For pilgrims doing the yatra over two days, the Shrine
                    Board operates dormitories and retiring rooms directly at
                    Bhawan (such as the Niharika complex), bookable through
                    the official Shrine Board system alongside your Yatra
                    Parchi. These fill quickly during Navratri — book them at
                    the same time you register, not as an afterthought.
                  </p>

                  <blockquote>
                    Most first-time pilgrims underestimate how early Katra's
                    hotels fill up around Navratri — book at least a few
                    weeks ahead if your dates fall anywhere near either
                    festival window.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Katra</h2>
                  <p>
                    Katra is a strictly <strong>pure-vegetarian</strong> town
                    — no meat, egg, or alcohol is served anywhere within it,
                    in keeping with its status as a pilgrimage centre. Food
                    here is simple, wholesome, and built for pilgrims
                    refuelling before or after a long climb.
                  </p>
                  <ul>
                    <li>
                      <strong>Rajma Chawal:</strong> The single most common
                      meal in Katra's dhabas — kidney bean curry over rice,
                      cheap, filling, and available almost everywhere.
                    </li>
                    <li>
                      <strong>Kaladi Cheese:</strong> A local Jammu region
                      specialty — a semi-soft cheese, usually pan-fried and
                      served with roti, worth seeking out at dedicated
                      restaurants.
                    </li>
                    <li>
                      <strong>Langar & Bhandaras:</strong> Free community
                      meals, organised by charitable trusts, are served at
                      several points along the trek route and in Katra
                      itself — a genuine part of the yatra experience, not
                      just a budget option.
                    </li>
                    <li>
                      <strong>Tea & snack stalls on the route:</strong> Small
                      stalls dot the entire Banganga-to-Bhawan track, selling
                      tea, biscuits, Maggi, and light snacks — useful for
                      quick energy stops without needing to carry much food
                      yourself.
                    </li>
                  </ul>
                </section>

                {/* ── Physical Prep ─────────────────────────────────────── */}
                <section id="physical-prep">
                  <h2>Preparing for the Trek</h2>
                  <p>
                    The Vaishno Devi trek doesn't require athletic fitness,
                    but a little preparation makes a real difference in how
                    much you enjoy the climb rather than merely surviving it.
                  </p>
                  <ul>
                    <li>
                      <strong>Footwear:</strong> Broken-in, comfortable
                      walking or sports shoes — not new shoes, not sandals.
                      Blisters are the single most common reason pilgrims cut
                      their pace short.
                    </li>
                    <li>
                      <strong>Hydration:</strong> Carry a refillable water
                      bottle; stalls and water points along the route make
                      refilling easy, so there's no need to carry more than
                      1–1.5 litres at a time.
                    </li>
                    <li>
                      <strong>Pace yourself:</strong> Short, frequent breaks
                      beat a few long ones — walk at a conversational pace
                      rather than pushing hard early and burning out before
                      Ardhkuwari.
                    </li>
                    <li>
                      <strong>Light luggage:</strong> Cloak rooms/luggage
                      counters near Banganga let you leave heavy bags behind
                      — carry only a small daypack up the trek.
                    </li>
                    <li>
                      <strong>Warm layer for early starts:</strong> Pre-dawn
                      temperatures on the track are noticeably cooler than
                      Katra town, even outside winter — a light jacket for
                      the first hour is worth carrying.
                    </li>
                    <li>
                      <strong>Know your limits:</strong> There's no shame in
                      switching to pony, palki, or a battery car partway if
                      you're struggling — all are available at multiple
                      points along the route, not just at the start.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Yatra-Day Timeline</h2>
                  <p>
                    Most pilgrims complete the yatra as a single, long day —
                    here's a realistic timeline for a walking trip up and
                    back, which you can compress considerably with
                    pony/palki or the helicopter.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "4:00 AM",
                        title: "Wake & Prepare in Katra",
                        color: "bg-amber-700",
                        activities: [
                          "Light breakfast, fill water bottle",
                          "Confirm Yatra Parchi (or collect if not pre-booked)",
                          "Leave heavy luggage at a cloak room near Banganga",
                        ],
                      },
                      {
                        day: "5:00 AM",
                        title: "Start the Trek at Banganga",
                        color: "bg-forest-600",
                        activities: [
                          "Parchi checked at the Banganga checkpoint",
                          "Steady walking pace, short breaks every hour",
                          "Cooler pre-dawn temperatures, thinner crowds",
                        ],
                      },
                      {
                        day: "~8:00 AM",
                        title: "Ardhkuwari (Halfway Point)",
                        color: "bg-sky-600",
                        activities: [
                          "Rest stop, refill water, light snack",
                          "Optional visit to the Ardhkuwari cave shrine",
                          "Second, steeper half of the climb begins",
                        ],
                      },
                      {
                        day: "~11:00 AM",
                        title: "Arrival at Bhawan",
                        color: "bg-purple-600",
                        activities: [
                          "Join the darshan queue (timing varies with crowd)",
                          "Darshan of Mata Vaishno Devi",
                          "Rest and eat near the Bhawan complex",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Bhairon Temple & Descent",
                        color: "bg-stone-600",
                        activities: [
                          "Walk or ropeway to Bhairon Temple (2.5 km)",
                          "Begin the descent to Katra, or overnight at Bhawan",
                          "Evening arrival back in Katra if descending same day",
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
                    * Many pilgrims instead stay overnight at Bhawan and join
                    the pre-dawn darshan queue the next morning, when waits
                    are typically shortest — either approach works well.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Yatra Parchi registration is free, and the trek itself
                    costs nothing beyond food and optional transport — most
                    of your budget goes toward accommodation, meals, and
                    whichever trek option (pony, palki, battery car, or
                    helicopter) you choose.
                  </p>
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
                            "₹3,500",
                            "₹12,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Trek option (one-way)",
                            "Walk – free",
                            "Pony/palki ₹1,200–₹2,500",
                            "Helicopter ₹1,000–₹1,300",
                          ],
                          [
                            "Local transport (Jammu–Katra)",
                            "₹150",
                            "₹600",
                            "₹1,800",
                          ],
                          ["Daily total (approx.)", "₹1,500", "₹5,000", "₹15,800"],
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
                    * Registration (Yatra Parchi) is free. Helicopter and
                    pony/palki rates fluctuate seasonally — always confirm
                    current rates on the official Shrine Board portal before
                    booking.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for the Vaishno Devi Yatra</h2>
                  <ul>
                    <li>
                      <strong>Carry a valid photo ID at all times:</strong>
                      Required for Yatra Parchi registration, checkpoint
                      scans, and helicopter check-in — carry the original,
                      not just a photocopy.
                    </li>
                    <li>
                      <strong>Register online before travelling:</strong>
                      Pre-booking your Yatra Parchi through the official
                      portal saves significant time versus queuing at Katra
                      counters, especially in peak season.
                    </li>
                    <li>
                      <strong>Use the luggage cloak rooms:</strong> Facilities
                      near Banganga let you leave heavy bags safely — trek
                      with only a light daypack.
                    </li>
                    <li>
                      <strong>Book helicopter seats well in advance:</strong>
                      They sell out quickly, particularly on weekends and
                      around both Navratri periods.
                    </li>
                    <li>
                      <strong>Plan extra time for elderly or young pilgrims:
                      </strong>{" "}
                      Pony, palki, and battery cars make the yatra accessible
                      to most ages, but build in a slower pace and more rest
                      stops than you would for a solo, fit trekker.
                    </li>
                    <li>
                      <strong>Check the weather before a monsoon trip:</strong>
                      Rain can make the paved track slippery and occasionally
                      triggers short closures — carry a light rain layer
                      during July–September.
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
                          "Register for your Yatra Parchi online in advance",
                          "Start the trek before sunrise for cooler weather",
                          "Wear broken-in, comfortable walking shoes",
                          "Use official luggage cloak rooms near Banganga",
                          "Book helicopter or overnight Bhawan stays early",
                          "Carry your original photo ID throughout the yatra",
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
                          "Start the trek without a valid Yatra Parchi",
                          "Rely solely on unlicensed pony/palki operators",
                          "Underestimate hotel demand during Navratri",
                          "Skip the pre-dawn start if avoiding crowds matters",
                          "Expect meat, egg, or alcohol anywhere in Katra",
                          "Push through pain instead of switching transport",
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
                    <strong>🗺️ Extend the trip:</strong> Many pilgrims combine
                    Katra with a stop at the hill town of{" "}
                    <Link href="/blog/patnitop-travel-guide">Patnitop</Link>{" "}
                    on the way back toward Jammu, or continue further north
                    into the valley to{" "}
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>{" "}
                    for a longer Jammu & Kashmir itinerary.
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
                  "Katra",
                  "Vaishno Devi",
                  "Jammu and Kashmir",
                  "Pilgrimage",
                  "Trekking",
                  "Bhairon Temple",
                  "Yatra Registration",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Katra"
              />

              <RelatedPostsGrid currentSlug="katra-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="katra-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
