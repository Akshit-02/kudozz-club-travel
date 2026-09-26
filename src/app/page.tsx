import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroEnquiryForm from "@/components/home/HeroEnquiryForm";
import { getStatePackage } from "@/lib/all-states-data";
import { travelStylesData } from "@/lib/travel-styles-data";
import { comboPackages } from "@/lib/combo-packages";
import {
  getDestinationProfile,
  homepageDestinationSlugs,
} from "@/lib/destination-profiles";
import { SITE_URL, guideCountLabel, stateCount, trustStats } from "@/lib/site";

const TITLE = "Best Travel Agency in India | Customized Trips | Kudozz Club";
const DESCRIPTION =
  "Customized India trips planned around your dates, budget and travel style. Tour packages for Kashmir, Rajasthan, Kerala, Goa and more, backed by 580+ guides.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "best travel agency in India",
    "travel agency in India",
    "India tour packages",
    "customized tour packages India",
    "India holiday packages",
    "India trip planner",
    "Kudozz Club",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Houseboats on Dal Lake, Srinagar, with snow-covered mountains behind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const destinations = homepageDestinationSlugs.map((slug) => {
  const profile = getDestinationProfile(slug)!;
  const state = getStatePackage(slug)!;
  return { slug, profile, state };
});

const differentiators = [
  {
    title: "Deep India destination knowledge",
    desc: `${guideCountLabel} guides written for trip planning: best time, how to reach, where to stay, what it costs.`,
  },
  {
    title: "Trips built around you",
    desc: "No fixed departures or one-size packages. Your dates, budget and pace decide the route.",
  },
  {
    title: "Planned in-house",
    desc: "The Kudozz Club team plans your itinerary itself. Your enquiry isn't passed to a marketplace of unknown agents.",
  },
  {
    title: "India-wide coverage",
    desc: `Himalaya to the Andamans: all ${stateCount} states and union territories, including the off-beat ones.`,
  },
  {
    title: "Practical, honest advice",
    desc: "We'll tell you when a route is too rushed, a season is wrong, or a place isn't worth the detour.",
  },
  {
    title: "A plan you can change",
    desc: "Swap destinations, stretch the trip or change the pace. We revise the itinerary with you before you commit.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us what you want",
    desc: "Share your destination, dates, budget and travel preferences. A rough idea is enough.",
  },
  {
    n: "02",
    title: "We build the route",
    desc: "Our team creates a practical day-by-day itinerary around your priorities.",
  },
  {
    n: "03",
    title: "Refine the plan",
    desc: "Adjust destinations, duration and stays until the plan fits.",
  },
  {
    n: "04",
    title: "Get ready to travel",
    desc: "Once the plan works for you, go ahead with the travel arrangements Kudozz Club supports.",
  },
];

const featuredPackages = [
  "rajasthan",
  "kerala",
  "goa",
  "kashmir",
  "himachal-pradesh",
  "uttarakhand",
  "leh-ladakh",
].map((slug) => {
  const p = getDestinationProfile(slug)!;
  return {
    href: `/packages/${slug}`,
    name: `${p.shortName} Tour Packages`,
    image: p.heroImage,
    alt: p.heroAlt,
    route: p.routes[0],
  };
});

const northeast = comboPackages.find((c) => c.slug === "northeast-india")!;
featuredPackages.push({
  href: "/packages/northeast-india",
  name: "Northeast India Tour Packages",
  image: northeast.image,
  alt: northeast.imageAlt,
  route: northeast.routes[0],
});

