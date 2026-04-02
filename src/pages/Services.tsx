import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
