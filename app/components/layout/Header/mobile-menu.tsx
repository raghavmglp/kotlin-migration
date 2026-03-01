import { useTextStyles } from "@rescui/typography";

import { NAV_ITEMS } from "./nav-items";

export function MobileMenu({ isOpen }: { isOpen: boolean }) {
  const textCn = useTextStyles();

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 56,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#1c1d1f",
        zIndex: 999,
        overflowY: "auto",
        padding: "16px 0",
      }}
    >
      {NAV_ITEMS.map((item) => (
        <div
          key={item.title}
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {!item.items ? (
            <a
              href={item.url}
              className={textCn("rs-text-2")}
              style={{
                display: "block",
                padding: "14px 24px",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {item.title}
            </a>
          ) : (
            <div>
              <div
                className={textCn("rs-text-2")}
                style={{
                  padding: "14px 24px",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {item.title}
              </div>
              {item.items.map((child) => (
                <a
                  key={child.title}
                  href={child.url}
                  className={textCn("rs-text-2")}
                  style={{
                    display: "block",
                    padding: "10px 24px 10px 36px",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  {child.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
