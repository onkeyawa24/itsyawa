
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/sections/Education";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-white dark:bg-gray-900">
          <About />
        </div>
        <div className="bg-theme-bg dark:bg-gray-800">
          <Projects />
        </div>
        <div className="bg-white dark:bg-gray-900">
          <Skills />
        </div>
        <Education />
        <div className="bg-theme-blue dark:bg-gray-800">
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
