// src/app/blog/wagah-border-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Wagah Border Guide: Beating Retreat Ceremony",
  description:
    "Complete Wagah Border guide — the daily Beating Retreat ceremony, what to expect, arrival timing, security, how to reach from Amritsar, and a full visit plan.",
  keywords:
    "Wagah Border, Beating Retreat ceremony, Amritsar, India Pakistan border, Wagah ceremony timings, how to reach Wagah Border",
  openGraph: {
    title: "Wagah Border Guide: Beating Retreat Ceremony",
    description:
      "High-kicking marches, patriotic chants, and a flag-lowering ceremony performed daily at the India-Pakistan border — the complete Wagah Border guide.",
    url: "https://club.kudozz.in/blog/wagah-border-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Open border landscape at dusk, evoking the daily Beating Retreat ceremony at Wagah",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagah Border Guide: Beating Retreat Ceremony",
    description:
      "One of the most theatrical border ceremonies anywhere in the world — the complete guide to visiting Wagah.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/wagah-border-travel-guide",
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
          headline: "Wagah Border Guide: Beating Retreat Ceremony",
          description:
            "Complete Wagah Border guide — the daily Beating Retreat ceremony, what to expect, arrival timing, security, how to reach from Amritsar, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/wagah-border-travel-guide",
          },
          keywords:
            "Wagah Border, Beating Retreat, Amritsar, India Pakistan border, Punjab",
          about: {
            "@type": "Place",
            name: "Wagah Border",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Punjab",
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
                name: "Punjab",
                item: "https://club.kudozz.in/blog/punjab-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Wagah Border",
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
    q: "What time does the Beating Retreat ceremony start?",
    a: "The ceremony takes place daily just before sunset, so exact timing shifts slightly with the season — typically in the 5-6 pm window. Confirm the current schedule locally, as it's adjusted through the year.",
  },
  {
    q: "How early should I arrive?",
    a: "At least 90 minutes to two hours before the ceremony start time, given the security screening and the crowds that gather to secure a good seat in the viewing stands — arriving right at ceremony time often means standing far back.",
  },
  {
    q: "How far is Wagah Border from Amritsar?",
    a: "Roughly 30 km, about 45 minutes to an hour's drive depending on traffic, making it a very manageable half-day excursion from the city.",
  },
  {
    q: "Is visiting the Wagah Border ceremony free?",
    a: "Yes, watching the ceremony is free — you'll only spend on transport to and from the border and, optionally, parking.",
  },
  {
    q: "Is it safe and family-friendly?",
    a: "Yes — it's a heavily attended, well-organized public event with a festive, patriotic atmosphere, popular with families and groups of all ages.",
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
  { id: "introduction", title: "A Theatrical Border Ceremony", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Wagah Border", level: 2 },
  { id: "things-to-do", title: "What Happens at the Ceremony", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Facilities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function WagahBorderGuidePage() {
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
              alt="Open border landscape at dusk, evoking the daily Beating Retreat ceremony at Wagah"
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
                { label: "Punjab", href: "/blog/punjab-travel-guide" },
                { label: "Wagah Border", href: null },
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
                "Wagah Border",
                "Beating Retreat",
                "Amritsar",
                "Punjab",
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
              Wagah Border Guide: Beating Retreat Ceremony
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              High-kicking marches, roaring crowds, and a flag lowered in
              perfect unison on both sides of the India-Pakistan border —
              one of the most theatrical ceremonies anywhere in the world.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Wagah, Punjab",
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
                  <h2>A Theatrical Border Ceremony</h2>
                  <p>
                    The <strong>Wagah Border</strong>, roughly 30 km from{" "}
                    <Link href="/blog/amritsar-travel-guide">Amritsar</Link>,
                    is an India-Pakistan border crossing famous for its
                    daily <strong>Beating Retreat ceremony</strong> — a
                    highly choreographed, spirited flag-lowering ritual
                    performed every evening before sunset by India's Border
                    Security Force on one side and Pakistan Rangers on the
                    other.
                  </p>
                  <p>
                    High-kicking synchronized marches, patriotic music and
                    chants, and enormous, enthusiastic crowds on both sides
                    build to the simultaneous lowering of both nations'
                    flags and the closing of the border gates. It's widely
                    considered one of the most theatrical, energetic border
                    ceremonies anywhere in the world — genuinely worth
                    experiencing even if "border tourism" doesn't usually
                    appeal to you.
                  </p>
                  <p>
                    Large dedicated viewing stands on the Indian side
                    accommodate the crowds that gather daily, rain or shine.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🇮🇳</span> Wagah Border at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "~30 km from Amritsar" },
                        {
                          icon: "🕐",
                          label: "When",
                          value: "Daily, before sunset",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🎖️",
                          label: "Known For",
                          value: "Beating Retreat ceremony",
                        },
                        {
                          icon: "💰",
                          label: "Cost",
                          value: "Free to attend",
                        },
                        {
                          icon: "⏱️",
                          label: "Arrive",
                          value: "1.5–2 hrs early",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    The ceremony happens every evening year-round before
                    sunset, so timing is really about choosing a comfortable
                    season for the trip out from Amritsar rather than a
                    specific ceremony date.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable temperatures for standing in the viewing stands and the drive out from Amritsar.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan for it",
                        text: "Intense heat makes the wait in the stands more taxing — carry water and sun protection if visiting now.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "The ceremony proceeds rain or shine — carry a light rain layer if visiting during monsoon.",
                      },
                      {
                        season: "Republic Day / Independence Day",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Extra-special editions",
                        text: "The ceremony gets an even bigger, more festive treatment around January 26 and August 15, though with correspondingly larger crowds.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    weather for the wait in the stands and the drive back to
                    Amritsar after dark.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Wagah Border</h2>
                  <ul>
                    <li>
                      <strong>By taxi/auto from Amritsar:</strong> The most
                      common option, roughly 45 minutes to an hour each way
                      depending on traffic.
                    </li>
                    <li>
                      <strong>Shared/group transport:</strong> Many hotels
                      and tour operators in Amritsar arrange shared trips
                      timed for the ceremony.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Traffic toward Wagah builds
                    significantly in the hour before the ceremony — leave
                    Amritsar with extra buffer time, especially on weekends.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>What Happens at the Ceremony</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Open border landscape evoking the Wagah ceremony grounds"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Pre-Ceremony Crowd Warm-Up</h3>
                  <p>
                    Before the formal ceremony begins, patriotic music plays
                    and crowds on the Indian side are whipped into an
                    energetic, celebratory mood — many visitors join in
                    dancing and cheering.
                  </p>
                  <h3>The Marching Display</h3>
                  <p>
                    Soldiers from both sides perform dramatic, high-kicking
                    synchronized marches up to the border gates — a
                    genuinely impressive display of choreography and
                    discipline.
                  </p>
                  <h3>Flag Lowering</h3>
                  <p>
                    The ceremony builds to the simultaneous lowering of both
                    nations' flags and the closing of the gates — the
                    ceremony's climactic, most-watched moment.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Wagah Border is a day-trip destination — there's no
                    accommodation at the border itself. Stay in Amritsar and
                    treat this as a half-day excursion.
                  </p>
                  <p>
                    See our{" "}
                    <Link href="/blog/amritsar-travel-guide">
                      Amritsar travel guide
                    </Link>{" "}
                    for accommodation options in the city.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Amritsar Sightseeing",
                        color: "bg-amber-700",
                        activities: [
                          "Golden Temple and old-city sights",
                          "Lunch in Amritsar",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Drive to Wagah",
                        color: "bg-sky-600",
                        activities: [
                          "Depart Amritsar 2-2.5 hours before ceremony time",
                          "Pass through security screening on arrival",
                          "Find a seat in the viewing stands",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "The Ceremony",
                        color: "bg-forest-600",
                        activities: [
                          "Watch the pre-ceremony crowd energy build",
                          "Watch the marching display and flag lowering",
                          "Return to Amritsar after dark",
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
                  <h2>Food & Facilities</h2>
                  <ul>
                    <li>
                      <strong>At the border:</strong> Minimal facilities —
                      a few snack and drink stalls near the parking area,
                      but don't expect a proper meal here.
                    </li>
                    <li>
                      <strong>Eat before you go:</strong> Have a proper meal
                      in Amritsar before heading out, or plan dinner after
                      you return.
                    </li>
                    <li>
                      <strong>Carry water:</strong> Especially important in
                      warmer months given the wait in the stands.
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
                          {["Item", "Cost"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Ceremony entry", "Free"],
                          ["Round-trip taxi/auto from Amritsar", "₹600–₹1,500"],
                          ["Parking (if self-driving)", "₹50–₹100"],
                          ["Snacks/water at the border", "₹100–₹300"],
                        ].map(([exp, c], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {c}
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
                    * Watching the ceremony itself is free — your main cost
                    is transport from Amritsar.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Wagah Border</h2>
                  <ul>
                    <li>
                      <strong>Arrive early:</strong> 1.5-2 hours before
                      ceremony time to clear security and secure a decent
                      seat in the stands.
                    </li>
                    <li>
                      <strong>Carry ID:</strong> Required for security
                      checks before entering the viewing area.
                    </li>
                    <li>
                      <strong>Dress comfortably:</strong> You'll be
                      standing/sitting for a while, often in warm weather.
                    </li>
                    <li>
                      <strong>Combine with Amritsar sightseeing:</strong>{" "}
                      This works best as the second half of a full day that
                      starts with the Golden Temple.
                    </li>
                    <li>
                      <strong>Keep large bags to a minimum:</strong> Security
                      screening moves faster with minimal belongings.
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
                          "Arrive at least 1.5-2 hours before ceremony time",
                          "Carry ID for security screening",
                          "Join in the pre-ceremony crowd energy",
                          "Combine with a full day of Amritsar sightseeing",
                          "Carry water, especially in warmer months",
                          "Confirm today's ceremony timing before heading out",
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
                          "Arrive right at ceremony time expecting a good seat",
                          "Forget ID needed for security screening",
                          "Bring large bags that slow down security checks",
                          "Expect a proper meal at the border itself",
                          "Skip Amritsar sightseeing thinking Wagah alone fills a day",
                          "Assume the ceremony is cancelled for light rain",
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
                    <strong>🗺️ Extend the trip:</strong> Combine with a full{" "}
                    <Link href="/blog/amritsar-travel-guide">
                      Amritsar travel guide
                    </Link>{" "}
                    itinerary, or see our{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
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
                {[
                  "Wagah Border",
                  "Beating Retreat",
                  "Amritsar",
                  "Punjab",
                  "India Pakistan Border",
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

              <RelatedPostsGrid currentSlug="wagah-border-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="wagah-border-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
