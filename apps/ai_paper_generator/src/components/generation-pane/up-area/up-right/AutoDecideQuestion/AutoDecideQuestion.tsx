import { useState } from "react";
import type { HardnessLevel } from "@skolist/db";
import { HardnessLevelSliders } from "./HardnessLevelSliders";
// import { TotalInputs } from "./TotalInputs"; // Removed
import { PromptBox } from "./PromptBox";
import { AutoDecideButton } from "./AutoDecideButton";
import { Separator, Input, Label } from "@skolist/ui";

interface AutoDecideQuestionProps {
  onAutoDecide: (params: AutoDecideParams) => void;
}

export interface AutoDecideParams {
  totalQuestions: number;
  totalMarks: number;
  totalTime: number;
  hardnessLevels: Record<HardnessLevel, number>;
  customPrompt: string;
}

export function AutoDecideQuestion({ onAutoDecide }: AutoDecideQuestionProps) {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [customPrompt, setCustomPrompt] = useState("");
  const [hardnessLevels, setHardnessLevels] = useState<
    Record<HardnessLevel, number>
  >({
    easy: 40,
    medium: 40,
    hard: 20,
  });

  const handleLevelChange = (level: HardnessLevel, value: number) => {
    setHardnessLevels((prev) => ({ ...prev, [level]: value }));
  };

  const handleAutoDecide = () => {
    onAutoDecide({
      totalQuestions,
      totalMarks,
      totalTime,
      hardnessLevels,
      customPrompt,
    });
  };

  const isValid =
    totalQuestions > 0 &&
    totalMarks > 0 &&
    totalTime > 0 &&
    hardnessLevels.easy + hardnessLevels.medium + hardnessLevels.hard === 100;

  return (
    <div className="space-y-4 rounded-lg border bg-muted/30 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">
            Auto-Decide Question Distribution
          </h3>
          <p className="text-xs text-muted-foreground">
            Let AI determine the optimal distribution
          </p>
        </div>
        <AutoDecideButton
          onClick={handleAutoDecide}
          disabled={!isValid}
          className="h-8 w-auto flex-none px-4 text-xs"
        />
      </div>

      <Separator />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* Inputs Column */}
        <div className="grid grid-cols-3 gap-2 lg:col-span-5">
          <div className="space-y-1">
            <Label htmlFor="total-questions" className="text-xs">
              Questions
            </Label>
            <Input
              id="total-questions"
              type="number"
              min="1"
              max="100"
              value={totalQuestions || ""}
              onChange={(e) => setTotalQuestions(parseInt(e.target.value) || 0)}
              placeholder="0"
              className="always-show-spin-button h-8 px-2 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="total-marks" className="text-xs">
              Marks
            </Label>
            <Input
              id="total-marks"
              type="number"
              min="1"
              max="1000"
              value={totalMarks || ""}
              onChange={(e) => setTotalMarks(parseInt(e.target.value) || 0)}
              placeholder="0"
              className="always-show-spin-button h-8 px-2 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="total-time" className="text-xs">
              Mins
            </Label>
            <Input
              id="total-time"
              type="number"
              min="1"
              max="300"
              value={totalTime || ""}
              onChange={(e) => setTotalTime(parseInt(e.target.value) || 0)}
              placeholder="0"
              className="always-show-spin-button h-8 px-2 text-sm"
            />
          </div>
        </div>

        {/* Sliders Column */}
        <div className="-mt-1 lg:col-span-7">
          <HardnessLevelSliders
  levels={hardnessLevels}
  totalQuestions={totalQuestions}
  onLevelChange={handleLevelChange}
/>

        </div>
      </div>

      <PromptBox value={customPrompt} onChange={setCustomPrompt} />
    </div>
  );
}
