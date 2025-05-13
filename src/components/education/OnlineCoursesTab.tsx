
import { Card, CardContent } from "@/components/ui/card";
import { onlineCourses } from "./EducationData";

const OnlineCoursesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {onlineCourses.map((course, index) => (
        <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <h3 className="font-bold mb-1 dark:text-white">{course.title}</h3>
            <p className="text-theme-light-blue text-sm mb-3 dark:text-gray-300">{course.provider}</p>
            <div className="flex justify-between text-sm text-muted-foreground dark:text-gray-400">
              <span>{course.date}</span>
              <span>{course.duration}</span>
            </div>
            {course.skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {course.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-theme-accent/10 text-theme-blue dark:bg-theme-accent/20 dark:text-white text-xs py-1 px-2 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OnlineCoursesTab;
