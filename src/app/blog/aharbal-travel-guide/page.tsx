// src/app/blog/aharbal-travel-guide/page.tsx
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
  title: "Aharbal Waterfall Travel Guide: Kashmir's Niagara",
  description:
    "Plan a trip to Aharbal, the 'Niagara Falls of Kashmir' — a wide, roaring waterfall on the Veshaw River. Best time to visit, distance from Srinagar, and tips.",
  keywords:
    "Aharbal waterfall, Aharbal Kashmir, Aharbal distance from Srinagar, Niagara of Kashmir, best time to visit Aharbal, Kashmir waterfalls, Kulgam Kashmir, Veshaw River, Kounsarnag Lake trek, Aharbal day trip from Srinagar",
  openGraph: {
    title: "Aharbal Waterfall Travel Guide: Kashmir's Niagara",
    description:
      "A wide, roaring waterfall on the Veshaw River near Kulgam, nicknamed the 'Niagara Falls of Kashmir' — how to get there, when to go, and what to expect.",
    url: "https://club.kudozz.in/blog/aharbal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Aharbal waterfall cascading over rocks on the Veshaw River, Kashmir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aharbal Waterfall Travel Guide: Kashmir's Niagara",
    description:
      "A wide, roaring waterfall on the Veshaw River near Kulgam, nicknamed the 'Niagara Falls of Kashmir' — how to get there, when to go, and what to expect.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/aharbal-travel-guide",
  },
};

