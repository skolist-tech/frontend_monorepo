/**
 * Up Area - Contains class, subject selectors and concept tree
 * Uses ConceptContext for state management
 */

import { useState } from "react";
import { UpLeftArea } from "./up-left";
import { UpRightArea } from "./up-right";
import type { QuestionType } from "@skolist/db";
import type { AutoDecideParams } from "./up-right/AutoDecideQuestion";

export function UpArea() {
  const [questionCounts, setQuestionCounts] = useState<
    Record<QuestionType, number>
  >({
    mcq4: 1,
    msq4: 1,
    short_answer: 1,
    long_answer: 1,
    true_or_false: 1,
    fill_in_the_blanks: 1,
  });

  const handleQuestionCountChange = (type: QuestionType, count: number) => {
    setQuestionCounts((prev) => ({
      ...prev,
      [type]: count,
    }));
  };

  const handleAutoDecide = (params: AutoDecideParams) => {
    console.log("Auto decide params:", params);
    // TODO: Implement actual auto-decide logic or API call
  };

  return (
    <div className="flex flex-col p-6">
      <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-xl border bg-card p-6 shadow-sm lg:grid-cols-2">
        {/* Left Column: Selectors */}
        <div className="h-full overflow-hidden">
          <UpLeftArea />
        </div>

        {/* Right Column: Auto-Decide & Question Types */}
        <div className="h-full overflow-hidden">
          <UpRightArea
            questionCounts={questionCounts}
            onQuestionCountChange={handleQuestionCountChange}
            onAutoDecide={handleAutoDecide}
          />
        </div>
      </div>
    </div>
  );
}
