// src/app/blog/kasol-kheerganga-trek/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Kasol & Kheerganga Trek Guide 2025: The Complete Parvati Valley Trail",
  description:
    "The complete guide to Kasol and the Kheerganga trek in 2025. Everything you need — how to get there, the trek route, camping at Kheerganga hot springs, Chalal, Tosh, Malana, where to stay, best cafes, and honest tips for the Parvati Valley trail.",
  keywords:
    "Kasol travel guide, Kheerganga trek, Parvati Valley, Kasol cafes, Tosh village, Malana village, Kheerganga hot springs, Himachal Pradesh trek, Kasol itinerary 2025, Barshaini trek",
  openGraph: {
    title:
      "Kasol & Kheerganga Trek Guide 2025: The Complete Parvati Valley Trail",
    description:
      "Follow the Parvati River to steaming hot springs through pine forests and Himalayan villages — the complete Kasol and Kheerganga guide.",
    url: "https://explore.kudozz.in/blog/kasol-kheerganga-trek",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/related/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Kasol riverside and Parvati Valley pine forest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasol & Kheerganga Trek Guide 2025",
    description:
      "Parvati Valley cafes, forest trails and Himalayan hot springs — everything you need for Kasol and Kheerganga.",
    images: ["/images/related/kasol.jpg"],
  },
  alternates: {
    canonical: "https://explore.kudozz.in/blog/kasol-kheerganga-trek",
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
          "@type": "TravelGuide",
          headline:
            "Kasol & Kheerganga Trek Guide 2025: The Complete Parvati Valley Trail",
          description:
            "The complete guide to Kasol and the Kheerganga trek in 2025.",
          image: "https://explore.kudozz.in/images/related/kasol.jpg",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://explore.kudozz.in/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://explore.kudozz.in/blog/kasol-kheerganga-trek",
          },
          about: {
            "@type": "Place",
            name: "Kasol",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Himachal Pradesh",
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
                item: "https://explore.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://explore.kudozz.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Kasol & Kheerganga Trek Guide",
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
  { id: "introduction", title: "Why Kasol & Kheerganga?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kasol", level: 2 },
  { id: "kasol-town", title: "Exploring Kasol", level: 2 },
  { id: "chalal", title: "→ Chalal Village", level: 3 },
  { id: "cafes", title: "→ Kasol's Café Scene", level: 3 },
  { id: "side-trips", title: "Side Trips from Kasol", level: 2 },
  { id: "tosh", title: "→ Tosh Village", level: 3 },
  { id: "malana", title: "→ Malana Village", level: 3 },
  { id: "manikaran", title: "→ Manikaran Sahib", level: 3 },
  { id: "kheerganga-trek", title: "The Kheerganga Trek", level: 2 },
  { id: "trek-routes", title: "→ Two Trek Routes", level: 3 },
  { id: "trek-day", title: "→ What to Expect on Trail", level: 3 },
  { id: "hot-springs", title: "→ The Hot Springs", level: 3 },
  { id: "camping", title: "→ Camping at Kheerganga", level: 3 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KasolKheergangaPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/related/kasol.jpg"
              alt="Kasol — pine forests along the Parvati River in Himachal Pradesh"
              className="w-full h-full object-cover"
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
                {
                  label: "Himachal Pradesh",
                  href: "/blog?category=himachal-pradesh",
                },
                { label: "Kasol & Kheerganga", href: null },
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
                "Kasol",
                "Kheerganga",
                "Parvati Valley",
                "Trekking",
                "Himachal Pradesh",
                "Backpacking",
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
              Kasol & Kheerganga Trek Guide 2025: The Complete Parvati Valley
              Trail
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Roaring rivers, pine forests, Israeli cafes, ancient villages and
              a natural hot spring at 2,960 metres — the Parvati Valley is
              India's most legendary backpacker trail and a trek that earns
              every step.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Himachal Pradesh, India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,800 words",
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
                      d={m.d}
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
                  <h2>Why Kasol & Kheerganga?</h2>
                  <p>
                    The <strong>Parvati Valley</strong> is one of those places
                    that gets under your skin the moment you arrive. The Parvati
                    River — jade-green, ice-cold, furiously loud — runs the
                    length of a valley that rises from 1,580 metres at Bhuntar
                    to over 3,000 metres at the foot of the Mantalai glacier.
                    Along its banks sit some of the most unconventional villages
                    in the Himalayas: Kasol with its improbable mix of Israeli
                    travellers, Pahadi locals, and mountain dogs sleeping in
                    cafes; Chalal, reachable only on foot; Tosh, perched so high
                    it looks painted on the sky; and Malana, one of the world's
                    oldest democracies, sealed off from outsiders by centuries
                    of proud isolation.
                  </p>
                  <p>
                    At the end of the valley's most accessible long trail is
                    <strong> Kheerganga</strong> — a meadow at 2,960 metres with
                    a natural hot spring, a Shiva temple, and views across a
                    ring of snow-capped peaks that make the 12-km climb feel
                    like the most reasonable thing you've ever done. Soaking in
                    the geothermal pool as snow falls around you at dusk is one
                    of India's great travel experiences.
                  </p>
                  <p>
                    This guide covers everything: Kasol as a base, all the side
                    trips worth making, the two routes to Kheerganga, what to
                    eat, where to sleep, and the things that will make your
                    Parvati Valley trip genuinely great rather than just
                    Instagram-adequate.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Kasol & Kheerganga at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Kullu, Himachal Pradesh",
                        },
                        {
                          icon: "🏔️",
                          label: "Kasol Altitude",
                          value: "1,580 m (5,183 ft)",
                        },
                        {
                          icon: "🏔️",
                          label: "Kheerganga Alt.",
                          value: "2,960 m (9,711 ft)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Mar – Jun, Sep – Nov",
                        },
                        {
                          icon: "🥾",
                          label: "Trek Distance",
                          value: "12–14 km (one way)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹2,500",
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
                  <h2>Best Time to Visit Kasol & Kheerganga</h2>
                  <p>
                    The Parvati Valley has two excellent seasons separated by a
                    heavy monsoon. Kheerganga itself can be visited almost
                    year-round, but the trail conditions and overall experience
                    vary significantly.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "March – June",
                        emoji: "🌸",
                        color: "bg-pink-50 border-pink-200",
                        mood: "Spring & early summer — excellent",
                        text: "The valley shakes off winter snow by March. Rhododendrons bloom on the trek. By May the meadow at Kheerganga is green and the hot springs are blissfully warm against cold nights. June gets busy with school holiday crowds.",
                      },
                      {
                        season: "July – August",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid for Kheerganga",
                        text: "Heavy rainfall makes the Kheerganga trail extremely slippery and landslide-prone. The Parvati River floods, washing out the riverside sections of the path. Many locals and seasoned trekkers still come to Kasol — the valley is dramatically green — but Kheerganga trek is ill-advised.",
                      },
                      {
                        season: "September – November",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Post-monsoon is when the Parvati Valley is at its absolute finest. The skies clear, the forest turns gold and amber, the river is powerful but not flooded. Kheerganga meadow has knee-high grass. Crowds thin after October. Snow arrives at Kheerganga by late November.",
                      },
                      {
                        season: "December – February",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Winter — beautiful but demanding",
                        text: "Kasol in winter is magic — quiet, snow-covered, and peaceful. The hot springs at Kheerganga are at their best when surrounded by snow. The trek is technically doable with micro-spikes and proper gear but requires experience. Many cafes and guesthouses close. For the prepared, unmissable.",
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
                    <strong>Our pick:</strong> Early October. The monsoon has
                    cleared completely, the forest is at peak colour, the
                    Kheerganga meadow still has green grass before the winter
                    freeze, and the crowds of September have thinned. The nights
                    are cold enough to make the hot springs feel miraculous.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kasol</h2>
                  <p>
                    Kasol sits 30 km from Bhuntar (which has an airport) and 510
                    km from Delhi. The approach from Delhi via Bhuntar or
                    Chandigarh is comfortable and well-served.
                  </p>
                  <ul>
                    <li>
                      <strong>From Delhi (most common):</strong> Overnight Volvo
                      buses run from ISBT Kashmiri Gate directly to Kasol or
                      Bhuntar (₹700–₹1,200, 12–14 hours). Private operators like
                      HPTDC and RedBus have daily departures from 5–7 PM. Arrive
                      in Kasol by morning. Book 3–5 days ahead in peak season.
                    </li>
                    <li>
                      <strong>By Air + Bus:</strong> Fly to Bhuntar Airport
                      (KUU) from Delhi (50 min, ₹3,000–₹8,000 one way). From
                      Bhuntar, shared taxis or local buses run to Kasol (30 km,
                      45 min, ₹50–₹80 by bus or ₹500–₹600 by taxi).
                    </li>
                    <li>
                      <strong>Via Manali:</strong> If combining with a Manali
                      trip, take a local bus or taxi from Manali to Bhuntar (70
                      km, 2 hrs), then onward to Kasol. An excellent extension
                      to a Himachal Pradesh circuit.
                    </li>
                    <li>
                      <strong>By Train + Bus:</strong> Take a train to
                      Chandigarh or Ambala, then a bus to Bhuntar or Kasol
                      directly. The Himalayan Queen to Kalka and then onward is
                      the scenic option.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The bus drops you at the Kasol
                    main market. If your guesthouse is in Old Kasol (across the
                    bridge) or Chalal, you'll need to walk 5–10 minutes. Don't
                    book vehicles or "packages" from touts at the bus stop —
                    walk to your guesthouse and arrange activities directly.
                  </div>
                </section>

                {/* ── Kasol Town ────────────────────────────────────────── */}
                <section id="kasol-town">
                  <h2>Exploring Kasol</h2>
                  <p>
                    <strong>Kasol</strong> is a small village that has become
                    one of India's most famous backpacker destinations — largely
                    thanks to its Israeli traveller community, extraordinary
                    natural setting beside the Parvati River, and proximity to
                    the Kheerganga trail. The village itself is split into two
                    parts: the main market (where buses arrive, cafes line the
                    road, and guesthouses are stacked on the hill) and Old Kasol
                    (across the footbridge, quieter, more local, where the river
                    is loudest).
                  </p>
                  <p>
                    Most people use Kasol as a base and spend 1–2 days here
                    before trekking. Don't rush it — there's more to do and see
                    here than it first appears.
                  </p>

                  <section id="chalal">
                    <h3>Chalal Village</h3>
                    <p>
                      A 20-minute walk from Kasol along the riverbank (no roads,
                      foot traffic only),<strong> Chalal</strong> is the village
                      that Kasol used to be — quieter, more authentic, with
                      family-run guesthouses, homemade food, and the Parvati
                      River literally at the doorstep. The path from Kasol
                      crosses a swinging bridge and follows a narrow trail
                      through pine and walnut trees.
                    </p>
                    <p>
                      Chalal is where many long-stay travellers prefer to base
                      themselves — the vibe is more relaxed and local than Kasol
                      main market, the guesthouses are cheaper, and the evening
                      sound is the river rather than café playlists. Several
                      excellent budget guesthouses sit right on the riverbank
                      (₹400–₹800/night). The walk to Chalal itself is worth
                      doing even if you stay in Kasol — it's one of the most
                      beautiful short walks in the valley.
                    </p>
                  </section>

                  <section id="cafes">
                    <h3>Kasol's Café Scene</h3>
                    <p>
                      Kasol has the most distinctive café culture in the
                      Himalayas — a combination of Israeli food traditions,
                      Pahadi hospitality, and the kind of all-day traveller
                      hangout culture that develops when people arrive for a
                      weekend and stay for a month. The cafes here serve Israeli
                      breakfasts, hummus, shakshuka, falafel, pasta, and
                      Himachali thalis, often from the same menu.
                    </p>

                    <div className="space-y-4 my-6">
                      {[
                        {
                          name: "Moon Dance Café",
                          type: "Best overall",
                          tagColor: "bg-forest-100 text-forest-700",
                          desc: "The most beloved café in Kasol — a multi-level wooden structure with river views, warm lighting, and a menu that spans Israeli breakfast to wood-fired pizza. The shakshuka and fresh juice are exceptional. Fills up by 9 AM on peak days.",
                          must: "Shakshuka, banana pancakes, fresh apple juice",
                        },
                        {
                          name: "Little Italy",
                          type: "Best pasta",
                          tagColor: "bg-amber-100 text-amber-700",
                          desc: "The go-to for anything Italian in the Himalayas — fresh pasta, wood-fired focaccia, and a surprisingly good tiramisu. Run by the same family for over a decade. The terrace has Parvati River views.",
                          must: "Penne arrabiata, garlic bread, tiramisu",
                        },
                        {
                          name: "Evergreen Café",
                          type: "Most authentic Himachali",
                          tagColor: "bg-sky-100 text-sky-700",
                          desc: "Where the locals eat. A no-frills wooden shack with some of the best Himachali thali in the valley — thick dal, sabzi, rice, and roti for ₹120–₹150. Order the aloo paratha for breakfast.",
                          must: "Himachali thali, aloo paratha, masala chai",
                        },
                        {
                          name: "Stone Garden",
                          type: "Best for long afternoons",
                          tagColor: "bg-purple-100 text-purple-700",
                          desc: "A riverside garden café that rewards lingering — hammocks strung between pines, slow service that's part of the experience, cold Parvati water nearby, and a menu strong on snacks and momos.",
                          must: "Veg momos, lemon soda, hummus plate",
                        },
                      ].map((cafe) => (
                        <div
                          key={cafe.name}
                          className="bg-white border border-stone-200 rounded-xl p-5 hover:border-forest-200 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4
                              className="font-bold text-stone-900"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {cafe.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${cafe.tagColor}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {cafe.type}
                            </span>
                          </div>
                          <p
                            className="text-sm text-stone-600 leading-relaxed mb-2"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {cafe.desc}
                          </p>
                          <p
                            className="text-xs text-forest-700 font-medium"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            Must-order: {cafe.must}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </section>

                {/* ── Side Trips ────────────────────────────────────────── */}
                <section id="side-trips">
                  <h2>Side Trips from Kasol</h2>
                  <p>
                    Kasol is a hub for some of the most interesting villages and
                    day trips in Himachal Pradesh. These are worth building time
                    for — they make the difference between a standard backpacker
                    trip and one that genuinely immerses you in the Parvati
                    Valley.
                  </p>

                  <section id="tosh">
                    <h3>Tosh Village</h3>
                    <img
                      src="/images/related/kasol.jpg"
                      alt="Tosh village perched high above Parvati Valley"
                      className="w-full rounded-xl my-6 h-64 object-cover"
                    />
                    <p>
                      <strong>Tosh</strong> sits at 2,400 metres at the end of a
                      side valley branching north from Barshaini — a 22-km drive
                      from Kasol and then a 45-minute uphill walk from the road
                      (or a jeep if available). The village clings to a steep
                      ridge with views down the Tosh nullah and across to the
                      snow-capped peaks of the Pin Parbati range. It's one of
                      the most dramatically positioned villages in the Parvati
                      Valley.
                    </p>
                    <p>
                      Tosh has its own small guesthouse and café scene that
                      developed as an overflow from Kasol — quieter, colder,
                      with no road access and views that reward the walk
                      entirely. Pink Floyd Café at the top of the village has an
                      extraordinary terrace. Many people do Tosh as a day trip
                      from Kasol; others stay a night or two and find it hard to
                      leave.
                    </p>
                    <ul>
                      <li>
                        <strong>Getting there:</strong> Bus or shared taxi from
                        Kasol to Barshaini (22 km, ₹50 by bus), then walk 4 km
                        uphill (1–1.5 hrs) or hire a jeep (₹300–₹400)
                      </li>
                      <li>
                        <strong>Altitude:</strong> 2,400 m — a good
                        acclimatisation step before Kheerganga
                      </li>
                      <li>
                        <strong>Stay:</strong> Pink Floyd Café (guesthouse rooms
                        from ₹500–₹800), Himalayan Inn (₹600–₹1,000)
                      </li>
                    </ul>
                  </section>

                  <section id="malana">
                    <h3>Malana Village</h3>
                    <p>
                      <strong>Malana</strong> is one of India's most remarkable
                      and most written-about villages — an ancient settlement in
                      a sealed valley north of Kasol, accessible only on foot
                      via a steep 3-km trail from Malana Dam (14 km from Kasol
                      by road). The village claims to be one of the world's
                      oldest democracies, with its own parliament, laws, and
                      customs that predate recorded history. Its people consider
                      themselves descendants of Alexander the Great's soldiers
                      (genetic evidence is ambiguous but the claim persists).
                    </p>
                    <p>
                      Malana has extremely strict rules about contact with
                      outsiders: do not touch any walls, temples, or people. Do
                      not enter houses uninvited. A "pollution tax" of ₹100–₹300
                      is charged at entry. Photography of people is not
                      permitted without explicit consent. Despite the
                      restrictions (which exist for cultural preservation, not
                      hostility), the village and the dramatic valley setting
                      are genuinely extraordinary.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Important:</strong> Malana is widely known as a
                      source of charas (cannabis resin). This is illegal in
                      India — possession and purchase are criminal offences.
                      Arrests of tourists happen regularly. Do not buy, carry,
                      or use. This is a firm line.
                    </div>
                  </section>

                  <section id="manikaran">
                    <h3>Manikaran Sahib</h3>
                    <p>
                      Just 5 km from Kasol on the main road,
                      <strong> Manikaran</strong> is one of the holiest sites in
                      both Hinduism and Sikhism — a pilgrimage town built around
                      natural boiling hot springs that emerge directly from the
                      earth. The Sikh Gurudwara here cooks langar (community
                      food) using the natural hot spring water and feeds
                      thousands of pilgrims and travellers daily, free of
                      charge.
                    </p>
                    <p>
                      The atmosphere in Manikaran is entirely different from
                      Kasol — devotional, communal, and deeply moving. Bathing
                      in the hot spring water (there are public bathing ghats
                      separate from the private ones), eating langar in the
                      Gurudwara, and sitting by the Parvati River watching
                      pilgrims are experiences that put the backpacker
                      atmosphere of Kasol in useful perspective.
                    </p>
                    <ul>
                      <li>
                        <strong>Getting there:</strong> 5 km from Kasol by
                        shared bus (₹20) or 20-minute walk along the river
                      </li>
                      <li>
                        <strong>Dress code:</strong> Cover head and remove shoes
                        before entering the Gurudwara. Cloth head covers
                        available at the entrance.
                      </li>
                      <li>
                        <strong>Langar timings:</strong> Free food served
                        throughout the day — most active at lunch (12–2 PM)
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Kheerganga Trek ───────────────────────────────────── */}
                <section id="kheerganga-trek">
                  <h2>The Kheerganga Trek</h2>
                  <p>
                    The <strong>Kheerganga trek</strong> is the main event of
                    the Parvati Valley — a 12–14 km trail (one way, depending on
                    route) that climbs from 1,800 metres at Barshaini to 2,960
                    metres at the Kheerganga meadow. It's classified as
                    easy-to-moderate, suitable for first-time trekkers, and
                    rewards with a natural hot spring at the top that is quite
                    simply one of the greatest payoffs at the end of any trail
                    in India.
                  </p>

                  <section id="trek-routes">
                    <h3>Two Trek Routes</h3>

                    <div className="grid sm:grid-cols-2 gap-5 my-6">
                      {[
                        {
                          name: "Nakthan Route",
                          badge: "Recommended",
                          badgeColor: "bg-forest-100 text-forest-700",
                          distance: "12 km one way",
                          time: "5–6 hours",
                          difficulty: "Easy–Moderate",
                          via: "Barshaini → Nakthan village → forest → Kheerganga",
                          pros: [
                            "Passes through Nakthan village (chai stops, basic snacks)",
                            "Wider trail with better signage",
                            "Better shade through forest section",
                            "More established camping spots en route",
                          ],
                          cons: [
                            "Slightly longer than the riverside route",
                            "Less dramatic river scenery",
                          ],
                        },
                        {
                          name: "Riverside Route (Kalga)",
                          badge: "More scenic",
                          badgeColor: "bg-sky-100 text-sky-700",
                          distance: "14 km one way",
                          time: "6–7 hours",
                          difficulty: "Moderate",
                          via: "Barshaini → Kalga village → Parvati riverbank → Kheerganga",
                          pros: [
                            "Follows the Parvati River through dramatic gorge",
                            "More wild and less trafficked",
                            "Kalga is a beautiful overnight stop in itself",
                            "Stunning river crossings in dry season",
                          ],
                          cons: [
                            "River sections can be dangerous after heavy rain",
                            "Less clear trail marking in sections",
                          ],
                        },
                      ].map((route) => (
                        <div
                          key={route.name}
                          className="bg-white border border-stone-200 rounded-xl p-5"
                        >
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <h4
                              className="font-bold text-stone-900"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {route.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${route.badgeColor}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {route.badge}
                            </span>
                          </div>
                          <div
                            className="grid grid-cols-3 gap-2 mb-3"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {[
                              { label: "Distance", value: route.distance },
                              { label: "Time", value: route.time },
                              { label: "Level", value: route.difficulty },
                            ].map(({ label, value }) => (
                              <div key={label}>
                                <span className="text-stone-400 text-[10px] block">
                                  {label}
                                </span>
                                <span className="text-stone-800 text-xs font-semibold">
                                  {value}
                                </span>
                              </div>
                            ))}
                          </div>
                          <p
                            className="text-xs text-stone-500 mb-3"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            📍 {route.via}
                          </p>
                          <div style={{ fontFamily: "var(--font-dm-sans)" }}>
                            <p className="text-xs font-semibold text-forest-700 mb-1">
                              Pros
                            </p>
                            {route.pros.map((p) => (
                              <div
                                key={p}
                                className="flex items-start gap-1.5 text-xs text-stone-600 mb-1"
                              >
                                <span className="text-forest-500 flex-shrink-0 mt-0.5">
                                  ✓
                                </span>
                                {p}
                              </div>
                            ))}
                            <p className="text-xs font-semibold text-red-600 mb-1 mt-2">
                              Cons
                            </p>
                            {route.cons.map((c) => (
                              <div
                                key={c}
                                className="flex items-start gap-1.5 text-xs text-stone-500 mb-1"
                              >
                                <span className="text-red-400 flex-shrink-0 mt-0.5">
                                  →
                                </span>
                                {c}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Classic recommendation:</strong> Take the
                      Nakthan route up (better for a loaded pack, clearer trail)
                      and the Kalga/riverside route down (lighter pack, enjoy
                      the river scenery on descent). Best of both.
                    </div>
                  </section>

                  <section id="trek-day">
                    <h3>What to Expect on the Trail</h3>
                    <p>
                      The trail begins at <strong>Barshaini</strong> (1,800 m) —
                      the road-head village where the bus or taxi drops you, 22
                      km from Kasol. There's no road beyond Barshaini into the
                      upper valley (Tosh is reached via a side path). Most
                      trekkers set off between 7–9 AM.
                    </p>

                    <div className="space-y-4 my-6">
                      {[
                        {
                          km: "0–3 km",
                          title: "Barshaini to Nakthan (Nakthan route)",
                          color: "bg-sky-600",
                          desc: "Initial climb through terraced fields and small homesteads. The gradient is steady but manageable. Nakthan village (2,100 m) has two or three tea stalls — stop for chai and local biscuits. The views back down the Parvati Valley begin to open up.",
                        },
                        {
                          km: "3–7 km",
                          title: "Forest Section",
                          color: "bg-forest-600",
                          desc: "The trail enters dense pine and fir forest — the most beautiful section of the trek. The path is well-defined, the light through the canopy is extraordinary in the morning, and the air smells of pine resin and earth. This section has a few stream crossings on stepping stones.",
                        },
                        {
                          km: "7–10 km",
                          title: "Climb to Rudra Nag",
                          color: "bg-forest-500",
                          desc: "The trail steepens after the forest. A waterfall (Rudra Nag) marks the halfway point — a natural spring considered sacred, where most trekkers stop to fill water bottles and rest. The treeline begins to thin and views across the valley widen dramatically.",
                        },
                        {
                          km: "10–12 km",
                          title: "Final push to Kheerganga Meadow",
                          color: "bg-amber-600",
                          desc: "The last 2 km climbs through open shrubland and the occasional snow patch (Oct–May). The meadow appears suddenly over a ridge — a broad, gently sloping grassland ringed by peaks, with the hot spring pool and Shiva temple visible ahead. The sense of arrival here is genuine.",
                        },
                      ].map((seg) => (
                        <div key={seg.km} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div
                              className={`${seg.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {seg.km}
                            </div>
                          </div>
                          <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                            <h4
                              className="font-bold text-stone-900 mb-2"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {seg.title}
                            </h4>
                            <p
                              className="text-sm text-stone-600 leading-relaxed m-0"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {seg.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="hot-springs">
                    <h3>The Kheerganga Hot Springs</h3>
                    <p>
                      At the top of the meadow, fed by geothermal activity deep
                      beneath the Himalayan rock, the
                      <strong> Kheerganga hot spring</strong> is the reason most
                      people make the climb. The water emerges at approximately
                      45°C and flows into two large pools — one for men, one for
                      women — managed by the forest department. Entry is ₹50 per
                      person.
                    </p>
                    <p>
                      The pools are at their most extraordinary in the evening
                      when the temperature drops and steam rises against the
                      darkening sky. In winter, soaking in 45°C water with snow
                      falling around you — the peaks lit by a full moon and the
                      sound of the Parvati River far below — is one of those
                      travel experiences that genuinely defies adequate
                      description. Go after 5 PM to avoid the day-tripper
                      crowds.
                    </p>
                    <ul>
                      <li>
                        <strong>Entry:</strong> ₹50 per person
                      </li>
                      <li>
                        <strong>Timings:</strong> 6 AM – 9 PM (approx, varies by
                        season)
                      </li>
                      <li>
                        <strong>Carry:</strong> A towel, flip-flops (the pool
                        floor is slippery), and a change of clothes
                      </li>
                      <li>
                        <strong>Temperature:</strong> ~42–45°C in the pool —
                        very hot; acclimatise gradually, especially at altitude
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Arrive at Kheerganga by 4 PM
                      to set up camp, eat dinner, and hit the hot springs at
                      dusk when the crowds have thinned and the light is at its
                      most beautiful. Stargazing from the meadow after the
                      spring is exceptional — at 2,960 m there's minimal light
                      pollution.
                    </div>
                  </section>

                  <section id="camping">
                    <h3>Camping at Kheerganga</h3>
                    <p>
                      The meadow at Kheerganga has a cluster of permanent tent
                      camps operated by local villagers — basic but functional,
                      with sleeping bags, meals, and sometimes charging points
                      for phones (via solar panels). Camping here overnight is
                      strongly recommended: the sunset, the hot spring in the
                      evening, the night sky, and the sunrise over the peaks are
                      the whole point.
                    </p>
                    <ul>
                      <li>
                        <strong>Tent camps:</strong> ₹300–₹500 per person per
                        night (includes tent and sleeping bag; meals extra)
                      </li>
                      <li>
                        <strong>Meals at camp:</strong> Basic dal-rice, Maggi,
                        chapati, tea — ₹80–₹150 per meal
                      </li>
                      <li>
                        <strong>Bring:</strong> Warm layers (it gets to 5–8°C
                        even in summer), a headtorch, toilet paper, and snacks
                        from Kasol
                      </li>
                      <li>
                        <strong>Pack out:</strong> All plastic waste — there is
                        no waste management at Kheerganga and the meadow suffers
                        significant plastic pollution. Be part of the solution.
                      </li>
                      <li>
                        <strong>Connectivity:</strong> BSNL has weak signal at
                        Kheerganga; Jio and Airtel have none. Tell someone your
                        plan before leaving Kasol.
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation in the Parvati Valley is spread across several
                    villages — Kasol, Chalal, Tosh, Kalga, and Kheerganga
                    itself. Each has a distinct vibe.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹300–₹800/night",
                        picks: [
                          "Chalal riverside guesthouses (best value)",
                          "Zostel Kasol",
                          "Budget rooms in Old Kasol",
                          "Kheerganga tent camps (₹300–₹500)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏡",
                        range: "₹800–₹2,500/night",
                        picks: [
                          "The Parvati Retreat (Kasol)",
                          "Kalga Apple Orchard Guesthouse",
                          "Tosh Guesthouse (Pink Floyd area)",
                          "Camp Wildberry (Kasol)",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "✨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Kanasar Eco Camp",
                          "The Himalayan Village (Kasol)",
                          "Riverside cottages via Airbnb",
                          "Woodstock Cottages",
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
                    Chalal offers the best value in the entire valley — quiet,
                    beautiful, riverside, and 5 minutes from Kasol's cafes. If
                    you haven't pre-booked, walk to Chalal and ask around for
                    rooms — the family guesthouses here rarely appear on booking
                    sites but cost ₹400–₹600 for a clean double room with a
                    river-facing window.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Kasol</h2>
                  <p>
                    The food in Kasol is among the most eclectic in any
                    Himalayan town — the Israeli influence runs deep, but local
                    Himachali food is excellent and far cheaper. Here's what to
                    eat and where.
                  </p>
                  <ul>
                    <li>
                      <strong>Israeli breakfast:</strong> Shakshuka (eggs
                      poached in spiced tomato), hummus with fresh pita, labneh,
                      and fresh juice — available at Moon Dance, Bhoj
                      Restaurant, and most cafes. ₹200–₹350.
                    </li>
                    <li>
                      <strong>Himachali thali:</strong> The best-value meal in
                      the valley — thick dal, two sabzis, rice, roti, and pickle
                      for ₹120–₹180. Order at Evergreen Café or any dhaba near
                      the bus stop.
                    </li>
                    <li>
                      <strong>Trout:</strong> Fresh Parvati River trout is
                      available at several restaurants — pan-fried or grilled
                      with garlic and herbs. ₹250–₹400 for a full fish.
                    </li>
                    <li>
                      <strong>Momos:</strong> The steamed veg or cheese momos at
                      most cafes are excellent — the altitude gives the fillings
                      a particular richness. ₹80–₹120 for a plate.
                    </li>
                    <li>
                      <strong>Maggi and chai on the trail:</strong> Every
                      village between Barshaini and Kheerganga has at least one
                      tea stall selling Maggi noodles (₹60–₹80) and masala chai
                      (₹20–₹30). These are trekking staples for good reason —
                      quick energy, hot, and comforting.
                    </li>
                    <li>
                      <strong>Local apples and walnuts:</strong> The Parvati
                      Valley has excellent apple orchards — buy fresh apples and
                      walnuts directly from villagers in September–November
                      harvest season. Cheapest and freshest in the valley.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Kasol & Kheerganga Itinerary</h2>
                  <p>
                    Five days gives you time to do Kasol properly, cover the
                    best side trips, and do the Kheerganga trek without rushing
                    the descent.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Kasol Exploration",
                        color: "bg-forest-600",
                        activities: [
                          "Arrive from Delhi on the overnight bus (depart previous evening)",
                          "Check in to Chalal or Old Kasol — drop your bag and walk to the river",
                          "Afternoon: Walk to Chalal along the riverside path",
                          "Evening: Moon Dance Café for dinner, Parvati River at dusk",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Manikaran & Tosh",
                        color: "bg-forest-500",
                        activities: [
                          "Morning: Walk to Manikaran Sahib (5 km), eat langar at the Gurudwara",
                          "Afternoon: Bus to Barshaini, then walk or jeep up to Tosh village",
                          "Sunset from Tosh ridge — Pink Floyd Café terrace",
                          "Overnight at Tosh (₹500–₹800) for acclimatisation at 2,400 m",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Trek to Kheerganga",
                        color: "bg-amber-600",
                        activities: [
                          "Depart Tosh early — walk down to Barshaini (1 hr)",
                          "Begin Kheerganga trek via Nakthan route (7–9 AM start)",
                          "Chai at Nakthan village, picnic lunch at Rudra Nag waterfall",
                          "Arrive Kheerganga by 4 PM — set up camp, hot spring at dusk",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Kheerganga Rest Day & Descent",
                        color: "bg-amber-500",
                        activities: [
                          "Sunrise over the meadow — wake at 5:30 AM",
                          "Morning soak in hot springs (least crowded 6–8 AM)",
                          "Descend via Kalga/riverside route (6–7 hrs)",
                          "Return to Kasol by evening — dinner at Little Italy",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Malana Day Trip & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Bus or taxi to Malana Dam trailhead (14 km)",
                          "Trek to Malana village — follow the rules strictly",
                          "Return to Kasol by afternoon",
                          "Evening bus back to Delhi (departs 5–6 PM, arrives dawn)",
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

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
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
                          ["Accommodation/night", "₹400", "₹1,200", "₹3,000"],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          ["Local transport", "₹100", "₹300", "₹600"],
                          ["Kheerganga camp/night", "₹400", "₹600", "₹600"],
                          ["Entry fees & hot spring", "₹150", "₹150", "₹150"],
                          ["Activities & misc", "₹100", "₹300", "₹600"],
                          ["Daily total", "₹1,450", "₹3,150", "₹6,150"],
                          ["5-Day trip total", "₹7,250", "₹15,750", "₹30,750"],
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
                    * Excludes overnight bus from Delhi to Kasol (₹700–₹1,200
                    one way). The Parvati Valley is one of India's most
                    budget-friendly destinations — ₹7,000–₹8,000 for a 5-day
                    trip including transport from Delhi is entirely achievable.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>Start the trek early:</strong> Leave Barshaini by
                      7–8 AM at the latest. The trail has no lighting, and
                      arriving at Kheerganga in daylight (before 5 PM) gives you
                      time to set up camp and enjoy the hot spring before dark.
                      Late starters regularly finish the trail in the dark — not
                      dangerous but miserable.
                    </li>
                    <li>
                      <strong>Carry the right gear:</strong> Waterproof jacket
                      (weather changes fast in the valley), trekking poles
                      (particularly helpful on the descent), a headtorch with
                      spare batteries, 2 litres of water (refillable at stream
                      crossings), high-energy snacks, and warm layers for the
                      summit — even in June, Kheerganga nights drop to 8–12°C.
                    </li>
                    <li>
                      <strong>Register at the forest checkpoint:</strong> There
                      is a Forest Department registration point near Barshaini
                      where you record your name, ID, and destination before
                      starting the trek. This is for your safety and is
                      mandatory. Carry your Aadhaar/passport.
                    </li>
                    <li>
                      <strong>The Malana rules are not optional:</strong> If you
                      visit Malana, follow the no-touch rules absolutely.
                      Touching walls or people causes the village to undergo a
                      purification ritual that costs thousands of rupees.
                      Tourists who violate this are fined heavily or face police
                      involvement.
                    </li>
                    <li>
                      <strong>Kasol on weekends is a different beast:</strong>
                      The influx of Delhiites on Friday–Sunday transforms Kasol
                      dramatically — prices rise, cafes queue, the riverside
                      fills up. If possible, plan your main days mid-week. The
                      Kheerganga trail on a Tuesday is a completely different
                      experience from a Saturday.
                    </li>
                    <li>
                      <strong>Connectivity drops fast beyond Kasol:</strong>
                      Jio and Airtel work in Kasol town. Signal disappears on
                      the Kheerganga trail and at Kheerganga itself. BSNL has
                      very faint signal at the top. Download offline maps
                      (Maps.me or Google Maps offline area) before leaving
                      Kasol. Tell someone your plan.
                    </li>
                    <li>
                      <strong>Water is safe from mountain streams:</strong>
                      The mountain streams above Nakthan and along the trail are
                      clean enough to drink directly. Carry a filter bottle
                      (Lifestraw or similar) or purification tablets if you
                      prefer — but local trekkers drink directly from the
                      streams without issue.
                    </li>
                    <li>
                      <strong>Leave no trace at Kheerganga:</strong> The meadow
                      suffers significant plastic pollution from the volume of
                      visitors. Pack out every wrapper, bottle, and bit of
                      packaging you carry in. The camp operators collect organic
                      waste but not plastic — it's on you.
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
                          "Stay in Chalal for the best riverside budget experience",
                          "Eat langar at Manikaran Gurudwara — genuinely moving",
                          "Soak in the hot springs at dusk — avoid the midday crowd",
                          "Camp overnight at Kheerganga for the sunrise and stars",
                          "Buy fresh apples and walnuts directly from valley villagers",
                          "Trek via Nakthan up, Kalga down for the best of both routes",
                          "Register at the Forest Dept checkpoint before trekking",
                          "Download offline maps before leaving Kasol",
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
                          "Start the Kheerganga trek after 9 AM — you'll finish in the dark",
                          "Buy or carry charas — it's illegal and arrests happen",
                          "Touch walls or people in Malana",
                          "Leave plastic waste at Kheerganga meadow",
                          "Visit on a Delhi long weekend without booking accommodation",
                          "Attempt the riverside route in or just after monsoon",
                          "Assume BSNL/Airtel signal beyond Kasol — tell someone your plan",
                          "Rush — the Parvati Valley rewards those who slow down",
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
                  "Kasol",
                  "Kheerganga",
                  "Parvati Valley",
                  "Trekking",
                  "Himachal Pradesh",
                  "Backpacking",
                  "Hot Springs",
                  "India",
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

              <RelatedPostsGrid />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
