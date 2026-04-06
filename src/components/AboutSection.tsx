import { Button } from "@/components/ui/button";
import {
  Rocket, Gauge, Boxes, BadgeInfo,
  TrendingUp, Users, Zap,
  ArrowRight, Sparkles, MessageSquare,
} from "lucide-react";
import { useWPPage, WP_PAGE_IDS, getImageUrl } from "@/hooks/useWordPressData";

const featureIcons = [Rocket, Gauge, Boxes];
const featureColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
];
const statIcons = [TrendingUp, Users, Zap];
const statColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
];

export function AboutSection() {
  const { data } = useWPPage(WP_PAGE_IDS.INDEX);

  // ── TEXT FIELDS ──────────────────────────────────────────────────────────
  // Try new field group names first (top_badge6 etc.), fall back to old ones
  const badge: string =
    data?.top_badge6 || data?.top_badge4 || "ABOUT ME";
  const headingMain: string =
    data?.main_heading6 || data?.main_heading4 || "Transforming Business with";
  const headingHighlight: string =
    data?.highlight_text6 || data?.highlight_text4 || "Modern Digital Era";
  const para1: string = data?.description_1 || "";
  const para2: string = data?.description_2 || "";

  // ── INDUSTRIES REPEATER ──────────────────────────────────────────────────
  // New field: industries_tags1[].tag_name
  // Old field: tags[].tag_name
  const industriesLabel: string =
    data?.trusted_across_diverse_industries || "Trusted Across Diverse Industries";
  const industriesIconUrl: string | null =
    getImageUrl(data?.trusted_across_diverse_industries_icon);

  const industries: string[] = (() => {
    // Try new repeater first
    const newTags = data?.industries_tags1;
    if (Array.isArray(newTags) && newTags.some((t: any) => t.tag_name?.trim())) {
      return newTags.filter((t: any) => t.tag_name?.trim()).map((t: any) => t.tag_name.trim());
    }
    // Fall back to old repeater
    const oldTags = data?.tags;
    if (Array.isArray(oldTags) && oldTags.some((t: any) => t.tag_name?.trim())) {
      return oldTags.filter((t: any) => t.tag_name?.trim()).map((t: any) => t.tag_name.trim());
    }
    return ["Retail & Ecommerce", "SaaS Platforms", "D2C", "B2B", "Startups", "Agencies", "Healthcare"];
  })();

  // ── FEATURES REPEATER ────────────────────────────────────────────────────
  // Repeater field name: right_features
  // Sub-fields: feature_title1 (Text), feature_description1 (Text Area), features_icon1 (Image)
  const features = (() => {
    // Try new repeater: right_features
    const newRaw = data?.right_features;
    if (Array.isArray(newRaw) && newRaw.some((f: any) => f.feature_title1?.trim())) {
      return newRaw.filter((f: any) => f.feature_title1?.trim()).map((f: any, i: number) => ({
        title: f.feature_title1.trim(),
        description: f.feature_description1?.trim() || "",
        iconUrl: getImageUrl(f.features_icon1),
        color: featureColors[i % featureColors.length],
        FallbackIcon: featureIcons[i % featureIcons.length],
      }));
    }

    // Fallback: old "features" repeater with sub-fields title/description/features_icon
    const oldRaw = data?.features;
    if (Array.isArray(oldRaw)) {
      const withTitle = oldRaw.filter((f: any) => f.title?.trim());
      if (withTitle.length > 0) {
        return withTitle.map((f: any, i: number) => ({
          title: f.title.trim(),
          description: f.description?.trim() || "",
          iconUrl: getImageUrl(f.features_icon),
          color: featureColors[i % featureColors.length],
          FallbackIcon: featureIcons[i % featureIcons.length],
        }));
      }
      // Even older: text + icon sub-fields
      const withText = oldRaw.filter((f: any) => f.text?.trim());
      if (withText.length > 0) {
        return withText.map((f: any, i: number) => ({
          title: f.text.trim(),
          description: "",
          iconUrl: getImageUrl(f.icon),
          color: featureColors[i % featureColors.length],
          FallbackIcon: featureIcons[i % featureIcons.length],
        }));
      }
    }

    return null; // use static defaults
  })();

  const displayFeatures = features ?? [
    { title: "AI-First Approach", description: "Leveraging AI-powered workflows, automation, and intelligent systems to streamline operations, reduce manual effort, and accelerate business growth.", iconUrl: null, color: "from-blue-500 to-cyan-500", FallbackIcon: Rocket },
    { title: "ROI-Focused", description: "Every solution is built with a clear focus on performance, ensuring measurable impact, higher conversions, and maximum return on investment.", iconUrl: null, color: "from-purple-500 to-pink-500", FallbackIcon: Gauge },
    { title: "End-to-End Execution", description: "From strategy and UX to development, automation, and growth—complete ownership to ensure seamless execution and consistent results.", iconUrl: null, color: "from-orange-500 to-red-500", FallbackIcon: Boxes },
  ];

  // ── STATS REPEATER ───────────────────────────────────────────────────────
  // New field: stats_2[].stats_image1 (Image), stats_2[].value1 (Text), stats_2[].labe_1 (Text)
  // Old field: stats = false
  const stats = (() => {
    const raw = data?.stats_2;
    if (Array.isArray(raw) && raw.some((s: any) => s.value1?.trim())) {
      return raw.filter((s: any) => s.value1?.trim()).map((s: any, i: number) => ({
        value: s.value1.trim(),
        label: s.labe_1?.trim() || "",
        iconUrl: getImageUrl(s.stats_image1),
        IconComponent: statIcons[i % statIcons.length],
        color: statColors[i % statColors.length],
      }));
    }
    return [
      { value: "1,350+", label: "Projects", iconUrl: null, IconComponent: TrendingUp, color: "from-blue-500 to-cyan-500" },
      { value: "10+", label: "Years Experience", iconUrl: null, IconComponent: Users, color: "from-purple-500 to-pink-500" },
      { value: "Trusted", label: "by Brands", iconUrl: null, IconComponent: Zap, color: "from-orange-500 to-red-500" },
    ];
  })();

  // ── CTA BUTTONS ──────────────────────────────────────────────────────────
  const ctaPrimaryLabel: string = data?.cta_primary || "Hire Me on Upwork";
  const ctaPrimaryUrl: string =
    data?.hire_me_on_upwork_link || "https://www.upwork.com/freelancers/bharatgunani";
  const ctaPrimaryIconUrl: string | null = getImageUrl(data?.hire_me_on_upwork);

  const ctaSecondaryLabel: string = data?.cta_secondary || "Let's Connect";
  const ctaSecondaryUrl: string =
    data?.lets_connect_link?.replace("http://localhost:8080", "") || "#contact";
  const ctaSecondaryIconUrl: string | null = getImageUrl(data?.lets_connect_icon);

  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50/20 to-slate-100" />
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: "18s" }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: "22s", animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── BADGE ── */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl mb-6 sm:mb-8 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                {badge}
              </span>
              <BadgeInfo className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start max-w-7xl mx-auto">

          {/* ── LEFT ── */}
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
            {(para1 || para2) && (
              <div className="space-y-6">
                {[para1, para2].filter(Boolean).map((para, i) => (
                  <div key={i} className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed relative z-10 text-base sm:text-lg">{para}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            )}

            {/* Industries */}
            <div>
              <p className="text-sm font-bold text-muted-foreground mb-5 uppercase tracking-wider flex items-center gap-2">
                {industriesIconUrl
                  ? <img src={industriesIconUrl} alt="" className="w-4 h-4 object-contain" />
                  : <Sparkles className="w-4 h-4 text-primary" />
                }
                {industriesLabel}
              </p>
              <div className="flex flex-wrap gap-3">
                {industries.map((label, idx) => (
                  <span
                    key={idx}
                    className="group relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-card border-2 border-border/50 text-sm font-bold text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-default overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-all" />
                    <span className="relative z-10">{label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Button
                className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-2xl hover:shadow-primary/50 group relative overflow-hidden"
                asChild
              >
                <a href={ctaPrimaryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  {ctaPrimaryIconUrl && (
                    <img src={ctaPrimaryIconUrl} alt="" className="w-5 h-5 object-contain relative z-10" />
                  )}
                  <span className="relative z-10">{ctaPrimaryLabel}</span>
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </a>
              </Button>

              <Button
                variant="outline"
                className="group relative h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base border-2 border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
                asChild
              >
                <a href={ctaSecondaryUrl} className="flex items-center gap-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {ctaSecondaryIconUrl
                    ? <img src={ctaSecondaryIconUrl} alt="" className="relative w-5 h-5 object-contain" />
                    : <MessageSquare className="relative w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                  }
                  <span className="relative z-10 group-hover:text-primary transition-colors">{ctaSecondaryLabel}</span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>

            {/* Feature Cards */}
            {displayFeatures.map((f, idx) => (
              <div key={idx} className="group relative">
                <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                    {/* Icon box */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${f.color} rounded-xl sm:rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`relative w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl overflow-hidden`}>
                        {f.iconUrl
                          ? <img src={f.iconUrl} alt={f.title} className="w-8 sm:w-10 h-8 sm:h-10 object-contain" />
                          : <f.FallbackIcon className="w-8 sm:w-10 h-8 sm:h-10 text-white drop-shadow-lg" />
                        }
                      </div>
                      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "6s" }}>
                        <div className="absolute top-0 left-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full -translate-x-1/2 shadow-lg shadow-primary/50" />
                      </div>
                    </div>

                    <div className="flex-1 pt-1 sm:pt-2">
                      <h4 className="font-heading text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                        {f.title}
                      </h4>
                      {f.description && (
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.description}</p>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 pt-6 sm:pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card to-secondary/30 border-2 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl text-center overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10 space-y-2 sm:space-y-3">
                      {/* Icon */}
                      <div className="relative mx-auto w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16">
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                        <div className={`relative w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl overflow-hidden`}>
                          {stat.iconUrl
                            ? <img src={stat.iconUrl} alt={stat.label} className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 object-contain" />
                            : <stat.IconComponent className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                          }
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-bold">
                        {stat.label}
                      </div>
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
