// JSON-backed blog articles: "Things to Do in <Destination>" articles from
// src/content/things-to-do/<slug>.json and Adventure Travel articles from
// src/content/adventure/<slug>.json and Beach Travel articles from
// src/content/beach/<slug>.json, and Wildlife Tourism articles from
// src/content/wildlife/<slug>.json, and Spiritual Tourism articles from
// src/content/spiritual/<slug>.json, and Heritage & Cultural Tourism articles from
// src/content/heritage/<slug>.json, and Hill Station Travel articles from
// src/content/hills/<slug>.json. Static guide folders in src/app/blog
// take precedence over this dynamic segment, and dynamicParams = false means
// only slugs with a content file are served (anything else is a 404).
import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import GuideTripCTA from "@/components/ui/GuideTripCTA";
import { GuideFigure } from "@/components/ui/GuideImages";
import { getAllThingsToDo, getThingsToDo, wordCount, type ThingsToDoArticle } from "@/lib/things-to-do";
import { thingsToDoEntry, thingsToDoInState } from "@/lib/things-to-do-links";
import { getTravelStyle } from "@/lib/travel-styles-data";
import { SITE_URL } from "@/lib/site";
import { getAllAdventure, getAdventure } from "@/lib/adventure";
import AdventureArticleView, { ClusterArticleView, type ClusterConfig } from "@/components/adventure/AdventureArticle";
import { getAllBeach, getBeach } from "@/lib/beach";
import { relatedBeach } from "@/lib/beach-links";
import { getAllWildlife, getWildlife } from "@/lib/wildlife";
import { relatedWildlife } from "@/lib/wildlife-links";
import { getAllSpiritual, getSpiritual } from "@/lib/spiritual";
import { relatedSpiritual } from "@/lib/spiritual-links";
import { getAllHeritage, getHeritage } from "@/lib/heritage";
import { relatedHeritage } from "@/lib/heritage-links";
import { getAllHills, getHill } from "@/lib/hills";
import { relatedHills } from "@/lib/hills-links";

const HERITAGE_CLUSTER: ClusterConfig = {
  hub: { label: "Heritage & Culture", href: "/heritage-cultural-tourism", name: "Heritage & Cultural Tourism in India" },
  tripType: "Heritage & Culture Trips",
  cta: {
    title: "Planning a heritage trip?",
    text: "Kudozz Club can help turn the places you want to see into a practical itinerary, built around your dates, pace and interests.",
  },
  sidebarTitle: "More heritage and culture guides",
  allLabel: "All heritage & cultural tourism \u2192",
  planTitle: "Want to explore India's heritage on a route built around you?",
};

const HILLS_CLUSTER: ClusterConfig = {
  hub: { label: "Hill Stations", href: "/hill-station-travel", name: "Hill Station Travel in India" },
  tripType: "Hill Station Holidays",
  cta: {
    title: "Planning a hill holiday?",
    text: "Kudozz Club can help turn the hill stations you're considering into a practical itinerary, built around your dates, pace and who is travelling.",
  },
  sidebarTitle: "More hill-station guides",
  allLabel: "All hill-station travel \u2192",
  planTitle: "Want to combine several mountain destinations into one trip?",
};

const SPIRITUAL_CLUSTER: ClusterConfig = {
  hub: { label: "Spiritual Tourism", href: "/spiritual-tourism", name: "Spiritual Tourism in India" },
  tripType: "Spiritual & Pilgrimage Trips",
  cta: {
    title: "Planning to visit?",
    text: "Let Kudozz Club help you build the route around your dates, budget and travel style, with realistic time for darshan, travel and rest.",
  },
  sidebarTitle: "More spiritual travel guides",
  allLabel: "All spiritual tourism \u2192",
  planTitle: "Want this pilgrimage turned into a practical itinerary?",
};

const WILDLIFE_CLUSTER: ClusterConfig = {
  hub: { label: "Wildlife Tourism", href: "/wildlife-tourism", name: "Wildlife Tourism in India" },
  tripType: "Wildlife Trips",
  cta: {
    title: "Planning a wildlife trip?",
    text: "Tell Kudozz Club your destination, dates, budget and travel style, and we\u2019ll plan safaris, stays and transfers around it.",
  },
  sidebarTitle: "More wildlife guides",
  allLabel: "All wildlife tourism \u2192",
  planTitle: "Ready to plan your wildlife escape?",
};

