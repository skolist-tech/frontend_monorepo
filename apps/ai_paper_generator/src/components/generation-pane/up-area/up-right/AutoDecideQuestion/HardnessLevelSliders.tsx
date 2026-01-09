import { Label, Slider } from "@skolist/ui";
import type { HardnessLevel } from "@skolist/db";
import { cn } from "@skolist/utils";

interface HardnessLevelSlidersProps {
  levels: Record<HardnessLevel, number>;
  totalQuestions?: number; // optional safety
  onLevelChange: (level: HardnessLevel, value: number) => void;
}

export function HardnessLevelSliders({
  levels,
  totalQuestions = 0,
  onLevelChange,
}: HardnessLevelSlidersProps) {
  const total = levels.easy + levels.medium + levels.hard;
  const isValid = total === 100 || total === 0;

  // Slider positions
  const sliderValue = [levels.easy, levels.easy + levels.medium];

  // ✅ Ensure numeric + reactive
  const questions = Number(totalQuestions) || 0;

  const easyCount =
    questions > 0 ? Math.round((questions * levels.easy) / 100) : 0;
  const mediumCount =
    questions > 0 ? Math.round((questions * levels.medium) / 100) : 0;
  const hardCount =
    questions > 0 ? Math.round((questions * levels.hard) / 100) : 0;

  const handleSliderChange = (values: number[]) => {
    const [v1 = 33, v2 = 66] = values;

    onLevelChange("easy", v1);
    onLevelChange("medium", v2 - v1);
    onLevelChange("hard", 100 - v2);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Difficulty Distribution</Label>
        <span
          className={cn(
            "text-xs",
            isValid ? "text-muted-foreground" : "text-destructive"
          )}
        >
          Total: {total}%
        </span>
      </div>

      <div className="px-1 pb-2 pt-2">
        <Slider
          value={sliderValue}
          max={100}
          step={1}
          minStepsBetweenThumbs={5}
          onValueChange={handleSliderChange}
          className="w-full [&>span:first-child>span]:!bg-yellow-500 [&>span:first-child]:!bg-[linear-gradient(to_right,rgb(34,197,94)_0%,rgb(34,197,94)_var(--v1),transparent_var(--v1),transparent_var(--v2),rgb(249,115,22)_var(--v2),rgb(249,115,22)_100%)]"
          style={
            {
              "--v1": `${sliderValue[0]}%`,
              "--v2": `${sliderValue[1]}%`,
            } as React.CSSProperties
          }
        />
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full border border-green-500 bg-green-500/20" />
          <span>
            Easy ({levels.easy}% • {easyCount} questions)
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full border border-yellow-500 bg-yellow-500/20" />
          <span>
            Medium ({levels.medium}% • {mediumCount} questions)
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full border border-orange-500 bg-orange-500/20" />
          <span>
            Hard ({levels.hard}% • {hardCount} questions)
          </span>
        </div>
      </div>

      <div className="text-center text-xs italic text-muted-foreground">
        Drag the sliders to adjust the distribution
      </div>
    </div>
  );
}
