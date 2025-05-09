
import { Card } from "@/components/ui/card";
import FlipCard from "./FlipCard";
import { formalEducation } from "./EducationData";

const FormalEducationTab = () => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default FormalEducationTab;
