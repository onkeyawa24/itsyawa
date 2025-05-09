
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FormalEducation {
  degree: string;
  institution: string;
  years: string;
  description?: string;
  logoPath: string;
}

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
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-theme-blue rounded-lg border border-border overflow-hidden">
          <img 
            src={education.logoPath} 
            alt={`${education.institution} logo`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
