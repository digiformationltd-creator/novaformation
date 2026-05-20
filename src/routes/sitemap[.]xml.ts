import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ukServices, ukCompliance, usaServices, banking } from "@/lib/catalog";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/", "/pricing", "/uk-services", "/uk-compliance", "/usa-services",
          "/banks-payment-solutions", "/web-development", "/about", "/faq", "/contact",
        ];
        const dynamic = [
          ...ukServices.map((s) => `/uk-services/${s.slug}`),
          ...ukCompliance.map((s) => `/uk-compliance/${s.slug}`),
          ...usaServices.map((s) => `/usa-services/${s.slug}`),
          ...banking.map((s) => `/banks-payment-solutions/${s.slug}`),
        ];
        const all = [...staticPaths, ...dynamic];
        const urls = all
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
