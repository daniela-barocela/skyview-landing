import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import ServicesSection from "@/components/ServicesSection";
import VideoGridSection from "@/components/VideoGridSection";
import DifferentialSection from "@/components/DifferentialSection";
import VisualBlock from "@/components/VisualBlock";
import ExtraServiceSection from "@/components/ExtraServiceSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ShowreelSection />
      <ServicesSection />
      <VideoGridSection />
      <DifferentialSection />
      <VisualBlock />
      <ExtraServiceSection />
      <CTASection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
