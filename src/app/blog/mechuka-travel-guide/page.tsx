// src/app/blog/mechuka-travel-guide/page.tsx
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
  title: "Mechuka Travel Guide: A Hidden Valley on the Tibet Border",
  description:
    "The complete Mechuka travel guide. Samten Yongcha Monastery, the old suspension bridge, Memba and Ramo villages, permits (ILP/PAP), where to stay, what to eat, and a full itinerary through one of Arunachal Pradesh's most remote valleys.",
  keywords:
    "Mechuka travel guide, Menchuka Arunachal Pradesh, Samten Yongcha Monastery, Shi-Yomi district, Mechuka permit, Inner Line Permit Arunachal, how to reach Mechuka, best time to visit Mechuka, Mechuka valley, Memba tribe Arunachal, Aalo to Mechuka",
  openGraph: {
    title: "Mechuka Travel Guide: A Hidden Valley on the Tibet Border",
    description:
      "A remote, river-cut valley near the Tibet border that stayed almost entirely off the map until recently, with a wooden monastery and a suspension bridge older than most Indian cities' bridges — the complete guide to Mechuka.",
    url: "https://club.kudozz.in/blog/mechuka-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Remote Himalayan valley representative of Mechuka, Arunachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mechuka Travel Guide: A Hidden Valley on the Tibet Border",
    description:
      "A wooden monastery, a century-old suspension bridge, and one of the most remote valleys in Arunachal Pradesh — the complete guide to Mechuka.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mechuka-travel-guide",
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
          headline: "Mechuka Travel Guide: A Hidden Valley on the Tibet Border",
          description: "The complete Mechuka travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/mechuka-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Mechuka",
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
              { "@type": "ListItem", position: 3, name: "Mechuka Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How many days do I need for Mechuka?",
    a: "Two to three days in the valley itself, but budget at least 4-5 days total given how long the road journey in and out takes from the nearest transport hubs.",
  },
  {
    q: "Do I need a permit to visit Mechuka?",
    a: "Yes — an Inner Line Permit is required for all Indian citizens entering Arunachal Pradesh, and because Mechuka sits close to the Tibet (China) border, additional Protected Area Permit requirements or restricted-zone clearances may apply. Verify the current process directly with the Arunachal Pradesh administration or a registered local operator before finalising travel, as border-area rules can change.",
  },
  {
    q: "How do I reach Mechuka?",
    a: "The standard route is by road via Aalo (Along) in West Siang district — there is no reliable direct rail or air option, and a small local airstrip has seen only occasional, inconsistent flight operations. Most visitors fly into Guwahati or Dibrugarh in Assam and then make a multi-day road journey.",
  },
  {
    q: "Is Mechuka safe for independent travellers?",
    a: "Mechuka is remote rather than unsafe, but it demands real preparation — patchy network coverage, limited medical facilities, and roads that can be affected by weather. Most travellers go with a local guide or driver who knows current conditions and permit requirements.",
  },
  {
    q: "What is the best time to visit Mechuka?",
    a: "March to June and September to November, when roads are most reliably passable and mountain views are clearest. Winter can bring heavy snow that closes higher sections of the route, and monsoon brings landslide risk.",
  },
  {
    q: "What is the budget for a trip to Mechuka?",
    a: "Expect roughly ₹2,000-2,500 a day on a budget trip and ₹4,500-6,000 mid-range, with a hired vehicle for the long approach as the single biggest cost. Accommodation is basic and homestay-dominated regardless of budget tier.",
  },
  {
    q: "What makes Mechuka worth the journey?",
    a: "A genuinely untouched Himalayan valley — green fields ringed by snow peaks, a wooden monastery reflecting the local Memba community's Tibetan Buddhist traditions, and a level of remoteness that has kept it free of the crowds found at better-known Arunachal destinations.",
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
  { id: "introduction", title: "Why Mechuka?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "permits", title: "Permits & Access", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mechuka", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gear ────────────────────────────────────────────────────────────────────
const MECHUKA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a remote, off-grid border valley",
    emoji: "🏔️",
    items: [
      {
        name: "Warm Insulated Jacket",
        description:
          "Mechuka sits at altitude in a valley that stays cold outside peak summer — evenings and early mornings drop sharply regardless of season.",
        price: "₹2,999",
        rating: 4.5,
        reviews: "6.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("insulated+winter+jacket+trekking"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "Homestays rarely have reliable heating — a proper layer is the difference between a comfortable night and a miserable one.",
      },
      {
        name: "Sturdy Trekking Shoes",
        description:
          "Unpaved village paths and the approach to the old suspension bridge cross uneven, sometimes muddy terrain.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "5.4k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+mountain"),
        tag: "Trek essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Roads and paths in Mechuka aren't paved to city standards — ankle support and grip genuinely matter here.",
      },
      {
        name: "Power Bank (20,000 mAh)",
        description:
          "Electricity supply is inconsistent in this remote valley, and network coverage is patchy to nonexistent in stretches.",
        price: "₹1,799",
        rating: 4.5,
        reviews: "8.2k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+20000mah+travel"),
        tag: "Off-grid essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "A larger power bank matters more here than almost anywhere else on this site's list — charging opportunities are genuinely scarce.",
      },
      {
        name: "Printed Permit Copies & ID",
        description:
          "Checkpoints along the route to Mechuka verify Inner Line Permits and identification physically — don't rely on a phone screen.",
        price: "₹—",
        rating: 4.6,
        reviews: "—",
        image: "📄",
        affiliateUrl: amazonSearchUrl("document+organizer+travel+pouch"),
        tag: "Border-zone essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "This is a border-proximate restricted area — permit paperwork isn't optional and connectivity to show a digital copy isn't guaranteed.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "The nearest well-equipped hospital is far from Mechuka — a compact kit for cuts, altitude headaches, and stomach upsets is sensible.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Remote-travel essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Self-sufficiency matters far more here than on a typical hill-station trip.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MechukaGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="Remote Himalayan valley representative of Mechuka, Arunachal Pradesh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Mechuka", href: null },
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
              {["Mechuka", "Arunachal Pradesh", "Off-beat", "Shi-Yomi"].map((tag) => (
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
              Mechuka Travel Guide: A Hidden Valley on the Tibet Border
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A river-cut valley near the Tibet border that stayed almost
              entirely off the map until recently — a wooden monastery, an old
              suspension bridge, and Himalayan scenery with barely a tourist in
              sight.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mechuka, Arunachal Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
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
                  <h2>Why Mechuka?</h2>
                  <p>
                    <strong>Mechuka</strong> (also spelled Menchuka) sits in
                    Shi-Yomi district, a genuinely remote valley carved by the
                    Yargyap Chu near the Tibet (China) border. For decades it
                    was effectively closed to outside travellers as a
                    restricted frontier zone — it has only relatively recently
                    opened up to independent tourism, and it shows: this is one
                    of the very few places left in Arunachal Pradesh where you
                    can genuinely say you're off any established circuit.
                  </p>
                  <p>
                    The valley floor is a patchwork of green fields ringed by
                    snow-capped peaks, home to the Memba and Ramo communities,
                    whose Tibetan Buddhist traditions are reflected in
                    Mechuka's wooden monastery and quiet, unhurried village
                    life. A genuinely old suspension bridge across the river
                    has become something of a local landmark — exact age
                    claims here are best treated as local lore rather than
                    verified fact, but the bridge itself is a real and
                    photogenic piece of the valley's character.
                  </p>
                  <p>
                    This is not a destination for a spontaneous long weekend —
                    the journey in is genuinely long, permit requirements are
                    real given the border proximity, and infrastructure is
                    thin. But for travellers willing to put in the planning,
                    Mechuka delivers a version of the Eastern Himalayas that
                    very few outsiders have seen.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Mechuka at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Arunachal Pradesh" },
                        { icon: "🛕", label: "Key Site", value: "Samten Yongcha Monastery" },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sep–Nov" },
                        { icon: "📄", label: "Permit", value: "ILP + border-zone clearance" },
                        { icon: "🏘️", label: "Communities", value: "Memba, Ramo" },
                        { icon: "💰", label: "Budget/Day", value: "₹2,000 – ₹6,000" },
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
                  <h2>Best Time to Visit Mechuka</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌱",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Greenest, clearest",
                        text: "Fields are lush and roads are most reliably passable before the heaviest monsoon rains arrive.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — real landslide risk",
                        text: "Heavy rain can make the approach roads genuinely difficult and unpredictable — not the best window unless you have real flexibility.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Clear skies, dry roads, and crisp mountain air make this the most reliable window for the journey and the views.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold, often closed",
                        text: "Snow can close higher sections of the approach entirely — verify current road status before planning a winter trip.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> September to November — the most
                    dependable combination of clear weather and passable roads
                    for a valley this remote.
                  </blockquote>
                </section>

                <section id="permits">
                  <h2>Permits & Access</h2>
                  <p>
                    Because Mechuka sits close to the Tibet border, this is a
                    genuinely sensitive frontier zone — permit and access
                    requirements are real and should be verified carefully.
                  </p>
                  <ul>
                    <li>
                      <strong>Inner Line Permit:</strong> Required for all
                      Indian citizens entering Arunachal Pradesh, applied for
                      online through the state's e-ILP portal or in person at
                      designated checkpoints.
                    </li>
                    <li>
                      <strong>Additional border-zone clearance:</strong> Given
                      Mechuka's proximity to the international border,
                      additional Protected Area Permit requirements or
                      restricted-zone documentation may apply — verify the
                      current process directly with the state administration
                      or a registered local operator before finalising travel.
                    </li>
                    <li>
                      <strong>Foreign nationals:</strong> A separate Protected
                      Area Permit is required, and access to areas this close
                      to the border may be more tightly regulated or
                      unavailable — check current rules well in advance.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book through a registered local
                    tour operator familiar with Shi-Yomi district's current
                    permit process — border-zone rules here change more often
                    than in most of Arunachal Pradesh.
                  </div>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Mechuka</h2>
                  <p>
                    There is no reliable direct rail or air link to Mechuka —
                    this is a genuinely long overland journey.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> A small local airstrip has seen
                      occasional, inconsistent flight operations — verify
                      current status rather than planning around it. Guwahati
                      or Dibrugarh in Assam are the practical air gateways for
                      the wider region.
                    </li>
                    <li>
                      <strong>By Road:</strong> The standard route runs via
                      Aalo (Along) in West Siang district — this is the only
                      dependable way in and typically requires an overnight
                      stop en route given the distance and road conditions.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build in real buffer days on
                    both ends of the trip — road conditions on the Aalo–Mechuka
                    stretch can change quickly with weather.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Things to Do in Mechuka</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Mountain valley scenery around Mechuka"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Samten Yongcha Monastery:</strong> A wooden
                      Buddhist monastery reflecting the Memba community's
                      Tibetan religious traditions — a quiet, genuinely
                      atmospheric site.
                    </li>
                    <li>
                      <strong>The old suspension bridge:</strong> A locally
                      celebrated landmark across the Yargyap Chu river,
                      genuinely worn with age.
                    </li>
                    <li>
                      <strong>Village walks:</strong> Memba and Ramo villages
                      spread across the valley floor, best explored slowly and
                      respectfully — ask before photographing people.
                    </li>
                    <li>
                      <strong>Valley viewpoints:</strong> Short walks above the
                      valley floor offer sweeping views of the surrounding
                      snow-capped peaks and the patchwork of fields below.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Mechuka</h2>
                  <p>
                    Accommodation here is genuinely basic — homestays and small
                    guesthouses are essentially the only options.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Budget Homestays",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: ["Village homestays", "Basic local guesthouses"],
                      },
                      {
                        tier: "Better-Appointed Stays",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: ["A small number of nicer guesthouses", "Options are genuinely limited — book ahead"],
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
                  <blockquote>
                    A village homestay is genuinely the only realistic way to
                    stay in Mechuka comfortably — it's also the best way to
                    experience the valley.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Mechuka</h2>
                  <ul>
                    <li>
                      <strong>Home-cooked meals:</strong> Nearly all dining
                      here happens at your homestay — simple rice, vegetables,
                      and meat dishes prepared with local ingredients.
                    </li>
                    <li>
                      <strong>Tibetan-influenced dishes:</strong> Momos and
                      thukpa-style noodle soups reflecting the Memba
                      community's Tibetan Buddhist cultural ties.
                    </li>
                    <li>
                      <strong>Local butter tea:</strong> Widely served,
                      reflecting the same Tibetan cultural influence found in
                      the monastery and villages.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>3-Day Mechuka Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival",
                        color: "bg-amber-700",
                        activities: [
                          "Long drive in via Aalo, check into a village homestay",
                          "Evening: settle in, short walk around the village",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Monastery & Bridge",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Samten Yongcha Monastery",
                          "Afternoon: walk to the old suspension bridge",
                          "Evening: village walk and homestay dinner",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Valley Views & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: valley viewpoint walk",
                          "Late morning: farewell to your host family",
                          "Begin the return journey toward Aalo",
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹700", "₹2,000"],
                          ["Food/day", "₹400", "₹800"],
                          ["Vehicle hire per day", "₹1,500", "₹3,000"],
                          ["Daily total", "₹2,600", "₹5,800"],
                          ["3-Day trip total (in-valley)", "₹7,800", "₹17,400"],
                        ].map(([exp, b, m], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes the multi-day journey from Guwahati/Dibrugarh to Aalo and the road transfer to Mechuka itself.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Mechuka</h2>
                  <ul>
                    <li>
                      <strong>Verify current permit requirements thoroughly:</strong> This is a genuine border-sensitive zone — don't assume a standard ILP alone is sufficient.
                    </li>
                    <li>
                      <strong>Build serious buffer time into your itinerary:</strong> Road conditions on this route can change quickly.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs and card acceptance are essentially nonexistent this far into the valley.
                    </li>
                    <li>
                      <strong>Pack for real cold:</strong> Even outside deep winter, valley evenings are cold.
                    </li>
                    <li>
                      <strong>Engage respectfully with local communities:</strong> Ask before photographing people, and expect a genuinely different pace of life than lowland Arunachal.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Verify current permit/access requirements well ahead",
                          "Travel with a registered local operator or guide",
                          "Carry sufficient cash for the whole trip",
                          "Build in buffer days for road conditions",
                          "Ask before photographing local villagers",
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
                          "Travel without confirming current border-zone permit rules",
                          "Expect ATMs or card payments once past Aalo",
                          "Underestimate the length or difficulty of the journey",
                          "Rush the trip into fewer than 3-4 days total",
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
                {["Mechuka", "Arunachal Pradesh", "Off-beat", "Shi-Yomi", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MECHUKA_GEAR} destination="Mechuka" />

              <RelatedPostsGrid currentSlug="mechuka-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mechuka-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
