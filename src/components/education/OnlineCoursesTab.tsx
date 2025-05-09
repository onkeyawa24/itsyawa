
import { Card, CardContent } from "@/components/ui/card";
import { onlineCourses } from "./EducationData";

const OnlineCoursesTab = () => {
  return (
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
  );
};

export default OnlineCoursesTab;
