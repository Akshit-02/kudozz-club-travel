// src/app/blog/naida-caves-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Naida Caves Diu: Photography Spot & Visit Guide",
  description:
    "Naida Caves near Diu Fort: a maze of sandstone chambers with skylights and root-covered walls, a favourite offbeat photo spot. Timings, safety tips, visit guide.",
  keywords:
    "Naida Caves, Naida Caves Diu, Diu caves, Diu Fort caves, Naida Caves photography, Diu offbeat places, Diu sightseeing, sandstone caves Diu, things to do in Diu, Diu hidden gems",
  openGraph: {
    title: "Naida Caves Diu: Photography Spot & Visit Guide",
    description:
      "A maze of sandstone chambers near Diu Fort with natural skylights and root-covered walls — one of Diu's most photogenic offbeat spots. Full visit guide.",
    url: "https://club.kudozz.in/blog/naida-caves-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sunlight filtering into a sandstone cave chamber, evoking the natural skylights inside Naida Caves in Diu",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Naida Caves Diu: Photography Spot & Visit Guide",
    description:
      "A maze of sandstone chambers near Diu Fort with natural skylights and root-covered walls — one of Diu's most photogenic offbeat spots.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/naida-caves-travel-guide",
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
          headline: "Naida Caves Diu: Photography Spot & Visit Guide",
          description:
            "Naida Caves near Diu Fort is a maze of sandstone chambers with natural skylights and root-covered walls — a favourite offbeat photo spot. Full visit guide.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/naida-caves-travel-guide",
          },
          keywords:
            "Naida Caves, Naida Caves Diu, Diu caves, Diu Fort caves, Naida Caves photography, Diu offbeat places",
          about: {
            "@type": "Place",
            name: "Naida Caves",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Diu",
              addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
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
                name: "Daman & Diu",
                item: "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Naida Caves",
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
    q: "Are Naida Caves natural or man-made?",
    a: "Naida Caves are widely believed to be man-made rather than a natural cave formation — the commonly told local explanation is that the sandstone was quarried out from here to build Diu Fort nearby. This isn't rigorously documented archaeology, more a well-established local account passed down and repeated by guides and residents, but the carved-out chamber shapes and passageways are consistent with a quarrying origin rather than natural erosion alone.",
  },
  {
    q: "Is Naida Caves safe to explore?",
    a: "Generally yes for a cautious, alert visitor, but it isn't a managed, railed-off attraction. Surfaces inside are uneven and can be slippery (more so after rain), there's no artificial lighting, and some ledges and drop-offs aren't fenced. Keep to well-trodden paths, wear proper shoes, watch your footing constantly, and supervise children closely rather than letting them run ahead into darker chambers.",
  },
  {
    q: "How much time do I need for Naida Caves?",
    a: "Most visitors spend 30 to 45 minutes here — enough time to wander through the main chambers, find the best-lit skylight spots for photos, and explore a couple of the connecting passages. Photographers chasing specific light will often linger longer, but it's a compact site, not a half-day excursion.",
  },
  {
    q: "Is there an entry fee for Naida Caves?",
    a: "No, Naida Caves are free to enter and have no ticket counter or formal gate — you can walk in and explore at your own pace. There are also no facilities on site (no washrooms, shop, or staff), so plan accordingly before you arrive.",
  },
  {
    q: "Can I visit Naida Caves after dark?",
    a: "It isn't recommended. The caves have no artificial lighting installed, and the uneven floors, open-roofed sections, and unfenced drops make after-dark exploration genuinely risky. Naida Caves are strictly a daylight-hours visit — plan to arrive well before sunset.",
  },
  {
    q: "How far are Naida Caves from Diu Fort?",
    a: "Naida Caves sit very close to Diu Fort — an easy 5 to 10 minute walk or an even shorter auto-rickshaw or moped ride, depending on exactly where you're coming from in the old town. Most visitors combine the two in the same outing.",
  },
  {
    q: "Is Naida Caves suitable for kids or elderly visitors?",
    a: "It can work for both with care, but it isn't a smooth, wheelchair- or stroller-friendly site — floors are uneven sand and rock, and some sections require ducking or careful stepping. Keep a close hand on young children, and elderly visitors with mobility concerns should stick to the more open, ground-level chambers rather than the narrower passages.",
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
  { id: "introduction", title: "About Naida Caves", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "what-to-expect", title: "What to Expect Inside", level: 2 },
  { id: "safety", title: "Safety Notes", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-nearby", title: "Food Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NaidaCavesGuidePage() {
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
              src="/images/destinations/goa/hero.jpg"
              alt="Sunlight filtering into a sandstone cave chamber, evoking the natural skylights inside Naida Caves in Diu"
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
                {
                  label: "Daman & Diu",
                  href: "/blog/dadra-nagar-haveli-daman-diu-travel-guide",
                },
                { label: "Naida Caves", href: null },
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
              {["Naida Caves", "Diu", "Off-beat", "Photography", "Daman & Diu"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Naida Caves, Diu: A Photography Spot & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A maze of sun-dappled sandstone chambers minutes from Diu Fort
              — narrow passages, natural skylights, and tree roots growing
              straight through the rock make this one of Diu's most
              photogenic, least crowded stops.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Diu, Daman & Diu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~1,800 words",
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
                  <h2>About Naida Caves</h2>
                  <p>
                    Tucked away just outside{" "}
                    <Link href="/blog/diu-fort-travel-guide">Diu Fort</Link>,{" "}
                    <strong>Naida Caves</strong> is a maze of sandstone
                    chambers and passages that has quietly become one of{" "}
                    <Link href="/blog/diu-travel-guide">Diu</Link>'s favourite
                    offbeat spots for photography and casual exploration.
                    Unlike a formal, ticketed monument, Naida Caves feels
                    almost accidental — a network of hollowed-out rooms
                    connected by narrow openings, some fully roofed and dim,
                    others open to the sky where the ceiling has long since
                    collapsed or was never closed in.
                  </p>
                  <p>
                    The commonly told local explanation — repeated by guides
                    and residents rather than settled by formal archaeological
                    record — is that this sandstone was quarried out
                    specifically to supply building material for the
                    construction of Diu Fort nearby. Whether or not that's the
                    precise, verified origin, the carved-out shapes of the
                    chambers certainly look deliberate rather than purely
                    natural, and the caves' proximity to the fort makes the
                    story a plausible one.
                  </p>
                  <p>
                    What draws visitors today has less to do with history and
                    more to do with atmosphere: shafts of sunlight falling
                    through open roof sections onto sandy chamber floors, tree
                    roots snaking down through cracks in the rock overhead,
                    and an eerie, quiet stillness that's rare to find
                    anywhere else on this small island. It's a favourite with
                    photographers for exactly these reasons — and it pairs
                    naturally with a visit to the fort itself, or a wider trip
                    around the{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu
                    </Link>{" "}
                    coastline.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕳️</span> Naida Caves at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Diu Fort, Diu",
                        },
                        {
                          icon: "🚶",
                          label: "From Diu Fort",
                          value: "5–10 min walk",
                        },
                        {
                          icon: "🌡️",
                          label: "Visit Hours",
                          value: "Daylight only — no lighting",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "30–45 minutes",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry Fee",
                          value: "Free, no ticket counter",
                        },
                        {
                          icon: "📸",
                          label: "Known For",
                          value: "Skylights, root-covered walls",
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
                    Naida Caves have <strong>no artificial lighting</strong>{" "}
                    installed anywhere inside — every bit of illumination
                    comes from the open-roofed sections and the entrance,
                    which makes the time of day you visit far more important
                    here than at most attractions.
                  </p>
                  <ul>
                    <li>
                      <strong>Early morning (soon after sunrise):</strong>{" "}
                      Soft, low-angle light spills into the open chambers at
                      a flattering angle, and you'll likely have the whole
                      site to yourself.
                    </li>
                    <li>
                      <strong>Late afternoon, well before sunset:</strong> A
                      second good window, similar soft light, but leave
                      enough buffer to be back outside before dusk.
                    </li>
                    <li>
                      <strong>Midday:</strong> Workable, but the light
                      through the skylights turns harsher and more directly
                      overhead — still photogenic, just a different, more
                      contrasty look.
                    </li>
                    <li>
                      <strong>After dark:</strong> Avoid entirely. With no
                      lighting and uneven, unfamiliar footing, this isn't a
                      site to explore once the sun is down.
                    </li>
                  </ul>
                  <p>
                    Seasonally, the same window that works for the rest of
                    Diu applies here too — October to February brings cooler,
                    more comfortable conditions for walking around outdoors
                    before or after the caves. Monsoon months add the extra
                    complication of wet, slippery rock inside, so caution
                    matters even more if you visit June–September.
                  </p>
                  <blockquote>
                    <strong>Our pick:</strong> Arrive within the first hour or
                    two after sunrise — the light is at its best, the site is
                    at its quietest, and you'll have plenty of daylight left
                    for the rest of your Diu itinerary.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Naida Caves</h2>
                  <p>
                    Naida Caves sit right next to{" "}
                    <Link href="/blog/diu-fort-travel-guide">Diu Fort</Link>,
                    which makes them one of the easiest offbeat sights in Diu
                    to add onto an existing plan rather than a separate
                    excursion.
                  </p>
                  <ul>
                    <li>
                      <strong>On foot from Diu Fort:</strong> The most common
                      approach — a short, easy 5–10 minute walk from the fort
                      area, well within reach for most visitors already
                      exploring the old town.
                    </li>
                    <li>
                      <strong>By moped or auto-rickshaw:</strong> If you're
                      coming from further across the island — say from{" "}
                      <Link href="/blog/gangeshwar-temple-travel-guide">
                        Gangeshwar Temple
                      </Link>{" "}
                      or one of the beaches — a moped or auto gets you there
                      in a few minutes; renting a moped for the day is the
                      easiest way to string together Diu's scattered sights.
                    </li>
                    <li>
                      <strong>Parking:</strong> Informal parking space is
                      available near the entrance, adequate for a couple of
                      wheelers and a small number of cars — nothing formal or
                      paid.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Naida Caves with the
                    fort in a single outing — visit one right after the
                    other and you'll have covered two of Diu's best sights
                    within an hour or so of walking.
                  </div>
                </section>

                {/* ── What to Expect ────────────────────────────────────── */}
                <section id="what-to-expect">
                  <h2>What to Expect Inside</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="A stand-in coastal scene included for visual pacing — not an actual photo of Naida Caves' interior"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Once you step in, Naida Caves reveal themselves as a real
                    maze rather than a single cavern — narrow passages
                    connect one hollowed-out chamber to the next, some of
                    them barely wide enough to pass through single file. It's
                    genuinely easy to lose your sense of direction after a
                    few turns, which is part of the appeal rather than a
                    problem, given how compact and safe-feeling the overall
                    site is.
                  </p>
                  <ul>
                    <li>
                      <strong>Open-roofed chambers:</strong> Several sections
                      have no ceiling left at all, letting sunlight pour
                      straight down onto the sandy floor below — these are
                      the spots almost every visitor photographs.
                    </li>
                    <li>
                      <strong>Covered, dimmer passages:</strong> Other
                      sections retain their rock ceiling and stay noticeably
                      cooler and darker — atmospheric, but watch your
                      footing here more carefully.
                    </li>
                    <li>
                      <strong>Tree roots through the rock:</strong> One of
                      the most distinctive sights here — roots from trees
                      growing above have pushed down through cracks in the
                      sandstone and now hang or spread across chamber walls
                      and ceilings, a genuinely unusual visual.
                    </li>
                    <li>
                      <strong>Overgrown greenery:</strong> Moss, small plants
                      and creepers have taken hold in the sunlit sections,
                      adding to the abandoned, half-reclaimed-by-nature feel
                      of the place.
                    </li>
                    <li>
                      <strong>Cool, quiet interior:</strong> Even on a hot
                      day, the covered sections stay noticeably cooler than
                      outside — a welcome break if you're visiting midday.
                    </li>
                  </ul>
                </section>

                {/* ── Safety ────────────────────────────────────────────── */}
                <section id="safety">
                  <h2>Safety Notes</h2>
                  <p>
                    Naida Caves are informal and unmanaged — there's no
                    ticket counter, no staff on site, and no railings or
                    lighting in the darker sections. None of that makes it
                    dangerous for a careful visitor, but it does mean the
                    usual caution you'd apply at any unmanaged natural site
                    is worth taking seriously here.
                  </p>
                  <ul>
                    <li>
                      <strong>Watch your footing constantly:</strong> Sandy
                      and rocky surfaces can be uneven, and become genuinely
                      slippery after rain or in shaded, damp corners.
                    </li>
                    <li>
                      <strong>No railings near ledges or drops:</strong> Some
                      chamber edges and openings aren't fenced — keep a
                      sensible distance, especially with children.
                    </li>
                    <li>
                      <strong>Wear proper closed shoes:</strong> Sandals or
                      flip-flops make the uneven terrain considerably harder
                      and riskier to navigate.
                    </li>
                    <li>
                      <strong>Carry a phone flashlight:</strong> Useful for
                      the darker, covered passages where sunlight doesn't
                      reach.
                    </li>
                    <li>
                      <strong>Supervise children closely:</strong> The maze
                      layout and dim sections make it easy for kids to
                      wander out of sight quickly.
                    </li>
                    <li>
                      <strong>Skip it in heavy rain:</strong> Wet sandstone
                      is considerably more slippery, and open-roofed chambers
                      offer no shelter.
                    </li>
                  </ul>
                  <div
                    className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Practical caution:</strong> Treat this as an
                    unmanaged natural site, not a polished monument — move
                    slowly, stick to well-trodden paths, and don't push into
                    unfamiliar dark passages alone.
                  </div>
                </section>

                {/* ── Photography Tips ──────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <p>
                    This is one of Diu's most rewarding spots for photography
                    precisely because of the light — the contrast between
                    dim rock passages and bright shafts of sun falling
                    through the open roof sections is what makes Naida Caves
                    stand out from almost anywhere else on the island.
                  </p>
                  <ul>
                    <li>
                      <strong>Chase the skylight beams:</strong> The
                      open-roofed chambers, lit by direct sunlight against
                      dark surrounding rock, are the signature shot here —
                      arrive when the sun angle lines up with the opening for
                      the strongest effect.
                    </li>
                    <li>
                      <strong>Shoot early or late for softer light:</strong>{" "}
                      Midday sun is workable but harsher; early morning and
                      late afternoon give a gentler, more even glow.
                    </li>
                    <li>
                      <strong>Use the roots and greenery as framing:</strong>{" "}
                      The hanging roots and overgrown patches make natural
                      foreground or framing elements for portraits and
                      detail shots alike.
                    </li>
                    <li>
                      <strong>Bring a wide lens if you have one:</strong>{" "}
                      Passages are narrow, so a wider focal length helps
                      capture the scale of the chambers without backing up
                      into a wall.
                    </li>
                    <li>
                      <strong>Mind your footing while shooting:</strong> It's
                      easy to get absorbed chasing a shot — stay aware of
                      uneven ground and nearby ledges the whole time.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Naida Caves are compact enough that they slot neatly into
                    a half-day plan around Diu Fort rather than needing a
                    dedicated trip.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Step 1",
                        title: "Diu Fort First",
                        color: "bg-amber-700",
                        activities: [
                          "Explore the fort's bastions and ramparts in the cooler morning hours",
                          "Take in the sea views before the midday heat sets in",
                        ],
                      },
                      {
                        day: "Step 2",
                        title: "Naida Caves (30–45 min)",
                        color: "bg-stone-600",
                        activities: [
                          "Short walk over from the fort",
                          "Explore the chambers and passages at an unhurried pace",
                          "Photograph the skylight sections and root-covered walls",
                        ],
                      },
                      {
                        day: "Step 3",
                        title: "Round Out the Morning",
                        color: "bg-sky-600",
                        activities: [
                          "Continue on to Gangeshwar Temple or the old town",
                          "Grab a bite nearby before the day heats up further",
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
                    * Naida Caves and Diu Fort together take roughly 2–2.5
                    hours at an unhurried pace — an easy fit into a single
                    morning or evening outing.
                  </p>
                </section>

                {/* ── Food Nearby ───────────────────────────────────────── */}
                <section id="food-nearby">
                  <h2>Food Nearby</h2>
                  <p>
                    There are no food stalls at the caves themselves, but
                    Diu's old town and fort-area eateries are only a short
                    walk or ride away.
                  </p>
                  <ul>
                    <li>
                      <strong>Old town cafés and restaurants:</strong> A
                      short walk from the caves, offering everything from
                      simple thalis to seafood — the natural stop right
                      after your visit.
                    </li>
                    <li>
                      <strong>Seafront shacks:</strong> Fresh pomfret, prawns
                      and squid feature heavily across Diu's small eateries —
                      worth seeking out for lunch or an evening meal.
                    </li>
                    <li>
                      <strong>Carry water:</strong> There are no shops or
                      water points at the caves themselves — bring a bottle
                      with you before you set off.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Naida Caves themselves cost nothing to visit — your only
                    real expenses are getting there and, if you choose, a
                    meal nearby afterward.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Entry fee", "Free", "Free", "Free"],
                          [
                            "Transport from Diu Fort",
                            "Walk – free",
                            "Auto ₹50–₹100",
                            "Moped rental ₹300–₹400/day",
                          ],
                          ["Bottled water", "₹20", "₹20", "₹20"],
                          [
                            "Meal nearby",
                            "₹150–₹250",
                            "₹350–₹600",
                            "₹700+",
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
                    * Costs assume you're already based in Diu — see the{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu travel guide
                    </Link>{" "}
                    for broader trip budgeting.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Visit in daylight only:</strong> There's no
                      lighting inside — plan your visit well before sunset.
                    </li>
                    <li>
                      <strong>Wear closed, sturdy shoes:</strong> The uneven
                      sandy and rocky floor isn't sandal-friendly.
                    </li>
                    <li>
                      <strong>Combine with Diu Fort:</strong> The two sights
                      sit close enough together to visit back to back in one
                      outing.
                    </li>
                    <li>
                      <strong>Carry a flashlight or use your phone:</strong>{" "}
                      Handy for the darker, covered passages.
                    </li>
                    <li>
                      <strong>Bring your own water:</strong> No shops or
                      vendors operate on site.
                    </li>
                    <li>
                      <strong>Skip it after heavy rain:</strong> Wet
                      sandstone is noticeably more slippery than dry.
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
                          "Visit early morning or late afternoon for the best light",
                          "Wear proper closed shoes for uneven terrain",
                          "Combine the visit with nearby Diu Fort",
                          "Watch your footing near ledges and dim passages",
                          "Carry water and a phone flashlight",
                          "Keep a close eye on children in the maze-like sections",
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
                          "Visit after dark — there's no lighting inside",
                          "Wear sandals or flip-flops on the uneven floor",
                          "Wander into unfamiliar dark passages alone",
                          "Visit right after heavy rain",
                          "Expect a ticket counter, staff, or facilities on site",
                          "Let young children explore unsupervised",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Naida Caves with{" "}
                    <Link href="/blog/diu-fort-travel-guide">Diu Fort</Link>{" "}
                    and the unusual rock-side Shivlings at{" "}
                    <Link href="/blog/gangeshwar-temple-travel-guide">
                      Gangeshwar Temple
                    </Link>{" "}
                    for a full offbeat half-day around the island — or see the{" "}
                    <Link href="/blog/diu-travel-guide">Diu travel guide</Link>{" "}
                    for the complete island itinerary.
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
                  "Naida Caves",
                  "Diu",
                  "Daman and Diu",
                  "Diu Fort",
                  "Off-beat",
                  "Photography",
                  "Hidden Gems",
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

              <RelatedPostsGrid currentSlug="naida-caves-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="naida-caves-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
