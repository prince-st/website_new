import { useState } from "react";
import { Search, FileText, Palette, Bot, TestTube, Rocket, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discuss with the client.",
    description: "We start with a deep-dive conversation — virtual or in-person — to understand your vision, pain points, and what success looks like for your business.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Business Operations Understanding",
    description: "Before building anything, I map your current workflows, tech stack, and operational gaps to identify exactly where technology can create the biggest impact.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Strategy & Roadmap",
    description: "A clear, prioritised plan is defined — covering objectives, timelines, tech choices, and the AI or automation opportunities specific to your business.",
  },
  {
    icon: Bot,
    number: "04",
    title: "Planning & Wireframing",
    description: "Detailed wireframes, technical specifications, and architecture blueprints are prepared so every stakeholder is aligned before a single line of code is written.",
  },
  {
    icon: TestTube,
    number: "05",
    title: "Design, Development",
    description: "Clean, performant, scalable builds — whether it's a Shopify store, AI workflow, or full-stack platform — crafted with precision and attention to detail.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "AI Integration & Automation",
    description: "Intelligent systems are embedded into your operations — from Agentic RAG pipelines to n8n workflows — turning manual processes into automated growth engines.",
  },
];

export function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-10 sm:py-12 lg:py-16 bg-slate-100 relative overflow-hidden">
      {/* Advanced 3D Background */}
      {/* Clean NineHertz Style Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50/20 to-slate-100" />
      
      {/* Multiple Floating Orbs */}
      {/* Minimal Professional Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-3">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }} />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="process-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24 animate-fade-in-up">
          {/* 3D Badge Button */}
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-4 sm:mb-6">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative flex items-center gap-3">
              <Workflow className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                My Process
              </span>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
            </div>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            How I Turn Ideas into{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
              <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                Reality
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A proven, streamlined process that ensures quality delivery and complete transparency.
          </p>
        </div>

        {/* Desktop Wave Layout with Enhanced 3D */}
        <div className="hidden lg:block relative max-w-[1400px] mx-auto h-[240px] lg:h-[260px] xl:h-[280px] mt-20 mb-32 xl:mb-20">
          {/* Enhanced SVG Wave Line */}
          <svg 
            className="absolute inset-0 w-full h-full overflow-visible" 
            viewBox="0 0 1400 300"
            preserveAspectRatio="none"
          >
             <defs>
               <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                 <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                 <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
               </linearGradient>
               <filter id="glow">
                 <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                 <feMerge>
                   <feMergeNode in="coloredBlur"/>
                   <feMergeNode in="SourceGraphic"/>
                 </feMerge>
               </filter>
             </defs>
             {/* Base Path with Glow */}
             <path 
               d="M 100 50 C 200 50, 200 250, 300 250 S 400 50, 500 50 S 600 250, 700 250 S 800 50, 900 50 S 1000 250, 1100 250 S 1200 50, 1300 50"
               fill="none"
               stroke="hsl(var(--border))"
               strokeWidth="3"
               strokeDasharray="10 10"
               className="opacity-30"
             />
             {/* Animated Path with Enhanced Glow */}
             <path 
               d="M 100 50 C 200 50, 200 250, 300 250 S 400 50, 500 50 S 600 250, 700 250 S 800 50, 900 50 S 1000 250, 1100 250 S 1200 50, 1300 50"
               fill="none"
               stroke="url(#gradient-line)"
               strokeWidth="3"
               filter="url(#glow)"
               className="animate-stroke"
             />
          </svg>

          {/* Steps */}
          <div className="relative z-10 w-full h-full">
            {steps.map((step, index) => {
               // Calculate positions
               // Total width 1400
               // Numbers at: 100, 300, 500, 700, 900, 1100
               
               const isEven = index % 2 === 0;
               
               // Number Circle Positions (Peaks & Troughs)
              const numX = 100 + index * 200;
              const numY = isEven ? 50 : 250;
              
              // Dot & Text Positions (Exact Midpoints on the curve)
              // The curve is symmetric, so the midpoint between peaks/troughs is exactly at Y=150
              const dotX = numX + 100;
              const dotY = 150;
              
              const numLeft = `${(numX / 1400) * 100}%`;
              const numTop = `${(numY / 300) * 100}%`;
              
              const dotLeftPercent = (dotX / 1400) * 100;
              const dotLeft = `${dotLeftPercent}%`;
              // Add 8% to the text position as requested
              const textLeft = `${dotLeftPercent + 8}%`;
              const dotTop = `${(dotY / 300) * 100}%`;

              return (
                <div key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                   {/* Enhanced Number Circle with 3D Effect */}
                   <div 
                     className={cn(
                       "absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-20 transition-all duration-500 bg-card transform-gpu group",
                       hoveredIndex === index 
                         ? "w-14 sm:w-16 lg:w-18 xl:w-20 h-14 sm:h-16 lg:h-18 xl:h-20 border-[3px] border-primary scale-125 shadow-[0_0_50px_hsl(var(--primary)/0.8)]" 
                         : "w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 border-[3px] border-border hover:border-primary/50 shadow-xl"
                     )}
                     style={{ 
                       left: numLeft, 
                       top: numTop,
                       transform: hoveredIndex === index ? 'translate(-50%, -50%) scale(1.25) translateZ(30px)' : 'translate(-50%, -50%)',
                       boxShadow: hoveredIndex === index 
                         ? '0 0 50px hsl(var(--primary)/0.8), 0 15px 40px rgba(0,0,0,0.4), inset 0 0 20px hsl(var(--primary)/0.2)' 
                         : '0 8px 20px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.1)'
                     }}
                   >
                      {/* Inner Glow Ring */}
                      <div className={cn(
                        "absolute inset-0 rounded-full transition-opacity duration-500",
                        hoveredIndex === index ? "opacity-100 bg-gradient-to-br from-primary/20 to-transparent" : "opacity-0"
                      )} />
                      
                      {/* Orbiting Dots */}
                      {hoveredIndex === index && (
                        <>
                          <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
                            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_8px_hsl(var(--primary))]" />
                          </div>
                          <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
                            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 shadow-[0_0_8px_hsl(var(--cyan-400))]" />
                          </div>
                        </>
                      )}

                      <span className={cn(
                        "relative font-heading font-bold transition-all duration-300",
                        "text-base sm:text-lg lg:text-xl",
                        hoveredIndex === index ? "text-primary drop-shadow-[0_0_12px_hsl(var(--primary)/1)] scale-110" : "text-muted-foreground"
                      )}>{step.number}</span>
                   </div>

                   {/* Enhanced Small Dot on the line */}
                   <div 
                     className={cn(
                       "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 z-10",
                       hoveredIndex === index 
                         ? "w-4 h-4 bg-primary border-primary scale-150 shadow-[0_0_20px_hsl(var(--primary))]" 
                         : "w-3 h-3 bg-card border-primary/50 shadow-lg"
                     )}
                     style={{ left: dotLeft, top: dotTop }} 
                   >
                     {/* Pulse Ring */}
                     {hoveredIndex === index && (
                       <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                     )}
                   </div>

                   {/* Enhanced Text Content */}
                   <div 
                     className={cn(
                       "absolute left-0 flex flex-col items-center justify-center text-center transition-all duration-500 group",
                       "w-40 sm:w-44 lg:w-48",
                       hoveredIndex === index ? "scale-110 z-30" : "z-20"
                     )}
                     style={{ 
                       left: textLeft, 
                       top: dotTop,
                       transform: isEven ? 'translate(-50%, -100%) translateY(-24px)' : 'translate(-50%, 24px)'
                     }}
                   >
                      {/* Background Card with Glassmorphism */}
                      <div className={cn(
                        "absolute inset-0 -m-3 rounded-2xl backdrop-blur-xl border-2 transition-all duration-500",
                        hoveredIndex === index 
                          ? "bg-card/95 border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.4)]" 
                          : "bg-card/80 border-border/30 shadow-lg opacity-0 group-hover:opacity-100"
                      )} />
                      
                      {/* Glow Effect */}
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 -m-3 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
                      )}

                      <h3 className={cn(
                        "relative font-bold mb-1 transition-all duration-300",
                        "text-sm sm:text-base",
                        hoveredIndex === index ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : "text-foreground"
                      )}>
                        {step.title}
                      </h3>
                      <p className="relative text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                   </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Grid with Enhanced 3D Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card border-2 border-border transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.6)] hover:-translate-y-3 hover:scale-[1.03] transform-gpu overflow-hidden"
              style={{
                boxShadow: '0 15px 40px -10px rgba(0,0,0,0.4)'
              }}
            >
              {/* Multiple 3D Depth Layers */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10" />
              
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Enhanced Step Number Badge with Multiple Glows */}
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] group-hover:scale-125 transition-all duration-500 border-2 border-primary/30">
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                
                {/* Orbiting Dots */}
                <div className="absolute inset-0 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '3s' }}>
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 shadow-[0_0_6px_white]" />
                </div>
                
                <span className="relative font-heading font-bold text-primary-foreground drop-shadow-lg text-sm sm:text-base">
                  {step.number}
                </span>
              </div>
              
              {/* Enhanced Icon with 3D Transform */}
              <div className="flex justify-end mb-3 sm:mb-4">
                <div className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-cyan-500 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-xl overflow-hidden">
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                  
                  <step.icon className="relative w-6 sm:w-7 h-6 sm:h-7 text-primary group-hover:text-primary-foreground transition-all duration-500 drop-shadow-lg" />
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative font-heading text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-sm">
                {step.title}
              </h3>
              <p className="relative text-sm sm:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Enhanced Glassmorphism Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Decorations */}
              <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
