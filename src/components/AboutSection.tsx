import { Button } from "@/components/ui/button";
import { Rocket, Gauge, Boxes, BadgeInfo, TrendingUp, Users, Zap, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { useWPPage, WP_PAGE_IDS } from "@/hooks/useWordPressData";

export function AboutSection() {
  const { data } = useWPPage(WP_PAGE_IDS.INDEX);

  // Exact ACF field names from WordPress (page 170):
  // top_badge4, main_heading4, highlight_text4
  // description_1, description_2
  // tags[].tag_name  (industries)
  // cta_primary, cta_secondary  (button labels — no URL fields in ACF for these)
  // features[].icon (WP image), features[].title, features[].description (not in ACF yet — using cards instead)
  // cards[].icon (WP image), cards[].title, cards[].desc  (Why Choose section but reused here)

  const badge: string = data?.top_badge4 || "ABOUT ME";
  const headingMain: string = data?.main_heading4 || "Transforming Business with";
  const headingHighlight: string = data?.highlight_text4 || "Modern Digital Era";
  const para1: string = data?.description_1 || "I'm Bharat Gunani, founder of StoreTransform and a digital commerce strategist with over a decade of experience helping businesses scale through technology.";
  const para2: string = data?.description_2 || "With 1,350+ successful projects delivered across global markets, I bring a results-driven approach powered by AI, data, and high-performance development.";
  const ctaPrimary: string = data?.cta_primary || "Hire Me on Upwork";
  const ctaSecondary: string = data?.cta_secondary || "Let's Connect";

  // Industries from tags[].tag_name
  const industries: string[] =
    Array.isArray(data?.tags) && data.tags.some((t: any) => t.tag_name)
      ? data.tags.filter((t: any) => t.tag_name).map((t: any) => t.tag_name)
      : ["Retail & Ecommerce", "SaaS Platforms", "D2C", "B2B", "Startups", "Agencies", "Healthcare"];

  // Feature cards — ACF has features[].icon (image), features[].title, features[].description
  // If empty, fall back to static
  const featureIcons = [Rocket, Gauge, Boxes];
  const featureColors = ["from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-orange-500 to-red-500"];
  const defaultFeatures = [
    { title: "AI-First Approach", description: "Leveraging AI-powered workflows, automation, and intelligent systems to streamline operations, reduce manual effort, and accelerate business growth." },
    { title: "ROI-Focused", description: "Every solution is built with a clear focus on performance, ensuring measurable impact, higher conversions, and maximum return on investment." },
    { title: "End-to-End Execution", description: "From strategy and UX to development, automation, and growth—complete ownership to ensure seamless execution and consistent results." },
  ];

  const rawFeatures: any[] =
    Array.isArray(data?.features) && data.features.some((f: any) => f.title)
      ? data.features.filter((f: any) => f.title)
      : defaultFeatures;

  const features = rawFeatures.slice(0, 3).map((f: any, i: number) => ({
    IconComponent: featureIcons[i] || Rocket,
    iconUrl: f.icon?.url || null,
    title: f.title,
    description: f.description || f.text || "",
    color: featureColors[i] || "from-blue-500 to-cyan-500",
  }));

  // Stats — ACF has stats field but it's null; use floating_stat + hardcoded fallbacks
  const statsData = [
    { IconComponent: TrendingUp, value: data?.floating_stat?.value || "1,350+", label: "Projects", color: "from-blue-500 to-cyan-500" },
    { IconComponent: Users, value: "10+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { IconComponent: Zap, value: "Trusted", label: "by Brands", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50/20 to-slate-100" />
      <div className="absolute inset-0 overflow-hidden opacity-3">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: "18s" }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: "22s", animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl mb-6 sm:mb-8 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">{badge}</span>
              <BadgeInfo className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            {/* Heading */}
            <div className="relative pl-6 sm:pl-8 lg:pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-primary via-cyan-400 to-primary rounded-full shadow-lg shadow-primary/50" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-tight">
                {headingMain}{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: "3s" }} />
                  <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                    {headingHighlight}
                  </span>
                </span>
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6">
              {[para1, para2].map((para, i) => (
                <div key={i} className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  <p className="text-muted-foreground leading-relaxed relative z-10 text-base sm:text-lg">{para}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            {/* Industries */}
            <div>
              <p className="text-sm font-bold text-muted-foreground mb-5 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Trusted Across Diverse Industries
              </p>
              <div className="flex flex-wrap gap-3">
                {industries.map((label, idx) => (
                  <span
                    key={idx}
                    className="group relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-card border-2 border-border/50 text-sm font-bold text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-default overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Button className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-2xl hover:shadow-primary/50 group relative overflow-hidden" asChild>
                <a href="https://www.upwork.com/freelancers/bharatgunani" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">{ctaPrimary}</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </Button>
              <Button variant="outline" className="group relative h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base border-2 border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <MessageSquare className="relative w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10 group-hover:text-primary transition-colors">{ctaSecondary}</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Features & Stats */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {features.map((f, idx) => (
              <div key={idx} className="group relative">
                <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${f.color} rounded-xl sm:rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`relative w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl overflow-hidden`}>
                        {f.iconUrl ? (
                          <img src={f.iconUrl} alt={f.title} className="w-8 sm:w-10 h-8 sm:h-10 object-contain" />
                        ) : (
                          <f.IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white drop-shadow-lg" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h4 className="font-heading text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{f.title}</h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 pt-6 sm:pt-8">
              {statsData.map((stat, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card to-secondary/30 border-2 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl text-center overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10 space-y-2 sm:space-y-3">
                      <div className="relative mx-auto w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16">
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                        <div className={`relative w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                          <stat.IconComponent className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-bold">{stat.label}</div>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
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