// ── JSON-LD: Article ─────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Aharbal Waterfall Travel Guide: Kashmir's Niagara",
          description:
            "Plan a trip to Aharbal, the 'Niagara Falls of Kashmir' — a wide, roaring waterfall on the Veshaw River. Best time to visit, distance from Srinagar, and tips.",
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
            "@id": "https://club.kudozz.in/blog/aharbal-travel-guide",
          },
          keywords:
            "Aharbal waterfall, Aharbal Kashmir, Niagara of Kashmir, Veshaw River, Kulgam, Kounsarnag Lake",
          about: {
            "@type": "Place",
            name: "Aharbal",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kulgam",
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
                name: "Aharbal",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── JSON-LD: FAQ ──────────────────────────────────────────────────────────────
function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: 'Why is Aharbal called the "Niagara of Kashmir"?',
              acceptedAnswer: {
                "@type": "Answer",
                text: "Aharbal earns the nickname not for its height — the falls drop roughly 25 metres — but for the sheer width and volume of water crashing over the rock face at once. The Veshaw River fans out across a broad ledge before the plunge, so the falls read as a wide curtain of white water rather than a narrow ribbon, which is what visitors associate with Niagara.",
              },
            },
            {
              "@type": "Question",
              name: "How far is Aharbal from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Aharbal is approximately 75 km from Srinagar, reached via Kulgam town on a mix of national highway and district road. The drive takes roughly 2 to 2.5 hours by car under normal conditions, making it a comfortable day trip from Srinagar.",
              },
            },
            {
              "@type": "Question",
              name: "Is Aharbal a day trip from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Aharbal is almost always visited as a day trip from Srinagar. Overnight accommodation right at the falls is very limited, so most travellers drive out in the morning, spend two to three hours at the falls and surrounding viewpoints, and return to Srinagar the same evening.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best time to visit Aharbal waterfall?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Late spring through early autumn, roughly April to October, is the best window, with May and June offering the strongest flow from snowmelt and post-monsoon months keeping the pine forest around the falls lush and green. Winter visits are possible and dramatic, with parts of the falls partially icing over, but access can be affected by snow on the approach road.",
              },
            },
            {
              "@type": "Question",
              name: "Can you trek to Kounsarnag Lake from Aharbal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Aharbal is the traditional starting point for the trek to Kounsarnag, a high-altitude glacial lake at around 3,500 metres. This is a serious multi-day trek over rugged terrain, suited to experienced trekkers with proper gear and, ideally, a local guide — it is not something casual day-trip visitors to the falls attempt.",
              },
            },
            {
              "@type": "Question",
              name: "Is Aharbal safe for families and kids?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Aharbal is family-friendly at the designated viewing points and walking paths, which are set back from the falls and fenced in places. The rocks closer to the water are wet and slippery, so families with young children should stick to marked paths and avoid climbing down toward the spray for photos.",
              },
            },
          ],
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Aharbal?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Aharbal", level: 2 },
  { id: "falls-experience", title: "The Falls Experience", level: 2 },
  { id: "kounsarnag-lake", title: "Beyond Aharbal: Kounsarnag Lake", level: 2 },
  { id: "kulgam-context", title: "Kulgam District", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Suggested Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AharbalGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Aharbal waterfall cascading over rocks on the Veshaw River, Kashmir"
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
                { label: "Aharbal", href: null },
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
                "Aharbal",
                "Jammu & Kashmir",
                "Kulgam",
                "Waterfall",
                "Veshaw River",
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
              Aharbal Waterfall: Kashmir's Niagara on the Veshaw River
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A wide curtain of white water crashing through pine forest in
              Kulgam district — this is the complete guide to Aharbal, the
              waterfall Kashmiris call their own Niagara.
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
                  text: "Kulgam, Jammu & Kashmir",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,300 words",
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
                  <h2>Why Visit Aharbal?</h2>
                  <p>
                    Tucked into the pine-covered foothills of southern Kashmir,{" "}
                    <strong>Aharbal</strong> is one of the region's most
                    dramatic waterfalls — and one of its most underrated. The{" "}
                    <strong>Veshaw River</strong>, fed by snowmelt from the
                    high Pir Panjal range, narrows through a rocky channel and
                    then fans out across a wide ledge before dropping roughly{" "}
                    <strong>25 metres</strong> in a thunderous, foaming sheet.
                    It's this width and volume — not height — that earned
                    Aharbal its popular nickname, the{" "}
                    <strong>"Niagara Falls of Kashmir."</strong>
                  </p>
                  <p>
                    Unlike Kashmir's better-known valley towns, Aharbal has
                    stayed refreshingly low-key. There's no gondola, no ski
                    lift, no sprawling market — just the roar of falling
                    water, deodar and pine forest climbing the slopes on
                    either side, and a scattering of tea stalls where you can
                    sit and watch the spray catch the light. It makes an
                    easy, rewarding half-day or full-day trip from{" "}
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>,
                    and pairs naturally with a wider loop through southern
                    Kashmir's less-visited corners — see our full{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir travel guide
                    </Link>{" "}
                    for how it fits into a longer itinerary.
                  </p>
                  <p>
                    For travellers who've already done the Gulmarg-Pahalgam-
                    Sonamarg circuit, Aharbal is exactly the kind of quieter,
                    photogenic detour worth adding — much like the meadows at{" "}
                    <Link href="/blog/yusmarg-travel-guide">Yusmarg</Link> and{" "}
                    <Link href="/blog/doodhpathri-travel-guide">
                      Doodhpathri
                    </Link>
                    , it rewards travellers willing to go a little further off
                    the standard route.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>💧</span> Aharbal at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Kulgam, J&K" },
                        {
                          icon: "💧",
                          label: "Waterfall Height",
                          value: "~25 m (wide cascade)",
                        },
                        {
                          icon: "🚗",
                          label: "From Srinagar",
                          value: "~75 km / 2–2.5 hrs",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Apr – Oct",
                        },
                        {
                          icon: "⛰️",
                          label: "River",
                          value: "Veshaw River",
                        },
                        {
                          icon: "🥾",
                          label: "Nearby Trek",
                          value: "Kounsarnag Lake",
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
                  <h2>Best Time to Visit Aharbal Waterfall</h2>
                  <p>
                    The falls run year-round, but the volume and character of
                    the water — and how easy the approach road is — change
                    quite a bit with the season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Peak flow — our pick",
                        text: "Snowmelt from the Pir Panjal feeds the Veshaw at its fullest, and the falls are at their loudest and widest. Surrounding forest is fresh and green.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon-fed, lush",
                        text: "Occasional rain keeps flow strong and the forest at its most vivid green, though paths near the falls get muddier and more slippery.",
                      },
                      {
                        season: "Oct",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Autumn colour",
                        text: "Flow tapers off from peak levels but stays impressive, with the surrounding pine and deodar forest turning golden-brown — a quieter, photogenic window.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Partial freeze, fewer visitors",
                        text: "Edges of the falls can ice over dramatically in a hard winter, but the approach road sees snow and can be slow or briefly closed after heavy falls.",
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
                    <strong>Our pick:</strong> May and early June, right when
                    snowmelt is peaking — this is when Aharbal most earns its
                    "Niagara" nickname, with the widest, loudest sheet of
                    water you'll see all year.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Aharbal</h2>
                  <p>
                    Aharbal sits about <strong>75 km southwest of Srinagar</strong>,
                    reached via Kulgam town — there's no rail or air option
                    directly here, so road travel is the only way in.
                  </p>
                  <ul>
                    <li>
                      <strong>From Srinagar (self-drive or cab):</strong> The
                      most common route runs via Pulwama and Kulgam, taking
                      roughly <strong>2 to 2.5 hours</strong> depending on
                      traffic and road conditions. Cabs are easily arranged
                      through hotels or houseboat owners in Srinagar.
                    </li>
                    <li>
                      <strong>Via Kulgam town:</strong> Aharbal lies about 22
                      km from Kulgam, the district headquarters — a good
                      reference point if you're combining the trip with other
                      stops in the district.
                    </li>
                    <li>
                      <strong>By shared transport:</strong> Shared cabs and
                      buses run from Srinagar to Kulgam, from where local
                      shared vehicles continue on to Aharbal — a slower,
                      budget-friendly option but with less flexibility on
                      timing.
                    </li>
                    <li>
                      <strong>Road condition:</strong> The route is mostly
                      paved and in reasonable condition, though the final
                      stretch narrows through forest and village roads — a
                      comfortable drive in a regular sedan outside heavy
                      winter snow.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start from Srinagar by 8–9 AM.
                    You'll reach Aharbal well before the midday crowd, get the
                    best light for photos, and still have the whole afternoon
                    free for the drive back or an extra stop en route.
                  </div>
                </section>

                {/* ── The Falls Experience ───────────────────────────────── */}
                <section id="falls-experience">
                  <h2>The Falls Experience</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Wide cascade of Aharbal falls surrounded by pine forest, Kulgam district"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    From the parking area, it's a short, easy walk down to the
                    main viewing points — nothing that requires trekking gear
                    or real fitness, which is part of why Aharbal works so
                    well as a family day trip. Paved and stone paths run along
                    the Veshaw River, with railings at the closest viewpoints
                    where the spray from the falls drifts across visitors on
                    a windy day.
                  </p>
                  <ul>
                    <li>
                      <strong>Main viewpoint:</strong> Directly opposite the
                      widest section of the falls — the best spot for the
                      classic wide-angle shot that shows off why the "Niagara"
                      comparison stuck.
                    </li>
                    <li>
                      <strong>Riverside walk:</strong> A short trail follows
                      the Veshaw upstream and downstream from the falls,
                      through pine forest that stays cool even on warm
                      summer days.
                    </li>
                    <li>
                      <strong>Photography spots:</strong> Early morning and
                      late afternoon light works best, with the sun angled
                      low enough to catch the mist rising off the falls
                      without harsh overhead glare.
                    </li>
                    <li>
                      <strong>Old hydel infrastructure:</strong> Aharbal was
                      once the site of one of Kashmir's earliest hydroelectric
                      projects, and remnants of old channel work are still
                      visible near the falls — a small point of local history
                      worth asking a guide about.
                    </li>
                  </ul>
                  <p>
                    The rocks closest to the water are perpetually wet and
                    genuinely slippery — this is the one place at Aharbal
                    where visitors get hurt, almost always from climbing past
                    railings for a closer photo. Stick to the marked paths and
                    you'll get essentially the same view without the risk.
                  </p>
                </section>

                {/* ── Kounsarnag Lake ───────────────────────────────────── */}
                <section id="kounsarnag-lake">
                  <h2>Beyond Aharbal: Kounsarnag Lake</h2>
                  <p>
                    For serious trekkers, Aharbal is more than a day-trip
                    waterfall — it's also the traditional starting point for
                    the trek to <strong>Kounsarnag</strong>, a striking
                    high-altitude glacial lake at roughly{" "}
                    <strong>3,500 metres</strong>, cupped by bare rock peaks
                    of the Pir Panjal range.
                  </p>
                  <p>
                    This is not a casual extension of a day trip to the
                    falls. The route to Kounsarnag typically takes{" "}
                    <strong>2 to 3 days</strong> round trip, covering rugged,
                    largely unmarked terrain with significant altitude gain,
                    and is best attempted with a local guide, proper camping
                    gear, and prior high-altitude trekking experience. Most
                    visitors to Aharbal never attempt it — but for those
                    already planning a Kashmir trekking trip, it's worth
                    knowing that one of the region's most dramatic and
                    least-visited alpine lakes starts right here.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If Kounsarnag interests you,
                    arrange a local guide in Aharbal village or through a
                    Srinagar-based trekking outfitter in advance — this route
                    sees far fewer trekkers than Kashmir's more established
                    treks, so on-the-ground support is thinner.
                  </div>
                </section>

                {/* ── Kulgam Context ─────────────────────────────────────── */}
                <section id="kulgam-context">
                  <h2>Kulgam District: The Wider Context</h2>
                  <p>
                    Aharbal sits within <strong>Kulgam district</strong>, a
                    largely agricultural part of southern Kashmir known for
                    saffron and paddy fields rather than tourist
                    infrastructure. This is part of Aharbal's appeal — the
                    drive out passes real Kashmiri village life, orchards, and
                    farmland rather than a string of tourist shops.
                  </p>
                  <p>
                    Kulgam town itself is a functional district headquarters
                    with basic services — fuel, ATMs, pharmacies, and simple
                    eateries — useful as a stop on the way to or from Aharbal,
                    but not a destination in its own right. Most travellers
                    treat it purely as a waypoint.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation directly at Aharbal is genuinely limited —
                    this is the main reason most visitors treat it as a day
                    trip rather than an overnight stop. If you do want to stay
                    closer, options are modest and best booked or confirmed
                    ahead by phone rather than online.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "At Aharbal / Kulgam",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "J&K Tourism guesthouse/huts (basic, subject to availability)",
                          "A handful of small local guesthouses in Kulgam town",
                          "Best booked by phone in advance — limited rooms",
                        ],
                      },
                      {
                        tier: "Base in Srinagar (recommended)",
                        icon: "🛶",
                        range: "₹1,500–₹8,000+/night",
                        picks: [
                          "Dal Lake houseboats — see our Srinagar guide",
                          "Wide range of hotels near Dal Gate and Boulevard Road",
                          "Easiest option: day trip out, sleep back in Srinagar",
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

                  <blockquote>
                    Unless you're combining Aharbal with the Kounsarnag trek,
                    basing yourself in{" "}
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>{" "}
                    and doing Aharbal as a day trip is by far the simplest,
                    most comfortable option.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat Near Aharbal</h2>
                  <p>
                    Don't expect a restaurant scene — food options right at
                    the falls are a handful of simple tea stalls and dhabas.
                    Plan meals around Srinagar or Kulgam town instead.
                  </p>
                  <ul>
                    <li>
                      <strong>Tea stalls at the falls:</strong> Basic Kashmiri
                      noon chai (salted, pink tea) and biscuits, served with a
                      view of the cascade — simple but memorable.
                    </li>
                    <li>
                      <strong>Roadside dhabas in Kulgam:</strong> Straightforward
                      rice-and-curry meals, rajma, and egg dishes — reliable
                      for a lunch stop on the way back.
                    </li>
                    <li>
                      <strong>Pack from Srinagar:</strong> Many day-trippers
                      carry a packed lunch from their houseboat or hotel,
                      since options thin out considerably past Kulgam town.
                    </li>
                    <li>
                      <strong>Save the Wazwan feast for Srinagar:</strong>{" "}
                      Kashmir's signature multi-course meat feast is a
                      city dining experience — Aharbal is strictly a nature
                      stop, not a food destination.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Day-Trip Itinerary from Srinagar</h2>
                  <p>
                    A single, well-paced day is all Aharbal needs — here's how
                    to structure it so you're not rushing the falls or the
                    drive.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "8:00 AM",
                        title: "Depart Srinagar",
                        color: "bg-amber-700",
                        activities: [
                          "Leave by cab or self-drive via Pulwama–Kulgam route",
                          "Optional short stop in Kulgam town for fuel/snacks",
                        ],
                      },
                      {
                        day: "10:15 AM",
                        title: "Arrive Aharbal",
                        color: "bg-forest-600",
                        activities: [
                          "Park and walk down to the main viewpoint",
                          "Photos at the wide-angle viewpoint opposite the falls",
                          "Short riverside walk along the Veshaw",
                        ],
                      },
                      {
                        day: "12:00 PM",
                        title: "Tea Break & Relax",
                        color: "bg-sky-600",
                        activities: [
                          "Noon chai at a stall overlooking the falls",
                          "Time to sit by the water away from the crowd",
                        ],
                      },
                      {
                        day: "1:30 PM",
                        title: "Depart for Srinagar",
                        color: "bg-stone-600",
                        activities: [
                          "Lunch stop at a dhaba in Kulgam en route",
                          "Drive back, arriving Srinagar by late afternoon",
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

                  <blockquote>
                    Have an extra day in southern Kashmir? Combine Aharbal
                    with a visit to the meadows at{" "}
                    <Link href="/blog/doodhpathri-travel-guide">
                      Doodhpathri
                    </Link>{" "}
                    for a fuller loop through the region's quieter corners.
                  </blockquote>
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
                          [
                            "Round-trip cab from Srinagar",
                            "₹1,800 (shared)",
                            "₹3,000 (private sedan)",
                            "₹4,500 (SUV, full day)",
                          ],
                          ["Tea/snacks at falls", "₹150", "₹300", "₹500"],
                          ["Lunch en route", "₹200", "₹450", "₹800"],
                          [
                            "Entry / parking",
                            "₹50",
                            "₹50",
                            "₹100",
                          ],
                          [
                            "Day-trip total",
                            "₹2,200",
                            "₹3,800",
                            "₹5,900",
                          ],
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
                    * Excludes Srinagar accommodation. Cab hire for the full
                    round trip is the main cost — sharing a cab with other
                    travellers brings this down considerably.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Aharbal</h2>
                  <ul>
                    <li>
                      <strong>Wear proper footwear:</strong> Closed, grippy
                      shoes matter more here than at most Kashmir stops — the
                      rocks near the falls stay wet from spray year-round.
                    </li>
                    <li>
                      <strong>Go early for the best light and fewest crowds:</strong>{" "}
                      Weekends and peak summer afternoons bring the most
                      visitors — an early start avoids both.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> There are no ATMs or card
                      facilities at Aharbal itself — withdraw what you need in
                      Srinagar or Kulgam before heading out.
                    </li>
                    <li>
                      <strong>Check the weather before a winter visit:</strong>{" "}
                      Snowfall can make the approach road slow or briefly
                      impassable — confirm conditions with your driver or
                      hotel before setting out.
                    </li>
                    <li>
                      <strong>Don't attempt Kounsarnag casually:</strong> The
                      trek beyond Aharbal is a genuine multi-day undertaking —
                      only go with proper gear, a guide, and prior
                      high-altitude experience.
                    </li>
                    <li>
                      <strong>Combine it with a wider loop:</strong> Aharbal
                      alone is a half-day stop — pairing it with{" "}
                      <Link href="/blog/yusmarg-travel-guide">Yusmarg</Link>{" "}
                      or a broader southern Kashmir circuit makes better use
                      of the drive out.
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
                          "Stick to marked paths and railings near the falls",
                          "Start early from Srinagar to beat the midday rush",
                          "Carry cash — no ATMs at Aharbal itself",
                          "Wear closed, grippy shoes for the wet rocks",
                          "Arrange a guide if attempting the Kounsarnag trek",
                          "Carry a light jacket even in summer for the spray",
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
                          "Climb past railings onto wet rocks for photos",
                          "Expect restaurants or ATMs right at the falls",
                          "Plan an overnight stay without confirming rooms ahead",
                          "Attempt the Kounsarnag trek without a guide or gear",
                          "Visit right after heavy rain without checking road status",
                          "Rush the drive — the mountain roads deserve care",
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
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-5 my-6">
                    {[
                      {
                        q: 'Why is Aharbal called the "Niagara of Kashmir"?',
                        a: "Aharbal earns the nickname not for its height — the falls drop roughly 25 metres — but for the sheer width and volume of water crashing over the rock face at once. The Veshaw River fans out across a broad ledge before the plunge, so the falls read as a wide curtain of white water rather than a narrow ribbon, which is what visitors associate with Niagara.",
                      },
                      {
                        q: "How far is Aharbal from Srinagar?",
                        a: "Aharbal is approximately 75 km from Srinagar, reached via Kulgam town on a mix of national highway and district road. The drive takes roughly 2 to 2.5 hours by car under normal conditions, making it a comfortable day trip from Srinagar.",
                      },
                      {
                        q: "Is Aharbal a day trip from Srinagar?",
                        a: "Yes, Aharbal is almost always visited as a day trip from Srinagar. Overnight accommodation right at the falls is very limited, so most travellers drive out in the morning, spend two to three hours at the falls and surrounding viewpoints, and return to Srinagar the same evening.",
                      },
                      {
                        q: "What is the best time to visit Aharbal waterfall?",
                        a: "Late spring through early autumn, roughly April to October, is the best window, with May and June offering the strongest flow from snowmelt and post-monsoon months keeping the pine forest around the falls lush and green. Winter visits are possible and dramatic, with parts of the falls partially icing over, but access can be affected by snow on the approach road.",
                      },
                      {
                        q: "Can you trek to Kounsarnag Lake from Aharbal?",
                        a: "Yes, Aharbal is the traditional starting point for the trek to Kounsarnag, a high-altitude glacial lake at around 3,500 metres. This is a serious multi-day trek over rugged terrain, suited to experienced trekkers with proper gear and, ideally, a local guide — it is not something casual day-trip visitors to the falls attempt.",
                      },
                      {
                        q: "Is Aharbal safe for families and kids?",
                        a: "Aharbal is family-friendly at the designated viewing points and walking paths, which are set back from the falls and fenced in places. The rocks closer to the water are wet and slippery, so families with young children should stick to marked paths and avoid climbing down toward the spray for photos.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {item.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Aharbal",
                  "Jammu and Kashmir",
                  "Kashmir Waterfalls",
                  "Kulgam",
                  "Veshaw River",
                  "Kounsarnag",
                  "Day Trips from Srinagar",
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
                destination="Aharbal"
              />

              <RelatedPostsGrid currentSlug="aharbal-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="aharbal-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
