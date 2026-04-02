import { Header } from "@/components/Header";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
