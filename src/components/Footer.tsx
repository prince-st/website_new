import { Link } from "react-router-dom";
import { Linkedin, Mail, ExternalLink, Sparkles, ArrowUp } from "lucide-react";
import { useWPPage, WP_PAGE_IDS, getImageUrl } from "@/hooks/useWordPressData";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { data } = useWPPage(WP_PAGE_IDS.FOOTER);

  // Exact ACF field names from WordPress (page 35):
  // footer_logo_text, footer_brand_name_text, footer_about_desc
  // footer_socials_list[].social_icon (image), footer_socials_list[].footer_social_link_url
  // footer_quick_title_text
  // footer_quick_links_list[].footer_quick_link_text, footer_quick_links_list[].footer_quick_link_url
  // footer_services_title_text
  // footer_services_list[].footer_service_item_text
  // footer_copy_text, privacy_policy, privacy_policy_link, terms_of_service, terms_of_service_link

  const logoText: string = data?.footer_logo_text || "B";
  const brandName: string = data?.footer_brand_name_text || "Bharat Gunani";
  const aboutDesc: string = data?.footer_about_desc || "AI Consultant, Development & Digital Growth Partner.";
  const copyText: string = data?.footer_copy_text || `© ${currentYear} Bharat Gunani. All rights reserved.`;
  const privacyLabel: string = data?.privacy_policy || "Privacy Policy";
  const privacyLink: string = data?.privacy_policy_link || "#";
  const termsLabel: string = data?.terms_of_service || "Terms of Service";
  const termsLink: string = data?.terms_of_service_link || "#";
  const quickTitle: string = data?.footer_quick_title_text || "Quick Links";
  const servicesTitle: string = data?.footer_services_title_text || "Services";

  const quickLinks =
    Array.isArray(data?.footer_quick_links_list) && data.footer_quick_links_list.length > 0
      ? data.footer_quick_links_list.map((l: any) => ({
          name: l.footer_quick_link_text?.trim(),
          href: l.footer_quick_link_url?.replace("http://localhost:8080", "") || "#",
        }))
      : [
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
        ];

  const services: string[] =
    Array.isArray(data?.footer_services_list) && data.footer_services_list.length > 0
      ? data.footer_services_list.map((s: any) => s.footer_service_item_text)
      : ["AI Consulting", "Web Development", "UI/UX Design", "Digital Marketing"];

  // Social links — icon is a WP image object (url), link is url string
  const socialLinks =
    Array.isArray(data?.footer_socials_list) && data.footer_socials_list.some((s: any) => s.footer_social_link_url)
      ? data.footer_socials_list
          .filter((s: any) => s.footer_social_link_url)
          .map((s: any) => ({
            iconUrl: s.social_icon?.url || null,
            href: s.footer_social_link_url,
          }))
      : null;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-6 sm:py-8 lg:py-12 border-t-2 border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200/30 to-gray-100" />
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: "25s", animationDelay: "2s" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 sm:mb-8">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-3 animate-fade-in-up">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-xl group-hover:shadow-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <span className="relative text-primary-foreground font-heading font-bold text-2xl drop-shadow-lg">{logoText}</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-cyan-400 transition-all duration-300 block">
                  {brandName}
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300" />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">{aboutDesc}</p>

            {/* Social links */}
            <div className="flex gap-2 pt-1">
              {socialLinks ? (
                socialLinks.map((link: any, idx: number) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-11 h-11 rounded-xl bg-card border-2 border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden shadow-lg hover:shadow-xl"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.iconUrl ? (
                      <img src={link.iconUrl} alt="social" className="relative w-5 h-5 object-contain" />
                    ) : (
                      <ExternalLink className="relative w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </a>
                ))
              ) : (
                <>
                  <a href="https://in.linkedin.com/in/bharat-gunani" target="_blank" rel="noopener noreferrer" className="group relative w-11 h-11 rounded-xl bg-card border-2 border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden shadow-lg" aria-label="LinkedIn">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Linkedin className="relative w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="mailto:bharat@storetransform.com" className="group relative w-11 h-11 rounded-xl bg-card border-2 border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden shadow-lg" aria-label="Email">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Mail className="relative w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.upwork.com/freelancers/bharatgunani" target="_blank" rel="noopener noreferrer" className="group relative w-11 h-11 rounded-xl bg-card border-2 border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden shadow-lg" aria-label="Upwork">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ExternalLink className="relative w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-heading font-bold mb-3 flex items-center gap-2 text-base">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-cyan-500 rounded-full" />
              {quickTitle}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link: any, idx: number) => (
                <li key={idx}>
                  <Link to={link.href} className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Scroll to Top */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h4 className="font-heading font-bold mb-3 flex items-center gap-2 text-base">
                  <div className="w-1 h-5 bg-gradient-to-b from-primary to-cyan-500 rounded-full" />
                  {servicesTitle}
                </h4>
                <ul className="space-y-2">
                  {services.map((service: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-3 h-3 text-primary/50 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={scrollToTop}
                className="group relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 border-2 border-primary/30 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 overflow-hidden shadow-xl flex-shrink-0"
                aria-label="Scroll to top"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ArrowUp className="relative w-6 h-6 text-primary group-hover:-translate-y-1 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t-2 border-border/50 flex flex-col md:flex-row justify-between items-center gap-3 pr-16 sm:pr-20">
          <p className="text-xs text-muted-foreground text-center md:text-left">{copyText}</p>
          <div className="flex gap-4 text-xs">
            <a href={privacyLink} className="text-muted-foreground hover:text-primary transition-colors">{privacyLabel}</a>
            <a href={termsLink} className="text-muted-foreground hover:text-primary transition-colors">{termsLabel}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