const BEACH_CLUSTER: ClusterConfig = {
  hub: { label: "Beach Travel", href: "/beach-travel", name: "Beach Travel in India" },
  cta: {
    title: "Planning a beach holiday in India?",
    text: "Tell Kudozz Club your destination, dates, budget and travel style, and we\u2019ll plan the trip around it.",
  },
  sidebarTitle: "More beach guides",
  planTitle: "Ready for your beach escape?",
  allLabel: "All beach travel \u2192",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [...getAllThingsToDo(), ...getAllAdventure(), ...getAllBeach(), ...getAllWildlife(), ...getAllSpiritual(), ...getAllHeritage(), ...getAllHills()].map((a) => ({ slug: a.slug }));
}

function adventureMetadata(slug: string): Metadata | null {
  const a = getAdventure(slug) ?? getBeach(slug) ?? getWildlife(slug) ?? getSpiritual(slug) ?? getHeritage(slug) ?? getHill(slug);
  if (!a) return null;
  const url = `${SITE_URL}/blog/${a.slug}`;
  return {
    title: { absolute: a.seoTitle },
    description: a.metaDescription,
    keywords: [a.primaryKeyword, ...a.secondaryKeywords],
    alternates: { canonical: url },
    openGraph: {
      title: a.seoTitle,
      description: a.metaDescription,
      url,
      type: "article",
      siteName: "Kudozz Club",
      images: [{ url: a.hero.src, alt: a.hero.alt }],
    },
    twitter: { card: "summary_large_image", title: a.seoTitle, description: a.metaDescription, images: [a.hero.src] },
  };
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const adv = adventureMetadata(params.slug);
  if (adv) return adv;
  const a = getThingsToDo(params.slug);
  if (!a) return {};
  const url = `${SITE_URL}/blog/${a.slug}`;
  const description = a.metaDescription ?? a.description;
  return {
    title: { absolute: a.seoTitle },
    description,
    keywords: [a.primaryKeyword, ...a.secondaryKeywords],
    alternates: { canonical: url },
    openGraph: {
      title: a.seoTitle,
      description,
      url,
      type: "article",
      siteName: "Kudozz Club",
      images: [{ url: a.hero.src, alt: a.hero.alt }],
    },
    twitter: { card: "summary_large_image", title: a.seoTitle, description, images: [a.hero.src] },
  };
}

const PUBLISHED = "2026-09-25";

