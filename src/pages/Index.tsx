import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { UpworkSection } from "@/components/UpworkSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <UpworkSection />
        <ProcessSection />
        {/* <PortfolioSection /> */}
        {/* <TestimonialsSection /> */}
        <TechStackSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
