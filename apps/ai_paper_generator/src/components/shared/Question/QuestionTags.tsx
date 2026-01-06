import { Badge } from "@skolist/ui";
import type { GeneratedQuestion, HardnessLevel } from "@skolist/db";

interface QuestionTagsProps {
  concepts: string[];
  hardness: GeneratedQuestion["hardness_level"] | null;
  showHardness?: boolean;
}

const hardnessColors: Record<HardnessLevel, string> = {
  easy: "bg-green-100 text-green-700 hover:bg-green-100",
  medium: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  hard: "bg-orange-100 text-orange-700 hover:bg-orange-100",
};

export function QuestionTags({
  concepts,
  hardness,
  showHardness = true,
}: QuestionTagsProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {showHardness && hardness && (
        <Badge variant="secondary" className={hardnessColors[hardness]}>
          {hardness}
        </Badge>
      )}
      {concepts.map((concept, index) => (
        <Badge key={index} variant="outline" className="text-xs">
          {concept}
        </Badge>
      ))}
    </div>
  );
}
