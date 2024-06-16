import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>living-website</title>
        <link rel="stylesheet" href="/styles.css" />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"> */}
        {/* <meta name="color-scheme" content="light dark" /> */}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