const experiences = [
  {
    title: "A night on a Dal Lake houseboat",
    place: "Srinagar, Kashmir",
    image: "/images/destinations/jammu-kashmir/dal-lake-houseboat-srinagar.webp",
    alt: "Carved wooden houseboat moored on Dal Lake, Srinagar",
    guide: "srinagar-travel-guide",
  },
  {
    title: "Tiger safari at Jim Corbett",
    place: "Jim Corbett, Uttarakhand",
    image: "/images/blogs/uttarakhand/jim-corbett/bengal-tiger-roaring-jim-corbett-reserve.webp",
    alt: "Bengal tiger in Jim Corbett Tiger Reserve, Uttarakhand",
    guide: "jim-corbett-travel-guide",
  },
  {
    title: "Houseboats on Vembanad Lake",
    place: "Kumarakom, Kerala",
    image: "/images/blogs/kerala/kerala/kumarakom-vembanad-lake-houseboats.webp",
    alt: "Kettuvallam houseboats on Vembanad Lake near Kumarakom, Kerala",
    guide: "kumarakom-travel-guide",
  },
  {
    title: "Sunrise over Jaisalmer's golden fort",
    place: "Jaisalmer, Rajasthan",
    image: "/images/blogs/rajasthan/rajasthan/jaisalmer-fort-sunrise-golden-city.webp",
    alt: "Sandstone walls of Jaisalmer Fort glowing at sunrise",
    guide: "rajasthan-desert-travel-guide",
  },
  {
    title: "Pangong Tso's changing blues",
    place: "Ladakh",
    image: "/images/blogs/ladakh/pangong-lake/pangong-tso-shoreline-colour-change.webp",
    alt: "Shoreline of Pangong Tso with bands of blue water, Ladakh",
    guide: "pangong-lake-travel-guide",
  },
];

const guides = [
  {
    slug: "rajasthan-travel-guide",
    title: "Rajasthan Travel Guide",
    desc: "Jaipur, Jodhpur, Jaisalmer and Pushkar: an 8-day circuit, costs and the best months.",
    image: "/images/blogs/rajasthan/rajasthan/hawa-mahal-facade-jaipur.webp",
  },
  {
    slug: "jammu-kashmir-travel-guide",
    title: "Kashmir Travel Guide",
    desc: "Srinagar, Gulmarg, Pahalgam and Sonamarg, with a 6-day plan and seasonal advice.",
    image: "/images/destinations/jammu-kashmir/nishat-bagh-mughal-garden-srinagar.webp",
  },
  {
    slug: "kerala-backwaters-travel-guide",
    title: "Kerala Backwaters Guide",
    desc: "Choosing a houseboat, Kumarakom vs Alleppey, and when the backwaters look best.",
    image: "/images/blogs/kerala/kerala/kuttanad-paddy-fields-below-sea-level.webp",
  },
  {
    slug: "leh-ladakh-road-trip-travel-guide",
    title: "Leh Ladakh Road Trip",
    desc: "Routes, permits, passes and acclimatisation for a 14-day Ladakh road trip.",
    image: "/images/destinations/leh-ladakh/leh-palace-facade-old-town.webp",
  },
];

const homeFaqs = [
  {
    q: "What does Kudozz Club do?",
    a: "Kudozz Club is an India-focused travel agency. We plan customized trips across India around your dates, budget and travel style, and publish free, detailed guides to Indian destinations that anyone can use to plan a trip.",
  },
  {
    q: "Do you sell fixed tour packages?",
    a: "No. Our package pages show popular routes and durations as a starting point, but every itinerary is built around your enquiry. You can change destinations, duration and pace.",
  },
  {
    q: "How much does a customized India trip cost?",
    a: "It depends on the destination, season, hotel category and how you travel between places, so we don't publish fixed prices. Tell us your budget range in the enquiry form and we plan within it. Each destination guide also includes an indicative budget breakdown.",
  },
  {
    q: "How do I get started?",
    a: "Fill in the Plan My Trip form with where you want to go (or ask us to suggest somewhere), your dates, number of travellers and budget. We reply by email to discuss the plan.",
  },
];

// ── JSON-LD ──────────────────────────────────────────────────────────────────

