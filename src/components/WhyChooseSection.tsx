import { BarChart3, Layers, MessageSquare, Clock, Handshake, Globe2, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "AI & Growth Expert",
    description: "Combining AI, marketing, and development to create intelligent systems that scale businesses faster.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Fast, Scalable Execution",
    description: "Efficient workflows powered by automation to deliver faster without compromising quality.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Strategic Partnership",
    description: "More than a service provider—I work as a long-term growth partner invested in your success.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Disciplined project management ensures deadlines are met without sacrificing quality.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Handshake,
    title: "Results-Driven",
    description: "Focused on delivering measurable outcomes through data-backed strategies, not just outputs.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Globe2,
    title: "Global Experience",
    description: "Proven track record working with clients across 40+ countries and diverse industries.",
    color: "from-violet-500 to-purple-500",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Advanced 3D Background */}
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Clean Professional Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '16s' }} />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-accent/12 to-primary/12 rounded-full blur-3xl animate-float" style={{ animationDuration: '20s', animationDelay: '4s' }} />
      </div>

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons-why" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <path d="M25 0 L50 14.43 L50 28.87 L25 43.3 L0 28.87 L0 14.43 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons-why)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left Content - Enhanced */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            {/* Enhanced 3D Button */}
            <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
              {/* Multiple Animated Glow Layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative flex items-center gap-2 sm:gap-3">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                  Why Choose Me
                </span>
              </div>

              {/* Enhanced Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
              </div>
            </div>

            {/* Enhanced Headline */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              What Sets Me{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                  Apart
                </span>
              </span>
            </h2>

            {/* Enhanced Description */}
            <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-card/50 to-transparent border border-border/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-primary/5 rounded-full blur-2xl" />
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed relative z-10">
                I don’t just deliver projects—I build scalable growth systems. 
                As the founder of StoreTransform with over a decade of experience and 
                1,350+ successful projects delivered, I combine AI, technology, and 
                business strategy to transform complex challenges into measurable growth. 
                My approach goes beyond execution—aligning digital solutions with real 
                business outcomes to help brands scale faster in an AI-first world.
              </p>
            </div>

            {/* Enhanced Stats with 3D Cards */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">
              {[
                { value: "40+", label: "Countries Served", color: "from-blue-500 to-cyan-500" },
                { value: "5★", label: "Client Rating", color: "from-purple-500 to-pink-500" },
                { value: "98%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" },
              ].map((stat, idx) => (
                <div key={stat.label} className="group relative flex-1">
                  <div className="relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glow Orb */}
                    <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="relative z-10 text-center">
                      <p className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider">{stat.label}</p>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>

                  {/* Outer Glow - Multiple Layers */}
                  <div className={`absolute -inset-0.5 sm:-inset-1 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500 rounded-xl sm:rounded-2xl -z-10`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border-2 border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                  
                  {/* Multiple Animated Background Layers */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating Orb with Pulse */}
                  <div className="absolute -top-8 sm:-top-10 lg:-top-12 -right-8 sm:-right-10 lg:-right-12 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 animate-pulse" style={{ animationDuration: '4s' }} />
                  
                  <div className="relative z-10 space-y-2 sm:space-y-3">
                    {/* Enhanced 3D Icon */}
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12">
                      {/* Multiple Glow Layers */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl blur-xl opacity-40 group-hover:opacity-100 transition-opacity animate-pulse`} style={{ animationDuration: '3s' }} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                      
                      <div className={`relative w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                        <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white drop-shadow-lg" />
                      </div>
                      
                      {/* Dual Orbiting Dots */}
                      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
                        <div className="absolute top-0 left-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full -translate-x-1/2 shadow-lg shadow-primary/50" />
                      </div>
                      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
                        <div className="absolute bottom-0 left-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 shadow-lg shadow-cyan-400/50" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Corner Decoration */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-xl sm:rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse" />
                    <div className="absolute top-0 right-0 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-ping" />
                  </div>

                  {/* Bottom Accent with Gradient */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Side Accent */}
                  <div className={`absolute top-0 bottom-0 left-0 w-1 sm:w-1.5 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                {/* Enhanced Outer Glow - Multiple Layers */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
                <div className={`absolute -inset-2 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 rounded-3xl -z-20`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
