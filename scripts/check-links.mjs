// Static link + image integrity check. Run: npm run check:links
//
// Scans every .ts/.tsx/.json file under src/ for:
//   - blog slugs ("xyz-travel-guide") and /blog/<slug> hrefs -> must exist in src/app/blog/<slug>/
//   - /packages/<slug> hrefs and package slug references -> must be a known package slug
//   - "/images/..." paths -> must exist under public/
//   - fixed internal routes (href="/about" etc.) -> must have a page.tsx
// Exits non-zero on any broken reference.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const src = path.join(root, "src");
const blogDir = path.join(src, "app", "blog");

const blogSlugs = new Set(
  fs.readdirSync(blogDir).filter((d) => fs.existsSync(path.join(blogDir, d, "page.tsx"))),
);

function read(f) {
  return fs.readFileSync(f, "utf8");
}

// Package slugs come from the three data files that feed /packages/[slug].
const pkgSlugs = new Set();
for (const f of ["all-states-data.ts", "travel-styles-data.ts", "combo-packages.ts"]) {
  const t = read(path.join(src, "lib", f));
  // Only the top-level `slug: "x"` of each entry — route stop slugs end in -travel-guide.
  for (const m of t.matchAll(/^\s{4}slug:\s*"([a-z0-9-]+)"/gm)) pkgSlugs.add(m[1]);
}

const appRoutes = new Set(["/"]);
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const r = `${rel}/${e.name}`;
    if (fs.existsSync(path.join(dir, e.name, "page.tsx"))) appRoutes.add(r);
    walk(path.join(dir, e.name), r);
  }
})(path.join(src, "app"), "");

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx?|json)$/.test(e.name)) files.push(p);
  }
})(src);

const errors = [];
let checked = 0;
for (const f of files) {
  const t = read(f);
  const rel = path.relative(root, f);
  for (const m of t.matchAll(/["'`/]([a-z0-9-]+-travel-guide)(?=["'`#?/])/g)) {
    checked++;
    if (!blogSlugs.has(m[1])) errors.push(`${rel}: unknown blog slug ${m[1]}`);
  }
  for (const m of t.matchAll(/["'`]\/packages\/([a-z0-9-]+)["'`#?]/g)) {
    checked++;
    if (!pkgSlugs.has(m[1])) errors.push(`${rel}: unknown package /packages/${m[1]}`);
  }
  for (const m of t.matchAll(/["'`](\/images\/[^"'`?#\s]+)["'`]/g)) {
    checked++;
    if (!fs.existsSync(path.join(root, "public", m[1]))) errors.push(`${rel}: missing image ${m[1]}`);
  }
  for (const m of t.matchAll(/href=["']((?:\/[a-z0-9-]+)+)\/?["'#?]/g)) {
    const r = m[1];
    if (r.startsWith("/blog/") || r.startsWith("/packages/") || r.startsWith("/api/") || r.startsWith("/images/")) continue;
    checked++;
    if (!appRoutes.has(r)) errors.push(`${rel}: unknown route ${r}`);
  }
}

// Package slug references inside data files (relatedStates, nearby, homepage lists).
for (const f of ["destination-profiles.ts", "travel-styles-data.ts", "combo-packages.ts"]) {
  const t = read(path.join(src, "lib", f));
  for (const block of t.matchAll(/(?:nearby|relatedStates|homepageDestinationSlugs)[^=:]*[:=]\s*\[([^\]]*)\]/g)) {
    for (const m of block[1].matchAll(/"([a-z0-9-]+)"/g)) {
      checked++;
      if (!pkgSlugs.has(m[1])) errors.push(`src/lib/${f}: unknown package slug ${m[1]}`);
    }
  }
}

console.log(`Checked ${checked} references across ${files.length} files (${blogSlugs.size} guides, ${pkgSlugs.size} package pages).`);
if (errors.length) {
  console.error(`\n${errors.length} broken reference(s):`);
  for (const e of [...new Set(errors)]) console.error("  " + e);
  process.exit(1);
}
console.log("No broken links or images.");
