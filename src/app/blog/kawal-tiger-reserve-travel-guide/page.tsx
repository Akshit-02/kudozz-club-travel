// src/app/blog/kawal-tiger-reserve-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kawal Tiger Reserve: Safari Guide & Tips",
  description:
    "Complete Kawal Tiger Reserve guide — dry deciduous forest safaris, the rare four-horned antelope, leopards and wild dogs, permits, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Kawal Tiger Reserve, Adilabad wildlife, Telangana tiger reserve, four-horned antelope chousingha, Kawal safari, how to reach Kawal Tiger Reserve, Nirmal Mancherial wildlife, Kuntala Waterfall combined trip",
  openGraph: {
    title: "Kawal Tiger Reserve: Safari Guide & Tips",
    description:
      "Dry deciduous forest, the rare four-horned antelope, and a genuinely offbeat wildlife corridor in northern Telangana — the complete Kawal guide.",
    url: "https://club.kudozz.in/blog/kawal-tiger-reserve-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Forested river landscape, evoking Kawal Tiger Reserve's dry deciduous forest and river-fed terrain in northern Telangana",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kawal Tiger Reserve: Safari Guide & Tips",
    description:
      "Dry deciduous forest, the rare four-horned antelope, and a genuinely offbeat wildlife corridor in northern Telangana — the complete Kawal guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kawal-tiger-reserve-travel-guide",
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
          headline: "Kawal Tiger Reserve: Safari Guide & Tips",
          description:
            "Complete Kawal Tiger Reserve guide — dry deciduous forest safaris, the rare four-horned antelope, leopards and wild dogs, permits, how to reach from Hyderabad, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/kawal-tiger-reserve-travel-guide",
          },
          keywords:
            "Kawal Tiger Reserve, Adilabad district, Telangana, wildlife safari, four-horned antelope",
          about: {
            "@type": "Place",
            name: "Kawal Tiger Reserve",
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
                name: "Kawal Tiger Reserve",
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
    q: "Are tiger sightings likely at Kawal Tiger Reserve?",
    a: "Not reliably — tiger numbers here have historically been low, and Kawal functions more as a recovering habitat and wildlife corridor connecting toward Maharashtra's tiger reserves than a guaranteed-sighting destination. Go for the forest scenery and other wildlife rather than expecting a tiger.",
  },
  {
    q: "How far is Kawal Tiger Reserve from Hyderabad?",
    a: "Roughly 260 km, making it a fairly remote, far-flung destination in northern Telangana's Adilabad, Nirmal, and Mancherial districts — best planned as an overnight trip rather than a rushed day visit.",
  },
  {
    q: "Do I need advance permits for a safari?",
    a: "Yes, safaris here are run through the forest department and typically require advance permission. Book ahead rather than assuming you can arrange entry on arrival, especially during peak visiting months.",
  },
  {
    q: "What is the best time for a Kawal safari?",
    a: "October to February/March offers the best wildlife visibility and comfortable safari conditions. Avoid peak summer heat and the monsoon, when forest tracks can become difficult.",
  },
  {
    q: "Can Kawal be combined with Kuntala Waterfall?",
    a: "Yes, and it's the natural pairing — both sit in the same general northern-Telangana region, and combining them into a single overnight trip makes far better use of the long drive from Hyderabad.",
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
  { id: "introduction", title: "A Wildlife Corridor in Northern Telangana", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kawal", level: 2 },
  { id: "things-to-do", title: "Safaris & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KawalTigerReserveGuidePage() {
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
              alt="Forested river landscape, evoking Kawal Tiger Reserve's dry deciduous forest and river-fed terrain in northern Telangana"
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
                { label: "Kawal Tiger Reserve", href: null },
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
                "Kawal Tiger Reserve",
                "Telangana",
                "Adilabad",
                "Wildlife Safari",
                "Adventure",
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
              Kawal Tiger Reserve: Safari & Wildlife Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Dry deciduous forest stretching across three northern Telangana
              districts, home to leopards, wild dogs, and the genuinely rare
              four-horned antelope — a wildlife corridor, not a tiger
              guarantee.
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
                  text: "Adilabad / Nirmal / Mancherial, Telangana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>A Wildlife Corridor in Northern Telangana</h2>
                  <p>
                    <strong>Kawal Tiger Reserve</strong> spans parts of
                    Adilabad, Nirmal, and Mancherial districts in northern
                    Telangana, notified as a tiger reserve in 2012 as part of
                    a broader Godavari-Kawal wildlife landscape that connects
                    toward tiger reserves in neighbouring Maharashtra.
                  </p>
                  <p>
                    It's worth being upfront about what Kawal actually
                    offers: tiger numbers here have historically been low,
                    and the reserve functions more as a recovering and
                    connecting habitat than a destination with reliable tiger
                    sightings. The real appeal is broader — dry deciduous
                    forest scenery, leopards, wild dogs (dhole), sloth bears,
                    varied birdlife, and the genuinely distinctive
                    four-horned antelope (chousingha), a species rare enough
                    to be a highlight in its own right for wildlife
                    enthusiasts.
                  </p>
                  <p>
                    At roughly 260 km from Hyderabad, this is a far-flung,
                    genuinely offbeat destination — set realistic
                    expectations and you'll come away with a rewarding forest
                    experience rather than a disappointing tiger hunt.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐆</span> Kawal Tiger Reserve at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Adilabad / Nirmal / Mancherial",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~260 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🦌",
                          label: "Known For",
                          value: "Four-horned antelope, leopards",
                        },
                        {
                          icon: "📅",
                          label: "Notified",
                          value: "Tiger reserve since 2012",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Kuntala Waterfall",
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
                  <h2>Best Time to Visit Kawal Tiger Reserve</h2>
                  <p>
                    Safari conditions and wildlife visibility both depend
                    heavily on the season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions and thinning foliage make wildlife spotting considerably easier, with comfortable safari temperatures.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Peak summer heat makes daytime safaris genuinely uncomfortable, though animals do concentrate near water sources.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — often closed",
                        text: "Forest tracks can become difficult or impassable, and safaris may be suspended for parts of this window — check current status before travelling.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🦌",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best sighting window",
                        text: "The most reliable stretch for spotting the four-horned antelope, leopards, and other wildlife on early-morning safaris.",
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
                    <strong>Our pick:</strong> November to February —
                    reliable wildlife visibility, comfortable safari
                    temperatures, and the best odds of a genuinely rewarding
                    forest drive.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kawal Tiger Reserve</h2>
                  <p>
                    Kawal is a long drive from Hyderabad, best tackled as a
                    dedicated overnight trip rather than a rushed day visit.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Hyderabad:</strong> Roughly 260 km
                      via Nirmal or Mancherial — figure on a substantial
                      half-day drive each way.
                    </li>
                    <li>
                      <strong>Via Nirmal:</strong> The more common approach
                      route, with Nirmal town serving as a practical staging
                      point before entering the reserve.
                    </li>
                    <li>
                      <strong>Via Mancherial:</strong> An alternative
                      approach depending on which safari zone you're
                      targeting.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your safari permit
                    through the forest department in advance — this is a far
                    less touristed reserve than Telangana's better-known
                    parks, and arrangements aren't always available on
                    arrival.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Safaris & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Dry deciduous forest and river terrain, Kawal Tiger Reserve, Telangana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Forest Safaris</h3>
                  <p>
                    Forest-department-run safaris cover the reserve's dry
                    deciduous terrain, typically requiring advance permission
                    and a booked vehicle. Early-morning and late-afternoon
                    drives offer the best chance of wildlife activity.
                  </p>
                  <h3>The Four-Horned Antelope</h3>
                  <p>
                    Kawal is one of the more accessible places in India to
                    potentially spot the <strong>chousingha</strong>, or
                    four-horned antelope — a genuinely rare and distinctive
                    species, and arguably a more realistic highlight of a
                    visit here than a tiger sighting.
                  </p>
                  <h3>Other Wildlife</h3>
                  <p>
                    Leopards, wild dogs (dhole), sloth bears, and a good
                    range of birdlife round out the reserve's draw — come
                    with patience and appreciation for the forest itself
                    rather than a single-species checklist.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Kawal</h2>
                  <p>
                    Accommodation options are basic — this is a genuinely
                    remote reserve without a developed tourist-lodge scene.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,200/night",
                        picks: [
                          "Forest department guesthouses (if available)",
                          "Basic lodges in Nirmal",
                          "Simple stays in Mancherial",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Business hotels in Nirmal or Mancherial",
                          "Highway hotels en route",
                          "Adilabad town stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹3,500–₹6,000+/night",
                        picks: [
                          "Premium stays in Hyderabad (multi-day base)",
                          "Best available hotels in nearby towns",
                          "Full-board options limited near the reserve",
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
                        title: "Hyderabad to Kawal",
                        color: "bg-amber-700",
                        activities: [
                          "Long drive from Hyderabad via Nirmal",
                          "Check in, evening at leisure",
                          "Confirm next-day safari booking",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Safari & Onward to Kuntala",
                        color: "bg-sky-600",
                        activities: [
                          "Early-morning forest safari",
                          "Drive onward to Kuntala Waterfall",
                          "Explore the falls before heading back",
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
                    * Pairing Kawal with{" "}
                    <Link href="/blog/kuntala-waterfall-travel-guide">
                      Kuntala Waterfall
                    </Link>{" "}
                    makes far better use of the long drive from Hyderabad.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Kawal</h2>
                  <ul>
                    <li>
                      <strong>Forest guesthouse meals:</strong> If staying at
                      a forest department facility, meals are often arranged
                      directly — the most convenient option given how limited
                      the surrounding options are.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Simple Telangana-style
                      meals are available in Nirmal, Mancherial, and Adilabad
                      town.
                    </li>
                    <li>
                      <strong>Carry your own supplies:</strong> Options
                      thin out considerably once inside the reserve area — a
                      good stock of water and snacks is worth carrying.
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
                            "₹2,200",
                            "₹4,500",
                          ],
                          [
                            "Car hire from Hyderabad (round trip)",
                            "₹7,000",
                            "₹9,500",
                            "₹13,000",
                          ],
                          ["Safari permit + vehicle", "₹1,000", "₹1,800", "₹3,000"],
                          ["Food/day", "₹400", "₹800", "₹1,800"],
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
                    * Figures are per person, per day (except car hire and
                    safari permit, better calculated per group/vehicle).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kawal</h2>
                  <ul>
                    <li>
                      <strong>Book safari permits in advance:</strong>{" "}
                      Arrange this through the forest department ahead of
                      time rather than assuming walk-in access.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> Go for the
                      forest and the four-horned antelope, not a guaranteed
                      tiger sighting.
                    </li>
                    <li>
                      <strong>Go on early-morning safaris:</strong> Wildlife
                      activity is highest at dawn and dusk.
                    </li>
                    <li>
                      <strong>Combine with Kuntala Waterfall:</strong> Makes
                      far better use of the long drive from Hyderabad.
                    </li>
                    <li>
                      <strong>Carry sufficient water and snacks:</strong>{" "}
                      Facilities inside the reserve are minimal.
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
                          "Book safari permits ahead through the forest department",
                          "Go on early-morning or late-afternoon safaris",
                          "Combine the trip with Kuntala Waterfall",
                          "Carry your own water and snacks",
                          "Set realistic expectations about tiger sightings",
                          "Visit during Oct-Mar for the best conditions",
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
                          "Expect a guaranteed tiger sighting",
                          "Arrive without a booked safari permit",
                          "Attempt safaris during peak monsoon closures",
                          "Rely on a developed tourist-lodge scene here",
                          "Travel without checking current safari status",
                          "Rush the trip — allow a full overnight",
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
                    <strong>🗺️ Extend the trip:</strong> Kawal pairs naturally
                    with{" "}
                    <Link href="/blog/kuntala-waterfall-travel-guide">
                      Kuntala Waterfall
                    </Link>{" "}
                    for a fuller northern-Telangana loop. See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
                    </Link>{" "}
                    for the wider region.
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
                  "Kawal Tiger Reserve",
                  "Adilabad District",
                  "Telangana",
                  "Wildlife Safari",
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

              <RelatedPostsGrid currentSlug="kawal-tiger-reserve-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kawal-tiger-reserve-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
