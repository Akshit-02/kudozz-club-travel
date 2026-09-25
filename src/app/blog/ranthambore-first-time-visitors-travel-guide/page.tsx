// src/app/blog/ranthambore-first-time-visitors-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import GuideTripCTA from "@/components/ui/GuideTripCTA";

const HERO_IMAGE =
  "/images/blogs/rajasthan/ranthambore-first-time-visitors/ranthambore-fort-from-forest-below.webp";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Things to Do in Ranthambore for First-Time Visitors",
  description:
    "A first-time visitor's honest account of Ranthambore — the safari that finally delivered a tigress near Padam Talao, the climb up Ranthambore Fort almost skipped, a chai stop in Sawai Madhopur, and a half-day at Chambal Gharial Sanctuary.",
  keywords:
    "things to do in Ranthambore, Ranthambore first time visitor, Ranthambore safari experience, Ranthambore Fort, Padam Talao, Sawai Madhopur, Chambal Gharial Sanctuary, Ranthambore Tiger Machan",
  openGraph: {
    title: "Things to Do in Ranthambore for First-Time Visitors",
    description:
      "A first-time visitor's honest account of Ranthambore — safaris, Padam Talao, the climb up Ranthambore Fort, a market walk in Sawai Madhopur, and a half-day at Chambal Gharial Sanctuary.",
    url: "https://club.kudozz.in/blog/ranthambore-first-time-visitors-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: HERO_IMAGE,
        width: 1600,
        height: 901,
        alt: "Ranthambore Fort's ramparts rising above the forest of Ranthambore National Park, Rajasthan",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Things to Do in Ranthambore for First-Time Visitors",
    description:
      "A first-time visitor's honest account of Ranthambore — safaris, Padam Talao, Ranthambore Fort, and a half-day at Chambal Gharial Sanctuary.",
    images: [HERO_IMAGE],
  },
  alternates: {
    canonical:
      "https://club.kudozz.in/blog/ranthambore-first-time-visitors-travel-guide",
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
          headline: "Things to Do in Ranthambore for First-Time Visitors",
          description:
            "A first-time visitor's honest account of Ranthambore — the safari that finally delivered a tigress near Padam Talao, the climb up Ranthambore Fort almost skipped, a chai stop in Sawai Madhopur, and a half-day at Chambal Gharial Sanctuary.",
          image: `https://club.kudozz.in${HERO_IMAGE}`,
          datePublished: "2026-09-14",
          dateModified: "2026-09-14",
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
            "@id":
              "https://club.kudozz.in/blog/ranthambore-first-time-visitors-travel-guide",
          },
          keywords:
            "Ranthambore, first-time visitor, tiger safari, Ranthambore Fort, Padam Talao, Rajasthan",
          about: {
            "@type": "Place",
            name: "Ranthambore National Park",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
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
                name: "Rajasthan",
                item: "https://club.kudozz.in/blog/rajasthan-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Things to Do in Ranthambore",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "the-safari", title: "The Safari", level: 2 },
  {
    id: "padam-talao",
    title: "Padam Talao, Even Without the Tiger",
    level: 2,
  },
  {
    id: "ranthambore-fort",
    title: "Ranthambore Fort, Which I Almost Skipped",
    level: 2,
  },
  {
    id: "local-market-chai",
    title: "The Local Market and a Cup of Chai",
    level: 2,
  },
  {
    id: "chambal-gharial-sanctuary",
    title: "A Half-Day at Chambal Gharial Sanctuary",
    level: 2,
  },
  { id: "dastkar", title: "Dastkar and the Small Things", level: 2 },
  {
    id: "first-timer-tips",
    title: "What I Would Tell a First-Timer",
    level: 2,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RanthamboreFirstTimeVisitorsPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Ranthambore Fort's ramparts rising above the forest of Ranthambore National Park, Rajasthan"
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
                { label: "Rajasthan", href: "/blog/rajasthan-travel-guide" },
                { label: "Things to Do in Ranthambore", href: null },
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
                "Ranthambore",
                "Tiger Safari",
                "Rajasthan",
                "Ranthambore Fort",
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
              Things to Do in Ranthambore for First-Time Visitors
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A first-timer&apos;s honest account of a Ranthambore trip that
              turned out to be about much more than tiger sightings.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "6 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sawai Madhopur, Rajasthan",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,140 words",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
                {/* ── Introduction (no heading in the original piece) ────── */}
                <p>
                  I still remember the drive in. Dusty roads, dhok trees on both
                  sides, and this odd quiet that settled in the moment the city
                  noise faded behind us. I had visited{" "}
                  <Link href="/blog/ranthambore-travel-guide">Ranthambore</Link>{" "}
                  for the first time last winter, mostly because a friend would
                  not stop talking about her tiger sighting from the year
                  before. I went in expecting just safaris and not much else. I
                  came back with a list of things to do in Ranthambore that had
                  nothing to do with tigers at all, and that surprised me the
                  most.
                </p>
                <p>
                  We stayed at Ranthambore Tiger Machan, and I will admit, the
                  resort itself became part of the story. It is the kind of{" "}
                  {/* <a
                    href="https://www.ranthamboretigermachan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                  <strong>resort in Ranthambore</strong>
                  {/* </a>{" "} */}
                  that doesn&apos;t try too hard to impress you with fancy
                  words; it just quietly gets the basics right. Comfortable
                  tents, good food, and staff who actually seemed to enjoy
                  telling you where to go and what to skip. That last part
                  mattered more than I expected.
                </p>

                {/* ── The Safari ──────────────────────────────────────── */}
                <section id="the-safari">
                  <h2>The Safari</h2>
                  <p>
                    Yes, the safari is why most people come here, and yes,
                    it&apos;s worth every bit of the early wake-up call. Our
                    first morning started at 5:30 AM, slightly cold, getting
                    into the jeep with blankets wrapped around us.
                  </p>
                  <p>
                    We didn&apos;t see a tiger on that first drive. I remember
                    feeling a bit disheartened, watching the clock tick toward
                    the end of our three hours with nothing but a few deer and a
                    lot of dust to show for it. But our naturalist, a calm guy
                    named Rajesh, kept pointing out things I would&apos;ve
                    completely missed.
                  </p>
                  <p>
                    Fresh pugmarks near a water hole. A langur going oddly quiet
                    in the trees above us. He explained that sometimes that
                    silence tells you more than an actual sighting would, and by
                    the end of the drive I believed him.
                  </p>
                  <p>
                    On our third drive, we finally saw her. A tigress, just
                    resting near Padam Talao, completely unbothered by six jeeps
                    clicking away with their cameras. I won&apos;t lie, I got a
                    little emotional. There&apos;s something about seeing an
                    animal that big, that calm, in its own space, that just sits
                    with you for a while after.
                  </p>
                </section>

                <GuideTripCTA slug="ranthambore-first-time-visitors-travel-guide" />

                {/* ── Padam Talao ──────────────────────────────────────── */}
                <section id="padam-talao">
                  <h2>Padam Talao, Even Without the Tiger</h2>
                  <p>
                    Speaking of Padam Talao, this lake deserves its own mention
                    beyond just being where we got lucky. It&apos;s the largest
                    lake in the park, and even on drives when we didn&apos;t
                    spot anything major, sitting near its edge watching birds
                    skim the water felt like enough.
                  </p>
                  <p>
                    Jogi Mahal sits right on its bank too, this old, slightly
                    collapsing structure that adds a strange look to the whole
                    scene.
                  </p>
                  <p>
                    I would tell any first-time visitor not to treat this as
                    just a backdrop for tiger photos. Slow down here if your
                    safari route allows it. It&apos;s genuinely one of the
                    calmer, prettier corners of the park.
                  </p>
                </section>

                {/* ── Ranthambore Fort ─────────────────────────────────── */}
                <section id="ranthambore-fort">
                  <h2>Ranthambore Fort, Which I Almost Skipped</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/blogs/rajasthan/ranthambore-first-time-visitors/ranthambore.webp"
                      alt="Ranthambore, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    On our second day, we had a gap between the morning and
                    evening safari, and someone at the resort suggested we visit
                    Ranthambore Fort. I will be honest, I almost said no. I was
                    tired, and forts weren&apos;t really on my radar for a
                    wildlife trip.
                  </p>
                  <p>
                    I am glad I did not skip it. The fort is right inside the
                    park boundary, and the climb up gives you this big view over
                    the forest that genuinely puts the whole park into
                    perspective. You can actually trace the shape of the lakes
                    from up there, and see just how much forest stretches out
                    beyond what a jeep covers in one drive. Inside, there&apos;s
                    Trinetra Ganesh Temple, an old temple that gets a steady
                    stream of local visitors, not just tourists.
                  </p>
                  <p>
                    There is something about seeing locals come here for their
                    own reasons. We ended up chatting with an elderly man
                    selling <em>prasad</em> outside the temple, and he told us
                    his family had been coming here for generations, long before
                    any of these was a tourist stop.
                  </p>
                </section>

                {/* ── Local Market and Chai ────────────────────────────── */}
                <section id="local-market-chai">
                  <h2>The Local Market and a Cup of Chai</h2>
                  <p>
                    One evening, we skipped dinner at the resort and walked into
                    Sawai Madhopur town instead. There was no real plan behind
                    it, just a stroll through the local market, past small shops
                    selling everything from handwoven textiles to steel
                    utensils, the kind of shops that seem to sell a bit of
                    everything at once. We stopped at a roadside stall for chai,
                    the overly sweet kind that somehow tastes exactly right
                    after a long day outdoors.
                  </p>
                  <p>
                    It won&apos;t make anyone&apos;s list of must-do things the
                    way a safari does. But if you want to feel the town itself,
                    not just the forest around it, it&apos;s worth keeping aside
                    an hour for. It&apos;s a small addition to the trip, and yet
                    it&apos;s stayed with me longer than I expected.
                  </p>
                </section>

                {/* ── Chambal Gharial Sanctuary ────────────────────────── */}
                <section id="chambal-gharial-sanctuary">
                  <h2>A Half-Day at Chambal Gharial Sanctuary</h2>
                  <p>
                    We had a spare day, so the resort put together a trip to
                    Chambal Gharial Sanctuary, about an hour and a half from
                    where we were staying. I&apos;d never even heard the word
                    gharial before this trip. They&apos;re crocodiles that look
                    like something pulled straight out of an old nature
                    documentary.
                  </p>
                  <p>
                    We took a boat out on the Chambal River and spotted several
                    of them basking along the banks, along with more birds than
                    we could keep track of, most of which we had no idea how to
                    name.
                  </p>
                  <p>
                    If your schedule allows it, this is a genuinely nice change
                    of pace from the safari routine. It&apos;s slower, quieter,
                    and shows you a different side of the region&apos;s wildlife
                    altogether.
                  </p>
                </section>

                {/* ── Dastkar ───────────────────────────────────────────── */}
                <section id="dastkar">
                  <h2>Dastkar and the Small Things</h2>
                  <p>
                    On our last morning, we stopped by a small local craft
                    centre called Dastkar, which supports village artisans in
                    the area. I ended up buying a hand-block-printed scarf that
                    I still use, and, knowing it actually supported someone
                    locally, made it feel like a better reminder than the usual
                    keychain-and-magnet combo you grab at an airport.
                  </p>
                </section>

                {/* ── What I Would Tell a First-Timer ──────────────────── */}
                <section id="first-timer-tips">
                  <h2>What I Would Tell a First-Timer</h2>
                  <p>
                    If this is your first trip here, don&apos;t spend all your
                    time planning safaris. Ranthambore needs a bit of wandering.
                    Sit by the lake even if no tiger appears. Make the climb up
                    to the fort even when you&apos;re tired. Skip a resort
                    dinner occasionally and go find chai in town instead.
                  </p>
                  <p>
                    And pick your stay carefully. Ours was not fancy, but it
                    made a real impact, not least because the team knew the area
                    for real and helped us craft our trip around what we wanted
                    to do versus what looked good in a brochure.
                  </p>
                  <p>
                    I went in thinking this was a trip full of tigers. I left
                    with a thought: bigger than this is a forest, an old fort, a
                    calm lake, and a market that smelled like fresh spices — the
                    boat ride I did not even know I needed. And that, more than
                    the actual tiger sighting, makes me want to return.
                  </p>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Ranthambore",
                  "Tiger Safari",
                  "Rajasthan",
                  "Ranthambore Fort",
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

              <RelatedPostsGrid currentSlug="ranthambore-first-time-visitors-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ranthambore-first-time-visitors-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
