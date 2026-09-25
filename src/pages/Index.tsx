import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MechanicsSection } from "@/components/MechanicsSection";
import { PartsSection } from "@/components/PartsSection";
import { RentalSection } from "@/components/RentalSection";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <MechanicsSection />
        <PartsSection />
        <RentalSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
