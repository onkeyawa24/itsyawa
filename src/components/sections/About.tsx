
import { Card, CardContent } from "@/components/ui/card";
import { User, Book, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-800 dark:text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="title-highlight">About Me</span>
          </h2>
          <p className="text-theme-light-blue mb-12">Get to know my story</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-start mb-12 dark:bg-gray-800 dark:text-white">
            <div>
              <p className="text-gray-700 mb-4 dark:bg-gray-800 dark:text-white">
                I'm a passionate <strong>Junior Web Developer</strong> with a 
                love for creating beautiful, functional websites and applications. 
                My journey in web development began with curiosity that quickly 
                turned into a passion for building things that live on the internet.
              </p>
              <p className="text-gray-700 mb-4 dark:bg-gray-800 dark:text-white">
                With a background in computer science, I bring a unique perspective 
                to development projects. I believe in writing clean, maintainable code 
                and staying on top of modern web development practices.
              </p>
              <p className="text-gray-700 dark:bg-gray-800 dark:text-white">
                Currently, I'm focused on expanding my knowledge in React, TypeScript 
                and modern JavaScript frameworks while looking for opportunities to 
                work with a collaborative team.
              </p>
            </div>
            
            <div className="bg-theme-bg rounded-lg p-6 shadow-sm dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-semibold mb-4 dark:bg-gray-800 dark:text-white">Quick Bio</h3>
              
              <div className="space-y-4 dark:bg-gray-800 dark:text-white">
                <div className="flex items-start gap-3 dark:bg-gray-800 dark:text-white">
                  <User className="text-theme-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-gray-600">
                      B.S. in Computer Science
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 dark:bg-gray-800 dark:text-white">
                  <Briefcase className="text-theme-accent mt-1 dark:bg-gray-800 dark:text-white" size={20} />
                  <div>
                    <h4 className="font-medium">Experience</h4>
                    <p className="text-sm text-gray-600">
                      Web Development Intern
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 dark:bg-gray-800 dark:text-white">
                  <Book className="text-theme-accent mt-1 dark:bg-gray-800 dark:text-white" size={20} />
                  <div>
                    <h4 className="font-medium">Always Learning</h4>
                    <p className="text-sm text-gray-600">
                      Currently improving my skills in React and TypeScript
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dark:bg-gray-800 dark:text-white">
            {highlights.map((item, index) => (
              <Card key={index} className="border-t-4 border-t-theme-accent dark:bg-gray-800 dark:text-white">
                <CardContent className="pt-6 dark:bg-gray-800 dark:text-white">
                  <h3 className="font-bold text-lg mb-2 dark:bg-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-700 dark:bg-gray-800 dark:text-white">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const highlights = [
  {
    title: "Problem Solver",
    description: "I enjoy tackling complex challenges and finding elegant solutions through code."
  },
  {
    title: "Team Player",
    description: "I thrive in collaborative environments and value open communication."
  },
  {
    title: "Continuous Learner",
    description: "I'm dedicated to improving my skills and staying up-to-date with industry trends."
  }
];

export default About;
