import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import Services from "@/components/Services";
import PortfolioSection from "@/components/PortfolioSection";
import WorkflowSection from "@/components/WorkflowSection";
import PricingSection from "@/components/PricingSection";
import JourneySection from "@/components/JourneySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <Services />
      <PortfolioSection />
      <WorkflowSection />
      <PricingSection />
      <JourneySection />
    </>
  );
}