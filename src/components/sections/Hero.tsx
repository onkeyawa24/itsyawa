
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      {/* Background image using Tailwind class */}
      <div 
        className="absolute inset-0 w-full h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat -z-20"
      />
      {/* Overlay for dimming the image */}
      <div className="absolute inset-0 w-full h-screen bg-black/40 -z-10" />
      
      <div className="section-container">
        <div className="max-w-4xl">
          <p className="text-theme-accent font-medium mb-4 animate-fade-up">
            👋 Hi there! I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="title-highlight">Onke Yawa</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-theme-light-blue mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Junior Web Developer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            I build responsive, accessible web applications with modern 
            technologies. Currently focused on React, TypeScript, and 
            building beautiful user interfaces.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
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
        <ArrowDown className="text-theme-blue" />
      </a>
    </section>
  );
};

export default Hero;
