import { budgetOptions, travellerOptions, tripTypeOptions } from "@/lib/enquiry-options";

// Step one of the enquiry: five quick fields, no contact details yet.
// It is a plain GET form to /plan-your-trip, which pre-fills these answers
// and asks only for name and email. It works without JavaScript and adds
// no client bundle to the homepage.
export default function HeroEnquiryForm({ id = "hero-enquiry" }: { id?: string }) {
  return (
    <form
      action="/plan-your-trip"
      method="get"
      aria-labelledby={`${id}-title`}
      className="w-full rounded-3xl bg-white p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:p-7"
    >
      <h2 id={`${id}-title`} className="font-display text-2xl font-bold text-stone-950">
        Where do you want to go?
      </h2>
      <p className="mt-1.5 font-sans text-sm leading-relaxed text-stone-600">
        Not sure where to go? Tell us what you&rsquo;re looking for and we&rsquo;ll
        help you figure it out.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label htmlFor={`${id}-destination`} className="field-label">
            Destination
          </label>
          <input
            id={`${id}-destination`}
            name="destination"
            type="text"
            list={`${id}-destinations`}
            placeholder="e.g. Kashmir, Kerala, or 'suggest one'"
            className="field"
            autoComplete="off"
          />
          <datalist id={`${id}-destinations`}>
            {[
              "Kashmir",
              "Rajasthan",
              "Kerala",
              "Goa",
              "Himachal Pradesh",
              "Uttarakhand",
              "Ladakh",
              "Andaman Islands",
              "Meghalaya",
              "Sikkim",
              "Golden Triangle",
              "Char Dham Yatra",
            ].map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor={`${id}-dates`} className="field-label">
            Travel dates
          </label>
          <input
            id={`${id}-dates`}
            name="travelDates"
            type="text"
            placeholder="e.g. Dec 2026"
            className="field"
          />
        </div>
        <div>
          <label htmlFor={`${id}-travelers`} className="field-label">
            Travellers
          </label>
          <select id={`${id}-travelers`} name="travelers" defaultValue="" className="field">
            <option value="">Select</option>
            {travellerOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-type`} className="field-label">
            Trip type
          </label>
          <select id={`${id}-type`} name="tripType" defaultValue="" className="field">
            <option value="">Select</option>
            {tripTypeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-budget`} className="field-label">
            Budget
          </label>
          <select id={`${id}-budget`} name="budget" defaultValue="" className="field">
            <option value="">Select</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn-primary mt-5 w-full py-4 text-[15px]">
        Get My Custom Trip Plan →
      </button>
      <p className="mt-3 text-center font-sans text-xs text-stone-500">
        Next step: just your name and email, so we can reply.
      </p>
    </form>
  );
}
