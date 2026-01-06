import { Label } from "@skolist/ui";
import { cn } from "@skolist/utils";
import { useConceptContext } from "../../../../context/ConceptContext";

interface ClassSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function ClassSelector({ value, onChange }: ClassSelectorProps) {
  const { classes, isLoadingClasses, selectClass } = useConceptContext();

  const handleChange = (classId: string) => {
    selectClass(classId);
    onChange(classId);
  };

  return (
    <div className="space-y-2">
      <Label>Class</Label>
      <select
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={isLoadingClasses}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2",
          "text-sm ring-offset-background",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        <option value="">
          {isLoadingClasses ? "Loading classes..." : "Select class"}
        </option>
        {classes.map((cls) => (
          <option key={cls.id} value={cls.id}>
            {cls.name}
          </option>
        ))}
      </select>
    </div>
  );
}