function HomeSchema() {
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      name: "Customized India trip planning",
      serviceType: "Travel agency / custom itinerary planning",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/plan-your-trip`,
      description:
        "In-house planning of customized trips across India: family holidays, honeymoons, pilgrimages, wildlife and adventure trips. Pricing is quoted per enquiry.",
    },
    {
      "@type": "ItemList",
      name: "Popular India tour packages",
      itemListElement: featuredPackages.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}${p.href}`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

// ── Small pieces ─────────────────────────────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  intro,
  action,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  action?: { href: string; label: string };
  light?: boolean;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>
        <h2 className={`heading-lg mt-4 ${light ? "!text-white" : ""}`}>{title}</h2>
        {intro && (
          <p className={`lede mt-4 ${light ? "!text-stone-300" : ""}`}>{intro}</p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className={`shrink-0 ${light ? "btn-outline-light" : "btn-outline"}`}
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HomeSchema />
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* ═══ 1–2. HERO + ENQUIRY ═══════════════════════════════════════ */}
        <section className="relative isolate bg-stone-950">
          <Image
            src="/images/destinations/jammu-kashmir/hero.jpg"
            alt="Houseboats on Dal Lake in Srinagar, Kashmir, with snow-covered mountains behind"
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/85 via-stone-950/55 to-stone-950/20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/40" />

          <div className="container-site grid gap-10 pb-14 pt-28 sm:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-40">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-light">Kudozz Club · India travel agency</p>
              <h1 className="mt-5 font-display text-[2.35rem] font-bold leading-[1.06] tracking-[-0.015em] text-white sm:text-6xl lg:text-[4.1rem]">
                Best Travel Agency in India for Trips Made Around You
              </h1>
              <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-stone-200 sm:text-lg">
                From weekend escapes to long India holidays, Kudozz Club plans
                customized trips around your dates, budget, interests and travel
                style. Tell us where you want to go and we&rsquo;ll help turn it
                into a trip worth taking.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/plan-your-trip" className="btn-primary px-7">
                  Plan My Trip →
                </Link>
                <Link href="/packages" className="btn-outline-light px-7">
                  Explore Tour Packages →
                </Link>
              </div>
              <p className="mt-7 font-sans text-sm text-stone-300">
                Customized itineraries · India-wide destinations · In-house trip planning
              </p>
            </div>

            <div id="enquire" className="scroll-mt-24">
              <HeroEnquiryForm />
            </div>
          </div>
        </section>

        {/* ═══ 3. TRUST / VALUE STRIP ════════════════════════════════════ */}
        <section aria-label="Kudozz Club at a glance" className="border-b border-stone-200 bg-white">
          <dl className="container-site grid grid-cols-2 md:grid-cols-4">
            {trustStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse gap-1 py-7 text-center md:py-9 border-stone-200 ${i % 2 === 1 ? "border-l" : ""} ${i === 2 ? "md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}
              >
                <dt className="font-sans text-xs uppercase tracking-[0.16em] text-stone-500">
                  {s.label}
                </dt>
                <dd className="font-display text-3xl font-bold text-stone-950 md:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ═══ 4. POPULAR DESTINATIONS ═══════════════════════════════════ */}
        <section className="bg-stone-50 py-20 md:py-28">
          <div className="container-site">
            <SectionHeader
              eyebrow="Popular destinations"
              title="Where will you go next?"
              intro="From Himalayan escapes to tropical beaches, discover destinations across India and let Kudozz Club help you plan the journey."
              action={{ href: "/destinations", label: "All destinations →" }}
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {destinations.map(({ slug, profile, state }) => (
                <li
                  key={slug}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200 transition-shadow hover:shadow-xl"
                >
                  <Link href={`/packages/${slug}`} className="relative block aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={profile.heroImage}
                      alt={profile.heroAlt}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-sans text-[11px] font-semibold text-stone-800">
                      {state.region}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-bold text-stone-950">
                      <Link href={`/packages/${slug}`} className="hover:text-forest-700">
                        {profile.shortName}
                      </Link>
                    </h3>
                    <p className="mt-1.5 flex-1 font-sans text-sm leading-relaxed text-stone-600">
                      {profile.cardBlurb}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-stone-100 pt-4 font-sans text-[13px] whitespace-nowrap">
                      <Link
                        href={`/packages/${slug}`}
                        className="font-semibold text-stone-900 hover:text-forest-700"
                        aria-label={`Explore Destination: ${profile.shortName}`}
                      >
                        Explore Destination
                      </Link>
                      <Link
                        href={`/plan-your-trip?destination=${encodeURIComponent(profile.shortName)}`}
                        className="font-semibold text-forest-700 hover:text-forest-900"
                        aria-label={`Plan This Trip: ${profile.shortName}`}
                      >
                        Plan This Trip →
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 5. WHY KUDOZZ CLUB ═════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">Why Kudozz Club</p>
              <h2 className="heading-lg mt-4">
                We don&rsquo;t just know the destinations. We help you plan them.
              </h2>
              <p className="lede mt-6">
                Kudozz Club started by building a deep library of India travel
                guides. That destination knowledge now powers our trip-planning
                service.
              </p>
              <p className="lede mt-4">
                Instead of starting with a fixed package, we start with you:
                your dates, budget, interests and the way you want to travel.
              </p>
              <div className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-2xl lg:block">
                <Image
                  src="/images/blogs/kerala/munnar/munnar-tea-plantation-hero.webp"
                  alt="Rolling tea plantations in the hills of Munnar, Kerala"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {differentiators.map((d) => (
                  <li key={d.title} className="border-t-2 border-forest-700 pt-5">
                    <h3 className="font-display text-lg font-bold text-stone-950">{d.title}</h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-stone-600">{d.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/plan-your-trip" className="btn-primary px-7">
                  Let Us Plan Your Trip →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. HOW IT WORKS ════════════════════════════════════════════ */}
        <section className="bg-stone-950 py-20 md:py-28">
          <div className="container-site">
            <SectionHeader
              light
              eyebrow="How trip planning works"
              title="Your trip starts with one conversation."
            />
            <ol className="grid gap-px overflow-hidden rounded-2xl bg-stone-800 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="bg-stone-950 p-7">
                  <span className="font-display text-4xl font-bold text-saffron-400">{s.n}</span>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-stone-400">{s.desc}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Link href="/plan-your-trip" className="btn-primary px-7">
                Start Planning →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ 7. TRAVEL STYLES ═══════════════════════════════════════════ */}
        <section className="bg-stone-50 py-20 md:py-28">
          <div className="container-site">
            <SectionHeader
              eyebrow="Travel styles"
              title="Travel your way"
              intro="A honeymoon and a family trip to the same state are two different plans. Start with the kind of trip you want."
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {travelStylesData.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/packages/${t.slug}`}
                    className="group flex h-full items-stretch overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200 transition-shadow hover:shadow-lg"
                  >
                    <div className="relative w-28 shrink-0 overflow-hidden bg-stone-200 sm:w-32">
                      <Image
                        src={t.image}
                        alt=""
                        fill
                        sizes="128px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4">
                      <h3 className="font-display text-lg font-bold text-stone-950 group-hover:text-forest-700">
                        {t.name}
                      </h3>
                      <p className="mt-1 font-sans text-sm text-stone-600">{t.desc}</p>
                      <span className="mt-2 font-sans text-sm font-semibold text-forest-700">
                        Explore {t.name.toLowerCase()} →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 8. POPULAR TOUR PACKAGES ═══════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-site">
            <SectionHeader
              eyebrow="Tour packages"
              title="India, planned your way."
              intro="Explore popular destinations or tell us what you have in mind. We'll help shape the itinerary around your trip."
              action={{ href: "/packages", label: "Explore All Tour Packages →" }}
            />
            <ul className="grid gap-6 md:grid-cols-2">
              {featuredPackages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="group grid h-full overflow-hidden rounded-2xl ring-1 ring-stone-200 transition-shadow hover:shadow-xl sm:grid-cols-[0.9fr_1.1fr]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-200 sm:aspect-auto">
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 25vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-stone-950 group-hover:text-forest-700">
                        {p.name}
                      </h3>
                      <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                        Popular route · {p.route.days}
                      </p>
                      <p className="mt-1 font-sans text-sm font-medium text-stone-800">
                        {p.route.stops.map((s) => s.label).join(" → ")}
                      </p>
                      <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-stone-600">
                        {p.route.desc}
                      </p>
                      <span className="mt-4 font-sans text-sm font-semibold text-forest-700">
                        See routes &amp; customize →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-sans text-sm text-stone-600">
              Also popular:{" "}
              <Link href="/packages/golden-triangle" className="text-link">
                Golden Triangle tour packages
              </Link>
              {" · "}
              <Link href="/packages/char-dham-yatra" className="text-link">
                Char Dham Yatra packages
              </Link>
              {" · "}
              <Link href="/packages/andaman-nicobar" className="text-link">
                Andaman tour packages
              </Link>
            </p>
          </div>
        </section>

        {/* ═══ 9. EXPERIENCE SHOWCASE ═════════════════════════════════════ */}
        <section className="bg-stone-950 py-20 md:py-28">
          <div className="container-site">
            <SectionHeader
              light
              eyebrow="Experiences we plan around"
              title="The moments a trip is remembered for."
              intro="Good itineraries are built around a few unforgettable days. These are some we plan trips around most often."
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {experiences.map((e, i) => (
                <li key={e.title} className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}>
                  <Link
                    href={`/blog/${e.guide}`}
                    className={`group relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl ${i === 0 ? "lg:min-h-[500px]" : ""}`}
                  >
                    <Image
                      src={e.image}
                      alt={e.alt}
                      fill
                      sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                    <div className="relative p-6">
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-saffron-300">
                        {e.place}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-bold text-white sm:text-2xl">
                        {e.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 10. TRAVEL GUIDES ══════════════════════════════════════════ */}
        <section className="bg-stone-50 py-20 md:py-28">
          <div className="container-site">
            <SectionHeader
              eyebrow="Travel guides"
              title="Research first? Start with our guides."
              intro={`${guideCountLabel} free guides covering every Indian state and union territory, with itineraries, best times to visit, how to get there and budget breakdowns.`}
              action={{ href: "/blog", label: "Browse all travel guides →" }}
            />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/blog/${g.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
                      <Image
                        src={g.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-stone-950 group-hover:text-forest-700">
                      {g.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-stone-600">{g.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 11. TRUST / CREDIBILITY ════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">What you can expect</p>
              <h2 className="heading-lg mt-4">Straight answers before you commit.</h2>
              <ul className="mt-8 space-y-5 font-sans text-[15px] leading-relaxed text-stone-700">
                {[
                  ["Real people plan your trip.", "Every enquiry is read and planned by the Kudozz Club team."],
                  ["No fake prices.", "We don't advertise a low 'starting from' price that grows later. You get a quote for your trip."],
                  ["Independent guides.", "We don't accept paid placements in our travel guides. Recommendations aren't for sale."],
                  ["Plain email, no pressure.", <>We reply by email, and you can also write to us directly at <a href="mailto:connect@kudozz.in" className="text-link">connect@kudozz.in</a>.</>],
                ].map(([t, d], i) => (
                  <li key={i} className="flex gap-4">
                    <span aria-hidden className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-700 text-white">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>
                      <strong className="font-semibold text-stone-950">{t}</strong> {d}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="text-link mt-8 inline-block text-sm">
                Read how Kudozz Club works
              </Link>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-950">Common questions</h2>
              <div className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
                {homeFaqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-stone-950 [&::-webkit-details-marker]:hidden">
                      <h3>{f.q}</h3>
                      <span aria-hidden className="text-2xl font-light text-forest-700 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. FINAL CTA ══════════════════════════════════════════════ */}
        <section className="relative isolate overflow-hidden py-24 md:py-32">
          <Image
            src="/images/destinations/udaipur/hero.jpg"
            alt="Lake Palace hotel on Lake Pichola, Udaipur"
            fill
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/30" />
          <div className="container-site">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                Your next India trip starts here.
              </h2>
              <p className="mt-5 font-sans text-lg text-stone-200">
                You bring the destination. We&rsquo;ll help with the planning.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/plan-your-trip" className="btn-primary px-8">
                  Plan My Trip →
                </Link>
                <Link href="/destinations" className="btn-outline-light px-8">
                  Explore India →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 13–14. Newsletter (secondary conversion) + footer */}
      <SiteFooter />
    </>
  );
}
