import { useState } from "react";
import { Input, Button } from "@skolist/ui";
import { Edit2, Check, X } from "lucide-react";
import type { GeneratedQuestion } from "@skolist/db";

interface QuestionMarksProps {
  marks: GeneratedQuestion["marks"];
  onUpdate?: (newMarks: GeneratedQuestion["marks"]) => void;
  editable?: boolean;
}

export function QuestionMarks({
  marks,
  onUpdate,
  editable = false,
}: QuestionMarksProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMarks, setEditedMarks] = useState(marks.toString());

  const handleSave = () => {
    const newMarks = parseInt(editedMarks, 10);
    if (!isNaN(newMarks) && newMarks > 0 && newMarks !== marks && onUpdate) {
      onUpdate(newMarks);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedMarks(marks.toString());
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        <Input
          type="number"
          min="1"
          value={editedMarks}
          onChange={(e) => setEditedMarks(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") handleCancel();
          }}
          className="h-7 w-16 text-xs"
          autoFocus
        />
        <Button
          size="icon"
          variant="ghost"
          onClick={handleSave}
          className="h-6 w-6"
        >
          <Check className="h-3 w-3" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleCancel}
          className="h-6 w-6"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-2">
      <span className="text-xs font-semibold">{marks} marks</span>
      {editable && onUpdate && (
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsEditing(true)}
          className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Edit2 className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}
