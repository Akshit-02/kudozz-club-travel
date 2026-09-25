import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import {
  allStatePackages,
  getStatePackage,
  adminLabel,
  type StatePackage,
} from "@/lib/all-states-data";
import { travelStylesData, getTravelStyle, type TravelStylePackage } from "@/lib/travel-styles-data";
import { comboPackages, getComboPackage, type ComboPackage } from "@/lib/combo-packages";
import {
  getDestinationProfile,
  type DestinationProfile,
  type SuggestedRoute,
} from "@/lib/destination-profiles";
import { posts, featuredPost } from "@/lib/blog-posts";
import { thingsToDoForPackage } from "@/lib/things-to-do-links";
import { SITE_URL } from "@/lib/site";

// ── Shared data ──────────────────────────────────────────────────────────────

const postBySlug = new Map([featuredPost, ...posts].map((p) => [p.slug, p]));

function guideTitle(slug: string) {
  const p = postBySlug.get(slug);
  return p ? p.title.split(":")[0].replace(/\s+Travel Guide$/i, "").trim() : slug;
}

const durations = [
  { label: "3 Days", desc: "A short break: one base and the highlights nearby." },
  { label: "5 Days", desc: "Two or three places, without rushing between them." },
  { label: "7 Days", desc: "The classic circuit, with a slower day built in." },
  { label: "10+ Days", desc: "Add off-beat stops, longer stays and slower travel." },
];

const styleLinks = [
  { label: "Family", slug: "family-holidays" },
  { label: "Honeymoon", slug: "honeymoon" },
  { label: "Luxury", slug: "luxury-holidays" },
  { label: "Budget", slug: "budget-holidays" },
  { label: "Adventure", slug: "adventure-tours" },
  { label: "Group", slug: "group-tours" },
];

const processFaqs = (name: string) => [
  {
    q: `How does Kudozz Club plan a ${name} trip?`,
    a: `You share your dates, budget range and interests through the enquiry form. Our in-house team builds a day-by-day ${name} itinerary around that and discusses it with you by email. Nothing is a fixed package.`,
  },
  {
    q: "Can I change the route or duration?",
    a: "Yes. Add or drop places, extend the trip, change the pace or combine it with a neighbouring state. The routes on this page are starting points, not fixed departures.",
  },
  {
    q: "Why don't you show package prices?",
    a: "Because the price depends on your dates, hotel category, group size and how you travel between places. Rather than advertise a 'starting from' price that changes later, we quote for your actual trip.",
  },
];

export async function generateStaticParams() {
  return [
    ...allStatePackages.map((s) => ({ slug: s.slug })),
    ...travelStylesData.map((s) => ({ slug: s.slug })),
    ...comboPackages.map((s) => ({ slug: s.slug })),
  ];
}

export const dynamicParams = false;

function displayName(state: StatePackage) {
  return getDestinationProfile(state.slug)?.shortName ?? state.name;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const url = `${SITE_URL}/packages/${params.slug}`;
  const build = (title: string, description: string, image: string, keywords: string[]): Metadata => ({
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: { title: `${title} | Kudozz Club`, description, url, type: "website", images: [{ url: image }] },
    twitter: { card: "summary_large_image", title: `${title} | Kudozz Club`, description, images: [image] },
  });

  const state = getStatePackage(params.slug);
  if (state) {
    const profile = getDestinationProfile(state.slug);
    const name = displayName(state);
    const description = profile
      ? `Customized ${name} tour packages planned around your dates and budget. Popular route: ${profile.routes[0].stops.map((s) => s.label).join(", ")}.`
      : `Customized ${state.name} tour packages planned in-house by Kudozz Club: family, honeymoon, luxury and budget trips. Pricing quoted per enquiry.`;
    return build(
      name.length <= 16 ? `${name} Tour Packages: Customized Itineraries` : `${name} Tour Packages`,
      description,
      profile?.heroImage ?? state.image,
      [
        `${name} tour packages`,
        `${name} holiday packages`,
        `customized ${name} tour`,
        `${name} trip plan`,
        `${name} family tour packages`,
      ],
    );
  }
  const combo = getComboPackage(params.slug);
  if (combo) {
    return build(
      `${combo.name} Tour Packages`,
      combo.intro,
      combo.image,
      [`${combo.name} tour packages`, `${combo.name} tour`, `${combo.name} itinerary`],
    );
  }
  const style = getTravelStyle(params.slug);
  if (style) {
    return build(
      `${style.name} Packages in India`,
      `${style.name} across India, planned in-house by Kudozz Club: ${style.desc.toLowerCase()}. Tell us your dates and budget and we'll plan the trip.`,
      style.image,
      [`${style.name.toLowerCase()} packages India`, `${style.name.toLowerCase()} tour packages India`],
    );
  }
  return {};
}

