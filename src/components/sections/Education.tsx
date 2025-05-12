
import { GraduationCap, Book, School } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormalEducationTab from "../education/FormalEducationTab";
import OnlineCoursesTab from "../education/OnlineCoursesTab";
import CertificatesTab from "../education/CertificatesTab";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#dcedf1]  ">
      <div className="section-container  ">
        <div className="max-w-5xl mx-auto  ">
          <h2 className="text-3xl md:text-4xl font-bold mb-2  ">
            <span className="title-highlight">Education</span>
          </h2>
          <p className="text-theme-light-blue mb-12  ">My academic background and certifications</p>

          <Tabs defaultValue="formal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8  ">
              <TabsTrigger value="formal" className="flex items-center gap-2  ">
                <GraduationCap className="h-4 w-4  " />
                <span className="hidden sm:inline">Formal Education</span>
                <span className="sm:hidden">Formal</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2    ">
                <Book className="h-4 w-4" />
                <span className="hidden sm:inline">Online Courses</span>
                <span className="sm:hidden">Courses</span>
              </TabsTrigger>
              <TabsTrigger value="certificates" className="flex items-center gap-2    ">
                <School className="h-4 w-4"   />
                <span className="hidden sm:inline">Certifications</span>
                <span className="sm:hidden">Certs</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="formal">
              <FormalEducationTab />
            </TabsContent>
            
            <TabsContent value="courses">
              <OnlineCoursesTab />
            </TabsContent>

            <TabsContent value="certificates">
              <CertificatesTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Education;
