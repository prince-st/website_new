import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, Sparkles } from "lucide-react";
import { useWPPage, WP_PAGE_IDS, getImageUrl } from "@/hooks/useWordPressData";

export function CTASection() {
  const { data } = useWPPage(WP_PAGE_IDS.INDEX);

  // ── ACF field names (CTA Section field group) ──────────────────────────
  // top_badge3        → badge text
  // main_heading3     → heading left part
  // highlight_text3   → heading highlighted word
  // description3      → description paragraph
  // buttons[].text    → button label
  // buttons[].link    → button URL
  // buttons[].style   → "primary" | "secondary"
  // buttons[].icon_1  → button icon (WP image, currently false)
  // features[].icon   → bottom feature icon (WP image)
  // features[].text   → bottom feature text

  const badge: string = data?.top_badge3 || "READY TO START YOUR PROJECT?";
  const headingMain: string = data?.main_heading3 || "Let's Build Something";
  const headingHighlight: string = data?.highlight_text3 || "Smart & Scalable";
  const description: string = data?.description3 || "Tell me about your project and get a clear action plan within 24 hours. No obligations, just valuable insights.";

  // Buttons repeater: buttons[].text, buttons[].link, buttons[].style, buttons[].icon_1
  const rawButtons = Array.isArray(data?.buttons) && data.buttons.some((b: any) => b.text?.trim())
    ? data.buttons.filter((b: any) => b.text?.trim())
    : null;

  const buttons = rawButtons
    ? rawButtons.map((b: any) => ({
        text: b.text.trim(),
        link: b.link?.trim() || "",
        style: b.style || "primary",
        iconUrl: b.icon_1?.url || null,
      }))
    : [
        { text: "Schedule a Call", link: "https://calendly.com/piyushewebxpert/30min", style: "primary", iconUrl: null },
        { text: "Start Your Project", link: "", style: "secondary", iconUrl: null },
      ];

  // Features repeater: features[].icon (Image), features[].text (Text)
  const rawFeatures = Array.isArray(data?.features) && data.features.some((f: any) => f.text?.trim())
    ? data.features.filter((f: any) => f.text?.trim())
    : null;

  const bottomFeatures = rawFeatures
    ? rawFeatures.map((f: any) => ({
        iconUrl: f.icon?.url || null,
        text: f.text.trim(),
      }))
    : [
        { iconUrl: null, text: "Free Consultation" },
        { iconUrl: null, text: "24hr Response Time" },
        { iconUrl: null, text: "No Obligations" },
      ];

  // Fallback icons for bottom features
  const fallbackIcons = [Sparkles, Calendar, MessageSquare];
  const featureGradients = [
    "from-purple-500/20 to-pink-500/20",
    "from-blue-500/20 to-cyan-500/20",
    "from-green-500/20 to-emerald-500/20",
  ];

  const handleButtonClick = (link: string) => {
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50/20 to-slate-100" />
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: "18s" }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: "22s", animationDelay: "3s" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="cta-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">

          {/* Badge */}
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_12px_hsl(var(--primary))]" />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{badge}</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {headingMain}{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: "3s" }} />
              <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                {headingHighlight}
              </span>
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="relative inline-flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-14 lg:mb-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card/50 to-transparent border-2 border-border/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-3xl" />
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cyan-500/20 opacity-50 blur-2xl rounded-3xl -z-10" />

            {buttons.map((btn, idx) => (
              btn.style === "primary" ? (
                <Button
                  key={idx}
                  variant="hero"
                  size="xl"
                  onClick={() => handleButtonClick(btn.link)}
                  className="group relative overflow-hidden shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {btn.iconUrl
                      ? <img src={btn.iconUrl} alt="" className="w-5 h-5 object-contain" />
                      : <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    }
                    {btn.text}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-30 transition-opacity blur-xl" />
                </Button>
              ) : (
                <Button
                  key={idx}
                  variant="heroOutline"
                  size="xl"
                  onClick={() => handleButtonClick(btn.link)}
                  className="group relative overflow-hidden shadow-xl hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {btn.iconUrl
                      ? <img src={btn.iconUrl} alt="" className="w-5 h-5 object-contain" />
                      : <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    }
                    {btn.text}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              )
            ))}
          </div>

          {/* Bottom Features */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
            {bottomFeatures.map((item, idx) => {
              const FallbackIcon = fallbackIcons[idx % fallbackIcons.length];
              const gradient = featureGradients[idx % featureGradients.length];
              return (
                <div key={idx} className="group relative animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-5 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl sm:rounded-2xl bg-card border-2 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:-translate-y-1 overflow-hidden shadow-lg hover:shadow-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
                        {item.iconUrl
                          ? <img src={item.iconUrl} alt="" className="w-4 sm:w-5 h-4 sm:h-5 object-contain" />
                          : <FallbackIcon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                        }
                      </div>
                    </div>
                    <span className="relative text-sm sm:text-base font-bold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                      {item.text}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 rounded-xl sm:rounded-2xl -z-10`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