// ── Building blocks ──────────────────────────────────────────────────────────

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...data }) }}
    />
  );
}

function breadcrumbLd(name: string, slug: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${SITE_URL}/packages` },
      { "@type": "ListItem", position: 3, name, item: `${SITE_URL}/packages/${slug}` },
    ],
  };
}

function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function planHref(destination: string, from: string, extra: Record<string, string> = {}) {
  const q = new URLSearchParams({ ...(destination ? { destination } : {}), from, ...extra });
  return `/plan-your-trip?${q.toString()}`;
}

function Hero({
  image,
  alt,
  crumb,
  h1,
  statement,
  primary,
  secondary,
  facts,
}: {
  image: string;
  alt: string;
  crumb: string;
  h1: string;
  statement: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  facts?: { label: string; value: string }[];
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end bg-stone-950">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-950/20" />
      <div className="container-site w-full pb-12 pt-32">
        <nav aria-label="Breadcrumb" className="font-sans text-xs text-stone-300">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/packages" className="hover:text-white">Tour Packages</Link></li>
            <li aria-hidden>/</li>
            <li className="text-white" aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {h1}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-stone-200 sm:text-lg">{statement}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href={primary.href} className="btn-primary px-7">{primary.label}</Link>
          {secondary && <Link href={secondary.href} className="btn-outline-light px-7">{secondary.label}</Link>}
        </div>
        {facts && facts.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 font-sans backdrop-blur-sm lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-stone-950/60 px-4 py-3.5">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-stone-400">{f.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: React.ReactNode }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`heading-lg ${eyebrow ? "mt-3" : ""}`}>{title}</h2>
      {intro && <p className="lede mt-3">{intro}</p>}
    </div>
  );
}

function Routes({ routes, title }: { routes: SuggestedRoute[]; title: string }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-site">
        <SectionTitle
          eyebrow="Suggested itineraries"
          title={title}
          intro="Starting points we adapt to your dates and pace. Each stop links to our detailed guide."
        />
        <ol className="grid gap-5 lg:grid-cols-3">
          {routes.map((r) => (
            <li key={r.name} className="flex flex-col rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-forest-700">{r.days}</p>
              <h3 className="mt-1.5 font-display text-xl font-bold text-stone-950">{r.name}</h3>
              <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-stone-600">{r.desc}</p>
              <ol className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2 font-sans text-sm">
                {r.stops.map((s, i) => (
                  <li key={s.slug + i} className="flex items-center gap-1.5">
                    {i > 0 && <span aria-hidden className="text-stone-400">→</span>}
                    <Link href={`/blog/${s.slug}`} className="rounded-full bg-white px-3 py-1 font-medium text-stone-800 ring-1 ring-stone-200 hover:text-forest-700 hover:ring-forest-300">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Durations({ name }: { name: string }) {
  return (
    <section className="bg-stone-50 py-16 md:py-20">
      <div className="container-site">
        <SectionTitle
          eyebrow="Package duration"
          title={`How long is your ${name} trip?`}
          intro="Pick a length to start with. We plan the route to match it."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {durations.map((d) => (
            <li key={d.label} className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
              <h3 className="font-display text-2xl font-bold text-stone-950">{d.label}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-stone-600">{d.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PlacesGrid({ slugs, title, intro }: { slugs: string[]; title: string; intro: React.ReactNode }) {
  const featured = slugs.slice(0, 6);
  const rest = slugs.slice(6);
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-site">
        <SectionTitle eyebrow="Popular places" title={title} intro={intro} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((slug) => {
            const p = postBySlug.get(slug);
            if (!p) return null;
            return (
              <li key={slug}>
                <Link href={`/blog/${slug}`} className="group flex gap-4 rounded-2xl p-2 ring-1 ring-stone-200 transition-shadow hover:shadow-md">
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-stone-200">
                    <Image src={p.image} alt="" fill sizes="112px" className="object-cover" />
                  </div>
                  <div className="py-1 pr-2">
                    <h3 className="font-display text-base font-bold text-stone-950 group-hover:text-forest-700">{guideTitle(slug)}</h3>
                    <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-stone-500">{p.excerpt}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        {rest.length > 0 && (
          <div className="mt-8">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">More places we plan trips to</h3>
            <ul className="mt-3 flex flex-wrap gap-2 font-sans text-sm">
              {rest.map((slug) => (
                <li key={slug}>
                  <Link href={`/blog/${slug}`} className="inline-block rounded-full bg-stone-50 px-3.5 py-1.5 text-stone-700 ring-1 ring-stone-200 hover:text-forest-700 hover:ring-forest-300">
                    {guideTitle(slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function ThingsToDoLinks({ slug, name }: { slug: string; name: string }) {
  const items = thingsToDoForPackage(slug);
  if (!items.length) return null;
  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="container-site">
        <SectionTitle
          eyebrow="Experiences"
          title={`Things to do in ${name}`}
          intro="Activities, sights and local experiences, grouped by destination, to help you decide what to include."
        />
        <ul className="mt-6 flex flex-wrap gap-2">
          {items.map((e) => (
            <li key={e.slug}>
              <Link href={`/blog/${e.slug}`} className="inline-block rounded-full bg-stone-50 px-3.5 py-1.5 font-sans text-sm text-stone-700 ring-1 ring-stone-200 hover:text-forest-700 hover:ring-forest-300">
                Things to do in {e.destination}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StyleLinks({ name }: { name: string }) {
  return (
    <section className="bg-stone-50 py-16 md:py-20">
      <div className="container-site">
        <SectionTitle eyebrow="Travel styles" title={`${name} trips, your way`} />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {styleLinks.map((s) => (
            <li key={s.slug}>
              <Link href={`/packages/${s.slug}`} className="block rounded-2xl bg-white px-4 py-5 text-center ring-1 ring-stone-200 transition hover:ring-forest-400">
                <span className="block font-display text-lg font-bold text-stone-950">{s.label}</span>
                <span className="mt-0.5 block font-sans text-xs text-stone-500">trips</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faqs({ faqs, title }: { faqs: { q: string; a: string }[]; title: string }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-site max-w-3xl">
        <h2 className="heading-lg">{title}</h2>
        <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg font-semibold text-stone-950">{f.q}</h3>
                <span aria-hidden className="text-2xl font-light text-forest-700 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  return (
    <section className="bg-stone-950 py-20">
      <div className="container-site max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 font-sans text-base text-stone-300">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={href} className="btn-primary px-8">{label}</Link>
          <a href="mailto:connect@kudozz.in" className="btn-outline-light px-8">Email connect@kudozz.in</a>
        </div>
        <p className="mt-6 font-sans text-xs text-stone-500">
          Pricing is quoted for your specific trip. We don&rsquo;t publish fixed package prices.
        </p>
      </div>
    </section>
  );
}

function NearbyGrid({ slugs, title }: { slugs: string[]; title: string }) {
  const states = slugs.map((s) => getStatePackage(s)).filter((s): s is StatePackage => Boolean(s));
  if (!states.length) return null;
  return (
    <section className="bg-stone-50 py-16 md:py-20">
      <div className="container-site">
        <SectionTitle eyebrow="Combine with" title={title} />
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {states.slice(0, 4).map((s) => (
            <li key={s.slug}>
              <Link href={`/packages/${s.slug}`} className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-2xl bg-stone-800">
                <Image src={getDestinationProfile(s.slug)?.heroImage ?? s.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="relative p-4 font-display text-lg font-bold text-white">
                  {displayName(s)} <span className="sr-only">tour packages</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── State / UT package page ──────────────────────────────────────────────────

function StatePackageView({ state }: { state: StatePackage }) {
  const profile = getDestinationProfile(state.slug);
  const name = displayName(state);
  const kind = adminLabel(state.slug);
  const url = `${SITE_URL}/packages/${state.slug}`;
  const from = `/packages/${state.slug}`;
  const hub = postBySlug.get(state.blogSlug);
  const guideHref = `/blog/${state.blogSlug}`;

  const routes: SuggestedRoute[] = profile?.routes ?? [];

  // Popular places first (curated order), then every other real child guide.
  const childSlugs = state.children.map((c) => c.slug);
  const placeSlugs = Array.from(new Set([...(profile?.popularPlaces ?? []), ...childSlugs])).filter((s) =>
    postBySlug.has(s),
  );

  const nearby =
    profile?.nearby ??
    allStatePackages.filter((s) => s.region === state.region && s.slug !== state.slug).map((s) => s.slug);

  const answers: { q: string; a: string }[] = profile
    ? [
        { q: `What is ${name} known for?`, a: profile.knownFor },
        { q: `How many days are enough for ${name}?`, a: profile.idealDays },
        { q: `What is the best time to visit ${name}?`, a: profile.bestTime },
        { q: `How do you reach ${name}?`, a: profile.howToReach },
        { q: `How much does a ${name} trip cost?`, a: profile.costNote },
        { q: `Is ${name} good for a family holiday?`, a: profile.familyFit },
        { q: `Is ${name} good for a honeymoon?`, a: profile.honeymoonFit },
        ...(profile.permitNote ? [{ q: `Do you need a permit for ${name}?`, a: profile.permitNote }] : []),
      ]
    : [
        {
          q: `What is ${state.name} known for?`,
          a: hub?.excerpt ?? `${state.name} is a ${kind.toLowerCase()} in ${state.region}.`,
        },
      ];

  const faqs = [...answers, ...processFaqs(name)];

  const facts = [
    { label: "Type", value: `${kind}, ${state.region}` },
    ...(profile
      ? [
          { label: "Ideal trip", value: profile.routes[0]?.days ?? "" },
          { label: "Best months", value: profile.bestMonths },
        ]
      : []),
    { label: "Places we cover", value: `${placeSlugs.length} destinations` },
  ].filter((f) => f.value);

  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: `${name} Tour Packages`,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${url}#destination` },
              breadcrumb: breadcrumbLd(name, state.slug),
            },
            {
              "@type": "TouristDestination",
              "@id": `${url}#destination`,
              name: state.name,
              description: profile?.knownFor ?? hub?.excerpt,
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: state.region,
                containedInPlace: { "@type": "Country", name: "India" },
              },
              subjectOf: { "@type": "Article", url: `${SITE_URL}${guideHref}` },
              includesAttraction: placeSlugs.slice(0, 12).map((s) => ({
                "@type": "TouristAttraction",
                name: guideTitle(s),
                url: `${SITE_URL}/blog/${s}`,
              })),
            },
            {
              "@type": "Service",
              name: `Customized ${name} tour packages`,
              serviceType: "Custom trip planning",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: { "@type": kind === "State" ? "State" : "AdministrativeArea", name: state.name },
              url,
            },
            faqLd(faqs),
          ],
        }}
      />
      <SiteHeader />
      <main>
        <Hero
          image={profile?.heroImage ?? state.image}
          alt={profile?.heroAlt ?? `${state.name}, India`}
          crumb={name}
          h1={`${name} Tour Packages`}
          statement={`Customized ${name} trips planned around your dates, interests and travel style.`}
          primary={{ href: planHref(name, from), label: "Customize This Trip →" }}
          secondary={{ href: guideHref, label: `Read the ${name} travel guide` }}
          facts={facts}
        />

        {/* GEO: explicit entity relationships in plain language */}
        <section className="border-b border-stone-200 bg-white">
          <div className="container-site py-6 font-sans text-sm leading-relaxed text-stone-600">
            <strong className="text-stone-900">{state.name}</strong> is a {kind.toLowerCase()} in{" "}
            {state.region}, India.{" "}
            {placeSlugs.length > 0 && (
              <>
                Kudozz Club plans trips to {placeSlugs.length} places here, including{" "}
                {placeSlugs.slice(0, 3).map((s, i) => (
                  <span key={s}>
                    {i > 0 && (i === 2 ? " and " : ", ")}
                    <Link href={`/blog/${s}`} className="text-link font-medium">{guideTitle(s)}</Link>
                  </span>
                ))}
                .{" "}
              </>
            )}
            Nearby:{" "}
            {nearby.slice(0, 3).map((s, i) => {
              const n = getStatePackage(s);
              return n ? (
                <span key={s}>
                  {i > 0 && ", "}
                  <Link href={`/packages/${s}`} className="text-link font-medium">{displayName(n)}</Link>
                </span>
              ) : null;
            })}
            .
          </div>
        </section>

        {/* AEO: answer-first blocks */}
        <section className="bg-stone-50 py-16 md:py-20">
          <div className="container-site">
            <SectionTitle
              eyebrow={`Why visit ${name}`}
              title={`${name} at a glance`}
              intro={
                <>
                  Quick answers from our{" "}
                  <Link href={guideHref} className="text-link">{name} travel guide</Link>, which covers each topic in detail.
                </>
              }
            />
            {profile ? (
              <div className="grid gap-5 lg:grid-cols-3">
                <div className="answer-card lg:col-span-2">
                  <h3 className="font-display text-xl font-bold text-stone-950">What is {name} known for?</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{profile.knownFor}</p>
                  <h4 className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                    Things to do in {name}
                  </h4>
                  <ul className="mt-3 grid gap-2 font-sans text-sm text-stone-700 sm:grid-cols-2">
                    {profile.thingsToDo.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span aria-hidden className="text-forest-600">•</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="answer-card">
                  <h3 className="font-display text-xl font-bold text-stone-950">How many days are enough?</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{profile.idealDays}</p>
                </div>
                <div className="answer-card">
                  <h3 className="font-display text-xl font-bold text-stone-950">Best time to visit {name}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{profile.bestTime}</p>
                  <Link href={guideHref} className="text-link mt-3 inline-block text-sm">Month-by-month detail in the guide</Link>
                </div>
                <div className="answer-card">
                  <h3 className="font-display text-xl font-bold text-stone-950">How to reach {name}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{profile.howToReach}</p>
                </div>
                <div className="answer-card">
                  <h3 className="font-display text-xl font-bold text-stone-950">How much does it cost?</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{profile.costNote}</p>
                </div>
              </div>
            ) : (
              <div className="answer-card max-w-3xl">
                <h3 className="font-display text-xl font-bold text-stone-950">What is {state.name} known for?</h3>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{hub?.excerpt}</p>
                <p className="mt-4 font-sans text-sm text-stone-600">
                  For the best time to visit, how to get there and a full budget breakdown, see our{" "}
                  <Link href={guideHref} className="text-link">{state.name} travel guide</Link>.
                </p>
              </div>
            )}
          </div>
        </section>

        {routes.length > 0 && <Routes routes={routes} title={`Popular ${name} routes`} />}

        <Durations name={name} />

        {placeSlugs.length > 0 && (
          <PlacesGrid
            slugs={placeSlugs}
            title={`Best places to visit in ${name}`}
            intro={`Mix and match from ${placeSlugs.length} ${name} destinations we have detailed guides for. Tell us which ones interest you.`}
          />
        )}

        <ThingsToDoLinks slug={state.slug} name={name} />

        {profile && (
          <section className="bg-white pb-16 md:pb-20">
            <div className="container-site grid gap-5 md:grid-cols-2">
              <div className="answer-card bg-stone-50">
                <h2 className="font-display text-xl font-bold text-stone-950">Is {name} suitable for families?</h2>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{profile.familyFit}</p>
                <Link href="/packages/family-holidays" className="text-link mt-3 inline-block text-sm">Explore family holidays</Link>
              </div>
              <div className="answer-card bg-stone-50">
                <h2 className="font-display text-xl font-bold text-stone-950">Is {name} good for a honeymoon?</h2>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{profile.honeymoonFit}</p>
                <Link href="/packages/honeymoon" className="text-link mt-3 inline-block text-sm">Explore honeymoon trips</Link>
              </div>
            </div>
          </section>
        )}

        <StyleLinks name={name} />

        <NearbyGrid slugs={nearby} title={`Destinations near ${name}`} />

        <Faqs faqs={faqs} title={`${name} trip FAQs`} />

        <FinalCta
          title={`Plan your ${name} trip with us`}
          text="Tell us your dates, who's travelling and roughly what you want to spend. We'll shape the route around it."
          href={planHref(name, from)}
          label={`Plan My ${name} Trip →`}
        />
      </main>
      <SiteFooter />
    </>
  );
}

