
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-theme-bg dark:bg-gray-800">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="title-highlight">My Projects</span>
          </h2>
          <p className="text-theme-light-blue dark:text-white mb-12">Some of my recent work</p>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`grid md:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-lg">
                    <img 
                      src={project.image}
                      alt={project.title} 
                      className="rounded-md object-cover w-full h-[250px]" 
                    />
                  </div>
                </div>
                
                <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="dark:bg-gray-700 dark:text-white">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                      <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Code size={16} />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="mb-6 text-gray-700 dark:text-gray-200">
              Interested in seeing more of my work?
            </p>
            <Button asChild className="dark:bg-theme-accent dark:text-white">
              <a 
                href="https://github.com/onkeyawa24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "E-Commerce Website - AN Buildind",
    description: "A responsive e-commerce platform with data visualization, user management, and inventory tracking features.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
image: "./lovable-uploads/AN.jpg",
    demo: "#",
    code: "#"
  },
  {
    title: "Social Networking - Winett",
    description: "A web application that allow users to share content such as videos pictures and messaging.",
    tech: ["React", "Firebase", "CSS Modules", "Recharts"],
image: "./lovable-uploads/winett.PNG",

    demo: "#",
    code: "#"
  },
  {
    title: "E-Commerce - Thengastore",
    description: "An E-commerce website for ordering and deliverring food and other products to customers.",
    tech: ["JavaScript", "HTML", "CSS", "Weather API"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=450",
    demo: "#",
    code: "#"
  }
];

export default Projects;
