import { ThemeProvider } from "@rescui/ui-contexts";
import { HeaderSection } from "./header-section";
import { LatestFromKotlinSection } from "~/components/layout/sections/LastestFromKotlin";
import { WhyKotlinSection } from "~/components/layout/sections/WhyKotlin";
import { UsageSection } from "~/components/layout/sections/Usage";
import { StartSection } from "~/components/layout/sections/Start";
import Footer from "~/components/layout/footer";

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
