import { db } from "./db.ts";
import { generatePrompt, Message } from "./openai.ts";

export async function GetPage(path: string) {
  const res = await db.get(["pages", path]);
  if (res.versionstamp == null) return await PageGenerator(path);
  return res.value as string;
}

export async function GetPages() {
  const list = await db.list({ prefix: ["pages"] });
  return (await Array.fromAsync(list)).map((x) => ({
    path: x.key[1] as string,
    html: x.value as string,
  }));
}

export async function PageGenerator(path: string) {
  try {
    const html = await generatePrompt(makePrompt(path));
    await db.set(["pages", path], html);
    return html;
  } catch (e) {
    return "Error generating page. API rate limit likely reached.";
  }
}

const makePrompt = (
  path: string,
) =>
  [{
    role: "system",
    content: `
    Page html output of the page ${path}.
    YOUR RESPONSE IS PURE HTML AND MUST BEGIN WITH THE OPENING <
  It will in HTML that will be inserted in the body tag.
  MAKE THE SITE AS CREATIVE AND COMPLEX AS POSSIBLE
  Utilize tailwind for styling with elegant and modern design using the full features of Tailwind CSS.
  Colors, shadows, boxes, borders, and more should be included for the page. Include a header, footer, main content, related links, and a sidebar.
  Include vibrant colors for each component of the page.
  Include Emojis as icons for the page UI.
  Include links to related internal pages.
  OVOID USAGE OF HASH LINKS.
  You may use photos from https://picsum.photos
  Use linear gradients.
  Buttons should be wrapped around links.
  Forms should have the action field set to an internal page related to the next content.
  The content includes real content from the internet with the full ample content.
  INCLUDE REAL CONTENT, REAL INFORMATIVE INFORMATION. MAKE UP ANYTHING YOU WOULD LIKE.
  LINKS MUST BE RELATIVE TO PAGE USING / AND HAVE A LONG SLUG THAT DESCRIBES EXACTLY WHAT THE PAGE IS ABOUT.
  Include ample content, many internal (relative to /) links. Include at least 50 links.
  Directly begin response with exactly '<main class"' and then continue with the content.  `,
  }] as Message[];
