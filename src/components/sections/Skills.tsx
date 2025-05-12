
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-gray-700 dark:text-white">
      <div className="section-container dark:bg-gray-800 dark:text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="title-highlight">My Skills</span>
          </h2>
          <p className="text-theme-light-blue mb-12">Technologies I work with</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 dark:bg-gray-700 dark:text-white">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-theme-accent w-10 h-1 mr-3"></span>
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendSkills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-theme-accent w-10 h-1 mr-3"></span>
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {toolsSkills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-700 dark:text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-theme-accent w-10 h-1 mr-3"></span>
              Currently Learning
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {learningSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} small />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ name, level, icon, small = false }) => {
  return (
    <Card className={`border-none shadow-sm hover:shadow-md transition-shadow ${small ? 'p-2' : 'p-3'}`}>
      <CardContent className={`flex items-center gap-3 p-0 ${small ? 'py-2' : 'py-3'}`}>
        <div className="bg-theme-bg p-2 rounded ">
          {icon}
        </div>
        <div>
          <h4 className="font-medium bg-gray-700 dark:text-white">{name}</h4>
          {level && <p className="text-xs text-gray-500 ">{level}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

const frontendSkills = [
  { name: "HTML & CSS", level: "Advanced", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">H</div> },
  { name: "JavaScript", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">JS</div> },
  { name: "React", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">R</div> },
  { name: "Tailwind CSS", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">T</div> },
  { name: "TypeScript", level: "Beginner", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">TS</div> },
  { name: "Responsive Design", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">RD</div> },
];

const toolsSkills = [
  { name: "Git & GitHub", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">G</div> },
  { name: "VS Code", level: "Advanced", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">VS</div> },
  { name: "npm/yarn", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">N</div> },
  { name: "Figma", level: "Beginner", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">F</div> },
  { name: "Terminal", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">T</div> },
  { name: "REST APIs", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">API</div> },
];

const learningSkills = [
  { name: "Node.js", level: "Learning", icon: <div className="w-6 h-6 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold text-xs">N</div> },
  { name: "Express", level: "Learning", icon: <div className="w-6 h-6 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold text-xs">E</div> },
  { name: "MongoDB", level: "Learning", icon: <div className="w-6 h-6 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold text-xs">M</div> },
  { name: "NextJS", level: "Learning", icon: <div className="w-6 h-6 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold text-xs">NX</div> },
];

export default Skills;
