import { useState } from "react";

import "@jetbrains/kotlin-web-site-ui/dist/header.css";
import CloseIcon from "@rescui/icons/lib/close";
import HamburgerIcon from "@rescui/icons/lib/hamburger";
import SearchIcon from "@rescui/icons/lib/search";
import { ThemeProvider } from "@rescui/ui-contexts";

import "./header.scss";
import { KotlinLogo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavItem } from "./nav-item";
import { NAV_ITEMS } from "./nav-items";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <ThemeProvider theme="dark">
      <header
        className="ktl-header-module_header-menu_3q6JB ktl-header-module_border_3kxUB"
        style={{ width: "100%", boxSizing: "border-box" }}
      >
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
        >
          <SearchIcon size="m" theme="dark" />
        </button>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="header-mobile-toggle"
        >
          {mobileOpen ? (
            <CloseIcon size="m" theme="dark" />
          ) : (
            <HamburgerIcon size="m" theme="dark" />
          )}
        </button>

        <MobileMenu isOpen={mobileOpen} />
      </header>
    </ThemeProvider>
  );
}
