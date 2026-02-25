import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@rescui/ui-contexts";
import "@jetbrains/kotlin-web-site-ui/dist/footer.css";

const FooterWrapper = (props: any) => {
  const [Footer, setFooter] = useState<React.ComponentType<any> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    import("@jetbrains/kotlin-web-site-ui/dist/footer.js")
      .then((mod) => {
        setFooter(() => mod.default || mod);
      })
      .catch((err) => {
        console.error("Failed to load Footer dynamically:", err);
      });
  }, []);

  if (!mounted || !Footer) return null;

  return (
    <ThemeProvider theme="dark">
      <Footer {...props} />
    </ThemeProvider>
  );
};

export default FooterWrapper;
