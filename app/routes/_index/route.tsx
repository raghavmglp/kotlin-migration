// app/routes/_index/route.tsx
import { LatestFromKotlinSection } from "~/components/layout/sections/LastestFromKotlin";
import Footer from "./footer";
import { HeaderSection } from "./header-section";

export default function Index() {
  return (
    <main>
      <div className="overview-page">
        <HeaderSection />
        {/* Other sections that also need the dark background */}
      </div>
      <LatestFromKotlinSection />

      <Footer />
      {/* We will add the other sections here later */}
    </main>
  );
}
