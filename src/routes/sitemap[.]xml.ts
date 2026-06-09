import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS } from "@/data/blog";
import { RUNES } from "@/data/runes";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/biblioteca", "/runas", "/productos", "/oraculo", "/sobre", "/privacidad", "/legal"];
        const postPaths = POSTS.map((p) => `/biblioteca/${p.slug}`);
        const runePaths = RUNES.map((r) => `/runas/${r.slug}`);
        const urls = [...staticPaths, ...postPaths, ...runePaths]
          .map((path) => `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
