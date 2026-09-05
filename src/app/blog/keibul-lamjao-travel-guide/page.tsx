// src/app/blog/keibul-lamjao-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Keibul Lamjao National Park Guide: Floating Park & Sangai Deer",
  description:
    "Complete guide to Keibul Lamjao National Park — the world's only floating national park inside Loktak Lake, home to the endangered Sangai deer. Boat safaris, best time to visit, how to reach via Moirang, and full trip planning.",
  keywords:
    "Keibul Lamjao National Park, floating national park, Sangai deer, brow-antlered deer, Loktak Lake Manipur, Moirah phumdi, Manipur wildlife, Keibul Lamjao boat safari, Manipur travel guide",
  openGraph: {
    title: "Keibul Lamjao National Park Guide: Floating Park & Sangai Deer",
    description:
      "The world's only floating national park, made of drifting phumdis on Loktak Lake, and home to the endangered Sangai deer found nowhere else in the wild.",
    url: "https://club.kudozz.in/blog/keibul-lamjao-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Calm wetland backwater fringed with vegetation, evoking the floating phumdis of Keibul Lamjao",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Keibul Lamjao National Park Guide: Floating Park & Sangai Deer",
    description:
      "The world's only floating national park and home to the endangered Sangai deer — the complete Keibul Lamjao guide.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/keibul-lamjao-travel-guide",
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
          headline:
            "Keibul Lamjao National Park Guide: Floating Park & Sangai Deer",
          description:
            "Complete guide to Keibul Lamjao National Park — the world's only floating national park inside Loktak Lake, home to the endangered Sangai deer.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/keibul-lamjao-travel-guide",
          },
          keywords:
            "Keibul Lamjao, floating national park, Sangai deer, Loktak Lake, Manipur",
          about: {
            "@type": "Place",
            name: "Keibul Lamjao National Park",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Manipur",
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
                name: "Manipur",
                item: "https://club.kudozz.in/blog/manipur-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Keibul Lamjao National Park",
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
    q: "What makes Keibul Lamjao unique?",
    a: "It's the world's only floating national park — its entire terrain is made of phumdis, floating masses of vegetation, soil, and organic matter drifting on Loktak Lake. There's no other national park like it anywhere.",
  },
  {
    q: "What is the Sangai deer?",
    a: "The Sangai (Rucervus eldii eldii), also called the brow-antlered deer, is an endangered species and Manipur's state animal. Keibul Lamjao is the only place in the world where it survives in the wild.",
  },
  {
    q: "How do I visit Keibul Lamjao National Park?",
    a: "You reach it via Moirang, the main gateway town on Loktak Lake, roughly 45–50 km from Imphal. From there, guided boat safaris run by the forest department take visitors into the park to spot the Sangai and birdlife from a respectful distance.",
  },
  {
    q: "When is the best time to visit?",
    a: "November to April, during the dry season, when the phumdis are firmer and visibility is better. During the monsoon (roughly June–September), the phumdis become waterlogged and unstable, and boat safaris may be limited or suspended.",
  },
  {
    q: "Where should I stay to visit Keibul Lamjao?",
    a: "There's no real accommodation inside the park itself. Most visitors base themselves in Imphal and do Keibul Lamjao as a day trip, with occasional guesthouses available near Moirang and Loktak Lake.",
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
  { id: "introduction", title: "The World's Only Floating Park", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "things-to-do", title: "The Park & the Sangai", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KeibulLamjaoGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Calm wetland backwater fringed with vegetation, evoking the floating phumdis of Keibul Lamjao"
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
                { label: "Manipur", href: "/blog/manipur-travel-guide" },
                { label: "Keibul Lamjao", href: null },
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
              {["Keibul Lamjao", "Manipur", "Sangai Deer", "Off-beat"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Keibul Lamjao National Park: The Floating Park Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A national park with no solid ground beneath it — floating on
              Loktak Lake's drifting phumdis, and home to the world's last
              wild population of the endangered Sangai deer.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Loktak Lake, Manipur",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>The World's Only Floating Park</h2>
                  <p>
                    <strong>Keibul Lamjao National Park</strong> sits inside{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    in Manipur, and it holds a genuinely unique distinction —
                    it's the world's only floating national park. Its entire
                    terrain, roughly 40 sq km in area, is made of{" "}
                    <strong>phumdis</strong>: floating masses of vegetation,
                    soil, and organic matter that drift on the lake's
                    surface rather than sitting on solid ground.
                  </p>
                  <p>
                    The park exists to protect the <strong>Sangai</strong>{" "}
                    (<em>Rucervus eldii eldii</em>), the brow-antlered deer
                    that is Manipur's state animal. Keibul Lamjao is the only
                    place left in the world where the Sangai survives in the
                    wild, which makes this small, unusual wetland park
                    disproportionately important for the species'
                    conservation.
                  </p>
                  <p>
                    Beyond the Sangai, the park's phumdis and open water
                    support a range of birdlife and other wetland species,
                    making it worthwhile even beyond the headline attraction
                    — though the floating deer habitat is genuinely the
                    reason most visitors make the trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦌</span> Keibul Lamjao at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Inside Loktak Lake, Manipur",
                        },
                        {
                          icon: "📏",
                          label: "Area",
                          value: "~40 sq km",
                        },
                        {
                          icon: "🦌",
                          label: "Known For",
                          value: "Sangai (brow-antlered deer)",
                        },
                        {
                          icon: "🚪",
                          label: "Gateway",
                          value: "Moirang",
                        },
                        {
                          icon: "🚗",
                          label: "From Imphal",
                          value: "~45–50 km",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Nov – Apr",
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
                  <h2>Best Time to Visit Keibul Lamjao</h2>
                  <p>
                    Because the park's ground is literally floating
                    vegetation, the season affects more than just comfort —
                    it changes how firm and accessible the phumdis actually
                    are.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Dry season — our pick",
                        text: "The phumdis are firmer and more stable, visibility is better, and boat safaris run more reliably — the best window for spotting the Sangai.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — limited access",
                        text: "Heavy rain waterlogs and destabilizes the phumdis. Safaris may be limited or suspended, and conditions inside the park are far less predictable.",
                      },
                      {
                        season: "May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pre-monsoon transition",
                        text: "Still generally accessible, but warming and humidity are rising ahead of the rains — an acceptable but not ideal window.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Post-monsoon transition",
                        text: "Conditions are improving as the rains recede, though the phumdis may still be softer than in peak dry season.",
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
                    <strong>Our pick:</strong> November to April — firmer
                    phumdis, clearer boat access, and the best odds of
                    spotting the Sangai and resident birdlife.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Keibul Lamjao</h2>
                  <ul>
                    <li>
                      <strong>Via Imphal:</strong> Fly into Imphal, Manipur's
                      main gateway, then travel by road toward{" "}
                      <Link href="/blog/moirang-travel-guide">Moirang</Link>,
                      the lake's main gateway town.
                    </li>
                    <li>
                      <strong>Via Moirang:</strong> Keibul Lamjao is reached
                      via Moirang, roughly 45–50 km from Imphal by road —
                      most visitors hire a car with driver for the day trip.
                    </li>
                    <li>
                      <strong>Into the park:</strong> From the lakeside
                      access point near Moirang, guided boat safaris (run
                      through the forest department) take visitors into the
                      park itself — there's no walking or driving directly
                      onto the phumdis.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Inner Line Permit:</strong> Manipur requires
                    visitors from outside the state to carry an Inner Line
                    Permit (ILP), in effect since December 2019. Arrange this
                    ahead of travel — it applies to your visit to Manipur
                    generally, not specifically to the park.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Park & the Sangai</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Wetland backwater with dense floating vegetation, evoking the phumdis of Keibul Lamjao National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Guided Boat Safaris</h3>
                  <p>
                    Because the park is made of floating phumdis rather than
                    solid ground, exploring it means boat safaris through
                    forest department boats and guides — there's no fixed
                    trail network like a conventional park.
                  </p>
                  <h3>Spotting the Sangai</h3>
                  <p>
                    Boats approach at a respectful distance to avoid
                    disturbing the deer, so patience and a decent pair of
                    binoculars go a long way. Early morning is generally the
                    quietest and most productive time on the water.
                  </p>
                  <h3>Birdlife and Wetland Species</h3>
                  <p>
                    Beyond the Sangai, the park's mix of open water and
                    floating vegetation supports a variety of resident and
                    seasonal birdlife, making the boat ride worthwhile even
                    between deer sightings.
                  </p>
                  <h3>Photography</h3>
                  <p>
                    The scenery itself — thick mats of floating vegetation
                    stretching across open water — is unusual enough to be
                    worth photographing on its own, independent of any
                    wildlife sightings.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Keibul Lamjao has essentially no accommodation of its
                    own — this is a day-trip destination, and lodging is
                    realistically back in{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link>,
                    with a handful of guesthouses near Moirang and Loktak
                    Lake for those who want to stay closer.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Near Moirang/Loktak",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Basic guesthouses",
                          "Homestays",
                          "Very limited options",
                        ],
                      },
                      {
                        tier: "Imphal — Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: ["Guesthouses", "Tourist lodges"],
                      },
                      {
                        tier: "Imphal — Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: ["Business hotels", "Boutique stays"],
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

                  <blockquote>
                    Base yourself in Imphal and treat Keibul Lamjao as a day
                    trip via Moirang — dedicated accommodation right at the
                    park simply doesn't exist.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Day Trip from Imphal)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Imphal to Moirang",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Imphal (~45–50 km)",
                          "Arrive at the Loktak Lake / Moirang boat access point",
                          "Board a forest department boat into the park",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Inside the Park",
                        color: "bg-sky-600",
                        activities: [
                          "Guided boat safari through the phumdis",
                          "Look for the Sangai and resident birdlife",
                          "Photograph the floating landscape",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Moirang & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Optional stop at the Moirang INA Museum nearby",
                          "Lunch in Moirang or back in Imphal",
                          "Return to Imphal by evening",
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
                  <p>
                    Keibul Lamjao pairs naturally with a wider{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    visit — most travelers combine the two into a single day
                    trip from Imphal.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food Nearby</h2>
                  <ul>
                    <li>
                      <strong>Carry snacks and water:</strong> There's little
                      to no food service directly at the park's boat access
                      point, so bring your own for the safari itself.
                    </li>
                    <li>
                      <strong>Eat in Moirang:</strong> Small local eateries
                      in Moirang town serve basic Manipuri meals — a
                      reasonable stop before or after the safari.
                    </li>
                    <li>
                      <strong>Save the proper meal for Imphal:</strong>{" "}
                      Manipuri staples like eromba and chak-hao kheer are
                      easier to find with more variety back in Imphal.
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
                          ["Car with driver (day trip)", "₹2,000", "₹3,500", "₹6,000"],
                          ["Boat safari (per boat)", "₹500", "₹1,000", "₹2,000"],
                          ["Imphal hotel/night", "₹1,000", "₹3,000", "₹6,000"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
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
                    * Boat safaris are typically charged per boat rather than
                    per person — splitting the cost across a group brings the
                    per-head price down significantly.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Keibul Lamjao</h2>
                  <ul>
                    <li>
                      <strong>Carry your Inner Line Permit:</strong> Manipur
                      requires an ILP for visitors from outside the state,
                      in effect since December 2019 — arrange it before
                      travel.
                    </li>
                    <li>
                      <strong>Go early morning:</strong> The calmest water
                      and the best chance of spotting the Sangai come in the
                      early hours before the day heats up.
                    </li>
                    <li>
                      <strong>Book through official forest department
                      boats:</strong> Use designated operators rather than
                      informal arrangements for a safer, properly guided
                      safari.
                    </li>
                    <li>
                      <strong>Keep a respectful distance:</strong> The Sangai
                      is endangered and easily disturbed — let guides
                      control how close the boat approaches.
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
                          "Carry your Inner Line Permit for Manipur",
                          "Visit in the Nov–Apr dry season for best access",
                          "Book an early morning boat safari",
                          "Use official forest department boat operators",
                          "Carry binoculars for spotting the Sangai and birds",
                          "Pack water and snacks for the safari",
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
                          "Expect to find accommodation right at the park",
                          "Visit during peak monsoon without checking access",
                          "Book informal, unlicensed boat operators",
                          "Approach the Sangai closer than guides advise",
                          "Skip the ILP paperwork before traveling",
                          "Rush the visit into less than half a day",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Keibul
                    Lamjao with a wider{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    day out and a stop in{" "}
                    <Link href="/blog/moirang-travel-guide">Moirang</Link>.
                    See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for the wider state.
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
                {["Manipur", "Keibul Lamjao", "Sangai Deer"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="keibul-lamjao-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="keibul-lamjao-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
