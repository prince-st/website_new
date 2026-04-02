import { Header } from "@/components/Header";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Process = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Process;
