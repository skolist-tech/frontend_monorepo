import { Label } from "@skolist/ui";
import { cn } from "@skolist/utils";

interface PromptBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export function PromptBox({ value, onChange }: PromptBoxProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="generation-prompt">Custom Instructions (Optional)</Label>
      <textarea
        id="generation-prompt"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Example: &ldquo;Make 80% Objective and 20% Subjective&rdquo;"
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2",
          "text-sm ring-offset-background placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "resize-none disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </div>
  );
}
