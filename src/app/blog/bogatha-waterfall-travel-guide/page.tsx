// src/app/blog/bogatha-waterfall-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bogatha Waterfall Guide: Best Time & How to Reach",
  description:
    "Complete Bogatha Waterfall guide — Telangana's 'Niagara', when the falls are actually worth seeing, how to reach from Warangal, and how to combine it with Laknavaram Lake and Ramappa Temple.",
  keywords:
    "Bogatha Waterfall, Bogatha Falls Telangana, Mulugu district waterfall, Niagara of Telangana, Warangal day trip, best time Bogatha Waterfall, how to reach Bogatha Waterfall, Laknavaram Lake",
  openGraph: {
    title: "Bogatha Waterfall Guide: Best Time & How to Reach",
    description:
      "Nicknamed the 'Niagara of Telangana' — a broad monsoon-fed cascade in Mulugu district, and exactly when it's worth the drive.",
    url: "https://club.kudozz.in/blog/bogatha-waterfall-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Waterfall cascading over rocks through forest, evoking Bogatha Waterfall in Mulugu district",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogatha Waterfall Guide: Best Time & How to Reach",
    description:
      "Telangana's 'Niagara' — a broad monsoon-fed cascade, and exactly when it's worth the drive.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bogatha-waterfall-travel-guide",
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
          headline: "Bogatha Waterfall Guide: Best Time & How to Reach",
          description:
            "Complete Bogatha Waterfall guide — Telangana's 'Niagara', when the falls are actually worth seeing, how to reach from Warangal, and how to combine it with Laknavaram Lake and Ramappa Temple.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
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
            "@id": "https://club.kudozz.in/blog/bogatha-waterfall-travel-guide",
          },
          keywords:
            "Bogatha Waterfall, Mulugu district, Niagara of Telangana, monsoon waterfall, Telangana, off-beat",
          about: {
            "@type": "Place",
            name: "Bogatha Waterfall",
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
                name: "Bogatha Waterfall",
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
    q: "When is the best time to see Bogatha Waterfall at its fullest?",
    a: "Roughly July to October — during and just after the monsoon — is when Bogatha runs at real volume and earns its 'Niagara of Telangana' nickname. Outside this window, especially in peak summer, the falls can reduce to a trickle or dry up almost entirely.",
  },
  {
    q: "Is Bogatha Waterfall dry in winter or summer?",
    a: "It's often significantly reduced or effectively dry by mid-winter through summer, since it's a heavily monsoon-dependent seasonal waterfall. If a strong waterfall is the whole point of your trip, plan for the July-October window rather than visiting on a whim later in the year.",
  },
  {
    q: "How far is Bogatha Waterfall from Warangal?",
    a: "Bogatha is deep in Mulugu district's forest belt, with Warangal serving as the practical base town for the drive in. Treat it as a half-day-plus excursion from Warangal rather than a quick stop, since the roads in are rural and the final stretch may involve a short walk from the parking area to the viewpoint.",
  },
  {
    q: "Can Bogatha Waterfall be combined with Laknavaram Lake?",
    a: "Yes — Bogatha, Laknavaram Lake, and Ramappa Temple all sit within the same Mulugu-district tourist circuit and are commonly combined into a single day or two-day trip from Warangal.",
  },
  {
    q: "Is the walk to Bogatha Waterfall difficult?",
    a: "It's generally a short, manageable walk from the parking area to the main viewpoint rather than a serious trek, but rocks near the base can be slippery when wet, so grippy footwear is worth having.",
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
  { id: "introduction", title: "Telangana's 'Niagara'", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bogatha Waterfall", level: 2 },
  { id: "things-to-do", title: "The Waterfall & Viewpoint", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BogathaWaterfallGuidePage() {
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
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Waterfall cascading over rocks through forest, evoking Bogatha Waterfall in Mulugu district"
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
                { label: "Bogatha Waterfall", href: null },
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
                "Bogatha Waterfall",
                "Mulugu District",
                "Waterfall",
                "Monsoon",
                "Off-beat",
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
              Bogatha Waterfall: The "Niagara of Telangana"
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A broad curtain of water cascading over rocky terrain deep in
              Mulugu district — spectacular at the right time of year, and
              easy to be disappointed by at the wrong one.
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
                  text: "Mulugu district, Telangana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>Telangana's "Niagara"</h2>
                  <p>
                    <strong>Bogatha Waterfall</strong>, tucked into the
                    forest belt of Mulugu district, has picked up the local
                    nickname "the Niagara of Telangana" for the way it fans
                    out in a broad curtain over rocky, tiered terrain rather
                    than dropping as a single narrow jet — a popular
                    comparison rather than a literal claim about scale, but
                    one that gives a fair sense of its width and character
                    at full flow.
                  </p>
                  <p>
                    The single most important thing to know before planning a
                    trip here: <strong>Bogatha is heavily seasonal</strong>.
                    At its best, roughly July through October, it's a
                    genuinely impressive sight. Outside that window —
                    especially in peak summer — it can thin to a trickle or
                    dry up altogether, which is the single most common
                    disappointment travelers report after making the trip at
                    the wrong time of year.
                  </p>
                  <p>
                    It sits within the same Mulugu-district circuit as{" "}
                    <Link href="/blog/laknavaram-travel-guide">
                      Laknavaram Lake
                    </Link>{" "}
                    and the Ramappa Temple heritage sites near{" "}
                    <Link href="/blog/warangal-travel-guide">Warangal</Link>,
                    and most visitors combine two or more of these in a
                    single trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>💧</span> Bogatha Waterfall at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Mulugu district, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "Nearest Town",
                          value: "Warangal (gateway)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Jul – Oct",
                        },
                        {
                          icon: "💧",
                          label: "Known For",
                          value: "'Niagara of Telangana'",
                        },
                        {
                          icon: "⚠️",
                          label: "Seasonality",
                          value: "Weak/dry outside monsoon",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Laknavaram Lake, Ramappa Temple",
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
                  <h2>Best Time to Visit Bogatha Waterfall</h2>
                  <p>
                    Timing matters more here than at almost any other
                    Telangana destination — get the season wrong and there
                    may barely be a waterfall to see.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Jul – Oct",
                        emoji: "🌊",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The falls run at full volume during and just after the monsoon — this is genuinely the only window worth planning a dedicated trip around.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Tapering off",
                        text: "Flow noticeably reduces as the post-monsoon months progress — still visible, but far less dramatic than peak season.",
                      },
                      {
                        season: "Feb – Jun",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Weak to dry — avoid if the falls are the priority",
                        text: "The waterfall can reduce to a trickle or dry up almost entirely through this stretch, especially by peak summer.",
                      },
                      {
                        season: "Aug – Sep",
                        emoji: "📸",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak flow",
                        text: "The most reliable window for the falls at their absolute fullest, though expect wetter, muddier approach paths.",
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
                    <strong>Our pick:</strong> July to October — this is not
                    a "best of several good options" pick, it's essentially
                    the only window where Bogatha lives up to its nickname.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bogatha Waterfall</h2>
                  <p>
                    Warangal is the practical base for the drive into Mulugu
                    district's forest belt.
                  </p>
                  <ul>
                    <li>
                      <strong>From Warangal:</strong> A drive of a couple of
                      hours into Mulugu district, on a mix of state highway
                      and rural roads — comfortable in a private vehicle,
                      slow and impractical by public transport.
                    </li>
                    <li>
                      <strong>The final stretch:</strong> Expect to park and
                      walk a short distance from the road to the main
                      viewpoint — not a serious trek, but not a
                      drive-right-up stop either.
                    </li>
                    <li>
                      <strong>From Hyderabad:</strong> A long day given the
                      combined distance to Mulugu district — far more
                      comfortable as part of a 2-day Warangal-based trip
                      than a single-day round trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check recent rainfall before
                    setting off — a dry spell even within the "right" months
                    can mean a weaker waterfall than you're expecting.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Waterfall & Viewpoint</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Waterfall in forested terrain, evoking Bogatha Waterfall"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Main Cascade</h3>
                  <p>
                    Bogatha's water spreads across a wide, tiered rock face
                    rather than dropping in a single narrow column — the
                    breadth of the flow, especially in peak monsoon, is what
                    earns the "Niagara" comparison locally.
                  </p>
                  <h3>The Approach Path</h3>
                  <p>
                    A short walking path connects the parking area to the
                    main viewpoint. It's manageable for most fitness levels
                    but can get slippery on wet rock near the base during and
                    just after heavy rain — proper footwear matters more here
                    than the distance suggests.
                  </p>
                  <h3>Photography</h3>
                  <p>
                    The falls photograph best in soft morning or late
                    afternoon light, with the forest backdrop giving good
                    contrast against the white water at full flow.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Bogatha Waterfall</h2>
                  <p>
                    There's very little accommodation right at the falls —
                    Warangal or Mulugu town are the realistic bases.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,600/night",
                        picks: [
                          "Budget lodges, Warangal town",
                          "Basic guesthouses, Mulugu",
                          "Simple stays, Hanamkonda",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,800/night",
                        picks: [
                          "Business hotels, Warangal",
                          "Hanamkonda hotel chains",
                          "Highway hotels near NH163",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,000–₹7,500+/night",
                        picks: [
                          "Premium hotels, Warangal city",
                          "Full-service business hotels",
                          "Serviced apartments, Hanamkonda",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Warangal to Mulugu",
                        color: "bg-amber-700",
                        activities: [
                          "Warangal Fort and Thousand Pillar Temple",
                          "Drive to Mulugu district, check in",
                          "Evening at Laknavaram Lake if time allows",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Bogatha Waterfall & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning drive to Bogatha Waterfall",
                          "Walk to the viewpoint, photography",
                          "Return to Warangal or Hyderabad by evening",
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
                    <Link href="/blog/laknavaram-travel-guide">
                      Laknavaram Lake
                    </Link>{" "}
                    for a fuller Mulugu-district circuit from Warangal.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Bogatha Waterfall</h2>
                  <ul>
                    <li>
                      <strong>Local stalls near the parking area:</strong>{" "}
                      Basic tea and snack stalls, when open — don't rely on
                      them being consistently available, especially outside
                      peak season.
                    </li>
                    <li>
                      <strong>Warangal or Mulugu town:</strong> A far more
                      reliable spread of proper restaurants — plan your main
                      meals around these stops.
                    </li>
                    <li>
                      <strong>Carry your own food and water:</strong>{" "}
                      Sensible given the remote, rural setting and limited
                      standalone food options right at the falls.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹5,500"],
                          ["Car hire from Warangal (round trip)", "₹1,800", "₹2,800", "₹4,000"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Entry/parking fee", "₹30", "₹30", "₹30"],
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
                  <h2>Essential Tips for Visiting Bogatha Waterfall</h2>
                  <ul>
                    <li>
                      <strong>Check the season before you go:</strong> This
                      is the single most important planning decision — visit
                      July-October, not on a whim in summer.
                    </li>
                    <li>
                      <strong>Check recent rainfall:</strong> Even within the
                      right months, a dry spell can noticeably thin the flow.
                    </li>
                    <li>
                      <strong>Wear grippy, closed footwear:</strong> Rocks
                      near the base get slippery when wet.
                    </li>
                    <li>
                      <strong>Keep a safe distance from the edge:</strong>{" "}
                      Currents and rock surfaces are more dangerous than they
                      look, especially at high water.
                    </li>
                    <li>
                      <strong>Combine with Laknavaram Lake:</strong> Both sit
                      in the same district and are easily paired in one trip.
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
                          "Plan the trip for July-October specifically",
                          "Check recent rainfall before setting off",
                          "Wear grippy footwear for wet rocks",
                          "Combine with Laknavaram Lake nearby",
                          "Carry your own food and water",
                          "Keep a safe distance from the water's edge",
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
                          "Visit outside monsoon expecting a full waterfall",
                          "Get too close to the wet rock edge",
                          "Rely on food stalls being open at the falls",
                          "Underestimate the drive time from Hyderabad",
                          "Skip checking recent rainfall reports",
                          "Wear slick-soled footwear near the base",
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
                    <strong>🗺️ Extend the trip:</strong> Bogatha pairs
                    naturally with{" "}
                    <Link href="/blog/laknavaram-travel-guide">
                      Laknavaram Lake
                    </Link>{" "}
                    and the Kakatiya heritage sites around{" "}
                    <Link href="/blog/warangal-travel-guide">Warangal</Link>.
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
                  "Bogatha Waterfall",
                  "Mulugu District",
                  "Telangana",
                  "Waterfall",
                  "Monsoon",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="bogatha-waterfall-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bogatha-waterfall-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
