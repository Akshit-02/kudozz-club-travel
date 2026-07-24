import Link from "next/link";
import Image from "next/image";
import { posts, featuredPost } from "@/lib/blog-posts";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryColor: string;
  tags: string[];
  readTime: string;
};

const ALL_POSTS: Post[] = [featuredPost, ...posts];

// Deterministic small hash, used only to break relevance ties so that two
// posts in the same large category (e.g. "Destination Guide") don't always
// surface the exact same related set.
function hashPair(a: string, b: string): number {
  const s = `${a}::${b}`;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// Ranks candidates by shared tags (topical relevance) with same-category as
// a smaller bonus, then breaks ties with a per-post-pair hash so the result
// varies across posts instead of always returning a fixed top-N.
function getRelatedPosts(currentSlug: string, count: number): Post[] {
  const current = ALL_POSTS.find((p) => p.slug === currentSlug);
  const rest = ALL_POSTS.filter((p) => p.slug !== currentSlug);
  if (!current) return rest.slice(0, count);

  return rest
    .map((post) => {
      const sharedTags = post.tags.filter((t) =>
        current.tags.includes(t),
      ).length;
      const sameCategory = post.category === current.category ? 1 : 0;
      return {
        post,
        score: sharedTags * 2 + sameCategory,
        tiebreak: hashPair(currentSlug, post.slug),
      };
    })
    .sort((a, b) => b.score - a.score || a.tiebreak - b.tiebreak)
    .slice(0, count)
    .map((s) => s.post);
}

// ── Sidebar Widget ────────────────────────────────────────────────────────────
export function RelatedSidebar({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedPosts(currentSlug, 3);
  const current = ALL_POSTS.find((p) => p.slug === currentSlug);

  return (
    <aside className="w-full space-y-6">
      {/* Related Posts */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-100 bg-amber-50">
          <h2
            className="text-sm font-semibold uppercase tracking-widest text-amber-700 flex items-center gap-2"
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
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Related Guides
          </h2>
        </div>
        <div className="divide-y divide-stone-100">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex gap-3 p-4 hover:bg-stone-50 transition-colors group"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span
                  className="text-xs text-forest-600 font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {post.category}
                </span>
                <h3
                  className="text-sm font-semibold text-stone-800 leading-snug line-clamp-2 group-hover:text-forest-600 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {post.title}
                </h3>
                <span
                  className="text-xs text-stone-400"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {post.readTime} read
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Guide Info */}
      {current && (
        <div className="bg-forest-900 text-white rounded-2xl p-5">
          <h3
            className="font-bold text-lg mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Guide Info
          </h3>
          <ul className="space-y-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <li className="flex items-start gap-3 text-sm">
              <span>🗂️</span>
              <div>
                <span className="text-forest-300 block text-xs">
                  Category
                </span>
                <span className="text-white font-medium">
                  {current.category}
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span>⏱️</span>
              <div>
                <span className="text-forest-300 block text-xs">
                  Read time
                </span>
                <span className="text-white font-medium">
                  {current.readTime}
                </span>
              </div>
            </li>
            {current.tags.length > 0 && (
              <li className="flex items-start gap-3 text-sm">
                <span>🏷️</span>
                <div className="min-w-0">
                  <span className="text-forest-300 block text-xs mb-1.5">
                    Topics
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-white/10 text-white px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            )}
          </ul>
          <Link
            href="/blog"
            className="mt-5 block w-full py-2.5 text-center text-sm font-semibold bg-forest-500 hover:bg-forest-400 rounded-xl transition-colors"
          >
            Browse all guides →
          </Link>
        </div>
      )}
    </aside>
  );
}

// ── Bottom Related Grid ───────────────────────────────────────────────────────
export function RelatedPostsGrid({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedPosts(currentSlug, 4);

  return (
    <section className="mt-16 pt-12 border-t border-stone-200">
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-2xl md:text-3xl font-bold text-stone-900"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Continue Exploring
        </h2>
        <Link
          href="/blog"
          className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center gap-1"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          View all guides
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden border border-stone-200 card-hover"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span
                className="absolute top-3 left-3 tag-pill text-xs"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {post.category}
              </span>
            </div>
            <div className="p-5">
              <h3
                className="font-bold text-stone-900 mb-2 leading-snug group-hover:text-forest-600 transition-colors line-clamp-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {post.title}
              </h3>
              <p
                className="text-sm text-stone-500 line-clamp-2 mb-3"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {post.excerpt}
              </p>
              <div
                className="flex items-center justify-end text-xs text-stone-400"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <span>{post.readTime} read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
