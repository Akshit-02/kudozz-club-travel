// src/app/blog/akshardham-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Akshardham Temple Delhi: Timings, Tickets & Guide",
  description:
    "Complete Akshardham Delhi guide — timings, entry rules, the musical fountain show, boat ride, ticket pricing, security checklist, and a half-day visit plan.",
  keywords:
    "Akshardham temple Delhi, Akshardham timings, Akshardham ticket price, Akshardham boat ride, Akshardham musical fountain, Akshardham entry rules, Swaminarayan Akshardham, Akshardham Metro station, Akshardham water show, Akshardham Delhi guide",
  openGraph: {
    title: "Akshardham Temple Delhi: Timings, Tickets & Guide",
    description:
      "Timings, ticket pricing, the Sahaj Anand Water Show, the boat ride, strict entry rules, and a full half-day plan for visiting Akshardham in Delhi.",
    url: "https://club.kudozz.in/blog/akshardham-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Intricately carved sandstone architecture evocative of Indian temple craftsmanship, in the spirit of Akshardham's ornate stonework",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshardham Temple Delhi: Timings, Tickets & Guide",
    description:
      "Timings, tickets, the musical fountain show, boat ride, and strict entry rules — the complete guide to visiting Akshardham in Delhi.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/akshardham-delhi-travel-guide",
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
          headline: "Akshardham Temple Delhi: Timings, Tickets & Guide",
          description:
            "Complete Akshardham Delhi guide — timings, entry rules, the musical fountain show, boat ride, ticket pricing, security checklist, and a half-day visit plan.",
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
            "@id": "https://club.kudozz.in/blog/akshardham-delhi-travel-guide",
          },
          keywords:
            "Akshardham temple Delhi, Akshardham timings, Akshardham ticket price, Akshardham boat ride, Akshardham musical fountain, Akshardham entry rules",
          about: {
            "@type": "Place",
            name: "Akshardham",
            address: {
              "@type": "PostalAddress",
              addressLocality: "New Delhi",
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
                name: "Akshardham",
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
    q: "What is not allowed inside Akshardham?",
    a: "Security at Akshardham is genuinely strict, and the list of banned items is long: mobile phones, cameras, USB drives, any electronic device, bags of any kind (including small handbags and camera pouches), food, water bottles, chewing gum, matches or lighters, sharp objects, and leather items such as belts or wallets in certain areas. There is no exception process at the gate — everything on this list has to be checked into the cloakroom outside before you enter.",
  },
  {
    q: "How much time do I need for Akshardham?",
    a: "Budget a minimum of 3 to 4 hours for the mandir complex, the exhibitions, and the Yagnapurush Kund — most first-time visitors comfortably spend a full afternoon here. If you're also doing the Sanskruti Vihar boat ride and staying on for the evening Sahaj Anand Water Show, plan for a half-day visit of roughly 5 to 6 hours from entry to exit.",
  },
  {
    q: "Is Akshardham open on Mondays?",
    a: "No. Akshardham is closed to visitors every Monday, a detail that trips up a fair number of travellers planning a quick Delhi itinerary. It's open Tuesday through Sunday, so if Monday is the only free day in your schedule, plan another Delhi sight for that day and come back to Akshardham later in the trip.",
  },
  {
    q: "Can I carry my phone inside Akshardham?",
    a: "No — phones are on the banned items list along with all other electronics, and this is enforced consistently at the security check. You'll need to deposit your phone at the cloakroom counter outside the complex before entering, along with cameras, bags, and anything else on the restricted list. Carry only ID, cash or cards, and essentials that clear the security screening.",
  },
  {
    q: "Is there an entry fee for Akshardham temple?",
    a: "Entry to the main mandir complex and its gardens is free — you can walk in, view the temple, and explore the grounds without buying a ticket. The paid components are the exhibitions (the boat ride and audio-animatronic show), which are ticketed separately at a counter inside the complex, along with the Yagnapurush Kund evening water show which is separately timed and, in some cases, ticketed. Confirm current pricing at the counter on arrival, since it's revised periodically.",
  },
  {
    q: "What is the best time to visit Akshardham to see the water show?",
    a: "The Sahaj Anand Water Show (the musical fountain) runs in the evening after sunset and is genuinely one of the highlights of a visit, combining water jets, lasers, fire, and light with a soundtrack. Arrive at the complex by mid-to-late afternoon, cover the mandir and exhibitions first, eat at the food court, and stay on for the show — it draws large crowds, so getting a seat early is worth it.",
  },
  {
    q: "How do I reach Akshardham by metro?",
    a: "Akshardham has its own dedicated metro station — Akshardham — on the Delhi Metro's Blue Line, with a direct walkway connecting the station to the complex's entrance. It's by far the easiest and most reliable way to get there, avoiding Delhi's traffic and parking hassles entirely.",
  },
  {
    q: "Can senior citizens and children visit Akshardham comfortably?",
    a: "Yes. The complex has wheelchair access in most areas, ample seating, and the walking distances, while considerable across the full grounds, can be managed at a slow pace with rest breaks. Families with young children should note that strollers and prams are also restricted inside, similar to bags, so plan for carrying younger children through the mandir sections.",
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
  { id: "introduction", title: "Akshardham: An Introduction", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Akshardham", level: 2 },
  { id: "architecture", title: "The Mandir Architecture", level: 2 },
  { id: "whats-inside", title: "What's Inside the Complex", level: 2 },
  { id: "entry-rules", title: "Entry Rules & Security", level: 2 },
  { id: "tickets", title: "Tickets & Pricing", level: 2 },
  { id: "timings", title: "Timings & Best Time of Day", level: 2 },
  { id: "itinerary", title: "Suggested Half-Day Visit", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AkshardhamGuidePage() {
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
              alt="Intricately carved sandstone architecture evocative of Indian temple craftsmanship, in the spirit of Akshardham's ornate stonework"
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
                { label: "Akshardham", href: null },
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
                "Akshardham",
                "Delhi",
                "Temple",
                "Heritage",
                "Family-Friendly",
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
              Akshardham Temple Delhi: Timings, Tickets & Complete Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Timings, ticket pricing, the musical fountain show, the boat
              ride, and the strict security rules you need to know before you
              go — everything for a smooth visit to Swaminarayan Akshardham.
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
                  text: "Akshardham, New Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,900 words",
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
                  <h2>Akshardham: An Introduction</h2>
                  <p>
                    The <strong>Swaminarayan Akshardham</strong> complex sits
                    on the eastern banks of the Yamuna in{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>, and it
                    is, by any measure, one of the most ambitious religious
                    building projects completed anywhere in recent memory.
                    Opened in <strong>November 2005</strong> and built by the{" "}
                    <strong>BAPS Swaminarayan Sanstha</strong>, the complex
                    was recognised by the Guinness World Records as the
                    world's largest comprehensive Hindu temple — a title that
                    reflects not just the scale of the main mandir but the
                    entire grounds around it: gardens, a stepwell, exhibition
                    halls, and a boat ride, spread across acres of manicured
                    complex on the Yamuna's floodplain.
                  </p>
                  <p>
                    What sets Akshardham apart from Delhi's older monuments —
                    the Mughal forts, the Sultanate ruins — is that it's
                    entirely modern, built between 2000 and 2005 by thousands
                    of artisans and volunteers using traditional carving
                    techniques on a genuinely enormous scale. There's no steel
                    structural support anywhere in the main mandir; it stands
                    on carved stone alone, in a construction style that
                    deliberately echoes centuries-old temple-building
                    traditions rather than modern engineering shortcuts.
                  </p>
                  <p>
                    This guide covers everything practical for a visit —
                    timings, the ticketing structure, what's allowed inside
                    (and, more importantly, what isn't), the boat ride and
                    water show, and a realistic half-day itinerary. If you're
                    building out a broader Delhi trip, our sibling guides to{" "}
                    <Link href="/blog/new-delhi-travel-guide">New Delhi</Link>,{" "}
                    <Link href="/blog/nizamuddin-delhi-travel-guide">
                      Nizamuddin
                    </Link>
                    , and{" "}
                    <Link href="/blog/laxmi-nagar-delhi-travel-guide">
                      Laxmi Nagar
                    </Link>{" "}
                    cover neighbourhoods within easy reach of Akshardham.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Akshardham at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "NH-24, banks of the Yamuna, Delhi",
                        },
                        {
                          icon: "📅",
                          label: "Opened",
                          value: "November 2005",
                        },
                        {
                          icon: "🏗️",
                          label: "Built By",
                          value: "BAPS Swaminarayan Sanstha",
                        },
                        {
                          icon: "🏆",
                          label: "Recognition",
                          value: "Guinness World Record holder",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Akshardham (Blue Line)",
                        },
                        {
                          icon: "📆",
                          label: "Weekly Closure",
                          value: "Closed every Monday",
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
                  <h2>Best Time to Visit Akshardham</h2>
                  <p>
                    Akshardham is an outdoor-and-indoor complex in roughly
                    equal measure — the mandir itself is a covered structure,
                    but the gardens, Yagnapurush Kund, and the walk between
                    sections are all exposed to Delhi's weather, which makes
                    season a real factor here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable days make the long walk across the grounds genuinely pleasant, and the gardens are at their best. The busiest window too, especially weekends.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — visit in the evening",
                        text: "Daytime heat regularly crosses 40°C with little shade across the open grounds — if visiting in this window, aim for a late-afternoon arrival timed around the evening water show.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional showers",
                        text: "Rain can interrupt outdoor viewing and occasionally affects the evening water show; the mandir and indoor exhibitions remain unaffected either way.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cool, but check evening fog",
                        text: "Comfortable temperatures for daytime visits, though dense winter fog can occasionally affect the visibility of the evening laser and water elements of the show.",
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
                    <strong>Our pick:</strong> A weekday afternoon between
                    October and March. You get comfortable weather for
                    walking the grounds, thinner crowds than a weekend, and
                    can time your visit to end with the evening water show
                    without waiting through peak heat beforehand.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Akshardham</h2>
                  <p>
                    Akshardham is unusually easy to reach for a site of its
                    scale, mostly because of one thing: it has its own
                    dedicated metro station right outside the gates.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro (recommended):</strong>{" "}
                      <strong>Akshardham station</strong> on the Delhi Metro
                      Blue Line sits directly beside the complex, with a
                      short, well-signed walkway connecting the station exit
                      to the entrance gate. This is by far the easiest,
                      cheapest, and most predictable way in — no traffic, no
                      parking search.
                    </li>
                    <li>
                      <strong>By Car/Taxi:</strong> Akshardham sits just off
                      NH-24 (the Delhi–Noida corridor), roughly 25–30 minutes
                      from Connaught Place depending on traffic. A large paid
                      parking lot is available on-site, though it fills up
                      quickly on weekends and during festival periods.
                    </li>
                    <li>
                      <strong>By Auto-rickshaw or App Cab:</strong> Widely
                      available across Delhi and a reasonable option if
                      you're not near a Blue Line station — just build in
                      extra time for Delhi's traffic, especially in the
                      evening around the water show timing.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Since bags and electronics
                    aren't allowed inside, taking the metro (and simply
                    carrying less) is genuinely more convenient than driving —
                    you skip the extra step of locking valuables in a car
                    before joining the cloakroom queue.
                  </div>
                </section>

                {/* ── Architecture ──────────────────────────────────────── */}
                <section id="architecture">
                  <h2>The Mandir Architecture</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Ornately carved stone facade evocative of traditional Indian temple craftsmanship, in the style seen at Akshardham"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The main mandir is carved almost entirely from{" "}
                    <strong>pink sandstone and Italian Carrara marble</strong>
                    , with the exterior built up from the sandstone and the
                    interior — pillars, domes, ceilings — finished largely in
                    white marble. Every surface carries carving: over 20,000
                    murtis (sculpted figures) of deities, sages, devotees, and
                    animals cover the walls, along with 234 intricately
                    carved pillars supporting the structure.
                  </p>
                  <p>
                    What makes this genuinely remarkable from a construction
                    standpoint is that <strong>no steel or structural iron</strong>{" "}
                    was used anywhere in the mandir itself — it stands on
                    carved and interlocked stone, following the traditional
                    Indian shilpa shastra methods for temple building, scaled
                    up to a size that had never been attempted this way
                    before. Thousands of stone carvers worked on individual
                    pieces before they were assembled on site, a process that
                    took roughly five years from groundbreaking to opening.
                  </p>
                  <p>
                    The mandir rises to a height of about 43 metres, spans
                    roughly 316 feet in length and 370 feet in width, and sits
                    at the centre of a complex that also includes formal
                    gardens (the Bharat Upvan), the Yagnapurush Kund
                    stepwell, and separate exhibition buildings — the whole
                    site covers close to 100 acres.
                  </p>
                </section>

                {/* ── What's Inside ─────────────────────────────────────── */}
                <section id="whats-inside">
                  <h2>What's Inside the Complex</h2>
                  <p>
                    Akshardham isn't a single building to walk through and
                    leave — it's a genuine campus, with several distinct
                    experiences that most visitors try to cover in one visit.
                  </p>

                  <h3>Sahaj Anand Water Show</h3>
                  <p>
                    The evening <strong>musical fountain and light show</strong>{" "}
                    is staged at the Yagnapurush Kund after dark, combining
                    water jets, fire elements, laser projection, and
                    underwater lighting with a soundtrack built around a
                    story from Indian scripture. It's one of the most
                    talked-about parts of a visit and draws large seated
                    crowds on the Kund's steps — arriving 20–30 minutes
                    before showtime secures a decent spot.
                  </p>

                  <h3>Yagnapurush Kund</h3>
                  <p>
                    Described as the <strong>world's largest stepwell</strong>{" "}
                    of its kind, this vast stepped water tank sits in front of
                    the mandir and doubles as the stage for the evening water
                    show. By day, its symmetrical stone steps and central
                    water body are worth a slow walk around on their own —
                    it's a striking piece of architecture even without the
                    evening performance.
                  </p>

                  <h3>Sanskruti Vihar Boat Ride</h3>
                  <p>
                    A paid, indoor boat ride that carries visitors past
                    dioramas and sets depicting scenes from India's ancient
                    history and cultural achievements — a relaxed, air-
                    conditioned way to cover a lot of ground (figuratively)
                    without much walking, and popular with families and
                    elderly visitors.
                  </p>

                  <h3>Hall of Values & Exhibitions</h3>
                  <p>
                    Separately ticketed exhibition halls use large dioramas,
                    audio-animatronic figures, and film presentations to walk
                    through episodes from the life of Bhagwan Swaminarayan and
                    broader themes of Indian philosophy and values. These are
                    indoor, seated, and a good option for resting mid-visit
                    while still taking something in.
                  </p>
                  <p>
                    Around all of this sit the <strong>Bharat Upvan gardens</strong>{" "}
                    — landscaped lawns with bronze sculptures of children,
                    freedom fighters, and animals, a pleasant, shaded spot to
                    walk or sit between the more structured parts of the
                    visit.
                  </p>
                </section>

                {/* ── Entry Rules ───────────────────────────────────────── */}
                <section id="entry-rules">
                  <h2>Entry Rules & Security</h2>
                  <p>
                    This is the single most important practical section of
                    this guide, and worth reading before you leave your
                    hotel. Akshardham's security screening is among the
                    strictest of any tourist site in Delhi, on par with
                    airport security in some respects, and the list of banned
                    items is long and consistently enforced.
                  </p>
                  <ul>
                    <li>
                      <strong>No mobile phones or electronics:</strong> Not
                      permitted inside under any circumstance — this includes
                      phones, cameras, power banks, smartwatches with camera
                      functions, and USB drives.
                    </li>
                    <li>
                      <strong>No bags:</strong> Handbags, backpacks, camera
                      bags, and even small pouches are not allowed inside.
                      Everything goes into the cloakroom before security.
                    </li>
                    <li>
                      <strong>No food or drink:</strong> Including sealed
                      water bottles — food courts are available inside the
                      complex once you're through security, so there's no
                      need to carry snacks in.
                    </li>
                    <li>
                      <strong>No sharp objects, lighters, or matches:</strong>{" "}
                      Standard security-screening restrictions, checked at a
                      walk-through metal detector and manual frisking.
                    </li>
                    <li>
                      <strong>No strollers/prams for young children:</strong>{" "}
                      Families should be prepared to carry infants and
                      toddlers through the mandir and grounds.
                    </li>
                  </ul>
                  <p>
                    A paid <strong>cloakroom facility</strong> sits just
                    outside the main entrance, specifically built to handle
                    this — deposit your phone, bag, and other restricted
                    items there before joining the security line, and keep
                    the claim token safe until you exit. What you can carry
                    in: your wallet or a small amount of cash, ID if needed,
                    and eyeglasses.
                  </p>
                  <div
                    className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Important:</strong> Once you're inside, there's
                    generally no re-entry without going through the whole
                    process again — plan your visit as one continuous block
                    rather than stepping out and back in.
                  </div>
                </section>

                {/* ── Tickets ───────────────────────────────────────────── */}
                <section id="tickets">
                  <h2>Tickets & Pricing</h2>
                  <p>
                    Akshardham's ticketing is split into a free component and
                    several paid add-ons, which sometimes confuses
                    first-time visitors expecting either a single price or a
                    single free entry.
                  </p>
                  <ul>
                    <li>
                      <strong>Main mandir & gardens:</strong> Free entry —
                      you can walk into the complex, view the mandir, and
                      explore the Bharat Upvan gardens without a ticket.
                    </li>
                    <li>
                      <strong>Exhibitions (boat ride, Hall of Values):</strong>{" "}
                      Ticketed separately, typically in the range of roughly
                      ₹170–₹250 per adult depending on which exhibitions are
                      combined, with lower rates for children and seniors —
                      confirm current pricing at the counter, since it's
                      revised periodically.
                    </li>
                    <li>
                      <strong>Yagnapurush Kund evening water show:</strong>{" "}
                      Timed separately from general entry; check at the
                      complex whether the show requires its own ticket on the
                      day of your visit, as seating arrangements have varied
                      over time.
                    </li>
                    <li>
                      <strong>Cloakroom fee:</strong> A small, nominal charge
                      applies to deposit phones, bags, and other restricted
                      items — worth carrying a little loose change for this.
                    </li>
                  </ul>
                  <p>
                    Tickets for the paid exhibitions are sold at counters
                    inside the complex, past the security check — you don't
                    need to pre-book online, though it's worth checking the
                    official Akshardham website before you travel in case
                    that changes or in case of a temporary closure for
                    maintenance.
                  </p>
                </section>

                {/* ── Timings ───────────────────────────────────────────── */}
                <section id="timings">
                  <h2>Timings & Best Time of Day to Visit</h2>
                  <p>
                    Akshardham is open <strong>Tuesday through Sunday</strong>,
                    with the mandir and grounds generally open through the
                    morning, afternoon, and evening in a single continuous
                    block, and the exhibitions and water show running on
                    their own sub-schedules within that window.
                  </p>
                  <ul>
                    <li>
                      <strong>Closed:</strong> Every Monday, without
                      exception — a common trip-planning mistake, so check
                      your itinerary against this before finalising dates.
                    </li>
                    <li>
                      <strong>Morning (opening – early afternoon):</strong>{" "}
                      Quietest window, best light for photography of the
                      exterior carving (from outside, since cameras aren't
                      allowed in), and the most comfortable time to walk the
                      full grounds in warmer months.
                    </li>
                    <li>
                      <strong>Late afternoon:</strong> Crowds build steadily,
                      especially on weekends — a good window for the
                      exhibitions and food court before the evening show.
                    </li>
                    <li>
                      <strong>Evening (water show):</strong> The Sahaj Anand
                      Water Show is the last major event of the day and draws
                      the largest single crowd — arrive early to get a good
                      seat on the Kund's steps.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your goal is to catch the
                    water show without wasting an entire day, arrive by
                    mid-afternoon, do the mandir and one exhibition first,
                    eat at the food court, and settle in for the evening
                    show — that sequence avoids doubling back across the
                    grounds.
                  </div>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Visit Timeline</h2>
                  <p>
                    Here's a realistic plan for a visitor arriving in the
                    afternoon and staying through the evening water show —
                    the single most common way to structure an Akshardham
                    visit.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "2:30 PM",
                        title: "Arrive & Cloakroom",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive via Akshardham Metro station",
                          "Deposit phone, bag, and electronics at the cloakroom",
                          "Clear the security screening",
                        ],
                      },
                      {
                        day: "3:00 PM",
                        title: "Main Mandir & Gardens",
                        color: "bg-forest-600",
                        activities: [
                          "Walk through the main mandir complex",
                          "View the carved pillars and murtis up close",
                          "Stroll the Bharat Upvan gardens",
                        ],
                      },
                      {
                        day: "4:00 PM",
                        title: "Exhibitions",
                        color: "bg-sky-600",
                        activities: [
                          "Buy tickets for the boat ride and/or Hall of Values",
                          "Sanskruti Vihar boat ride (air-conditioned, seated)",
                          "Hall of Values audio-animatronic presentation",
                        ],
                      },
                      {
                        day: "5:30 PM",
                        title: "Food Court Break",
                        color: "bg-purple-600",
                        activities: [
                          "Early dinner or snacks at the on-site food court",
                          "Rest before the evening crowds build",
                        ],
                      },
                      {
                        day: "6:30 PM onward",
                        title: "Yagnapurush Kund & Water Show",
                        color: "bg-stone-600",
                        activities: [
                          "Walk around the Kund before the show",
                          "Take a seat 20–30 minutes before showtime",
                          "Sahaj Anand Water Show, then exit via cloakroom",
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
                    * Prefer mornings over evenings? Simply shift this whole
                    block earlier — arrive at opening, cover the mandir and
                    exhibitions before midday crowds build, and skip the
                    water show if evening timing doesn't suit your schedule.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Akshardham</h2>
                  <p>
                    Since outside food isn't permitted inside, the on-site{" "}
                    <strong>food court</strong> is the practical option for
                    anyone spending a full afternoon or evening at the
                    complex — and it's a genuinely decent one by tourist-site
                    standards.
                  </p>
                  <ul>
                    <li>
                      <strong>On-site food court:</strong> Located past
                      security, inside the complex, serving pure-vegetarian
                      meals, snacks, and beverages — the only food option
                      available once you're through the gate, and reasonably
                      priced for what it is.
                    </li>
                    <li>
                      <strong>Vegetarian-only policy:</strong> In keeping with
                      the site's religious character, no meat, egg, or
                      alcohol is served anywhere inside the complex.
                    </li>
                    <li>
                      <strong>Outside the complex:</strong> A short auto or
                      cab ride toward Noida or East Delhi's residential
                      pockets brings you to a wider range of restaurants and
                      cafés, useful if you're visiting outside the food
                      court's operating hours or want something more
                      substantial before or after.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Akshardham is one of the more affordable half-day
                    experiences in Delhi — the mandir itself is free, and
                    most of the cost, if any, comes from the exhibitions and
                    food.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "With Extras"].map(
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
                          ["Main mandir entry", "Free", "Free", "Free"],
                          [
                            "Exhibitions (boat ride, Hall of Values)",
                            "Skip",
                            "₹170–₹250",
                            "₹250+ (both)",
                          ],
                          ["Cloakroom fee", "₹20–₹50", "₹20–₹50", "₹20–₹50"],
                          [
                            "Food court meal/snacks",
                            "₹150",
                            "₹300",
                            "₹500",
                          ],
                          [
                            "Metro fare (round trip)",
                            "₹60",
                            "₹60",
                            "₹60",
                          ],
                          [
                            "Half-day total (approx.)",
                            "₹230",
                            "₹630",
                            "₹880",
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
                    * Figures are representative estimates — exhibition and
                    cloakroom pricing is revised periodically, so confirm
                    current rates at the counter on arrival.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Akshardham</h2>
                  <ul>
                    <li>
                      <strong>Plan to carry almost nothing:</strong> The
                      shorter your list of things to deposit at the
                      cloakroom, the faster you'll clear the entry process —
                      leave non-essentials at your hotel if possible.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Covered shoulders and
                      knees are expected, in keeping with the site's status
                      as an active place of worship, not just a tourist
                      attraction.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> The grounds are
                      large, and covering the mandir, gardens, exhibitions,
                      and Kund on foot easily adds up to a few kilometres of
                      walking.
                    </li>
                    <li>
                      <strong>Arrive early for the water show:</strong> Good
                      seating on the Kund's steps fills up 20–30 minutes
                      before the show starts, especially on weekends.
                    </li>
                    <li>
                      <strong>Expect no re-entry:</strong> Once inside, plan
                      your visit as one continuous block — stepping out means
                      going through security and the cloakroom process again.
                    </li>
                    <li>
                      <strong>Check the schedule for Mondays and holidays:</strong>{" "}
                      Weekly closure on Mondays and occasional closures for
                      festivals or maintenance are worth confirming before you
                      travel across the city.
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
                          "Take the metro directly to Akshardham station",
                          "Carry only ID and cash — leave the rest behind",
                          "Dress modestly, covering shoulders and knees",
                          "Arrive by mid-afternoon to fit in the water show",
                          "Wear comfortable shoes for the large grounds",
                          "Confirm ticket prices at the counter on arrival",
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
                          "Bring phones, cameras, or any electronics",
                          "Carry bags, food, or water bottles to the gate",
                          "Plan a visit on a Monday — the complex is closed",
                          "Expect to step out and re-enter without security again",
                          "Bring a stroller or pram for young children",
                          "Wear sleeveless tops or shorts inside the mandir",
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
                    <strong>🗺️ Extend the trip:</strong> Akshardham pairs
                    naturally with a day exploring{" "}
                    <Link href="/blog/new-delhi-travel-guide">New Delhi</Link>
                    's monuments and markets, or a visit to the shrines and
                    lanes of{" "}
                    <Link href="/blog/nizamuddin-delhi-travel-guide">
                      Nizamuddin
                    </Link>{" "}
                    and the everyday neighbourhood energy of{" "}
                    <Link href="/blog/laxmi-nagar-delhi-travel-guide">
                      Laxmi Nagar
                    </Link>
                    , both a short ride away.
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
                  "Akshardham",
                  "Delhi",
                  "Swaminarayan Akshardham",
                  "Hindu Temple",
                  "Water Show",
                  "Family-Friendly",
                  "Heritage",
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

              <RelatedPostsGrid currentSlug="akshardham-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="akshardham-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
