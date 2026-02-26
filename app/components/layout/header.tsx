import { useState } from "react";
import { ThemeProvider } from "@rescui/ui-contexts";
import { useTextStyles } from "@rescui/typography";
import cn from "classnames";
import SearchIcon from "@rescui/icons/lib/search";
import "@jetbrains/kotlin-web-site-ui/dist/header.css";

const NAV_ITEMS = [
  {
    title: "Solutions",
    items: [
      { title: "Multiplatform Mobile", url: "/lp/mobile/" },
      {
        title: "Multiplatform for other platforms",
        url: "/docs/multiplatform.html",
      },
      { title: "Server-side", url: "/lp/server-side/" },
      { title: "Web frontend", url: "/docs/js-overview.html" },
      { title: "Data science", url: "/docs/data-science-overview.html" },
      { title: "Android", url: "/docs/android-overview.html" },
    ],
  },
  { title: "Docs", url: "/docs/home.html" },
  { title: "Community", url: "/community/" },
  { title: "Teach", url: "/education/" },
  {
    title: "Play",
    items: [
      { title: "Playground", url: "https://play.kotlinlang.org/" },
      { title: "Hands-on", url: "https://play.kotlinlang.org/hands-on" },
      { title: "Examples", url: "https://play.kotlinlang.org/byExample" },
      { title: "Koans", url: "https://play.kotlinlang.org/koans" },
    ],
  },
];

const LOGO_PATH_TEXT_1 =
  "M45.69 2.73h-3.76l-8.18 8.73v-8.7h-3.02v18.92h3.02v-9.17l8.21 9.17h3.89l-8.75-9.79z";
const LOGO_PATH_TEXT_2 =
  "M55.93 8.44c-1.07-.62-2.28-.93-3.64-.93-1.38 0-2.61.31-3.7.93a6.63 6.63 0 00-2.55 2.57c-.61 1.1-.91 2.35-.91 3.74 0 1.4.3 2.64.91 3.74a6.45 6.45 0 002.53 2.57c1.09.62 2.32.93 3.7.93 1.36 0 2.58-.31 3.66-.93a6.53 6.53 0 002.51-2.57c.6-1.1.9-2.35.9-3.74 0-1.4-.3-2.64-.9-3.74-.6-1.1-1.43-1.95-2.51-2.57zm-.19 8.7c-.33.69-.8 1.23-1.4 1.61-.6.39-1.3.58-2.08.58-.79 0-1.49-.19-2.11-.58-.61-.39-1.09-.93-1.43-1.61-.34-.69-.51-1.48-.51-2.38 0-.9.17-1.7.51-2.39.34-.69.82-1.23 1.43-1.61.61-.39 1.32-.58 2.12-.58.77 0 1.46.19 2.07.58.6.39 1.07.93 1.4 1.61.33.69.49 1.48.49 2.39.01.9-.15 1.69-.49 2.38zm9.75-12.76h-2.92v2.35c0 .37-.09.65-.27.83-.18.18-.46.28-.84.28h-1.43v2.49h2.49v7.45c0 .77.16 1.46.47 2.05.31.59.76 1.05 1.34 1.37.58.32 1.27.49 2.06.49h2.23V19.1h-1.68c-.43 0-.78-.15-1.06-.45-.27-.3-.4-.7-.4-1.2v-7.11h3.22v-2.5h-3.22V4.38zM71.03 2H74v19.68h-2.97zm6.32.03h3v3.05h-3zm0 5.81h2.97v13.84h-2.97zm18.08 2.28a4.694 4.694 0 00-1.77-1.92c-.76-.46-1.65-.69-2.67-.69-1.08 0-2.03.26-2.84.79-.65.42-1.17.98-1.58 1.68l-.02-2.14H83.7v13.84h2.97v-7.74c0-.75.14-1.41.43-1.99.28-.58.68-1.03 1.2-1.35.52-.32 1.12-.48 1.82-.48.62 0 1.16.13 1.6.39.45.26.78.64 1.01 1.12.23.49.34 1.07.34 1.74v8.31h2.97v-8.73c.02-1.07-.2-2.01-.61-2.83z";

const VERSION = "v1.6.20";
const VERSION_HREF = "https://github.com/JetBrains/kotlin/releases/tag/v1.6.20";
const LOGO_HREF = "https://kotlinlang.org";

function KotlinLogo() {
  const textCn = useTextStyles();

  return (
    <div
      className={cn(
        "ktl-logo-large-module_container_2BfGV",
        textCn("rs-text-3", { hardness: "average" }),
      )}
    >
      <a
        className="ktl-logo-large-module_link_2HVM-"
        href={LOGO_HREF}
        aria-label="Kotlin Home Page"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src="/images/favicon.svg"
          alt="Kotlin"
          style={{ height: 18.92, marginRight: 8 }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="30 0 70 24"
          style={{ height: 24 }}
        >
          <g fill="#fff">
            <path d={LOGO_PATH_TEXT_1} />
            <path d={LOGO_PATH_TEXT_2} />
          </g>
        </svg>
      </a>
      <a
        className="ktl-logo-large-module_version-tag_4KEoG"
        href={VERSION_HREF}
        target="_blank"
        rel="noreferrer"
      >
        {VERSION}
      </a>
    </div>
  );
}

function NavItem({
  item,
  alignRight = false,
}: {
  item: (typeof NAV_ITEMS)[0];
  alignRight?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const textCn = useTextStyles();

  if (!item.items) {
    return (
      <li className="ktl-horizontal-menu-module_menu-item-wrap_1iQfh">
        <a
          href={item.url}
          className={cn(
            "ktl-horizontal-menu-module_menu-item_1GBle",
            textCn("rs-text-2"),
          )}
        >
          {item.title}
        </a>
      </li>
    );
  }

  return (
    <li
      className="ktl-horizontal-menu-module_menu-item-wrap_1iQfh"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setTimeout(() => setOpen(false), 250)}
    >
      <span
        className={cn(
          "ktl-horizontal-menu-module_menu-item_1GBle",
          textCn("rs-text-2"),
          { "ktl-horizontal-menu-module_expanded_3BdiD": open },
        )}
      >
        {item.title}
      </span>
      <ul
        className={cn(
          "ktl-horizontal-menu-module_dropdown-menu_YC90K",
          textCn("rs-text-2"),
          {
            "ktl-horizontal-menu-module_dropdown-menu-expanded_3s42o": open,
            "ktl-horizontal-menu-module_dropdown-menu-align-right_2u7Cp":
              alignRight,
          },
        )}
      >
        {item.items.map((child) => (
          <li key={child.title}>
            <a
              href={child.url}
              className="ktl-horizontal-menu-module_dropdown-menu-item_3DA-o"
            >
              {child.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  return (
    <ThemeProvider theme="dark">
      <header className="ktl-header-module_header-menu_3q6JB ktl-header-module_border_3kxUB">
        <KotlinLogo />
        <nav className="ktl-horizontal-menu-module_nav_19XiR ktl-horizontal-menu-module_dark-theme_3x53H">
          <ul className="ktl-horizontal-menu-module_menu-list_3f1cp">
            {NAV_ITEMS.map((item, index) => (
              <NavItem
                key={item.title}
                item={item}
                alignRight={index === NAV_ITEMS.length - 1}
              />
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="ktl-search-button_button_2B8BX"
          aria-label="Search"
          onClick={() => {}}
        >
          {/* <SearchIcon /> */}
        </button>
      </header>
    </ThemeProvider>
  );
}
