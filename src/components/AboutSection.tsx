import { Button } from "@/components/ui/button";
import { Rocket, Gauge, Boxes, BadgeInfo, TrendingUp, Users, Zap, ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Rocket,
      title: "AI-First Approach",
      description: "Leveraging AI-powered workflows, automation, and intelligent systems to streamline operations, reduce manual effort, and accelerate business growth.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Gauge,
      title: "ROI-Focused",
      description: "Every solution is built with a clear focus on performance, ensuring measurable impact, higher conversions, and maximum return on investment.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Boxes,
      title: "End-to-End Execution",
      description: "From strategy and UX to development, automation, and growth—complete ownership to ensure seamless execution and consistent results.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const industries = ["Retail & Ecommerce", "SaaS Platforms", "D2C", "B2B", "Startups", "Agencies", "Healthcare"];

  const stats = [
    { icon: TrendingUp, value: "1,350+", label: "Projects", color: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "10+", label: " Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: Zap, value: "Trusted", label: "by Brands", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 bg-slate-100 relative overflow-hidden">
      
      {/* Clean NineHertz Style Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50/20 to-slate-100" />
      
      {/* Minimal Professional Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-3">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }} />
      </div>

      {/* Clean Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="about-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Enhanced 3D Effect */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl mb-6 sm:mb-8 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                About Me
              </span>
              <BadgeInfo className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left: Content with 3D Cards */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            
            {/* Headline with 3D Accent */}
            <div className="relative pl-6 sm:pl-8 lg:pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-primary via-cyan-400 to-primary rounded-full shadow-lg shadow-primary/50" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-tight">
                Transforming Business with{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
                  <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                    Modern Digital Era
                  </span>
                </span>
              </h2>
            </div>

            {/* Content Cards with 3D Depth */}
            <div className="space-y-6">
              <div className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                {/* 3D Corner Decoration */}
                <div className="absolute top-0 left-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-br-[100px]" />
                <div className="absolute -top-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <p className="text-muted-foreground leading-relaxed relative z-10 text-base sm:text-lg">
                  I’m Bharat Gunani, founder of StoreTransform and a digital commerce strategist with over a decade of experience helping businesses scale through technology. I specialize in bridging the gap between business goals and technical execution—leveraging AI-driven solutions to deliver real, measurable growth.
                </p>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                {/* 3D Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-[100px]" />
                <div className="absolute -bottom-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <p className="text-muted-foreground leading-relaxed relative z-10 text-base sm:text-lg">
                  With 1,350+ successful projects delivered across global markets, I bring a results-driven approach powered by AI, data, and high-performance development. From intelligent automation to advanced digital ecosystems, my focus is not just building platforms—but creating scalable growth systems that drive revenue, efficiency, and long-term success in an AI-first world.
                </p>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Industries with 3D Chips */}
            <div>
              <p className="text-sm font-bold text-muted-foreground mb-5 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Trusted Across Diverse Industries
              </p>
              <div className="flex flex-wrap gap-3">
                {industries.map((label, idx) => (
                  <span 
                    key={label} 
                    className="group relative px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-card border-2 border-border/50 text-sm font-bold text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-default overflow-hidden"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300 rounded-2xl -z-10" />
                    
                    {/* Icon Dot */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))] transition-all" />
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative z-10">{label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced CTAs with 3D Effect */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Button className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-2xl hover:shadow-primary/50 group relative overflow-hidden" asChild>
                <a href="https://www.upwork.com/freelancers/bharatgunani" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Hire Me on Upwork</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </a>
              </Button>
              <Button variant="outline" className="group relative h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base border-2 border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300 rounded-xl -z-10" />
                  
                  {/* Icon */}
                  <MessageSquare className="relative w-5 h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                  
                  <span className="relative z-10 group-hover:text-primary transition-colors">Let's Connect</span>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Features & Stats with Advanced 3D */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Feature Cards with Unique 3D Design */}
            {features.map((f, idx) => (
              <div 
                key={f.title} 
                className="group relative"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* 3D Floating Orb */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                    {/* 3D Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${f.color} rounded-xl sm:rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`relative w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                        <f.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white drop-shadow-lg" />
                      </div>
                      {/* Orbiting Dot */}
                      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
                        <div className="absolute top-0 left-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full -translate-x-1/2 shadow-lg shadow-primary/50" />
                      </div>
                    </div>
                    
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h4 className="font-heading text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{f.title}</h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Outer Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
              </div>
            ))}

            {/* Stats with Advanced 3D Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 pt-6 sm:pt-8">
              {stats.map((stat, idx) => (
                <div 
                  key={stat.label}
                  className="group relative"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card to-secondary/30 border-2 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl text-center overflow-hidden">
                    
                    {/* Background Icon */}
                    <div className="absolute -top-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <stat.icon className="w-32 h-32" />
                    </div>
                    
                    {/* Animated Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 space-y-2 sm:space-y-3">
                      {/* 3D Icon */}
                      <div className="relative mx-auto w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16">
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                        <div className={`relative w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                          <stat.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-bold">{stat.label}</div>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>

                  {/* Outer Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
