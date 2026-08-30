// src/app/blog/chanakyapuri-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chanakyapuri Guide: Delhi's Diplomatic Enclave",
  description:
    "An honest guide to Chanakyapuri, Delhi's diplomatic enclave — what's actually worth visiting, from Nehru Park and tree-lined boulevards to nearby Gandhi Smriti and Teen Murti Bhavan.",
  keywords:
    "Chanakyapuri Delhi, Chanakyapuri travel guide, Nehru Park Delhi, Diplomatic Enclave Delhi, Chanakyapuri embassies, Gandhi Smriti, Teen Murti Bhavan, Chanakyapuri things to do, Chanakyapuri Delhi tourism",
  openGraph: {
    title: "Chanakyapuri Guide: Delhi's Diplomatic Enclave",
    description:
      "Embassies, tree-lined boulevards, and Nehru Park — an honest look at what's actually worth visiting in and around Chanakyapuri.",
    url: "https://club.kudozz.in/blog/chanakyapuri-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Generic representative Indian heritage architecture — used as a stand-in image; it does not depict Chanakyapuri's mid-century diplomatic buildings",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanakyapuri Guide: Delhi's Diplomatic Enclave",
    description:
      "Embassies, tree-lined boulevards, and Nehru Park — an honest look at what's actually worth visiting in Chanakyapuri.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chanakyapuri-delhi-travel-guide",
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
          headline: "Chanakyapuri Guide: Delhi's Diplomatic Enclave",
          description:
            "An honest guide to Chanakyapuri, Delhi's diplomatic enclave — what's actually worth visiting, from Nehru Park and tree-lined boulevards to nearby Gandhi Smriti and Teen Murti Bhavan.",
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
            "@id": "https://club.kudozz.in/blog/chanakyapuri-delhi-travel-guide",
          },
          keywords:
            "Chanakyapuri Delhi, Nehru Park Delhi, Diplomatic Enclave Delhi, Gandhi Smriti, Teen Murti Bhavan",
          about: {
            "@type": "Place",
            name: "Chanakyapuri",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chanakyapuri",
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
                name: "Chanakyapuri",
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
    q: "Can tourists visit Chanakyapuri?",
    a: "Yes — Chanakyapuri's public roads, parks, and green spaces are open to everyone, and there's no restriction on walking or driving through the area. What you can't do is walk into the embassies themselves; those are working diplomatic missions, not sightseeing stops. Think of it as a place to visit for a park stroll or a quiet drive, not a monument-hopping destination.",
  },
  {
    q: "What is Chanakyapuri famous for?",
    a: "Chanakyapuri is known as Delhi's Diplomatic Enclave — planned in the 1950s and 60s as independent India's purpose-built district for foreign embassies and high commissions, and named after Chanakya, the ancient strategist and author of the Arthashastra. It's recognisable for its wide, tree-lined boulevards, spaced-out mid-century compounds, and a noticeably quieter, greener atmosphere than most of Delhi.",
  },
  {
    q: "Are embassies in Chanakyapuri open to visitors?",
    a: "Almost never for casual sightseeing. Embassies and high commissions in Chanakyapuri operate by appointment for visa applications, consular services, and official business — they are not tourist attractions and don't offer walk-in tours. A small number occasionally hold public cultural events (film screenings, exhibitions) that are announced in advance, but you shouldn't plan a visit around the assumption of getting inside one.",
  },
  {
    q: "Is Nehru Park worth visiting?",
    a: "Yes, if you enjoy a genuinely peaceful green space — it's one of Delhi's larger, better-maintained public lawns, popular in the early morning with walkers, joggers, and yoga groups, and it occasionally hosts open-air concerts and cultural events. It's not a must-see landmark in the way Lodhi Garden or India Gate is, but it's a pleasant stop if you're already in the area or want a quiet break from the city.",
  },
  {
    q: "How do I get to Chanakyapuri from central Delhi?",
    a: "The easiest way is by app-based cab or auto-rickshaw — Chanakyapuri isn't directly served by a metro station within the enclave itself, though Race Course and Dhaula Kuan stations on the Delhi Metro are within a short drive. If you're combining the visit with Gandhi Smriti or Teen Murti Bhavan, a single cab covering all three makes far more sense than trying to walk between them, since distances are longer than they look on a map.",
  },
  {
    q: "Can I take photographs in Chanakyapuri?",
    a: "General street photography of the boulevards and parks is fine, but avoid photographing embassy buildings, gates, boundary walls, or security personnel directly — this is treated seriously given the area's diplomatic and security status, and doing so can draw the attention of guards or police. Photograph the greenery and the park, not the compounds.",
  },
  {
    q: "How much time should I plan for a Chanakyapuri visit?",
    a: "An hour or two is enough for the enclave itself — a walk or drive through the boulevards plus some time at Nehru Park. Most visitors extend this into half a day by combining it with nearby Gandhi Smriti and Teen Murti Bhavan, both of which sit just at the edge of the zone and are genuine, substantial sightseeing stops in their own right.",
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
  { id: "introduction", title: "What Chanakyapuri Actually Is", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chanakyapuri", level: 2 },
  { id: "what-to-see", title: "What's Actually Worth Seeing", level: 2 },
  { id: "embassy-visits", title: "Visiting Embassies: Practical Notes", level: 2 },
  { id: "food-guide", title: "Where to Eat Nearby", level: 2 },
  { id: "visit-plan", title: "A Suggested Half-Day Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChanakyapuriGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Generic representative Indian heritage architecture — used as a stand-in image; it does not depict Chanakyapuri's mid-century diplomatic buildings"
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
                { label: "Chanakyapuri", href: null },
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
                "Chanakyapuri",
                "Delhi",
                "Nehru Park",
                "Diplomatic Enclave",
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
              Chanakyapuri, Delhi: An Honest Guide to the Diplomatic Enclave
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Wide boulevards, embassy compounds, and one genuinely pleasant
              park — Chanakyapuri isn't a conventional sightseeing district,
              and this guide tells you honestly what's worth your time here
              and what isn't.
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
                  text: "Chanakyapuri, New Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,000 words",
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
                  <h2>What Chanakyapuri Actually Is</h2>
                  <p>
                    Let's be upfront: <strong>Chanakyapuri</strong> is not a
                    conventional sightseeing district, and if you land here
                    expecting a Delhi monument to photograph and move on
                    from, you'll leave disappointed. It's a planned
                    residential and diplomatic zone — quiet streets lined
                    with embassy compounds, most of which are simply not
                    open to the public. This guide is written honestly
                    around that reality: what's actually worth visiting in
                    and around Chanakyapuri, rather than overselling a
                    district that was never designed to be a tourist
                    attraction in the first place.
                  </p>
                  <p>
                    The area is named after <strong>Chanakya</strong>, the
                    ancient strategist, economist, and author of the{" "}
                    <em>Arthashastra</em>, who served as advisor to the
                    Mauryan emperor Chandragupta. It was planned in the{" "}
                    <strong>1950s and 60s</strong> as independent India's
                    purpose-built Diplomatic Enclave — a deliberate,
                    spacious layout of wide roads and generously spaced plots
                    designed to house the country's growing corps of foreign
                    missions after Independence. Today, it's home to the
                    large majority of Delhi's embassies and high
                    commissions, from sprawling modernist compounds to more
                    modest bungalow-style missions, giving the area a
                    noticeably quieter, greener, more spread-out feel than
                    almost anywhere else in{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>.
                  </p>
                  <p>
                    So why write a guide to it at all? Because a handful of
                    genuinely worthwhile things sit inside or right at the
                    edge of Chanakyapuri — a well-loved public park, a quiet
                    architectural walk through mid-century Delhi planning,
                    and two significant, substantial sights (Gandhi Smriti
                    and Teen Murti Bhavan) that most itineraries lump in with
                    this part of the city. Combined, they add up to a solid
                    half-day — just not the kind of half-day you'd spend
                    inside Chanakyapuri's embassy compounds themselves.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Chanakyapuri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South-West Delhi, near Race Course",
                        },
                        {
                          icon: "🏗️",
                          label: "Planned",
                          value: "1950s–60s, Diplomatic Enclave",
                        },
                        {
                          icon: "🏢",
                          label: "Character",
                          value: "Embassies, wide boulevards, greenery",
                        },
                        {
                          icon: "🌳",
                          label: "Main Draw",
                          value: "Nehru Park + nearby Gandhi Smriti",
                        },
                        {
                          icon: "🚕",
                          label: "Getting Around",
                          value: "Cab / auto — not metro-direct",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "1–2 hrs (half-day with Gandhi Smriti)",
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
                  <h2>Best Time to Visit Chanakyapuri</h2>
                  <p>
                    Since the main draws here — Nehru Park and a walk along
                    the boulevards — are entirely outdoors, the timing
                    advice mirrors the rest of Delhi: cool, dry months make
                    everything more pleasant, and early mornings are best
                    for the park regardless of season.
                  </p>
                  <ul>
                    <li>
                      <strong>October – March:</strong> The most comfortable
                      window, with cool mornings ideal for a walk through
                      Nehru Park or the boulevards without Delhi's summer
                      heat.
                    </li>
                    <li>
                      <strong>April – June:</strong> Punishing daytime heat
                      makes outdoor walking uncomfortable; if you must visit,
                      stick to early morning or after sunset.
                    </li>
                    <li>
                      <strong>Early morning, any season:</strong> Nehru Park
                      is at its best between roughly 6 and 8 AM, when
                      walkers, joggers, and yoga groups fill the lawns and
                      the light is soft for photography.
                    </li>
                  </ul>
                  <blockquote>
                    <strong>Our pick:</strong> A weekday morning between
                    November and February — cooler weather, an active park,
                    and quieter roads for a boulevard walk.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chanakyapuri</h2>
                  <p>
                    Chanakyapuri sits in South-West Delhi, close to Race
                    Course and Dhaula Kuan, and while it's centrally located,
                    it isn't directly threaded through by the metro the way
                    Connaught Place or Hauz Khas is.
                  </p>
                  <ul>
                    <li>
                      <strong>By app-based cab or auto:</strong> By far the
                      easiest option — Uber/Ola or a metered auto will drop
                      you at Nehru Park, a specific embassy road, or right at
                      Gandhi Smriti's gate.
                    </li>
                    <li>
                      <strong>By metro:</strong> Race Course station (Airport
                      Express / Pink Line, depending on the section) and
                      Dhaula Kuan (Airport Express) are the closest metro
                      stations, both requiring a short cab or auto ride to
                      reach the enclave itself.
                    </li>
                    <li>
                      <strong>By car:</strong> Chanakyapuri sits close to
                      major roads like Sardar Patel Marg and Shanti Path,
                      making it an easy stop if you're already driving
                      between South Delhi and Central Delhi.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Because the sights here are
                    spread across a few kilometres and there's no metro
                    station right inside the enclave, it's worth keeping a
                    cab waiting or booking one-way rides between stops rather
                    than planning to walk the whole visit.
                  </div>
                </section>

                {/* ── What to See ───────────────────────────────────────── */}
                <section id="what-to-see">
                  <h2>What's Actually Worth Seeing</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Generic Indian heritage architecture used as representative stand-in imagery — not a photograph of Chanakyapuri, Nehru Park, or Teen Murti Bhavan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Nehru Park:</strong> A large, well-kept green
                      lawn that's genuinely the single best reason to come to
                      Chanakyapuri. It's a favourite among Delhi locals for
                      morning walks, jogging, and yoga sessions, and it
                      occasionally hosts open-air concerts and cultural
                      events on its lawns — check listings before your visit
                      if that's the draw. It's not a landmark in the
                      postcard sense, but it's a genuinely pleasant,
                      well-used public space.
                    </li>
                    <li>
                      <strong>The boulevards themselves:</strong> Chanakyapuri
                      is one of the few parts of Delhi where you can take a
                      quiet, unhurried walk or drive and simply take in the
                      city planning — wide tree-lined roads, generous
                      setbacks, and a mix of mid-century modernist and more
                      traditional embassy architecture, all built to a
                      distinctly different rhythm than the rest of the city.
                      It's a low-key, architecturally minded way to spend an
                      hour rather than a must-see attraction.
                    </li>
                    <li>
                      <strong>Gandhi Smriti (National Gandhi Museum area):
                      </strong>{" "}
                      Sitting right at the edge of the Chanakyapuri zone,
                      Gandhi Smriti is the house where Mahatma Gandhi spent
                      his final months and was assassinated in 1948 — now a
                      museum and memorial with the room he lived in preserved
                      and a marked path tracing his final walk. This is a
                      substantial, genuinely moving sight in its own right,
                      not a footnote.
                    </li>
                    <li>
                      <strong>Teen Murti Bhavan:</strong> Also just at the
                      edge of the area, this was the official residence of
                      India's first Prime Minister, Jawaharlal Nehru, and is
                      now a museum covering his life and India's independence
                      movement, set in expansive grounds. Like Gandhi Smriti,
                      it's a real destination — worth combining with a
                      Chanakyapuri visit rather than a reason to skip it.
                    </li>
                  </ul>
                  <blockquote>
                    Realistically, Gandhi Smriti and Teen Murti Bhavan are
                    the sights that make this half of Delhi worth a
                    dedicated visit — Chanakyapuri's own park and boulevards
                    are a pleasant, low-effort add-on once you're already in
                    the neighbourhood.
                  </blockquote>
                </section>

                {/* ── Embassy Visits ────────────────────────────────────── */}
                <section id="embassy-visits">
                  <h2>Visiting Embassies: Practical Notes</h2>
                  <p>
                    If you're in Chanakyapuri for an actual embassy visit —
                    a visa application, a consular appointment, or other
                    official business — a few practical points are worth
                    knowing.
                  </p>
                  <ul>
                    <li>
                      <strong>Appointments are almost always required:
                      </strong>{" "}
                      Nearly every embassy and high commission in
                      Chanakyapuri operates strictly by prior appointment for
                      visa and consular services — walk-ins are rarely, if
                      ever, entertained. Check the specific embassy's
                      official website for booking procedures before you
                      travel.
                    </li>
                    <li>
                      <strong>Carry valid photo ID:</strong> Security
                      screening at embassy gates is standard, and you'll
                      need government-issued ID and, in most cases, your
                      appointment confirmation to be let in at all.
                    </li>
                    <li>
                      <strong>Electronics restrictions vary widely:</strong>{" "}
                      Some missions don't allow phones or cameras past
                      security; others are more relaxed. This differs
                      embassy to embassy, so it's worth checking in advance
                      rather than assuming.
                    </li>
                    <li>
                      <strong>Cultural events are the exception, not the
                      rule:</strong> A handful of embassies occasionally open
                      their doors for public film screenings, exhibitions, or
                      cultural programming — these are announced individually
                      (often via the embassy's social media or cultural
                      centre listings), not something you can simply show up
                      for.
                    </li>
                  </ul>
                  <p>
                    In short: don't plan a Chanakyapuri visit around getting
                    inside an embassy unless you have specific, confirmed
                    business there. For everyone else, the area's value is
                    in its parks, its architecture, and its neighbours —
                    Gandhi Smriti and Teen Murti Bhavan.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Nearby</h2>
                  <p>
                    Chanakyapuri isn't a dining destination in the way
                    Khan Market or Hauz Khas Village is, but a handful of
                    well-regarded options exist, largely attached to the
                    area's hotels.
                  </p>
                  <ul>
                    <li>
                      <strong>Hotel restaurants:</strong> Several of Delhi's
                      well-known five-star hotels sit in and around
                      Chanakyapuri and Diplomatic Enclave, and their
                      in-house restaurants are generally the most reliable,
                      well-regarded dining options in the immediate area —
                      worth checking current menus and reservation
                      requirements ahead of a visit.
                    </li>
                    <li>
                      <strong>Nearby markets:</strong> For a wider range of
                      casual options, Sarojini Nagar Market and Khan Market
                      are both a short drive away and offer everything from
                      street food to upscale cafés — a more practical choice
                      if you want variety rather than a single hotel dining
                      room.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>A Suggested Half-Day Plan</h2>
                  <p>
                    Given Chanakyapuri's limited standalone draw, the most
                    sensible way to visit is to combine its park and
                    boulevards with Gandhi Smriti and Teen Murti Bhavan,
                    both just at the edge of the zone.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Nehru Park & the Boulevards",
                        color: "bg-forest-600",
                        activities: [
                          "Start early — walk the lawns while it's cool and active",
                          "A slow drive or walk along the embassy boulevards",
                          "No photography of embassy gates or guards",
                        ],
                      },
                      {
                        day: "Mid-Morning",
                        title: "Gandhi Smriti",
                        color: "bg-amber-700",
                        activities: [
                          "Visit the preserved room and memorial",
                          "Walk the marked path of Gandhi's final steps",
                          "Allow 45–60 minutes for a thoughtful visit",
                        ],
                      },
                      {
                        day: "Late Morning",
                        title: "Teen Murti Bhavan",
                        color: "bg-sky-600",
                        activities: [
                          "Explore Nehru's former residence and museum",
                          "Walk the grounds — expansive and shaded",
                          "Allow 45–90 minutes depending on interest",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Lunch & Onward",
                        color: "bg-stone-600",
                        activities: [
                          "Lunch at a nearby hotel restaurant or Khan Market",
                          "Combine with a Lodhi Garden or New Delhi itinerary",
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
                    * If you'd rather build a bigger day around Central
                    Delhi's parks and gardens, pair this with our{" "}
                    <Link href="/blog/lodhi-garden-delhi-travel-guide">
                      Lodhi Garden guide
                    </Link>{" "}
                    or read up on the broader{" "}
                    <Link href="/blog/new-delhi-travel-guide">
                      New Delhi
                    </Link>{" "}
                    area first.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Chanakyapuri itself costs almost nothing to visit — the
                    park and boulevards are free — so your main expenses are
                    transport, museum entry (where applicable), and food.
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
                          ["Nehru Park entry", "Free", "Free", "Free"],
                          [
                            "Gandhi Smriti / Teen Murti entry",
                            "Free – nominal",
                            "Free – nominal",
                            "Free – nominal",
                          ],
                          [
                            "Local transport (cab/auto, half-day)",
                            "₹300",
                            "₹800",
                            "₹2,000",
                          ],
                          ["Meal nearby", "₹300", "₹1,200", "₹4,000+"],
                          ["Half-day total (approx.)", "₹600", "₹2,000", "₹6,000+"],
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
                    * Museum entry fees for Gandhi Smriti and Teen Murti
                    Bhavan are minimal to free for Indian nationals; check
                    current rates before visiting. Figures exclude
                    accommodation, since Chanakyapuri is typically visited as
                    a half-day trip rather than a base for staying.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Chanakyapuri</h2>
                  <ul>
                    <li>
                      <strong>Carry ID:</strong> Security checks are routine
                      near embassy areas and at Gandhi Smriti / Teen Murti
                      Bhavan entrances — carry a government-issued photo ID.
                    </li>
                    <li>
                      <strong>Don't photograph embassy buildings or gates:
                      </strong>{" "}
                      Security is genuinely tight in this part of Delhi —
                      photographing embassy compounds, gates, or guards can
                      draw unwanted attention. Stick to the park and general
                      streetscape.
                    </li>
                    <li>
                      <strong>Don't loiter near embassy compounds:</strong>{" "}
                      Standing around or lingering outside a mission's gates
                      without clear purpose is likely to attract security
                      personnel — keep moving unless you're at the park or a
                      public sight.
                    </li>
                    <li>
                      <strong>Book any embassy business in advance:</strong>{" "}
                      If your visit includes an actual consular appointment,
                      confirm booking requirements on the relevant embassy's
                      official website well before you go.
                    </li>
                    <li>
                      <strong>Pair the visit, don't isolate it:</strong>{" "}
                      Chanakyapuri alone is a short visit — combine it with
                      Gandhi Smriti, Teen Murti Bhavan, or a wider{" "}
                      <Link href="/blog/vasant-kunj-delhi-travel-guide">
                        South Delhi
                      </Link>{" "}
                      itinerary to make the trip worthwhile.
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
                          "Visit Nehru Park early morning for the best atmosphere",
                          "Combine the trip with Gandhi Smriti and Teen Murti Bhavan",
                          "Carry a valid photo ID at all times",
                          "Book embassy appointments in advance if you have official business",
                          "Keep a cab on call — distances are longer than they look",
                          "Check for public cultural events at embassies before assuming entry",
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
                          "Photograph embassy buildings, gates, or security personnel",
                          "Loiter near embassy compounds without clear purpose",
                          "Expect to walk into an embassy without an appointment",
                          "Plan a full day around Chanakyapuri alone",
                          "Assume metro connectivity — a cab or auto is needed",
                          "Skip carrying ID, even for a casual park visit",
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
                    <strong>🗺️ Extend the trip:</strong> Chanakyapuri sits
                    within easy reach of{" "}
                    <Link href="/blog/lodhi-garden-delhi-travel-guide">
                      Lodhi Garden
                    </Link>
                    ,{" "}
                    <Link href="/blog/new-delhi-travel-guide">
                      New Delhi's
                    </Link>{" "}
                    central sights, and{" "}
                    <Link href="/blog/vasant-kunj-delhi-travel-guide">
                      Vasant Kunj
                    </Link>{" "}
                    to the south — all worth folding into the same day if
                    you're basing yourself in this part of the city.
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
                  "Chanakyapuri",
                  "Delhi",
                  "Nehru Park",
                  "Diplomatic Enclave",
                  "Gandhi Smriti",
                  "Teen Murti Bhavan",
                  "City Guide",
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

              <RelatedPostsGrid currentSlug="chanakyapuri-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chanakyapuri-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
