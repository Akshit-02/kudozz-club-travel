// src/app/blog/dha-hanu-travel-guide/page.tsx
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
  title: "Dha-Hanu Travel Guide: Ladakh's Aryan Valley & the Brokpa People",
  description:
    "A responsible traveller's guide to Dha-Hanu, the so-called 'Aryan Valley' of Ladakh — how to reach Dha, Hanu, Garkone and Darchik, permits, Brokpa culture, and how to visit this living community with respect.",
  keywords:
    "Dha Hanu, Aryan Valley Ladakh, Brokpa people, Drokpa Ladakh, Dha village, Hanu village, Garkone, Darchik, Batalik sector, Ladakh permits, offbeat Ladakh, Ladakh culture, best time to visit Dha Hanu, how to reach Dha Hanu from Leh, is Dha Hanu safe for solo travellers, Dha Hanu budget trip, Dha Hanu homestays, Inner Line Permit Ladakh, apricot blossom Ladakh, Aryan Valley legend truth",
  openGraph: {
    title: "Dha-Hanu Travel Guide: Ladakh's Aryan Valley & the Brokpa People",
    description:
      "Apricot orchards, flower crowns, and a fiercely distinct way of life along the Indus — a respectful guide to visiting Dha-Hanu.",
    url: "https://club.kudozz.in/blog/dha-hanu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "The Indus valley near Dha-Hanu in Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dha-Hanu Travel Guide: Ladakh's Aryan Valley",
    description:
      "How to visit Dha, Hanu, Garkone and Darchik — permits, culture, and respectful travel in Ladakh's Brokpa villages.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dha-hanu-travel-guide",
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
            "Dha-Hanu Travel Guide: Ladakh's Aryan Valley & the Brokpa People",
          description:
            "A responsible traveller's guide to Dha-Hanu, Ladakh — permits, how to reach, Brokpa culture, and etiquette for visiting this distinct community along the Indus.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-06-02",
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
            "@id": "https://club.kudozz.in/blog/dha-hanu-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Dha-Hanu",
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
                name: "Dha-Hanu Travel Guide",
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
    q: "How many days do you need for Dha-Hanu?",
    a: "A day trip from Leh is technically possible but rushed, since you'll spend most of the day driving. An overnight homestay is strongly preferable — give it a full day and a night if you possibly can, so the itinerary can loosen and let the valley's own rhythm set the pace.",
  },
  {
    q: "What is the best time to visit Dha-Hanu?",
    a: "April–May brings the apricot blossom, when the valley's trees flower in pale pink and white against bare hillsides. June–July is the green season, with fields turning deep green and the best chance of seeing Brokpa dress worn for real weddings or festivals. Our pick is late August, during the apricot harvest, when the passes and roads elsewhere in Ladakh are busy but Dha-Hanu stays quiet. October–March, the region effectively closes to outside visitors.",
  },
  {
    q: "How do I reach Dha-Hanu from Leh?",
    a: "There's no reliable public transport, so a hired taxi or your own vehicle is the practical option. The main route from Leh follows the Srinagar–Leh highway west through Nimmu, Basgo and Saspol to Khalsi (~95 km), then a local road traces the Indus upstream — Dha is roughly 163 km from Leh, Hanu a little further, with Garkone and Darchik another 20–30 km beyond. Budget 5–6 hours of driving each way.",
  },
  {
    q: "Do I need a permit to visit Dha-Hanu?",
    a: "Yes. All Indian nationals need an Inner Line Permit (ILP) for Dha, Hanu, and surrounding villages, obtainable online or at the DC Office in Leh. Foreign nationals additionally need a Protected Area Permit (PAP), which can't be obtained independently and must be arranged through a registered Leh tour operator. Garkone and Darchik, being closer to the Line of Control, have at times been fully off-limits to foreign nationals, so confirm current access before planning around them.",
  },
  {
    q: "Is Dha-Hanu safe for solo travellers?",
    a: "Dha-Hanu itself is a quiet, low-key farming community, but it sits inside an active border sector near the Line of Control, so checkpoints, ID checks, and photography restrictions around military installations are part of the trip. Carrying original photo ID and permit copies at every checkpoint, avoiding photography of bunkers, bridges, or checkpoints, and confirming current permit rules with a Leh-based operator before travelling are the main precautions.",
  },
  {
    q: "What is the budget for a Dha-Hanu trip?",
    a: "Excluding return transport from Leh, a daily budget of around ₹1,000 to ₹2,000 covers a homestay with meals (₹800–₹1,500/night), ILP fees (₹20–₹400), and apricots or apricot oil to buy directly from families. Return taxi from Leh runs from roughly ₹1,500 per person shared to ₹4,500 for a private cab.",
  },
  {
    q: "Is the 'Aryan Valley' label about the Brokpa people actually true?",
    a: "No — the popular story that the Brokpa are 'pure' descendants of Alexander the Great's soldiers is not supported by modern genetics or serious anthropology. Population genetics studies have found the Brokpa closely related to neighbouring Ladakhi, Balti, and other Dardic-speaking Himalayan populations, not a genetically isolated lineage. The label is largely a colonial-era romanticisation later amplified by tourism marketing.",
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
  { id: "introduction", title: "Why Dha-Hanu?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "permits", title: "Permits & Restricted Area Rules", level: 2 },
  { id: "villages", title: "The Four Villages", level: 2 },
  { id: "dha-hanu-villages", title: "→ Dha & Hanu", level: 3 },
  { id: "garkone-darchik", title: "→ Garkone & Darchik", level: 3 },
  { id: "brokpa-culture", title: "The Brokpa People", level: 2 },
  { id: "the-aryan-legend", title: "→ The 'Aryan Valley' Legend", level: 3 },
  { id: "visiting-respectfully", title: "Visiting Respectfully", level: 2 },
  { id: "apricot-orchards", title: "Apricot Orchards", level: 2 },
  { id: "batalik-memorial", title: "Batalik War Memorial", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DhaHanuPage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="The Indus river valley near Dha-Hanu in Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Dha-Hanu", href: null },
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
                "Dha-Hanu",
                "Aryan Valley",
                "Brokpa People",
                "Offbeat Ladakh",
                "Indus Valley",
                "Kargil-Batalik",
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
              Dha-Hanu: Inside Ladakh's So-Called "Aryan Valley"
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Along a quiet bend of the Indus, four villages hold on to a way
              of life found nowhere else in India. This is a guide to
              visiting Dha, Hanu, Garkone and Darchik — carefully, and on
              their terms.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Leh District, Ladakh",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,600 words",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.icon}
                    />
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
                  <h2>Why Dha-Hanu?</h2>
                  <p>
                    West of Leh, where the Indus curves through a narrower,
                    greener stretch of valley before the road drops toward
                    Kargil, sit four villages that most Ladakh itineraries
                    never reach: <strong>Dha</strong>, <strong>Hanu</strong>,{" "}
                    <strong>Garkone</strong>, and <strong>Darchik</strong>.
                    Together they're often marketed as the "Aryan Valley," a
                    name dreamed up by tour brochures and colonial-era
                    travellers rather than by the people who live here — but
                    the place itself needs no embellishment.
                  </p>
                  <p>
                    This is the heartland of the <strong>Brokpa</strong> (also
                    spelled Drokpa or Dard), a small community of a few
                    thousand people whose language, dress, and pre-Buddhist
                    ritual life set them apart from every other group in
                    Ladakh — and, arguably, from anywhere else in India. Their
                    villages sit close to the Line of Control in the
                    Kargil-Batalik sector, wedged between the Indus and the
                    mountains, ringed by apricot orchards that turn the
                    hillsides pink every spring.
                  </p>
                  <p>
                    Dha-Hanu rewards travellers who come with curiosity and
                    patience rather than a checklist. There are no monasteries
                    stacked twelve storeys high here, no turquoise lakes on
                    postcards. What there is: terraced fields, timber-and-mud
                    houses, apricots drying on rooftops, and a community that
                    has fielded a great deal of outside attention over the
                    decades — not all of it kind. This guide is as much about{" "}
                    <em>how</em> to visit as it is about what to see.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Dha-Hanu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Leh district, Indus valley near LOC",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "~2,900–3,200 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Sep" },
                        {
                          icon: "🚗",
                          label: "From Leh",
                          value: "~163–190 km, 5–6 hrs",
                        },
                        {
                          icon: "🛂",
                          label: "Permits",
                          value: "ILP mandatory; restricted for foreigners",
                        },
                        {
                          icon: "🏡",
                          label: "Stay",
                          value: "Basic homestays only",
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

                  <blockquote>
                    A note before you go: the Brokpa are a living, changing
                    community — not a living museum. Nothing in this guide
                    should be read as an invitation to treat Dha-Hanu as a
                    spectacle. Read the{" "}
                    <a href="#visiting-respectfully">
                      Visiting Respectfully
                    </a>{" "}
                    section before you book anything.
                  </blockquote>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Dha-Hanu</h2>
                  <p>
                    Like the rest of Ladakh, Dha-Hanu is only comfortably
                    accessible for around five months of the year. Outside
                    that window, the road along the Indus can still be open
                    later than the high passes elsewhere in Ladakh (it runs at
                    lower altitude), but homestays close down and daily life
                    contracts to the essentials of surviving winter.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "April – May",
                        emoji: "🌸",
                        color: "bg-pink-50 border-pink-200",
                        mood: "Apricot blossom",
                        text: "The valley's apricot trees flower in a wash of pale pink and white against bare brown hillsides — arguably the most beautiful time to see Dha-Hanu, though nights are still cold and some homestays haven't fully reopened.",
                      },
                      {
                        season: "June – July",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Green season, festivals",
                        text: "Fields turn a deep green, irrigation channels run full, and this is when you're most likely to see Brokpa dress worn for weddings or local festivals rather than staged for visitors. Warm days, cool nights.",
                      },
                      {
                        season: "August – September",
                        emoji: "🍑",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Apricot harvest — our pick",
                        text: "Rooftops and courtyards fill with apricots drying in the sun. Harvest is genuine, unhurried village life, and you'll see the economy of the valley in motion rather than performed. Book homestays ahead.",
                      },
                      {
                        season: "Oct – March",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Closed to tourism",
                        text: "Most homestays shut, temperatures fall well below freezing, and the region effectively closes to outside visitors. Some locals travel to Leh or Kargil for the winter. Not recommended for travel.",
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
                    <strong>Our pick:</strong> Late August. The apricot
                    harvest is on, the passes and roads elsewhere in Ladakh
                    are still busy with crowds, but Dha-Hanu stays quiet. It's
                    a good moment to slow your own trip down to match the
                    valley's pace.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Dha-Hanu</h2>
                  <p>
                    There's no public transport worth relying on into
                    Dha-Hanu — a hired taxi or your own vehicle from Leh is
                    the practical option, and the drive itself, along the
                    Indus, is a big part of the appeal.
                  </p>
                  <ul>
                    <li>
                      <strong>From Leh via Khalsi:</strong> Follow the
                      Srinagar–Leh highway (NH1) west through Nimmu, Basgo and
                      Saspol to Khalsi (~95 km), then turn off onto the local
                      road that traces the Indus upstream into the valley.
                      Dha is roughly 163 km from Leh, Hanu a little further;
                      Garkone and Darchik add another 20–30 km beyond that.
                      Budget 5–6 hours of driving each way, more if you stop
                      at Alchi or Lamayuru en route.
                    </li>
                    <li>
                      <strong>From Kargil via Batalik:</strong> An alternative
                      approach follows the Indus downstream from Kargil
                      through the Batalik sector — the same stretch of border
                      country associated with the 1999 Kargil conflict — before
                      reaching Darchik and Garkone from the west. This route
                      is scenic and less touristed but passes through a more
                      militarised landscape; expect checkpoints and occasional
                      delays.
                    </li>
                    <li>
                      <strong>Road condition:</strong> Mostly paved and
                      well-maintained by BRO standards, with a few rough
                      stretches near the villages themselves. A regular sedan
                      can usually manage it in dry conditions, though a
                      higher-clearance vehicle is more comfortable.
                    </li>
                    <li>
                      <strong>Day trip vs overnight:</strong> A day trip from
                      Leh is technically possible but rushed — you'll spend
                      most of the day driving and arrive with little time or
                      energy to engage with the place properly. An overnight
                      homestay is strongly preferable, both for your own
                      experience and because it puts money directly into the
                      local economy rather than a Leh-based tour operator.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro tip:</strong> Combine the drive with Alchi
                    Monastery and the Lamayuru "moonland," both roughly on the
                    way if you're coming via Khalsi — it turns a long there-
                    and-back drive into a genuinely rich day of stops.
                  </div>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Restricted Area Rules</h2>
                  <p>
                    Dha-Hanu sits inside Ladakh's Inner Line belt, close
                    enough to the Line of Control that it has long been
                    treated as sensitive border territory. Rules here have
                    shifted over the years and can shift again, so treat the
                    following as a starting point — always verify current
                    requirements at the DC Office in Leh or with a registered
                    local operator before you travel.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        permit: "Inner Line Permit (ILP)",
                        color: "border-forest-300 bg-forest-50",
                        required: "Dha, Hanu, Beama and surrounding villages",
                        who: "All Indian nationals",
                        cost: "₹20–₹400 depending on sector",
                        how: "Online at lahdclehpermit.in or in person at the DC Office, Leh. Carry printed copies — some village-level checkpoints don't accept digital ILPs.",
                        note: "Applications may ask for your itinerary and vehicle details; keep these accurate.",
                      },
                      {
                        permit: "Protected Area Permit (PAP)",
                        color: "border-amber-300 bg-amber-50",
                        required: "Dha and Hanu (where opened to foreigners)",
                        who: "Foreign nationals only",
                        cost: "Arranged through a registered Leh tour operator",
                        how: "Cannot be obtained independently — a licensed operator must apply on your behalf and, in practice, usually accompanies the trip.",
                        note: "Garkone and Darchik, being closer to the LOC, have at times been fully off-limits to foreign nationals. Confirm current status before planning around them.",
                      },
                      {
                        permit: "Military checkpoints",
                        color: "border-sky-300 bg-sky-50",
                        required: "En route on both the Khalsi and Batalik approaches",
                        who: "All visitors",
                        cost: "No fee — ID and ILP checked",
                        how: "Carry original photo ID plus permit copies. Be patient; checks can take time, especially during periods of heightened alert.",
                        note: "Photography of any military installation, bridge, or checkpoint is strictly prohibited and can lead to serious trouble — leave the camera down.",
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

                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Important:</strong> Because this is an active
                    border sector, permit rules can change with little
                    notice — sometimes an entire village is opened or closed
                    to visitors depending on the security situation. Book your
                    homestay and confirm access through a Leh-based operator
                    familiar with the current status rather than assuming last
                    year's rules still apply.
                  </div>
                </section>

                {/* ── Villages ──────────────────────────────────────────── */}
                <section id="villages">
                  <h2>The Four Villages</h2>
                  <p>
                    "Dha-Hanu" is shorthand for a cluster of settlements, not
                    a single village — and the differences between them are
                    worth knowing before you go, because they aren't
                    interchangeable.
                  </p>

                  <section id="dha-hanu-villages">
                    <h3>Dha & Hanu</h3>
                    <div className="relative w-full rounded-xl my-6 h-64 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                        alt="Terraced fields and orchards near Dha village, Ladakh"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      <strong>Dha</strong>, the westernmost and best-known of
                      the villages, and <strong>Hanu</strong> (split into
                      Hanu Yokma, the lower hamlet, and Hanu Gongma, higher up
                      the slope) are predominantly Buddhist Brokpa villages.
                      Prayer flags share the skyline here with the flowering
                      apricot trees, and small chortens sit at the edge of
                      terraced barley fields. These are the two villages most
                      commonly opened to outside visitors, and where most of
                      the region's limited homestay infrastructure exists.
                    </p>
                    <p>
                      Dha in particular has, over the decades, become the
                      face of the "Aryan Valley" story sold in Leh's travel
                      agencies — which has brought a trickle of curiosity
                      tourism, and with it, some of the awkward dynamics
                      described later in this guide. Hanu is quieter and
                      somewhat less visited, and many travellers find it the
                      more comfortable base for an overnight stay.
                    </p>
                  </section>

                  <section id="garkone-darchik">
                    <h3>Garkone & Darchik</h3>
                    <p>
                      A short distance further along the Indus,{" "}
                      <strong>Garkone</strong> and <strong>Darchik</strong>{" "}
                      are also Brokpa villages, but Muslim rather than
                      Buddhist — a distinction that traces back to
                      generations of contact with the Muslim-majority Kargil
                      region nearby. Architecturally and agriculturally
                      similar to Dha and Hanu, but with a mosque rather than
                      a gompa at the village centre, and without the same
                      degree of tourist infrastructure.
                    </p>
                    <p>
                      Because they sit closer to the Line of Control, Garkone
                      and Darchik have at times faced tighter restrictions —
                      including periods when they were closed to foreign
                      nationals altogether. If reaching these two villages
                      specifically matters to your trip, confirm current
                      access with a Leh operator before you commit to an
                      itinerary; don't assume you'll be able to continue
                      past Hanu.
                    </p>
                  </section>
                </section>

                {/* ── Brokpa Culture ────────────────────────────────────── */}
                <section id="brokpa-culture">
                  <h2>The Brokpa People</h2>
                  <p>
                    The Brokpa (sometimes Drokpa, meaning roughly "highland
                    pastoralist") speak Brokskat, a Dardic language distinct
                    from Ladakhi, and trace a cultural lineage connected to
                    other Dard communities scattered across the
                    Gilgit-Baltistan and Kargil borderlands. In Dha and Hanu,
                    Brokpa identity today sits layered over Tibetan Buddhism;
                    in Garkone and Darchik, over Islam — but underneath both,
                    older animist and nature-worship traditions persist in
                    festivals, oral folklore, and rituals tied to harvests
                    and mountain spirits.
                  </p>
                  <p>
                    The most visible marker of Brokpa identity, and the image
                    most travel brochures reach for, is the elaborate
                    headdress worn by Brokpa women on festival and ceremonial
                    occasions: a wide silver or metal band studded with coins,
                    turquoise, and seashells, topped with fresh or dried
                    flowers — marigolds, wild blooms, sometimes paper flowers
                    when nothing fresh is in season. It's paired with heavy
                    silver jewellery, embroidered woollen robes, and, in
                    older photographs, elaborate hairstyles worked with
                    yak-hair extensions.
                  </p>
                  <p>
                    It's worth being clear-eyed about when you'll actually
                    see this: full ceremonial dress is worn for weddings,
                    harvest festivals, and religious occasions — not as
                    everyday village wear, whatever a tour brochure's cover
                    photo might suggest. Some families and homestays will
                    dress up on request for photographs in exchange for a
                    fee, which is a legitimate transaction if it's offered and
                    agreed to freely — but it isn't the same as glimpsing
                    daily life, and shouldn't be mistaken for it.
                  </p>

                  <section id="the-aryan-legend">
                    <h3>The "Aryan Valley" Legend</h3>
                    <p>
                      No honest account of Dha-Hanu can skip past the
                      "Aryan Valley" label, because it's the reason most
                      visitors have heard of the place at all — and because
                      it's a claim worth examining rather than repeating.
                    </p>
                    <p>
                      The popular story, pushed hard by decades of tourist
                      literature, holds that the Brokpa are the last "pure"
                      descendants of Alexander the Great's soldiers, who
                      supposedly settled in this remote valley and preserved
                      their bloodline in isolation for over two thousand
                      years — complete with claims about fair skin, light
                      eyes, and "unmixed Aryan" ancestry. It's a colourful
                      story, and it has sold a great deal of tourism.
                    </p>
                    <p>
                      It is also, as far as modern genetics and serious
                      anthropology can tell, <strong>not supported by
                      evidence</strong>. Population genetics studies of the
                      Brokpa have found them to be closely related to
                      neighbouring Ladakhi, Balti, and other Dardic-speaking
                      Himalayan populations — not a genetically isolated or
                      distinct "pure" lineage, and certainly not verifiable
                      descendants of a specific ancient army. The
                      Alexander-descent story appears to be largely a
                      colonial-era romanticisation, later amplified by
                      tourism marketing that found "the last pure Aryans" an
                      easier sell than "a Dardic-speaking farming community
                      with a distinct pre-Buddhist ritual tradition."
                    </p>
                    <div
                      className="bg-stone-900 text-white rounded-xl p-5 my-6"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <h4
                        className="font-bold text-white mb-2 text-sm"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Why this matters for how you visit
                      </h4>
                      <p className="text-sm text-stone-300 m-0 leading-relaxed">
                        Treating the Brokpa as a genetic curiosity to be
                        gawked at — commenting on people's features, asking
                        invasive questions about "purity" or ancestry — is
                        both scientifically baseless and genuinely
                        disrespectful to the people who live here. What's
                        actually remarkable about Dha-Hanu isn't a contested
                        bloodline; it's a living culture, a distinct
                        language, and a way of farming and worship that has
                        persisted in one of the harshest inhabited
                        landscapes on earth. That's worth your attention on
                        its own terms.
                      </p>
                    </div>
                  </section>
                </section>

                {/* ── Visiting Respectfully ─────────────────────────────── */}
                <section id="visiting-respectfully">
                  <h2>Visiting Respectfully</h2>
                  <p>
                    Dha-Hanu's small population and its "Aryan Valley"
                    marketing have, for years, meant a lopsided relationship
                    between visitors and villagers — cameras pointed at
                    people going about ordinary days, families asked to pose,
                    curiosity that occasionally tips into treating a
                    community like an exhibit rather than a place where
                    people live, farm, and raise children. None of that is
                    inevitable, and it isn't how most visitors behave — but
                    it's common enough that it's worth naming plainly.
                  </p>
                  <p>
                    The good news: a respectful visit here isn't complicated.
                    It mostly comes down to treating Dha-Hanu the way you'd
                    want a stranger to treat your own neighbourhood — ask
                    before you photograph, follow the host family's lead, and
                    remember that the "unique" thing you're here to see is
                    someone else's ordinary life.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 The one rule that matters most:</strong> Always
                    ask before photographing a person — not their house, not
                    their fields, <em>them</em>. A smile and a raised camera
                    with a questioning look works even without shared
                    language. If someone says no, or looks uncomfortable, put
                    the camera away. If a family offers to dress in
                    ceremonial clothing for photos for a fee, that's their
                    choice to make — pay what's asked and thank them; don't
                    negotiate it down to a token amount.
                  </div>
                  <p>
                    Staying in a homestay rather than day-tripping through is
                    itself part of visiting respectfully — it puts your money
                    directly into a family's hands rather than a tour
                    package, and it naturally slows your visit down from
                    "photograph and leave" to something closer to a
                    conversation, even a limited one across a language gap.
                  </p>
                </section>

                {/* ── Apricot Orchards ──────────────────────────────────── */}
                <section id="apricot-orchards">
                  <h2>Apricot Orchards</h2>
                  <p>
                    Ladakh's apricots are famous across the region, and
                    Dha-Hanu grows some of the best of them. The valley's
                    slightly lower altitude and sheltered position along the
                    Indus give it a milder microclimate than most of Ladakh,
                    and the orchards here — along with those around Kargil —
                    supply a large share of the dried apricots sold in Leh's
                    markets.
                  </p>
                  <p>
                    Blossom season in April brings the hillsides alive with
                    pale pink flowers; by August, the harvest is in full
                    swing, with apricots spread out to dry on rooftops,
                    stone walls, and open ground across every village. Kernels
                    are pressed for a mild, nutty oil used in cooking and, in
                    small quantities, sold as a cosmetic product. Buying dried
                    apricots or apricot oil directly from a family here — rather
                    than in a Leh souvenir shop — is one of the simplest,
                    most direct ways to support the local economy.
                  </p>
                </section>

                {/* ── Batalik War Memorial ──────────────────────────────── */}
                <section id="batalik-memorial">
                  <h2>Batalik War Memorial</h2>
                  <p>
                    If you approach Dha-Hanu from the Kargil side, or make a
                    detour that way, the road passes near the{" "}
                    <strong>Batalik sector</strong> — one of the areas where
                    some of the fiercest fighting of the 1999 Kargil War took
                    place, on the ridgelines above the Indus. A war memorial
                    here commemorates the soldiers who fought to reclaim the
                    high ground, and it's a sobering, worthwhile stop for
                    anyone travelling through this stretch of border country.
                  </p>
                  <p>
                    Given the sector's continued military sensitivity,
                    photography rules are strictly enforced around any
                    installation or checkpoint near Batalik — the memorial
                    itself is generally fine to photograph, but always check
                    with accompanying military or local personnel before
                    doing so, and never photograph bunkers, bridges, or
                    checkpoints along the way.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Dha-Hanu</h2>
                  <p>
                    There are no hotels here, and that's rather the point.
                    Accommodation is limited to a small number of
                    family-run homestays in Dha and Hanu, most set up in
                    recent years with support from Ladakh's rural tourism
                    initiatives. Expect a simple room, shared or basic
                    bathroom facilities, home-cooked meals, and — usually —
                    no reliable mobile network.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Village Homestays",
                        icon: "🏡",
                        range: "₹800–₹1,500/night (usually incl. meals)",
                        picks: [
                          "Family homestays in Dha village",
                          "Family homestays in Hanu Yokma",
                          "A handful of newer registered stays in Hanu Gongma",
                          "Book through a Leh operator or the local tourism office",
                        ],
                      },
                      {
                        tier: "Garkone & Darchik",
                        icon: "🕌",
                        range: "Very limited — confirm before travel",
                        picks: [
                          "Minimal formal homestay infrastructure",
                          "Access may be restricted depending on the season",
                          "Best visited as a day trip from Hanu if permitted",
                          "Arrange in advance through a local contact",
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
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Pack accordingly:</strong> Electricity can be
                    intermittent, hot water is often bucket-heated rather
                    than piped, and there are no ATMs in the valley. Carry
                    cash, a headlamp, and a warm layer even in summer —
                    nights drop sharply once the sun is behind the ridge.
                  </div>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Dha-Hanu</h2>
                  <p>
                    Meals here are homestay meals — whatever the family is
                    cooking, made with what the valley grows. It's simple,
                    hearty food built around barley, apricots, and dairy,
                    with some Ladakhi and Kargili staples in common with the
                    wider region.
                  </p>
                  <ul>
                    <li>
                      <strong>Ngamphe:</strong> Roasted barley flour, similar
                      to Ladakhi tsampa, often mixed with butter tea or milk
                      — a staple breakfast across the valley.
                    </li>
                    <li>
                      <strong>Fresh & dried apricots:</strong> In season,
                      you'll be offered apricots at almost every stop — sweet,
                      sun-ripened, and nothing like the dried ones sold
                      elsewhere. Dried apricots and pressed apricot kernels
                      make good, genuinely local souvenirs.
                    </li>
                    <li>
                      <strong>Chutagi and thukpa:</strong> Hearty pasta-and-
                      broth dishes shared with the rest of Ladakh, warming
                      and filling after a day of walking between orchards.
                    </li>
                    <li>
                      <strong>Local dairy:</strong> Yak and dzo (a
                      yak-cattle hybrid) milk, butter, and simple cheeses
                      feature heavily — offered generously by homestay hosts.
                    </li>
                    <li>
                      <strong>Chang:</strong> A mildly fermented barley
                      drink found across Ladakh, sometimes offered during
                      festivals — accept graciously if you drink, and it's
                      equally fine to decline.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Dha-Hanu</h2>
                  <p>
                    Dha-Hanu is inexpensive once you're there — the main
                    cost is the return transport from Leh, since there's no
                    public transport to rely on.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          {["Expense", "Budget", "Comfortable"].map((h) => (
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
                          ["Homestay/night (incl. meals)", "₹800", "₹1,500"],
                          [
                            "Return taxi from Leh (shared)",
                            "₹1,500/person",
                            "₹4,500 (private cab)",
                          ],
                          ["ILP", "₹20–₹400", "₹20–₹400"],
                          [
                            "Dressed-up photo session (if offered)",
                            "₹200–₹500",
                            "₹500–₹1,000",
                          ],
                          [
                            "Apricots / apricot oil to buy",
                            "₹200",
                            "₹500",
                          ],
                          ["Daily total (excl. transport)", "₹1,000", "₹2,000"],
                        ].map(([exp, b, c], i) => (
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
                              {c}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>

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
                          "Ask before photographing any person, every time",
                          "Book a homestay rather than a same-day tour",
                          "Carry cash — there are no ATMs in the valley",
                          "Confirm current permit and access rules before you go",
                          "Buy apricots and apricot oil directly from families",
                          "Dress modestly, especially in Garkone and Darchik",
                          "Carry ID and permit copies at every checkpoint",
                          "Pack a warm layer even in summer",
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
                          "Photograph anyone without asking first",
                          "Comment on people's features or 'purity' of ancestry",
                          "Photograph checkpoints, bridges, or military posts",
                          "Assume ceremonial dress is everyday village wear",
                          "Haggle down a fee a family has asked for photos",
                          "Expect mobile network or reliable electricity",
                          "Enter a home uninvited, even if the door is open",
                          "Treat a village visit as a same-day photo stop",
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

                  <p>
                    Dha-Hanu isn't a place to rush. Give it a full day and a
                    night if you possibly can, let the itinerary loosen, and
                    let the valley's own rhythm — orchards, prayer flags,
                    apricots drying on a rooftop — set the pace instead of
                    your camera roll.
                  </p>
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
                  "Dha-Hanu",
                  "Ladakh",
                  "Aryan Valley",
                  "Brokpa",
                  "Offbeat India",
                  "Indus Valley",
                  "Cultural Travel",
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
                destination="Dha-Hanu"
              />

              <RelatedPostsGrid currentSlug="dha-hanu-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dha-hanu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
