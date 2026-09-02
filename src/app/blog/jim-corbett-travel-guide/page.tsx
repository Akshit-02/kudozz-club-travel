// src/app/blog/jim-corbett-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jim Corbett National Park: Safari, Zones & Tips",
  description:
    "Complete Jim Corbett National Park guide — Dhikala, Bijrani, Jhirna & other safari zones, tiger sighting tips, how to reach Ramnagar, where to stay, and a full budget breakdown.",
  keywords:
    "Jim Corbett National Park, Corbett tiger safari, Dhikala zone, Bijrani zone, Jhirna zone, Ramnagar Uttarakhand, Corbett safari booking, Project Tiger India, Corbett best time to visit, Ramganga river, Corbett jeep safari, Corbett National Park zones",
  openGraph: {
    title: "Jim Corbett National Park: Safari, Zones & Tips",
    description:
      "India's oldest national park and the birthplace of Project Tiger — safari zones, tiger sightings, and how to plan a trip to Corbett.",
    url: "https://club.kudozz.in/blog/jim-corbett-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Dense sal forest and open grassland typical of Jim Corbett National Park's tiger habitat",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jim Corbett National Park: Safari, Zones & Tips",
    description:
      "India's oldest national park — safari zones, tiger sightings, and how to plan a trip to Corbett.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jim-corbett-travel-guide",
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
          headline: "Jim Corbett National Park: Safari, Zones & Tips",
          description:
            "Complete Jim Corbett National Park guide — Dhikala, Bijrani, Jhirna & other safari zones, tiger sighting tips, how to reach Ramnagar, where to stay, and a full budget breakdown.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/jim-corbett-travel-guide",
          },
          keywords:
            "Jim Corbett National Park, Dhikala zone, Bijrani zone, Ramnagar, tiger safari, Project Tiger",
          about: {
            "@type": "Place",
            name: "Jim Corbett National Park",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ramnagar",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand",
                item: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Jim Corbett National Park",
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
    q: "Which is the best safari zone in Jim Corbett — Dhikala or Bijrani?",
    a: "Dhikala is widely considered the most scenic and rewarding zone, set on the Ramganga reservoir with open grassland (chaur) that offers excellent visibility and strong tiger, elephant, and deer sightings — but it requires an overnight stay inside the zone and has a shorter open season. Bijrani is more accessible for a day safari from Ramnagar, with consistently good tiger activity, making it the more practical choice for shorter visits.",
  },
  {
    q: "When do the Corbett safari zones close for the season?",
    a: "Most zones, including Bijrani, Jhirna, Dhela, and Durga Devi, close annually from mid-June to mid-November for the monsoon breeding season. Dhikala often has the shortest open window of all, sometimes not opening until mid-November and closing by mid-June, so check current dates before booking. Jhirna and Dhela stay open through more of the year, including parts of the monsoon, making them useful off-season options.",
  },
  {
    q: "How do I book a Corbett safari?",
    a: "Safaris are booked through the official Uttarakhand forest department online booking portal, ideally several weeks in advance for popular zones and peak-season dates (November-February). Many hotels and resorts near Ramnagar also arrange bookings on your behalf along with the jeep and guide.",
  },
  {
    q: "How likely am I to see a tiger at Jim Corbett?",
    a: "There's no guarantee — Corbett is genuinely wild terrain, not a controlled enclosure — but the park has one of India's healthier tiger densities, and multiple safaris across zones like Dhikala and Bijrani meaningfully improve your odds. Many visitors do 2-3 safaris across different zones or timings (early morning and late afternoon) to maximise their chances.",
  },
  {
    q: "How do I reach Jim Corbett National Park?",
    a: "The nearest airport is Pantnagar, about 50 km away, with limited flight connectivity. Ramnagar, the main gateway town, has its own railway station with direct trains from Delhi, making rail the most convenient option for many visitors. By road, Ramnagar is roughly 250-260 km from Delhi, about a 6-7 hour drive.",
  },
  {
    q: "How many days should I spend at Jim Corbett?",
    a: "2-3 days with 2-4 safaris across different zones is a good balance — enough time to try more than one zone and time of day without feeling rushed, while still leaving room for the Corbett Museum, Garjiya Devi Temple, or a spot of river rafting on the Kosi.",
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
  { id: "introduction", title: "India's First National Park", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "safari-zones", title: "Safari Zones", level: 2 },
  { id: "wildlife", title: "Wildlife & Birdlife", level: 2 },
  { id: "beyond-safari", title: "Beyond the Safari", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JimCorbettGuidePage() {
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
              src="/images/destinations/coorg/coorg.jpg"
              alt="Dense sal forest and open grassland typical of Jim Corbett National Park's tiger habitat"
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
                { label: "Uttarakhand", href: "/blog/uttarakhand-travel-guide" },
                { label: "Jim Corbett National Park", href: null },
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
                "Jim Corbett",
                "Uttarakhand",
                "Tiger Safari",
                "Dhikala",
                "Wildlife",
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
              Jim Corbett National Park: Safari & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India's oldest national park and the birthplace of Project
              Tiger — Dhikala's grasslands, Bijrani's reliable sightings, and
              a wilderness that gave its name to conservation across the
              country.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Nainital District, Uttarakhand",
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
                  <h2>India's First National Park</h2>
                  <p>
                    Established in 1936 as <strong>Hailey National Park</strong>,
                    Jim Corbett National Park has the distinction of being
                    India's oldest national park — and, in 1973, it became
                    the first reserve under the newly launched{" "}
                    <strong>Project Tiger</strong>, India's landmark tiger
                    conservation programme. The park was later renamed after{" "}
                    <strong>Jim Corbett</strong>, the British-Indian
                    hunter-turned-conservationist famous for tracking man-eating
                    tigers and leopards in the region before dedicating the
                    rest of his life to wildlife protection.
                  </p>
                  <p>
                    Spread across the foothills of the Himalaya in the{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>{" "}
                    Terai, Corbett's terrain ranges from dense sal forest and
                    riverine belts to open grasslands (chaurs) along the
                    Ramganga reservoir — a landscape that supports one of
                    India's healthiest Bengal tiger populations alongside
                    elephants, several deer species, leopards, and over 600
                    recorded species of birds.
                  </p>
                  <p>
                    The park is divided into several distinct safari zones,
                    each with its own character, access rules, and seasonal
                    calendar — understanding these zones is the single most
                    important part of planning a Corbett trip well.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐅</span> Jim Corbett at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Nainital District, Uttarakhand",
                        },
                        {
                          icon: "🚉",
                          label: "Gateway Town",
                          value: "Ramnagar",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Jun" },
                        {
                          icon: "🐘",
                          label: "Known For",
                          value: "Tigers, Elephants, Dhikala",
                        },
                        {
                          icon: "🏞️",
                          label: "Established",
                          value: "1936 (as Hailey NP)",
                        },
                        {
                          icon: "🦅",
                          label: "Birdlife",
                          value: "600+ recorded species",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Corbett's safari zones close for a large chunk of the
                    monsoon and post-monsoon breeding season, making timing
                    non-negotiable for planning a visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant weather and every zone open, including Dhikala. Wildlife is active, though dense winter foliage can occasionally make spotting harder than in peak summer.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for tiger sightings",
                        text: "As temperatures rise and water sources shrink, animals — including tigers — congregate more predictably around remaining water bodies, often improving sighting odds despite the heat.",
                      },
                      {
                        season: "Mid-Jun – Nov",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Most zones closed",
                        text: "Core zones including Dhikala, Bijrani, and Durga Devi close for the monsoon breeding season. Jhirna and Dhela stay open through more of this period as buffer-zone alternatives.",
                      },
                      {
                        season: "Peak Weekends",
                        emoji: "🎟️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Book well ahead",
                        text: "Weekends and holidays during the Nov-Feb window sell out safari permits quickly, especially for Dhikala — book several weeks in advance if your dates are fixed.",
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
                    <strong>Our pick:</strong> November to February for
                    pleasant weather with every zone open, or April to June
                    if maximising your tiger-sighting odds matters more than
                    comfort.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jim Corbett</h2>
                  <p>
                    <strong>Ramnagar</strong> is the main gateway town to the
                    park, and effectively where every visit begins and ends.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Pantnagar Airport is the
                      nearest, roughly 50 km from Ramnagar, with limited
                      flight connectivity — mainly to Delhi.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Ramnagar has its own railway
                      station with direct trains from Delhi, making this the
                      most convenient and popular way to arrive, especially
                      overnight.
                    </li>
                    <li>
                      <strong>By Road:</strong> Ramnagar is about 250-260 km
                      from Delhi, roughly a 6-7 hour drive via Moradabad,
                      with regular bus services also available.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Most resorts sit along the
                    Kosi River belt just outside Ramnagar — factor in a short
                    drive from your stay to the safari zone gate, especially
                    for early-morning slots.
                  </div>
                </section>

                {/* ── Safari Zones ───────────────────────────────────────── */}
                <section id="safari-zones">
                  <h2>Safari Zones</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Forest track through Jim Corbett National Park used for jeep safaris"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Dhikala Zone</h3>
                  <p>
                    Corbett's most sought-after and scenic zone, set on the
                    banks of the Ramganga reservoir. Its open chaur grasslands
                    give excellent visibility for tigers, elephant herds, and
                    deer, and the setting itself — river, grassland, and
                    forest against a Himalayan foothill backdrop — is among
                    the most beautiful in Indian wildlife tourism. Access is
                    more restrictive: Dhikala typically requires an overnight
                    stay inside the zone at Forest Rest House
                    accommodation, booked well in advance, and it often has
                    the shortest open season of all the zones.
                  </p>
                  <h3>Bijrani Zone</h3>
                  <p>
                    The most popular zone for a day safari from Ramnagar,
                    Bijrani offers consistently good tiger activity and easy
                    access without an overnight stay requirement — the
                    practical choice for most first-time visitors on a
                    shorter trip.
                  </p>
                  <h3>Jhirna & Dhela Zones</h3>
                  <p>
                    Both zones stay open through more of the year, including
                    parts of the monsoon closure period elsewhere in the
                    park, making them useful options if you're visiting
                    outside the core November-June season.
                  </p>
                  <h3>Durga Devi Zone</h3>
                  <p>
                    A smaller, quieter zone known more for birdlife and
                    riverine scenery along the confluence of the Ramganga and
                    Mandal rivers than for big-cat sightings — a good pick
                    for birdwatchers wanting a different pace.
                  </p>
                </section>

                {/* ── Wildlife ────────────────────────────────────────────── */}
                <section id="wildlife">
                  <h2>Wildlife & Birdlife</h2>
                  <ul>
                    <li>
                      <strong>Bengal Tiger:</strong> Corbett's flagship
                      species and one of India's healthier tiger populations,
                      spread across its forest and grassland habitats.
                    </li>
                    <li>
                      <strong>Asian Elephant:</strong> Large herds are a
                      common sight, especially around Dhikala's grasslands
                      and the Ramganga's banks.
                    </li>
                    <li>
                      <strong>Deer species:</strong> Chital (spotted deer),
                      sambar, and hog deer are frequently spotted across most
                      zones, along with wild boar.
                    </li>
                    <li>
                      <strong>Leopards:</strong> More elusive than tigers, but
                      present across the park's forested terrain.
                    </li>
                    <li>
                      <strong>Birdlife:</strong> Over 600 recorded species
                      make Corbett a serious birdwatching destination in its
                      own right, from raptors to riverine waterfowl.
                    </li>
                  </ul>
                </section>

                {/* ── Beyond Safari ──────────────────────────────────────── */}
                <section id="beyond-safari">
                  <h2>Beyond the Safari</h2>
                  <ul>
                    <li>
                      <strong>Corbett Museum:</strong> Housed in Jim
                      Corbett's former residence at Kaladhungi, displaying his
                      belongings and chronicling his transition from
                      hunter to conservationist.
                    </li>
                    <li>
                      <strong>Garjiya Devi Temple:</strong> A riverside temple
                      on a rock island in the Kosi River, a popular short
                      visit near Ramnagar.
                    </li>
                    <li>
                      <strong>Ramganga river rafting:</strong> Gentler than
                      the white water further west, but a pleasant way to see
                      the river landscape from a different angle.
                    </li>
                    <li>
                      <strong>Kosi River resort belt:</strong> The main
                      accommodation stretch on the Ramnagar side of the park,
                      lined with resorts overlooking the riverbed.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Most accommodation sits along the Kosi River belt on the
                    Ramnagar side, with a smaller number of Forest Rest
                    House options inside the park itself for those staying
                    overnight at Dhikala.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,500–₹3,500/night",
                        picks: [
                          "Simple guesthouses in Ramnagar town",
                          "Budget lodges along the Kosi belt",
                          "Forest Rest House dormitory options",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹4,000–₹9,000/night",
                        picks: [
                          "Riverside resorts on the Kosi belt",
                          "Jungle-view cottages near the park gates",
                          "Mid-size safari lodges",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌳",
                        range: "₹12,000–₹30,000+/night",
                        picks: [
                          "High-end jungle resorts with guided safaris",
                          "Premium riverside villas",
                          "All-inclusive wildlife lodges",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Bijrani Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive in Ramnagar, check in along the Kosi belt",
                          "Afternoon jeep safari in Bijrani zone",
                          "Evening at leisure by the river",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Dhikala or Second Zone",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning safari in Dhikala or Jhirna zone",
                          "Visit the Corbett Museum at Kaladhungi",
                          "Afternoon at Garjiya Devi Temple",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Final Safari & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning safari for a last shot at sightings",
                          "Optional rafting on the Ramganga",
                          "Depart toward Ramnagar or onward",
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
                    * Many travellers combine Corbett with{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                    for a hill-station leg on the same trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Resort dining:</strong> Most stays along the
                      Kosi belt include multi-cuisine restaurants covering
                      North Indian, Continental, and Chinese options.
                    </li>
                    <li>
                      <strong>Local dhabas in Ramnagar:</strong> Simple, hearty
                      North Indian food at low prices, popular with drivers
                      and budget travellers.
                    </li>
                    <li>
                      <strong>Forest Rest House meals:</strong> Basic but
                      wholesome meals for those staying overnight inside
                      Dhikala, typically arranged in advance.
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
                            "Accommodation/night",
                            "₹2,000",
                            "₹6,000",
                            "₹18,000",
                          ],
                          ["Jeep safari (per drive)", "₹3,500", "₹4,500", "₹6,000"],
                          ["Food/day", "₹700", "₹1,800", "₹4,000"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹800",
                            "₹2,000",
                          ],
                          ["Daily total (approx.)", "₹6,500", "₹13,100", "₹30,000"],
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
                    * Figures are per person, per day. Jeep safaris are priced
                    per vehicle (usually shared across up to 6 people), not
                    per person, so costs drop sharply in a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Book safaris well in advance:</strong> Permits
                      for popular zones and weekend dates in peak season
                      sell out weeks ahead through the official booking
                      portal.
                    </li>
                    <li>
                      <strong>Do more than one safari:</strong> Sightings
                      aren't guaranteed on any single drive — 2-3 safaris
                      across different zones or times of day meaningfully
                      improve your odds.
                    </li>
                    <li>
                      <strong>Dress in neutral colours:</strong> Muted greens,
                      browns, and khakis work better than bright colours for
                      wildlife viewing.
                    </li>
                    <li>
                      <strong>Carry binoculars and a zoom lens:</strong>{" "}
                      Sightings are often at a distance, especially for
                      tigers.
                    </li>
                    <li>
                      <strong>Check zone-specific open dates:</strong> Not all
                      zones open and close on the same schedule — confirm
                      before booking, especially near the shoulder months.
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
                          "Book safari permits weeks ahead in peak season",
                          "Try at least two different zones",
                          "Wear neutral, muted clothing",
                          "Carry binoculars and a good zoom lens",
                          "Book Dhikala's overnight stay early if visiting",
                          "Stay quiet and patient during the drive",
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
                          "Assume a walk-up safari booking will work",
                          "Expect a tiger sighting on every single drive",
                          "Wear bright colours or use flash photography",
                          "Make loud noises inside the safari vehicle",
                          "Skip checking zone-specific season closures",
                          "Travel in mid-monsoon expecting all zones open",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Corbett with{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                    or{" "}
                    <Link href="/blog/ranikhet-travel-guide">Ranikhet</Link>{" "}
                    for a wildlife-and-hills leg, or see our{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand travel guide
                    </Link>{" "}
                    for the wider region.
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
                  "Jim Corbett National Park",
                  "Uttarakhand",
                  "Tiger Safari",
                  "Dhikala",
                  "Ramnagar",
                  "Wildlife Safari",
                  "Project Tiger",
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

              <RelatedPostsGrid currentSlug="jim-corbett-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jim-corbett-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