function Schema({ a }: { a: ThingsToDoArticle }) {
  const url = `${SITE_URL}/blog/${a.slug}`;
  const e = thingsToDoEntry(a.slug);
  const items = a.sections.flatMap((s) => s.items);
  const graph = [
    {
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      image: `${SITE_URL}${a.hero.src}`,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { "@type": "Organization", name: "Kudozz Club", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      about: {
        "@type": "TouristDestination",
        name: a.destination,
        containedInPlace: e?.state
          ? { "@type": "AdministrativeArea", name: e.state, containedInPlace: { "@type": "Country", name: "India" } }
          : { "@type": "Country", name: "India" },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: `${a.destination} Travel Guide`, item: `${SITE_URL}/blog/${a.guide}` },
        { "@type": "ListItem", position: 4, name: `Things to Do in ${a.destination}`, item: url },
      ],
    },
    {
      "@type": "ItemList",
      name: `Things to do in ${a.destination}`,
      itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name })),
    },
    {
      "@type": "FAQPage",
      mainEntity: a.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

function Facts({ facts }: { facts: Record<string, string> }) {
  return (
    <dl className="not-prose my-5 grid gap-x-6 gap-y-2 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 font-sans text-sm sm:grid-cols-2">
      {Object.entries(facts).map(([k, v]) => (
        <div key={k} className="flex flex-col">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500">{k}</dt>
          <dd className="text-stone-800">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ThingsToDoPage({ params }: { params: { slug: string } }) {
  const adv = getAdventure(params.slug);
  if (adv) return <AdventureArticleView a={adv} />;
  const beach = getBeach(params.slug);
  if (beach) return <ClusterArticleView a={beach} c={BEACH_CLUSTER} sidebar={relatedBeach(beach.slug, 6)} />;
  const wild = getWildlife(params.slug);
  if (wild) return <ClusterArticleView a={wild} c={WILDLIFE_CLUSTER} sidebar={relatedWildlife(wild.slug, 6)} />;
  const spirit = getSpiritual(params.slug);
  if (spirit) return <ClusterArticleView a={spirit} c={SPIRITUAL_CLUSTER} sidebar={relatedSpiritual(spirit.slug, 6)} />;
  const heri = getHeritage(params.slug);
  if (heri) return <ClusterArticleView a={heri} c={HERITAGE_CLUSTER} sidebar={relatedHeritage(heri.slug, 6)} />;
  const hill = getHill(params.slug);
  if (hill) return <ClusterArticleView a={hill} c={HILLS_CLUSTER} sidebar={relatedHills(hill.slug, 6)} />;
  const a = getThingsToDo(params.slug);
  if (!a) notFound();
  const e = thingsToDoEntry(a.slug);
  const words = wordCount(a);
  const minutes = Math.max(4, Math.round(words / 230));
  const moreInState = e ? thingsToDoInState(e.state, a.slug).slice(0, 6) : [];
  const styles = (a.styles ?? []).map((s) => getTravelStyle(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const toc = [
    { id: "introduction", title: "Overview", level: 2 },
    { id: "quick-answer", title: "Quick answer", level: 2 },
    ...a.sections.map((s) => ({ id: s.id, title: s.heading, level: 2 })),
    ...(a.byTraveller?.length ? [{ id: "by-traveller", title: "By type of traveller", level: 2 }] : []),
    ...(a.oneDay ? [{ id: "one-day", title: "With one day", level: 2 }] : []),
    ...(a.tips?.length ? [{ id: "tips", title: "Practical tips", level: 2 }] : []),
    { id: "plan", title: "Plan your trip", level: 2 },
    { id: "faq", title: "FAQs", level: 2 },
    ...(a.nearby.length ? [{ id: "nearby", title: "Nearby", level: 2 }] : []),
  ];

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    ...(e?.stateGuide && e.stateGuide !== a.guide ? [{ label: e.state, href: `/blog/${e.stateGuide}` }] : []),
    { label: a.destination, href: `/blog/${a.guide}` },
    { label: "Things to Do", href: null },
  ];

  return (
    <>
      <Schema a={a} />
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src={a.hero.src} alt={a.hero.alt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>
          <nav className="absolute left-0 right-0 top-24 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-xs text-white/55">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">{c.label}</Link>
                  ) : (
                    <span className="text-white/35">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-36 sm:px-10">
            <div className="mb-6 flex flex-wrap gap-2">
              {a.tags.slice(0, 4).map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mb-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.2rem]">
              {a.title}
            </h1>
            <p className="mb-8 max-w-2xl font-body text-lg leading-relaxed text-white/80">{a.dek}</p>
            <p className="font-sans text-sm text-white/55">
              {minutes} min read · {a.destination}{e?.state && e.state !== a.destination ? `, ${e.state}` : ""}, India
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden w-60 flex-shrink-0 lg:block xl:w-64">
              <div className="sticky top-24">
                <TableOfContents items={toc} />
              </div>
            </div>

            <article className="min-w-0 max-w-2xl flex-1 xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  {a.intro.map((p, i) => <p key={i}>{p}</p>)}
                  <p className="font-sans text-sm text-stone-500">
                    For how to get there, when to go and where to stay, see our{" "}
                    <Link href={`/blog/${a.guide}`}>{a.destination} travel guide</Link>.
                  </p>
                </section>

                <section id="quick-answer" className="not-prose my-8 rounded-2xl border border-forest-200 bg-forest-50 p-6">
                  <h2 className="font-display text-xl font-bold text-stone-950">
                    Quick answer: best things to do in {a.destination}
                  </h2>
                  <ol className="mt-3 list-decimal space-y-1.5 pl-5 font-sans text-[15px] text-stone-800">
                    {a.quickAnswer.map((q) => <li key={q}>{q}</li>)}
                  </ol>
                </section>

                <GuideTripCTA slug={a.guide} hideThingsToDo />

                {a.sections.map((s) => (
                  <section key={s.id} id={s.id}>
                    <h2>{s.heading}</h2>
                    {s.intro && <p>{s.intro}</p>}
                    {s.items.map((it) => (
                        <div key={it.name}>
                          <h3>{it.name}</h3>
                          {it.image && <GuideFigure src={it.image.src} alt={it.image.alt} caption={it.image.caption} />}
                          {it.body.map((p, i) => <p key={i}>{p}</p>)}
                          {it.facts && <Facts facts={it.facts} />}
                          {it.links && it.links.length > 0 && (
                            <p className="font-sans text-sm">
                              {it.links.map((l, i) => (
                                <span key={l.href}>
                                  {i > 0 && " · "}
                                  <Link href={l.href}>{l.label}</Link>
                                </span>
                              ))}
                            </p>
                          )}
                        </div>
                    ))}
                  </section>
                ))}

                {a.byTraveller && a.byTraveller.length > 0 && (
                  <section id="by-traveller">
                    <h2>Things to do in {a.destination} by type of traveller</h2>
                    {a.byTraveller.map((b) => (
                      <p key={b.who}>
                        <strong>{b.who}:</strong> {b.text}
                      </p>
                    ))}
                  </section>
                )}

                {a.oneDay && (
                  <section id="one-day">
                    <h2>What to do in {a.destination} with one day</h2>
                    <p>{a.oneDay}</p>
                  </section>
                )}

                {a.tips && a.tips.length > 0 && (
                  <section id="tips">
                    <h2>Practical tips for {a.destination}</h2>
                    <ul>
                      {a.tips.map((tip) => <li key={tip}>{tip}</li>)}
                    </ul>
                  </section>
                )}

                <section id="plan" className="not-prose my-10 rounded-2xl border border-stone-200 bg-white p-6">
                  <h2 className="font-display text-xl font-bold text-stone-950">Plan the rest of your {a.destination} trip</h2>
                  <ul className="mt-4 grid gap-2 font-sans text-sm sm:grid-cols-2">
                    <li><Link className="text-link" href={`/blog/${a.guide}`}>{a.destination} travel guide</Link></li>
                    {(e?.cluster ?? []).map((c) => (
                      <li key={c.href}><Link className="text-link" href={c.href}>{c.label}</Link></li>
                    ))}
                    {e?.package && (
                      <li><Link className="text-link" href={`/packages/${e.package}`}>{e.state === a.destination ? a.destination : e.state} tour packages</Link></li>
                    )}
                    {styles.map((s) => (
                      <li key={s.slug}><Link className="text-link" href={`/packages/${s.slug}`}>{s.name} in India</Link></li>
                    ))}
                    <li><Link className="text-link" href={`/plan-your-trip?destination=${encodeURIComponent(a.destination)}&from=/blog/${a.slug}`}>Get a custom {a.destination} itinerary</Link></li>
                  </ul>
                </section>

                <section id="faq">
                  <h2>{a.destination} things to do: FAQs</h2>
                  {a.faqs.map((f) => (
                    <div key={f.q}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </section>

                {a.nearby.length > 0 && (
                  <section id="nearby">
                    <h2>Things to do near {a.destination}</h2>
                    <ul>
                      {a.nearby.map((x) => (
                        <li key={x.href}>
                          <Link href={x.href}>{x.name}</Link>: {x.note}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {moreInState.length > 0 && (
                  <section>
                    <h2>More things to do in {e!.state}</h2>
                    <ul>
                      {moreInState.map((m) => (
                        <li key={m.slug}>
                          <Link href={`/blog/${m.slug}`}>Things to do in {m.destination}</Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
              <RelatedPostsGrid currentSlug={a.guide} excludeSlug={a.slug} />
            </article>

            <div className="hidden w-64 flex-shrink-0 xl:block 2xl:w-72">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug={a.guide} excludeSlug={a.slug} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
