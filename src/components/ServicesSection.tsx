import { Button } from "@/components/ui/button";
import { Monitor, Bot, Sparkles, Globe, ShoppingCart, Database, Search, Target, Share2, Code2, Smartphone, Palette, LucideIcon } from "lucide-react";
import { useWPPage, WP_PAGE_IDS } from "@/hooks/useWordPressData";

// Fallback icon map by service title keyword
const titleIconMap: Record<string, LucideIcon> = {
  "it consultation": Monitor,
  "ai consultant": Bot,
  "ai-powered": Sparkles,
  "wordpress": Globe,
  "shopify": ShoppingCart,
  "magento": Database,
  "seo": Search,
  "ppc": Target,
  "social media": Share2,
  "vibe coding": Code2,
  "app development": Smartphone,
  "ui/ux": Palette,
};

const serviceColors = [
  "from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-amber-500 to-orange-500",
  "from-blue-600 to-indigo-600", "from-green-500 to-emerald-500", "from-orange-500 to-red-500",
  "from-teal-500 to-cyan-500", "from-red-500 to-pink-500", "from-pink-500 to-purple-500",
  "from-violet-500 to-purple-500", "from-cyan-500 to-blue-500", "from-fuchsia-500 to-pink-500",
];

function getIconForTitle(title: string): LucideIcon {
  const lower = title.toLowerCase();
  for (const [key, icon] of Object.entries(titleIconMap)) {
    if (lower.includes(key)) return icon;
  }
  return Monitor;
}

export function ServicesSection() {
  const { data } = useWPPage(WP_PAGE_IDS.INDEX);

  // Exact ACF field names from WordPress (page 170):
  // top_badge5, main_heading5, highlight_text5
  // lets_connect (CTA label), lets_connect_url
  // services[].icon (WP image object), services[].title, services[].desc

  const badge: string = data?.top_badge5 || "SERVICES";
  const headingMain: string = data?.main_heading5 || "Comprehensive Digital";
  const headingHighlight: string = data?.highlight_text5 || "Solutions";
  const ctaLabel: string = data?.lets_connect || "Let's Connect";
  const ctaUrl: string = data?.lets_connect_url?.replace("http://localhost:8080", "") || "#contact";

  const rawServices = Array.isArray(data?.services) && data.services.length > 0 ? data.services : [];
  const services = rawServices.map((s: any, i: number) => ({
    iconUrl: s.icon?.url || null,
    IconComponent: getIconForTitle(s.title || ""),
    title: s.title || "",
    description: s.desc || "",
    color: serviceColors[i % serviceColors.length],
  }));

  // Fallback if ACF services are empty
  const displayServices = services.length > 0 ? services : [
    { iconUrl: null, IconComponent: Monitor, title: "IT Consultation", description: "Scalable tech architecture and system planning for growth", color: "from-blue-500 to-cyan-500" },
    { iconUrl: null, IconComponent: Bot, title: "AI Consultant", description: "Custom AI solutions, automation, and smart integrations", color: "from-purple-500 to-pink-500" },
    { iconUrl: null, IconComponent: Sparkles, title: "AI-Powered Services", description: "Chatbots, workflows, and predictive insights", color: "from-amber-500 to-orange-500" },
    { iconUrl: null, IconComponent: Globe, title: "WordPress Development", description: "Custom themes, performance optimization & security", color: "from-blue-600 to-indigo-600" },
    { iconUrl: null, IconComponent: ShoppingCart, title: "Shopify Development", description: "Conversion-focused eCommerce store solutions", color: "from-green-500 to-emerald-500" },
    { iconUrl: null, IconComponent: Database, title: "Magento Development", description: "Enterprise-grade eCommerce platforms", color: "from-orange-500 to-red-500" },
    { iconUrl: null, IconComponent: Search, title: "SEO", description: "Technical SEO, on-page & content optimization", color: "from-teal-500 to-cyan-500" },
    { iconUrl: null, IconComponent: Target, title: "PPC Advertising", description: "Google Ads & paid growth campaign management", color: "from-red-500 to-pink-500" },
    { iconUrl: null, IconComponent: Share2, title: "Social Media Marketing", description: "Brand growth & engagement strategy", color: "from-pink-500 to-purple-500" },
    { iconUrl: null, IconComponent: Code2, title: "Vibe Coding", description: "Rapid prototyping & modern coding workflows", color: "from-violet-500 to-purple-500" },
    { iconUrl: null, IconComponent: Smartphone, title: "App Development", description: "Web & mobile applications built to scale", color: "from-cyan-500 to-blue-500" },
    { iconUrl: null, IconComponent: Palette, title: "UI/UX Design", description: "User-centric, conversion-optimized design", color: "from-fuchsia-500 to-pink-500" },
  ];

  return (
    <section id="services" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 overflow-hidden opacity-2">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" style={{ animationDuration: "18s" }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/8 to-primary/8 rounded-full blur-3xl animate-float" style={{ animationDuration: "22s", animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl mb-8 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{badge}</span>
            </div>
          </div>

          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            {headingMain}{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 blur-2xl" />
              <span className="relative bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">{headingHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">From strategy to execution, I deliver end-to-end services that drive real business results.</p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {displayServices.map((service, index) => (
            <div key={index} className="group relative">
              <div className="relative h-full p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-bl-full`} />
                </div>

                {/* Icon */}
                <div className="relative mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden`}>
                    {service.iconUrl ? (
                      <img src={service.iconUrl} alt={service.title} className="w-8 h-8 object-contain" />
                    ) : (
                      <service.IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <Button variant="hero" size="lg" asChild className="shadow-2xl hover:shadow-primary/50 group">
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
