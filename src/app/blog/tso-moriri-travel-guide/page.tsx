// src/app/blog/tso-moriri-travel-guide/page.tsx
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
  title: "Tso Moriri Travel Guide: Ladakh's Most Pristine High-Altitude Lake",
  description:
    "The complete guide to Tso Moriri — Ladakh's remote Rupshu plateau lake at 4,522m. How to reach it, permits, Korzok village, Tso Kar, wildlife, homestays, a 2-day itinerary, and essential tips.",
  keywords:
    "Tso Moriri, Tso Moriri Ladakh, Rupshu plateau, Korzok village, Tso Kar, Ladakh lakes, Changthang wildlife sanctuary, Ladakh inner line permit, Ladakh travel guide, high altitude lake India",
  openGraph: {
    title: "Tso Moriri Travel Guide: Ladakh's Most Pristine High-Altitude Lake",
    description:
      "Remote, wild, and entirely within India — the complete guide to Tso Moriri, Ladakh's most pristine high-altitude lake on the Rupshu plateau.",
    url: "https://club.kudozz.in/blog/tso-moriri-travel-guide",
    type: "article",
    tags: [
      "Tso Moriri",
      "Ladakh",
      "Rupshu Plateau",
      "Korzok",
      "High Altitude Lake",
    ],
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Tso Moriri high-altitude lake on the Rupshu plateau in Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tso Moriri Travel Guide: Ladakh's Most Pristine High-Altitude Lake",
    description:
      "Remote, wild, and entirely within India — the complete guide to Tso Moriri, Ladakh's most pristine high-altitude lake.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tso-moriri-travel-guide",
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
          headline:
            "Tso Moriri Travel Guide: Ladakh's Most Pristine High-Altitude Lake",
          description:
            "The complete guide to Tso Moriri — Ladakh's remote Rupshu plateau lake at 4,522m. How to reach it, permits, Korzok village, Tso Kar, wildlife, homestays, and a 2-day itinerary.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-08-20",
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
            "@id": "https://club.kudozz.in/blog/tso-moriri-travel-guide",
          },
          keywords:
            "Tso Moriri, Rupshu plateau, Korzok, Tso Kar, Ladakh, Changthang, high altitude lake",
          about: {
            "@type": "Place",
            name: "Tso Moriri",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Ladakh",
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
                name: "Ladakh",
                item: "https://club.kudozz.in/blog?category=ladakh",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Tso Moriri Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Tso Moriri?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tso Moriri", level: 2 },
  { id: "chumathang-route", title: "→ Via Chumathang & Rupshu Plateau", level: 3 },
  { id: "tso-kar-route", title: "→ Via the Tso Kar Loop", level: 3 },
  { id: "permits", title: "Permits & Paperwork", level: 2 },
  { id: "korzok", title: "Korzok Village & Monastery", level: 2 },
  { id: "wildlife", title: "Wildlife of the Rupshu Plateau", level: 2 },
  { id: "tso-kar", title: "Tso Kar — The Other Lake", level: 2 },
  { id: "homestays", title: "Homestays in Korzok", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TsoMoririPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Tso Moriri high-altitude lake on the Rupshu plateau in Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-800/20" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-4 sm:px-8 lg:px-12"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-xs text-white/70">
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Tso Moriri", href: null },
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
                    <span className="text-white/50">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pb-14 pt-32">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Tso Moriri", "Ladakh", "Rupshu Plateau", "Off-beat"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tso Moriri Travel Guide: Ladakh's Most Pristine High-Altitude
              Lake
            </h1>
            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              "A sapphire lake at 4,522 metres, ringed by bare Rupshu peaks and
              visited by more kiang than tourists — this is Ladakh before the
              crowds found it."
            </p>

            {/* Meta Row */}
            <div
              className="flex flex-wrap items-center gap-5 text-sm text-white/70"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                14 min read
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Rupshu Plateau, Ladakh
              </span>
            </div>
          </div>
        </section>

        {/* ── Three-Column Layout ───────────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-8 lg:gap-10">
            {/* LEFT — TOC */}
            <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* CENTER — Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-3xl">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Visit Tso Moriri?</h2>
                  <p>
                    Ask any Ladakh regular which lake actually stays with
                    them, and the answer is often not Pangong. It's{" "}
                    <strong>Tso Moriri</strong> — a vast sheet of still,
                    sapphire-blue water sitting at 4,522 metres in the
                    remote Rupshu plateau, the least-visited corner of a
                    region that is already among India's most remote. Unlike
                    Pangong Tso, which stretches across the border into
                    Tibet, Tso Moriri lies entirely within Indian territory —
                    no straining to see "the good part" from a crowded shore,
                    just 19 kilometres of lake framed by bare, ochre-brown
                    mountains and total silence.
                  </p>
                  <p>
                    Tso Moriri is a designated{" "}
                    <strong>Ramsar wetland of international importance</strong>{" "}
                    — one of the highest-altitude wetlands on the Ramsar list
                    anywhere in the world — and forms the core of the
                    Changthang Wildlife Sanctuary. That protected status
                    means development around the lake has stayed minimal: a
                    single village, Korzok, sits on its northwestern shore,
                    and beyond it there is nothing but plateau, water, and
                    sky. For travellers who found Pangong beautiful but
                    overrun, Tso Moriri is the corrective — the same
                    high-altitude drama, a fraction of the footfall.
                  </p>
                  <p>
                    The journey there is part of the reward. The road from
                    Leh climbs through Chumathang's steaming hot springs and
                    onto the open Rupshu plateau, a landscape so stark and
                    huge it feels closer to the Tibetan Changtang than
                    anywhere else in India — herds of kiang (wild ass)
                    galloping across the plains, nomadic Changpa herders
                    grazing pashmina goats, and not much else for hours at a
                    stretch.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Tso Moriri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Region", value: "Rupshu Plateau, Ladakh" },
                        { icon: "🏔️", label: "Altitude", value: "4,522 m (14,836 ft)" },
                        { icon: "📏", label: "Length", value: "~19 km (endorheic lake)" },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Sep" },
                        { icon: "🛣️", label: "Distance from Leh", value: "~220 km / ~7 hrs" },
                        { icon: "🛂", label: "Permit", value: "ILP (and PAP for foreigners)" },
                        { icon: "🏘️", label: "Village", value: "Korzok" },
                        { icon: "🦆", label: "Status", value: "Ramsar Wetland Site" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹5,000" },
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
                  <h2>Best Time to Visit Tso Moriri</h2>
                  <p>
                    Tso Moriri is only realistically accessible for a short
                    window each year. The road from Leh crosses no major
                    snowbound passes, but Korzok itself sits at nearly 4,600
                    metres, and winter temperatures there are brutal even by
                    Ladakhi standards.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – early June",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Early season, thin crowds",
                        text: "The lake is accessible but nights are still sharply cold (-5°C to 0°C). Migratory birds begin arriving. Few other travellers around — a good window if you're prepared for the cold.",
                      },
                      {
                        season: "June – August",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — our pick",
                        text: "Daytime temperatures are pleasant (10–20°C), the plateau is at its greenest, bar-headed geese and black-necked cranes are nesting, and Korzok's homestays are fully open. Nights still drop near freezing.",
                      },
                      {
                        season: "September",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Golden light, fewer people",
                        text: "Crowds thin further, the plateau grasses turn gold, and the light is extraordinary for photography. Some homestays begin winding down operations toward month-end.",
                      },
                      {
                        season: "October – April",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Effectively closed",
                        text: "Korzok's homestays largely shut, temperatures fall to -25°C or lower, and the lake partially freezes. Only attempted by hardened expedition travellers with full winter logistics.",
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
                    <strong>Our pick:</strong> Mid-to-late August. Migratory
                    bird activity is still strong, the plateau is lush by
                    Rupshu standards, and daytime temperatures at the lake
                    are as comfortable as they get. Avoid weekends immediately
                    following Leh's peak-season crowds funnel south.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tso Moriri</h2>
                  <p>
                    There is no shortcut to Tso Moriri — every route is a
                    full day's drive from Leh, and the lake sees a fraction
                    of the traffic that flows toward Pangong or Nubra. Two
                    approaches are commonly used, and combining them into a
                    loop is the single best way to experience the Rupshu
                    plateau.
                  </p>

                  <section id="chumathang-route">
                    <h3>Via Chumathang & the Rupshu Plateau</h3>
                    <p>
                      The standard route out of Leh runs south along the
                      Indus Valley through <strong>Upshi</strong> and{" "}
                      <strong>Chumathang</strong> — a small settlement famous
                      for its natural hot springs, where steaming water
                      pours straight out of the riverbank and locals bathe
                      year-round. Beyond Chumathang, the road climbs onto the
                      open Rupshu plateau and the landscape changes entirely:
                      trees disappear, the valley widens into a vast bowl of
                      brown and gold, and the first glimpses of Tso Moriri's
                      water appear like a mirage after hours of dust.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> ~220 km from Leh
                      </li>
                      <li>
                        <strong>Duration:</strong> 6–7 hours one-way in a
                        private vehicle
                      </li>
                      <li>
                        <strong>Road condition:</strong> Mostly paved to
                        Chumathang, mixed tarmac and gravel beyond — a
                        high-clearance vehicle is strongly recommended
                      </li>
                      <li>
                        <strong>Highlights en route:</strong> Chumathang hot
                        springs, Mahe Bridge, Sumdo checkpoint, first views
                        of the Rupshu plateau
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Stop at Chumathang for a
                      quick foot soak in the hot springs — after hours of
                      cold, dusty driving it's one of the plateau's genuine
                      small pleasures, and it's free.
                    </div>
                  </section>

                  <section id="tso-kar-route">
                    <h3>Via the Tso Kar Loop</h3>
                    <p>
                      A more adventurous option approaches Tso Moriri from
                      the Manali–Leh highway side, via{" "}
                      <strong>Tso Kar</strong> and the high village of{" "}
                      <strong>Puga</strong> — a valley scattered with
                      steaming sulphur vents and borax deposits. This route
                      is longer and rougher but turns the trip into a proper
                      two-lake circuit, letting you see both of Rupshu's
                      great lakes without backtracking.
                    </p>
                    <ul>
                      <li>
                        <strong>Best used as:</strong> An exit route back
                        toward the Manali–Leh highway rather than an entry
                        route, or as a loop back to Leh via Puga
                      </li>
                      <li>
                        <strong>Road condition:</strong> Unpaved and rough in
                        stretches — a 4x4 or capable SUV is essential, not
                        optional
                      </li>
                      <li>
                        <strong>Highlights en route:</strong> Puga geothermal
                        valley, Tso Kar's kiang herds, Polokongka La (4,918 m)
                      </li>
                    </ul>
                  </section>

                  <p>
                    There is no public bus service to Tso Moriri and no fuel
                    station between Upshi and Korzok — fill your tank
                    completely in Leh or Upshi before setting out, and carry
                    a spare jerry can if you're on a bike. Shared taxis
                    occasionally run from Leh during peak season, but a
                    private vehicle or an organised tour is by far the most
                    reliable way in.
                  </p>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Paperwork for Tso Moriri</h2>
                  <p>
                    Tso Moriri sits inside a protected border-adjacent zone,
                    so permits are non-negotiable and checked at the Sumdo
                    checkpoint before the final approach to the lake.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        permit: "Inner Line Permit (ILP)",
                        color: "border-forest-300 bg-forest-50",
                        required: "Tso Moriri, Tso Kar, and the entire Rupshu sector",
                        who: "All Indian nationals",
                        cost: "₹20–₹400 depending on sector",
                        how: "Online at lahdclehpermit.in or in person at the DC Office, Leh. Online takes 24–48 hours; in-person takes about 30 minutes.",
                        note: "Carry at least 3 physical copies — the Sumdo checkpoint does not reliably accept digital copies.",
                      },
                      {
                        permit: "Protected Area Permit (PAP)",
                        color: "border-amber-300 bg-amber-50",
                        required: "Tso Moriri / Korzok sector",
                        who: "Foreign nationals only",
                        cost: "Approx. ₹2,000 per permit, arranged in groups",
                        how: "Must be obtained through a registered Leh-based tour operator — foreign nationals cannot apply independently.",
                        note: "Foreign travellers must be accompanied by a licensed guide or operator for this sector; solo independent travel is not permitted.",
                      },
                      {
                        permit: "Wildlife Sanctuary Fee",
                        color: "border-sky-300 bg-sky-50",
                        required: "Changthang Wildlife Sanctuary (covers Tso Moriri)",
                        who: "All visitors",
                        cost: "₹20–₹100 per person, plus a small vehicle fee",
                        how: "Paid at the entry checkpoint near Sumdo on arrival.",
                        note: "Carry small denomination notes — remote checkpoints rarely have change.",
                      },
                    ].map((p) => (
                      <div
                        key={p.permit}
                        className={`border ${p.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-3"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {p.permit}
                        </h4>
                        <div
                          className="grid sm:grid-cols-2 gap-3 text-sm"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Required for
                            </span>
                            <span className="text-stone-700">{p.required}</span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Who needs it
                            </span>
                            <span className="text-stone-700">{p.who}</span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Cost
                            </span>
                            <span className="text-stone-700 font-medium">
                              {p.cost}
                            </span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              How to get
                            </span>
                            <span className="text-stone-700">{p.how}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-start gap-2 text-xs text-stone-500">
                          <span className="flex-shrink-0">⚠️</span>
                          {p.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Korzok ────────────────────────────────────────────── */}
                <section id="korzok">
                  <h2>Korzok Village & Monastery</h2>
                  <p>
                    <strong>Korzok</strong> is the only settlement on Tso
                    Moriri's shore — a scatter of stone-and-mud homes, a
                    handful of homestays, and a small monastery, home to
                    perhaps a few hundred permanent residents plus seasonal
                    Changpa nomad families who pitch their rebo (yak-hair
                    tents) nearby during summer grazing months. At 4,595
                    metres, it's one of the highest permanently inhabited
                    villages in India.
                  </p>
                  <p>
                    The <strong>Korzok Monastery</strong>, belonging to the
                    Drukpa Kagyu lineage, sits on a small rise above the
                    village with the entire lake spread out below it. It's
                    modest compared to Ladakh's grand monasteries like
                    Thiksey or Hemis, but its setting is unmatched — few
                    monasteries anywhere command a view like this. The
                    Korzok Gustor festival, held here in summer, features
                    traditional cham mask dances and draws Changpa herders
                    from across the plateau.
                  </p>
                  <p>
                    Life in Korzok moves at the pace of the plateau itself.
                    There's a small general store or two, a scattering of
                    homestays, and after dark, near-total silence broken
                    only by wind and the occasional bark of a village dog.
                    It's not a place with much to "do" in the conventional
                    sense — it's a place to sit by the water at dusk and let
                    the scale of the landscape settle in.
                  </p>
                </section>

                {/* ── Wildlife ──────────────────────────────────────────── */}
                <section id="wildlife">
                  <h2>Wildlife of the Rupshu Plateau</h2>
                  <p>
                    Tso Moriri's Ramsar status exists because of what lives
                    here. The lake and surrounding Changthang Wildlife
                    Sanctuary support some of the Himalayas' rarest
                    high-altitude species, and even a short visit usually
                    delivers a genuine wildlife encounter.
                  </p>

                  <div className="space-y-4 my-4">
                    {[
                      {
                        name: "Black-Necked Crane",
                        detail:
                          "One of the world's rarest cranes and a sacred bird in Tibetan Buddhist tradition. Tso Moriri and Tso Kar are among the very few breeding sites for this species in India. Best spotted in the marshy sections at the lake's northern edge in summer.",
                        badge: "Rare & Protected",
                        badgeColor: "bg-forest-100 text-forest-700",
                      },
                      {
                        name: "Kiang (Tibetan Wild Ass)",
                        detail:
                          "Large herds of kiang roam the open Rupshu plateau, often visible galloping alongside the road between Chumathang and Korzok. The world's largest wild ass, and one of the most striking sights on the drive in.",
                        badge: "Common Sighting",
                        badgeColor: "bg-amber-100 text-amber-700",
                      },
                      {
                        name: "Bar-Headed Goose",
                        detail:
                          "Famous for flying over the Himalayas during migration at altitudes exceeding 6,000 metres, bar-headed geese nest on small islets within Tso Moriri in large numbers through the summer breeding season.",
                        badge: "Summer Nesting",
                        badgeColor: "bg-sky-100 text-sky-700",
                      },
                      {
                        name: "Himalayan Marmot",
                        detail:
                          "Chubby, curious burrowing rodents that pop up along the roadside and around Korzok, especially in the early morning. Harmless and endlessly photogenic.",
                        badge: "Easy to Spot",
                        badgeColor: "bg-rose-100 text-rose-700",
                      },
                      {
                        name: "Tibetan Gazelle & Snow Leopard",
                        detail:
                          "The plateau also supports small populations of Tibetan gazelle, and the surrounding mountains are part of the wider snow leopard range — sightings are rare and mostly a winter phenomenon, but the sanctuary status protects this entire ecosystem.",
                        badge: "Elusive",
                        badgeColor: "bg-purple-100 text-purple-700",
                      },
                    ].map((m) => (
                      <div
                        key={m.name}
                        className="flex gap-4 bg-white border border-stone-200 rounded-xl p-5 hover:border-forest-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4
                              className="font-bold text-stone-900"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {m.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${m.badgeColor}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {m.badge}
                            </span>
                          </div>
                          <p
                            className="text-sm text-stone-600 leading-relaxed m-0"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {m.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Bring binoculars if you can —
                    the best bird viewing spots are across the marshy shallows
                    at the lake's edge, and getting close on foot disturbs
                    nesting birds. A 200mm+ lens or a decent pair of
                    binoculars makes an enormous difference here.
                  </div>
                </section>

                {/* ── Tso Kar ───────────────────────────────────────────── */}
                <section id="tso-kar">
                  <h2>Tso Kar — The Other Lake</h2>
                  <p>
                    About 75 km northwest of Tso Moriri, over the Polokongka
                    La pass (4,918 m), sits <strong>Tso Kar</strong> — a
                    smaller, saline "white lake" named for the crust of salt
                    that rings its shore. Where Tso Moriri is deep blue and
                    freshwater, Tso Kar is shallow, pale, and eerily still,
                    with its own resident population of kiang and
                    black-necked cranes.
                  </p>
                  <p>
                    Tso Kar sees even fewer visitors than Tso Moriri and
                    makes an excellent addition to a Rupshu plateau trip if
                    you're routing back toward the Manali–Leh highway rather
                    than returning the way you came. The small village of{" "}
                    <strong>Thukje</strong> on its shore has a couple of
                    basic homestays, and the Puga geothermal valley en route
                    is worth a stop for its bubbling sulphur vents and
                    borax-crusted ground.
                  </p>
                  <ul>
                    <li>
                      <strong>Distance from Tso Moriri:</strong> ~75 km via
                      Polokongka La (2.5–3 hours)
                    </li>
                    <li>
                      <strong>Best combined with:</strong> An exit toward the
                      Manali–Leh highway, or a loop back to Leh via Puga
                    </li>
                    <li>
                      <strong>Road condition:</strong> Unpaved and rough — a
                      4x4 is essential
                    </li>
                  </ul>
                </section>

                {/* ── Homestays ─────────────────────────────────────────── */}
                <section id="homestays">
                  <h2>Homestays in Korzok</h2>
                  <p>
                    There are no hotels at Tso Moriri — accommodation means
                    either a family-run <strong>homestay</strong> in Korzok
                    village or a seasonal tented camp, both run through the
                    village's homestay cooperative. This is by design: it
                    keeps tourism revenue with local families and limits
                    development pressure on the fragile wetland ecosystem.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Homestays",
                        icon: "🏠",
                        range: "₹1,200–₹2,000/night (usually incl. meals)",
                        picks: [
                          "Korzok Village Homestay Cooperative",
                          "Lake View Homestay",
                          "Changthang Homestay",
                          "Family-run rooms near the monastery",
                        ],
                      },
                      {
                        tier: "Seasonal Tented Camps",
                        icon: "⛺",
                        range: "₹2,500–₹5,000/night (incl. meals)",
                        picks: [
                          "Tso Moriri Eco Camp",
                          "Nomadic Life Camp",
                          "Lake-facing tent camps (summer only)",
                          "Book ahead — very limited beds",
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
                              className="text-xs text-stone-600 m-0"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p>
                    Expect basic but warm hospitality: a simple room, thick
                    quilts, shared or basic attached bathrooms, and home-cooked
                    meals of rice, dal, and vegetables — sometimes
                    supplemented with Tibetan staples like thukpa. Electricity
                    is typically solar and limited to a few hours in the
                    evening. There is no reliable mobile network in Korzok, so
                    treat this as genuinely disconnected time.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Tso Moriri Itinerary</h2>
                  <p>
                    Most visitors combine Tso Moriri with a wider Ladakh
                    loop, but even as a focused side trip from Leh, two full
                    days is the minimum to do it justice — one day each way,
                    with a full day at the lake in between.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Leh → Tso Moriri via Chumathang",
                        color: "bg-forest-600",
                        activities: [
                          "Depart Leh early (by 7 AM) with a full fuel tank",
                          "Stop at Chumathang hot springs for a soak and breakfast",
                          "Cross onto the Rupshu plateau — watch for kiang herds",
                          "Sumdo checkpoint — permit and sanctuary fee check",
                          "Arrive Korzok by afternoon, check into homestay, rest",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tso Moriri Full Day & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Sunrise at the lake shore — the water is stillest at dawn",
                          "Visit Korzok Monastery above the village",
                          "Slow walk along the shore for birdwatching (bring binoculars)",
                          "Late morning: begin return drive to Leh via Chumathang",
                          "Optional: extend to Day 3 and loop out via Tso Kar and Puga",
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

                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your schedule allows, add
                    a third day and exit via Tso Kar and Puga rather than
                    retracing the Chumathang road — it turns a there-and-back
                    trip into a proper Rupshu plateau circuit and roughly
                    doubles the wildlife and scenery for one extra day.
                  </div>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat at Tso Moriri</h2>
                  <p>
                    Don't expect menus at Tso Moriri — food here is
                    whatever the homestay family cooks that day, almost
                    always simple, hearty, and built for altitude. It's some
                    of the most honest food you'll eat in Ladakh, precisely
                    because there's no tourist infrastructure shaping it.
                  </p>
                  <ul>
                    <li>
                      <strong>Homestay thalis:</strong> Rice, dal, a seasonal
                      vegetable curry, and roti — the standard evening meal
                      at almost every Korzok homestay, included in the
                      overnight rate.
                    </li>
                    <li>
                      <strong>Thukpa:</strong> Tibetan noodle soup, often the
                      go-to warming dish on cold Rupshu evenings.
                    </li>
                    <li>
                      <strong>Butter tea (Gur Gur Chai):</strong> Salted
                      yak-butter tea, offered generously in Changpa homes —
                      essential for warmth at 4,500 metres even if the taste
                      takes getting used to.
                    </li>
                    <li>
                      <strong>Tsampa:</strong> Roasted barley flour mixed
                      with butter tea, the traditional high-altitude staple
                      of the Rupshu nomads.
                    </li>
                    <li>
                      <strong>Carry your own snacks:</strong> There are no
                      shops or restaurants beyond Korzok's one or two small
                      general stores. Pack energy bars, dry fruit, glucose
                      biscuits, and electrolyte sachets from Leh before you
                      leave.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Tso Moriri</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
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
                          ["Homestay/night (incl. meals)", "₹1,200", "₹1,800", "₹5,000 (tented camp)"],
                          ["Vehicle (shared/private per day)", "₹1,500", "₹4,000", "₹7,000"],
                          ["Permits (ILP + sanctuary fee)", "₹150", "₹150", "₹150"],
                          ["Snacks & extras", "₹200", "₹400", "₹800"],
                          ["2-day trip total (per person, shared vehicle)", "₹5,500", "₹9,500", "₹22,000"],
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
                    * Assumes travel from Leh as a base. Costs drop
                    significantly per person when splitting a private
                    vehicle across a group of 4–5.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Tso Moriri</h2>
                  <ul>
                    <li>
                      <strong>Acclimatise in Leh first:</strong> Never drive
                      to Tso Moriri as your first stop in Ladakh. Spend at
                      least 2 days acclimatising in Leh (3,524 m) before
                      pushing on to Korzok's 4,595 metres.
                    </li>
                    <li>
                      <strong>Extreme cold, even in summer:</strong> Night
                      temperatures at Korzok can fall near freezing even in
                      July and August. Pack proper thermal layers, a good
                      down jacket, and a warm sleeping bag liner regardless
                      of season.
                    </li>
                    <li>
                      <strong>No fuel between Upshi and Korzok:</strong> Fill
                      your tank completely before leaving Leh or Upshi.
                      There is no petrol pump anywhere on this route.
                    </li>
                    <li>
                      <strong>No mobile network in Korzok:</strong> BSNL has
                      patchy postpaid coverage at best; most networks have
                      none. Inform family or friends of your plans before you
                      lose signal, and treat this as fully disconnected time.
                    </li>
                    <li>
                      <strong>Limited facilities:</strong> There are no ATMs,
                      pharmacies, or proper medical facilities at Tso Moriri.
                      Carry sufficient cash from Leh, a basic medical kit,
                      and any prescription medication you need.
                    </li>
                    <li>
                      <strong>Respect the wetland:</strong> Tso Moriri's
                      Ramsar status protects a genuinely fragile ecosystem.
                      Stay on marked paths near nesting areas, don't
                      approach birds closely, and carry out every piece of
                      plastic you bring in.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-6">
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
                          "Acclimatise in Leh for at least 2 days before departing",
                          "Fill your fuel tank completely before leaving Upshi",
                          "Carry all ILP copies and ID proof for the Sumdo checkpoint",
                          "Pack proper thermal layers, even in peak summer",
                          "Carry sufficient cash — there are no ATMs at the lake",
                          "Bring binoculars for birdwatching along the marshy shore",
                          "Book your Korzok homestay a few days ahead in peak season",
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
                          "Drive straight from Leh's airport to Tso Moriri without acclimatising",
                          "Assume you'll find fuel between Upshi and Korzok — there is none",
                          "Rely on mobile signal working in Korzok",
                          "Approach nesting birds or disturb the marshy shoreline",
                          "Travel without carrying cash — there are zero ATMs at the lake",
                          "Leave litter or single-use plastic on the shore",
                          "Underestimate the cold — even summer nights drop near freezing",
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
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Tso Moriri",
                  "Ladakh",
                  "Rupshu Plateau",
                  "Korzok",
                  "High Altitude Lake",
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

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Tso Moriri"
              />

              <RelatedPostsGrid currentSlug="tso-moriri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tso-moriri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
