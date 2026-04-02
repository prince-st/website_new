import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Users, BookOpen, Puzzle, Calendar, Activity, Sparkles, ExternalLink, Briefcase, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "GENIE AI Platform",
    category: "AI / Product Design",
    problem: "Slow development cycles and inconsistent user experience",
    solution: "User-centered design system with streamlined workflows",
    result: "25% faster development, 15% efficiency boost",
    gradient: "from-purple-500/20 to-pink-500/20",
    client: "GENIE AI",
    teamSize: "6 Members",
    keyLearning: "Advanced AI Model Integration",
    mainChallenge: "Real-time Data Processing",
    timeline: "Mar 2024 → Present",
    status: "Active Development"
  },
  {
    id: 2,
    title: "Tufa MVP Launch",
    category: "Product Design / Strategy",
    problem: "Needed scalable design system for rapid MVP development",
    solution: "Custom design system with conversion-focused UI",
    result: "Significant increase in early user sign-ups",
    gradient: "from-blue-500/20 to-cyan-500/20",
    client: "Tufa Inc.",
    teamSize: "4 Members",
    keyLearning: "Rapid Prototyping",
    mainChallenge: "Tight Deadline Management",
    timeline: "Jan 2024 → Mar 2024",
    status: "Completed"
  },
  {
    id: 3,
    title: "HappilyEver UX Redesign",
    category: "UI/UX Design",
    problem: "High support tickets and low user satisfaction",
    solution: "Design workshops and user feedback prioritization",
    result: "Reduced support tickets, improved satisfaction",
    gradient: "from-green-500/20 to-emerald-500/20",
    client: "HappilyEver",
    teamSize: "3 Members",
    keyLearning: "User Research Analysis",
    mainChallenge: "Legacy System Constraints",
    timeline: "Nov 2023 → Feb 2024",
    status: "Completed"
  },
  {
    id: 4,
    title: "E-commerce Growth Campaign",
    category: "SEO / PPC",
    problem: "Low organic traffic and poor conversion rates",
    solution: "Technical SEO overhaul + targeted PPC campaigns",
    result: "180% increase in organic traffic",
    gradient: "from-orange-500/20 to-red-500/20",
    client: "TechRetail Corp",
    teamSize: "5 Members",
    keyLearning: "Conversion Rate Optimization",
    mainChallenge: "Market Saturation",
    timeline: "Aug 2023 → Jan 2024",
    status: "Ongoing Maintenance"
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "WordPress / AI Integration",
    problem: "Complex data visualization needs for analytics",
    solution: "Custom WordPress dashboard with AI insights",
    result: "40% faster decision-making for clients",
    gradient: "from-teal-500/20 to-cyan-500/20",
    client: "DataFlow Systems",
    teamSize: "4 Members",
    keyLearning: "Data Visualization D3.js",
    mainChallenge: "Large Dataset Handling",
    timeline: "Oct 2023 → Dec 2023",
    status: "Completed"
  },
  {
    id: 6,
    title: "Mobile App Development",
    category: "App Development / UI Design",
    problem: "Legacy app with poor performance and UX",
    solution: "Complete rebuild with modern tech stack",
    result: "4.8★ app store rating, 3x user retention",
    gradient: "from-violet-500/20 to-purple-500/20",
    client: "FitLife App",
    teamSize: "7 Members",
    keyLearning: "React Native Performance",
    mainChallenge: "Cross-platform Consistency",
    timeline: "Jul 2023 → Nov 2023",
    status: "Completed"
  },
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, projectId: number) => {
    if (hoveredCard === projectId) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Advanced 3D Background - Same as Process Section */}
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Multiple Floating Orbs */}
      {/* Minimal Professional Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-2">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-accent/8 to-primary/8 rounded-full blur-3xl animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }} />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="portfolio-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          {/* 3D Badge Button */}
          <div className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-6">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                Portfolio
              </span>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
            </div>
          </div>
          
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
              <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                Case Studies
              </span>
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Real projects with real results. See how I've helped businesses achieve their goals.
          </p>
        </div>

        {/* Projects Grid with Ultra Advanced Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card Container with Advanced 3D Tilt */}
              <div 
                className="relative h-full rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl overflow-hidden transform-gpu"
                style={{
                  transform: hoveredCard === project.id ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.02)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Animated Mesh Gradient Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-cyan-500/30 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
                </div>

                {/* Project Header - Enhanced Slanted Design */}
                <div className="relative h-72 overflow-hidden">
                  
                  {/* Multi-layer Slanted Backgrounds */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient.replace('/20', '/50')} transform -skew-y-3 scale-110 transition-transform duration-700 group-hover:skew-y-0 group-hover:scale-105`}>
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                      <svg width="100%" height="100%">
                        <defs>
                          <pattern id={`grid-${project.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                      </svg>
                    </div>
                    
                    {/* Floating Particles Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${3 + i}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    
                    {/* Top Section - Enhanced Number & Category */}
                    <div className="flex items-start justify-between">
                      {/* 3D Hexagon Number Badge */}
                      <div className="relative w-20 h-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                          <defs>
                            <linearGradient id={`hex-gradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="hsl(var(--primary))" />
                              <stop offset="50%" stopColor="hsl(var(--accent))" />
                              <stop offset="100%" stopColor="hsl(var(--primary))" />
                            </linearGradient>
                            <filter id={`glow-${project.id}`}>
                              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          <polygon 
                            points="50 1 95 25 95 75 50 99 5 75 5 25" 
                            fill={`url(#hex-gradient-${project.id})`}
                            filter={`url(#glow-${project.id})`}
                            className="animate-pulse"
                            style={{ animationDuration: '3s' }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center font-heading text-3xl font-bold text-white drop-shadow-lg">
                          {String(project.id).padStart(2, '0')}
                        </span>
                        {/* Orbiting Dots */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                          <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2" />
                        </div>
                      </div>

                      {/* Animated Category Pill */}
                      <div className="px-4 py-2 rounded-full bg-background/95 backdrop-blur-md border-2 border-border/50 shadow-xl group-hover:border-primary/50 group-hover:scale-105 transition-all duration-500">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {project.category.split('/')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Section - Enhanced Title */}
                    <div className="space-y-3">
                      <h3 className="font-heading text-3xl font-bold text-foreground drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 origin-left">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-16 bg-gradient-to-r from-primary to-cyan-500 rounded-full group-hover:w-24 transition-all duration-500" />
                        <span className="text-sm text-foreground/80 font-semibold">{project.client}</span>
                      </div>
                      {/* Status Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold text-primary">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/96 to-background/98 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center z-20">
                    <div className="text-center space-y-6 px-6 transform scale-90 group-hover:scale-100 transition-transform duration-700">
                      {/* Animated Icon */}
                      <div className="relative mx-auto w-24 h-24">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-3xl animate-pulse blur-xl" />
                        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform duration-700">
                          <ExternalLink className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <Button 
                        variant="hero" 
                        size="lg" 
                        onClick={() => setSelectedProject(project)}
                        className="shadow-2xl hover:shadow-primary/50 group/btn"
                      >
                        <span className="relative z-10">View Full Case Study</span>
                        <ArrowUpRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content - Enhanced Design */}
                <div className="relative p-7 space-y-6 bg-card">
                  
                  {/* Challenge & Solution - Enhanced Pills */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group/pill relative p-4 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-500 overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-red-500/10 rounded-full blur-xl group-hover/pill:scale-150 transition-transform duration-500" />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">Challenge</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {project.problem}
                        </p>
                      </div>
                    </div>
                    
                    <div className="group/pill relative p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-500 overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-green-500/10 rounded-full blur-xl group-hover/pill:scale-150 transition-transform duration-500" />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Solution</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Result - Ultra Prominent Display */}
                  <div className="relative p-6 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/10 to-cyan-500/10 border-2 border-primary/30 overflow-hidden group/result hover:scale-[1.02] transition-all duration-500">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 opacity-0 group-hover/result:opacity-100 transition-opacity duration-700 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
                    
                    {/* Background Icon */}
                    <div className="absolute -right-6 -bottom-6 opacity-5 group-hover/result:opacity-10 transition-opacity duration-500">
                      <TrendingUp className="w-32 h-32" />
                    </div>
                    
                    <div className="relative flex items-center gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl blur-lg animate-pulse" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-2xl group-hover/result:scale-110 group-hover/result:rotate-12 transition-all duration-500">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-primary/80 mb-1.5 uppercase tracking-wider font-bold flex items-center gap-2">
                          <Sparkles className="w-3 h-3" />
                          Impact & Results
                        </p>
                        <p className="text-base font-bold text-primary leading-tight">{project.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags with Animation */}
                  <div className="flex flex-wrap gap-2">
                    {project.category.split('/').map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-32 group-hover:h-32" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-32 group-hover:h-32" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>

              {/* Multi-layer Enhanced Outer Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient.replace('/20', '/50')} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-3xl -z-10`} />
              <div className={`absolute -inset-2 bg-gradient-to-br ${project.gradient.replace('/20', '/30')} opacity-0 group-hover:opacity-70 blur-3xl transition-all duration-700 rounded-3xl -z-20`} />
              <div className={`absolute -inset-3 bg-gradient-to-br ${project.gradient.replace('/20', '/20')} opacity-0 group-hover:opacity-40 blur-[40px] transition-all duration-700 rounded-3xl -z-30`} />
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="heroOutline" size="lg" asChild className="group relative overflow-hidden border-2 border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <a href="#contact" className="flex items-center gap-2">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300 rounded-xl -z-10" />
              
              {/* Icon */}
              <Briefcase className="relative w-5 h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
              
              <span className="relative z-10 group-hover:text-primary transition-colors">View Full Portfolio</span>
              
              <ArrowRight className="relative w-5 h-5 text-primary group-hover:translate-x-1 transition-transform drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
              
              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Button>
        </div>
      </div>

      {/* Enhanced Case Study Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-card border-2 border-border p-0 overflow-hidden gap-0 rounded-3xl">
          {selectedProject && (
            <>
              {/* Modal Header - Unique Design */}
              <div className={`relative p-5 sm:p-7 md:p-10 bg-gradient-to-br ${selectedProject.gradient.replace('/20', '/40')} border-b-2 border-border overflow-hidden`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="modal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#modal-dots)" />
                  </svg>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-cyan-500/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  {/* Client Badge */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary/30 mb-4 sm:mb-5 md:mb-6 shadow-xl">
                    <div className="w-2 h-2 flex-shrink-0 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider truncate">
                      {selectedProject.client}
                    </span>
                  </div>
                  
                  {/* Title & Category */}
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 drop-shadow-lg break-words">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-1 w-12 sm:w-14 md:w-16 flex-shrink-0 bg-primary rounded-full" />
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-medium break-words">{selectedProject.category}</p>
                  </div>
                </div>
              </div>

              {/* Modal Content - Redesigned Grid */}
              <div className="p-4 sm:p-6 md:p-10 max-h-[65vh] overflow-y-auto">
                
                {/* Main Info Grid - 2x2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  
                  {/* Team Size */}
                  <div className="group relative p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Users className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32" />
                    </div>
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-blue-600 dark:text-blue-400 mb-1 sm:mb-2 uppercase tracking-wider font-bold">Team Size</p>
                        <p className="text-lg sm:text-xl font-bold text-foreground break-words">{selectedProject.teamSize}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="group relative p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Calendar className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32" />
                    </div>
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-purple-600 dark:text-purple-400 mb-1 sm:mb-2 uppercase tracking-wider font-bold">Timeline</p>
                        <p className="text-sm sm:text-base font-bold text-foreground leading-tight break-words">{selectedProject.timeline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Learning */}
                  <div className="group relative p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <BookOpen className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32" />
                    </div>
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-green-600 dark:text-green-400 mb-1 sm:mb-2 uppercase tracking-wider font-bold">Key Learning</p>
                        <p className="text-lg sm:text-xl font-bold text-foreground break-words">{selectedProject.keyLearning}</p>
                      </div>
                    </div>
                  </div>

                  {/* Main Challenge */}
                  <div className="group relative p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Puzzle className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32" />
                    </div>
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Puzzle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-red-600 dark:text-red-400 mb-1 sm:mb-2 uppercase tracking-wider font-bold">Main Challenge</p>
                        <p className="text-lg sm:text-xl font-bold text-foreground break-words">{selectedProject.mainChallenge}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status - Full Width Prominent Card */}
                <div className="relative p-5 sm:p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/10 to-cyan-500/10 border-2 border-primary/30 overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-36 sm:w-42 md:w-48 h-36 sm:h-42 md:h-48 bg-cyan-500/10 rounded-full blur-3xl" />
                  
                  <div className="relative flex items-center gap-4 sm:gap-5 md:gap-6">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex-shrink-0 rounded-3xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Activity className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 uppercase tracking-wider font-bold">Project Status</p>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-bold bg-primary/20 text-primary border-2 border-primary/40 shadow-lg break-words">
                          <div className="w-2 h-2 flex-shrink-0 rounded-full bg-primary animate-pulse" />
                          <span className="truncate">{selectedProject.status}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer - Enhanced */}
              <div className="relative p-4 sm:p-5 md:p-6 border-t-2 border-border bg-gradient-to-r from-secondary/50 via-secondary/30 to-secondary/50 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`
                  }} />
                </div>
                <div className="relative flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="font-semibold text-foreground text-center break-words">
                    Happy client feedback received for this project
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
