import { Code2 } from "lucide-react";

const techCategories = [
  {
    title: "AI & Automation",
    tools: ["n8n", "Make", "Agentic RAG", "ChatGPT", "Claude", "AI", "Gemini", "LangChain", "OpenAI API", "Business Process Automation"],
  },
  {
    title: "CMS & eCommerce",
    tools: ["Shopify", "Shopify Plus", "Magento 2", "WordPress", "WooCommerce", "Headless Commerce"],
  },
  {
    title: "Development",
    tools: ["Node.js", "Python", "PHP 8.x", "React", "Next.js", "REST APIs", "GraphQL", "Tailwind CSS"],
  },
  {
    title: "Databases & Infrastructure",
    tools: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Google Cloud", "Docker", "Supabase"],
  },
  {
    title: "Marketing & Analytics",
    tools: ["Google Analytics", "Google Search Console", "Google Tag Manager", "Bing Webmaster", "SEMrush", "Ahrefs", "Google Ads", "Meta Ads", "Social Media Platforms"],
  },
  {
    title: "Integrations & APIs",
    tools: ["Zapier", "REST APIs", "Webhooks", "Stripe", "PayPal", "ERP Integrations", "CRM Integrations"],
  },
  {
    title: "Collaboration",
    tools: ["Slack", "Notion", "Jira", "GitHub", "Trello"],
  },
  {
    title: "Cloud & Infrastructure",
    tools: ["AWS", "Azure", "Google Cloud", "Vercel", "Netlify"],
  },
  {
    title: "Design & Prototyping",
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"],
  },
];

export function TechStackSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-slate-100 relative overflow-hidden">
      {/* Advanced 3D Background - Same as Process Section */}
      {/* Clean NineHertz Style Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50/20 to-slate-100" />
      
      {/* Multiple Floating Orbs */}
      {/* Minimal Professional Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-3">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }} />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="tech-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          {/* 3D Badge Button */}
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-4 sm:mb-6">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative flex items-center gap-3">
              <Code2 className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                Tech Stack
              </span>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
            </div>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-black">
            Tools & Technologies I{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
              <span className="relative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                Master
              </span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black font-medium">
            Leveraging the best-in-class tools to deliver exceptional results.
          </p>
        </div>

        {/* Enhanced Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow Orb */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                
                <h3 className="relative font-heading text-base sm:text-lg font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 drop-shadow-sm">
                  {category.title}
                </h3>
                <div className="relative flex flex-wrap gap-2">
                  {category.tools.map((tool, idx) => (
                    <span
                      key={tool}
                      className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold border hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default
                        ${idx % 2 === 0
                          ? "bg-gray-100 border-gray-400 text-gray-900 hover:bg-gray-200"
                          : "bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100"
                        }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner Decoration */}
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                </div>
              </div>

              {/* Multiple Outer Glow Layers */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-cyan-500/20 opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-500 rounded-2xl -z-10" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-700 rounded-2xl -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
