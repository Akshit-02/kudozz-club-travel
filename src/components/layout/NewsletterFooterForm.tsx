"use client";
import { useState } from "react";

export default function NewsletterFooterForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: email.split("@")[0] || "Subscriber",
          lastName: "",
          email,
          interests: [],
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
      <div className="w-full lg:w-auto lg:min-w-[420px] flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-stone-900 border border-stone-700 text-stone-200 text-sm">
        ✓ You're on the list — check your inbox soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-auto flex flex-col gap-2 lg:min-w-[420px]"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          aria-label="Email address for the newsletter"
          required
          className="flex-1 px-5 py-3 rounded-full bg-stone-900 border border-stone-700 text-white placeholder:text-stone-500 text-sm focus:outline-none focus:border-stone-400 transition-all"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 border border-stone-600 text-stone-200 font-semibold rounded-full text-sm hover:border-stone-300 hover:text-white transition-colors whitespace-nowrap disabled:opacity-60"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {error && (
        <p className="text-red-200 text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>
          {error}
        </p>
      )}
    </form>
  );
}