// ── Combo package page (Golden Triangle, Char Dham, Northeast) ───────────────

function ComboPackageView({ combo }: { combo: ComboPackage }) {
  const url = `${SITE_URL}/packages/${combo.slug}`;
  const from = `/packages/${combo.slug}`;
  const faqs = [
    { q: `What is the ${combo.name}?`, a: combo.knownFor },
    { q: `How many days do you need for the ${combo.name}?`, a: combo.idealDays },
    { q: `What is the best time for the ${combo.name}?`, a: combo.bestTime },
    { q: `How do you reach the start of the ${combo.name}?`, a: combo.howToReach },
    ...processFaqs(combo.shortName),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              url,
              name: `${combo.name} Tour Packages`,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              breadcrumb: breadcrumbLd(combo.name, combo.slug),
            },
            {
              "@type": "TouristTrip",
              name: combo.name,
              description: combo.knownFor,
              provider: { "@id": `${SITE_URL}/#organization` },
              itinerary: {
                "@type": "ItemList",
                itemListElement: combo.routes[0].stops.map((s, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: { "@type": "TouristDestination", name: s.label, url: `${SITE_URL}/blog/${s.slug}` },
                })),
              },
            },
            faqLd(faqs),
          ],
        }}
      />
      <SiteHeader />
      <main>
        <Hero
          image={combo.image}
          alt={combo.imageAlt}
          crumb={combo.name}
          h1={`${combo.name} Tour Packages`}
          statement={combo.intro}
          primary={{ href: planHref(combo.name, from), label: "Customize This Trip →" }}
          facts={[
            { label: "Region", value: combo.region },
            { label: "Ideal trip", value: combo.routes[0].days },
            { label: "Places we cover", value: `${combo.guideSlugs.length}+ destinations` },
            { label: "Pricing", value: "Quoted per enquiry" },
          ]}
        />
        <section className="bg-stone-50 py-16 md:py-20">
          <div className="container-site">
            <SectionTitle eyebrow="At a glance" title={`What is the ${combo.name}?`} />
            <div className="grid gap-5 lg:grid-cols-2">
              {faqs.slice(0, 4).map((f) => (
                <div key={f.q} className="answer-card">
                  <h3 className="font-display text-xl font-bold text-stone-950">{f.q}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-stone-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Routes routes={combo.routes} title={`${combo.name} itineraries`} />
        <PlacesGrid
          slugs={combo.guideSlugs}
          title={`Places on the ${combo.name}`}
          intro="Read our guides to each stop before you decide what to include."
        />
        <NearbyGrid slugs={combo.relatedStates} title="Explore by state" />
        <Faqs faqs={faqs} title={`${combo.name} FAQs`} />
        <FinalCta
          title={`Plan your ${combo.name} trip`}
          text="Tell us your dates and who's travelling. We'll plan realistic driving days and the right pace."
          href={planHref(combo.name, from)}
          label={`Plan My ${combo.shortName} Trip →`}
        />
      </main>
      <SiteFooter />
    </>
  );
}

// ── Travel-style page ────────────────────────────────────────────────────────

function StylePackageView({ style }: { style: TravelStylePackage }) {
  const url = `${SITE_URL}/packages/${style.slug}`;
  const from = `/packages/${style.slug}`;
  const related = style.relatedStates
    .map((s) => getStatePackage(s))
    .filter((s): s is StatePackage => Boolean(s));
  const lower = style.name.toLowerCase();

  const faqs = [
    {
      q: `Can Kudozz Club plan ${lower} in India?`,
      a: `Yes. ${style.name} is one of the trip types we plan regularly. Tell us your preferred destination, or ask us to suggest one, through the enquiry form.`,
    },
    {
      q: `Which Indian destinations work best for ${lower}?`,
      a: `${related.map((s) => displayName(s)).join(", ")} are strong choices, but we plan ${lower} anywhere in India. The right pick depends on your month of travel and budget.`,
    },
    ...processFaqs(lower).slice(1),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              url,
              name: `${style.name} Packages in India`,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              breadcrumb: breadcrumbLd(style.name, style.slug),
            },
            {
              "@type": "ItemList",
              name: `Destinations for ${lower} in India`,
              itemListElement: related.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `${displayName(s)} tour packages`,
                url: `${SITE_URL}/packages/${s.slug}`,
              })),
            },
            faqLd(faqs),
          ],
        }}
      />
      <SiteHeader />
      <main>
        <Hero
          image={style.image}
          alt={`${style.name} in India`}
          crumb={style.name}
          h1={`${style.name} Packages in India`}
          statement={style.intro}
          primary={{ href: planHref("", from, { tripType: style.name }), label: "Plan This Trip →" }}
        />
        <section className="bg-white py-16 md:py-20">
          <div className="container-site">
            <SectionTitle
              eyebrow="Where this works well"
              title={`Best destinations for ${lower}`}
              intro="A few places that suit this kind of trip especially well. We plan it anywhere in India."
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => {
                const p = getDestinationProfile(s.slug);
                return (
                  <li key={s.slug} className="flex flex-col overflow-hidden rounded-2xl ring-1 ring-stone-200">
                    <Link href={`/packages/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden bg-stone-200">
                      <Image src={p?.heroImage ?? s.image} alt={p?.heroAlt ?? s.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </Link>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-bold text-stone-950">{displayName(s)}</h3>
                      {p && <p className="mt-1 flex-1 font-sans text-sm text-stone-600">{p.cardBlurb}</p>}
                      <Link href={`/packages/${s.slug}`} className="text-link mt-3 text-sm">
                        {displayName(s)} tour packages
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="bg-stone-50 py-16 md:py-20">
          <div className="container-site">
            <SectionTitle eyebrow="Other travel styles" title="Travel your way" />
            <ul className="flex flex-wrap gap-2 font-sans text-sm">
              {travelStylesData
                .filter((s) => s.slug !== style.slug)
                .map((s) => (
                  <li key={s.slug}>
                    <Link href={`/packages/${s.slug}`} className="inline-block rounded-full bg-white px-4 py-2 font-medium text-stone-700 ring-1 ring-stone-200 hover:text-forest-700 hover:ring-forest-300">
                      {s.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
        <Faqs faqs={faqs} title={`${style.name}: common questions`} />
        <FinalCta
          title={`Plan your ${lower}`}
          text="Tell us who's travelling, when, and the kind of trip you have in mind."
          href={planHref("", from, { tripType: style.name })}
          label="Get a Custom Itinerary →"
        />
      </main>
      <SiteFooter />
    </>
  );
}

export default function PackageSlugPage({ params }: { params: { slug: string } }) {
  const state = getStatePackage(params.slug);
  if (state) return <StatePackageView state={state} />;
  const combo = getComboPackage(params.slug);
  if (combo) return <ComboPackageView combo={combo} />;
  const style = getTravelStyle(params.slug);
  if (style) return <StylePackageView style={style} />;
  notFound();
}
