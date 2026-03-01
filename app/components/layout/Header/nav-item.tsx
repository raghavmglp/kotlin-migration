import { useState } from "react";

import { useTextStyles } from "@rescui/typography";
import cn from "classnames";

import { NAV_ITEMS } from "./nav-items";

export function NavItem({
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
