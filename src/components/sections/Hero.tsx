
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative bg-[#b9d5d5] dark:bg-gray-900">
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-theme-highlight/10 -z-10 rounded-bl-[30%] dark:bg-gray-800/20" />
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-4xl">
          <p className="text-foreground font-medium mb-4 animate-fade-up dark:text-white">
            👋 Hi there! I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up dark:text-white" style={{ animationDelay: "0.1s" }}>
            <span className="title-highlight">Onke Yawa</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-8 animate-fade-up dark:text-theme-accent" style={{ animationDelay: "0.2s" }}>
            Cloud Developer
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mb-10 animate-fade-up dark:text-white/80" style={{ animationDelay: "0.3s" }}>
            Cloud-focused developer skilled in Azure and automation. 
            Delivering scalable, reliable infrastructure and modern IT solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="dark:bg-transparent dark:text-white dark:hover:bg-gray-800">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="w-[400px] h-[400px] rounded-lg overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
            <img 
              src="/lovable-uploads/f436337c-e48f-4216-9a38-6a758d738835.png" 
              alt="Onke Yawa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-foreground dark:text-white" />
      </a>
    </section>
  );
};

export default Hero;
