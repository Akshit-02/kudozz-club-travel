// src/app/blog/nani-daman-travel-guide/page.tsx
import GuideBreadcrumb, { guideBreadcrumbSchema } from "@/components/ui/GuideBreadcrumb";
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import GuideTripCTA from "@/components/ui/GuideTripCTA";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Nani Daman Travel Guide: St. Jerome Fort, Jetty & Harbour" },
  description:
    "Nani Daman guide: the Fort of St. Jerome and its riverside gateway, the Church of Our Lady of the Sea, the fishing jetty and harbour, plus timings and tips.",
  keywords:
    "Nani Daman, Nani Daman travel guide, Fort of St. Jerome, Nani Daman Fort, Our Lady of the Sea church Daman, Daman fishing harbour, Nani Daman jetty, Daman and Diu travel, Moti Daman vs Nani Daman, Daman Ganga river, Daman tourism",
  openGraph: {
    title: "Nani Daman Travel Guide: St. Jerome Fort, Jetty & Harbour",
    description:
      "The northern quarter of Daman town: the Fort of St. Jerome with its statue-topped gateway, the Church of Our Lady of the Sea and a busy fishing harbour.",
    url: "https://club.kudozz.in/blog/nani-daman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/blogs/dadra-and-nagar-haveli-and-daman-and-diu/nani-daman/nani-daman-fort-entrance-gate.webp",
        width: 1600,
        height: 1200,
        alt: "The weathered stone entrance gate of Nani Daman Fort, carved with a cross and lion reliefs",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nani Daman Travel Guide: St. Jerome Fort, Jetty & Harbour",
    description:
      "The northern quarter of Daman town: the Fort of St. Jerome with its statue-topped gateway, the Church of Our Lady of the Sea and a busy fishing harbour.",
    images: ["/images/blogs/dadra-and-nagar-haveli-and-daman-and-diu/nani-daman/nani-daman-fort-entrance-gate.webp"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nani-daman-travel-guide",
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
          "@graph": [
          {
          "@type": "BlogPosting",
          headline: "Nani Daman Travel Guide: St. Jerome Fort, Jetty & Harbour",
          description:
            "Nani Daman guide: the Fort of St. Jerome and its riverside gateway, the Church of Our Lady of the Sea, the fishing jetty and harbour, plus timings and tips.",
          image: "https://club.kudozz.in/images/blogs/dadra-and-nagar-haveli-and-daman-and-diu/nani-daman/nani-daman-fort-entrance-gate.webp",
          datePublished: "2026-08-30",
          dateModified: "2026-09-30",
          publisher: {
            "@type": "Organization",
            "@id": "https://club.kudozz.in/#organization",
            name: "Kudozz Club",
            url: "https://club.kudozz.in",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            "@id": "https://club.kudozz.in/#organization",
            name: "Kudozz Club",
            url: "https://club.kudozz.in",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/nani-daman-travel-guide",
          },
          keywords:
            "Nani Daman, Fort of St. Jerome, Nani Daman Fort, Daman fishing harbour, Moti Daman vs Nani Daman",
          about: {
            "@type": "Place",
            name: "Nani Daman",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Daman",
              addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
              addressCountry: "IN",
            },
          },
        },
          guideBreadcrumbSchema("nani-daman-travel-guide", "Nani Daman"),
          ],
        }),
      }}
    />
  );
}

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "What is the difference between Moti Daman and Nani Daman?",
    a: "They're the two halves of Daman town, split by the Daman Ganga river. Moti Daman (\"Big Daman\") sits on the south bank and is the larger, more formal quarter — home to the main Portuguese fort, government offices, and Bom Jesus Church. Nani Daman (\"Small Daman\") sits on the north bank and is smaller and more workaday — a fishing-harbour town with the compact Fort of St. Jerome and a busy jetty. Moti Daman feels administrative and monumental; Nani Daman feels lived-in and salty.",
  },
  {
    q: "Is Nani Daman worth visiting?",
    a: "Yes, if you enjoy an authentic, unpolished slice of coastal life rather than a polished heritage site. The Fort of St. Jerome is smaller than Moti Daman Fort but well preserved, and the fishing harbour — with its packed rows of boats, the daily catch coming in, and the whole rhythm of a working port — is genuinely worth an hour or two, especially paired with a walk along the fort's riverside ramparts.",
  },
  {
    q: "What is there to see in Nani Daman?",
    a: "The main draws are the Fort of St. Jerome (Nani Daman Fort), with its riverside gateway, statue of St. Jerome and the Church of Our Lady of the Sea inside; the fishing harbour and jetty with its colourful wooden trawlers; and the view across the river to Moti Daman Fort. Together they make a pleasant, low-key half-day walk.",
  },
  {
    q: "Is the Nani Daman fishing harbour open to visitors?",
    a: "Yes, the harbour and jetty are a public part of town and visitors are welcome to walk along them and watch the boats. That said, it's a working fishing community, not a tourist attraction built for visitors — be mindful around nets, catch being sorted, and loading operations, and avoid getting in the way during the busy early-morning and late-afternoon hours when boats come in.",
  },
  {
    q: "How do I get to Nani Daman from Moti Daman?",
    a: "They're connected by a bridge over the Daman Ganga river, right within Daman town — the crossing takes just a few minutes by auto-rickshaw, taxi, or on foot. Most visitors base themselves in either half and cover both on the same day, since the whole town is compact.",
  },
  {
    q: "What is the Fort of St. Jerome in Nani Daman?",
    a: "It's Nani Daman's Portuguese fort, also called Nani Daman Fort. Built between 1615 and 1627 on the north bank of the Daman Ganga, it covers about 12,250 sq m, with high stone walls, three bastions and two gateways. The riverside gateway carries a large statue of St. Jerome, and the Church of Our Lady of the Sea stands inside. It is smaller than Moti Daman Fort (1559–1581) on the south bank.",
  },
  {
    q: "What is the best time to visit Nani Daman?",
    a: "October to March, when the weather is dry and pleasantly warm rather than humid — ideal for walking the harbour front and the fort ramparts without the discomfort of Daman's peak summer heat or the monsoon's rough seas and slippery jetty surfaces.",
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
  { id: "introduction", title: "Nani Daman: Small Daman", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "fort", title: "Fort of St. Jerome", level: 2 },
  { id: "harbour", title: "The Fishing Harbour & Jetty", level: 2 },
  { id: "lighthouse", title: "Views Across to Moti Daman", level: 2 },
  { id: "food-guide", title: "Local Seafood & Where to Eat", level: 2 },
  { id: "itinerary", title: "Suggested Half-Day Visit", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NaniDamanGuidePage() {
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
              src="/images/blogs/dadra-and-nagar-haveli-and-daman-and-diu/nani-daman/nani-daman-fort-entrance-gate.webp"
              alt="The weathered stone entrance gate of Nani Daman Fort, carved with a cross and lion reliefs"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          {/* Breadcrumbs */}
          <GuideBreadcrumb slug="nani-daman-travel-guide" label="Nani Daman" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Nani Daman",
                "Daman",
                "Fishing Harbour",
                "Portuguese Heritage",
                "Daman and Diu",
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
              Nani Daman Travel Guide: St. Jerome Fort, Jetty & Harbour
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Across the river from Moti Daman's grand fort lies its
              smaller, saltier sibling: a working fishing harbour and the
              compact Fort of St. Jerome, its gateway guarded by a statue of
              the saint.
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
                  text: "Nani Daman, Daman & Diu",
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
                  <h2>Nani Daman: Small Daman</h2>
                  <p>
                    <strong>Nani Daman</strong> — Gujarati for "Small
                    Daman" — is the smaller, northern quarter of{" "}
                    <Link href="/blog/daman-travel-guide">Daman town</Link>,
                    sitting on the north bank of the Daman Ganga river
                    directly across from{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman
                    </Link>{" "}
                    ("Big Daman") on the south bank. Where Moti Daman carries
                    the town's grander, more administrative character — its
                    walled fort, government buildings, and the imposing Bom
                    Jesus Church — Nani Daman has always been the working
                    half: a fishing-harbour town built around boats, nets,
                    and the daily rhythm of the catch coming in.
                  </p>
                  <p>
                    The Portuguese, who held Daman for nearly four and a half
                    centuries until 1961, fortified both banks of the river
                    mouth. Moti Daman got the larger fortification (built
                    1559–1581); Nani Daman got the smaller{" "}
                    <strong>Fort of St. Jerome</strong>, built between 1615
                    and 1627 to guard the north bank. Its walls still stand,
                    and the harbour it once protected is very much alive,
                    packed with wooden fishing trawlers and the everyday
                    business of a coastal livelihood.
                  </p>
                  <p>
                    This is what makes Nani Daman worth the short walk or
                    rickshaw ride across the bridge — not a single
                    postcard monument, but a genuinely lived-in coastal
                    quarter that contrasts sharply with Moti Daman's more
                    formal, preserved heritage core. For the fuller regional
                    picture — Diu, Silvassa, and the rest of the Union
                    Territory —{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      see our complete Daman & Diu travel guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h3 data-box
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⚓</span> Nani Daman at a Glance
                    </h3>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North bank, Daman Ganga river",
                        },
                        {
                          icon: "🈂️",
                          label: "Meaning",
                          value: '"Nani" = small/little (Gujarati)',
                        },
                        {
                          icon: "🏰",
                          label: "Landmark",
                          value: "Fort of St. Jerome",
                        },
                        {
                          icon: "🎣",
                          label: "Known For",
                          value: "Working fishing harbour & jetty",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "Half a day",
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

                <GuideTripCTA slug="nani-daman-travel-guide" />

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit</h2>
                  <p>
                    Nani Daman shares Daman's warm, humid coastal climate, so
                    the harbour walk and fort visit are far more pleasant
                    outside peak summer heat.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, pleasant weather (18–30°C) makes walking the jetty and the fort ramparts genuinely comfortable, with harbour activity at its most photogenic in the cool morning light.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, best early or late",
                        text: "Temperatures climb into the mid-30s — plan the harbour walk for early morning or just before sunset rather than midday.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — rough seas, fewer boats",
                        text: "Many fishing boats stay docked or out of the water during the monsoon fishing ban, so the harbour is quieter and the jetty can get slippery underfoot.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak weekend season",
                        text: "Cooler weather draws the most day-trippers to Daman overall — Nani Daman itself stays comparatively uncrowded even then.",
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
                    <strong>Our pick:</strong> An early morning between
                    November and February, when the fishing boats are either
                    heading out or coming in with the night's catch — the
                    harbour is at its most alive.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Nani Daman</h2>
                  <p>
                    Nani Daman is not a separate destination in any real
                    sense — it's one half of Daman town, reached the same
                    way you'd reach Daman itself, with one short local
                    crossing at the end.
                  </p>
                  <ul>
                    <li>
                      <strong>By Train:</strong> Vapi railway station (~12
                      km away), on the Mumbai–Ahmedabad main line, is the
                      nearest railhead with frequent connections — an auto
                      or taxi from Vapi takes roughly 25–30 minutes into
                      Daman town.
                    </li>
                    <li>
                      <strong>By Road:</strong> Daman is about 3 hours from
                      Mumbai and 5 hours from Ahmedabad by road, largely via
                      NH48. Nani Daman sits on the north bank as you enter
                      town from the Vapi/highway side.
                    </li>
                    <li>
                      <strong>From Moti Daman:</strong> A bridge over the
                      Daman Ganga river connects the two halves of town
                      directly — the crossing takes just a few minutes by
                      auto-rickshaw, taxi, or on foot, so it's easy to cover
                      both banks in a single day.
                    </li>
                    <li>
                      <strong>Getting around locally:</strong> Nani Daman
                      itself is compact and very walkable once you're there
                      — the fort, harbour and jetty are all within a short
                      walk of one another.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Approaching from Vapi and
                    the highway, you'll pass through Kachigam, a road
                    junction and industrial locality on Daman's outskirts —
                    it has no real sights of its own, but it's a useful
                    landmark for orientation as you enter town toward Nani
                    Daman.
                  </div>
                </section>

                {/* ── Fort ──────────────────────────────────────────────── */}
                <section id="fort">
                  <h2>Fort of St. Jerome (Nani Daman Fort)</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/blogs/dadra-and-nagar-haveli-and-daman-and-diu/nani-daman/nani-daman-fort-archway-stairway.webp"
                      alt="A weathered stone archway and stairway inside Nani Daman Fort (Fort of St. Jerome)"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The <strong>Fort of St. Jerome</strong>, usually called
                    Nani Daman Fort, stands on the north bank of the Daman
                    Ganga facing Moti Daman Fort across the water. The
                    Portuguese built it between 1615 and 1627, more than
                    thirty years after they finished the larger fort on the
                    south bank. It is compact, about 12,250 square metres,
                    with high stone walls, three bastions and two gateways.
                  </p>
                  <p>
                    The riverside gateway is the part most visitors
                    photograph: a large statue of St. Jerome, the fort's
                    namesake, stands above it, flanked by carved figures.
                    Inside, the main building is the{" "}
                    <strong>Church of Our Lady of the Sea</strong>, known for
                    its panelled altar. Walk up onto the ramparts for views
                    over the fish market and the fishing fleet moored along
                    the river.
                  </p>
                  <p>
                    Allow 30 to 45 minutes. It is small enough to combine
                    easily with the harbour walk, and it makes a good
                    contrast with the much larger walled fort in Moti Daman.
                    Entry and opening hours can change, so check locally
                    before you go.
                  </p>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Source: Daman administration,{" "}
                    <a href="https://ddd.gov.in/places-centres/fort-of-st-jerome-daman/" rel="noopener" target="_blank">
                      Fort of St. Jerome
                    </a>
                    .
                  </p>
                </section>

                {/* ── Harbour ───────────────────────────────────────────── */}
                <section id="harbour">
                  <h2>The Fishing Harbour & Jetty</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/blogs/dadra-and-nagar-haveli-and-daman-and-diu/nani-daman/nani-daman-fishing-boats-harbour.webp"
                      alt="Fishing boats moored at Daman's harbour, with the fort and lighthouse visible across the water"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    This is Nani Daman's real highlight, and the reason it's
                    worth a dedicated visit rather than a quick drive-by.
                    The <strong>fishing harbour and jetty</strong> along the
                    Daman Ganga is a genuinely active working port — rows of
                    colourful wooden trawlers packed tightly along the
                    waterfront, nets drying in the sun, and a steady flow of
                    fishermen, ice crates, and baskets of the day's catch
                    moving between boats and market.
                  </p>
                  <ul>
                    <li>
                      <strong>Boats and colour:</strong> The trawlers
                      themselves are brightly painted and closely moored —
                      a genuinely photogenic sight, especially in the soft
                      light of early morning or late afternoon.
                    </li>
                    <li>
                      <strong>The daily catch:</strong> Depending on the
                      hour, you'll see boats unloading pomfret, prawns,
                      Bombay duck, and other coastal catch straight onto the
                      jetty, sorted rapidly for the local market.
                    </li>
                    <li>
                      <strong>A working community:</strong> This isn't a
                      curated tourist boardwalk — it's the actual economic
                      heartbeat of Nani Daman, and it shows in the ropes,
                      diesel smell, and unhurried, practical rhythm of
                      people at work.
                    </li>
                    <li>
                      <strong>Riverfront views:</strong> From the jetty, you
                      get a clear line of sight across the Daman Ganga to
                      Moti Daman's fort walls on the opposite bank — a good
                      spot to appreciate how the two halves of town face
                      each other.
                    </li>
                  </ul>
                  <blockquote>
                    Skip the fort if you're short on time, but
                    don't skip the harbour — half an hour spent simply
                    watching the boats come and go tells you more about
                    Nani Daman's character than any single monument would.
                  </blockquote>
                </section>

                {/* ── Lighthouse ────────────────────────────────────────── */}
                <section id="lighthouse">
                  <h2>Views Across to Moti Daman</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/blogs/dadra-and-nagar-haveli-and-daman-and-diu/nani-daman/daman-lighthouse-old-and-new-towers.webp"
                      alt="The old and new Daman lighthouse towers inside Moti Daman Fort"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    From the Nani Daman riverfront you look straight across
                    the Daman Ganga to the walls of Moti Daman Fort. Daman's
                    old and new <strong>lighthouse</strong> towers stand
                    inside that fort, on the south bank, so they belong to a
                    Moti Daman visit rather than this one.
                  </p>
                  <p>
                    The riverfront is still worth a few minutes: boats
                    passing in and out of the harbour, the two forts facing
                    each other across the estuary, and a quieter vantage
                    point away from the busier jetty. To see the lighthouse
                    up close, cross the bridge and walk through{" "}
                    <Link href="/blog/moti-daman-fort-travel-guide">Moti Daman Fort</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Local Seafood & Where to Eat</h2>
                  <p>
                    Given Nani Daman's identity as a fishing harbour, fresh
                    seafood is unsurprisingly the thing to eat here — and
                    it's about as fresh as it gets, given how close the
                    catch is to the table.
                  </p>
                  <ul>
                    <li>
                      <strong>Pomfret and prawns:</strong> Staples at
                      seafront and local eateries, usually grilled or
                      pan-fried in a coastal Gujarati style — simple
                      preparations that let the freshness carry the dish.
                    </li>
                    <li>
                      <strong>Bombay duck (bombil):</strong> A regional
                      favourite, often fried crisp, and easy to find given
                      Nani Daman's harbour supply.
                    </li>
                    <li>
                      <strong>Small local eateries near the harbour:</strong>{" "}
                      Unpretentious, no-frills places close to the jetty
                      tend to serve the day's actual catch rather than
                      frozen stock — worth seeking out over more polished
                      restaurants elsewhere in Daman.
                    </li>
                    <li>
                      <strong>Duty-free drinks:</strong> As with the rest of
                      Daman, alcohol is sold tax-free, making a cold beer
                      alongside fresh seafood a popular, affordable
                      combination.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Visit</h2>
                  <p>
                    Nani Daman doesn't need a full day on its own — it works
                    best as a focused half-day walk, easily combined with
                    Moti Daman or Devka Beach on either side of it.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Harbour First",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early to catch boats coming in with the day's catch",
                          "Walk the jetty, watch the sorting and unloading",
                          "Photograph the boats in the soft early light",
                        ],
                      },
                      {
                        day: "Mid-Morning",
                        title: "Fort & Old Lanes",
                        color: "bg-forest-600",
                        activities: [
                          "Wander the older streets near the riverfront",
                          "Visit the Fort of St. Jerome: the statue-topped gateway, the church and the ramparts",
                          "Take in the view across the river to Moti Daman",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Riverfront & Lunch",
                        color: "bg-sky-600",
                        activities: [
                          "Walk the riverfront for views across to Moti Daman Fort",
                          "Lunch at a local eatery near the harbour — fresh seafood",
                          "Cross the bridge to Moti Daman for the afternoon, if continuing",
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
                          <h3 data-box
                            className="font-bold text-stone-900 mb-3"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {d.title}
                          </h3>
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
                    * Many visitors pair this half-day walk with an
                    afternoon at{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>{" "}
                    or a longer look at{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman Fort
                    </Link>{" "}
                    on the opposite bank.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown (Nani Daman, per day)</h2>
                  <p>
                    Nani Daman itself costs very little to explore — most of
                    a visitor's spend here goes toward food. The harbour and
                    riverfront are free to walk, and the fort has no
                    significant entry cost (check locally, as this can
                    change).
                  </p>
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
                            "Accommodation/night (Daman town)",
                            "₹1,200",
                            "₹3,500",
                            "₹8,000",
                          ],
                          ["Food/day (seafood meals)", "₹400", "₹1,000", "₹2,200"],
                          [
                            "Local transport (auto/rickshaw)",
                            "₹150",
                            "₹400",
                            "₹1,000",
                          ],
                          ["Sightseeing (fort, harbour, riverfront)", "Free", "Free", "Free"],
                          [
                            "Half-day total (approx.)",
                            "₹600",
                            "₹1,500",
                            "₹3,500",
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
                    * Excludes travel to Daman itself. Figures assume
                    accommodation is shared with a wider Daman trip rather
                    than booked for Nani Daman alone.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Go early for the harbour:</strong> Boats
                      coming in with the catch and the general bustle peak
                      in the early morning and again in the late afternoon
                      — midday tends to be quieter.
                    </li>
                    <li>
                      <strong>Be respectful around the jetty:</strong> This
                      is a working fishing harbour, not a staged attraction
                      — keep clear of nets, loading operations, and
                      fishermen at work, and ask before photographing people
                      closely.
                    </li>
                    <li>
                      <strong>Wear footwear that can get wet or grimy:</strong>{" "}
                      Jetty surfaces near the boats are often damp, fishy,
                      and uneven — this isn't a promenade walk.
                    </li>
                    <li>
                      <strong>Keep the fort short:</strong> The Fort of St.
                      Jerome is compact; 30 to 45 minutes covers the gateway,
                      the church and a walk on the ramparts.
                    </li>
                    <li>
                      <strong>Combine with Moti Daman:</strong> The bridge
                      crossing takes minutes, so there's little reason to
                      visit Nani Daman without also seeing Moti Daman Fort
                      and Bom Jesus Church on the same trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Small eateries and
                      vendors near the harbour mostly deal in cash rather
                      than cards.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h3 data-box
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h3>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Visit the harbour early morning for the most activity",
                          "Walk the Fort of St. Jerome ramparts for river views",
                          "Try freshly caught seafood at a harbourside eatery",
                          "Combine the visit with Moti Daman across the bridge",
                          "Stay mindful of fishing operations on the jetty",
                          "Carry cash for small local eateries and vendors",
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
                      <h3 data-box
                        className="font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don't
                      </h3>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Expect a fort as large as Moti Daman's: this one is compact",
                          "Walk through nets, catch, or loading areas uninvited",
                          "Visit the jetty in your best shoes or clothes",
                          "Skip Moti Daman — the bridge crossing takes minutes",
                          "Photograph fishermen closely without asking first",
                          "Plan a full day here — half a day is enough",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Nani Daman with{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman's fort and church
                    </Link>{" "}
                    across the bridge, or an evening at{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>{" "}
                    for a well-rounded day in Daman. For the wider Union
                    Territory,{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      see our full Daman & Diu guide
                    </Link>
                    .
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
                        <h3 data-box
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {f.q}
                        </h3>
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
                  "Nani Daman",
                  "Daman",
                  "Daman and Diu",
                  "Fort of St. Jerome",
                  "Fishing Harbour",
                  "Church of Our Lady of the Sea",
                  "Portuguese Heritage",
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

              <RelatedPostsGrid currentSlug="nani-daman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nani-daman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
