// src/app/blog/bhadrachalam-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bhadrachalam Travel Guide: Temple & Godavari",
  description:
    "Complete Bhadrachalam guide — the Sita Ramachandraswamy Temple, the legend of Bhakta Ramadasu, Godavari river ghats, Rama Navami Kalyanam, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Bhadrachalam travel guide, Sita Ramachandraswamy Temple, Bhakta Ramadasu, Godavari river, Rama Navami Kalyanam, Telangana temples, how to reach Bhadrachalam, Bhadradri Kothagudem",
  openGraph: {
    title: "Bhadrachalam Travel Guide: Temple & Godavari",
    description:
      "A temple built on devotion and imprisonment, ghats on the Godavari, and one of South India's grandest annual celestial weddings — the complete Bhadrachalam guide.",
    url: "https://club.kudozz.in/blog/bhadrachalam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/rishikesh/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "River ghats beside a temple town, evoking Bhadrachalam's setting on the Godavari",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhadrachalam Travel Guide: Temple & Godavari",
    description:
      "A temple built on devotion and imprisonment, ghats on the Godavari, and one of South India's grandest annual celestial weddings — the complete Bhadrachalam guide.",
    images: ["/images/destinations/rishikesh/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bhadrachalam-travel-guide",
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
          headline: "Bhadrachalam Travel Guide: Temple & Godavari",
          description:
            "Complete Bhadrachalam guide — the Sita Ramachandraswamy Temple, the legend of Bhakta Ramadasu, Godavari river ghats, Rama Navami Kalyanam, how to reach from Hyderabad, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/bhadrachalam-travel-guide",
          },
          keywords:
            "Bhadrachalam, Sita Ramachandraswamy Temple, Godavari, Rama Navami, Bhakta Ramadasu",
          about: {
            "@type": "Place",
            name: "Bhadrachalam",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog/telangana-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Bhadrachalam",
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
    q: "How far is Bhadrachalam from Hyderabad?",
    a: "Bhadrachalam is roughly 300 km from Hyderabad in Bhadradri Kothagudem district — a substantial journey of around 6-7 hours by road, or a longer train journey, so it's best planned as an overnight trip rather than a rushed day visit.",
  },
  {
    q: "What is special about Rama Navami at Bhadrachalam?",
    a: "Bhadrachalam's Rama Navami celebrations center on the Kalyanam, an elaborate celestial wedding ceremony of Rama and Sita, traditionally attended by senior Telangana state government officials who send ceremonial pearls and silk for the deities — making it one of South India's most prominent Rama Navami events.",
  },
  {
    q: "Is Bhadrachalam a day trip or does it need an overnight stay?",
    a: "Given the distance from Hyderabad, an overnight stay is strongly recommended so you're not spending most of the trip in transit. The temple and Godavari ghats are best explored at an unhurried pace over a full day.",
  },
  {
    q: "What is the best time to visit Bhadrachalam?",
    a: "October to February offers the most comfortable weather for temple and ghat visits. Rama Navami, usually in March or April, brings the most festive atmosphere but also the heaviest crowds of the year.",
  },
  {
    q: "What is the legend of Bhakta Ramadasu?",
    a: "Kancharla Gopanna, popularly known as Bhakta Ramadasu, was a 17th-century devotee and local tax official who is said to have used government funds to build and renovate the Bhadrachalam temple. He was imprisoned for this by the ruling Qutb Shahi sultan and, according to legend, was eventually released — a devotional story still closely tied to the temple's identity.",
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
  { id: "introduction", title: "A Temple Town on the Godavari", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bhadrachalam", level: 2 },
  { id: "things-to-do", title: "Temple, Ghats & Kalyanam", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BhadrachalamGuidePage() {
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
              alt="River ghats beside a temple town, evoking Bhadrachalam's setting on the Godavari"
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
                { label: "Telangana", href: "/blog/telangana-travel-guide" },
                { label: "Bhadrachalam", href: null },
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
                "Bhadrachalam",
                "Godavari River",
                "Rama Temple",
                "Telangana",
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
              Bhadrachalam: Temple, Godavari & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A temple built on a devotee's sacrifice, ghats on the sacred
              Godavari, and an annual celestial wedding that draws crowds
              from across South India — Bhadrachalam rewards the long
              journey.
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
                  text: "Bhadradri Kothagudem, Telangana",
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
                  <h2>A Temple Town on the Godavari</h2>
                  <p>
                    <strong>Bhadrachalam</strong>, roughly 300 km southeast of
                    Hyderabad in Bhadradri Kothagudem district, is a temple
                    town on the banks of the{" "}
                    <strong>Godavari river</strong>, centered on the{" "}
                    <strong>Sita Ramachandraswamy Temple</strong> dedicated to
                    Lord Rama, Sita, and Lakshmana.
                  </p>
                  <p>
                    The temple's identity is deeply tied to the legend of{" "}
                    <strong>Bhakta Ramadasu</strong> (Kancharla Gopanna), a
                    17th-century devotee and local tax official said to have
                    used government funds to build and renovate the temple —
                    an act of devotion for which he was imprisoned by the
                    ruling Qutb Shahi sultan, and from which, legend holds, he
                    was eventually released. That story of faith and sacrifice
                    still runs through how the town understands itself.
                  </p>
                  <p>
                    Being on the Godavari also gives Bhadrachalam a set of
                    ghats for river bathing and rituals, adding a riverside
                    dimension to what is primarily a pilgrimage stop within{" "}
                    <Link href="/blog/telangana-travel-guide">Telangana</Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Bhadrachalam at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bhadradri Kothagudem, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~300 km, ~6-7 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🕉️",
                          label: "Deity",
                          value: "Sri Rama, Sita, Lakshmana",
                        },
                        {
                          icon: "🌊",
                          label: "Setting",
                          value: "On the Godavari River",
                        },
                        {
                          icon: "🎉",
                          label: "Big Event",
                          value: "Rama Navami Kalyanam",
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
                  <h2>Best Time to Visit Bhadrachalam</h2>
                  <p>
                    Weather comfort and festival timing both shape when to
                    plan a visit here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions make the temple visit and ghat walks comfortable, and the long drive from Hyderabad more pleasant.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, Rama Navami falls here",
                        text: "Temperatures rise, but this window includes Rama Navami — plan around the heat if visiting for the festival.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — full river",
                        text: "The Godavari runs full and scenic, though rain can complicate the long road journey from Hyderabad.",
                      },
                      {
                        season: "Rama Navami",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Kalyanam — biggest crowds",
                        text: "The town's biggest event by far, with the Kalyanam ceremony drawing huge crowds — plan well ahead if attending.",
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
                    <strong>Our pick:</strong> November to February for a
                    calm, comfortable visit — or specifically Rama Navami if
                    you want to witness the Kalyanam, accepting the much
                    larger crowds that come with it.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bhadrachalam</h2>
                  <p>
                    Given the distance from Hyderabad, plan this as a proper
                    journey rather than a quick add-on.
                  </p>
                  <ul>
                    <li>
                      <strong>By road:</strong> Roughly 300 km from Hyderabad,
                      about 6-7 hours by car — a long but manageable drive,
                      best split with a stop en route or planned as an
                      overnight trip.
                    </li>
                    <li>
                      <strong>By rail:</strong> Bhadrachalam Road railway
                      station connects to the wider network, though journey
                      times from Hyderabad are long and connections may
                      require a change.
                    </li>
                    <li>
                      <strong>Combining with other stops:</strong> Given the
                      distance, some travelers combine Bhadrachalam with other
                      sights in the eastern Telangana/Godavari belt to make
                      the journey worthwhile.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Break the drive with an
                    overnight stop rather than attempting Bhadrachalam as a
                    single very long day from Hyderabad — the distance makes
                    a rushed round trip genuinely tiring.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple, Ghats & the Kalyanam</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/rishikesh/rishikesh.jpg"
                      alt="Riverside temple town setting typical of Bhadrachalam on the Godavari"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Sita Ramachandraswamy Temple</h3>
                  <p>
                    The town's centerpiece, dedicated to Rama, Sita, and
                    Lakshmana, closely tied to the Bhakta Ramadasu legend.
                    Architecture and daily rituals reflect centuries of
                    continuous worship at the site.
                  </p>
                  <h3>Godavari Ghats</h3>
                  <p>
                    The riverside ghats are used for ritual bathing and quiet
                    reflection, and offer a pleasant, unhurried counterpoint
                    to the temple's more structured devotional pace.
                  </p>
                  <h3>Rama Navami & the Kalyanam</h3>
                  <p>
                    The town's biggest annual event is the elaborate{" "}
                    <strong>Kalyanam</strong> — a celestial wedding ceremony
                    of Rama and Sita — traditionally attended by senior
                    Telangana state government officials, who send ceremonial
                    pearls and silk for the deities. It's one of South India's
                    most prominent Rama Navami celebrations.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Bhadrachalam</h2>
                  <p>
                    Accommodation is modest and functional, geared mainly
                    toward pilgrims rather than leisure travelers.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Temple guesthouses/choultries",
                          "Basic lodges in the town center",
                          "Simple stays near the bus stand",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Devasthanam-run guesthouses",
                          "Small hotels closer to the temple",
                          "Book ahead around Rama Navami",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌇",
                        range: "Limited on-site",
                        picks: [
                          "Dedicated luxury stays are scarce here",
                          "Most premium travelers keep it a short stay",
                          "Focus budget on convenience over comfort tier",
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
                        title: "Travel & Settle In",
                        color: "bg-amber-700",
                        activities: [
                          "Long drive or train from Hyderabad",
                          "Check in, evening temple darshan",
                          "Sunset walk along the Godavari ghats",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Temple & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning darshan for a calmer experience",
                          "Explore the temple complex fully",
                          "Begin the return journey to Hyderabad",
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
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Bhadrachalam</h2>
                  <ul>
                    <li>
                      <strong>Temple annadanam/prasadam:</strong> The temple
                      offers pilgrim meal services, a simple and widely used
                      option for visitors.
                    </li>
                    <li>
                      <strong>Local vegetarian restaurants:</strong> A handful
                      of straightforward restaurants near the temple and bus
                      stand cover most everyday meals.
                    </li>
                    <li>
                      <strong>Andhra/Telangana-style thalis:</strong> Regional
                      thali meals are the most common and reliable option
                      around town.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹4,500"],
                          [
                            "Car hire from Hyderabad (round trip)",
                            "₹9,000",
                            "₹12,000",
                            "₹16,000",
                          ],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Local transport/day", "₹200", "₹500", "₹1,000"],
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
                    * Figures are per person, per day (except car hire, a
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Bhadrachalam</h2>
                  <ul>
                    <li>
                      <strong>Plan for Rama Navami crowds:</strong> If
                      visiting during the festival, book accommodation and
                      transport well in advance.
                    </li>
                    <li>
                      <strong>Respect ghat etiquette:</strong> Observe local
                      customs around ritual bathing spaces at the Godavari
                      ghats.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> As with most South
                      Indian temple towns, traditional/modest attire is
                      expected.
                    </li>
                    <li>
                      <strong>Break up the drive:</strong> The distance from
                      Hyderabad is substantial — split it with a stop or plan
                      an overnight trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is
                      inconsistent outside the main hotels and larger shops.
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
                          "Plan an overnight stay given the distance",
                          "Book ahead if visiting during Rama Navami",
                          "Walk the Godavari ghats at sunset",
                          "Dress modestly for the temple",
                          "Carry sufficient cash",
                          "Try the temple's prasadam meal service",
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
                          "Attempt it as a single rushed day trip",
                          "Underestimate Rama Navami crowd levels",
                          "Expect wide card/digital payment acceptance",
                          "Skip modest dress at the temple",
                          "Ignore local ghat etiquette",
                          "Travel without confirming accommodation in season",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
                    </Link>{" "}
                    for other temple towns and heritage stops worth combining
                    with a longer eastern-Telangana itinerary.
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
                  "Bhadrachalam",
                  "Godavari River",
                  "Rama Temple",
                  "Telangana",
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

              <RelatedPostsGrid currentSlug="bhadrachalam-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bhadrachalam-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
