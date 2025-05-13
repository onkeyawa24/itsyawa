
import { Card, CardContent } from "@/components/ui/card";
import { User, Book, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white ">
      <div className="section-container   ">
        <div className="max-w-4xl mx-auto   ">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="title-highlight">About Me</span>
          </h2>
          <p className="text-theme-light-blue mb-12">Get to know my story</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-start mb-12 ">
            <div>
              <p className="text-gray-700 mb-4 ">
                I'm <strong>Onke Yawa</strong>, a passionate softaware developer with a strong foundation in computer science and a growing footprint in cloud technology and IT support. 
                I hold a Bachelor of Science in Computer Science, along with certifications in Microsoft Azure Fundamentals and Administration. 
                These qualifications have helped me build a career that connects software development, data management, and cloud infrastructure.. 
              </p>
              <p className="text-gray-700 mb-4 ">
                My experience spans web and app development, cloud migrations, and end-to-end IT support, 
                including managing Active Directory environments, automating tasks with PowerShell, 
                and creating impactful Power BI dashboards.
              </p>
              <p className="text-gray-700 ">
                Whether it's coding in PHP and JavaScript or fine-tuning SQL servers, 
                I enjoy turning complex problems into practical, scalable solutions.
              </p>
            </div>
            
            <div className="bg-theme-bg rounded-lg p-6 shadow-sm ">
              <h3 className="text-xl font-semibold mb-4 ">Quick Bio</h3>
              
              <div className="space-y-4 ">
                <div className="flex items-start gap-3 ">
                  <User className="text-theme-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-gray-600 ">
                      BSc. in Computer Science
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 ">
                  <Briefcase className="text-theme-accent mt-1 " size={20} />
                  <div>
                    <h4 className="font-medium">Experience</h4>
                    <p className="text-sm text-gray-600 ">
                      2 years in Clooud Support role specialisng in Azure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 ">
                  <Book className="text-theme-accent mt-1 " size={20} />
                  <div>
                    <h4 className="font-medium">Always Learning</h4>
                    <p className="text-sm text-gray-600 ">
                      Currently improving my skills in Data Analysis and AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {highlights.map((item, index) => (
              <Card key={index} className="border-t-4 border-t-theme-accent ">
                <CardContent className="pt-6 ">
                  <h3 className="font-bold text-lg mb-2 ">{item.title}</h3>
                  <p className="text-gray-700 ">{item.description}</p>
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
