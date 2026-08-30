// src/app/blog/vasant-kunj-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Vasant Kunj Guide: Malls, Shopping & Nature Nearby",
  description:
    "Vasant Kunj travel guide — Delhi's airport-adjacent mall district with Ambience Mall, DLF Promenade, and DLF Emporio, plus the offbeat Asola Bhatti Wildlife Sanctuary next door.",
  keywords:
    "Vasant Kunj travel guide, Vasant Kunj Delhi, Ambience Mall Vasant Kunj, DLF Promenade, DLF Emporio, Asola Bhatti Wildlife Sanctuary, Vasant Kunj near IGI airport, Vasant Kunj shopping, Vasant Kunj hotels, South West Delhi",
  openGraph: {
    title: "Vasant Kunj Guide: Malls, Shopping & Nature Nearby",
    description:
      "Delhi's upscale mall district next to IGI Airport — Ambience Mall, DLF Promenade, DLF Emporio, and the surprisingly wild Asola Bhatti forest just beyond it.",
    url: "https://club.kudozz.in/blog/vasant-kunj-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Generic representative Indian heritage and landscape imagery, used here as a placeholder — not a literal photo of Vasant Kunj's mall district",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasant Kunj Guide: Malls, Shopping & Nature Nearby",
    description:
      "Delhi's airport-adjacent mall district — Ambience Mall, DLF Promenade, DLF Emporio, and the Asola Bhatti forest just beyond it.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/vasant-kunj-delhi-travel-guide",
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
          headline: "Vasant Kunj Guide: Malls, Shopping & Nature Nearby",
          description:
            "Vasant Kunj travel guide — Delhi's airport-adjacent mall district with Ambience Mall, DLF Promenade, and DLF Emporio, plus the offbeat Asola Bhatti Wildlife Sanctuary next door.",
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
            "@id": "https://club.kudozz.in/blog/vasant-kunj-delhi-travel-guide",
          },
          keywords:
            "Vasant Kunj travel guide, Ambience Mall, DLF Promenade, DLF Emporio, Asola Bhatti Wildlife Sanctuary, Vasant Kunj Delhi",
          about: {
            "@type": "Place",
            name: "Vasant Kunj",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vasant Kunj",
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
                name: "Vasant Kunj",
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
    q: "Is Vasant Kunj good for tourists?",
    a: "Vasant Kunj isn't a heritage or sightseeing destination — it's a planned residential and commercial colony, not a monument district. Where it genuinely earns a visit is as a practical base: it's minutes from IGI Airport, home to some of Delhi's largest malls, and sits right beside the Asola Bhatti Wildlife Sanctuary for travellers who want a short nature escape without leaving the city.",
  },
  {
    q: "How far is Vasant Kunj from the airport?",
    a: "Vasant Kunj is one of the closest residential neighbourhoods to Indira Gandhi International Airport, roughly 15–20 minutes by road from Terminal 3 in normal traffic. That proximity is the main reason travellers with early flights, long layovers, or late arrivals choose to base themselves here.",
  },
  {
    q: "What is there to do in Vasant Kunj?",
    a: "The core draw is the mall cluster — Ambience Mall, DLF Promenade, and DLF Emporio — for shopping, dining, and multiplex cinemas. Beyond the malls, the Asola Bhatti Wildlife Sanctuary borders the colony and offers walking trails through genuine Aravalli forest, a rare contrast to the retail district a few minutes away.",
  },
  {
    q: "Is Asola Bhatti Wildlife Sanctuary open to visitors?",
    a: "Yes. It's a public protected forest with marked entry points and, in parts, guided or permitted trail access managed by the Delhi Forest Department. It's best visited early morning, and it's worth checking current entry rules and timings before heading over, since access points and permissions can change.",
  },
  {
    q: "When was Vasant Kunj developed?",
    a: "Vasant Kunj was planned and developed by the Delhi Development Authority (DDA) starting in the 1980s as one of South West Delhi's newer residential colonies, expanding in phases over the following decades into the mixed residential-and-commercial district it is today.",
  },
  {
    q: "Is Vasant Kunj a good place to stay near the airport?",
    a: "Yes — it's one of the more practical airport-adjacent options in Delhi, particularly for travellers who want mall access, decent dining, and a shorter transfer to Terminal 3 than staying in Central or Old Delhi would allow. It suits layovers, early departures, and business trips more than leisure sightseeing itineraries.",
  },
  {
    q: "Can I combine Vasant Kunj with other parts of Delhi in one trip?",
    a: "Yes, easily. Vasant Kunj connects well to other South Delhi neighbourhoods and is a reasonable base for day trips into the rest of the city via the Metro's Pink Line and app-based cabs, making it workable as a hub even if you're spending most of your time seeing Delhi's monuments elsewhere.",
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
  { id: "introduction", title: "Vasant Kunj: An Airport-Side Mall District", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Vasant Kunj", level: 2 },
  { id: "malls", title: "The Mall District", level: 2 },
  { id: "asola-bhatti", title: "Asola Bhatti Wildlife Sanctuary", level: 2 },
  { id: "where-to-stay", title: "Vasant Kunj as an Airport Base", level: 2 },
  { id: "food-guide", title: "Dining in the Malls", level: 2 },
  { id: "itinerary", title: "A Half-Day Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function VasantKunjGuidePage() {
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
              alt="Generic representative Indian heritage and landscape imagery, used here as a placeholder — not a literal photo of Vasant Kunj's mall district"
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
                { label: "Vasant Kunj", href: null },
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
                "Vasant Kunj",
                "Delhi",
                "Shopping",
                "Airport Guide",
                "Asola Bhatti",
                "City Guide",
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
              Vasant Kunj Travel Guide: Malls, Shopping & the Forest Next Door
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Delhi's upscale mall district minutes from IGI Airport — home
              to Ambience Mall, DLF Promenade, and DLF Emporio, and bordered
              by a genuinely wild stretch of Aravalli forest most visitors
              never know is there.
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
                  text: "Vasant Kunj, South West Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Vasant Kunj: An Airport-Side Mall District</h2>
                  <p>
                    <strong>Vasant Kunj</strong> is a planned residential
                    and commercial colony in South West Delhi, developed by
                    the Delhi Development Authority (DDA) from the 1980s
                    onward and expanded in phases into one of the city's
                    more upscale, orderly neighbourhoods. It's not part of
                    the{" "}
                    <Link href="/blog/delhi-travel-guide">
                      classic Delhi sightseeing circuit
                    </Link>{" "}
                    of Mughal forts and Old Delhi lanes — there's no
                    monument here demanding a detour — and it's worth being
                    upfront about that from the start.
                  </p>
                  <p>
                    What Vasant Kunj is genuinely known for is its cluster
                    of large shopping malls and its proximity to both
                    Indira Gandhi International Airport and the Southern
                    Ridge, the forested tail end of the Aravalli hill range
                    that runs into Delhi's south. That combination — serious
                    retail, an easy airport run, and a real forest a few
                    minutes away — makes it a genuinely useful stop for a
                    specific kind of traveller, even if it isn't a
                    destination in the traditional sense.
                  </p>
                  <p>
                    This guide treats Vasant Kunj honestly: as a practical
                    base and shopping district, with one properly offbeat
                    attraction — the Asola Bhatti Wildlife Sanctuary — worth
                    building time around if you're passing through.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛍️</span> Vasant Kunj at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South West Delhi",
                        },
                        {
                          icon: "✈️",
                          label: "From IGI Airport (T3)",
                          value: "~15–20 min by road",
                        },
                        {
                          icon: "🏙️",
                          label: "Developed",
                          value: "DDA, from the 1980s",
                        },
                        {
                          icon: "🏬",
                          label: "Known For",
                          value: "Ambience Mall, DLF Promenade, DLF Emporio",
                        },
                        {
                          icon: "🌳",
                          label: "Next Door",
                          value: "Asola Bhatti Wildlife Sanctuary",
                        },
                        {
                          icon: "🚇",
                          label: "Metro",
                          value: "Pink Line",
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
                  <h2>Best Time to Visit Vasant Kunj</h2>
                  <p>
                    Because the mall district is fully indoor and
                    air-conditioned, Vasant Kunj is genuinely a
                    year-round stop — the weather matters far less here
                    than it does for monument-hopping elsewhere in Delhi.
                    It matters more if the Asola Bhatti forest visit is
                    part of your plan.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, clear mornings make an Asola Bhatti walk genuinely pleasant, and mall visits are comfortable at any hour. The overall best window if both are on your list.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — malls are fine, forest walks aren't",
                        text: "Daytime heat regularly crosses 40°C. The malls remain a comfortable escape, but skip the sanctuary walk except at first light.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but muddy trails",
                        text: "The Aravalli scrub forest turns noticeably green after rain, but trails can get muddy and slippery — check conditions before heading out.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold with poor air quality",
                        text: "Comfortable indoors, but Delhi's winter AQI dips sharply — factor that in if the forest walk is a priority over pure shopping.",
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
                    <strong>Our pick:</strong> October to March, with an
                    early-morning slot reserved for Asola Bhatti before the
                    heat builds — the malls work equally well any time of
                    day, any season.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Vasant Kunj</h2>
                  <p>
                    Vasant Kunj's biggest practical advantage is its
                    location — few Delhi neighbourhoods sit this close to
                    the airport while still offering a proper mix of
                    shopping, dining, and hotel options.
                  </p>
                  <ul>
                    <li>
                      <strong>From IGI Airport:</strong> Roughly 15–20
                      minutes by road from Terminal 3 in normal traffic,
                      making Vasant Kunj a genuinely convenient stop for
                      early morning departures, late arrivals, or long
                      layovers where leaving the airport zone briefly is
                      worthwhile.
                    </li>
                    <li>
                      <strong>Delhi Metro:</strong> Connected via the Pink
                      Line, which links it to other parts of the city
                      without needing a cab for every trip — useful if
                      you're combining Vasant Kunj with sightseeing
                      elsewhere in Delhi.
                    </li>
                    <li>
                      <strong>App-based cabs and autos:</strong> Widely
                      available and the most flexible way to move between
                      the malls, the sanctuary entrance, and nearby
                      neighbourhoods like{" "}
                      <Link href="/blog/dwarka-delhi-travel-guide">
                        Dwarka
                      </Link>{" "}
                      or{" "}
                      <Link href="/blog/south-delhi-travel-guide">
                        South Delhi
                      </Link>
                      .
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you have a long layover
                    or an early-morning flight, Vasant Kunj is one of the
                    few spots where you can genuinely leave the airport
                    zone, get a proper meal or do some shopping, and be
                    back at check-in within the hour.
                  </div>
                </section>

                {/* ── Malls ─────────────────────────────────────────────── */}
                <section id="malls">
                  <h2>The Mall District</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Generic landscape imagery used as a stand-in — not a photo of Vasant Kunj's malls, which are modern indoor retail complexes"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Vasant Kunj's reputation rests almost entirely on its
                    mall cluster — a genuinely large concentration of
                    retail space for a single Delhi neighbourhood, and the
                    main reason most visitors come here at all.
                  </p>
                  <ul>
                    <li>
                      <strong>Ambience Mall:</strong> One of Delhi's
                      largest malls, spread across a sprawling multi-level
                      complex with a wide mix of retail brands, a
                      multiplex cinema, and a food court alongside sit-down
                      restaurants — easily a half-day stop on its own.
                    </li>
                    <li>
                      <strong>DLF Promenade:</strong> A more compact,
                      mid-to-premium mall a short distance from Ambience,
                      generally quieter and easier to navigate for a
                      focused shopping trip.
                    </li>
                    <li>
                      <strong>DLF Emporio:</strong> Delhi's flagship
                      luxury shopping destination, housing international
                      high-end fashion and lifestyle brands — more a
                      browsing-and-window-shopping experience for most
                      visitors than a budget stop, but worth walking
                      through for the architecture and atmosphere alone.
                    </li>
                  </ul>
                  <p>
                    Together, the three malls sit close enough to each
                    other that it's entirely possible to cover all of
                    them in a single visit, moving on foot or by a short
                    cab ride between complexes.
                  </p>
                </section>

                {/* ── Asola Bhatti ──────────────────────────────────────── */}
                <section id="asola-bhatti">
                  <h2>Asola Bhatti Wildlife Sanctuary</h2>
                  <p>
                    This is the genuinely surprising part of a Vasant Kunj
                    visit, and the part most tourists never learn about.
                    The <strong>Asola Bhatti Wildlife Sanctuary</strong>{" "}
                    borders the colony and is, by area, Delhi's largest
                    protected forest — a sizeable stretch of the Aravalli
                    ridge, the same ancient hill range that runs down into
                    Rajasthan, preserved as scrub forest right at the edge
                    of the capital.
                  </p>
                  <p>
                    The sanctuary is home to nilgai (blue bull antelope),
                    jackals, and a genuinely notable range of bird species,
                    making it a real draw for local birdwatchers and
                    anyone craving quiet, green space that most visitors
                    to Delhi never associate with the city at all. It's a
                    sharp, deliberate contrast to the mall district a few
                    minutes away — rocky ridgeline, native scrub
                    vegetation, and a level of quiet that's hard to find
                    anywhere else this close to an international airport.
                  </p>
                  <ul>
                    <li>
                      <strong>What to expect:</strong> Marked trails
                      through Aravalli scrub forest and rocky terrain,
                      rather than dense woodland — bring water, sun
                      protection, and comfortable walking shoes.
                    </li>
                    <li>
                      <strong>Wildlife:</strong> Nilgai and jackals are the
                      most commonly sighted mammals; the bird checklist is
                      long and varies seasonally, making early morning the
                      best window for sightings.
                    </li>
                    <li>
                      <strong>Access:</strong> Managed by the Delhi Forest
                      Department, with specific entry points and timings —
                      confirm current access rules before visiting, since
                      permitted areas and hours can change.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Go early morning, both for
                    better wildlife sightings and to avoid the day's heat
                    — the ridge has little shade cover once the sun is
                    high.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Vasant Kunj as a Practical Airport-Adjacent Stay Base</h2>
                  <p>
                    Vasant Kunj works best as a base for travellers
                    prioritising airport convenience over proximity to
                    Delhi's monuments — business travellers, transit
                    stays, or anyone with an early flight who'd rather not
                    battle Delhi's traffic from Central or Old Delhi at
                    dawn.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏨",
                        range: "₹2,000–₹3,500/night",
                        picks: [
                          "Budget business hotels nearby",
                          "Airport-zone guesthouses",
                          "Chain economy hotels, Vasant Kunj",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏬",
                        range: "₹4,500–₹9,000/night",
                        picks: [
                          "Mid-range hotel chains near the malls",
                          "Serviced apartments, Vasant Kunj",
                          "Business hotels close to Aerocity",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹12,000–₹25,000+/night",
                        picks: [
                          "Premium airport-zone hotel chains",
                          "Full-service business hotels nearby",
                          "Upscale properties near DLF Emporio",
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
                    If your Delhi trip is genuinely about the monuments —
                    Red Fort, Qutub Minar, Old Delhi — base yourself
                    elsewhere. Vasant Kunj earns its place specifically
                    for airport-adjacent convenience and mall access, not
                    as a sightseeing hub.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Dining in the Malls</h2>
                  <p>
                    Vasant Kunj's dining scene lives almost entirely
                    inside its malls, and it's genuinely broad — Ambience
                    Mall, DLF Promenade, and DLF Emporio between them cover
                    everything from quick food-court meals to proper
                    sit-down restaurants.
                  </p>
                  <ul>
                    <li>
                      <strong>Food courts:</strong> Ambience Mall's food
                      court is large and varied, covering a wide spread of
                      Indian regional and international quick-service
                      options — a fast, reliable choice between shopping
                      stops.
                    </li>
                    <li>
                      <strong>Sit-down restaurants:</strong> All three
                      malls host a mix of casual and upscale restaurant
                      chains spanning Indian, Asian, Italian, and other
                      international cuisines, well suited to a proper meal
                      rather than a quick bite.
                    </li>
                    <li>
                      <strong>Cafés:</strong> Plenty of café options for a
                      coffee break between browsing DLF Emporio's luxury
                      stores or resting mid-way through a longer Ambience
                      Mall visit.
                    </li>
                  </ul>
                  <p>
                    Don't expect a distinct local Vasant Kunj food
                    identity the way Old Delhi or Chandni Chowk has one —
                    this is a mall dining scene, reliable and varied
                    rather than a culinary destination in its own right.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>A Half-Day Plan: Malls + Nature</h2>
                  <p>
                    The best way to experience Vasant Kunj honestly is to
                    combine both of its genuine strengths in a single
                    half-day — the mall district and a short walk through
                    Asola Bhatti — rather than treating either as a
                    full-day destination on its own.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Early Morning",
                        title: "Asola Bhatti Wildlife Sanctuary",
                        color: "bg-forest-600",
                        activities: [
                          "Arrive early for cooler temperatures and better wildlife sightings",
                          "Walk a marked trail through Aravalli scrub forest",
                          "Watch for nilgai, jackals, and resident bird species",
                        ],
                      },
                      {
                        day: "Late Morning",
                        title: "Ambience Mall",
                        color: "bg-amber-700",
                        activities: [
                          "Browse the mall's wide retail spread",
                          "Lunch at the food court or a sit-down restaurant",
                          "Catch a movie if time allows",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "DLF Promenade & DLF Emporio",
                        color: "bg-purple-600",
                        activities: [
                          "A quieter shopping stop at DLF Promenade",
                          "Window-shop the luxury stores at DLF Emporio",
                          "Coffee break before heading onward",
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
                    * If you're on a tight airport transit window, either
                    half of this plan works well alone — the malls if
                    you're short on time, the sanctuary if you have a
                    quiet early morning free.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Asola Bhatti entry is minimal to free depending on the
                    access point, so most of a Vasant Kunj day's cost
                    comes down to food, shopping, and transport rather
                    than entry fees.
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
                            "Accommodation/night",
                            "₹2,500",
                            "₹6,000",
                            "₹18,000",
                          ],
                          ["Food/day (mostly mall dining)", "₹500", "₹1,500", "₹4,000"],
                          ["Local transport/day", "₹200", "₹600", "₹2,000"],
                          [
                            "Sanctuary entry",
                            "Minimal / free",
                            "Minimal / free",
                            "Minimal / free",
                          ],
                          ["Daily total (approx.)", "₹3,200", "₹8,100", "₹24,000"],
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
                    * Excludes shopping spend, which can obviously vary
                    widely, especially at DLF Emporio's luxury retailers.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Vasant Kunj</h2>
                  <ul>
                    <li>
                      <strong>Set expectations correctly:</strong> This is
                      a shopping and airport-convenience stop, not a
                      heritage destination — plan your Delhi sightseeing
                      time elsewhere.
                    </li>
                    <li>
                      <strong>Check Asola Bhatti access before going:</strong>{" "}
                      Entry points and timings are managed by the Delhi
                      Forest Department and can change — confirm current
                      rules rather than assuming open access.
                    </li>
                    <li>
                      <strong>Go early for the sanctuary:</strong> Both
                      wildlife visibility and comfort are noticeably
                      better before the day heats up.
                    </li>
                    <li>
                      <strong>Use the Pink Line for onward travel:</strong>{" "}
                      It's the most efficient way to connect Vasant Kunj
                      to other parts of the city without relying entirely
                      on cabs.
                    </li>
                    <li>
                      <strong>Time your airport run with traffic in mind:</strong>{" "}
                      The 15–20 minute transfer to Terminal 3 can stretch
                      considerably during peak hours — build in buffer
                      time for a flight.
                    </li>
                    <li>
                      <strong>Carry water and sun protection on the ridge:</strong>{" "}
                      The Aravalli scrub terrain offers little shade once
                      the sun is high.
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
                          "Visit Asola Bhatti early morning for wildlife and cooler weather",
                          "Use Vasant Kunj as a practical airport-adjacent base",
                          "Combine the mall visit with a short nature walk",
                          "Confirm sanctuary entry rules before heading out",
                          "Use the Pink Line metro for onward city travel",
                          "Build traffic buffer time into any airport transfer",
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
                          "Expect heritage monuments or a historic old-town feel",
                          "Skip water and sun protection on the ridge trails",
                          "Assume sanctuary access is open at all hours",
                          "Base yourself here if monument-hopping is the trip's focus",
                          "Underestimate peak-hour traffic to Terminal 3",
                          "Treat the mall food courts as representative of Delhi's wider food scene",
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
                    <strong>🗺️ Extend the trip:</strong> Vasant Kunj pairs
                    naturally with other South West Delhi stops — combine
                    it with{" "}
                    <Link href="/blog/dwarka-delhi-travel-guide">Dwarka</Link>,{" "}
                    <Link href="/blog/chanakyapuri-delhi-travel-guide">
                      Chanakyapuri
                    </Link>
                    , or the wider{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi
                    </Link>{" "}
                    neighbourhoods for a fuller day beyond the mall
                    district.
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
                  "Vasant Kunj",
                  "Delhi",
                  "Ambience Mall",
                  "DLF Emporio",
                  "Asola Bhatti Wildlife Sanctuary",
                  "Airport Guide",
                  "Shopping",
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

              <RelatedPostsGrid currentSlug="vasant-kunj-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="vasant-kunj-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
