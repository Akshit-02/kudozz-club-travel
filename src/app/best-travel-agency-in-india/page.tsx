// /best-travel-agency-in-india: the commercial-investigation page for
// "best travel agency in India" and its variants (top travel agencies, best
// tour operator, travel agency for Rajasthan/Kerala/Kashmir trips...).
// The homepage owns the brand + "India travel agency" intent; this page
// answers the comparison question honestly (how to judge any agency, then
// where Kudozz Club fits) and makes no ranking, award or registration claim.
// See docs/canonical-keyword-ownership-map.md.
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { getDestinationProfile } from "@/lib/destination-profiles";
import { getComboPackage } from "@/lib/combo-packages";
import { SITE_URL, guideCountLabel, destinationGuideLabel, stateCount, pageSocial } from "@/lib/site";

const PATH = "/best-travel-agency-in-india";
const TITLE = "Best Travel Agency in India for Customized Trips | Kudozz Club";
const DESCRIPTION =
  "How to judge a travel agency in India before you pay, which kind suits your trip, and how Kudozz Club plans customized trips across all 36 states and UTs.";
const HERO = "/images/blogs/rajasthan/rajasthan/jaisalmer-fort-sunrise-golden-city.webp";
const HERO_ALT = "Sandstone walls of Jaisalmer Fort glowing at sunrise, Rajasthan";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  ...pageSocial(PATH, TITLE, DESCRIPTION, HERO, HERO_ALT),
};

// ── Content ──────────────────────────────────────────────────────────────────

const quickAnswer = [
  "Specialises in the kind of trip you want (a family holiday, a honeymoon, a safari or a Himalayan road trip are planned very differently).",
  "Plans around your dates, budget and pace instead of fitting you into a fixed departure.",
  "Gives an itemised quote and a written cancellation policy before you pay.",
  "Can show real business details: a registered entity, GST invoices and a way to reach them during the trip.",
  "Tells you honestly when a route is rushed or a season is wrong.",
];

const agencyTypes = [
  {
    type: "Large group-tour operators",
    bestFor: "First-time travellers who want a fixed itinerary, a tour manager and set departure dates.",
    watch: "Little flexibility on pace, hotels or dates; you travel with the group.",
  },
  {
    type: "Online travel agencies and marketplaces",
    bestFor: "Comparing ready-made packages and prices quickly, or booking flights and hotels yourself.",
    watch: "Marketplaces pass your enquiry to third-party agents, so check who will actually run the trip.",
  },
  {
    type: "Customized trip planners (like Kudozz Club)",
    bestFor: "Private trips built around your dates, budget and interests: families, couples, small groups.",
    watch: "Prices are quoted per trip, so compare like for like (hotel category, transport, inclusions).",
  },
  {
    type: "Local ground operators",
    bestFor: "A single region you already know, such as a Ladakh or Spiti circuit or a Kerala houseboat.",
    watch: "Quality varies widely; ask about vehicles, drivers, permits and on-trip support.",
  },
];

const checklist = [
  {
    title: "Check registration and memberships",
    text: "The Ministry of Tourism runs a voluntary approval scheme for travel agents and tour operators, and approved agencies can be searched on the National Government Services Portal. Industry bodies such as IATO, TAAI and ADTOI list their members. Approval is voluntary, so its absence is not proof of a problem, but an agency should be able to tell you its registered business name and GST number.",
  },
  {
    title: "Ask for an itemised quote",
    text: "A good quote lists hotels (name or category), room type, meal plan, vehicle type, sightseeing, permits and taxes. \"All-inclusive\" with no detail makes packages impossible to compare.",
  },
  {
    title: "Get the cancellation policy in writing",
    text: "Know what happens if you cancel, if a road or pass closes, or if a flight is delayed. Hill and Himalayan trips in particular need a plan for weather disruption.",
  },
  {
    title: "Find out who pays the hotels and drivers",
    text: "Ask whether the agency books and pays suppliers directly, and who you call on the ground if something goes wrong.",
  },
  {
    title: "Test the itinerary for realism",
    text: "Look at the daily driving times. A plan that squeezes Srinagar, Gulmarg, Pahalgam and Sonamarg into three days, or Munnar, Thekkady and Alleppey into four, is a warning sign.",
  },
  {
    title: "Read independent reviews",
    text: "Look for detailed reviews on platforms the agency does not control, and ask to speak to a past traveller if you are booking something expensive.",
  },
];

