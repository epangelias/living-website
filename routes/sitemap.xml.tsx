import { db } from "../lib/db.ts";
import { GetPages } from "../lib/path.ts";

export async function handler(req: Request) {
  const pages = await GetPages();

  pages.forEach((page) => {
    if (
      page.path.toLowerCase().includes("herman") ||
      page.path.toLowerCase().includes("jaden") ||
      page.path.toLowerCase().includes("dan") ||
      page.path.toLowerCase().includes("gay") ||
      page.path.toLowerCase().includes("jesus")
    ) db.delete(["pages", page.path]);
    console.log(page.path);
  });

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${
    pages.map((page) =>
      `<url><loc>https://living.vaza.top/${page.path}</loc></url>`
    ).join("\n")
  }
    `);
}
