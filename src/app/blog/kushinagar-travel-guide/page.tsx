// src/app/blog/kushinagar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kushinagar Travel Guide: Buddha's Final Resting Place",
  description:
    "Complete Kushinagar guide — Mahaparinirvana Temple, Ramabhar Stupa, international Buddhist monasteries, how to reach, where to stay, and a full pilgrimage visit plan.",
  keywords:
    "Kushinagar, Buddha Mahaparinirvana, Mahaparinirvana Temple, Ramabhar Stupa, Kushinagar International Airport, Buddhist Circuit, Wat Thai Kushinagar, Kushinagar travel guide, Gorakhpur, Uttar Pradesh Buddhist sites",
  openGraph: {
    title: "Kushinagar Travel Guide: Buddha's Final Resting Place",
    description:
      "Where the Buddha attained Mahaparinirvana — the reclining Buddha temple, the cremation stupa, and a cluster of international monasteries, on the wider Buddhist pilgrimage circuit.",
    url: "https://club.kudozz.in/blog/kushinagar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet monastic grounds and stupa spires at Kushinagar, the site of Buddha's Mahaparinirvana",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushinagar Travel Guide: Buddha's Final Resting Place",
    description:
      "Mahaparinirvana Temple, Ramabhar Stupa, and a cluster of international Buddhist monasteries — the complete Kushinagar guide.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kushinagar-travel-guide",
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
          headline: "Kushinagar Travel Guide: Buddha's Final Resting Place",
          description:
            "Complete Kushinagar guide — Mahaparinirvana Temple, Ramabhar Stupa, international Buddhist monasteries, how to reach, where to stay, and a full pilgrimage visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
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
            "@id": "https://club.kudozz.in/blog/kushinagar-travel-guide",
          },
          keywords:
            "Kushinagar, Mahaparinirvana Temple, Ramabhar Stupa, Buddhist Circuit, Gorakhpur",
          about: {
            "@type": "Place",
            name: "Kushinagar",
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
                name: "Kushinagar",
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
    q: "What is Kushinagar famous for?",
    a: "Kushinagar is the place where, according to Buddhist tradition, the Buddha attained Mahaparinirvana — passed away at around the age of 80. It's home to the Mahaparinirvana Temple with its 6th-century reclining Buddha statue, the Ramabhar Stupa marking the cremation site, and a growing cluster of monasteries built by Buddhist nations from across Asia.",
  },
  {
    q: "How do I reach Kushinagar?",
    a: "Kushinagar International Airport, opened specifically to serve Buddhist pilgrimage tourism, has limited direct flights. Most travellers fly or take a train into Gorakhpur, roughly 50 km away, which has far better rail and air connectivity, then continue to Kushinagar by road (around 1-1.5 hours).",
  },
  {
    q: "Is Kushinagar part of the Buddhist Circuit?",
    a: "Yes. Kushinagar is one of the four principal Buddhist pilgrimage sites, alongside Lumbini (birthplace, in Nepal), Bodh Gaya (enlightenment), and Sarnath (first sermon). Many pilgrims and travellers combine two or more of these on a single circuit.",
  },
  {
    q: "How much time do I need in Kushinagar?",
    a: "A focused half-day covers the Mahaparinirvana Temple, Ramabhar Stupa, and Mathakuar Shrine. A full day lets you also walk through several of the international monasteries at a relaxed pace, which is worth doing if you have the time.",
  },
  {
    q: "Which international monasteries can I visit in Kushinagar?",
    a: "Thailand, Myanmar (Burma), Japan, Sri Lanka, Tibet, Vietnam, and South Korea, among others, have all built monasteries or temples in Kushinagar, each reflecting its home country's architectural style. Wat Thai Kushinagar, with its gold-accented Thai-style roofline, is one of the most visited.",
  },
  {
    q: "Is Kushinagar suitable for non-Buddhist travellers?",
    a: "Yes. While it holds deep religious significance for Buddhists, Kushinagar is open to all visitors and offers a quiet, contemplative experience along with genuinely interesting architecture and history — a good stop for anyone curious about the region's past even without a religious connection.",
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
  { id: "introduction", title: "Where Buddha's Journey Ended", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kushinagar", level: 2 },
  { id: "sacred-sites", title: "The Sacred Sites", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KushinagarGuidePage() {
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
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Quiet monastic grounds and stupa spires at Kushinagar, the site of Buddha's Mahaparinirvana"
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
                { label: "Kushinagar", href: null },
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
                "Kushinagar",
                "Buddha",
                "Mahaparinirvana",
                "Buddhist Circuit",
                "Uttar Pradesh",
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
              Kushinagar: Buddha's Final Resting Place Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The town where the Buddha is said to have attained
              Mahaparinirvana — a reclining Buddha temple, a cremation stupa,
              and a quiet cluster of monasteries built by Buddhist nations
              from across Asia.
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
                  text: "Kushinagar, Uttar Pradesh",
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
                  <h2>Where Buddha's Journey Ended</h2>
                  <p>
                    <strong>Kushinagar</strong> is one of Buddhism's four most
                    sacred sites — the place where, according to tradition,
                    the Buddha, around the age of 80, delivered his final
                    teachings and attained{" "}
                    <strong>Mahaparinirvana</strong>, the passing beyond the
                    cycle of rebirth that ends a life of complete
                    enlightenment. For Buddhists, this makes Kushinagar not a
                    place of mourning but one of quiet completion, and it
                    draws pilgrims and travellers from across the world every
                    year.
                  </p>
                  <p>
                    A small, unhurried town in eastern{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , Kushinagar centres on the Mahaparinirvana Temple and its
                    large reclining Buddha statue, the Ramabhar Stupa marking
                    the cremation site a short walk away, and an expanding
                    ring of monasteries built by Thailand, Myanmar, Japan, Sri
                    Lanka, Tibet, Vietnam, and South Korea, each in its own
                    national architectural style. Together with{" "}
                    <Link href="/blog/sarnath-travel-guide">Sarnath</Link>
                    , Bodh Gaya, and Lumbini across the border in Nepal, it
                    forms one of the four principal stops on the wider
                    Buddhist pilgrimage circuit.
                  </p>
                  <p>
                    Kushinagar rewards a slow visit. There are no crowds to
                    fight through, no queues to rush — just temple courtyards,
                    prayer flags, and the low hum of chanting drifting between
                    monasteries built thousands of kilometres from their home
                    countries.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Kushinagar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Eastern Uttar Pradesh, near Nepal border",
                        },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Kushinagar Int'l / Gorakhpur (~50 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛐",
                          label: "Significance",
                          value: "Site of Buddha's Mahaparinirvana",
                        },
                        {
                          icon: "🏯",
                          label: "Known For",
                          value: "International monasteries",
                        },
                        {
                          icon: "🔗",
                          label: "Circuit",
                          value: "Buddhist Circuit (with Sarnath, Bodh Gaya, Lumbini)",
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
                  <h2>Best Time to Visit Kushinagar</h2>
                  <p>
                    Kushinagar sits in the Gangetic plains, where summers run
                    brutally hot and the monsoon brings heavy, disruptive
                    rain — winter is comfortably the best season to visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "🍃",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant temperatures ideal for walking between temples and monasteries. December-January can get foggy in the mornings but stays comfortable through the day.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Avoid if possible",
                        text: "Summer heat in this part of Uttar Pradesh regularly crosses 40°C, making extended outdoor temple-hopping genuinely uncomfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, wet",
                        text: "Heavy rain is common and can make travel between sites inconvenient, though the temple grounds themselves stay open.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🪷",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Buddha Purnima season",
                        text: "Buddha Purnima (Buddha's birth, enlightenment, and death, traditionally observed together) draws larger pilgrim numbers — a meaningful time to visit if you can handle the heat.",
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
                    <strong>Our pick:</strong> October to March — cool
                    weather that makes it comfortable to walk the monastery
                    zone at your own pace, without the summer heat or
                    monsoon disruption.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kushinagar</h2>
                  <p>
                    Kushinagar has an airport of its own, built specifically
                    to serve Buddhist pilgrimage tourism, though for now
                    Gorakhpur remains the more practical gateway for most
                    travellers.
                  </p>
                  <ul>
                    <li>
                      <strong>By air (direct):</strong> Kushinagar
                      International Airport was constructed specifically to
                      bring international Buddhist pilgrims closer to the
                      site, but flight frequency remains limited compared to
                      major hubs — check current routes before relying on it.
                    </li>
                    <li>
                      <strong>By air/rail via Gorakhpur:</strong> Gorakhpur,
                      around 50 km away, has far better rail and air
                      connectivity to the rest of India. Most travellers fly
                      or take a train to Gorakhpur and cover the remaining
                      distance by road in about 1-1.5 hours.
                    </li>
                    <li>
                      <strong>By road:</strong> Kushinagar sits on the wider
                      Buddhist circuit road network, making it easy to combine
                      with a Gorakhpur stopover or a longer loop through
                      eastern Uttar Pradesh.
                    </li>
                    <li>
                      <strong>Getting around:</strong> The main sites —
                      Mahaparinirvana Temple, Ramabhar Stupa, and the
                      monastery zone — sit close enough together to cover on
                      foot or by a short auto-rickshaw ride.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If flying, check Kushinagar
                    International Airport's current route list first — if
                    your city isn't served, routing through Gorakhpur is
                    usually faster and cheaper than a connecting flight.
                  </div>
                </section>

                {/* ── Sacred Sites ──────────────────────────────────────── */}
                <section id="sacred-sites">
                  <h2>The Sacred Sites</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Monastery courtyard and stupa at Kushinagar"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Mahaparinirvana Temple</h3>
                  <p>
                    The heart of Kushinagar, this temple houses a 6.1-metre
                    reclining Buddha statue carved from a single block of
                    sandstone, dated to around the 5th century CE, depicting
                    the Buddha in his final moments. The statue was excavated
                    in a damaged state in the late 19th century and later
                    restored; today it remains one of the most striking
                    Buddha images anywhere on the subcontinent, and the
                    temple's calm, dimly lit interior is often filled with
                    the murmur of pilgrims chanting.
                  </p>
                  <h3>Ramabhar Stupa</h3>
                  <p>
                    A short walk east of the main temple, this large brick
                    stupa marks the spot traditionally identified as the site
                    of the Buddha's cremation. Its scale and simplicity —
                    a broad dome rising from the plain eastern Uttar Pradesh
                    landscape — make it one of the more quietly powerful
                    stops on the circuit, especially around sunset.
                  </p>
                  <h3>Mathakuar Shrine</h3>
                  <p>
                    A smaller shrine associated with the Buddha's last sermon
                    before his passing, housing a black stone Buddha image.
                    Less visited than the main temple complex, it's a good
                    stop for travellers wanting a quieter moment away from
                    the bigger sites.
                  </p>
                  <h3>The International Monastery Zone</h3>
                  <p>
                    Kushinagar's monastery cluster is what sets it apart from
                    many other pilgrimage towns — Thailand, Myanmar, Japan,
                    Sri Lanka, Tibet, Vietnam, and South Korea have all built
                    monasteries or temples here, each faithfully rendered in
                    its home country's architectural style.{" "}
                    <strong>Wat Thai Kushinagar</strong>, with its
                    steep, gold-accented Thai-temple roofline, is one of the
                    most photographed; the Myanmar (Burmese) monastery and
                    Japan's temple, styled after Japanese Buddhist
                    architecture, are equally worth the walk. Visiting even
                    three or four of these back-to-back is a genuinely
                    unusual way to compare Buddhist architectural traditions
                    from across Asia in a single afternoon.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kushinagar</h2>
                  <p>
                    Kushinagar's accommodation is modest compared to major
                    tourist towns, reflecting its role as a pilgrimage stop
                    rather than a resort destination — but there's enough
                    range to suit most budgets.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🙏",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Monastery guesthouses",
                          "Basic lodges near the bus stand",
                          "UP Tourism budget rooms",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "UPSTDC forest lodges",
                          "Private mid-range hotels on the main road",
                          "Pilgrim-oriented business hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛎️",
                        range: "₹6,000–₹12,000+/night",
                        picks: [
                          "A handful of upscale chain-affiliated hotels",
                          "Larger properties near the airport road",
                          "Resort-style stays with landscaped grounds",
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
                        title: "Core Sacred Sites",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at the Mahaparinirvana Temple",
                          "Walk to Ramabhar Stupa for late-morning quiet",
                          "Afternoon visit to Mathakuar Shrine",
                          "Sunset back at Ramabhar Stupa",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Monastery Zone",
                        color: "bg-purple-600",
                        activities: [
                          "Morning walk through Wat Thai Kushinagar",
                          "Visit the Myanmar and Japanese monasteries",
                          "Explore Tibetan and Sri Lankan temples nearby",
                          "Onward travel via Gorakhpur",
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
                    * Travellers building a full Buddhist circuit often
                    combine Kushinagar with{" "}
                    <Link href="/blog/shravasti-travel-guide">Shravasti</Link>{" "}
                    and <Link href="/blog/sarnath-travel-guide">Sarnath</Link>{" "}
                    over a longer, multi-city eastern Uttar Pradesh loop.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kushinagar</h2>
                  <ul>
                    <li>
                      <strong>Monastery canteens:</strong> Some monasteries
                      serve simple vegetarian meals to visitors, often at
                      modest cost — a good way to eat close to where you're
                      sightseeing.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Straightforward North
                      Indian thalis and regional Purvanchal dishes at
                      inexpensive roadside eateries near the main market.
                    </li>
                    <li>
                      <strong>Hotel restaurants:</strong> The mid-range and
                      larger hotels offer more varied multi-cuisine menus for
                      travellers wanting familiar options.
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
                          ["Accommodation/night", "₹1,200", "₹3,500", "₹8,000"],
                          ["Gorakhpur transfer (round trip)", "₹500", "₹1,200", "₹2,500"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local auto/rickshaw hire", "₹300", "₹500", "₹1,000"],
                          ["Entry/donations", "₹100", "₹200", "₹500"],
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
                    * Figures are per person, per day. Most temples and stupas
                    are free to enter; the Mahaparinirvana Temple accepts
                    voluntary donations.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kushinagar</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> Cover shoulders and
                      knees when entering temple and monastery grounds, as a
                      mark of respect at an active place of worship.
                    </li>
                    <li>
                      <strong>Remove footwear before entering shrines:</strong>{" "}
                      Standard practice at every temple and monastery on the
                      site — carry socks if walking on stone floors bothers
                      you.
                    </li>
                    <li>
                      <strong>Keep noise low:</strong> This remains an active
                      pilgrimage site for many visitors — speak quietly
                      inside temple halls and around meditating pilgrims.
                    </li>
                    <li>
                      <strong>Base yourself in Gorakhpur if flights are
                      limited:</strong> Checking Kushinagar International
                      Airport's route list before booking can save an
                      unnecessary detour.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM and card-payment
                      access is limited outside the main market area.
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
                          "Dress modestly and remove footwear at shrines",
                          "Visit Ramabhar Stupa around sunset",
                          "Walk through at least three of the monasteries",
                          "Check flight routes before relying on Kushinagar airport",
                          "Carry enough cash for the whole visit",
                          "Combine with Shravasti or Sarnath for a fuller circuit",
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
                          "Wear shorts or sleeveless tops into temple halls",
                          "Speak loudly near meditating pilgrims",
                          "Assume wide flight availability at the local airport",
                          "Rush through the monastery zone in under an hour",
                          "Expect extensive nightlife or shopping options",
                          "Skip carrying cash outside the main market",
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
                    <strong>🗺️ Extend the trip:</strong> Many travellers pair
                    Kushinagar with the quieter, less-visited ruins of{" "}
                    <Link href="/blog/shravasti-travel-guide">Shravasti</Link>
                    , or continue on to{" "}
                    <Link href="/blog/sarnath-travel-guide">Sarnath</Link> and{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>{" "}
                    for a fuller eastern{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    Buddhist-circuit loop.
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
                  "Kushinagar",
                  "Buddha",
                  "Mahaparinirvana",
                  "Uttar Pradesh",
                  "Buddhist Circuit",
                  "Ramabhar Stupa",
                  "Gorakhpur",
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

              <RelatedPostsGrid currentSlug="kushinagar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kushinagar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
