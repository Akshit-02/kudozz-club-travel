// src/app/blog/lucknow-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Lucknow Travel Guide: Nawabi Heritage & Food",
  description:
    "Complete Lucknow travel guide — Bara Imambara and the Bhul Bhulaiya, Chota Imambara, Rumi Darwaza, the Residency, Chikankari shopping, and the city's legendary Awadhi street food.",
  keywords:
    "Lucknow travel guide, City of Nawabs, Bara Imambara, Bhul Bhulaiya, Chota Imambara, Rumi Darwaza, Lucknow Residency, Chikankari embroidery, Hazratganj, Chowk Lucknow, Awadhi biryani, galouti kebab, Lucknow street food, Lucknow tehzeeb, Charbagh railway station, Uttar Pradesh travel guide",
  openGraph: {
    title: "Lucknow Travel Guide: Nawabi Heritage & Food",
    description:
      "The City of Nawabs — Bara Imambara's labyrinth, Chikankari markets, and Awadhi food that built the city's reputation for tehzeeb, refinement, and unhurried hospitality.",
    url: "https://club.kudozz.in/blog/lucknow-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/puducherry/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Grand Nawabi-era domed architecture and arched gateways in Lucknow, the City of Nawabs",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucknow Travel Guide: Nawabi Heritage & Food",
    description:
      "Bara Imambara's Bhul Bhulaiya, Chikankari markets, and Awadhi street food — the complete guide to the City of Nawabs.",
    images: ["/images/destinations/puducherry/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lucknow-travel-guide",
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
          headline: "Lucknow Travel Guide: Nawabi Heritage & Food",
          description:
            "Complete Lucknow travel guide — Bara Imambara and the Bhul Bhulaiya, Chota Imambara, Rumi Darwaza, the Residency, Chikankari shopping, and the city's legendary Awadhi street food.",
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
            "@id": "https://club.kudozz.in/blog/lucknow-travel-guide",
          },
          keywords:
            "Lucknow, City of Nawabs, Bara Imambara, Bhul Bhulaiya, Chikankari, Awadhi cuisine, Rumi Darwaza",
          about: {
            "@type": "Place",
            name: "Lucknow",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
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
                name: "Lucknow",
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
    q: "What is the Bhul Bhulaiya inside Bara Imambara?",
    a: "The Bhul Bhulaiya is a labyrinth of narrow interconnecting passages built into the upper storey of Bara Imambara, designed with hundreds of identical doorways so that navigating it without a guide is genuinely disorienting. It also serves a structural purpose — the maze of galleries helps support the vast central hall below, which is one of the largest arched halls in the world built without a single supporting beam or pillar.",
  },
  {
    q: "How many days do I need in Lucknow?",
    a: "2-3 days covers the city comfortably — a full day for Bara Imambara, Chota Imambara, and Rumi Darwaza in the old city; half a day for the Residency; and time set aside for Chikankari shopping and working through the street food trail in Hazratganj, Chowk, and Aminabad. Add a day if you're using Lucknow as a base for a day trip to Kannauj or Naimisharanya.",
  },
  {
    q: "What is Chikankari and where should I buy it in Lucknow?",
    a: "Chikankari is Lucknow's signature white-thread shadow embroidery, traditionally worked on fine muslin or cotton and said to have been refined under Nawabi patronage in the 18th and 19th centuries. Chowk is the traditional heart of the craft, with generations-old family workshops and retailers, while Hazratganj offers a more organised, boutique shopping experience for the same embroidery on kurtas, sarees, and dupattas.",
  },
  {
    q: "What is Lucknow's food famous for?",
    a: "Lucknow's Awadhi cuisine is built on slow-cooked, richly spiced Mughlai-influenced food — melt-in-the-mouth galouti kebabs (developed, legend has it, for a toothless Nawab), fragrant dum-cooked biryani, nihari, and kulfi falooda for dessert. The old city's food lanes around Chowk and Aminabad are where most of this tradition is still eaten standing up at decades-old stalls.",
  },
  {
    q: "What does Lucknow's 'tehzeeb' reputation actually mean?",
    a: "Tehzeeb refers to a wider culture of refined courtesy, unhurried hospitality, and elaborate politeness that Lucknow became known for during its Nawabi period — the classic (if exaggerated) example is two people at a doorway each insisting the other go first. It shows up today in the city's famously polite forms of address and its slower, more gracious pace compared to many other big Indian cities.",
  },
  {
    q: "How do I reach Lucknow?",
    a: "Chaudhary Charan Singh International Airport connects Lucknow to most major Indian cities and several international destinations. Lucknow Junction (Charbagh) is one of North India's major rail hubs with trains from across the country, and the city is well linked by road via NH27, the Agra-Lucknow Expressway, and the Purvanchal Expressway.",
  },
  {
    q: "Is Lucknow a good base for day trips in Uttar Pradesh?",
    a: "Yes — Lucknow's rail and road connectivity make it a practical base for day or overnight trips to Kannauj (India's perfume town), the sacred forest town of Naimisharanya, and onward travel toward Ayodhya or Shravasti, all of which sit within a few hours of the city.",
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
  { id: "introduction", title: "The City of Nawabs", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lucknow", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "shopping", title: "Chikankari & Shopping", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LucknowGuidePage() {
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
              alt="Grand Nawabi-era domed architecture and arched gateways in Lucknow, the City of Nawabs"
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
                { label: "Lucknow", href: null },
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
                "Lucknow",
                "Uttar Pradesh",
                "Bara Imambara",
                "Nawabi Heritage",
                "Chikankari",
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
              Lucknow: The Complete Nawabi Heritage & Food Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The capital of Uttar Pradesh and the City of Nawabs — Bara
              Imambara's beamless hall and labyrinth, Chikankari embroidery
              markets, and a street food tradition that still defines Awadhi
              cuisine across India.
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
                  text: "Lucknow, Uttar Pradesh",
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
                  <h2>The City of Nawabs</h2>
                  <p>
                    <strong>Lucknow</strong>, the capital of{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , carries a nickname it has earned over nearly three
                    centuries: the <strong>City of Nawabs</strong>. From the
                    mid-18th century, as Mughal power weakened, the Nawabs of
                    Awadh made Lucknow their capital and poured extraordinary
                    wealth into architecture, poetry, music, cuisine, and a
                    particular style of courtly manners that the city is
                    still known for today. The result is a place where grand
                    Indo-Islamic monuments, a genuinely distinct craft
                    tradition, and one of India's most celebrated food
                    cultures all sit within a compact, walkable old city.
                  </p>
                  <p>
                    Lucknow's skyline is still dominated by its Nawabi-era
                    landmarks — the vast congregation hall of{" "}
                    <strong>Bara Imambara</strong>, the delicately ornamented{" "}
                    <strong>Chota Imambara</strong>, and the ceremonial arch
                    of <strong>Rumi Darwaza</strong> — while the{" "}
                    <strong>Residency</strong>'s bullet-scarred ruins tell a
                    very different, later chapter of the city's history, from
                    the 1857 Revolt. Layered over all of this is Lucknow's
                    living culture: the fine white-thread{" "}
                    <strong>Chikankari</strong> embroidery sold across
                    Chowk and Hazratganj, and street food — galouti kebabs,
                    dum-cooked biryani, kulfi falooda — that has shaped how
                    much of India thinks about Awadhi cuisine.
                  </p>
                  <p>
                    Lucknow is also a genuinely useful base. Its rail and
                    road links make it a practical launchpad for trips
                    further into Uttar Pradesh — the perfume town of{" "}
                    <Link href="/blog/kannauj-travel-guide">Kannauj</Link>,
                    the sacred forest of{" "}
                    <Link href="/blog/naimisharanya-travel-guide">
                      Naimisharanya
                    </Link>
                    , and onward toward{" "}
                    <Link href="/blog/ayodhya-travel-guide">Ayodhya</Link> and{" "}
                    <Link href="/blog/shravasti-travel-guide">Shravasti</Link>
                    . Most visitors give the city itself 2-3 days before
                    heading further out.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Lucknow at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Capital of Uttar Pradesh",
                        },
                        {
                          icon: "✈️",
                          label: "Airport",
                          value: "Chaudhary Charan Singh Intl.",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🕌",
                          label: "Known For",
                          value: "Bara Imambara, Nawabi Heritage",
                        },
                        {
                          icon: "🧵",
                          label: "Craft",
                          value: "Chikankari Embroidery",
                        },
                        {
                          icon: "🍢",
                          label: "Food",
                          value: "Galouti Kebab, Biryani",
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
                  <h2>Best Time to Visit Lucknow</h2>
                  <p>
                    Lucknow sits in the Gangetic plains, which means sharp
                    seasonal swings — winter is genuinely pleasant for
                    sightseeing, while summer is punishing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable for walking the old city and its markets. December-January can turn cold and foggy in the mornings — pack a light jacket.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Peak summer — avoid",
                        text: "Daytime temperatures frequently cross 40°C with dry, dusty heat. Sightseeing is punishing outside early morning and evening hours.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — workable",
                        text: "Humid with periodic heavy rain, but temperatures are lower than summer. Indoor sights and markets remain fully accessible.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌫️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, foggy mornings",
                        text: "The most pleasant window for daytime sightseeing, but early mornings can be foggy enough to delay trains and flights — build in buffer time.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    temperatures for exploring the old city on foot and for
                    lingering over street food without the summer heat
                    cutting your day short.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Lucknow</h2>
                  <p>
                    As the state capital, Lucknow is one of the
                    best-connected cities in North India by air, rail, and
                    road.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Chaudhary Charan Singh
                      International Airport has frequent domestic flights
                      from Delhi, Mumbai, Bangalore, Kolkata, and other major
                      cities, plus a handful of international connections to
                      the Gulf.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Lucknow Junction (Charbagh) is
                      one of North India's major rail hubs, with trains
                      arriving from virtually every part of the country.
                      Lucknow's distinctive Charbagh station building, with
                      its domes styled after Rajasthani palaces, is worth a
                      look even if you're just passing through.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected via NH27, the
                      Agra-Lucknow Expressway, and the Purvanchal Expressway,
                      which links Lucknow eastward toward Ayodhya, Azamgarh,
                      and Ghazipur.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're travelling onward
                    to Kannauj or Naimisharanya, Lucknow's road connectivity
                    is generally more reliable than rail for a same-day day
                    trip — hire a car for the flexibility.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Lucknow</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/puducherry/hero.jpg"
                      alt="Nawabi-era architecture and arched gateways of old Lucknow"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Bara Imambara & the Bhul Bhulaiya</h3>
                  <p>
                    Built in 1784 by Nawab Asaf-ud-Daula, Bara Imambara is
                    best known for two things: its central hall, one of the
                    largest arched halls in the world constructed entirely
                    without beams or supporting pillars, and the{" "}
                    <strong>Bhul Bhulaiya</strong> — a labyrinth of narrow,
                    interconnecting passages built into the structure's
                    upper storey. The maze isn't just a curiosity; it's
                    structurally load-bearing, distributing weight above the
                    beamless hall below. Local guides are genuinely useful
                    here — the passages have hundreds of near-identical
                    doorways, and getting lost without one is easy. The
                    complex also includes the Asfi Mosque and a stepwell,
                    both worth building into your visit.
                  </p>

                  <h3>Chota Imambara</h3>
                  <p>
                    Built roughly half a century after its larger namesake
                    by Nawab Muhammad Ali Shah, Chota Imambara is smaller but
                    considerably more ornate — its interior is decorated with
                    chandeliers, gilded mirrors, and calligraphy, and it
                    doubles as the mausoleum of the Nawab who commissioned
                    it. The reflecting pool in front of the building, flanked
                    by smaller domed pavilions, makes for one of Lucknow's
                    most photographed views, particularly around sunset.
                  </p>

                  <h3>Rumi Darwaza</h3>
                  <p>
                    A soaring 60-foot gateway built in the same construction
                    programme as Bara Imambara, Rumi Darwaza is styled after
                    a gate in Istanbul and has become one of Lucknow's
                    unofficial symbols — it appears on municipal signage and
                    tourism branding across the city. It's illuminated at
                    night and sits close enough to Bara Imambara and Chota
                    Imambara to combine all three in a single walking loop
                    through the old city.
                  </p>

                  <h3>The Residency</h3>
                  <p>
                    A markedly different historical register from the
                    Nawabi monuments: the Residency was the fortified
                    compound of the British Resident, besieged for nearly
                    five months during the 1857 Revolt. Its buildings still
                    stand as ruins, pockmarked by cannon and musket fire,
                    set within a quiet, well-tended park that makes for a
                    reflective contrast to the ornamentation of the old
                    city's other monuments. An on-site museum covers the
                    siege in detail.
                  </p>

                  <h3>Other Notable Sights</h3>
                  <p>
                    Beyond the headline monuments, the <strong>Husainabad
                    Clock Tower</strong> — one of the tallest clock towers
                    in India, built in a distinctly Victorian-Gothic style
                    that stands out against Lucknow's Indo-Islamic
                    architecture — and the domed <strong>Jama Masjid</strong>{" "}
                    nearby are both easy add-ons to an old-city walking
                    route. Travellers with more time also visit the
                    <strong> British Residency's Shaheed Smarak</strong> and
                    the leafy grounds of La Martiniere College, one of
                    India's most distinctive school buildings.
                  </p>
                </section>

                {/* ── Shopping ───────────────────────────────────────────── */}
                <section id="shopping">
                  <h2>Chikankari & Shopping</h2>
                  <p>
                    <strong>Chikankari</strong> is Lucknow's most famous
                    craft export — a delicate white-thread shadow embroidery
                    traditionally worked on fine muslin, cotton, or georgette.
                    Popular tradition credits its refinement to the Nawabi
                    court, though the technique's roots likely reach further
                    back; what's certain is that Lucknow became, and remains,
                    its recognised home. Skilled artisans work dozens of
                    stitch types by hand, and genuine hand-embroidered pieces
                    can take days or weeks to complete, which shows in the
                    price difference between machine and hand work.
                  </p>
                  <ul>
                    <li>
                      <strong>Chowk:</strong> The traditional heart of
                      Chikankari, with generations-old family workshops and
                      wholesale-facing shops lining its narrow lanes —
                      the place to see the craft closest to its roots.
                    </li>
                    <li>
                      <strong>Hazratganj:</strong> Lucknow's most polished
                      shopping street, with organised boutiques selling
                      Chikankari on kurtas, sarees, and dupattas alongside
                      cafés and other retail — a more comfortable
                      first stop if Chowk's lanes feel overwhelming.
                    </li>
                    <li>
                      <strong>Aminabad:</strong> A busy, largely local market
                      good for everyday shopping, street food, and a more
                      unfiltered sense of the old city's commercial life.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ask specifically for hand
                    embroidery ("haath ki kadhai") if authenticity matters to
                    you — machine-embroidered pieces are common, cheaper, and
                    visually similar at a glance.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Lucknow</h2>
                  <p>
                    Hazratganj and Gomti Nagar are the most convenient bases
                    for most visitors — central, well connected, and close
                    to both the old city's monuments and the newer parts of
                    town.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏨",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Guesthouses near Charbagh station",
                          "Budget hotels in Aminabad/Hazratganj",
                          "Chain budget hotels near the airport",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏛️",
                        range: "₹3,500–₹7,000/night",
                        picks: [
                          "Business hotels in Hazratganj",
                          "Boutique heritage-style stays near Chowk",
                          "Mid-range chains in Gomti Nagar",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "👑",
                        range: "₹8,000–₹20,000+/night",
                        picks: [
                          "International 5-star chains in Gomti Nagar",
                          "Heritage-style luxury properties",
                          "Premium business hotels near the airport",
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
                        title: "Old City Monuments",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at Bara Imambara and the Bhul Bhulaiya",
                          "Rumi Darwaza and Chota Imambara nearby",
                          "Evening street food trail in Chowk",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "History & Shopping",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at the Residency ruins and museum",
                          "Afternoon Chikankari shopping in Hazratganj",
                          "Evening at Husainabad Clock Tower",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Day Trip or Onward",
                        color: "bg-forest-600",
                        activities: [
                          "Day trip to Kannauj or Naimisharanya",
                          "Or continue onward toward Ayodhya/Shravasti",
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
                    * Many travellers use Lucknow as a base for{" "}
                    <Link href="/blog/kannauj-travel-guide">Kannauj</Link> or{" "}
                    <Link href="/blog/naimisharanya-travel-guide">
                      Naimisharanya
                    </Link>{" "}
                    day trips before continuing to{" "}
                    <Link href="/blog/ayodhya-travel-guide">Ayodhya</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Lucknow</h2>
                  <p>
                    Awadhi cuisine is arguably Lucknow's single biggest
                    draw for many visitors — a tradition of slow, dum-style
                    cooking developed under Nawabi kitchens and still very
                    much alive in the old city's food lanes.
                  </p>
                  <ul>
                    <li>
                      <strong>Galouti kebab:</strong> Finely minced, heavily
                      spiced meat kebabs cooked on a griddle, famous for
                      being soft enough to eat without much chewing —
                      legend attributes their invention to an ageing Nawab
                      who could no longer manage tougher kebabs. Tunday-style
                      kebab shops around Chowk and Aminabad are the classic
                      places to try them, usually stuffed into a small
                      roomali roti.
                    </li>
                    <li>
                      <strong>Awadhi biryani:</strong> Distinct from
                      Hyderabadi or Kolkata biryani, cooked using the dum
                      method — meat and part-cooked rice sealed together
                      and finished slowly over low heat — resulting in a
                      lighter, more fragrant dish than its heavier southern
                      cousins.
                    </li>
                    <li>
                      <strong>Nihari and kulcha:</strong> A slow-cooked,
                      richly spiced meat stew traditionally eaten at
                      breakfast, paired with soft leavened bread — widely
                      available in the old city's morning food stalls.
                    </li>
                    <li>
                      <strong>Kulfi falooda:</strong> Dense, slow-churned
                      kulfi served with vermicelli noodles and rose syrup —
                      the city's signature dessert, sold at long-running
                      stalls across Chowk and Hazratganj.
                    </li>
                    <li>
                      <strong>Paan:</strong> Lucknow's betel-leaf paan
                      culture is its own small tradition, with elaborate
                      sweet and savoury preparations sold at dedicated shops
                      across the old city.
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
                          ["Accommodation/night", "₹1,500", "₹5,000", "₹14,000"],
                          ["Food/day", "₹500", "₹1,300", "₹3,000"],
                          ["Local transport/day", "₹300", "₹700", "₹1,800"],
                          ["Monument entry fees", "₹200–500", "₹200–500", "₹200–500"],
                          ["Chikankari shopping", "₹800+", "₹2,500+", "₹8,000+"],
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
                    * Figures are per person, per day. Chikankari costs vary
                    enormously by piece and whether it's hand or machine
                    embroidered.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Lucknow</h2>
                  <ul>
                    <li>
                      <strong>Hire a guide for Bhul Bhulaiya:</strong> The
                      passages inside Bara Imambara are genuinely confusing —
                      an official guide (available at the site) makes the
                      visit far more worthwhile.
                    </li>
                    <li>
                      <strong>Visit monuments early morning:</strong> Bara
                      Imambara and the Residency get busy and hot by midday
                      — arriving soon after opening is more comfortable and
                      less crowded.
                    </li>
                    <li>
                      <strong>Dress modestly at religious sites:</strong>{" "}
                      Bara Imambara's complex includes an active mosque —
                      cover shoulders and knees out of respect.
                    </li>
                    <li>
                      <strong>Bargain respectfully in Chowk:</strong> Prices
                      in the old city's markets are often negotiable,
                      especially for Chikankari — but keep in mind genuine
                      hand embroidery takes real time and skill to produce.
                    </li>
                    <li>
                      <strong>Try food where locals queue:</strong> Lucknow's
                      best kebab and biryani spots are often small,
                      decades-old stalls rather than large restaurants —
                      a queue is usually a good sign.
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
                          "Take a guide through the Bhul Bhulaiya",
                          "Visit Bara Imambara and the Residency early morning",
                          "Ask specifically for hand-embroidered Chikankari",
                          "Try galouti kebabs and kulfi falooda in Chowk",
                          "Combine Rumi Darwaza with both Imambaras in one loop",
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
                          "Wander the Bhul Bhulaiya alone without a guide",
                          "Visit major monuments during peak midday heat in summer",
                          "Assume every Chikankari piece is hand-embroidered",
                          "Rush the old city — it rewards slow walking",
                          "Skip breakfast nihari thinking it's just another curry",
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
                    <strong>🗺️ Extend the trip:</strong> From Lucknow, most
                    travellers head to{" "}
                    <Link href="/blog/kannauj-travel-guide">
                      Kannauj
                    </Link>{" "}
                    for its perfume workshops, or{" "}
                    <Link href="/blog/naimisharanya-travel-guide">
                      Naimisharanya
                    </Link>{" "}
                    for its sacred forest sites, before continuing to{" "}
                    <Link href="/blog/ayodhya-travel-guide">Ayodhya</Link> or{" "}
                    <Link href="/blog/shravasti-travel-guide">Shravasti</Link>
                    . See the full{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh travel guide
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
                  "Lucknow",
                  "Uttar Pradesh",
                  "Bara Imambara",
                  "Nawabi Heritage",
                  "Chikankari",
                  "Street Food",
                  "Residency",
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

              <RelatedPostsGrid currentSlug="lucknow-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="lucknow-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
