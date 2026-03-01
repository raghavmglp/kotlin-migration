import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "~/components/layout/sections/HeaderSection";
import { LatestFromKotlinSection } from "~/components/layout/sections/LatestFromKotlin";
import { StartSection } from "~/components/layout/sections/Start";
import { UsageSection } from "~/components/layout/sections/Usage";
import { WhyKotlinSection } from "~/components/layout/sections/WhyKotlin";

export default function Index() {
  return (
    <ThemeProvider theme="dark">
      <div className="overview-page">
        <HeaderSection />
        <LatestFromKotlinSection />
        <WhyKotlinSection />
        <UsageSection />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
