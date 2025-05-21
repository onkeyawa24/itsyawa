
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

      <div className="bg-theme-bg dark:bg-gray-800 rounded-lg p-6 border border-theme-accent/20 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-4 dark:text-white">Key Achievements</h3>
        <ul className="space-y-3">
          <li className="flex gap-2">
            <span className="text-theme-accent font-bold">•</span>
            <span className="dark:text-white">Won 1st place in Java development hackathon project (2017).</span>
          </li>
          <li className="flex gap-2">
            <span className="text-theme-accent font-bold">•</span>
            <span className="dark:text-white">1st place in Standard bank inter-campus blockchain challenge (2018)."</span>
          </li>
          <li className="flex gap-2">
            <span className="text-theme-accent font-bold">•</span>
            <span className="dark:text-white">Participated in IBM Big Data national coding competition, ranked 7th place (2018).</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormalEducationTab;
