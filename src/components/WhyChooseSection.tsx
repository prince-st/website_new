import { BarChart3, Layers, MessageSquare, Clock, Handshake, Globe2, Sparkles, TrendingUp, Users, Zap, LucideIcon } from "lucide-react";
import { useWPPage, WP_PAGE_IDS } from "@/hooks/useWordPressData";

const cardIcons: LucideIcon[] = [BarChart3, Layers, MessageSquare, Clock, Handshake, Globe2];
const cardColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-teal-500 to-cyan-500",
  "from-violet-500 to-purple-500",
];
const statIcons: LucideIcon[] = [TrendingUp, Users, Zap];
const statColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
];

export function WhyChooseSection() {
  const { data } = useWPPage(WP_PAGE_IDS.INDEX);

  // ── ACF field names (Index Why Choose Section field group) ──
  // badge_top          → badge text
  // heading_main       → heading left part
  // text_highlight     → heading highlighted word
  // cards[].icon       → card icon (WP image)
  // cards[].title      → card title
  // cards[].desc       → card description
  // stats9[].value9    → stat value  (new repeater)
  // stats9[].label9_   → stat label  (new repeater, note trailing underscore)

  const badge: string = data?.badge_top || "Why Choose Me";
  const headingMain: string = data?.heading_main || "What Sets Me";
  const headingHighlight: string = data?.text_highlight?.trim() || "Apart";

  // ── CARDS repeater ──────────────────────────────────────────────────────
  const rawCards = Array.isArray(data?.cards) && data.cards.some((c: any) => c.title?.trim())
    ? data.cards.filter((c: any) => c.title?.trim())
    : null;

  const cards = rawCards
    ? rawCards.map((c: any, i: number) => ({
        iconUrl: c.icon?.url || null,
        IconComponent: cardIcons[i % cardIcons.length],
        title: c.title.trim(),
        description: c.desc?.replace(/\r\n/g, " ").trim() || "",
        color: cardColors[i % cardColors.length],
      }))
    : [
        { iconUrl: null, IconComponent: BarChart3, title: "AI & Growth Expert", description: "Combining AI, marketing, and development to create intelligent systems that scale businesses faster.", color: "from-blue-500 to-cyan-500" },
        { iconUrl: null, IconComponent: Layers, title: "Fast, Scalable Execution", description: "Efficient workflows powered by automation to deliver faster without compromising quality.", color: "from-purple-500 to-pink-500" },
        { iconUrl: null, IconComponent: MessageSquare, title: "Strategic Partnership", description: "More than a service provider—I work as a long-term growth partner invested in your success.", color: "from-green-500 to-emerald-500" },
        { iconUrl: null, IconComponent: Clock, title: "On-Time Delivery", description: "Disciplined project management ensures deadlines are met without sacrificing quality.", color: "from-orange-500 to-red-500" },
        { iconUrl: null, IconComponent: Handshake, title: "Results-Driven", description: "Focused on delivering measurable outcomes through data-backed strategies, not just outputs.", color: "from-teal-500 to-cyan-500" },
        { iconUrl: null, IconComponent: Globe2, title: "Global Experience", description: "Proven track record working with clients across 40+ countries and diverse industries.", color: "from-violet-500 to-purple-500" },
      ];

  // ── STATS repeater ──────────────────────────────────────────────────────
  // New field: stats9[].value9 (Text), stats9[].label9_ (Text)
  const stats = (() => {
    const raw = data?.stats9;
    if (Array.isArray(raw) && raw.some((s: any) => s.value9?.trim())) {
      return raw
        .filter((s: any) => s.value9?.trim())
        .map((s: any, i: number) => ({
          value: s.value9.trim(),
          label: s.label9_?.trim() || "",
          IconComponent: statIcons[i % statIcons.length],
          color: statColors[i % statColors.length],
        }));
    }
    // Static defaults
    return [
      { value: "40+", label: "Countries Served", IconComponent: TrendingUp, color: "from-blue-500 to-cyan-500" },
      { value: "5★", label: "Client Rating", IconComponent: Users, color: "from-purple-500 to-pink-500" },
      { value: "98%", label: "Client Satisfaction", IconComponent: Zap, color: "from-orange-500 to-red-500" },
    ];
  })();

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: "16s" }} />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-accent/12 to-primary/12 rounded-full blur-3xl animate-float" style={{ animationDuration: "20s", animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 sm:gap-3">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform" />
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">{badge}</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              {headingMain}{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: "3s" }} />
                <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                  {headingHighlight}
                </span>
              </span>
            </h2>

            {/* Description */}
            <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-card/50 to-transparent border border-border/50 backdrop-blur-sm">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I don't just deliver projects—I build scalable growth systems. As the founder of StoreTransform with over a decade of experience and 1,350+ successful projects delivered, I combine AI, technology, and business strategy to transform complex challenges into measurable growth.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="group relative flex-1">
                  <div className="relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10 text-center">
                      <p className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider">{stat.label}</p>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500 rounded-xl sm:rounded-2xl -z-10`} />
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {cards.map((card, index) => (
              <div key={index} className="group relative">
                <div className="relative h-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border-2 border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10 space-y-2 sm:space-y-3">
                    {/* Icon */}
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12">
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                      <div className={`relative w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl overflow-hidden`}>
                        {card.iconUrl
                          ? <img src={card.iconUrl} alt={card.title} className="w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                          : <card.IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white drop-shadow-lg" />
                        }
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                    </div>
                  </div>

                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 sm:w-10 h-8 sm:h-10 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-3xl -z-10`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
