
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-theme-blue flex items-center gap-2"
          >
            <span className="text-theme-accent">&lt;</span>
            itsyawa
            <span className="text-theme-accent">/&gt;</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-theme-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow-md animate-fade-in">
          <nav className="flex flex-col gap-4">
            <NavLinks mobile setIsMenuOpen={(value) => setIsMenuOpen(value)} />
            <Button asChild>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Update the NavLinks component to correctly handle the setIsMenuOpen function
const NavLinks = ({ 
  mobile = false, 
  setIsMenuOpen = () => {} 
}: { 
  mobile?: boolean; 
  setIsMenuOpen?: (value: boolean) => void 
}) => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { to: "/education", label: "Education" }
  ];

  return links.map((link) => {
    // Create either a regular anchor tag or a React Router Link based on if 'to' property exists
    if ('to' in link) {
      return (
        <Link
          key={link.to}
          to={link.to}
          className={`${
            mobile
              ? "text-theme-blue text-lg py-2 border-b border-gray-100"
              : "text-theme-blue hover:text-theme-accent transition-colors"
          }`}
          onClick={() => mobile && setIsMenuOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    
    return (
      <a
        key={link.href}
        href={link.href}
        className={`${
          mobile
            ? "text-theme-blue text-lg py-2 border-b border-gray-100"
            : "text-theme-blue hover:text-theme-accent transition-colors"
        }`}
        onClick={() => mobile && setIsMenuOpen(false)}
      >
        {link.label}
      </a>
    );
  });
};

export default Navbar;
