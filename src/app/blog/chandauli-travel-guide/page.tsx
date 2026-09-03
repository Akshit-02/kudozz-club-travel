// src/app/blog/chandauli-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chandauli Travel Guide: Waterfalls Near Varanasi",
  description:
    "Complete Chandauli travel guide — Rajdari and Devdari waterfalls, Chandraprabha Wildlife Sanctuary, Naugarh Fort, how to reach from Varanasi, and a full day-trip plan.",
  keywords:
    "Chandauli travel guide, Rajdari waterfall, Devdari waterfall, Chandraprabha Wildlife Sanctuary, Naugarh Fort, Varanasi day trip, Chandauli Uttar Pradesh, offbeat Uttar Pradesh",
  openGraph: {
    title: "Chandauli Travel Guide: Waterfalls Near Varanasi",
    description:
      "Twin waterfalls inside a wildlife sanctuary, an easy off-beat day trip from Varanasi's ghats and temples.",
    url: "https://club.kudozz.in/blog/chandauli-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hills and a flowing stream, evocative of Chandauli's Rajdari and Devdari waterfalls",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandauli Travel Guide: Waterfalls Near Varanasi",
    description:
      "Rajdari and Devdari waterfalls, Chandraprabha Wildlife Sanctuary, and Naugarh Fort — an off-beat day trip from Varanasi.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chandauli-travel-guide",
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
          headline: "Chandauli Travel Guide: Waterfalls Near Varanasi",
          description:
            "Complete Chandauli travel guide — Rajdari and Devdari waterfalls, Chandraprabha Wildlife Sanctuary, Naugarh Fort, how to reach from Varanasi, and a full day-trip plan.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
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
            "@id": "https://club.kudozz.in/blog/chandauli-travel-guide",
          },
          keywords:
            "Chandauli, Rajdari waterfall, Devdari waterfall, Chandraprabha Wildlife Sanctuary, Naugarh Fort",
          about: {
            "@type": "Place",
            name: "Chandauli",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh",
                item: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Chandauli",
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
    q: "How far is Chandauli from Varanasi?",
    a: "Chandauli town and the Chandraprabha Wildlife Sanctuary (home to the Rajdari and Devdari waterfalls) sit roughly 55-65km from Varanasi, about 1.5-2 hours by road depending on traffic and the exact route taken.",
  },
  {
    q: "What is the best time to see Rajdari and Devdari waterfalls?",
    a: "October to February offers the best combination of decent water flow (carried over from the monsoon) and pleasant, easy access. July to September has the fullest, most dramatic flow, but approach roads and trails can be muddy and slippery in that window.",
  },
  {
    q: "Can Chandauli be visited as a day trip from Varanasi?",
    a: "Yes — Chandauli is almost exclusively visited as a day trip from Varanasi, since it has very limited tourist accommodation of its own. Most visitors leave Varanasi early morning and return by evening.",
  },
  {
    q: "What wildlife can be seen at Chandraprabha Wildlife Sanctuary?",
    a: "The sanctuary is home to leopards, chinkara (Indian gazelle), sambar, nilgai, and a range of birdlife, along with a dedicated crocodile-viewing point along the Chandraprabha river. Sightings of leopards are uncommon and not guaranteed, as with most Indian wildlife sanctuaries.",
  },
  {
    q: "Is there an entry fee or permit needed for the sanctuary?",
    a: "Chandraprabha Wildlife Sanctuary typically charges a modest entry fee, along with additional charges for vehicles and cameras, collected at the forest department checkpoint. Fees are nominal but confirm current rates locally, as they can change.",
  },
  {
    q: "Is Chandauli suitable for a family or first-time visit?",
    a: "Yes — the waterfalls and viewpoints involve relatively easy walking, making Chandauli a good low-effort nature break for families or anyone wanting a change of pace from Varanasi's temples and ghats, though the roads within the sanctuary can be rough in patches.",
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
  { id: "introduction", title: "A Quiet Break from the Ghats", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chandauli", level: 2 },
  { id: "attractions", title: "Waterfalls & Sanctuary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChandauliGuidePage() {
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
              src="/images/destinations/kasol/kasol.jpg"
              alt="Forested hills and a flowing stream, evocative of Chandauli's Rajdari and Devdari waterfalls"
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
                { label: "Uttar Pradesh", href: "/blog/uttar-pradesh-travel-guide" },
                { label: "Chandauli", href: null },
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
                "Chandauli",
                "Rajdari Devdari Waterfalls",
                "Uttar Pradesh",
                "Chandraprabha Wildlife Sanctuary",
                "Varanasi Day Trip",
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
              Chandauli: Waterfalls & Wildlife Near Varanasi
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Twin waterfalls tucked inside a quiet wildlife sanctuary — an
              easy off-beat day trip from Varanasi for travellers wanting a
              break from ghats and temples.
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
                  text: "Chandauli, Uttar Pradesh",
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
                  <h2>A Quiet Break from the Ghats</h2>
                  <p>
                    <strong>Chandauli</strong> is a quiet district
                    bordering{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>,
                    known mainly to travellers for one thing: the{" "}
                    <strong>Chandraprabha Wildlife Sanctuary</strong> and
                    its twin waterfalls, <strong>Rajdari</strong> and{" "}
                    <strong>Devdari</strong>. Where Varanasi is dense,
                    riverside, and intensely spiritual, Chandauli is
                    forested, rural, and slow — a genuine change of pace
                    rather than another temple town.
                  </p>
                  <p>
                    The sanctuary itself, spread across low hills of the
                    Vindhya range, is home to leopards, chinkara, sambar,
                    and a dedicated crocodile-viewing point along the
                    Chandraprabha river, alongside the two waterfalls that
                    give the area its main draw. A short distance away, the
                    ruins of <strong>Naugarh Fort</strong> add a bit of
                    history to the trip for those with time to explore
                    further.
                  </p>
                  <p>
                    Chandauli has essentially no tourist infrastructure of
                    its own — it's positioned almost entirely as an easy
                    off-beat day trip from Varanasi, and that's how nearly
                    everyone visits it.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Chandauli at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bordering Varanasi district, UP",
                        },
                        {
                          icon: "🚗",
                          label: "From Varanasi",
                          value: "~55-65km, 1.5-2 hr drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "💦",
                          label: "Known For",
                          value: "Rajdari & Devdari Waterfalls",
                        },
                        {
                          icon: "🐆",
                          label: "Wildlife",
                          value: "Leopards, chinkara, crocodiles",
                        },
                        {
                          icon: "🏰",
                          label: "Also See",
                          value: "Naugarh Fort ruins",
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
                  <h2>Best Time to Visit Chandauli</h2>
                  <p>
                    Timing here is mostly a trade-off between waterfall
                    flow and ease of access.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant temperatures and still-decent waterfall flow carried over from the monsoon, with dry, easy-to-walk trails and roads.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Fullest flow, but muddy",
                        text: "Rajdari and Devdari are at their most dramatic during and just after monsoon, but approach roads and trails can turn muddy and slippery.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and drier — less rewarding",
                        text: "Waterfall flow drops noticeably by summer, and daytime heat makes the sanctuary's outdoor walking less enjoyable.",
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
                    <strong>Our pick:</strong> October to February —
                    comfortable weather, dry and manageable roads, and
                    waterfalls that are still flowing well from the
                    preceding monsoon.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chandauli</h2>
                  <p>
                    There's no meaningful direct rail or air access to the
                    sanctuary area — Varanasi is the practical base for
                    almost every visitor.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Varanasi:</strong> The most
                      common — and really, only practical — way in. The
                      drive covers roughly 55-65km and takes about 1.5-2
                      hours depending on the route and traffic through
                      Varanasi's outskirts.
                    </li>
                    <li>
                      <strong>Hired taxi or self-drive:</strong> A private
                      taxi or self-driven car offers the most flexibility,
                      since public transport options directly to the
                      sanctuary are limited.
                    </li>
                    <li>
                      <strong>Guided day tours:</strong> Several Varanasi-based
                      operators run day trips covering Rajdari, Devdari, and
                      sometimes Naugarh Fort as a package.
                    </li>
                    <li>
                      <strong>Getting around within the sanctuary:</strong>{" "}
                      A vehicle is needed to move between the forest
                      checkpoint, the two waterfalls, and the
                      crocodile-viewing point, followed by short walks to
                      each specific viewpoint.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early from Varanasi —
                    an early departure gives you the full day to explore
                    both waterfalls and the sanctuary's viewpoints and
                    still return comfortably before dark.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Waterfalls & the Sanctuary</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="A forested valley with a stream, representative of the landscape around Chandauli's waterfalls"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Rajdari Waterfall</h3>
                  <p>
                    The larger and better-known of the two waterfalls,
                    Rajdari drops over a rocky ledge into a pool below,
                    surrounded by forest on the low hills of the Vindhya
                    range. It's the more visited of the pair, with a short
                    walk from the parking and checkpoint area to reach a
                    good viewing spot.
                  </p>
                  <h3>Devdari Waterfall</h3>
                  <p>
                    A short distance from Rajdari, Devdari is quieter and
                    slightly less accessed, making it a good add-on for
                    visitors who want a calmer stop after Rajdari's
                    relatively busier crowds. Both waterfalls flow at their
                    best just after the monsoon.
                  </p>
                  <h3>Chandraprabha Wildlife Sanctuary</h3>
                  <p>
                    The sanctuary surrounding both waterfalls is home to
                    leopards, chinkara (Indian gazelle), sambar deer, and
                    nilgai, along with a dedicated crocodile-viewing point
                    along the Chandraprabha river — a worthwhile stop even
                    for visitors not expecting to see the more elusive big
                    cats. Entry typically requires a modest fee at the
                    forest department checkpoint.
                  </p>
                  <h3>Naugarh Fort</h3>
                  <p>
                    A short distance further into the district, the ruins
                    of Naugarh Fort add a layer of history to the trip for
                    those with extra time — a quieter, less-visited stop
                    that rewards travellers looking to go beyond the
                    waterfalls alone.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Chandauli has essentially no dedicated tourist
                    accommodation — nearly every visitor bases themselves
                    in Varanasi and treats this as a single-day round trip.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏨",
                        range: "₹800–₹2,000/night (Varanasi)",
                        picks: [
                          "Budget guesthouses near Varanasi's old city",
                          "Backpacker hostels close to the ghats",
                          "Simple lodges near Varanasi Junction",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🛏️",
                        range: "₹2,500–₹6,000/night (Varanasi)",
                        picks: [
                          "Riverside hotels along the Ganga",
                          "Business hotels in Varanasi's Cantt area",
                          "Boutique heritage stays in the old city",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "₹7,000+/night (Varanasi)",
                        picks: [
                          "Riverfront heritage hotels",
                          "Branded upscale chains near the airport road",
                          "Premium stays overlooking the ghats",
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
                  <h2>Suggested Visit Plan (Day Trip)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Depart & Reach the Sanctuary",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Varanasi (by 7-8 AM)",
                          "Entry at the forest checkpoint, drive to Rajdari",
                          "Explore Rajdari Waterfall and viewpoints",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Devdari & the Sanctuary",
                        color: "bg-sky-600",
                        activities: [
                          "Short drive to Devdari Waterfall",
                          "Stop at the crocodile-viewing point",
                          "Optional detour to Naugarh Fort ruins",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Return to Varanasi",
                        color: "bg-forest-600",
                        activities: [
                          "Head back toward Varanasi by late afternoon",
                          "Arrive in time for the evening Ganga aarti at the ghats",
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
                    * Travellers looking for another nearby off-beat stop
                    sometimes pair Chandauli with{" "}
                    <Link href="/blog/mirzapur-travel-guide">Mirzapur</Link>,
                    on the opposite side of Varanasi.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Carry snacks and water:</strong> Options
                      inside and around the sanctuary are minimal —
                      pack food and water before setting out from
                      Varanasi.
                    </li>
                    <li>
                      <strong>Small dhabas en route:</strong> A handful of
                      basic roadside dhabas along the Varanasi-Chandauli
                      road serve simple North Indian meals and tea.
                    </li>
                    <li>
                      <strong>Eat in Varanasi:</strong> For a proper meal,
                      plan to eat before departing or after returning to
                      Varanasi, where options are far more plentiful.
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
                            "Taxi from Varanasi (round trip)",
                            "₹1,800",
                            "₹2,800",
                            "₹4,000",
                          ],
                          ["Sanctuary entry & vehicle fee", "₹100", "₹200", "₹300"],
                          ["Food/snacks for the day", "₹200", "₹500", "₹1,000"],
                          [
                            "Guided day tour (optional)",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
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
                    * Figures are per group (taxi/tour) or per person
                    (food/entry), in Indian Rupees, for a single day trip
                    from Varanasi.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chandauli</h2>
                  <ul>
                    <li>
                      <strong>Start early:</strong> Leaving Varanasi by
                      7-8 AM gives you the full day and avoids rushing
                      the return drive after dark.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs are scarce once you
                      leave Varanasi's outskirts — withdraw what you need
                      beforehand.
                    </li>
                    <li>
                      <strong>Wear sturdy footwear:</strong> Paths to the
                      waterfall viewpoints can be uneven and, especially
                      post-monsoon, slippery.
                    </li>
                    <li>
                      <strong>Confirm sanctuary hours locally:</strong>{" "}
                      Forest department timings can vary seasonally —
                      check before setting out to avoid arriving after
                      closing.
                    </li>
                    <li>
                      <strong>Don't expect guaranteed wildlife
                      sightings:</strong> Leopards and other larger animals
                      are rarely seen — treat the waterfalls as the main
                      draw and any sighting as a bonus.
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
                          "Start early from Varanasi to maximise the day",
                          "Carry snacks, water, and cash",
                          "Wear sturdy, grippy footwear",
                          "Confirm sanctuary entry hours beforehand",
                          "Visit October-February for the best conditions",
                          "Hire a local taxi familiar with the route",
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
                          "Expect food or ATM access inside the sanctuary",
                          "Visit in peak monsoon expecting easy trails",
                          "Rely on public transport directly to the falls",
                          "Expect guaranteed leopard or big-cat sightings",
                          "Leave the return drive until after dark",
                          "Skip checking forest department timings",
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
                    <strong>🗺️ Extend the trip:</strong> Base yourself in{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>{" "}
                    and pair this day trip with a visit to{" "}
                    <Link href="/blog/mirzapur-travel-guide">Mirzapur</Link>{" "}
                    for another off-beat side of the region, as part of a
                    wider{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary.
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
                  "Chandauli",
                  "Rajdari Devdari Waterfalls",
                  "Uttar Pradesh",
                  "Chandraprabha Wildlife Sanctuary",
                  "Varanasi Day Trip",
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

              <RelatedPostsGrid currentSlug="chandauli-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chandauli-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