const styles = [
  { name: "Family holidays", pkg: "family-holidays", guide: "/blog/hill-stations-for-families-in-india", guideLabel: "hill stations for families", text: "Shorter travel days, family rooms and a pace that works for grandparents and children." },
  { name: "Honeymoons", pkg: "honeymoon", guide: "/blog/beach-honeymoon-destinations-in-india", guideLabel: "beach honeymoon destinations", text: "Privacy-first stays and unhurried routes in Kashmir, Kerala, the Andamans and the hills." },
  { name: "Adventure trips", pkg: "adventure-tours", guide: "/adventure-travel", guideLabel: "adventure travel in India", text: "Treks, rafting and high passes, planned around permits, altitude and season." },
  { name: "Wildlife safaris", pkg: "wildlife-tours", guide: "/wildlife-tourism", guideLabel: "wildlife tourism in India", text: "Tiger reserves and national parks, with safari zones and park seasons built in." },
  { name: "Beach holidays", pkg: "goa", guide: "/beach-travel", guideLabel: "beach travel in India", text: "Goa, Kerala, the Andaman Islands and quieter coasts, timed around the monsoon." },
  { name: "Hill station holidays", pkg: "hill-station-holidays", guide: "/hill-station-travel", guideLabel: "hill station travel", text: "From Shimla and Darjeeling to Munnar and Coorg, matched to the month you travel." },
  { name: "Road trips", pkg: "road-trip-holidays", guide: "/road-trips", guideLabel: "road trips in India", text: "Realistic driving days, good overnight stops and drivers who know the route." },
  { name: "Spiritual and pilgrimage trips", pkg: "spiritual-tours", guide: "/spiritual-tourism", guideLabel: "spiritual tourism in India", text: "Char Dham, the Jyotirlingas and sacred cities, with time for darshan and rest." },
  { name: "Heritage and culture", pkg: "heritage-tours", guide: "/heritage-cultural-tourism", guideLabel: "heritage and cultural tourism", text: "Forts, palaces, UNESCO sites and old cities, without monument fatigue." },
  { name: "Nature holidays", pkg: "nature-holidays", guide: "/nature-travel", guideLabel: "nature travel in India", text: "Forests, waterfalls, valleys and village stays in the Western Ghats, the Himalaya and the Northeast." },
  { name: "Luxury holidays", pkg: "luxury-holidays", guide: "/blog/luxury-hill-holidays-in-india", guideLabel: "luxury hill holidays", text: "Heritage hotels, boutique stays and private transfers where they add to the trip." },
  { name: "Budget trips", pkg: "budget-holidays", guide: "/blog/budget-hill-stations-in-india", guideLabel: "budget hill stations", text: "Good-value stays and trains or shared transport where they work, without cutting safety." },
];

const destinationSlugs = [
  "rajasthan",
  "kerala",
  "kashmir",
  "himachal-pradesh",
  "uttarakhand",
  "leh-ladakh",
  "goa",
  "andaman-nicobar",
];

const destinations = destinationSlugs.map((slug) => {
  const p = getDestinationProfile(slug)!;
  return {
    href: `/packages/${slug}`,
    name: p.shortName,
    blurb: p.cardBlurb,
    months: p.bestMonths,
    route: `${p.routes[0].name} (${p.routes[0].days})`,
  };
});
for (const slug of ["northeast-india", "golden-triangle"]) {
  const c = getComboPackage(slug)!;
  destinations.push({
    href: `/packages/${slug}`,
    name: c.name,
    blurb: c.intro,
    months: "",
    route: `${c.routes[0].stops.map((s) => s.label).join(", ")} (${c.routes[0].days})`,
  });
}

