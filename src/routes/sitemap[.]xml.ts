import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getRequestHost, getRequestHeader } from "@tanstack/react-start/server";
import { posts } from "@/lib/blog-posts";

const staticEntries = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/about", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services", priority: "0.9", changefreq: "monthly" as const },
  { path: "/services/ai-integrations", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/automation", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/web-systems", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/seo", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/data-pipelines", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/ai-agents", priority: "0.8", changefreq: "monthly" as const },
  { path: "/portfolio", priority: "0.9", changefreq: "weekly" as const },
  { path: "/pricing", priority: "0.8", changefreq: "monthly" as const },
  { path: "/blog", priority: "0.8", changefreq: "weekly" as const },
  { path: "/faq", priority: "0.6", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.7", changefreq: "monthly" as const },
  { path: "/book-a-call", priority: "0.7", changefreq: "monthly" as const },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" as const },
  { path: "/terms", priority: "0.3", changefreq: "yearly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Build absolute URLs from the request so the sitemap works under
        // any deployed host (preview, custom domain) without baking a constant.
        const host = getRequestHost();
        const proto = getRequestHeader("x-forwarded-proto") ?? "https";
        const base = `${proto}://${host}`;

        const entries = [
          ...staticEntries,
          ...posts.map((p) => ({
            path: `/blog/${p.slug}`,
            priority: "0.6",
            changefreq: "monthly" as const,
          })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) =>
              `  <url><loc>${base}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
