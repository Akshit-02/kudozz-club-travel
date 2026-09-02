// src/app/blog/murshidabad-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Murshidabad Travel Guide: Hazarduari & Nawabi History",
  description:
    "Complete Murshidabad guide — Hazarduari Palace, Katra Mosque, the Battle of Plassey, Bengal's Nawabi history, silk weaving, how to reach from Kolkata, and a full visit plan.",
  keywords:
    "Murshidabad travel guide, Hazarduari Palace, Nawabs of Bengal, Battle of Plassey, Siraj-ud-Daulah, Katra Mosque, Nizamat Imambara, Kathgola Palace, Berhampore, Bengal silk, how to reach Murshidabad, West Bengal heritage",
  openGraph: {
    title: "Murshidabad Travel Guide: Hazarduari & Nawabi History",
    description:
      "The former capital of Nawabi Bengal — the thousand-doored Hazarduari Palace, the story of Plassey, and one of India's great silk-weaving traditions.",
    url: "https://club.kudozz.in/blog/murshidabad-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Grand palace architecture evoking Murshidabad's Hazarduari Palace, seat of the Nawabs of Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Murshidabad Travel Guide: Hazarduari & Nawabi History",
    description:
      "The former capital of Nawabi Bengal — the thousand-doored Hazarduari Palace, the story of Plassey, and Bengal's silk-weaving heritage.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/murshidabad-travel-guide",
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
          headline: "Murshidabad Travel Guide: Hazarduari & Nawabi History",
          description:
            "Complete Murshidabad guide — Hazarduari Palace, Katra Mosque, the Battle of Plassey, Bengal's Nawabi history, silk weaving, how to reach from Kolkata, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/murshidabad-travel-guide",
          },
          keywords:
            "Murshidabad, Hazarduari Palace, Nawabs of Bengal, Battle of Plassey, Siraj-ud-Daulah, Katra Mosque, Berhampore",
          about: {
            "@type": "Place",
            name: "Murshidabad",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Murshidabad",
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
                name: "Murshidabad",
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
    q: "How do I reach Murshidabad from Kolkata?",
    a: "The nearest major railheads are Murshidabad station and Berhampore Court station, both roughly 200km from Howrah, with express trains taking about 4-5 hours. By road, it's a similar 4-5 hour drive via NH12. Most visitors base themselves in Berhampore, the district headquarters, and take a short local trip out to the Hazarduari Palace complex in Murshidabad town itself.",
  },
  {
    q: "What is Hazarduari Palace and why is it called the 'Palace of a Thousand Doors'?",
    a: "Hazarduari Palace, built in the 1830s in an Italianate neoclassical style by British architect Duncan McLeod for the Nawabs of Bengal, gets its name from its roughly 1,000 doors — many of them false, reportedly built to confuse assassins and add architectural symmetry. It now functions as a museum housing the Nawabs' armoury, portraits, and decorative arts, one of the most significant royal collections in eastern India.",
  },
  {
    q: "What is the significance of the Battle of Plassey?",
    a: "Fought in 1757 near the village of Palashi (Plassey), not far from Murshidabad, the battle saw the British East India Company defeat Siraj-ud-Daulah, the last independent Nawab of Bengal, largely through the betrayal of his own commander, Mir Jafar. The victory gave the Company effective control of Bengal and is widely regarded as the opening chapter of British colonial rule in India — a turning point in the region's history that's still taught and discussed extensively.",
  },
  {
    q: "How many days should I spend in Murshidabad?",
    a: "One full day is enough to see Hazarduari Palace, the Katra Mosque, and Nizamat Imambara at an unhurried pace. An overnight stay in Berhampore lets you add Kathgola Palace, the Jahan Kosha Cannon, and a short excursion toward the Plassey battlefield site without feeling rushed.",
  },
  {
    q: "What is the best time to visit Murshidabad?",
    a: "October to March offers the most comfortable temperatures for visiting the palace grounds and walking between the various Nawabi-era monuments spread across the town. Summers get very hot, and the monsoon can make travel between sites less comfortable, though the palace itself remains open year-round.",
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
  { id: "introduction", title: "Capital of Nawabi Bengal", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Murshidabad", level: 2 },
  { id: "landmarks", title: "Hazarduari & the Palace Complex", level: 2 },
  { id: "plassey", title: "The Battle of Plassey", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MurshidabadGuidePage() {
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
              src="/images/destinations/udaipur/hero.jpg"
              alt="Grand palace architecture evoking Murshidabad's Hazarduari Palace, seat of the Nawabs of Bengal"
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
                { label: "Murshidabad", href: null },
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
                "Murshidabad",
                "Hazarduari Palace",
                "Nawabs of Bengal",
                "Battle of Plassey",
                "Heritage",
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
              Murshidabad: Hazarduari & Nawabi History Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Once the capital of Bengal under the Nawabs, Murshidabad
              carries the thousand-doored Hazarduari Palace, the story of
              Plassey, and a silk-weaving heritage — quiet reminders of a
              province that briefly rivalled Delhi in wealth and power.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Murshidabad district, West Bengal",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Capital of Nawabi Bengal</h2>
                  <p>
                    <strong>Murshidabad</strong>, on the banks of the
                    Bhagirathi-Hooghly river in{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , served as the capital of Bengal under its Nawabs from
                    the early 18th century, when Murshid Quli Khan shifted
                    the seat of power here and gave the town its name. In its
                    prime, Murshidabad was said to rival the wealth and
                    population of contemporary London — a reflection of
                    Bengal's enormous economic importance under Mughal and
                    Nawabi rule, built substantially on textiles, silk, and
                    river trade.
                  </p>
                  <p>
                    That prominence collapsed sharply after 1757, when the
                    British East India Company defeated the last independent
                    Nawab, Siraj-ud-Daulah, at the nearby{" "}
                    <strong>Battle of Plassey</strong> — a decisive moment
                    that opened the door to two centuries of British colonial
                    rule in India. What remains today is a quieter riverside
                    town, but one still scattered with palaces, mosques, and
                    monuments from its Nawabi golden age, most famously the{" "}
                    <strong>Hazarduari Palace</strong>.
                  </p>
                  <p>
                    Roughly 200km from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>,
                    Murshidabad rewards travellers with an interest in
                    Bengal's pre-colonial history and the more nuanced,
                    often-overlooked chapters of India's transition into
                    British rule.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Murshidabad at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bhagirathi riverbank, West Bengal",
                        },
                        {
                          icon: "🚂",
                          label: "From Kolkata",
                          value: "~200km, 4-5 hr by train",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Hazarduari Palace, Nawabi History",
                        },
                        {
                          icon: "⚔️",
                          label: "Nearby",
                          value: "Battle of Plassey site",
                        },
                        {
                          icon: "🧵",
                          label: "Craft",
                          value: "Bengal silk weaving",
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
                  <h2>Best Time to Visit Murshidabad</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable for walking the palace grounds and the scattered monuments across town, most of which sit some distance apart.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot — avoid if possible",
                        text: "Temperatures climb well past comfortable sightseeing levels, particularly for a town where getting between sites involves a fair amount of outdoor walking or short local rides.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — riverside charm, but wet",
                        text: "The Bhagirathi riverside setting looks lush and atmospheric, but heavy rain can disrupt a full day of monument-hopping.",
                      },
                      {
                        season: "Winter weekends",
                        emoji: "🚉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Busiest",
                        text: "Winter weekends bring the most domestic tourist traffic — book train tickets and accommodation a little ahead if travelling then.",
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
                    <strong>Our pick:</strong> October to March — cool
                    enough for a full day moving between Hazarduari, Katra
                    Mosque, and the town's other scattered monuments.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Murshidabad</h2>
                  <ul>
                    <li>
                      <strong>By Train:</strong> Murshidabad and Berhampore
                      Court railway stations, both roughly 200km from Howrah,
                      are the main gateways — express trains take about 4-5
                      hours. Most travellers base themselves in Berhampore,
                      the district headquarters, a short local ride from the
                      Hazarduari Palace complex.
                    </li>
                    <li>
                      <strong>By Road:</strong> A similar 4-5 hour drive from{" "}
                      <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                      via NH12.
                    </li>
                    <li>
                      <strong>Getting around locally:</strong> Cycle-rickshaws,
                      autos, and toto (e-rickshaws) cover the scattered
                      monument sites across town, which are spread further
                      apart than Bishnupur's more compact temple cluster.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hire a cycle-rickshaw or auto
                    for a half-day rather than walking between sites — the
                    monuments are more spread out here than in most other
                    heritage towns in the region.
                  </div>
                </section>

                {/* ── Landmarks ─────────────────────────────────────────── */}
                <section id="landmarks">
                  <h2>Hazarduari & the Palace Complex</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/hero.jpg"
                      alt="Grand Italianate palace architecture evoking Murshidabad's Hazarduari Palace"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Hazarduari Palace</h3>
                  <p>
                    Built in the 1830s in an Italianate neoclassical style by
                    British architect Duncan McLeod, Hazarduari — literally
                    "the palace of a thousand doors" — is the town's
                    centrepiece. Many of its roughly 1,000 doors are false,
                    reportedly designed to confuse would-be assassins and to
                    give the vast façade a sense of visual symmetry. Now a
                    museum, it houses one of eastern India's most significant
                    royal collections: Nawabi armoury and weapons, portraits
                    of British administrators and Bengali rulers, palanquins,
                    chandeliers, and decorative art spanning the Nawabi and
                    colonial periods.
                  </p>
                  <h3>Katra Mosque</h3>
                  <p>
                    Built in the 1720s by Murshid Quli Khan, the founder of
                    Nawabi Murshidabad, this large mosque was designed with a
                    dual purpose — as a place of worship and a fortified
                    structure with accommodation for hundreds of students of
                    Islamic scripture. Murshid Quli Khan is buried beneath
                    its entrance steps, by his own wish, so that worshippers
                    would walk over his grave.
                  </p>
                  <h3>Nizamat Imambara</h3>
                  <p>
                    Facing Hazarduari Palace, the Nizamat Imambara is
                    reputed to be the largest imambara (a hall used for Shia
                    Muslim mourning rituals during Muharram) in India,
                    rebuilt in the 1840s after a fire destroyed an earlier
                    structure. Its scale and proximity to the palace make it
                    an easy, worthwhile stop on the same visit.
                  </p>
                  <h3>Kathgola Palace & Jahan Kosha Cannon</h3>
                  <p>
                    Kathgola Palace, built by a wealthy 19th-century Jain
                    merchant family, is a smaller but ornately decorated
                    property with gardens and a private temple, offering a
                    different — mercantile rather than royal — window into
                    Murshidabad's history. The Jahan Kosha ("World-Destroyer")
                    Cannon, a massive 17th-century iron cannon believed to
                    date to the pre-Nawabi era, is another notable relic in
                    the town.
                  </p>
                </section>

                {/* ── Plassey ────────────────────────────────────────────── */}
                <section id="plassey">
                  <h2>The Battle of Plassey</h2>
                  <p>
                    Around 60km south of Murshidabad, near the village of{" "}
                    <strong>Palashi</strong> (anglicised as Plassey), one of
                    the most consequential battles in Indian history was
                    fought in June 1757. Robert Clive's East India Company
                    forces defeated the army of Siraj-ud-Daulah, the young
                    and last independent Nawab of Bengal, in a battle decided
                    less by military strength than by the pre-arranged
                    betrayal of Siraj's own commander-in-chief, Mir Jafar,
                    who withheld his troops in exchange for being installed
                    as the Company's puppet Nawab afterward.
                  </p>
                  <p>
                    The victory gave the East India Company effective control
                    over Bengal's revenue and administration, and is widely
                    regarded by historians as the opening chapter of British
                    colonial rule in India — a process that would eventually
                    extend across the entire subcontinent. A modest memorial
                    marks the battlefield site today, a quieter but
                    historically significant stop for travellers with time
                    to spare beyond Murshidabad's main monuments.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Murshidabad</h2>
                  <p>
                    Most visitors base themselves in Berhampore, the
                    district headquarters a short ride from the Hazarduari
                    complex, which has the widest range of accommodation.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Simple lodges in Berhampore",
                          "West Bengal Tourism guesthouses",
                          "Basic hotels near the railway station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Standard hotels in Berhampore town",
                          "Riverside guesthouses near the palace",
                          "Business-style hotels with modern amenities",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹9,000+/night",
                        picks: [
                          "Heritage-style boutique properties",
                          "Upscale riverside resorts",
                          "Well-appointed business hotels",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1 Morning",
                        title: "Hazarduari & Nizamat Imambara",
                        color: "bg-amber-700",
                        activities: [
                          "Hazarduari Palace museum and armoury galleries",
                          "Nizamat Imambara directly opposite",
                        ],
                      },
                      {
                        day: "Day 1 Afternoon",
                        title: "Mosques & Merchant Palaces",
                        color: "bg-forest-600",
                        activities: [
                          "Katra Mosque and Murshid Quli Khan's grave",
                          "Kathgola Palace and its gardens",
                          "View the Jahan Kosha Cannon",
                        ],
                      },
                      {
                        day: "Day 2 (optional)",
                        title: "Plassey Battlefield",
                        color: "bg-sky-600",
                        activities: [
                          "Short trip to the Plassey battlefield memorial",
                          "Return via Berhampore for onward travel",
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
                    * Many travellers combine Murshidabad with a stop at{" "}
                    <Link href="/blog/mayapur-travel-guide">Mayapur</Link> on
                    the way back toward Kolkata.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Murshidabad</h2>
                  <ul>
                    <li>
                      <strong>Mughlai-influenced Bengali cuisine:</strong>{" "}
                      Nawabi-era culinary influence lingers in local
                      biryanis and kebabs available at eateries around
                      Berhampore.
                    </li>
                    <li>
                      <strong>Chhanabora and local sweets:</strong>{" "}
                      Murshidabad has its own distinct sweet-making
                      traditions worth seeking out at local shops.
                    </li>
                    <li>
                      <strong>Riverside food stalls:</strong> Simple snacks
                      and tea stalls along the Bhagirathi riverbank near the
                      palace grounds.
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
                            "₹800",
                            "₹3,000",
                            "₹6,500",
                          ],
                          ["Train from Kolkata (round trip)", "₹500", "₹1,200", "₹2,000"],
                          ["Food/day", "₹350", "₹900", "₹2,000"],
                          [
                            "Hazarduari Palace entry",
                            "₹15–100",
                            "₹15–100",
                            "₹15–100",
                          ],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
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
                    * Figures are per person, per day (train fare is a
                    round-trip figure from Kolkata).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Murshidabad</h2>
                  <ul>
                    <li>
                      <strong>Base yourself in Berhampore:</strong> It has
                      the widest range of accommodation and is a short ride
                      from Hazarduari and the other main sites.
                    </li>
                    <li>
                      <strong>Hire transport for the day:</strong> The
                      monuments are more spread out than in other heritage
                      towns in the region — a cycle-rickshaw or auto for a
                      half-day is more efficient than walking.
                    </li>
                    <li>
                      <strong>Check Hazarduari's weekly closure day:</strong>{" "}
                      Like many government-run museums in India, it closes
                      on a fixed day each week — confirm before planning
                      your visit around it.
                    </li>
                    <li>
                      <strong>Photography rules inside the palace:</strong>{" "}
                      Interior photography is often restricted or requires a
                      separate fee — check at the entrance.
                    </li>
                    <li>
                      <strong>Read up on the Plassey story
                      beforehand:</strong> It adds significant depth to what
                      is otherwise a fairly modest battlefield memorial.
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
                          "Base yourself in Berhampore for convenience",
                          "Hire transport for the day's monument-hopping",
                          "Check Hazarduari's weekly closure day first",
                          "Visit Katra Mosque and Nizamat Imambara together",
                          "Read up on Plassey before visiting the site",
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
                          "Assume you can walk easily between every site",
                          "Visit without checking the palace's closure day",
                          "Skip Kathgola Palace as a minor add-on",
                          "Photograph inside the palace without checking rules",
                          "Underestimate summer heat while sightseeing",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Murshidabad
                    with the pilgrimage town of{" "}
                    <Link href="/blog/mayapur-travel-guide">Mayapur</Link> on
                    the way back to{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>,
                    or continue further to{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      other heritage towns across West Bengal
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
                  "Murshidabad",
                  "Hazarduari Palace",
                  "West Bengal",
                  "Nawabs of Bengal",
                  "Battle of Plassey",
                  "Heritage",
                  "Berhampore",
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

              <RelatedPostsGrid currentSlug="murshidabad-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="murshidabad-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
