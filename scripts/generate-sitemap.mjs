// Build-time sitemap generator.
//
// Emits public/sitemap.xml with the static routes plus dynamic blog posts and
// courses pulled from the public API, each with a <lastmod>. Runs before
// `vite build` (see package.json), so every deploy ships a current sitemap.
//
// Robustness: the API (Render free tier) can be asleep at build time. This
// script NEVER fails the build — on a total dynamic-fetch failure it keeps any
// existing sitemap.xml rather than regressing it to static-only.

import {writeFileSync, existsSync, readFileSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {dirname, resolve} from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/sitemap.xml");

const SITE = "https://www.stanleyhayford.com";
const API = process.env.VITE_API_URL || "https://portfolio-api-ly46.onrender.com/api";
const TODAY = new Date().toISOString().slice(0, 10);

// Static routes → [path, changefreq, priority]
const STATIC_ROUTES = [
  ["/", "weekly", "1.0"],
  ["/about", "monthly", "0.8"],
  ["/portfolio", "weekly", "0.8"],
  ["/services", "monthly", "0.7"],
  ["/learn", "weekly", "0.7"],
  ["/blog", "weekly", "0.7"],
  ["/contact", "yearly", "0.5"],
];

const toDate = (v) => {
  const d = v ? new Date(v) : null;
  return d && !Number.isNaN(d.getTime()) ? d.toISOString().slice(0, 10) : TODAY;
};

async function getJSON(endpoint) {
  const res = await fetch(`${API}${endpoint}`, {
    headers: {"Content-Type": "application/json"},
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = await res.json();
  return Array.isArray(body) ? body : (body.data || []);
}

// Fetch dynamic content, tolerating individual failures.
async function fetchDynamic() {
  const result = {posts: [], courses: [], ok: false};
  const [posts, courses] = await Promise.allSettled([
    getJSON("/public/posts"),
    getJSON("/public/courses"),
  ]);
  if (posts.status === "fulfilled") {
    result.posts = posts.value.filter((p) => p?.slug && (!p.status || p.status === "published"));
    result.ok = true;
  } else {
    console.warn("[sitemap] posts fetch failed:", posts.reason?.message);
  }
  if (courses.status === "fulfilled") {
    result.courses = courses.value.filter((c) => c?.slug);
    result.ok = true;
  } else {
    console.warn("[sitemap] courses fetch failed:", courses.reason?.message);
  }
  return result;
}

const urlEntry = (loc, lastmod, changefreq, priority) =>
  `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>` +
  `\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

function buildXml({posts, courses}) {
  const entries = [];
  for (const [path, changefreq, priority] of STATIC_ROUTES) {
    entries.push(urlEntry(`${SITE}${path}`, TODAY, changefreq, priority));
  }
  for (const p of posts) {
    entries.push(urlEntry(`${SITE}/blog/${p.slug}`, toDate(p.updatedAt || p.publishedAt || p.createdAt), "monthly", "0.6"));
  }
  for (const c of courses) {
    entries.push(urlEntry(`${SITE}/learn/${c.slug}/lessons`, toDate(c.updatedAt || c.createdAt), "monthly", "0.6"));
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries.join("\n") + `\n</urlset>\n`;
}

async function main() {
  let dynamic = {posts: [], courses: [], ok: false};
  try {
    dynamic = await fetchDynamic();
  } catch (err) {
    console.warn("[sitemap] dynamic fetch error:", err?.message);
  }

  // Don't regress: if we got no dynamic data but a sitemap already exists with
  // more than the static routes, keep it.
  if (!dynamic.ok && existsSync(OUT)) {
    const existing = readFileSync(OUT, "utf8");
    const count = (existing.match(/<url>/g) || []).length;
    if (count > STATIC_ROUTES.length) {
      console.warn(`[sitemap] API unavailable — keeping existing sitemap (${count} URLs).`);
      return;
    }
  }

  const xml = buildXml(dynamic);
  writeFileSync(OUT, xml, "utf8");
  const total = STATIC_ROUTES.length + dynamic.posts.length + dynamic.courses.length;
  console.log(`[sitemap] wrote ${total} URLs (${STATIC_ROUTES.length} static, ${dynamic.posts.length} posts, ${dynamic.courses.length} courses) -> public/sitemap.xml`);
}

main().catch((err) => {
  // Never fail the build over the sitemap.
  console.warn("[sitemap] generation skipped:", err?.message);
});
