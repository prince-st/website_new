import { Button } from "@/components/ui/button";
import {
  Monitor, Bot, Sparkles, Globe, ShoppingCart, Database,
  Search, Target, Share2, Code2, Smartphone, Palette, LucideIcon,
} from "lucide-react";
import { useACFPage, WP_PAGE_IDS } from "@/hooks/useWordPressData";

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor, bot: Bot, sparkles: Sparkles, globe: Globe,
  shoppingcart: ShoppingCart, shopping_cart: ShoppingCart,
  database: Database, search: Search, target: Target,
  share2: Share2, code2: Code2, smartphone: Smartphone, palette: Palette,
};

const defaultServices = [
  { icon: "monitor", title: "IT Consultation", description: "Scalable tech architecture and system planning for growth", color: "from-blue-500 to-cyan-500" },
  { icon: "bot", title: "AI Consultant", description: "Custom AI solutions, automation, and smart integrations", color: "from-purple-500 to-pink-500" },
  { icon: "sparkles", title: "AI-Powered Services", description: "Chatbots, workflows, and predictive insights", color: "from-amber-500 to-orange-500" },
  { icon: "globe", title: "WordPress Development", description: "Custom themes, performance optimization & security", color: "from-blue-600 to-indigo-600" },
  { icon: "shoppingcart", title: "Shopify Development", description: "Conversion-focused eCommerce store solutions", color: "from-green-500 to-emerald-500" },
  { icon: "database", title: "Magento Development", description: "Enterprise-grade eCommerce platforms", color: "from-orange-500 to-red-500" },
  { icon: "search", title: "SEO", description: "Technical SEO, on-page & content optimization", color: "from-teal-500 to-cyan-500" },
  { icon: "target", title: "PPC Advertising", description: "Google Ads & paid growth campaign management", color: "from-red-500 to-pink-500" },
  { icon: "share2", title: "Social Media Marketing", description: "Brand growth & engagement strategy", color: "from-pink-500 to-purple-500" },
  { icon: "code2", title: "Vibe Coding", description: "Rapid prototyping & modern coding workflows", color: "from-violet-500 to-purple-500" },
  { icon: "smartphone", title: "App Development", description: "Web & mobile applications built to scale", color: "from-cyan-500 to-blue-500" },
  { icon: "palette", title: "UI/UX Design", description: "User-centric, conversion-optimized design", color: "from-fuchsia-500 to-pink-500" },
];

export function ServicesSection() {
  // ACF fields expected:
  // section_badge, heading, subheading, cta_label, cta_url
  // services (repeater: icon, title, description, color)
  const { data } = useACFPage(WP_PAGE_IDS.ABOUT);

  const badge: string = data?.services_badge || "Services";
  const heading: string = data?.services_heading || "Comprehensive Digital Solutions";
  const subheading: string = data?.services_subheading || "From strategy to execution, I deliver end-to-end services that drive real business results.";
  const ctaLabel: string = data?.services_cta_label || "Let's Connect";
  const ctaUrl: string = data?.services_cta_url || "#contact";

  const rawServices = Array.isArray(data?.services) && data.services.length > 0 ? data.services : defaultServices;
  const services = rawServices.map((s: any) => ({
    icon: iconMap[s.icon?.toLowerCase()?.replace(/[^a-z]/g, "")] || Monitor,
    title: s.title,
    description: s.description,
    color: s.color || "from-blue-500 to-cyan-500",
  }));
  return (
    <section id="services" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      
      {/* Consistent 3D Background */}
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Multiple Floating Orbs */}
      {/* Minimal Professional Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-2">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/8 to-primary/8 rounded-full blur-3xl animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }} />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="services-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Enhanced 3D Button */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl mb-8 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
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
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                {badge}
              </span>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
          
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 blur-2xl" />
              <span className="relative bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                {heading.split(" ").slice(-1)[0]}
              </span>
            </span>
          </h2>
          
          <div className="relative inline-block">
            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="absolute -right-8 top-1/2 w-6 h-0.5 bg-gradient-to-l from-transparent to-primary/50" />
            <p className="text-lg text-muted-foreground px-8">{subheading}</p>
          </div>
        </div>

        {/* Services Grid with Unique Card Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-bl-full`} />
                </div>

                {/* Icon Container */}
                <div className="relative mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Floating Dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>

              {/* Outer Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
            </div>
          ))}
        </div>

        {/* CTA with Unique Design */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className="shadow-2xl hover:shadow-primary/50 group"
            >
              <a href={ctaUrl} className="relative">
                <span className="relative z-10">{ctaLabel}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </a>
            </Button>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
