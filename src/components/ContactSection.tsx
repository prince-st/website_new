import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, ExternalLink, Send, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:bharat@storetransform.com", value: "bharat@storetransform.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://in.linkedin.com/in/bharat-gunani", value: "in.linkedin.com/in/bharat-gunani" },
    // { icon: Github, label: "GitHub", href: "https://github.com/bharatgunani", value: "github.com/bharatgunani" },
    { icon: ExternalLink, label: "Upwork", href: "https://www.upwork.com/freelancers/bharatgunani", value: "upwork.com/freelancers/bharatgunani" },
  ];

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Available Worldwide" },
    { icon: Phone, label: "Response Time", value: "Within 24 Hours" },
    { icon: Clock, label: "Availability", value: "Mon - Sat, 9AM - 6PM" },
  ];

  return (
    <section id="contact" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      
      {/* Advanced 3D Background - Same as Process Section */}
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Minimal Professional Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-2">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/8 to-primary/8 rounded-full blur-3xl animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }} />
      </div>

      {/* Animated Grid Pattern */}
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
        
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          {/* 3D Badge Button */}
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-4 sm:mb-6">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative flex items-center gap-2 sm:gap-3">
              <Send className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                Contact
              </span>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
            </div>
          </div>
          
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Let's Start a{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
              <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                Conversation
              </span>
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Have a project in mind? I'd love to hear about it. Drop me a message 
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Enhanced Contact Form - 3 columns */}
          <div className="lg:col-span-3 space-y-5 sm:space-y-6">
            <div className="animate-fade-in-up">
              <div className="group relative p-6 sm:p-7 lg:p-10 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.6)] overflow-hidden">
              
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative Glow Orbs */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />

                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                      <Send className="relative w-5 sm:w-6 h-5 sm:h-6 text-white drop-shadow-lg" />
                    </div>
                    <span className="break-words">Send a Message</span>
                  </h3>
                
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 sm:h-12 bg-secondary/50 border-border focus:border-primary rounded-xl text-sm sm:text-base"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-11 sm:h-12 bg-secondary/50 border-border focus:border-primary rounded-xl text-sm sm:text-base"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                        Project Brief
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, goals, and timeline..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary resize-none rounded-xl text-sm sm:text-base"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full h-12 sm:h-14 text-sm sm:text-base shadow-2xl hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] group relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span>
                          <Send className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-2 group-hover:rotate-12 transition-all relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-30 transition-opacity blur-xl" />
                          
                          {/* Orbiting Dot */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                              <div className="absolute top-2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 shadow-[0_0_6px_white]" />
                            </div>
                          </div>
                        </>
                      )}
                    </Button>
                  </form>
                </div>
                
                {/* Multiple Outer Glow Layers */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-cyan-500/20 opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-700 rounded-3xl -z-10" />
              </div>
            </div>

            {/* Enhanced Quick Response Badge - Below Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)]">
                {/* Animated Glow */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
                      <Clock className="relative w-5 sm:w-6 h-5 sm:h-6 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">Quick Response</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words">
                    I typically respond within 24 hours. For urgent projects, 
                    mention "URGENT" in your message subject.
                  </p>
                </div>
                
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Enhanced Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Contact Details */}
            <div className="group relative p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="relative font-heading text-lg sm:text-xl font-bold mb-5 sm:mb-6 group-hover:text-primary transition-colors">Contact Details</h3>
              <div className="relative space-y-3 sm:space-y-4">
                {contactInfo.map((info, idx) => (
                  <div 
                    key={info.label}
                    className="group/item relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-secondary/30 border-2 border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Item Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                      <info.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                    </div>
                    <div className="relative min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">{info.label}</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground break-words">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cyan-500/10 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
            </div>

            {/* Enhanced Social Links */}
            <div className="group relative p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="relative font-heading text-lg sm:text-xl font-bold mb-5 sm:mb-6 group-hover:text-primary transition-colors">Connect With Me</h3>
              <div className="relative space-y-2.5 sm:space-y-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-secondary/30 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Link Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover/link:scale-110 group-hover/link:rotate-6 transition-all duration-300 flex-shrink-0">
                      <link.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                    </div>
                    <div className="relative flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-0.5">{link.label}</p>
                      <p className="font-medium text-sm sm:text-base text-foreground truncate group-hover/link:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                    <ExternalLink className="relative w-3.5 sm:w-4 h-3.5 sm:h-4 text-muted-foreground group-hover/link:text-primary transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cyan-500/10 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
