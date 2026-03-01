import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "@jetbrains/kotlin-web-site-ui/dist/footer.css";
import "@jetbrains/kotlin-web-site-ui/dist/header.css";
import "@rescui/typography/lib/font-jb-sans-auto.css";

import "./styles/styles-v2.scss";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        <title>Kotlin Programming Language</title>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
