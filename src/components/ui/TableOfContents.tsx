"use client";

import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  // Reading progress
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="w-full">
      {/* Reading Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-stone-400"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Reading Progress
          </span>
          <span
            className="text-xs text-forest-600 font-medium"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-forest-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* TOC Card */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-100 bg-forest-50">
          <h2
            className="text-sm font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h10M4 18h12"
              />
            </svg>
            Table of Contents
          </h2>
        </div>
        <nav className="p-4 toc-scroll max-h-[60vh] overflow-y-auto">
          <ol className="space-y-0.5">
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  paddingLeft: item.level === 3 ? "1rem" : "0",
                }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`toc-link text-sm py-1.5 leading-snug ${
                    activeId === item.id ? "active" : ""
                  } ${item.level === 3 ? "text-xs" : ""}`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Share Box */}
      <div className="mt-6 bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
        <h3
          className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Share this Guide
        </h3>
        <div className="flex gap-2">
          {[
            {
              name: "Twitter",
              color: "bg-sky-500",
              icon: "𝕏",
              href: "https://twitter.com/intent/tweet?url=",
            },
            {
              name: "Facebook",
              color: "bg-blue-600",
              icon: "f",
              href: "https://facebook.com/sharer/sharer.php?u=",
            },
            {
              name: "WhatsApp",
              color: "bg-green-500",
              icon: "W",
              href: "https://api.whatsapp.com/send?text=",
            },
            {
              name: "Copy",
              color: "bg-stone-500",
              icon: "⎘",
              href: "#",
            },
          ].map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share on ${s.name}`}
              className={`${s.color} text-white w-9 h-9 rounded-lg flex items-center justify-center text-sm hover:opacity-80 transition-opacity`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
