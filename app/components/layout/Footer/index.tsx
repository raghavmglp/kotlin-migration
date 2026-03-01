import "@jetbrains/kotlin-web-site-ui/dist/footer.css";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";

import { navLinks, socialLinks } from "./footer-data";

function FooterContent() {
  const textCn = useTextStyles();

  return (
    <footer className="ktl-footer-module_footer_3ENKj ktl-footer-module_footer-dark-theme_1lVqh">
      <div className="ktl-footer-module_social-list-area_3BpCr">
        <div
          className={cn(
            textCn("rs-h4"),
            "ktl-footer-module_social-list-title_2m4tY",
          )}
        >
          Stay in touch:
        </div>
        <div className="ktl-social-list-module_social-list_m5d4R">
          {socialLinks.map(({ href, title, Icon }) => (
            <a
              key={href}
              target="_blank"
              rel="noreferrer"
              className="ktl-social-item-module_social-item_LDEev ktl-social-item-module_social-item-dark-theme_ZhWgN"
              href={href}
              title={title}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <nav className="ktl-footer-module_nav-list-area_11ftH">
        <ul className="ktl-nav-list-module_nav-list_2YPZ6">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="ktl-nav-item-module_nav-item_526AM ktl-nav-item-module_nav-item-dark-theme__ymom"
            >
              <a
                href={link.href}
                title={link.title}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="rs-text-2 rs-text-2_theme_dark rs-link rs-link_hardness_average rs-link_mode_nude rs-link_theme_dark"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rs-text-3 rs-text-3_hardness_pale rs-text-3_theme_dark ktl-footer-module_text-area_1SpnS">
        <div className="ktl-footer-module_copyright_2uBX0">
          Kotlin™ is&nbsp;protected under the{" "}
          <a
            className="rs-link rs-link_hardness_pale rs-link_mode_nude rs-link_theme_dark ktl-footer-module_underlined-link_Pu1QP"
            href="https://kotlinlang.org/foundation/kotlin-foundation.html"
          >
            Kotlin&nbsp;Foundation
          </a>{" "}
          and licensed under the{" "}
          <a
            className="rs-link rs-link_hardness_pale rs-link_mode_nude rs-link_theme_dark ktl-footer-module_underlined-link_Pu1QP"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JetBrains/kotlin-web-site/blob/master/LICENSE"
          >
            Apache 2&nbsp;license
          </a>
          .
        </div>{" "}
        <div className="ktl-footer-module_motto_22kgv">
          Supported and developed by&nbsp;
          <a
            className="rs-link rs-link_hardness_pale rs-link_mode_nude rs-link_theme_dark ktl-footer-module_underlined-link_Pu1QP"
            href="https://www.jetbrains.com/"
            target="_blank"
            rel="noreferrer"
          >
            JetBrains
          </a>
        </div>
      </div>

      <a
        href="https://jetbrains.com"
        target="_blank"
        rel="noreferrer"
        className="ktl-footer-module_logo-area_24Dg6 ktl-logo-module_link_3Bppl"
      >
        <img src="/images/jetbrains-logo.svg" alt="JetBrains" />
      </a>
    </footer>
  );
}

export default function Footer() {
  return (
    <ThemeProvider theme="dark">
      <FooterContent />
    </ThemeProvider>
  );
}
