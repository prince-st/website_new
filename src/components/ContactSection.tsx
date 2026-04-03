import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, ExternalLink, Send, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useWPPage, WP_PAGE_IDS } from "@/hooks/useWordPressData";

// Fallback icons for contact details by index
const detailIcons = [MapPin, Phone, Clock];

export function ContactSection() {
  const { toast } = useToast();
  const { data } = useWPPage(WP_PAGE_IDS.INDEX);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // ── ACF field names (Contact Section Advanced field group) ──────────────
  // contact_badge_text              → badge
  // contact_heading_text            → heading left
  // contact_heading_highlight       → heading highlight
  // contact_description_text        → description
  // connect_with_me                 → social section title
  //
  // contact_form_group (Group):
  //   form_title_text               → form card title
  //   form_icon_image               → form icon (WP image)
  //   form_button_text              → submit button label
  //   button_image                  → submit button icon (WP image)
  //   form_button_bg_color          → button gradient start
  //   form_button_bg_color2         → button gradient end
  //   your_name                     → name field label
  //   john_doe                      → name field placeholder
  //
  // contact_details_group (Repeater):
  //   detail_label_text             → detail label
  //   detail_value_text             → detail value
  //   detail_icon_image             → detail icon (WP image)
  //   detail_icon_bg_color          → icon bg color
  //
  // contact_social_group (Repeater):
  //   social_icon_icon_1            → social icon image 1 (WP image)
  //   social_title_text             → platform name
  //   social_display_text           → display text / handle
  //   social_link_url               → URL
  //   social_icon_icon_2            → social icon image 2 (WP image)
  //
  // quick_response_group (Group):
  //   quick_title_text              → quick response title
  //   quick_desc_text               → quick response description
  //   quick_icon_image              → icon (WP image)
  //   quick_bg_color                → background color
  //
  // email_address                   → email label
  // john@examplecom                 → email placeholder (field name has @ replaced)
  // project_brief                   → message label
  // tell_me_about_your_project_goals_and_timeline → message placeholder

  const badge: string = data?.contact_badge_text || "CONTACT";
  const headingText: string = data?.contact_heading_text || "Let's Start a";
  const headingHighlight: string = data?.contact_heading_highlight || "Conversation";
  const description: string = data?.contact_description_text?.replace(/\r\n/g, " ").trim() || "Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.";
  const connectTitle: string = data?.connect_with_me || "Connect With Me";

  // Form group
  const formGroup = data?.contact_form_group || {};
  const formTitle: string = formGroup.form_title_text || "Send a Message";
  const formIconUrl: string | null = formGroup.form_icon_image?.url || null;
  const submitBtnText: string = formGroup.form_button_text || "Send Message";
  const submitBtnIconUrl: string | null = formGroup.button_image?.url || null;
  const nameLabelText: string = formGroup.your_name || "Your Name";
  const namePlaceholder: string = formGroup.john_doe || "John Doe";
  const emailLabel: string = data?.email_address || "Email Address";
  const emailPlaceholder: string = data?.["john@examplecom"] || "john@example.com";
  const messageLabelText: string = data?.project_brief || "Project Brief";
  const messagePlaceholder: string = data?.tell_me_about_your_project_goals_and_timeline || "Tell me about your project, goals, and timeline...";

  // Contact details repeater
  const rawDetails = Array.isArray(data?.contact_details_group) && data.contact_details_group.some((d: any) => d.detail_label_text?.trim())
    ? data.contact_details_group.filter((d: any) => d.detail_label_text?.trim())
    : null;

  const contactDetails = rawDetails
    ? rawDetails.map((d: any, i: number) => ({
        label: d.detail_label_text.trim(),
        value: d.detail_value_text?.trim() || "",
        iconUrl: d.detail_icon_image?.url || null,
        bgColor: d.detail_icon_bg_color || "",
        FallbackIcon: detailIcons[i % detailIcons.length],
      }))
    : [
        { label: "Location", value: "Available Worldwide", iconUrl: null, bgColor: "", FallbackIcon: MapPin },
        { label: "Response Time", value: "Within 24 Hours", iconUrl: null, bgColor: "", FallbackIcon: Phone },
        { label: "Availability", value: "Mon - Sat, 9AM - 6PM", iconUrl: null, bgColor: "", FallbackIcon: Clock },
      ];

  // Social links repeater
  const rawSocials = Array.isArray(data?.contact_social_group) && data.contact_social_group.some((s: any) => s.social_link_url?.trim())
    ? data.contact_social_group.filter((s: any) => s.social_link_url?.trim())
    : null;

  const socialLinks = rawSocials
    ? rawSocials.map((s: any) => ({
        label: s.social_title_text?.trim() || "Link",
        value: s.social_display_text?.trim() || s.social_link_url,
        href: s.social_link_url,
        iconUrl: s.social_icon_icon_1?.url || s.social_icon_icon_2?.url || null,
      }))
    : [
        { label: "Email", value: "bharat@storetransform.com", href: "mailto:bharat@storetransform.com", iconUrl: null },
        { label: "LinkedIn", value: "in.linkedin.com/in/bharat-gunani", href: "https://in.linkedin.com/in/bharat-gunani", iconUrl: null },
        { label: "Upwork", value: "upwork.com/freelancers/bharatgunani", href: "https://www.upwork.com/freelancers/bharatgunani", iconUrl: null },
      ];

  // Fallback icons for social links
  const socialFallbackIcons = [Mail, Linkedin, ExternalLink];

  // Quick response group
  const quickGroup = data?.quick_response_group || {};
  const quickTitle: string = quickGroup.quick_title_text || "Quick Response";
  const quickDesc: string = quickGroup.quick_desc_text?.replace(/\r\n/g, " ").trim() || "I typically respond within 24 hours. For urgent projects, mention \"URGENT\" in your message subject.";
  const quickIconUrl: string | null = quickGroup.quick_icon_image?.url || null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || "Failed to send message");
      }
      toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to send message.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" style={{ animationDuration: "18s" }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/8 to-primary/8 rounded-full blur-3xl animate-float" style={{ animationDuration: "22s", animationDelay: "3s" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="contact-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2 sm:gap-3">
              <Send className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform" />
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em]">{badge}</span>
            </div>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            {headingText}{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: "3s" }} />
              <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{headingHighlight}</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">

          {/* ── FORM (3 cols) ── */}
          <div className="lg:col-span-3 space-y-5 sm:space-y-6">
            <div className="animate-fade-in-up">
              <div className="group relative p-6 sm:p-7 lg:p-10 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.6)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />

                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0 overflow-hidden">
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                      {formIconUrl
                        ? <img src={formIconUrl} alt="" className="relative w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                        : <Send className="relative w-5 sm:w-6 h-5 sm:h-6 text-white drop-shadow-lg" />
                      }
                    </div>
                    <span>{formTitle}</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">{nameLabelText}</label>
                      <Input id="name" name="name" placeholder={namePlaceholder} value={formData.name} onChange={handleChange} required className="h-11 sm:h-12 bg-secondary/50 border-border focus:border-primary rounded-xl text-sm sm:text-base" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">{emailLabel}</label>
                      <Input id="email" name="email" type="email" placeholder={emailPlaceholder} value={formData.email} onChange={handleChange} required className="h-11 sm:h-12 bg-secondary/50 border-border focus:border-primary rounded-xl text-sm sm:text-base" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">{messageLabelText}</label>
                      <Textarea id="message" name="message" placeholder={messagePlaceholder} rows={6} value={formData.message} onChange={handleChange} required className="bg-secondary/50 border-border focus:border-primary resize-none rounded-xl text-sm sm:text-base" />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full h-12 sm:h-14 text-sm sm:text-base shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] group relative overflow-hidden" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (
                        <>
                          <span className="relative z-10">{submitBtnText}</span>
                          {submitBtnIconUrl
                            ? <img src={submitBtnIconUrl} alt="" className="w-4 sm:w-5 h-4 sm:h-5 ml-2 relative z-10 object-contain" />
                            : <Send className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-2 group-hover:rotate-12 transition-all relative z-10" />
                          }
                          <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-30 transition-opacity blur-xl" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Quick Response Box */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)]">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0 overflow-hidden">
                      {quickIconUrl
                        ? <img src={quickIconUrl} alt="" className="w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                        : <Clock className="relative w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                      }
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">{quickTitle}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{quickDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── SIDEBAR (2 cols) ── */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>

            {/* Contact Details */}
            <div className="group relative p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative font-heading text-lg sm:text-xl font-bold mb-5 sm:mb-6 group-hover:text-primary transition-colors">Contact Details</h3>
              <div className="relative space-y-3 sm:space-y-4">
                {contactDetails.map((info, idx) => (
                  <div key={idx} className="group/item relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-secondary/30 border-2 border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <div
                      className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 overflow-hidden"
                      style={{ background: info.bgColor || undefined }}
                    >
                      {!info.bgColor && <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg sm:rounded-xl" />}
                      {info.iconUrl
                        ? <img src={info.iconUrl} alt={info.label} className="relative w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                        : <info.FallbackIcon className="relative w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                      }
                    </div>
                    <div className="relative min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">{info.label}</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground break-words">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cyan-500/10 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
            </div>

            {/* Social Links */}
            <div className="group relative p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative font-heading text-lg sm:text-xl font-bold mb-5 sm:mb-6 group-hover:text-primary transition-colors">{connectTitle}</h3>
              <div className="relative space-y-2.5 sm:space-y-3">
                {socialLinks.map((link, idx) => {
                  const FallbackIcon = socialFallbackIcons[idx % socialFallbackIcons.length];
                  return (
                    <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="group/link relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-secondary/30 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover/link:scale-110 group-hover/link:rotate-6 transition-all duration-300 flex-shrink-0 overflow-hidden">
                        {link.iconUrl
                          ? <img src={link.iconUrl} alt={link.label} className="w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                          : <FallbackIcon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                        }
                      </div>
                      <div className="relative flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-0.5">{link.label}</p>
                        <p className="font-medium text-sm sm:text-base text-foreground truncate group-hover/link:text-primary transition-colors">{link.value}</p>
                      </div>
                      <ExternalLink className="relative w-3.5 sm:w-4 h-3.5 sm:h-4 text-muted-foreground group-hover/link:text-primary transition-colors flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cyan-500/10 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
