import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { useWPPage, WP_PAGE_IDS, getImageUrl } from "@/hooks/useWordPressData";

export function HeroSection() {
  const { data } = useWPPage(WP_PAGE_IDS.INDEX);

  // Exact ACF field names from WordPress (page 170):
  // badge.text
  // heading.line1, heading.highlight, heading.line2
  // description (subheading)
  // cta.text, cta.link
  // hero_image (WP image object)
  // floating_stat.value, floating_stat.label

  const badgeText: string = data?.badge?.text || "Available for Projects";
  const line1: string = data?.heading?.line1 || "Scaling Business with,";
  const highlight: string = data?.heading?.highlight || "AI Workflow,";
  const line2: string = data?.heading?.line2 || "Development & Marketing Growth";
  const subheading: string = data?.description || "Helping brands accelerate growth through AI-powered automation, high-performance development, and data-driven marketing strategies that deliver measurable results.";
  const ctaText: string = data?.cta?.text || "Book a Free Consultation";
  const ctaLink: string = data?.cta?.link?.replace("http://localhost:8080", "") || "#contact";
  const heroImage: string = getImageUrl(data?.hero_image) || "/hero.png";
  const statValue: string = data?.floating_stat?.value || "1,350+";
  const statLabel: string = data?.floating_stat?.label || "Projects Delivered";

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 max-[350px]:pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white" />

      {/* Minimal floating shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-16 h-16 opacity-40 animate-float" style={{ animationDuration: "8s" }}>
          <div className="w-full h-full bg-gradient-to-br from-primary/60 to-accent/60 rounded-lg transform rotate-45" />
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 opacity-30 animate-float" style={{ animationDuration: "10s", animationDelay: "2s" }}>
          <div className="w-full h-full bg-gradient-to-br from-accent/50 to-primary/50 rounded-xl transform -rotate-12" />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{ left: `${(i * 8) % 100}%`, top: `${(i * 13) % 100}%`, animationDelay: `${i * 0.5}s`, animationDuration: `${5 + (i % 5) * 2}s` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-[350px]:px-3 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 animate-fade-in-up">

            {/* Badge */}
            <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary animate-pulse shadow-[0_0_12px_hsl(var(--primary))]" />
                  <div className="absolute inset-0 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary animate-ping" />
                </div>
                <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                  {badgeText}
                </span>
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform" />
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] max-[350px]:text-xl">
                <span className="block text-foreground/90">
                  {line1}{" "}
                  <span className="relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-400 to-primary blur-xl opacity-0 animate-pulse" style={{ animationDuration: "3s" }} />
                    <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                      {highlight}
                    </span>
                  </span>
                </span>
                <span className="block mt-2 text-foreground/90">{line2}</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="relative pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-primary/50">
              <p className="text-base sm:text-lg lg:text-xl text-black max-w-xl leading-relaxed font-medium">
                {subheading}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 w-full">
              <Button variant="hero" size="xl" asChild className="group relative overflow-hidden shadow-2xl hover:shadow-primary/50">
                <a href={ctaLink} className="relative z-10">
                  <span className="relative z-10">{ctaText}</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-[600px]">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-primary/30 rounded-br-3xl" />
              <div className="absolute top-1/4 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "3s" }} />
              <div className="absolute bottom-1/4 -right-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />

              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
                <img
                  src={heroImage}
                  alt="Digital Growth Partner"
                  className="relative z-10 w-full h-auto object-contain animate-float"
                  style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))", animationDuration: "6s" }}
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -top-8 -left-8 bg-card/90 backdrop-blur-xl border-2 border-border rounded-2xl p-4 shadow-2xl animate-float hidden xl:block" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-xl blur-md" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{statValue}</p>
                    <p className="text-xs text-muted-foreground">{statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
