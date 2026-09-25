import Link from "next/link";
import { getGuideContext } from "@/lib/guide-context";
import { thingsToDoForGuide } from "@/lib/things-to-do-links";

// A single, quiet planning prompt placed after a guide's introduction.
// Rendered inside .prose-travel, so it uses the .guide-cta overrides in
// globals.css to opt out of article typography.
export default function GuideTripCTA({ slug, hideThingsToDo = false }: { slug: string; hideThingsToDo?: boolean }) {
  const ctx = getGuideContext(slug);
  if (!ctx) return null;
  const ttd = hideThingsToDo ? undefined : thingsToDoForGuide(slug);
  const samePlace = ctx.place === ctx.stateName;

  return (
    <>
    {ttd && (
      <p className="font-sans text-[15px]">
        Looking for activities and experiences? See our guide to the{" "}
        <Link href={`/blog/${ttd.slug}`}>best things to do in {ttd.destination}</Link>.
      </p>
    )}
    <aside
      aria-label={`Plan a trip to ${ctx.place}`}
      className="guide-cta my-10 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div>
        <p className="font-display text-lg font-bold text-stone-950">
          Planning a trip to {ctx.place}?
        </p>
        <p className="mt-1 font-sans text-sm leading-relaxed text-stone-600">
          You&rsquo;ve found the destination. Let us help you plan the journey
          around your dates, budget and travel style
          {samePlace ? "" : (
            <>
              , or{" "}
              <Link href={`/packages/${ctx.packageSlug}`} className="font-semibold text-forest-700 underline underline-offset-4">
                explore {ctx.stateName} tour packages
              </Link>
            </>
          )}
          .
        </p>
      </div>
      <Link href={ctx.planHref} className="btn-primary shrink-0">
        {ctx.shortPlace ? `Plan My ${ctx.shortPlace} Trip →` : "Plan This Trip →"}
      </Link>
    </aside>
    </>
  );
}
