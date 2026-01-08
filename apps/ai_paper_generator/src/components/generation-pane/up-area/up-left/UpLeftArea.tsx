/**
 * Up Left Area
 * Contains Class/Subject selectors and Concept Tree
 * Uses ConceptContext for state management
 */

import { useConceptContext } from "../../../../context/ConceptContext";
import { ClassSelector } from "./ClassSelector";
import { SubjectSelector } from "./SubjectSelector";
import { ConceptSelectorTree } from "./ConceptSelector";

export function UpLeftArea() {
  const {
    selection,
    selectClass,
    selectSubject,
    isLoadingClasses,
    isLoadingSubjects,
    isLoadingTree,
  } = useConceptContext();

  return (
    <div className="flex h-full flex-col space-y-4">
      {/* Class and Subject selectors side by side */}
      <div className="grid flex-none grid-cols-2 gap-4">
        <ClassSelector value={selection.classId ?? ""} onChange={selectClass} />
        <SubjectSelector
          value={selection.subjectId ?? ""}
          onChange={selectSubject}
          classId={selection.classId ?? ""}
        />
      </div>

      {/* Label for Concept Selection */}
      <p className="flex-none text-sm font-medium text-muted-foreground">
        Select Chapters / Topics / Concepts:
      </p>

      {/* Show loading state */}
      {(isLoadingClasses || isLoadingSubjects || isLoadingTree) && (
        <div className="flex-none text-sm text-muted-foreground">
          Loading...
        </div>
      )}

      {/* Concept Tree */}
      {selection.subjectId && (
        <div className="max-h-[600px] flex-1 overflow-y-auto rounded-md p-2">
          <ConceptSelectorTree />
        </div>
      )}
    </div>
  );
}
