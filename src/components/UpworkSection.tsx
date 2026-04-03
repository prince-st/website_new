import { ExternalLink, Award, CheckCircle2, Star, TrendingUp, Clock, Sparkles, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWPPage, WP_PAGE_IDS } from "@/hooks/useWordPressData";

const statIcons: LucideIcon[] = [TrendingUp, CheckCircle2, Clock];
const statColors = ["from-green-500 to-emerald-500", "from-blue-500 to-cyan-500", "from-purple-500 to-pink-500"];

export function UpworkSection() {
  const { data } = useWPPage(WP_PAGE_IDS.INDEX);

  // Exact ACF field names from WordPress (page 170):
  // top_badge, main_heading, highlight_text
  // desc_1, desc_2
  // cta_button.text, cta_button.link
  // profile.image (WP image), profile.name, profile.location, profile.role
  // profile.rate, profile.specialization, profile.desc
  // profile.badges[].text, profile.tags[].text
  // stats_info[].value_info, stats_info[].stats_info, stats_info[].icon (WP image)

  const badge: string = data?.top_badge || "You can't fake these results";
  const headingMain: string = data?.main_heading || "#1 Ranked On";
  const headingHighlight: string = data?.highlight_text || "UpWork";
  const desc1: string = data?.desc_1?.replace(/\r\n/g, " ").trim() || "I'm Bharat Gunani — Senior AI Architect, eCommerce Engineer, and Digital Growth Partner. With 12+ years of hands-on experience building systems that actually work in production.";
  const desc2: string = data?.desc_2?.replace(/\r\n/g, " ").trim() || "My 100% Job Success Score isn't a vanity metric — it reflects 72 completed engagements where clients got exactly what they needed.";
  const ctaText: string = data?.cta_button?.text || "Visit My Upwork Profile";
  const ctaLink: string = data?.cta_button?.link || "https://www.upwork.com/freelancers/bharatgunani";

  const profile = data?.profile || {};
  const profileImage: string = profile.image?.url || "/profile.webp";
  const profileName: string = profile.name || "Bharat G.";
  const profileLocation: string = profile.location || "Gandhinagar, India • Local time";
  const profileRole: string = profile.role || "Senior AI Architect";
  const profileRate: string = profile.rate || "$32.00/hr";
  const profileSpec: string = profile.specialization || "Business Process Automation";
  const profileDesc: string = profile.desc || "12+ years building systems. 5+ years deploying AI into production operations. 100% JSS.";

  const badges: string[] =
    Array.isArray(profile.badges) && profile.badges.length > 0
      ? profile.badges.map((b: any) => b.text).filter(Boolean)
      : ["100% Job Success", "TOP RATED PLUS"];

  const tags: string[] =
    Array.isArray(profile.tags) && profile.tags.length > 0
      ? profile.tags.map((t: any) => t.text).filter(Boolean)
      : ["N8N Automation", "Agentic RAG", "AI Integration", "Shopify Plus", "WordPress"];

  const statsInfo =
    Array.isArray(data?.stats_info) && data.stats_info.length > 0
      ? data.stats_info.map((s: any, i: number) => ({
          iconUrl: s.icon?.url || null,
          IconComponent: statIcons[i % statIcons.length],
          value: s.value_info,
          label: s.stats_info,
          color: statColors[i % statColors.length],
        }))
      : [
          { iconUrl: null, IconComponent: TrendingUp, value: "$100k+", label: "Total Earnings", color: "from-green-500 to-emerald-500" },
          { iconUrl: null, IconComponent: CheckCircle2, value: "72", label: "Total Jobs", color: "from-blue-500 to-cyan-500" },
          { iconUrl: null, IconComponent: Clock, value: "10,316", label: "Total Hours", color: "from-purple-500 to-pink-500" },
        ];

  return (
    <section className="py-8 sm:py-10 lg:py-14 bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50/20 to-slate-100" />
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: "18s" }} />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-accent/12 to-primary/12 rounded-full blur-3xl animate-float" style={{ animationDuration: "22s", animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">

          {/* Left: Profile Card */}
          <div className="group relative animate-fade-in-up">
            <div className="relative rounded-2xl sm:rounded-3xl bg-card border-2 border-border p-5 sm:p-6 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                {/* Profile Header */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={profileImage}
                      alt={profileName}
                      className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-full border-4 border-primary/30 object-cover shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute -top-1 -left-1 flex">
                      <span className="absolute w-4 h-4 rounded-full bg-green-500 animate-ping" />
                      <span className="relative w-4 h-4 rounded-full bg-green-500 ring-4 ring-card shadow-lg" />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-heading text-lg font-bold">{profileName}</p>
                      <Award className="relative w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{profileLocation}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
                  {badges.map((b, i) => (
                    <div key={i} className={`group/badge relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 ${i === 0 ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-500/50" : "bg-primary/10 border-primary/30 hover:border-primary/50"}`}>
                      <span className={`relative text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap ${i === 0 ? "text-green-600 dark:text-green-400" : "text-primary uppercase tracking-wider"}`}>
                        {i === 0 ? <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" /> : <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />}
                        {b}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Title & Rate */}
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-secondary/50 to-transparent border border-border/50">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="font-heading text-base sm:text-lg font-bold flex-1">
                      <span className="block">{profileRole}</span>
                      <span className="block text-muted-foreground font-medium text-sm sm:text-base">N8N | Agentic RAG</span>
                      <span className="block bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">{profileSpec}</span>
                    </p>
                    <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border-2 border-primary/30 flex-shrink-0 self-start">
                      <p className="text-sm sm:text-base font-bold text-primary whitespace-nowrap">{profileRate}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{profileDesc}</p>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag, idx) => (
                    <span key={idx} className="group/tag relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary/50 border-2 border-border/50 text-xs sm:text-sm font-semibold hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-default overflow-hidden whitespace-nowrap">
                      <span className="relative z-10">{tag}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/tag:opacity-100 transition-opacity" />
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                  {statsInfo.map((s, i) => (
                    <div key={i} className="group/stat relative">
                      <div className="relative rounded-xl sm:rounded-2xl bg-card border-2 border-border hover:border-primary/30 p-3 sm:p-4 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover/stat:opacity-10 transition-opacity duration-500`} />
                        <div className="relative mx-auto w-8 sm:w-10 h-8 sm:h-10 mb-2 sm:mb-3">
                          <div className={`absolute inset-0 bg-gradient-to-br ${s.color} rounded-lg sm:rounded-xl blur-lg opacity-50 group-hover/stat:opacity-100 transition-opacity`} />
                          <div className={`relative w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center group-hover/stat:scale-110 group-hover/stat:rotate-6 transition-all duration-500 overflow-hidden`}>
                            {s.iconUrl ? (
                              <img src={s.iconUrl} alt={s.label} className="w-4 sm:w-5 h-4 sm:h-5 object-contain" />
                            ) : (
                              <s.IconComponent className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                            )}
                          </div>
                        </div>
                        <p className={`font-heading text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-br ${s.color} bg-clip-text text-transparent mb-0.5 sm:mb-1`}>{s.value}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider">{s.label}</p>
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500`} />
                      </div>
                      <div className={`absolute -inset-0.5 bg-gradient-to-br ${s.color} opacity-0 group-hover/stat:opacity-40 blur-lg transition-opacity duration-500 rounded-2xl -z-10`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-green-500/30 to-primary/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
          </div>

          {/* Right: Copy + CTA */}
          <div className="space-y-5 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-green-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 sm:gap-3">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform" />
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">{badge}</span>
              </div>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              {headingMain}{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 blur-2xl animate-pulse" style={{ animationDuration: "3s" }} />
                <span className="relative bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">{headingHighlight}</span>
              </span>
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {[desc1, desc2].map((desc, i) => (
                <div key={i} className="group relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-card/50 to-transparent border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed relative z-10">{desc}</p>
                </div>
              ))}
            </div>

            <Button className="h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-10 text-sm sm:text-base shadow-2xl hover:shadow-green-500/50 group relative overflow-hidden w-full sm:w-auto" asChild>
              <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <span className="relative z-10">{ctaText}</span>
                <ExternalLink className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
