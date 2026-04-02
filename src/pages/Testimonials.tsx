import { Header } from "@/components/Header";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
