import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Clock, Sparkles, LucideIcon } from "lucide-react";
import { useACFPage, WP_PAGE_IDS } from "@/hooks/useWordPressData";

const iconMap: Record<string, LucideIcon> = {
  star: Star,
  award: Award,
  clock: Clock,
};

const defaultBadges = [
  { icon: Star, label: "Top Rated", value: "on Upwork" },
  { icon: Award, label: "10+ Years", value: "Experience" },
  { icon: Clock, label: "100% Client", value: "Satisfaction" },
];

export function HeroSection() {
  // ACF fields expected (on About page 170 or a dedicated Hero page):
  // hero_badge_text, hero_heading_line1, hero_heading_highlight, hero_heading_line2
  // hero_subheading, hero_cta_label, hero_cta_url, hero_image (url)
  // hero_trust_badges (repeater: icon, label, value)
  // hero_stats_value, hero_stats_label
  const { data } = useACFPage(WP_PAGE_IDS.ABOUT);

  const badgeText: string = data?.hero_badge_text || "Available for Projects";
  const headingLine1: string = data?.hero_heading_line1 || "Scaling Business with,";
  const headingHighlight: string = data?.hero_heading_highlight || "AI Workflow,";
  const headingLine2: string = data?.hero_heading_line2 || "Development & Marketing Growth";
  const subheading: string = data?.hero_subheading || "Helping brands accelerate growth through AI-powered automation, high-performance development, and data-driven marketing strategies that deliver measurable results.";
  const ctaLabel: string = data?.hero_cta_label || "Book a Free Consultation";
  const ctaUrl: string = data?.hero_cta_url || "#contact";
  const heroImage: string = data?.hero_image?.url || data?.hero_image || "/hero.png";
  const statsValue: string = data?.hero_stats_value || "1,350+";
  const statsLabel: string = data?.hero_stats_label || "Projects Delivered";

  const trustBadges =
    Array.isArray(data?.hero_trust_badges) && data.hero_trust_badges.length > 0
      ? data.hero_trust_badges.map((b: any) => ({
          icon: iconMap[b.icon?.toLowerCase()] || Star,
          label: b.label,
          value: b.value,
        }))
      : defaultBadges;
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 max-[350px]:pt-20 overflow-hidden bg-white">
      {/* Clean Professional Background - NineHertz Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white" />
      
      {/* Minimal Professional Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-16 h-16 opacity-40 animate-float" style={{ animationDuration: '8s' }}>
          <div className="w-full h-full bg-gradient-to-br from-primary/60 to-accent/60 rounded-lg transform rotate-45" />
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 opacity-30 animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-accent/50 to-primary/50 rounded-xl transform -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-18 h-18 opacity-35 animate-float" style={{ animationDuration: '12s', animationDelay: '4s' }}>
          <div className="w-full h-full bg-gradient-to-br from-primary/55 to-accent/55 rounded-lg transform rotate-12" />
        </div>
      </div>

      {/* Ultra Subtle Overlay */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 -left-4 w-[200px] h-[200px] bg-primary/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-[200px] h-[200px] bg-accent/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Minimal Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="clean-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clean-grid)" />
        </svg>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlay - removed */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-[350px]:px-3 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 max-[350px]:gap-6 items-center">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 animate-fade-in-up">
            
            {/* Enhanced Floating Badge with 3D Design */}
            <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary animate-pulse shadow-[0_0_12px_hsl(var(--primary))]" />
                  <div className="absolute inset-0 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary animate-ping" />
                </div>
                <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]" style={{ backgroundSize: '200% auto' }}>
                  {badgeText}
                </span>
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] max-[350px]:text-xl">
                <span className="block text-foreground/90">
                  {headingLine1}{" "}
                  <span className="relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-400 to-primary blur-xl opacity-0 animate-pulse" style={{ animationDuration: '3s' }} />
                    <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                      {headingHighlight}
                    </span>
                  </span>
                </span>
                <span className="block mt-2 text-foreground/90">{headingLine2}</span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="relative pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-primary/50">
              <p className="text-base sm:text-lg lg:text-xl text-black max-w-xl leading-relaxed max-[350px]:text-sm font-medium">
                {subheading}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 w-full">
              <Button variant="hero" size="xl" asChild className="group relative overflow-hidden max-[350px]:text-sm shadow-2xl hover:shadow-primary/50">
                <a href={ctaUrl} className="relative z-10">
                  <span className="relative z-10">{ctaLabel}</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - 5 columns with Unique Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-[600px]">
              
              {/* Decorative Frame Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-primary/30 rounded-br-3xl" />
              
              {/* Glowing Orbs */}
              <div className="absolute top-1/4 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute bottom-1/4 -right-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              
              {/* Image Container with Unique Border */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
                <img 
                  src={heroImage}
                  alt="Digital Growth Partner Illustration" 
                  className="relative z-10 w-full h-auto object-contain animate-float"
                  style={{ 
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))',
                    animationDuration: '6s'
                  }}
                />
              </div>

              {/* Trust Badges - Moved Below Image with 3D Design */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {trustBadges.map((badge, idx) => (
                  <div 
                    key={badge.label} 
                    className="group relative"
                    style={{ 
                      animationDelay: `${idx * 150}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    {/* 3D Card with Depth */}
                    <div className="relative p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border-2 border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform-gpu overflow-hidden">
                      
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Glowing Orb Effect */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative z-10 text-center space-y-2 sm:space-y-3">
                        {/* Icon with 3D Effect */}
                        <div className="relative mx-auto w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                          <div className="relative w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/20">
                            <badge.icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-primary drop-shadow-lg" />
                          </div>
                        </div>
                        
                        {/* Text Content */}
                        <div>
                          <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5 sm:mb-1 uppercase tracking-wider font-semibold">{badge.label}</p>
                          <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">{badge.value}</p>
                        </div>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Corner Decoration */}
                      <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Outer Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl -z-10" />
                  </div>
                ))}
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -top-8 -left-8 bg-card/90 backdrop-blur-xl border-2 border-border rounded-2xl p-4 shadow-2xl animate-float hidden xl:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-xl blur-md" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{statsValue}</p>
                    <p className="text-xs text-muted-foreground">{statsLabel}</p>
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
