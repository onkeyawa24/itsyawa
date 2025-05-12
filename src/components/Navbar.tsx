
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };
  
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
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 dark:bg-gray-900/90"
          : "bg-transparent py-6 dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-theme-blue flex items-center gap-2 dark:text-white"
          >
            <span className="text-theme-accent">&lt;</span>
            itsyawa
            <span className="text-theme-accent">/&gt;</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-theme-blue dark:text-white"
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
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pt-4 pb-6 shadow-md animate-fade-in">
          <nav className="flex flex-col gap-4">
            <NavLinks mobile setIsMenuOpen={(value) => setIsMenuOpen(value)} />
            <Button asChild>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Get in Touch
              </a>
            </Button>
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
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
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" }
  ];

  return links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className={`${
        mobile
          ? "text-theme-blue text-lg py-2 border-b border-gray-100 dark:text-white dark:border-gray-700"
          : "text-theme-blue hover:text-theme-accent transition-colors dark:text-white"
      }`}
      onClick={() => mobile && setIsMenuOpen(false)}
    >
      {link.label}
    </a>
  ));
};

export default Navbar;
