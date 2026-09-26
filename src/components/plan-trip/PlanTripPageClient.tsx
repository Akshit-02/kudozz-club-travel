"use client";
import { useEffect, useRef, useState } from "react";
import Link from "@/components/ui/Link";
import { budgetOptions, travellerOptions, tripTypeOptions } from "@/lib/enquiry-options";
const accommodationOptions = [
  "Budget stays / homestays",
  "Comfortable 3-star",
  "Premium 4-star",
  "Luxury 5-star / heritage",
  "Mix, depending on the place",
];

// Query params the page accepts for pre-filling (from the homepage hero form,
// destination cards and package-page CTAs).
const PREFILL_KEYS = [
  "destination",
  "travelDates",
  "travelers",
  "tripType",
  "budget",
] as const;

const steps = [
  { n: "01", title: "You tell us the basics", desc: "Where, when, who and roughly what budget." },
  { n: "02", title: "We reply by email", desc: "With questions or a first route, planned by our team." },
  { n: "03", title: "We refine it together", desc: "Change places, pace and stays until it fits." },
];

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-stone-200 pt-7 first:border-t-0 first:pt-0">
      <legend className="flex items-center gap-3 font-display text-lg font-bold text-stone-950">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-950 font-sans text-xs font-semibold text-white">
          {n}
        </span>
        {title}
      </legend>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export default function PlanTripPageClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prefilled, setPrefilled] = useState(false);

  // Pre-fill from the URL after hydration, so the page itself can stay static.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    let any = false;
    for (const key of PREFILL_KEYS) {
      const value = params.get(key);
      const el = form.elements.namedItem(key) as HTMLInputElement | HTMLSelectElement | null;
      if (!value || !el) continue;
      if (el instanceof HTMLSelectElement && !Array.from(el.options).some((o) => o.value === value)) {
        el.add(new Option(value, value));
      }
      el.value = value.slice(0, 200);
      any = true;
    }
    const from = params.get("from");
    const source = form.elements.namedItem("sourcePage") as HTMLInputElement | null;
    if (source) source.value = from && from.startsWith("/") ? from.slice(0, 200) : document.referrer.slice(0, 200);
    setPrefilled(any);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/plan-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        {/* ── Hero ── */}
        <section className="bg-stone-950 pb-14 pt-32 sm:pt-36">
          <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-light">Plan My Trip</p>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
                Plan Your Trip With Kudozz Club
              </h1>
              <p className="mt-5 font-sans text-base leading-relaxed text-stone-300 sm:text-lg">
                Tell us where you want to go, how you want to travel and what
                matters to you. We&rsquo;ll help turn your ideas into a practical
                India itinerary.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4 rounded-2xl border border-stone-800 p-4">
                  <span className="font-display text-xl font-bold text-saffron-400">{s.n}</span>
                  <span className="font-sans text-sm">
                    <strong className="block font-semibold text-white">{s.title}</strong>
                    <span className="text-stone-400">{s.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Form ── */}
        <section className="bg-stone-50 py-14 sm:py-20">
          <div className="container-site grid gap-10 lg:grid-cols-[1fr_320px]">
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200 sm:p-9">
              {submitted ? (
                <div className="py-10 text-center" role="status">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-700 text-white">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-stone-950">
                    Thanks, your trip request is with us.
                  </h2>
                  <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-stone-600">
                    Our team will reply by email to the address you gave. If
                    anything changes in the meantime, write to{" "}
                    <a href="mailto:connect@kudozz.in" className="text-link">connect@kudozz.in</a>.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link href="/packages" className="btn-outline">Browse tour packages</Link>
                    <button type="button" onClick={() => setSubmitted(false)} className="btn-dark">
                      Plan another trip
                    </button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-stone-950">
                      Your trip starts with a conversation, not a template.
                    </h2>
                    <p className="mt-2 font-sans text-sm text-stone-600">
                      {prefilled
                        ? "We've kept what you already told us. Add your contact details and anything else that helps."
                        : "Only name, email and destination are required. Everything else helps us plan faster."}
                    </p>
                  </div>

                  {/* Honeypot: hidden from people, often filled by bots. */}
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>
                  <input type="hidden" name="sourcePage" />

                  <Section n="1" title="Your trip">
                    <div className="sm:col-span-2">
                      <label htmlFor="destination" className="field-label">Destination *</label>
                      <input id="destination" name="destination" required maxLength={200} className="field"
                        placeholder="e.g. Kashmir, Kerala, or 'not sure yet'" />
                    </div>
                    <div>
                      <label htmlFor="travelDates" className="field-label">Travel dates</label>
                      <input id="travelDates" name="travelDates" maxLength={120} className="field" placeholder="e.g. 10–17 Dec, or 'flexible in Nov'" />
                    </div>
                    <div>
                      <label htmlFor="departureCity" className="field-label">Departure city</label>
                      <input id="departureCity" name="departureCity" maxLength={120} className="field" placeholder="e.g. Mumbai" autoComplete="address-level2" />
                    </div>
                    <div>
                      <label htmlFor="tripType" className="field-label">Trip type</label>
                      <select id="tripType" name="tripType" defaultValue="" className="field">
                        <option value="">Select</option>
                        {tripTypeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="field-label">Budget</label>
                      <select id="budget" name="budget" defaultValue="" className="field">
                        <option value="">Select</option>
                        {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </Section>

                  <Section n="2" title="Who's travelling">
                    <div>
                      <label htmlFor="travelers" className="field-label">Number of travellers</label>
                      <select id="travelers" name="travelers" defaultValue="" className="field">
                        <option value="">Select</option>
                        {travellerOptions.map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="adults" className="field-label">Adults</label>
                        <input id="adults" name="adults" type="number" min={0} max={99} inputMode="numeric" className="field" />
                      </div>
                      <div>
                        <label htmlFor="children" className="field-label">Children</label>
                        <input id="children" name="children" type="number" min={0} max={99} inputMode="numeric" className="field" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="accommodation" className="field-label">Accommodation preference</label>
                      <select id="accommodation" name="accommodation" defaultValue="" className="field">
                        <option value="">Select</option>
                        {accommodationOptions.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="specialRequirements" className="field-label">Special requirements</label>
                      <input id="specialRequirements" name="specialRequirements" maxLength={300} className="field"
                        placeholder="e.g. senior travellers, dietary needs, mobility, an anniversary" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="field-label">Anything else?</label>
                      <textarea id="message" name="message" rows={4} maxLength={3000} className="field resize-y"
                        placeholder="Places you'd love to include, the pace you like, anything you want to avoid..." />
                    </div>
                  </Section>

                  <Section n="3" title="Where should we reply?">
                    <div>
                      <label htmlFor="name" className="field-label">Name *</label>
                      <input id="name" name="name" required maxLength={120} className="field" autoComplete="name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="field-label">Email *</label>
                      <input id="email" name="email" type="email" required maxLength={200} className="field" autoComplete="email" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="field-label">Phone (optional)</label>
                      <input id="phone" name="phone" type="tel" maxLength={30} className="field" autoComplete="tel" placeholder="+91" />
                    </div>
                  </Section>

                  {error && (
                    <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 font-sans text-sm text-red-700">
                      {error}
                    </p>
                  )}

                  <div>
                    <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-[15px] disabled:opacity-60">
                      {loading ? "Sending..." : "Get My Custom Trip Plan →"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ── Side panel ── */}
            <aside className="space-y-5 font-sans text-sm">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
                <h2 className="font-display text-lg font-bold text-stone-950">What happens next</h2>
                <ul className="mt-4 space-y-3 text-stone-600">
                  <li>Your request goes straight to the Kudozz Club team, not a lead marketplace.</li>
                  <li>We reply by email, usually with a few questions or a first route.</li>
                  <li>Pricing is quoted for your specific trip. We don&rsquo;t publish fixed package prices.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
                <h2 className="font-display text-lg font-bold text-stone-950">Prefer email?</h2>
                <p className="mt-2 text-stone-600">
                  Write to us at{" "}
                  <a href="mailto:connect@kudozz.in" className="text-link">connect@kudozz.in</a>{" "}
                  with the same details.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
                <h2 className="font-display text-lg font-bold text-stone-950">Still deciding?</h2>
                <p className="mt-2 text-stone-600">
                  Browse <Link href="/packages" className="text-link">India tour packages</Link>{" "}
                  or our <Link href="/blog" className="text-link">destination guides</Link> first.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
