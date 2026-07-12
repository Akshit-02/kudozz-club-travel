"use client";
import { useState } from "react";

const interestOptions = [
  "Mountains",
  "Beaches",
  "Heritage",
  "Adventure",
  "Road Trips",
  "Budget Travel",
];

export default function NewsletterSignupForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          interests: data.getAll("interests"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body.error || "Something went wrong. Please try again.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✓</div>
        <h3
          className="text-white font-bold text-lg mb-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          You're in!
        </h3>
        <p
          className="text-stone-400 text-sm"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Check your inbox for a welcome email with your first guide.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Aditya"
            required
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          />
        </div>
        <div>
          <label
            className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Sharma"
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          />
        </div>
      </div>

      <div>
        <label
          className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500/30 transition-all"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        />
      </div>

      <div>
        <label
          className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Travel Interests
        </label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-2 px-3 py-1.5 bg-stone-800 border border-stone-700 rounded-full cursor-pointer hover:border-forest-500/50 transition-colors group"
            >
              <input
                type="checkbox"
                name="interests"
                value={interest}
                className="accent-forest-500 w-3 h-3"
              />
              <span
                className="text-xs text-stone-400 group-hover:text-stone-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {interest}
              </span>
            </label>
          ))}
        </div>
      </div>

      {error && (
        <p
          className="text-red-400 text-sm"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 gradient-forest text-white font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-forest-900/30 text-sm mt-2 disabled:opacity-60"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {loading ? "Joining..." : "Join Free — Get My First Guide →"}
      </button>
    </form>
  );
}
