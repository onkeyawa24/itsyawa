
import { GraduationCap, Book, School } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormalEducationTab from "../education/FormalEducationTab";
import OnlineCoursesTab from "../education/OnlineCoursesTab";
import CertificatesTab from "../education/CertificatesTab";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#dcedf1] bg-gray-700 dark:text-white">
      <div className="section-container bg-gray-700 dark:text-white">
        <div className="max-w-5xl mx-auto bg-gray-700 dark:text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gray-700 dark:text-white">
            <span className="title-highlight">Education</span>
          </h2>
          <p className="text-theme-light-blue mb-12 bg-gray-700 dark:text-white">My academic background and certifications</p>

          <Tabs defaultValue="formal" className="w-full bg-gray-700 dark:text-white">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-700 dark:text-white">
              <TabsTrigger value="formal" className="flex items-center gap-2 bg-gray-700 dark:text-white">
                <GraduationCap className="h-4 w-4 bg-gray-700 dark:text-white" />
                <span className="hidden sm:inline">Formal Education</span>
                <span className="sm:hidden">Formal</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2 bg-gray-700 dark:text-white bg-gray-700 dark:text-white">
                <Book className="h-4 w-4" />
                <span className="hidden sm:inline">Online Courses</span>
                <span className="sm:hidden">Courses</span>
              </TabsTrigger>
              <TabsTrigger value="certificates" className="flex items-center gap-2 bg-gray-700 dark:text-white bg-gray-700 dark:text-white">
                <School className="h-4 w-4" bg-gray-700 dark:text-white />
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
