
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-theme-blue text-white py-8 bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900 dark:text-white">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900 dark:text-white">
          <div>
            <a href="#" className="text-xl font-bold flex items-center gap-2 bg-gray-900 dark:text-white">
              <span className="text-theme-accent">&lt;</span>
              itsyawa
              <span className="text-theme-accent bg-gray-900 dark:text-white">/&gt;</span>
            </a>
            <p className="text-sm text-gray-400 mt-2 bg-gray-900 dark:text-white">
              © {new Date().getFullYear()} Onke Yawa. All rights reserved.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 bg-gray-900 dark:text-white">
            <a 
              href="#hero" 
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center bg-gray-900 dark:text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-theme-accent bg-gray-900 dark:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
