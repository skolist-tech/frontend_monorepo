import { Label } from "@skolist/ui";
import { cn } from "@skolist/utils";
import { useConceptContext } from "../../../../context/ConceptContext";

interface SubjectSelectorProps {
  value: string;
  onChange: (value: string) => void;
  classId?: string;
  disabled?: boolean;
}

export function SubjectSelector({
  value,
  onChange,
  classId,
  disabled,
}: SubjectSelectorProps) {
  const { subjects, isLoadingSubjects, selectSubject } = useConceptContext();

  const isDisabled = disabled || !classId || isLoadingSubjects;

  const handleChange = (subjectId: string) => {
    selectSubject(subjectId);
    onChange(subjectId);
  };

  return (
    <div className="space-y-2">
      <Label>Subject</Label>
      <select
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={isDisabled}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2",
          "text-sm ring-offset-background",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        <option value="">
          {!classId
            ? "Select class first"
            : isLoadingSubjects
              ? "Loading subjects..."
              : subjects.length === 0
                ? "No subjects available"
                : "Select subject"}
        </option>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.name}
          </option>
        ))}
      </select>
    </div>
  );
}
