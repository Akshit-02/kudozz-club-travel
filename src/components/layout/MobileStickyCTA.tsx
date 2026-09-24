"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Pages where the bar would be redundant or would compete with a form.
const HIDDEN_ON = ["/plan-your-trip", "/contact", "/newsletter", "/write-for-us"];

// Subtle bottom bar on small screens. Appears only after the visitor has
// scrolled past the first screen (so it never covers a hero or hero form) and
// hides again near the page end so it doesn't sit on top of the footer.
export default function MobileStickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearEnd =
        window.innerHeight + y > document.documentElement.scrollHeight - 480;
      setVisible(y > window.innerHeight * 0.9 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <>
      {/* Reserves space so the bar can never hide the last lines of content. */}
      {/* Matches the footer background, which it always follows. */}
      <div className="h-16 bg-stone-950 md:hidden" aria-hidden="true" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 md:hidden transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!visible}
      >
        <div className="flex items-center justify-between gap-3 border-t border-stone-200 bg-white/95 px-4 py-2.5 backdrop-blur pb-[max(0.625rem,env(safe-area-inset-bottom))]">
          <span className="font-sans text-sm font-medium text-stone-700">
            Planning a trip?
          </span>
          <Link
            href="/plan-your-trip"
            tabIndex={visible ? 0 : -1}
            className="btn-primary px-5 py-2.5"
          >
            Plan My Trip →
          </Link>
        </div>
      </div>
    </>
  );
}