const steps = [
  { n: "01", title: "Tell us what you want", text: "Destination (or ask us to suggest one), dates, who is travelling, budget range and what matters to you." },
  { n: "02", title: "We plan the route", text: "The Kudozz Club team drafts a day-by-day itinerary with realistic travel times, drawing on our destination guides." },
  { n: "03", title: "Refine it together", text: "Change places, pace, stays or duration by email until the plan fits. You see the quote for your trip, not a generic package price." },
  { n: "04", title: "Travel", text: "Once the plan works for you, go ahead with the travel arrangements Kudozz Club supports." },
];

const faqs = [
  {
    q: "Which is the best travel agency in India?",
    a: "There is no single best travel agency for every trip. Large group-tour operators suit people who want fixed departures and a tour manager; customized planners like Kudozz Club suit private trips built around your dates and budget; local operators can be excellent for one region. The best choice is the agency that specialises in your kind of trip, quotes transparently and gives honest advice.",
  },
  {
    q: "How can I check whether a travel agency in India is genuine?",
    a: "Ask for the registered business name and GST number, check whether it is approved under the Ministry of Tourism's voluntary scheme (searchable on the National Government Services Portal) or a member of bodies such as IATO or TAAI, insist on an itemised quote and written cancellation terms, and read reviews on platforms the agency does not control.",
  },
  {
    q: "Is a customized trip better than a fixed tour package?",
    a: "It depends on how you like to travel. A fixed package is simple and often cheaper for standard routes. A customized trip costs more planning time but fits your dates, pace, hotel preferences and interests, and avoids paying for sightseeing you do not want. Families, couples and anyone with a specific idea usually get more from a customized trip.",
  },
  {
    q: "What kind of travel agency is Kudozz Club?",
    a: `Kudozz Club is an India-focused travel agency that plans customized trips across all ${stateCount} Indian states and union territories. Trips are planned in-house by the Kudozz Club team, not passed to a marketplace of agents, and are backed by ${guideCountLabel} free India travel guides.`,
  },
  {
    q: "Does Kudozz Club publish package prices?",
    a: "No. Every trip is quoted for your dates, group size, hotel category and route, because those change the price more than anything else. Tell us your budget range in the enquiry form and we plan within it. The destination guides include indicative budget breakdowns if you want a rough idea first.",
  },
  {
    q: "Which destinations and trip types can Kudozz Club plan?",
    a: "Trips anywhere in India: popular routes such as Rajasthan, Kerala, Kashmir, Himachal Pradesh, Uttarakhand, Ladakh, Goa, the Andamans, the Golden Triangle and Northeast India, and off-beat regions too. Trip types include family holidays, honeymoons, adventure, wildlife, beach, hill station, road trip, pilgrimage, heritage, nature, luxury and budget trips.",
  },
  {
    q: "How do I start planning a trip with Kudozz Club?",
    a: "Fill in the Plan My Trip form with where you want to go, your dates, the number of travellers and a budget range. A rough idea is enough. We reply by email to discuss the plan.",
  },
];

