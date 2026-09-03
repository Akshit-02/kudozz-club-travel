// src/app/blog/shravasti-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Shravasti Travel Guide: Jetavana Monastery Ruins",
  description:
    "Complete Shravasti guide — the Jetavana Monastery ruins, Anandabodhi Tree, Angulimala Stupa, how to reach this quiet Buddhist site, where to stay, and a full visit plan.",
  keywords:
    "Shravasti, Jetavana Monastery, Anandabodhi Tree, Angulimala Stupa, Sahet-Mahet, Shravasti travel guide, Buddhist Circuit, Anathapindika, Uttar Pradesh Buddhist sites, Balrampur, Gonda",
  openGraph: {
    title: "Shravasti Travel Guide: Jetavana Monastery Ruins",
    description:
      "Where the Buddha spent the most monsoon retreats of his teaching life — the Jetavana Monastery ruins, the Anandabodhi Tree, and a quiet, uncrowded stop on the Buddhist circuit.",
    url: "https://club.kudozz.in/blog/shravasti-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet archaeological monastery grounds at Shravasti, site of the ancient Jetavana Monastery",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shravasti Travel Guide: Jetavana Monastery Ruins",
    description:
      "The Jetavana Monastery ruins, the Anandabodhi Tree, and one of the quietest, least-crowded stops on India's Buddhist circuit.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/shravasti-travel-guide",
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
          headline: "Shravasti Travel Guide: Jetavana Monastery Ruins",
          description:
            "Complete Shravasti guide — the Jetavana Monastery ruins, Anandabodhi Tree, Angulimala Stupa, how to reach this quiet Buddhist site, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/shravasti-travel-guide",
          },
          keywords:
            "Shravasti, Jetavana Monastery, Anandabodhi Tree, Angulimala Stupa, Buddhist Circuit",
          about: {
            "@type": "Place",
            name: "Shravasti",
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
                name: "Shravasti",
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
    q: "What is Shravasti famous for?",
    a: "Shravasti was one of ancient India's great cities and, according to Buddhist tradition, the place where the Buddha spent the most monsoon retreats — 24 in total — of his 45-year teaching life. Its main draw today is the Jetavana Monastery ruins, the garden-monastery donated to the Buddha by the merchant Anathapindika.",
  },
  {
    q: "How do I reach Shravasti?",
    a: "The nearest practical air gateway is Lucknow, roughly 170 km away, from where you continue by road. Balrampur and Gonda are the nearest railway stations with onward road connections into Shravasti. Many travellers combine the trip with Kushinagar and Gorakhpur as part of a wider Buddhist-circuit loop.",
  },
  {
    q: "What is the Jetavana Monastery?",
    a: "Jetavana was a garden-monastery on the outskirts of ancient Shravasti, purchased by the wealthy merchant Anathapindika from Prince Jeta and donated to the Buddha and his monastic community. It became one of the Buddha's most important residences and the setting for many of his recorded discourses. Today it survives as a peaceful archaeological park of brick foundations, stupas, and shrine platforms.",
  },
  {
    q: "Is Shravasti crowded like other Buddhist pilgrimage sites?",
    a: "No — Shravasti is notably quieter and far less visited than stops like Bodh Gaya or Sarnath, which is part of its appeal. Travellers who want the same historical depth without the crowds and tour-bus traffic tend to find Shravasti particularly rewarding.",
  },
  {
    q: "What is the Anandabodhi Tree?",
    a: "A sacred Bodhi tree at the Jetavana site, said to have grown from a sapling of the original Bodhi Tree in Bodh Gaya, planted at the Buddha's disciple Ananda's request so pilgrims would have something to venerate in the Buddha's presence when he was away travelling. It remains a focal point of the site today.",
  },
  {
    q: "How much time should I spend in Shravasti?",
    a: "Half a day is enough to walk the Jetavana ruins, see the Anandabodhi Tree, and visit the Angulimala Stupa. A full day allows a more relaxed pace and time to also explore the wider Sahet-Mahet archaeological site.",
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
  { id: "introduction", title: "A Quiet Corner of the Buddhist Circuit", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Shravasti", level: 2 },
  { id: "sacred-sites", title: "The Sacred Sites", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ShravastiGuidePage() {
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
              alt="Quiet archaeological monastery grounds at Shravasti, site of the ancient Jetavana Monastery"
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
                { label: "Shravasti", href: null },
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
                "Shravasti",
                "Jetavana Monastery",
                "Buddha",
                "Buddhist Circuit",
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
              Shravasti: Jetavana Monastery Ruins Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Where the Buddha spent more monsoon retreats than anywhere
              else — the Jetavana Monastery ruins, the Anandabodhi Tree, and
              one of the quietest, least-crowded stops on the whole
              Buddhist circuit.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Shravasti, Uttar Pradesh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,250 words",
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
                  <h2>A Quiet Corner of the Buddhist Circuit</h2>
                  <p>
                    In its day, <strong>Shravasti</strong> was one of the six
                    largest cities in ancient India and the capital of the
                    Kosala kingdom. For Buddhists, it holds a particular
                    significance: tradition holds that the Buddha spent the
                    most monsoon retreats of his teaching life here —
                    twenty-four in total — more than at any other single
                    location, delivering a large share of the discourses that
                    survive in the Buddhist canon.
                  </p>
                  <p>
                    Today, that history survives as the quiet archaeological
                    park of <strong>Jetavana Monastery</strong>, a
                    garden-monastery donated to the Buddha by the wealthy
                    merchant <strong>Anathapindika</strong>. Unlike many
                    stops on the Buddhist circuit, Shravasti sees relatively
                    few visitors, which gives the brick foundations, stupa
                    platforms, and the sacred Anandabodhi Tree an unhurried,
                    contemplative atmosphere rare on a more heavily
                    trafficked pilgrimage route.
                  </p>
                  <p>
                    Shravasti pairs naturally with a wider eastern{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    Buddhist-circuit trip — many travellers combine it with{" "}
                    <Link href="/blog/kushinagar-travel-guide">
                      Kushinagar
                    </Link>{" "}
                    and a Gorakhpur stopover, or route through it on the way
                    to or from{" "}
                    <Link href="/blog/lucknow-travel-guide">Lucknow</Link>.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Shravasti at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Northern Uttar Pradesh, near Nepal border",
                        },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Lucknow (~170 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛐",
                          label: "Significance",
                          value: "24 monsoon retreats of the Buddha",
                        },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Jetavana Monastery ruins",
                        },
                        {
                          icon: "🤫",
                          label: "Crowd Level",
                          value: "Low — one of the quietest circuit stops",
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
                  <h2>Best Time to Visit Shravasti</h2>
                  <p>
                    As with most of the Gangetic plains, winter is the clear
                    window for a comfortable visit to Shravasti's open-air
                    ruins.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "🍃",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather that makes it pleasant to walk the open archaeological grounds. Winter mornings can be misty but clear up by mid-morning.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Avoid if possible",
                        text: "Summer heat is intense across this belt of Uttar Pradesh, making the largely shade-free Jetavana site uncomfortable for long stretches.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, wet",
                        text: "Heavy rain is common; the site stays open but paths can get muddy and travel between towns less predictable.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Ideal for photography",
                        text: "Soft winter light and low visitor numbers make this window especially good for unhurried photography around the ruins.",
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
                    <strong>Our pick:</strong> October to March — the only
                    genuinely comfortable window for spending unhurried time
                    on the open, largely shade-free Jetavana grounds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Shravasti</h2>
                  <p>
                    Shravasti is genuinely off the beaten path — reaching it
                    takes a bit more planning than the bigger circuit stops,
                    which is part of why it stays so quiet.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Lucknow, roughly 170 km away,
                      is the nearest practical air gateway, with good
                      domestic connectivity. From there it's a road journey
                      of around 4-5 hours.
                    </li>
                    <li>
                      <strong>By rail:</strong> Balrampur and Gonda are the
                      closest railway stations with reasonable connections,
                      each requiring a further road transfer of roughly
                      1-2 hours into Shravasti.
                    </li>
                    <li>
                      <strong>By road:</strong> Shravasti connects well by
                      road to a wider Buddhist-circuit loop that includes{" "}
                      <Link href="/blog/kushinagar-travel-guide">
                        Kushinagar
                      </Link>{" "}
                      and Gorakhpur, making it worth planning as part of a
                      multi-day trip rather than a standalone visit.
                    </li>
                    <li>
                      <strong>Getting around:</strong> The Jetavana site and
                      the wider Sahet-Mahet archaeological zone are best
                      covered by hired auto-rickshaw or taxi from wherever
                      you're staying, as the sites are spread across a fairly
                      large area.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange your onward road
                    transport before arriving — taxi and auto availability
                    in Shravasti itself is thin, and pre-booking from
                    Balrampur, Gonda, or Lucknow saves time.
                  </div>
                </section>

                {/* ── Sacred Sites ──────────────────────────────────────── */}
                <section id="sacred-sites">
                  <h2>The Sacred Sites</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Brick ruins and monastery grounds at the Jetavana site, Shravasti"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Jetavana Monastery Ruins</h3>
                  <p>
                    The centrepiece of Shravasti. According to tradition, the
                    merchant Anathapindika, deeply moved after hearing the
                    Buddha teach, wanted to build him a monastery on a
                    beautiful garden plot owned by Prince Jeta. The prince,
                    not wishing to sell, jokingly said he'd part with the land
                    only if it were covered edge to edge in gold coins —
                    Anathapindika reportedly did exactly that, and the prince,
                    struck by his devotion, donated the trees himself. The
                    resulting Jetavana ("Jeta's Grove") became one of the
                    Buddha's most frequented residences. Today it survives as
                    a peaceful park of excavated brick monastery
                    foundations, stupa bases, and shrine platforms spread
                    across a shaded, well-maintained archaeological site.
                  </p>
                  <h3>The Anandabodhi Tree</h3>
                  <p>
                    A living Bodhi tree within the Jetavana grounds, said to
                    have been grown from a sapling of the original Bodhi Tree
                    in Bodh Gaya. Tradition credits the request to Ananda, the
                    Buddha's close attendant, who wanted pilgrims to have a
                    focal point for veneration during the Buddha's frequent
                    travels away from Shravasti. It remains one of the most
                    visited spots within the site.
                  </p>
                  <h3>Angulimala Stupa</h3>
                  <p>
                    A stupa associated with Angulimala, a figure from
                    Buddhist tradition who, after a violent past, became a
                    monk under the Buddha's guidance — one of Buddhism's
                    best-known stories of transformation. The stupa sits a
                    short distance from the main Jetavana complex.
                  </p>
                  <h3>Sahet-Mahet Archaeological Site</h3>
                  <p>
                    The broader excavated area encompassing both Jetavana
                    ("Sahet") and the ancient city ruins of Shravasti itself
                    ("Mahet"), enclosed by remnants of old city walls. Walking
                    the wider site gives a better sense of Shravasti's scale
                    as a major ancient city, beyond just the monastery
                    grounds.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Shravasti</h2>
                  <p>
                    Accommodation in Shravasti is limited and simple,
                    reflecting how few travellers make the detour — book
                    ahead where possible, as options are genuinely few.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🙏",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Monastery guesthouses",
                          "Basic local lodges",
                          "UP Tourism budget rooms",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Pilgrim-oriented mid-range hotels",
                          "UPSTDC-run guesthouses",
                          "Small private hotels near the site",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛎️",
                        range: "Very limited",
                        picks: [
                          "No true luxury category on-site",
                          "Best comfort found via day trips from Lucknow",
                          "A handful of larger hotels in Balrampur",
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
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Jetavana Monastery",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early for cooler, quieter grounds",
                          "Walk the monastery foundations and stupa bases",
                          "Spend time at the Anandabodhi Tree",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Wider Site & Departure",
                        color: "bg-purple-600",
                        activities: [
                          "Visit Angulimala Stupa",
                          "Walk the broader Sahet-Mahet ruins",
                          "Depart toward Balrampur/Gonda or Lucknow",
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
                    * A single focused day covers Shravasti well; travellers
                    on a longer Buddhist-circuit trip often continue on to{" "}
                    <Link href="/blog/kushinagar-travel-guide">
                      Kushinagar
                    </Link>{" "}
                    or back through{" "}
                    <Link href="/blog/lucknow-travel-guide">Lucknow</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Shravasti</h2>
                  <ul>
                    <li>
                      <strong>Monastery canteens:</strong> A few monasteries
                      near the site offer simple vegetarian meals to
                      travellers, at modest or donation-based cost.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Basic North Indian
                      thalis and regional dishes at inexpensive roadside
                      stops — the standard option for most visitors.
                    </li>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Several of the
                      simple lodges and guesthouses serve home-style meals to
                      residents, often the most reliable food option in the
                      immediate area.
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
                          ["Accommodation/night", "₹900", "₹3,000", "₹6,000*"],
                          ["Lucknow transfer (round trip)", "₹1,000", "₹2,500", "₹5,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local auto/taxi hire", "₹400", "₹700", "₹1,200"],
                          ["Entry/donations", "Free–₹100", "₹100", "₹200"],
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
                    * Figures are per person, per day. "Luxury" accommodation
                    reflects the nearest comparable option in Balrampur/
                    Lucknow, as Shravasti itself has no true luxury category.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Shravasti</h2>
                  <ul>
                    <li>
                      <strong>Plan transport ahead:</strong> Shravasti has
                      little walk-up taxi or auto availability — arrange
                      pickup/drop from Balrampur, Gonda, or Lucknow before
                      you arrive.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Cover shoulders and
                      knees at the monastery and shrine areas, as at any
                      active place of worship.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM and card access is
                      very limited — withdraw what you'll need before
                      arriving.
                    </li>
                    <li>
                      <strong>Bring water and sun protection:</strong> Much
                      of the Jetavana site is open ground with limited shade.
                    </li>
                    <li>
                      <strong>Combine with Kushinagar:</strong> Shravasti
                      works best as one stop on a longer Buddhist-circuit
                      loop rather than a standalone trip, given the travel
                      effort involved.
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
                          "Arrange transport in advance from Balrampur/Gonda",
                          "Dress modestly around the monastery grounds",
                          "Carry enough cash for the whole visit",
                          "Visit early morning for cooler, quieter grounds",
                          "Pair the trip with Kushinagar for a fuller circuit",
                          "Bring water and sun protection",
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
                          "Expect walk-up taxis or wide ATM access",
                          "Plan Shravasti as a rushed half-hour stop",
                          "Skip carrying water on the open Jetavana grounds",
                          "Expect luxury accommodation on-site",
                          "Arrive without confirming your onward transport",
                          "Wear shorts or sleeveless tops at the shrines",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Shravasti
                    with{" "}
                    <Link href="/blog/kushinagar-travel-guide">
                      Kushinagar
                    </Link>{" "}
                    for a fuller eastern Buddhist-circuit loop, or route
                    through{" "}
                    <Link href="/blog/lucknow-travel-guide">Lucknow</Link>{" "}
                    on your way in or out, as part of a wider{" "}
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
                  "Shravasti",
                  "Buddha",
                  "Jetavana Monastery",
                  "Uttar Pradesh",
                  "Buddhist Circuit",
                  "Off-beat",
                  "Anathapindika",
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

              <RelatedPostsGrid currentSlug="shravasti-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="shravasti-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
