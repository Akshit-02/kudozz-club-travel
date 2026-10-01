// /editorial-policy: how Kudozz Club researches, dates, corrects and funds
// its guides. Referenced by the Organization schema (publishingPrinciples),
// the About page and the footer. Keep it to practices the team actually
// follows; see docs/human-input-required.md before adding claims.
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { SITE_URL, CONTACT_EMAIL, guideCountLabel, pageSocial } from "@/lib/site";

const PATH = "/editorial-policy";
const TITLE = "Editorial Policy: How We Research Our Guides | Kudozz Club";
const DESCRIPTION =
  "How Kudozz Club researches, sources, dates and corrects its India travel guides, how images are licensed, and why guides carry no paid placements.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  ...pageSocial(PATH, TITLE, DESCRIPTION),
};

const sections = [
  {
    id: "who",
    title: "Who publishes the guides",
    body: [
      `Kudozz Club's ${guideCountLabel} India travel guides are published by the Kudozz Club editorial team. Kudozz Club is an India-focused travel agency, and the guides are the destination research behind the trips we plan. They are free to read and are written to be useful whether or not you plan a trip with us.`,
      "Guides contributed by outside writers through our Write for Us programme are credited to their author.",
    ],
  },
  {
    id: "research",
    title: "How we research",
    body: [
      "Each guide aims to answer the questions people have before a trip: when to go, how to get there, how many days to allow, where to stay, what it costs and what to watch out for.",
      "For facts that matter to safety and planning (permits, park seasons, opening days, entry rules, road and pass openings) we rely first on official sources: state tourism departments, the Ministry of Tourism, national park and tiger reserve authorities, the Archaeological Survey of India, Indian Railways, airports and other government portals. Where historians, traditions or sources disagree (for example on lists of Jyotirlingas or Shakti Peethas, or on the dating of a monument), the guide says so rather than picking one version silently.",
    ],
  },
  {
    id: "changing-facts",
    title: "Prices, timings and rules change",
    body: [
      "Ticket prices, opening hours, permit rules, safari bookings, road conditions and seasonal closures change often in India. Guides give these as they stood when the guide was written or last updated, and budget figures are estimates, not quotes.",
      "Always confirm time-sensitive details with the official source before you travel, especially for high-altitude routes, border areas, national parks and pilgrimages with registration systems.",
    ],
  },
  {
    id: "dates",
    title: "Publication and update dates",
    body: [
      "Each guide records when it was published and when it was last meaningfully updated. We change the update date only when the content changes (a corrected fact, a new section, revised practical information), never just to make a page look fresh.",
    ],
  },
  {
    id: "independence",
    title: "Independence and money",
    body: [
      "We don't accept paid placements from hotels, operators or brands in our guides, and a guide's recommendations aren't changed to sell a trip. Guides link to our tour package pages and to Plan My Trip where that is genuinely the next step, and those links are clearly ours.",
      "We don't publish fixed package prices, ratings, awards or testimonials we can't verify.",
    ],
  },
  {
    id: "images",
    title: "Images",
    body: [
      "We use photos that show the place the guide is about. Creative Commons and other licensed images are credited, with their source and licence, on our image credits page. If you believe an image is wrongly attributed or shows the wrong place, tell us and we will fix or replace it.",
    ],
  },
  {
    id: "corrections",
    title: "Corrections",
    body: [
      `If you spot an error, an outdated detail or a broken link, email ${CONTACT_EMAIL} with the page address and what needs changing. We review every report, correct confirmed errors and update the page's modified date when we do.`,
    ],
  },
];

function Schema() {
  const url = `${SITE_URL}${PATH}`;
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
        { "@type": "ListItem", position: 3, name: "Editorial Policy", item: url },
      ],
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

export default function EditorialPolicyPage() {
  return (
    <>
      <Schema />
      <SiteHeader />
      <main>
        <section className="bg-stone-950 pb-14 pt-32 sm:pt-36">
          <div className="container-site max-w-3xl">
            <nav aria-label="Breadcrumb" className="font-sans text-xs text-white/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true" className="text-white/25">/</li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li aria-hidden="true" className="text-white/25">/</li>
                <li aria-current="page" className="text-white/40">Editorial Policy</li>
              </ol>
            </nav>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
              Editorial Policy
            </h1>
            <p className="mt-5 font-sans text-base leading-relaxed text-stone-300 sm:text-lg">
              How we research, source, date and correct the Kudozz Club India
              travel guides.
            </p>
          </div>
        </section>

        <div className="container-site max-w-3xl py-16">
          <nav aria-label="On this page" className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">On this page</p>
            <ul className="mt-3 grid gap-1.5 font-sans text-sm sm:grid-cols-2">
              {sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="text-link">{s.title}</a></li>
              ))}
            </ul>
          </nav>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-12 scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-stone-950">{s.title}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-4 font-sans text-base leading-relaxed text-stone-700">{p}</p>
              ))}
              {s.id === "images" && (
                <p className="mt-4 font-sans text-sm"><Link href="/image-credits" className="text-link">See image credits</Link></p>
              )}
              {s.id === "who" && (
                <p className="mt-4 font-sans text-sm">
                  <Link href="/about" className="text-link">About Kudozz Club</Link> ·{" "}
                  <Link href="/write-for-us" className="text-link">Write for Us</Link>
                </p>
              )}
            </section>
          ))}

          <div className="mt-14 rounded-2xl border border-stone-200 bg-white p-6">
            <p className="font-display text-lg font-bold text-stone-950">Planning a trip rather than reading about one?</p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-stone-600">
              Tell us where you want to go and we&rsquo;ll plan it around your dates and budget.
            </p>
            <Link href={`/plan-your-trip?from=${PATH}`} className="btn-primary mt-4 inline-flex">Plan My Trip →</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
