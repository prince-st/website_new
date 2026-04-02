import { useState, useEffect } from "react";
import { Star, Quote, Play, ChevronLeft, ChevronRight, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "James Whitfield",
    role: "Operations Director",
    company: "",
    content: "Bharat didn't just build our automation — he redesigned how our entire operation works. Our order processing time dropped by 60% within the first month. The system is still running flawlessly six months later without a single issue.",
    rating: 5,
  },
  {
    name: "Ashley Carter",
    role: "New York, USA",
    company: "",
    content: "We came to Bharat with a messy Shopify setup and left with a fully automated, AI-powered commerce ecosystem. His ability to understand business operations before touching code is what sets him apart from every other developer we've worked with.",
    rating: 5,
  },
  {
    name: "Liam Donovan",
    role: "CTO",
    company: "",
    content: "Bharat built an Agentic RAG pipeline for our SaaS platform that now handles 3,200+ users with 80% less manual intervention. The ROI was visible within weeks. Highly recommend for any complex AI implementation.",
    rating: 5,
  },
  {
    name: "Sophie Marchand",
    role: "Head of Product",
    company: "",
    content: "What impressed me most was Bharat's 30-day stability commitment after launch. Most freelancers disappear after delivery — Bharat stayed, hardened every edge case, and handed over full documentation. That's rare.",
    rating: 5,
  },
  {
    name: "Lukas Becker",
    role: "Berlin, Germany",
    company: "",
    content: "Bharat helped us migrate and centralise 12,000+ SKUs across platforms with zero downtime and a 45% efficiency gain. His full-stack background means he owns the entire solution — no dependency on third parties.",
    rating: 5,
  },
  {
    name: "Rachel Thompson",
    role: "Founder",
    company: "",
    content: "From discovery call to final handoff, Bharat was transparent, fast, and precise. He flagged risks before they became problems and delivered exactly what he promised — on time, fully documented, and built to scale.",
    rating: 5,
  },
];

type VideoSource = "youtube" | "drive" | "mp4" | "loom";

type VideoTestimonial = {
  id: number;
  title: string;
  role: string;
  thumbnail: string;
  source: VideoSource;
  youtubeId?: string;
  driveId?: string;
  loomId?: string;
  url?: string;
};

/*
VIDEO TESTIMONIALS GUIDE:
========================

To add different types of videos, update the videoTestimonials array:

1. YOUTUBE VIDEOS:
   {
     id: 1,
     title: "Your Title",
     role: "Your Description",
     thumbnail: "path/to/thumbnail.jpg",
     source: "youtube",
     youtubeId: "VIDEO_ID_FROM_YOUTUBE_URL", // e.g., from https://youtube.com/watch?v=VIDEO_ID
   }

2. LOOM VIDEOS:
   {
     id: 2,
     title: "Your Title", 
     role: "Your Description",
     thumbnail: "path/to/thumbnail.jpg",
     source: "loom",
     loomId: "VIDEO_ID_FROM_LOOM_URL", // e.g., from https://loom.com/share/VIDEO_ID
   }

3. MP4 VIDEOS (Direct URL):
   {
     id: 3,
     title: "Your Title",
     role: "Your Description", 
     thumbnail: "path/to/thumbnail.jpg",
     source: "mp4",
     url: "https://your-domain.com/video.mp4", // Direct MP4 URL
   }

4. GOOGLE DRIVE VIDEOS:
   {
     id: 4,
     title: "Your Title",
     role: "Your Description",
     thumbnail: "path/to/thumbnail.jpg", 
     source: "drive",
     driveId: "FILE_ID_FROM_DRIVE_URL", // e.g., from https://drive.google.com/file/d/FILE_ID/view
   }

THUMBNAILS:
- Place thumbnail images in React_site/public/ folder
- Reference them like "thumbnail.jpg" (no need for /public/ prefix)
- Or use external URLs like "https://images.unsplash.com/..."
*/

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    title: "Development Success",
    role: "Short development by developer side",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    source: "youtube",
    youtubeId: "4xB_VRfqYbQ", // Replace with your YouTube video ID
  },
  {
    id: 2,
    title: "SEO Growth",
    role: "Transcript by SEO side",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    source: "loom",
    loomId: "YOUR_LOOM_VIDEO_ID_HERE", // Replace with your Loom video ID (from loom.com/share/YOUR_ID)
  },
  {
    id: 3,
    title: "Client Feedback",
    role: "Project Success Story",
    thumbnail: "Screenshot_5.png", // Your custom thumbnail
    source: "loom",
    loomId: "498d2d75114a4eecbfa5e9c64392c976", // Add your MP4 video URL here
  },
  {
    id: 4,
    title: "UI/UX Design Impact",
    role: "Design transformation results",
    thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop",
    source: "youtube",
    youtubeId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
  },
  {
    id: 5,
    title: "Marketing Campaign Success",
    role: "ROI improvement testimonial",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    source: "drive",
    driveId: "YOUR_GOOGLE_DRIVE_FILE_ID_HERE", // Replace with your Google Drive file ID
  },
  {
    id: 6,
    title: "E-commerce Platform",
    role: "Full-stack development review",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    source: "loom",
    loomId: "ANOTHER_LOOM_VIDEO_ID", // Replace with your Loom video ID
  },
];

