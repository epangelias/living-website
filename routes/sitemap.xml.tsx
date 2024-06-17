import { GetPages } from "../lib/path.ts";

export async function handler(req: Request) {
  const pages = (await GetPages()).filter((p) =>
    !p.path.toLocaleLowerCase().includes("jaden")
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
      pages.map((page) =>
        `<url><loc>https://living.vaza.top/${page.path}</loc></url>`
      ).join("\n")
    }\n</urlset>`,
  );
}
