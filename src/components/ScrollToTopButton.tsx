
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHomeSection, setIsHomeSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're in the home section (first 100vh)
      const isHome = window.scrollY < window.innerHeight;
      setIsHomeSection(isHome);
      
      // Show button when scrolled down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 bg-theme-blue text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 hover:bg-theme-accent",
        isVisible && !isHomeSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
