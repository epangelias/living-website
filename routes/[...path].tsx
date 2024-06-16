import { FreshContext } from "$fresh/server.ts";
import { GetPage } from "../lib/path.ts";
import Error404 from "./_404.tsx";

export default async function Page(req: Request, ctx: FreshContext) {
  const __html = await GetPage(ctx.params.path);
  if (__html === null) return <Error404 />;
  return (
    <div
      class="bg-gray-100 text-gray-800 font-sans leading-normal tracking-normal"
      dangerouslySetInnerHTML={{ __html }}
    >
    </div>
  );
}
