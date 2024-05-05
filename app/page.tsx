import Hero from "@/components/HeroSection";
import CreonPass from "@/components/PassSection"
import Profit from "@/components/ProfitSection";
import ComingSoon from "@/components/ComingSection";
import AiBenefitsSection from "@/components/AiBenefitsSection";
import Mission from "@/components/MissionSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CreonPass />
      <Profit />
      <Mission/>
      <ComingSoon />
      <AiBenefitsSection />
    </div>
  );
}