
import { GraduationCap, Book, School } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="title-highlight">Education</span>
          </h2>
          <p className="text-theme-light-blue mb-12">My academic background and certifications</p>

          <Tabs defaultValue="formal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="formal" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Formal Education</span>
                <span className="sm:hidden">Formal</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                <span className="hidden sm:inline">Online Courses</span>
                <span className="sm:hidden">Courses</span>
              </TabsTrigger>
              <TabsTrigger value="certificates" className="flex items-center gap-2">
                <School className="h-4 w-4" />
                <span className="hidden sm:inline">Certifications</span>
                <span className="sm:hidden">Certs</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="formal" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formalEducation.map((edu, index) => (
                  <FlipCard key={index} education={edu} />
                ))}
              </div>

              <div className="bg-theme-bg rounded-lg p-6 border border-theme-accent/20">
                <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-theme-accent font-bold">•</span>
                    <span>Dean's List for Academic Excellence (3 consecutive semesters)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-theme-accent font-bold">•</span>
                    <span>Best Final Year Project Award for "Web Application Framework Development"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-theme-accent font-bold">•</span>
                    <span>Participated in national coding competition, ranked in top 10%</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="courses" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {onlineCourses.map((course, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-1">{course.title}</h3>
                      <p className="text-theme-light-blue text-sm mb-3">{course.provider}</p>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{course.date}</span>
                        <span>{course.duration}</span>
                      </div>
                      {course.skills && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {course.skills.map((skill, idx) => (
                            <span key={idx} className="bg-theme-accent/10 text-theme-blue text-xs py-1 px-2 rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {certificates.map((cert, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className="bg-theme-blue text-white p-6 sm:w-1/4 flex items-center justify-center">
                          <div className="text-center">
                            <p className="font-bold">{cert.issued}</p>
                            <p className="text-xs text-theme-accent">{cert.expires ? `Expires: ${cert.expires}` : 'No Expiration'}</p>
                          </div>
                        </div>
                        <div className="p-6 sm:w-3/4">
                          <h3 className="font-bold mb-1">{cert.name}</h3>
                          <p className="text-theme-light-blue text-sm mb-3">{cert.organization}</p>
                          <p className="text-sm text-muted-foreground">{cert.description}</p>
                          {cert.credentialId && (
                            <p className="mt-2 text-xs">
                              <span className="font-medium">Credential ID:</span> {cert.credentialId}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

// FlipCard component for the education blocks
const FlipCard = ({ education }: { education: FormalEducation }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-64 perspective-1000 cursor-pointer" 
      onClick={() => setIsFlipped(!isFlipped)}
      aria-label={`${education.degree} from ${education.institution}`}
    >
      <div 
        className={cn(
          "relative w-full h-full transition-all duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg border border-border p-6 flex flex-col">
          <div className="bg-theme-blue/10 text-theme-blue rounded-md px-3 py-1.5 text-sm self-start mb-4">
            {education.years}
          </div>
          <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
          <p className="text-theme-light-blue">{education.institution}</p>
          
          {education.description && (
            <p className="text-sm text-muted-foreground mt-3">
              {education.description}
            </p>
          )}
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-theme-blue rounded-lg border border-border p-6 flex flex-col items-center justify-center">
          <div className="w-full aspect-w-16 aspect-h-9 max-w-[200px] mx-auto">
            <AspectRatio ratio={16/9} className="bg-white/20 rounded-md p-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/bba7a136-00b2-4a18-aa8c-256de63dffdc.png" 
                alt={`${education.institution} logo`} 
                className="object-contain max-h-full"
              />
            </AspectRatio>
          </div>
          <h4 className="text-white text-lg font-semibold mt-4">{education.institution}</h4>
        </div>
      </div>
    </div>
  );
};

// Types definition
interface FormalEducation {
  degree: string;
  institution: string;
  years: string;
  description?: string;
}

// Sample data for the formal education
const formalEducation: FormalEducation[] = [
  {
    degree: "BSc Computer Science",
    institution: "Walter Sisulu University",
    years: "2016 - 2019",
    description: "Specialized in web development and artificial intelligence."
  },
  {
    degree: "National Senior Certificate",
    institution: "Manzomthombo Secondary School",
    years: "2010 - 2012",
    description: "Advanced Mathematics and Computer Science program."
  }
];

// Sample data for the courses and certificates
const onlineCourses = [
  {
    title: "Advanced React & Redux",
    provider: "Udemy",
    date: "Dec 2022",
    duration: "20 hours",
    skills: ["React", "Redux", "Context API"]
  },
  {
    title: "TypeScript Masterclass",
    provider: "Frontend Masters",
    date: "Mar 2023",
    duration: "12 hours",
    skills: ["TypeScript", "Generics", "Type Guards"]
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    date: "Jun 2022",
    duration: "30 hours",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid"]
  },
  {
    title: "Full Stack JavaScript",
    provider: "The Odin Project",
    date: "Aug 2022",
    duration: "80 hours",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB"]
  }
];

const certificates = [
  {
    name: "AWS Certified Developer - Associate",
    organization: "Amazon Web Services",
    issued: "Jan 2023",
    expires: "Jan 2026",
    credentialId: "AWS-DEV-123456",
    description: "Validates technical expertise in developing and maintaining AWS-based applications."
  },
  {
    name: "Professional Frontend Developer",
    organization: "Meta (formerly Facebook)",
    issued: "Nov 2022",
    expires: null,
    credentialId: "FB-FED-789012",
    description: "Comprehensive certification covering React, responsive design principles, and frontend optimization techniques."
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    issued: "May 2022",
    expires: null,
    description: "Covers basic to advanced JavaScript concepts including ES6, regular expressions, debugging, data structures and OOP."
  }
];

export default Education;
