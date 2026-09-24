import Link from "next/link";
import { getGuideContext } from "@/lib/guide-context";

// A single, quiet planning prompt placed after a guide's introduction.
// Rendered inside .prose-travel, so it uses the .guide-cta overrides in
// globals.css to opt out of article typography.
export default function GuideTripCTA({ slug }: { slug: string }) {
  const ctx = getGuideContext(slug);
  if (!ctx) return null;
  const samePlace = ctx.place === ctx.stateName;

  return (
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
  );
}
