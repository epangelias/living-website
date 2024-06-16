import { db } from "../lib/db.ts";
import { GetPages } from "../lib/path.ts";

export async function handler(req: Request) {
  const all = await GetPages();
  for (const page of all) {
    await db.delete(["pages", page.path]);
  }
  return new Response("Done");
}
