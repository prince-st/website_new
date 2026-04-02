import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
