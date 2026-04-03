import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useACFPage } from "@/hooks/useWordPressData";

// Fallback static nav links
const defaultNavLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // ACF data from WordPress page ID 32 (Header)
  const { data } = useACFPage(32);

  // ACF fields expected: logo_text, logo_initials, logo_image (url), cta_label, cta_url, nav_links (repeater: label, url)
  const logoText: string = data?.logo_text || "Bharat";
  const logoInitials: string = data?.logo_initials || "BG";
  const logoImage: string = data?.logo_image?.url || data?.logo_image || "/ai-animation.gif";
  const ctaLabel: string = data?.cta_label || "Let's Talk";
  const ctaUrl: string = data?.cta_url || "/contact";

  const navLinks: { name: string; href: string }[] =
    Array.isArray(data?.nav_links) && data.nav_links.length > 0
      ? data.nav_links.map((item: any) => ({ name: item.label, href: item.url }))
      : defaultNavLinks;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl border-b-2 border-border/50 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)]"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      {/* Animated Gradient Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient" style={{ backgroundSize: "200% 100%" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 sm:gap-3">
            <div className="relative w-10 sm:w-12 h-10 sm:h-12">
              <img src={logoImage} alt="Logo Animation" className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl" />
              <div className="absolute inset-0 w-full h-full rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/90 to-cyan-500/90 flex items-center justify-center shadow-xl group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
                    <div className="absolute top-1 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 shadow-[0_0_6px_white]" />
                  </div>
                </div>
                <span className="relative text-white font-heading font-bold text-xl sm:text-2xl drop-shadow-lg">{logoInitials}</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg sm:text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-cyan-400 transition-all duration-300">
                {logoText}
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`group relative px-5 py-2.5 rounded-xl transition-all duration-300 text-sm font-bold ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${location.pathname === link.href ? "opacity-100" : ""}`} />
                {location.pathname === link.href && (
                  <>
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 opacity-50 blur-md -z-10" />
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))] animate-pulse" />
                  </>
                )}
                <span className="relative drop-shadow-sm">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default" asChild className="group relative overflow-hidden shadow-2xl hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-500 hover:scale-105">
              <Link to={ctaUrl} className="flex items-center gap-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 -z-10" />
                <Sparkles className="relative w-4 h-4 group-hover:rotate-12 transition-transform drop-shadow-lg" />
                <span className="relative z-10 font-bold">{ctaLabel}</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden relative p-2 rounded-xl text-foreground hover:bg-primary/10 transition-all duration-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t-2 border-border/50 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`group relative px-4 py-3 rounded-xl transition-all duration-300 animate-fade-in-up ${
                    location.pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {location.pathname === link.href && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                  )}
                  <span className="relative font-semibold">{link.name}</span>
                </Link>
              ))}
              <Button variant="hero" size="default" className="mt-4 group relative overflow-hidden shadow-2xl" asChild>
                <Link to={ctaUrl} className="flex items-center justify-center gap-2">
                  <Sparkles className="relative w-4 h-4 group-hover:rotate-12 transition-transform drop-shadow-lg" />
                  <span className="relative z-10 font-bold">{ctaLabel}</span>
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
