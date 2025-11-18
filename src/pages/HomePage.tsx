import { ScrollingBanner } from "../components/home/ScrollingBanner";
import { ClientLogos } from "../components/home/ClientLogos";
import { HomeSection1 } from "../components/home/HomeSection1";
import { AIInsightsSection } from "../components/home/AIInsightsSection";
import { HomeSection3 } from "../components/home/HomeSection3";

export function HomePage() {
  return (
    <div>
      <ScrollingBanner />
      <ClientLogos />
      <HomeSection1 />
      <AIInsightsSection />
      <HomeSection3 />
    </div>
  );
}
