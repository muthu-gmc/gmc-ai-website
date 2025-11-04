import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PerformanceStory } from "./components/PerformanceStory";
import { WhyRLMatters } from "./components/WhyRLMatters";
import { Impact } from "./components/Impact";
import { ImplementationStrategy } from "./components/ImplementationStrategy";
import { StrategicRoadmap } from "./components/StrategicRoadmap";
import { UseCases } from "./components/UseCases";
import { Challenges } from "./components/Challenges";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ContactPage } from "./components/Contact";
import { AboutUs } from "./components/AboutUs";
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PerformanceStory />
      <WhyRLMatters />
      <Impact />
      <ImplementationStrategy />
      <StrategicRoadmap />
      <UseCases />
      <Challenges />
      <CTASection />
      <ContactPage />
      <AboutUs />
      <Footer />
    </div>
  );
}