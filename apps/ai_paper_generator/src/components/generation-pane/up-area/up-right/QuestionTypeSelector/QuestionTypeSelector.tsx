import { QUESTION_TYPE } from "@skolist/db";
import type { QuestionType } from "@skolist/db";
import { QuestionTypeCard } from "./QuestionTypeCard";
import { Button } from "@skolist/ui";
import {
  CheckSquare,
  FileText,
  BookOpen,
  Circle,
  Underline,
  Sparkles,
  Loader2,
} from "lucide-react";

interface QuestionTypeSelectorProps {
  questionCounts: Record<QuestionType, number>;
  onCountChange: (type: QuestionType, count: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const QUESTION_TYPES: Array<{
  type: QuestionType;
  label: string;
  icon: React.ReactNode;
}> = [
  {
    type: QUESTION_TYPE.MCQ4,
    label: "MCQ",
    icon: <CheckSquare className="h-4 w-4 text-primary" />,
  },
  {
    type: QUESTION_TYPE.SHORT_ANSWER,
    label: "Short Answer",
    icon: <FileText className="h-4 w-4 text-primary" />,
  },
  {
    type: QUESTION_TYPE.LONG_ANSWER,
    label: "Long Answer",
    icon: <BookOpen className="h-4 w-4 text-primary" />,
  },
  {
    type: QUESTION_TYPE.TRUE_OR_FALSE,
    label: "True/False",
    icon: <Circle className="h-4 w-4 text-primary" />,
  },
  {
    type: QUESTION_TYPE.FILL_IN_THE_BLANKS,
    label: "Fill in the Blanks",
    icon: <Underline className="h-4 w-4 text-primary" />,
  },
];

export function QuestionTypeSelector({
  questionCounts,
  onCountChange,
  onGenerate,
  isGenerating,
}: QuestionTypeSelectorProps) {
  const totalQuestions = Object.values(questionCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Question Types</h3>
        {totalQuestions > 0 && (
          <span className="text-xs text-muted-foreground">
            Total: {totalQuestions} questions
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {QUESTION_TYPES.map(({ type, label, icon }) => (
          <QuestionTypeCard
            key={type}
            type={type}
            label={label}
            count={questionCounts[type] || 0}
            onCountChange={(count) => onCountChange(type, count)}
            icon={icon}
          />
        ))}
      </div>

      {/* Generate Questions Button */}
      <div className="flex justify-end pt-2">
        <Button
          onClick={onGenerate}
          disabled={totalQuestions === 0 || isGenerating}
          className="gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Generate Questions
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
