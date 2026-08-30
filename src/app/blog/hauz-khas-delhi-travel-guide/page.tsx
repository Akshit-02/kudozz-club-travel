// src/app/blog/hauz-khas-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hauz Khas Travel Guide: Village, Deer Park & Fort Ruins",
  description:
    "Hauz Khas travel guide — the 14th-century royal reservoir, madrasa ruins and Deer Park beside Delhi's trendiest boutique village. Metro route, tips and budget.",
  keywords:
    "Hauz Khas travel guide, Hauz Khas Village, Hauz Khas Fort, Hauz Khas Deer Park, Hauz Khas Complex Delhi, Firoz Shah Tughlaq tomb, Alauddin Khalji reservoir, Hauz Khas nightlife, Hauz Khas cafes, Hauz Khas metro station, things to do Hauz Khas, South Delhi travel",
  openGraph: {
    title: "Hauz Khas Travel Guide: Village, Deer Park & Fort Ruins",
    description:
      "A 700-year-old royal reservoir and madrasa ruins sit right beside Delhi's trendiest boutique-and-nightlife village — the complete Hauz Khas guide.",
    url: "https://club.kudozz.in/blog/hauz-khas-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone fort walls at golden hour, used here to evoke the golden-stone ruins of Hauz Khas Fort and madrasa overlooking the reservoir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hauz Khas Travel Guide: Village, Deer Park & Fort Ruins",
    description:
      "A 700-year-old royal reservoir and madrasa ruins beside Delhi's trendiest boutique-and-nightlife village — the complete Hauz Khas guide.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/hauz-khas-delhi-travel-guide",
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
          headline: "Hauz Khas Travel Guide: Village, Deer Park & Fort Ruins",
          description:
            "Hauz Khas travel guide — the 14th-century reservoir, madrasa ruins and Deer Park beside Delhi's trendiest boutique and nightlife village. Metro route, tips, budget.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
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
            "@id": "https://club.kudozz.in/blog/hauz-khas-delhi-travel-guide",
          },
          keywords:
            "Hauz Khas travel guide, Hauz Khas Village, Hauz Khas Fort, Hauz Khas Deer Park, Hauz Khas Complex Delhi, Firoz Shah Tughlaq tomb",
          about: {
            "@type": "Place",
            name: "Hauz Khas",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hauz Khas",
              addressRegion: "Delhi",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Hauz Khas",
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
    q: "Is Hauz Khas Village and Hauz Khas Fort the same place?",
    a: "No, but they sit right next to each other and are usually visited together. Hauz Khas Fort (also called the Hauz Khas Complex) is the ASI-protected historical site — the reservoir, madrasa ruins and tombs. Hauz Khas Village is the adjacent urban neighbourhood of boutiques, art galleries, cafés and bars, built on what was originally the village that grew up around the monument. A short walk connects the two.",
  },
  {
    q: "Is Hauz Khas good for a day trip?",
    a: "Yes — Hauz Khas works well as a half-day addition to a Delhi itinerary, or a full afternoon-into-evening outing. Most visitors spend an hour or two at the Deer Park and Fort ruins in the late afternoon, then move into the Village for shopping, dinner and drinks as the sun goes down, which is really the ideal way to experience both sides of the neighbourhood in one visit.",
  },
  {
    q: "What is the entry fee for Hauz Khas Fort?",
    a: "Entry to the Hauz Khas Complex (the fort, madrasa ruins and Deer Park) is free, with no ticket counter — it's a public ASI-protected monument and park open to all. This is unusual for a site of this historical significance, since most major Delhi monuments like Humayun's Tomb or the Qutub Minar charge an entry fee.",
  },
  {
    q: "Is Hauz Khas safe at night?",
    a: "Hauz Khas Village is generally considered one of Delhi's safer nightlife areas, well lit, busy with foot traffic, and popular with a young, mixed crowd well into the night. As with any nightlife district, stick to main lanes, use app-based cabs rather than hailing unknown vehicles late at night, and keep an eye on belongings in crowded rooftop venues. The Deer Park and Fort ruins themselves close at sunset and shouldn't be visited after dark.",
  },
  {
    q: "What are the timings for Hauz Khas Deer Park and the Fort ruins?",
    a: "The Deer Park and Hauz Khas Complex are typically open from sunrise to sunset, roughly 7 AM to 6 PM depending on the season, and closed after dark. Hauz Khas Village's cafés, bars and shops keep much later hours, with the nightlife scene often running past midnight.",
  },
  {
    q: "How do I reach Hauz Khas by metro?",
    a: "Hauz Khas metro station sits on the Yellow Line and is also an interchange with the Magenta Line, making it one of the easier neighbourhoods in Delhi to reach directly by metro. From the station, it's roughly a 10–15 minute walk to both the Village lanes and the entrance to the Deer Park and Fort complex.",
  },
  {
    q: "Who built Hauz Khas and what does the name mean?",
    a: "Hauz Khas translates roughly to 'royal tank' or 'royal reservoir'. The reservoir was originally built around the 1290s by Sultan Alauddin Khalji to supply water to Siri Fort, his newly founded second city of Delhi. Around a century later, Firoz Shah Tughlaq restored the silted-up reservoir, and added a madrasa (Islamic seminary) and his own tomb along its banks in the 14th century — the ruins that still stand today.",
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
  { id: "introduction", title: "Ruins Beside the Village", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hauz Khas", level: 2 },
  { id: "hauz-khas-complex", title: "Hauz Khas Complex & Deer Park", level: 2 },
  { id: "hauz-khas-village", title: "Hauz Khas Village", level: 2 },
  { id: "photography-tips", title: "Photography Tips", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "where-to-eat", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HauzKhasGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Sandstone fort walls at golden hour, used here to evoke the golden-stone ruins of Hauz Khas Fort and madrasa overlooking the reservoir"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "Hauz Khas", href: null },
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
                "Hauz Khas",
                "Delhi",
                "Deer Park",
                "Nightlife",
                "South Delhi",
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
              Hauz Khas Travel Guide: Village, Deer Park & Fort Ruins
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 700-year-old royal reservoir and madrasa ruins sit right
              beside Delhi's trendiest boutique-and-nightlife village —
              two completely different Hauz Khas experiences, a five-minute
              walk apart.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Hauz Khas, South Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>Ruins Beside the Village: Hauz Khas's Strange, Great Contrast</h2>
                  <p>
                    Few neighbourhoods in{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>{" "}
                    pull off a contrast quite like <strong>Hauz Khas</strong>.
                    On one side of a tree-lined park: a 700-year-old royal
                    reservoir, the crumbling stone arches of a medieval
                    madrasa, and the tomb of a Sultanate-era emperor, all
                    quiet enough that peacocks and spotted deer wander
                    through undisturbed. On the other side, a five-minute
                    walk away: rooftop cocktail bars, independent fashion
                    boutiques, art galleries, and some of the city's
                    best-regarded café food — one of Delhi's most
                    self-consciously trendy pockets, built almost literally
                    on top of a 14th-century ruin.
                  </p>
                  <p>
                    The name itself tells half the story. <strong>Hauz
                    Khas</strong> translates to "royal tank" or "royal
                    reservoir" — <em>hauz</em> meaning tank or reservoir,{" "}
                    <em>khas</em> meaning royal or special. The reservoir was
                    built around the 1290s by Sultan{" "}
                    <strong>Alauddin Khalji</strong> to supply water to Siri
                    Fort, his newly founded second city of Delhi. It silted
                    up and fell out of use within a century, until{" "}
                    <strong>Firoz Shah Tughlaq</strong> restored it in the
                    14th century and built a madrasa — one of the era's most
                    important centres of Islamic learning — along with his
                    own tomb, right on the reservoir's edge. That complex of
                    ruins, still standing, is what most people mean when they
                    say "Hauz Khas Fort" today.
                  </p>
                  <p>
                    The modern "village" layer came much later, and almost
                    by accident — a cluster of urban-village houses that,
                    from the 1980s onward, slowly filled with boutiques,
                    galleries and cafés drawn by the cheap rents and the
                    genuinely striking backdrop of the ruins and lake. The
                    result is a neighbourhood where you can walk from silent
                    medieval stonework into a rooftop bar in under ten
                    minutes — and honestly, doing exactly that is the best
                    way to spend an afternoon and evening here.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦌</span> Hauz Khas at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Delhi, near Green Park",
                        },
                        {
                          icon: "🏛️",
                          label: "Built By",
                          value: "Alauddin Khalji (reservoir), Firoz Shah Tughlaq (madrasa)",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Hauz Khas (Yellow & Magenta lines)",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry Fee",
                          value: "Free (Fort & Deer Park)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar, late afternoon",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Visit",
                          value: "₹500 – ₹3,500",
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
                  <h2>Best Time to Visit Hauz Khas</h2>
                  <p>
                    Hauz Khas works on two different clocks — the ruins and
                    park are a daytime experience, while the Village really
                    comes alive after dark. The best visits stitch both
                    together in a single late-afternoon-to-night outing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry evenings (10–26°C) make sunset walks by the reservoir and rooftop dinners genuinely pleasant — the best window for both halves of Hauz Khas.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — daytime park visits get uncomfortable",
                        text: "Daytime highs regularly cross 40°C, making the Deer Park unpleasant by midday. Evenings in the Village stay bearable and busy year-round.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush park, occasional showers",
                        text: "The Deer Park turns genuinely green and photogenic, though sudden showers can cut a walk short. Rooftop bars sometimes shift indoors.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold, occasional haze",
                        text: "Comfortable temperatures for walking, though Delhi's winter air quality can dull long-distance views across the reservoir on bad days.",
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
                    <strong>Our pick:</strong> arrive at the Deer Park and
                    Fort ruins about 90 minutes before sunset, any time
                    October through March. You get the golden light over the
                    reservoir, then walk straight into the Village as its
                    cafés and bars switch on for the evening.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Hauz Khas</h2>
                  <p>
                    Hauz Khas sits in South Delhi, close to Green Park and{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi's
                    </Link>{" "}
                    cluster of upscale residential colonies, and it's one of
                    the more straightforward Delhi neighbourhoods to reach
                    without a car.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> Hauz Khas station is an
                      interchange between the Yellow Line and the Magenta
                      Line, making it directly reachable from most parts of
                      the city without a change of line for many routes. It's
                      by far the easiest way in.
                    </li>
                    <li>
                      <strong>By Auto-rickshaw or app cab:</strong> Widely
                      available from anywhere in South Delhi; useful for the
                      final stretch since the walk from the metro station
                      into the Village involves crossing a busy road.
                    </li>
                    <li>
                      <strong>On foot within the neighbourhood:</strong> Once
                      you're in, everything — the Deer Park entrance, the
                      Fort ruins, and the Village lanes — is within a
                      10–15 minute walk of each other.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> From Hauz Khas metro station,
                    head toward the Deer Park entrance first rather than the
                    Village lanes — visiting the ruins in daylight before the
                    Village's evening crowds arrive makes for a much calmer
                    first stop.
                  </div>
                </section>

                {/* ── Hauz Khas Complex & Deer Park ─────────────────────── */}
                <section id="hauz-khas-complex">
                  <h2>Hauz Khas Complex & Deer Park</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic sandstone fortress architecture reminiscent of the madrasa and tomb ruins standing along the edge of the Hauz Khas reservoir"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The historical heart of the neighbourhood is the{" "}
                    <strong>Hauz Khas Complex</strong>, an ASI-protected site
                    spread across the reservoir's southern and eastern banks.
                    It's genuinely one of the more atmospheric ruin
                    complexes in Delhi, and far less crowded than
                    heavyweights like{" "}
                    <Link href="/blog/mehrauli-delhi-travel-guide">
                      the Qutub Minar complex in Mehrauli
                    </Link>
                    .
                  </p>
                  <ul>
                    <li>
                      <strong>The reservoir (hauz):</strong> Originally built
                      by Alauddin Khalji in the 1290s to supply Siri Fort,
                      it once covered a much larger area than the shrunken
                      lake visible today. Walking paths now trace its
                      surviving edge, shaded by old trees.
                    </li>
                    <li>
                      <strong>The madrasa ruins:</strong> Firoz Shah Tughlaq's
                      14th-century Islamic seminary, its L-shaped colonnades
                      and domed pavilions built directly into the slope
                      overlooking the water — one of the most significant
                      madrasas of the Delhi Sultanate era, and still
                      strikingly intact for its age.
                    </li>
                    <li>
                      <strong>Firoz Shah Tughlaq's tomb:</strong> A domed
                      stone structure at the complex's edge, where the
                      emperor who restored the reservoir and built the
                      madrasa is himself buried — a fitting, slightly
                      poignant end to the site's medieval story.
                    </li>
                    <li>
                      <strong>Deer Park:</strong> The green space adjoining
                      the ruins, home to a fenced enclosure of spotted deer
                      alongside peacocks and a wide range of birdlife, plus
                      jogging and walking trails used heavily by locals
                      morning and evening.
                    </li>
                  </ul>
                  <p>
                    Entry to the entire complex — ruins and park — is{" "}
                    <strong>free</strong>, with no ticket counter, and it's
                    open roughly sunrise to sunset. Give yourself at least an
                    hour to actually walk through the madrasa's colonnades
                    and along the lakeside path rather than just glancing at
                    it from the entrance.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The ruins are largely open
                    stonework with plenty of steps, ledges and doorways to
                    climb through — comfortable shoes make a real difference,
                    and the site rewards slow, unhurried wandering over a
                    quick walk-through.
                  </div>
                </section>

                {/* ── Hauz Khas Village ──────────────────────────────────── */}
                <section id="hauz-khas-village">
                  <h2>Hauz Khas Village: Boutiques, Galleries & Nightlife</h2>
                  <p>
                    Step out of the park gate and the mood flips completely.{" "}
                    <strong>Hauz Khas Village</strong> is a maze of narrow
                    lanes packed into what was originally a small urban
                    settlement, now filled almost wall-to-wall with
                    independent fashion boutiques, art galleries, design
                    studios, and — above all — cafés and bars, many of them
                    stacked on multiple rooftop levels overlooking the lake
                    and ruins.
                  </p>
                  <ul>
                    <li>
                      <strong>Boutique shopping:</strong> The Village is one
                      of Delhi's best spots for independent Indian fashion
                      labels, home décor, and design pieces you won't find in
                      the city's larger malls — worth a slow browse rather
                      than a rushed shopping trip.
                    </li>
                    <li>
                      <strong>Art galleries:</strong> Several small,
                      independent galleries are tucked into the lanes,
                      showing contemporary Indian art in a far more relaxed,
                      walk-in setting than the city's larger institutional
                      spaces.
                    </li>
                    <li>
                      <strong>Rooftop cafés and bars:</strong> The
                      neighbourhood's real calling card — multi-level rooftop
                      spaces with direct views over the reservoir and Fort
                      ruins, especially atmospheric once the ruins are lit
                      up after dark.
                    </li>
                    <li>
                      <strong>Nightlife scene:</strong> Hauz Khas Village is
                      one of Delhi's most established nightlife pockets, with
                      a mix of lounge bars, live-music spots and late-night
                      cafés drawing a young, mixed crowd well into the night,
                      especially on weekends.
                    </li>
                  </ul>
                  <blockquote>
                    The genuinely unusual thing about Hauz Khas Village is
                    how literally the two identities overlap — order a drink
                    on the right rooftop and you're looking straight down at
                    a 700-year-old madrasa while doing it.
                  </blockquote>
                </section>

                {/* ── Photography Tips ───────────────────────────────────── */}
                <section id="photography-tips">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Sunset over the reservoir:</strong> The single
                      best shot in the neighbourhood — golden light hitting
                      the madrasa's domes and colonnades with the lake in the
                      foreground. Position yourself on the lakeside path
                      roughly 30–40 minutes before sunset for the best light.
                    </li>
                    <li>
                      <strong>Through the madrasa's arches:</strong> The
                      ruins' arched doorways and window openings frame the
                      water and far bank beautifully — worth working the
                      structure itself rather than only shooting it from
                      outside.
                    </li>
                    <li>
                      <strong>Rooftop views after dark:</strong> Several
                      Village cafés and bars offer direct, elevated views
                      back over the illuminated ruins — a genuinely different,
                      moodier version of the same scene shot in daylight.
                    </li>
                    <li>
                      <strong>Street art and shopfronts:</strong> The
                      Village's lanes have their share of murals, quirky
                      shopfronts and design details worth a wander with a
                      camera, especially in the softer light of late
                      afternoon before the evening crowds fill the lanes.
                    </li>
                    <li>
                      <strong>Wildlife in the Deer Park:</strong> Early
                      morning or late afternoon give the best chance of
                      photographing deer and peacocks active rather than
                      resting in shade during the heat of the day.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Hauz Khas Itinerary</h2>
                  <p>
                    Hauz Khas is best treated as a single, flowing half-day
                    outing that moves from history into nightlife as the
                    light fades — here's a timeline that works well for a
                    first visit.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "4:00 PM",
                        title: "Deer Park & Reservoir",
                        color: "bg-forest-600",
                        activities: [
                          "Enter via the Deer Park gate near the metro",
                          "Walk the lakeside path, spot deer and peacocks",
                          "Head toward the Fort ruins as light softens",
                        ],
                      },
                      {
                        day: "5:00 PM",
                        title: "Hauz Khas Complex Ruins",
                        color: "bg-amber-700",
                        activities: [
                          "Explore the madrasa colonnades and pavilions",
                          "Visit Firoz Shah Tughlaq's tomb",
                          "Catch golden-hour light over the water",
                        ],
                      },
                      {
                        day: "6:30 PM",
                        title: "Into the Village",
                        color: "bg-sky-600",
                        activities: [
                          "Browse boutiques and a gallery or two",
                          "Grab a window or rooftop table before it fills up",
                          "Watch the ruins light up as dusk sets in",
                        ],
                      },
                      {
                        day: "8:00 PM",
                        title: "Dinner & Nightlife",
                        color: "bg-purple-600",
                        activities: [
                          "Dinner at a Village café or rooftop restaurant",
                          "Move to a bar or lounge for the evening",
                          "Metro or app cab back — station is a short walk",
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
                    * Remember the Deer Park and Fort ruins close at sunset —
                    do the historical half first, then let the evening carry
                    you into the Village.
                  </p>
                </section>

                {/* ── Where to Eat ──────────────────────────────────────── */}
                <section id="where-to-eat">
                  <h2>Where to Eat in Hauz Khas</h2>
                  <p>
                    Hauz Khas Village is one of the more cosmopolitan pockets
                    of Delhi's dining scene — a sharp contrast to the
                    street-food traditions of Old Delhi, and worth visiting
                    specifically for that variety.
                  </p>
                  <ul>
                    <li>
                      <strong>Rooftop multi-cuisine restaurants:</strong>{" "}
                      The Village's signature dining format — layered rooftop
                      terraces serving everything from Italian and
                      Continental to modern Indian fusion, most with direct
                      views over the lake and ruins.
                    </li>
                    <li>
                      <strong>Independent cafés:</strong> Slow-paced,
                      design-forward cafés tucked into the lanes, popular for
                      brunch, coffee and all-day light meals — a genuine
                      draw for the neighbourhood's design and arts crowd.
                    </li>
                    <li>
                      <strong>Craft cocktail bars:</strong> A strong,
                      growing scene of small bars focused on craft cocktails
                      and curated drinks menus rather than standard nightclub
                      fare.
                    </li>
                    <li>
                      <strong>Budget eats near the metro:</strong> Simple
                      dhabas and quick-service spots near Hauz Khas metro
                      station and along the main road, useful if the
                      Village's café prices don't fit your budget for every
                      meal.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Entry to the ruins and Deer Park is free, so your spend
                    at Hauz Khas is almost entirely a function of how much
                    time — and money — you put into the Village's cafés,
                    restaurants and bars.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Splurge"].map(
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
                          ["Fort & Deer Park entry", "Free", "Free", "Free"],
                          ["Café meal / coffee", "₹300", "₹700", "₹1,500"],
                          [
                            "Rooftop dinner (per person)",
                            "₹600",
                            "₹1,500",
                            "₹3,500",
                          ],
                          ["Drinks at a bar (per person)", "₹500", "₹1,200", "₹3,000"],
                          [
                            "Local transport (metro + auto)",
                            "₹100",
                            "₹300",
                            "₹800",
                          ],
                          [
                            "Total per visit",
                            "₹1,000 – ₹1,500",
                            "₹2,500 – ₹3,500",
                            "₹6,000+",
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
                    * Village restaurant and bar prices run noticeably higher
                    than most of Delhi — a fair trade-off many visitors make
                    for the setting and the view.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Hauz Khas</h2>
                  <ul>
                    <li>
                      <strong>Visit the ruins before the Village:</strong>{" "}
                      The Deer Park and Fort close at sunset — see them
                      first, then let the evening flow naturally into the
                      Village's cafés and bars.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> The madrasa
                      ruins involve steps, ledges and uneven stone surfaces;
                      the Village's lanes are cobbled and narrow.
                    </li>
                    <li>
                      <strong>Book ahead on weekends:</strong> Popular
                      rooftop restaurants and bars fill up fast on Friday
                      and Saturday evenings — a reservation saves a long wait.
                    </li>
                    <li>
                      <strong>Carry cash for smaller shops:</strong> Most
                      Village boutiques and cafés accept cards or UPI, but a
                      few smaller stalls and street vendors near the metro
                      still prefer cash.
                    </li>
                    <li>
                      <strong>Combine it with nearby South Delhi:</strong>{" "}
                      Hauz Khas pairs naturally with a wider{" "}
                      <Link href="/blog/south-delhi-travel-guide">
                        South Delhi
                      </Link>{" "}
                      day that might also include{" "}
                      <Link href="/blog/lodhi-garden-delhi-travel-guide">
                        Lodhi Garden
                      </Link>{" "}
                      or the older monuments of{" "}
                      <Link href="/blog/mehrauli-delhi-travel-guide">
                        Mehrauli
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Respect the wildlife:</strong> The deer are
                      kept in a fenced enclosure — don't feed them or attempt
                      to enter the enclosure for photos.
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
                          "Visit the Fort ruins and Deer Park before sunset",
                          "Take the metro — Hauz Khas station is an easy interchange",
                          "Book rooftop restaurants ahead on weekends",
                          "Wear comfortable shoes for uneven ruin stonework",
                          "Walk the lakeside path for the best golden-hour views",
                          "Pair the visit with Lodhi Garden or Mehrauli nearby",
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
                          "Try to visit the ruins after dark — they close at sunset",
                          "Feed or approach the deer in their enclosure",
                          "Skip a reservation for popular rooftops on weekends",
                          "Confuse the Fort complex with the Village — see both",
                          "Wander the ruins in slippery footwear on rainy days",
                          "Expect budget-Delhi prices inside the Village itself",
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
                    <strong>🗺️ Extend the trip:</strong> Hauz Khas sits close
                    enough to{" "}
                    <Link href="/blog/lodhi-garden-delhi-travel-guide">
                      Lodhi Garden
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/mehrauli-delhi-travel-guide">
                      Mehrauli's monument cluster
                    </Link>{" "}
                    that a single day can cover all three — start with
                    Mehrauli's ruins in the morning, Lodhi Garden at midday,
                    and finish at Hauz Khas for sunset and dinner. See the
                    full{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi guide
                    </Link>{" "}
                    for how they connect.
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
                  "Hauz Khas",
                  "Delhi",
                  "Deer Park",
                  "Hauz Khas Village",
                  "Nightlife",
                  "South Delhi",
                  "Firoz Shah Tughlaq",
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

              <RelatedPostsGrid currentSlug="hauz-khas-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="hauz-khas-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
