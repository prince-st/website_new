import { Link } from "react-router-dom";
import { Linkedin, Mail, ExternalLink, Sparkles, ArrowUp } from "lucide-react";
import { useACFPage } from "@/hooks/useWordPressData";

const defaultQuickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const defaultSocialLinks = [
  { icon: Linkedin, href: "https://in.linkedin.com/in/bharat-gunani", label: "LinkedIn" },
  { icon: Mail, href: "mailto:bharat@storetransform.com", label: "Email" },
  { icon: ExternalLink, href: "https://www.upwork.com/freelancers/bharatgunani", label: "Upwork" },
];

const defaultServices = ["AI Consulting", "Web Development", "UI/UX Design", "Digital Marketing"];

// Map icon name string from ACF to Lucide component
const iconMap: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  mail: Mail,
  email: Mail,
  upwork: ExternalLink,
  external: ExternalLink,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { data } = useACFPage(35);

  // ACF fields expected:
  // brand_name, brand_description, logo_initials
  // quick_links (repeater: label, url)
  // social_links (repeater: icon (string), url, label)
  // services_list (repeater: name) OR services_text (textarea, newline separated)
  // copyright_text, privacy_url, terms_url

  const brandName: string = data?.brand_name || "Bharat Gunani";
  const logoInitials: string = data?.logo_initials || "B";
  const brandDescription: string =
    data?.brand_description ||
    "AI Consultant, Development & Digital Growth Partner. From strategy to deployment — Building AI-powered systems, high-performance eCommerce platforms, and automated workflows that scale your business without scaling your headcount.";
  const copyrightText: string = data?.copyright_text || `© ${currentYear} Bharat Gunani. All rights reserved.`;
  const privacyUrl: string = data?.privacy_url || "#";
  const termsUrl: string = data?.terms_url || "#";

  const quickLinks =
    Array.isArray(data?.quick_links) && data.quick_links.length > 0
      ? data.quick_links.map((l: any) => ({ name: l.label, href: l.url }))
      : defaultQuickLinks;

  const socialLinks =
    Array.isArray(data?.social_links) && data.social_links.length > 0
      ? data.social_links.map((l: any) => ({
          icon: iconMap[l.icon?.toLowerCase()] || ExternalLink,
          href: l.url,
          label: l.label,
        }))
      : defaultSocialLinks;

  const services: string[] = (() => {
    if (Array.isArray(data?.services_list) && data.services_list.length > 0) {
      return data.services_list.map((s: any) => s.name || s);
    }
    if (typeof data?.services_text === "string") {
      return data.services_text.split("\n").filter(Boolean);
    }
    return defaultServices;
  })();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-6 sm:py-8 lg:py-12 border-t-2 border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200/30 to-gray-100" />
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: "25s", animationDelay: "2s" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient" style={{ backgroundSize: "200% 100%" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-3 animate-fade-in-up">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-xl group-hover:shadow-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
                    <div className="absolute top-1 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 shadow-[0_0_6px_white]" />
                  </div>
                </div>
                <span className="relative text-primary-foreground font-heading font-bold text-2xl drop-shadow-lg">{logoInitials}</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-cyan-400 transition-all duration-300 block">
                  {brandName}
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300" />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">{brandDescription}</p>
            <div className="flex gap-2 pt-1">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-card border-2 border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden animate-fade-in-up shadow-lg hover:shadow-xl"
                  style={{ animationDelay: `${idx * 100}ms` }}
                  aria-label={link.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <link.icon className="relative w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors drop-shadow-sm group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-heading font-bold mb-3 flex items-center gap-2 text-base">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-cyan-500 rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={link.name} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 50}ms` }}>
                  <Link to={link.href} className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))] transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Scroll to Top */}
          <div className="animate-fade-in-up relative" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h4 className="font-heading font-bold mb-3 flex items-center gap-2 text-base">
                  <div className="w-1 h-5 bg-gradient-to-b from-primary to-cyan-500 rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                  Services
                </h4>
                <ul className="space-y-2">
                  {services.map((service, idx) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 50}ms` }}>
                      <Sparkles className="w-3 h-3 text-primary/50" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={scrollToTop}
                className="group relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 border-2 border-primary/30 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 overflow-hidden shadow-xl hover:shadow-2xl flex-shrink-0"
                aria-label="Scroll to top"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <ArrowUp className="relative w-6 h-6 text-primary group-hover:-translate-y-1 transition-all drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t-2 border-border/50 flex flex-col md:flex-row justify-between items-center gap-3 animate-fade-in-up pr-16 sm:pr-20" style={{ animationDelay: "0.3s" }}>
          <p className="text-xs text-muted-foreground text-center md:text-left">{copyrightText}</p>
          <div className="flex gap-4 text-xs">
            <a href={privacyUrl} className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href={termsUrl} className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
