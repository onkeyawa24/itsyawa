
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-theme-blue text-white py-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#" className="text-xl font-bold flex items-center gap-2">
              <span className="text-theme-accent">&lt;</span>
              itsyawa
              <span className="text-theme-accent">/&gt;</span>
            </a>
            <p className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} Onke Yawa. All rights reserved.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <a 
              href="#hero" 
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-theme-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