// ── Schema ───────────────────────────────────────────────────────────────────

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
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${HERO}` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Best Travel Agency in India", item: url },
      ],
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Customized India trip planning",
      serviceType: "Travel agency: customized India tours and tour packages",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      url,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "India trips by travel style",
        itemListElement: styles.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}/packages/${s.pkg}` },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function BestTravelAgencyPage() {
  return (
    <>
      <Schema />
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-stone-950">
          <Image src={HERO} alt={HERO_ALT} fill priority sizes="100vw" className="-z-10 object-cover opacity-45" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/30" />
          <div className="container-site max-w-4xl pb-16 pt-32 sm:pt-36">
            <nav aria-label="Breadcrumb" className="font-sans text-xs text-white/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true" className="text-white/25">/</li>
                <li aria-current="page" className="text-white/40">Best Travel Agency in India</li>
              </ol>
            </nav>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Best Travel Agency in India for Customized Trips
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-stone-200 sm:text-lg">
              How to judge a travel agency before you pay, which kind suits your
              trip, and how Kudozz Club, an India-focused travel agency, plans
              customized trips across all {stateCount} states and union territories.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/plan-your-trip?from=${PATH}`} className="btn-primary px-7">Plan My Trip →</Link>
              <Link href="/packages" className="btn-outline-light px-7">Explore Tour Packages</Link>
            </div>
          </div>
        </section>

        <div className="container-site max-w-4xl py-16">
          {/* Quick answer (AEO) */}
          <section aria-labelledby="quick-answer" className="rounded-2xl border border-forest-200 bg-forest-50 p-6 sm:p-8">
            <h2 id="quick-answer" className="font-display text-2xl font-bold text-stone-950">
              Quick answer: what makes a travel agency the best choice?
            </h2>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-700">
              No agency is the best for every trip. The best travel agency in India
              for you is the one that:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 font-sans text-[15px] leading-relaxed text-stone-800">
              {quickAnswer.map((q) => <li key={q}>{q}</li>)}
            </ol>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-stone-700">
              Kudozz Club is built for the customized end of that list: private
              India trips planned in-house around your dates and budget, with
              pricing quoted for your trip rather than a fixed package price.
            </p>
          </section>

          {/* Types of agency */}
          <section className="mt-16" aria-labelledby="types">
            <h2 id="types" className="heading-lg">Which kind of travel agency suits your trip?</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-stone-600">
              Travel agencies in India work in different ways. Knowing which
              kind you are talking to explains most differences in price,
              flexibility and service.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200">
              <table className="w-full min-w-[640px] border-collapse font-sans text-sm">
                <thead className="bg-stone-100 text-left text-stone-700">
                  <tr>
                    <th scope="col" className="p-4 font-semibold">Type of agency</th>
                    <th scope="col" className="p-4 font-semibold">Best for</th>
                    <th scope="col" className="p-4 font-semibold">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  {agencyTypes.map((t, i) => (
                    <tr key={t.type} className={i % 2 ? "bg-stone-50" : "bg-white"}>
                      <th scope="row" className="p-4 text-left font-semibold text-stone-900">{t.type}</th>
                      <td className="p-4 text-stone-700">{t.bestFor}</td>
                      <td className="p-4 text-stone-600">{t.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Checklist */}
          <section className="mt-16" aria-labelledby="checklist">
            <h2 id="checklist" className="heading-lg">How to check a travel agency in India before you pay</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-stone-600">
              Use this checklist with any agency, including us. If an agency
              can&rsquo;t answer these clearly, keep looking.
            </p>
            <ol className="mt-6 space-y-4">
              {checklist.map((c, i) => (
                <li key={c.title} className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-5">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest-600 font-sans text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-stone-950">{c.title}</h3>
                    <p className="mt-1 font-sans text-[15px] leading-relaxed text-stone-600">{c.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 font-sans text-sm text-stone-500">
              Sources:{" "}
              <a className="text-link" href="https://services.india.gov.in/service/detail/search-for-travel-agents-approved-by-ministry-of-tourism" target="_blank" rel="noopener">
                National Government Services Portal: travel agents approved by the Ministry of Tourism
              </a>
              ;{" "}
              <a className="text-link" href="https://tourism.gov.in/" target="_blank" rel="noopener">
                Ministry of Tourism, Government of India
              </a>
              .
            </p>
          </section>

          {/* Kudozz Club */}
          <section className="mt-16" aria-labelledby="kudozz">
            <h2 id="kudozz" className="heading-lg">Where Kudozz Club fits</h2>
            <div className="mt-4 space-y-4 font-sans text-base leading-relaxed text-stone-700">
              <p>
                Kudozz Club is an India-focused travel agency. We plan customized
                trips anywhere in India, from a long weekend in the hills to a
                multi-state holiday, around your dates, budget, interests and
                pace. Trips are planned in-house by the Kudozz Club team; your
                enquiry isn&rsquo;t sold on to a marketplace of agents.
              </p>
              <p>
                Our planning is backed by {guideCountLabel} free India travel guides, including {destinationGuideLabel}{" "}
                <Link href="/destinations" className="text-link">destination guides</Link> covering
                every Indian state and union territory: best time to visit, how
                to reach, how many days to allow and what things cost. Anyone can
                use them, whether or not they plan with us, and we don&rsquo;t
                accept paid placements in them.
              </p>
              <p>What we don&rsquo;t do:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Publish fixed &ldquo;from ₹&rdquo; prices. Every trip is quoted for your route, hotels and group.</li>
                <li>Push the longest possible itinerary. We&rsquo;ll tell you when fewer places will make a better trip.</li>
                <li>Claim rankings or awards. Judge us on the plan we send you.</li>
              </ul>
            </div>

            <h3 className="mt-10 font-display text-2xl font-bold text-stone-950">How planning with Kudozz Club works</h3>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <span className="font-sans text-xs font-bold tracking-[0.2em] text-forest-600">{s.n}</span>
                  <p className="mt-1 font-display text-lg font-bold text-stone-950">{s.title}</p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-stone-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Travel styles */}
          <section className="mt-16" aria-labelledby="styles">
            <h2 id="styles" className="heading-lg">Trips we plan, by travel style</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-stone-600">
              Each travel style has its own package page with suggested routes,
              and a guide hub if you want to research first.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {styles.map((s) => (
                <li key={s.name} className="rounded-2xl border border-stone-200 bg-white p-5">
                  <h3 className="font-display text-lg font-bold text-stone-950">{s.name}</h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-stone-600">{s.text}</p>
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm">
                    <Link href={`/packages/${s.pkg}`} className="font-semibold text-forest-700 hover:underline underline-offset-4">
                      {s.pkg === "goa" ? "Goa tour packages" : `${s.name} packages`}
                    </Link>
                    <Link href={s.guide} className="text-stone-600 hover:text-forest-700 hover:underline underline-offset-4">
                      Guide: {s.guideLabel}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Destinations */}
          <section className="mt-16" aria-labelledby="destinations">
            <h2 id="destinations" className="heading-lg">Planning a trip to a specific region?</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-stone-600">
              If you are looking for a travel agency for Rajasthan, Kerala,
              Kashmir, Himachal, Uttarakhand or Northeast India trips, start with
              the region&rsquo;s tour package page. Each shows suggested routes,
              the best months, how many days to allow and what to know before
              booking. We plan every other state and union territory too: see{" "}
              <Link href="/packages" className="text-link">all India tour packages</Link>.
            </p>
            <ul className="mt-6 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
              {destinations.map((d) => (
                <li key={d.href} className="p-5">
                  <Link href={d.href} className="font-display text-lg font-bold text-stone-950 hover:text-forest-700">
                    {d.name} tour packages
                  </Link>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-stone-600">{d.blurb}</p>
                  <p className="mt-1 font-sans text-xs text-stone-500">
                    Popular route: {d.route}
                    {d.months && <> · Best months: {d.months}</>}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="mt-16" aria-labelledby="faq">
            <h2 id="faq" className="heading-lg">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-stone-200 bg-white p-5">
                  <h3 className="font-display text-lg font-bold text-stone-950">{f.q}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-600">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm text-stone-500">
              More about us: <Link href="/about" className="text-link">About Kudozz Club</Link> ·{" "}
              <Link href="/editorial-policy" className="text-link">How we research our guides</Link> ·{" "}
              <Link href="/contact" className="text-link">Contact</Link>
            </p>
          </section>
        </div>

        <section className="bg-stone-950 py-20">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Tell us about your trip</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-stone-300">
              Where, when, who&rsquo;s travelling and a rough budget is enough to
              start. We&rsquo;ll reply by email with ideas for your route.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={`/plan-your-trip?from=${PATH}`} className="btn-primary px-8">Plan My Trip →</Link>
              <Link href="/packages" className="btn-outline-light px-8">Explore Tour Packages</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