const clientLogos = [
  "GENIE AI",
  "Tufa",
  "HappilyEver",
  "TechStart",
  "Innovate Co",
  "Digital First",
];

export function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [currentTextSlide, setCurrentTextSlide] = useState(0);
  
  // Items per slide
  const videosPerSlide = 3;
  const textsPerSlide = 3;
  
  // Calculate total slides
  const totalVideoSlides = Math.ceil(videoTestimonials.length / videosPerSlide);
  const totalTextSlides = Math.ceil(testimonials.length / textsPerSlide);
  
  // Auto-play functionality
  useEffect(() => {
    if (totalVideoSlides > 1) {
      const interval = setInterval(() => {
        setCurrentVideoSlide((prev) => (prev + 1) % totalVideoSlides);
      }, 30000); // Change slide every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [totalVideoSlides]);
  
  useEffect(() => {
    if (totalTextSlides > 1) {
      const interval = setInterval(() => {
        setCurrentTextSlide((prev) => (prev + 1) % totalTextSlides);
      }, 30000); // Change slide every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [totalTextSlides]);
  
  // Get current slide items
  const getCurrentVideoItems = () => {
    const startIndex = currentVideoSlide * videosPerSlide;
    return videoTestimonials.slice(startIndex, startIndex + videosPerSlide);
  };
  
  const getCurrentTextItems = () => {
    const startIndex = currentTextSlide * textsPerSlide;
    return testimonials.slice(startIndex, startIndex + textsPerSlide);
  };
  
  // Navigation functions
  const nextVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev + 1) % totalVideoSlides);
  };
  
  const prevVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev - 1 + totalVideoSlides) % totalVideoSlides);
  };
  
  const nextTextSlide = () => {
    setCurrentTextSlide((prev) => (prev + 1) % totalTextSlides);
  };
  
  const prevTextSlide = () => {
    setCurrentTextSlide((prev) => (prev - 1 + totalTextSlides) % totalTextSlides);
  };

  return (
    <section id="testimonials" className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      
      {/* Consistent 3D Background */}
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
            <pattern id="testimonials-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonials-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          {/* Enhanced 3D Badge Button */}
          <div className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-6">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative flex items-center gap-3">
              <Quote className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                Testimonials
              </span>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
            </div>
          </div>
          
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Video{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 blur-2xl" />
              <span className="relative bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Watch short clips where clients share their experience, results, and why they recommend working with me.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-24">
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevVideoSlide}
                disabled={totalVideoSlides <= 1}
                className="rounded-full h-12 w-12 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextVideoSlide}
                disabled={totalVideoSlides <= 1}
                className="rounded-full h-12 w-12 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Slide Counter */}
            {totalVideoSlides > 1 && (
              <div className="text-sm text-muted-foreground">
                {currentVideoSlide + 1} / {totalVideoSlides}
              </div>
            )}
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-8 transition-all duration-500">
            {getCurrentVideoItems().map((video) => (
              <div 
                key={video.id} 
                className="group relative cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                {/* Video Card */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  
                  {/* Thumbnail */}
                  <div className="absolute inset-0">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
                      <div className="relative w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm border-4 border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl">
                        <Play className="w-8 h-8 text-primary group-hover:text-white transition-colors ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="font-heading font-bold text-white text-xl mb-2 drop-shadow-lg">
                        {video.title}
                      </h4>
                      <p className="text-white/90 text-sm line-clamp-2">
                        {video.role}
                      </p>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {totalVideoSlides > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              {Array.from({ length: totalVideoSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentVideoSlide(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300", 
                    i === currentVideoSlide ? "w-12 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50 hover:w-8"
                  )} 
                />
              ))}
            </div>
          )}
        </div>

        {/* Text Reviews - Enhanced Section */}
        <div className="mb-20">
          <div className="text-center mb-10 sm:mb-12 animate-fade-in-up">
            {/* Enhanced 3D Badge Button */}
            <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-4 sm:mb-6">
              {/* Animated Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative flex items-center gap-2 sm:gap-3">
                <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                  Client Reviews
                </span>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
              </div>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              What{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
                <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                  Clients Say
                </span>
              </span>
            </h3>
            
            {/* Navigation for Text Reviews */}
            {totalTextSlides > 1 && (
              <div className="flex justify-center gap-3 mt-4 mb-8">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevTextSlide}
                  className="rounded-full h-10 w-10 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextTextSlide}
                  className="rounded-full h-10 w-10 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 transition-all duration-500">
            {getCurrentTextItems().map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Enhanced Review Card */}
                <div className="relative h-full p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.6)] overflow-hidden">
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Enhanced Quote Icon */}
                  <div className="absolute -top-2.5 sm:-top-3 md:-top-4 -left-2.5 sm:-left-3 md:-left-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] group-hover:scale-110 transition-all duration-500 border-2 border-primary/30 z-10">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                    
                    {/* Orbiting Dot */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl animate-spin opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '3s' }}>
                      <div className="absolute top-1 left-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 shadow-[0_0_6px_white]" />
                    </div>
                    
                    <Quote className="relative w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white drop-shadow-lg" />
                  </div>

                  {/* Enhanced Stars */}
                  <div className="flex gap-1 mb-5 sm:mb-6 mt-5 sm:mt-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="relative">
                        <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-primary text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="relative text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 italic break-words">
                    "{testimonial.content}"
                  </p>

                  {/* Enhanced Author */}
                  <div className="relative flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t-2 border-border/50 group-hover:border-primary/30 transition-colors">
                    <div className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      {/* Avatar Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-cyan-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <span className="relative font-heading font-bold text-white text-base sm:text-lg drop-shadow-lg">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground break-words">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Multiple Outer Glow Layers */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-cyan-500/20 opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-500 rounded-3xl -z-10" />
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-700 rounded-3xl -z-10" />
              </div>
            ))}
          </div>
          
          {/* Pagination Dots for Text Reviews */}
          {totalTextSlides > 1 && (
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: totalTextSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTextSlide(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300", 
                    i === currentTextSlide ? "w-12 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50 hover:w-8"
                  )} 
                />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Client Logos Section - HIDDEN */}
        <div className="hidden">
          {/* Enhanced Badge */}
          <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-xl shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden mb-6 sm:mb-8">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative flex items-center gap-2 sm:gap-3">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:rotate-12 transition-transform drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-[0_0_10px_rgba(20,184,166,0.5)] text-center break-words">
                Trusted by companies worldwide
              </span>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-12" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {clientLogos.map((logo, idx) => (
              <div
                key={logo}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow Orb */}
                  <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                  
                  <span className="relative font-heading font-bold text-base sm:text-lg lg:text-xl text-muted-foreground group-hover:text-primary transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] whitespace-nowrap">
                    {logo}
                  </span>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Outer Glow */}
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-br from-primary/30 to-cyan-500/20 opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-500 rounded-xl sm:rounded-2xl -z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-border/20 backdrop-blur-xl">
          <div className="relative pt-[56.25%]">
            {activeVideo && (
              activeVideo.source === "youtube" && activeVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title="Video testimonial"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : activeVideo.source === "loom" && activeVideo.loomId ? (
                <iframe
                  src={`https://www.loom.com/embed/${activeVideo.loomId}?autoplay=1`}
                  title="Video testimonial"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : activeVideo.source === "drive" && activeVideo.driveId ? (
                <iframe
                  src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
                  title="Video testimonial"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="autoplay"
                  allowFullScreen
                />
              ) : activeVideo.source === "mp4" && activeVideo.url ? (
                <video
                  src={activeVideo.url}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  controls
                  autoPlay
                />
              ) : null
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
