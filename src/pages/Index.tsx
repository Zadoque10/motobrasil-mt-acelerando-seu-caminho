import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RentalSection } from "@/components/RentalSection";
import { MechanicsSection } from "@/components/MechanicsSection";
import { PartsSection } from "@/components/PartsSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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
        <RentalSection />
        <MechanicsSection />
        <PartsSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
