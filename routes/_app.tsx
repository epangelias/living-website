import { type PageProps } from "$fresh/server.ts";

export function emojiToUrl(emoji: string) {
  return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;
}

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Living Website</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="shortcut icon" href={emojiToUrl("⚡")} type="image/svg" />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"> */}
        {/* <meta name="color-scheme" content="light dark" /> */}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
