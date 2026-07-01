import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const sitemap = site
    ? new URL(`${base}/sitemap-index.xml`, site).href
    : `${base}/sitemap-index.xml`;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
