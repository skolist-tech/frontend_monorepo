import { QuestionTypeSelector } from "./QuestionTypeSelector";
import {
  AutoDecideQuestion,
  type AutoDecideParams,
} from "./AutoDecideQuestion";
import type { QuestionType } from "@skolist/db";

interface UpRightAreaProps {
  questionCounts: Record<QuestionType, number>;
  onQuestionCountChange: (type: QuestionType, count: number) => void;
  onAutoDecide: (params: AutoDecideParams) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function UpRightArea({
  questionCounts,
  onQuestionCountChange,
  onAutoDecide,
  onGenerate,
  isGenerating,
}: UpRightAreaProps) {
  return (
    <div className="h-full space-y-6 overflow-y-auto pr-2">
      <AutoDecideQuestion onAutoDecide={onAutoDecide} />

      <QuestionTypeSelector
        questionCounts={questionCounts}
        onCountChange={onQuestionCountChange}
        onGenerate={onGenerate}
        isGenerating={isGenerating}
      />
    </div>
  );
}
