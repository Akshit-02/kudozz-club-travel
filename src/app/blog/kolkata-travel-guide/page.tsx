// src/app/blog/kolkata-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kolkata Travel Guide: Heritage, Food & Culture",
  description:
    "Complete Kolkata travel guide — Victoria Memorial, Howrah Bridge, Durga Puja, College Street, Park Street food, where to stay, day trips, and a full visit plan for the City of Joy.",
  keywords:
    "Kolkata travel guide, Kolkata tourism, Victoria Memorial, Howrah Bridge, Durga Puja Kolkata, Dakshineswar Kali Temple, Belur Math, College Street Kolkata, Park Street, Indian Museum, Kumartuli, Kolkata trams, best time to visit Kolkata, Kolkata food guide, Kolkata day trips, West Bengal capital",
  openGraph: {
    title: "Kolkata Travel Guide: Heritage, Food & Culture",
    description:
      "The City of Joy — Victoria Memorial, Howrah Bridge, Durga Puja, College Street, and Bengal's richest food scene, all in one complete guide.",
    url: "https://club.kudozz.in/blog/kolkata-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/puducherry/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Grand colonial-era architecture in Kolkata, capital of West Bengal, evoking the city's British-colonial heritage buildings",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolkata Travel Guide: Heritage, Food & Culture",
    description:
      "Victoria Memorial, Howrah Bridge, Durga Puja, College Street, and Bengal's richest food scene — the complete Kolkata guide.",
    images: ["/images/destinations/puducherry/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kolkata-travel-guide",
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
          headline: "Kolkata Travel Guide: Heritage, Food & Culture",
          description:
            "Complete Kolkata travel guide — Victoria Memorial, Howrah Bridge, Durga Puja, College Street, Park Street food, where to stay, day trips, and a full visit plan for the City of Joy.",
          image: "https://club.kudozz.in/images/destinations/puducherry/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kolkata-travel-guide",
          },
          keywords:
            "Kolkata, Victoria Memorial, Howrah Bridge, Durga Puja, College Street, Dakshineswar, Belur Math, West Bengal",
          about: {
            "@type": "Place",
            name: "Kolkata",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Kolkata",
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
    q: "How many days do I need in Kolkata?",
    a: "Three to four days covers the essentials comfortably — a day for colonial landmarks (Victoria Memorial, Howrah Bridge, Indian Museum), a day for College Street, Kumartuli, and the tram-and-Coffee-House side of the city, a day for temples (Dakshineswar and Belur Math), and a day free for Park Street food and New Market shopping. Add extra nights if you're planning a day trip to Santiniketan or the Sundarbans.",
  },
  {
    q: "What is the best time to visit Kolkata?",
    a: "October to February is by far the best window — cool, dry, and comfortable for walking around the city. If your dates allow it, timing a visit around Durga Puja (usually September or October) is genuinely special, though hotels and travel book out well in advance. Avoid April to June, when heat and humidity peak, and July-August, the height of the monsoon.",
  },
  {
    q: "Is Durga Puja a good time to visit, or too crowded?",
    a: "Both, honestly. Durga Puja transforms Kolkata into an open-air festival of art and light, with thousands of elaborately themed pandals (temporary shrines) across the city — it's a genuinely unmissable cultural experience, recognised by UNESCO as an Intangible Cultural Heritage. But the crowds are enormous, hotel prices spike, and roads near major pandals can be gridlocked for hours in the evenings. If you go, book accommodation months ahead and pace your pandal-hopping across several days rather than trying to see everything in one night.",
  },
  {
    q: "How do I get around Kolkata?",
    a: "The Kolkata Metro (India's oldest, running since 1984) is fast and cheap for north-south routes along the Blue Line. Yellow taxis and app-based cabs (Uber, Ola) cover everywhere else, and are inexpensive by most city standards. For a slower, more atmospheric ride, Kolkata still runs India's last operating tram network on a few surviving routes — worth doing at least once, more for the experience than the speed.",
  },
  {
    q: "Is Kolkata safe for travellers?",
    a: "Yes, generally — Kolkata is considered one of India's safer major cities, with a reputation for a relatively low crime rate and a courteous, unhurried civic culture compared to some other metros. Usual city precautions apply: keep valuables secure in crowded areas like New Market and Puja pandals, and use registered taxis or app-based cabs at night.",
  },
  {
    q: "What are the best day trips from Kolkata?",
    a: "Santiniketan (Tagore's university town, ~180km) and Bishnupur (terracotta temples, ~200km) are best done as overnight trips rather than single-day dashes given the distance. Closer options include Mayapur (the ISKCON pilgrimage town on the Hooghly) and the Sundarbans mangrove forest, both of which work as long day trips or a single overnight. Digha, Bengal's most popular beach town, is a comfortable weekend trip from the city.",
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
  { id: "introduction", title: "The City of Joy", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "durga-puja", title: "Durga Puja in Kolkata", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kolkata", level: 2 },
  { id: "landmarks", title: "Colonial Landmarks & Temples", level: 2 },
  { id: "culture-quarter", title: "Literary & Cultural Kolkata", level: 2 },
  { id: "day-trips", title: "Day Trips from Kolkata", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KolkataGuidePage() {
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
              src="/images/destinations/puducherry/hero.jpg"
              alt="Grand colonial-era architecture in Kolkata, capital of West Bengal, evoking the city's British-colonial heritage buildings"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Kolkata", href: null },
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
                "Kolkata",
                "West Bengal",
                "Victoria Memorial",
                "Durga Puja",
                "Heritage City",
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
              Kolkata: The Complete City of Joy Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India's colonial-era capital reborn as its cultural heart —
              grand Raj-era architecture, the sub-continent's biggest street
              festival, and a food scene that rewards every hour you spend
              walking it.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Capital of West Bengal, Eastern India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,000 words",
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
                  <h2>The City of Joy</h2>
                  <p>
                    <strong>Kolkata</strong>, capital of{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>{" "}
                    and once the capital of British India until 1911, is a
                    city that rewards slow travel more than almost anywhere
                    else in the country. Nicknamed the "City of Joy," it
                    carries its colonial past — grand Raj-era buildings,
                    wide maidans, a network of trams — alongside a fiercely
                    independent intellectual and artistic identity built
                    around poetry, cinema, football, and food.
                  </p>
                  <p>
                    This is the city of Rabindranath Tagore and Satyajit
                    Ray, of adda (the unhurried Bengali art of long,
                    wide-ranging conversation) over cups of tea, and of a
                    festival calendar built around{" "}
                    <strong>Durga Puja</strong>, recognised by UNESCO as an
                    Intangible Cultural Heritage of Humanity. It is also,
                    unmistakably, a working megacity of over 4.5 million
                    people (more than 14 million across the wider
                    metropolitan area), with all the traffic, noise, and
                    density that implies.
                  </p>
                  <p>
                    Most visitors arrive expecting faded colonial grandeur
                    and leave remembering the food, the warmth of
                    conversation with strangers, and a pace of life that
                    insists you slow down and actually look at things — a
                    crumbling façade on a side street, an old bookstall on{" "}
                    <Link href="#culture-quarter">College Street</Link>, a
                    tram rattling past Esplanade at dusk.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Kolkata at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "West Bengal, Eastern India",
                        },
                        {
                          icon: "✈️",
                          label: "Airport",
                          value: "Netaji Subhas Chandra Bose Intl. (CCU)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🎉",
                          label: "Known For",
                          value: "Durga Puja, Victoria Memorial, Food",
                        },
                        {
                          icon: "🚋",
                          label: "Unique",
                          value: "India's last tram network",
                        },
                        {
                          icon: "🚉",
                          label: "Rail Hubs",
                          value: "Howrah & Sealdah",
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
                  <h2>Best Time to Visit Kolkata</h2>
                  <p>
                    Kolkata's climate is subtropical and can be genuinely
                    punishing outside its cool season — plan around the
                    calendar below rather than around your available dates
                    alone if you can help it.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant for long days of walking and sightseeing. This window also covers Durga Puja (usually late Sep-Oct) and the winter fair-and-festival season across Bengal.",
                      },
                      {
                        season: "Mar",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warming up",
                        text: "Still manageable, with temperatures starting to climb — a reasonable shoulder-season window before summer sets in properly.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Peak summer — avoid",
                        text: "Hot and increasingly humid ahead of the monsoon, with daytime temperatures frequently crossing 38-40°C. The least comfortable time to walk the city.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid and wet",
                        text: "Heavy rain and waterlogging are common on Kolkata's streets, though the city is well used to it. September edges toward Durga Puja season and dries out gradually.",
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
                    <strong>Our pick:</strong> late October through
                    February — cool, walkable weather, and if your dates
                    line up with late September or October, a real chance
                    to catch Durga Puja at its peak.
                  </blockquote>
                </section>

                {/* ── Durga Puja ────────────────────────────────────────── */}
                <section id="durga-puja">
                  <h2>Durga Puja in Kolkata</h2>
                  <p>
                    No single event defines Kolkata more than{" "}
                    <strong>Durga Puja</strong>. For five days each autumn
                    (usually falling somewhere in September or October,
                    following the lunar calendar), the entire city
                    transforms into an open-air gallery of art, light, and
                    devotion, honouring the goddess Durga's victory over the
                    demon Mahishasura. In 2021, UNESCO inscribed Kolkata's
                    Durga Puja on its list of Intangible Cultural Heritage
                    of Humanity — one of very few festivals worldwide to
                    receive that recognition.
                  </p>
                  <p>
                    Thousands of neighbourhood committees (paras) compete to
                    build the most elaborate <em>pandals</em> — temporary
                    bamboo-and-cloth pavilions housing intricately sculpted
                    clay idols of the goddess — many wrapped around
                    ambitious themes that range from mythological tableaux
                    to social commentary to full architectural replicas of
                    famous global landmarks. Locals and visitors alike
                    "pandal-hop" through the nights, dressed in new clothes,
                    eating street food, and taking in installations that
                    can take committees months to build and only days to
                    dismantle.
                  </p>
                  <p>
                    The idols themselves are largely handcrafted in{" "}
                    <strong>Kumartuli</strong>, Kolkata's centuries-old
                    potters' quarter (see the{" "}
                    <Link href="#culture-quarter">
                      culture section below
                    </Link>
                    ), where artisans work through the preceding months
                    shaping clay drawn from the Hooghly River into the
                    goddess and her family. On the festival's final day,
                    Bijoya Dashami, the idols are carried in procession to
                    the river and ceremonially immersed — a genuinely moving
                    close to the celebrations.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're visiting for Durga
                    Puja, book hotels and trains months in advance, plan to
                    pandal-hop on foot or by metro rather than by car (roads
                    near major pandals gridlock badly after dark), and
                    spread your sightseeing across several nights instead of
                    trying to see everything in one.
                  </div>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kolkata</h2>
                  <p>
                    As eastern India's largest city and a historic rail and
                    river port, Kolkata is exceptionally well connected by
                    air, rail, and road from across the country.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Netaji Subhas Chandra Bose
                      International Airport (CCU) has direct flights from
                      every major Indian city and a range of international
                      routes, particularly across South and Southeast Asia.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Kolkata is served by two
                      major terminals — <strong>Howrah</strong>, one of
                      India's oldest and busiest railway stations, on the
                      western bank of the Hooghly, and{" "}
                      <strong>Sealdah</strong>, on the eastern side, closer
                      to the city centre. Between them, they connect Kolkata
                      to virtually every part of India.
                    </li>
                    <li>
                      <strong>By Road:</strong> National highways connect
                      Kolkata to Bhubaneswar, Patna, and the rest of eastern
                      India, along with regular long-distance bus services
                      from neighbouring states.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your onward plans include{" "}
                    <Link href="/blog/santiniketan-travel-guide">
                      Santiniketan
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/bishnupur-travel-guide">
                      Bishnupur
                    </Link>
                    , trains from Howrah are usually faster and more
                    comfortable than the equivalent road trip.
                  </div>
                </section>

                {/* ── Landmarks ─────────────────────────────────────────── */}
                <section id="landmarks">
                  <h2>Colonial Landmarks & Temples</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/puducherry/hero.jpg"
                      alt="Colonial-era architecture reminiscent of Kolkata's grand British-era buildings"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Victoria Memorial</h3>
                  <p>
                    Kolkata's most recognisable landmark, this vast white
                    marble monument was built between 1906 and 1921 to
                    commemorate Queen Victoria, blending British and Mughal
                    architectural styles into something distinctly its own.
                    Today it houses a museum of colonial-era art, artefacts,
                    and manuscripts, set within sprawling formal gardens
                    that are as popular for an evening walk as the building
                    itself. The monument is particularly striking at dusk,
                    when it's floodlit against the darkening sky.
                  </p>
                  <h3>Howrah Bridge</h3>
                  <p>
                    A cantilever bridge spanning the Hooghly River between
                    Kolkata and Howrah, this is one of the busiest bridges
                    in the world, carrying an estimated 100,000-plus
                    vehicles and countless pedestrians daily without a
                    single supporting pillar in the river itself — an
                    engineering feat completed in 1943. The view from the
                    riverbank, especially early morning or around sunset
                    when the flower market near Mullick Ghat is in full
                    swing beneath it, is one of the city's iconic sights.
                  </p>
                  <h3>Indian Museum & Marble Palace</h3>
                  <p>
                    Founded in 1814, the <strong>Indian Museum</strong> is
                    the oldest and largest museum in India, holding an
                    enormous collection spanning archaeology, art, geology,
                    and natural history — its Egyptian mummy and Bharhut
                    Buddhist stupa railings are particular highlights. Not
                    far away, the <strong>Marble Palace</strong>, a private
                    19th-century mansion built by a wealthy Bengali
                    merchant family, is packed with statuary, chandeliers,
                    and paintings collected over generations, and still
                    partly occupied by the family's descendants — visits
                    require a permit arranged a day in advance through the
                    West Bengal Tourism office.
                  </p>
                  <h3>Dakshineswar Kali Temple & Belur Math</h3>
                  <p>
                    On the northern edge of the city, the{" "}
                    <strong>Dakshineswar Kali Temple</strong> is one of
                    Bengal's most significant Hindu pilgrimage sites, built
                    in 1855 and famous as the temple where the mystic saint
                    Ramakrishna Paramahamsa served as priest. Across the
                    river, <strong>Belur Math</strong>, headquarters of the
                    Ramakrishna Mission founded by his disciple Swami
                    Vivekananda, is architecturally striking in its own
                    right — its main temple deliberately blends Hindu,
                    Islamic, and Christian design elements to symbolise the
                    unity of religions. Both are easily combined into a
                    single half-day trip.
                  </p>
                </section>

                {/* ── Culture Quarter ───────────────────────────────────── */}
                <section id="culture-quarter">
                  <h2>Literary & Cultural Kolkata</h2>
                  <h3>College Street & Indian Coffee House</h3>
                  <p>
                    Asia's largest second-hand book market spills along{" "}
                    <strong>College Street</strong> for nearly a kilometre,
                    stall after stall of new, used, and rare titles
                    surrounding the University of Calcutta and Presidency
                    University. At its heart sits the century-old{" "}
                    <strong>Indian Coffee House</strong>, a high-ceilinged,
                    fan-cooled institution that has hosted generations of
                    students, writers, and revolutionaries over cups of
                    coffee and hours of adda — still very much a working
                    café rather than a museum piece.
                  </p>
                  <h3>Kumartuli, the Idol-Makers' Quarter</h3>
                  <p>
                    A warren of narrow lanes near the Hooghly where
                    generations of <em>kumars</em> (potters) have shaped clay
                    idols for Durga Puja and Bengal's other major festivals
                    for over 300 years. Visiting outside festival season
                    still offers a fascinating look at the craft in
                    progress — bamboo armatures being built, straw and clay
                    layered on, faces painted with astonishing precision —
                    and the run-up to Puja season transforms it into one of
                    the city's most atmospheric places to walk through.
                  </p>
                  <h3>Trams, Park Street & the Maidan</h3>
                  <p>
                    Kolkata operates the last functioning tram network in
                    India, a slow, creaking system dating to 1873 that
                    survives on a handful of routes today — riding one, even
                    briefly, is a small piece of living history.{" "}
                    <strong>Park Street</strong>, the city's most storied
                    boulevard, comes alive with lights and crowds every
                    December for Kolkata's Christmas celebrations, and holds
                    some of the city's oldest cafés and restaurants
                    year-round. Nearby, the vast open expanse of the{" "}
                    <strong>Maidan</strong> — one of the largest urban parks
                    in the world — hosts everything from football matches to
                    morning walkers to, at its eastern edge,{" "}
                    <strong>Eden Gardens</strong>, one of world cricket's
                    most storied stadiums.
                  </p>
                  <h3>New Market</h3>
                  <p>
                    A sprawling, atmospheric covered market dating to 1874,
                    New Market (officially Sir Stuart Hogg Market) is
                    Kolkata's classic shopping experience — everything from
                    tailored clothing and leather goods to spices, sweets,
                    and souvenirs, spread across a maze of stalls under a
                    distinctive red-brick clock tower.
                  </p>
                </section>

                {/* ── Day Trips ─────────────────────────────────────────── */}
                <section id="day-trips">
                  <h2>Day Trips from Kolkata</h2>
                  <p>
                    Kolkata's location makes it a natural base for exploring
                    the rest of{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>{" "}
                    — from mangrove forests to terracotta temple towns to
                    India's most famous university campus.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/sundarbans-travel-guide">
                          Sundarbans
                        </Link>
                      </strong>
                      : The world's largest mangrove forest and the only
                      mangrove habitat home to wild Bengal tigers — best done
                      as an overnight boat safari rather than a rushed single
                      day.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/santiniketan-travel-guide">
                          Santiniketan
                        </Link>
                      </strong>
                      : Rabindranath Tagore's university town, roughly 180km
                      away, home to the UNESCO-listed Vishwa-Bharati campus.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/bishnupur-travel-guide">
                          Bishnupur
                        </Link>
                      </strong>
                      : Bengal's terracotta temple capital, around 200km from
                      the city, best combined with an overnight stay.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/mayapur-travel-guide">
                          Mayapur
                        </Link>
                      </strong>
                      : ISKCON's major pilgrimage town on the banks of the
                      Hooghly, a comfortable half-day to full-day trip.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/digha-travel-guide">Digha</Link>
                      </strong>
                      : West Bengal's most popular beach town, a manageable
                      weekend trip by road or rail.
                    </li>
                    <li>
                      <strong>Murshidabad</strong> and{" "}
                      <strong>Gangasagar</strong>: See our full{" "}
                      <Link href="/blog/murshidabad-travel-guide">
                        Murshidabad guide
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/gangasagar-travel-guide">
                        Gangasagar guide
                      </Link>{" "}
                      for two further options further afield.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kolkata</h2>
                  <p>
                    Kolkata's best hotel districts cluster around Park
                    Street/Chowringhee (central, walkable to major sights)
                    and the riverside area near the Maidan, with budget
                    options concentrated around Sudder Street.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,500/night",
                        picks: [
                          "Backpacker hostels near Sudder Street",
                          "Simple lodges near Howrah/Sealdah",
                          "Guesthouses close to New Market",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹8,000/night",
                        picks: [
                          "Business hotels around Park Street",
                          "Boutique heritage stays in colonial buildings",
                          "Chain hotels near the Maidan",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹12,000–₹35,000+/night",
                        picks: [
                          "The Oberoi Grand",
                          "Taj Bengal",
                          "ITC Royal Bengal / ITC Sonar",
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
                  <h2>Suggested Visit Plan (3-4 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Colonial Kolkata",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at Victoria Memorial and its gardens",
                          "Walk to the Maidan and Eden Gardens",
                          "Sunset at Howrah Bridge and the flower market",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Literary Kolkata",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at College Street and Indian Coffee House",
                          "Afternoon walk through Kumartuli",
                          "Evening tram ride and Park Street dinner",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Temples & Museums",
                        color: "bg-forest-600",
                        activities: [
                          "Morning at Dakshineswar Kali Temple",
                          "Cross to Belur Math for the afternoon",
                          "Evening at Indian Museum or Marble Palace",
                        ],
                      },
                      {
                        day: "Day 4 (optional)",
                        title: "Day Trip",
                        color: "bg-purple-600",
                        activities: [
                          "Half or full day to Mayapur or the Sundarbans",
                          "Or an overnight to Santiniketan or Bishnupur",
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
                    * If visiting during Durga Puja, treat evenings as
                    dedicated pandal-hopping time and shift sightseeing to
                    mornings.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kolkata</h2>
                  <p>
                    Kolkata's food culture runs deep — Bengali cuisine's
                    signature use of mustard, fish, and subtly sweet notes,
                    layered with a century of Anglo-Indian, Chinese, and
                    Mughlai influence that makes this one of India's most
                    rewarding cities to eat in.
                  </p>
                  <ul>
                    <li>
                      <strong>Bengali thalis and fish curries:</strong>{" "}
                      Shorshe ilish (hilsa in mustard sauce), macher jhol
                      (fish curry), and kosha mangsho (slow-cooked mutton)
                      are the dishes to seek out at traditional Bengali
                      restaurants across the city.
                    </li>
                    <li>
                      <strong>Park Street institutions:</strong> Flurys, a
                      bakery-café operating on Park Street since 1927, and
                      Peter Cat, known for its Chelo Kebab, are two of the
                      city's most enduring dining landmarks.
                    </li>
                    <li>
                      <strong>Street food:</strong> Puchka (Kolkata's version
                      of pani puri), kathi rolls (originally invented here),
                      and jhalmuri are essential, inexpensive street eating.
                    </li>
                    <li>
                      <strong>Sweets:</strong> Rosogolla, sandesh, and mishti
                      doi (sweetened yoghurt) are Bengal's most famous
                      exports — sweet shops across the city sell them fresh
                      daily.
                    </li>
                    <li>
                      <strong>Indian Coffee House:</strong> More about the
                      atmosphere and conversation than the menu, but worth
                      an hour with a coffee regardless.
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
                            "₹1,200",
                            "₹5,000",
                            "₹15,000",
                          ],
                          ["Food/day", "₹500", "₹1,500", "₹3,500"],
                          [
                            "Local transport/day",
                            "₹200",
                            "₹600",
                            "₹1,800",
                          ],
                          [
                            "Sightseeing entry fees/day",
                            "₹200",
                            "₹400",
                            "₹800",
                          ],
                          ["Day trip (Mayapur/Sundarbans)", "₹1,500", "₹3,000", "₹6,000"],
                          ["Daily total (approx.)", "₹2,100", "₹7,500", "₹21,100"],
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
                    * Figures are per person, per day, and exclude flights
                    or trains into the city. Prices rise significantly
                    during Durga Puja.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kolkata</h2>
                  <ul>
                    <li>
                      <strong>Book well ahead for Durga Puja:</strong>{" "}
                      Hotels and trains fill up months before the festival —
                      don't leave it to the last minute if these dates
                      matter to your trip.
                    </li>
                    <li>
                      <strong>Use the Metro for north-south trips:</strong>{" "}
                      India's oldest metro system is fast, cheap, and avoids
                      Kolkata's notorious traffic for many key routes.
                    </li>
                    <li>
                      <strong>Carry an umbrella outside winter:</strong> Rain
                      can arrive suddenly, and Kolkata's streets are prone
                      to waterlogging in the monsoon months.
                    </li>
                    <li>
                      <strong>Try the street food, but choose busy
                      stalls:</strong> High turnover generally means fresher
                      ingredients — puchka and kathi rolls from popular
                      stalls are usually safe and delicious.
                    </li>
                    <li>
                      <strong>Ride a tram at least once:</strong> It's slow
                      and not always the fastest way to get anywhere, but
                      it's a piece of living history you won't find
                      elsewhere in India.
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
                          "Walk College Street and Kumartuli slowly",
                          "Book hotels early if visiting during Durga Puja",
                          "Try Bengali fish curry and street food",
                          "Take the metro for longer north-south trips",
                          "Visit Dakshineswar and Belur Math together",
                          "Ride a tram at least once",
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
                          "Try to see all of Durga Puja in a single night",
                          "Rely on road travel during peak festival evenings",
                          "Skip an umbrella outside the winter months",
                          "Rush the Indian Museum — it deserves 2-3 hours",
                          "Expect the Marble Palace without a permit",
                          "Underestimate Kolkata's summer heat",
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
                    <strong>🗺️ Extend the trip:</strong> Use Kolkata as your
                    base to explore the rest of{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>{" "}
                    — the terracotta temples of{" "}
                    <Link href="/blog/bishnupur-travel-guide">
                      Bishnupur
                    </Link>
                    , Tagore's{" "}
                    <Link href="/blog/santiniketan-travel-guide">
                      Santiniketan
                    </Link>
                    , or the mangrove forests of the{" "}
                    <Link href="/blog/sundarbans-travel-guide">
                      Sundarbans
                    </Link>{" "}
                    are all within easy reach.
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
                  "Kolkata",
                  "West Bengal",
                  "Victoria Memorial",
                  "Durga Puja",
                  "Howrah Bridge",
                  "Heritage City",
                  "Bengali Cuisine",
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

              <RelatedPostsGrid currentSlug="kolkata-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kolkata-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
