
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#d9f0f0] dark:bg-gray-800">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="title-highlight">My Skills</span>
          </h2>
          <p className="text-theme-light-blue mb-12 dark:text-white">Technologies I work with</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center dark:text-white">
                <span className="bg-theme-accent w-10 h-1 mr-3"></span>
                Cloud Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendSkills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center dark:text-white">
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
          
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 flex items-center dark:text-white">
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
    <Card className={`bg-[#ecfafa] border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-700 ${small ? 'p-2' : 'p-3'}`}>
      <CardContent className={`flex items-center gap-3 p-0 ${small ? 'py-2' : 'py-3'}`}>
        <div className="bg-theme-bg p-2 rounded dark:bg-gray-600">
          {icon}
        </div>
        <div>
          <h4 className="font-medium dark:text-white">{name}</h4>
          {level && <p className="text-xs text-gray-500 dark:text-gray-300">{level}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

const frontendSkills = [
  { name: "SQL & SQL Server", level: "Advance", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">S</div> },
  { name: "Power BI", level: "Advance", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">PB</div> },
  { name: "MS Power Automate", level: "Advance", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">PA</div> },
  { name: "MS Azure", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">A</div> },
  { name: "Cloud Migration", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">CM</div> },
  { name: "Cloud Networking", level: "Advanced", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">CN</div> },
  { name: "Networking", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">N</div> },
  { name: "MS Intune", level: "Advance", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">I</div> },
];

const toolsSkills = [
  { name: "Git & GitHub", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">G</div> },
  { name: "VS Code", level: "Advance", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">VS</div> },
  { name: "npm/yarn", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">N</div> },
  { name: "PowerShell", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">P</div> },
  { name: "Terminal", level: "Advance", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">T</div> },
  { name: "Power BI", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">P</div> },
  { name: "Microsoft 365", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">M</div> },
  { name: "Laravel PHP", level: "Intermediate", icon: <div className="w-8 h-8 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold">L</div> },
];

const learningSkills = [
  { name: "AWS", level: "Learning", icon: <div className="w-6 h-6 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold text-xs">A</div> },
  { name: "Data Analytics", level: "Learning", icon: <div className="w-6 h-6 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold text-xs">D</div> },
  { name: "Ethical Hacking", level: "Learning", icon: <div className="w-6 h-6 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold text-xs">EH</div> },
  { name: "Machine Learning", level: "Learning", icon: <div className="w-6 h-6 bg-theme-accent/20 rounded-full flex items-center justify-center text-theme-blue font-bold text-xs">ML</div> },
];

export default Skills;
