// src/app/blog/anini-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Anini Travel Guide: India's Least Explored Valley",
  description:
    "The complete Anini travel guide. Dibang Valley, the Idu Mishmi community, road access via Roing, permits (ILP), where to stay, what to eat, and honest, up-to-date planning advice for one of India's most remote districts.",
  keywords:
    "Anini travel guide, Dibang Valley Arunachal Pradesh, Idu Mishmi tribe, Anini road condition, Inner Line Permit Arunachal, how to reach Anini, best time to visit Anini, Roing to Anini, Dibang Wildlife Sanctuary",
  openGraph: {
    title: "Anini Travel Guide: India's Least Explored Valley",
    description:
      "The headquarters of Dibang Valley, one of India's least populated districts, reached by a road that only recently made it possible at all — the complete guide to Anini.",
    url: "https://club.kudozz.in/blog/anini-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Remote forested valley representative of Anini and Dibang Valley, Arunachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anini Travel Guide: India's Least Explored Valley",
    description:
      "One of India's least populated, least visited districts, deep in Arunachal Pradesh's Dibang Valley — the complete guide to Anini.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/anini-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Anini Travel Guide: India's Least Explored Valley",
          description: "The complete Anini travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/anini-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Anini",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Arunachal Pradesh",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Anini Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is Anini worth the effort to reach?",
    a: "Only if you genuinely want one of the most remote, least-touristed corners of mainland India — Anini has minimal infrastructure and no headline attraction in the conventional sense. It rewards travellers seeking real off-the-beaten-path immersion, not sightseeing convenience.",
  },
  {
    q: "How do I reach Anini?",
    a: "By road via Roing, the district headquarters of Lower Dibang Valley. There is no rail or air access to Anini itself — the nearest airport is Dibrugarh in Assam, a long multi-day journey from there.",
  },
  {
    q: "Is the road to Anini reliable?",
    a: "It has historically been difficult and prone to landslide-related closures, though it has become more consistently passable in recent years. Verify current road conditions before setting out, especially around monsoon season.",
  },
  {
    q: "Do I need a permit to visit Anini?",
    a: "Yes — an Inner Line Permit is required for all Indian citizens entering Arunachal Pradesh, applied for online in advance. Given the district's remoteness, plan this well ahead of travel.",
  },
  {
    q: "What is the Idu Mishmi community known for?",
    a: "The Idu Mishmi are the primary indigenous community of Dibang Valley, with distinct customs and textiles, and a traditional reverence for tigers within their belief system. Engaging with the community respectfully is a genuine part of what makes a visit to Anini worthwhile.",
  },
  {
    q: "What is the best time to visit Anini?",
    a: "March to June and September to November, avoiding peak monsoon (roughly June to September) when landslide risk on the approach road is highest.",
  },
  {
    q: "What is the budget for a trip to Anini?",
    a: "Expect roughly ₹2,000-2,500 a day on a basic trip, with vehicle hire for the long approach from Roing as the dominant cost. Accommodation is very limited and basic.",
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
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Anini?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "permits", title: "Permits & Road Access", level: 2 },
  { id: "how-to-reach", title: "How to Reach Anini", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gear ────────────────────────────────────────────────────────────────────
const ANINI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for one of India's most remote, self-sufficient trips",
    emoji: "🌲",
    items: [
      {
        name: "Warm Layers",
        description:
          "Dibang Valley's elevation and forest cover keep temperatures cool year-round, with genuinely cold nights.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "6.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("warm+trekking+jacket+layers"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "There is minimal heating infrastructure this deep into the valley — your own layers are the reliable option.",
      },
      {
        name: "Sturdy Footwear",
        description:
          "Roads and paths around Anini are unpaved and uneven in stretches, especially after rain.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "5.2k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+mountain"),
        tag: "Trek essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "This is genuinely rugged terrain, not a paved-road destination.",
      },
      {
        name: "Backup Food & Water Supplies",
        description:
          "Facilities along the Roing-Anini road are sparse — carrying your own supplies is a sensible precaution, not overkill.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("dry+food+travel+snacks"),
        tag: "Remote-route essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Given the road's unpredictability, a self-sufficient buffer is genuinely important, not optional.",
      },
      {
        name: "Well-Stocked First Aid Kit",
        description:
          "The nearest well-equipped hospital is many hours away — a proper kit for cuts, stomach upsets, and minor injuries matters here more than almost anywhere else on this site.",
        price: "₹799",
        rating: 4.5,
        reviews: "4.0k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("comprehensive+first+aid+kit+travel"),
        tag: "Essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "This is one of the most genuinely remote, self-reliant trips on this entire site.",
      },
      {
        name: "Power Bank (20,000 mAh)",
        description:
          "Electricity and network coverage are both inconsistent this far into Dibang Valley.",
        price: "₹1,799",
        rating: 4.5,
        reviews: "8.2k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+20000mah+travel"),
        tag: "Off-grid essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Anini's isolation means charging opportunities are genuinely scarce along the way.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AniniGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Remote forested valley representative of Anini and Dibang Valley, Arunachal Pradesh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Anini", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Anini", "Arunachal Pradesh", "Off-beat", "Dibang Valley"].map((tag) => (
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
              Anini Travel Guide: India's Least Explored Valley
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              The headquarters of Dibang Valley, one of India's least populated
              districts, reached by a road that only recently made it possible
              at all.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Anini, Arunachal Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
                },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Anini?</h2>
                  <p>
                    <strong>Anini</strong> is the headquarters of Dibang Valley
                    district — genuinely one of the least populated districts
                    in India, with a small population spread across a vast,
                    forested, mountainous landscape. There's no single
                    headline monument or landmark drawing travellers here; the
                    draw is the district itself, one of the most untouched,
                    least-visited corners of mainland India.
                  </p>
                  <p>
                    Road access to Anini has historically been difficult, with
                    a route prone to landslide-related closures — it has only
                    in recent years become more consistently passable, and
                    it's worth being honest about that rather than promising
                    smooth, guaranteed access. The reward for the effort is
                    genuine cultural immersion with the <strong>Idu Mishmi</strong>{" "}
                    community, whose customs, textiles, and traditional
                    reverence for tigers reflect a way of life little touched
                    by outside tourism.
                  </p>
                  <p>
                    This is a destination for serious off-the-beaten-path
                    travellers with real trip-planning flexibility, not a
                    checklist stop.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🌲</span> Anini at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh" },
                        { icon: "🏘️", label: "Community", value: "Idu Mishmi" },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sep–Nov" },
                        { icon: "📄", label: "Permit", value: "Inner Line Permit (ILP)" },
                        { icon: "🚗", label: "Access", value: "Road via Roing" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹2,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Anini</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌱",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Good road conditions",
                        text: "Before peak monsoon, roads are typically at their most reliable and forests are lush.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — highest landslide risk",
                        text: "This is the riskiest window for road access — avoid unless you have real flexibility and local guidance.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Post-monsoon clarity and generally the most dependable road conditions of the year.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold, variable access",
                        text: "Cold weather with possible snow at higher elevations along the route — verify current conditions.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our advice:</strong> October to November offers the
                    most dependable road conditions — but verify current status
                    directly before setting out regardless of season.
                  </blockquote>
                </section>

                <section id="permits">
                  <h2>Permits & Road Access</h2>
                  <ul>
                    <li>
                      <strong>Inner Line Permit:</strong> Required for all
                      Indian citizens entering Arunachal Pradesh — apply online
                      well ahead of travel given Anini's remoteness.
                    </li>
                    <li>
                      <strong>Road conditions:</strong> The Roing-Anini road
                      has historically been prone to landslide closures and has
                      only become more consistently passable in recent years —
                      verify current status before committing to travel dates.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Confirm current road status
                    with a local operator in Roing before departing — this is
                    more reliable than any general online information given
                    how quickly conditions can change.
                  </div>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Anini</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Dibrugarh (Assam) is the nearest
                      airport, requiring a long multi-day onward journey.
                    </li>
                    <li>
                      <strong>By Road:</strong> Via Roing (cross-reference that
                      guide), the district headquarters of Lower Dibang Valley
                      and the standard staging point before the final,
                      more demanding stretch to Anini.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Break the journey with a night
                    in Roing rather than attempting the full route in one push
                    — it's both safer and gives you a useful checkpoint for
                    current road information.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Things to Do in Anini</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forest and valley scenery around Anini and Dibang Valley"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Idu Mishmi villages:</strong> Genuine, unhurried
                      engagement with the district's primary indigenous
                      community — approach respectfully and ask before
                      photographing people.
                    </li>
                    <li>
                      <strong>Dibang Wildlife Sanctuary:</strong> A high-
                      biodiversity forest landscape nearby, though formal
                      tourist infrastructure remains minimal — best explored
                      with local guidance.
                    </li>
                    <li>
                      <strong>Forest and valley walks:</strong> The genuine
                      appeal here is the untouched landscape itself rather than
                      any single marked attraction.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Anini</h2>
                  <p>
                    Accommodation is very limited — basic guesthouses are
                    essentially the only option, and travellers should book
                    ahead and set modest expectations.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Basic Guesthouses",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: ["Government/circuit-house style stays", "A small number of local guesthouses"],
                      },
                      {
                        tier: "Alternative Base",
                        icon: "🏨",
                        range: "₹1,000–₹2,500/night",
                        picks: ["Staying in Roing and day-tripping where feasible"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Anini</h2>
                  <ul>
                    <li>
                      <strong>Home-cooked local meals:</strong> Simple rice,
                      vegetable, and meat dishes are the norm — dedicated
                      restaurants are essentially nonexistent this deep into
                      the valley.
                    </li>
                    <li>
                      <strong>Idu Mishmi traditional food:</strong> Reflecting
                      the community's forest-based lifestyle, worth trying if
                      offered through a homestay.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Anini Itinerary</h2>
                  <p>
                    Given the travel time involved, build real flexibility into
                    this plan around road conditions.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Roing to Anini",
                        color: "bg-amber-700",
                        activities: [
                          "Long drive from Roing, checking road conditions en route",
                          "Arrive Anini, check into a guesthouse",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Village Life & Forest",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: visit Idu Mishmi villages respectfully",
                          "Afternoon: forest/valley walk with local guidance",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Return Journey",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: farewell to hosts",
                          "Begin the return drive toward Roing",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Basic"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹800"],
                          ["Food/day", "₹400"],
                          ["Vehicle hire (Roing-Anini return)", "₹800/day equivalent"],
                          ["Daily total", "₹2,000"],
                          ["3-Day trip total (excl. travel to Roing)", "₹6,000"],
                        ].map(([exp, b], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes the multi-day journey from Dibrugarh to Roing.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Anini</h2>
                  <ul>
                    <li>
                      <strong>Verify road conditions before departing Roing:</strong> This is the single most important planning step for this trip.
                    </li>
                    <li>
                      <strong>Build in real time flexibility:</strong> Rigid itineraries don't work well on this route.
                    </li>
                    <li>
                      <strong>Carry cash and backup supplies:</strong> Facilities along the way are minimal.
                    </li>
                    <li>
                      <strong>Engage respectfully with the Idu Mishmi community:</strong> This is genuine, lived tribal culture, not a tourist performance.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Verify current road conditions before setting out",
                          "Build real flexibility into your itinerary",
                          "Carry cash and backup food/water supplies",
                          "Apply for your ILP well in advance",
                          "Engage respectfully with the Idu Mishmi community",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Assume smooth road access year-round",
                          "Travel without confirming current conditions",
                          "Expect ATMs, restaurants, or reliable network coverage",
                          "Attempt this trip without buffer days",
                          "Photograph villagers without asking first",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                          {f.q}
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Anini", "Arunachal Pradesh", "Off-beat", "Dibang Valley", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={ANINI_GEAR} destination="Anini" />

              <RelatedPostsGrid currentSlug="anini-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="anini-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
