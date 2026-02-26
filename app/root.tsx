import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { ThemeProvider } from "@rescui/ui-contexts";
import "./styles/styles-v2.scss";
import "@jetbrains/kotlin-web-site-ui/dist/header.css";
import "@jetbrains/kotlin-web-site-ui/dist/footer.css";
import "@rescui/typography/lib/font-jb-sans-auto.css";

export default function App() {
  return (
    <html lang="en">
      <head>
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
