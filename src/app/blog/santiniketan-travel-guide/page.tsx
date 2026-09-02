// src/app/blog/santiniketan-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Santiniketan Travel Guide: Tagore's University Town",
  description:
    "Complete Santiniketan guide — Vishwa-Bharati University (UNESCO World Heritage), Uttarayan, Kala Bhavana, Sonajhuri haat, Poush Mela, how to reach from Kolkata, and a full visit plan.",
  keywords:
    "Santiniketan travel guide, Bolpur, Vishwa-Bharati University, Rabindranath Tagore, Santiniketan UNESCO, Sonajhuri haat, Poush Mela, Basanta Utsav, Uttarayan Santiniketan, Kala Bhavana, how to reach Santiniketan, West Bengal heritage",
  openGraph: {
    title: "Santiniketan Travel Guide: Tagore's University Town",
    description:
      "Rabindranath Tagore's rural university town — UNESCO-listed Vishwa-Bharati, open-air classrooms, Sonajhuri's Saturday haat, and Bengal's most colourful spring festival.",
    url: "https://club.kudozz.in/blog/santiniketan-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Tree-lined rural campus setting evoking Santiniketan's open-air Vishwa-Bharati University grounds",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiniketan Travel Guide: Tagore's University Town",
    description:
      "UNESCO-listed Vishwa-Bharati, open-air classrooms, Sonajhuri's Saturday haat, and Bengal's most colourful spring festival.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/santiniketan-travel-guide",
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
          headline: "Santiniketan Travel Guide: Tagore's University Town",
          description:
            "Complete Santiniketan guide — Vishwa-Bharati University (UNESCO World Heritage), Uttarayan, Kala Bhavana, Sonajhuri haat, Poush Mela, how to reach from Kolkata, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
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
            "@id": "https://club.kudozz.in/blog/santiniketan-travel-guide",
          },
          keywords:
            "Santiniketan, Bolpur, Vishwa-Bharati University, Rabindranath Tagore, UNESCO World Heritage, Sonajhuri haat, Poush Mela, Basanta Utsav",
          about: {
            "@type": "Place",
            name: "Santiniketan",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bolpur",
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
                name: "Santiniketan",
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
    q: "How do I reach Santiniketan from Kolkata?",
    a: "The easiest way is by train from Howrah station to Bolpur Santiniketan railway station, a journey of roughly 2.5-3 hours covering about 180km — several express trains run daily, including popular options that let you do it as a long day trip. By road, it's around a 3.5-4 hour drive via NH2 (Grand Trunk Road). The station itself is only about 2km from the main campus and market area.",
  },
  {
    q: "Is Santiniketan a UNESCO World Heritage Site?",
    a: "Yes — Vishwa-Bharati University at Santiniketan was inscribed as a UNESCO World Heritage Site in September 2023, recognised for its distinctive architecture and its founding philosophy of open-air, nature-integrated education pioneered by Rabindranath Tagore in the early 20th century.",
  },
  {
    q: "What is the Sonajhuri haat and when does it happen?",
    a: "The Sonajhuri haat (also called Khoai Mela) is a rural craft and produce market held every Saturday afternoon under the Sonajhuri forest on the outskirts of Santiniketan. Local Santhal artisans and traders sell handicrafts, tribal jewellery, textiles, and folk music performances fill the grounds — it's one of the most popular reasons to time a visit for a weekend.",
  },
  {
    q: "What is the best time to visit Santiniketan?",
    a: "October to March offers the most comfortable weather for exploring the campus and surrounding countryside. If you can time it, December's Poush Mela (a major winter fair) and Basanta Utsav in March (Santiniketan's famous, colourful Holi celebration) are the two standout special events worth planning a trip around.",
  },
  {
    q: "Can I visit as a day trip from Kolkata, or should I stay overnight?",
    a: "A day trip is possible if you take an early train and focus on Uttarayan and Kala Bhavana, but an overnight stay lets you also catch the Sonajhuri haat (Saturdays), explore the surrounding Santhal villages, and see the campus in its quieter early-morning hours — most visitors find one night is worth the extra time.",
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
  { id: "introduction", title: "Tagore's University Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Santiniketan", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "festivals", title: "Poush Mela & Basanta Utsav", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SantiniketanGuidePage() {
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
              alt="Tree-lined rural campus setting evoking Santiniketan's open-air Vishwa-Bharati University grounds"
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
                { label: "Santiniketan", href: null },
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
                "Santiniketan",
                "Rabindranath Tagore",
                "Vishwa-Bharati",
                "UNESCO Heritage",
                "Bolpur",
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
              Santiniketan: Tagore's University Town Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A rural campus built on the idea that education happens best
              under open sky and trees — Rabindranath Tagore's Vishwa-Bharati,
              now a UNESCO World Heritage Site, and the Saturday haat at
              Sonajhuri that draws visitors from across Bengal.
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
                  text: "Bolpur, West Bengal",
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
                  <h2>Tagore's University Town</h2>
                  <p>
                    <strong>Santiniketan</strong> — "the abode of peace" —
                    began in 1863 as a quiet retreat built by Debendranath
                    Tagore, father of the poet Rabindranath Tagore, on the
                    dry red-soil plains of what is now Birbhum district,
                    roughly 180km northwest of{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>.
                    Rabindranath expanded it into an experimental school in
                    1901 and, in 1921, founded{" "}
                    <strong>Vishwa-Bharati University</strong> here, built on
                    a radical-for-its-time idea: that learning happens best
                    outdoors, under trees, in close contact with nature and
                    the surrounding rural community, rather than confined to
                    classroom walls.
                  </p>
                  <p>
                    That founding philosophy is still visible today —
                    classes are still held in the open air on the campus's
                    tree-shaded grounds, weather permitting, and the entire
                    town retains an unhurried, artistic character shaped by
                    generations of students, poets, and painters who studied
                    or taught here, including Satyajit Ray and Indira
                    Gandhi among its more famous alumni.
                  </p>
                  <p>
                    In September 2023, UNESCO inscribed Santiniketan as a
                    World Heritage Site, citing both its distinctive
                    architecture — blending Bengali, colonial, and
                    pan-Asian influences — and its enduring philosophy of
                    education in harmony with nature. Nearby, the Saturday{" "}
                    <strong>Sonajhuri haat</strong> adds a lively, very
                    different flavour of rural Bengal to any visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>📖</span> Santiniketan at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Birbhum district, West Bengal",
                        },
                        {
                          icon: "🚂",
                          label: "From Kolkata",
                          value: "~2.5-3 hr train to Bolpur",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Vishwa-Bharati, Tagore Legacy",
                        },
                        {
                          icon: "🛍️",
                          label: "Sonajhuri Haat",
                          value: "Every Saturday afternoon",
                        },
                        {
                          icon: "🏆",
                          label: "Status",
                          value: "UNESCO World Heritage (2023)",
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
                  <h2>Best Time to Visit Santiniketan</h2>
                  <p>
                    Santiniketan's open-air campus and rural surroundings
                    make weather matter more than usual — winter is
                    unambiguously the best season here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable for walking the campus and countryside. This window also covers both of Santiniketan's signature festivals — Poush Mela in December and Basanta Utsav in March.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot — avoid if possible",
                        text: "Birbhum's dry red-soil plains get punishingly hot, with little shade relief outside the campus's older tree cover.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but wet",
                        text: "The countryside turns a vivid green and the Sonajhuri forest is at its most beautiful, but frequent rain can disrupt open-air campus life and travel plans.",
                      },
                      {
                        season: "Dec & Mar",
                        emoji: "🎊",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Festival season",
                        text: "Poush Mela (Dec) and Basanta Utsav (Mar) are Santiniketan's two biggest events — plan well ahead if you want to be here for either.",
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
                    <strong>Our pick:</strong> October to March, ideally
                    timed around Poush Mela in December or Basanta Utsav in
                    March if festival energy is what you're after.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Santiniketan</h2>
                  <p>
                    Santiniketan sits just outside the town of{" "}
                    <strong>Bolpur</strong>, and the two names are often used
                    interchangeably for travel purposes.
                  </p>
                  <ul>
                    <li>
                      <strong>By Train:</strong> Bolpur Santiniketan railway
                      station is the main gateway, roughly 2.5-3 hours from
                      Howrah by express train — several run daily, making a
                      day trip from{" "}
                      <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                      genuinely feasible.
                    </li>
                    <li>
                      <strong>By Road:</strong> About 180km from Kolkata via
                      NH2 (Grand Trunk Road), roughly a 3.5-4 hour drive
                      depending on traffic.
                    </li>
                    <li>
                      <strong>Getting around locally:</strong> The station is
                      only about 2km from the main campus and market area —
                      cycle-rickshaws, autos, and rented bicycles are the
                      easiest way to get around once there, and cycling fits
                      the town's unhurried character particularly well.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're visiting on a
                    Saturday, plan your train timing around the Sonajhuri
                    haat, which runs through the afternoon — arriving by late
                    morning gives you the whole day.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Santiniketan</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="Quiet, tree-lined countryside setting near Santiniketan, West Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Uttarayan Complex</h3>
                  <p>
                    Tagore's residence for much of his life, Uttarayan is a
                    cluster of five distinct houses — including Udayan,
                    Konark, and Shyamali — each built in a different
                    architectural style at his direction, now preserved as a
                    museum housing his manuscripts, paintings, personal
                    belongings, and Nobel Prize memorabilia (Tagore won the
                    Nobel Prize in Literature in 1913, the first non-European
                    to do so).
                  </p>
                  <h3>Kala Bhavana</h3>
                  <p>
                    Vishwa-Bharati's celebrated art school, whose alumni
                    include some of modern India's most significant artists.
                    Its buildings and surrounding grounds are decorated with
                    murals and sculptures by former students and faculty,
                    including work by Nandalal Bose and Ramkinkar Baij —
                    walking the campus itself functions almost as an open-air
                    gallery.
                  </p>
                  <h3>Open-Air Classrooms</h3>
                  <p>
                    Look for the campus's tree-shaded teaching spaces, where
                    classes are still conducted outdoors whenever weather
                    allows — a living demonstration of Tagore's founding
                    educational philosophy, and one of the details that most
                    surprises first-time visitors.
                  </p>
                  <h3>Sonajhuri Haat (Khoai Mela)</h3>
                  <p>
                    Every Saturday afternoon, a rural market springs up
                    beneath the Sonajhuri forest on the edge of town, where
                    local Santhal artisans sell handwoven textiles, tribal
                    jewellery, terracotta and dokra metal crafts, and folk
                    music fills the air from small groups of Baul singers.
                    It's one of the most atmospheric, least touristy markets
                    in West Bengal, and reason alone to plan a weekend visit.
                  </p>
                  <h3>Amar Kutir</h3>
                  <p>
                    A long-running handicrafts cooperative founded in the
                    Gandhian tradition of rural self-reliance, selling
                    leather goods, batik textiles, and other local crafts —
                    a good stop for souvenirs that support local artisans
                    directly.
                  </p>
                </section>

                {/* ── Festivals ──────────────────────────────────────────── */}
                <section id="festivals">
                  <h2>Poush Mela & Basanta Utsav</h2>
                  <p>
                    Santiniketan's two biggest annual events transform the
                    town completely, and either is worth planning a trip
                    around if your dates allow.
                  </p>
                  <ul>
                    <li>
                      <strong>Poush Mela (December):</strong> A week-long
                      winter fair dating back over a century, blending rural
                      Bengal's craft traditions, Baul folk music, and food
                      stalls into one of the region's most significant annual
                      gatherings — thousands of visitors from across Bengal
                      and beyond attend.
                    </li>
                    <li>
                      <strong>Basanta Utsav (March):</strong> Santiniketan's
                      famous spring festival, held around Holi, where
                      students and visitors dance through the campus in
                      colourful traditional dress, showering each other in
                      gulal (coloured powder) to music and Tagore's own
                      spring songs — widely considered one of India's most
                      beautiful Holi celebrations.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Accommodation sells out fast
                    for both festivals — book at least a month ahead if
                    you're planning to be in Santiniketan for Poush Mela or
                    Basanta Utsav.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Santiniketan</h2>
                  <p>
                    Accommodation is concentrated around the campus and
                    Bolpur town, with a mix of simple guesthouses, mid-range
                    resorts, and a handful of higher-end retreats in the
                    surrounding countryside.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses near Bolpur station",
                          "Vishwa-Bharati guest accommodation",
                          "Simple lodges in the market area",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Garden resorts on the town's edge",
                          "Boutique heritage-style stays",
                          "Cottage properties near Sonajhuri",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "Countryside resort retreats",
                          "Heritage-style boutique properties",
                          "Private pool villas near the forest edge",
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
                        day: "Day 1",
                        title: "Campus & Museums",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at Uttarayan complex and its museums",
                          "Walk through Kala Bhavana's murals and sculptures",
                          "Afternoon browsing Amar Kutir for crafts",
                        ],
                      },
                      {
                        day: "Day 2 (or Sat afternoon)",
                        title: "Sonajhuri & Countryside",
                        color: "bg-forest-600",
                        activities: [
                          "Cycle or rickshaw out to Sonajhuri haat",
                          "Browse Santhal crafts and hear Baul folk music",
                          "Return via the open-air classrooms at sunset",
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
                    * Time it for a Saturday if the Sonajhuri haat is a
                    priority — it's the single most-requested experience
                    here.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Santiniketan</h2>
                  <ul>
                    <li>
                      <strong>Bengali home-style thalis:</strong> Small,
                      family-run eateries near the campus serve simple,
                      well-cooked rice-fish-vegetable thalis at low prices.
                    </li>
                    <li>
                      <strong>Sonajhuri haat food stalls:</strong> On
                      Saturdays, look for local snacks and freshly cooked
                      street food alongside the craft stalls.
                    </li>
                    <li>
                      <strong>Café-style spots near the campus:</strong>{" "}
                      A handful of relaxed cafés popular with students and
                      visitors serve everything from tea and snacks to
                      full meals.
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
                            "₹1,000",
                            "₹4,000",
                            "₹12,000",
                          ],
                          ["Train from Kolkata (round trip)", "₹400", "₹900", "₹1,600"],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹150",
                            "₹400",
                            "₹1,000",
                          ],
                          ["Museum & site entries", "₹100", "₹200", "₹400"],
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
                  <h2>Essential Tips for Visiting Santiniketan</h2>
                  <ul>
                    <li>
                      <strong>Rent a bicycle:</strong> Santiniketan's flat,
                      quiet roads make cycling the most enjoyable way to move
                      between the campus, Sonajhuri, and surrounding
                      villages.
                    </li>
                    <li>
                      <strong>Time your visit around a Saturday:</strong> The
                      Sonajhuri haat is one of the region's best experiences
                      and only happens on Saturday afternoons.
                    </li>
                    <li>
                      <strong>Book ahead for Poush Mela or Basanta
                      Utsav:</strong> Both festivals draw large crowds, and
                      accommodation fills up weeks in advance.
                    </li>
                    <li>
                      <strong>Dress respectfully on campus:</strong> This is
                      a working university with an active academic
                      community, not simply a tourist attraction.
                    </li>
                    <li>
                      <strong>Check museum opening days:</strong> Uttarayan
                      and some campus museums close on certain weekdays —
                      confirm before planning your day around them.
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
                          "Rent a bicycle to explore the countryside",
                          "Visit on a Saturday for Sonajhuri haat",
                          "Book ahead for Poush Mela or Basanta Utsav",
                          "Spend time at Kala Bhavana's murals",
                          "Try local Bengali thalis near the campus",
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
                          "Visit in April-June's peak heat",
                          "Skip checking museum weekday closures",
                          "Rush the Uttarayan complex in under an hour",
                          "Show up unbooked during Poush Mela week",
                          "Treat the campus as a purely tourist site",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Santiniketan
                    with the terracotta temples of{" "}
                    <Link href="/blog/bishnupur-travel-guide">
                      Bishnupur
                    </Link>{" "}
                    or the Tantric pilgrimage town of{" "}
                    <Link href="/blog/tarapith-travel-guide">Tarapith</Link>,
                    both reachable within a few hours, before returning to{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>.
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
                  "Santiniketan",
                  "Rabindranath Tagore",
                  "Vishwa-Bharati",
                  "West Bengal",
                  "UNESCO Heritage",
                  "Bolpur",
                  "Basanta Utsav",
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

              <RelatedPostsGrid currentSlug="santiniketan-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="santiniketan-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
