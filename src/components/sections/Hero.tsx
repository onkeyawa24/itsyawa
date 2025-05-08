
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center -z-20" />
      <div className="absolute inset-0 bg-black/70 -z-10" /> {/* Dark overlay */}
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <p className="text-white font-medium mb-4 animate-fade-up">
            👋 Hi there! I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="title-highlight">Onke Yawa</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-theme-accent mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Junior Web Developer
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            I build responsive, accessible web applications with modern 
            technologies. Currently focused on React, TypeScript, and 
            building beautiful user interfaces.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-theme-accent hover:bg-theme-accent/90 text-foreground">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-white" />
      </a>
    </section>
  );
};

export default Hero;
